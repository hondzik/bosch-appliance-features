import fs from 'fs';
import path from 'path';
import { optimize } from 'svgo';

import SVGPathCommander from "svg-path-commander";

// Cesty
const iconsDir = path.resolve('./src/assets/icons/');
const outputDir = path.resolve('./dist/icons/');

// Vytvoření výstupní složky
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Načtení všech SVG souborů
const files = fs.readdirSync(iconsDir).filter(f => f.endsWith('.svg'));

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
            "removeUnknownsAndDefaults",
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
    fs.writeFileSync(outputPath, flattened, 'utf8');
    console.log(`✅ Optimized: ${file}`);
});

console.log(`✅ --- All ${files.length} icons processed!`);
