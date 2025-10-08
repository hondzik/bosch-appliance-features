import fs from 'fs';
import path from 'path';
import { optimize } from 'svgo';

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
  .replace(/\sxmlns:(?:inkscape|sodipodi)="[^"]*"/g, '')

  // Optimalizace přes SVGO
  const result = optimize(svgData, {
    multipass: true,
    js2svg: {pretty: true,    // ← toto zajistí formátování s odsazením
      indent: 2        // počet mezer pro odsazení
    },
    plugins: [
      // Základní optimalizace
      "cleanupAttrs",
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeTitle",
      "removeDesc",
      "removeUselessDefs",
      "removeEmptyAttrs",
      "removeHiddenElems",
      "removeEmptyText",
      "removeEmptyContainers",
      "cleanupEnableBackground",
      "convertStyleToAttrs",
      "convertColors",
      "convertPathData",
      "convertTransform",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "cleanupNumericValues",
      "collapseGroups",
      "removeRasterImages",
      "mergePaths",
      "convertShapeToPath",
      "convertTransform",
      // 🔧 Vlastní úpravy
      {
        name: "removeAttrs",
        params: {
          attrs: ["id", "inkscape", "sodipodi", "xmlns:inkscape", "xmlns:sodipodi", "font-size", "font-family", "letter-spacing", "font-weight", "aria-label", "style"] // odstraní specifické atributy
        }
      },
      {
        name: "addAttributesToSVGElement",
        params: {
          attributes: [
            { viewBox: "0 0 24 24" },     // doplní viewBox pokud chybí
            { stroke: "currentColor" },   // sjednotí barvu tahu
            { fill: "none" }              // odstran9 fill
          ]
        }
      },
    ],
  });

  const outputPath = path.join(outputDir, file);
  fs.writeFileSync(outputPath, result.data.replace(/(<path\b[^>]*?)\s+(stroke|fill)="[^"]*"/g, '$1').replace(/(<g\b[^>]*?)\s+(stroke|fill)="[^"]*"/g, '$1'), 'utf8');
  console.log(`✅ Optimized: ${file}`);
});

console.log(`✅ --- All ${files.length} icons processed!`);
