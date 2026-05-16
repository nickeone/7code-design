/* global React, Logo, Icon */

const {
  useState,
  useEffect,
  useRef
} = React;

// ──────────────────────────────────────────────────────────────────
// Routing (path-based)
// ──────────────────────────────────────────────────────────────────
function useHashRoute() {
  const getPath = () => {
    if (typeof window === "undefined") return "/";
    const hash = window.location.hash.slice(1);
    // Only use hash as route if it looks like a path (starts with "/")
    if (hash.startsWith("/")) return hash;
    return window.location.pathname || "/";
  };
  const [path, setPath] = useState(getPath);
  useEffect(() => {
    const onHash = () => {
      const next = getPath();
      setPath(next);
      // Only scroll to top if not navigating to a hash anchor on the same path
      if (!window.location.hash || window.location.hash.startsWith("/#")) {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return path;
}

// Returns [page, slug] e.g. ["/case-study", "wholesum"] or ["/expertise", "healthcare"] or ["/blog", "my-post"]
function parseRoute(hash) {
  const parts = hash.split("/").filter(Boolean);
  if (!parts.length) return ["/", null];
  if (parts.length >= 2 && (parts[0] === "case-study" || parts[0] === "expertise" || parts[0] === "blog" || parts[0] === "service" || parts[0] === "compare" || parts[0] === "resources")) {
    return ["/" + parts[0], parts[1]];
  }
  return ["/" + parts[0], null];
}
function NavLinkA({
  to,
  children,
  className = "nav-link",
  activeClass = "is-active"
}) {
  const active = typeof window !== "undefined" && window.location.hash.slice(1) === to;
  return /*#__PURE__*/React.createElement("a", {
    href: to,
    className: className + (active ? " " + activeClass : "")
  }, children);
}

// ──────────────────────────────────────────────────────────────────
// Reveal hook
// ──────────────────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-in)");
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.1
    });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

// ──────────────────────────────────────────────────────────────────
// Nav
// ──────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSvcOpen, setMobileSvcOpen] = useState(false);
  const [mobileExpOpen, setMobileExpOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const megaTimer = useRef(null);
  const svcTimer = useRef(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const openMega = () => {
    clearTimeout(megaTimer.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    megaTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };
  const openSvc = () => {
    clearTimeout(svcTimer.current);
    setSvcOpen(true);
  };
  const closeSvc = () => {
    svcTimer.current = setTimeout(() => setSvcOpen(false), 120);
  };
  const services = [{
    icon: Icon.code,
    title: "AI-Native Product Engineering",
    slug: "ai-product-engineering",
    bullets: ["AI-Powered Web Apps", "Intelligent Mobile Apps", "LLM-First Interfaces", "Product Discovery & UX Design"]
  }, {
    icon: Icon.globe,
    title: "System Integrations",
    slug: "system-integrations",
    bullets: ["API & Middleware", "ERP / CRM Connectors", "Real-time Data Pipelines"]
  }, {
    icon: Icon.cpu,
    title: "AI & Process Automation",
    slug: "ai-automation",
    bullets: ["Custom Copilots", "Workflow Automation", "LLM Evaluation"]
  }, {
    icon: Icon.cpu,
    title: "LLM & Agent Development",
    slug: "llm-agent-development",
    bullets: ["LLM API Integrations", "Multi-step Agent Pipelines", "RAG System Design"]
  }, {
    icon: Icon.cloud,
    title: "Cloud & Agentic Infrastructure",
    slug: "cloud-agentic-infra",
    bullets: ["Cloud-Native Deployments", "Agentic Pipelines & Orchestration", "AI Observability"]
  }, {
    icon: Icon.users,
    title: "AI Engineering Outstaffing",
    slug: "ai-outstaffing",
    bullets: ["Dedicated AI Engineers", "Embedded Team Leads", "Domain Specialists"]
  }];
  const expertise = [{
    icon: Icon.heart,
    title: "Healthcare",
    desc: "EHR, clinical decision tools, patient engagement",
    slug: "healthcare"
  }, {
    icon: Icon.briefcase,
    title: "Finance",
    desc: "ERP integration, real-time dashboards, automation",
    slug: "finance"
  }, {
    icon: Icon.shield,
    title: "Defence & Security",
    desc: "Situational awareness, secure systems integration",
    slug: "defence"
  }, {
    icon: Icon.energy,
    title: "Energy & Utilities",
    desc: "IoT integration, predictive analytics, monitoring",
    slug: "energy"
  }, {
    icon: Icon.users,
    title: "HR",
    desc: "Recruitment, payroll, workforce analytics",
    slug: "hr"
  }, {
    icon: Icon.chart,
    title: "Operations",
    desc: "Workflow automation, dashboards, integrations",
    slug: "operations"
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "nav" + (scrolled ? " is-scrolled" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "brand"
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 28
  })), /*#__PURE__*/React.createElement("nav", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "static"
    },
    onMouseEnter: openSvc,
    onMouseLeave: closeSvc
  }, /*#__PURE__*/React.createElement("a", {
    href: "/service/ai-product-engineering",
    className: "nav-link" + (svcOpen ? " is-active" : ""),
    "aria-expanded": svcOpen,
    onClick: e => {
      e.preventDefault();
      setSvcOpen(o => !o);
    }
  }, "Services ", /*#__PURE__*/React.createElement(Icon.caret, null)), /*#__PURE__*/React.createElement("div", {
    className: "svc-mega" + (svcOpen ? " is-open" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-mega-grid"
  }, services.map((s, i) => {
    const I = s.icon;
    return /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "/service/" + s.slug,
      className: "svc-mega-card"
    }, /*#__PURE__*/React.createElement("span", {
      className: "svc-mega-icon"
    }, /*#__PURE__*/React.createElement(I, null)), /*#__PURE__*/React.createElement("h4", {
      className: "svc-mega-title"
    }, s.title), /*#__PURE__*/React.createElement("ul", {
      className: "svc-mega-list"
    }, s.bullets.map((b, j) => /*#__PURE__*/React.createElement("li", {
      key: j
    }, b))), /*#__PURE__*/React.createElement("span", {
      className: "svc-mega-link"
    }, "Learn more ", /*#__PURE__*/React.createElement(Icon.arrow, null)));
  })), /*#__PURE__*/React.createElement("div", {
    className: "svc-mega-foot"
  }, /*#__PURE__*/React.createElement("span", null, "Tailored solutions for every need"), /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "svc-mega-cta"
  }, "Book a meeting ", /*#__PURE__*/React.createElement(Icon.arrow, null))))), /*#__PURE__*/React.createElement(NavLinkA, {
    to: "/case-studies"
  }, "Case Studies"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    },
    onMouseEnter: openMega,
    onMouseLeave: closeMega
  }, /*#__PURE__*/React.createElement("a", {
    href: "/expertise",
    className: "nav-link" + (megaOpen ? " is-active" : ""),
    "aria-expanded": megaOpen
  }, "Expertise ", /*#__PURE__*/React.createElement(Icon.caret, null)), /*#__PURE__*/React.createElement("div", {
    className: "megamenu" + (megaOpen ? " is-open" : "")
  }, expertise.map((e, i) => {
    const I = e.icon;
    return /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "/expertise/" + e.slug,
      className: "mm-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mm-icon"
    }, /*#__PURE__*/React.createElement(I, null)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      className: "mm-title"
    }, e.title), /*#__PURE__*/React.createElement("span", {
      className: "mm-desc"
    }, e.desc)));
  }))), /*#__PURE__*/React.createElement(NavLinkA, {
    to: "/about"
  }, "About"), /*#__PURE__*/React.createElement(NavLinkA, {
    to: "/blog"
  }, "Blog")), /*#__PURE__*/React.createElement("div", {
    className: "nav-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--cyan btn--sm"
  }, "Get in touch ", /*#__PURE__*/React.createElement(Icon.arrow, null)), /*#__PURE__*/React.createElement("button", {
    className: "nav-mobile-toggle",
    onClick: () => setMobileOpen(o => !o),
    "aria-label": "Menu"
  }, mobileOpen ? /*#__PURE__*/React.createElement(Icon.x, null) : /*#__PURE__*/React.createElement(Icon.menu, null))))), /*#__PURE__*/React.createElement("div", {
    className: "nav-mobile" + (mobileOpen ? " is-open" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-mobile-group"
  }, /*#__PURE__*/React.createElement("button", {
    className: "nav-mobile-group-btn",
    onClick: () => setMobileSvcOpen(o => !o),
    "aria-expanded": mobileSvcOpen
  }, "Services ", /*#__PURE__*/React.createElement(Icon.caret, null)), /*#__PURE__*/React.createElement("div", {
    className: "nav-mobile-sub" + (mobileSvcOpen ? " is-open" : "")
  }, services.map((s, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "/service/" + s.slug
  }, s.title)))), /*#__PURE__*/React.createElement("a", {
    href: "/case-studies"
  }, "Case Studies"), /*#__PURE__*/React.createElement("div", {
    className: "nav-mobile-group"
  }, /*#__PURE__*/React.createElement("button", {
    className: "nav-mobile-group-btn",
    onClick: () => setMobileExpOpen(o => !o),
    "aria-expanded": mobileExpOpen
  }, "Expertise ", /*#__PURE__*/React.createElement(Icon.caret, null)), /*#__PURE__*/React.createElement("div", {
    className: "nav-mobile-sub" + (mobileExpOpen ? " is-open" : "")
  }, expertise.map((e, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "/expertise/" + e.slug
  }, e.title)))), /*#__PURE__*/React.createElement("a", {
    href: "/about"
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "/blog"
  }, "Blog"), /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--cyan"
  }, "Get in touch ", /*#__PURE__*/React.createElement(Icon.arrow, null))));
}

// ──────────────────────────────────────────────────────────────────
// Footer
// ──────────────────────────────────────────────────────────────────
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-brand"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "brand"
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 32,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("p", null, "AI-first software engineering partner. We design, build, and operate AI-native products end-to-end, LLM features, agent workflows, and the production cloud behind them.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Services"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/service/ai-product-engineering"
  }, "AI-Native Product Engineering")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/service/system-integrations"
  }, "System Integrations")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/service/ai-automation"
  }, "AI & Process Automation")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/service/llm-agent-development"
  }, "LLM & Agent Development")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/service/cloud-agentic-infra"
  }, "Cloud & Agentic Infra")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/service/ai-outstaffing"
  }, "AI Engineering Outstaffing")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Expertise"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/expertise/healthcare"
  }, "Healthcare")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/expertise/finance"
  }, "Finance")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/expertise/energy"
  }, "Energy & Utilities")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/expertise/defence"
  }, "Defence & Security")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/expertise/hr"
  }, "HR")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/expertise/operations"
  }, "Operations")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Company"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/about"
  }, "About")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/case-studies"
  }, "Case Studies")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/process"
  }, "Our Process")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/blog"
  }, "Blog")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/contact"
  }, "Contact")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://clutch.co/profile/7code#reviews",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Reviews on Clutch")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Contact"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "mailto:office@7code.ro"
  }, "office@7code.ro")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://share.google/kSWr5AJABJj33MMVu",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Cluj-Napoca, Romania"))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 7Code. All rights reserved."), /*#__PURE__*/React.createElement("a", {
    href: "/privacy-policy",
    style: {
      color: "rgba(255,255,255,.55)",
      fontSize: 13,
      textDecoration: "none"
    }
  }, "Privacy & Cookies"), /*#__PURE__*/React.createElement("a", {
    href: "/terms-and-conditions",
    style: {
      color: "rgba(255,255,255,.55)",
      fontSize: 13,
      textDecoration: "none"
    }
  }, "Terms & Conditions"), /*#__PURE__*/React.createElement("button", {
    onClick: () => openCookieSettings(),
    style: {
      background: "none",
      border: "none",
      color: "rgba(255,255,255,.55)",
      fontSize: 13,
      cursor: "pointer",
      padding: 0,
      fontFamily: "inherit",
      textDecoration: "underline"
    }
  }, "Cookie settings")), /*#__PURE__*/React.createElement("div", {
    className: "footer-social"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/7code",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "GitHub"
  }, /*#__PURE__*/React.createElement(Icon.github, null)), /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/company/7-code/",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "LinkedIn"
  }, /*#__PURE__*/React.createElement(Icon.linkedin, null)), /*#__PURE__*/React.createElement("a", {
    href: "https://clutch.co/profile/7code",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Clutch profile"
  }, /*#__PURE__*/React.createElement(Icon.award, null))))));
}

// ──────────────────────────────────────────────────────────────────
// Analytics — consent-gated GA loader
// ──────────────────────────────────────────────────────────────────
const GA_ID = "G-109V5ZWVD8";
let _gaLoaded = false;
function loadGA() {
  if (_gaLoaded) return;
  _gaLoaded = true;
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID, {
    anonymize_ip: true
  });
}
function initAnalytics() {
  try {
    const raw = localStorage.getItem("7code_consent");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.analytics === true) loadGA();
    }
  } catch (_) {}
  window.addEventListener("7code:consent", function (e) {
    if (e.detail && e.detail.analytics === true) loadGA();
  });
}

// ──────────────────────────────────────────────────────────────────
// Cookie Consent Banner
// ──────────────────────────────────────────────────────────────────
const CONSENT_KEY = "7code_consent";
const CONSENT_VER = "1";
function readConsent() {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed.version !== CONSENT_VER) return null;
    return parsed;
  } catch (_) {
    return null;
  }
}
function writeConsent(analytics) {
  const consent = {
    version: CONSENT_VER,
    essential: true,
    analytics: analytics,
    decidedAt: new Date().toISOString()
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent("7code:consent", {
    detail: consent
  }));
}
function openCookieSettings() {
  window.dispatchEvent(new CustomEvent("7code:open-cookie-settings"));
}
function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  useEffect(() => {
    const existing = readConsent();
    if (!existing) setVisible(true);else setAnalytics(!!existing.analytics);
    const openHandler = () => {
      const c = readConsent();
      setAnalytics(c ? !!c.analytics : false);
      setShowSettings(true);
      setVisible(true);
    };
    window.addEventListener("7code:open-cookie-settings", openHandler);
    return () => window.removeEventListener("7code:open-cookie-settings", openHandler);
  }, []);
  function save(analyticsVal) {
    writeConsent(analyticsVal);
    setVisible(false);
    setShowSettings(false);
  }
  if (!visible) return null;
  const btnPrimary = {
    background: "var(--cyan-500)",
    color: "#fff",
    border: 0,
    borderRadius: 999,
    padding: "10px 18px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "inherit"
  };
  const btnSecondary = {
    background: "#fff",
    color: "var(--ink)",
    border: "1px solid var(--slate-200)",
    borderRadius: 999,
    padding: "10px 18px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "inherit"
  };
  const btnGhost = {
    background: "transparent",
    color: "var(--slate-500)",
    border: 0,
    borderRadius: 999,
    padding: "10px 14px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "underline",
    fontFamily: "inherit"
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-label": "Cookie consent",
    style: {
      position: "fixed",
      left: 16,
      right: 16,
      bottom: 16,
      zIndex: 9999,
      maxWidth: 720,
      margin: "0 auto",
      background: "#fff",
      border: "1px solid var(--slate-200)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      padding: 24,
      fontFamily: "var(--font-body)",
      color: "var(--ink)"
    }
  }, !showSettings ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 8px",
      fontSize: 18,
      fontWeight: 700
    }
  }, "We use cookies"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 16px",
      fontSize: 14,
      lineHeight: 1.65,
      color: "var(--slate-500)"
    }
  }, "We use essential cookies for the site to work, and analytics cookies (Google Analytics) to understand how you use it.", " ", /*#__PURE__*/React.createElement("a", {
    href: "/privacy-policy#cookies",
    style: {
      color: "var(--cyan-600)",
      textDecoration: "none"
    }
  }, "Cookie Policy"), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => save(true),
    style: btnPrimary
  }, "Accept all"), /*#__PURE__*/React.createElement("button", {
    onClick: () => save(false),
    style: btnSecondary
  }, "Reject non-essential"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowSettings(true),
    style: btnGhost
  }, "Customise"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 16px",
      fontSize: 18,
      fontWeight: 700
    }
  }, "Cookie settings"), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      gap: 12,
      padding: "12px 0",
      borderBottom: "1px solid var(--slate-200)",
      cursor: "default"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: true,
    disabled: true,
    style: {
      marginTop: 4
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, "Essential"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--slate-500)",
      marginTop: 2
    }
  }, "Required for the website to function. Always active."))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      gap: 12,
      padding: "12px 0",
      borderBottom: "1px solid var(--slate-200)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: analytics,
    onChange: e => setAnalytics(e.target.checked),
    style: {
      marginTop: 4
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, "Analytics"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--slate-500)",
      marginTop: 2
    }
  }, "Google Analytics \u2014 anonymised usage to improve the site."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => save(analytics),
    style: btnPrimary
  }, "Save preferences"), /*#__PURE__*/React.createElement("button", {
    onClick: () => save(true),
    style: btnSecondary
  }, "Accept all"), /*#__PURE__*/React.createElement("button", {
    onClick: () => save(false),
    style: btnGhost
  }, "Reject non-essential"))));
}
window.Nav = Nav;
window.Footer = Footer;
window.useHashRoute = useHashRoute;
window.parseRoute = parseRoute;
window.useReveal = useReveal;
window.CookieConsent = CookieConsent;
window.openCookieSettings = openCookieSettings;
window.initAnalytics = initAnalytics;
