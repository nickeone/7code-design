/* global React, Icon, CTAStrip */
/* Blog listing + single post detail, slug-routed */

const { useState: useStateBL, useEffect: useEffectBL } = React;

// ─────────────────────────────────────────────────────────────────
// SEO helpers — keep <title>, meta description and Article JSON-LD
// in sync with the active blog route. We mutate the document head
// directly because the site is a SPA without a routing-aware head
// manager. The injected <script type="application/ld+json"> tag is
// tagged with data-blog-jsonld so we can clean it up on unmount.
// ─────────────────────────────────────────────────────────────────
const SITE_ORIGIN_BL = "https://7code-design.vercel.app";

function setMeta(name, content, attr = "name") {
  if (typeof document === "undefined") return;
  let el = document.head.querySelector('meta[' + attr + '="' + name + '"]');
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  if (typeof document === "undefined") return;
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setArticleJsonLd(post) {
  if (typeof document === "undefined") return;
  const existing = document.head.querySelector('script[data-blog-jsonld="1"]');
  if (existing) existing.remove();
  if (!post) return;
  const url = SITE_ORIGIN_BL + "/blog/" + post.slug;
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.subtitle,
    "datePublished": post.date,
    "url": url,
    "articleSection": post.cat,
    "author": { "@type": "Person", "name": post.author.name, "jobTitle": post.author.role },
    "publisher": {
      "@type": "Organization",
      "name": "7Code",
      "url": SITE_ORIGIN_BL,
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": url },
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-blog-jsonld", "1");
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
}

// ─────────────────────────────────────────────────────────────────
// Blog post data
// ─────────────────────────────────────────────────────────────────
const POSTS = [
  {
    slug: "ai-discovery-mission-de-risk-ai-products",
    cat: "Strategy",
    title: "The AI Discovery Mission: how we de-risk AI products in four weeks",
    subtitle: "A four-week structured discovery is how we turn a vague AI ambition into a build-ready plan — vision, evals, architecture, and a defensible budget.",
    date: "Apr 28, 2026",
    read: "9 min read",
    author: { name: "Nicu Mardari", role: "Co-founder & CEO", initial: "N", photo: "project/uploads/authors/nicu-mardari.jpg" },
    cover: "cyan",
    illus: "blueprint",
    featured: true,
    body: [
      { type: "lead", text: "Most AI projects fail in the first 30 days — not in production. They fail because the team starts shipping before anyone agreed on what success looks like, what data is available, and which model behaviours are non-negotiable. Our AI Discovery Mission is a four-week, fixed-scope engagement that turns a vague AI ambition into a build-ready plan: a product vision, an evaluation harness, a technical architecture, and a defensible budget." },
      { type: "h2", text: "What an AI Discovery Mission delivers" },
      { type: "p", text: "An AI Discovery Mission is a structured four-week engagement that produces the artefacts a founder, CTO, or board needs to commit capital to an AI build with confidence. Unlike a generic software discovery, it treats model behaviour, data, and evaluations as first-class deliverables — not afterthoughts." },
      { type: "bullets", items: ["Week 1 — Product vision: user jobs, AI capability map, success metrics, and the LLM-vs-deterministic decision tree", "Week 2 — Backlog & wireframes: prompt-aware UX flows, agent boundaries, and a prioritised feature list", "Week 3 — Technical architecture: model selection, retrieval design, eval harness, and the integration surface with existing systems", "Week 4 — Plan & estimates: a sprint plan, an evals-driven definition of done, and a transparent budget with risk-weighted ranges"] },
      { type: "h2", text: "Why discovery looks different for AI products" },
      { type: "p", text: "Traditional discovery assumes deterministic software: defined inputs, defined outputs, predictable cost per call. AI products break every one of those assumptions. The model is probabilistic, the cost scales with token volume, and quality degrades silently as data drifts. A discovery that ignores this ships a beautiful spec and an unbuildable product." },
      { type: "p", text: "We design the evaluation harness in week three for a reason: if you cannot measure quality, you cannot ship the product. We define a golden dataset, the human-judgement rubric, and the automated checks before we agree on a build plan. This is the single biggest lever for de-risking an AI roadmap." },
      { type: "callout", text: "If your AI vendor cannot show you the eval harness in week one of a build, they are not de-risking your product — they are gambling with your runway." },
      { type: "h2", text: "When to invest in an AI Discovery" },
      { type: "p", text: "Run an AI Discovery Mission when the answer to any of these is unclear: which user jobs the model is allowed to take over, which data the model is allowed to see, what 'good enough' looks like at launch, or how the AI feature interacts with the rest of your stack. Two to four weeks of structured discovery typically saves three to six months of wasted build time." },
      { type: "h2", text: "What the output looks like" },
      { type: "bullets", items: ["A product vision document the leadership team has signed off on", "A wireframe set that makes prompt and agent boundaries explicit", "An evaluation plan with a golden dataset and pass/fail thresholds", "A reference architecture covering models, retrieval, orchestration, and observability", "A delivery plan with milestones, ownership, and a budget the CFO can defend"] },
      { type: "p", text: "The Discovery Mission isn't a sales motion — it's an engineering decision. Walk away with a build-ready plan, even if you decide not to build with us." },
    ],
  },
  {
    slug: "ship-ai-mvp-six-weeks",
    cat: "Strategy",
    title: "Why we ship AI MVPs in six weeks, not six months",
    subtitle: "Validated learning beats elaborate roadmaps. The cadence we use to put an AI product in front of real users — and real evals — in six weeks.",
    date: "Apr 16, 2026",
    read: "7 min read",
    author: { name: "Cindy-Cristina Daraban", role: "Business Development Manager", initial: "C", photo: "project/uploads/authors/cindy-daraban.jpg" },
    cover: "energy",
    illus: "launch",
    body: [
      { type: "lead", text: "An AI MVP is the smallest version of an AI product that produces measurable user value and produces measurable evals. We ship most of ours in six weeks. Not because we cut corners — because we're disciplined about what an MVP is for: validated learning, not feature completeness." },
      { type: "h2", text: "What an AI MVP actually is" },
      { type: "p", text: "An AI Minimum Viable Product is a working AI feature that real users can use to do a real job, paired with a working evaluation harness that tells you whether the model is doing that job well. If either half is missing, you don't have an MVP — you have a demo." },
      { type: "h2", text: "The six-week cadence" },
      { type: "bullets", items: ["Week 1 — Lock the user job, the eval rubric, and the golden dataset", "Weeks 2–3 — Build the thinnest possible end-to-end flow with a frontier model and instrumented retrieval", "Week 4 — Run evals, fix the top three failure modes, hold a real user session", "Week 5 — Harden the deployment, add observability, integrate auth and rate limits", "Week 6 — Soft launch to a closed cohort, measure, decide what to keep building"] },
      { type: "h2", text: "Why six weeks beats six months" },
      { type: "p", text: "Every additional week before users touch the product compounds risk. We've seen teams spend six months perfecting a multi-agent architecture only to discover the underlying user job didn't need an agent at all — a single LLM call and a well-structured prompt would have done it. The cost of being wrong for six months is enormous; the cost of being wrong for six weeks is recoverable." },
      { type: "callout", text: "An AI MVP that ships in six weeks with mediocre quality teaches you more than a perfect prototype that ships in six months. Real users surface failure modes no eval set will catch on its own." },
      { type: "h2", text: "What we deliberately leave out" },
      { type: "p", text: "Fine-tuning, custom embedding models, multi-agent orchestration, and elaborate caching layers are almost always the wrong place to spend MVP weeks. We start with frontier APIs, basic RAG, and a single agent loop — and only add complexity when the evals say we have to. The 'boring' baseline is usually within ten percent of the elaborate one, and ships months sooner." },
      { type: "h2", text: "The benefits compound" },
      { type: "bullets", items: ["Cost efficiency — six weeks of pod time is a recoverable bet, six months is not", "Faster time to revenue — paying users surface monetisation signal evals never will", "Flexibility — pivoting from a six-week MVP costs days; pivoting from a six-month build costs careers", "Validated learning — every user session sharpens the eval set and the prompt strategy"] },
      { type: "p", text: "The goal of an AI MVP isn't to ship the AI product. It's to learn whether you should." },
    ],
  },
  {
    slug: "ai-engineering-pricing-fixed-vs-time-materials",
    cat: "Strategy",
    title: "Fixed price vs. T&M for AI engineering: how to budget for LLM work",
    subtitle: "AI projects break the assumptions behind fixed-price contracts. Here's a pricing framework that aligns incentives between AI vendors and clients.",
    date: "Apr 02, 2026",
    read: "8 min read",
    author: { name: "Nicu Mardari", role: "Co-founder & CEO", initial: "N", photo: "project/uploads/authors/nicu-mardari.jpg" },
    cover: "finance",
    illus: "blueprint",
    body: [
      { type: "lead", text: "The fixed price vs. time and materials debate is older than software itself. AI engineering forces an honest answer to it. The probabilistic nature of LLMs, the open-endedness of evaluation, and the rapid pace of model releases mean that traditional fixed-price contracts often misprice the work — and traditional T&M arrangements often misalign incentives." },
      { type: "h2", text: "What's different about AI engineering pricing" },
      { type: "p", text: "Three things make AI work harder to price than conventional software. First, the unit of progress is an evaluation pass, not a feature ticket. Second, the underlying tools change every quarter — a frontier model release can collapse a fine-tuning roadmap overnight. Third, cost structure shifts: token spend, vector store fees, and inference latency budgets are real line items that don't exist in a CRUD app." },
      { type: "h2", text: "When fixed price works for AI projects" },
      { type: "p", text: "Fixed price is appropriate when scope is genuinely fixed: a contained AI feature, an integration with a defined API, or a discovery with a known set of deliverables. Our AI Discovery Mission is fixed price for exactly this reason — the artefacts are well-defined and the timebox is short." },
      { type: "bullets", items: ["A scoped integration: 'Add LLM-powered search to the help centre'", "A discovery: 'Four-week AI discovery, eight named deliverables'", "A migration: 'Move classification from rules to model X with a defined eval pass-rate'", "A capped spike: 'Two-week feasibility build, fixed budget, single deliverable'"] },
      { type: "h2", text: "When T&M is the honest answer" },
      { type: "p", text: "T&M is the right model for open-ended product work, multi-agent systems, and long-running platform builds. The reality is that nobody can fix-price 'build us an agentic copilot' without padding it 2–3x to absorb risk — which neither side wants." },
      { type: "callout", text: "If a vendor offers you a fixed price for an unscoped agentic build, two things are true: they have priced in the risk, and they will protect that price by saying no to the changes you need." },
      { type: "h2", text: "The hybrid we recommend" },
      { type: "p", text: "We default to a hybrid: fixed-price discovery, fixed-price MVP with a defined eval pass-rate, then T&M with a monthly cap for the iteration phase. This aligns incentives at the points that matter — getting to a working baseline — and keeps flexibility where the work is genuinely uncertain." },
      { type: "bullets", items: ["Phase 1: Fixed-price discovery (4 weeks)", "Phase 2: Fixed-price MVP keyed to an eval pass-rate (6–8 weeks)", "Phase 3: T&M with a monthly spend cap and a quarterly review", "Throughout: Transparent token and infra costs, billed at-cost"] },
      { type: "p", text: "The right pricing model is the one that lets the team make the right engineering decisions at every stage. For AI work, that almost always means a hybrid." },
    ],
  },
  {
    slug: "ai-agents-manufacturing-operations",
    cat: "Engineering",
    title: "AI agents in manufacturing: from pilot to production",
    subtitle: "Production-grade AI agents are quietly absorbing the manual coordination tax in factories. Here's the architecture that's actually working.",
    date: "Mar 18, 2026",
    read: "10 min read",
    author: { name: "Igor Mardari", role: "CTO & Co-founder", initial: "I", photo: "project/uploads/authors/igor-mardari.jpg" },
    cover: "ops",
    illus: "gears",
    body: [
      { type: "lead", text: "Manufacturing operations still run on a quiet tax: hours every day spent pushing paper, updating spreadsheets, chasing suppliers, reconciling shop-floor reports. AI agents are absorbing that tax. Not the demo-ware kind — the production kind, with evals, audit trails, and a human in the loop where it matters." },
      { type: "h2", text: "What an AI agent does in a factory" },
      { type: "p", text: "A manufacturing AI agent is a software service that observes the state of operations, decides on a next action against a defined policy, and either executes that action or proposes it for human approval. In practice, that means triaging supplier delay alerts, generating purchase orders against demand signals, reconciling MES and ERP discrepancies, and drafting the operator handover at end of shift." },
      { type: "h2", text: "The architecture that works" },
      { type: "bullets", items: ["A signal layer that ingests events from MES, ERP, IoT sensors, and email — the agent's senses", "A retrieval layer with the SOPs, supplier contracts, and historical incidents — the agent's memory", "A policy layer that defines what the agent may do autonomously vs. propose for approval — the agent's mandate", "A frontier LLM with structured outputs orchestrating the loop — the agent's reasoning", "An eval and audit layer that records every decision with its inputs and rationale — the agent's accountability"] },
      { type: "h2", text: "Why most factory AI pilots stall" },
      { type: "p", text: "Pilots stall when teams treat the agent as a chatbot pasted onto a process. Production agents need integration with the systems of record, deterministic guardrails on financial actions, and an eval set drawn from real operational data — not a demo dataset. Skipping any of those means the agent never earns the trust to leave the pilot environment." },
      { type: "callout", text: "Operators don't trust agents that hallucinate. They trust agents that are right 95 percent of the time and route the other 5 percent to a human with a clear explanation." },
      { type: "h2", text: "Where to start" },
      { type: "p", text: "Start with the most boring high-volume task on the operations team's plate. Supplier follow-ups, work-order reconciliation, and shift-handover summaries are typical first wins. They have clear inputs, clear outputs, frequent occurrences, and meaningful time savings — exactly the conditions an agent needs to prove itself." },
      { type: "h2", text: "What production looks like" },
      { type: "bullets", items: ["A defined eval suite that runs nightly against real factory data", "A policy file that an ops manager — not an engineer — can read", "A human-in-the-loop console for any action above a defined risk threshold", "An audit trail every regulator and internal auditor can read", "A monthly review of the policy and a quarterly review of the model choice"] },
      { type: "p", text: "AI agents in manufacturing aren't a 2030 story. They're a 2026 story for the factories that get the architecture right." },
    ],
  },
  {
    slug: "ai-native-automation-crm-erp-iot",
    cat: "Engineering",
    title: "AI-native automation across CRM, ERP, and IoT",
    subtitle: "What changes when LLMs and agents sit at the centre of your business systems — not bolted on, but architecturally native.",
    date: "Mar 04, 2026",
    read: "8 min read",
    author: { name: "Cindy-Cristina Daraban", role: "Business Development Manager", initial: "C", photo: "project/uploads/authors/cindy-daraban.jpg" },
    cover: "finance",
    illus: "circuit",
    body: [
      { type: "lead", text: "Software automation used to mean writing rules between systems: when a CRM contact updates, sync to the ERP; when an IoT sensor crosses a threshold, raise a ticket. AI-native automation is something else. It treats the LLM as the orchestrator, not as a feature, and rebuilds the integration surface around natural language, structured outputs, and continuous evals." },
      { type: "h2", text: "What 'AI-native' actually means" },
      { type: "p", text: "An AI-native system uses an LLM as a core orchestration component — not as an add-on. Decisions that used to live in business rules engines now live in prompts and evals. Data that used to be transformed by ETL is now retrieved on demand and reasoned over. The architecture changes; the business outcomes change with it." },
      { type: "h2", text: "Three patterns we ship in production" },
      { type: "bullets", items: ["The cross-system summariser — an agent that reads CRM activity, ERP financials, and IoT telemetry to produce a single weekly account health view", "The natural-language workflow trigger — sales reps speak or type a request, and the agent updates the CRM, generates the quote in the ERP, and notifies ops over Slack", "The exception triage agent — IoT sensors flag anomalies, the agent enriches each one with maintenance history and supplier data, and proposes a prioritised action list"] },
      { type: "h2", text: "The integration surface, redesigned" },
      { type: "p", text: "In a rules-based world, every integration is a brittle pipeline. In an AI-native world, the integration is the LLM — given the right tools, retrieval, and structured output schema. The result is fewer pipelines, more flexibility, and a system that adapts to new processes without a rewrite." },
      { type: "callout", text: "The biggest cost in legacy automation isn't the build — it's the maintenance of the rules. AI-native automation collapses that maintenance into prompt and eval changes." },
      { type: "h2", text: "What we don't recommend" },
      { type: "p", text: "We don't recommend rewriting your CRM or ERP. The wins are at the orchestration layer — the agents, the retrieval, the natural-language interfaces — not in the systems of record. Keep the boring databases boring and put the intelligence in the agents that speak to them." },
      { type: "h2", text: "How to start" },
      { type: "p", text: "Pick one cross-system workflow that costs your operators measurable hours every week. Build a thin agent that does just that workflow. Instrument the eval set. Ship in six weeks. Then expand the agent's tool surface, not the agent's count." },
    ],
  },
  {
    slug: "adrenaline-ai-debugger-case-study",
    cat: "Case Study",
    title: "Adrenaline: building an AI debugger on top of OpenAI",
    subtitle: "How we partnered with the Adrenaline team to ship an LLM-powered debugger from MVP to AWS-scale production — in months, not years.",
    date: "Feb 20, 2026",
    read: "9 min read",
    author: { name: "Igor Mardari", role: "CTO & Co-founder", initial: "I", photo: "project/uploads/authors/igor-mardari.jpg" },
    cover: "ink",
    illus: "circuit",
    body: [
      { type: "lead", text: "Adrenaline lets developers chat with their codebase: import a repository, ask a question, get an explanation or a fix. Behind the chat sits an LLM-powered indexing and retrieval system tuned for code. We helped the Adrenaline team build it from MVP through AWS-scale production — and the lessons apply to any AI product that has to reason over large structured corpora." },
      { type: "h2", text: "The brief" },
      { type: "p", text: "Adrenaline came to us with a strong product idea, a working prototype, and the kind of growth pressure that breaks prototypes. They needed three things: an MVP architecture that could survive Product Hunt, an indexing pipeline that scaled to large repositories, and a deployment story that didn't require a platform team to maintain." },
      { type: "h2", text: "What we built" },
      { type: "bullets", items: ["A repository ingestion pipeline that chunks code semantically, not by line count", "A retrieval layer tuned for symbol-aware lookups, not just embedding similarity", "An LLM orchestration layer that routed questions to the right context window strategy", "An AWS deployment with autoscaling, cost guardrails, and per-tenant rate limits", "An eval harness that ran against real bug reports, not synthetic queries"] },
      { type: "h2", text: "The hard part: scaling indexing" },
      { type: "p", text: "Naive embedding-based retrieval works on a 10,000-line repo and falls apart on a 1-million-line one. We invested early in symbol-aware chunking, hierarchical retrieval, and a caching layer keyed to commit hashes. The result was sub-second retrieval on real-world repositories — the difference between a usable product and a science project." },
      { type: "callout", text: "AI products win or lose on retrieval. The model is a commodity; the context you put in front of it is the moat." },
      { type: "h2", text: "What changed in production" },
      { type: "p", text: "Three things we learned only after real users arrived. Repository imports are bursty — autoscaling on GPU-backed services is non-negotiable. Cost-per-query varies wildly by repo size — we added per-tenant token budgets early. Users ask follow-up questions far more than first questions — caching the retrieval, not just the embedding, was the single largest latency win." },
      { type: "h2", text: "The result" },
      { type: "bullets", items: ["MVP shipped to Product Hunt in 8 weeks", "Indexing throughput improved 12× from the prototype baseline", "Per-query cost reduced by 60% via retrieval caching", "Zero-downtime deploys on AWS, with cost guardrails approved by finance"] },
      { type: "p", text: "Adrenaline is one of the cleanest examples we've shipped of an AI product earning its place in a developer's daily workflow. The architecture choices we made in the first six weeks are the ones still paying off today." },
    ],
  },
  {
    slug: "senior-engineers-ai-leverage",
    cat: "Engineering",
    title: "Why senior engineers with AI beat juniors with copilots",
    subtitle: "AI copilots compress the productivity gap, but they amplify the architectural one. Why we lean on senior-led pods for AI work.",
    date: "Feb 06, 2026",
    read: "6 min read",
    author: { name: "Cindy-Cristina Daraban", role: "Business Development Manager", initial: "C", photo: "project/uploads/authors/cindy-daraban.jpg" },
    cover: "ink",
    illus: "blueprint",
    body: [
      { type: "lead", text: "AI copilots have changed the daily experience of writing software more than any tool since the IDE. The temptation is to conclude that team composition matters less. The opposite is true. Copilots compress the productivity gap between juniors and seniors on small tasks — and amplify it on architectural ones." },
      { type: "h2", text: "What copilots are good at" },
      { type: "p", text: "Modern AI copilots are excellent at pattern-matching: writing the function you mostly know how to write, generating boilerplate, drafting tests against a clear spec, and translating a small problem from one language to another. For a junior engineer working on bounded tasks, the productivity gain is real and meaningful." },
      { type: "h2", text: "Where copilots fail loudly" },
      { type: "p", text: "Copilots fail at the work that distinguishes senior engineers: choosing the right abstraction, designing the data model so the system stays simple a year from now, knowing when to throw away the LLM-suggested code because it solves the wrong problem. They also fail at AI-specific work — eval design, prompt strategy, retrieval architecture — where the right answer is rarely the most popular one in the training data." },
      { type: "callout", text: "A junior with a copilot ships features faster. A senior with a copilot ships better systems. Only one of those compounds over the life of a product." },
      { type: "h2", text: "How we staff AI work" },
      { type: "bullets", items: ["A senior engineer leads architecture, eval design, and retrieval strategy on every AI project", "Mid and junior engineers own bounded features, with copilots, under code review", "Mentorship is part of the loop — pull request reviews are where AI judgement gets transferred", "We refuse to staff AI projects with junior-only pods — copilot or not"] },
      { type: "h2", text: "Why this matters now" },
      { type: "p", text: "The cost of an AI architectural mistake compounds faster than a traditional one. A bad retrieval design wastes tokens, a bad agent loop produces silent failures, a bad eval strategy ships a feature nobody can be confident in. These are senior-engineer problems — copilots make them harder to spot, not easier." },
      { type: "h2", text: "The team shape we recommend" },
      { type: "p", text: "Our default AI pod is one senior engineer, one mid-level engineer, one product engineer, and a part-time tech lead — all working with AI tooling. The copilots make every individual faster. The seniors make the system right." },
    ],
  },
  {
    slug: "ai-project-handover",
    cat: "Strategy",
    title: "The art of an AI project handover",
    subtitle: "Handing over an AI product isn't just code and docs. It's evals, prompt versioning, and the operational runbooks that keep models trustworthy.",
    date: "Jan 22, 2026",
    read: "7 min read",
    author: { name: "Nicu Mardari", role: "Co-founder & CEO", initial: "N", photo: "project/uploads/authors/nicu-mardari.jpg" },
    cover: "cyan",
    illus: "blueprint",
    body: [
      { type: "lead", text: "A clean software handover is hard. A clean AI handover is harder, because the artefacts that keep the system trustworthy don't fit in a Git repo. They're evals, prompt versions, golden datasets, model cards, runbooks for drift, and the institutional memory of which failure modes you've already seen. Skip any of those, and the next team inherits a black box." },
      { type: "h2", text: "What a real AI handover includes" },
      { type: "bullets", items: ["The codebase, with documented entry points and architectural decision records", "The full eval harness — golden dataset, scoring rubric, and historical runs", "The prompt repository, versioned and tagged with the eval pass-rate at each version", "Model cards documenting the chosen models, their cost, and their known weaknesses", "Operational runbooks for drift detection, incident response, and quality regressions", "A 30/60/90-day calendar of handover sessions, not a single PDF"] },
      { type: "h2", text: "Why static documentation fails" },
      { type: "p", text: "Documentation describes what the system was. AI systems live and breathe — models are deprecated, prompts are tuned, datasets shift. A handover document written once and never updated is misinformation by month three. We treat handover as a process: a calendar of sessions, a shared eval dashboard, and a clear escalation path for the first quarter of the new team's ownership." },
      { type: "callout", text: "An AI handover that ends at the last commit isn't a handover — it's an abandonment. The first 90 days of new-team ownership decide whether the product survives." },
      { type: "h2", text: "The client-centric handover" },
      { type: "p", text: "We design the handover for the client team that takes over. That means matching the format of their docs, integrating with their CI, and structuring runbooks for their on-call rotation. Generic templates make the handover easier for the vendor and harder for the client. We optimise for the client." },
      { type: "h2", text: "What the new team needs in the first month" },
      { type: "bullets", items: ["A working eval suite they can run locally on day one", "A roster of the top 10 known failure modes and the prompts that mitigate them", "A direct line to the original team for 90 days, with a defined SLA", "A spreadsheet of every cost line item — token spend, vector store, infra"] },
      { type: "p", text: "The handover is a feature of the project, not a milestone. Treating it that way is what separates a vendor from a partner." },
    ],
  },
  {
    slug: "running-ai-engineering-pods-across-continents",
    cat: "Operations",
    title: "Running AI engineering pods across continents",
    subtitle: "How we operate distributed AI teams without losing the tight feedback loops that LLM work demands.",
    date: "Jan 08, 2026",
    read: "7 min read",
    author: { name: "Cindy-Cristina Daraban", role: "Business Development Manager", initial: "C", photo: "project/uploads/authors/cindy-daraban.jpg" },
    cover: "ops",
    illus: "globe",
    body: [
      { type: "lead", text: "Remote engineering is the default. Distributed AI engineering is harder than distributed CRUD engineering, because AI work depends on tight feedback loops between prompt, eval, and review — exactly the loops time zones break. The teams that get this right treat distributed AI as an operational design problem, not a culture slogan." },
      { type: "h2", text: "What's different about AI work in distributed teams" },
      { type: "p", text: "In a deterministic codebase, an asynchronous review is fine — the diff says what it says. In an AI codebase, the diff is a prompt or an eval threshold, and the review needs to look at sample outputs, eval deltas, and the cost implications of the change. That requires real-time discussion, not just an async PR comment." },
      { type: "h2", text: "Our operating system for distributed AI pods" },
      { type: "bullets", items: ["Four-hour overlap windows, non-negotiable, between every pod member", "An eval dashboard everyone can read at any time, with deltas highlighted", "A weekly 'prompt review' — like a code review, but for prompts and eval rubrics", "A shared incident channel where every quality regression becomes a public learning", "Quarterly in-person weeks per pod — model choice and architecture decisions are made face-to-face"] },
      { type: "h2", text: "The communication tax, paid up front" },
      { type: "p", text: "We over-document the things that matter — eval thresholds, prompt versions, decision logs — and under-document the things that don't. The tax of writing things down once is far smaller than the tax of mis-aligning across time zones for weeks." },
      { type: "callout", text: "If your distributed team can't say in 30 seconds why the eval pass-rate moved last week, the time zones are not your problem — your operating system is." },
      { type: "h2", text: "How we hire for it" },
      { type: "p", text: "Distributed AI work rewards engineers who can write clearly, reason about probabilistic systems, and operate without constant supervision. Those are not the same skills that win whiteboard interviews. We hire for written communication, eval literacy, and judgement under uncertainty — in that order." },
      { type: "h2", text: "What we don't compromise on" },
      { type: "p", text: "We don't compromise on the four-hour overlap, the in-person quarter, or the weekly prompt review. Cut any of them and the feedback loops break. Once they break, the eval pass-rate slides quietly for weeks before anyone notices." },
    ],
  },
  {
    slug: "switch-ai-engineering-partner",
    cat: "Strategy",
    title: "When to switch your AI engineering partner",
    subtitle: "Five honest signals that your current vendor is holding back your AI roadmap — and how to make a clean transition.",
    date: "Dec 18, 2025",
    read: "8 min read",
    author: { name: "Nicu Mardari", role: "Co-founder & CEO", initial: "N", photo: "project/uploads/authors/nicu-mardari.jpg" },
    cover: "energy",
    illus: "launch",
    body: [
      { type: "lead", text: "Switching engineering partners is expensive, and most teams put it off six months too long. With AI projects, that delay is more costly: model choices age out, eval debt compounds, and the team that built the system loses interest in the team that needs to inherit it. Here are the signals worth acting on, and the playbook for switching cleanly." },
      { type: "h2", text: "Five signals it's time to switch" },
      { type: "bullets", items: ["You can't see an eval dashboard — and your vendor can't produce one quickly", "Cost per query has crept up and nobody can explain why", "Every change request becomes a 'big build' — small iteration is gone", "Your vendor still recommends fine-tuning for problems frontier models now solve out of the box", "The team that built the product is no longer the team working on it"] },
      { type: "h2", text: "Why AI vendor lock-in is different" },
      { type: "p", text: "In a traditional codebase, lock-in is the code itself. In an AI product, lock-in is the eval dataset, the prompt history, and the institutional knowledge of which model versions behave well. A vendor that hasn't invested in those artefacts has — intentionally or not — built a product the client cannot move." },
      { type: "callout", text: "If your vendor can't hand you a runnable eval suite this week, you don't own your AI product. They do." },
      { type: "h2", text: "The transition playbook" },
      { type: "p", text: "We've inherited enough handovers to know what works. Phase the switch: a 4-week parallel discovery, an 8-week stabilisation phase where the new team owns evals while the old team owns deploys, then a clean cut. Skipping the parallel phase is the most common mistake — it's where the new team builds confidence in the system." },
      { type: "h2", text: "What you need to ask of the new partner" },
      { type: "bullets", items: ["Show me the eval harness you'd build for this product on day one", "Show me a prompt diff and explain how you'd review it in PR", "Tell me which of my fine-tunes you'd retire and which you'd keep — and why", "Walk me through your handover plan for the moment I leave you", "Show me a customer you handed over to a third party — and how that went"] },
      { type: "h2", text: "What a clean transition looks like" },
      { type: "p", text: "A clean transition is one where the eval pass-rate doesn't dip, the cost-per-query doesn't spike, and the team you replace remains professional throughout. We've been on both sides of this — and we know the second one is the harder test of a vendor's character." },
    ],
  },
  {
    slug: "ai-engineering-outstaffing",
    cat: "Strategy",
    title: "AI engineering outstaffing, done properly",
    subtitle: "Cost is not the headline. Velocity, ownership, and AI fluency are. How we set up nearshore AI pods that actually ship.",
    date: "Dec 04, 2025",
    read: "7 min read",
    author: { name: "Cindy-Cristina Daraban", role: "Business Development Manager", initial: "C", photo: "project/uploads/authors/cindy-daraban.jpg" },
    cover: "defence",
    illus: "globe",
    body: [
      { type: "lead", text: "Outstaffing has a reputation problem because most of it is staff augmentation in a hoodie — bodies billed by the hour, with little ownership and less judgement. AI engineering outstaffing only works when the model is different: senior-led pods, eval ownership, and a velocity that justifies the rate." },
      { type: "h2", text: "What 'outstaffing done properly' actually means" },
      { type: "p", text: "Properly run outstaffing is a long-running engineering pod, embedded in the client's product, owning a defined surface end-to-end. The pod is senior-led, eval-literate, and accountable for outcomes — not seat hours. It plugs into the client's planning rhythm, not a separate vendor backlog." },
      { type: "h2", text: "Why AI work demands more than bodies" },
      { type: "p", text: "Pure staff augmentation breaks on AI projects because the work needs continuity. The same engineer who shipped the eval harness needs to own its evolution; the same engineer who chose the retrieval design needs to defend it under load. Bodies billed by the hour churn — and the institutional memory leaves with them." },
      { type: "callout", text: "An outstaffed AI pod that loses two engineers in a quarter is a pod the client will fire by year-end. Continuity isn't a perk — it's the product." },
      { type: "h2", text: "How we structure an AI outstaffing pod" },
      { type: "bullets", items: ["A senior engineer who owns architecture and eval design, full-time on the engagement", "A mid-level engineer for feature work, with copilot tooling and review discipline", "A product engineer for UX and frontend integration", "A fractional tech lead from our side for monthly architectural review", "A defined eval pass-rate the pod owns, reviewed monthly with the client"] },
      { type: "h2", text: "The cost story is real, but it's not the story" },
      { type: "p", text: "Nearshore AI engineering is meaningfully less expensive than the equivalent in London or San Francisco. That matters. But the headline benefit is velocity and ownership: a pod that ships eval-driven AI features every two weeks is worth more than a cheaper pod that doesn't." },
      { type: "h2", text: "When outstaffing isn't the right shape" },
      { type: "p", text: "We don't recommend outstaffing for the discovery phase or the first MVP. Those are short, fixed-scope engagements where a project-based model aligns incentives better. Outstaffing earns its place from month four onwards, when the product is live, the roadmap is real, and the client needs a long-running team that knows the system." },
    ],
  },
  {
    slug: "lessons-from-london-tech-week-ai",
    cat: "Strategy",
    title: "Lessons from London Tech Week, through an AI-first lens",
    subtitle: "What we heard about agentic workflows, evaluation, and AI go-to-market — and what we're betting on next.",
    date: "Nov 20, 2025",
    read: "5 min read",
    author: { name: "Nicu Mardari", role: "Co-founder & CEO", initial: "N", photo: "project/uploads/authors/nicu-mardari.jpg" },
    cover: "health",
    illus: "skyline",
    body: [
      { type: "lead", text: "We spent three days at London Tech Week with a single filter on every conversation: what's actually shipping in production AI, and what's still keynote theatre? Here are the patterns we walked away with — and the bets we're making in 2026 because of them." },
      { type: "h2", text: "Agents are eating workflows, not jobs" },
      { type: "p", text: "Every credible production AI story we heard was about agents absorbing workflows — supplier follow-ups, KYC reviews, contract redlining — not replacing a job description. The teams winning are the ones with a precise definition of the workflow, not the ones with the boldest vision of the role." },
      { type: "h2", text: "Evaluation is the moat, again" },
      { type: "p", text: "Two years in, the moat in AI products isn't the model. It's the eval suite. The teams shipping confidently have a golden dataset, a scoring rubric, and a discipline of running evals on every prompt change. The teams not shipping have demos and a backlog of complaints from sales." },
      { type: "callout", text: "If a team can't show me their eval set, I assume they don't have one. They almost never do." },
      { type: "h2", text: "Cost discipline is back in style" },
      { type: "p", text: "Token costs got a lot of conference time. The credible operators talked about retrieval caching, smaller models for routine traffic, and per-tenant budget guardrails. The talkers talked about scaling laws. The doers were doing finance." },
      { type: "h2", text: "Three bets we're making in 2026" },
      { type: "bullets", items: ["Agentic workflows for back-office operations — manufacturing, logistics, finance — will be the highest-volume AI deployment of the year", "Eval tooling will become the most important software category nobody is talking about", "The market will reward AI partners who can ship end-to-end — strategy, design, engineering, ops — far more than partners who specialise in only one of those"] },
      { type: "h2", text: "What we're not betting on" },
      { type: "p", text: "We're not betting on bespoke fine-tuned models for problems frontier models will solve in 12 months, on UI-less agent chat for users who actually wanted a button, or on conference-stage architectures that nobody has run in production. The discipline is not new — it's just being tested by a new generation of tools." },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────
// Cover colours + illustration system
// ─────────────────────────────────────────────────────────────────
const COVER_COLORS = {
  ink:     { bg: "linear-gradient(135deg, #0F172A 0%, #1E2939 100%)", fg: "#E2E8F0" },
  cyan:    { bg: "linear-gradient(135deg, #082A35 0%, #0C3544 100%)", fg: "#67E8F9" },
  finance: { bg: "linear-gradient(135deg, #0F1E2E 0%, #162437 100%)", fg: "#93C5FD" },
  energy:  { bg: "linear-gradient(135deg, #1C1A10 0%, #2A2515 100%)", fg: "#FDE68A" },
  ops:     { bg: "linear-gradient(135deg, #0D1F2D 0%, #132534 100%)", fg: "#6EE7B7" },
  health:  { bg: "linear-gradient(135deg, #1A2535 0%, #243044 100%)", fg: "#BAE6FD" },
  defence: { bg: "linear-gradient(135deg, #141A1F 0%, #1C2530 100%)", fg: "#CBD5E1" },
};

// Topic-specific SVG illustrations — rendered on top of the gradient
const ILLUSTRATIONS = {
  // Rising chart + blueprint grid → strategy / discovery / planning
  blueprint: ({ fg }) => (
    <>
      {[80,160,240,320,400].map((y,i) => (
        <line key={"bh"+i} x1={0} y1={y} x2={800} y2={y} stroke={fg} strokeWidth={0.5} opacity={0.1}/>
      ))}
      {[100,200,300,400,500,600,700].map((x,i) => (
        <line key={"bv"+i} x1={x} y1={0} x2={x} y2={480} stroke={fg} strokeWidth={0.5} opacity={0.1}/>
      ))}
      <polyline points="80,380 200,300 360,210 530,145 700,90" fill="none" stroke={fg} strokeWidth={2.5} opacity={0.45}/>
      {[[80,380],[200,300],[360,210],[530,145],[700,90]].map(([x,y],i) => (
        <g key={"bp"+i}>
          <circle cx={x} cy={y} r={7} fill="none" stroke={fg} strokeWidth={2} opacity={0.55}/>
          <circle cx={x} cy={y} r={3} fill={fg} opacity={0.6}/>
        </g>
      ))}
      <path d="M40,50 L40,30 L60,30" stroke={fg} fill="none" strokeWidth={1.5} opacity={0.35}/>
      <path d="M760,50 L760,30 L740,30" stroke={fg} fill="none" strokeWidth={1.5} opacity={0.35}/>
      <path d="M40,430 L40,450 L60,450" stroke={fg} fill="none" strokeWidth={1.5} opacity={0.35}/>
      <path d="M760,430 L760,450 L740,450" stroke={fg} fill="none" strokeWidth={1.5} opacity={0.35}/>
    </>
  ),

  // Rocket + dashed arc + milestone dots → MVP / shipping / launch
  launch: ({ fg }) => (
    <>
      {[[80,60],[200,100],[350,40],[500,80],[180,190],[620,150],[720,50]].map(([x,y],i) => (
        <circle key={"ls"+i} cx={x} cy={y} r={1.5} fill={fg} opacity={0.3}/>
      ))}
      <path d="M100,440 C300,440 500,240 720,60" fill="none" stroke={fg} strokeWidth={1.5} strokeDasharray="8 5" opacity={0.35}/>
      {[[150,420],[290,360],[450,260],[610,145],[720,60]].map(([x,y],i) => (
        <circle key={"lm"+i} cx={x} cy={y} r={i===4?8:5} fill={fg} opacity={0.2+i*0.12}/>
      ))}
      <g transform="translate(720,60) rotate(-45)">
        <path d="M0,-32 C12,-32 20,-10 20,12 L20,24 C20,28 12,32 0,32 C-12,32 -20,28 -20,24 L-20,12 C-20,-10 -12,-32 0,-32 Z" fill="none" stroke={fg} strokeWidth={2} opacity={0.65}/>
        <path d="M-20,20 L-33,37 L-20,30 Z" fill={fg} opacity={0.45}/>
        <path d="M20,20 L33,37 L20,30 Z" fill={fg} opacity={0.45}/>
        <circle cx={0} cy={-8} r={8} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.55}/>
        <circle cx={0} cy={-8} r={3} fill={fg} opacity={0.5}/>
      </g>
    </>
  ),

  // PCB traces + pads + chips → engineering / code / debugging
  circuit: ({ fg }) => (
    <>
      <path d="M100,240 L200,240 L200,140 L400,140 L400,200 L600,200 L600,100 L720,100" fill="none" stroke={fg} strokeWidth={2} opacity={0.3}/>
      <path d="M100,340 L300,340 L300,280 L500,280 L500,380 L680,380" fill="none" stroke={fg} strokeWidth={2} opacity={0.3}/>
      <path d="M400,200 L400,340 L500,340" fill="none" stroke={fg} strokeWidth={1.5} opacity={0.22}/>
      <path d="M600,200 L600,340 L680,340" fill="none" stroke={fg} strokeWidth={1.5} opacity={0.22}/>
      {[[200,240],[200,140],[400,140],[400,200],[600,200],[600,100],[300,340],[300,280],[500,280],[500,380],[680,380],[680,340]].map(([x,y],i) => (
        <g key={"cp"+i}>
          <circle cx={x} cy={y} r={8} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.38}/>
          <circle cx={x} cy={y} r={3} fill={fg} opacity={0.45}/>
        </g>
      ))}
      <rect x={340} y={118} width={120} height={44} rx={4} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.32}/>
      <rect x={440} y={258} width={100} height={44} rx={4} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.32}/>
      {[0,1,2,3,4].map(i => (
        <line key={"cpl"+i} x1={340+i*24+8} y1={118} x2={340+i*24+8} y2={110} stroke={fg} strokeWidth={1.5} opacity={0.28}/>
      ))}
      {[0,1,2,3].map(i => (
        <line key={"cpr"+i} x1={440+i*24+8} y1={258} x2={440+i*24+8} y2={250} stroke={fg} strokeWidth={1.5} opacity={0.28}/>
      ))}
    </>
  ),

  // Gears + conveyor → manufacturing / industrial / operations
  gears: ({ fg }) => (
    <>
      <circle cx={310} cy={240} r={105} fill="none" stroke={fg} strokeWidth={2} opacity={0.35}/>
      <circle cx={310} cy={240} r={72} fill="none" stroke={fg} strokeWidth={1} opacity={0.18}/>
      <circle cx={310} cy={240} r={28} fill="none" stroke={fg} strokeWidth={2} opacity={0.38}/>
      {Array.from({length:12},(_,i) => {
        const a=i*30*Math.PI/180;
        return <line key={"gt"+i} x1={310+105*Math.sin(a)} y1={240-105*Math.cos(a)} x2={310+122*Math.sin(a)} y2={240-122*Math.cos(a)} stroke={fg} strokeWidth={6} strokeLinecap="round" opacity={0.38}/>;
      })}
      <circle cx={490} cy={175} r={58} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.3}/>
      <circle cx={490} cy={175} r={40} fill="none" stroke={fg} strokeWidth={1} opacity={0.16}/>
      <circle cx={490} cy={175} r={16} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.3}/>
      {Array.from({length:8},(_,i) => {
        const a=i*45*Math.PI/180;
        return <line key={"gs"+i} x1={490+58*Math.sin(a)} y1={175-58*Math.cos(a)} x2={490+70*Math.sin(a)} y2={175-70*Math.cos(a)} stroke={fg} strokeWidth={5} strokeLinecap="round" opacity={0.3}/>;
      })}
      <line x1={80} y1={390} x2={700} y2={390} stroke={fg} strokeWidth={2} opacity={0.25}/>
      <line x1={80} y1={410} x2={700} y2={410} stroke={fg} strokeWidth={1} opacity={0.15}/>
      {[110,190,270,350,430,510,590,670].map((x,i) => (
        <circle key={"gr"+i} cx={x} cy={400} r={10} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.22}/>
      ))}
    </>
  ),

  // Globe + lat/lon + location pins + arcs → distributed / remote / global
  globe: ({ fg }) => (
    <>
      <circle cx={400} cy={240} r={185} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.28}/>
      {[-100,-50,0,50,100].map((dy,i) => {
        const r = Math.sqrt(Math.max(0,185*185-dy*dy));
        return <ellipse key={"gl"+i} cx={400} cy={240+dy} rx={r} ry={r*0.28} fill="none" stroke={fg} strokeWidth={0.7} opacity={0.14}/>;
      })}
      {[-0.9,-0.45,0,0.45,0.9].map((f,i) => (
        <ellipse key={"gm"+i} cx={400} cy={240} rx={Math.abs(Math.sin(f*1.3))*185+4} ry={185} fill="none" stroke={fg} strokeWidth={0.7} opacity={0.14}/>
      ))}
      {[[310,175],[510,155],[245,285],[570,295],[415,345]].map(([x,y],i) => (
        <g key={"gp"+i}>
          <circle cx={x} cy={y} r={7} fill={fg} opacity={0.48}/>
          <line x1={x} y1={y} x2={x} y2={y-22} stroke={fg} strokeWidth={1.5} opacity={0.38}/>
          <circle cx={x} cy={y-22} r={3} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.38}/>
        </g>
      ))}
      <path d="M310,175 Q410,135 510,155" fill="none" stroke={fg} strokeWidth={1.5} strokeDasharray="5 4" opacity={0.28}/>
      <path d="M245,285 Q360,248 570,295" fill="none" stroke={fg} strokeWidth={1.5} strokeDasharray="5 4" opacity={0.28}/>
      <path d="M510,155 Q492,248 415,345" fill="none" stroke={fg} strokeWidth={1.5} strokeDasharray="5 4" opacity={0.28}/>
    </>
  ),

  // City skyline + floating data nodes → events / culture / industry
  skyline: ({ fg }) => (
    <>
      {[
        {x:55,y:335,w:62,h:145},{x:127,y:295,w:52,h:185},{x:188,y:255,w:82,h:225},
        {x:280,y:315,w:62,h:165},{x:352,y:235,w:72,h:245},{x:434,y:285,w:58,h:195},
        {x:502,y:265,w:92,h:215},{x:604,y:305,w:66,h:175},{x:680,y:345,w:72,h:135},
      ].map(({x,y,w,h},i) => (
        <g key={"sb"+i}>
          <rect x={x} y={y} width={w} height={h} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.25+i%3*0.06}/>
          {i%3===0 && <rect x={x+8} y={y+12} width={12} height={12} fill={fg} opacity={0.12}/>}
          {i%3===1 && <rect x={x+10} y={y+14} width={10} height={10} fill={fg} opacity={0.1}/>}
          {i%3===2 && <rect x={x+w-22} y={y+10} width={14} height={14} fill={fg} opacity={0.12}/>}
        </g>
      ))}
      <line x1={40} y1={480} x2={760} y2={480} stroke={fg} strokeWidth={1} opacity={0.18}/>
      {[[198,115],[385,75],[562,106],[703,86],[118,158]].map(([x,y],i) => (
        <g key={"sn"+i}>
          <circle cx={x} cy={y} r={11} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.42}/>
          <circle cx={x} cy={y} r={4} fill={fg} opacity={0.48}/>
        </g>
      ))}
      <path d="M198,115 Q292,68 385,75" fill="none" stroke={fg} strokeWidth={1.2} strokeDasharray="5 4" opacity={0.27}/>
      <path d="M385,75 Q473,62 562,106" fill="none" stroke={fg} strokeWidth={1.2} strokeDasharray="5 4" opacity={0.27}/>
      <path d="M562,106 Q632,88 703,86" fill="none" stroke={fg} strokeWidth={1.2} strokeDasharray="5 4" opacity={0.27}/>
      <path d="M198,115 Q155,135 118,158" fill="none" stroke={fg} strokeWidth={1.2} strokeDasharray="5 4" opacity={0.22}/>
      <path d="M198,115 Q192,185 188,255" fill="none" stroke={fg} strokeWidth={0.8} strokeDasharray="4 4" opacity={0.18}/>
      <path d="M385,75 Q374,155 352,235" fill="none" stroke={fg} strokeWidth={0.8} strokeDasharray="4 4" opacity={0.18}/>
      <path d="M562,106 Q538,185 502,265" fill="none" stroke={fg} strokeWidth={0.8} strokeDasharray="4 4" opacity={0.18}/>
    </>
  ),
};

function BlogCover({ cover, illus, label, large = false }) {
  const c = COVER_COLORS[cover] || COVER_COLORS.ink;
  const IllusComponent = illus && ILLUSTRATIONS[illus];
  return (
    <div className={"blog-visual-cover" + (large ? " is-large" : "")} style={{ background: c.bg }}>
      <svg viewBox="0 0 800 480" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <defs>
          <pattern id={"bc-" + cover} width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill={c.fg} opacity="0.06"/>
          </pattern>
        </defs>
        <rect width="800" height="480" fill={"url(#bc-" + cover + ")"}/>
        <circle cx="650" cy="100" r="320" fill={c.fg} opacity="0.04"/>
        {IllusComponent && <IllusComponent fg={c.fg}/>}
      </svg>
      {label && <span className="blog-visual-label" style={{ color: c.fg }}>{label}</span>}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Avatar — shows photo when author.photo is set, initial otherwise
// ─────────────────────────────────────────────────────────────────
function BlogAvatar({ author, sm = false }) {
  const cls = "blog-avatar" + (sm ? " blog-avatar--sm" : "");
  if (author && author.photo) {
    return (
      <div className={cls} style={{ overflow: "hidden", padding: 0 }}>
        <img src={author.photo} alt={author.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
    );
  }
  return <div className={cls}>{author ? author.initial : ""}</div>;
}

// ─────────────────────────────────────────────────────────────────
// Blog Listing Page
// ─────────────────────────────────────────────────────────────────
function BlogListPage() {
  const cats = ["All", "Strategy", "Engineering", "Case Study", "Operations"];
  const [active, setActive] = useStateBL("All");
  const featured = POSTS[0];
  const rest = POSTS.slice(1);
  const filtered = active === "All" ? rest : rest.filter(p => p.cat === active);

  useEffectBL(() => {
    document.title = "Blog — AI engineering, product, and operations | 7Code";
    setMeta("description", "Field notes from 7Code's AI engineering practice: how we ship LLM features, run agentic workflows, structure AI MVPs, and operate AI products in production.");
    setCanonical(SITE_ORIGIN_BL + "/blog");
    setArticleJsonLd(null);
  }, []);

  return (
    <div className="page">
      {/* ── Page hero ──────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Blog</span>
          <h1>Field notes from an AI-first engineering practice</h1>
          <p>How we ship LLM features, run agentic workflows, structure AI MVPs, and operate AI products in production — written by the people doing it.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {/* ── Featured post ─────────────────────────────── */}
          <a href={"#/blog/" + featured.slug} className="blog-featured-card reveal">
            <div className="blog-featured-cover">
              <BlogCover cover={featured.cover} illus={featured.illus} large />
            </div>
            <div className="blog-featured-body">
              <div className="blog-feat-top">
                <span className="blog-cat-pill">{featured.cat}</span>
                <span className="blog-feat-date">{featured.date} · {featured.read}</span>
              </div>
              <h2 className="blog-feat-title">{featured.title}</h2>
              <p className="blog-feat-sub">{featured.subtitle}</p>
              <div className="blog-feat-author">
                <BlogAvatar author={featured.author} />
                <div>
                  <div className="blog-author-name">{featured.author.name}</div>
                  <div className="blog-author-role">{featured.author.role}</div>
                </div>
              </div>
              <span className="blog-read-link">Read article <Icon.arrow /></span>
            </div>
          </a>

          {/* ── Category filter ──────────────────────────── */}
          <div className="blog-filter">
            {cats.map(c => (
              <button key={c} className={"blog-filter-btn" + (c === active ? " is-active" : "")} onClick={() => setActive(c)}>{c}</button>
            ))}
          </div>

          {/* ── Post grid ────────────────────────────────── */}
          <div className="blog-post-grid">
            {filtered.map((p, i) => (
              <a key={p.slug} href={"#/blog/" + p.slug} className="blog-post-card reveal" style={{ transitionDelay: (i % 3 * 60) + "ms" }}>
                <div className="blog-post-cover">
                  <BlogCover cover={p.cover} illus={p.illus} />
                </div>
                <div className="blog-post-body">
                  <div className="blog-post-meta">
                    <span className="blog-cat-pill blog-cat-pill--sm">{p.cat}</span>
                    <span className="blog-post-date">{p.date} · {p.read}</span>
                  </div>
                  <h3 className="blog-post-title">{p.title}</h3>
                  <p className="blog-post-sub">{p.subtitle}</p>
                  <div className="blog-post-foot">
                    <BlogAvatar author={p.author} sm />
                    <span className="blog-author-name">{p.author.name}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "64px 0", color: "var(--slate-500)" }}>
              No posts in this category yet.
            </div>
          )}
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Blog Post Body Renderer
// ─────────────────────────────────────────────────────────────────
function PostBody({ blocks }) {
  return (
    <div className="blog-post-article">
      {blocks.map((b, i) => {
        if (b.type === "lead") return <p key={i} className="blog-post-lead">{b.text}</p>;
        if (b.type === "h2") return <h2 key={i} className="blog-post-h2">{b.text}</h2>;
        if (b.type === "p") return <p key={i} className="blog-post-p">{b.text}</p>;
        if (b.type === "callout") return (
          <div key={i} className="blog-callout">
            <div className="blog-callout-icon"><Icon.zap style={{ width: 18, height: 18 }} /></div>
            <p>{b.text}</p>
          </div>
        );
        if (b.type === "bullets") return (
          <ul key={i} className="blog-post-bullets">
            {b.items.map((item, j) => (
              <li key={j}><span className="blog-bullet-dot"/>{item}</li>
            ))}
          </ul>
        );
        return null;
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Single Blog Post Page
// ─────────────────────────────────────────────────────────────────
function BlogPostPage({ slug }) {
  const post = POSTS.find(p => p.slug === slug) || POSTS[0];
  const related = POSTS.filter(p => p.slug !== post.slug && p.cat === post.cat).slice(0, 2);
  const nextPost = POSTS[(POSTS.indexOf(post) + 1) % POSTS.length];

  useEffectBL(() => {
    document.title = post.title + " | 7Code Blog";
    setMeta("description", post.subtitle);
    setCanonical(SITE_ORIGIN_BL + "/blog/" + post.slug);
    setArticleJsonLd(post);
    return () => { setArticleJsonLd(null); };
  }, [post.slug]);

  return (
    <div className="page">
      {/* ── Post hero ──────────────────────────────────────── */}
      <section className="blog-single-hero">
        <div className="container">
          <div className="blog-single-breadcrumb">
            <a href="#/blog">Blog</a>
            <span>·</span>
            <span>{post.cat}</span>
          </div>
          <div className="blog-single-meta">
            <span className="blog-cat-pill">{post.cat}</span>
            <span className="blog-single-date">{post.date} · {post.read}</span>
          </div>
          <h1 className="blog-single-title">{post.title}</h1>
          <p className="blog-single-sub">{post.subtitle}</p>
          <div className="blog-single-author">
            <BlogAvatar author={post.author} />
            <div>
              <div className="blog-author-name">{post.author.name}</div>
              <div className="blog-author-role">{post.author.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cover image ────────────────────────────────────── */}
      <div className="blog-single-cover-wrap">
        <div className="container">
          <BlogCover cover={post.cover} illus={post.illus} large label={post.cat} />
        </div>
      </div>

      {/* ── Article body ───────────────────────────────────── */}
      <section className="section">
        <div className="container blog-single-layout">
          {/* Sticky sidebar */}
          <aside className="blog-single-sidebar">
            <div className="blog-sidebar-card">
              <div className="blog-sidebar-label">Written by</div>
              <div className="blog-sidebar-author">
                <BlogAvatar author={post.author} />
                <div>
                  <div className="blog-author-name">{post.author.name}</div>
                  <div className="blog-author-role">{post.author.role}</div>
                </div>
              </div>
              <div className="blog-sidebar-label" style={{ marginTop: 20 }}>Published</div>
              <div className="blog-sidebar-date">{post.date}</div>
              <div className="blog-sidebar-label" style={{ marginTop: 12 }}>Reading time</div>
              <div className="blog-sidebar-date">{post.read}</div>
              <div className="blog-sidebar-label" style={{ marginTop: 12 }}>Category</div>
              <span className="blog-cat-pill" style={{ marginTop: 6 }}>{post.cat}</span>
            </div>
            <a href="#/contact" className="btn btn--primary" style={{ width: "100%", justifyContent: "center", marginTop: 16 }}>
              Work with us <Icon.arrow />
            </a>
          </aside>

          {/* Article */}
          <main>
            <PostBody blocks={post.body} />

            {/* Related posts */}
            {related.length > 0 && (
              <div className="blog-related">
                <h3 className="blog-related-head">More in {post.cat}</h3>
                <div className="blog-related-grid">
                  {related.map(r => (
                    <a key={r.slug} href={"#/blog/" + r.slug} className="blog-related-card">
                      <div className="blog-related-cover">
                        <BlogCover cover={r.cover} illus={r.illus} />
                      </div>
                      <div className="blog-related-body">
                        <div className="blog-post-meta">
                          <span className="blog-cat-pill blog-cat-pill--sm">{r.cat}</span>
                          <span className="blog-post-date">{r.date}</span>
                        </div>
                        <h4>{r.title}</h4>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Next post */}
            <a href={"#/blog/" + nextPost.slug} className="blog-next-post">
              <div className="blog-next-label">Next article</div>
              <div className="blog-next-row">
                <div>
                  <div className="blog-next-cat">{nextPost.cat}</div>
                  <div className="blog-next-title">{nextPost.title}</div>
                </div>
                <span className="blog-next-arrow"><Icon.arrow /></span>
              </div>
            </a>
          </main>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Router wrapper — list or single
// ─────────────────────────────────────────────────────────────────
function BlogRouter({ slug }) {
  if (slug) return <BlogPostPage slug={slug} />;
  return <BlogListPage />;
}

window.POSTS = POSTS;
window.BlogRouter = BlogRouter;
