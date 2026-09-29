import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '../public');
const manifestPath = path.join(__dirname, '../src/imageVariants.json');

async function run() {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  const keys = Object.keys(manifest);

  for (const key of keys) {
    const sourcePath = ['.png', '.jpg', '.jpeg']
      .map((ext) => path.join(publicDir, `${key}${ext}`))
      .find((p) => fs.existsSync(p));

    if (!sourcePath) {
      console.warn(`No source file found for ${key}, skipping`);
      continue;
    }

    const { width, height } = await sharp(sourcePath).metadata();
    const sourceName = path.parse(sourcePath).name;
    const sourceDir = path.dirname(sourcePath);
    const generatedWidths = (format) => fs.readdirSync(sourceDir)
      .map((name) => name.match(new RegExp(`^${sourceName}-(\\d+)w\\.${format}$`, 'i')))
      .filter(Boolean)
      .map((match) => Number(match[1]))
      .filter((variantWidth) => variantWidth <= width)
      .sort((a, b) => a - b);

    manifest[key] = {
      ...manifest[key],
      width,
      height,
      webp: generatedWidths('webp'),
      jpeg: generatedWidths('jpeg'),
    };
    console.log(`${key}: ${width}x${height}`);
  }

  fs.writeFileSync(manifestPath, JSON.stringify(manifest));
  console.log('\nDimensions written to imageVariants.json');
}

run().catch(console.error);
