/**
 * Scans all HTML files for double-encoded UTF-8 mojibake sequences.
 * Exits 1 if any are found so the build fails fast.
 *
 * Usage:  node scripts/check-encoding.mjs
 */

import { readFile } from "node:fs/promises";
import { glob } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

// Double-encoded UTF-8 patterns (UTF-8 bytes read as Latin-1, then re-encoded)
const BAD_SEQUENCES = [
  { bytes: Buffer.from([0xc3, 0xa2, 0xc2, 0x80, 0xc2, 0x94]), label: "em-dash â→—" },
  { bytes: Buffer.from([0xc3, 0xa2, 0xc2, 0x80, 0xc2, 0x93]), label: "en-dash â→–" },
  { bytes: Buffer.from([0xc3, 0xa2, 0xc2, 0x82, 0xc2, 0xac]), label: "euro â¬→€" },
  { bytes: Buffer.from([0xc3, 0xa2, 0xc2, 0x80, 0xc2, 0xa6]), label: "ellipsis â¦→…" },
  { bytes: Buffer.from([0xc3, 0xa2, 0xc2, 0x80, 0xc2, 0x9c]), label: "left-quote â→\"" },
  { bytes: Buffer.from([0xc3, 0xa2, 0xc2, 0x80, 0xc2, 0x9d]), label: "right-quote â→\"" },
  { bytes: Buffer.from([0xc3, 0xa2, 0xc2, 0x80, 0xc2, 0x99]), label: "apostrophe â→'" },
];

async function* walkHtml(dir) {
  const entries = await (await import("node:fs/promises")).readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name.startsWith(".") || e.name === "node_modules") continue;
    const full = join(dir, e.name);
    if (e.isDirectory()) yield* walkHtml(full);
    else if (e.name.endsWith(".html")) yield full;
  }
}

let failures = 0;
for await (const file of walkHtml(ROOT)) {
  const data = await readFile(file);
  for (const { bytes, label } of BAD_SEQUENCES) {
    if (data.includes(bytes)) {
      console.error(`  FAIL  ${file.replace(ROOT + "/", "")}  [${label}]`);
      failures++;
    }
  }
}

if (failures > 0) {
  console.error(`\n${failures} encoding error(s) found. Run the fix script or correct the file manually.`);
  process.exit(1);
} else {
  console.log("check-encoding: all HTML files clean ✓");
}
