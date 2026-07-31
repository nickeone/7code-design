/* global React, Icon, CSCover, CTAStrip */

const {
  useState: useStateCS
} = React;
const CS_ITEMS = [{
  slug: "wholesum",
  kind: "cyan",
  num: "01",
  year: "2025",
  client: "WholeSum",
  title: "Self-serve AI analytics platform for unstructured text",
  meta: ["Data / AI", "16 weeks"],
  result: "Launched on time, raised funding",
  metric: {
    v: "On time",
    l: "launch & funding"
  },
  tag: "Featured",
  excerpt: "Upload surveys, reviews, and interviews and get structured, AI-powered insights, built end-to-end on Next.js, Nest.js, and AWS."
}, {
  slug: "daily8",
  kind: "cyan",
  num: "02",
  year: "2022",
  client: "Daily8",
  title: "AI-powered news aggregator for the MENA region",
  meta: ["Mobile / Media", "6 months"],
  result: "Shipped iOS + Android in 6 months",
  metric: {
    v: "iOS + Android",
    l: "stores ready"
  },
  excerpt: "News, podcasts, and videos tailored by interest and country, moderated, summarised, and surfaced by AI on React Native + AWS Lambda + OpenAI."
}, {
  slug: "revote",
  kind: "defence",
  num: "03",
  year: "2023",
  client: "Eurel International",
  title: "Remote electronic voting platform for the European Parliament",
  meta: ["E-Government", "8 months"],
  result: "Released May 2023 to the EU Parliament",
  metric: {
    v: "EU Parliament",
    l: "live deployment"
  },
  excerpt: "Modern remote voting for MEPs across the EU, five modules, EP-grade infrastructure, eight months from discovery to release. Partner: Eurel International."
}, {
  slug: "g42-fleet",
  kind: "energy",
  num: "04",
  year: "2022",
  client: "Group 42 (G42)",
  title: "Real-time fleet tracking platform for EXPO 2020 Dubai",
  meta: ["IoT / Smart Buildings", "2 years"],
  result: "Deployed for EXPO 2020 Dubai",
  metric: {
    v: "EXPO 2020",
    l: "deployed at scale"
  },
  excerpt: "Custom TCP ingestion, geofence rules, real-time map and trip playback, built for the world's largest expo on React Native + Node.js."
}, {
  slug: "cloud-of-legacy",
  kind: "cyan",
  num: "05",
  year: "2024",
  client: "Cloud of Legacy",
  title: "Cloud-based digital-heritage platform with secure inheritance access",
  meta: ["Consumer SaaS", "8 months"],
  result: "MVP launched",
  metric: {
    v: "MVP",
    l: "launched in 8 months"
  },
  excerpt: "Subscription cloud where users designate two heirs who can access documents, photos, and credit cards after death, Next.js, React, Keycloak, 2FA."
}, {
  slug: "lidl-road-safety",
  kind: "cyan",
  num: "06",
  year: "2022",
  client: "Lidl Romania",
  title: "Children's road-safety gamification web app for Lidl Romania",
  meta: ["Education / Retail CSR", "6 months"],
  result: "8th edition running with Romanian Police",
  metric: {
    v: "8 editions",
    l: "annual programme"
  },
  excerpt: "Public + private web app for kids and parents, episodes, levels, quizzes, gamification, built with Lidl and the Romanian Police on React + Nest.js."
}, {
  slug: "hera",
  kind: "health",
  num: "08",
  year: "2025",
  client: "Hera Health Tech",
  title: "AI-powered patient-support app for fertility clinics",
  meta: ["Healthcare / FemTech", "3 months MVP"],
  result: "MVP shipped in 3 months, ongoing engagement",
  metric: {
    v: "RAG",
    l: "verified clinical AI"
  },
  excerpt: "React Native + Serverless on AWS with a LlamaIndex RAG layer over verified clinical content, and a Strapi-powered Admin + Clinic CMS, HIPAA + GDPR ready from day one."
}, {
  slug: "melsonic",
  kind: "cyan",
  num: "09",
  year: "2025",
  client: "Melsonic",
  title: "AI-powered guitar-learning web app with real-time feedback",
  meta: ["Music / EdTech", "5 months MVP"],
  result: "MVP shipped in 5 months",
  metric: {
    v: "Real-time",
    l: "AI feedback"
  },
  excerpt: "Next.js + Nest.js + pixi.js wraps Melsonic's AI engine, record, score against the original, and surface notes correct, missed, or wrong."
}, {
  slug: "drum-bun",
  kind: "ops",
  num: "10",
  year: "2024",
  client: "Explorom (Drum Bun)",
  title: "Romanian car-services mobile app, RCA, ITP, vignette in one tap",
  meta: ["InsurTech / Automotive", "Ongoing"],
  result: "Live on App Store and Play Store",
  metric: {
    v: "3-in-1",
    l: "compliance app"
  },
  excerpt: "React Native + Node.js with an OCR document pipeline and per-car expiry alerts, verify, purchase, and track every Romanian driver obligation."
}, {
  slug: "numerize",
  kind: "ops",
  num: "11",
  year: "2024",
  client: "Numerize",
  title: "Responsive electronic document management + e-signature platform",
  meta: ["DocTech / Enterprise", "Ongoing"],
  result: "Responsive overhaul live for 6,000+ accounts",
  metric: {
    v: "6,000+",
    l: "customer accounts"
  },
  excerpt: "React + Material-UI overhaul of a 17-year French GED platform, OCR-trained invoice pipeline, YouSign e-signatures, Stripe + 3D Secure billing."
}];
const CS_CATS = ["All", "Healthcare", "Finance", "Energy", "Operations", "Defence", "AI / SaaS", "Data / AI"];

// ──────────────────────────────────────────────────────────────────
// V1, Grid + filter (existing default)
// ──────────────────────────────────────────────────────────────────
function CaseStudiesGrid() {
  const [active, setActive] = useStateCS("All");
  const filtered = active === "All" ? CS_ITEMS : CS_ITEMS.filter(i => i.meta[0] === active);
  const stats = [{
    v: "20+",
    l: "Projects delivered"
  }, {
    v: "12",
    l: "Industries served"
  }, {
    v: "98%",
    l: "Satisfied clients"
  }, {
    v: "$120M+",
    l: "Revenue impact"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-row reveal",
    style: {
      marginTop: 0,
      marginBottom: 56
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "stat",
    style: {
      transitionDelay: i * 60 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-value"
  }, s.v), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, s.l)))), /*#__PURE__*/React.createElement("div", {
    className: "blog-categories"
  }, CS_CATS.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: "blog-cat" + (c === active ? " is-active" : ""),
    onClick: () => setActive(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    className: "cs-grid"
  }, filtered.map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: c.title,
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
  }, m))), /*#__PURE__*/React.createElement("h3", null, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "var(--cyan-600)",
      fontWeight: 600,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon.zap, {
    style: {
      width: 16,
      height: 16
    }
  }), " ", c.result), /*#__PURE__*/React.createElement("span", {
    className: "cs-link"
  }, "Read case study ", /*#__PURE__*/React.createElement(Icon.arrow, null))))))));
}

// ──────────────────────────────────────────────────────────────────
// V2, Editorial Index (large numbered list)
// ──────────────────────────────────────────────────────────────────
function CaseStudiesEditorial() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 1080
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-edit-list"
  }, CS_ITEMS.map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: c.title,
    href: "/case-study/" + c.slug,
    className: "cs-edit-row reveal",
    style: {
      transitionDelay: i * 50 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-edit-meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-edit-tag"
  }, c.meta[0])), /*#__PURE__*/React.createElement("div", {
    className: "cs-edit-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-edit-client"
  }, c.client), /*#__PURE__*/React.createElement("h3", {
    className: "cs-edit-title"
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "cs-edit-excerpt"
  }, c.excerpt)), /*#__PURE__*/React.createElement("div", {
    className: "cs-edit-metric"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-edit-metric-v"
  }, c.metric.v), /*#__PURE__*/React.createElement("div", {
    className: "cs-edit-metric-l"
  }, c.metric.l)), /*#__PURE__*/React.createElement("div", {
    className: "cs-edit-arrow"
  }, /*#__PURE__*/React.createElement(Icon.arrow, null)))))));
}

// ──────────────────────────────────────────────────────────────────
// V3, Featured story + tab switcher
// ──────────────────────────────────────────────────────────────────
function CaseStudiesFeatured() {
  const [i, setI] = useStateCS(0);
  const item = CS_ITEMS[i];
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-feat reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-feat-cover"
  }, /*#__PURE__*/React.createElement(CSCover, {
    kind: item.kind,
    label: item.meta[0],
    slug: item.slug
  })), /*#__PURE__*/React.createElement("div", {
    className: "cs-feat-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag tag--ink"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag-dot"
  }), " Case study"), /*#__PURE__*/React.createElement("div", {
    className: "cs-feat-client"
  }, item.client), /*#__PURE__*/React.createElement("h2", {
    className: "cs-feat-title"
  }, item.title), /*#__PURE__*/React.createElement("p", {
    className: "cs-feat-excerpt"
  }, item.excerpt), /*#__PURE__*/React.createElement("div", {
    className: "cs-feat-metrics"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cs-feat-metric-v"
  }, item.metric.v), /*#__PURE__*/React.createElement("div", {
    className: "cs-feat-metric-l"
  }, item.metric.l)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cs-feat-metric-v"
  }, item.meta[1]), /*#__PURE__*/React.createElement("div", {
    className: "cs-feat-metric-l"
  }, "delivery")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cs-feat-metric-v"
  }, item.meta[0]), /*#__PURE__*/React.createElement("div", {
    className: "cs-feat-metric-l"
  }, "industry"))), /*#__PURE__*/React.createElement("a", {
    href: "/case-study/" + item.slug,
    className: "btn btn--primary"
  }, "Read full case study ", /*#__PURE__*/React.createElement(Icon.arrow, null)))), /*#__PURE__*/React.createElement("div", {
    className: "cs-feat-tabs"
  }, CS_ITEMS.map((c, j) => /*#__PURE__*/React.createElement("button", {
    key: c.title,
    className: "cs-feat-tab" + (i === j ? " is-active" : ""),
    onClick: () => setI(j)
  }, /*#__PURE__*/React.createElement("span", {
    className: "cs-feat-tab-client"
  }, c.client), /*#__PURE__*/React.createElement("span", {
    className: "cs-feat-tab-meta"
  }, c.meta[0]))))));
}

// ──────────────────────────────────────────────────────────────────
// V4, Vertical timeline
// ──────────────────────────────────────────────────────────────────
function CaseStudiesTimeline() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 1040
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-tl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-tl-spine"
  }), CS_ITEMS.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    className: "cs-tl-row reveal " + (i % 2 === 0 ? "is-left" : "is-right"),
    style: {
      transitionDelay: i * 60 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-tl-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-tl-meta"
  }, /*#__PURE__*/React.createElement("span", null, c.meta[0])), /*#__PURE__*/React.createElement("div", {
    className: "cs-tl-client"
  }, c.client), /*#__PURE__*/React.createElement("h3", {
    className: "cs-tl-title"
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "cs-tl-excerpt"
  }, c.excerpt), /*#__PURE__*/React.createElement("div", {
    className: "cs-tl-result"
  }, /*#__PURE__*/React.createElement(Icon.zap, {
    style: {
      width: 16,
      height: 16
    }
  }), " ", c.result), /*#__PURE__*/React.createElement("a", {
    href: "/case-study/" + c.slug,
    className: "cs-link"
  }, "Read case study ", /*#__PURE__*/React.createElement(Icon.arrow, null))), /*#__PURE__*/React.createElement("div", {
    className: "cs-tl-node"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-tl-node-inner"
  })))))));
}

// ──────────────────────────────────────────────────────────────────
// V5, Showcase (Tallium-inspired large cards w/ glow + mockup)
// ──────────────────────────────────────────────────────────────────
function ShowcaseMockup({
  kind
}) {
  // Inline product mockup illustrations per kind. Browser/phone chrome
  // with abstract content blocks, keeps brand cyan accent throughout.
  if (kind === "health" || kind === "cyan") {
    // Mobile app mockup
    return /*#__PURE__*/React.createElement("div", {
      className: "sc-mock sc-mock--phone"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sc-phone"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sc-phone-notch"
    }), /*#__PURE__*/React.createElement("div", {
      className: "sc-phone-screen"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sc-app-bar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sc-app-avatar"
    }), /*#__PURE__*/React.createElement("div", {
      className: "sc-app-bars"
    }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null))), /*#__PURE__*/React.createElement("div", {
      className: "sc-app-card sc-app-card--accent"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sc-app-row sc-row--md"
    }), /*#__PURE__*/React.createElement("div", {
      className: "sc-app-row sc-row--sm"
    }), /*#__PURE__*/React.createElement("div", {
      className: "sc-app-cta"
    })), /*#__PURE__*/React.createElement("div", {
      className: "sc-app-list"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sc-app-item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sc-app-dot"
    }), /*#__PURE__*/React.createElement("div", {
      className: "sc-app-lines"
    }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null))), /*#__PURE__*/React.createElement("div", {
      className: "sc-app-item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sc-app-dot"
    }), /*#__PURE__*/React.createElement("div", {
      className: "sc-app-lines"
    }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null))), /*#__PURE__*/React.createElement("div", {
      className: "sc-app-item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sc-app-dot"
    }), /*#__PURE__*/React.createElement("div", {
      className: "sc-app-lines"
    }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null)))))));
  }
  // Browser dashboard mockup
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-mock sc-mock--browser"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-browser"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-browser-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sc-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sc-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sc-dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sc-browser-url"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sc-browser-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-browser-side"
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null)), /*#__PURE__*/React.createElement("div", {
    className: "sc-browser-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-stat-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-stat-v"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sc-stat-l"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sc-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-stat-v"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sc-stat-l"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sc-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-stat-v"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sc-stat-l"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sc-chart"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 280 80",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "sc-grad-" + kind,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "var(--cyan-500)",
    stopOpacity: "0.45"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--cyan-500)",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M0,60 L40,45 L80,52 L120,30 L160,38 L200,18 L240,28 L280,12 L280,80 L0,80 Z",
    fill: "url(#sc-grad-" + kind + ")"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,60 L40,45 L80,52 L120,30 L160,38 L200,18 L240,28 L280,12",
    fill: "none",
    stroke: "var(--cyan-500)",
    strokeWidth: "2"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sc-table"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-table-row"
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null)), /*#__PURE__*/React.createElement("div", {
    className: "sc-table-row"
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null)), /*#__PURE__*/React.createElement("div", {
    className: "sc-table-row"
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null)))))));
}
function CaseStudiesShowcase() {
  const [active, setActive] = useStateCS("All");
  const filtered = active === "All" ? CS_ITEMS : CS_ITEMS.filter(i => i.meta[0] === active);
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-categories",
    style: {
      marginBottom: 48
    }
  }, CS_CATS.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: "blog-cat" + (c === active ? " is-active" : ""),
    onClick: () => setActive(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    className: "sc-grid"
  }, filtered.map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: c.title,
    href: "/case-study/" + c.slug,
    className: "sc-card reveal",
    style: {
      transitionDelay: i % 2 * 100 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sc-card-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-card-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-card-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sc-card-name"
  }, c.client), /*#__PURE__*/React.createElement("span", {
    className: "sc-card-arrow"
  }, /*#__PURE__*/React.createElement(Icon.arrow, null))), /*#__PURE__*/React.createElement("p", {
    className: "sc-card-desc"
  }, c.excerpt), /*#__PURE__*/React.createElement("div", {
    className: "sc-card-tags"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sc-tag"
  }, c.meta[0]), /*#__PURE__*/React.createElement("span", {
    className: "sc-tag"
  }, c.meta[1]), /*#__PURE__*/React.createElement("span", {
    className: "sc-tag sc-tag--accent"
  }, c.metric.v, " ", c.metric.l))), /*#__PURE__*/React.createElement("div", {
    className: "sc-card-art"
  }, /*#__PURE__*/React.createElement(ShowcaseMockup, {
    kind: c.kind
  })))))), filtered.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/blog",
    className: "btn btn--ghost"
  }, "More case studies ", /*#__PURE__*/React.createElement(Icon.arrow, null)))));
}

// ──────────────────────────────────────────────────────────────────
// V6, Magazine (asymmetric: one hero + smaller cards)
// ──────────────────────────────────────────────────────────────────
function CaseStudiesMagazine() {
  const [hero, ...rest] = CS_ITEMS;
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mag-grid"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/case-study/" + hero.slug,
    className: "mag-hero reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mag-hero-cover"
  }, /*#__PURE__*/React.createElement(CSCover, {
    kind: hero.kind,
    label: hero.meta[0],
    slug: hero.slug
  })), /*#__PURE__*/React.createElement("div", {
    className: "mag-hero-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mag-kicker"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mag-dot"
  }), " Featured story"), /*#__PURE__*/React.createElement("h2", {
    className: "mag-hero-title"
  }, hero.title), /*#__PURE__*/React.createElement("p", {
    className: "mag-hero-excerpt"
  }, hero.excerpt), /*#__PURE__*/React.createElement("div", {
    className: "mag-hero-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mag-hero-metric"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mag-hero-metric-v"
  }, hero.metric.v), /*#__PURE__*/React.createElement("div", {
    className: "mag-hero-metric-l"
  }, hero.metric.l)), /*#__PURE__*/React.createElement("span", {
    className: "mag-hero-link"
  }, "Read the story ", /*#__PURE__*/React.createElement(Icon.arrow, null))))), /*#__PURE__*/React.createElement("div", {
    className: "mag-side"
  }, rest.slice(0, 3).map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: c.title,
    href: "/case-study/" + c.slug,
    className: "mag-mini reveal",
    style: {
      transitionDelay: i * 60 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mag-mini-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mag-mini-meta"
  }, c.meta[0]), /*#__PURE__*/React.createElement("div", {
    className: "mag-mini-title"
  }, c.title), /*#__PURE__*/React.createElement("div", {
    className: "mag-mini-metric"
  }, c.metric.v, " ", /*#__PURE__*/React.createElement("span", null, c.metric.l))), /*#__PURE__*/React.createElement(Icon.arrow, null))))), /*#__PURE__*/React.createElement("div", {
    className: "mag-row"
  }, rest.slice(3).map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: c.title,
    href: "/case-study/" + c.slug,
    className: "mag-card reveal",
    style: {
      transitionDelay: i * 60 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mag-card-cover"
  }, /*#__PURE__*/React.createElement(CSCover, {
    kind: c.kind,
    label: c.meta[0],
    slug: c.slug
  })), /*#__PURE__*/React.createElement("div", {
    className: "mag-card-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mag-mini-meta"
  }, c.meta[0]), /*#__PURE__*/React.createElement("h3", null, c.title), /*#__PURE__*/React.createElement("div", {
    className: "mag-mini-metric"
  }, c.metric.v, " ", /*#__PURE__*/React.createElement("span", null, c.metric.l))))))));
}

// ──────────────────────────────────────────────────────────────────
// V7, Stack (full-width alternating stories)
// ──────────────────────────────────────────────────────────────────
function CaseStudiesStack() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 1200
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stk-list"
  }, CS_ITEMS.map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: c.title,
    href: "/case-study/" + c.slug,
    className: "stk-row reveal " + (i % 2 === 0 ? "is-even" : "is-odd"),
    style: {
      transitionDelay: i * 60 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stk-cover"
  }, /*#__PURE__*/React.createElement(CSCover, {
    kind: c.kind,
    label: c.meta[0],
    slug: c.slug
  })), /*#__PURE__*/React.createElement("div", {
    className: "stk-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stk-meta"
  }, /*#__PURE__*/React.createElement("span", null, c.meta[0]), /*#__PURE__*/React.createElement("span", {
    className: "stk-divider"
  }), /*#__PURE__*/React.createElement("span", null, c.meta[1])), /*#__PURE__*/React.createElement("div", {
    className: "stk-client"
  }, c.client), /*#__PURE__*/React.createElement("h2", {
    className: "stk-title"
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "stk-excerpt"
  }, c.excerpt), /*#__PURE__*/React.createElement("div", {
    className: "stk-result"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stk-result-v"
  }, c.metric.v), /*#__PURE__*/React.createElement("div", {
    className: "stk-result-l"
  }, c.metric.l)), /*#__PURE__*/React.createElement("span", {
    className: "stk-link"
  }, "Read case study ", /*#__PURE__*/React.createElement(Icon.arrow, null))))))));
}

// ──────────────────────────────────────────────────────────────────
// V8, Mosaic (bento grid, mixed sizes)
// ──────────────────────────────────────────────────────────────────
function CaseStudiesMosaic() {
  // Layout slots: each item gets a spec on the bento grid.
  // Grid is 4 cols × N rows. Specs are [colSpan, rowSpan, kind className].
  const layout = [{
    span: "mos--xl",
    variant: "image"
  },
  // big featured w/ cover
  {
    span: "mos--md",
    variant: "metric"
  },
  // metric panel
  {
    span: "mos--md",
    variant: "quote"
  },
  // text + quote
  {
    span: "mos--lg",
    variant: "image"
  },
  // wide image card
  {
    span: "mos--md",
    variant: "metric"
  },
  // metric
  {
    span: "mos--lg",
    variant: "image"
  } // wide image card
  ];
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 1240
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mos-grid"
  }, CS_ITEMS.map((c, i) => {
    const L = layout[i] || layout[0];
    return /*#__PURE__*/React.createElement("a", {
      key: c.title,
      href: "/case-study/" + c.slug,
      className: "mos-card reveal " + L.span + " mos--" + L.variant,
      style: {
        transitionDelay: i * 50 + "ms"
      }
    }, L.variant === "image" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "mos-cover"
    }, /*#__PURE__*/React.createElement(CSCover, {
      kind: c.kind,
      label: c.meta[0],
      slug: c.slug
    })), /*#__PURE__*/React.createElement("div", {
      className: "mos-overlay"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mos-meta"
    }, c.meta[0]), /*#__PURE__*/React.createElement("div", {
      className: "mos-title"
    }, c.title), /*#__PURE__*/React.createElement("div", {
      className: "mos-arrow"
    }, /*#__PURE__*/React.createElement(Icon.arrow, null)))), L.variant === "metric" && /*#__PURE__*/React.createElement("div", {
      className: "mos-metric-card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mos-metric-tag"
    }, c.meta[0]), /*#__PURE__*/React.createElement("div", {
      className: "mos-metric-v"
    }, c.metric.v), /*#__PURE__*/React.createElement("div", {
      className: "mos-metric-l"
    }, c.metric.l), /*#__PURE__*/React.createElement("div", {
      className: "mos-metric-foot"
    }, /*#__PURE__*/React.createElement("span", null, c.client), /*#__PURE__*/React.createElement(Icon.arrow, null))), L.variant === "quote" && /*#__PURE__*/React.createElement("div", {
      className: "mos-quote-card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mos-quote-mark"
    }, "\u201C"), /*#__PURE__*/React.createElement("p", {
      className: "mos-quote-text"
    }, c.excerpt), /*#__PURE__*/React.createElement("div", {
      className: "mos-quote-foot"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "mos-quote-client"
    }, c.client), /*#__PURE__*/React.createElement("div", {
      className: "mos-quote-meta"
    }, c.meta[0])), /*#__PURE__*/React.createElement(Icon.arrow, null))));
  }))));
}

// ──────────────────────────────────────────────────────────────────
// Page wrapper, switches body by variant prop
// ──────────────────────────────────────────────────────────────────
function CaseStudiesPage({
  variant = "grid"
}) {
  React.useEffect(() => {
    const prev = document.title;
    document.title = "Case Studies, AI & Software Engineering Projects | 7Code Romania";
    const d = document.querySelector('meta[name="description"]');
    const pd = d ? d.getAttribute("content") : null;
    if (d) d.setAttribute("content", "10+ case studies from 7Code's AI and software engineering practice: HealthTech, FinTech, IoT, GovTech, EdTech, and SaaS products built for clients across Europe, the UK, and the Middle East.");
    return () => {
      document.title = prev;
      if (d && pd !== null) d.setAttribute("content", pd);
    };
  }, []);
  const headlines = {
    grid: {
      eyebrow: "Case studies",
      h1: "Outcomes, not just deliverables",
      sub: "A selection of products we've shipped with our partners, across healthcare, finance, energy, defence and beyond."
    },
    editorial: {
      eyebrow: "Selected work · 2024–2026",
      h1: "Six stories, six outcomes.",
      sub: "An editorial index of the work we're proudest of, with the numbers attached."
    },
    featured: {
      eyebrow: "Featured case studies",
      h1: "Each one moved a metric.",
      sub: "Hover any project below to dig into how we built it and the results it produced."
    },
    timeline: {
      eyebrow: "A short history",
      h1: "How we've spent the last two years",
      sub: "From early-stage MVPs to large-scale platform launches, in roughly the order they shipped."
    },
    showcase: {
      eyebrow: "Recent case studies",
      h1: "Work we're proud to ship",
      sub: "Learn more about our clients, the types of projects we work with, our process, and the technologies we use to build software."
    },
    magazine: {
      eyebrow: "The portfolio",
      h1: "Stories worth telling",
      sub: "An editorial look at the products we've shipped, what they do, who they're for, and what they moved."
    },
    stack: {
      eyebrow: "Selected work",
      h1: "In-depth stories",
      sub: "Take your time, each one is a full case, top to bottom."
    },
    mosaic: {
      eyebrow: "Portfolio",
      h1: "A snapshot of recent work",
      sub: "Every project earned its real estate, by what it shipped, what it changed, or what someone said about it."
    }
  };
  const h = headlines[variant] || headlines.grid;
  let Body;
  if (variant === "editorial") Body = /*#__PURE__*/React.createElement(CaseStudiesEditorial, null);else if (variant === "featured") Body = /*#__PURE__*/React.createElement(CaseStudiesFeatured, null);else if (variant === "timeline") Body = /*#__PURE__*/React.createElement(CaseStudiesTimeline, null);else if (variant === "showcase") Body = /*#__PURE__*/React.createElement(CaseStudiesShowcase, null);else if (variant === "magazine") Body = /*#__PURE__*/React.createElement(CaseStudiesMagazine, null);else if (variant === "stack") Body = /*#__PURE__*/React.createElement(CaseStudiesStack, null);else if (variant === "mosaic") Body = /*#__PURE__*/React.createElement(CaseStudiesMosaic, null);else Body = /*#__PURE__*/React.createElement(CaseStudiesGrid, null);
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("section", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      justifyContent: "center"
    }
  }, h.eyebrow), /*#__PURE__*/React.createElement("h1", null, h.h1), /*#__PURE__*/React.createElement("p", null, h.sub))), Body, /*#__PURE__*/React.createElement(CTAStrip, null));
}
window.CaseStudiesPage = CaseStudiesPage;
