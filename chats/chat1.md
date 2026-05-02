# Professional Services Site

_Started 2026-05-01 14:39 UTC_

---

## User



## Assistant

I'll start by exploring the Figma file and the design system to understand what we're working with.

_[tool: fig_ls]_

_[tool: fig_read]_

_[tool: list_files]_

The design system folder is empty, so I'll work entirely from the Figma file. Let me explore the relevant pages.

_[tool: fig_read]_

_[tool: fig_ls]_

_[tool: fig_ls]_

_[tool: fig_ls]_

_[tool: fig_ls]_

_[tool: fig_ls]_

_[tool: fig_ls]_

_[tool: fig_ls]_

_[tool: fig_ls]_

_[tool: fig_ls]_

_[tool: fig_ls]_

Let me dig into the homepage and brand guide pages.

_[tool: fig_read]_

_[tool: fig_read]_

_[tool: fig_read]_

_[tool: fig_read]_

_[tool: fig_read]_

_[tool: fig_read]_

I have a great picture of the homepage. Let me snip earlier exploration and then continue gathering brand details. I have enough info to start building.

_[tool: fig_ls]_

_[tool: fig_ls]_

_[tool: fig_ls]_

_[tool: fig_ls]_

[I'll snip earlier exploration messages and continue.]

_[tool: snip]_

_[tool: snip]_

_[tool: fig_read]_

_[tool: fig_read]_

_[tool: fig_read]_

_[tool: fig_ls]_

I have enough context. Let me look at a few key components and then ask a few clarifying questions before building.

_[tool: fig_ls]_

_[tool: fig_read]_

_[tool: snip]_

I have a strong picture of the 7Code brand:
- **Brand**: 7Code — software product agency
- **Type**: DM Sans (display + bold headlines), Inter (body)
- **Colors**: Cyan/teal accent (rgb(6,182,212), rgb(33,186,198), rgb(12,156,181)), navy text rgb(15,23,42), slate text rgb(71,85,105), bg white + rgb(250,250,250)
- **Tone**: Approachable, precise, formal-leaning
- **Site structure** (from Sitemap): Home, Expertise, Our Process, About, Blog, Contact

The Figma desktop homepage has these sections: Nav → Hero (with pattern grid + product image) → Trusted by logos → Case Studies → Why Choose 7Code (4 cards + 4 stat cards) → Our Expertise (3 industries) → Our Services (cards) → Testimonials → CTA strip → Footer.

Before I commit to a build, a few quick questions:

_[tool: questions_v2]_

## User

Questions answered:
- scope: Multi-page site: Home, Expertise, Process, About, Blog, Contact
- fidelity: Use it as a reference, take liberties to make it feel more polished
- interactivity: Decide for me
- tweaks: Decide for me
- hero_image: Decide for me
- copy: Use Figma copy but tighten/improve it
- variations: Yes — give me 2–3 hero variations as Tweaks

## Assistant

Got it. Let me build a multi-page 7Code site, faithful to the brand but more polished. I'll start by gathering the remaining design details I need, then build.

_[tool: update_todos]_

_[tool: fig_read]_

_[tool: fig_read]_

_[tool: fig_read]_

_[tool: snip]_

I have the logo, brand fonts and colors. Now let me create the project structure and start building. I'll save the logo SVG and key assets, then build the site.

_[tool: fig_copy_files]_

_[tool: snip]_

Now I'll build the entire 7Code site. Given size, I'll write a single-file design but split into pages via hash routing for simplicity, with all components inline. Let me build it.

_[tool: write_file]_

_[tool: snip]_

Now I'll write the icons file and the main shell. Let me create components.jsx with all building blocks (logo, icons, nav, footer, sections), then the main app.

_[tool: write_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: snip]_

Now I'll build the homepage with hero variations.

_[tool: write_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: snip]_

_[tool: copy_starter_component]_

_[tool: snip]_

_[tool: write_file]_

_[tool: snip]_

_[tool: list_files]_

Let me check the existing files I have to make sure everything's in place.

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

Good, all files are in place. Let me check the page loads cleanly.

_[tool: done]_

Empty root — let me check the logs.

_[tool: get_webview_logs]_

The `useTweaks` hook returns a different shape. Let me check.

_[tool: grep]_

Returns `[t, setTweak]` (array). Fix:

_[tool: str_replace_edit]_

_[tool: done]_

The 7Code site is live with all six pages (Home, Expertise, Process, About, Blog, Contact) wired up via hash navigation, plus tweaks for hero variant and accent color.

_[tool: fork_verifier_agent]_

Built a full multi-page site for 7Code grounded in the Figma design (cyan accent, DM Sans/Inter, slate ink palette).

**Pages** — Home, Expertise, Process, About, Blog, Contact (hash-routed nav).

**Home hero** has 3 variations exposed via Tweaks:
- **Mockup** — pattern grid + 3D dashboard mockup (Figma-faithful)
- **Terminal** — dark IDE-style command transcript
- **Bold split** — oversized typography with floating capability badges

**Tweaks panel** also includes accent color (cyan / indigo / emerald / orange) — recolors the entire site live.

**Interactive bits** — scroll reveals, mobile nav drawer, testimonial slider with dots + arrows, contact form with validation + success state, blog category filter, hover animations on cards.

Toggle Tweaks in the toolbar to compare hero variants and accent colors.

## User

Verifier agent check completed

## Assistant

Both fair — let me fix them.

_[tool: grep]_

Two fixes:

1. Tag stretching in grids → add `width: max-content` and `justify-self: start`
2. Mobile nav breakpoint 960px → 820px

_[tool: str_replace_edit]_

Also need to check the `.eyebrow` (used inside grid section-heads with `justifyContent: "center"`):

_[tool: grep]_

The eyebrow has the same issue — inline-flex inside grid (section-head) stretches. Fix:

_[tool: str_replace_edit]_

Also page-hero eyebrows have inline `justifyContent: "center"` set in the React. Need to add `justifySelf` too. Easier to fix in CSS:

_[tool: str_replace_edit]_

That edit was a no-op. Let me actually add `width: max-content` to eyebrow:

_[tool: read_file]_

_[tool: str_replace_edit]_

Now `.eyebrow` won't stretch in grid — and existing `justify-self: center` (or the inline `justifyContent: center` flex behavior) lays it out properly.

_[tool: done]_

Fixed both verifier issues — tags/eyebrows no longer stretch in grid layouts, and the mobile nav breakpoint moved from 960px to 820px so desktop nav stays visible at common laptop widths.

## User

is it the design responsive?

## Assistant

Yes — there are responsive media queries throughout, but let me actually check the breakpoints across viewport sizes to confirm they hold up.

_[tool: grep]_

Let me visually verify at three viewports — desktop, tablet, mobile.

_[tool: save_screenshot]_

Setting `body.style.width` won't actually trigger media queries since the viewport doesn't change. Let me use a different approach — run an iframe at different widths or just probe the breakpoints with eval. The simpler way is to use the verifier which can iframe at custom sizes. Let me just visually check current viewport states by evaluating layout at media-query widths through CSS containment isn't perfect either.

Let me just look at what we have at the current preview width to verify desktop, then check the source for any obvious gaps:

_[tool: view_image]_

_[tool: snip]_

I see two issues from that screenshot:
1. There's a duplicate text-rendered nav ("HomeExpertiseProcessAboutBlog") leaking out — looks like the mobile drawer content is showing
2. body width manipulation is messing up layout

Let me investigate the actual mobile drawer rendering — it's probably visible by default.

_[tool: grep]_

_[tool: grep]_

Found the bug — `.nav-mobile` has no `display: none` outside the media query, so its links render in the document flow at desktop. The transform/inset/translate styling only applies in the media query, so on desktop the links render as plain stacked anchors leaking onto the page.

_[tool: str_replace_edit]_

Now let me verify with a targeted check at three real viewport sizes:

_[tool: fork_verifier_agent]_

Yes, the design is responsive — there are breakpoints at 820px (nav switches to hamburger), 960px (multi-column grids collapse), 700px (services/testimonials), and 600px (form rows). 

I just fixed a bug where the mobile nav drawer was leaking visible text on desktop (it had no `display: none` outside its media query). I've spawned a verifier to confirm responsiveness at 1440 / 768 / 375.

## User

can we make logo and get in touch button cyan also?

## Assistant

I'll make the "7" in the logo cyan and the nav CTA button cyan.

_[tool: grep]_

_[tool: grep]_

Let me see the current logo SVG and the CTA button styles:

_[tool: read_file]_

_[tool: grep]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

The "7" in the logo is now cyan, and the "Get in touch" button is cyan to match the screenshot.

## User

can you add services menu, use you own design system

## Assistant

I'll add a Services mega-menu with three columns matching that pattern, using my design system. Let me check the current nav structure first.

_[tool: read_file]_

_[tool: grep]_

_[tool: snip]_

Now I'll add a Services mega-menu. The pattern in the screenshot shows three large cards with icon, title, sub-bullets, and "Learn more" — plus a footer with "Book a meeting". Let me build a separate mega-menu variant for services.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

_[tool: snip]_

Added a Services mega-menu — three cards (Web & Mobile App Development / Cloud Infrastructure & DevOps / AI & Process Automation), each with bullets + "Learn more" arrow, plus a footer row with "Tailored solutions for every need" and a "Book a meeting" link. Hover-activated with the same timing as the Expertise menu, and styled with my own design system (slate-50 cards, cyan accent on hover, ink/slate type, shadow + rounded corners matching the rest of the site).

Hover "Services" in the nav to see it.

## User

remove home and process  button from navbar and add case studies

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now remove "Process" link and update mobile nav:

_[tool: read_file]_

_[tool: read_file]_

Now remove Process from desktop & mobile, add Case Studies to mobile, drop Home from mobile too:

_[tool: str_replace_edit]_

Now I need a Case Studies page. Let me add a route + simple page:

_[tool: grep]_

Let me add a CaseStudies page and route. First, let me see existing pages structure:

_[tool: grep]_

Let me append a CaseStudiesPage. I need an `Icon.search` for a filter — let me check what icons exist:

_[tool: grep]_

I have everything I need. Now let me append a CaseStudiesPage to pages.jsx — built around the existing `CaseStudies` section component plus a hero, results stats, and filterable categories.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

The `CaseStudiesPage` references `CSCover` which is a window global — let me make sure it's accessible in pages.jsx scope:

_[tool: grep]_

Already declared. Let me verify it loads cleanly:

_[tool: done]_

Done — Home and Process are out of the navbar; Case Studies is in (between Services and Expertise). The Case Studies page itself has hero, impact stats (50+ products / 98% retention / etc.), category filter, and the same case-study card grid.

## User

can you come with 2-3 new bersion of case studies page?

## Assistant

I'll create 2-3 alternative versions of the Case Studies page and let you toggle between them via Tweaks. Let me think about what to vary:

- **Current (Grid)** — category-filtered card grid
- **V2: Editorial Index** — large numbered list, year/industry on left, title + result on right (like a newspaper or portfolio index)
- **V3: Featured Story + Tabs** — big hero case study at top with stats, then horizontal tabs to swap between others
- **V4: Timeline** — chronological vertical timeline with alternating sides

Let me build V2, V3, and V4.

_[tool: grep]_

Let me read the current grid version + add the variants in a new file to keep things clean:

_[tool: read_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: write_file]_

Now I need to wire the new file into index.html and replace the old CaseStudiesPage. Let me check the current setup:

_[tool: grep]_

_[tool: grep]_

Now let me remove the old CaseStudiesPage from pages.jsx, wire in the new file + CSS, and add a Tweak to switch variants.

_[tool: read_file]_

Now let me remove the old CaseStudiesPage from pages.jsx and wire up the new file:

_[tool: read_file]_

Now I'll edit pages.jsx to remove the old CaseStudiesPage block, and update index.html to load the new files + add a Tweak:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

Added 3 new Case Studies layouts as Tweaks (alongside the original Grid):

- **Editorial** — large numbered index list, year + tag + title + excerpt + metric + arrow per row
- **Featured** — big hero card with cover, metrics, and a 6-tab switcher to swap projects
- **Timeline** — alternating left/right cards along a vertical spine with cyan number nodes

Open Tweaks → "Case studies layout" to flip between them. Headlines and eyebrow change per variant too.

_[tool: fork_verifier_agent]_

Done — three new Case Studies layouts wired up as Tweaks. Flip between Grid / Editorial / Featured / Timeline from the Tweaks panel.

## User

can you inspire with case studies from this website? 

https://tallium.com/en/our-works

## Assistant

Let me check what's on that page.

_[tool: questions_v2]_

_[tool: web_fetch]_

Let me grab a screenshot to see the actual visual styling:

## User

Questions answered:
- tallium_signature: Big colored card with product mockup + colored blur glow behind it
- color_per_case: No — keep my current cyan accent everywhere
- add_or_replace: Add as a new 'Showcase' variant (keep the other 4)

## Assistant

_[tool: snip]_

Adding a 5th "Showcase" variant: large colored cards with product mockup + soft cyan glow blur, alternating two-up layout, "More case studies" CTA at bottom.

_[tool: read_file]_

I need to look at what CSCover renders so I can build a richer "mockup" inside the showcase card.

_[tool: grep]_

_[tool: snip]_

_[tool: read_file]_

_[tool: snip]_

Now I'll add the Showcase variant. It needs a richer mockup graphic per case, so I'll build it inline rather than reuse CSCover.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

Now adding the showcase styles, registering the variant in index.html, and the radio option:

_[tool: str_replace_edit]_

_[tool: write_file]_

_[tool: str_replace_edit]_

I'll switch to showcase variant for the user and verify.

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Added a 5th "Showcase" variant — Tallium-inspired large dark cards with a soft cyan glow blur, client name + arrow button, description, tag chips (industry / timeline / metric in cyan), and a product mockup (phone for healthcare/AI cases, browser dashboard for the rest) tucked in the bottom-right. The grid is two-up with a "More case studies" CTA at the bottom. Already set as your active variant.

## User

Verifier agent check completed

## Assistant

Fixing the tag wrap issue:

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

Fixed — `white-space: nowrap` on `.sc-tag` so the metric pills stay on one line.

## User

can you generate ohter versions of case study representation? still not satisfied with the result

## Assistant

I see two issues in your screenshot: the giant "Read case study →" arrow is way oversized (a CSS bug from somewhere — Icon.arrow with no size cap inside `.cs-link`), and you also want fresh layout ideas beyond what we've tried.

Let me fix the arrow first, then add some genuinely different layouts.

_[tool: grep]_

The `.cs-link svg` has no size, so Icon.arrow inherits its viewBox at full size. Fix:

_[tool: str_replace_edit]_

_[tool: snip]_

Now adding 3 fresh, genuinely different variants. Let me make them more editorial/distinct than what we have:
- **Magazine** — asymmetric magazine grid with one large featured + smaller cards
- **Stack** — vertical full-bleed stories, alternating image/text sides, big numbers
- **Mosaic** — bento-style grid with mixed sizes, hover reveals, no two cards alike

_[tool: read_file]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: write_file]_

_[tool: str_replace_edit]_

_[tool: done]_

Fixed the giant arrow bug, then added 3 fresh layouts for a total of 8:

- **Magazine** — 1 hero card (cover + title + metric) + 3 mini-list rows on the right, then 2 wide split cards below
- **Stack** — full-width alternating story rows, big 36px titles, dashed-border metric stamp, 4/3 cover that scales on hover
- **Mosaic** — bento bento grid mixing image cards, dark metric tiles, and cyan quote cards in 4 different sizes

Tweaks panel now has all 8 — Grid / Editorial / Featured / Timeline / Showcase / Magazine / Stack / Mosaic. Try the Stack one for an editorial vibe or Mosaic if you want something with rhythm.

_[tool: fork_verifier_agent]_

Done — fixed the oversized arrow and shipped 3 brand-new layouts (Magazine, Stack, Mosaic). 8 case-study variants total in the Tweaks panel.

## User

great, keep stack version

## Assistant

Will keep Stack as the locked-in case-studies variant. No changes needed.

## User

now build few versions of   full case study page

## Assistant

Let me check what's there now and what data we have for a single case study.

_[tool: grep]_

_[tool: list_files]_

No case-study detail page yet. Let me ask a few quick questions before building — these pages can go in very different directions.

_[tool: questions_v2]_

## User

Questions answered:
- variants_count: 4 variants
- directions: Decide for me
- case_to_use: Decide for me
- sections: Hero (cover + title + summary stats), Project facts panel (client, industry, duration, team, year), The challenge / problem, Our approach / solution, Product mockups gallery (browser / mobile), Results & metrics (big numbers), Testimonial quote, Next case CTA at bottom
- tone: Decide for me
- page_route: #/case-study — single page, switch variants via Tweaks

## Assistant

I'll build 4 distinct full case study layouts with the sections you picked, using Helix Health as the showcase case (it has the strongest narrative + metrics). Layouts:

- **Long-read** — sticky TOC sidebar, editorial body copy, magazine vibe
- **Metric-heavy** — bold marketing, huge stat tiles, before/after, testimonial card
- **Visual** — full-bleed cover, alternating mockup gallery, results in a clean strip
- **Two-column sticky** — facts pinned left, narrative scrolls right, anchored sections

Tone will lean confident-editorial (between corporate and magazine) — feels right for the 7Code brand. Let me start.

_[tool: grep]_

Good, I have the design tokens. Now let me build the case study detail page with 4 variants.

_[tool: write_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: snip]_

_[tool: fork_verifier_agent]_

Built the full case study detail page at `#/case-study` with 4 variants:

- **Long-read** — sticky TOC sidebar with active-section tracking, editorial body type, hero browser mockup, pillar grid, results, testimonial
- **Metric** — dark hero with huge client name + 3 hero stats, glow blur, before/after split, dark results section, testimonial card
- **Visual** — full-bleed cyan industry cover with overlay, two alternating split sections (text + phone, browser + text), clean results strip
- **Sticky** — pinned project facts card on the left (client, industry, year, duration, team, region + 2 results + CTA), narrative scrolls on the right

Helix Health (Telehealth) is the showcase case. Includes hero, project facts, challenge with bullet points, approach with 4 pillars, browser & phone mockups, 4 results metrics, testimonial, and "next case" CTA. Switch layouts via Tweaks → "Case study page layout".

## User

Verifier agent check completed

## Assistant

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

Fixed — added `minmax(0, 1fr)` to all grid columns and `min-width: 0` to article so the long-read no longer overflows. Same fix applied to metric, visual, and sticky variants for safety.

## User

where can i see case study full page?

## Assistant

It's at **`index.html#/case-study`** — you're already on it (longread variant).

But there's no link from anywhere yet. The "Read case study" links on the listing page still point to `#/blog`. Want me to wire those up so clicking any case from the Stack page opens this detail view?

## User

case study full page should be a single page repserneting a project, and shoule be linkedin with each case study project

## Assistant

Got it. Let me wire it up so each case in the listing pages opens a real per-project detail page.

Plan: switch routing to `#/case-study/<slug>`, add slugs to each case in `CS_ITEMS`, point all listing-page card links to the detail route, and have the detail page load data for the slug from the URL (still using the rich Helix Health content for `helix-health`, with simpler auto-generated content for the others so every link works).

_[tool: read_file]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

Let me look at the routing and case study detail page to wire slugs in.

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

Now let me look at the case-study.jsx structure to understand how to wire it up by slug:

_[tool: grep]_

Let me look at the full Helix data + how it's used so I can generalize cleanly.

_[tool: read_file]_

Now I'll plan: build a `CASES` map keyed by slug with full data for all 6 projects, switch route to `#/case-study/<slug>`, update all listing links, and pass the case object down through `CaseStudyPage`.

_[tool: read_file]_

_[tool: read_file]_

The data uses `CSD` directly throughout the variants. Cleanest path: keep `CSD` as the in-scope name but reassign it inside `CaseStudyPage` based on slug — but it's `const`. Better: refactor to look up the case via a `useCase()` helper that returns the active case, and replace `CSD.x` with `c.x` references via context. That's a big diff though.

Lightest-touch option: rename `CSD` → `getCSD()` returning a global mutable that we set before render. Even simpler: keep the variants reading `CSD`, but make `CSD` a getter that reads from a module-level `currentCase`. Actually simplest: use `let CSD` instead of `const`, and have `CaseStudyPage` set it before rendering body. Since render is sync, that works.

Let me do that approach — minimal diff. I'll:
1. Add a `CASES` map keyed by slug at top
2. Change `const CSD = {...}` to `let CSD = CASES["helix-health"]`
3. In `CaseStudyPage({ slug, variant })`, set `CSD = CASES[slug] || CASES["helix-health"]` before returning JSX
4. Update routing to parse slug
5. Update listing links

_[tool: read_file]_

Let me grep CSCover signature and see how kind is rendered, then build the cases map:

_[tool: grep]_

Now I'll write the cases map and refactor. Strategy: add `CASES` keyed by slug, switch `CSD` to `let`, reassign in `CaseStudyPage` body using slug.

_[tool: str_replace_edit]_

## Assistant

## User

can i upgrade here also?

## Assistant

## Assistant

Let me check the current state of case-study.jsx first:

_[tool: read_file]_

_[tool: snip]_

Good — CASES map is already there. Let me check how routing and linking look now:

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

Everything is already wired up correctly! The routing, slug parsing, CASES map, and all listing links are all in place. Let me just verify it works end-to-end:

_[tool: done]_

It's all already wired up! Here's how it works:

- **Each case study card** on the listing page (Stack, Grid, Magazine, etc.) links to `#/case-study/<slug>` — e.g. `#/case-study/helix-health`, `#/case-study/northbank`, etc.
- **Each detail page** has full unique content for all 6 projects: Helix Health, NorthBank, Atlas Energy, Northwind Logistics, Vector Defence, and OctoLabs
- **"Next case study" CTA** at the bottom of each detail page chains through the full set
- **The layout variant** (Long-read, Metric, Visual, Sticky) applies to whichever case you're viewing

Click any row in the Stack listing to go to that project's detail page. You can switch the layout via Tweaks → "Case study page layout".

