/* global React, Icon, CTAStrip */
/* Blog listing + single post detail, slug-routed */

const { useState: useStateBL, useEffect: useEffectBL } = React;

// ─────────────────────────────────────────────────────────────────
// Blog post data
// ─────────────────────────────────────────────────────────────────
const POSTS = [
  {
    slug: "monoliths-in-2026",
    cat: "Engineering",
    title: "Why we still bet on monoliths in 2026",
    subtitle: "An honest take on why distributed systems are still overkill for most products — and what to reach for instead.",
    date: "Apr 28, 2026",
    read: "8 min read",
    author: { name: "Andrei Popa", role: "Co-founder, Engineering", initial: "A" },
    cover: "ink",
    featured: true,
    body: [
      { type: "lead", text: "Every year the industry tells us to break things apart. Microservices, then serverless, then micro-frontends. And every year, most teams ship slower, debug harder, and run bigger cloud bills. Here's what we actually do." },
      { type: "h2", text: "The distributed systems tax" },
      { type: "p", text: "When you split a monolith into services, you don't eliminate complexity — you distribute it. Now your team needs to reason about network partitions, distributed transactions, eventual consistency, and service discovery. For a team of 5–15 engineers shipping a product, this is almost always the wrong trade." },
      { type: "p", text: "We've inherited enough 'modern' architectures to know the pattern: a monolith rewritten into 40 services because a conference talk said so, now requiring a platform team to operate and a senior engineer just to understand what calls what." },
      { type: "h2", text: "What we actually recommend" },
      { type: "p", text: "Start with a well-structured monolith. Separate concerns inside the process boundary — modules, bounded contexts, clear interfaces — but don't pay the distributed systems tax until you have a compelling reason to." },
      { type: "callout", text: "Compelling reasons to distribute: genuine independent scaling requirements, team ownership boundaries that create organisational friction, or components with fundamentally different operational profiles (e.g. a batch processing job). Not compelling: 'it's what Netflix does.'" },
      { type: "h2", text: "When to split" },
      { type: "p", text: "The signal we look for is organisational, not technical. When two teams are constantly in each other's way inside a shared codebase, and the coordination cost is higher than the distribution tax, it's time to split. Not before." },
      { type: "p", text: "We've shipped several products that started as modular monoliths and graduated to services over 18–24 months, as the teams and load profiles grew into it. The architecture followed the organisation — not the other way around." },
      { type: "h2", text: "The practical playbook" },
      { type: "bullets", items: ["Start with a single deployable unit, well-structured internally", "Separate reads from writes at the data layer early — it pays off", "Use async messaging for things that don't need to be synchronous", "Extract services only when you have a clear team ownership boundary", "Invest in observability from day one — you'll need it regardless of architecture"] },
      { type: "p", text: "The goal isn't simplicity for its own sake. It's shipping more with less accidental complexity — and leaving the door open for the right architectural moves at the right time." },
    ],
  },
  {
    slug: "api-first-design",
    cat: "Design",
    title: "Designing for the API-first era",
    subtitle: "How product design changes when the interface is a contract, not a screen.",
    date: "Apr 14, 2026",
    read: "6 min read",
    author: { name: "Elena Marin", role: "Co-founder, Design", initial: "E" },
    cover: "cyan",
    body: [
      { type: "lead", text: "API-first isn't just an engineering philosophy — it fundamentally changes how we approach product design. When the API is the product, the interface is a contract. Here's what that means in practice." },
      { type: "h2", text: "The contract mindset" },
      { type: "p", text: "Traditional product design starts with screens and works backwards to data. API-first inverts this: you design the resource model, the operations, and the error states first. The screen — or lack of one — follows." },
      { type: "h2", text: "What changes in practice" },
      { type: "bullets", items: ["Documentation is a design artifact, not an afterthought", "Error states and edge cases are first-class design concerns", "Versioning strategy is a product decision, not just an engineering one", "Developer experience is user experience"] },
      { type: "h2", text: "The DX gap" },
      { type: "p", text: "Most API products have a significant gap between their marketing and their actual developer experience. The authentication flow is confusing, the error messages are cryptic, and the documentation examples use curl commands that don't actually work." },
      { type: "callout", text: "A great API feels like a great tool: it does what you expect, tells you clearly when something's wrong, and gets out of your way. Most don't." },
      { type: "p", text: "We treat API design the same way we treat UI design: iterative, user-tested, and held to the same quality bar. Because for API-first products, the developer is the user — and they notice every rough edge." },
    ],
  },
  {
    slug: "deploy-time",
    cat: "Engineering",
    title: "How we cut deploy time from 40m to 3m",
    subtitle: "A surgical look at the CI/CD optimisations that moved the needle — and the ones that didn't.",
    date: "Apr 02, 2026",
    read: "12 min read",
    author: { name: "Stefan Vlad", role: "Lead Engineer", initial: "S" },
    cover: "finance",
    body: [
      { type: "lead", text: "A 40-minute deploy cycle is a productivity tax every developer pays, every day. Here's how we diagnosed and fixed it — and which optimisations were actually worth the time." },
      { type: "h2", text: "The diagnosis" },
      { type: "p", text: "Before touching anything, we instrumented the pipeline. Where was the time actually going? The answer was surprising: not the build, not the tests, but the Docker layer cache misses and a flaky integration test suite that was running serially." },
      { type: "h2", text: "The fixes, ranked by impact" },
      { type: "bullets", items: ["Parallelise the test suite (−14 minutes)", "Fix Docker layer ordering to maximise cache hits (−12 minutes)", "Remove the integration tests from the blocking pipeline, run async (−8 minutes)", "Switch to a faster base image (−3 minutes)", "Incremental builds for frontend (−2 minutes)"] },
      { type: "callout", text: "The highest-impact fix — parallelising tests — took one afternoon. The Docker layer reordering took two hours. Neither required new infrastructure." },
      { type: "h2", text: "What didn't help" },
      { type: "p", text: "We tried a few things that didn't move the needle: a faster CI runner (2% improvement), splitting the monorepo build (made things worse), and caching node_modules (already cached). The lesson: measure before you optimise." },
    ],
  },
  {
    slug: "product-bets",
    cat: "Strategy",
    title: "Three product bets that paid off",
    subtitle: "Looking back at three decisions we made against conventional wisdom — and why they worked.",
    date: "Mar 22, 2026",
    read: "5 min read",
    author: { name: "Andrei Popa", role: "Co-founder, Engineering", initial: "A" },
    cover: "energy",
    body: [
      { type: "lead", text: "The most valuable product decisions are usually the ones that feel wrong at the time. Here are three we made — and what we learned from each." },
      { type: "h2", text: "Bet 1: Async-first over video" },
      { type: "p", text: "On the Helix Health engagement, every stakeholder wanted video consults as the primary modality. We pushed back: async messaging first. The data showed 78% of patient interactions didn't need synchronous communication. Async shipped in 4 weeks; a comparable video infrastructure would have taken 12." },
      { type: "h2", text: "Bet 2: One screen instead of many" },
      { type: "p", text: "For the Vector Defence platform, the existing system was six screens. We proposed one. The pushback was significant — surely one screen couldn't hold everything? It didn't need to. It needed to hold everything an operator needed to make a decision in the next 90 seconds." },
      { type: "callout", text: "A good product decision isn't about fitting everything in — it's about knowing what to leave out." },
      { type: "h2", text: "Bet 3: Deploy boring, iterate fast" },
      { type: "p", text: "On a fintech project, we recommended Postgres over a trendy real-time database the team wanted. It was the right call: simpler operations, better tooling, and when we needed real-time, we added it as a narrow layer on top, not as a foundation." },
    ],
  },
  {
    slug: "accessible-dashboards",
    cat: "Design",
    title: "Building accessible dashboards",
    subtitle: "Accessibility isn't a feature checklist. Here's how we approach it in data-heavy UIs.",
    date: "Mar 12, 2026",
    read: "9 min read",
    author: { name: "Elena Marin", role: "Co-founder, Design", initial: "E" },
    cover: "ops",
    body: [
      { type: "lead", text: "Dashboard accessibility is hard because dashboards are fundamentally visual — they communicate through position, color, and density. Here's how we make them work for everyone." },
      { type: "h2", text: "The colour problem" },
      { type: "p", text: "Red/green status indicators fail for 8% of male users. We use colour as a secondary signal only — always paired with an icon, a label, or a pattern. This isn't just accessible; it's clearer for everyone." },
      { type: "h2", text: "Tables and screen readers" },
      { type: "p", text: "A data table that looks right visually is often a mess for screen readers: missing headers, no row context, column sorting that doesn't announce its state. We build tables with full ARIA semantics and test with VoiceOver and NVDA as part of the build, not as a retrospective audit." },
      { type: "callout", text: "Keyboard navigation in dashboards is almost always broken. If you can't use the filter, sort, and export functions without a mouse, your dashboard isn't accessible." },
      { type: "h2", text: "Motion and cognitive load" },
      { type: "p", text: "Animated charts look great in demos. In production, they add cognitive load and can be harmful for users with vestibular disorders. We default to prefers-reduced-motion and make animation opt-in, not opt-out." },
    ],
  },
  {
    slug: "helix-case-study",
    cat: "Case Study",
    title: "Helix Health: scaling telehealth in 12 weeks",
    subtitle: "A detailed look at how we rebuilt a national clinic's patient experience from the ground up.",
    date: "Mar 03, 2026",
    read: "10 min read",
    author: { name: "Andrei Popa", role: "Co-founder, Engineering", initial: "A" },
    cover: "health",
    body: [
      { type: "lead", text: "Helix Health came to us with a problem: 62% of patients abandoned their booking flow before completing it. Twelve weeks later, that number was 18%. Here's the full story." },
      { type: "h2", text: "The brief" },
      { type: "p", text: "240 clinics, 14 states, a Java monolith that hadn't been touched in six years, and a HIPAA audit on the calendar. The brief was to rebuild the patient-facing experience without disrupting the clinics that were still using the old system." },
      { type: "h2", text: "Week one: compliance first" },
      { type: "p", text: "We didn't touch a design file in week one. We defined the technical safeguards, signed the BAA, and had the compliance architecture reviewed. The next eleven weeks were faster because we did this first." },
      { type: "callout", text: "Compliance isn't a gate at the end of the project. It's an input to the architecture from day one." },
      { type: "h2", text: "The results" },
      { type: "bullets", items: ["+38% appointment volume", "Drop-off rate: 62% → 18%", "−3 hours per clinic per day freed from phone bookings", "100% HIPAA audit pass, zero remediation items"] },
      { type: "p", text: "For the full technical breakdown, see the case study." },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────
// Cover colours
// ─────────────────────────────────────────────────────────────────
const COVER_COLORS = {
  ink:     { bg: "linear-gradient(135deg, #0F172A 0%, #1E2939 100%)" },
  cyan:    { bg: "linear-gradient(135deg, #082A35 0%, #0C3544 100%)" },
  finance: { bg: "linear-gradient(135deg, #0F1E2E 0%, #162437 100%)" },
  energy:  { bg: "linear-gradient(135deg, #1C1A10 0%, #2A2515 100%)" },
  ops:     { bg: "linear-gradient(135deg, #0D1F2D 0%, #132534 100%)" },
  health:  { bg: "linear-gradient(135deg, #1A2535 0%, #243044 100%)" },
  defence: { bg: "linear-gradient(135deg, #141A1F 0%, #1C2530 100%)" },
};

function BlogCover({ cover, label, large = false }) {
  const c = COVER_COLORS[cover] || COVER_COLORS.ink;
  return (
    <div className={"blog-visual-cover" + (large ? " is-large" : "")} style={{ background: c.bg }}>
      <svg viewBox="0 0 800 480" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <defs>
          <pattern id={"bc-" + cover} width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill={c.fg} opacity="0.1"/>
          </pattern>
        </defs>
        <rect width="800" height="480" fill={"url(#bc-" + cover + ")"}/>
        <circle cx="650" cy="100" r="300" fill={c.fg} opacity="0.05"/>
      </svg>
      {label && <span className="blog-visual-label" style={{ color: c.fg }}>{label}</span>}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Blog Listing Page
// ─────────────────────────────────────────────────────────────────
function BlogListPage() {
  const cats = ["All", "Engineering", "Design", "Strategy", "Case Study"];
  const [active, setActive] = useStateBL("All");
  const featured = POSTS[0];
  const rest = POSTS.slice(1);
  const filtered = active === "All" ? rest : rest.filter(p => p.cat === active);

  return (
    <div className="page">
      {/* ── Page hero ──────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Blog</span>
          <h1>Notes from the workshop</h1>
          <p>Engineering, design, and strategy — the things we wish we'd known before we started.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {/* ── Featured post ─────────────────────────────── */}
          <a href={"#/blog/" + featured.slug} className="blog-featured-card reveal">
            <div className="blog-featured-cover">
              <BlogCover cover={featured.cover} large />
            </div>
            <div className="blog-featured-body">
              <div className="blog-feat-top">
                <span className="blog-cat-pill">{featured.cat}</span>
                <span className="blog-feat-date">{featured.date} · {featured.read}</span>
              </div>
              <h2 className="blog-feat-title">{featured.title}</h2>
              <p className="blog-feat-sub">{featured.subtitle}</p>
              <div className="blog-feat-author">
                <div className="blog-avatar">{featured.author.initial}</div>
                <div>
                  <div className="blog-author-name">{featured.author.name}</div>
                  <div className="blog-author-role">{featured.author.role}</div>
                </div>
              </div>
              <span className="blog-read-link">Read article <Icon.arrow /></span>
            </div>
          </a>

          {/* ── Category filter ──────────────────────────── */}
          <div className="blog-filter">
            {cats.map(c => (
              <button key={c} className={"blog-filter-btn" + (c === active ? " is-active" : "")} onClick={() => setActive(c)}>{c}</button>
            ))}
          </div>

          {/* ── Post grid ────────────────────────────────── */}
          <div className="blog-post-grid">
            {filtered.map((p, i) => (
              <a key={p.slug} href={"#/blog/" + p.slug} className="blog-post-card reveal" style={{ transitionDelay: (i % 3 * 60) + "ms" }}>
                <div className="blog-post-cover">
                  <BlogCover cover={p.cover} />
                </div>
                <div className="blog-post-body">
                  <div className="blog-post-meta">
                    <span className="blog-cat-pill blog-cat-pill--sm">{p.cat}</span>
                    <span className="blog-post-date">{p.date} · {p.read}</span>
                  </div>
                  <h3 className="blog-post-title">{p.title}</h3>
                  <p className="blog-post-sub">{p.subtitle}</p>
                  <div className="blog-post-foot">
                    <div className="blog-avatar blog-avatar--sm">{p.author.initial}</div>
                    <span className="blog-author-name">{p.author.name}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "64px 0", color: "var(--slate-500)" }}>
              No posts in this category yet.
            </div>
          )}
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Blog Post Body Renderer
// ─────────────────────────────────────────────────────────────────
function PostBody({ blocks }) {
  return (
    <div className="blog-post-article">
      {blocks.map((b, i) => {
        if (b.type === "lead") return <p key={i} className="blog-post-lead">{b.text}</p>;
        if (b.type === "h2") return <h2 key={i} className="blog-post-h2">{b.text}</h2>;
        if (b.type === "p") return <p key={i} className="blog-post-p">{b.text}</p>;
        if (b.type === "callout") return (
          <div key={i} className="blog-callout">
            <div className="blog-callout-icon"><Icon.zap style={{ width: 18, height: 18 }} /></div>
            <p>{b.text}</p>
          </div>
        );
        if (b.type === "bullets") return (
          <ul key={i} className="blog-post-bullets">
            {b.items.map((item, j) => (
              <li key={j}><span className="blog-bullet-dot"/>{item}</li>
            ))}
          </ul>
        );
        return null;
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Single Blog Post Page
// ─────────────────────────────────────────────────────────────────
function BlogPostPage({ slug }) {
  const post = POSTS.find(p => p.slug === slug) || POSTS[0];
  const related = POSTS.filter(p => p.slug !== post.slug && p.cat === post.cat).slice(0, 2);
  const nextPost = POSTS[(POSTS.indexOf(post) + 1) % POSTS.length];

  return (
    <div className="page">
      {/* ── Post hero ──────────────────────────────────────── */}
      <section className="blog-single-hero">
        <div className="container">
          <div className="blog-single-breadcrumb">
            <a href="#/blog">Blog</a>
            <span>·</span>
            <span>{post.cat}</span>
          </div>
          <div className="blog-single-meta">
            <span className="blog-cat-pill">{post.cat}</span>
            <span className="blog-single-date">{post.date} · {post.read}</span>
          </div>
          <h1 className="blog-single-title">{post.title}</h1>
          <p className="blog-single-sub">{post.subtitle}</p>
          <div className="blog-single-author">
            <div className="blog-avatar">{post.author.initial}</div>
            <div>
              <div className="blog-author-name">{post.author.name}</div>
              <div className="blog-author-role">{post.author.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cover image ────────────────────────────────────── */}
      <div className="blog-single-cover-wrap">
        <div className="container">
          <BlogCover cover={post.cover} large label={post.cat} />
        </div>
      </div>

      {/* ── Article body ───────────────────────────────────── */}
      <section className="section">
        <div className="container blog-single-layout">
          {/* Sticky sidebar */}
          <aside className="blog-single-sidebar">
            <div className="blog-sidebar-card">
              <div className="blog-sidebar-label">Written by</div>
              <div className="blog-sidebar-author">
                <div className="blog-avatar">{post.author.initial}</div>
                <div>
                  <div className="blog-author-name">{post.author.name}</div>
                  <div className="blog-author-role">{post.author.role}</div>
                </div>
              </div>
              <div className="blog-sidebar-label" style={{ marginTop: 20 }}>Published</div>
              <div className="blog-sidebar-date">{post.date}</div>
              <div className="blog-sidebar-label" style={{ marginTop: 12 }}>Reading time</div>
              <div className="blog-sidebar-date">{post.read}</div>
              <div className="blog-sidebar-label" style={{ marginTop: 12 }}>Category</div>
              <span className="blog-cat-pill" style={{ marginTop: 6 }}>{post.cat}</span>
            </div>
            <a href="#/contact" className="btn btn--primary" style={{ width: "100%", justifyContent: "center", marginTop: 16 }}>
              Work with us <Icon.arrow />
            </a>
          </aside>

          {/* Article */}
          <main>
            <PostBody blocks={post.body} />

            {/* Related posts */}
            {related.length > 0 && (
              <div className="blog-related">
                <h3 className="blog-related-head">More in {post.cat}</h3>
                <div className="blog-related-grid">
                  {related.map(r => (
                    <a key={r.slug} href={"#/blog/" + r.slug} className="blog-related-card">
                      <div className="blog-related-cover">
                        <BlogCover cover={r.cover} />
                      </div>
                      <div className="blog-related-body">
                        <div className="blog-post-meta">
                          <span className="blog-cat-pill blog-cat-pill--sm">{r.cat}</span>
                          <span className="blog-post-date">{r.date}</span>
                        </div>
                        <h4>{r.title}</h4>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Next post */}
            <a href={"#/blog/" + nextPost.slug} className="blog-next-post">
              <div className="blog-next-label">Next article</div>
              <div className="blog-next-row">
                <div>
                  <div className="blog-next-cat">{nextPost.cat}</div>
                  <div className="blog-next-title">{nextPost.title}</div>
                </div>
                <span className="blog-next-arrow"><Icon.arrow /></span>
              </div>
            </a>
          </main>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Router wrapper — list or single
// ─────────────────────────────────────────────────────────────────
function BlogRouter({ slug }) {
  if (slug) return <BlogPostPage slug={slug} />;
  return <BlogListPage />;
}

window.POSTS = POSTS;
window.BlogRouter = BlogRouter;
