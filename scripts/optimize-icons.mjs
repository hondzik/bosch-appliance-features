import fs from 'fs';
import path from 'path';
import { optimize } from 'svgo';

import SVGPathCommander from "svg-path-commander";

// Cesty
const iconsDir = path.resolve('./src/assets/icons/');

// Rekurzivní nalezení všech SVG souborů (zachovává podsložky, např. dishwasher/, oven/)
function findSvgFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return findSvgFiles(entryPath);
    }
    return entry.name.endsWith('.svg') ? [entryPath] : [];
  });
}

const files = findSvgFiles(iconsDir).map(f => path.relative(iconsDir, f));

// Emitted as src/generated/icons.ts, so the SVGs end up inside the bundle instead of being
// fetched at runtime. HACS plugin installs only ever deliver the single file named in
// hacs.json's `filename` — nested subdirectories never reach www/community/<repo>/, with or
// without release assets, so a runtime fetch of icons/<appliance>/<feature>/<name>.svg cannot
// be relied on; there is therefore no dist/icons/ output either, only this inlined map. Keyed
// exactly like the catalogs' `icon` values after withIconPrefix() (e.g. 'dishwasher/programs/eco_50').
const inlineIcons = new Map();

files.forEach(file => {
  const filePath = path.join(iconsDir, file);
  let svgData = fs.readFileSync(filePath, 'utf8');

    // Odstraní self-closing tagy sodipodi:... a inkscape:...
    svgData = svgData
        .replace(/<sodipodi:[^>]+\/>/g, '')
        .replace(/<inkscape:[^>]+\/>/g, '')
        // Odstraní otevírací/zavírací tagy s obsahem
        .replace(/<sodipodi:[^>]*>[\s\S]*?<\/sodipodi:[^>]*>/g, '')
        .replace(/<inkscape:[^>]*>[\s\S]*?<\/inkscape:[^>]*>/g, '')
        // Odstraní zbylé atributy a xmlns
        .replace(/\s(?:inkscape|sodipodi):[^\s=]+="[^"]*"/g, '')
        .replace(/\sxmlns:(?:inkscape|sodipodi)="[^"]*"/g, '');

    // Optimalizace přes SVGO
    const result = optimize(svgData, {
        multipass: true,
        js2svg: {pretty: true,    // ← toto zajistí formátování s odsazením
            indent: 2        // počet mezer pro odsazení
        },
        plugins: [
            // Základní optimalizace
            "cleanupAttrs",
            "cleanupEnableBackground",
            "cleanupNumericValues",
            "collapseGroups",
            "convertColors",
            "convertPathData",
            "convertShapeToPath",
            "convertStyleToAttrs",
            "convertTransform",
            "mergePaths",
            "removeComments",
            "removeDesc",
            "removeDoctype",
            "removeEmptyAttrs",
            "removeEmptyContainers",
            "removeEmptyText",
            "removeHiddenElems",
            "removeMetadata",
            "removeNonInheritableGroupAttrs",
            "removeRasterImages",
            "removeUselessStrokeAndFill",
            "removeTitle",
            // defaultAttrs: false — jinak SVGO odstraní fill="#000000" jako "shodné s výchozí
            // hodnotou" (černá je SVG default), a runtime záměna #000 → currentColor (getInlineSVG
            // v boschIcon.ts) pak nemá co nahradit, takže ikony bez explicitního stroke (jen fill,
            // např. auto.svg) zůstanou natvrdo černé místo obarvení podle motivu.
            { name: "removeUnknownsAndDefaults", params: { defaultAttrs: false } },
            "removeUselessDefs",
            "removeXMLProcInst",

            // 🔧 Vlastní úpravy
            {
                name: "removeAttrs",
                params: {
                    attrs: ["id", "inkscape", "sodipodi", "xmlns:inkscape", "xmlns:sodipodi", "font-size", "font-family", "letter-spacing", "font-weight", "aria-label", "style"]
                }
            },
            {
                name: "addAttributesToSVGElement",
                params: {
                    attributes: [
                        { viewBox: "0 0 24 24" },
                        // { stroke: "currentColor" }
                    ]
                }
            },
        ],
    });

    // Jednoduchý regex pro vyhledání path s transform
    const pathRegex = /<path([^>]*) d="([^"]+)"([^>]*) transform="([^"]+)"([^>]*)>/g;

    // Note: kept unused deliberately — see the dead-code note in CLAUDE.md's "Icons pipeline"
    // section. Wiring this in would change how existing icons render and needs visual re-check.
    const flattened = result.data
        .replace(pathRegex, (match, before, d, middle, transform, after) => {
            const pathInstance = new SVGPathCommander(d, { round: 3 });
            pathInstance.transform(transform); // aplikuje transformaci
            const newD = pathInstance.toString();
            return `<path${before} d="${newD}"${middle}${after}>`; // odstraníme transform
        }
    );

    // Bundle variant: same SVG, but whitespace between tags collapsed (these icons are path-only,
    // so there are no text nodes where it would matter), #000 rewritten to currentColor, and CRLF
    // normalized to LF (source SVGs exported from Inkscape on Windows have CRLF).
    const key = file.split(path.sep).join('/').replace(/\.svg$/, '');
    inlineIcons.set(
        key,
        result.data
            .replace(/\r\n/g, '\n')
            .replace(/>\s+</g, '><')
            .replace(/#000000|#000/g, 'currentColor')
            .trim(),
    );

    console.log(`✅ Optimized: ${file}`);
});

// Written before rollup runs (see the `build` script) so the bundle picks up the current icons.
const generatedDir = path.resolve('./src/generated/');
const generatedFile = path.join(generatedDir, 'icons.ts');
const generatedBody = [...inlineIcons.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, svg]) => `  ${JSON.stringify(key)}: ${JSON.stringify(svg)},`)
    .join('\n');

fs.mkdirSync(generatedDir, { recursive: true });
fs.writeFileSync(
    generatedFile,
    [
        '// GENERATED by scripts/optimize-icons.mjs from src/assets/icons/ — do not edit by hand.',
        '// Run `npm run build` (or `npm run optimize-icons`) to regenerate.',
        '',
        'export const BOSCH_ICONS: Record<string, string> = {',
        generatedBody,
        '};',
        '',
    ].join('\n'),
    'utf8',
);

const generatedBytes = fs.statSync(generatedFile).size;
console.log(`✅ --- All ${files.length} icons processed!`);
console.log(`✅ Inlined ${inlineIcons.size} icons into src/generated/icons.ts (${generatedBytes} B)`);
