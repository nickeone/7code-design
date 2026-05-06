/* global React, Icon, TrustedBy, CaseStudies, WhyChoose, VerifiedAccredited, Expertise, Services, Testimonials, CTAStrip, HeroPatternMockup, HeroTerminal, HeroBoldSplit, CSCover */

const { useState: useStateP, useEffect: useEffectP } = React;
const SITE_ROOT = "https://www.7code.tech";

function useSeoMeta(title, desc, ldJson) {
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
    let s;
    if (ldJson) {
      s = document.createElement("script");
      s.type = "application/ld+json"; s.setAttribute("data-page-ld", "1"); s.text = JSON.stringify(ldJson);
      document.head.appendChild(s);
    }
    return () => {
      document.title = prevTitle;
      if (descEl && prevDesc !== null) descEl.setAttribute("content", prevDesc);
      if (s) s.remove();
    };
  }, []);
}

// ──────────────────────────────────────────────────────────────────
// HOME
// ──────────────────────────────────────────────────────────────────
function HomePage({ heroVariant }) {
  useSeoMeta(
    "7Code, AI-Native Software Engineering Agency, Cluj-Napoca, Romania",
    "7Code is an AI-first software engineering agency based in Cluj-Napoca, Romania. We design, build, and operate AI-native products, LLM features, agent workflows, and cloud infrastructure for founders and product teams across Europe, the UK, and the Middle East.",
    { "@context": "https://schema.org", "@type": "ProfessionalService", "name": "7Code", "url": SITE_ROOT, "description": "AI-first software engineering agency, Cluj-Napoca, Romania.", "address": { "@type": "PostalAddress", "addressLocality": "Cluj-Napoca", "addressCountry": "RO" }, "areaServed": "Worldwide", "priceRange": "$$" }
  );
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
          <h1>How we turn ideas into shipped products</h1>
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
    const ld = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "7Code",
      "url": "https://www.7code.tech/",
      "logo": "https://www.7code.tech/project/logo.svg",
      "description": "AI-first software engineering agency based in Cluj-Napoca, Romania. We design, build, and operate AI-native products end-to-end.",
      "foundingLocation": { "@type": "Place", "name": "Cluj-Napoca, Romania" },
      "areaServed": ["Romania", "Europe", "United Kingdom", "United Arab Emirates", "Worldwide"],
      "address": { "@type": "PostalAddress", "addressLocality": "Cluj-Napoca", "addressCountry": "RO" },
      "contactPoint": { "@type": "ContactPoint", "email": "office@7code.ro", "contactType": "sales" },
      "sameAs": [
        "https://www.linkedin.com/company/7-code/",
        "https://github.com/7code",
        "https://clutch.co/profile/7code"
      ],
    };
    const s = document.createElement("script");
    s.type = "application/ld+json"; s.id = "about-ld"; s.text = JSON.stringify(ld);
    document.head.appendChild(s);
    return () => { document.title = prev; if (descEl && prevDesc !== null) descEl.setAttribute("content", prevDesc); s.remove(); };
  }, []);

  const stats = [
    { v: "2019", l: "Founded in Cluj-Napoca" },
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
    { name: "Nicu Mardari", role: "CEO", initial: "N", photo: "/project/uploads/authors/nicu-mardari.jpg" },
    { name: "Alessandro Merola", role: "CTO", initial: "A", photo: "/project/uploads/authors/alessandro-merola.jpg" },
    { name: "Daniela Cazac", role: "CMO", initial: "D", photo: "/project/uploads/authors/daniela-cazac.jpg" },
  ];

  return (
    <div className="page">

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>About 7Code</span>
          <h1>The AI engineering partner that actually ships</h1>
          <p>7Code is an AI-first software engineering agency based in Cluj-Napoca, Romania. Since 2019, we've designed, built, and operated AI-native products, LLM integrations, and cloud infrastructure for founders and product teams across Europe, the UK, and the Middle East, acting as the senior engineering team they needed but didn't want to hire full-time.</p>
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
function ContactPage() {
  useSeoMeta(
    "Contact 7Code, Start a Project | Cluj-Napoca, Romania",
    "Get in touch with 7Code, an AI-native software engineering agency based in Cluj-Napoca, Romania. Tell us about your project and we'll respond within one business day.",
    { "@context": "https://schema.org", "@type": "ContactPage", "name": "Contact 7Code", "url": SITE_ROOT + "/contact", "description": "Contact 7Code to start a software engineering or AI project.", "mainEntity": { "@type": "Organization", "name": "7Code", "email": "office@7code.ro", "address": { "@type": "PostalAddress", "addressLocality": "Cluj-Napoca", "addressCountry": "RO" } } }
  );
  const [form, setForm] = useStateP({ name: "", email: "", company: "", budget: "", message: "" });
  const [errors, setErrors] = useStateP({});
  const [sent, setSent] = useStateP(false);
  const [submitting, setSubmitting] = useStateP(false);
  const [serverError, setServerError] = useStateP(null);

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
    try {
      const res = await fetch("https://formspree.io/f/xdabgopp", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(form),
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
          <h1>Let's build something together</h1>
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

window.HomePage = HomePage;
window.ExpertisePage = ExpertisePage;
window.ProcessPage = ProcessPage;
window.AboutPage = AboutPage;
window.BlogPage = BlogPage;
window.ContactPage = ContactPage;
