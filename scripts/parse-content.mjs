// Parses 7code-build/content/{pages,packages,hub}/*.mdx into plain JS data
// structures that mirror content-spec.types.ts's PageSpec shape, performing
// {{REVIEWER_NAME}} / {{BOOKING_PROVIDER}} substitution from site-config.js.
//
// This is a build-time-only module (not shipped to the browser). Its output
// is written to project/content-data.js by scripts/generate-content-data.mjs
// and committed, matching the existing pattern of inline data files
// (SERVICES_DATA, CASES, RESOURCES_DATA all live directly in their *.jsx
// file rather than being loaded at runtime).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { load as yamlLoad } from "js-yaml";
import SITE_CONFIG from "../project/site-config.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CONTENT_ROOT = path.join(ROOT, "7code-build", "content");

function substitutePlaceholders(str) {
  if (typeof str !== "string") return str;
  return str
    .replaceAll("{{REVIEWER_NAME}}", SITE_CONFIG.REVIEWER_NAME)
    .replaceAll("{{BOOKING_PROVIDER}}", SITE_CONFIG.BOOKING_PROVIDER);
}

// Recursively substitute placeholders through the whole front-matter object,
// since {{REVIEWER_NAME}} appears nested under authorship.reviewer.
function deepSubstitute(value) {
  if (typeof value === "string") return substitutePlaceholders(value);
  if (Array.isArray(value)) return value.map(deepSubstitute);
  if (value && typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) out[k] = deepSubstitute(v);
    return out;
  }
  return value;
}

// ── inline markdown → simple node list (bold + links only; that's the whole
// inline vocabulary this content pack uses) ─────────────────────────────────
export function parseInline(text) {
  if (!text) return [];
  const nodes = [];
  let rest = substitutePlaceholders(text);
  // Matches **bold** or [label](href), leftmost first.
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let m;
  while ((m = re.exec(rest)) !== null) {
    if (m.index > lastIndex) nodes.push({ type: "text", value: rest.slice(lastIndex, m.index) });
    if (m[1] !== undefined) nodes.push({ type: "bold", value: m[1] });
    else nodes.push({ type: "link", label: m[2], href: m[3] });
    lastIndex = re.lastIndex;
  }
  if (lastIndex < rest.length) nodes.push({ type: "text", value: rest.slice(lastIndex) });
  return nodes;
}

// ── generic block-body parser: prose paragraphs, bullet lists, tables ──────
// Handles every block whose content is just markdown prose (diagnosis,
// pointOfView, whatWeBuild, howWeDeliver, whoThisIsFor, whatYouGet, howItRuns,
// notForYouIf, price, package, and every bespoke hub block). Structured
// blocks (hero, trustStrip, proof, faq, close, successHorizon, router,
// packages, testimonials) are parsed by their own dedicated functions below
// and never go through this generic path.
// Splits raw block text into blank-line-separated chunks, then classifies
// each chunk as a heading / list / table / "horizon" (successHorizon's bold
// "In N weeks/months" lead-in) / plain paragraph. Operating chunk-first (not
// line-first) is what lets a wrapped paragraph or a two-line bullet item —
// both common in this content pack — join back into one logical unit before
// inline-markdown parsing runs on it.
export function parseRichBody(raw) {
  const text = substitutePlaceholders(raw).trim();
  const chunks = text.split(/\n\s*\n/).map(c => c.trim()).filter(Boolean);
  const nodes = [];

  for (const chunk of chunks) {
    const chunkLines = chunk.split("\n").map(l => l.trim()).filter(Boolean);
    const firstLine = chunkLines[0];

    const h2 = firstLine.match(/^\*\*H2:\*\*\s*(.+)$/);
    if (h2) {
      nodes.push({ type: "h2", text: chunkLines.join(" ").replace(/^\*\*H2:\*\*\s*/, "") });
      continue;
    }

    if (/^\|.*\|$/.test(firstLine)) {
      const rows = [];
      for (const line of chunkLines) {
        if (!/^\|.*\|$/.test(line)) continue;
        const cells = line.slice(1, -1).split("|").map(c => c.trim());
        const isSeparatorRow = cells.every(c => /^:?-+:?$/.test(c));
        if (isSeparatorRow) continue;
        rows.push(cells.map(c => parseInline(c)));
      }
      nodes.push({ type: "table", rows });
      continue;
    }

    if (/^[-*]\s+/.test(firstLine)) {
      const items = [];
      for (const line of chunkLines) {
        const bullet = line.match(/^[-*]\s+(.+)$/);
        if (bullet) items.push(bullet[1]);
        else if (items.length) items[items.length - 1] += " " + line; // continuation line
      }
      nodes.push({ type: "ul", items: items.map(parseInline) });
      continue;
    }

    const boldLead = firstLine.match(/^\*\*(In \d+ \w+)\*\*\s*—\s*(.+)$/);
    if (boldLead) {
      const joined = [boldLead[2], ...chunkLines.slice(1)].join(" ");
      nodes.push({ type: "horizon", label: boldLead[1], inline: parseInline(joined) });
      continue;
    }

    nodes.push({ type: "p", inline: parseInline(chunkLines.join(" ")) });
  }
  return nodes;
}

// Flattens an inline node array (text/bold/link) to plain text — used when
// building FAQPage JSON-LD, which needs a plain string, not markup.
export function flattenInline(nodes) {
  return (nodes || []).map(n => n.type === "link" ? n.label : n.value || "").join("");
}

// ── dedicated block parsers ─────────────────────────────────────────────────

// Captures a "**Label:** value" field whose value may wrap onto following
// lines, stopping at the next blank line or the next "**Label:**" marker.
function captureField(text, label) {
  const re = new RegExp("\\*\\*" + label + ":\\*\\*\\s*([\\s\\S]*?)(?=\\n\\s*\\n|\\n\\s*\\*\\*[A-Za-z][^:]*:\\*\\*|$)");
  const m = text.match(re);
  if (!m) return "";
  return m[1].replace(/\s+/g, " ").trim();
}

function parseHero(raw) {
  const text = substitutePlaceholders(raw);
  return { h1: captureField(text, "H1"), sub: captureField(text, "Sub") };
}

function parseTrustStrip(raw) {
  const nodes = parseRichBody(raw);
  const stats = [];
  let logos = [];
  for (const n of nodes) {
    if (n.type === "ul") {
      for (const item of n.items) {
        const boldNode = item.find(t => t.type === "bold");
        const rest = item.filter(t => t !== boldNode).map(t => t.value || "").join("").replace(/^\s+/, "");
        if (boldNode) stats.push({ value: boldNode.value, label: rest.trim() });
      }
    } else if (n.type === "p") {
      const plain = n.inline.map(t => t.value || t.label || "").join("");
      if (/^Logos:/i.test(plain.trim())) {
        logos = plain.replace(/^Logos:\s*/i, "").split("·").map(s => s.trim()).filter(Boolean);
      }
    }
  }
  return { stats, logos };
}

function parseSuccessHorizon(raw) {
  const nodes = parseRichBody(raw);
  const heading = (nodes.find(n => n.type === "h2") || {}).text || "";
  const horizons = nodes.filter(n => n.type === "horizon");
  return { heading, horizons };
}

function parseRouter(raw) {
  const text = substitutePlaceholders(raw);
  const heading = captureField(text, "H2");
  const cards = [];
  const cardRe = /\*\*"([^"]+)"\*\*\n([\s\S]+?)\n→\s*\[([^\]]+)\]\(([^)]+)\)/g;
  let m;
  while ((m = cardRe.exec(text)) !== null) {
    cards.push({
      quote: m[1].trim(),
      body: m[2].replace(/\s+/g, " ").trim(),
      linkLabel: m[3].trim(),
      href: m[4].trim(),
    });
  }
  return { heading, cards };
}

// FAQ content lives only in the body (numbered "**N. Question?** `objection:
// x`" lines followed by an answer paragraph) — content-spec.types.ts's
// top-level `faq[]` field describes the *shape* the build must validate
// against, but the authored .mdx files don't duplicate it into front-matter.
function parseFaqBody(raw) {
  const text = substitutePlaceholders(raw);
  const chunks = text.split(/\n\s*\n/).map(c => c.trim()).filter(Boolean);
  const entries = [];
  const questionRe = /^\*\*\d+\.\s*(.+?)\*\*\s*`objection:\s*([a-z-]+)`\s*(.*)$/s;

  for (const chunk of chunks) {
    const lines = chunk.split("\n");
    const m = lines[0].match(questionRe);
    if (m) {
      const [, question, objection, restOfFirstLine] = m;
      const answerLines = [restOfFirstLine, ...lines.slice(1)].filter(Boolean);
      entries.push({ question: question.trim(), objection, answerInline: parseInline(answerLines.join(" ")) });
    } else if (entries.length) {
      // Continuation paragraph of the previous answer (no blank-line-free
      // multi-paragraph answers in this content, but handled defensively).
      const last = entries[entries.length - 1];
      last.answerInline = last.answerInline.concat({ type: "text", value: " " }, parseInline(chunk));
    } else if (!/^\*\*H2:\*\*/.test(chunk)) {
      // Heading chunk is expected and ignored (heading text is fixed per
      // CONTENT-STANDARDS.md — "Questions we get asked before we're hired" /
      // "Questions before you book"); anything else unmatched is dropped
      // silently rather than crashing the build.
    }
  }
  return entries;
}

function parseClose(raw) {
  const text = substitutePlaceholders(raw);
  return { heading: captureField(text, "H2"), sub: captureField(text, "Sub") };
}

const DEDICATED_PARSERS = {
  hero: parseHero,
  trustStrip: parseTrustStrip,
  successHorizon: parseSuccessHorizon,
  router: parseRouter,
  close: parseClose,
};

// ── file-level parsing ──────────────────────────────────────────────────────

function splitFrontMatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error("No front-matter block found");
  return { frontMatterRaw: m[1], body: m[2] };
}

function splitBlocks(body) {
  const parts = body.split(/^## BLOCK: (\S+)\s*$/m);
  // parts[0] is anything before the first block marker (should be empty/whitespace)
  const blocks = [];
  for (let i = 1; i < parts.length; i += 2) {
    blocks.push({ name: parts[i], raw: parts[i + 1] });
  }
  return blocks;
}

function parseFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const { frontMatterRaw, body } = splitFrontMatter(raw);
  const fmParsed = yamlLoad(frontMatterRaw);
  const spec = deepSubstitute(fmParsed);
  const rawBlocks = splitBlocks(body);

  const blocks = {};
  for (const { name, raw: blockRaw } of rawBlocks) {
    if (name === "faq") {
      blocks.faq = parseFaqBody(blockRaw);
    } else if (DEDICATED_PARSERS[name]) {
      blocks[name] = DEDICATED_PARSERS[name](blockRaw);
    } else {
      blocks[name] = { rich: parseRichBody(blockRaw) };
    }
  }

  return { spec, blocks, sourceFile: path.relative(ROOT, filePath) };
}

function listMdx(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith(".mdx") && !f.startsWith("_"))
    .map(f => path.join(dir, f));
}

export function loadContentSpecs() {
  const pages = listMdx(path.join(CONTENT_ROOT, "pages")).map(parseFile);
  const packages = listMdx(path.join(CONTENT_ROOT, "packages")).map(parseFile);
  const hub = listMdx(path.join(CONTENT_ROOT, "hub")).map(parseFile);
  return { pages, packages, hub };
}
