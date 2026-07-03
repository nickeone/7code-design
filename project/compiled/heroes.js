/* global React, Logo, Icon */

const {
  useState: useStateH,
  useEffect: useEffectH
} = React;

// ──────────────────────────────────────────────────────────────────
// HERO VARIATIONS
// ──────────────────────────────────────────────────────────────────

// Variant A, Pattern grid + dashboard mockup (faithful to Figma)
function HeroPatternMockup() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero hero--pattern"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-pattern-bg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    preserveAspectRatio: "xMidYMid slice",
    viewBox: "0 0 1440 720"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "grid",
    width: "48",
    height: "48",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 48 0 L 0 0 0 48",
    fill: "none",
    stroke: "rgba(15,23,42,0.05)",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "cyan-glow",
    cx: "50%",
    cy: "40%",
    r: "60%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgba(6,182,212,0.18)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "60%",
    stopColor: "rgba(6,182,212,0.04)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "rgba(6,182,212,0)"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "1440",
    height: "720",
    fill: "url(#grid)"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "1440",
    height: "720",
    fill: "url(#cyan-glow)"
  }), [[120, 80], [216, 128], [312, 80], [1080, 128], [1176, 80], [1272, 176], [96, 560], [192, 608], [288, 512], [1056, 560], [1200, 608], [1296, 512]].map(([x, y], i) => /*#__PURE__*/React.createElement("rect", {
    key: i,
    x: x,
    y: y,
    width: "48",
    height: "48",
    fill: "rgba(6,182,212,0.07)"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "container hero-pattern-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-content reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon.zap, {
    style: {
      width: 14,
      height: 14
    }
  }), " AI-first engineering partner"), /*#__PURE__*/React.createElement("h1", null, "AI-native software, engineered for ", /*#__PURE__*/React.createElement("span", {
    className: "text-cyan"
  }, "production"), "."), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "We design, build, and operate AI-native products end-to-end, LLM features, agent workflows, and the cloud infrastructure behind them. Strategy, design, and engineering under one roof."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--cyan btn--lg"
  }, "Start a project ", /*#__PURE__*/React.createElement(Icon.arrow, null)), /*#__PURE__*/React.createElement("a", {
    href: "/process",
    className: "btn btn--ghost btn--lg"
  }, "How we work")), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-item"
  }, /*#__PURE__*/React.createElement("strong", null, "20+"), /*#__PURE__*/React.createElement("span", null, "Projects delivered")), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-item"
  }, /*#__PURE__*/React.createElement("strong", null, "8+ yrs"), /*#__PURE__*/React.createElement("span", null, "Engineering practice")), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-item"
  }, /*#__PURE__*/React.createElement("strong", null, "98%"), /*#__PURE__*/React.createElement("span", null, "Satisfied clients")))), /*#__PURE__*/React.createElement("div", {
    className: "hero-mockup reveal"
  }, /*#__PURE__*/React.createElement(DashboardMockup, null))));
}

// A faithful, drawn-in-CSS dashboard placeholder
function DashboardMockup() {
  return /*#__PURE__*/React.createElement("div", {
    className: "mockup"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mockup-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mockup-dot",
    style: {
      background: "#FF5F57"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mockup-dot",
    style: {
      background: "#FEBC2E"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mockup-dot",
    style: {
      background: "#28C840"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mockup-url"
  }, "app.7code.ro")), /*#__PURE__*/React.createElement("div", {
    className: "mockup-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mockup-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mockup-side-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mockup-logo"
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 16
  }))), ["Dashboard", "Projects", "Analytics", "Team", "Settings"].map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "mockup-side-item" + (i === 1 ? " is-active" : "")
  }, /*#__PURE__*/React.createElement("span", {
    className: "mockup-side-dot"
  }), " ", l))), /*#__PURE__*/React.createElement("div", {
    className: "mockup-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mockup-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mockup-eyebrow"
  }, "Performance overview"), /*#__PURE__*/React.createElement("div", {
    className: "mockup-h1"
  }, "$248,930")), /*#__PURE__*/React.createElement("div", {
    className: "mockup-pill"
  }, "+12.4% MoM")), /*#__PURE__*/React.createElement("div", {
    className: "mockup-chart"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 320 120",
    preserveAspectRatio: "none",
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "ch",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgba(6,182,212,0.4)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "rgba(6,182,212,0)"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M0 90 C 30 80, 50 60, 80 65 S 130 40, 160 50 S 220 20, 260 30 S 320 18, 320 18 L 320 120 L 0 120 Z",
    fill: "url(#ch)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 90 C 30 80, 50 60, 80 65 S 130 40, 160 50 S 220 20, 260 30 S 320 18, 320 18",
    fill: "none",
    stroke: "#06B6D4",
    strokeWidth: "2.5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mockup-stats"
  }, [{
    l: "Active users",
    v: "12,408",
    t: "+8.2%"
  }, {
    l: "Conversion",
    v: "4.6%",
    t: "+1.1%"
  }, {
    l: "Avg session",
    v: "3m 42s",
    t: "+24s"
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "mockup-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mockup-stat-label"
  }, s.l), /*#__PURE__*/React.createElement("div", {
    className: "mockup-stat-value"
  }, s.v), /*#__PURE__*/React.createElement("div", {
    className: "mockup-stat-trend"
  }, s.t)))))));
}

// Variant B, Animated terminal / code rain
function HeroTerminal() {
  const [lines, setLines] = useStateH([]);
  const all = ["$ 7code init my-product", "→ scaffolding modern stack", "✓ next.js + typescript", "✓ postgres + prisma", "✓ ci/cd pipeline configured", "→ deploying to production", "✓ live at my-product.com", "$ ready to ship."];
  useEffectH(() => {
    let i = 0;
    const t = setInterval(() => {
      setLines(prev => [...prev, all[i % all.length]]);
      i++;
      if (i > 14) clearInterval(t);
    }, 600);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "hero hero--terminal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container hero-pattern-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-content reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag-dot"
  }), " Available for new partnerships, Q2 2026"), /*#__PURE__*/React.createElement("h1", null, "Engineering teams that ship like a ", /*#__PURE__*/React.createElement("span", {
    className: "text-cyan"
  }, "product team"), "."), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "From the first whiteboard session to the hundredth deploy, 7Code becomes the engineering muscle behind your product roadmap."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--cyan btn--lg"
  }, "Start a project ", /*#__PURE__*/React.createElement(Icon.arrow, null)), /*#__PURE__*/React.createElement("a", {
    href: "/process",
    className: "btn btn--ghost btn--lg"
  }, "See our process"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-terminal reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-terminal-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mockup-dot",
    style: {
      background: "#FF5F57"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mockup-dot",
    style: {
      background: "#FEBC2E"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mockup-dot",
    style: {
      background: "#28C840"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mockup-url"
  }, "~/projects/my-product")), /*#__PURE__*/React.createElement("div", {
    className: "hero-terminal-body"
  }, lines.map((l, i) => {
    const isCmd = l.startsWith("$");
    const isOk = l.startsWith("✓");
    const isArrow = l.startsWith("→");
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "terminal-line"
    }, /*#__PURE__*/React.createElement("span", {
      className: isOk ? "terminal-ok" : isArrow ? "terminal-arrow" : isCmd ? "terminal-cmd" : ""
    }, l));
  }), /*#__PURE__*/React.createElement("div", {
    className: "terminal-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "terminal-caret"
  }, "\u258D"))))));
}

// Variant C, Bold split / type-forward, no mockup
function HeroBoldSplit() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero hero--split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container hero-split-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-split-left reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon.star, {
    style: {
      width: 14,
      height: 14
    }
  }), " Trusted by 20+ teams worldwide"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-mega"
  }, "We build ", /*#__PURE__*/React.createElement("span", {
    className: "text-cyan"
  }, "software"), /*#__PURE__*/React.createElement("br", null), "that compounds."), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "Long-term engineering partners for ambitious products. Every line of code is a bet on your future leverage."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--cyan btn--lg"
  }, "Start a project ", /*#__PURE__*/React.createElement(Icon.arrow, null)), /*#__PURE__*/React.createElement("a", {
    href: "/about",
    className: "btn-link"
  }, "Meet the team ", /*#__PURE__*/React.createElement(Icon.arrow, null)))), /*#__PURE__*/React.createElement("div", {
    className: "hero-split-right reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-orb"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 400",
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "orb-g",
    cx: "50%",
    cy: "50%",
    r: "50%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#4DDFEA"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "55%",
    stopColor: "#0C9CB5"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#075063"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "orb-glow",
    cx: "50%",
    cy: "40%",
    r: "40%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgba(255,255,255,0.55)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "rgba(255,255,255,0)"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "200",
    r: "170",
    fill: "url(#orb-g)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "200",
    r: "170",
    fill: "url(#orb-glow)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "200",
    cy: "200",
    rx: "180",
    ry: "60",
    fill: "none",
    stroke: "rgba(6,182,212,0.35)",
    strokeWidth: "1",
    transform: "rotate(-15 200 200)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "200",
    cy: "200",
    rx: "190",
    ry: "80",
    fill: "none",
    stroke: "rgba(6,182,212,0.2)",
    strokeWidth: "1",
    transform: "rotate(20 200 200)"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-orb-badges"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-badge",
    style: {
      top: "10%",
      left: "-8%"
    }
  }, /*#__PURE__*/React.createElement(Icon.cpu, {
    style: {
      width: 18,
      height: 18
    }
  }), /*#__PURE__*/React.createElement("span", null, "AI-ready")), /*#__PURE__*/React.createElement("div", {
    className: "hero-badge",
    style: {
      top: "70%",
      left: "-5%"
    }
  }, /*#__PURE__*/React.createElement(Icon.cloud, {
    style: {
      width: 18,
      height: 18
    }
  }), /*#__PURE__*/React.createElement("span", null, "Cloud-native")), /*#__PURE__*/React.createElement("div", {
    className: "hero-badge",
    style: {
      top: "20%",
      right: "-5%"
    }
  }, /*#__PURE__*/React.createElement(Icon.shield, {
    style: {
      width: 18,
      height: 18
    }
  }), /*#__PURE__*/React.createElement("span", null, "Secure by default")), /*#__PURE__*/React.createElement("div", {
    className: "hero-badge",
    style: {
      top: "75%",
      right: "-8%"
    }
  }, /*#__PURE__*/React.createElement(Icon.pulse, {
    style: {
      width: 18,
      height: 18
    }
  }), /*#__PURE__*/React.createElement("span", null, "Always-on monitoring")))))));
}
window.HeroPatternMockup = HeroPatternMockup;
window.HeroTerminal = HeroTerminal;
window.HeroBoldSplit = HeroBoldSplit;
