// Converts PNG/JPG images in project/uploads and project/assets to WebP.
// Skips files that already have a .webp counterpart.
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const DIRS = [
  path.join(ROOT, "project/uploads"),
  path.join(ROOT, "project/assets"),
];

const EXT = new Set([".png", ".jpg", ".jpeg"]);

let converted = 0;
let skipped = 0;
let totalSavedBytes = 0;

for (const dir of DIRS) {
  const files = fs.readdirSync(dir, { recursive: false });
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!EXT.has(ext)) continue;

    const srcPath = path.join(dir, file);
    const stat = fs.statSync(srcPath);
    if (stat.isDirectory()) continue;

    const baseName = path.basename(file, ext);
    const webpPath = path.join(dir, baseName + ".webp");

    if (fs.existsSync(webpPath)) {
      skipped++;
      continue;
    }

    try {
      await sharp(srcPath)
        .webp({ quality: 82, effort: 4 })
        .toFile(webpPath);

      const originalSize = stat.size;
      const newSize = fs.statSync(webpPath).size;
      const saved = originalSize - newSize;
      totalSavedBytes += saved;
      converted++;
      console.log(
        `  ✓ ${file} → ${baseName}.webp  (${kb(originalSize)} → ${kb(newSize)}, -${kb(saved)})`
      );
    } catch (err) {
      console.error(`  ✗ ${file}: ${err.message}`);
    }
  }
}

function kb(bytes) {
  return Math.round(bytes / 1024) + "kB";
}

console.log(`\nConverted ${converted} images, skipped ${skipped} already-webp.`);
console.log(`Total bytes saved: ${kb(totalSavedBytes)}`);
