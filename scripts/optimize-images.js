const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, '../public/images');
const sizes = [1920, 1280, 768, 480];
const formats = ['webp', 'jpeg'];

async function optimizeImages() {
  const walkDir = (dir) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
        optimizeImage(filePath);
      }
    });
  };

  const optimizeImage = async (filePath) => {
    const filename = path.parse(filePath).name;
    const dirname = path.dirname(filePath);
    const ext = path.extname(filePath);

    try {
      const originalSize = fs.statSync(filePath).size;

      for (const format of formats) {
        // Optimize for different sizes
        for (const size of sizes) {
          const outputName = `${filename}-${size}w.${format}`;
          const outputPath = path.join(dirname, outputName);

          const quality = size <= 768 ? 75 : 80;

          await sharp(filePath)
            .resize(size, null, { withoutEnlargement: true })
            [format]({ quality, progressive: true })
            .toFile(outputPath);

          const optimizedSize = fs.statSync(outputPath).size;
          const saved = ((1 - optimizedSize / originalSize) * 100).toFixed(2);
          console.log(`✓ ${outputName} (${(optimizedSize / 1024).toFixed(2)}KB, saved ${saved}%)`);
        }
      }

      // Create WebP version at original size with aggressive compression
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
  walkDir(imageDir);
  console.log('Image optimization complete!');
}

optimizeImages().catch(console.error);
