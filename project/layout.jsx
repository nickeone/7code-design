/* global React, Logo, Icon */

const { useState, useEffect, useRef } = React;

// ──────────────────────────────────────────────────────────────────
// Routing (path-based)
// ──────────────────────────────────────────────────────────────────
function useHashRoute() {
  const [path, setPath] = useState(() => {
    if (typeof window === "undefined") return "/";
    return window.location.hash.slice(1) || window.location.pathname || "/";
  });
  useEffect(() => {
    const onHash = () => { setPath(window.location.hash.slice(1) || "/"); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return path;
}

// Returns [page, slug] e.g. ["/case-study", "wholesum"] or ["/expertise", "healthcare"] or ["/blog", "my-post"]
function parseRoute(hash) {
  const parts = hash.split("/").filter(Boolean);
  if (!parts.length) return ["/", null];
  if (parts.length >= 2 && (parts[0] === "case-study" || parts[0] === "expertise" || parts[0] === "blog" || parts[0] === "service" || parts[0] === "compare")) {
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
      bullets: ["AI-Powered Web Apps", "Intelligent Mobile Apps", "LLM-First Interfaces"],
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
      icon: Icon.layers, title: "Product Strategy & Design", slug: "product-strategy",
      bullets: ["Discovery", "UX Design", "Design Systems"],
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
              <li><a href="/service/product-strategy">Product Strategy &amp; Design</a></li>
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
        <div className="footer-bottom">
          <span>© 2026 7Code. All rights reserved.</span>
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

window.Nav = Nav;
window.Footer = Footer;
window.useHashRoute = useHashRoute;
window.parseRoute = parseRoute;
window.useReveal = useReveal;
