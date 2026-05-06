/* global React, Icon, CSCover, CTAStrip */
/* Service detail pages, slug-routed */

const { useState: useStateSVC } = React;

// ─────────────────────────────────────────────────────────────────
// Service data
// ─────────────────────────────────────────────────────────────────
const SERVICES_DATA = {
  "ai-product-engineering": {
    slug: "ai-product-engineering",
    title: "AI-Native Product Engineering",
    shortTitle: "AI Product Engineering",
    tagline: "We design and ship AI-native web and mobile products end-to-end, LLM features, agent workflows, and the backend infrastructure to run them reliably in production. Not retrofits. Not wrappers.",
    summary: "7Code is an AI-first product engineering company. We treat AI as a foundational capability, not a layer bolted on at the end: the data model, the retrieval and inference loops, the evaluation harness, and the UX are designed together from week one. The products we ship, Daily8 (UAE news aggregator with AI moderation and summarisation), WholeSum (self-serve qualitative-data analytics), and OctoLabs (AI support copilot), improve with every user interaction and scale cleanly as data and traffic grow.",
    icon: "code",
    accentColor: "#06B6D4",
    stats: [
      { v: "20+", l: "Projects delivered" },
      { v: "6 wks", l: "to first production deploy" },
      { v: "Web + Mobile", l: "full-stack delivery" },
      { v: "HIPAA · SOC 2", l: "compliance-ready" },
    ],
    problem: {
      title: "Bolting AI onto a product built without it is expensive. Usually too expensive.",
      body: "The teams that regret their architecture are the ones who built a clean CRUD app first and tried to add intelligence later. The data model doesn't support retrieval. The latency budget is gone. The UX was never designed for streaming responses or model uncertainty. We've inherited enough of these codebases to know: designing for LLMs and agents from day one costs far less than retrofitting them later, and the products that result are categorically better, faster to ship, and easier to evaluate.",
    },
    whatWeDeliver: [
      { title: "AI-native web applications", desc: "Next.js and React apps with AI workflows embedded in the product experience, semantic search, RAG over your data, real-time suggestions, intelligent routing, and dynamic content grounded in retrieval." },
      { title: "Intelligent mobile apps", desc: "React Native and native iOS/Android apps with personalisation loops, on-device inference where it matters, and AI features that hold up offline. We've shipped AI mobile in media (Daily8), healthcare, and enterprise SaaS." },
      { title: "LLM-first user interfaces", desc: "Chat interfaces, copilots, and agentic dashboards designed for streaming, latency, and model uncertainty. We handle confidence displays, fallback paths, and tool-use UX, not just the happy path." },
      { title: "Agent and workflow infrastructure", desc: "Multi-step agent pipelines with tool use, memory, and human-in-the-loop checkpoints. Built on LangGraph or first-party SDKs (Anthropic, OpenAI), with eval harnesses and replay so behaviour is auditable." },
      { title: "AI-ready data and retrieval layer", desc: "The backend that makes AI possible: event streams, vector stores (pgvector, Pinecone), embedding pipelines, and the API contracts that keep your frontend fast while the model thinks." },
      { title: "Legacy integration and migration", desc: "We connect your AI-native product to the systems that hold your real data, EHRs, ERPs, CRMs, and the internal tools that predate modern APIs. No greenfield silos." },
    ],
    techStack: {
      "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
      "Mobile": ["React Native", "Expo", "Swift", "Kotlin"],
      "AI & LLM": ["Claude (Anthropic)", "GPT (OpenAI)", "LangGraph", "pgvector", "Pinecone", "Eval harnesses"],
      "Backend & Data": ["Node.js", "Nest.js", "PostgreSQL", "AWS Lambda", "Kafka", "Prisma"],
    },
    process: [
      { step: "01", title: "AI capability scoping, before the spec", desc: "We map product requirements against LLM and agent capabilities in week one, before any specification is written. Architecture decisions made early, data model, retrieval strategy, evaluation criteria, feedback loops, have a 10× impact on what's possible by month six. We get these right first." },
      { step: "02", title: "Two-week sprints with AI checkpoints", desc: "Every sprint ends with a deployable build and a measurable eval delta. At each review we score AI features against a held-out evaluation set, not just demo prompts, so quality moves in one direction and regressions are caught the day they happen." },
      { step: "03", title: "Production hardening and handoff", desc: "The final phase covers prompt management, model versioning, evaluation CI, observability, and cost controls. We do not hand off without an eval harness your team can run, dashboards for token spend and latency, and a runbook for when a model degrades. The engagement finishes when your team can operate the system independently." },
    ],
    cases: ["wholesum", "daily8", "hera"],
    seoTitle: "AI Product Engineering — Nearshore Senior Team | 7code",
    metaDescription: "AI-native product engineering by 7Code. LLM-powered web and mobile products, agents, RAG, evals, and cloud infrastructure for production.",
    faqs: [
      { q: "What does 'AI-native' mean in practice?", a: "It means LLMs, retrieval, and agents are designed into the product from week one, the data model, the API contracts, the evaluation harness, and the UX are all shaped around how AI features actually behave (streaming, latency, uncertainty). Most 'AI features' are bolted on later; AI-native products are architected for them from the start, which is why they ship faster and scale cleaner." },
      { q: "How long does it take to ship an AI-native product?", a: "Six weeks to a first production deploy is typical. From kick-off to a public launch usually takes 12–24 weeks depending on scope. We've shipped Daily8 (UAE news aggregator with AI moderation and summarisation) in six months and OctoLabs (AI support copilot) in six weeks. We do not run multi-quarter discovery phases, every two-week sprint ends with deployable software." },
      { q: "Which LLM providers do you work with?", a: "We're provider-agnostic and route between Claude (Anthropic), GPT (OpenAI), and open-weight models (Llama, Mistral via Ollama or vLLM) based on cost, latency, and quality on your specific eval set. We design the codebase so the provider can change without rewrites." },
      { q: "How do you measure AI quality before shipping?", a: "Every engagement opens with the construction of a held-out evaluation set, a representative sample of inputs paired with criteria for what 'good' looks like. We score every release against it (with frameworks like RAGAS or custom evals), gate deployments on the score, and surface regressions before they reach users. No vibes, no demo bias." },
      { q: "What happens after launch?", a: "We hand off prompt management, model versioning, evaluation CI, and observability for token cost and latency. Your team owns it, but we stay on as embedded engineers (via outstaffing) or on a maintenance retainer for the first few months, monitoring drift and helping with feature additions. Most clients keep us on long-term." },
      { q: "Are you compliance-ready for regulated industries?", a: "Yes. We've shipped HIPAA-compliant healthcare apps, SOC 2-aligned fintech tools, and security-cleared defence platforms. AI features add new compliance considerations (PII redaction, output filtering, audit logs for model decisions); we build for them from the start." },
    ],
    next: { slug: "system-integrations", title: "System Integrations" },
  },

  "system-integrations": {
    slug: "system-integrations",
    title: "System Integrations",
    shortTitle: "System Integrations",
    tagline: "We connect your stack, ERPs, CRMs, data warehouses, SaaS tools, and legacy systems, into one reliable, observable data fabric ready to carry an AI layer on top.",
    summary: "Most companies don't have a data problem. They have a fragmentation problem. The data exists, but it's spread across a CRM, an ERP, a dozen SaaS tools, and a handful of databases nobody fully understands. We build the integration layer that connects them, Kafka or webhooks for events, dbt or Airbyte for batch, clean APIs in front, so your operational data is reliable, auditable, and ready to be retrieved by an LLM or agent without surprises.",
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
      body: "The pattern is always the same: sales works in the CRM, finance works in the ERP, operations works in a spreadsheet, and the weekly sync meeting exists to reconcile all three. Manual exports, CSV imports, and copy-paste workflows that break the moment one field changes. The cost is measured in analyst hours, delayed decisions, and, increasingly, AI features that hallucinate because the retrieval layer can't trust the source data.",
    },
    whatWeDeliver: [
      { title: "API design and middleware", desc: "Clean, versioned APIs and middleware that translate between your systems, handling authentication, rate limiting, retry logic, idempotency, and the edge cases every integration eventually hits." },
      { title: "ERP and CRM connectors", desc: "Bi-directional sync between Salesforce, HubSpot, SAP, NetSuite, Microsoft Dynamics, and your internal systems. We've mapped the data models, handled the conflict resolution, and built what generic iPaaS tools skip." },
      { title: "Real-time event pipelines", desc: "Event-driven architectures (Apache Kafka, AWS SNS/SQS, webhooks, change-data-capture via Debezium) that propagate changes in seconds, not overnight batches. The foundation for any agent that reacts to business events." },
      { title: "Legacy system integration", desc: "We've integrated SOAP services, mainframe exports, FTP batch files, and systems that predate REST. If it exposes any interface, file, database, API, or message queue, we can build a reliable connector for it." },
      { title: "AI-ready data warehouse pipelines", desc: "ELT into Snowflake, BigQuery, or Redshift with dbt-modelled transforms. Same warehouse feeds your BI dashboards and your retrieval pipelines (pgvector, Pinecone), one source of truth for humans and LLMs alike." },
      { title: "Integration observability", desc: "Dashboards, alerting, and audit logs for every pipeline we build. You'll know when a sync failed, which records were affected, and what the system did about it, before your users (or your AI) file a ticket." },
    ],
    techStack: {
      "Messaging & streaming": ["Apache Kafka", "AWS SQS / SNS", "RabbitMQ", "Webhooks", "Debezium CDC"],
      "ELT & pipelines": ["Airbyte", "dbt", "AWS Glue", "Fivetran", "custom ELT"],
      "API & middleware": ["Node.js", "Nest.js", "Python", "GraphQL", "REST", "gRPC"],
      "Data warehouses": ["Snowflake", "BigQuery", "Redshift", "PostgreSQL"],
    },
    process: [
      { step: "01", title: "Integration audit and architecture", desc: "We map every system, every data flow, and every manual handoff in your current stack. Output: an integration architecture decision record, what connects to what, in what direction, with what latency and reliability requirements, signed off before we write a line of code." },
      { step: "02", title: "Connector-by-connector delivery", desc: "We build and ship integrations one connector at a time, validating each in production before moving to the next. A working integration shipped every two weeks, not a big-bang go-live six months from now." },
      { step: "03", title: "Observability, runbooks, and handoff", desc: "Every pipeline ships with a monitoring dashboard, alerting rules, and a runbook your team can follow when something breaks at 2am. We do not consider an integration finished until it has been in production long enough to fail once and recover cleanly." },
    ],
    cases: ["g42-fleet", "numerize", "revote"],
    seoTitle: "System Integration Services for AI Workloads | 7code",
    metaDescription: "System integrations by 7Code. We connect ERPs, CRMs, SaaS tools, data warehouses, and legacy systems into a reliable data fabric for AI workloads.",
    faqs: [
      { q: "How is this different from an iPaaS like Zapier or Workato?", a: "iPaaS tools are great for simple, low-volume workflows. They tend to break down on three things: high-throughput events, complex conflict resolution between bi-directional syncs, and observability you can audit. We build custom integration layers (often using Kafka, dbt, and a thin API gateway) when you need reliability, latency, and control beyond what an iPaaS provides, usually because an AI or operational system is consuming the data downstream." },
      { q: "Can you integrate with our legacy or on-prem systems?", a: "Yes, SOAP, mainframe exports, FTP batch files, and on-prem databases behind a VPN are all fair game. If it exposes any interface (file, database, API, or message queue), we can build a reliable connector for it. We've done this in healthcare (HL7, FHIR), banking (SWIFT, FIX), and energy (SCADA gateways)." },
      { q: "How long does a typical integration take?", a: "Six weeks for a single bi-directional connector with full observability and runbooks. Multi-system data fabrics with 5–10 connectors usually run 3–6 months, but we deliver one working integration to production every two weeks throughout, not a big-bang launch at the end." },
      { q: "Does the integration layer make us 'AI-ready'?", a: "Yes, that's a deliberate design goal. The same dbt-modelled warehouse, event streams, and API contracts that power your BI also feed retrieval pipelines (pgvector, Pinecone) and agent tools. AI is much cheaper and more reliable to add when the integration foundation is already clean." },
      { q: "Who owns the integrations after launch?", a: "Your team. We hand off Terraform / Pulumi infra-as-code, monitoring dashboards, alerting rules, and a runbook for each connector. We can stay on for ongoing maintenance, but most clients run it themselves after a 30-day post-launch handover period." },
    ],
    next: { slug: "ai-automation", title: "AI & Process Automation" },
  },

  "ai-automation": {
    slug: "ai-automation",
    title: "AI & Process Automation",
    shortTitle: "AI & Automation",
    tagline: "LLM integrations, RAG copilots, and agentic workflow automation, grounded in your data, evaluated against held-out sets, and built to compound value with every interaction.",
    summary: "AI only matters when it changes a workflow someone actually runs. We build production-grade AI systems, RAG copilots, agent pipelines, and automations, that ground every answer in your real data, get scored against a held-out evaluation set before each release, and improve with use. We've shipped the AI moderation, daily-summary, and unbiased-opinion features inside Daily8 (UAE news aggregator), the qualitative-analytics engine inside WholeSum, and the OctoLabs support copilot that deflects 47% of tickets, and we know the difference between a demo and a production system.",
    icon: "cpu",
    accentColor: "#7C3AED",
    stats: [
      { v: "47%", l: "avg ticket deflection" },
      { v: "RAG + agents", l: "primary architecture" },
      { v: "Claude · GPT", l: "LLM options" },
      { v: "6 wks", l: "to production copilot" },
    ],
    problem: {
      title: "Most AI projects fail in the gap between demo and production.",
      body: "The demo works because it is curated. Production does not work because it is real. Users ask unexpected questions, reference documents the model was never shown, and escalate to a human when the AI gives confidently wrong answers. We build the eval infrastructure, retrieval grounding, fallback paths, and confidence calibration that makes AI behave reliably under traffic, and the observability that catches drift before users notice.",
    },
    whatWeDeliver: [
      { title: "Custom RAG copilots", desc: "LLM-powered assistants grounded in your data, documents, tickets, CRM, knowledge base, with cited answers, not hallucinated ones. We design the chunking, embedding, and retrieval strategy specifically for your corpus, then prove it on an eval set." },
      { title: "Agentic workflow automation", desc: "Multi-step agents that take scoped, auditable actions on your behalf, calling tools, writing to systems, escalating to humans on confidence thresholds. Built on LangGraph or first-party SDKs (Anthropic, OpenAI), with full state persistence and replay." },
      { title: "RAG pipelines that actually work", desc: "Retrieval-augmented generation tuned for production: chunking strategy, embedding choice, hybrid retrieval (semantic + keyword), reranking, and the held-out eval set that proves it." },
      { title: "LLM evaluation harnesses", desc: "RAGAS, Braintrust, or custom eval frameworks that score every release against a representative prompt set. You get a number, not a vibe, before you ship, and gates in CI block regressions." },
      { title: "Process mining and automation discovery", desc: "Workflow analysis to identify the highest-leverage automation opportunities in your operations, before writing any code. Cuts wasted prototype effort dramatically." },
      { title: "Fine-tuning and preference optimisation", desc: "When a base model isn't enough, structured fine-tuning on your domain data (LoRA, full fine-tune), DPO/RLHF for preference alignment, and the evaluation harness to prove it worked." },
    ],
    techStack: {
      "LLM providers": ["Claude (Anthropic)", "GPT (OpenAI)", "Mistral", "Llama via Ollama / vLLM"],
      "RAG & Embeddings": ["LangChain", "LangGraph", "LlamaIndex", "pgvector", "Pinecone"],
      "Evaluation": ["RAGAS", "Braintrust", "Inspect", "custom eval frameworks"],
      "Automation & agents": ["LangGraph", "Temporal", "n8n", "first-party SDKs"],
    },
    process: [
      { step: "01", title: "Use-case scoping and eval design", desc: "We define success before building anything. What does 'good' look like? How do we measure it? Output: a held-out evaluation set that doubles as the specification, every model, prompt, or pipeline change is scored against it." },
      { step: "02", title: "Prototype, evaluate, iterate", desc: "Two-week cycles: build a narrow version, run it against the eval set, measure, and iterate. We show you the score at every review, and the failure cases that drive the next sprint." },
      { step: "03", title: "Production hardening and operate", desc: "Confidence thresholds, fallback paths, audit logging, eval CI, token-cost dashboards, and the drift monitoring that tells you when output quality degrades. We do not ship without these, and we can stay on to operate the system if you'd rather your team not learn it overnight." },
    ],
    cases: ["wholesum", "daily8", "melsonic"],
    seoTitle: "AI Process Automation Services — 7code | AI-Native Agency",
    metaDescription: "AI process automation by 7Code. RAG copilots, agentic workflows, and LLM integrations grounded in your data, evaluated rigorously, shipped to production.",
    faqs: [
      { q: "What is RAG, and why does it matter?", a: "Retrieval-augmented generation grounds an LLM's answer in your real data, documents, tickets, knowledge base, by retrieving relevant context at query time and including it in the prompt. It dramatically reduces hallucinations, lets the model cite sources, and means you don't need to fine-tune (or wait for the next model release) to teach it about your business. Almost every production copilot we ship is RAG-based." },
      { q: "How do you stop the AI from hallucinating?", a: "Three layers: (1) retrieval grounding so the model has the right context, (2) prompt design that requires citations and refuses confidently when context is missing, (3) a held-out evaluation set that scores hallucination rate as a metric we gate releases on. We also add confidence thresholds at runtime, when the model isn't confident, it escalates to a human instead of guessing." },
      { q: "Should we use Claude or GPT?", a: "Both, usually. We're provider-agnostic and benchmark on your specific eval set, then route between Claude (Anthropic), GPT (OpenAI), and open-weight models (Llama, Mistral) based on cost, latency, and quality per task. The codebase is structured so the provider can change without rewrites." },
      { q: "How long until we have a working AI feature in production?", a: "Six weeks is typical for a first production copilot or agent. OctoLabs went from kick-off to a production support copilot deflecting tickets in six weeks. Daily8's AI moderation and summarisation features shipped inside the broader six-month engagement." },
      { q: "What's the difference between automation and agents?", a: "Automation runs a fixed sequence of steps. Agents decide what step to take next based on the situation. Most useful systems are a mix: deterministic workflows where the path is known, agent loops where the path depends on the data. We design which is which carefully, autonomous agents are powerful but harder to evaluate and govern." },
      { q: "Do you fine-tune models, or stick to prompting?", a: "Default is prompting + RAG, because it's faster, cheaper, and easier to evaluate. We fine-tune (LoRA or full) when the base model can't reach the eval target on a specific task, usually domain-specific reasoning, structured output formats, or proprietary tone. We always measure the fine-tuned model against the same held-out set to prove it actually helps." },
    ],
    next: { slug: "cloud-agentic-infra", title: "Cloud & Agentic Infrastructure" },
  },

  "cloud-agentic-infra": {
    slug: "cloud-agentic-infra",
    title: "Cloud & Agentic Infrastructure",
    shortTitle: "Cloud & Agentic Infra",
    tagline: "Cloud-native foundations and agentic pipeline orchestration on AWS, GCP, and Azure, so your AI products run reliably, scale automatically, and cost what they should.",
    summary: "Building an AI product is only half the job. The teams that ship reliably are not just good at models, they are good at infrastructure: agent pipelines that run on a schedule, recover from failure, and route intelligently between tools; observability that surfaces prompt drift before a customer notices; CI gates on eval scores instead of test coverage. We build that layer, cloud-native foundations on AWS, GCP, and Azure, vector database deployments (pgvector, Pinecone, Qdrant, Weaviate), agent orchestration on LangGraph and Temporal, and the cost and latency controls that keep your AI bill predictable.",
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
      body: "The model works in the notebook. The demo runs fine. But in production, agentic workflows time out, vector search latency spikes unpredictably, and nobody knows which prompt version caused the regression two weeks ago. Most teams are running AI on infrastructure designed for traditional web apps, and wondering why it's unreliable. The fix isn't a better model. It's an infrastructure layer built specifically for the way AI workloads actually behave.",
    },
    whatWeDeliver: [
      { title: "Cloud-native AI deployments", desc: "AWS, GCP, and Azure environments right-sized for AI: GPU instances for fine-tuning, serverless inference endpoints, auto-scaling policies that match token throughput, not just HTTP requests." },
      { title: "Agentic pipeline orchestration", desc: "LangGraph, Temporal, and Prefect workflows that handle multi-step agent execution, tool-calling loops, retries, and state persistence. Built to recover gracefully from LLM failures and partial completions." },
      { title: "Vector database infrastructure", desc: "Qdrant, Weaviate, and pgvector deployments optimised for retrieval latency and embedding freshness. Indexing pipelines, namespace management, and the monitoring that surfaces staleness before users notice." },
      { title: "AI observability and evaluation", desc: "Prompt versioning, output logging, and continuous evaluation against your golden dataset. Datadog for infra metrics, RAGAS and Braintrust for model quality, wired together into a single operational picture." },
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
      { step: "01", title: "AI infra audit and target design", desc: "We map your current stack, model providers, vector stores, pipeline triggers, and observability gaps. Output: a written architecture decision record with a prioritised list of infra risks and a proposed target state." },
      { step: "02", title: "Foundation and pipeline build", desc: "Cloud environments, agentic orchestration scaffolding, and vector DB setup deployed in two-week phases. Each phase ships something to production, we don't hold back until the full architecture is complete." },
      { step: "03", title: "Observability and handoff", desc: "Dashboards, eval pipelines, and runbooks your team owns. We consider the engagement done when your engineers can deploy a new agent, monitor its quality, and roll it back, without us in the loop." },
    ],
    cases: ["wholesum", "daily8", "hera", "g42-fleet"],
    seoTitle: "Cloud & Agentic Infrastructure for AI Products | 7code",
    metaDescription: "Cloud & agentic infrastructure by 7Code. AWS, GCP, and Azure for AI products, agent pipelines (LangGraph, Temporal), vector stores, and eval CI.",
    faqs: [
      { q: "Why does AI need different infrastructure from a normal web app?", a: "AI workloads behave differently: token-streaming responses (not HTTP request/response), GPU rather than CPU bottlenecks, vector search latency that varies with index size, agent loops that run for minutes instead of milliseconds. Standard auto-scaling and observability tools miss this. We size, scale, and monitor on the right metrics, token throughput, retrieval latency, eval score, not just request count." },
      { q: "Which cloud provider should we use?", a: "Whichever you already trust your security and procurement to. We work natively across AWS, GCP, and Azure, and our reference architectures are portable across all three. The deciding factors are usually existing relationships, regional availability for specific GPU SKUs, and whether you need first-party hosted models (Bedrock, Vertex, Azure OpenAI) or want to bring your own." },
      { q: "What does 'agentic orchestration' actually look like?", a: "A workflow engine, LangGraph, Temporal, or Prefect, that runs multi-step agent executions with state persistence, retries, tool-call loops, and human-in-the-loop checkpoints. So when an agent's third LLM call times out, the workflow picks up where it left off instead of restarting. Without orchestration, agents are demos; with it, they are production systems." },
      { q: "How do you control AI costs?", a: "Three levers: (1) model routing, send easier queries to cheaper models, harder ones to the frontier; (2) caching, repeated questions hit a cache, not a fresh LLM call; (3) prompt and context optimisation, shorter prompts, better retrieval, fewer tokens. Combined with token-spend dashboards per feature, this typically cuts monthly AI bills 30–60% without affecting quality." },
      { q: "Is the infra you build vendor-locked?", a: "No. We default to portable foundations, Terraform / Pulumi for IaC, Kubernetes or container-based deployment, open-source orchestration (LangGraph / Temporal). Provider-specific services are used where they're decisively better (Bedrock, Cloud Run, Azure OpenAI), but the abstraction layer is yours and the data is yours." },
      { q: "What does 'eval CI' mean?", a: "A continuous-integration pipeline that, on every change to a prompt, model version, or retrieval setting, runs your held-out evaluation set, scores it, and gates the merge on the result. It's the AI equivalent of unit tests + code coverage, without it, you cannot tell whether a change improved or degraded the system." },
    ],
    next: { slug: "product-strategy", title: "Product Strategy & Design" },
  },

  "ai-outstaffing": {
    slug: "ai-outstaffing",
    title: "AI Engineering Outstaffing",
    shortTitle: "AI Outstaffing",
    tagline: "Senior AI engineers embedded in your team, matched in days, not months. Your roadmap, your rituals, our engineers.",
    summary: "The AI talent market is broken for most companies. Senior engineers with production LLM experience are expensive, rare, and not responding to LinkedIn. The teams winning with AI right now aren't the ones with the biggest recruiting budgets, they're the ones who found a smarter way to access the talent. We embed our engineers directly into your team: your Slack, your standups, your sprint cadence. You get the leverage of a specialist without the overhead of a hire.",
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
      body: "A senior AI engineer with production LLM and MLOps experience commands €150–280k in Europe and expects frontier model access, interesting problems, and a team that moves fast. Most product companies outside the top 20 tech firms can't compete on all three. The result: long hiring cycles, expensive mis-hires, or, most commonly, AI initiatives that stall because the right engineer was never in the room. Outstaffing solves this without the risk, the overhead, or the equity dilution of a permanent hire.",
    },
    whatWeDeliver: [
      { title: "Senior AI & ML engineers", desc: "Engineers with production experience across LLM integration, RAG pipelines, fine-tuning, and MLOps. Matched to your stack, your domain, and the specific problem you're trying to solve, not just keyword-matched." },
      { title: "Full-stack product engineers", desc: "React, React Native, Node.js, and Python engineers who've shipped in AI-native codebases. They work to your sprint cadence, contribute to architecture decisions, and write the kind of code you'd want to inherit." },
      { title: "Embedded technical leads", desc: "A tech lead who runs a sub-team inside your organisation, architecture ownership, code review, mentoring your junior engineers, and bridging the gap between engineering and product. All without the 6-month executive search." },
      { title: "Domain-specialist engineers", desc: "Engineers with verified experience in regulated industries: healthcare (HIPAA, HL7, FHIR), finance (SOC 2, PCI-DSS), defence (security-cleared), and energy (IEC 62443). Rare skills available without the rare search timeline." },
      { title: "AI research engineers", desc: "For teams pushing the frontier: fine-tuning on proprietary data, RLHF pipeline design, evaluation framework architecture, and custom model development. Ex-research backgrounds with production delivery track records." },
      { title: "Flexible engagement models", desc: "Full-time equivalents, part-time specialists, and targeted sprint injections. Monthly rolling contracts. Scale up for a product launch, scale back after, with 30 days' notice and no penalty clauses." },
    ],
    techStack: {
      "AI & ML profiles": ["PyTorch", "Hugging Face", "LangChain", "LlamaIndex", "pgvector"],
      "Product engineering": ["React", "Next.js", "TypeScript", "Node.js", "Python"],
      "Infrastructure": ["AWS", "GCP", "Kubernetes", "Terraform", "Docker"],
      "Evaluation & ops": ["RAGAS", "Braintrust", "Datadog", "OpenTelemetry"],
    },
    process: [
      { step: "01", title: "Requirements and matching, 72 hours", desc: "We scope the role together: skills, seniority, timezone, domain knowledge, and team fit. Within 72 hours we present 2–3 matched profiles with a technical summary and relevant project history attached to each. No generic CVs." },
      { step: "02", title: "Two-week embedded trial", desc: "The engineer joins your team for a trial sprint, real work, your codebase, your processes. If the fit isn't right technically or culturally, we replace at no cost and no delay. Most engagements pass the trial and move straight to ongoing." },
      { step: "03", title: "Ongoing engagement with a dedicated account lead", desc: "Monthly rolling contract. A dedicated account lead on our side handles performance, feedback, and any escalations, so you get the responsiveness of a direct hire without the HR overhead. Scale up or down with 30 days' notice." },
    ],
    cases: ["founders-factory", "drum-bun", "lidl-road-safety"],
    seoTitle: "AI Engineering Outstaffing — Senior Engineers | 7code",
    metaDescription: "AI engineering outstaffing by 7Code. Senior AI and ML engineers with LLM, RAG, and MLOps experience, embedded in your team in 72 hours. No lock-in.",
    faqs: [
      { q: "How is outstaffing different from outsourcing?", a: "Outsourcing hands a project to a third party who delivers it (or doesn't) opaquely. Outstaffing embeds named senior engineers directly into your team, they join your Slack, your standups, your sprint cadence, and they report into your engineering management. You own the roadmap, code, and decisions. We own matching, retention, and replacement if the fit isn't right." },
      { q: "How fast can you actually staff a senior AI engineer?", a: "First matched profiles in 72 hours from a kicked-off requirements brief. Trial sprint usually starts within two weeks. We hold a curated bench of senior AI engineers with verified production experience, so most matches happen out of bench rather than from open recruiting, that's why the timeline is days, not the months a typical hire takes." },
      { q: "What seniority and skills do your engineers actually have?", a: "Senior only, minimum 5 years of production engineering experience and verified work with LLMs in production (RAG pipelines, agent systems, fine-tuning, eval harnesses). Most have ex-product or ex-research backgrounds at known companies. We don't put juniors on AI engagements. References and code samples available on request." },
      { q: "Can we hire them permanently after the engagement?", a: "Yes, after six months of engagement, with a flat conversion fee. We optimise for long-term partnerships, not for keeping our engineers locked in. Several of our clients have hired matched engineers as permanent staff, and several have kept us on outstaffing because they preferred the flexibility." },
      { q: "What if the engineer isn't a good fit?", a: "Two-week embedded trial sprint. If the technical or cultural fit isn't right, we replace the engineer at no cost, usually within a week. Most engagements pass the trial because we screen heavily upfront, but the safety net is there." },
      { q: "Do you have engineers with regulated-industry experience?", a: "Yes, we maintain pools of engineers with verified domain experience in healthcare (HIPAA, HL7, FHIR), finance (SOC 2, PCI-DSS), defence (security-cleared), and energy (IEC 62443). These rare skill sets are usually what take 6–9 months to hire directly; we can match in days." },
      { q: "How is pricing structured?", a: "Monthly rolling contracts at a transparent daily or monthly rate per engineer (varies by seniority and specialism). No long-term commitment. Scale up or down with 30 days' notice. No equity dilution, no recruiter fees, no severance exposure." },
    ],
    next: { slug: "ai-product-engineering", title: "AI-Native Product Engineering" },
  },

  "product-strategy": {
    slug: "product-strategy",
    title: "Product Strategy & Design",
    shortTitle: "Strategy & Design",
    tagline: "From discovery to design system, building AI-native products that resonate with users, withstand engineering, and stay usable when the LLM is streaming, uncertain, or wrong.",
    summary: "Product strategy is the work that makes everything else less expensive. When discovery is done right, the design emerges from it. When the design is done right, the engineering is faster, and the AI features actually work in the hands of users. We design for streaming responses, model uncertainty, and human-in-the-loop checkpoints from week one, because retrofitting them after launch is where most AI products fall over.",
    icon: "layers",
    accentColor: "#059669",
    stats: [
      { v: "Discovery", l: "week 1 deliverable" },
      { v: "WCAG AA", l: "accessibility standard" },
      { v: "Figma", l: "design platform" },
      { v: "2 wks", l: "prototype to user test" },
    ],
    problem: {
      title: "Most products are built before the problem is understood, and AI features ship before the UX is designed for them.",
      body: "Teams jump to solutions because solutions feel like progress. The discovery phase, understanding users, mapping workflows, identifying assumptions baked into the brief, feels slow. It is not. With LLM features specifically, the failure mode is worse: the design treats AI as a regular form field, then breaks the moment a response streams, takes 8 seconds, or surfaces something confidently wrong. We design for those realities upfront.",
    },
    whatWeDeliver: [
      { title: "Product discovery", desc: "User research, stakeholder interviews, assumption mapping, and a product strategy document that makes tradeoffs explicit. For AI products, we also map where models fit, where they don't, and where the human stays in the loop." },
      { title: "Information architecture", desc: "Sitemaps, user flows, and navigation models that match how your users think about their work, not how the engineering team models the data, and not how the LLM happens to chunk text." },
      { title: "AI-aware UX patterns", desc: "Streaming, skeleton states, confidence indicators, citation displays, fallback paths, and tool-use UX. The patterns that turn an LLM feature from a demo into something users actually trust day-to-day." },
      { title: "Wireframes and prototypes", desc: "From rough flows to interactive prototypes, tested with real users, including failure-case prototypes (the LLM is wrong, slow, or down) so the team aligns on how the product behaves on a bad day." },
      { title: "High-fidelity design", desc: "Pixel-precise Figma files, component specs, and design tokens. The artifacts your engineering team can build from without interpretation." },
      { title: "Design systems", desc: "A component library in Figma and code, documented and maintained, with primitives for the AI patterns above (streamed text, citations, confidence states) so every new AI feature is faster and more consistent." },
      { title: "Design QA", desc: "We stay in the loop during engineering to catch deviations before they ship, including the AI-specific ones (streaming behaviour, latency, error states) that visual QA alone misses." },
    ],
    techStack: {
      "Design": ["Figma", "FigJam", "Lottie / Rive"],
      "Research": ["Maze", "UserTesting", "Hotjar"],
      "Handoff": ["Storybook", "design tokens (Style Dictionary)", "Zeroheight"],
      "Accessibility": ["axe DevTools", "VoiceOver", "NVDA"],
    },
    process: [
      { step: "01", title: "Discovery and research", desc: "User interviews, competitive analysis, and a structured assumption map. Output: a strategy document you can use to make decisions, not just describe the project, including a clear point of view on where AI helps and where it gets in the way." },
      { step: "02", title: "Wireframe and test", desc: "Low-fidelity flows and prototypes, tested with 5–8 users. We run the tests, synthesise the findings, and iterate, including failure-case scenarios for AI features, all before high-fidelity design begins." },
      { step: "03", title: "High-fidelity and handoff", desc: "Figma files with full component specs, design tokens, and interaction annotations, including streaming, latency, and error-state animations. Handed off in a format your engineers can build from without interpretation." },
    ],
    cases: ["hera", "wholesum", "lidl-road-safety"],
    seoTitle: "AI Product Strategy, Discovery & Design Services | 7code",
    metaDescription: "Product strategy and design by 7Code. Discovery to design system for AI-native products, UX for streaming, confidence, and fallback paths. Figma to code.",
    faqs: [
      { q: "Do I need a 'product strategy' phase if I already know what I want to build?", a: "Sometimes no. If your discovery is done, your user research is solid, and your team has alignment on the problem, we can start at wireframes. But it is rare, most teams that come to us with 'we know what to build' have an unspoken disagreement that shows up at sprint three. A one-week strategy phase usually pays for itself many times over by avoiding rework." },
      { q: "How do you design for an LLM that is sometimes wrong?", a: "By treating uncertainty as a design primitive, not an edge case. Concretely: confidence indicators, source citations, easy escalation to a human, ' I don't know' patterns instead of confidently-wrong outputs, and fallback flows when the model is unavailable or slow. We prototype these failure cases early so users (and stakeholders) align on the product's behaviour on a bad day." },
      { q: "Do you build the design system, or just deliver Figma?", a: "Both, depending on scope. We can deliver a Figma library only, or a Figma library plus a coded component library (React, Storybook, design tokens via Style Dictionary). For AI products we strongly recommend the coded version, the streaming and confidence components benefit from being implemented once, not re-built per screen." },
      { q: "How do you handle accessibility?", a: "WCAG AA as a default, AAA where the user base demands it (healthcare, public-sector). We design with screen readers (VoiceOver, NVDA) in mind, audit with axe DevTools, and include accessibility acceptance criteria in every Figma handoff. AI-specific concerns, narration of streaming responses, alt-text generation, are part of that audit." },
      { q: "How long does design typically take?", a: "Two weeks for discovery, two weeks of wireframe + user testing, two to four weeks of high-fidelity, depending on scope. Eight weeks total is common for a v1 product. We deliver in milestones, your team can start engineering against wireframes while high-fidelity is still in progress." },
    ],
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
  const iconMap = { code: Icon.code, cpu: Icon.cpu, cloud: Icon.cloud, layers: Icon.layers, globe: Icon.globe, users: Icon.users };
  const SvcIcon = iconMap[svc.icon] || Icon.code;
  const relatedCases = svc.cases.map(s => (typeof CASES !== "undefined" && CASES[s]) ? CASES[s] : null).filter(Boolean);

  React.useEffect(() => {
    const prevTitle = document.title;
    const descEl = document.querySelector('meta[name="description"]');
    const prevDesc = descEl ? descEl.getAttribute("content") : null;
    document.title = svc.seoTitle || ("7Code, " + svc.title);
    if (descEl && svc.metaDescription) descEl.setAttribute("content", svc.metaDescription);

    const ld = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": svc.title,
          "serviceType": svc.title,
          "description": svc.metaDescription || svc.tagline,
          "provider": { "@type": "ProfessionalService", "name": "7Code", "url": "https://www.7code.tech/" },
          "areaServed": "Worldwide",
          "url": "https://www.7code.tech/service/" + svc.slug,
        },
        ...(svc.faqs && svc.faqs.length ? [{
          "@type": "FAQPage",
          "mainEntity": svc.faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a },
          })),
        }] : []),
      ],
    };
    const scriptEl = document.createElement("script");
    scriptEl.type = "application/ld+json";
    scriptEl.id = "svc-ld";
    scriptEl.text = JSON.stringify(ld);
    document.head.appendChild(scriptEl);

    return () => {
      document.title = prevTitle;
      if (descEl && prevDesc !== null) descEl.setAttribute("content", prevDesc);
      scriptEl.remove();
    };
  }, [slug]);

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
            <a href="/contact" className="btn btn--cyan btn--lg">Start a project <Icon.arrow /></a>
            <a href={"/service/" + svc.next.slug} className="btn btn--ghost btn--lg">Next: {svc.next.title} <Icon.arrow /></a>
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
            <p>Tools and technologies we use in this practice, chosen for fit, not familiarity.</p>
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
            <p>Consistent across every engagement, adapted to your constraints, not the other way around.</p>
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

      {/* ── FAQ ────────────────────────────────────────────── */}
      {svc.faqs && svc.faqs.length > 0 && (
        <section className="section">
          <div className="container svc-faq-wrap">
            <div className="section-head reveal section-head--left" style={{ maxWidth: 720, margin: 0, marginBottom: 32 }}>
              <span className="eyebrow">Frequently asked</span>
              <h2>Questions teams ask before they start</h2>
            </div>
            <div className="svc-faq">
              {svc.faqs.map((f, i) => (
                <details key={i} className="svc-faq-item reveal" style={{ transitionDelay: (i * 40) + "ms" }}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

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
                <a key={c.slug} href={"/case-study/" + c.slug} className="cs-card reveal">
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
