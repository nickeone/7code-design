// Extracts FAQ Q&A data from the route component sources so the pre-render
// step can emit FAQPage JSON-LD that matches the visible on-page content.
//
// Single source of truth: the `faqs: [ { q, a }, … ]` arrays already defined in
// project/service-detail.jsx (SERVICES_DATA) and project/expertise-detail.jsx
// (EXPERTISE). We parse them here rather than duplicating the copy, so the
// schema can never drift from what users actually see.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// Split a data file into per-entry chunks keyed by the object key, e.g.
//   "ai-product-engineering": { … }
// and pull out each entry's own `slug` and its `faqs` array.
function extractFaqs(relFile) {
  const src = fs.readFileSync(path.join(ROOT, relFile), "utf8");
  const result = {};

  // Entry headers look like:  \n  "slug-name": {
  const headerRe = /\n {2}"([a-z0-9-]+)":\s*\{/g;
  const headers = [...src.matchAll(headerRe)];

  for (let i = 0; i < headers.length; i++) {
    const slug = headers[i][1];
    const start = headers[i].index;
    const end = i + 1 < headers.length ? headers[i + 1].index : src.length;
    const chunk = src.slice(start, end);

    // Capture the faqs array body: `faqs: [` … `\n    ],`
    const faqMatch = chunk.match(/faqs:\s*\[([\s\S]*?)\n {4}\],/);
    if (!faqMatch) continue;

    let faqs;
    try {
      // The array body contains only string literals — safe to evaluate.
      faqs = new Function("return [" + faqMatch[1] + "\n];")();
    } catch (err) {
      throw new Error(`Failed to parse faqs for "${slug}" in ${relFile}: ${err.message}`);
    }

    faqs = faqs
      .filter(f => f && typeof f.q === "string" && typeof f.a === "string")
      .map(f => ({ q: f.q.trim(), a: f.a.trim() }));

    if (faqs.length) result[slug] = faqs;
  }

  return result;
}

export const SERVICE_FAQS = extractFaqs("project/service-detail.jsx");
export const EXPERTISE_FAQS = extractFaqs("project/expertise-detail.jsx");

// Build a schema.org FAQPage entity for a given page URL + faq list.
export function faqPageEntity(pageUrl, faqs) {
  return {
    "@type": "FAQPage",
    "@id": pageUrl + "#faq",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };
}
