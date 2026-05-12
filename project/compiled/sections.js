/* global React, Logo, Icon */

const {
  useState: useStateS,
  useEffect: useEffectS,
  useRef: useRefS
} = React;

// ──────────────────────────────────────────────────────────────────
// Shared section components used by multiple pages
// ──────────────────────────────────────────────────────────────────

// Trusted-by marquee
function TrustedBy() {
  const logos = [{
    src: "/project/assets/b6d98b61cd02d867e9a2cd2d32465eb8ba06203f.webp",
    alt: "Founders Factory"
  }, {
    src: "/project/assets/9681e775df296ad64c7b5a041883805a82c3d2a1.webp",
    alt: "G42"
  }, {
    src: "/project/assets/4436e02038b9c61bca6a16aa049b705ba895505c.webp",
    alt: "Ronins"
  }, {
    src: "/project/uploads/daily8.webp",
    alt: "Daily8"
  }, {
    src: "/project/uploads/lendit.webp",
    alt: "Lendit"
  }, {
    src: "/project/uploads/Lidl-logo.webp",
    alt: "Lidl"
  }, {
    src: "/project/uploads/wholesum.webp",
    alt: "Wholesum"
  }];
  const all = [...logos, ...logos];
  return /*#__PURE__*/React.createElement("section", {
    className: "trust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trust-label"
  }, "Trusted by Industry Leaders"), /*#__PURE__*/React.createElement("div", {
    className: "marquee"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee-track"
  }, all.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "marquee-logo",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 48,
      padding: "0 8px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: l.src,
    alt: l.alt,
    width: "160",
    height: "44",
    loading: "lazy",
    decoding: "async",
    style: {
      height: 44,
      width: "auto",
      maxWidth: 160,
      objectFit: "contain",
      display: "block"
    }
  })))))));
}

// Photo covers for case studies that have a real hero image. Anything not
// listed falls back to the kind-based pattern card below.
const CS_PHOTO_COVERS = {
  "wholesum": {
    src: "/project/uploads/wholesum-hero.webp",
    alt: "WholeSum"
  },
  "daily8": {
    src: "/project/uploads/daily8-website.webp",
    alt: "Daily8, daily8.com/en"
  },
  "revote": {
    src: "/project/uploads/revote-hero.webp",
    alt: "Revote, European Parliament chamber"
  },
  "g42-fleet": {
    src: "/project/uploads/g42-fleet-hero.webp",
    alt: "G42 ESTS fleet-tracking dashboard"
  },
  "cloud-of-legacy": {
    src: "/project/uploads/cloud-of-legacy-hero.webp",
    alt: "Cloud of Legacy landing page"
  },
  "lidl-road-safety": {
    src: "/project/uploads/lidl-road-safety-hero.webp",
    alt: "Lidl + Politia Romana road-safety app"
  },
  "founders-factory": {
    src: "/project/uploads/founders-factory-hero.webp",
    alt: "Founders Factory homepage, Power to founders"
  },
  "hera": {
    src: "/project/uploads/hera-hero.webp",
    alt: "Hera Health Tech, fertility-clinic patient support app"
  },
  "melsonic": {
    src: "/project/uploads/melsonic-hero.webp",
    alt: "Melsonic, AI-powered guitar learning"
  },
  "drum-bun": {
    src: "/project/uploads/drum-bun-hero.webp",
    alt: "Drum Bun, Romanian car-services mobile app"
  },
  "numerize": {
    src: "/project/uploads/numerize-hero.webp",
    alt: "Numerize, French document management and e-signature platform"
  }
};

// Case study cover graphic
function CSCover({
  kind,
  label,
  slug
}) {
  const photo = CS_PHOTO_COVERS[slug];
  if (photo) {
    return /*#__PURE__*/React.createElement("div", {
      className: "cs-cover cs-cover--photo"
    }, /*#__PURE__*/React.createElement("img", {
      src: photo.src,
      alt: label || photo.alt,
      className: "cs-cover-img",
      width: "800",
      height: "450",
      loading: "lazy",
      decoding: "async"
    }));
  }
  const map = {
    health: {
      cls: "cover--health",
      icon: /*#__PURE__*/React.createElement(Icon.heart, null)
    },
    finance: {
      cls: "cover--finance",
      icon: /*#__PURE__*/React.createElement(Icon.briefcase, null)
    },
    energy: {
      cls: "cover--energy",
      icon: /*#__PURE__*/React.createElement(Icon.energy, null)
    },
    ops: {
      cls: "cover--ops",
      icon: /*#__PURE__*/React.createElement(Icon.chart, null)
    },
    defence: {
      cls: "cover--defence",
      icon: /*#__PURE__*/React.createElement(Icon.shield, null)
    },
    cyan: {
      cls: "cover--cyan",
      icon: /*#__PURE__*/React.createElement(Icon.zap, null)
    }
  };
  const m = map[kind] || map.cyan;
  return /*#__PURE__*/React.createElement("div", {
    className: "cs-cover " + m.cls
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 250",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "p-" + kind,
    width: "24",
    height: "24",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1",
    fill: "rgba(255,255,255,0.12)"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "400",
    height: "250",
    fill: "url(#p-" + kind + ")"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "320",
    cy: "60",
    r: "140",
    fill: "rgba(255,255,255,0.03)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 12,
      background: "rgba(255,255,255,0.1)",
      border: "1px solid rgba(255,255,255,0.15)",
      display: "grid",
      placeItems: "center",
      backdropFilter: "blur(8px)"
    }
  }, React.cloneElement(m.icon, {
    style: {
      width: 22,
      height: 22,
      color: "#fff"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.75)"
    }
  }, label)));
}

// Case studies section
function CaseStudies({
  limit
}) {
  const items = [
  // First six surface on the homepage (pages.jsx caps CaseStudies at limit={6}).
  {
    slug: "wholesum",
    kind: "cyan",
    title: "Self-serve AI analytics platform for unstructured text",
    meta: ["Data / AI", "16 weeks"],
    tag: "Featured"
  }, {
    slug: "daily8",
    kind: "cyan",
    title: "AI-powered news aggregator for the MENA region",
    meta: ["Mobile / Media", "6 months"]
  }, {
    slug: "revote",
    kind: "defence",
    title: "Remote electronic voting platform for the European Parliament",
    meta: ["E-Government", "8 months"]
  }, {
    slug: "lidl-road-safety",
    kind: "cyan",
    title: "Children's road-safety gamification web app for Lidl Romania",
    meta: ["Education / Retail CSR", "6 months"]
  }, {
    slug: "hera",
    kind: "health",
    title: "AI-powered patient-support app for fertility clinics",
    meta: ["Healthcare / FemTech", "3 months MVP"]
  }, {
    slug: "melsonic",
    kind: "cyan",
    title: "AI-powered guitar-learning web app with real-time feedback",
    meta: ["Music / EdTech", "5 months MVP"]
  },
  // Remaining cases, visible on /case-studies, hidden from the homepage grid.
  {
    slug: "g42-fleet",
    kind: "energy",
    title: "Real-time fleet tracking platform for EXPO 2020 Dubai",
    meta: ["IoT / Smart Buildings", "2 years"]
  }, {
    slug: "cloud-of-legacy",
    kind: "cyan",
    title: "Cloud-based digital-heritage platform with secure inheritance access",
    meta: ["Consumer SaaS", "8 months"]
  }, {
    slug: "founders-factory",
    kind: "finance",
    title: "UI overhaul + ongoing engineering for a UK venture studio",
    meta: ["Venture Studio / VC", "Ongoing"]
  }, {
    slug: "drum-bun",
    kind: "ops",
    title: "Romanian car-services mobile app, RCA, ITP, vignette in one tap",
    meta: ["InsurTech / Automotive", "Ongoing"]
  }, {
    slug: "numerize",
    kind: "ops",
    title: "Responsive electronic document management + e-signature platform",
    meta: ["DocTech / Enterprise", "Ongoing"]
  }];
  const list = limit ? items.slice(0, limit) : items;
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Case studies"), /*#__PURE__*/React.createElement("h2", null, "Work we're proud to ship"), /*#__PURE__*/React.createElement("p", null, "Technical depth meets business strategy. Here are a few products we've built with our partners.")), /*#__PURE__*/React.createElement("div", {
    className: "cs-grid"
  }, list.map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "/case-study/" + c.slug,
    className: "cs-card reveal",
    style: {
      transitionDelay: i % 3 * 80 + "ms"
    }
  }, /*#__PURE__*/React.createElement(CSCover, {
    kind: c.kind,
    label: c.meta[0],
    slug: c.slug
  }), c.tag && /*#__PURE__*/React.createElement("div", {
    className: "cs-tag-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag tag--ink"
  }, c.tag)), /*#__PURE__*/React.createElement("div", {
    className: "cs-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-meta"
  }, c.meta.map((m, j) => /*#__PURE__*/React.createElement("span", {
    key: j
  }, m))), /*#__PURE__*/React.createElement("h3", null, c.title), /*#__PURE__*/React.createElement("span", {
    className: "cs-link"
  }, "Read case study ", /*#__PURE__*/React.createElement(Icon.arrow, null)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/case-studies",
    className: "btn btn--ghost"
  }, "View all projects ", /*#__PURE__*/React.createElement(Icon.arrow, null)))));
}

// Why-choose section
function WhyChoose() {
  const why = [{
    icon: Icon.cpu,
    title: "AI-native by default",
    desc: "We design products around LLMs and agents from day one. Retrieval, evaluation, observability and guardrails are built in, not bolted on, so AI features behave predictably in production."
  }, {
    icon: Icon.chart,
    title: "Outcomes you can audit",
    desc: "Every engagement opens with a baseline and closes with the numbers: conversion lift, deflection rate, cost per task, eval scores. We commit to measurable business impact, not deliverables."
  }, {
    icon: Icon.cloud,
    title: "Production-grade cloud & agent infra",
    desc: "AWS, GCP, and Azure native. Vector stores, model gateways, eval harnesses, and CI for prompts and code, built to scale, audit, and recover, not just to demo."
  }, {
    icon: Icon.users,
    title: "Embedded long-term partnership",
    desc: "Senior AI engineers matched in 72 hours and embedded inside your team. Monthly rolling contracts, no lock-in, and 24/7 production support after launch."
  }];
  const stats = [{
    v: "20+",
    l: "Projects delivered"
  }, {
    v: "98%",
    l: "Satisfied clients"
  }, {
    v: "8+ yrs",
    l: "Engineering practice"
  }, {
    v: "24/7",
    l: "Production support"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Why 7Code"), /*#__PURE__*/React.createElement("h2", null, "Your AI-first engineering partner for production-grade products"), /*#__PURE__*/React.createElement("p", null, "We design, build, and operate AI-native software end-to-end, LLM features, agentic workflows, and the cloud foundations that keep them reliable. Strategy, design, and engineering under one roof, shipping in weeks, not quarters.")), /*#__PURE__*/React.createElement("div", {
    className: "why-grid"
  }, why.map((w, i) => {
    const I = w.icon;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "why-card reveal",
      style: {
        transitionDelay: i * 80 + "ms"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "why-icon"
    }, /*#__PURE__*/React.createElement(I, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, w.title), /*#__PURE__*/React.createElement("p", null, w.desc)));
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-row"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "stat reveal",
    style: {
      transitionDelay: i * 60 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-value"
  }, s.v), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, s.l))))));
}

// Verified & accredited section, credentials and listings
function VerifiedAccredited() {
  const items = [{
    src: "/project/uploads/SOC-2-Type-2-Logo.webp",
    alt: "SOC 2 Type II, AICPA-aligned controls"
  }, {
    src: "/project/uploads/hipa.webp",
    alt: "HIPAA Compliant, healthcare data safeguards"
  }, {
    src: "/project/uploads/gdpr.webp",
    alt: "GDPR Compliant, EU General Data Protection Regulation"
  }, {
    src: "/project/uploads/iso%209001.webp",
    alt: "ISO 9001:2015, quality management system certification"
  }, {
    src: "/project/uploads/clutch.webp",
    alt: "Clutch, Top Web Developers · Government, Romania",
    href: "https://clutch.co/profile/7code"
  }, {
    src: "/project/uploads/sortlist%20logo%20.webp",
    alt: "Sortlist Verified Agency"
  }, {
    src: "/project/uploads/crunchbase.webp",
    alt: "Listed on Crunchbase",
    href: "https://www.crunchbase.com/organization/7code"
  }, {
    src: "/project/uploads/Goodfirms-Logo-Vector.svg-.webp",
    alt: "Listed on GoodFirms",
    href: "https://www.goodfirms.co/company/7code"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Verified & accredited"), /*#__PURE__*/React.createElement("h2", null, "The credentials behind the work"), /*#__PURE__*/React.createElement("p", null, "Audited where it matters, listed where buyers look, certified for the regulated industries we ship in.")), /*#__PURE__*/React.createElement("div", {
    className: "trust-grid"
  }, items.map((item, i) => {
    const inner = /*#__PURE__*/React.createElement("img", {
      src: item.src,
      alt: item.alt,
      width: "160",
      height: "60",
      className: "trust-logo" + (item.className ? " " + item.className : ""),
      loading: "lazy",
      decoding: "async"
    });
    return item.href ? /*#__PURE__*/React.createElement("a", {
      key: i,
      href: item.href,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "trust-card reveal",
      style: {
        transitionDelay: i % 4 * 50 + "ms"
      },
      "aria-label": item.alt
    }, inner) : /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "trust-card reveal",
      style: {
        transitionDelay: i % 4 * 50 + "ms"
      }
    }, inner);
  }))));
}

// Expertise section
function Expertise({
  headTitle = "Our Expertise",
  headDesc = "We specialize in key sectors, delivering tailored digital solutions that drive growth, efficiency, and innovation."
}) {
  const items = [{
    icon: Icon.heart,
    title: "Healthcare",
    slug: "healthcare",
    desc: "HIPAA-compliant platforms that connect clinicians, patients, and data.",
    bullets: ["EHR interoperability", "Clinical decision support", "Patient engagement"]
  }, {
    icon: Icon.briefcase,
    title: "Finance",
    slug: "finance",
    desc: "Real-time dashboards, ERP integration, and automation that scales.",
    bullets: ["Real-time dashboards", "ERP integration", "Accounting automation"]
  }, {
    icon: Icon.energy,
    title: "Energy & Utilities",
    slug: "energy",
    desc: "IoT-driven monitoring and predictive analytics for critical infrastructure.",
    bullets: ["IoT integration", "Predictive analytics", "Real-time monitoring"]
  }, {
    icon: Icon.shield,
    title: "Defence & Security",
    slug: "defence",
    desc: "Secure systems integration and situational-awareness platforms.",
    bullets: ["Situational awareness", "Systems integration", "Predictive analytics"]
  }, {
    icon: Icon.users,
    title: "HR",
    slug: "hr",
    desc: "Recruitment, onboarding, payroll and workforce analytics, unified.",
    bullets: ["Recruitment & onboarding", "Performance & payroll", "Workforce analytics"]
  }, {
    icon: Icon.chart,
    title: "Operations",
    slug: "operations",
    desc: "Workflow automation and dashboards across the operational stack.",
    bullets: ["Workflow automation", "Operations dashboards", "Predictive analytics"]
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Expertise"), /*#__PURE__*/React.createElement("h2", null, headTitle), /*#__PURE__*/React.createElement("p", null, headDesc)), /*#__PURE__*/React.createElement("div", {
    className: "exp-grid"
  }, items.map((e, i) => {
    const I = e.icon;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "exp-card reveal",
      style: {
        transitionDelay: i % 3 * 80 + "ms"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "icon-tile"
    }, /*#__PURE__*/React.createElement(I, null)), /*#__PURE__*/React.createElement("h3", null, e.title), /*#__PURE__*/React.createElement("p", null, e.desc), /*#__PURE__*/React.createElement("ul", {
      className: "exp-list"
    }, e.bullets.map((b, j) => /*#__PURE__*/React.createElement("li", {
      key: j
    }, /*#__PURE__*/React.createElement(Icon.checkCircle, null), " ", b))), /*#__PURE__*/React.createElement("a", {
      href: "/expertise/" + e.slug,
      className: "btn-link",
      "aria-label": "Learn more about our " + e.title + " expertise"
    }, "Learn more ", /*#__PURE__*/React.createElement(Icon.arrow, null)));
  }))));
}

// Services section
function Services() {
  const services = [{
    icon: Icon.code,
    slug: "ai-product-engineering",
    title: "AI-Native Product Engineering",
    desc: "Discovery, UX design, and full-stack engineering in one team, AI-first web and mobile products built to compound."
  }, {
    icon: Icon.globe,
    slug: "system-integrations",
    title: "System Integrations",
    desc: "Connect your stack, ERPs, CRMs, data warehouses, and legacy systems, into a single, reliable data fabric."
  }, {
    icon: Icon.cpu,
    slug: "ai-automation",
    title: "AI & Process Automation",
    desc: "LLM integrations, custom copilots, and workflow automation that eliminates manual work and compounds over time."
  }, {
    icon: Icon.cpu,
    slug: "llm-agent-development",
    title: "LLM & Agent Development",
    desc: "Custom LLM integrations and multi-step agent pipelines built for production, eval-gated every release, not just demos."
  }, {
    icon: Icon.cloud,
    slug: "cloud-agentic-infra",
    title: "Cloud & Agentic Infrastructure",
    desc: "Cloud-native foundations and agentic pipeline orchestration, so your AI products run reliably, scale automatically, and cost what they should."
  }, {
    icon: Icon.users,
    slug: "ai-outstaffing",
    title: "AI Engineering Outstaffing",
    desc: "Senior AI engineers embedded in your team, matched in 72 hours, monthly rolling contracts, no long-term lock-in."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Our services"), /*#__PURE__*/React.createElement("h2", null, "End-to-end product engineering"), /*#__PURE__*/React.createElement("p", null, "Comprehensive digital services to take your product from concept to launch, and beyond.")), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      maxWidth: 880,
      margin: "0 auto"
    }
  }, services.map((s, i) => {
    const I = s.icon;
    return /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "/service/" + s.slug,
      className: "svc-card"
    }, /*#__PURE__*/React.createElement("span", {
      className: "icon-tile"
    }, /*#__PURE__*/React.createElement(I, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, s.title), /*#__PURE__*/React.createElement("p", null, s.desc)), /*#__PURE__*/React.createElement(Icon.arrow, {
      style: {
        width: 20,
        height: 20,
        color: "var(--slate-400)"
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--cyan"
  }, "Discuss your project ", /*#__PURE__*/React.createElement(Icon.arrow, null)))));
}

// Testimonials, verified Clutch reviews, 2x2 grid with client photos
function Testimonials() {
  // All quotes verified on clutch.co/profile/7code
  const items = [{
    quote: "The self-serve MVP is live and in use. 7Code has excellent communication and project management skills. The team is quick to respond to the client's needs. The client is pleased with the outcome and the team's technical leadership.",
    name: "Emily Kucharski",
    role: "CEO & Co-Founder",
    company: "WholeSum",
    photoUrl: "/project/uploads/emily%20.webp"
  }, {
    quote: "7Code's work resulted in a functional MVP, and the client's internal testing yielded positive results. The team followed a structured sprint process, held regular stand-ups, and communicated consistently during the project. 7Code was responsive, proactive, flexible, transparent, and collaborative.",
    name: "Evyn White",
    role: "Co-Founder",
    company: "Hera Health Tech",
    photoUrl: "/project/uploads/evyn-hera.webp"
  }, {
    quote: "The client was happy with 7Code's work, daily status reports, and on-time delivery of milestones. Their project management was well-organized, and they used virtual meetings for communication. 7Code's professionalism, flexibility, and commitment also contributed to the project's success.",
    name: "Marcel Ionescu",
    role: "Chief Technology Officer",
    photoUrl: "/project/uploads/marcel%20ionescu%20.webp"
  }, {
    quote: "7Code has steadily progressed through the client's development backlog. Their team demonstrates proactiveness, timely delivery, and proactive engagement. They also ensure strong communication through email, messaging apps, and virtual meetings.",
    name: "Paul Egan",
    role: "CTO",
    company: "Founders Factory",
    photoUrl: "/project/uploads/paul%20egan.webp"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Testimonials"), /*#__PURE__*/React.createElement("h2", null, "What clients say after the launch"), /*#__PURE__*/React.createElement("p", null, "Verified, named reviews from the founders and CTOs we work with.")), /*#__PURE__*/React.createElement("div", {
    className: "testi-grid"
  }, items.map((t, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    className: "testi-card reveal",
    style: {
      transitionDelay: i % 2 * 60 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "testi-quote-mark",
    "aria-hidden": "true"
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    className: "testi-quote"
  }, t.quote), /*#__PURE__*/React.createElement("div", {
    className: "testi-author"
  }, /*#__PURE__*/React.createElement("img", {
    src: t.photoUrl,
    alt: t.name,
    width: "56",
    height: "56",
    className: "testi-photo",
    loading: "lazy",
    decoding: "async"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "testi-name"
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "testi-role"
  }, t.role, t.company ? ", " + t.company : ""))))))));
}

// CTA strip
function CTAStrip() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-strip reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-strip-content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag tag--ink"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag-dot"
  }), " Available for new partnerships"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16
    }
  }, "Ready to build your next product?"), /*#__PURE__*/React.createElement("p", null, "Tell us about your project. We'll respond within one business day with next steps.")), /*#__PURE__*/React.createElement("div", {
    className: "cta-strip-actions"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--cyan btn--lg"
  }, "Book a discovery call ", /*#__PURE__*/React.createElement(Icon.arrow, null))))));
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