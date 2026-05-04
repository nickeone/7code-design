/* global React, Icon, TrustedBy, CaseStudies, WhyChoose, VerifiedAccredited, Expertise, Services, Testimonials, CTAStrip, HeroPatternMockup, HeroTerminal, HeroBoldSplit, CSCover */

const { useState: useStateP, useEffect: useEffectP } = React;

// ──────────────────────────────────────────────────────────────────
// HOME
// ──────────────────────────────────────────────────────────────────
function HomePage({ heroVariant }) {
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
  const steps = [
    { title: "Discovery & Strategy", desc: "We start by understanding your business, users, and constraints. Output: a clear product strategy and engineering plan.", deliverables: ["Product strategy doc", "Tech architecture", "Roadmap"] },
    { title: "Design & Prototyping", desc: "Wireframes, hi-fi designs, and interactive prototypes — validated with real users before a line of production code is written.", deliverables: ["Design system", "Hi-fi mockups", "Clickable prototype"] },
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
  const values = [
    { icon: Icon.target, title: "Outcomes over output", desc: "We measure success in business impact, not lines of code or features shipped." },
    { icon: Icon.heart, title: "Long-term partnerships", desc: "We're here for the second deploy and the hundredth — not just the first launch." },
    { icon: Icon.zap, title: "Bias for shipping", desc: "Real users, real feedback, real iteration. We move fast without breaking the things that matter." },
  ];
  const team = [
    { name: "Andrei Popa", role: "Co-founder, Engineering", initial: "A" },
    { name: "Elena Marin", role: "Co-founder, Design", initial: "E" },
    { name: "Stefan Vlad", role: "Lead Engineer", initial: "S" },
    { name: "Ioana Dinu", role: "Product Strategist", initial: "I" },
  ];
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>About 7Code</span>
          <h1>We build the engineering team you wish you had</h1>
          <p>7Code is a software product agency based in Bucharest. We partner with founders and product teams to ship reliable, scalable software.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal section-head--left" style={{ maxWidth: 720, margin: 0 }}>
            <span className="eyebrow">Vision & mission</span>
            <h2>To shape the future of digital products by building technology that is fast, scalable, and meaningful.</h2>
            <p>7Code envisions a world where businesses can transform ideas into powerful digital experiences through modern engineering and thoughtful design. We approach every project as a product, not just a delivery — focused on building scalable, maintainable solutions that support long-term growth.</p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What we believe</span>
            <h2>Our values</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => {
              const I = v.icon;
              return (
                <div key={i} className="card reveal">
                  <span className="icon-tile"><I /></span>
                  <h3>{v.title}</h3>
                  <p style={{ marginTop: 8, color: "var(--slate-500)" }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">The team</span>
            <h2>Small team, deep expertise</h2>
            <p>Senior engineers, designers and product strategists. No middlemen, no junior labour pools — just the people who actually do the work.</p>
          </div>
          <div className="team-grid">
            {team.map((t, i) => (
              <div key={i} className="team-card reveal" style={{ transitionDelay: (i * 60) + "ms" }}>
                <div className="team-photo"><span>{t.initial}</span></div>
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
          <p>Engineering, design, and strategy — the things we wish we'd known before we started.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-featured reveal">
            <div>
              <span className="tag tag--ink" style={{ marginBottom: 16 }}>Featured</span>
              <h2 style={{ marginTop: 12 }}>{featured.title}</h2>
              <p>An honest take on why distributed systems are still overkill for most products — and what to reach for instead.</p>
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
  const [form, setForm] = useStateP({ name: "", email: "", company: "", budget: "", message: "" });
  const [errors, setErrors] = useStateP({});
  const [sent, setSent] = useStateP(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.email.trim()) errs.email = "Required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim() || form.message.length < 10) errs.message = "Tell us a little more";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Contact</span>
          <h1>Let's build something together</h1>
          <p>Tell us a bit about your project — we'll get back to you within one business day with next steps.</p>
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
                <div><strong>Email</strong><span>hello@7code.ro</span></div>
              </div>
              <div className="contact-row">
                <span className="icon-tile"><Icon.phone /></span>
                <div><strong>Phone</strong><span>+40 700 000 000</span></div>
              </div>
              <div className="contact-row">
                <span className="icon-tile"><Icon.pin /></span>
                <div><strong>Office</strong><span>Bucharest, Romania</span></div>
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
                  <h3>Thanks — we got it.</h3>
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
                  <button type="submit" className="btn btn--cyan btn--lg" style={{ width: "100%" }}>
                    Send message <Icon.arrow />
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
// CASE STUDIES — moved to case-studies.jsx (variants live there)
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
          <p>A selection of products we've shipped with our partners — across healthcare, finance, energy, defence and beyond.</p>
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
              <a key={c.title} href="#/blog" className="cs-card reveal" style={{ transitionDelay: (i % 3 * 80) + "ms" }}>
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
              No case studies in this category yet — but we're always shipping.
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
