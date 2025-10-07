import fs from 'fs';
import path from 'path';
import { optimize } from 'svgo';

const iconsDir = path.resolve('./src/assets/icons/');
const outputDir = path.resolve('./dist/icons/');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(iconsDir).filter(f => f.endsWith('.svg'));

files.forEach(file => {
  const filePath = path.join(iconsDir, file);
  const svgData = fs.readFileSync(filePath, 'utf8');

  const result = optimize(svgData, {
    multipass: true,
    plugins: [
      'removeDoctype',
      'removeComments',
      'removeMetadata',
      'removeEditorsNSData',
      'removeTitle',
      'removeDesc',
      'removeUselessDefs',
      'cleanupAttrs',
      'convertStyleToAttrs',
      'removeDimensions',
      {
        name: 'removeAttrs',
        params: {
          attrs: [
            'inkscape:*',
            'sodipodi:*'
          ]
        }
      }
    ]
  });

  const outputPath = path.join(outputDir, file);
  fs.writeFileSync(outputPath, result.data, 'utf8');
  console.log(`✅ Optimized: ${file}`);
});

console.log(`✅ --- All ${files.length} icons processed!`);
