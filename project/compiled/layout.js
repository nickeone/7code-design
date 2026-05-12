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
  const [path, setPath] = useState(() => {
    if (typeof window === "undefined") return "/";
    return window.location.hash.slice(1) || window.location.pathname || "/";
  });
  useEffect(() => {
    const onHash = () => {
      setPath(window.location.hash.slice(1) || "/");
      window.scrollTo(0, 0);
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
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 7Code. All rights reserved."), /*#__PURE__*/React.createElement("div", {
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
window.Nav = Nav;
window.Footer = Footer;
window.useHashRoute = useHashRoute;
window.parseRoute = parseRoute;
window.useReveal = useReveal;