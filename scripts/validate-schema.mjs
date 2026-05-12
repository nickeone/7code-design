/**
 * Post-build schema validation gate.
 *
 * Reads every HTML file in the repo (excluding node_modules and project/),
 * parses all <script type="application/ld+json"> blocks, and fails if:
 *   - Any JSON block fails to parse
 *   - Any block lacks @context or @type
 *   - Any FAQPage has fewer than 3 questions
 *   - Any Organization block lacks name, url, or logo
 *
 * Usage:  node scripts/validate-schema.mjs
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

function extractJsonLdBlocks(html) {
  const blocks = [];
  const re = /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    blocks.push(m[1].trim());
  }
  return blocks;
}

function getNodes(parsed) {
  if (Array.isArray(parsed["@graph"])) return parsed["@graph"];
  return [parsed];
}

let failures = 0;
let filesChecked = 0;
let blocksChecked = 0;

for await (const file of walkHtml(ROOT)) {
  const rel = file.replace(ROOT + "/", "");
  const html = await readFile(file, "utf8");
  const rawBlocks = extractJsonLdBlocks(html);

  filesChecked++;

  for (const raw of rawBlocks) {
    blocksChecked++;
    let parsed;

    try {
      parsed = JSON.parse(raw);
    } catch (err) {
      console.error(`  FAIL  ${rel}  JSON parse error: ${err.message}`);
      failures++;
      continue;
    }

    const nodes = getNodes(parsed);

    for (const node of nodes) {
      if (!node["@context"] && !parsed["@context"]) {
        console.error(`  FAIL  ${rel}  node missing @context: ${node["@type"] || "(unknown)"}`);
        failures++;
      }
      if (!node["@type"]) {
        console.error(`  FAIL  ${rel}  node missing @type`);
        failures++;
        continue;
      }

      if (node["@type"] === "FAQPage") {
        const questions = node.mainEntity;
        if (!Array.isArray(questions) || questions.length < 3) {
          console.error(`  FAIL  ${rel}  FAQPage has ${questions?.length ?? 0} questions (min 3)`);
          failures++;
        }
      }

      if (node["@type"] === "Organization") {
        for (const field of ["name", "url", "logo"]) {
          if (!node[field]) {
            console.error(`  FAIL  ${rel}  Organization missing "${field}"`);
            failures++;
          }
        }
      }
    }
  }
}

if (failures > 0) {
  console.error(`\nvalidate-schema: ${failures} error(s) across ${filesChecked} files (${blocksChecked} blocks checked).`);
  process.exit(1);
} else {
  console.log(`validate-schema: ${filesChecked} files, ${blocksChecked} blocks — all valid ✓`);
}
