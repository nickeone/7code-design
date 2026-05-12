/**
 * Verifies that every HTML file's three hreflang alternate tags
 * match the page's own <link rel="canonical"> URL.
 *
 * Usage:  node scripts/check-hreflang.mjs
 */

import { readFile } from "node:fs/promises";
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

let failures = 0;
let checked = 0;

for await (const file of walkHtml(ROOT)) {
  const content = await readFile(file, "utf8");

  const canonicalMatch = content.match(/<link rel="canonical" href="([^"]+)"/);
  if (!canonicalMatch) continue;

  const canonical = canonicalMatch[1];
  const rel = file.replace(ROOT + "/", "");

  const hreflangMatches = [...content.matchAll(/<link rel="alternate" hreflang="[^"]+" href="([^"]+)"/g)];

  for (const m of hreflangMatches) {
    if (m[1] !== canonical) {
      console.error(`  FAIL  ${rel}  hreflang="${m[1]}"  expected="${canonical}"`);
      failures++;
    }
  }

  checked++;
}

if (failures > 0) {
  console.error(`\n${failures} hreflang mismatch(es) found across ${checked} pages.`);
  process.exit(1);
} else {
  console.log(`check-hreflang: all ${checked} pages clean ✓`);
}
