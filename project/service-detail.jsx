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
    next: { slug: "system-integrations", title: "System Integrations" },
  },

  "system-integrations": {
    slug: "system-integrations",
    title: "System Integrations",
    shortTitle: "System Integrations",
    tagline: "We connect your stack — ERPs, CRMs, data warehouses, APIs, and legacy systems — into one reliable data fabric your whole business can trust.",
    summary: "Most companies don't have a data problem. They have a fragmentation problem. The data exists — it's sitting in a CRM, an ERP, a dozen SaaS tools, and a handful of databases nobody fully understands. We build the integration layer that connects them: reliable, observable, and designed to carry the weight of an AI layer on top.",
    icon: "globe",
    accentColor: "#0E7C90",
    stats: [
      { v: "32+", l: "integration connectors built" },
      { v: "< 60s", l: "event latency target" },
      { v: "99.9%", l: "pipeline uptime SLA" },
      { v: "6 wks", l: "typical delivery" },
    ],
    problem: {
      title: "Your systems don't talk to each other. Every team is working from a different version of the truth.",
      body: "The pattern is always the same: sales works in the CRM, finance works in the ERP, operations works in a spreadsheet, and the weekly sync meeting exists to reconcile all three. Manual exports, CSV imports, and copy-paste workflows that break the moment one field changes. The cost is measured in analyst hours, delayed decisions, and the quiet confidence that nobody really knows the current state of the business.",
    },
    whatWeDeliver: [
      { title: "API design and middleware", desc: "Clean, versioned APIs and middleware layers that translate between your systems — handling authentication, rate limiting, retry logic, and the edge cases every integration eventually hits." },
      { title: "ERP and CRM connectors", desc: "Bi-directional sync between Salesforce, HubSpot, SAP, NetSuite, Dynamics, and your internal systems. We've mapped the data models, handled the edge cases, and built the conflict resolution that generic iPaaS tools skip." },
      { title: "Real-time event pipelines", desc: "Event-driven architectures that propagate changes across your systems in seconds, not overnight batches. Kafka, webhooks, and change-data-capture for the systems that don't publish events natively." },
      { title: "Legacy system integration", desc: "We've integrated SOAP services, mainframe exports, FTP batch files, and systems that predate REST. If it exposes any interface — file, database, API, or message queue — we can build a reliable connector for it." },
      { title: "Data warehouse and BI pipelines", desc: "ELT pipelines from your operational systems into Snowflake, BigQuery, or Redshift — with the transformation layer that makes the data analytically useful, not just present." },
      { title: "Integration observability", desc: "Dashboards, alerting, and audit logs for every pipeline we build. You'll know when a sync failed, which records were affected, and what the system did about it — before your users file a ticket." },
    ],
    techStack: {
      "Messaging & streaming": ["Apache Kafka", "AWS SQS / SNS", "RabbitMQ", "Webhooks"],
      "ELT & pipelines": ["Airbyte", "dbt", "AWS Glue", "custom ELT"],
      "API & middleware": ["Node.js", "Python", "GraphQL", "REST", "gRPC"],
      "Data warehouses": ["Snowflake", "BigQuery", "Redshift", "PostgreSQL"],
    },
    process: [
      { step: "01", title: "Integration audit and architecture", desc: "We map every system, every data flow, and every manual handoff in your current stack. The output is an integration architecture document — what connects to what, in what direction, with what latency and reliability requirement — signed off before we write a line of code." },
      { step: "02", title: "Connector-by-connector delivery", desc: "We build and ship integrations one connector at a time, validating each before moving to the next. You get a working integration in production every two weeks — not a big-bang go-live six months from now." },
      { step: "03", title: "Observability, runbooks, and handoff", desc: "Every pipeline we build ships with a monitoring dashboard, alerting rules, and a runbook your team can follow when something breaks at 2am. We don't consider an integration finished until it's been in production long enough to have failed once — and recovered cleanly." },
    ],
    cases: ["northbank", "northwind-logistics"],
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
    next: { slug: "cloud-agentic-infra", title: "Cloud & Agentic Infrastructure" },
  },

  "cloud-agentic-infra": {
    slug: "cloud-agentic-infra",
    title: "Cloud & Agentic Infrastructure",
    shortTitle: "Cloud & Agentic Infra",
    tagline: "Cloud-native foundations and agentic pipeline orchestration — so your AI products run reliably, scale automatically, and cost what they should.",
    summary: "Building an AI product is only half the job. The teams we work with who ship the fastest aren't just good at models — they're good at infrastructure. They have agentic pipelines that run on a schedule, recover from failure, and route intelligently between tools. They have observability that tells them when a prompt is drifting before a customer notices. We build that layer: cloud infrastructure purpose-built for AI workloads, and the orchestration fabric that makes autonomous systems actually work in production.",
    icon: "cloud",
    accentColor: "#0891B2",
    stats: [
      { v: "< 3 min", l: "target deploy time" },
      { v: "99.9%", l: "uptime SLA" },
      { v: "AWS · GCP · Azure", l: "primary platforms" },
      { v: "< 1 hr", l: "MTTR target" },
    ],
    problem: {
      title: "AI products fail in production for infrastructure reasons, not model reasons.",
      body: "The model works in the notebook. The demo runs fine. But in production, agentic workflows time out, vector search latency spikes unpredictably, and nobody knows which prompt version caused the regression two weeks ago. Most teams are running AI on infrastructure designed for traditional web apps — and wondering why it's unreliable. The fix isn't a better model. It's an infrastructure layer built specifically for the way AI workloads actually behave.",
    },
    whatWeDeliver: [
      { title: "Cloud-native AI deployments", desc: "AWS, GCP, and Azure environments right-sized for AI: GPU instances for fine-tuning, serverless inference endpoints, auto-scaling policies that match token throughput — not just HTTP requests." },
      { title: "Agentic pipeline orchestration", desc: "LangGraph, Temporal, and Prefect workflows that handle multi-step agent execution, tool-calling loops, retries, and state persistence. Built to recover gracefully from LLM failures and partial completions." },
      { title: "Vector database infrastructure", desc: "Qdrant, Weaviate, and pgvector deployments optimised for retrieval latency and embedding freshness. Indexing pipelines, namespace management, and the monitoring that surfaces staleness before users notice." },
      { title: "AI observability and evaluation", desc: "Prompt versioning, output logging, and continuous evaluation against your golden dataset. Datadog for infra metrics, RAGAS and Braintrust for model quality — wired together into a single operational picture." },
      { title: "CI/CD for AI workloads", desc: "Model promotion pipelines that gate on eval scores, not just test coverage. Canary deployments for new prompt versions, automated rollback on quality regression, and the audit trail that satisfies enterprise procurement." },
      { title: "Cost and latency optimisation", desc: "Model routing between providers based on latency and cost targets, caching strategies for repeated queries, and the infrastructure changes that cut your monthly AI bill without degrading output quality." },
    ],
    techStack: {
      "Cloud": ["AWS", "Google Cloud Platform", "Azure", "Cloudflare Workers AI"],
      "Orchestration": ["LangGraph", "Temporal", "Prefect", "Airflow"],
      "Vector & Data": ["Qdrant", "Weaviate", "pgvector", "Pinecone"],
      "Observability": ["Datadog", "RAGAS", "Braintrust", "OpenTelemetry", "Prometheus"],
      "IaC & CI/CD": ["Terraform", "Pulumi", "ArgoCD", "GitHub Actions"],
      "Containers": ["Kubernetes", "Docker", "ECS / Fargate"],
    },
    process: [
      { step: "01", title: "AI infra audit and target design", desc: "We map your current stack — model providers, vector stores, pipeline triggers, and observability gaps. Output: a written architecture decision record with a prioritised list of infra risks and a proposed target state." },
      { step: "02", title: "Foundation and pipeline build", desc: "Cloud environments, agentic orchestration scaffolding, and vector DB setup deployed in two-week phases. Each phase ships something to production — we don't hold back until the full architecture is complete." },
      { step: "03", title: "Observability and handoff", desc: "Dashboards, eval pipelines, and runbooks your team owns. We consider the engagement done when your engineers can deploy a new agent, monitor its quality, and roll it back — without us in the loop." },
    ],
    cases: ["atlas-energy", "octolabs"],
    next: { slug: "product-strategy", title: "Product Strategy & Design" },
  },

  "ai-outstaffing": {
    slug: "ai-outstaffing",
    title: "AI Engineering Outstaffing",
    shortTitle: "AI Outstaffing",
    tagline: "Senior AI engineers embedded in your team — matched in days, not months. Your roadmap, your rituals, our engineers.",
    summary: "The AI talent market is broken for most companies. Senior engineers with production LLM experience are expensive, rare, and not responding to LinkedIn. The teams winning with AI right now aren't the ones with the biggest recruiting budgets — they're the ones who found a smarter way to access the talent. We embed our engineers directly into your team: your Slack, your standups, your sprint cadence. You get the leverage of a specialist without the overhead of a hire.",
    icon: "users",
    accentColor: "#0891B2",
    stats: [
      { v: "72 hrs", l: "to first matched profile" },
      { v: "Senior only", l: "5+ yrs production AI" },
      { v: "30 days", l: "scale up or down" },
      { v: "6 industries", l: "domain coverage" },
    ],
    problem: {
      title: "The AI talent gap is real. Most companies can't close it by hiring.",
      body: "A senior AI engineer with production LLM and MLOps experience commands €150–280k in Europe and expects frontier model access, interesting problems, and a team that moves fast. Most product companies outside the top 20 tech firms can't compete on all three. The result: long hiring cycles, expensive mis-hires, or — most commonly — AI initiatives that stall because the right engineer was never in the room. Outstaffing solves this without the risk, the overhead, or the equity dilution of a permanent hire.",
    },
    whatWeDeliver: [
      { title: "Senior AI & ML engineers", desc: "Engineers with production experience across LLM integration, RAG pipelines, fine-tuning, and MLOps. Matched to your stack, your domain, and the specific problem you're trying to solve — not just keyword-matched." },
      { title: "Full-stack product engineers", desc: "React, React Native, Node.js, and Python engineers who've shipped in AI-native codebases. They work to your sprint cadence, contribute to architecture decisions, and write the kind of code you'd want to inherit." },
      { title: "Embedded technical leads", desc: "A tech lead who runs a sub-team inside your organisation — architecture ownership, code review, mentoring your junior engineers, and bridging the gap between engineering and product. All without the 6-month executive search." },
      { title: "Domain-specialist engineers", desc: "Engineers with verified experience in regulated industries: healthcare (HIPAA, HL7, FHIR), finance (SOC 2, PCI-DSS), defence (security-cleared), and energy (IEC 62443). Rare skills available without the rare search timeline." },
      { title: "AI research engineers", desc: "For teams pushing the frontier: fine-tuning on proprietary data, RLHF pipeline design, evaluation framework architecture, and custom model development. Ex-research backgrounds with production delivery track records." },
      { title: "Flexible engagement models", desc: "Full-time equivalents, part-time specialists, and targeted sprint injections. Monthly rolling contracts. Scale up for a product launch, scale back after — with 30 days' notice and no penalty clauses." },
    ],
    techStack: {
      "AI & ML profiles": ["PyTorch", "Hugging Face", "LangChain", "LlamaIndex", "pgvector"],
      "Product engineering": ["React", "Next.js", "TypeScript", "Node.js", "Python"],
      "Infrastructure": ["AWS", "GCP", "Kubernetes", "Terraform", "Docker"],
      "Evaluation & ops": ["RAGAS", "Braintrust", "Datadog", "OpenTelemetry"],
    },
    process: [
      { step: "01", title: "Requirements and matching — 72 hours", desc: "We scope the role together: skills, seniority, timezone, domain knowledge, and team fit. Within 72 hours we present 2–3 matched profiles with a technical summary and relevant project history attached to each. No generic CVs." },
      { step: "02", title: "Two-week embedded trial", desc: "The engineer joins your team for a trial sprint — real work, your codebase, your processes. If the fit isn't right technically or culturally, we replace at no cost and no delay. Most engagements pass the trial and move straight to ongoing." },
      { step: "03", title: "Ongoing engagement with a dedicated account lead", desc: "Monthly rolling contract. A dedicated account lead on our side handles performance, feedback, and any escalations — so you get the responsiveness of a direct hire without the HR overhead. Scale up or down with 30 days' notice." },
    ],
    cases: ["helix-health", "vector-defence"],
    next: { slug: "ai-product-engineering", title: "AI-Native Product Engineering" },
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
    next: { slug: "ai-outstaffing", title: "AI Engineering Outstaffing" },
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
                  <CSCover kind={c.kind} label={c.industry} slug={c.slug} />
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

      <CTAStrip />
    </div>
  );
}

window.SERVICES_DATA = SERVICES_DATA;
window.ServiceDetailPage = ServiceDetailPage;
