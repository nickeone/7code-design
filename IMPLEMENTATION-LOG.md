# 7code website rebuild — implementation log

This is the only status report Nicu reads for this work. Decisions are logged as they're made;
nothing here should require re-explaining in chat.

---

## Step 0 — orientation

### Content pack
`7code-build/` landed on `main` as PR #80 (commit `c11fb09`, merged `0027261`) after the initial
"where's the content?" pause. Merged `origin/main` into this branch and verified all 22 files are
present: `_brief/CONTENT-STANDARDS.md`, `content/content-spec.types.ts`, 10 `content/pages/*.mdx`
(home + 9 money pages), 4 `content/packages/*.mdx`, 3 `content/hub/*.mdx`,
`content/case-studies/_TEMPLATE.mdx`.

All 22 `.mdx` files parse cleanly as YAML front-matter + `## BLOCK:` sections (verified with a
throwaway script before writing any real parser). Money pages all share the exact 13-block skeleton
in the same order; package pages all share the exact 9-block skeleton; **hub articles do NOT share a
fixed block set** — each of the 3 hub articles has its own bespoke block names (only `hero`,
`trustStrip`, `faq`, `close`, and occasionally `package`/`cta` are common). The hub renderer has to be
a generic "named section with markdown-ish body" renderer, not a fixed 11-block component set like
money/package/home pages.

### Existing codebase — what it actually is
This is **not** a JS framework app. It's a hand-rolled static-HTML + React pipeline, originally
exported from Claude Design (see `README.md`, `project/design-canvas.jsx`, `project/tweaks-panel.jsx`
— dev-only design tooling, not production, safe to ignore). No Next.js/Remix/Vite. `package.json`
dependencies are just `react`/`react-dom`/`@fontsource/*`; devDependencies are `@babel/cli`, `terser`,
`clean-css-cli`, `http-server`, `puppeteer` — a hand-run toolchain, not an automated one.

**Two-pass prerender:**
1. `scripts/prerender.mjs` — string-templates `index.html` per route: title/meta/canonical/hreflang/OG
   /Twitter tags + a single `<script type="application/ld+json">` block, built from small schema
   generator functions in the same file. Route metadata lives in hard-coded arrays at the top
   (`MAIN_PAGES`, `SERVICES`, `EXPERTISE`, `CASES`, `BLOG_POSTS`, `RESOURCES`). Writes `<route>.html`
   for everything **except the homepage** — `/` is not in `MAIN_PAGES`; `index.html` itself is the
   template and is never rewritten by this script.
2. `scripts/prerender-body.mjs` — a Puppeteer pass. Starts a local static server, visits every route
   in its own hard-coded `ROUTES` array, waits for React to render `#root` for real, and injects the
   rendered `innerHTML` back into the on-disk `.html` file so non-JS crawlers see real content.
   **`ROUTES` does not include `"/"`.** This is the confirmed root cause of the homepage below-fold
   bug: every other page type gets a real Puppeteer-rendered body; the homepage's `#root` in
   `index.html` contains only the hero, because it never gets visited by this pass.

**Client-side app:** `project/app.jsx` is the real router — `useHashRoute()` (pathname-first, hash
fallback) + a plain if/else chain in `App()` mapping a parsed `page` string to a page component.
`ReactDOM.createRoot(...).render(<App/>)` fully replaces whatever HTML was server/Puppeteer-rendered
(not `hydrateRoot` — a plain client remount, not real hydration, so there's no mismatch risk to worry
about). Two JS bundles ship: `bundle-core.min.js` (icons+tweaks-panel+layout+heroes+sections+pages+app,
loaded sync) and `bundle-routes.min.js` (case-studies+case-study+expertise-detail+blog+service-detail
+resources, loaded `async`, gated behind a `routesReady` flag fed by a `routes-loaded` event).
**There is no committed script that produces these compiled bundles** — `@babel/cli`/`terser` are
installed but unused by any `package.json` script; the compiled output in `project/compiled/` was
built by hand at some point and committed directly. Added `scripts/build-bundles.mjs` (see Step 3) to
make this reproducible, since I need to add new components.

**Reusable "block" components already exist** in `project/sections.jsx` (`TrustedBy`, `WhyChoose`,
`Testimonials`, `CTAStrip`, `VerifiedAccredited`, etc.) — one `.section`/`.section--alt` +
`.section-head` (eyebrow/h2/p) pattern throughout. CSS is custom-properties + a light
`.block--modifier` convention (not BEM, not utility classes). Content for `/service/*`, `/expertise/*`,
`/case-study/*`, `/resources/*` all lives as **inline JS object literals** directly inside the
corresponding `*.jsx` file (`SERVICES_DATA`, `CASES`, `RESOURCES_DATA`) — no separate CMS/data file, no
MDX today. I'm following the same idiom for the new content: a generated data file with plain object
literals, not a runtime MDX loader.

**Vercel deploy note:** `vercel.json`'s `buildCommand` is `npm run prebuild && node
scripts/validate-schema.mjs && node scripts/check-duplicate-schema.mjs` — it does **not** run
`prerender.mjs`/`prerender-body.mjs`. Pre-rendered HTML is committed to git and served as-is. This
means every content/schema change in this PR has to be built locally (`node scripts/prerender.mjs &&
node scripts/prerender-body.mjs`) and the resulting `.html` files committed — Vercel will not
regenerate them.

**Puppeteer environment note:** this sandbox has no network access to download Puppeteer's bundled
Chromium. Pointed `prerender-body.mjs` at the pre-installed Playwright Chromium
(`/opt/pw-browsers/chromium-1194/chrome-linux/chrome`) via `PUPPETEER_EXECUTABLE_PATH` so the body
prerender pass can actually run here.

### Decisions made without asking (per "decide, log, continue")

| Decision | Reasoning |
|---|---|
| Added `js-yaml` as a devDependency | Needed a real YAML parser for front-matter (nested objects, arrays of flow-style objects, folded `>` scalars in `difficultyNote`). Hand-rolling one was riskier than a small, standard, build-time-only library. Not shipped to the browser. |
| New content lives in a generated data file, not a runtime MDX loader | Matches the existing pattern (`SERVICES_DATA`, `CASES`, `RESOURCES_DATA` are all committed JS object literals). No new templating system at runtime. |
| Money/package/hub pages join the deferred `bundle-routes.min.js` bundle | They're slug-keyed detail pages exactly like `ServiceDetailPage`/`CaseStudyPage`/`ResourcePage` — same shape, same bundle, same Puppeteer-capture story. Keeps `bundle-core` from growing on every single page load. |
| `scripts/build-bundles.mjs` added | Formalizes the previously-undocumented manual babel+terser compile step so it's reproducible for this change and future ones. Doesn't change what ships, just how it's built. |
| `scripts/build-css.mjs` added | Same situation as the JS bundles — `clean-css-cli` was an unused devDependency. Formalized the `styles.css → bundle.css → bundle.min.css` concatenation that was previously hand-run. |

---

## Step 1 — Phase 0 technical fixes

Re-verified every item against current `main` rather than assuming the brief's "live problems" list was
still accurate — several were already fixed in earlier PRs (visible in `git log`). Status per item:

| Item | Status | Notes |
|---|---|---|
| `7code.ro → 7code.tech` 301 | **Already fixed** (PR #77) | `vercel.json` already has `statusCode: 301`. No action needed. |
| Legacy WordPress redirects | **Mostly already fixed** | `/2025/...`, `/7code-blog/`, `/category/...`, `/pf/...`, `/home/...` all already 301. **Missing one**: `/frequently-asked-questions-faqs/` → `/faq` — added it (both with/without trailing slash) to `vercel.json` and to `scripts/check-redirects.mjs`'s smoke-test list. |
| `/resources` 404 | **Confirmed still broken — fixed** | Built `ResourcesIndexPage` (`project/content-pages.jsx`), added it to `prerender.mjs`'s generation loop and `prerender-body.mjs`'s `ROUTES`, added it to the primary nav (via the existing route-driven mega-menu is service-only — added a direct footer link instead, see Step 5) and footer. |
| Homepage below-fold rendering | **Confirmed still broken — fixed** | Root cause: `scripts/prerender-body.mjs`'s `ROUTES` array never included `"/"`. Added it, plus special-cased `prerender.mjs` to *also* regenerate `index.html` itself (previously only read as a template, never written back to) so the homepage goes through the same head/schema pipeline as every other page instead of being hand-maintained. Verified with a headless-Chromium fetch of the raw HTML file (no JS execution) — the homepage's `<div id="root">` now contains the full rendered body (trust strip, four-door router, proof, FAQ accordion, close block), not just the hero. |
| Schema audit | **Done** | Raw `index.html` already had a hand-typed `Organization`/`WebSite`/`ProfessionalService`/`LocalBusiness`/`FAQPage` `@graph` with two real bugs: `foundingDate: "2016"` (wrong — 2017 per registration) and `aggregateRating` at **4.9**/11 (config says **4.8**/11) and three `{{TODO}}` placeholders in `LocalBusiness` (phone/street/postcode) never filled in. All fixed — see Step 4. |
| Analytics/tracking | **Partially already done, gaps documented, not blocking** | GA4 (`G-109V5ZWVD8`) and Microsoft Clarity (`resfqs6oce`) are already live in `index.html`, gated behind the existing `7code_consent` cookie via `initAnalytics()`/`loadGA()` in `project/layout.jsx`. **Not present**: Google Tag Manager container, LinkedIn Insight Tag, Meta Pixel, and the `cta_click` GA4 custom event. Did not add placeholder GTM/LinkedIn/Pixel snippets or a synthetic `cta_click` event with a fake ID — see "What I could not do" below; this is the one Phase-0 item left incomplete, and it's flagged rather than shipped half-working. |
| Booking (`/book/*`) | **Built — see below** | Highest-value item, done first as instructed. |
| `sitemap.xml` "broken" | **Could not reproduce — see below** | |

### Booking — `/book/discovery`, `/book/quick-scan`, `/book/mvp-scoping`, `/book/technical-call`
All four implemented (`project/booking.jsx`, `BookPage`). Each renders a real Cal.com inline embed
(`CalEmbed` in `project/blocks.jsx` — kept there, not in `booking.jsx`, because `CloseBlock` also
renders one and is used by the homepage, which renders before the deferred bundle is guaranteed
loaded), the page's reassurance line, and a "use the contact form instead" fallback to `/contact`.
`BOOKING_PROVIDER` (`"cal.com"`) and the per-route `calLink` values live in `project/site-config.js` —
switching providers or updating a link is a one-file change. **No Cal.com account exists yet** (missing
credential, per the brief's third stop condition) — the four `calLink` values
(`7code/discovery-call`, `7code/operational-quick-scan`, `7code/mvp-scoping-call`,
`7code/technical-call`) are documented placeholders. The embed plumbing is real and will start showing
a live calendar the moment those event types exist under a real Cal.com team handle; until then the
embed iframe will show Cal.com's own "not found" state rather than erroring.

### sitemap.xml
Regenerated (`scripts/generate-sitemap.mjs`, additive/idempotent — keeps every existing `<url>` as-is,
only inserts routes that aren't already present) to include all 17 new pages plus `/resources`,
`/packages`, `/hub` and the 4 `/book/*` routes: 70 → 93 URLs. Confirmed the result parses as valid XML.

**Could not reproduce the "broken sitemap / gzip mismatch" bug.** This sandbox has no network access to
`https://www.7code.tech` (outbound HTTPS is proxied and non-allowlisted hosts get a 403), so I could not
run the `curl -sSI` / `curl --compressed` diagnosis the brief suggested against production. What I could
verify: the committed `sitemap.xml` is plain, valid, uncompressed XML (confirmed by parsing it with
Python's `xml.etree`), and nothing in `vercel.json` sets a `Content-Encoding` or conflicting header for
it. If the live bug is real, it's either a stale/cached response at a layer this repo doesn't control
(a CDN in front of Vercel, if one exists) or something that's already resolved — recommend Nicu run
`curl -sSI https://www.7code.tech/sitemap.xml` once this deploys to a preview URL and compare.

---

## Step 2 — config constants

`project/site-config.js` — dual CommonJS/browser export (`module.exports` when `module` exists,
`window.SITE_CONFIG` always) so the same file is both `import`able from the `.mjs` build scripts and
loadable via a plain `<script>` tag before `bundle-core.min.js`. Exports `REVIEWER_NAME`,
`BOOKING_PROVIDER`, `BOOKING_ROUTES` (the 4 booking slugs → Cal.com links, additional to the brief's
spec since the routes needed *something* concrete to point at), `CLUTCH_RATING`, `COMPANY`.

`{{REVIEWER_NAME}}` / `{{BOOKING_PROVIDER}}` are substituted at parse time (`scripts/parse-content.mjs`)
directly from this file — every `.mdx` front-matter field and body string is deep-substituted before
`project/content-data.js` is generated, so the literal `{{...}}` strings never reach a rendered page.
`scripts/check-content-spec.mjs` also greps the final generated data for any leftover `{{X}}` pattern as
a build-time backstop.

**Founding year (2017) fixed everywhere it was wrong**, not just `/about`:
- `project/pages.jsx` — `AboutPage`'s stat row, both founder bios, and the intro paragraph now read
  `foundedYear` from `window.SITE_CONFIG.COMPANY.founded` instead of a hardcoded `"2016"` string
  (found in 4 separate places).
- `project/resources.jsx` — the "7code's Position in the Romanian Market" resource article body said
  "founded in 2016"; changed to 2017. (Left as a literal string, not config-driven — it's prose inside
  a hand-authored data object, not a UI number.)
- `scripts/prerender.mjs` — `/about`'s meta description said "since 2019" (a *third*, different wrong
  year); fixed to 2017.
- `index.html`'s hand-typed JSON-LD `foundingDate` was `"2016"`; now `"2017-08-10"` (and, since
  `prerender.mjs` now regenerates the homepage itself — see Step 1 — this is sourced from
  `COMPANY.founded`, not hand-typed, going forward).

**Clutch rating (4.8, not 4.9) fixed everywhere**: `index.html`'s 3 hand-typed `aggregateRating` blocks,
and two FAQ answers in `project/pages.jsx` that said "4.9-star rating." All now read 4.8/11, matching
`CLUTCH_RATING` in `site-config.js` — I could not verify the real Clutch number from here (no network
access to clutch.co), so I went with the number the brief specified as authoritative rather than either
of the two numbers already live on the site (4.9 in the FAQ copy, 4.9 in the JSON-LD) — worth Nicu
double-checking against the actual Clutch profile before this ships.

---

## Step 3 — content pipeline + block component system

**`scripts/parse-content.mjs`** — reads all `7code-build/content/{pages,packages,hub}/*.mdx`, splits
front-matter (`js-yaml`) from the `## BLOCK: <name>` body, and parses each block. Two parsing tiers:
- **Dedicated parsers** for `hero`, `trustStrip`, `successHorizon`, `router`, `close`, and `faq` — these
  have machine-readable structure (`**H1:**`, `**Sub:**`, numbered FAQ entries with an
  `` `objection: x` `` tag) that a generic renderer can't infer.
- **Generic rich-body parser** for everything else — `diagnosis`, `whatWeBuild`, `howWeDeliver`,
  `package`, `pointOfView` (money pages); `whoThisIsFor`, `whatYouGet`, `howItRuns`, `price`,
  `notForYouIf` (package pages); and every hub article's bespoke block name. All of it is just
  markdown prose/bullets/tables under an `H2`, so one parser (paragraph-chunked, not line-chunked —
  needed to correctly join a bullet item or paragraph that wraps across source lines) covers all of it.
- `proof[]` and `faq[]` are rendered **only from front-matter / the FAQ block**, never re-parsed from
  the human-readable prose that duplicates them in the `.mdx` body — this is what makes "proof tags are
  always links" and "FAQ answers with service links" true *by construction* rather than by a check that
  could be bypassed.

**`project/content-data.js`** — generated (`scripts/generate-content-data.mjs`), committed, dual
CJS/browser export like `site-config.js`. Same idiom as the existing `SERVICES_DATA`/`CASES`/
`RESOURCES_DATA` — a plain object literal, not a runtime-fetched JSON file. Compact (no pretty-print
indentation) after Lighthouse flagged the indented form as ~225 KB of pure whitespace on every page
that loads it (see Step 7).

**`project/blocks.jsx`** — one component per block name, in the deferred `bundle-routes.min.js` bundle
except where a synchronous page (the homepage) also needs it (`CalEmbed`, kept in `blocks.jsx` for
exactly this reason — see Step 1's booking notes). Rules enforced structurally, not just checked:
- `HeroBlock` and `CtaBlock` both take a `cta` prop and render `cta.label` — there is no other code path
  in the entire system that renders CTA button text, so two different labels on one page is not
  something the components can even express.
- `ProofBlock` renders `tags.map(t => <a href={t.href}>...)` — there's no plain-text path.
- `FaqBlock` renders each answer through `InlineNodes`, which turns every parsed markdown link into a
  real `<a>` — a service named in an answer is a link because the content pack already wrote it as one.
- `cta` appearing twice on a money page (after `proof` and after `package`) is idempotent because both
  instances render from the same `spec.cta` object — there's no local state, nothing to desync.

**Homepage rebuilt** (`project/pages.jsx`'s `HomePage`) to compose these same blocks from
`window.CONTENT_DATA.HOME_CONTENT`, replacing the hand-written hero/section list. Per `home.mdx`'s
explicit implementation note, the old two-competing-CTA hero ("Start a project" / "How we work") is
gone — one button, "Book a discovery call," per `home.mdx`'s `cta`. `Testimonials` (the existing
`sections.jsx` component) is reused as-is for the homepage's `testimonials` block rather than rendering
the `.mdx` body, which explicitly defers to "pull the quote text from the live Clutch profile... or
paste it in verbatim" — the existing component already has the real, named Clutch quotes.

**Build tooling added** (`scripts/build-bundles.mjs`, `scripts/build-css.mjs`) — see the "decisions"
table above. `bundle-core.min.js` now also carries `blocks.jsx`; `bundle-routes.min.js` now also carries
`booking.jsx` and `content-pages.jsx` (the `MoneyPage`/`PackagePage`/`HubPage`/`HubIndexPage`/
`ResourcesIndexPage` top-level components).

**One naming collision caught by testing, not review**: `blocks.jsx` originally aliased
`useEffect`/`useRef` as `useEffectBL`/`useRefBL` — `blog.jsx` already used `useEffectBL` for its own
purposes. Since every `project/*.jsx` file ships concatenated into one of two `<script>` tags (not ES
modules), a top-level `const` declared twice with the same name across script tags throws
`Identifier has already been declared` in the browser — caught via a headless-Chromium console-error
check on the homepage, not by reading the code. Renamed to `useEffectBLK`/`useRefBLK`.

---

## Step 4 — schema.org

| Schema | Where | Notes |
|---|---|---|
| `Organization` | **Every page**, not just home | Was previously only hand-typed into `index.html`; now a shared `siteWideNodes()` in `prerender.mjs`, sourced from `COMPANY`/`CLUTCH_RATING`, prepended to every page's `@graph` (service pages, expertise, case studies, blog, resources, and all 17 new pages). |
| `LocalBusiness` | Every page | Same `siteWideNodes()`. The 3 `{{TODO}}` placeholders (phone/street/postcode) that were live in production are now real values from `COMPANY`. |
| `AggregateRating` | Homepage + money pages only, where `schema.aggregateRating` is set in front-matter | Attached to the `Organization` node, per-page, exactly where the spec says to, not everywhere. |
| `Service` | Money pages + package pages | Built from `targeting.primaryKeyword` + `meta.metaDescription`, matching the existing `/service/*` pattern. |
| `FAQPage` | Every page with a `faq` block (money, package, hub, homepage — plus the pre-existing service/expertise/blog coverage) | `faqPageFromBlocks()`, text flattened from the same parsed inline nodes the page renders, via a new `flattenInline()` export in `parse-content.mjs` — can't drift from what's on the page. |
| `BreadcrumbList` | All non-root pages, "both directions" | Money pages: `Home > Page` (2 levels — they sit at root, not under a category, per the brief). Package pages: `Home > Packages > Page`. Hub articles: `Home > Hub > Article`; the `/hub` index's own `CollectionPage` lists every article via `hasPart`, so the relationship is walkable from either end, not just article→home. |
| `Article` + author | Hub articles | `author`/`reviewedBy` as named `Person` nodes from `authorship.author`/`.reviewer`. **Not extended to existing blog posts** — see "what I could not do" below. |

---

## Step 5 — routing and navigation

All 17 new pages registered as real root-level routes: 9 money pages (`MONEY_PAGE_SLUGS` in `app.jsx`),
4 package pages + `/packages` index, 3 hub articles + `/hub` index, `/resources` index, 4 `/book/*`
routes. `parseRoute()` (`layout.jsx`) extended to treat `book`, `packages`, `hub` as two-segment prefixes
(same as the existing `service`/`expertise`/`case-study`/`blog`/`resources` handling) so `/packages/
operational-quick-scan` correctly parses to `["/packages", "operational-quick-scan"]` instead of losing
the slug.

**Nav**: primary "Services" link changed from `/service/ai-product-engineering` to `/services` (the
mega-menu dropdown itself is unaffected — its `onClick` still `preventDefault`s to toggle the panel;
this only changes what a no-JS user, a crawler, or a middle-click/new-tab gets).

**Footer**: added `/hub` and `/resources` to the existing "Company" column.

**No `/pricing/` page** — not built, per the brief's explicit instruction. Price bands live in FAQ
answers and `/hub/what-ai-automation-costs-uk` only.

**Money vs. service pages**: kept separate, as instructed. Every money page's internal links point
*down* to `/service/*` pages (e.g. "AI automation" → `/service/ai-automation`); nothing in the reverse
direction was added, so `/service/*` pages don't newly link up to the money pages with matching anchor
text.

---

## Step 6 — build-time validation

`scripts/check-content-spec.mjs` (new), wired into `postbuild` (`package.json`) and into `vercel.json`'s
`buildCommand` directly (Vercel doesn't run `npm run build`/`postbuild` — it runs a hand-specified
command chain that previously stopped at `check-duplicate-schema.mjs`; added this as a fourth step).
Same pattern as the existing validators: plain `fs`/regex, `FAIL [rule-id] file reason` lines, exit 1 on
any error. Implements every rule in `VALIDATION_RULES`:

- CTA-label consistency — enforced structurally by the component system (see Step 3), not re-checked
  here; documented in the script rather than re-parsed, since there's no separate "rendered CTA" text
  to compare against.
- `trustStrip` before the first `cta` — checked against `spec.blocks` order.
- Money pages have 10–12 FAQ entries — checked; **all 9 currently have exactly 12**.
- FAQ schema — every `faq` block's entries are checked to produce a non-empty `FAQPage` node.
- Proof/case-study tags are links — checked (`tag.href` must start with `/`).
- No `[UNVERIFIED` in an approved spec — checked across all rendered text.
- `openItems` empty when `status: approved` — checked. **All 17 pages pass.**
- Exactly one `icpSegment`, from the canonical 4 — checked.
- `metaDescription` present — checked.
- Banned terms (`leverage`, `synergy`, `touch base`, `circle back`, `hope this finds you well`,
  `offshore body shop`, bare word "resources" outside a `/resources` URL) — checked across all rendered
  text. **Zero violations found** — the content pack was already clean.
- Every internal link resolves to a real route — checked by walking the actual generated `.html` files
  on disk after `prerender.mjs` runs (not a hand-maintained route list, so it can't drift) and matching
  every `internalLinks[]`, `proof[].tags[]`, `proof[].caseStudySlug`, and FAQ-answer link href against
  it. **Zero broken internal links found.**
- Warnings (title length, OG dimensions, sentence length): title-length and og-dimensions implemented
  as warnings, non-blocking. Mean-sentence-length was **not** implemented — flagged under "what I could
  not do" below.

Current result: **0 errors, 1 warning** (homepage title is 46 chars, not 50–60 — see "copy issues for
Nicu" below).

---

## Step 7 — quality gates

- **Build**: `npm run build` (content data → JS bundles → CSS bundle → prerender → prerender-body →
  sitemap) runs clean. `npm run postbuild` (schema validate, duplicate-schema check, content-spec
  check) passes with 0 errors. `check-encoding`/`check-hreflang` (prebuild) pass on all 94 generated
  pages.
- **Every new route renders with JS disabled**: verified by fetching the raw generated `.html` files
  directly (no browser JS execution) and confirming real block markup is present (e.g.
  `.proof-card`/`.svc-faq-item` on money pages, `.hub-card` on the three new index pages,
  `.cal-embed` on `/book/*`).
- **No console errors**: headless-Chromium pass (JS enabled) across the homepage, one money page, one
  package page, one hub article, `/book/quick-scan`, `/resources`, `/packages`, `/hub`, `/about` — zero
  console errors or page errors on all of them.
- **Mobile viewport (375px)**: checked all of the above at 375×812. No horizontal overflow on any of
  them. (One false alarm during testing: `/hub`, `/resources`, `/packages` appeared to overflow when
  tested through the local `http-server -s` test harness, because that tool prioritizes a same-named
  *directory* over the `.html` file with `cleanUrls`-style resolution — it was serving a raw directory
  listing, not my page. Re-tested against the actual `hub.html`/`resources.html`/`packages.html` files
  directly: 0px overflow, confirming it was a test-tool artifact, not a real bug. Vercel's actual
  `cleanUrls` routing — and `prerender-body.mjs`'s own local test server — both resolve this correctly.)
- **Lighthouse** (real run, via `npx lighthouse` against the pre-installed Chromium, headless, in this
  sandbox — no CDN, no HTTP/2, no edge caching, likely CPU-throttled):

  | Page | Performance | Accessibility | SEO |
  |---|---|---|---|
  | `/` | 70 (target ≥90 — **not met**) | 91 (target ≥95 — not met) | 100 ✓ |
  | `/ai-automation-agency-uk` | 64 (not met) | **95 ✓** | 100 ✓ |

  Fixed what was directly caused by this change: `content-data.js` was shipping ~225 KB of pure
  indentation whitespace (switched `JSON.stringify(v, null, 2)` → `JSON.stringify(v)` — it's a
  generated cache file, not something meant for human diffing); FAQ/rich-text inline links relied on
  color alone to read as links (added underline); the nav/footer brand logo links had no discernible
  accessible name (added `aria-label="7code home"`); new `<img>` tags lacked explicit `width`/`height`.
  **Not fixed, and flagged rather than silently patched**: the dominant remaining accessibility loss is
  `color-contrast` on the `--cyan-500`/`--cyan-600` brand color used for buttons and links
  (`btn--cyan` white-on-cyan is ~2.4:1, `--cyan-600` text-on-white is ~3.3:1 — WCAG AA needs 4.5:1) —
  this is the site's existing brand palette, used on every page site-wide, and re-theming it is a real
  design decision outside this task's scope, not something to change unilaterally inside a content
  rebuild PR. There's also one pre-existing `heading-order` violation (the footer's `<h4>` column
  headers) present on every page already, not introduced here. Performance is short of 90 on both pages
  in this sandbox; the biggest line items (LCP, TTI) are consistent with "no CDN, no caching, local Node
  static server" rather than something this change regressed — recommend re-running Lighthouse against
  the real Vercel preview URL once deployed before drawing conclusions about production performance.
- **Rich Results / schema validity**: no network access to Google's live Rich Results Test tool from
  this sandbox. Used the repo's own `scripts/validate-schema.mjs` (parses every `<script
  type="application/ld+json">`, checks `@context`/`@type` presence, `FAQPage` question count,
  `Organization` completeness) as the closest available equivalent — passes on all 94 pages, including
  the homepage, one money page, one package page, and one hub article specifically.
- **sitemap.xml**: 93 URLs, valid XML (parsed with Python's `xml.etree`), includes every new route.
  Gzip-cleanliness could not be verified against production (see Step 1).

---

## Step 8 — what shipped, and what I could not do

**Shipped**: everything in Steps 1–7 above — Phase-0 fixes (booking routes, resources index, homepage
SSR, redirect + sitemap gaps, schema TODOs/wrong numbers), the config file, the full content
parser → generated-data → block-component pipeline, schema.org site-wide, all 17 new pages + 4 booking
routes + 3 index pages routed and navigable, and a new content-spec validator wired into the build.

**Could not do, and why**:
1. **GTM container, LinkedIn Insight Tag, Meta Pixel, GA4 `cta_click` event** — not implemented. Adding
   dead/placeholder tracking snippets with fake IDs felt worse than not adding them at all: a
   half-wired GTM container with no real ID does nothing and could look "done" when it isn't. What
   *is* real (GA4, Clarity) is already live and already consent-gated. Recommend a follow-up PR once
   real GTM/Pixel/LinkedIn IDs exist — the existing `initAnalytics()`/consent-event pattern in
   `layout.jsx` is exactly the hook point to wire them into.
2. **Cal.com account** — no real account/event-type exists (see Step 1). Embed code is real and
   functional; the 4 `calLink` values are documented placeholders in `site-config.js`.
3. **Live sitemap/gzip bug diagnosis** — no network access to production from this sandbox (Step 1).
4. **Mean sentence-length validator (warning-only rule)** — not implemented; lowest-priority of the
   validation rules and the content pack was already hand-checked against this during authoring per
   `_brief/CONTENT-STANDARDS.md`.
5. **Named author/reviewer `Article` schema on existing blog posts** — only added to the 3 new hub
   articles. The 27 existing blog posts' `Article` schema still uses a generic `Organization` author.
   `blog.jsx` already has real named authors per post (`{name, role, photo}`) that `prerender.mjs`'s
   separate `BLOG_POSTS` metadata array doesn't carry — upgrading this cleanly means syncing two
   currently-separate data sources, which felt like a distinct pre-existing-content follow-up, not part
   of rendering the new pack.
6. **Case-study retemplating** — not attempted, per the brief: the 10 existing studies need real,
   client-approved numbers first. The block system's case-study components (`resultStrip`, `problem`,
   `constraints`, etc.) were *not* built in this pass, since there's no approved content to render yet;
   building them speculatively against the `_TEMPLATE.mdx` shape risked guessing wrong about a
   structure nobody has used yet. Worth a short follow-up once Step-1 case-study data is signed off.
7. **Full Lighthoute ≥90 performance / ≥95 accessibility on both required pages** — see Step 7. Money
   page hits the ≥95 accessibility bar; homepage doesn't (pre-existing color-contrast issue, whole-site
   scope). Performance is short on both in this sandbox for reasons that look environmental, not
   regressions from this change — needs re-measurement against a real deploy.

## Copy issues for Nicu

- **No "Life is Hard" logo asset exists in the repo.** `_brief/CONTENT-STANDARDS.md` specifies the
  4-logo trust-strip set as "Lidl Romania · G42 · Founders Factory · Life is Hard," but there's no
  image file for the fourth anywhere in `project/assets` or `project/uploads`. Rendered it as a text
  wordmark instead of inventing or substituting a different logo. Send over the asset and it's a
  one-line swap in `project/blocks.jsx`'s `TRUST_LOGOS`.
- **Clutch rating discrepancy**: the content pack and `CLUTCH_RATING` config both say 4.8/11; the site
  previously said 4.9/11 in two places (a homepage FAQ answer, and the hand-typed JSON-LD). Went with
  4.8 per the brief, but I have no way to verify which is actually correct against the live Clutch
  profile from this sandbox — worth a 30-second check before this merges.
- **Homepage title is 46 characters** (want 50–60, warning-only). Rendered `home.mdx`'s title verbatim
  per "you render it, you never rewrite it" — flagging rather than changing approved copy.
- **`Testimonials` (homepage `testimonials` block) still shows the pre-existing 4 Clutch quotes** rather
  than anything new, since `home.mdx` explicitly says to pull them from Clutch live or paste verbatim
  and doesn't supply new quote text itself — nothing to change here, just confirming this was a
  deliberate reuse, not a missed block.

