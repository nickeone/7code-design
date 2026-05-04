/* global React, Logo, Icon */

const { useState: useStateS, useEffect: useEffectS, useRef: useRefS } = React;

// ──────────────────────────────────────────────────────────────────
// Shared section components used by multiple pages
// ──────────────────────────────────────────────────────────────────

// Trusted-by marquee
function TrustedBy() {
  const logos = [
    { src: "project/assets/b6d98b61cd02d867e9a2cd2d32465eb8ba06203f.png", alt: "Founders Factory" },
    { src: "project/assets/9681e775df296ad64c7b5a041883805a82c3d2a1.png", alt: "G42" },
    { src: "project/assets/4436e02038b9c61bca6a16aa049b705ba895505c.png", alt: "Ronins" },
    { src: "project/uploads/daily8.png", alt: "Daily8" },
    { src: "project/uploads/lendit.png", alt: "Lendit" },
    { src: "project/uploads/Lidl-logo.png", alt: "Lidl" },
    { src: "project/uploads/wholesum.webp", alt: "Wholesum" },
  ];
  const all = [...logos, ...logos];
  return (
    <section className="trust">
      <div className="container">
        <div className="trust-label">Trusted by Industry Leaders</div>
        <div className="marquee">
          <div className="marquee-track">
            {all.map((l, i) => (
              <div key={i} className="marquee-logo" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 48, padding: "0 8px" }}>
                <img src={l.src} alt={l.alt} style={{ height: 44, width: "auto", maxWidth: 160, objectFit: "contain", display: "block" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Photo covers for case studies that have a real hero image. Anything not
// listed falls back to the kind-based pattern card below.
const CS_PHOTO_COVERS = {
  "wholesum":         { src: "project/uploads/wholesum%20hero.png",      alt: "WholeSum" },
  "daily8":           { src: "project/uploads/daily8-website.jpg",       alt: "Daily8 — daily8.com/en" },
  "revote":           { src: "project/uploads/revote-hero.jpg",          alt: "Revote — European Parliament chamber" },
  "g42-fleet":        { src: "project/uploads/g42-fleet-hero.jpg",       alt: "G42 ESTS fleet-tracking dashboard" },
  "cloud-of-legacy":  { src: "project/uploads/cloud-of-legacy-hero.jpg", alt: "Cloud of Legacy landing page" },
  "lidl-road-safety": { src: "project/uploads/lidl-road-safety-hero.jpg", alt: "Lidl + Politia Romana road-safety app" },
  "founders-factory": { src: "project/uploads/founders-factory-hero.jpg", alt: "Founders Factory homepage — Power to founders" },
  "hera":             { src: "project/uploads/hera-hero.jpg",             alt: "Hera Health Tech — fertility-clinic patient support app" },
  "melsonic":         { src: "project/uploads/melsonic-hero.jpg",         alt: "Melsonic — AI-powered guitar learning" },
  "drum-bun":         { src: "project/uploads/drum-bun-hero.jpg",         alt: "Drum Bun — Romanian car-services mobile app" },
  "numerize":         { src: "project/uploads/numerize-hero.jpg",         alt: "Numerize — French document management and e-signature platform" },
};

// Case study cover graphic
function CSCover({ kind, label, slug }) {
  const photo = CS_PHOTO_COVERS[slug];
  if (photo) {
    return (
      <div className="cs-cover cs-cover--photo">
        <img src={photo.src} alt={label || photo.alt} className="cs-cover-img"/>
      </div>
    );
  }
  const map = {
    health:   { cls: "cover--health",   icon: <Icon.heart /> },
    finance:  { cls: "cover--finance",  icon: <Icon.briefcase /> },
    energy:   { cls: "cover--energy",   icon: <Icon.energy /> },
    ops:      { cls: "cover--ops",      icon: <Icon.chart /> },
    defence:  { cls: "cover--defence",  icon: <Icon.shield /> },
    cyan:     { cls: "cover--cyan",     icon: <Icon.zap /> },
  };
  const m = map[kind] || map.cyan;
  return (
    <div className={"cs-cover " + m.cls}>
      <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <defs>
          <pattern id={"p-" + kind} width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.12)"/>
          </pattern>
        </defs>
        <rect width="400" height="250" fill={"url(#p-" + kind + ")"}/>
        <circle cx="320" cy="60" r="140" fill="rgba(255,255,255,0.03)"/>
      </svg>
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <div style={{ width: 52, height: 52, borderRadius: 12, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", display: "grid", placeItems: "center", backdropFilter: "blur(8px)" }}>
          {React.cloneElement(m.icon, { style: { width: 22, height: 22, color: "#fff" } })}
        </div>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)" }}>{label}</span>
      </div>
    </div>
  );
}

// Case studies section
function CaseStudies({ limit }) {
  const items = [
    // First six surface on the homepage (pages.jsx caps CaseStudies at limit={6}).
    { slug: "wholesum", kind: "cyan", title: "Self-serve AI analytics platform for unstructured text", meta: ["Data / AI", "16 weeks"], tag: "Featured" },
    { slug: "daily8", kind: "cyan", title: "AI-powered news aggregator for the MENA region", meta: ["Mobile / Media", "6 months"] },
    { slug: "revote", kind: "defence", title: "Remote electronic voting platform for the European Parliament", meta: ["E-Government", "8 months"] },
    { slug: "lidl-road-safety", kind: "cyan", title: "Children's road-safety gamification web app for Lidl Romania", meta: ["Education / Retail CSR", "6 months"] },
    { slug: "hera", kind: "health", title: "AI-powered patient-support app for fertility clinics", meta: ["Healthcare / FemTech", "3 months MVP"] },
    { slug: "melsonic", kind: "cyan", title: "AI-powered guitar-learning web app with real-time feedback", meta: ["Music / EdTech", "5 months MVP"] },
    // Remaining cases — visible on /case-studies, hidden from the homepage grid.
    { slug: "g42-fleet", kind: "energy", title: "Real-time fleet tracking platform for EXPO 2020 Dubai", meta: ["IoT / Smart Buildings", "2 years"] },
    { slug: "cloud-of-legacy", kind: "cyan", title: "Cloud-based digital-heritage platform with secure inheritance access", meta: ["Consumer SaaS", "8 months"] },
    { slug: "founders-factory", kind: "finance", title: "UI overhaul + ongoing engineering for a UK venture studio", meta: ["Venture Studio / VC", "Ongoing"] },
    { slug: "drum-bun", kind: "ops", title: "Romanian car-services mobile app — RCA, ITP, vignette in one tap", meta: ["InsurTech / Automotive", "Ongoing"] },
    { slug: "numerize", kind: "ops", title: "Responsive electronic document management + e-signature platform", meta: ["DocTech / Enterprise", "Ongoing"] },
  ];
  const list = limit ? items.slice(0, limit) : items;
  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Case studies</span>
          <h2>Work we're proud to ship</h2>
          <p>Technical depth meets business strategy. Here are a few products we've built with our partners.</p>
        </div>
        <div className="cs-grid">
          {list.map((c, i) => (
            <a key={i} href={"#/case-study/" + c.slug} className="cs-card reveal" style={{ transitionDelay: (i % 3 * 80) + "ms" }}>
              <CSCover kind={c.kind} label={c.meta[0]} slug={c.slug} />
              {c.tag && <div className="cs-tag-row"><span className="tag tag--ink">{c.tag}</span></div>}
              <div className="cs-body">
                <div className="cs-meta">
                  {c.meta.map((m, j) => <span key={j}>{m}</span>)}
                </div>
                <h3>{c.title}</h3>
                <span className="cs-link">Read case study <Icon.arrow /></span>
              </div>
            </a>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="#/case-studies" className="btn btn--ghost">View all projects <Icon.arrow /></a>
        </div>
      </div>
    </section>
  );
}

// Why-choose section
function WhyChoose() {
  const why = [
    { icon: Icon.cpu, title: "AI-native by default", desc: "We design products around LLMs and agents from day one. Retrieval, evaluation, observability and guardrails are built in — not bolted on — so AI features behave predictably in production." },
    { icon: Icon.chart, title: "Outcomes you can audit", desc: "Every engagement opens with a baseline and closes with the numbers: conversion lift, deflection rate, cost per task, eval scores. We commit to measurable business impact, not deliverables." },
    { icon: Icon.cloud, title: "Production-grade cloud & agent infra", desc: "AWS, GCP, and Azure native. Vector stores, model gateways, eval harnesses, and CI for prompts and code — built to scale, audit, and recover, not just to demo." },
    { icon: Icon.users, title: "Embedded long-term partnership", desc: "Senior AI engineers matched in 72 hours and embedded inside your team. Monthly rolling contracts, no lock-in, and 24/7 production support after launch." },
  ];
  const stats = [
    { v: "20+", l: "Projects delivered" },
    { v: "98%", l: "Satisfied clients" },
    { v: "8+ yrs", l: "Engineering practice" },
    { v: "24/7", l: "Production support" },
  ];
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Why 7Code</span>
          <h2>Your AI-first engineering partner for production-grade products</h2>
          <p>We design, build, and operate AI-native software end-to-end — LLM features, agentic workflows, and the cloud foundations that keep them reliable. Strategy, design, and engineering under one roof, shipping in weeks, not quarters.</p>
        </div>
        <div className="why-grid">
          {why.map((w, i) => {
            const I = w.icon;
            return (
              <div key={i} className="why-card reveal" style={{ transitionDelay: (i * 80) + "ms" }}>
                <span className="why-icon"><I /></span>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="stat-row">
          {stats.map((s, i) => (
            <div key={i} className="stat reveal" style={{ transitionDelay: (i * 60) + "ms" }}>
              <div className="stat-value">{s.v}</div>
              <div className="stat-label">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Verified & accredited section — credentials and listings
function VerifiedAccredited() {
  const items = [
    { src: "project/uploads/SOC-2-Type-2-Logo.webp",          alt: "SOC 2 Type II — AICPA-aligned controls" },
    { src: "project/uploads/hipa.webp",                       alt: "HIPAA Compliant — healthcare data safeguards" },
    { src: "project/uploads/gdpr.png",                        alt: "GDPR Compliant — EU General Data Protection Regulation" },
    { src: "project/uploads/iso%209001.png",                  alt: "ISO 9001:2015 — quality management system certification" },
    { src: "project/uploads/clutch.png",                      alt: "Clutch — Top Web Developers · Government, Romania", href: "https://clutch.co/profile/7code" },
    { src: "project/uploads/sortlist%20logo%20.png",          alt: "Sortlist Verified Agency" },
    { src: "project/uploads/crunchbase.png",                  alt: "Listed on Crunchbase",  href: "https://www.crunchbase.com/organization/7code" },
    { src: "project/uploads/Goodfirms-Logo-Vector.svg-.png",  alt: "Listed on GoodFirms",   href: "https://www.goodfirms.co/company/7code" },
  ];
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Verified & accredited</span>
          <h2>The credentials behind the work</h2>
          <p>Audited where it matters, listed where buyers look, certified for the regulated industries we ship in.</p>
        </div>
        <div className="trust-grid">
          {items.map((item, i) => {
            const inner = (
              <img
                src={item.src}
                alt={item.alt}
                className={"trust-logo" + (item.className ? " " + item.className : "")}
                loading="lazy"
              />
            );
            return item.href ? (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                 className="trust-card reveal" style={{ transitionDelay: (i % 4 * 50) + "ms" }}
                 aria-label={item.alt}>
                {inner}
              </a>
            ) : (
              <div key={i} className="trust-card reveal" style={{ transitionDelay: (i % 4 * 50) + "ms" }}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Expertise section
function Expertise({ headTitle = "Our Expertise", headDesc = "We specialize in key sectors, delivering tailored digital solutions that drive growth, efficiency, and innovation." }) {
  const items = [
    {
      icon: Icon.heart, title: "Healthcare",
      desc: "HIPAA-compliant platforms that connect clinicians, patients, and data.",
      bullets: ["EHR interoperability", "Clinical decision support", "Patient engagement"],
    },
    {
      icon: Icon.briefcase, title: "Finance",
      desc: "Real-time dashboards, ERP integration, and automation that scales.",
      bullets: ["Real-time dashboards", "ERP integration", "Accounting automation"],
    },
    {
      icon: Icon.energy, title: "Energy & Utilities",
      desc: "IoT-driven monitoring and predictive analytics for critical infrastructure.",
      bullets: ["IoT integration", "Predictive analytics", "Real-time monitoring"],
    },
    {
      icon: Icon.shield, title: "Defence & Security",
      desc: "Secure systems integration and situational-awareness platforms.",
      bullets: ["Situational awareness", "Systems integration", "Predictive analytics"],
    },
    {
      icon: Icon.users, title: "HR",
      desc: "Recruitment, onboarding, payroll and workforce analytics — unified.",
      bullets: ["Recruitment & onboarding", "Performance & payroll", "Workforce analytics"],
    },
    {
      icon: Icon.chart, title: "Operations",
      desc: "Workflow automation and dashboards across the operational stack.",
      bullets: ["Workflow automation", "Operations dashboards", "Predictive analytics"],
    },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Expertise</span>
          <h2>{headTitle}</h2>
          <p>{headDesc}</p>
        </div>
        <div className="exp-grid">
          {items.map((e, i) => {
            const I = e.icon;
            return (
              <div key={i} className="exp-card reveal" style={{ transitionDelay: (i % 3 * 80) + "ms" }}>
                <span className="icon-tile"><I /></span>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
                <ul className="exp-list">
                  {e.bullets.map((b, j) => <li key={j}><Icon.checkCircle /> {b}</li>)}
                </ul>
                <a href="#/expertise" className="btn-link">Learn more <Icon.arrow /></a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Services section
function Services() {
  const services = [
    { icon: Icon.code, slug: "ai-product-engineering", title: "AI-Native Product Engineering", desc: "AI-first web and mobile products — LLM interfaces, smart workflows, and scalable architectures built to compound." },
    { icon: Icon.globe, slug: "system-integrations", title: "System Integrations", desc: "Connect your stack — ERPs, CRMs, data warehouses, and legacy systems — into a single, reliable data fabric." },
    { icon: Icon.cpu, slug: "ai-automation", title: "AI & Process Automation", desc: "LLM integrations, custom copilots, and workflow automation that eliminates manual work and compounds over time." },
    { icon: Icon.cloud, slug: "cloud-agentic-infra", title: "Cloud & Agentic Infrastructure", desc: "Cloud-native foundations and agentic pipeline orchestration — so your AI products run reliably, scale automatically, and cost what they should." },
    { icon: Icon.layers, slug: "product-strategy", title: "Product Strategy & Design", desc: "From discovery to design system — building products that resonate with users and hold up under engineering." },
    { icon: Icon.users, slug: "ai-outstaffing", title: "AI Engineering Outstaffing", desc: "Senior AI engineers embedded in your team — matched in 72 hours, monthly rolling contracts, no long-term lock-in." },
  ];
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Our services</span>
          <h2>End-to-end product engineering</h2>
          <p>Comprehensive digital services to take your product from concept to launch — and beyond.</p>
        </div>
        <div className="reveal" style={{ maxWidth: 880, margin: "0 auto" }}>
          {services.map((s, i) => {
            const I = s.icon;
            return (
              <a key={i} href={"#/service/" + s.slug} className="svc-card">
                <span className="icon-tile"><I /></span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                <Icon.arrow style={{ width: 20, height: 20, color: "var(--slate-400)" }} />
              </a>
            );
          })}
        </div>
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="#/contact" className="btn btn--cyan">Discuss your project <Icon.arrow /></a>
        </div>
      </div>
    </section>
  );
}

// Testimonials — verified Clutch reviews, 2x2 grid with client photos
function Testimonials() {
  // All quotes verified on clutch.co/profile/7code
  const items = [
    {
      quote: "The self-serve MVP is live and in use. 7Code has excellent communication and project management skills. The team is quick to respond to the client's needs. The client is pleased with the outcome and the team's technical leadership.",
      name: "Emily Kucharski",
      role: "CEO & Co-Founder",
      company: "WholeSum",
      photoUrl: "project/uploads/emily%20.jpeg",
    },
    {
      quote: "7Code's work resulted in a functional MVP, and the client's internal testing yielded positive results. The team followed a structured sprint process, held regular stand-ups, and communicated consistently during the project. 7Code was responsive, proactive, flexible, transparent, and collaborative.",
      name: "Evyn White",
      role: "Co-Founder",
      company: "Hera Health Tech",
      photoUrl: "project/uploads/evyn%20-%20hera.jpeg",
    },
    {
      quote: "The client was happy with 7Code's work, daily status reports, and on-time delivery of milestones. Their project management was well-organized, and they used virtual meetings for communication. 7Code's professionalism, flexibility, and commitment also contributed to the project's success.",
      name: "Marcel Ionescu",
      role: "Chief Technology Officer",
      photoUrl: "project/uploads/marcel%20ionescu%20.jpeg",
    },
    {
      quote: "7Code has steadily progressed through the client's development backlog. Their team demonstrates proactiveness, timely delivery, and proactive engagement. They also ensure strong communication through email, messaging apps, and virtual meetings.",
      name: "Paul Egan",
      role: "CTO",
      company: "Founders Factory",
      photoUrl: "project/uploads/paul%20egan.jpeg",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Testimonials</span>
          <h2>What clients say after the launch</h2>
          <p>Verified, named reviews from the founders and CTOs we work with.</p>
        </div>
        <div className="testi-grid">
          {items.map((t, i) => (
            <article key={i} className="testi-card reveal" style={{ transitionDelay: (i % 2 * 60) + "ms" }}>
              <div className="testi-quote-mark" aria-hidden="true">&ldquo;</div>
              <blockquote className="testi-quote">{t.quote}</blockquote>
              <div className="testi-author">
                <img src={t.photoUrl} alt={t.name} className="testi-photo" loading="lazy"/>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}{t.company ? ", " + t.company : ""}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA strip
function CTAStrip() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-strip reveal">
          <div className="cta-strip-content">
            <span className="tag tag--ink"><span className="tag-dot"/> Available for new partnerships</span>
            <h2 style={{ marginTop: 16 }}>Ready to build your next product?</h2>
            <p>Tell us about your project. We'll respond within one business day with next steps.</p>
          </div>
          <div className="cta-strip-actions">
            <a href="#/contact" className="btn btn--cyan btn--lg">Book a discovery call <Icon.arrow /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

window.TrustedBy = TrustedBy;
window.CaseStudies = CaseStudies;
window.WhyChoose = WhyChoose;
window.VerifiedAccredited = VerifiedAccredited;
window.Expertise = Expertise;
window.Services = Services;
window.Testimonials = Testimonials;
window.CTAStrip = CTAStrip;
window.CSCover = CSCover;
