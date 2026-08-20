import fs from 'fs';
import path from 'path';
import { optimize } from 'svgo';

import SVGPathCommander from "svg-path-commander";

// Cesty
const iconsDir = path.resolve('./src/assets/icons/');
const outputDir = path.resolve('./dist/icons/');

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

    const flattened = result.data
        .replace(pathRegex, (match, before, d, middle, transform, after) => {
            const pathInstance = new SVGPathCommander(d, { round: 3 });
            pathInstance.transform(transform); // aplikuje transformaci
            const newD = pathInstance.toString();
            return `<path${before} d="${newD}"${middle}${after}>`; // odstraníme transform
        }
    );

    const outputPath = path.join(outputDir, file);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    // Normalizace na LF — zdrojové SVG (např. exportované z Inkscape na Windows) mívají CRLF,
    // což se bez normalizace propíše i do výstupu a soubory pak mají v gitu i po nasazení na
    // HA nekonzistentní konce řádků oproti čistě LF bundlovanému JS.
    fs.writeFileSync(outputPath, result.data.replace(/\r\n/g, '\n'), 'utf8');
    console.log(`✅ Optimized: ${file}`);
});

console.log(`✅ --- All ${files.length} icons processed!`);
