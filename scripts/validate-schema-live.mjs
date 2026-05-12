/**
 * Fetches each sitemap URL from the live site and validates JSON-LD blocks.
 * Used by the weekly GitHub Action; mirrors the same rules as validate-schema.mjs.
 *
 * Usage:  BASE_URL=https://www.7code.tech node scripts/validate-schema-live.mjs
 */

import { readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const BASE = process.env.BASE_URL || "https://www.7code.tech";

function extractJsonLdBlocks(html) {
  const blocks = [];
  const re = /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html)) !== null) blocks.push(m[1].trim());
  return blocks;
}

function getNodes(parsed) {
  return Array.isArray(parsed["@graph"]) ? parsed["@graph"] : [parsed];
}

async function getRoutes() {
  const xml = await readFile(join(ROOT, "sitemap.xml"), "utf8");
  return [...xml.matchAll(/<loc>https?:\/\/[^/]+(\/[^<]*)<\/loc>/g)].map(m => m[1] || "/");
}

const routes = await getRoutes();
let failures = 0;

for (const route of routes) {
  const url = BASE + route;
  let html;
  try {
    const res = await fetch(url, { headers: { "User-Agent": "SchemaValidator/1.0" } });
    if (!res.ok) { console.error(`  FAIL  ${route}  HTTP ${res.status}`); failures++; continue; }
    html = await res.text();
  } catch (err) {
    console.error(`  FAIL  ${route}  fetch error: ${err.message}`);
    failures++;
    continue;
  }

  for (const raw of extractJsonLdBlocks(html)) {
    let parsed;
    try { parsed = JSON.parse(raw); }
    catch (err) { console.error(`  FAIL  ${route}  JSON parse: ${err.message}`); failures++; continue; }

    for (const node of getNodes(parsed)) {
      if (!node["@context"] && !parsed["@context"]) {
        console.error(`  FAIL  ${route}  missing @context in ${node["@type"]}`); failures++;
      }
      if (!node["@type"]) { console.error(`  FAIL  ${route}  missing @type`); failures++; continue; }
      if (node["@type"] === "FAQPage") {
        const qs = node.mainEntity;
        if (!Array.isArray(qs) || qs.length < 3) {
          console.error(`  FAIL  ${route}  FAQPage has ${qs?.length ?? 0} questions`); failures++;
        }
      }
      if (node["@type"] === "Organization") {
        for (const f of ["name", "url", "logo"]) {
          if (!node[f]) { console.error(`  FAIL  ${route}  Organization missing "${f}"`); failures++; }
        }
      }
    }
  }
  console.log(`  OK   ${route}`);
}

console.log(`\n${routes.length} routes checked, ${failures} failure(s).`);
if (failures > 0) process.exit(1);
