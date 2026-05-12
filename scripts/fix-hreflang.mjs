/**
 * Reads each HTML file's <link rel="canonical"> and sets all three
 * hreflang alternate hrefs to that same canonical URL.
 *
 * Usage:  node scripts/fix-hreflang.mjs
 */

import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

async function* walkHtml(dir) {
  const { readdir } = await import("node:fs/promises");
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name.startsWith(".") || e.name === "node_modules" || e.name === "project") continue;
    const full = join(dir, e.name);
    if (e.isDirectory()) yield* walkHtml(full);
    else if (e.name.endsWith(".html")) yield full;
  }
}

let fixed = 0;
let skipped = 0;

for await (const file of walkHtml(ROOT)) {
  const content = await readFile(file, "utf8");

  const canonicalMatch = content.match(/<link rel="canonical" href="([^"]+)"/);
  if (!canonicalMatch) {
    console.warn(`  SKIP  ${file.replace(ROOT + "/", "")}  (no canonical found)`);
    skipped++;
    continue;
  }

  const canonical = canonicalMatch[1];

  const updated = content
    .replace(
      /(<link rel="alternate" hreflang="en" href=")[^"]*(")/,
      `$1${canonical}$2`,
    )
    .replace(
      /(<link rel="alternate" hreflang="en-gb" href=")[^"]*(")/,
      `$1${canonical}$2`,
    )
    .replace(
      /(<link rel="alternate" hreflang="x-default" href=")[^"]*(")/,
      `$1${canonical}$2`,
    );

  if (updated !== content) {
    await writeFile(file, updated, "utf8");
    console.log(`  FIXED  ${file.replace(ROOT + "/", "")}  → ${canonical}`);
    fixed++;
  } else {
    skipped++;
  }
}

console.log(`\n${fixed} file(s) updated, ${skipped} already correct / skipped.`);
