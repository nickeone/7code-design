/**
 * Checks that every legacy URL returns HTTP 301 and the expected Location header.
 *
 * Usage:
 *   node scripts/check-redirects.mjs [base-url]
 *
 * Defaults to https://www.7code.tech — override for local/staging:
 *   node scripts/check-redirects.mjs http://localhost:3000
 */

const BASE = process.argv[2] || "https://www.7code.tech";

const CASES = [
  { from: "/blog-7code/",           to: "/blog" },
  { from: "/blog-7code",            to: "/blog" },
  {
    from: "/2025/09/04/7codes-discovery-mission-pioneering-successful-software-development/",
    to:   "/blog/7code-discovery-mission",
  },
  {
    from: "/2025/07/03/from-cluj-to-london-what-we-brought-home-from-tech-week/",
    to:   "/blog/lessons-from-london-tech-week-ai",
  },
  {
    from: "/2025/10/16/employees-level-of-experience-and-impact-on-projects/",
    to:   "/blog/senior-engineers-ai-leverage",
  },
  { from: "/pf/case-study-revote/", to: "/case-study/revote" },
  { from: "/pf/case-study-revote",  to: "/case-study/revote" },
  { from: "/home/",                 to: "/" },
  { from: "/home",                  to: "/" },
  { from: "/privacy-policy/",       to: "/privacy-policy" },
  { from: "/cookie-policy/",        to: "/cookie-policy" },
];

let passed = 0;
let failed = 0;

async function checkOne({ from, to }) {
  const url = BASE + from;
  let res;
  try {
    res = await fetch(url, { redirect: "manual" });
  } catch (err) {
    console.error(`  FAIL  ${from}  →  fetch error: ${err.message}`);
    failed++;
    return;
  }

  const status = res.status;
  const location = res.headers.get("location") || "";

  const expectedLocation = BASE + to;
  const locationOk =
    location === expectedLocation ||
    location === to ||
    location.endsWith(to);

  if (status === 301 && locationOk) {
    console.log(`  PASS  ${from}  →  ${location}`);
    passed++;
  } else {
    console.error(
      `  FAIL  ${from}  →  status=${status} location="${location}"  (expected 301 → ${to})`,
    );
    failed++;
  }
}

console.log(`Checking ${CASES.length} legacy redirects against ${BASE}\n`);
for (const c of CASES) {
  await checkOne(c);
}

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
