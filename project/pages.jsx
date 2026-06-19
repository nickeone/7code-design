/* global React, Icon, TrustedBy, CaseStudies, WhyChoose, VerifiedAccredited, Expertise, Services, Testimonials, CTAStrip, HeroPatternMockup, HeroTerminal, HeroBoldSplit, CSCover */

const { useState: useStateP, useEffect: useEffectP } = React;
const SITE_ROOT = "https://www.7code.tech";

function useSeoMeta(title, desc) {
  useEffectP(() => {
    const prevTitle = document.title;
    document.title = title;
    const descEl = document.querySelector('meta[name="description"]');
    const prevDesc = descEl ? descEl.getAttribute("content") : null;
    if (descEl && desc) descEl.setAttribute("content", desc);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    if (ogDesc && desc) ogDesc.setAttribute("content", desc);
    if (ogUrl) ogUrl.setAttribute("content", SITE_ROOT + (window.location.hash.slice(1) || window.location.pathname || "/"));
    if (twTitle) twTitle.setAttribute("content", title);
    if (twDesc && desc) twDesc.setAttribute("content", desc);
    return () => {
      document.title = prevTitle;
      if (descEl && prevDesc !== null) descEl.setAttribute("content", prevDesc);
    };
  }, []);
}

// ──────────────────────────────────────────────────────────────────
// HOME
// ──────────────────────────────────────────────────────────────────
function HomePage({ heroVariant }) {
  useSeoMeta(
    "AI-Native Software Engineering Agency — 7code",
    "AI-native software engineering agency in Romania. LLM products, agent workflows, and cloud infrastructure for UK, EU, and UAE companies. Senior team."
  );
  const homeFaqs = [
    { q: "Where is 7code located?", a: "7code (Seven Code Development SRL) is headquartered in Cluj-Napoca, Romania — one of Central Europe's leading technology hubs. Cluj-Napoca is home to major engineering universities and a high concentration of senior software talent. 7code operates remotely across UK, EU, UAE, and US client time zones." },
    { q: "What countries does 7code serve?", a: "7code serves clients primarily in the United Kingdom, the European Union, the United Arab Emirates, and the United States. The team operates in Central European Time (CET+1/+2), giving strong daily overlap with UK and EU clients and workable early/late overlap with UAE and US East Coast teams. All client communication is conducted in English." },
    { q: "How quickly can 7code start a new project?", a: "7code can typically begin a Discovery Sprint within one to two weeks of agreement signature. Full team mobilisation for a build engagement follows two to three weeks after Discovery. For urgent requirements, a fast-track onboarding process is available. Contact office@7code.ro to discuss your timeline — 7code will confirm availability within 48 hours." },
    { q: "What is 7code's Clutch rating?", a: "7code holds a 4.9-star rating on Clutch.co based on 11 verified client reviews (as of 2025). Clutch reviews cover engagement quality, delivery timeliness, communication, and willingness to recommend. All reviews are verified by Clutch's research team through direct client interviews. View 7code's Clutch profile at clutch.co/profile/7code." },
    { q: "What makes 7code different from other software agencies?", a: "7code is senior-only and AI-first — no juniors, no generalist teams learning AI on the job. Every engagement is led by engineers who have shipped AI products in production. 7code's nearshore Romania base delivers Western-quality engineering at nearshore rates, with timezone alignment to UK and EU clients. Business-outcome focus means we measure success by your KPIs, not hours billed." },
  ];
  const Hero = heroVariant === "terminal" ? HeroTerminal : heroVariant === "bold" ? HeroBoldSplit : HeroPatternMockup;
  return (
    <div className="page">
      <Hero />
      <TrustedBy />
      <CaseStudies limit={6} />
      <WhyChoose />
      <VerifiedAccredited />
      <Expertise headTitle="Our Expertise" headDesc="We specialize in key sectors, delivering tailored digital solutions that drive growth and innovation." />
      <Services />
      <Testimonials />

      <section className="section section--alt">
        <div className="container svc-faq-wrap">
          <div className="section-head reveal section-head--left" style={{ maxWidth: 720, margin: 0, marginBottom: 32 }}>
            <span className="eyebrow">Frequently asked</span>
            <h2>Questions teams ask before they start</h2>
          </div>
          <div className="svc-faq">
            {homeFaqs.map((f, i) => (
              <details key={i} className="svc-faq-item reveal" style={{ transitionDelay: (i * 40) + "ms" }}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// SERVICES HUB
// ──────────────────────────────────────────────────────────────────
function ServicesPage() {
  useSeoMeta(
    "Services — AI Engineering, Integrations & Automation | 7Code",
    "7Code's service lines: AI-native product engineering, system integrations, AI & process automation, cloud and agentic infrastructure, AI engineering outstaffing, and LLM & agent development."
  );
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Services</span>
          <h1>AI Engineering, Integrations & Automation Services</h1>
          <p>End-to-end AI and software engineering across product builds, system integrations, cloud infrastructure, and outstaffing — delivered by a senior team with 20+ products shipped.</p>
        </div>
      </section>
      <Services />
      <CTAStrip />
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// EXPERTISE
// ──────────────────────────────────────────────────────────────────
function ExpertisePage() {
  useSeoMeta(
    "Industry Expertise, 7Code AI Engineering, Healthcare, Finance, Energy, Defence, HR, Operations",
    "7Code delivers domain-grounded AI and software engineering across Healthcare, FinTech, Energy & Utilities, Defence & Security, HR Tech, and Operations, from Cluj-Napoca, Romania, serving clients across Europe, the UK, and the Middle East."
  );
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Expertise</span>
          <h1>Six industries.<br/>One engineering practice.</h1>
          <p>From healthcare to defence, we bring the same standard of engineering rigor and product thinking to every sector we serve.</p>
        </div>
      </section>
      <Expertise headTitle="Industries we serve" headDesc="Tailored digital solutions backed by domain knowledge and proven delivery patterns." />
      <CaseStudies limit={6} />
      <CTAStrip />
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// PROCESS
// ──────────────────────────────────────────────────────────────────
function ProcessPage() {
  useSeoMeta(
    "How We Work, Our Engineering Process | 7Code Cluj-Napoca",
    "7Code's five-stage product engineering process: Discovery & Strategy, Design & Prototyping, Engineering Sprints, Launch & QA, and Iterate & Scale. Built for founders and product teams who need reliable delivery, not just velocity."
  );
  const steps = [
    { title: "Discovery & Strategy", desc: "We start by understanding your business, users, and constraints. Output: a clear product strategy and engineering plan.", deliverables: ["Product strategy doc", "Tech architecture", "Roadmap"] },
    { title: "Design & Prototyping", desc: "Wireframes, hi-fi designs, and interactive prototypes, validated with real users before a line of production code is written.", deliverables: ["Design system", "Hi-fi mockups", "Clickable prototype"] },
    { title: "Engineering Sprints", desc: "Two-week sprints with continuous deployment. You see progress every Friday and can steer the roadmap as you go.", deliverables: ["Production-ready code", "Demo videos", "Sprint reports"] },
    { title: "Launch & QA", desc: "Comprehensive testing, performance optimization, and a launch playbook tailored to your audience and stack.", deliverables: ["Test coverage", "Launch playbook", "Performance audit"] },
    { title: "Iterate & Scale", desc: "We monitor, measure, and iterate post-launch. Long-term partnership means your product keeps compounding value.", deliverables: ["Analytics dashboard", "Monthly retrospectives", "Scaling plan"] },
  ];
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Our process</span>
          <h1>How We Build AI-Native Products</h1>
          <p>A repeatable five-stage process that balances speed with quality. Built around outcomes, not deliverables.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="process">
            {steps.map((s, i) => (
              <div key={i} className="process-step reveal">
                <div className="process-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="process-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="process-deliverables">
                    {s.deliverables.map((d, j) => <span key={j} className="tag">{d}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <CTAStrip />
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// ABOUT
// ──────────────────────────────────────────────────────────────────
function AboutPage() {
  React.useEffect(() => {
    const prev = document.title;
    document.title = "About 7Code, AI-Native Software Engineering Agency, Cluj-Napoca, Romania";
    const descEl = document.querySelector('meta[name="description"]');
    const prevDesc = descEl ? descEl.getAttribute("content") : null;
    if (descEl) descEl.setAttribute("content", "7Code is an AI-first software engineering agency based in Cluj-Napoca, Romania. We design, build, and operate AI-native products, LLM features, and cloud infrastructure for founders and product teams across Europe, the UK, and the Middle East.");
    return () => { document.title = prev; if (descEl && prevDesc !== null) descEl.setAttribute("content", prevDesc); };
  }, []);

  const stats = [
    { v: "2016", l: "Founded in Cluj-Napoca" },
    { v: "20+", l: "Products shipped" },
    { v: "12", l: "Industries served" },
    { v: "4", l: "Countries with active clients" },
  ];
  const mission = [
    {
      icon: Icon.target,
      title: "Always deliver more than expected",
      desc: "Going beyond the brief is not a courtesy, it's a standard. We track client satisfaction as a business metric and treat every engagement as an opportunity to earn a long-term partner, not just close a project.",
    },
    {
      icon: Icon.chart,
      title: "Build a scalable, predictable sales engine",
      desc: "Growth built on referrals and luck has a ceiling. We're building a structured, repeatable process for finding and winning clients, so the pipeline is something we design, not something that happens to us.",
    },
    {
      icon: Icon.users,
      title: "Hire slowly, fire quickly",
      desc: "Every hire shapes the culture and the quality bar. We take as long as we need to find people who are genuinely skilled and genuinely aligned with our values. We don't compromise on either, and we act fast when something isn't working.",
    },
    {
      icon: Icon.zap,
      title: "Build a reliable, autonomous core team",
      desc: "The best companies run on a team that doesn't need constant oversight. We invest in people who can own outcomes end-to-end: trusted enough to make decisions, skilled enough to make good ones, and aligned enough that they don't need to be told twice.",
    },
  ];
  const values = [
    {
      icon: Icon.heart,
      title: "Happy, satisfied clients",
      desc: "Client success is the only metric that matters at the end of an engagement. We measure outcomes, not hours logged, and we don't consider a project done until the client is genuinely happy with what was built and how it was built.",
    },
    {
      icon: Icon.pulse,
      title: "Growth, personal and professional",
      desc: "Everyone at 7Code is on a growth trajectory. We create space for learning, encourage stretch assignments, give honest feedback, and share the context people need to keep developing. Stagnation is a warning sign, not a steady state.",
    },
    {
      icon: Icon.layers,
      title: "Strong teamwork and collaboration",
      desc: "We build complex software in tight timelines, which only works if the team actually functions as a team. Clear communication, shared ownership of outcomes, and genuine respect for each other's work are not aspirations, they're how we operate.",
    },
    {
      icon: Icon.smile,
      title: "A fun, positive work environment",
      desc: "The best work comes from people who enjoy showing up. We take our craft seriously and our culture deliberately, because a positive environment isn't a perk, it's a competitive advantage that shows up in the quality of what we ship.",
    },
  ];
  const team = [
    { name: "Nicu Mardari", role: "CEO & Founder", initial: "N", photo: "/project/uploads/authors/nicu-mardari.jpg", bio: "Nicu Mardari founded 7code in Cluj-Napoca in 2016, building it from a boutique software studio into a specialist AI product engineering firm serving clients across the UK, EU, UAE, and US. As CEO, Nicu leads business development, client strategy, and commercial operations, working directly with founders, CTOs, and technology leaders on AI automation and product engineering engagements. He brings a decade of experience in nearshore software delivery and AI-first product strategy." },
    { name: "Igor Mardari", role: "CTO & Co-Founder", initial: "I", photo: null, bio: "Igor Mardari is the co-founder and CTO of 7code, responsible for technical strategy, engineering standards, and the architecture of client AI systems. Since co-founding 7code in 2016, Igor has led the technical evolution of the company from general software development into AI-native product engineering and cloud agentic infrastructure. He brings deep expertise in LLM system design, cloud architecture at scale, and AI product evaluation frameworks, and sets the technical quality standards that underpin 7code's senior-only delivery model." },
    { name: "Daniela Cazac", role: "CMO", initial: "D", photo: "/project/uploads/authors/daniela-cazac.jpg", bio: null },
  ];

  return (
    <div className="page">

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>About 7Code</span>
          <h1>About 7code — Senior AI Engineering Team</h1>
          <p>7Code is an AI-first software engineering agency based in Cluj-Napoca, Romania. Since 2016, we've designed, built, and operated AI-native products, LLM integrations, and cloud infrastructure for founders and product teams across Europe, the UK, and the Middle East, acting as the senior engineering team they needed but didn't want to hire full-time.</p>
        </div>
      </section>

      {/* Who we are */}
      <section className="section">
        <div className="container about-split">
          <div className="about-split-text reveal">
            <span className="eyebrow">Who we are</span>
            <h2>A Cluj-Napoca engineering team with a track record across 12 industries</h2>
            <p>We were founded in Cluj-Napoca, Romania's fastest-growing tech hub, with a single belief: that a small, senior, well-organised team consistently outperforms a large, bloated one. Every engineer at 7Code is hands-on, every project gets direct access to the people who actually write the code, and every engagement is treated as a product partnership, not a service contract.</p>
            <p style={{ marginTop: 16 }}>From HIPAA-compliant HealthTech platforms and European Parliament e-voting infrastructure to real-time IoT fleet systems and LLM-powered consumer apps, we've shipped across the full stack, and across the full risk spectrum. Our clients range from early-stage founders raising their first round to established enterprises integrating AI into production systems that can't go down.</p>
            <p style={{ marginTop: 16 }}>Cluj-Napoca gives us a structural advantage: a deep pool of senior engineering talent, a lower cost base than Western Europe, and a timezone that overlaps comfortably with the UK, EU, and even UAE teams. We're Romanian-built and globally delivered.</p>
            <p style={{ marginTop: 16 }}><a href="/resources/nearshore-romania-vs-offshore-asia" style={{ color: "var(--cyan-600)", fontWeight: 600 }}>Compare nearshore Romania vs offshore Asia →</a></p>
          </div>
          <div className="about-split-stats reveal">
            {stats.map((s, i) => (
              <div key={i} className="about-stat">
                <div className="about-stat-v">{s.v}</div>
                <div className="about-stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Our mission</span>
            <h2>Always deliver more than expected.</h2>
            <p>Four principles that shape how we hire, how we sell, how we operate, and how we grow, in that order.</p>
          </div>
          <div className="values-grid values-grid--4">
            {mission.map((m, i) => {
              const I = m.icon;
              return (
                <div key={i} className="card reveal" style={{ transitionDelay: (i * 60) + "ms" }}>
                  <span className="icon-tile"><I /></span>
                  <h3>{m.title}</h3>
                  <p style={{ marginTop: 8, color: "var(--slate-500)" }}>{m.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What we believe</span>
            <h2>Four values, lived daily.</h2>
            <p>These aren't words on a wall. They're the criteria we use when hiring, the standard we hold each other to, and the reason clients keep coming back.</p>
          </div>
          <div className="values-grid values-grid--4">
            {values.map((v, i) => {
              const I = v.icon;
              return (
                <div key={i} className="card reveal" style={{ transitionDelay: (i * 60) + "ms" }}>
                  <span className="icon-tile"><I /></span>
                  <h3>{v.title}</h3>
                  <p style={{ marginTop: 8, color: "var(--slate-500)" }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">The team</span>
            <h2>The people behind the work</h2>
            <p>A tight-knit leadership team with deep technical roots, a shared obsession with quality, and enough client work under their belts to know what actually matters when a project is under pressure.</p>
          </div>
          <div className="team-grid team-grid--3">
            {team.map((t, i) => (
              <div key={i} className="team-card reveal" style={{ transitionDelay: (i * 60) + "ms" }}>
                <div className="team-photo">
                  {t.photo
                    ? <img src={t.photo} alt={t.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
                    : <span>{t.initial}</span>
                  }
                </div>
                <div className="team-name">{t.name}</div>
                <div className="team-role">{t.role}</div>
                {t.bio && <p style={{ marginTop: 12, fontSize: 14, color: "var(--slate-500)", lineHeight: 1.6 }}>{t.bio}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// BLOG
// ──────────────────────────────────────────────────────────────────
function BlogPage() {
  const cats = ["All", "Engineering", "Design", "Strategy", "Case Study"];
  const [active, setActive] = useStateP("All");
  const posts = [
    { title: "Why we still bet on monoliths in 2026", cat: "Engineering", date: "Apr 28, 2026", read: "8 min read", kind: "ink" },
    { title: "Designing for the API-first era", cat: "Design", date: "Apr 14, 2026", read: "6 min read", kind: "cyan" },
    { title: "How we cut deploy time from 40m to 3m", cat: "Engineering", date: "Apr 02, 2026", read: "12 min read", kind: "finance" },
    { title: "Three product bets that paid off", cat: "Strategy", date: "Mar 22, 2026", read: "5 min read", kind: "energy" },
    { title: "Building accessible dashboards", cat: "Design", date: "Mar 12, 2026", read: "9 min read", kind: "health" },
    { title: "Helix Health: scaling telehealth in 12 weeks", cat: "Case Study", date: "Mar 03, 2026", read: "10 min read", kind: "ops" },
  ];
  const filtered = active === "All" ? posts : posts.filter(p => p.cat === active);
  const featured = posts[0];
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Blog</span>
          <h1>Notes from the workshop</h1>
          <p>Engineering, design, and strategy, the things we wish we'd known before we started.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-featured reveal">
            <div>
              <span className="tag tag--ink" style={{ marginBottom: 16 }}>Featured</span>
              <h2 style={{ marginTop: 12 }}>{featured.title}</h2>
              <p>An honest take on why distributed systems are still overkill for most products, and what to reach for instead.</p>
              <div style={{ marginTop: 24 }}>
                <a href="#" className="btn btn--cyan">Read article <Icon.arrow /></a>
              </div>
            </div>
            <div className="blog-featured-cover">
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 48, color: "rgba(255,255,255,0.9)", letterSpacing: "-0.02em", textAlign: "center", padding: 24 }}>
                Ship the boring thing.
              </div>
            </div>
          </div>

          <div className="blog-categories">
            {cats.map(c => (
              <button key={c} className={"blog-cat" + (c === active ? " is-active" : "")} onClick={() => setActive(c)}>{c}</button>
            ))}
          </div>

          <div className="blog-grid">
            {filtered.map((p, i) => (
              <a key={i} href="#" className="blog-card reveal" style={{ transitionDelay: (i % 3 * 60) + "ms" }}>
                <div className={"blog-cover cover--" + p.kind}>
                  <span style={{ padding: 16, textAlign: "center" }}>{p.cat}</span>
                </div>
                <div className="blog-card-body">
                  <div className="blog-meta">
                    <span>{p.date}</span><span>·</span><span>{p.read}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <span className="cs-link" style={{ marginTop: 8 }}>Read article <Icon.arrow /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <CTAStrip />
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// CONTACT
// ──────────────────────────────────────────────────────────────────
// Reads UTM params + referrer + landing_page from the current URL/document.
function getAttribution() {
  const p = new URLSearchParams(window.location.search);
  return {
    utm_source:   p.get("utm_source")   || "",
    utm_medium:   p.get("utm_medium")   || "",
    utm_campaign: p.get("utm_campaign") || "",
    utm_term:     p.get("utm_term")     || "",
    utm_content:  p.get("utm_content")  || "",
    landing_page: window.location.href,
    referrer:     document.referrer,
  };
}

// Persists first-touch attribution in localStorage so return visits still carry the original source.
const FIRST_TOUCH_KEY = "7c_firsttouch";
function ensureFirstTouch() {
  try {
    if (!localStorage.getItem(FIRST_TOUCH_KEY)) {
      localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(getAttribution()));
    }
  } catch { /* storage blocked — ignore */ }
}

function getFirstTouch() {
  try {
    const raw = localStorage.getItem(FIRST_TOUCH_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

// Resolves the GA4 client_id asynchronously; falls back to parsing the _ga cookie.
function resolveGaClientId() {
  return new Promise((resolve) => {
    try {
      if (typeof window.gtag === "function") {
        window.gtag("get", "G-109V5ZWVD8", "client_id", (cid) => resolve(cid || ""));
        return;
      }
    } catch { /* gtag not ready */ }
    // Fallback: parse _ga cookie value "GA1.1.<cid_part1>.<cid_part2>"
    try {
      const match = document.cookie.match(/(?:^|;\s*)_ga=([^;]+)/);
      if (match) {
        const parts = decodeURIComponent(match[1]).split(".");
        resolve(parts.length >= 4 ? parts.slice(2).join(".") : "");
        return;
      }
    } catch { /* ignore */ }
    resolve("");
  });
}

function ContactPage() {
  useSeoMeta(
    "Contact 7Code, Start a Project | Cluj-Napoca, Romania",
    "Get in touch with 7Code, AI-native software engineering agency in Cluj-Napoca, Romania. Tell us about your project — we'll respond within one business day."
  );
  const [form, setForm] = useStateP({ name: "", email: "", company: "", budget: "", message: "" });
  const [errors, setErrors] = useStateP({});
  const [sent, setSent] = useStateP(false);
  const [submitting, setSubmitting] = useStateP(false);
  const [serverError, setServerError] = useStateP(null);
  // IP geolocation is collected on mount to enrich lead context with approximate visitor location.
  const [geo, setGeo] = useStateP({ city: "", region: "", country: "" });

  useEffectP(() => {
    ensureFirstTouch();
    // Fetch approximate location from ipapi.co — non-blocking, failure leaves geo blank.
    (async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const d = await res.json();
        setGeo({ city: d.city || "", region: d.region || "", country: d.country_name || "" });
      } catch { /* geo unavailable — form still works */ }
    })();
  }, []);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.email.trim()) errs.email = "Required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim() || form.message.length < 10) errs.message = "Tell us a little more";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    setServerError(null);

    // Resolve GA4 client_id — non-blocking, 1.5 s timeout so submit never hangs.
    let gaClientId = "";
    try {
      gaClientId = await Promise.race([
        resolveGaClientId(),
        new Promise((res) => setTimeout(() => res(""), 1500)),
      ]);
    } catch { /* ignore */ }

    const current = getAttribution();
    const firstTouch = getFirstTouch();

    const enriched = {
      ...form,
      // Current-session attribution
      utm_source:           current.utm_source,
      utm_medium:           current.utm_medium,
      utm_campaign:         current.utm_campaign,
      utm_term:             current.utm_term,
      utm_content:          current.utm_content,
      landing_page:         current.landing_page,
      referrer:             current.referrer,
      ga_client_id:         gaClientId,
      // First-touch attribution (preserved across return visits)
      ft_utm_source:        firstTouch ? firstTouch.utm_source   : current.utm_source,
      ft_utm_medium:        firstTouch ? firstTouch.utm_medium   : current.utm_medium,
      ft_utm_campaign:      firstTouch ? firstTouch.utm_campaign : current.utm_campaign,
      ft_utm_term:          firstTouch ? firstTouch.utm_term     : current.utm_term,
      ft_utm_content:       firstTouch ? firstTouch.utm_content  : current.utm_content,
      ft_landing_page:      firstTouch ? firstTouch.landing_page : current.landing_page,
      ft_referrer:          firstTouch ? firstTouch.referrer     : current.referrer,
      // Approximate visitor location (see privacy policy)
      city:                 geo.city,
      region:               geo.region,
      country:              geo.country,
    };

    try {
      const res = await fetch("https://formspree.io/f/xdabgopp", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(enriched),
      });
      const data = await res.json();
      if (data.ok) {
        setSent(true);
      } else {
        setServerError(data.errors ? data.errors.map(err => err.message).join(" ") : "Submission failed. Please try again.");
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Contact</span>
          <h1>Start Your AI Engineering Project</h1>
          <p>Tell us a bit about your project, we'll get back to you within one business day with next steps.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal">
              <h2 style={{ fontSize: 28 }}>Get in touch</h2>
              <p style={{ color: "var(--slate-500)" }}>Prefer a quick chat? Pick whichever channel works best.</p>
              <div className="contact-row">
                <span className="icon-tile"><Icon.email /></span>
                <div><strong>Email</strong><a href="mailto:office@7code.ro" style={{ color: "var(--slate-500)" }}>office@7code.ro</a></div>
              </div>
              <div className="contact-row">
                <span className="icon-tile"><Icon.pin /></span>
                <div><strong>Office</strong><a href="https://share.google/kSWr5AJABJj33MMVu" target="_blank" rel="noopener noreferrer" style={{ color: "var(--slate-500)" }}>Cluj-Napoca, Romania</a></div>
              </div>
              <div style={{ background: "var(--bg-cyan-50)", border: "1px solid var(--bg-cyan-100)", borderRadius: "var(--radius-lg)", padding: 24, marginTop: 16 }}>
                <strong style={{ display: "block", marginBottom: 6, fontFamily: "var(--font-display)" }}>Currently accepting new partnerships</strong>
                <span style={{ color: "var(--slate-500)", fontSize: 14 }}>For Q2 2026. We typically respond within 24 hours.</span>
              </div>
            </div>

            <div className="form-card reveal">
              {sent ? (
                <div className="form-success">
                  <div className="check-circle"><Icon.check style={{ width: 28, height: 28 }} /></div>
                  <h3>Thanks, we got it.</h3>
                  <p style={{ marginTop: 8, color: "var(--slate-500)" }}>We'll be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div className="form-row">
                    <div className={"field" + (errors.name ? " field--error" : "")}>
                      <label>Name</label>
                      <input value={form.name} onChange={update("name")} placeholder="Jane Doe"/>
                      {errors.name && <span className="field-error">{errors.name}</span>}
                    </div>
                    <div className={"field" + (errors.email ? " field--error" : "")}>
                      <label>Email</label>
                      <input value={form.email} onChange={update("email")} placeholder="jane@company.com"/>
                      {errors.email && <span className="field-error">{errors.email}</span>}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="field">
                      <label>Company</label>
                      <input value={form.company} onChange={update("company")} placeholder="Acme Inc."/>
                    </div>
                    <div className="field">
                      <label>Budget</label>
                      <select value={form.budget} onChange={update("budget")}>
                        <option value="">Select...</option>
                        <option>$25k – $50k</option>
                        <option>$50k – $150k</option>
                        <option>$150k – $500k</option>
                        <option>$500k+</option>
                      </select>
                    </div>
                  </div>
                  <div className={"field" + (errors.message ? " field--error" : "")}>
                    <label>Tell us about your project</label>
                    <textarea rows="5" value={form.message} onChange={update("message")} placeholder="What are you trying to build? Any constraints, timelines, or success metrics we should know about?"/>
                    {errors.message && <span className="field-error">{errors.message}</span>}
                  </div>
                  {serverError && (
                    <div className="field-error" style={{ marginBottom: 12, fontSize: 14 }}>{serverError}</div>
                  )}
                  <button type="submit" className="btn btn--cyan btn--lg" style={{ width: "100%" }} disabled={submitting}>
                    {submitting ? "Sending…" : <span style={{ display: "flex", alignItems: "center", gap: 8 }}>Send message <Icon.arrow /></span>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// CASE STUDIES, moved to case-studies.jsx (variants live there)
// ──────────────────────────────────────────────────────────────────
function _CaseStudiesPage_DEPRECATED() {
  const cats = ["All", "Healthcare", "Finance", "Energy", "Operations", "Defence", "AI / SaaS"];
  const [active, setActive] = useStateP("All");
  const items = [
    { kind: "health", title: "Telehealth platform for a national clinic network", meta: ["Healthcare", "12 weeks"], result: "+38% appointment volume", tag: "Featured" },
    { kind: "finance", title: "Real-time treasury dashboard for fintech ops team", meta: ["Finance", "8 weeks"], result: "Cut close time by 60%" },
    { kind: "energy", title: "IoT monitoring + predictive maintenance for utility", meta: ["Energy", "16 weeks"], result: "12% energy savings YoY" },
    { kind: "ops", title: "Workflow automation for global logistics provider", meta: ["Operations", "10 weeks"], result: "$4.2M annual savings" },
    { kind: "defence", title: "Situational awareness platform for defence agency", meta: ["Defence", "20 weeks"], result: "8× faster threat triage" },
    { kind: "cyan", title: "AI-powered support copilot for B2B SaaS", meta: ["AI / SaaS", "6 weeks"], result: "47% deflection rate" },
  ];
  const filtered = active === "All" ? items : items.filter(i => i.meta[0] === active);

  const stats = [
    { v: "20+", l: "Projects delivered" },
    { v: "12", l: "Industries served" },
    { v: "98%", l: "Satisfied clients" },
    { v: "$120M+", l: "Revenue impact" },
  ];

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Case studies</span>
          <h1>Outcomes, not just deliverables</h1>
          <p>A selection of products we've shipped with our partners, across healthcare, finance, energy, defence and beyond.</p>
        </div>
      </section>

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
            {cats.map(c => (
              <button key={c} className={"blog-cat" + (c === active ? " is-active" : "")} onClick={() => setActive(c)}>{c}</button>
            ))}
          </div>

          <div className="cs-grid">
            {filtered.map((c, i) => (
              <a key={c.title} href="/blog" className="cs-card reveal" style={{ transitionDelay: (i % 3 * 80) + "ms" }}>
                <CSCover kind={c.kind} label={c.meta[0]} />
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

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "64px 0", color: "var(--slate-500)" }}>
              No case studies in this category yet, but we're always shipping.
            </div>
          )}
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// AI MVP DEVELOPMENT LANDING PAGE
// ──────────────────────────────────────────────────────────────────
function AiMvpPage() {
  useSeoMeta(
    "AI MVP Development — Ship in 6 Weeks | 7code",
    "AI MVP development by 7Code. LLM-powered products designed, built, and shipped in six weeks. Evaluation harness, cloud infrastructure, and production launch included."
  );
  const steps = [
    { step: "01", title: "Week 1–2: Discovery & eval design", desc: "We map the product against LLM capabilities, define what 'good' looks like, and build the held-out evaluation dataset before writing a line of product code. Architecture decisions made here have a 10× impact on what's possible at week six." },
    { step: "02", title: "Week 3–4: Build & score", desc: "Two-week sprint with a deployable build at the end. Every AI feature is scored against the held-out eval set at the sprint review — not demoed on cherry-picked prompts. Regressions are caught on day one, not month three." },
    { step: "03", title: "Week 5–6: Harden & launch", desc: "Production hardening, observability, prompt versioning, cost controls, and a clean launch. You end week six with a shipped product, an eval harness your team can run, and dashboards for latency and token spend." },
  ];
  const deliverables = [
    { icon: Icon.code, title: "LLM-powered product", desc: "Claude, GPT, or open-weight models integrated with streaming, structured outputs, and fallback paths designed from day one." },
    { icon: Icon.cpu, title: "RAG or agent layer", desc: "Retrieval-augmented generation over your data, or a scoped agent pipeline with tool use and human-in-the-loop checkpoints." },
    { icon: Icon.chart, title: "Evaluation harness", desc: "A held-out eval set and automated scoring that proves quality before every release and catches drift in production." },
    { icon: Icon.cloud, title: "Production infrastructure", desc: "Cloud-native deployment (AWS, GCP, or Azure), CI/CD, monitoring, and cost controls included in the six-week scope." },
    { icon: Icon.shield, title: "Prompt management", desc: "Versioned prompt library with A/B testing and regression tracking, not ad-hoc edits in a shared Notion doc." },
    { icon: Icon.layers, title: "Handover package", desc: "Architecture docs, runbooks, and a working eval CI pipeline your engineering team can own from day one after launch." },
  ];
  const faqs = [
    { q: "What is an AI MVP?", a: "An AI MVP is a minimum viable product built around a core LLM or agent capability — a copilot, a RAG search, an intelligent automation — shipped to real users in six weeks to validate the value proposition before a larger build investment. Unlike a traditional MVP, it needs an evaluation harness from day one, because AI quality degrades silently and you need a metric, not a vibe, to know if it's working." },
    { q: "Can you really ship in six weeks?", a: "Yes. OctoLabs (AI support copilot) went from kick-off to a production system deflecting 47% of support tickets in six weeks. Daily8's AI moderation and summarisation features shipped inside a six-month engagement. The pattern: ruthlessly scoped capabilities, eval-gated sprints, and a team that doesn't need to learn the stack mid-project. The six-week clock starts with a real kick-off, not a discovery phase." },
    { q: "What's included in the six-week scope?", a: "Product design (AI-aware UX), the LLM or agent integration, RAG pipeline if needed, evaluation harness, production cloud deployment, basic observability (latency, cost, error rate), and a handover package. It does not include extensive data migration, complex third-party integrations, or mobile apps, those extend the timeline." },
    { q: "What if we want to build further after the MVP?", a: "Most clients do. We typically move to a sprint retainer (two-week sprints, rolling monthly) or an outstaffing arrangement where we embed one or two senior engineers in your team. The MVP's clean architecture and eval harness make it straightforward to add features without accumulating technical debt." },
  ];
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>AI MVP Development</span>
          <h1>AI MVP Development — Production-Ready in Weeks</h1>
          <p className="answer-first" style={{ maxWidth: 720, margin: "16px auto 0", fontSize: 18, color: "var(--slate-700)" }}>AI MVP development is the process of designing, building, and launching a production-ready AI product around one core LLM or agent capability. 7code ships AI MVPs in six weeks — including an evaluation harness, cloud infrastructure, and a real production launch — with fixed scope and pricing from £25k.</p>
          <p>We design, build, and ship LLM-powered products end-to-end, with an evaluation harness, cloud infrastructure, and a clean production launch, all inside a six-week fixed scope.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 32, flexWrap: "wrap" }}>
            <a href="/contact" className="btn btn--cyan btn--lg">Start your AI MVP <Icon.arrow /></a>
            <a href="/service/ai-product-engineering" className="btn btn--ghost btn--lg">See AI Product Engineering <Icon.arrow /></a>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">The problem</span>
            <h2>Most AI projects take 6 months to ship nothing.</h2>
            <p style={{ maxWidth: 680, margin: "0 auto" }}>Discovery phases run long. The spec changes when the demo lands. Engineering starts before the eval set exists. By the time you have a production system, the model it was built on is two generations old. We've inherited enough of these projects to design against them.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">The 6-week process</span>
            <h2>How we ship a production AI product in six weeks</h2>
          </div>
          <div className="exp-process">
            {steps.map((s, i) => (
              <div key={i} className="exp-process-step reveal" style={{ transitionDelay: (i * 80) + "ms" }}>
                <div className="exp-process-num">{s.step}</div>
                <div className="exp-process-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What you get</span>
            <h2>Six deliverables in six weeks</h2>
          </div>
          <div className="svc-deliver-grid">
            {deliverables.map((d, i) => {
              const I = d.icon;
              return (
                <div key={i} className="svc-deliver-card reveal" style={{ transitionDelay: (i % 3 * 60) + "ms" }}>
                  <span className="icon-tile" style={{ marginBottom: 12 }}><I /></span>
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container svc-faq-wrap">
          <div className="section-head reveal section-head--left" style={{ maxWidth: 720, margin: 0, marginBottom: 32 }}>
            <span className="eyebrow">FAQ</span>
            <h2>Questions before you start</h2>
          </div>
          <div className="svc-faq">
            {faqs.map((f, i) => (
              <details key={i} className="svc-faq-item reveal" style={{ transitionDelay: (i * 40) + "ms" }}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// UK GEO LANDING PAGE
// ──────────────────────────────────────────────────────────────────
function UkGeoPage() {
  useSeoMeta(
    "AI Development Agency for UK Companies | 7code Romania",
    "AI development agency serving UK companies from Cluj-Napoca, Romania. Same timezone overlap, senior engineers, LLM products, and nearshore rates. From £25k."
  );
  const reasons = [
    { icon: Icon.globe, title: "Timezone overlap", desc: "Cluj-Napoca is UTC+2 (UTC+3 in summer). UK teams get 7–8 hours of real-time overlap every workday — more than most US or Asian vendors." },
    { icon: Icon.users, title: "Senior-only team", desc: "Every engineer is minimum 5 years of production experience. No juniors learning on your project. No outsourced subcontractors. Direct access to the people writing the code." },
    { icon: Icon.zap, title: "AI-native from day one", desc: "We design LLMs, retrieval, and agents into the product from the first sprint — not bolted on after the architecture is set. Faster, cheaper, and categorically better outcomes." },
    { icon: Icon.shield, title: "Compliance-ready", desc: "GDPR-native by default. HIPAA-compliant builds for healthcare clients. SOC 2-aligned practices for regulated industries. UK ICO familiarity across all active engagements." },
    { icon: Icon.chart, title: "Nearshore rates", desc: "30–50% lower than equivalent London or Berlin agency rates. No compromise on quality — same seniority, same delivery standard, priced for a geography that gives us a structural cost advantage." },
    { icon: Icon.layers, title: "Proven UK delivery", desc: "WholeSum (London), Melsonic (London), and multiple undisclosed UK scale-ups are among our active client base. References available from UK founders on request." },
  ];
  const faqs = [
    { q: "Why Romania for UK AI development?", a: "Cluj-Napoca has become one of Europe's strongest engineering hubs — the same universities and talent pool that supply Google, UiPath, and Bitdefender. Paired with strong English fluency, 7–8 hours of daily overlap with the UK, and senior engineers at nearshore rates, it's the most structurally sound nearshore option for UK product companies." },
    { q: "How do collaboration and communication work day-to-day?", a: "Your engineers join your Slack, your standups, and your sprint ceremonies. We document in your tools, review in your repo, and you have direct, unmediated access to the people writing the code. UK clients typically find us easier to communicate with than UK-based agencies, because we don't have layers between you and the engineering team." },
    { q: "Are you familiar with UK contracts and procurement?", a: "Yes. We operate under UK-compatible service agreements (SoW, MSA, or project contracts), invoice in GBP or EUR, and can work inside most UK procurement frameworks. GDPR compliance is a default across all our engagements, not a bespoke add-on." },
    { q: "How much does a typical project cost?", a: "AI MVPs start from £25k for a six-week engagement. Mid-scale products (12–20 weeks) typically run £60k–£180k. Ongoing outstaffing retainers are typically £6k–£12k per engineer per month depending on seniority and specialism. We're transparent on pricing in the first call — no hidden fees, no change-order culture." },
  ];
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>AI Development Agency UK</span>
          <h1>AI Development Agency for UK Companies</h1>
          <p className="answer-first" style={{ maxWidth: 720, margin: "16px auto 0", fontSize: 18, color: "var(--slate-700)" }}>7code is an AI development agency serving UK companies from Cluj-Napoca, Romania. UK clients get senior AI engineers, around seven hours of daily timezone overlap, GDPR-native delivery, and nearshore rates — with LLM products shipped in as little as six weeks and projects starting from £25k.</p>
          <p>Senior AI engineers from Cluj-Napoca, Romania. Seven hours of daily UK timezone overlap. Nearshore rates. GDPR-native delivery. LLM products shipped in six weeks.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 32, flexWrap: "wrap" }}>
            <a href="/contact" className="btn btn--cyan btn--lg">Talk to the team <Icon.arrow /></a>
            <a href="/case-studies" className="btn btn--ghost btn--lg">See our work <Icon.arrow /></a>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Why 7Code for UK teams</span>
            <h2>Six structural advantages for UK-based product companies</h2>
          </div>
          <div className="svc-deliver-grid">
            {reasons.map((r, i) => {
              const I = r.icon;
              return (
                <div key={i} className="svc-deliver-card reveal" style={{ transitionDelay: (i % 3 * 60) + "ms" }}>
                  <span className="icon-tile" style={{ marginBottom: 12 }}><I /></span>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CaseStudies limit={3} />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container svc-faq-wrap">
          <div className="section-head reveal section-head--left" style={{ maxWidth: 720, margin: 0, marginBottom: 32 }}>
            <span className="eyebrow">Frequently asked</span>
            <h2>What UK founders typically ask</h2>
          </div>
          <div className="svc-faq">
            {faqs.map((f, i) => (
              <details key={i} className="svc-faq-item reveal" style={{ transitionDelay: (i * 40) + "ms" }}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// COMPARE: AGENCY VS FREELANCER
// ──────────────────────────────────────────────────────────────────
function CompareAgencyFreelancerPage() {
  useSeoMeta(
    "AI Agency vs AI Freelancer: Which Is Right for You? | 7code",
    "Choosing between an AI agency and a freelancer for your LLM project? Compare delivery speed, accountability, quality, and total cost — then decide."
  );
  const rows = [
    { aspect: "Team depth", agency: "Multi-discipline team: engineering, design, AI, devops, QA", freelancer: "One person across all roles, often sequentially" },
    { aspect: "Delivery speed", agency: "Six weeks to production MVP with parallel tracks", freelancer: "Longer, single-threaded delivery with no buffer for illness or overload" },
    { aspect: "AI quality controls", agency: "Eval harnesses, held-out test sets, CI gates, peer review", freelancer: "Prompt testing is typically manual and ad-hoc" },
    { aspect: "Accountability", agency: "SoW, SLA, and a named engagement lead accountable to the contract", freelancer: "Contractual accountability harder to enforce in practice" },
    { aspect: "Scaling up", agency: "Additional engineers on-demand from the same trusted team", freelancer: "Requires finding, onboarding, and trusting a new person" },
    { aspect: "Bus factor", agency: "Knowledge distributed across the team and documented", freelancer: "High: all context is in one person's head" },
    { aspect: "Cost (short-term)", agency: "Higher day rate, but fewer hidden costs from rework", freelancer: "Lower day rate, often higher total cost after iterations" },
    { aspect: "Cost (long-term)", agency: "Predictable with retainer model, no re-onboarding cost", freelancer: "Unpredictable, re-onboarding cost each engagement" },
    { aspect: "Compliance & security", agency: "GDPR, HIPAA, SOC 2 processes built into workflow", freelancer: "Varies widely by individual" },
    { aspect: "Right for", agency: "Products, platforms, and AI systems that need to survive in production", freelancer: "Small integrations, clearly scoped scripts, or very early experiments" },
  ];
  const whenAgency = [
    "The AI feature is user-facing and must work reliably under real traffic",
    "You need streaming UX, confidence indicators, and fallback paths",
    "There's a compliance requirement (GDPR, HIPAA, SOC 2)",
    "You're building a multi-step agent or a RAG pipeline over real data",
    "The project has more than 8 weeks of work or involves multiple disciplines",
    "You need an eval harness and CI quality gates before every release",
  ];
  const whenFreelancer = [
    "You need a single well-scoped API integration or script",
    "It's a proof-of-concept with no production requirements",
    "The budget is under £5k and the risk of failure is low",
    "You already have a senior engineering team that needs one missing piece",
  ];
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>AI Agency vs Freelancer</span>
          <h1>AI Agency vs Freelancer: Which to Choose</h1>
          <p className="answer-first" style={{ maxWidth: 720, margin: "16px auto 0", fontSize: 18, color: "var(--slate-700)" }}>For most AI projects, an agency suits production builds that need accountability, multiple skill sets, and senior oversight, while a freelancer fits small, low-risk tasks on a tight budget. The right choice depends on your timeline, complexity, and risk tolerance — below we compare both across ten decision factors.</p>
          <p>The right answer depends on what you're building, your timeline, and your risk tolerance. Here's how the two options compare, honestly.</p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">The comparison</span>
            <h2>Agency vs freelancer across 10 dimensions</h2>
          </div>
          <div className="reveal" style={{ overflowX: "auto", marginTop: 32 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15, lineHeight: 1.6 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--slate-200)" }}>
                  <th style={{ textAlign: "left", padding: "12px 16px", fontFamily: "var(--font-display)", color: "var(--slate-900)", width: "20%" }}>Dimension</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", fontFamily: "var(--font-display)", color: "var(--cyan-700)", width: "40%" }}>AI Agency (7Code)</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", fontFamily: "var(--font-display)", color: "var(--slate-500)", width: "40%" }}>Freelancer</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--slate-100)", background: i % 2 === 0 ? "transparent" : "var(--slate-50)" }}>
                    <td style={{ padding: "12px 16px", fontWeight: 600, color: "var(--slate-700)" }}>{r.aspect}</td>
                    <td style={{ padding: "12px 16px", color: "var(--slate-700)" }}>{r.agency}</td>
                    <td style={{ padding: "12px 16px", color: "var(--slate-500)" }}>{r.freelancer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <div className="reveal">
              <span className="eyebrow">Choose an agency when…</span>
              <ul style={{ marginTop: 16, listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {whenAgency.map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", color: "var(--slate-700)", fontSize: 15 }}>
                    <Icon.zap style={{ width: 16, height: 16, color: "var(--cyan-600)", marginTop: 3, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <span className="eyebrow">A freelancer might be fine when…</span>
              <ul style={{ marginTop: 16, listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {whenFreelancer.map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", color: "var(--slate-500)", fontSize: 15 }}>
                    <span style={{ width: 16, height: 16, color: "var(--slate-400)", marginTop: 3, flexShrink: 0 }}>–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="section-head reveal section-head--left" style={{ margin: 0, marginBottom: 24 }}>
            <span className="eyebrow">Bottom line</span>
            <h2>When to choose an AI agency</h2>
          </div>
          <p className="reveal" style={{ color: "var(--slate-600)", lineHeight: 1.8 }}>
            If you're building a product that needs to survive real user traffic, a production LLM system is not a one-person job. You need engineering across the stack (AI, backend, frontend, cloud), an evaluation harness that proves quality before every deploy, and a team accountable to a contract — not a single person who can disappear between freelance gigs.
          </p>
          <p className="reveal" style={{ color: "var(--slate-600)", lineHeight: 1.8, marginTop: 16 }}>
            Freelancers are the right choice for experiments, small integrations, and projects where the risk of failure is low. For everything else — production AI, regulated industries, user-facing copilots, multi-step agents — an agency gives you depth, accountability, and the quality controls that keep a production system trustworthy over time.
          </p>
          <div style={{ marginTop: 32 }} className="reveal">
            <a href="/contact" className="btn btn--cyan btn--lg">Talk to 7Code <Icon.arrow /></a>
          </div>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}

window.HomePage = HomePage;
window.ServicesPage = ServicesPage;
window.ExpertisePage = ExpertisePage;
window.ProcessPage = ProcessPage;
window.AboutPage = AboutPage;
window.BlogPage = BlogPage;
window.ContactPage = ContactPage;
window.AiMvpPage = AiMvpPage;
window.UkGeoPage = UkGeoPage;
window.CompareAgencyFreelancerPage = CompareAgencyFreelancerPage;

// ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
function FAQPage() {
  const faqs = [
    { q: "Where is 7code located?", a: "7code (Seven Code Development SRL) is headquartered in Cluj-Napoca, Romania — one of Central Europe’s leading technology hubs. Cluj-Napoca is home to major engineering universities and a high concentration of senior software talent. 7code operates remotely across UK, EU, UAE, and US client time zones." },
    { q: "What countries does 7code serve?", a: "7code serves clients primarily in the United Kingdom, the European Union, the United Arab Emirates, and the United States. The team operates in Central European Time (CET+1/+2), giving strong daily overlap with UK and EU clients and workable early/late overlap with UAE and US East Coast teams. All client communication is conducted in English." },
    { q: "How much does a project with 7code cost?", a: "7code’s rate card runs from EUR 30–35/h for mid-level engineers to EUR 40–50/h for seniors and EUR 60–80/h for architects. Fixed-price project options are available for well-defined scopes. Contact office@7code.ro for a tailored estimate based on your scope and team requirements." },
    { q: "Does 7code sign NDAs?", a: "Yes. 7code signs NDAs before any substantive technical discussion. Clients may use their own NDA paper or 7code’s standard mutual NDA. All engineers placed on client projects sign individual confidentiality agreements. IP developed under a 7code engagement belongs to the client by default, with explicit assignment clauses included in the master services agreement." },
    { q: "What is 7code’s engagement process?", a: "7code’s standard process has four phases: Discovery (requirements, architecture, team scoping — typically two weeks); Proposal (fixed-price or T&M scope with milestones); Build (two-week sprints with demos and sign-off); and Handover or Retainer (documentation, knowledge transfer, and optional ongoing support). Clients have a named account lead throughout the engagement." },
    { q: "How quickly can 7code start a new project?", a: "7code can typically begin a Discovery Sprint within one to two weeks of agreement signature. Full team mobilisation for a build engagement follows two to three weeks after Discovery. For urgent requirements, a fast-track onboarding process is available. Contact office@7code.ro to discuss your timeline — 7code will confirm availability within 48 hours." },
    { q: "What makes 7code different from other software agencies?", a: "7code is senior-only and AI-first — no juniors, no generalist teams learning AI on the job. Every engagement is led by engineers who have shipped AI products in production. 7code’s nearshore Romania base delivers Western-quality engineering at nearshore rates, with timezone alignment to UK and EU clients. Business-outcome focus means we measure success by your KPIs, not hours billed." },
    { q: "Does 7code work with startups?", a: "Yes. 7code works with funded startups from Seed stage upward, as well as scale-ups and enterprise clients. For early-stage companies, 7code offers a Startup Track with a phased engagement model — beginning with a focused Discovery and MVP build before scaling the team. Equity arrangements in lieu of partial fees can be discussed for the right opportunities." },
    { q: "What is 7code’s Clutch rating?", a: "7code holds a 4.9-star rating on Clutch.co based on 11 verified client reviews (as of 2025). Clutch reviews cover engagement quality, delivery timeliness, communication, and willingness to recommend. All reviews are verified by Clutch’s research team through direct client interviews. View 7code’s Clutch profile at clutch.co/profile/7code." },
    { q: "Does 7code offer fixed-price or time-and-materials contracts?", a: "7code offers both. Fixed-price contracts are available for well-defined scopes — typically used for Discovery Sprints, MVP builds, and integration projects. Time-and-materials is the default for ongoing product development and outstaffing engagements where requirements evolve. Hybrid models are also available: fixed-price phases within a broader T&M programme." },
    { q: "What industries does 7code have experience in?", a: "7code has delivered projects across healthcare, financial services, energy and utilities, defence, HR technology, and operations/logistics. Each industry brings specific compliance, data sensitivity, and integration requirements that 7code’s senior team is familiar with — from GDPR and HIPAA-adjacent data handling to sector-specific system integrations and regulatory reporting requirements." },
    { q: "How does 7code ensure quality?", a: "Quality is enforced through a senior-only hiring policy, mandatory peer code review on all pull requests, AI-specific evaluation frameworks for model outputs, automated test suites (unit, integration, and end-to-end), and a pre-launch quality gate sign-off process. Each project has a named QA engineer. 7code does not ship without a passing test suite and architecture review sign-off." },
  ];

  useSeoMeta(
    "FAQ â AI Engineering, Nearshore Dev & LLM Integration | 7code",
    "Answers to common questions about 7code's AI engineering services, nearshore development from Romania, LLM integration, pricing, GDPR compliance, and how to start a project.",
  );

  const [open, setOpen] = useStateP(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>FAQ</span>
          <h1>Questions, answered.</h1>
          <p style={{ maxWidth: 560, margin: "0 auto" }}>Everything you need to know about 7code's AI engineering services, nearshore development, LLM integration, and how we work.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="reveal" style={{ borderBottom: "1px solid var(--slate-200)", transitionDelay: (i % 5 * 40) + "ms" }}>
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "24px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                >
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: isOpen ? "var(--cyan-600)" : "var(--ink)", margin: 0, lineHeight: 1.35, letterSpacing: "-0.01em", transition: "color .2s" }}>
                    {item.q}
                  </h3>
                  <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: "50%", background: isOpen ? "var(--cyan-600)" : "var(--slate-100)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s, transform .2s", transform: isOpen ? "rotate(45deg)" : "none" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v10M1 6h10" stroke={isOpen ? "#fff" : "var(--slate-500)"} strokeWidth="1.8" strokeLinecap="round"/></svg>
                  </span>
                </button>
                {isOpen && (
                  <div style={{ paddingBottom: 24, color: "var(--slate-700)", fontSize: 15, lineHeight: 1.7 }}>{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="section section--alt" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Still have questions?</span>
          <h2 style={{ marginTop: 12 }}>Let's talk through your specific situation</h2>
          <p style={{ color: "var(--slate-500)", marginTop: 12, marginBottom: 32, fontSize: 17 }}>Every project is different. Book a 30-minute call and get a direct answer to your specific questions.</p>
          <a href="/contact" className="btn btn--cyan btn--lg">Book a discovery call <Icon.arrow /></a>
        </div>
      </section>
    </div>
  );
}


window.FAQPage = FAQPage;

// ──────────────────────────────────────────────────────────────────
// LEGAL — shared helpers
// ──────────────────────────────────────────────────────────────────
const thStyle = { padding: "10px 12px", textAlign: "left", fontWeight: 600, fontSize: 13, letterSpacing: ".04em", borderBottom: "1px solid var(--slate-200)", color: "var(--ink)" };
const tdStyle = { padding: "10px 12px", borderBottom: "1px solid var(--slate-200)", color: "var(--slate-700)", verticalAlign: "top", fontSize: 14, lineHeight: 1.6 };

function LegalContactBlock() {
  return (
    <div style={{ marginTop: 40, padding: 28, background: "var(--bg-alt)", borderRadius: "var(--radius-lg)", border: "1px solid var(--slate-200)" }}>
      <h3 style={{ margin: "0 0 16px", fontSize: 16 }}>Get in touch</h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8, fontSize: 15, color: "var(--slate-700)" }}>
        <li><strong>Email: </strong><a href="mailto:office@7code.ro" style={{ color: "var(--cyan-600)" }}>office@7code.ro</a></li>
        <li><strong>Phone: </strong><a href="tel:+40774542081" style={{ color: "var(--cyan-600)" }}>+4 0774 542 081</a></li>
        <li><strong>Address: </strong>Onisifor Ghibu 20A, Cluj-Napoca, 400185, Romania</li>
        <li><strong>Contact form: </strong><a href="/contact" style={{ color: "var(--cyan-600)" }}>7code.tech/contact</a></li>
      </ul>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// PRIVACY POLICY
// ──────────────────────────────────────────────────────────────────
function PrivacyPolicyPage() {
  useSeoMeta(
    "Privacy & Cookie Policy | 7code — SEVEN CODE DEVELOPMENT SRL",
    "How 7code collects, uses and protects personal data, and how we use cookies. GDPR-compliant — operated by SEVEN CODE DEVELOPMENT SRL, Cluj-Napoca, Romania."
  );

  useEffectP(() => {
    if (window.location.hash === "#cookies") {
      setTimeout(() => {
        const el = document.getElementById("cookies");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="tag" style={{ marginBottom: 16, display: "inline-flex" }}>Legal</span>
          <h1>Privacy &amp; Cookie Policy</h1>
          <p>7code (SEVEN CODE DEVELOPMENT SRL) — CUI: 38088795 — Cluj-Napoca, Romania</p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--slate-700)", marginBottom: 48 }}>
            This Privacy &amp; Cookie Policy explains how 7code collects, uses and protects personal data when you visit{" "}
            <a href="https://www.7code.tech" style={{ color: "var(--cyan-600)" }}>www.7code.tech</a> or contact us,
            and how we use cookies. We comply with the EU General Data Protection Regulation (GDPR),
            the ePrivacy Directive, and Romanian Law 190/2018.
          </p>

          {[
            null,
            <div key="s1">
              <h2 style={h2s}>1. Data Controller</h2>
              <ul style={uls}>
                <li><strong>Legal name: </strong>SEVEN CODE DEVELOPMENT SRL</li>
                <li><strong>CUI: </strong>38088795</li>
                <li><strong>Address: </strong>Onisifor Ghibu 20A, Cluj-Napoca, 400185, Romania</li>
                <li><strong>Email: </strong><a href="mailto:office@7code.ro" style={{ color: "var(--cyan-600)" }}>office@7code.ro</a></li>
              </ul>
            </div>,
            <div key="s2">
              <h2 style={h2s}>2. Data We Collect</h2>
              <h3 style={h3s}>Contact Form</h3>
              <p style={ps}>When you submit our contact form, we collect: Name, Email address, Phone number (optional), Company name (optional), Project details / message.</p>
              <ul style={uls}>
                <li><strong>Legal basis: </strong>Article 6(1)(b) GDPR — steps prior to entering into a contract.</li>
                <li><strong>Purpose: </strong>Respond to your enquiry and prepare a commercial offer.</li>
                <li><strong>Retention: </strong>12 months from last contact, then deleted or anonymised.</li>
              </ul>
              <h3 style={h3s}>Website Analytics</h3>
              <p style={ps}>If you accept analytics cookies, we use Google Analytics to collect anonymised data: IP address (anonymised), Browser and device type, Pages visited, time on page, referrer.</p>
              <ul style={uls}>
                <li><strong>Legal basis: </strong>Article 6(1)(a) GDPR — your consent (via cookie banner).</li>
                <li><strong>Retention: </strong>14 months.</li>
              </ul>
            </div>,
            <div key="s3">
              <h2 style={h2s}>3. Who We Share Data With</h2>
              <p style={ps}>We share data only with the following processors under signed Data Processing Agreements:</p>
              <ul style={uls}>
                <li>Google Ireland Ltd — Google Analytics</li>
                <li>Email provider — to receive and respond to contact form submissions</li>
              </ul>
              <p style={ps}>We never sell or rent your personal data.</p>
            </div>,
            <div key="s4">
              <h2 style={h2s}>4. International Data Transfers</h2>
              <p style={ps}>Some processors (e.g., Google) may transfer data outside the EU/EEA. Such transfers are protected by EU Standard Contractual Clauses (SCCs) and supplementary safeguards.</p>
            </div>,
            <div key="s5">
              <h2 style={h2s}>5. Your Rights</h2>
              <p style={ps}>Under GDPR you have the right to: Access, Rectification, Erasure ("right to be forgotten"), Restriction or objection to processing, Data portability, Withdraw consent at any time, Lodge a complaint with the Romanian DPA (ANSPDCP) —{" "}
                <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" style={{ color: "var(--cyan-600)" }}>www.dataprotection.ro</a>.
              </p>
              <p style={ps}>To exercise any right, email <a href="mailto:office@7code.ro" style={{ color: "var(--cyan-600)" }}>office@7code.ro</a>. We respond within 30 days.</p>
            </div>,
            <div key="s6">
              <h2 style={h2s}>6. Security</h2>
              <p style={ps}>We use TLS encryption, secure hosting, and access controls. Your information is treated with care and never sold to third parties.</p>
            </div>,
            <div key="s7" id="cookies">
              <h2 style={h2s}>7. Cookies</h2>
              <h3 style={h3s}>7.1 What Are Cookies?</h3>
              <p style={ps}>Cookies are small text files stored on your device when you visit a website. They help websites function and collect anonymised information about usage.</p>
              <h3 style={h3s}>7.2 Cookies We Use</h3>
              <div style={{ overflowX: "auto", margin: "16px 0" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "var(--slate-100)" }}>
                      <th style={thStyle}>Category</th>
                      <th style={thStyle}>Cookie</th>
                      <th style={thStyle}>Purpose</th>
                      <th style={thStyle}>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}>Essential</td>
                      <td style={tdStyle}><code>7code_consent</code></td>
                      <td style={tdStyle}>Stores your cookie preferences</td>
                      <td style={tdStyle}>12 months</td>
                    </tr>
                    <tr style={{ background: "var(--slate-50)" }}>
                      <td style={tdStyle}>Analytics</td>
                      <td style={tdStyle}><code>_ga</code>, <code>_ga_*</code></td>
                      <td style={tdStyle}>Google Analytics — anonymised usage data</td>
                      <td style={tdStyle}>14 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={ps}>Essential cookies are always active. Analytics cookies load only after you accept them.</p>
              <h3 style={h3s}>7.3 Managing Cookies</h3>
              <p style={ps}>You can:</p>
              <ul style={uls}>
                <li>Open the cookie banner via "Cookie settings" in the footer at any time</li>
                <li>Delete cookies in your browser settings</li>
                <li>Block cookies entirely in your browser settings</li>
              </ul>
              <p style={ps}>Step-by-step guide: <a href="https://www.allaboutcookies.org/manage-cookies" target="_blank" rel="noopener noreferrer" style={{ color: "var(--cyan-600)" }}>allaboutcookies.org/manage-cookies</a></p>
            </div>,
            <div key="s8">
              <h2 style={h2s}>8. Changes to This Policy</h2>
              <p style={ps}>We may update this Privacy &amp; Cookie Policy from time to time. The current version is always published on this page with the latest update date.</p>
              <p style={{ color: "var(--slate-400)", fontSize: 13, marginTop: 8 }}>Last updated: May 2026</p>
            </div>,
            <div key="s9">
              <h2 style={h2s}>9. Contact</h2>
              <LegalContactBlock />
            </div>,
          ].filter(Boolean)}
        </div>
      </section>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// TERMS & CONDITIONS
// ──────────────────────────────────────────────────────────────────
function TermsPage() {
  useSeoMeta(
    "Terms & Conditions | 7code — SEVEN CODE DEVELOPMENT SRL",
    "Terms & Conditions governing your use of 7code.tech and services provided by SEVEN CODE DEVELOPMENT SRL, Cluj-Napoca, Romania."
  );
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="tag" style={{ marginBottom: 16, display: "inline-flex" }}>Legal</span>
          <h1>Terms &amp; Conditions</h1>
          <p>7code (SEVEN CODE DEVELOPMENT SRL) — CUI: 38088795 — Cluj-Napoca, Romania</p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--slate-700)", marginBottom: 48 }}>
            Welcome to 7code. These Terms &amp; Conditions ("Terms") govern your access to and use of{" "}
            <a href="https://www.7code.tech" style={{ color: "var(--cyan-600)" }}>www.7code.tech</a> (the "Website") and any
            services provided by SEVEN CODE DEVELOPMENT SRL ("7code", "we", "us"). By accessing the Website or engaging our
            services, you agree to be bound by these Terms.
          </p>

          <h2 style={h2s}>1. About Us</h2>
          <ul style={uls}>
            <li><strong>Legal name: </strong>SEVEN CODE DEVELOPMENT SRL</li>
            <li><strong>CUI: </strong>38088795</li>
            <li><strong>Registered office: </strong>Onisifor Ghibu 20A, Cluj-Napoca, 400185, Romania</li>
            <li><strong>Email: </strong><a href="mailto:office@7code.ro" style={{ color: "var(--cyan-600)" }}>office@7code.ro</a></li>
            <li><strong>Phone: </strong><a href="tel:+40774542081" style={{ color: "var(--cyan-600)" }}>+4 0774 542 081</a></li>
          </ul>

          <h2 style={h2s}>2. Services</h2>
          <p style={ps}>7code provides nearshore software development and AI automation services, including:</p>
          <ul style={uls}>
            <li>Staff augmentation and dedicated teams</li>
            <li>End-to-end product development</li>
            <li>AI automation and system integrations</li>
            <li>Technical consulting and workshops</li>
          </ul>
          <p style={ps}>Service scope, deliverables, timelines and fees are defined in a separate written agreement (MSA or SOW) signed between 7code and the client. In case of conflict, the signed agreement prevails over these Terms.</p>

          <h2 style={h2s}>3. Use of the Website</h2>
          <p style={ps}>You may use the Website for lawful purposes only. You agree not to:</p>
          <ul style={uls}>
            <li>Use the Website in any way that breaches applicable law</li>
            <li>Attempt to gain unauthorised access to the Website or its systems</li>
            <li>Interfere with the Website's operation, security or performance</li>
            <li>Scrape, copy or republish content without our prior written consent</li>
            <li>Submit false, misleading or harmful information via our contact form</li>
          </ul>

          <h2 style={h2s}>4. Intellectual Property</h2>
          <h3 style={h3s}>Website Content</h3>
          <p style={ps}>All content on the Website — text, graphics, logos, icons, images, code, design — is owned by or licensed to 7code and protected by Romanian, EU and international IP laws. You may not reproduce, distribute or modify any content without our prior written consent.</p>
          <h3 style={h3s}>Client Deliverables</h3>
          <p style={ps}>Ownership of work product developed for clients is defined in the applicable signed agreement. Pre-existing IP and reusable components remain the property of 7code unless stated otherwise.</p>

          <h2 style={h2s}>5. Engagement Process</h2>
          <p style={ps}>Any engagement with 7code follows this process: Initial enquiry via contact form, email or call; Discovery and qualification; Proposal and commercial offer; Signed contract (MSA / SOW / NDA as required); Kickoff and delivery.</p>
          <p style={ps}>Contact form submissions do not constitute a binding offer or contract.</p>

          <h2 style={h2s}>6. Fees &amp; Payment</h2>
          <p style={ps}>All fees, rates and payment terms are set out in the signed contract or SOW. Unless otherwise agreed:</p>
          <ul style={uls}>
            <li>Invoices are issued monthly</li>
            <li>Payment is due within 14 days from the invoice date</li>
            <li>Late payments may incur statutory interest under Romanian law</li>
            <li>All amounts are exclusive of VAT, where applicable</li>
          </ul>

          <h2 style={h2s}>7. Confidentiality</h2>
          <p style={ps}>Both parties agree to keep confidential any non-public business, technical or commercial information shared during the engagement. Specific obligations are formalised through an NDA when required.</p>

          <h2 style={h2s}>8. Warranties &amp; Disclaimers</h2>
          <p style={ps}>The Website and its content are provided "as is" and "as available", without warranties of any kind, express or implied. We do not warrant that the content is complete, current or error-free, or that access will be uninterrupted.</p>
          <p style={ps}>Service-specific warranties for client engagements are defined in the signed contract.</p>

          <h2 style={h2s}>9. Limitation of Liability</h2>
          <p style={ps}>To the maximum extent permitted by law, 7code shall not be liable for any indirect, incidental, special or consequential damages, or any loss of profits, revenue, data, or business opportunities, arising out of or related to your use of the Website.</p>
          <p style={ps}>For paid client engagements, liability is limited as set out in the signed contract.</p>

          <h2 style={h2s}>10. Third-Party Links &amp; Services</h2>
          <p style={ps}>The Website may contain links to third-party websites or embed third-party services (e.g., Google Analytics, LinkedIn, YouTube). We are not responsible for the content, policies or practices of any third party.</p>

          <h2 style={h2s}>11. Data Protection</h2>
          <p style={ps}>Personal data is processed in line with our{" "}
            <a href="/privacy-policy" style={{ color: "var(--cyan-600)" }}>Privacy &amp; Cookie Policy</a>,
            which forms part of these Terms.
          </p>

          <h2 style={h2s}>12. Termination</h2>
          <p style={ps}>We may suspend or terminate your access to the Website at any time, without notice, if we believe you have violated these Terms. Termination of client services is governed by the signed contract.</p>

          <h2 style={h2s}>13. Governing Law &amp; Jurisdiction</h2>
          <p style={ps}>These Terms are governed by the laws of Romania. Any dispute shall be submitted to the exclusive jurisdiction of the competent courts of Cluj-Napoca, Romania, unless otherwise agreed in writing.</p>

          <h2 style={h2s}>14. Changes to These Terms</h2>
          <p style={ps}>We may update these Terms from time to time. The latest version will always be published on this page. Continued use of the Website after changes constitutes acceptance.</p>
          <p style={{ color: "var(--slate-400)", fontSize: 13, marginTop: 8 }}>Last updated: May 2026</p>

          <h2 style={h2s}>15. Contact Us</h2>
          <LegalContactBlock />
        </div>
      </section>
    </div>
  );
}

// shared style objects for legal pages
const h2s = { fontSize: 20, fontWeight: 700, margin: "40px 0 12px", paddingTop: 8, borderTop: "1px solid var(--slate-200)", color: "var(--ink)" };
const h3s = { fontSize: 16, fontWeight: 600, margin: "24px 0 8px", color: "var(--ink)" };
const ps  = { fontSize: 15, lineHeight: 1.75, color: "var(--slate-700)", margin: "0 0 12px" };
const uls = { paddingLeft: 20, margin: "8px 0 16px", color: "var(--slate-700)", fontSize: 15, lineHeight: 1.75 };

window.PrivacyPolicyPage = PrivacyPolicyPage;
window.TermsPage = TermsPage;
