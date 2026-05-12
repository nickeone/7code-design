/**
 * check-duplicate-schema.mjs
 *
 * Parses every .html file in the repo and fails if any page has more than one
 * <script type="application/ld+json"> block that declares the same @type at the
 * TOP level (i.e. root of a block, or a direct item in an @graph array).
 *
 * Nested types (e.g. Service items inside hasOfferCatalog, or Question inside
 * FAQPage) are not counted — only the outermost @type of each entity matters.
 *
 * Allowlist: BreadcrumbList and Person are exempt — multiple persons on an About
 * page (e.g. founders) is valid Schema.org and must not be flagged.
 *
 * Usage: node scripts/check-duplicate-schema.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// @type values that may appear more than once on a page without triggering an error.
const ALLOWLIST = new Set(["BreadcrumbList", "Person"]);

function collectHtmlFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith(".") && entry.name !== "node_modules") {
      results.push(...collectHtmlFiles(full));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      results.push(full);
    }
  }
  return results;
}

function extractLdJsonBlocks(html) {
  const blocks = [];
  const re = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    try {
      blocks.push(JSON.parse(m[1]));
    } catch {
      // malformed block — validate-schema.mjs handles JSON validity
    }
  }
  return blocks;
}

/**
 * Collect the TOP-LEVEL @type values from a parsed block.
 * - If the block has an @graph array, each item in @graph is a top-level entity.
 * - Otherwise the block root is the single top-level entity.
 * Nested types (children of properties) are NOT collected.
 */
function topLevelTypes(block) {
  const types = [];
  const entities = block["@graph"] ? block["@graph"] : [block];
  for (const entity of entities) {
    if (!entity || typeof entity !== "object") continue;
    const t = entity["@type"];
    if (!t) continue;
    const typeList = Array.isArray(t) ? t : [t];
    for (const type of typeList) {
      types.push(type);
    }
  }
  return types;
}

let errors = 0;
let fileCount = 0;

const htmlFiles = collectHtmlFiles(ROOT).sort();

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const blocks = extractLdJsonBlocks(html);
  if (blocks.length === 0) continue;

  const allTypes = [];
  for (const block of blocks) {
    allTypes.push(...topLevelTypes(block));
  }

  const counts = {};
  for (const t of allTypes) {
    counts[t] = (counts[t] || 0) + 1;
  }

  const duplicates = Object.entries(counts)
    .filter(([type, count]) => count > 1 && !ALLOWLIST.has(type));

  if (duplicates.length > 0) {
    const rel = path.relative(ROOT, file);
    console.error(`  FAIL  ${rel}`);
    for (const [type, count] of duplicates) {
      console.error(`        @type "${type}" appears ${count} times`);
    }
    errors++;
  }
  fileCount++;
}

if (errors === 0) {
  console.log(`check-duplicate-schema: ${fileCount} files checked — no duplicate @type found ✓`);
} else {
  console.error(`\ncheck-duplicate-schema: ${errors} file(s) have duplicate @type — fix before deploy`);
  process.exit(1);
}
