import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imageDir = path.join(__dirname, '../public/images');
const sizes = [480, 768, 1280, 1920];
const formats = ['webp', 'jpeg'];

async function optimizeImages() {
  const isGeneratedVariant = (file) => /-\d+w\.(webp|jpeg)$/i.test(file) || /\.webp$/i.test(file);

  const walkDir = async (dir) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        await walkDir(filePath);
      } else if (/\.(png|jpg|jpeg)$/i.test(file) && !isGeneratedVariant(file)) {
        await optimizeImage(filePath);
      }
    }
  };

  const optimizeImage = async (filePath) => {
    const filename = path.parse(filePath).name;
    const dirname = path.dirname(filePath);

    try {
      const originalSize = fs.statSync(filePath).size;
      const { width: sourceWidth } = await sharp(filePath).metadata();
      const outputWidths = [...new Set(sizes.map((size) => Math.min(size, sourceWidth)))];
      const expectedWidth = new Set(outputWidths);

      for (const file of fs.readdirSync(dirname)) {
        const match = file.match(new RegExp(`^${filename}-(\\d+)w\\.(webp|jpeg)$`, 'i'));
        if (match && !expectedWidth.has(Number(match[1]))) {
          fs.unlinkSync(path.join(dirname, file));
        }
      }

      for (const format of formats) {
        for (const size of outputWidths) {
          const outputName = `${filename}-${size}w.${format}`;
          const outputPath = path.join(dirname, outputName);

          const quality = size <= 768 ? 75 : 80;

          const pipeline = sharp(filePath).resize(size, null, { withoutEnlargement: true });
          if (format === 'webp') {
            await pipeline.webp({ quality, alphaQuality: 80 }).toFile(outputPath);
          } else {
            await pipeline.jpeg({ quality, progressive: true }).toFile(outputPath);
          }

          const optimizedSize = fs.statSync(outputPath).size;
          const saved = ((1 - optimizedSize / originalSize) * 100).toFixed(2);
          console.log(`✓ ${outputName} (${(optimizedSize / 1024).toFixed(2)}KB, saved ${saved}%)`);
        }
      }

      const webpPath = path.join(dirname, `${filename}.webp`);
      await sharp(filePath)
        .webp({ quality: 80, alphaQuality: 80 })
        .toFile(webpPath);

      const webpSize = fs.statSync(webpPath).size;
      const webpSaved = ((1 - webpSize / originalSize) * 100).toFixed(2);
      console.log(`✓ ${filename}.webp (${(webpSize / 1024).toFixed(2)}KB, saved ${webpSaved}%)`);

      console.log(`Original: ${filePath} (${(originalSize / 1024).toFixed(2)}KB)\n`);
    } catch (err) {
      console.error(`Error optimizing ${filePath}:`, err.message);
    }
  };

  console.log('Starting image optimization...\n');
  await walkDir(imageDir);
  console.log('Image optimization complete!');
}

optimizeImages().catch(console.error);
