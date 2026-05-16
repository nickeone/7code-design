/* global React, Logo, Icon */

const { useState, useEffect, useRef } = React;

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

function NavLinkA({ to, children, className = "nav-link", activeClass = "is-active" }) {
  const active = typeof window !== "undefined" && window.location.hash.slice(1) === to;
  return <a href={to} className={className + (active ? " " + activeClass : "")}>{children}</a>;
}

// ──────────────────────────────────────────────────────────────────
// Reveal hook
// ──────────────────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-in)");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
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

  const openMega = () => { clearTimeout(megaTimer.current); setMegaOpen(true); };
  const closeMega = () => { megaTimer.current = setTimeout(() => setMegaOpen(false), 120); };
  const openSvc = () => { clearTimeout(svcTimer.current); setSvcOpen(true); };
  const closeSvc = () => { svcTimer.current = setTimeout(() => setSvcOpen(false), 120); };

  const services = [
    {
      icon: Icon.code, title: "AI-Native Product Engineering", slug: "ai-product-engineering",
      bullets: ["AI-Powered Web Apps", "Intelligent Mobile Apps", "LLM-First Interfaces", "Product Discovery & UX Design"],
    },
    {
      icon: Icon.globe, title: "System Integrations", slug: "system-integrations",
      bullets: ["API & Middleware", "ERP / CRM Connectors", "Real-time Data Pipelines"],
    },
    {
      icon: Icon.cpu, title: "AI & Process Automation", slug: "ai-automation",
      bullets: ["Custom Copilots", "Workflow Automation", "LLM Evaluation"],
    },
    {
      icon: Icon.cpu, title: "LLM & Agent Development", slug: "llm-agent-development",
      bullets: ["LLM API Integrations", "Multi-step Agent Pipelines", "RAG System Design"],
    },
    {
      icon: Icon.cloud, title: "Cloud & Agentic Infrastructure", slug: "cloud-agentic-infra",
      bullets: ["Cloud-Native Deployments", "Agentic Pipelines & Orchestration", "AI Observability"],
    },
    {
      icon: Icon.users, title: "AI Engineering Outstaffing", slug: "ai-outstaffing",
      bullets: ["Dedicated AI Engineers", "Embedded Team Leads", "Domain Specialists"],
    },
  ];

  const expertise = [
    { icon: Icon.heart,     title: "Healthcare",        desc: "EHR, clinical decision tools, patient engagement",       slug: "healthcare" },
    { icon: Icon.briefcase, title: "Finance",            desc: "ERP integration, real-time dashboards, automation",      slug: "finance" },
    { icon: Icon.shield,    title: "Defence & Security", desc: "Situational awareness, secure systems integration",      slug: "defence" },
    { icon: Icon.energy,    title: "Energy & Utilities", desc: "IoT integration, predictive analytics, monitoring",      slug: "energy" },
    { icon: Icon.users,     title: "HR",                 desc: "Recruitment, payroll, workforce analytics",              slug: "hr" },
    { icon: Icon.chart,     title: "Operations",         desc: "Workflow automation, dashboards, integrations",          slug: "operations" },
  ];

  return (
    <>
      <header className={"nav" + (scrolled ? " is-scrolled" : "")}>
        <div className="nav-inner">
          <a href="/" className="brand"><Logo height={28} /></a>
          <nav className="nav-links">
            <div style={{ position: "static" }} onMouseEnter={openSvc} onMouseLeave={closeSvc}>
              <a href="/service/ai-product-engineering" className={"nav-link" + (svcOpen ? " is-active" : "")} aria-expanded={svcOpen} onClick={e => { e.preventDefault(); setSvcOpen(o => !o); }}>
                Services <Icon.caret />
              </a>
              <div className={"svc-mega" + (svcOpen ? " is-open" : "")}>
                <div className="svc-mega-grid">
                  {services.map((s, i) => {
                    const I = s.icon;
                    return (
                      <a key={i} href={"/service/" + s.slug} className="svc-mega-card">
                        <span className="svc-mega-icon"><I /></span>
                        <h4 className="svc-mega-title">{s.title}</h4>
                        <ul className="svc-mega-list">
                          {s.bullets.map((b, j) => <li key={j}>{b}</li>)}
                        </ul>
                        <span className="svc-mega-link">Learn more <Icon.arrow /></span>
                      </a>
                    );
                  })}
                </div>
                <div className="svc-mega-foot">
                  <span>Tailored solutions for every need</span>
                <a href="/contact" className="svc-mega-cta">Book a meeting <Icon.arrow /></a>
                </div>
              </div>
            </div>
            <NavLinkA to="/case-studies">Case Studies</NavLinkA>
            <div style={{ position: "relative" }} onMouseEnter={openMega} onMouseLeave={closeMega}>
              <a href="/expertise" className={"nav-link" + (megaOpen ? " is-active" : "")} aria-expanded={megaOpen}>
                Expertise <Icon.caret />
              </a>
              <div className={"megamenu" + (megaOpen ? " is-open" : "")}>
                {expertise.map((e, i) => {
                  const I = e.icon;
                  return (
                    <a key={i} href={"/expertise/" + e.slug} className="mm-item">
                      <span className="mm-icon"><I /></span>
                      <span>
                        <span className="mm-title">{e.title}</span>
                        <span className="mm-desc">{e.desc}</span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
            <NavLinkA to="/about">About</NavLinkA>
            <NavLinkA to="/blog">Blog</NavLinkA>
          </nav>
          <div className="nav-cta">
            <a href="/contact" className="btn btn--cyan btn--sm">Get in touch <Icon.arrow /></a>
            <button className="nav-mobile-toggle" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
              {mobileOpen ? <Icon.x /> : <Icon.menu />}
            </button>
          </div>
        </div>
      </header>
      <div className={"nav-mobile" + (mobileOpen ? " is-open" : "")}>
        <div className="nav-mobile-group">
          <button className="nav-mobile-group-btn" onClick={() => setMobileSvcOpen(o => !o)} aria-expanded={mobileSvcOpen}>
            Services <Icon.caret />
          </button>
          <div className={"nav-mobile-sub" + (mobileSvcOpen ? " is-open" : "")}>
            {services.map((s, i) => (
              <a key={i} href={"/service/" + s.slug}>{s.title}</a>
            ))}
          </div>
        </div>
        <a href="/case-studies">Case Studies</a>
        <div className="nav-mobile-group">
          <button className="nav-mobile-group-btn" onClick={() => setMobileExpOpen(o => !o)} aria-expanded={mobileExpOpen}>
            Expertise <Icon.caret />
          </button>
          <div className={"nav-mobile-sub" + (mobileExpOpen ? " is-open" : "")}>
            {expertise.map((e, i) => (
              <a key={i} href={"/expertise/" + e.slug}>{e.title}</a>
            ))}
          </div>
        </div>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <a href="/contact" className="btn btn--cyan">Get in touch <Icon.arrow /></a>
      </div>
    </>
  );
}

// ──────────────────────────────────────────────────────────────────
// Footer
// ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="brand"><Logo height={32} color="#fff" /></a>
            <p>AI-first software engineering partner. We design, build, and operate AI-native products end-to-end, LLM features, agent workflows, and the production cloud behind them.</p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="/service/ai-product-engineering">AI-Native Product Engineering</a></li>
              <li><a href="/service/system-integrations">System Integrations</a></li>
              <li><a href="/service/ai-automation">AI &amp; Process Automation</a></li>
              <li><a href="/service/llm-agent-development">LLM &amp; Agent Development</a></li>
              <li><a href="/service/cloud-agentic-infra">Cloud &amp; Agentic Infra</a></li>
              <li><a href="/service/ai-outstaffing">AI Engineering Outstaffing</a></li>
            </ul>
          </div>
          <div>
            <h4>Expertise</h4>
            <ul>
              <li><a href="/expertise/healthcare">Healthcare</a></li>
              <li><a href="/expertise/finance">Finance</a></li>
              <li><a href="/expertise/energy">Energy &amp; Utilities</a></li>
              <li><a href="/expertise/defence">Defence &amp; Security</a></li>
              <li><a href="/expertise/hr">HR</a></li>
              <li><a href="/expertise/operations">Operations</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/case-studies">Case Studies</a></li>
              <li><a href="/process">Our Process</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="https://clutch.co/profile/7code#reviews" target="_blank" rel="noopener noreferrer">Reviews on Clutch</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:office@7code.ro">office@7code.ro</a></li>
              <li><a href="https://share.google/kSWr5AJABJj33MMVu" target="_blank" rel="noopener noreferrer">Cluj-Napoca, Romania</a></li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,.12)", paddingTop: 20, marginTop: 8 }}>
          <p style={{ margin: "0 0 6px", fontSize: 12, color: "rgba(255,255,255,.4)", lineHeight: 1.6 }}>
            SEVEN CODE DEVELOPMENT SRL · CUI 38088795 · Onisifor Ghibu 20A, Cluj-Napoca 400185, Romania · office@7code.ro
          </p>
        </div>
        <div className="footer-bottom">
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <span>© 2026 7Code. All rights reserved.</span>
            <a href="/privacy-policy" style={{ color: "rgba(255,255,255,.55)", fontSize: 13, textDecoration: "none" }}>Privacy &amp; Cookies</a>
            <a href="/terms-and-conditions" style={{ color: "rgba(255,255,255,.55)", fontSize: 13, textDecoration: "none" }}>Terms &amp; Conditions</a>
            <button onClick={() => openCookieSettings()} style={{ background: "none", border: "none", color: "rgba(255,255,255,.55)", fontSize: 13, cursor: "pointer", padding: 0, fontFamily: "inherit", textDecoration: "underline" }}>Cookie settings</button>
          </div>
          <div className="footer-social">
            <a href="https://github.com/7code" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon.github /></a>
            <a href="https://www.linkedin.com/company/7-code/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon.linkedin /></a>
            <a href="https://clutch.co/profile/7code" target="_blank" rel="noopener noreferrer" aria-label="Clutch profile"><Icon.award /></a>
          </div>
        </div>
      </div>
    </footer>
  );
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
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID, { anonymize_ip: true });
}
function initAnalytics() {
  try {
    const raw = localStorage.getItem("7code_consent");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.analytics === true) loadGA();
    }
  } catch (_) {}
  window.addEventListener("7code:consent", function(e) {
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
  } catch (_) { return null; }
}

function writeConsent(analytics) {
  const consent = { version: CONSENT_VER, essential: true, analytics: analytics, decidedAt: new Date().toISOString() };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent("7code:consent", { detail: consent }));
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
    if (!existing) setVisible(true);
    else setAnalytics(!!existing.analytics);

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

  const btnPrimary = { background: "var(--cyan-500)", color: "#fff", border: 0, borderRadius: 999, padding: "10px 18px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" };
  const btnSecondary = { background: "#fff", color: "var(--ink)", border: "1px solid var(--slate-200)", borderRadius: 999, padding: "10px 18px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" };
  const btnGhost = { background: "transparent", color: "var(--slate-500)", border: 0, borderRadius: 999, padding: "10px 14px", fontSize: 14, fontWeight: 600, cursor: "pointer", textDecoration: "underline", fontFamily: "inherit" };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: "fixed", left: 16, right: 16, bottom: 16, zIndex: 9999,
        maxWidth: 720, margin: "0 auto",
        background: "#fff", border: "1px solid var(--slate-200)", borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-lg)", padding: 24,
        fontFamily: "var(--font-body)", color: "var(--ink)",
      }}
    >
      {!showSettings ? (
        <>
          <h2 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 700 }}>We use cookies</h2>
          <p style={{ margin: "0 0 16px", fontSize: 14, lineHeight: 1.65, color: "var(--slate-500)" }}>
            We use essential cookies for the site to work, and analytics cookies (Google Analytics) to understand how you use it.{" "}
            <a href="/privacy-policy#cookies" style={{ color: "var(--cyan-600)", textDecoration: "none" }}>Cookie Policy</a>.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button onClick={() => save(true)} style={btnPrimary}>Accept all</button>
            <button onClick={() => save(false)} style={btnSecondary}>Reject non-essential</button>
            <button onClick={() => setShowSettings(true)} style={btnGhost}>Customise</button>
          </div>
        </>
      ) : (
        <>
          <h2 style={{ margin: "0 0 16px", fontSize: 18, fontWeight: 700 }}>Cookie settings</h2>
          <label style={{ display: "flex", gap: 12, padding: "12px 0", borderBottom: "1px solid var(--slate-200)", cursor: "default" }}>
            <input type="checkbox" checked disabled style={{ marginTop: 4 }} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Essential</div>
              <div style={{ fontSize: 13, color: "var(--slate-500)", marginTop: 2 }}>Required for the website to function. Always active.</div>
            </div>
          </label>
          <label style={{ display: "flex", gap: 12, padding: "12px 0", borderBottom: "1px solid var(--slate-200)", cursor: "pointer" }}>
            <input type="checkbox" checked={analytics} onChange={e => setAnalytics(e.target.checked)} style={{ marginTop: 4 }} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Analytics</div>
              <div style={{ fontSize: 13, color: "var(--slate-500)", marginTop: 2 }}>Google Analytics — anonymised usage to improve the site.</div>
            </div>
          </label>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 16 }}>
            <button onClick={() => save(analytics)} style={btnPrimary}>Save preferences</button>
            <button onClick={() => save(true)} style={btnSecondary}>Accept all</button>
            <button onClick={() => save(false)} style={btnGhost}>Reject non-essential</button>
          </div>
        </>
      )}
    </div>
  );
}

window.Nav = Nav;
window.Footer = Footer;
window.useHashRoute = useHashRoute;
window.parseRoute = parseRoute;
window.useReveal = useReveal;
window.CookieConsent = CookieConsent;
window.openCookieSettings = openCookieSettings;
window.initAnalytics = initAnalytics;
