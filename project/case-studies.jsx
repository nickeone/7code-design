/* global React, Icon, CSCover, CTAStrip */

const { useState: useStateCS } = React;

const CS_ITEMS = [
  { slug: "wholesum",           kind: "cyan",     num: "01", year: "2025", client: "WholeSum",           title: "Self-serve AI analytics platform for unstructured text",   meta: ["Data / AI",   "16 weeks"], result: "Launched on time, raised funding", metric: { v: "On time", l: "launch & funding" }, tag: "Featured", excerpt: "Upload surveys, reviews, and interviews and get structured, AI-powered insights — built end-to-end on Next.js, Nest.js, and AWS." },
  { slug: "daily8",             kind: "cyan",     num: "02", year: "2022", client: "Daily8",             title: "AI-powered news aggregator for the MENA region",           meta: ["Mobile / Media", "6 months"], result: "Shipped iOS + Android in 6 months", metric: { v: "iOS + Android", l: "stores ready" }, excerpt: "News, podcasts, and videos tailored by interest and country — moderated, summarised, and surfaced by AI on React Native + AWS Lambda + OpenAI." },
  { slug: "revote",             kind: "defence",  num: "03", year: "2023", client: "Eurel International", title: "Remote electronic voting platform for the European Parliament", meta: ["E-Government", "8 months"], result: "Released May 2023 to the EU Parliament", metric: { v: "EU Parliament", l: "live deployment" }, excerpt: "Modern remote voting for MEPs across the EU — five modules, EP-grade infrastructure, eight months from discovery to release. Partner: Eurel International." },
  { slug: "g42-fleet",          kind: "energy",   num: "04", year: "2022", client: "Group 42 (G42)",     title: "Real-time fleet tracking platform for EXPO 2020 Dubai",     meta: ["IoT / Smart Buildings", "2 years"], result: "Deployed for EXPO 2020 Dubai", metric: { v: "EXPO 2020", l: "deployed at scale" }, excerpt: "Custom TCP ingestion, geofence rules, real-time map and trip playback — built for the world's largest expo on React Native + Node.js." },
  { slug: "cloud-of-legacy",    kind: "cyan",     num: "05", year: "2024", client: "Cloud of Legacy",    title: "Cloud-based digital-heritage platform with secure inheritance access", meta: ["Consumer SaaS", "8 months"], result: "MVP launched", metric: { v: "MVP", l: "launched in 8 months" }, excerpt: "Subscription cloud where users designate two heirs who can access documents, photos, and credit cards after death — Next.js, React, Keycloak, 2FA." },
  { slug: "lidl-road-safety",   kind: "cyan",     num: "06", year: "2022", client: "Lidl Romania",       title: "Children's road-safety gamification web app for Lidl Romania", meta: ["Education / Retail CSR", "6 months"], result: "8th edition running with Romanian Police", metric: { v: "8 editions", l: "annual programme" }, excerpt: "Public + private web app for kids and parents — episodes, levels, quizzes, gamification — built with Lidl and the Romanian Police on React + Nest.js." },
  { slug: "founders-factory",   kind: "finance",  num: "07", year: "2024", client: "Founders Factory",   title: "UI overhaul + ongoing engineering for a UK venture studio",   meta: ["Venture Studio / VC", "Ongoing"], result: "Bug-free Tailwind migration, Version 6 live", metric: { v: "Tailwind", l: "migrated foundation" }, excerpt: "Cleared the inherited bug backlog, migrated foundersfactory.com from base CSS to Tailwind on Gatsby + Storyblok, and now ship new components on demand." },
  { slug: "hera",               kind: "health",   num: "08", year: "2025", client: "Hera Health Tech",   title: "AI-powered patient-support app for fertility clinics",        meta: ["Healthcare / FemTech", "3 months MVP"], result: "MVP shipped in 3 months, ongoing engagement", metric: { v: "RAG", l: "verified clinical AI" }, excerpt: "React Native + Serverless on AWS with a LlamaIndex RAG layer over verified clinical content, and a Strapi-powered Admin + Clinic CMS — HIPAA + GDPR ready from day one." },
  { slug: "melsonic",           kind: "cyan",     num: "09", year: "2025", client: "Melsonic",           title: "AI-powered guitar-learning web app with real-time feedback",  meta: ["Music / EdTech", "5 months MVP"], result: "MVP shipped in 5 months", metric: { v: "Real-time", l: "AI feedback" }, excerpt: "Next.js + Nest.js + pixi.js wraps Melsonic's AI engine — record, score against the original, and surface notes correct, missed, or wrong." },
  { slug: "drum-bun",           kind: "ops",      num: "10", year: "2024", client: "Explorom (Drum Bun)", title: "Romanian car-services mobile app — RCA, ITP, vignette in one tap", meta: ["InsurTech / Automotive", "Ongoing"], result: "Live on App Store and Play Store", metric: { v: "3-in-1", l: "compliance app" }, excerpt: "React Native + Node.js with an OCR document pipeline and per-car expiry alerts — verify, purchase, and track every Romanian driver obligation." },
  { slug: "numerize",           kind: "ops",      num: "11", year: "2024", client: "Numerize",           title: "Responsive electronic document management + e-signature platform", meta: ["DocTech / Enterprise", "Ongoing"], result: "Responsive overhaul live for 6,000+ accounts", metric: { v: "6,000+", l: "customer accounts" }, excerpt: "React + Material-UI overhaul of a 17-year French GED platform — OCR-trained invoice pipeline, YouSign e-signatures, Stripe + 3D Secure billing." },
];

const CS_CATS = ["All", "Healthcare", "Finance", "Energy", "Operations", "Defence", "AI / SaaS", "Data / AI"];

// ──────────────────────────────────────────────────────────────────
// V1 — Grid + filter (existing default)
// ──────────────────────────────────────────────────────────────────
function CaseStudiesGrid() {
  const [active, setActive] = useStateCS("All");
  const filtered = active === "All" ? CS_ITEMS : CS_ITEMS.filter(i => i.meta[0] === active);
  const stats = [
    { v: "20+", l: "Projects delivered" },
    { v: "12", l: "Industries served" },
    { v: "98%", l: "Satisfied clients" },
    { v: "$120M+", l: "Revenue impact" },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="stat-row reveal" style={{ marginTop: 0, marginBottom: 56 }}>
          {stats.map((s, i) => (
            <div key={i} className="stat" style={{ transitionDelay: (i * 60) + "ms" }}>
              <div className="stat-value">{s.v}</div>
              <div className="stat-label">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="blog-categories">
          {CS_CATS.map(c => (
            <button key={c} className={"blog-cat" + (c === active ? " is-active" : "")} onClick={() => setActive(c)}>{c}</button>
          ))}
        </div>
        <div className="cs-grid">
          {filtered.map((c, i) => (
            <a key={c.title} href={"#/case-study/" + c.slug} className="cs-card reveal" style={{ transitionDelay: (i % 3 * 80) + "ms" }}>
              <CSCover kind={c.kind} label={c.meta[0]} slug={c.slug} />
              {c.tag && <div className="cs-tag-row"><span className="tag tag--ink">{c.tag}</span></div>}
              <div className="cs-body">
                <div className="cs-meta">
                  {c.meta.map((m, j) => <span key={j}>{m}</span>)}
                </div>
                <h3>{c.title}</h3>
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--cyan-600)", fontWeight: 600, fontSize: 14 }}>
                  <Icon.zap style={{ width: 16, height: 16 }} /> {c.result}
                </div>
                <span className="cs-link">Read case study <Icon.arrow /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────
// V2 — Editorial Index (large numbered list)
// ──────────────────────────────────────────────────────────────────
function CaseStudiesEditorial() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 1080 }}>
        <div className="cs-edit-list">
          {CS_ITEMS.map((c, i) => (
            <a key={c.title} href={"#/case-study/" + c.slug} className="cs-edit-row reveal" style={{ transitionDelay: (i * 50) + "ms" }}>
              <div className="cs-edit-meta">
                <div className="cs-edit-tag">{c.meta[0]}</div>
              </div>
              <div className="cs-edit-body">
                <div className="cs-edit-client">{c.client}</div>
                <h3 className="cs-edit-title">{c.title}</h3>
                <p className="cs-edit-excerpt">{c.excerpt}</p>
              </div>
              <div className="cs-edit-metric">
                <div className="cs-edit-metric-v">{c.metric.v}</div>
                <div className="cs-edit-metric-l">{c.metric.l}</div>
              </div>
              <div className="cs-edit-arrow"><Icon.arrow /></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────
// V3 — Featured story + tab switcher
// ──────────────────────────────────────────────────────────────────
function CaseStudiesFeatured() {
  const [i, setI] = useStateCS(0);
  const item = CS_ITEMS[i];
  return (
    <section className="section">
      <div className="container">
        <div className="cs-feat reveal">
          <div className="cs-feat-cover">
            <CSCover kind={item.kind} label={item.meta[0]} slug={item.slug} />
          </div>
          <div className="cs-feat-body">
            <span className="tag tag--ink"><span className="tag-dot"/> Case study</span>
            <div className="cs-feat-client">{item.client}</div>
            <h2 className="cs-feat-title">{item.title}</h2>
            <p className="cs-feat-excerpt">{item.excerpt}</p>
            <div className="cs-feat-metrics">
              <div>
                <div className="cs-feat-metric-v">{item.metric.v}</div>
                <div className="cs-feat-metric-l">{item.metric.l}</div>
              </div>
              <div>
                <div className="cs-feat-metric-v">{item.meta[1]}</div>
                <div className="cs-feat-metric-l">delivery</div>
              </div>
              <div>
                <div className="cs-feat-metric-v">{item.meta[0]}</div>
                <div className="cs-feat-metric-l">industry</div>
              </div>
            </div>
            <a href={"#/case-study/" + item.slug} className="btn btn--primary">Read full case study <Icon.arrow /></a>
          </div>
        </div>
        <div className="cs-feat-tabs">
          {CS_ITEMS.map((c, j) => (
            <button key={c.title} className={"cs-feat-tab" + (i === j ? " is-active" : "")} onClick={() => setI(j)}>
              <span className="cs-feat-tab-client">{c.client}</span>
              <span className="cs-feat-tab-meta">{c.meta[0]}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────
// V4 — Vertical timeline
// ──────────────────────────────────────────────────────────────────
function CaseStudiesTimeline() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 1040 }}>
        <div className="cs-tl">
          <div className="cs-tl-spine"/>
          {CS_ITEMS.map((c, i) => (
            <div key={c.title} className={"cs-tl-row reveal " + (i % 2 === 0 ? "is-left" : "is-right")} style={{ transitionDelay: (i * 60) + "ms" }}>
              <div className="cs-tl-card">
                <div className="cs-tl-meta">
                  <span>{c.meta[0]}</span>
                </div>
                <div className="cs-tl-client">{c.client}</div>
                <h3 className="cs-tl-title">{c.title}</h3>
                <p className="cs-tl-excerpt">{c.excerpt}</p>
                <div className="cs-tl-result">
                  <Icon.zap style={{ width: 16, height: 16 }} /> {c.result}
                </div>
                <a href={"#/case-study/" + c.slug} className="cs-link">Read case study <Icon.arrow /></a>
              </div>
              <div className="cs-tl-node">
                <div className="cs-tl-node-inner"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────
// V5 — Showcase (Tallium-inspired large cards w/ glow + mockup)
// ──────────────────────────────────────────────────────────────────
function ShowcaseMockup({ kind }) {
  // Inline product mockup illustrations per kind. Browser/phone chrome
  // with abstract content blocks — keeps brand cyan accent throughout.
  if (kind === "health" || kind === "cyan") {
    // Mobile app mockup
    return (
      <div className="sc-mock sc-mock--phone">
        <div className="sc-phone">
          <div className="sc-phone-notch"/>
          <div className="sc-phone-screen">
            <div className="sc-app-bar">
              <div className="sc-app-avatar"/>
              <div className="sc-app-bars">
                <div/><div/>
              </div>
            </div>
            <div className="sc-app-card sc-app-card--accent">
              <div className="sc-app-row sc-row--md"/>
              <div className="sc-app-row sc-row--sm"/>
              <div className="sc-app-cta"/>
            </div>
            <div className="sc-app-list">
              <div className="sc-app-item"><div className="sc-app-dot"/><div className="sc-app-lines"><div/><div/></div></div>
              <div className="sc-app-item"><div className="sc-app-dot"/><div className="sc-app-lines"><div/><div/></div></div>
              <div className="sc-app-item"><div className="sc-app-dot"/><div className="sc-app-lines"><div/><div/></div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // Browser dashboard mockup
  return (
    <div className="sc-mock sc-mock--browser">
      <div className="sc-browser">
        <div className="sc-browser-bar">
          <span className="sc-dot"/><span className="sc-dot"/><span className="sc-dot"/>
          <div className="sc-browser-url"/>
        </div>
        <div className="sc-browser-body">
          <div className="sc-browser-side">
            <div/><div/><div/><div/><div/>
          </div>
          <div className="sc-browser-main">
            <div className="sc-stat-row">
              <div className="sc-stat"><div className="sc-stat-v"/><div className="sc-stat-l"/></div>
              <div className="sc-stat"><div className="sc-stat-v"/><div className="sc-stat-l"/></div>
              <div className="sc-stat"><div className="sc-stat-v"/><div className="sc-stat-l"/></div>
            </div>
            <div className="sc-chart">
              <svg viewBox="0 0 280 80" preserveAspectRatio="none">
                <defs>
                  <linearGradient id={"sc-grad-"+kind} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--cyan-500)" stopOpacity="0.45"/>
                    <stop offset="100%" stopColor="var(--cyan-500)" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,60 L40,45 L80,52 L120,30 L160,38 L200,18 L240,28 L280,12 L280,80 L0,80 Z"
                      fill={"url(#sc-grad-"+kind+")"}/>
                <path d="M0,60 L40,45 L80,52 L120,30 L160,38 L200,18 L240,28 L280,12"
                      fill="none" stroke="var(--cyan-500)" strokeWidth="2"/>
              </svg>
            </div>
            <div className="sc-table">
              <div className="sc-table-row"><div/><div/><div/></div>
              <div className="sc-table-row"><div/><div/><div/></div>
              <div className="sc-table-row"><div/><div/><div/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseStudiesShowcase() {
  const [active, setActive] = useStateCS("All");
  const filtered = active === "All" ? CS_ITEMS : CS_ITEMS.filter(i => i.meta[0] === active);
  return (
    <section className="section">
      <div className="container">
        <div className="blog-categories" style={{ marginBottom: 48 }}>
          {CS_CATS.map(c => (
            <button key={c} className={"blog-cat" + (c === active ? " is-active" : "")} onClick={() => setActive(c)}>{c}</button>
          ))}
        </div>
        <div className="sc-grid">
          {filtered.map((c, i) => (
            <a key={c.title} href={"#/case-study/" + c.slug} className="sc-card reveal" style={{ transitionDelay: (i % 2 * 100) + "ms" }}>
              <div className="sc-glow"/>
              <div className="sc-card-inner">
                <div className="sc-card-text">
                  <div className="sc-card-head">
                    <span className="sc-card-name">{c.client}</span>
                    <span className="sc-card-arrow"><Icon.arrow /></span>
                  </div>
                  <p className="sc-card-desc">{c.excerpt}</p>
                  <div className="sc-card-tags">
                    <span className="sc-tag">{c.meta[0]}</span>
                    <span className="sc-tag">{c.meta[1]}</span>
                    <span className="sc-tag sc-tag--accent">{c.metric.v} {c.metric.l}</span>
                  </div>
                </div>
                <div className="sc-card-art">
                  <ShowcaseMockup kind={c.kind}/>
                </div>
              </div>
            </a>
          ))}
        </div>
        {filtered.length > 0 && (
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <a href="#/blog" className="btn btn--ghost">More case studies <Icon.arrow /></a>
          </div>
        )}
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────
// V6 — Magazine (asymmetric: one hero + smaller cards)
// ──────────────────────────────────────────────────────────────────
function CaseStudiesMagazine() {
  const [hero, ...rest] = CS_ITEMS;
  return (
    <section className="section">
      <div className="container">
        <div className="mag-grid">
          <a href={"#/case-study/" + hero.slug} className="mag-hero reveal">
            <div className="mag-hero-cover"><CSCover kind={hero.kind} label={hero.meta[0]} slug={hero.slug} /></div>
            <div className="mag-hero-body">
              <span className="mag-kicker"><span className="mag-dot"/> Featured story</span>
              <h2 className="mag-hero-title">{hero.title}</h2>
              <p className="mag-hero-excerpt">{hero.excerpt}</p>
              <div className="mag-hero-row">
                <div className="mag-hero-metric">
                  <div className="mag-hero-metric-v">{hero.metric.v}</div>
                  <div className="mag-hero-metric-l">{hero.metric.l}</div>
                </div>
                <span className="mag-hero-link">Read the story <Icon.arrow /></span>
              </div>
            </div>
          </a>
          <div className="mag-side">
            {rest.slice(0, 3).map((c, i) => (
              <a key={c.title} href={"#/case-study/" + c.slug} className="mag-mini reveal" style={{ transitionDelay: (i * 60) + "ms" }}>
                <div className="mag-mini-body">
                  <div className="mag-mini-meta">{c.meta[0]}</div>
                  <div className="mag-mini-title">{c.title}</div>
                  <div className="mag-mini-metric">{c.metric.v} <span>{c.metric.l}</span></div>
                </div>
                <Icon.arrow />
              </a>
            ))}
          </div>
        </div>
        <div className="mag-row">
          {rest.slice(3).map((c, i) => (
            <a key={c.title} href={"#/case-study/" + c.slug} className="mag-card reveal" style={{ transitionDelay: (i * 60) + "ms" }}>
              <div className="mag-card-cover"><CSCover kind={c.kind} label={c.meta[0]} slug={c.slug} /></div>
              <div className="mag-card-body">
                <div className="mag-mini-meta">{c.meta[0]}</div>
                <h3>{c.title}</h3>
                <div className="mag-mini-metric">{c.metric.v} <span>{c.metric.l}</span></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────
// V7 — Stack (full-width alternating stories)
// ──────────────────────────────────────────────────────────────────
function CaseStudiesStack() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 1200 }}>
        <div className="stk-list">
          {CS_ITEMS.map((c, i) => (
            <a key={c.title} href={"#/case-study/" + c.slug} className={"stk-row reveal " + (i % 2 === 0 ? "is-even" : "is-odd")} style={{ transitionDelay: (i * 60) + "ms" }}>
              <div className="stk-cover"><CSCover kind={c.kind} label={c.meta[0]} slug={c.slug} /></div>
              <div className="stk-body">
                <div className="stk-meta">
                  <span>{c.meta[0]}</span>
                  <span className="stk-divider"/>
                  <span>{c.meta[1]}</span>
                </div>
                <div className="stk-client">{c.client}</div>
                <h2 className="stk-title">{c.title}</h2>
                <p className="stk-excerpt">{c.excerpt}</p>
                <div className="stk-result">
                  <div className="stk-result-v">{c.metric.v}</div>
                  <div className="stk-result-l">{c.metric.l}</div>
                </div>
                <span className="stk-link">Read case study <Icon.arrow /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────
// V8 — Mosaic (bento grid, mixed sizes)
// ──────────────────────────────────────────────────────────────────
function CaseStudiesMosaic() {
  // Layout slots: each item gets a spec on the bento grid.
  // Grid is 4 cols × N rows. Specs are [colSpan, rowSpan, kind className].
  const layout = [
    { span: "mos--xl",  variant: "image" },   // big featured w/ cover
    { span: "mos--md",  variant: "metric" },  // metric panel
    { span: "mos--md",  variant: "quote" },   // text + quote
    { span: "mos--lg",  variant: "image" },   // wide image card
    { span: "mos--md",  variant: "metric" },  // metric
    { span: "mos--lg",  variant: "image" },   // wide image card
  ];
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 1240 }}>
        <div className="mos-grid">
          {CS_ITEMS.map((c, i) => {
            const L = layout[i] || layout[0];
            return (
              <a key={c.title} href={"#/case-study/" + c.slug} className={"mos-card reveal " + L.span + " mos--" + L.variant} style={{ transitionDelay: (i * 50) + "ms" }}>
                {L.variant === "image" && (
                  <>
                    <div className="mos-cover"><CSCover kind={c.kind} label={c.meta[0]} slug={c.slug} /></div>
                    <div className="mos-overlay">
                      <div className="mos-meta">{c.meta[0]}</div>
                      <div className="mos-title">{c.title}</div>
                      <div className="mos-arrow"><Icon.arrow /></div>
                    </div>
                  </>
                )}
                {L.variant === "metric" && (
                  <div className="mos-metric-card">
                    <div className="mos-metric-tag">{c.meta[0]}</div>
                    <div className="mos-metric-v">{c.metric.v}</div>
                    <div className="mos-metric-l">{c.metric.l}</div>
                    <div className="mos-metric-foot">
                      <span>{c.client}</span>
                      <Icon.arrow />
                    </div>
                  </div>
                )}
                {L.variant === "quote" && (
                  <div className="mos-quote-card">
                    <div className="mos-quote-mark">&ldquo;</div>
                    <p className="mos-quote-text">{c.excerpt}</p>
                    <div className="mos-quote-foot">
                      <div>
                        <div className="mos-quote-client">{c.client}</div>
                        <div className="mos-quote-meta">{c.meta[0]}</div>
                      </div>
                      <Icon.arrow />
                    </div>
                  </div>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────
// Page wrapper — switches body by variant prop
// ──────────────────────────────────────────────────────────────────
function CaseStudiesPage({ variant = "grid" }) {
  const headlines = {
    grid:      { eyebrow: "Case studies", h1: "Outcomes, not just deliverables", sub: "A selection of products we've shipped with our partners — across healthcare, finance, energy, defence and beyond." },
    editorial: { eyebrow: "Selected work · 2024–2026", h1: "Six stories, six outcomes.", sub: "An editorial index of the work we're proudest of, with the numbers attached." },
    featured:  { eyebrow: "Featured case studies", h1: "Each one moved a metric.", sub: "Hover any project below to dig into how we built it and the results it produced." },
    timeline:  { eyebrow: "A short history", h1: "How we've spent the last two years", sub: "From early-stage MVPs to large-scale platform launches — in roughly the order they shipped." },
    showcase:  { eyebrow: "Recent case studies", h1: "Work we're proud to ship", sub: "Learn more about our clients, the types of projects we work with, our process, and the technologies we use to build software." },
    magazine:  { eyebrow: "The portfolio", h1: "Stories worth telling", sub: "An editorial look at the products we've shipped — what they do, who they're for, and what they moved." },
    stack:     { eyebrow: "Selected work", h1: "In-depth stories", sub: "Take your time — each one is a full case, top to bottom." },
    mosaic:    { eyebrow: "Portfolio", h1: "A snapshot of recent work", sub: "Every project earned its real estate — by what it shipped, what it changed, or what someone said about it." },
  };
  const h = headlines[variant] || headlines.grid;
  let Body;
  if (variant === "editorial") Body = <CaseStudiesEditorial />;
  else if (variant === "featured") Body = <CaseStudiesFeatured />;
  else if (variant === "timeline") Body = <CaseStudiesTimeline />;
  else if (variant === "showcase") Body = <CaseStudiesShowcase />;
  else if (variant === "magazine") Body = <CaseStudiesMagazine />;
  else if (variant === "stack") Body = <CaseStudiesStack />;
  else if (variant === "mosaic") Body = <CaseStudiesMosaic />;
  else Body = <CaseStudiesGrid />;

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>{h.eyebrow}</span>
          <h1>{h.h1}</h1>
          <p>{h.sub}</p>
        </div>
      </section>
      {Body}
      <CTAStrip />
    </div>
  );
}

window.CaseStudiesPage = CaseStudiesPage;
