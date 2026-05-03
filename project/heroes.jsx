/* global React, Logo, Icon */

const { useState: useStateH, useEffect: useEffectH } = React;

// ──────────────────────────────────────────────────────────────────
// HERO VARIATIONS
// ──────────────────────────────────────────────────────────────────

// Variant A — Pattern grid + dashboard mockup (faithful to Figma)
function HeroPatternMockup() {
  return (
    <section className="hero hero--pattern">
      <div className="hero-pattern-bg" aria-hidden="true">
        <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 720">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(15,23,42,0.05)" strokeWidth="1"/>
            </pattern>
            <radialGradient id="cyan-glow" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="rgba(6,182,212,0.18)"/>
              <stop offset="60%" stopColor="rgba(6,182,212,0.04)"/>
              <stop offset="100%" stopColor="rgba(6,182,212,0)"/>
            </radialGradient>
          </defs>
          <rect width="1440" height="720" fill="url(#grid)"/>
          <rect width="1440" height="720" fill="url(#cyan-glow)"/>
          {/* scattered filled squares */}
          {[
            [120,80],[216,128],[312,80],[1080,128],[1176,80],[1272,176],
            [96,560],[192,608],[288,512],[1056,560],[1200,608],[1296,512]
          ].map(([x,y], i) => (
            <rect key={i} x={x} y={y} width="48" height="48" fill="rgba(6,182,212,0.07)"/>
          ))}
        </svg>
      </div>
      <div className="container hero-pattern-inner">
        <div className="hero-content reveal">
          <span className="tag"><Icon.zap style={{ width: 14, height: 14 }} /> AI-first engineering partner</span>
          <h1>AI-native software, engineered for <span className="text-cyan">production</span>.</h1>
          <p className="hero-sub">We design, build, and operate AI-native products end-to-end — LLM features, agent workflows, and the cloud infrastructure behind them. Strategy, design, and engineering under one roof.</p>
          <div className="hero-cta">
            <a href="#/contact" className="btn btn--cyan btn--lg">Start a project <Icon.arrow /></a>
            <a href="#/process" className="btn btn--ghost btn--lg">How we work</a>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-item"><strong>50+</strong><span>AI products shipped</span></div>
            <div className="hero-meta-divider"/>
            <div className="hero-meta-item"><strong>12+ yrs</strong><span>Engineering practice</span></div>
            <div className="hero-meta-divider"/>
            <div className="hero-meta-item"><strong>98%</strong><span>Client retention</span></div>
          </div>
        </div>
        <div className="hero-mockup reveal">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

// A faithful, drawn-in-CSS dashboard placeholder
function DashboardMockup() {
  return (
    <div className="mockup">
      <div className="mockup-bar">
        <span className="mockup-dot" style={{ background: "#FF5F57" }}/>
        <span className="mockup-dot" style={{ background: "#FEBC2E" }}/>
        <span className="mockup-dot" style={{ background: "#28C840" }}/>
        <span className="mockup-url">app.7code.ro</span>
      </div>
      <div className="mockup-body">
        <div className="mockup-side">
          <div className="mockup-side-head">
            <span className="mockup-logo"><Logo height={16}/></span>
          </div>
          {["Dashboard","Projects","Analytics","Team","Settings"].map((l, i) => (
            <div key={i} className={"mockup-side-item" + (i === 1 ? " is-active" : "")}>
              <span className="mockup-side-dot"/> {l}
            </div>
          ))}
        </div>
        <div className="mockup-main">
          <div className="mockup-row">
            <div>
              <div className="mockup-eyebrow">Performance overview</div>
              <div className="mockup-h1">$248,930</div>
            </div>
            <div className="mockup-pill">+12.4% MoM</div>
          </div>
          <div className="mockup-chart">
            <svg viewBox="0 0 320 120" preserveAspectRatio="none" width="100%" height="100%">
              <defs>
                <linearGradient id="ch" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(6,182,212,0.4)"/>
                  <stop offset="100%" stopColor="rgba(6,182,212,0)"/>
                </linearGradient>
              </defs>
              <path d="M0 90 C 30 80, 50 60, 80 65 S 130 40, 160 50 S 220 20, 260 30 S 320 18, 320 18 L 320 120 L 0 120 Z" fill="url(#ch)"/>
              <path d="M0 90 C 30 80, 50 60, 80 65 S 130 40, 160 50 S 220 20, 260 30 S 320 18, 320 18" fill="none" stroke="#06B6D4" strokeWidth="2.5"/>
            </svg>
          </div>
          <div className="mockup-stats">
            {[
              { l: "Active users", v: "12,408", t: "+8.2%" },
              { l: "Conversion", v: "4.6%", t: "+1.1%" },
              { l: "Avg session", v: "3m 42s", t: "+24s" },
            ].map((s, i) => (
              <div key={i} className="mockup-stat">
                <div className="mockup-stat-label">{s.l}</div>
                <div className="mockup-stat-value">{s.v}</div>
                <div className="mockup-stat-trend">{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Variant B — Animated terminal / code rain
function HeroTerminal() {
  const [lines, setLines] = useStateH([]);
  const all = [
    "$ 7code init my-product",
    "→ scaffolding modern stack",
    "✓ next.js + typescript",
    "✓ postgres + prisma",
    "✓ ci/cd pipeline configured",
    "→ deploying to production",
    "✓ live at my-product.com",
    "$ ready to ship.",
  ];
  useEffectH(() => {
    let i = 0;
    const t = setInterval(() => {
      setLines(prev => [...prev, all[i % all.length]]);
      i++;
      if (i > 14) clearInterval(t);
    }, 600);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="hero hero--terminal">
      <div className="container hero-pattern-inner">
        <div className="hero-content reveal">
          <span className="tag"><span className="tag-dot"/> Available for new partnerships — Q2 2026</span>
          <h1>Engineering teams that ship like a <span className="text-cyan">product team</span>.</h1>
          <p className="hero-sub">From the first whiteboard session to the hundredth deploy, 7Code becomes the engineering muscle behind your product roadmap.</p>
          <div className="hero-cta">
            <a href="#/contact" className="btn btn--cyan btn--lg">Start a project <Icon.arrow /></a>
            <a href="#/process" className="btn btn--ghost btn--lg">See our process</a>
          </div>
        </div>
        <div className="hero-terminal reveal">
          <div className="hero-terminal-bar">
            <span className="mockup-dot" style={{ background: "#FF5F57" }}/>
            <span className="mockup-dot" style={{ background: "#FEBC2E" }}/>
            <span className="mockup-dot" style={{ background: "#28C840" }}/>
            <span className="mockup-url">~/projects/my-product</span>
          </div>
          <div className="hero-terminal-body">
            {lines.map((l, i) => {
              const isCmd = l.startsWith("$");
              const isOk = l.startsWith("✓");
              const isArrow = l.startsWith("→");
              return (
                <div key={i} className="terminal-line">
                  <span className={isOk ? "terminal-ok" : isArrow ? "terminal-arrow" : isCmd ? "terminal-cmd" : ""}>{l}</span>
                </div>
              );
            })}
            <div className="terminal-line"><span className="terminal-caret">▍</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Variant C — Bold split / type-forward, no mockup
function HeroBoldSplit() {
  return (
    <section className="hero hero--split">
      <div className="container hero-split-inner">
        <div className="hero-split-left reveal">
          <span className="tag"><Icon.star style={{ width: 14, height: 14 }}/> Trusted by 50+ teams worldwide</span>
          <h1 className="hero-mega">
            We build <span className="text-cyan">software</span><br/>
            that compounds.
          </h1>
          <p className="hero-sub">Long-term engineering partners for ambitious products. Every line of code is a bet on your future leverage.</p>
          <div className="hero-cta">
            <a href="#/contact" className="btn btn--cyan btn--lg">Start a project <Icon.arrow /></a>
            <a href="#/about" className="btn-link">Meet the team <Icon.arrow /></a>
          </div>
        </div>
        <div className="hero-split-right reveal">
          <div className="hero-orb">
            <svg viewBox="0 0 400 400" width="100%" height="100%">
              <defs>
                <radialGradient id="orb-g" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#4DDFEA"/>
                  <stop offset="55%" stopColor="#0C9CB5"/>
                  <stop offset="100%" stopColor="#075063"/>
                </radialGradient>
                <radialGradient id="orb-glow" cx="50%" cy="40%" r="40%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.55)"/>
                  <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="170" fill="url(#orb-g)"/>
              <circle cx="200" cy="200" r="170" fill="url(#orb-glow)"/>
              {/* orbital rings */}
              <ellipse cx="200" cy="200" rx="180" ry="60" fill="none" stroke="rgba(6,182,212,0.35)" strokeWidth="1" transform="rotate(-15 200 200)"/>
              <ellipse cx="200" cy="200" rx="190" ry="80" fill="none" stroke="rgba(6,182,212,0.2)" strokeWidth="1" transform="rotate(20 200 200)"/>
            </svg>
            <div className="hero-orb-badges">
              <div className="hero-badge" style={{ top: "10%", left: "-8%" }}>
                <Icon.cpu style={{ width: 18, height: 18 }} />
                <span>AI-ready</span>
              </div>
              <div className="hero-badge" style={{ top: "70%", left: "-5%" }}>
                <Icon.cloud style={{ width: 18, height: 18 }} />
                <span>Cloud-native</span>
              </div>
              <div className="hero-badge" style={{ top: "20%", right: "-5%" }}>
                <Icon.shield style={{ width: 18, height: 18 }} />
                <span>Secure by default</span>
              </div>
              <div className="hero-badge" style={{ top: "75%", right: "-8%" }}>
                <Icon.pulse style={{ width: 18, height: 18 }} />
                <span>Always-on monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.HeroPatternMockup = HeroPatternMockup;
window.HeroTerminal = HeroTerminal;
window.HeroBoldSplit = HeroBoldSplit;
