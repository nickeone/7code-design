/* global React, Icon, CTAStrip */
/* Resource pages — slug-routed under /resources/ */

const RESOURCES_DATA = {
  "ai-automation-for-smes": {
    slug: "ai-automation-for-smes",
    title: "AI Automation for SMEs: The Complete Guide (2026)",
    metaDescription: "A practical guide to AI automation for small and medium-sized businesses — use cases, ROI math, build vs buy, and how to get started.",
    datePublished: "2026-05-12",
    dateModified: "2026-10-20",
    sections: [{
      heading: "Introduction",
      body: "Artificial intelligence is no longer the exclusive territory of enterprises with eight-figure technology budgets. In 2026, small and medium-sized enterprises across the UK, EU, and beyond are deploying AI automation across operations, finance, HR, and customer service — and doing so at a cost and speed that would have been unimaginable three years ago. This guide is written for business owners, operations directors, and technology leads at SMEs who want a clear-eyed view of what AI automation actually means in practice: what it can do, what it costs, how long it takes, and how to avoid the pitfalls."
    }, {
      heading: "What Is AI Automation for SMEs?",
      body: "AI automation for SMEs is the application of artificial intelligence — including machine learning models, large language models (LLMs), and intelligent workflow orchestration — to execute, monitor, and optimise business processes that previously required human effort. It is not RPA (Robotic Process Automation): traditional RPA automates deterministic, rule-based tasks and is brittle. AI automation interprets intent, handles variation, processes unstructured inputs like emails and PDFs, and improves over time. Key components include: workflow orchestration (triggering, sequencing, and monitoring automated processes); an AI decision layer (LLMs that interpret inputs and decide on actions); integration connectors (APIs and middleware connecting the automation to your ERP, CRM, HRIS, or document stores); human-in-the-loop gates (defined checkpoints where humans review AI decisions before consequential actions are taken); and observability (dashboards and alerting so you can see what the automation is doing and catch issues early)."
    }, {
      heading: "Why Now: The 2026 SME AI Window",
      body: "Three forces have converged to make 2026 the practical inflection point for SME AI adoption. Cost collapse: the cost of AI inference has fallen dramatically since 2023. Open-source maturity: models like Meta's Llama series and Mistral's open-weight releases now match or exceed the capability of proprietary models from 2022. Regulatory clarity: the EU AI Act has made clear that most SME automation use cases — document processing, internal workflow automation, customer service triage — fall into the minimal or limited risk categories. Competitive pressure: companies using AI for process automation are seeing productivity improvements of 20–40% in the specific functions automated."
    }, {
      heading: "5 SME Use Cases",
      body: "1. Operations — Invoice processing automation: an AI document processing pipeline extracts structured data from invoices, performs automated three-way matching against purchase orders in the ERP, and routes exceptions to a human reviewer queue. 2. HR — CV screening and candidate scoring agent: an LLM-based screening agent reads each CV against the job specification, scores candidates on defined criteria, generates a structured summary, and ranks candidates into tiers. 3. Finance — Automated financial reporting and anomaly detection: an automated reporting pipeline pulls data from accounting, CRM, and budget systems, runs reconciliation checks, flags anomalies, and generates a formatted management pack with LLM narrative commentary. 4. Customer service — LLM-powered support agent with human escalation: an LLM agent handles inbound queries, classifies them by type and complexity, resolves routine queries autonomously using RAG against a knowledge base, and escalates complex queries to human agents with a pre-populated context summary. 5. Sales — AI-assisted CRM data enrichment and lead scoring: new leads are automatically enriched with company data, existing records are updated on a rolling basis, and a scoring model trained on historical closed-won data ranks leads by conversion probability."
    }, {
      heading: "ROI Math for AI Automation",
      body: "The ROI calculation for AI automation is straightforward: ROI = (value of hours saved + error cost avoided − build and running cost) ÷ (build and running cost). A worked example with illustrative numbers: a process that takes 44 hours a week across the team, 70% of which the automation removes, at a loaded cost of €50 an hour. In the first 6 months that returns about 708 hours, worth about €35,400, against €11,800 of cost (a €10,000 pilot plus €300 a month to run). That is about 3 times its cost in 6 months, and the target we choose a pilot process for, not a promise: a smaller process returns less. Error cost avoided comes on top.",
      blocks: [{
        type: "p-html",
        text: "For a step-by-step version with costs and a worked example, see <a href=\"/resources/ai-automation-roi-for-smes\">AI automation ROI for SMEs</a>."
      }]
    }, {
      heading: "Build vs. Buy vs. Partner Analysis",
      body: "Build in-house is slow (6–18 months to first result) and expensive in Year 1 (hiring + tooling), but gives full control. Buy SaaS is fast (days–weeks) and low Year 1 cost, but limited to vendor roadmap and licence escalation over time. Partner with an AI agency is medium speed (4–12 weeks), medium cost (project fee), high control (you own the IP), and includes immediate access to AI engineering expertise. 7code's recommendation for most SMEs: use SaaS for commodity functions and partner for automation that is core to your competitive differentiation, involves proprietary data, or requires deep integration with your existing systems."
    }, {
      heading: "7code's Approach to SME AI Automation",
      body: "7code works with SMEs through a structured four-phase process. Phase 1 — Operational Quick Scan (1 week): a senior consultant maps your top five processes by cost and volume and identifies two to three automation candidates with clear ROI potential. Phase 2 — AI-Ready Blueprint (2 weeks): a detailed technical specification covering data flow diagrams, integration requirements, AI model selection rationale, and a phased delivery plan. Phase 3 — Automation Pilot (4–6 weeks): build and deploy the first automation in your environment, validate outputs, tune the model, and document the results. Phase 4 — Department Sprint (6–12 weeks): systematically automate the remainder of the backlog, department by department. 7code's team is senior-only — no junior engineers are placed on client projects."
    }, {
      heading: "Frequently Asked Questions",
      faqs: [{
        q: "How are SMEs using AI?",
        a: "Most small and mid-sized firms start with work they already do by hand every day: reading invoices and documents, answering routine customer questions, sorting emails and leads, and pulling numbers into reports. They connect an AI model to the systems they already use, such as their accounting, CRM or helpdesk, and keep a person checking the output."
      }, {
        q: "What are good AI automation services for small businesses?",
        a: "Most SME AI automation services fall into five types: document processing (reading invoices, matching them to orders and posting them to Xero or NetSuite); customer support assistants that answer common questions from your own content and pass hard cases to a person; recruitment screening that ranks CVs against a role; reporting and anomaly alerts on finance dashboards; and sales data enrichment in HubSpot or Salesforce. Pick the service that removes the most manual hours from one process, and check it connects to the systems you already use."
      }, {
        q: "How long does AI automation take to implement?",
        a: "A focused automation for a single process — invoice processing, CV screening, report generation — typically takes four to eight weeks from kick-off to go-live. More complex multi-process programmes run twelve to twenty weeks. 7code uses two-week sprint cycles so you see working software throughout."
      }, {
        q: "What does AI automation cost?",
        a: "At 7code, an automation pilot on one process starts from €10,000; bigger projects are scoped after the pilot. Ongoing running costs (hosting, AI usage, monitoring) are typically a few hundred euros a month, depending on volume. 7code provides a fixed-price proposal after a two-week Blueprint phase. Contact office@7code.ro for a scoped estimate."
      }, {
        q: "Do I need technical staff to use AI automation?",
        a: "No. 7code builds automations with business-user interfaces — exception queues, dashboards, and alert notifications — that require no technical knowledge to operate."
      }, {
        q: "Can AI automation integrate with my existing systems?",
        a: "Yes. 7code builds integrations to all major business platforms — SAP, Salesforce, HubSpot, NetSuite, Workday, Microsoft Dynamics, Xero — as well as custom databases and bespoke systems via API or direct database connection."
      }, {
        q: "Is AI automation secure?",
        a: "Security is designed in from the start. Data is encrypted at rest and in transit. Access controls follow least-privilege principles. For EU clients, all architecture is GDPR-compliant by design."
      }, {
        q: "What if the AI makes mistakes?",
        a: "All 7code automations include human-in-the-loop gates for consequential decisions — outputs below a confidence threshold are routed to a human reviewer rather than acted upon automatically. No automation goes live without a validated accuracy baseline."
      }, {
        q: "How can AI automation help small businesses?",
        a: "AI automation lets small businesses process invoices, screen CVs, answer customer queries, and generate reports without adding headcount. A focused pilot on one process takes four to six weeks, and we choose the process so that it can return about three times its cost within six months."
      }, {
        q: "What is the 30% rule for AI?",
        a: "The 30% rule says AI should handle roughly 30% of a workflow — the repetitive, high-volume part — while humans keep the remaining 70% that requires judgment, relationships, or creativity. It is a guardrail against over-automation: automate the toil first, keep humans on decisions, and expand AI's share only after accuracy is proven."
      }, {
        q: "What is the 10-20-70 rule for AI?",
        a: "The 10-20-70 rule states that successful AI adoption is about 10% algorithms, 20% technology and data infrastructure, and 70% people and process change. For SMEs the lesson is practical: model choice matters less than clean data, clear workflows, and staff who trust and use the automation. Budget accordingly."
      }]
    }]
  },
  "ai-customer-experience-for-smes": {
    slug: "ai-customer-experience-for-smes",
    title: "AI for Customer Experience in SMEs: Support, Sales Follow-up and Productivity (2026)",
    metaDescription: "Where AI actually helps a small company's customers: support triage, fast sales follow-up and onboarding. What the research shows, what to keep human, and how to start in 30 days.",
    datePublished: "2026-10-20",
    author: "Nicu Mardari, CEO",
    sections: [{
      heading: "Where does AI improve customer experience in a small company?",
      blocks: [{
        type: "p",
        text: "In three jobs: answering and routing support requests, following up new leads within minutes instead of days, and guiding new customers through onboarding. In each, AI drafts or routes and a person decides. Start with the one where customers wait longest today."
      }, {
        type: "p",
        text: "A small company rarely loses customers because its product is wrong. It loses them because a quote went out three days late, a support email sat in an inbox over the weekend, or a new client did not know what to do next. These are the gaps AI closes best, and they are cheap to measure."
      }]
    }, {
      heading: "The three jobs AI does well, and what the research shows",
      blocks: [{
        type: "p-html",
        text: "<strong>1. Support triage and drafted replies.</strong> AI reads each incoming request, tags it, routes it to the right person and drafts an answer from your own documentation. In the largest field study so far, 5,179 customer support agents using an AI assistant resolved 14% more issues per hour on average, and newer, less experienced agents 34% more (<a href=\"https://www.nber.org/papers/w31161\" target=\"_blank\" rel=\"noopener\">Brynjolfsson, Li and Raymond, Generative AI at Work, NBER / Quarterly Journal of Economics 2025</a>). The gain was largest for the people a small company is most likely to have: generalists, not specialists."
      }, {
        type: "p-html",
        text: "<strong>2. Sales follow-up within minutes.</strong> Most leads from a website form or a quote request go cold because nobody answers fast. Companies that tried to contact online leads within an hour were nearly 7 times as likely to have a qualifying conversation as those that waited longer (<a href=\"https://hbr.org/2011/03/the-short-life-of-online-sales-leads\" target=\"_blank\" rel=\"noopener\">Oldroyd, McElheran and Elkington, Harvard Business Review, 2011</a>). The study is older than today's AI tools, but the effect it measures is exactly what AI follow-up fixes: an instant, personal first reply, then a reminder to the salesperson."
      }, {
        type: "p-html",
        text: "<strong>3. Onboarding and repeat questions.</strong> New customers ask the same ten questions. An assistant grounded in your own documents answers them at any hour, and hands over to a person when it is not sure."
      }, {
        type: "p-html",
        text: "More broadly, people who use generative AI at work report saving about 5.4% of their working hours (<a href=\"https://www.stlouisfed.org/open-vault/2025/oct/generative-ai-productivity-future-work\" target=\"_blank\" rel=\"noopener\">Federal Reserve Bank of St. Louis, 2025</a>)."
      }]
    }, {
      heading: "Example: sales follow-up at EcoPro Picard",
      blocks: [{
        type: "p-html",
        text: "<strong>The company.</strong> EcoPro Picard, a renovation company in Alsace, France, that wins most of its work through prescribers: architects, property managers (syndics), project managers and estate agencies within about 45 km. Quote requests arrive by form, email and phone, and used to be answered when the owner had time."
      }, {
        type: "p-html",
        text: "<strong>What 7code set up.</strong> A list of the prescribers in the area, a short personal first message for each type of prescriber, and a follow-up sequence so that no request or introduction waits more than a working day. The goal set at the start: 3 to 5 new jobs a month from this channel."
      }, {
        type: "p",
        text: "Illustrative numbers (a worked example of what this kind of setup changes, not measured results from EcoPro Picard):"
      }, {
        type: "table",
        head: ["", "Before", "After"],
        rows: [["Quote requests a month", "40", "40"], ["Typical first reply", "2 days", "under 1 hour"], ["Time spent writing follow-ups", "6 hours a week", "2 hours a week"], ["Requests that never got a follow-up", "1 in 4", "0"]]
      }, {
        type: "p",
        text: "The point the example makes: the gain is not more leads, it is fewer lost ones, which is what the response-time research above predicts."
      }]
    }, {
      heading: "What to keep human, tools or custom, first 30 days",
      blocks: [{
        type: "p-html",
        text: "<strong>Keep human:</strong> complaints and anything emotional, prices and discounts, commitments on dates, and the final word on any reply that goes out under the company's name in the first weeks."
      }, {
        type: "p-html",
        text: "<strong>Off-the-shelf tool or custom build:</strong>"
      }, {
        type: "table",
        head: ["Situation", "Usually the better choice"],
        rows: [["One inbox, one CRM that already has an AI add-on", "The add-on"], ["Requests spread over email, forms, phone notes and WhatsApp", "A small custom layer that collects them in one place"], ["Answers must come from your own documents, prices or stock", "Custom, grounded in those sources"], ["Personal or health data involved", "Custom, with logging and GDPR controls from day one"]]
      }, {
        type: "p-html",
        text: "<strong>First 30 days:</strong>"
      }, {
        type: "ol",
        items: ["<strong>Week 1:</strong> pick the one job where customers wait longest; measure today's first-reply time and the share of requests that never get an answer.", "<strong>Weeks 2–3:</strong> set up drafting and routing for that job only; a person approves every reply.", "<strong>Week 4:</strong> compare against week 1; keep, adjust or stop. At 7code this is run as an automation pilot, from €10,000."]
      }, {
        type: "p-html",
        text: "Further reading: <a href=\"/resources/ai-automation-roi-for-smes\">AI automation ROI for SMEs</a>, <a href=\"/resources/ai-automation-for-smes\">AI Automation for SMEs: The Complete Guide</a> and our <a href=\"/service/ai-automation\">AI process automation service</a>."
      }]
    }]
  },
  "ai-automation-roi-for-smes": {
    slug: "ai-automation-roi-for-smes",
    title: "AI Automation ROI for SMEs: Benefits, Costs and Payback (2026)",
    metaDescription: "What AI automation saves a small business, how to calculate the ROI, what it costs and when it does not pay back. With a worked example and a pilot from €10,000.",
    datePublished: "2026-10-20",
    author: "Nicu Mardari, CEO",
    sections: [{
      heading: "Does AI automation pay off for a small business?",
      blocks: [{
        type: "p",
        text: "Usually, when it takes one repetitive, rules-heavy process off people's desks: invoice handling, support triage, copying data between systems. The return shows up as hours given back, fewer errors and shorter cycle times. Start with one process as a pilot, measure it for 30 days, then decide whether to scale."
      }, {
        type: "p",
        text: "Most small and mid-sized companies do not need an AI strategy to see a return. They need one process that costs them hours every week, a way to measure it before and after, and a pilot small enough to stop if it does not work. This guide shows how to find that process, how to calculate the return, and what it costs."
      }]
    }, {
      heading: "Benefits that show up in the numbers",
      blocks: [{
        type: "p",
        text: "Three benefits are worth measuring because they turn into money: hours returned, errors avoided and cycle time. Anything else (\"better decisions\", \"innovation\") is real but hard to put in an ROI."
      }, {
        type: "bullets",
        items: ["<strong>Hours returned.</strong> People who use generative AI tools at work report saving 5.4% of their working hours, about 2.2 hours in a 40-hour week (<a href=\"https://www.stlouisfed.org/open-vault/2025/oct/generative-ai-productivity-future-work\" target=\"_blank\" rel=\"noopener\">Federal Reserve Bank of St. Louis</a>, survey of US workers, November 2024). That is for individual tool use. Automating a whole process saves more, because the task stops landing on anyone's desk at all.", "<strong>Errors avoided.</strong> Re-keyed invoices, missed follow-ups and wrong stock counts cost money twice: the error, then the time to find and fix it. Count how many corrections a process needs per month before you start.", "<strong>Cycle time.</strong> How long from an invoice arriving to it being paid, or from a lead coming in to someone answering it. Shorter cycles mean faster cash and fewer lost deals."]
      }, {
        type: "p-html",
        text: "Small companies are where the gap is. In the EU, 17% of small enterprises (10–49 people) used AI in 2025, against 55% of large ones; in Romania the figure is 5.2%, the lowest in the EU. The most common reason companies give for not using it is lack of relevant expertise (71% of those that considered it) (<a href=\"https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Use_of_artificial_intelligence_in_enterprises\" target=\"_blank\" rel=\"noopener\">Eurostat, Use of AI in enterprises, 2025</a>)."
      }]
    }, {
      heading: "How to calculate the ROI",
      blocks: [{
        type: "p",
        text: "ROI is the value of the time and errors saved, minus what the automation costs to build and run, divided by that cost."
      }, {
        type: "callout",
        text: "ROI = (hours saved × loaded hourly cost + error cost avoided − build cost − running cost) ÷ (build cost + running cost)"
      }, {
        type: "p",
        text: "Worked example (illustrative numbers, not a client result):"
      }, {
        type: "table",
        head: ["Input", "Value"],
        rows: [["Time the process takes today", "44 hours a week across the team (a bit more than one full-time person)"], ["Share of that time the automation removes", "70%"], ["Working weeks a year", "46"], ["Loaded cost per hour", "€50"], ["Pilot build cost", "€10,000"], ["Running cost (hosting, AI usage, monitoring)", "€300 a month"]]
      }, {
        type: "p-html",
        text: "In the first 6 months that gives about 708 hours returned, worth about €35,400. Cost for the same 6 months is €11,800 (€10,000 build + €1,800 running), so the pilot returns about <strong>3 times its cost in 6 months</strong> and pays for itself in under 2 months. Over a full year: about 1,417 hours, worth €70,840, against €13,600. Error cost avoided is left out; add it if the process has a known correction rate."
      }, {
        type: "p",
        text: "3x in 6 months is the target we choose a pilot process for, not a promise. A smaller process returns less: the same setup on a 25-hour-a-week process returns about 1.7x in 6 months."
      }]
    }, {
      heading: "What it costs and how long it takes",
      blocks: [{
        type: "p",
        text: "At 7code, an automation pilot on one process starts from €10,000. Anything bigger is scoped after the pilot, once the numbers from the first process are known. A pilot takes 4–6 weeks from kickoff to a working, measured result."
      }, {
        type: "p",
        text: "What moves the cost, so you can place your own case:"
      }, {
        type: "bullets",
        items: ["<strong>How many systems the process touches.</strong> One inbox and one spreadsheet is cheap; an ERP, a CRM and a bank feed are not.", "<strong>How clean the data is.</strong> Scanned paper and free-text emails need extraction and checking before anything can be automated.", "<strong>How much judgement is involved.</strong> Rules are cheap to automate; decisions that need a person to approve add review steps.", "<strong>Compliance.</strong> Personal or health data adds logging, access control and GDPR work from day one."]
      }]
    }, {
      heading: "When automation does not pay back",
      blocks: [{
        type: "bullets",
        items: ["<strong>The process is rare.</strong> A task done twice a month will not repay a build, however painful it is.", "<strong>The process changes every quarter.</strong> Automation built on rules that keep moving needs rebuilding each time.", "<strong>Nobody owns it afterwards.</strong> An automation without an owner breaks quietly when a supplier changes an invoice format.", "<strong>The data is not there.</strong> If the information lives in people's heads or on paper that never gets scanned, fix that first.", "<strong>The real problem is the process itself.</strong> Automating a bad process makes the bad result arrive faster. Simplify, then automate."]
      }]
    }, {
      heading: "How 7code runs the pilot",
      blocks: [{
        type: "ol",
        items: ["<strong>Pick one process</strong> with you: frequent, rules-heavy, and painful today.", "<strong>Measure the baseline</strong>: hours per week, corrections per month, cycle time.", "<strong>Build the pilot</strong> on that one process, from €10,000.", "<strong>Run it for 30 days</strong> next to the old way and compare against the baseline.", "<strong>Decide</strong>: scale it to more processes, adjust it, or stop. Bigger projects are scoped only after this."]
      }, {
        type: "p-html",
        text: "Further reading: <a href=\"/resources/ai-automation-for-smes\">AI Automation for SMEs: The Complete Guide</a>, <a href=\"/blog/which-business-process-to-automate-first\">Which business process should you automate first?</a>, <a href=\"/blog/hire-or-automate-which-costs-less\">Hire or automate: which costs less?</a>, <a href=\"/resources/build-ai-in-house-vs-partner\">Build AI in-house vs with a partner</a>, <a href=\"/resources/ai-customer-experience-for-smes\">AI for customer experience in SMEs</a> and our <a href=\"/service/ai-automation\">AI process automation service</a>."
      }]
    }]
  },
  "ai-native-product-engineering": {
    slug: "ai-native-product-engineering",
    title: "AI-Native Product Engineering: How to Build AI Products That Actually Work",
    metaDescription: "A complete guide to AI-native product engineering — architecture, methodology, team composition, and avoiding common failure modes.",
    datePublished: "2026-05-12",
    sections: [{
      heading: "Introduction",
      body: "Most software products built in the last decade have AI added to them. A recommendation widget here, a chatbot there, a classification model bolted onto an existing workflow. This is AI-assisted product development — and while it delivers incremental value, it is fundamentally different from what leading engineering teams are now building: products where AI is not a feature, but the architecture. AI-native product engineering starts from the premise that intelligence is the product. The system reasons, adapts, and improves. The value is not in the code that runs deterministically — it is in the decisions the system makes autonomously, the context it accumulates, and the outcomes it produces without human instruction at every step."
    }, {
      heading: "What AI-Native Means (vs AI-Assisted vs AI-Bolted-On)",
      body: "AI-bolted-on products are conventional software applications that have had an AI feature added post-launch. The AI component is peripheral. AI-assisted products use AI to augment human workflows — the AI makes suggestions, drafts content, or classifies inputs, but a human reviews every output before action is taken. AI-native products are fundamentally different. The AI layer is not augmenting a human process — it is replacing or orchestrating it. The system has agency: it can plan multi-step actions, call external tools, make decisions within defined bounds, and operate without human instruction at each step. The engineering implications: AI-native requires LLM orchestration + tool use + memory/state management + evaluation frameworks + safety layers + observability — all as first-class engineering concerns."
    }, {
      heading: "The AI-Native Product Stack",
      body: "Building an AI-native product requires decisions across five layers. Layer 1 — Foundation Models: the core reasoning engine. Options include proprietary frontier models (OpenAI GPT-4o, Anthropic Claude, Google Gemini), open-weight models (Meta Llama 3, Mistral Large), and fine-tuned domain models. Layer 2 — Orchestration: the logic that determines how the AI operates — what tools it can call, how it plans multi-step tasks, how it handles failures. Key frameworks include LangChain, LlamaIndex, and production-grade orchestration platforms like Temporal or AWS Step Functions. Layer 3 — Memory and Context: short-term context (conversation history within a session), long-term memory (persistent storage), and retrieval-augmented generation (RAG) using vector databases for semantic search. Layer 4 — Tool Use and Integrations: the APIs, databases, and workflows the agent can call. Tool permissions are a critical security and reliability concern. Layer 5 — Evaluation and Safety: eval suites, LLM-as-judge evaluation, guardrails, and regression testing."
    }, {
      heading: "Five AI-Native Product Types",
      body: "1. AI Copilot — a persistent AI assistant embedded in a professional workflow tool, with deep context about the user's work and the ability to take actions within the tool. 2. Autonomous Agent — a system that executes a defined task end-to-end without human involvement at each step. 3. AI-Enhanced SaaS — a Software-as-a-Service product where AI is the primary value proposition. 4. AI Analytics Platform — a platform that ingests large volumes of structured or unstructured data, applies AI models to extract patterns and insights, and presents findings in a usable interface. 5. AI Integration Hub — a platform that sits between an organisation's existing systems and uses AI to route, transform, enrich, and orchestrate data flows intelligently."
    }, {
      heading: "Build Methodology: Spec to Production",
      body: "Phase 1 — Specification: define task boundaries, accuracy thresholds, failure modes, and data requirements. Phase 2 — Prototype and Eval Baseline: before a single line of production code is written, build a functional prototype to validate that the core AI capability is achievable with available models and data. This phase prevents the most expensive failure mode: building a polished product around a model that cannot do the job. Phase 3 — Eval Loop: every change to prompts, model versions, retrieval configuration, or orchestration logic is measured against the eval dataset before it is merged. Phase 4 — Production Hardening: latency optimisation, error handling for API failures, observability instrumentation, security review of tool permissions, cost modelling at production scale, and load testing."
    }, {
      heading: "Team Composition for AI-Native Products",
      body: "A production AI-native product requires: an AI Architect (system design, model selection, orchestration architecture, eval framework design — Principal/Staff level); AI/ML Engineers (prompt engineering, fine-tuning, eval suite development, RAG pipeline implementation — Senior level); Backend Engineers (API development, tool integrations, database design, infrastructure — Senior level); Frontend Engineers (UI/UX for AI interactions, streaming responses, human-in-the-loop interfaces — Senior level); DevOps/MLOps Engineers (CI/CD pipeline, model deployment, monitoring, cost management — Senior level); and a QA Engineer (eval suite maintenance, regression testing, safety testing — Senior level). 7code operates a senior-only policy — no junior engineers are placed on AI-native product builds."
    }, {
      heading: "Common Failure Modes (and How to Avoid Them)",
      body: "1. Skipping the eval baseline — building a polished product before validating that the AI can do the core task. 2. Treating prompts as final — committing to a prompt design early and never revisiting it. 3. Ignoring latency until production — LLM inference is slow; define latency requirements in the spec. 4. Over-permissioned tools — giving the agent access to tools it does not need; apply least-privilege principles. 5. No human-in-the-loop for consequential actions — deploying an agent that takes irreversible actions without a human review gate. 6. Underestimating data quality requirements — RAG and fine-tuning both require good data. 7. Building for the best-case input — build eval datasets that include noisy, ambiguous, and adversarial inputs."
    }, {
      heading: "7code's Approach to AI-Native Product Delivery",
      body: "7code builds AI-native products for clients across healthcare, finance, energy, and enterprise SaaS. Three principles: Senior-only delivery — every AI-native build is led by an AI Architect with production AI product experience. Eval-first methodology — we do not start production engineering until there is a validated eval baseline. Business-outcome measurement — we define success metrics before build begins and consider an engagement complete only when these metrics are demonstrably met in production. Engagements begin with a two-week AI Product Discovery Sprint, which produces a validated prototype, an eval baseline, a production architecture design, and a fixed-price build proposal. Contact office@7code.ro to discuss your product."
    }, {
      heading: "Frequently Asked Questions",
      faqs: [{
        q: "What is the difference between an AI-native product and a conventional product with AI features?",
        a: "An AI-native product is one where the AI capability is the core value proposition — the product cannot function or be described without it. The engineering architecture, team requirements, and development methodology are fundamentally different between the two."
      }, {
        q: "How much does it cost to build an AI-native product?",
        a: "Contact office@7code.ro for a scoped estimate. 7code provides fixed-price proposals after a two-week Discovery Sprint."
      }, {
        q: "How long does an AI-native product build take?",
        a: "A focused MVP takes eight to sixteen weeks. Products requiring custom fine-tuning, large RAG data pipelines, or complex multi-agent orchestration typically run twenty to thirty weeks. 7code uses two-week sprints with demo checkpoints throughout."
      }, {
        q: "Do I need proprietary data to build an AI-native product?",
        a: "Not always. Many AI-native products use retrieval-augmented generation (RAG) with publicly available or client-provided documents. Fine-tuning on proprietary data makes sense when the domain is highly specialised or when accuracy requirements exceed what prompt engineering can achieve."
      }, {
        q: "How does 7code handle IP ownership for AI-native products?",
        a: "All code, prompts, eval datasets, and model configurations developed during a 7code engagement are owned by the client. 7code does not retain rights to client work or use client data for internal training or benchmarking."
      }, {
        q: "How do you evaluate whether an AI-native product is working correctly?",
        a: "7code builds eval suites — datasets of representative inputs with expected outputs — before production engineering begins. These suites run automatically on every code change. In production, we add LLM-as-judge evaluation and human review sampling for high-stakes outputs."
      }]
    }]
  },
  "nearshore-software-romania": {
    slug: "nearshore-software-romania",
    title: "Nearshore Software Development in Romania: The 2026 Guide",
    metaDescription: "Why Romania is Europe's leading nearshore software destination — talent, time zones, cost, and how to choose the right partner.",
    datePublished: "2026-05-12",
    dateModified: "2026-10-20",
    sections: [{
      heading: "What is nearshore software development in Romania?",
      body: "Nearshore software development in Romania means hiring engineers based in Romania to build or maintain your software while you work from the UK or elsewhere in Europe. Romania is in the EU, so GDPR applies. It is two hours ahead of the UK, which leaves most of the working day shared."
    }, {
      heading: "Introduction",
      body: "The question of where to build your software team — onshore, nearshore, or offshore — has become more nuanced, and more consequential, than at any point in the industry's history. Remote-first norms, AI-assisted development, and the globalisation of engineering talent have reshaped the calculus. Yet despite all this change, geography still matters: for time zone alignment, for compliance, for cultural fit, and for the sustained quality that only comes from engineers who treat their work as a career, not a contract. This guide makes the case for Romania as the leading nearshore software destination for UK and EU technology buyers in 2026."
    }, {
      heading: "What Nearshore Means (vs Offshore, Onshore, Blended)",
      body: "Onshore software development means working with a team in your own country. Costs are highest, time zone alignment is perfect, cultural proximity is maximum. Offshore development typically refers to engaging teams in low-cost geographies with significant time zone distance: India, the Philippines, Vietnam. The cost advantage can be substantial — 60–70% below UK or US rates — but carries communication friction, cultural differences, and variable quality. Nearshore splits the difference: for UK and EU buyers, Central or Eastern Europe — Poland, Romania, Bulgaria, the Czech Republic. It costs less than onshore while preserving time zone overlap (one to three hours difference) and cultural alignment. For most UK and EU SMEs and mid-market companies, nearshore Central/Eastern Europe offers the best combination of cost, quality, proximity, and compliance."
    }, {
      heading: "Why Romania: The Structural Case",
      body: "Romania's emergence as a tier-one nearshore engineering destination is the product of three decades of investment in technical education, EU accession in 2007, and a software industry that has grown consistently faster than the broader economy. EU Membership since 2007 means GDPR compliance by default — Romanian companies operating under Romanian law are EU data processors. IP protection under EU law provides a familiar legal context for UK and EU buyers. Engineering Education: Romania has two universities consistently ranked among Europe's strongest for computer science — the Polytechnic University of Bucharest (Politehnica) and the Technical University of Cluj-Napoca (UTCN). English Proficiency: the EF English Proficiency Index 2025 ranks Romania 11th of 123 countries. Time Zone: Romania operates in Eastern European Time (EET, UTC+2 in winter / UTC+3 in summer), two hours ahead of the UK year-round, which leaves most of the working day shared with UK clients."
    }, {
      heading: "Cluj-Napoca as a Technology Hub",
      body: "Cluj-Napoca is Romania's second-largest city and its undisputed technology capital. With a population of approximately 330,000 and one of Romania's largest engineering faculties at UTCN, Cluj has the talent density and infrastructure of a mature tech hub. Major companies with Cluj engineering presence include Bosch, Continental, Emerson, Cognizant, and Endava. Cluj-Napoca has direct flight connections to London, Amsterdam, Frankfurt, and other major European hubs — important when in-person collaboration is required."
    }, {
      heading: "Romanian Engineering Culture",
      body: "Four characteristics define Romanian engineering culture: Formal CS training as the norm — the majority of Romanian software engineers hold CS or engineering degrees. Attention to quality and completeness — Romanian engineering culture tends toward thoroughness, with lower defect rates and more complete documentation. Direct communication style — Romanian professional culture is more direct than many offshore locations. Engineers will raise concerns, flag technical debt, and push back on unrealistic timelines — in English, in real time."
    }, {
      heading: "How to Evaluate a Romanian Software Partner: 5 Criteria",
      body: "1. Seniority of actual delivery team — ask to meet the engineers who will work on your project before you sign. A company that uses senior staff in business development and junior staff in delivery is a pattern to avoid. 2. References from clients in your market — ask for two to three references from clients in your sector or of similar size and speak to them directly. 3. Security and compliance maturity — review the partner's ISO 27001 status, GDPR data processing practices, code security review process, and incident response procedures. 4. Commercial transparency — understand the rate card fully, including how additional work is priced, what the notice period is, and how rate increases are handled. 5. Technical alignment with your stack and problem type — if you are building AI products, evaluate the partner's specific AI engineering experience, not their general software capability."
    }, {
      heading: "7code's Position in the Romanian Market",
      body: "7code (Seven Code Development SRL) was founded in 2017 in Cluj-Napoca. The company has grown from a generalist software agency to a specialist AI product engineering firm serving clients in the UK, EU, UAE, and US. 7code's differentiation within the Romanian market rests on three pillars: AI-first specialisation — 7code has structured its entire service line around AI product engineering, AI process automation, LLM agent development, and cloud agentic infrastructure. Senior-only policy — 7code does not place junior engineers on client engagements. Business-outcome focus — 7code measures project success by client business outcomes and begins with a business case."
    }, {
      heading: "Romania vs Poland vs Portugal for UK companies",
      body: "All three are EU members: Portugal since 1986, Poland since 2004 and Romania since 2007. GDPR applies in each. Mainland Portugal shares UK time. Poland is one hour ahead and Romania two, so all three give a near-full shared working day. On English, the EF English Proficiency Index 2025 ranks Portugal 6th, Romania 11th and Poland 15th of 123 countries. On cost, Lemon.io's September 2026 contract data puts senior median rates at about $45/hr in Romania, $41.70/hr in Poland and $40–45/hr in Portugal. That makes rate a weak way to choose between them. Poland has the largest market of the three. Portugal suits teams that want no time difference. Romania suits teams that want EU-based engineers in a smaller, less crowded market."
    }, {
      heading: "Frequently Asked Questions",
      faqs: [{
        q: "What is nearshore software development?",
        a: "Nearshore software development means engaging an engineering team in a country geographically and time-zone adjacent to your own. For UK and EU buyers, nearshore typically means Central or Eastern Europe. It offers significant cost advantages over onshore (25–50%) while maintaining time zone overlap, cultural proximity, and compliance alignment."
      }, {
        q: "Is Romania in the EU?",
        a: "Yes. Romania has been an EU member state since 2007. Romanian software companies operate under EU data protection law (GDPR), EU IP protection frameworks, and EU employment regulations."
      }, {
        q: "How much cheaper is nearshore Romania compared with the UK?",
        a: "Rates vary by seniority and role. At 7code, senior engineers start from EUR 45/h."
      }, {
        q: "Does working with a Romanian team require Romanian language skills?",
        a: "No. Business English is the standard working language across Romania's technology sector. 7code communicates with all clients exclusively in English."
      }, {
        q: "How do I visit my Romanian development team in person?",
        a: "Cluj-Napoca has direct flights from London, Amsterdam, Frankfurt, Vienna, and other major European hubs. Flight time from London is approximately three hours. 7code welcomes on-site visits and recommends quarterly in-person sessions for longer-term engagements."
      }, {
        q: "Is my data safe with a Romanian software company?",
        a: "Romanian companies operating under Romanian law are EU data processors — subject to the same GDPR obligations as UK and EU companies. 7code is happy to operate within the client's own data processing framework. All 7code systems are hosted in EU-region cloud infrastructure by default."
      }]
    }]
  },
  "staff-augmentation-vs-dedicated-team": {
    slug: "staff-augmentation-vs-dedicated-team",
    title: "Staff Augmentation vs Dedicated Team: Which Is Right for You?",
    metaDescription: "A clear comparison of staff augmentation and dedicated team models — decision table, cost structure, control, and 7code's recommendation.",
    datePublished: "2026-05-12",
    dateModified: "2026-10-20",
    sections: [{
      heading: "Overview",
      body: "Two engagement models dominate how technology companies extend their engineering capacity: staff augmentation and dedicated teams. Both place external engineers inside your organisation, but the structure, accountability, and operational experience are meaningfully different. This page explains the distinction clearly, helps you identify which model fits your situation, and answers the questions we hear most frequently from clients choosing between the two."
    }, {
      heading: "Decision Table",
      body: "Control: staff augmentation places maximum control with the client — you direct each individual engineer day-to-day. Dedicated teams distribute control differently: you set business priorities and strategic direction; the team translates those into tasks and takes collective ownership of delivery. Team management: in staff augmentation, every management touchpoint falls on the client's team. In a dedicated team, day-to-day management is handled within the team itself. Speed to start: staff augmentation is faster (days to weeks per individual). Dedicated teams take slightly longer to assemble (2–4 weeks) because team composition must be considered as a whole. Cost structure: staff augmentation costs are per-head and variable. Dedicated team costs are more fixed — a monthly team rate that provides predictability for budgeting. IP ownership risk: low in both models when contracts are properly structured."
    }, {
      heading: "When Staff Augmentation Works Best",
      body: "Staff augmentation works best when: you need to fill a specific, defined skill gap quickly; your engagement is project-bounded with a clear end date; your in-house team has the management capacity to direct and supervise external individuals; and you need flexibility to scale up and down based on workload. It is the faster path when you need to fill a specific role quickly — a senior backend engineer for a sprint that starts next Monday. Individual engineers can be profiled, selected, and onboarded within one to two weeks."
    }, {
      heading: "When a Dedicated Team Works Best",
      body: "A dedicated team works best when: you are building or maintaining a product over an extended period; you want a team with collective ownership and internal accountability; you prefer to manage outcomes rather than individuals; and engineering continuity matters to your delivery model. Dedicated teams typically run on three-month minimum commitments. The upfront investment in assembly pays back in faster collective ramp-up once the team is running."
    }, {
      heading: "Frequently Asked Questions",
      faqs: [{
        q: "What's the difference between staff augmentation and a dedicated team?",
        a: "Staff augmentation places individual engineers within your team under your direct management. A dedicated team is a self-managing unit placed with you — they have their own internal structure, technical leadership, and collective accountability. The distinction matters most for management overhead: staff aug demands more of your internal management; dedicated teams demand less."
      }, {
        q: "Which is cheaper?",
        a: "Neither is categorically cheaper — the cost depends on seniority, team size, and engagement length. Staff augmentation gives more per-head flexibility and is typically priced on a daily or hourly rate. Dedicated teams are priced as a monthly package. For engagements over six months, dedicated teams often have a lower total cost due to reduced onboarding repetition and higher productivity from team continuity."
      }, {
        q: "Which gives me more control?",
        a: "Staff augmentation gives more direct, individual control — you direct each engineer's work personally. Dedicated teams give you strategic control (priorities, outcomes, timelines) while the team manages its own execution."
      }, {
        q: "How quickly can I start with each model?",
        a: "Staff augmentation: one to two weeks from agreement to first engineer active. Dedicated team: two to four weeks from agreement to full team onboarded. For urgent requirements, 7code offers a fast-track process for both models — contact office@7code.ro with your timeline."
      }, {
        q: "Which model does 7code recommend?",
        a: "7code recommends a dedicated team for most ongoing AI product development engagements, and staff augmentation for specific skill-gap fills within a client's existing team. The deciding factor is usually management capacity: if the client has a strong technical lead who can manage individuals, staff aug works. If the client wants to manage outcomes and have the team manage itself, dedicated is stronger."
      }, {
        q: "Can I switch from staff aug to a dedicated team mid-project?",
        a: "Yes. 7code supports transitions between models. The most common pattern is starting with one or two augmented engineers who build context, then transitioning to a dedicated team structure as the engagement scope grows."
      }, {
        q: "What does staff augmentation mean?",
        a: "Staff augmentation means adding external engineers to your existing team on a temporary or ongoing basis. The engineers work under your direct management, inside your sprints and tools, filling specific skill gaps without the cost and delay of permanent hiring. You keep full control of the work; the provider handles employment, payroll, and replacement risk."
      }, {
        q: "What are the different types of staff augmentation?",
        a: "There are three common types. Individual augmentation adds one or two engineers to fill a skill gap in your team. Team extension adds a small group that works inside your process under your lead. A dedicated team is a full squad, with its own lead and QA, working only on your product. You direct the work in all three."
      }, {
        q: "What is the difference between staff augmentation and outsourcing?",
        a: "With staff augmentation, you add external engineers to your own team. You direct their work, and you own delivery and risk. You usually pay per person on time and materials. With project outsourcing, you hand a defined scope to a vendor. The vendor plans and delivers it and is accountable to the specification. Pricing is usually a fixed bid or tied to milestones. A simple test: when something goes wrong, whose problem is it? If it is yours, it is augmentation. If it is the vendor's, it is outsourcing. Augmentation suits changing work you want to steer. Outsourcing suits clear, fixed-scope projects."
      }, {
        q: "What is the difference between staff augmentation and managed services?",
        a: "Staff augmentation gives you people. Managed services give you an outcome. Augmented engineers join your team, you manage them, and you pay for their time. A managed service provider runs a whole function, such as support or infrastructure, to an agreed service level. The provider manages its own staff, carries the SLA risk and usually bills a monthly retainer. Choose augmentation when you need extra hands on work you lead. Choose managed services when the function is stable and you do not want to run it day to day."
      }, {
        q: "What is the difference between staff augmentation and RPO?",
        a: "Staff augmentation supplies working engineers who remain employed by the provider and embedded in your team. RPO (Recruitment Process Outsourcing) outsources your hiring process itself — the RPO firm recruits candidates who become your own employees. Choose staff augmentation for immediate capacity; choose RPO when you want to grow permanent internal headcount."
      }]
    }]
  },
  "nearshore-romania-vs-offshore-asia": {
    slug: "nearshore-romania-vs-offshore-asia",
    title: "Nearshore Romania vs Offshore Asia: A Practical Guide for European Businesses",
    metaDescription: "A data-driven comparison of nearshore Romania and offshore India for European tech buyers — time zones, cost, quality, GDPR, and total cost of ownership.",
    datePublished: "2026-05-12",
    sections: [{
      heading: "Overview",
      body: "For European technology buyers, the build-team decision often comes down to two fundamentally different models: nearshore Central/Eastern Europe — with Romania as the leading option in 2026 — or offshore Asia, primarily India. Both deliver significant cost savings versus onshore UK or EU hiring. But the total cost of ownership, the operational experience, and the risk profile are substantially different."
    }, {
      heading: "Criteria Comparison",
      body: "Time zone overlap (vs UK): Romania (CET+2) delivers approximately seven hours of genuine daily overlap. India (IST, +4.5hr) leaves a genuine overlap window of approximately three to four hours, typically in the UK morning. Language and communication: English proficiency across Romania's technology sector is uniformly high; Romanian engineers communicate in fluent business English. In India, proficiency is strong at the senior level but variable in delivery teams. Cost: on headline rate, offshore India is approximately 50–70% cheaper per engineer-hour than Romania. However, total cost of ownership analysis narrows this gap significantly. Quality and seniority assurance: Romania's annual attrition at established technology companies runs at 8–12%. India's outsourcing sector runs at 20–30% annual attrition, frequently involving a bait-and-switch where senior engineers present in sales and junior engineers deliver. GDPR compliance: Romania, as an EU member state, is a native EU data processor. India requires Standard Contractual Clauses, transfer impact assessments, and ongoing legal management."
    }, {
      heading: "Total Cost of Ownership Analysis",
      body: "When all factors are included — management overhead, communication time (async friction adds 20–40% to decision cycles with offshore India), rework from specification gaps, attrition-driven ramp-up costs, legal/compliance overhead (SCCs, TIAs for India vs simple DPA for Romania), and travel for relationship management (short-haul vs long-haul) — the effective cost difference narrows to 10–20% for complex collaborative AI engineering engagements. For AI engineering where quality drives outcomes, the gap can disappear entirely."
    }, {
      heading: "Frequently Asked Questions",
      faqs: [{
        q: "Is nearshore Romania significantly more expensive than offshore India?",
        a: "On headline rate, yes — approximately 50–70% more per engineer-hour. When total cost of ownership is calculated (management overhead, rework, attrition, compliance, travel), the gap narrows to 10–20% for complex collaborative work, and can disappear entirely for AI engineering where quality drives outcomes."
      }, {
        q: "Can I work with a Romanian team entirely remotely?",
        a: "Yes. 7code works with clients in the UK, UAE, and US entirely remotely. The CET+2 time zone provides full daily overlap with UK clients. On-site visits are welcomed but never required."
      }, {
        q: "How do I handle GDPR when working with a Romanian software company?",
        a: "Engagement with a Romanian software company requires only a standard Data Processing Agreement — the same as you would use with a UK or German vendor. No Standard Contractual Clauses required."
      }, {
        q: "Is the quality of Romanian engineers comparable to top offshore India engineers?",
        a: "At the senior level, yes — and in AI engineering specifically, Romanian senior engineers are competitive with the strongest Indian AI talent. The key difference is consistency: variance in quality within a Romanian senior team is lower."
      }, {
        q: "Which model is better for long-term AI product development?",
        a: "For long-term AI product development requiring sustained collaboration and architectural judgment, nearshore Romania has a structural advantage: time zone alignment, lower attrition preserving accumulated AI domain knowledge, and cultural alignment with EU/UK product thinking."
      }, {
        q: "How quickly can I start with a Romanian development team?",
        a: "7code can present matched engineer profiles within five business days of a signed agreement. First engineers can be active within two to three weeks. Contact office@7code.ro."
      }]
    }]
  },
  "build-ai-in-house-vs-partner": {
    slug: "build-ai-in-house-vs-partner",
    title: "Build AI In-House vs With a Partner: The 2026 Decision Framework",
    metaDescription: "A practical framework for deciding whether to build your AI capability in-house or partner with an AI agency — 5 questions, cost comparison, and when each model wins.",
    datePublished: "2026-05-12",
    sections: [{
      heading: "Introduction",
      body: "Every organisation reaching for serious AI capability faces the same fork: build the internal team to own it, or partner with a specialist to deliver it. In 2026, this decision is more consequential than it was two years ago — AI is moving from a competitive advantage to a competitive necessity across most industries, and the wrong structural choice costs significantly more than the wrong technology choice."
    }, {
      heading: "5 Questions to Ask Before Deciding",
      body: "1. Do we have — or can we realistically hire — the AI engineering talent needed? Senior AI engineers command UK salaries of £80,000–£130,000+ per year. The UK and EU talent markets for experienced AI engineers are extremely tight. 2. How long can we afford to wait for AI capability? Building an in-house AI team from scratch takes six to eighteen months before reaching production velocity. 3. Is AI core to our competitive differentiation, or is it infrastructure? If the AI capability is a commodity, buying a SaaS product is almost certainly the right answer. If the AI is at the heart of your competitive moat, the case for in-house ownership strengthens over time. 4. Do we have the data and infrastructure foundations to support an AI team? An AI team without good data is a car without fuel. 5. What is our three-year total cost of ownership for each path? In-house AI costs compound: salaries, equity, tools, compute, and the opportunity cost of slow ramp-up."
    }, {
      heading: "Comparison Table",
      body: "Speed to market: Build in-house is slow (12–18 months to reach production velocity). Partner is fast (4–12 weeks to first production delivery). Year 1 total cost: Build in-house is very high (hiring, onboarding, tooling, infrastructure). Partner is medium (project fees, no headcount overhead). Year 3 total cost: Build in-house is decreasing per project (sunk cost paid). Partner is ongoing (retainer or per-project fees). Risk: Build in-house carries high risk (AI talent market is competitive and volatile). Partner carries lower risk (partner bears delivery risk; fixed-price options available). Expertise: Build in-house is dependent on who you hire; ramp-up from zero. Partner provides immediate access to senior AI engineering team. IP ownership: Full in both cases — explicitly assigned to client in contract."
    }, {
      heading: "When to Build In-House",
      body: "Building an in-house AI team makes sense when: you have twelve to twenty-four months before AI is existentially important to your competitive position; you can attract senior AI engineering talent with brand recognition and competitive compensation; the AI capability is genuinely at the heart of your business model; your data infrastructure is mature enough for an AI team to be productive from day one; and you have technical leaders who can manage AI engineering effectively."
    }, {
      heading: "When to Partner",
      body: "Partnering with an AI agency makes sense when: your competitive window is months, not years; you need AI automation or AI-powered features to compete effectively but your business model is not itself an AI product; you want to validate the business case before committing to a permanent internal AI engineering function; your data or compliance situation is complex and a specialist partner has dealt with it before; and budget predictability matters more than long-term cost minimisation."
    }, {
      heading: "Frequently Asked Questions",
      faqs: [{
        q: "Can I start with a partner and transition to in-house later?",
        a: "Yes — this is the most common pattern for companies taking AI seriously. Partner to build the initial system, establish performance baselines, and validate the business case. Then hire or train in-house engineers to take over maintenance and iteration. 7code designs all deliverables to support a smooth handover."
      }, {
        q: "Does working with a partner mean I lose control of my AI?",
        a: "No. 7code's standard contract assigns all IP — code, prompts, eval datasets, model configurations, architecture documents — to the client. You retain full control over the system, the data, and the direction of development."
      }, {
        q: "What does a Year 1 vs Year 3 cost comparison typically look like?",
        a: "Year 1 in-house: typically £500,000–£900,000 for a three-person senior AI team. Year 1 partner: typically £80,000–£300,000 for a delivered AI system. The crossover point depends heavily on the scope and volume of AI work and on whether you can retain the in-house team over years two and three."
      }, {
        q: "How do I ensure quality when working with an external AI partner?",
        a: "Define success metrics before any build begins — accuracy thresholds, latency targets, business outcomes. Require eval suites as a project deliverable. Insist on two-week sprint demos. Choose a partner who is willing to be accountable to business outcomes, not just code delivery."
      }, {
        q: "Is my IP safe when working with an AI partner?",
        a: "Yes, when the contract is properly structured. Key provisions: explicit IP assignment to the client for all work product; individual NDAs signed by all engineers on the project; prohibitions on the partner using client data for training other models. 7code's standard agreement includes all of these provisions."
      }, {
        q: "What size of company benefits most from partnering?",
        a: "The partner model delivers the most value for companies at Seed through Series B stage, for mid-market companies with bounded AI requirements, and for enterprise companies launching new AI-powered products within a division that does not yet have AI engineering capability."
      }]
    }]
  }
};
const RB_TEXT = {
  color: "var(--slate-700)",
  lineHeight: 1.8,
  fontSize: 16,
  marginBottom: 16
};
function ResourceBlock({
  block
}) {
  if (block.type === "p") return /*#__PURE__*/React.createElement("p", {
    style: RB_TEXT
  }, block.text);
  if (block.type === "p-html") return /*#__PURE__*/React.createElement("p", {
    className: "resource-html",
    style: RB_TEXT,
    dangerouslySetInnerHTML: {
      __html: block.text
    }
  });
  if (block.type === "bullets" || block.type === "ol") {
    const Tag = block.type === "ol" ? "ol" : "ul";
    return /*#__PURE__*/React.createElement(Tag, {
      className: "resource-html",
      style: {
        ...RB_TEXT,
        paddingLeft: 22
      }
    }, block.items.map((it, i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        marginBottom: 8
      },
      dangerouslySetInnerHTML: {
        __html: it
      }
    })));
  }
  if (block.type === "callout") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...RB_TEXT,
        background: "var(--slate-50)",
        borderLeft: "3px solid var(--cyan-600)",
        padding: "16px 20px",
        borderRadius: 8,
        fontWeight: 600,
        color: "var(--ink)"
      }
    }, block.text);
  }
  if (block.type === "table") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        overflowX: "auto",
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: "100%",
        borderCollapse: "collapse",
        fontSize: 15,
        color: "var(--slate-700)"
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, block.head.map((h, i) => /*#__PURE__*/React.createElement("th", {
      key: i,
      style: {
        textAlign: "left",
        padding: "10px 12px",
        borderBottom: "2px solid var(--slate-200)",
        color: "var(--ink)"
      }
    }, h)))), /*#__PURE__*/React.createElement("tbody", null, block.rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
      key: i
    }, r.map((c, j) => /*#__PURE__*/React.createElement("td", {
      key: j,
      style: {
        padding: "10px 12px",
        borderBottom: "1px solid var(--slate-200)",
        verticalAlign: "top"
      }
    }, c)))))));
  }
  return null;
}
function ResourcePage({
  slug
}) {
  const page = RESOURCES_DATA[slug];

  // Title/description/OG are set at build time by scripts/prerender.mjs (single source of truth for crawlers and browsers).

  if (!page) {
    return /*#__PURE__*/React.createElement("div", {
      className: "page"
    }, /*#__PURE__*/React.createElement("section", {
      className: "page-hero"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("h1", null, "Resource not found"))));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("section", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      justifyContent: "center"
    }
  }, "Resource"), /*#__PURE__*/React.createElement("h1", {
    style: {
      maxWidth: 800,
      margin: "0 auto"
    }
  }, page.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--slate-500)",
      marginTop: 8
    }
  }, "Published ", page.datePublished, page.dateModified ? " · Updated " + page.dateModified : "", " \xB7 ", page.author ? "By " + page.author : "7code AI Engineering"))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 800
    }
  }, page.sections.map((section, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "reveal",
    style: {
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: "var(--ink)",
      marginBottom: 16,
      letterSpacing: "-0.02em"
    }
  }, section.heading), section.body && /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--slate-700)",
      lineHeight: 1.8,
      fontSize: 16
    }
  }, section.body), section.blocks && section.blocks.map((b, k) => /*#__PURE__*/React.createElement(ResourceBlock, {
    key: k,
    block: b
  })), section.faqs && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, section.faqs.map((faq, j) => /*#__PURE__*/React.createElement("details", {
    key: j,
    className: "svc-faq-item reveal",
    style: {
      transitionDelay: j * 40 + "ms"
    }
  }, /*#__PURE__*/React.createElement("summary", null, faq.q), /*#__PURE__*/React.createElement("p", null, faq.a)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      padding: "40px 32px",
      background: "var(--slate-50)",
      borderRadius: 16,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      fontWeight: 700
    }
  }, "Ready to discuss your project?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--slate-500)",
      marginTop: 8,
      marginBottom: 24
    }
  }, "7code's senior AI engineering team is based in Cluj-Napoca, Romania \u2014 serving UK, EU, UAE, and US clients."), /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--cyan btn--lg"
  }, "Start a conversation ", /*#__PURE__*/React.createElement(Icon.arrow, null))))));
}
window.ResourcePage = ResourcePage;
window.RESOURCES_DATA = RESOURCES_DATA;
window.dispatchEvent(new Event('routes-loaded'));
