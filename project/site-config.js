/**
 * Single source of truth for site-wide constants used by both the Node build
 * scripts (prerender, content parser, validators) and the browser bundle.
 *
 * Plain CommonJS-or-global dual export, no ESM/JSX syntax, so it can be:
 *   - `require()`d from Node build scripts, and
 *   - loaded via a plain <script> tag before bundle-core.min.js in the browser,
 *     where it attaches itself to `window.SITE_CONFIG`.
 *
 * Nothing in this file should be hardcoded a second time anywhere else.
 */

// TODO Nicu: change to a second senior engineer. The named-reviewer credit
// only works as an E-E-A-T signal if the reviewer differs from the author
// (every content spec credits "Nicu Mardari" as author).
const REVIEWER_NAME = "Nicu Mardari";

// "cal.com" or "hubspot". No HubSpot Meetings integration exists in this repo
// today (grepped for hubspot/meetings — no hits), so this defaults to Cal.com
// per the brief's fallback rule.
const BOOKING_PROVIDER = "cal.com";

// Per-route booking links, keyed by the /book/<slug> path segment. Real Cal.com
// event-type URLs are not yet known (no Cal.com account credential was
// provided) — these are documented placeholders under the 7code Cal.com team
// handle. Swap the four URLs below once the real event types exist; nothing
// else in the codebase needs to change.
const BOOKING_ROUTES = {
  discovery: {
    slug: "discovery",
    calLink: "7code/discovery-call",
    title: "Book a discovery call",
  },
  "quick-scan": {
    slug: "quick-scan",
    calLink: "7code/operational-quick-scan",
    title: "Book an Operational Quick Scan",
  },
  "mvp-scoping": {
    slug: "mvp-scoping",
    calLink: "7code/mvp-scoping-call",
    title: "Book an MVP scoping call",
  },
  "technical-call": {
    slug: "technical-call",
    calLink: "7code/technical-call",
    title: "Book a technical call",
  },
};

const CLUTCH_RATING = {
  value: 4.8,
  count: 11,
  url: "https://clutch.co/profile/7code",
};

const COMPANY = {
  legalName: "SEVEN CODE DEVELOPMENT SRL",
  cui: "38088795",
  streetAddress: "Strada Onisifor Ghibu 26",
  addressLocality: "Cluj-Napoca",
  addressCountry: "RO",
  postalCode: "400185",
  phone: "+40774542081",
  email: "office@7code.ro",
  founded: "2017-08-10",
  url: "https://www.7code.tech",
};

const SITE_CONFIG = {
  REVIEWER_NAME,
  BOOKING_PROVIDER,
  BOOKING_ROUTES,
  CLUTCH_RATING,
  COMPANY,
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
}
if (typeof window !== "undefined") {
  window.SITE_CONFIG = SITE_CONFIG;
}
