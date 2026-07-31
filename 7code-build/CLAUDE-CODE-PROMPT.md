# ── COPY EVERYTHING BELOW THIS LINE INTO CLAUDE CODE ──────────────────────────

You are implementing a website rebuild for 7code (https://www.7code.tech). Work autonomously through
the whole plan below. Do not stop to ask me for approval on ordinary decisions — make the sensible
call, note it in `IMPLEMENTATION-LOG.md`, and keep going. Only stop for the three things listed under
"When to actually stop".

## What you have

A folder `7code-build/` has been placed at the repo root. It contains:

```
_brief/CONTENT-STANDARDS.md          voice, facts, price bands, block rules
content/content-spec.types.ts        the schema you must enforce at build time
content/pages/*.mdx                  10 page specs — home + 9 money pages
content/packages/*.mdx               4 productised-offer pages
content/hub/*.mdx                    3 long-form articles
content/case-studies/_TEMPLATE.mdx   fillable case-study template
```

Every `.mdx` file is **final approved copy**. You render it. **You never rewrite it.** If a spec seems
wrong, log it in `IMPLEMENTATION-LOG.md` under "Copy issues for Nicu" and render it as written.

Each file has YAML front-matter (machine fields) and a body split into blocks delimited by
`## BLOCK: <name>`. Read `content-spec.types.ts` first — it is the contract.

## Step 0 — orient before you build

1. Read `_brief/CONTENT-STANDARDS.md` and `content/content-spec.types.ts` in full.
2. Read `content/pages/ai-automation-agency-uk.mdx` — it is the canonical money page. Every other
   money page has the same 13 blocks in the same order.
3. Inspect the existing codebase. Identify the framework, the router, the styling approach, the design
   tokens, and how the existing `/service/*` pages are built. **Match the existing design system.**
   Do not introduce a new UI library, a new CSS approach, or a new component pattern.
4. Write `IMPLEMENTATION-LOG.md` at the repo root. Append to it as you go: decisions made, assumptions,
   anything Nicu needs to know. This is the only status report he will read.

## Step 1 — Phase 0 technical fixes (no content involved, do these first)

These are live problems on the production site. Fix them before building anything new.

1. **`sitemap.xml` is broken.** It returns HTTP 200 but content that four independent fetchers could
   not parse as XML — most likely a gzip / `Content-Encoding` mismatch. Diagnose with
   `curl -sSI https://www.7code.tech/sitemap.xml` and `curl --compressed`. Fix the generator or the
   response headers. Regenerate and verify it parses.
2. **`7code.ro → 7code.tech` is a 302.** Make it a **301**. A temporary redirect does not consolidate
   link equity, and that domain carries years of citations.
3. **Audit every redirect.** Legacy WordPress URLs still resolve (`/2025/10/16/...`, `/7code-blog/`)
   while `/frequently-asked-questions-faqs/` 404s. Map them, make them all 301, and add the missing
   ones.
4. **`/resources` is a 404 while six child pages exist beneath it.** Build the index page. Add it to
   the primary nav and the footer. Those six comparison pages are currently orphaned.
5. **Homepage below-fold rendering.** Every text-only fetcher returned only the hero, while `/about`,
   `/services` and `/process` returned full bodies. Verify with JavaScript disabled. If below-fold
   sections are client-only mounted, make them server-rendered — otherwise all homepage proof is
   invisible to non-rendering crawlers, including several AI crawlers.
6. **Schema audit.** Check the raw HTML for existing `<script type="application/ld+json">`. Report what
   exists. Then implement whatever is missing from Step 4.
7. **Analytics and tracking.** Install, in this order: Google Tag Manager · GA4 with a custom event on
   every CTA click (event name `cta_click`, params: `page_slug`, `cta_label`, `block_name`) · LinkedIn
   Insight Tag · Meta Pixel · Microsoft Clarity. Wire consent so all of it respects the existing
   `7code_consent` cookie and the Cookie Settings control. There is currently zero lead attribution and
   no retargeting audience — this is why it matters.
8. **Booking.** Every CTA in this content pack points at `/book/<something>`. Implement these routes:
   `/book/discovery`, `/book/quick-scan`, `/book/mvp-scoping`, `/book/technical-call`. Each renders a
   live calendar embed. Put the provider behind a single config constant `BOOKING_PROVIDER` and the
   per-route booking URLs in one config file, so switching tools later is a one-file change. Default to
   **Cal.com** unless the repo already contains a HubSpot Meetings integration, in which case use that.
   Below every embed, render the `cta.reassurance` string from the spec, and a link to the contact form
   as a fallback for people who will not book. **Roughly 15 buttons on the live site currently say
   "Book" and nothing is bookable. This is the single highest-value fix in the whole plan.**

## Step 2 — config constants

Create one config file exporting these. Every template reads from it. Nothing is hardcoded twice.

```
REVIEWER_NAME    = "Nicu Mardari"   // TODO Nicu: change to a second senior engineer.
                                    // The named-reviewer credit only works as an E-E-A-T signal
                                    // if the reviewer differs from the author.
BOOKING_PROVIDER = "cal.com"        // or "hubspot" if already integrated
CLUTCH_RATING    = { value: 4.8, count: 11, url: "https://clutch.co/profile/7code" }
COMPANY          = { legalName: "SEVEN CODE DEVELOPMENT SRL", cui: "38088795",
                     address: "Strada Onisifor Ghibu 26, Cluj-Napoca, Romania",
                     postalCode: "400185", phone: "+40774542081",
                     email: "office@7code.ro", founded: "2017-08-10",
                     url: "https://www.7code.tech" }
```

The specs contain the literal strings `{{REVIEWER_NAME}}` and `{{BOOKING_PROVIDER}}`. Substitute them
at build time from this config.

**Note on `COMPANY.founded`:** the live `/about` page and several directories currently state a
different founding year. 2017 is correct per the company registration. Fix `/about` too.

## Step 3 — the block component system

Build one component per block name. This is the whole architecture — get it right once and every page
is cheap.

**Money-page blocks** (13, fixed order):
`hero · trustStrip · diagnosis · successHorizon · proof · cta · whatWeBuild · howWeDeliver · package · cta · pointOfView · faq · close`

**Package-page blocks** (9):
`hero · trustStrip · whoThisIsFor · whatYouGet · howItRuns · price · notForYouIf · faq · close`

**Homepage blocks** (11):
`hero · trustStrip · router · diagnosis · proof · cta · whyUs · packages · faq · testimonials · close`

**Case-study blocks** (10):
`hero · resultStrip · problem · users · constraints · whatWeBuilt · impact · tags · testimonial · close`

Rules the components must enforce:

- **`trustStrip` always renders above the first `cta`.** This is deliberate and it is the main thing
  we are fixing versus the competitor site we studied, where all proof sits below every ask.
- **One CTA label per page.** Every `cta` block and the hero button render `spec.cta.label` verbatim
  from front-matter. Do not allow a page to define a second label.
- **`proof` service tags render as links**, never plain text. Non-negotiable — unlinked tags are the
  single biggest internal-linking waste on the site we benchmarked.
- **`faq` emits `FAQPage` schema** for every entry, and any 7code service named in an answer renders as
  a link.
- Blocks that appear twice (`cta`) must be idempotent.

## Step 4 — schema.org

Implement, site-wide where noted:

| Schema | Where | Source |
|---|---|---|
| `Organization` | site-wide | `COMPANY` config |
| `LocalBusiness` | site-wide | `COMPANY` config, Cluj-Napoca |
| `AggregateRating` | homepage + money pages | `CLUTCH_RATING` — 4.8 from 11 reviews. Only where `schema.aggregateRating` is set in front-matter. |
| `Service` | money pages | from front-matter `targeting` |
| `FAQPage` | every page with a `faq` block | one entry per FAQ |
| `BreadcrumbList` | all non-root pages | render breadcrumbs in **both** directions — article → hub → home |
| `Article` + `author` | hub articles + blog | author, reviewer, published, updated |

## Step 5 — routing and navigation

**New root-level routes** (these are commercial landing pages, deliberately flat, deliberately not
under `/service/`):

```
/ai-automation-agency-uk          /ai-development-company-uk
/mvp-development-agency-uk        /staff-augmentation-company-uk
/ai-agent-development-company     /rag-development-company
/ai-consultancy-uk                /nearshore-software-development-uk
/ai-agency-uk
```

**New sections:** `/packages/<slug>` (4 pages) · `/hub/<slug>` (3 articles) + a `/hub/` index with
taxonomy · `/resources/` index · `/book/<slug>` (4 routes).

**Keep** the existing `/service/*`, `/expertise/*`, `/case-study/*`, `/about`, `/process`, `/blog`.
The money pages and the service pages do different jobs — money pages rank for a search term, service
pages explain a capability. Do not merge them and do not let them cannibalise: money pages link *down*
to service pages, never the reverse with the same anchor text.

**Navigation changes:**
- Primary nav "Services" currently links to `/service/ai-product-engineering`, orphaning `/services`.
  Point it at `/services`.
- Add `/resources` and `/hub` to the footer.
- There is **no** `/pricing/` page in this plan. That was a deliberate decision — price bands live
  inside FAQ answers and the cost hub article instead. Do not add one.

## Step 6 — build-time validation

Implement these as build errors, from `VALIDATION_RULES` in `content-spec.types.ts`:

- All CTA labels on a page byte-identical to `spec.cta.label`
- `trustStrip` renders before the first `cta`
- Money pages have 10–12 FAQ entries, all emitting schema
- Case-study and proof service tags are links
- No `[UNVERIFIED` string in a `status: approved` spec
- `openItems` empty when `status: approved`
- Exactly one `icpSegment`
- `metaDescription` present
- No banned terms in body copy: leverage · synergy · touch base · circle back · hope this finds you
  well · offshore body shop · "resources" (the word, in prose — the `/resources` URL is fine)
- Every internal link resolves to a real route (fail the build on a 404 target)

Warnings, not errors: title outside 50–60 chars · og image not 1200×630 · mean sentence length above 26.

## Step 7 — quality gates before you open the PR

Run these and fix what they find:

1. Type check and lint clean.
2. Build succeeds with zero validation errors.
3. Every new route returns 200 and renders with JavaScript disabled.
4. Lighthouse on `/` and on `/ai-automation-agency-uk`: performance ≥ 90, accessibility ≥ 95, SEO 100.
   Fix what falls short.
5. Rich Results Test (or the schema validator of your choice) passes on: homepage, one money page, one
   package page, one hub article.
6. `sitemap.xml` includes every new route, parses as valid XML, and is gzip-clean.
7. No console errors on any new page.
8. Mobile viewport check at 375px on every new page type.

## Step 8 — deliver

Commit in logical commits, one per step, with clear messages. Open a **single PR** titled
`Website rebuild: conversion skeleton + 17 new pages`. In the PR description include:

- What shipped, by step
- Every decision you made that Nicu did not specify
- The `IMPLEMENTATION-LOG.md` highlights
- A preview URL if the repo has preview deploys
- Anything you could not do and why

Do not merge. Do not deploy to production.

## When to actually stop and ask

Only these three. Everything else: decide, log, continue.

1. **You cannot determine the framework or the build system**, or the repo is not what the plan assumes.
2. **A change would be destructive or irreversible** — deleting existing routes with traffic, changing
   DNS, modifying production data, anything touching billing or a paid account.
3. **A required credential or account is missing** — GTM container ID, Cal.com account, Meta Pixel ID,
   Clarity project. Implement the integration behind the config constant, leave the ID as a documented
   placeholder, and note it in the PR rather than blocking.

## Context you may find useful

This rebuild came out of a competitive teardown of a UK agency that converts well. The short version of
what we are copying and what we are deliberately doing differently:

**Copying:** one hard-coded conversion template across many keyword-targeted root-level pages · a
diagnosis block that describes the reader's situation before selling · a single CTA repeated · 10–12
published pre-sales objections per page · price bands published where competitors say "it depends" ·
an interlinked content hub feeding the money pages.

**Deliberately different:** proof above the first CTA, not below it · case-study service tags as links ·
a real booking calendar, not just a form · a four-door router on the homepage so a visitor who does not
know what they want has somewhere to land · one explicit disqualifier per page · FAQ answers that link
to money pages · no near-duplicate pages competing for the same term.

Where an implementation choice is ambiguous, that list is the tie-breaker.

# ── END OF PROMPT ─────────────────────────────────────────────────────────────
