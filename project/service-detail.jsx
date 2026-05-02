/* global React, Icon, CSCover, CTAStrip */
/* Service detail pages — slug-routed */

const { useState: useStateSVC } = React;

// ─────────────────────────────────────────────────────────────────
// Service data
// ─────────────────────────────────────────────────────────────────
const SERVICES_DATA = {
  "ai-product-engineering": {
    slug: "ai-product-engineering",
    title: "AI-Native Product Engineering",
    shortTitle: "AI Product Engineering",
    tagline: "We build AI-native web and mobile products from the ground up — not retrofits, not wrappers. Products engineered to compound in value as your data grows.",
    summary: "Most teams are still building products the old way and patching AI on top. We start with AI as a core capability — the data layer, the inference loop, the feedback cycle — and build the interface and backend around it. The result ships faster, scales cleaner, and improves with every user interaction.",
    icon: "code",
    accentColor: "#06B6D4",
    stats: [
      { v: "50+", l: "AI-native products shipped" },
      { v: "6 wks", l: "to first production deploy" },
      { v: "Web + Mobile", l: "full-stack delivery" },
      { v: "HIPAA · SOC 2", l: "compliance-ready" },
    ],
    problem: {
      title: "Bolting AI onto a product built without it is expensive. Usually too expensive.",
      body: "The teams that regret their architecture are the ones who built a clean CRUD app first and tried to add intelligence later. The data model doesn't support it. The latency budget is gone. The UX was never designed for async responses. We've inherited enough of these codebases to know that starting with AI in mind costs far less than retrofitting it in — and the products that result are categorically better.",
    },
    whatWeDeliver: [
      { title: "AI-native web applications", desc: "React and Next.js applications with AI workflows embedded in the product experience — real-time suggestions, semantic search, intelligent routing, and dynamic content grounded in your data." },
      { title: "Intelligent mobile apps", desc: "iOS and Android apps with on-device inference, personalisation loops, and smart features that work offline. We've shipped AI-powered apps in healthcare, logistics, and enterprise SaaS." },
      { title: "LLM-first user interfaces", desc: "Chat interfaces, copilots, and AI-driven dashboards designed for the latency and uncertainty of language models. We handle streaming, fallbacks, and confidence displays — not just the happy path." },
      { title: "AI-ready data and API layer", desc: "The backend that makes AI possible: event streaming, vector stores, real-time pipelines, and the API contracts that keep your frontend fast while the model thinks." },
      { title: "Adaptive design systems", desc: "Component libraries designed for dynamic, AI-generated content — variable-length text, streaming responses, skeleton states, and the edge cases that break standard UI patterns." },
      { title: "Legacy integration and migration", desc: "We connect your new AI-native product to the systems that hold your real data — EHRs, ERPs, CRMs, and the internal tools that predate modern APIs. No greenfield silos." },
    ],
    techStack: {
      "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
      "Mobile": ["React Native", "Expo", "Swift", "Kotlin"],
      "AI & LLM": ["Anthropic Claude", "OpenAI GPT-4", "pgvector", "LangChain"],
      "Backend & Data": ["Node.js", "PostgreSQL", "Redis", "Kafka", "Prisma"],
    },
    process: [
      { step: "01", title: "AI capability scoping — before the spec", desc: "We map your product requirements against AI capabilities in week one, before writing a specification. The architecture decisions made early — data model, inference strategy, feedback loops — have a 10× impact on what's possible at month six. We get these right first." },
      { step: "02", title: "Two-week sprints with AI checkpoints", desc: "Every sprint ends with a deployable build you can use. At each sprint review, we evaluate every feature against an AI opportunity. Not everything needs a model — but every feature that benefits from one should have it designed in, not retrofitted." },
      { step: "03", title: "Production hardening and handoff", desc: "The final phase covers prompt management, model versioning, evaluation pipelines, and the observability that tells you when your AI components start to drift. We don't hand off without it — and we don't consider the engagement finished until your team can operate it independently." },
    ],
    cases: ["helix-health", "octolabs"],
    next: { slug: "ai-automation", title: "AI & Process Automation" },
  },

  "ai-automation": {
    slug: "ai-automation",
    title: "AI & Process Automation",
    shortTitle: "AI & Automation",
    tagline: "LLM integrations, custom copilots, and workflow automation — built to compound value over time.",
    summary: "AI is only useful when it changes a workflow someone actually runs. We build AI-powered systems that are grounded in real data, evaluated rigorously, and designed to improve with use — not demos that break the moment a user asks something unexpected.",
    icon: "cpu",
    accentColor: "#7C3AED",
    stats: [
      { v: "47%", l: "avg ticket deflection" },
      { v: "RAG", l: "primary architecture" },
      { v: "GPT-4 + Claude", l: "LLM options" },
      { v: "6 wks", l: "to production copilot" },
    ],
    problem: {
      title: "Most AI projects fail in the gap between demo and production.",
      body: "The demo works because it's curated. Production doesn't work because it's real. Users ask unexpected questions, reference documents the model was never shown, and escalate to a human when the AI gives confidently wrong answers. We build the eval infrastructure, the fallback paths, and the confidence calibration that makes AI actually work in production.",
    },
    whatWeDeliver: [
      { title: "Custom copilots", desc: "LLM-powered assistants grounded in your data — documents, tickets, CRM, knowledge base. Cited answers, not hallucinated ones." },
      { title: "RAG pipelines", desc: "Retrieval-augmented generation that works: chunking strategy, embedding choice, retrieval architecture, and the eval set that proves it." },
      { title: "Workflow automation", desc: "Agents that take scoped, auditable actions — not fully autonomous systems that do whatever they infer you meant." },
      { title: "LLM evaluation", desc: "A production eval framework against a representative prompt set. You get a number, not a vibe, before you ship." },
      { title: "Process mining", desc: "Identify the highest-leverage automation opportunities in your operations before writing any code." },
      { title: "Fine-tuning and RLHF", desc: "When a base model isn't enough — structured fine-tuning on your domain data, with the evaluation to prove it worked." },
    ],
    techStack: {
      "LLM providers": ["OpenAI GPT-4", "Anthropic Claude", "Mistral", "Local models (Ollama)"],
      "RAG & Embeddings": ["LangChain", "LlamaIndex", "pgvector", "Pinecone"],
      "Evaluation": ["RAGAS", "custom eval frameworks", "Braintrust"],
      "Automation": ["n8n", "Temporal", "custom agents"],
    },
    process: [
      { step: "01", title: "Use case scoping and eval design", desc: "We define success before we build anything. What does 'good' look like? How do we measure it? The eval set is the specification." },
      { step: "02", title: "Prototype, evaluate, iterate", desc: "Two-week cycles: build a narrow version, run it against the eval set, measure, and iterate. We show you the numbers at every review." },
      { step: "03", title: "Production hardening", desc: "Confidence thresholds, fallback paths, audit logging, and the monitoring that tells you when the model is drifting. We don't ship without it." },
    ],
    cases: ["octolabs"],
    next: { slug: "cloud-devops", title: "Cloud Infrastructure & DevOps" },
  },

  "cloud-devops": {
    slug: "cloud-devops",
    title: "Cloud Infrastructure & DevOps",
    shortTitle: "Cloud & DevOps",
    tagline: "Scalable AWS / GCP architectures, CI/CD pipelines, and the observability that keeps you sleeping at night.",
    summary: "Infrastructure is where product quality is won or lost. We build the platform layer that makes your application fast, resilient, and operable — and we instrument it well enough that your team can reason about it at 2am without calling us.",
    icon: "cloud",
    accentColor: "#0891B2",
    stats: [
      { v: "3 min", l: "target deploy time" },
      { v: "99.9%", l: "uptime SLA" },
      { v: "AWS + GCP", l: "primary platforms" },
      { v: "< 1 hr", l: "MTTR target" },
    ],
    problem: {
      title: "Most teams are running infrastructure that grew faster than it was designed.",
      body: "The pattern is consistent: a startup deploys on a single EC2 instance, then adds RDS, then a load balancer, then a cache — each addition made under pressure, without a coherent plan. The result is an architecture nobody fully understands, with enough tribal knowledge concentrated in one person that every holiday is a risk event.",
    },
    whatWeDeliver: [
      { title: "Cloud architecture", desc: "Designed for your actual load profile — not a copy of what Netflix does. We right-size, document, and build to be handed off." },
      { title: "CI/CD pipelines", desc: "From commit to production in minutes, not hours. Automated testing, environment promotion, and rollback that actually works." },
      { title: "Container orchestration", desc: "Kubernetes for teams that need it, ECS for teams that don't. We help you choose the right level of complexity." },
      { title: "Observability", desc: "Metrics, logs, traces, and the dashboards and alerts that surface what matters. Built around your runbooks, not generic templates." },
      { title: "Security and compliance", desc: "IAM, VPCs, secrets management, SOC 2 evidence collection, and the audit tooling that satisfies your customers' security questionnaires." },
      { title: "Cost optimisation", desc: "We audit your cloud bill, identify the waste, and implement the savings — reserved instances, rightsizing, architecture changes." },
    ],
    techStack: {
      "Cloud": ["AWS", "Google Cloud Platform", "Cloudflare"],
      "Containers": ["Docker", "Kubernetes", "ECS / Fargate"],
      "IaC": ["Terraform", "Pulumi", "CDK"],
      "Observability": ["Datadog", "Grafana + Prometheus", "OpenTelemetry"],
    },
    process: [
      { step: "01", title: "Architecture review and design", desc: "We map your current state, identify the risks and bottlenecks, and design the target architecture. You get a written decision record, not a verbal summary." },
      { step: "02", title: "Incremental migration", desc: "We migrate in phases, never in a single cutover. Each phase is validated before we proceed, with automated rollback if metrics degrade." },
      { step: "03", title: "Runbooks and knowledge transfer", desc: "Every system we build comes with runbooks your team can use without us. We consider the engagement finished when your on-call engineer can handle a 2am incident independently." },
    ],
    cases: ["atlas-energy", "northwind-logistics"],
    next: { slug: "product-strategy", title: "Product Strategy & Design" },
  },

  "product-strategy": {
    slug: "product-strategy",
    title: "Product Strategy & Design",
    shortTitle: "Strategy & Design",
    tagline: "From discovery to design system — building products that resonate with users and hold up under engineering.",
    summary: "Product strategy is the work that makes everything else less expensive. When the discovery is done right, the design emerges from it. When the design is done right, the engineering is faster. We've shipped enough products to know that the hours invested in strategy before a line of code is written pay back many times over.",
    icon: "layers",
    accentColor: "#059669",
    stats: [
      { v: "Discovery", l: "week 1 deliverable" },
      { v: "WCAG AA", l: "accessibility standard" },
      { v: "Figma", l: "design platform" },
      { v: "2 wks", l: "prototype to user test" },
    ],
    problem: {
      title: "Most products are built before the problem is understood.",
      body: "Teams jump to solutions because solutions feel like progress. The discovery phase — understanding users, mapping their actual workflows, identifying the assumptions baked into the brief — feels slow. It isn't. The cost of building the wrong thing is always higher than the cost of taking an extra week to understand what to build.",
    },
    whatWeDeliver: [
      { title: "Product discovery", desc: "User research, stakeholder interviews, assumption mapping, and a product strategy document that makes the tradeoffs explicit." },
      { title: "Information architecture", desc: "Sitemaps, user flows, and navigation models that match how your users think about their work — not how the engineering team models the data." },
      { title: "Wireframes and prototypes", desc: "From rough flows to interactive prototypes, tested with real users before any high-fidelity design work begins." },
      { title: "High-fidelity design", desc: "Pixel-precise Figma files, component specs, and design tokens — the artifacts your engineering team can build from without interpretation." },
      { title: "Design systems", desc: "A component library in Figma and code, documented and maintained, that makes every new screen faster and more consistent." },
      { title: "Design QA", desc: "We stay in the loop during engineering to catch deviations before they ship, not after. Design QA is part of our delivery, not an optional extra." },
    ],
    techStack: {
      "Design": ["Figma", "FigJam", "Lottie / Rive"],
      "Research": ["Maze", "UserTesting", "Hotjar"],
      "Handoff": ["Storybook", "design tokens (Style Dictionary)", "Zeroheight"],
      "Accessibility": ["axe DevTools", "VoiceOver", "NVDA"],
    },
    process: [
      { step: "01", title: "Discovery and research", desc: "User interviews, competitive analysis, and a structured assumption map. Output: a strategy document you can use to make decisions, not just describe the project." },
      { step: "02", title: "Wireframe and test", desc: "Low-fidelity flows and prototypes, tested with 5–8 users. We run the tests, synthesize the findings, and iterate — all before high-fidelity design begins." },
      { step: "03", title: "High-fidelity and handoff", desc: "Figma files with full component specs, design tokens, and interaction annotations. Handed off in a format your engineers can build from, not interpret." },
    ],
    cases: ["helix-health", "octolabs"],
    next: { slug: "ai-product-engineering", title: "AI-Native Product Engineering" },
  },
};

// ─────────────────────────────────────────────────────────────────
// Tech stack display
// ─────────────────────────────────────────────────────────────────
function TechStackGrid({ stack }) {
  return (
    <div className="svc-stack-grid">
      {Object.entries(stack).map(([category, items]) => (
        <div key={category} className="svc-stack-col">
          <div className="svc-stack-category">{category}</div>
          <div className="svc-stack-items">
            {items.map((item, i) => (
              <span key={i} className="svc-stack-tag">{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Service detail page
// ─────────────────────────────────────────────────────────────────
function ServiceDetailPage({ slug = "ai-product-engineering" }) {
  const svc = SERVICES_DATA[slug] || SERVICES_DATA["ai-product-engineering"];
  const iconMap = { code: Icon.code, cpu: Icon.cpu, cloud: Icon.cloud, layers: Icon.layers };
  const SvcIcon = iconMap[svc.icon] || Icon.code;
  const relatedCases = svc.cases.map(s => (typeof CASES !== "undefined" && CASES[s]) ? CASES[s] : null).filter(Boolean);

  return (
    <div className="page">

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="svc-hero">
        <div className="svc-hero-grid-bg" aria-hidden="true"/>
        <div className="svc-hero-glow" style={{ "--glow": svc.accentColor }} aria-hidden="true"/>
        <div className="container svc-hero-inner">
          <div className="svc-hero-text">
            <div className="svc-hero-icon"><SvcIcon /></div>
            <span className="csd-kicker"><span className="csd-dot"/> Service offering</span>
            <h1>{svc.title}</h1>
            <div className="exp-hero-divider"/>
            <p className="svc-hero-sub">{svc.tagline}</p>
          </div>
          <div className="svc-hero-stats">
            {svc.stats.map((s, i) => (
              <div key={i} className="svc-stat">
                <div className="svc-stat-v">{s.v}</div>
                <div className="svc-stat-l">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="svc-hero-cta">
            <a href="#/contact" className="btn btn--cyan btn--lg">Start a project <Icon.arrow /></a>
            <a href={"#/service/" + svc.next.slug} className="btn btn--ghost btn--lg">Next: {svc.next.title} <Icon.arrow /></a>
          </div>
        </div>
      </section>

      {/* ── Problem ────────────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container svc-problem">
          <div className="svc-problem-text">
            <span className="csd-eyebrow">The problem we solve</span>
            <h2>{svc.problem.title}</h2>
            <p>{svc.problem.body}</p>
          </div>
          <div className="svc-summary-block">
            <p className="exp-summary">{svc.summary}</p>
          </div>
        </div>
      </section>

      {/* ── What we deliver ────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What we deliver</span>
            <h2>Capabilities</h2>
          </div>
          <div className="svc-deliver-grid">
            {svc.whatWeDeliver.map((d, i) => (
              <div key={i} className="svc-deliver-card reveal" style={{ transitionDelay: (i % 3 * 60) + "ms" }}>
                <div className="svc-deliver-num">0{i + 1}</div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech stack ─────────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head reveal section-head--left" style={{ maxWidth: 720, margin: 0, marginBottom: 40 }}>
            <span className="eyebrow">Tech stack</span>
            <h2>How we build it</h2>
            <p>Tools and technologies we use in this practice — chosen for fit, not familiarity.</p>
          </div>
          <TechStackGrid stack={svc.techStack} />
        </div>
      </section>

      {/* ── Process ────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">How we work</span>
            <h2>Our process</h2>
            <p>Consistent across every engagement — adapted to your constraints, not the other way around.</p>
          </div>
          <div className="exp-process">
            {svc.process.map((p, i) => (
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

      {/* ── Related case studies ───────────────────────────── */}
      {relatedCases.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Proof of work</span>
              <h2>Projects using this service</h2>
            </div>
            <div className="cs-grid">
              {relatedCases.map((c) => (
                <a key={c.slug} href={"#/case-study/" + c.slug} className="cs-card reveal">
                  <CSCover kind={c.kind} label={c.industry} />
                  <div className="cs-body">
                    <div className="cs-meta">{c.meta && c.meta.map((m, j) => <span key={j}>{m}</span>)}</div>
                    <h3>{c.title}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--cyan-600)", fontWeight: 600, fontSize: 14 }}>
                      <Icon.zap style={{ width: 16, height: 16 }} /> {c.results && c.results[0] ? c.results[0].v + " " + c.results[0].l : "See case study"}
                    </div>
                    <span className="cs-link">Read case study <Icon.arrow /></span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Next service ───────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <a href={"#/service/" + svc.next.slug} className="exp-next">
            <div className="exp-next-label">Next service</div>
            <div className="exp-next-row">
              <div className="exp-next-title">{svc.next.title}</div>
              <span className="exp-next-arrow"><Icon.arrow /></span>
            </div>
          </a>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}

window.SERVICES_DATA = SERVICES_DATA;
window.ServiceDetailPage = ServiceDetailPage;
