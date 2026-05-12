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
    tagline: "We discover, design, and ship AI-native web and mobile products end-to-end, from user research and UX design through LLM features, agent workflows, and the backend infrastructure to run them reliably in production. Not retrofits. Not wrappers.",
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
      { title: "Product discovery & UX design", desc: "User research, assumption mapping, information architecture, and AI-aware UX patterns, streaming states, confidence indicators, citation displays, and fallback flows, designed before engineering begins. We deliver Figma components and a design system your engineers can build from without interpretation." },
    ],
    techStack: {
      "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
      "Mobile": ["React Native", "Expo", "Swift", "Kotlin"],
      "AI & LLM": ["Claude (Anthropic)", "GPT (OpenAI)", "LangGraph", "pgvector", "Pinecone", "Eval harnesses"],
      "Backend & Data": ["Node.js", "Nest.js", "PostgreSQL", "AWS Lambda", "Kafka", "Prisma"],
      "Design & UX": ["Figma", "FigJam", "Storybook", "design tokens", "Maze"],
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
      { q: "What is AI product engineering?", a: "AI product engineering is the end-to-end process of designing, building, and deploying AI-powered software products. It combines machine learning, software architecture, and product thinking to create systems that learn, adapt, and deliver measurable business value — from initial concept through to production deployment and ongoing optimisation." },
      { q: "How does 7code approach AI product development?", a: "7code follows a structured, outcome-first process: discovery to define business goals, architecture design, iterative build sprints, evaluation loops to validate AI behaviour, and production hardening. Senior engineers lead every engagement. We measure success by business outcomes — cost reduction, revenue impact, or efficiency gains — not just technical delivery." },
      { q: "What technologies does 7code use for AI product engineering?", a: "7code builds with Python, FastAPI, and Node.js for backend services; React and Next.js for frontends; OpenAI, Anthropic Claude, and open-source LLMs for AI layers; Pinecone, Weaviate, and pgvector for vector storage; and AWS, GCP, or Azure for cloud infrastructure. Stack choices are always driven by the client’s existing environment and scalability requirements." },
      { q: "How long does an AI product build typically take?", a: "A minimum viable AI product typically takes 8–16 weeks from discovery to first production release. Complexity, integration requirements, and the maturity of the client’s data infrastructure all affect timeline. 7code uses time-boxed sprints with clear milestones, so clients see working software every two weeks rather than waiting months for a big reveal." },
      { q: "What is the minimum engagement size for AI product engineering?", a: "Contact office@7code.ro to discuss scope and fit. Smaller exploratory engagements — such as a Discovery Sprint or AI Readiness Audit — are available as entry points before committing to a full build." },
      { q: "Can 7code take a product from idea to production?", a: "Yes. 7code handles the full product lifecycle: requirements definition, technical architecture, UI/UX design integration, AI model selection, backend and frontend engineering, QA, deployment, and post-launch support. Clients can engage 7code at any stage — from greenfield concept to taking over an existing codebase that needs AI capabilities added." },
      { q: "How does 7code handle AI product validation and testing?", a: "7code uses a multi-layer testing approach: unit and integration tests for conventional code, plus AI-specific evaluation frameworks to measure model accuracy, hallucination rates, and output consistency. We build eval suites during development so performance regressions are caught before production. Human-in-the-loop review gates are included for high-stakes decision paths." },
      { q: "What does a typical AI product engineering team look like at 7code?", a: "A typical team comprises one AI architect, two to three senior backend engineers, one frontend engineer, and a QA specialist. For larger products, a product manager and DevOps engineer are added. 7code does not staff junior engineers on client projects — all roles are senior or above." },
    ],
    resourceLinks: [
      { text: "Read our guide to AI-native product engineering", url: "/resources/ai-native-product-engineering" },
      { text: "Build AI in-house or partner? Read our framework", url: "/resources/build-ai-in-house-vs-partner" },
    ],
        next: { slug: "llm-agent-development", title: "LLM & Agent Development" },
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
      { q: "What types of system integrations does 7code build?", a: "7code builds integrations across the full enterprise technology stack: API-to-API integrations between SaaS platforms, ERP and CRM connectors, HRIS integrations, payment gateway connections, IoT data ingestion pipelines, and custom middleware layers where off-the-shelf connectors cannot meet performance or compliance requirements." },
      { q: "Which APIs, ERPs, and CRMs does 7code have experience integrating?", a: "7code has integration experience with Salesforce, HubSpot, Pipedrive, SAP S/4HANA, Microsoft Dynamics, NetSuite, Workday, BambooHR, Stripe, Adyen, Xero, QuickBooks, and a range of healthcare-specific systems including HL7 FHIR-compliant EHRs. For less common systems, 7code conducts a Connector Feasibility Review before committing to a timeline." },
      { q: "How long does a typical system integration project take?", a: "A straightforward API-to-API integration between two well-documented SaaS platforms typically takes three to six weeks. ERP integrations with custom data transformation requirements run six to twelve weeks. Complex multi-system integration programmes are scoped individually. 7code provides a fixed-scope Discovery phase before full-project commitment." },
      { q: "Who maintains integrations after they are built?", a: "7code offers post-build maintenance retainers covering monitoring, error alerting, API version upgrades, and change requests as connected systems evolve. Alternatively, 7code can deliver a fully documented handover to the client’s in-house team, including runbooks, architecture diagrams, and test suites. All integrations include comprehensive logging so issues are diagnosed quickly." },
      { q: "How does 7code test system integrations?", a: "7code’s integration testing approach includes: contract testing to verify API schemas remain stable, end-to-end automated test suites that run in staging before every release, data integrity checks at both source and destination, load testing for high-volume integrations, and error-injection testing to validate that failure modes are handled gracefully rather than silently corrupting data." },
      { q: "What are the main challenges of integrating with legacy systems?", a: "Legacy systems often lack documented APIs, use non-standard data formats, have rate limits or batch-processing constraints, and require change management approval cycles that slow delivery. 7code mitigates these with a Legacy Connector Assessment upfront, adapter patterns that isolate legacy-specific logic, and phased integration approaches that avoid big-bang cutovers." },
      { q: "Should I use an iPaaS platform or custom integration code?", a: "iPaaS platforms (MuleSoft, Boomi, Make, Zapier) suit commodity integrations between common SaaS tools where volume is moderate and logic is simple. Custom integration code is warranted when performance requirements exceed iPaaS limits, data transformations are complex, compliance requires full audit trails, or total cost of ownership favours build-once over recurring licence fees." },
      { q: "What is the typical size of a system integration project at 7code?", a: "Integration projects at 7code range from focused three-week point-to-point connectors to multi-month enterprise integration programmes spanning ten or more systems. Most client engagements sit in the six-to-twelve-week range. 7code is equally comfortable with targeted integrations and large-scale integration architecture — scope and team size are matched to the actual requirement." },
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
      { q: "What is AI process automation?", a: "AI process automation uses artificial intelligence — including machine learning, natural language processing, and LLM-based agents — to execute, optimise, and monitor business workflows without constant human intervention. Unlike traditional RPA, AI automation can handle unstructured data, make contextual decisions, and adapt to process variations rather than breaking on edge cases." },
      { q: "How quickly can businesses see ROI from AI process automation?", a: "Most SME automation projects reach payback within 6–18 months, depending on the volume of work automated and the cost of manual effort replaced. Quick-win automations — such as invoice processing or report generation — can show positive ROI within the first quarter. 7code always models expected ROI before project start so clients have a clear business case." },
      { q: "What are the most common AI process automation use cases?", a: "The most in-demand use cases include invoice and document processing, customer query triage and response, HR onboarding workflows, compliance monitoring, financial reporting, and supply chain exception management. 7code has delivered automation projects across healthcare, finance, energy, logistics, and HR — adapting each solution to the client’s existing systems and compliance requirements." },
      { q: "Which industries benefit most from AI process automation?", a: "Finance and insurance benefit from automated compliance checks and report generation. Healthcare gains from clinical documentation and patient triage automation. Energy companies automate meter data processing and anomaly detection. HR teams use AI to screen candidates and automate onboarding. Operations-heavy businesses in logistics and manufacturing automate exception handling and supplier communication." },
      { q: "How does 7code integrate AI automation with existing business systems?", a: "7code maps existing workflows first, then designs automation layers that connect to your current tools — ERP, CRM, HRIS, or custom databases — via APIs, webhooks, or direct database connectors. We prioritise non-disruptive integration: automation runs alongside existing systems initially, with migration to automated workflows happening in controlled phases to minimise operational risk." },
      { q: "How is AI process automation different from traditional RPA?", a: "Traditional RPA is rule-based and brittle — it breaks when document formats or process steps change. AI process automation uses machine learning and LLMs to interpret context, handle exceptions, and improve over time. It can process unstructured inputs like emails, PDFs, and voice, making it applicable to a far wider range of business processes." },
      { q: "Who maintains AI automation systems after go-live?", a: "7code offers post-launch maintenance retainers covering model monitoring, retraining triggers, integration upkeep, and performance reporting. Clients can also opt for a knowledge-transfer model where 7code trains the in-house team to own operations. All automations are built with observability baked in — dashboards and alerting are standard, not extras." },
      { q: "How do I get started with AI process automation at 7code?", a: "The first step is a free 30-minute scoping call with a 7code senior consultant. We identify two to three high-value automation opportunities, provide a rough ROI estimate, and outline a proposed approach. If there’s a fit, we formalise scope and begin a paid Discovery Sprint — typically two weeks — before committing to a full build." },
    ],
    resourceLinks: [
      { text: "Read our complete guide to AI automation for SMEs", url: "/resources/ai-automation-for-smes" },
      { text: "Build AI in-house or partner? Read our framework", url: "/resources/build-ai-in-house-vs-partner" },
    ],
        next: { slug: "llm-agent-development", title: "LLM & Agent Development" },
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
      { q: "What is cloud agentic infrastructure?", a: "Cloud agentic infrastructure is the set of cloud-native services, orchestration layers, data pipelines, and security controls that underpin AI agent systems in production. It covers compute for inference, vector databases, message queues for agent coordination, observability tooling, and the networking and IAM policies that keep agentic workloads secure and compliant at scale." },
      { q: "Which cloud providers does 7code support for agentic infrastructure?", a: "7code designs and deploys agentic infrastructure on AWS, Google Cloud Platform, and Microsoft Azure. For clients with existing cloud commitments, 7code works within the incumbent provider. Multi-cloud and hybrid architectures — where sensitive model inference stays on-premises while orchestration runs in the cloud — are supported for regulated industries." },
      { q: "Why does AI require specialised cloud infrastructure?", a: "AI workloads have fundamentally different profiles from conventional applications: they require GPU or TPU compute for inference, low-latency access to vector databases, high-throughput pipelines for data ingestion, and sophisticated observability to monitor model behaviour over time. Standard cloud setups are inadequate — purpose-built agentic infrastructure reduces cost, latency, and operational risk significantly." },
      { q: "How does 7code optimise AI infrastructure for latency and cost?", a: "7code uses a combination of model quantisation, intelligent caching of frequent LLM responses, spot/preemptible compute for batch inference, auto-scaling groups calibrated to actual traffic patterns, and CDN-layer caching for static AI outputs. Infrastructure is right-sized during a two-week Architecture Review before build, preventing over-provisioning from day one." },
      { q: "How does 7code ensure agentic infrastructure scales with demand?", a: "7code designs infrastructure with horizontal scalability as a first principle: stateless inference services behind load balancers, Kubernetes-managed autoscaling, queue-based decoupling of agent tasks from inference compute, and database sharding strategies for vector stores. Load and stress testing is conducted before go-live; scaling thresholds are documented so clients can manage growth without emergency rearchitecting." },
      { q: "How does 7code handle security and compliance for AI infrastructure?", a: "Security is embedded at design time: IAM roles follow least-privilege principles, all data at rest and in transit is encrypted, network segmentation isolates AI workloads from general systems, and audit logs capture all model interactions. For EU clients, infrastructure is GDPR-compliant by design. Regulated sectors receive additional controls aligned to sector-specific frameworks." },
      { q: "What monitoring and observability does 7code build into AI infrastructure?", a: "Standard observability includes: model latency and error rate dashboards, token usage and cost tracking per agent, anomaly detection on output distributions, human-in-the-loop review queues for flagged outputs, and alerting for infrastructure events. 7code typically delivers observability via Grafana, Datadog, or AWS CloudWatch depending on the client’s existing tooling." },
      { q: "How does 7code support migration from legacy infrastructure to cloud agentic architecture?", a: "7code conducts a Legacy Infrastructure Assessment to map existing systems, identify integration points, and define a phased migration path that keeps current operations running throughout. Migration is staged: infrastructure is rebuilt in parallel, workloads are migrated incrementally with rollback capability, and the legacy system is decommissioned only after the new architecture is validated in production." },
    ],
    next: { slug: "ai-outstaffing", title: "AI Engineering Outstaffing" },
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
      { q: "What is AI outstaffing?", a: "AI outstaffing means placing dedicated AI engineers from 7code — including LLM specialists, ML engineers, AI architects, and data engineers — directly within a client’s team. The engineers work exclusively on the client’s projects, using the client’s tools and processes, under the client’s day-to-day direction, with 7code handling employment, HR, benefits, and technical oversight." },
      { q: "How is AI outstaffing different from staff augmentation?", a: "The terms are often used interchangeably, but there is a meaningful distinction. Staff augmentation typically implies adding individuals to supplement a project. AI outstaffing, as 7code practises it, means placing a pre-formed, AI-specialised team that operates with continuity, shared technical standards, and peer review — not a collection of individual contractors working in isolation." },
      { q: "What does an AI outstaffing team from 7code typically include?", a: "A typical outstaffing team includes one to three senior AI/ML engineers, optionally an AI architect for system design decisions, and a QA engineer for AI evaluation. Team composition is adjusted to the client’s backlog and roadmap. 7code does not outstaff junior engineers — every placed engineer has a minimum of five years of relevant professional experience." },
      { q: "How quickly can 7code place an AI outstaffing team?", a: "7code can typically present matched engineer profiles within five business days of a signed agreement and completed technical brief. First engineers can be onboarded and operational within two to three weeks. For urgent requirements, a fast-track process is available — contact office@7code.ro with your timeline and 7code will confirm feasibility within 24 hours." },
      { q: "Does 7code operate a senior-only policy for outstaffing?", a: "Yes. 7code’s outstaffing service places senior engineers only — defined as a minimum of five years of professional experience, with specific AI/ML domain depth. This policy exists because clients using outstaffing typically need engineers who can operate independently, make sound technical decisions without oversight, and integrate quickly without extended ramp-up periods." },
      { q: "How does 7code protect IP and confidentiality for outstaffing clients?", a: "All outstaffing engagements are covered by a comprehensive NDA signed before any technical discussions begin. Engineers placed at client sites sign individual confidentiality agreements as part of their engagement terms. IP developed during the engagement belongs to the client by default. 7code’s standard contract includes explicit IP assignment clauses — clients can also use their own paper." },
      { q: "What does the onboarding process look like for a 7code outstaffing engagement?", a: "Onboarding begins with a two-day technical immersion: engineers review the client’s codebase, architecture docs, and toolchain, then meet key stakeholders. By end of week one, they are typically contributing to the active sprint. 7code provides an onboarding checklist and assigns a technical lead as a point of contact for the first 30 days." },
      { q: "How long do AI outstaffing engagements typically last?", a: "Most 7code outstaffing engagements run for six to twenty-four months. The minimum engagement is three months to ensure meaningful ramp-up and delivery. Engagements are governed by rolling monthly terms after the initial period, with a standard 30-day notice clause. Long-term clients often expand team size over time as product scope grows." },
    ],
    resourceLinks: [
      { text: "Compare staff augmentation vs dedicated team", url: "/resources/staff-augmentation-vs-dedicated-team" },
      { text: "Read our nearshore Romania guide", url: "/resources/nearshore-software-romania" },
    ],
        next: { slug: "ai-product-engineering", title: "AI-Native Product Engineering" },
  },

  "llm-agent-development": {
    slug: "llm-agent-development",
    title: "LLM & Agent Development",
    shortTitle: "LLM & Agents",
    tagline: "Custom LLM integrations and multi-step agent systems built for production, not demos. From OpenAI and Anthropic API integrations to LangGraph pipelines with full evaluation coverage.",
    summary: "LLM and agent development is where most teams underestimate the gap between a working prototype and a reliable production system. We build that layer: prompt architectures that hold under adversarial input, retrieval pipelines tuned on held-out eval sets, multi-step agents with state persistence and human-in-the-loop checkpoints, and the observability to catch model drift before users file tickets. We've shipped LLM-first products across news, healthcare, legal, and enterprise SaaS — and we know the difference between a demo that impresses a boardroom and a system that earns trust at scale.",
    icon: "cpu",
    accentColor: "#7C3AED",
    stats: [
      { v: "6 wks", l: "to production LLM system" },
      { v: "RAG + agents", l: "core architecture" },
      { v: "Claude · GPT", l: "primary providers" },
      { v: "Eval-gated", l: "every release" },
    ],
    problem: {
      title: "Most LLM integrations fail between the demo and the first production incident.",
      body: "The prompt works in the playground. It breaks at scale because edge cases weren't in the test set, retrieval degrades on real documents, and confidence thresholds were never defined. Most teams fix this reactively: a production incident, a round of prompt patching, a rollback. We build the evaluation harness, retrieval design, fallback paths, and confidence calibration before the first production deploy, so the system handles the real world on day one.",
    },
    whatWeDeliver: [
      { title: "LLM API integrations", desc: "Production-ready integrations with Anthropic (Claude), OpenAI (GPT), Mistral, and open-weight models via Ollama or vLLM. Streaming, function calling, structured outputs, and the retry and rate-limit handling that keeps your system up under load." },
      { title: "Multi-step agent pipelines", desc: "Agentic systems that plan, call tools, read results, and decide next steps — built on LangGraph or first-party SDKs with full state persistence, memory management, and human-in-the-loop escalation at configurable confidence thresholds." },
      { title: "RAG system design and build", desc: "Retrieval-augmented generation tuned for your corpus: chunking strategy, embedding model selection, hybrid retrieval (semantic + keyword), reranking, and the held-out eval set that proves it. Not a template — designed to your documents and query patterns." },
      { title: "Prompt engineering and management", desc: "Structured prompt libraries with versioning, A/B testing, and regression tracking. We treat prompts as first-class code artefacts: reviewed, tested, and deployed through CI with eval gates, not edited live in production." },
      { title: "LLM evaluation harnesses", desc: "Custom eval frameworks (RAGAS, Braintrust, or bespoke) that score every release on your domain-specific prompt set. Evaluation is a gate, not a retrospective: a failing score blocks the deploy." },
      { title: "Streaming and real-time LLM UX", desc: "Client-side streaming implementations (SSE, WebSockets) with skeleton states, confidence indicators, citation displays, and graceful fallback paths — the UX layer that turns a model response into a trustworthy user experience." },
    ],
    techStack: {
      "LLM providers": ["Claude (Anthropic)", "GPT-4o (OpenAI)", "Mistral", "Llama via Ollama / vLLM"],
      "Orchestration": ["LangGraph", "LangChain", "LlamaIndex", "first-party SDKs"],
      "RAG & retrieval": ["pgvector", "Pinecone", "Qdrant", "Weaviate", "hybrid BM25 + vector"],
      "Evaluation": ["RAGAS", "Braintrust", "Inspect AI", "custom harnesses"],
    },
    process: [
      { step: "01", title: "Capability scoping and eval design", desc: "Before writing any code, we define what 'good' looks like: the user jobs the LLM owns, the failure modes it must not produce, and a held-out evaluation dataset built from your real queries and documents. This becomes the specification every sprint is scored against." },
      { step: "02", title: "Iterative build with eval gates", desc: "Two-week cycles: build a narrow capability, run it against the eval set, measure quality on held-out examples (not cherry-picked demos), and iterate. You see the score delta at every review, and the specific failure cases driving the next sprint's focus." },
      { step: "03", title: "Production hardening and handoff", desc: "Confidence thresholds, fallback paths, prompt versioning, evaluation CI, latency and cost dashboards, and drift monitoring. We do not consider an LLM system shipped until it has observability that catches degradation before users notice it." },
    ],
    cases: ["wholesum", "daily8", "hera"],
    seoTitle: "LLM & Agent Development Services | 7code AI Agency",
    metaDescription: "Custom LLM and agent development by 7Code. OpenAI and Anthropic integrations, LangGraph pipelines, RAG systems, and eval-gated releases for production AI.",
    faqs: [
      { q: "What are LLM agents?", a: "LLM agents are AI systems that use large language models as a reasoning engine to plan, make decisions, and take actions — calling tools, querying databases, browsing the web, or triggering other systems — in pursuit of a defined goal. Unlike a simple chatbot, an agent can decompose complex tasks, retry on failure, and operate autonomously over multiple steps." },
      { q: "What are common use cases for LLM agents in business?", a: "Common enterprise use cases include: AI research agents that gather and synthesise information; customer support agents that resolve queries end-to-end; sales agents that enrich CRM records and draft outreach; compliance agents that monitor documents for regulatory changes; and operations agents that orchestrate multi-system workflows without human handoffs. 7code builds purpose-built agents for each context." },
      { q: "How much does it cost to build an LLM agent?", a: "Costs depend on scope and complexity. 7code provides fixed-price Discovery Sprints so clients understand architecture and cost before committing to the full build. Contact office@7code.ro for a scoped estimate." },
      { q: "How long does it take to build an LLM agent?", a: "A production-ready single-purpose LLM agent typically takes four to eight weeks to build, including discovery, architecture, development, evaluation, and deployment. Multi-agent systems or agents requiring deep integration with enterprise systems may take twelve to twenty weeks. 7code uses two-week sprint cycles with working demos at the end of each sprint." },
      { q: "What is the difference between prompt engineering and fine-tuning for LLM agents?", a: "Prompt engineering shapes model behaviour through careful instruction design — it is fast, cheap, and reversible. Fine-tuning retrains a model on domain-specific data to bake in specialised knowledge or style — it is slower, more expensive, and harder to iterate. 7code defaults to prompt engineering and RAG for most business cases, reserving fine-tuning for when retrieval cannot meet accuracy requirements." },
      { q: "How does 7code handle hallucination and safety in LLM agent systems?", a: "7code implements guardrails at multiple levels: retrieval-augmented generation (RAG) to ground answers in verified data, output validation layers that check agent responses before acting, confidence thresholds that trigger human escalation, and audit logging of all agent decisions. For high-stakes domains — healthcare, finance, legal — additional human-in-the-loop checkpoints are mandatory design requirements." },
      { q: "What are multi-agent systems and when does 7code recommend them?", a: "Multi-agent systems are architectures where multiple specialised AI agents collaborate — one researches, one writes, one validates — coordinated by an orchestrator. 7code recommends multi-agent designs when tasks are too complex for a single agent, when parallel processing is needed for speed, or when separation of concerns reduces hallucination risk in high-stakes workflows." },
      { q: "Which LLM does 7code recommend — OpenAI, Anthropic, or open-source?", a: "Model selection depends on the use case. OpenAI GPT-4o suits broad reasoning and tool use. Anthropic Claude excels at long-context tasks and safety-critical applications. Open-source models (Llama, Mistral) are preferred when data must remain on-premises or costs at scale demand it. 7code is model-agnostic and selects based on accuracy, cost, latency, and compliance requirements." },
    ],
    next: { slug: "cloud-agentic-infra", title: "Cloud & Agentic Infrastructure" },
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
    return () => {
      document.title = prevTitle;
      if (descEl && prevDesc !== null) descEl.setAttribute("content", prevDesc);
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
            {svc.resourceLinks && svc.resourceLinks.length > 0 && (
              <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                {svc.resourceLinks.map((rl, i) => (
                  <a key={i} href={rl.url} style={{ color: "var(--cyan-600)", fontWeight: 600, fontSize: 15 }}>{rl.text} →</a>
                ))}
              </div>
            )}
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
