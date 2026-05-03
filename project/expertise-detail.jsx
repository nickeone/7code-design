/* global React, Icon, CSCover, CTAStrip */
/* Expertise detail page — one per industry vertical, slug-routed */

const { useState: useStateEXP } = React;

// ─────────────────────────────────────────────────────────────────
// All expertise data — keyed by slug
// ─────────────────────────────────────────────────────────────────
const EXPERTISE = {
  "healthcare": {
    slug: "healthcare",
    title: "Healthcare",
    tagline: "HIPAA-compliant platforms that connect clinicians, patients, and data — built for the complexity of regulated care.",
    summary: "Healthcare software has to do two things simultaneously: be clinician-grade in reliability and compliance, and patient-grade in usability. We've shipped platforms that do both, across EHR interoperability, clinical decision support, telehealth, and patient engagement.",
    icon: "heart",
    kind: "health",
    color: "#E53E3E",
    bg: "cover--health",
    stats: [
      { v: "3", l: "HIPAA-compliant platforms" },
      { v: "240+", l: "clinics served" },
      { v: "100%", l: "audit pass rate" },
      { v: "12 wks", l: "avg. delivery" },
    ],
    problem: {
      title: "The healthcare software problem nobody talks about.",
      body: "Most healthcare software fails on one axis or the other: technically compliant but unusable, or beautifully designed but failing its first audit. The regulatory stack is genuinely hard — HIPAA, HL7, FHIR, SOC 2 — and the UX bar set by consumer apps means clinicians and patients won't tolerate poor experiences.",
    },
    capabilities: [
      { icon: Icon.pulse, title: "EHR Interoperability", desc: "HL7 FHIR-native integrations with Epic, Cerner, Meditech and custom EHR systems. We've done the hard work of mapping clinical vocabularies so you don't have to." },
      { icon: Icon.shield, title: "HIPAA-grade Infrastructure", desc: "Encrypted at rest and in transit, full audit logs, RBAC, BAA-ready vendor stack, and technical safeguards reviewable by your compliance team on day one." },
      { icon: Icon.monitor, title: "Clinical Decision Support", desc: "Rule-based and ML-powered alerting integrated into clinical workflows — designed with clinicians to reduce alert fatigue rather than add to it." },
      { icon: Icon.smile, title: "Patient Engagement", desc: "Booking, async messaging, remote monitoring, and care plan adherence — mobile-first, accessible, and tested with real patients." },
      { icon: Icon.globe, title: "Telehealth Platforms", desc: "Async-first consult platforms, video visit infrastructure, and the scheduling rails that make a distributed care model actually work at scale." },
      { icon: Icon.chart, title: "Population Health Analytics", desc: "Dashboards that surface risk stratification, care gaps, and quality measures — built for CMOs who need to act, not analysts who need to explore." },
    ],
    process: [
      { step: "01", title: "Compliance architecture first", desc: "We define the technical safeguards, data flows, and vendor stack before any feature work. Your compliance team signs off on the architecture, not a retrospective audit." },
      { step: "02", title: "Clinician co-design", desc: "We run structured observation sessions and co-design workshops with the clinical staff who will actually use the system. Alert fatigue and workflow friction are caught here, not in production." },
      { step: "03", title: "Phased rollout with rollback", desc: "Healthcare can't afford a big-bang deployment. We go live behind feature flags, unit by unit, with automated rollback if error rates exceed threshold." },
    ],
    cases: ["helix-health"],
    next: { slug: "finance", title: "Finance" },
  },

  "finance": {
    slug: "finance",
    title: "Finance",
    tagline: "Real-time dashboards, ERP integration, and automation for finance teams that can't afford to be wrong.",
    summary: "Finance software operates at the intersection of speed and correctness — a dashboard that's 60 seconds stale is fine; one that's wrong is a compliance event. We've shipped treasury platforms, ERP integrations, accounting automation, and regulatory reporting tools for fintechs and enterprise finance teams.",
    icon: "briefcase",
    kind: "finance",
    color: "#3182CE",
    bg: "cover--finance",
    stats: [
      { v: "2", l: "treasury platforms" },
      { v: "$120M+", l: "revenue impact" },
      { v: "60s", l: "position freshness" },
      { v: "8 wks", l: "avg. delivery" },
    ],
    problem: {
      title: "Finance teams are still running on spreadsheets they don't trust.",
      body: "The gap between what finance teams need — live positions, automated reconciliation, audit-grade trails — and what their tools actually provide is enormous. Most enterprise finance stacks are a patchwork of legacy ERPs, CSV exports, and manual reconciliation that breaks every month-end.",
    },
    capabilities: [
      { icon: Icon.chart, title: "Real-time Dashboards", desc: "Live positions, automated roll-ups, and drill-through from entity summary to transaction — updated on a 60-second cadence, not a nightly batch." },
      { icon: Icon.layers, title: "ERP Integration", desc: "Native connectors for SAP, Oracle, NetSuite, and Dynamics. We handle the mapping, the delta sync, and the reconciliation breaks — so your team doesn't have to." },
      { icon: Icon.zap, title: "Accounting Automation", desc: "Journal entry automation, multi-entity consolidation, intercompany eliminations, and period-close checklists that cut close time in half." },
      { icon: Icon.shield, title: "Regulatory Reporting", desc: "IFRS, GAAP, and jurisdiction-specific reporting modules. Built with your external auditors in mind, not just your internal team." },
      { icon: Icon.pulse, title: "Predictive Analytics", desc: "Cash flow forecasting, scenario modelling, and variance analysis — trained on your historical data, not generic benchmarks." },
      { icon: Icon.cpu, title: "Fintech Product Engineering", desc: "Payments infrastructure, lending platforms, and embedded finance products — built to the reliability bar the financial system requires." },
    ],
    process: [
      { step: "01", title: "Data model before UI", desc: "We spend the first week mapping every data source, every entity hierarchy, and every reconciliation rule before touching a design file. Finance is unforgiving of schema mistakes." },
      { step: "02", title: "Correctness before speed", desc: "Every aggregation is double-verified against source records. We ship a reconciliation test suite alongside the product — not as an afterthought." },
      { step: "03", title: "Parallel run before cutover", desc: "New system runs alongside the old one for 30 days, with daily variance reporting. Cutover happens only when the numbers match to the cent." },
    ],
    cases: ["northbank"],
    next: { slug: "energy", title: "Energy & Utilities" },
  },

  "energy": {
    slug: "energy",
    title: "Energy & Utilities",
    tagline: "IoT-driven monitoring, predictive analytics, and operations platforms for critical energy infrastructure.",
    summary: "Energy infrastructure runs 24/7 with zero tolerance for downtime. We've built operations platforms that fuse telemetry from thousands of sensors, predict equipment failures before they happen, and give control room operators a single cockpit instead of six screens.",
    icon: "energy",
    kind: "energy",
    color: "#D69E2E",
    bg: "cover--energy",
    stats: [
      { v: "20K+", l: "sensors integrated" },
      { v: "−12%", l: "energy per year" },
      { v: "10 days", l: "failure lead time" },
      { v: "$2.1M", l: "saved year one" },
    ],
    problem: {
      title: "Reactive maintenance is killing margins. Operators are drowning in alerts.",
      body: "Most energy operators are running reactive maintenance cycles, paying for truck rolls that could have been avoided with 10 days' warning. Control rooms are a wall of blinking alerts from disconnected systems — no shared context, no predictive signal, no way to prioritise.",
    },
    capabilities: [
      { icon: Icon.pulse, title: "IoT Integration", desc: "Protocol-agnostic ingestion from SCADA, Modbus, MQTT, and proprietary sensor stacks. We normalise the data so your analysts work with one schema, not fifty." },
      { icon: Icon.cpu, title: "Predictive Maintenance", desc: "Per-asset health models trained on historical failure data, maintenance logs, and environmental inputs. Built to give operators actionable 10-day lead time, not binary alerts." },
      { icon: Icon.globe, title: "Operations Cockpit", desc: "A single geo + schematic view that cross-filters across every data source. One screen, one operator, all the context." },
      { icon: Icon.chart, title: "Energy Analytics", desc: "Load forecasting, consumption benchmarking, loss analysis, and regulatory reporting — built on the same data platform as your operations tooling." },
      { icon: Icon.zap, title: "Grid Optimisation", desc: "Demand response, renewable dispatch, and load balancing algorithms that reduce energy cost and carbon intensity simultaneously." },
      { icon: Icon.shield, title: "NERC / IEC Compliance", desc: "Cybersecurity frameworks for operational technology, data sovereignty controls, and audit tooling for regulatory submissions." },
    ],
    process: [
      { step: "01", title: "Sensor audit and normalisation", desc: "We map every data source, protocol, and cadence before building anything. Garbage in, garbage out — we spend week one cleaning the signal." },
      { step: "02", title: "Historical model training", desc: "We train the predictive models on 12–24 months of historical data before go-live, so operators get meaningful predictions from day one, not after six months of production data collection." },
      { step: "03", title: "Control room co-design", desc: "We run operator shadowing sessions in the control room and iterate on the UI until triage time drops measurably in simulation. We don't ship until it does." },
    ],
    cases: ["atlas-energy"],
    next: { slug: "defence", title: "Defence & Security" },
  },

  "defence": {
    slug: "defence",
    title: "Defence & Security",
    tagline: "Situational awareness platforms, secure systems integration, and mission-critical software for defence and government.",
    summary: "Defence software operates where the stakes are absolute. We build platforms that fuse multi-domain intelligence, enforce strict information assurance controls, and give operators the clarity they need under pressure — without the cognitive load of six disjointed screens.",
    icon: "shield",
    kind: "defence",
    color: "#4A5568",
    bg: "cover--defence",
    stats: [
      { v: "1", l: "screen (down from 6)" },
      { v: "8×", l: "faster triage" },
      { v: "−72%", l: "operator load" },
      { v: "100%", l: "IA accreditation" },
    ],
    problem: {
      title: "Operators are making life-critical decisions across six disconnected feeds.",
      body: "The challenge in defence isn't a lack of data — it's too much data, siloed across systems that can't share context, with information assurance rules that prevent naive integration. The result: operators manually correlating feeds under time pressure, with no replay, no audit trail, and no way to learn from after-action review.",
    },
    capabilities: [
      { icon: Icon.layers, title: "Multi-domain Fusion", desc: "Radar, comms, SIGINT, and structured intelligence fused into one queryable record store, with role-based redaction at the data layer — not the UI." },
      { icon: Icon.shield, title: "Information Assurance", desc: "Cross-domain solutions, data tagging, need-to-know enforcement, and IA accreditation support. We work alongside your security team from day one." },
      { icon: Icon.monitor, title: "Operator Interface Design", desc: "Calm, deliberate UI designed for high-stakes, time-pressured operation. One map, one timeline, one detail panel. We eliminate tabs, not data." },
      { icon: Icon.pulse, title: "After-action Review", desc: "Frame-accurate replay of every operation, with annotation tools for commanders and trainers. Every decision becomes a learning opportunity." },
      { icon: Icon.cpu, title: "Predictive Analytics", desc: "Pattern-of-life modelling, anomaly detection, and threat scoring built on classified data with the appropriate access controls throughout the pipeline." },
      { icon: Icon.globe, title: "Systems Integration", desc: "Legacy system integration, protocol translation, and command-and-control interoperability across coalition and joint force environments." },
    ],
    process: [
      { step: "01", title: "Security architecture before everything", desc: "IA controls, data classification schema, and access control model are defined and reviewed by your security team before any feature work begins." },
      { step: "02", title: "Operator research in context", desc: "We observe operators in realistic scenarios, not requirements workshops. The cognitive load analysis shapes every UI decision." },
      { step: "03", title: "Accreditation-ready from sprint one", desc: "Evidence packages, audit logs, and security documentation are generated as part of the build process — not assembled retrospectively before the assessment." },
    ],
    cases: ["vector-defence"],
    next: { slug: "hr", title: "HR" },
  },

  "hr": {
    slug: "hr",
    title: "HR",
    tagline: "Recruitment, onboarding, payroll, and workforce analytics — unified into platforms people actually use.",
    summary: "HR software is uniquely hard to get right: it touches every employee in the organisation, it integrates with more systems than almost anything else in the stack, and the consequences of getting it wrong — a missed payroll run, a failed compliance filing — are immediately visible to the whole company.",
    icon: "users",
    kind: "ops",
    color: "#805AD5",
    bg: "cover--ops",
    stats: [
      { v: "4", l: "HR platforms shipped" },
      { v: "−60%", l: "onboarding time" },
      { v: "99.9%", l: "payroll accuracy" },
      { v: "12 wks", l: "avg. delivery" },
    ],
    problem: {
      title: "HR teams are the most over-tooled and under-supported function in most companies.",
      body: "The average mid-size company runs 8–12 separate HR tools that don't talk to each other. Onboarding is a 20-step checklist managed in spreadsheets. Payroll integration is a monthly fire drill. And the analytics that could make HR strategic — attrition prediction, performance correlation, hiring funnel analysis — are trapped in systems that can't export in a useful format.",
    },
    capabilities: [
      { icon: Icon.users, title: "Recruitment & Onboarding", desc: "ATS integrations, structured interview tooling, offer management, and onboarding workflows that get new hires to productive in days, not weeks." },
      { icon: Icon.chart, title: "Workforce Analytics", desc: "Attrition prediction, performance correlation, headcount planning, and hiring funnel analysis — surfaced in dashboards HR business partners can actually use." },
      { icon: Icon.layers, title: "Systems Integration", desc: "Native connectors for Workday, SAP SuccessFactors, BambooHR, and custom HRIS. We handle the sync, the conflict resolution, and the audit trail." },
      { icon: Icon.zap, title: "Payroll Automation", desc: "Multi-jurisdiction payroll calculation, statutory filing automation, and integration with payroll processors — with a reconciliation layer that catches errors before they reach employees." },
      { icon: Icon.pulse, title: "Performance & Development", desc: "Goal tracking, review cycle tooling, 360 feedback, and learning pathway management — designed to be used by managers, not just HR." },
      { icon: Icon.shield, title: "Compliance & Reporting", desc: "EEO, ADA, GDPR, and local labour law compliance tooling, with automated regulatory reporting and audit-ready data exports." },
    ],
    process: [
      { step: "01", title: "Integration map before anything", desc: "We spend the first week mapping every system that touches an employee record. HR platforms live or die on their integrations — we understand them before we design anything." },
      { step: "02", title: "Manager and employee research", desc: "We interview both the HR team and the employees and managers who will use the system. HR software fails when it's designed for the administrator and ignored by everyone else." },
      { step: "03", title: "Parallel payroll run", desc: "Any change to payroll infrastructure runs in parallel for at least two pay cycles before cutover. We don't take risks with people's pay." },
    ],
    cases: ["northwind-logistics"],
    next: { slug: "operations", title: "Operations" },
  },

  "operations": {
    slug: "operations",
    title: "Operations",
    tagline: "Workflow automation, operations dashboards, and systems integration for teams that move fast and can't afford to break things.",
    summary: "Operations software is the connective tissue of a business — the workflows, dashboards, and integrations that make everything else run. We build it for companies that have grown past their tooling: too many systems, too much manual work, too little visibility.",
    icon: "chart",
    kind: "ops",
    color: "#2B6CB0",
    bg: "cover--ops",
    stats: [
      { v: "6", l: "operations platforms" },
      { v: "$4.2M", l: "cost savings" },
      { v: "−93%", l: "manual work" },
      { v: "10 wks", l: "avg. delivery" },
    ],
    problem: {
      title: "Operations teams are held together by spreadsheets, Slack, and heroic individuals.",
      body: "When a company grows quickly, operations tooling doesn't scale with it. Processes that worked at 50 people break at 500. The result is a patchwork of tools, manual workarounds, and dependencies on specific individuals who know where everything is — until they leave.",
    },
    capabilities: [
      { icon: Icon.zap, title: "Workflow Automation", desc: "Visual workflow authoring, conditional routing, approval chains, and SLA monitoring — designed for operations teams to own, not just IT." },
      { icon: Icon.chart, title: "Operations Dashboards", desc: "Real-time operational metrics, exception queues, and team performance views — built around the decisions your ops team actually makes." },
      { icon: Icon.layers, title: "Systems Integration", desc: "API integrations, webhook routing, and data sync across your tool stack. We specialize in the hard integrations with legacy systems and proprietary APIs." },
      { icon: Icon.cpu, title: "Process Intelligence", desc: "Process mining, bottleneck identification, and simulation modelling to find the highest-leverage automation opportunities in your operations." },
      { icon: Icon.globe, title: "Customer-facing Portals", desc: "Self-service portals that give customers and partners visibility into their orders, cases, and accounts — reducing inbound volume while improving satisfaction." },
      { icon: Icon.pulse, title: "Reporting & Analytics", desc: "Operational reporting, KPI scorecards, and data exports that give leadership the visibility they need without burdening the ops team with manual pulls." },
    ],
    process: [
      { step: "01", title: "Process discovery and prioritisation", desc: "We map your current processes — including the undocumented ones — and identify the 20% of automation opportunities that deliver 80% of the value." },
      { step: "02", title: "Build the quick wins first", desc: "We ship something valuable in week two, every engagement. Operations teams need to see momentum; it builds the trust that sustains the longer work." },
      { step: "03", title: "Measure before and after", desc: "We instrument the current process before we change anything, so we can show the before and after in the same units. Impact is calculated, not estimated." },
    ],
    cases: ["northwind-logistics"],
    next: { slug: "healthcare", title: "Healthcare" },
  },
};

// ─────────────────────────────────────────────────────────────────
// Shared icon helper
// ─────────────────────────────────────────────────────────────────
function ExpertiseIcon({ name, style }) {
  const map = {
    heart: Icon.heart, briefcase: Icon.briefcase, energy: Icon.energy,
    shield: Icon.shield, users: Icon.users, chart: Icon.chart,
    pulse: Icon.pulse, cpu: Icon.cpu, globe: Icon.globe,
    layers: Icon.layers, zap: Icon.zap, monitor: Icon.monitor,
    smile: Icon.smile, code: Icon.code,
  };
  const I = map[name] || Icon.zap;
  return <I style={style} />;
}

// ─────────────────────────────────────────────────────────────────
// Cover pattern background
// ─────────────────────────────────────────────────────────────────
function ExpertiseCoverBg({ kind }) {
  const colors = {
    health:   { bg: "#1A2535", fg: "rgba(255,255,255,0.12)" },
    finance:  { bg: "#0F1E2E", fg: "rgba(255,255,255,0.10)" },
    energy:   { bg: "#1C1A10", fg: "rgba(255,255,255,0.10)" },
    defence:  { bg: "#141A1F", fg: "rgba(255,255,255,0.10)" },
    ops:      { bg: "#0D1F2D", fg: "rgba(255,255,255,0.10)" },
    cyan:     { bg: "#082A35", fg: "rgba(255,255,255,0.12)" },
  };
  const c = colors[kind] || colors.cyan;
  return (
    <div style={{ position: "absolute", inset: 0, background: c.bg, overflow: "hidden" }}>
      <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0 }}>
        <defs>
          <pattern id={"ep-" + kind} width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill={c.fg} opacity="0.12"/>
          </pattern>
        </defs>
        <rect width="800" height="400" fill={"url(#ep-" + kind + ")"}/>
        <circle cx="650" cy="200" r="280" fill={c.fg} opacity="0.08"/>
        <circle cx="150" cy="350" r="200" fill={c.fg} opacity="0.06"/>
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Expertise detail page
// ─────────────────────────────────────────────────────────────────
function ExpertiseDetailPage({ slug = "healthcare" }) {
  const exp = EXPERTISE[slug] || EXPERTISE["healthcare"];
  const nextSlug = exp.next.slug;
  const relatedCases = exp.cases.map(s => ({
    slug: s,
    ...(typeof CASES !== "undefined" && CASES[s] ? CASES[s] : { title: s, kind: exp.kind, meta: [exp.title] }),
  }));

  return (
    <div className="page">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="exp-hero">
        <div className="container exp-hero-inner">
          <div className="exp-hero-text">
            <span className="csd-kicker"><span className="csd-dot"/> Industry expertise</span>
            <h1>{exp.title}</h1>
            <div className="exp-hero-divider"/>
            <p className="exp-hero-sub">{exp.tagline}</p>
            <div className="exp-hero-stats">
              {exp.stats.map((s, i) => (
                <div key={i} className="exp-hero-stat">
                  <div className="exp-stat-v">{s.v}</div>
                  <div className="exp-stat-l">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="exp-hero-cta">
              <a href="#/contact" className="btn btn--primary btn--lg">Start a project <Icon.arrow /></a>
              <a href={"#/expertise/" + nextSlug} className="btn btn--ghost btn--lg">Next: {exp.next.title} <Icon.arrow /></a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container exp-problem">
          <div className="exp-problem-text">
            <span className="csd-eyebrow">The problem</span>
            <h2>{exp.problem.title}</h2>
            <p>{exp.problem.body}</p>
          </div>
          <div className="exp-problem-summary">
            <p className="exp-summary">{exp.summary}</p>
          </div>
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What we build</span>
            <h2>Capabilities in {exp.title}</h2>
          </div>
          <div className="exp-cap-grid">
            {exp.capabilities.map((c, i) => {
              const I = c.icon;
              return (
                <div key={i} className="exp-cap-card reveal" style={{ transitionDelay: (i % 3 * 60) + "ms" }}>
                  <span className="exp-cap-icon"><I /></span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Our process ──────────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">How we work</span>
            <h2>Our approach in {exp.title}</h2>
            <p>Every engagement follows this sequence — adapted to your constraints, not the other way around.</p>
          </div>
          <div className="exp-process">
            {exp.process.map((p, i) => (
              <div key={i} className="exp-process-step reveal" style={{ transitionDelay: (i * 80) + "ms" }}>
                <div className="exp-process-num">{p.step}</div>
                <div className="exp-process-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related case studies ─────────────────────────────── */}
      {relatedCases.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Proof of work</span>
              <h2>Case studies in {exp.title}</h2>
            </div>
            <div className="cs-grid">
              {relatedCases.map((c, i) => (
                <a key={c.slug} href={"#/case-study/" + c.slug} className="cs-card reveal">
                  <CSCover kind={c.kind || exp.kind} label={exp.title} slug={c.slug} />
                  <div className="cs-body">
                    <div className="cs-meta">{c.meta && c.meta.map((m, j) => <span key={j}>{m}</span>)}</div>
                    <h3>{c.title}</h3>
                    <span className="cs-link">Read case study <Icon.arrow /></span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Next expertise ───────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <a href={"#/expertise/" + nextSlug} className="exp-next">
            <div className="exp-next-label">Next expertise area</div>
            <div className="exp-next-row">
              <div className="exp-next-title">{exp.next.title}</div>
              <span className="exp-next-arrow"><Icon.arrow /></span>
            </div>
          </a>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}

window.EXPERTISE = EXPERTISE;
window.ExpertiseDetailPage = ExpertiseDetailPage;
