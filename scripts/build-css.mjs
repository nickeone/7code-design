// Concatenates project/*.css (in the same order they're <link>ed in
// project/index.html, the dev-preview source of truth) into project/bundle.css,
// then minifies to project/bundle.min.css via the `cleancss` CLI
// (clean-css-cli is already a devDependency; no script previously wired it
// up — see scripts/build-bundles.mjs for the same situation with the JS
// bundles).
//
// Usage:  node scripts/build-css.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PROJECT = path.join(ROOT, "project");

const CSS_FILES = [
  "styles.css",
  "blocks.css", // new: money/package/hub/home block-rendering system
  "page-styles.css",
  "case-studies.css",
  "case-studies-showcase.css",
  "case-studies-more.css",
  "case-study.css",
  "expertise-detail.css",
  "blog.css",
  "service-detail.css",
];

const concatenated = CSS_FILES.map(f => fs.readFileSync(path.join(PROJECT, f), "utf8")).join("\n");
fs.writeFileSync(path.join(PROJECT, "bundle.css"), concatenated);

const cleancssBin = path.join(ROOT, "node_modules", ".bin", "cleancss");
execFileSync(cleancssBin, ["-o", path.join(PROJECT, "bundle.min.css"), path.join(PROJECT, "bundle.css")]);

console.log(`Wrote project/bundle.css (${CSS_FILES.length} files) and project/bundle.min.css`);
