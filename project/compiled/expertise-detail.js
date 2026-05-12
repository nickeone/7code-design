/* global React, Icon, CSCover, CTAStrip */
/* Expertise detail page, one per industry vertical, slug-routed */

const {
  useState: useStateEXP
} = React;

// ─────────────────────────────────────────────────────────────────
// All expertise data, keyed by slug
// ─────────────────────────────────────────────────────────────────
const EXPERTISE = {
  "healthcare": {
    slug: "healthcare",
    title: "Healthcare",
    tagline: "HealthTech engineering for clinics, hospitals, and FemTech founders: HIPAA + GDPR-compliant platforms with HL7 / FHIR EHR interoperability, telehealth, patient engagement, and clinically-grounded AI.",
    summary: "HealthTech software has to be clinician-grade in reliability and compliance and patient-grade in usability, at the same time. 7Code ships platforms that do both, across HL7 / FHIR EHR interoperability, clinical decision support, telehealth, patient engagement, and AI features grounded in verified clinical knowledge. Recent work includes Hera Health Tech's AI-powered fertility-clinic patient app (3-month MVP, HIPAA + GDPR ready).",
    icon: "heart",
    kind: "health",
    color: "#E53E3E",
    bg: "cover--health",
    stats: [{
      v: "3",
      l: "HIPAA-compliant platforms"
    }, {
      v: "240+",
      l: "clinics served"
    }, {
      v: "100%",
      l: "audit pass rate"
    }, {
      v: "12 wks",
      l: "avg. delivery"
    }],
    problem: {
      title: "The healthcare software problem nobody talks about.",
      body: "Most healthcare software fails on one axis or the other: technically compliant but unusable, or beautifully designed but failing its first audit. The regulatory stack is genuinely hard, HIPAA, HL7, FHIR, SOC 2, and the UX bar set by consumer apps means clinicians and patients won't tolerate poor experiences."
    },
    capabilities: [{
      icon: Icon.pulse,
      title: "EHR Interoperability",
      desc: "HL7 FHIR-native integrations with Epic, Cerner, Meditech and custom EHR systems. We've done the hard work of mapping clinical vocabularies so you don't have to."
    }, {
      icon: Icon.shield,
      title: "HIPAA-grade Infrastructure",
      desc: "Encrypted at rest and in transit, full audit logs, RBAC, BAA-ready vendor stack, and technical safeguards reviewable by your compliance team on day one."
    }, {
      icon: Icon.monitor,
      title: "Clinical Decision Support",
      desc: "Rule-based and ML-powered alerting integrated into clinical workflows, designed with clinicians to reduce alert fatigue rather than add to it."
    }, {
      icon: Icon.smile,
      title: "Patient Engagement",
      desc: "Booking, async messaging, remote monitoring, and care plan adherence, mobile-first, accessible, and tested with real patients."
    }, {
      icon: Icon.globe,
      title: "Telehealth Platforms",
      desc: "Async-first consult platforms, video visit infrastructure, and the scheduling rails that make a distributed care model actually work at scale."
    }, {
      icon: Icon.chart,
      title: "Population Health Analytics",
      desc: "Dashboards that surface risk stratification, care gaps, and quality measures, built for CMOs who need to act, not analysts who need to explore."
    }],
    process: [{
      step: "01",
      title: "Compliance architecture first",
      desc: "We define the technical safeguards, data flows, and vendor stack before any feature work. Your compliance team signs off on the architecture, not a retrospective audit."
    }, {
      step: "02",
      title: "Clinician co-design",
      desc: "We run structured observation sessions and co-design workshops with the clinical staff who will actually use the system. Alert fatigue and workflow friction are caught here, not in production."
    }, {
      step: "03",
      title: "Phased rollout with rollback",
      desc: "Healthcare can't afford a big-bang deployment. We go live behind feature flags, unit by unit, with automated rollback if error rates exceed threshold."
    }],
    cases: ["hera"],
    metaDescription: "HealthTech engineering by 7Code. HIPAA + GDPR-compliant clinical platforms, EHR (HL7 / FHIR) interoperability, telehealth, patient engagement, and AI-grounded clinical support, built end-to-end for clinics, hospitals, and FemTech / FertilityTech founders.",
    faqs: [{
      q: "Are you HIPAA-compliant by default?",
      a: "Yes. Every healthcare engagement starts with a compliance architecture review, encryption in transit and at rest, audit logs, RBAC, BAA-ready vendor stack, and the technical safeguards your compliance team can sign off in week one. We've shipped HIPAA-compliant platforms for fertility (Hera Health Tech), telehealth, and hospital settings, and we ship GDPR controls alongside HIPAA so cross-border deployments don't need re-architecting."
    }, {
      q: "Do you do EHR / EMR integrations?",
      a: "Yes. HL7 v2 and FHIR R4 are our defaults. We've integrated with Epic, Cerner, Meditech, and custom HL7 systems, including the parts most teams skip, clinical vocabulary mapping (SNOMED, LOINC, ICD-10), conflict resolution on bi-directional sync, and the audit trail your auditors actually want to see."
    }, {
      q: "Can you build LLM / AI features for healthcare?",
      a: "Yes, but always grounded. We use RAG over verified clinical content (with frameworks like LlamaIndex), citation-required answers, refusal patterns when confidence is low, and a held-out evaluation set scored on hallucination rate. AI features in healthcare have to be clinically reliable and auditable; we treat that as a hard constraint, not a stretch goal."
    }, {
      q: "How do you handle clinician workflow integration?",
      a: "We run structured observation sessions and co-design workshops with the clinicians who'll use the system. Alert fatigue and workflow friction are caught here, not in production. UI iterations continue against simulated and shadow workflows until triage time drops measurably, only then do we ship."
    }, {
      q: "How long does a healthcare MVP take?",
      a: "Three months for a focused MVP with one core clinical workflow (Hera shipped in three months). 12-week telehealth platforms are typical. Full enterprise EHR-integrated platforms run 16–24 weeks. Compliance work starts in week one regardless, we do not ship clinical systems without it."
    }],
    next: {
      slug: "finance",
      title: "Finance"
    }
  },
  "finance": {
    slug: "finance",
    title: "Finance",
    tagline: "FinTech and finance software engineering: real-time treasury dashboards, ERP integration (SAP, Oracle, NetSuite, Dynamics), accounting automation, regulatory reporting, and venture / MarTech platforms, for finance teams that can't afford to be wrong.",
    summary: "Finance software operates at the intersection of speed and correctness, a dashboard that's 60 seconds stale is fine; one that's wrong is a compliance event. 7Code has shipped treasury platforms, ERP integrations (SAP, Oracle, NetSuite, Dynamics), accounting automation, regulatory reporting tools, Stripe + 3D Secure billing engines, and MarTech platforms for venture studios, including Founders Factory's Gatsby + Storyblok + Tailwind site overhaul.",
    icon: "briefcase",
    kind: "finance",
    color: "#3182CE",
    bg: "cover--finance",
    stats: [{
      v: "2",
      l: "treasury platforms"
    }, {
      v: "$120M+",
      l: "revenue impact"
    }, {
      v: "60s",
      l: "position freshness"
    }, {
      v: "8 wks",
      l: "avg. delivery"
    }],
    problem: {
      title: "Finance teams are still running on spreadsheets they don't trust.",
      body: "The gap between what finance teams need, live positions, automated reconciliation, audit-grade trails, and what their tools actually provide is enormous. Most enterprise finance stacks are a patchwork of legacy ERPs, CSV exports, and manual reconciliation that breaks every month-end."
    },
    capabilities: [{
      icon: Icon.chart,
      title: "Real-time Dashboards",
      desc: "Live positions, automated roll-ups, and drill-through from entity summary to transaction, updated on a 60-second cadence, not a nightly batch."
    }, {
      icon: Icon.layers,
      title: "ERP Integration",
      desc: "Native connectors for SAP, Oracle, NetSuite, and Dynamics. We handle the mapping, the delta sync, and the reconciliation breaks, so your team doesn't have to."
    }, {
      icon: Icon.zap,
      title: "Accounting Automation",
      desc: "Journal entry automation, multi-entity consolidation, intercompany eliminations, and period-close checklists that cut close time in half."
    }, {
      icon: Icon.shield,
      title: "Regulatory Reporting",
      desc: "IFRS, GAAP, and jurisdiction-specific reporting modules. Built with your external auditors in mind, not just your internal team."
    }, {
      icon: Icon.pulse,
      title: "Predictive Analytics",
      desc: "Cash flow forecasting, scenario modelling, and variance analysis, trained on your historical data, not generic benchmarks."
    }, {
      icon: Icon.cpu,
      title: "Fintech Product Engineering",
      desc: "Payments infrastructure, lending platforms, and embedded finance products, built to the reliability bar the financial system requires."
    }],
    process: [{
      step: "01",
      title: "Data model before UI",
      desc: "We spend the first week mapping every data source, every entity hierarchy, and every reconciliation rule before touching a design file. Finance is unforgiving of schema mistakes."
    }, {
      step: "02",
      title: "Correctness before speed",
      desc: "Every aggregation is double-verified against source records. We ship a reconciliation test suite alongside the product, not as an afterthought."
    }, {
      step: "03",
      title: "Parallel run before cutover",
      desc: "New system runs alongside the old one for 30 days, with daily variance reporting. Cutover happens only when the numbers match to the cent."
    }],
    cases: [],
    metaDescription: "FinTech and finance software engineering by 7Code. Real-time treasury dashboards, ERP integration (SAP, Oracle, NetSuite), accounting automation, regulatory reporting, payments, and venture/MarTech platforms for VCs.",
    faqs: [{
      q: "What do you mean by 'finance software'?",
      a: "Two strands: (1) software for finance teams inside companies, treasury dashboards, ERP integrations, accounting automation, regulatory reporting; (2) FinTech products, payments, lending, embedded finance, venture-studio platforms. We've shipped both, including the marketing platform for Founders Factory (UK venture studio) and treasury-grade tooling with multi-entity consolidation."
    }, {
      q: "Which ERPs do you integrate with?",
      a: "Native connectors for SAP, Oracle (Fusion + EBS), NetSuite, Microsoft Dynamics 365, and custom on-prem ERPs via SOAP / REST / file-drop. We handle the data-model mapping, delta sync, and the conflict resolution that generic iPaaS tools skip, including the reconciliation breaks that always show up at month-end."
    }, {
      q: "Can you build for FinTech compliance (SOC 2, PCI-DSS, PSD2)?",
      a: "Yes. We design the technical safeguards into the architecture: encryption, audit logs, key rotation, segregation of duties, and an evidence pack for the audit. SOC 2 Type II readiness, PCI-DSS scope minimisation (using tokenisation), and PSD2 SCA / 3D Secure are within our defaults, not stretch goals."
    }, {
      q: "How do you handle correctness in finance dashboards?",
      a: "Every aggregation is double-verified against source records. We ship a reconciliation test suite alongside the product, parallel-run the new system against the old for 30 days with daily variance reporting, and only cut over when the numbers match to the cent. Finance is unforgiving of schema mistakes, we treat correctness as a non-negotiable."
    }, {
      q: "Do you handle payments and Stripe + 3D Secure billing?",
      a: "Yes, we've shipped Stripe + 3D Secure billing with bank-transfer fallback for enterprise procurement (Numerize, France: 6,000+ accounts), as well as multi-jurisdiction billing engines. We design subscription tiers, upgrade/downgrade flows, and the audit trail finance and tax teams expect."
    }],
    next: {
      slug: "energy",
      title: "Energy & Utilities"
    }
  },
  "energy": {
    slug: "energy",
    title: "Energy & Utilities",
    tagline: "Energy, utilities, and IoT engineering: real-time SCADA / Modbus / MQTT ingestion, predictive maintenance, geofencing, and operations cockpits, for 24/7 critical infrastructure that can't go down.",
    summary: "Energy and utilities infrastructure runs 24/7 with zero tolerance for downtime. 7Code builds IoT operations platforms that fuse telemetry from thousands of sensors over SCADA, Modbus, MQTT, and custom TCP, predict equipment failures with 10-day lead time, and give control-room operators a single cockpit instead of six screens. Recent work: G42's ESTS fleet-tracking platform deployed at EXPO 2020 Dubai, custom TCP ingestion, geofence rule engine, and real-time map dashboard.",
    icon: "energy",
    kind: "energy",
    color: "#D69E2E",
    bg: "cover--energy",
    stats: [{
      v: "20K+",
      l: "sensors integrated"
    }, {
      v: "−12%",
      l: "energy per year"
    }, {
      v: "10 days",
      l: "failure lead time"
    }, {
      v: "$2.1M",
      l: "saved year one"
    }],
    problem: {
      title: "Reactive maintenance is killing margins. Operators are drowning in alerts.",
      body: "Most energy operators are running reactive maintenance cycles, paying for truck rolls that could have been avoided with 10 days' warning. Control rooms are a wall of blinking alerts from disconnected systems, no shared context, no predictive signal, no way to prioritise."
    },
    capabilities: [{
      icon: Icon.pulse,
      title: "IoT Integration",
      desc: "Protocol-agnostic ingestion from SCADA, Modbus, MQTT, and proprietary sensor stacks. We normalise the data so your analysts work with one schema, not fifty."
    }, {
      icon: Icon.cpu,
      title: "Predictive Maintenance",
      desc: "Per-asset health models trained on historical failure data, maintenance logs, and environmental inputs. Built to give operators actionable 10-day lead time, not binary alerts."
    }, {
      icon: Icon.globe,
      title: "Operations Cockpit",
      desc: "A single geo + schematic view that cross-filters across every data source. One screen, one operator, all the context."
    }, {
      icon: Icon.chart,
      title: "Energy Analytics",
      desc: "Load forecasting, consumption benchmarking, loss analysis, and regulatory reporting, built on the same data platform as your operations tooling."
    }, {
      icon: Icon.zap,
      title: "Grid Optimisation",
      desc: "Demand response, renewable dispatch, and load balancing algorithms that reduce energy cost and carbon intensity simultaneously."
    }, {
      icon: Icon.shield,
      title: "NERC / IEC Compliance",
      desc: "Cybersecurity frameworks for operational technology, data sovereignty controls, and audit tooling for regulatory submissions."
    }],
    process: [{
      step: "01",
      title: "Sensor audit and normalisation",
      desc: "We map every data source, protocol, and cadence before building anything. Garbage in, garbage out, we spend week one cleaning the signal."
    }, {
      step: "02",
      title: "Historical model training",
      desc: "We train the predictive models on 12–24 months of historical data before go-live, so operators get meaningful predictions from day one, not after six months of production data collection."
    }, {
      step: "03",
      title: "Control room co-design",
      desc: "We run operator shadowing sessions in the control room and iterate on the UI until triage time drops measurably in simulation. We don't ship until it does."
    }],
    cases: ["g42-fleet"],
    metaDescription: "Energy, utilities, and IoT software engineering by 7Code. SCADA / Modbus / MQTT ingestion, predictive maintenance, real-time operations cockpits, geofencing, and grid optimisation, built for 24/7 critical infrastructure.",
    faqs: [{
      q: "What IoT protocols and sensor stacks do you support?",
      a: "Protocol-agnostic ingestion: SCADA, Modbus (RTU + TCP), MQTT, OPC UA, custom TCP, and proprietary sensor stacks. We've built the device TCP server behind G42's ESTS fleet platform at EXPO 2020 Dubai, real-time telemetry, geofence rules, and trip event detection across the expo grounds. We normalise into a single canonical schema so analytics and ML pipelines downstream work with one model, not fifty."
    }, {
      q: "Do you build predictive maintenance models?",
      a: "Yes. We train per-asset health models on historical failure data, maintenance logs, and environmental inputs, with the goal of giving operators actionable 10-day lead time, not binary alerts. The models are paired with a feedback loop so prediction accuracy improves as new failure events are labelled."
    }, {
      q: "Can you handle real-time at scale?",
      a: "Yes. ESTS for EXPO 2020 ran a custom TCP server ingesting live telemetry across thousands of vehicles, with geofence rule evaluation in near real time and trip playback for incident reconstruction. We architect for 24/7 critical-infrastructure SLAs, no scheduled downtime, automated failover, and full observability."
    }, {
      q: "Do you handle compliance for OT (operational technology)?",
      a: "Yes, NERC CIP, IEC 62443, and ISO 27019 for the OT side, plus the IT-side compliance that matters for the data and reporting layer. We work alongside your security team from week one and treat segmentation between IT and OT as a hard architectural constraint."
    }, {
      q: "How long does an energy / IoT platform take?",
      a: "Six to nine months for a focused operations cockpit with predictive analytics. ESTS at EXPO 2020 ran 18 months of focused build plus 6 months of production maintenance, a full multi-tenant fleet platform at expo scale."
    }],
    next: {
      slug: "defence",
      title: "Defence & Security"
    }
  },
  "defence": {
    slug: "defence",
    title: "Defence & Security",
    tagline: "Defence, security, and GovTech / E-Government engineering: multi-domain fusion, information assurance, secure remote-voting (built for the European Parliament), and mission-critical operator interfaces.",
    summary: "Defence and GovTech software operates where the stakes are absolute. 7Code builds platforms that fuse multi-domain intelligence (radar, comms, SIGINT, structured intel), enforce strict information-assurance controls, and give operators the clarity they need under pressure, without the cognitive load of six disjointed screens. Recent work: Revote, the remote electronic voting platform for the European Parliament (with Eurel International, released May 2023).",
    icon: "shield",
    kind: "defence",
    color: "#4A5568",
    bg: "cover--defence",
    stats: [{
      v: "1",
      l: "screen (down from 6)"
    }, {
      v: "8×",
      l: "faster triage"
    }, {
      v: "−72%",
      l: "operator load"
    }, {
      v: "100%",
      l: "IA accreditation"
    }],
    problem: {
      title: "Operators are making life-critical decisions across six disconnected feeds.",
      body: "The challenge in defence isn't a lack of data, it's too much data, siloed across systems that can't share context, with information assurance rules that prevent naive integration. The result: operators manually correlating feeds under time pressure, with no replay, no audit trail, and no way to learn from after-action review."
    },
    capabilities: [{
      icon: Icon.layers,
      title: "Multi-domain Fusion",
      desc: "Radar, comms, SIGINT, and structured intelligence fused into one queryable record store, with role-based redaction at the data layer, not the UI."
    }, {
      icon: Icon.shield,
      title: "Information Assurance",
      desc: "Cross-domain solutions, data tagging, need-to-know enforcement, and IA accreditation support. We work alongside your security team from day one."
    }, {
      icon: Icon.monitor,
      title: "Operator Interface Design",
      desc: "Calm, deliberate UI designed for high-stakes, time-pressured operation. One map, one timeline, one detail panel. We eliminate tabs, not data."
    }, {
      icon: Icon.pulse,
      title: "After-action Review",
      desc: "Frame-accurate replay of every operation, with annotation tools for commanders and trainers. Every decision becomes a learning opportunity."
    }, {
      icon: Icon.cpu,
      title: "Predictive Analytics",
      desc: "Pattern-of-life modelling, anomaly detection, and threat scoring built on classified data with the appropriate access controls throughout the pipeline."
    }, {
      icon: Icon.globe,
      title: "Systems Integration",
      desc: "Legacy system integration, protocol translation, and command-and-control interoperability across coalition and joint force environments."
    }],
    process: [{
      step: "01",
      title: "Security architecture before everything",
      desc: "IA controls, data classification schema, and access control model are defined and reviewed by your security team before any feature work begins."
    }, {
      step: "02",
      title: "Operator research in context",
      desc: "We observe operators in realistic scenarios, not requirements workshops. The cognitive load analysis shapes every UI decision."
    }, {
      step: "03",
      title: "Accreditation-ready from sprint one",
      desc: "Evidence packages, audit logs, and security documentation are generated as part of the build process, not assembled retrospectively before the assessment."
    }],
    cases: ["revote"],
    metaDescription: "Defence, security, and GovTech / E-Government engineering by 7Code. Mission-critical platforms with multi-domain fusion, information assurance, secure remote-voting (built for the European Parliament), and after-action review tooling.",
    faqs: [{
      q: "Do you work with classified data and accredited environments?",
      a: "We design to information-assurance standards (NIST 800-53, ISO 27001, MoD Secure-by-Design) and work alongside the client's accreditation authority from week one. For the European Parliament's Revote remote-voting platform, our CTO travelled to Brussels to validate the system on the live network under EP security policy. We don't bolt accreditation on at the end, evidence packages and audit logs are part of the build."
    }, {
      q: "Can you build for E-Government / civic-tech use cases?",
      a: "Yes, Revote (remote electronic voting for Members of the European Parliament, partnered with Eurel International) shipped in eight months on the EP network. We've designed multi-device authentication, audit-grade vote handling, and the Plenary / Committee / Dashboard surfaces governments and parliaments require."
    }, {
      q: "What does 'multi-domain fusion' mean for defence?",
      a: "Radar, comms, SIGINT, and structured intelligence fused into one queryable record store, with role-based redaction enforced at the data layer (not the UI). Operators see one map, one timeline, one detail panel, all data, no tabs. We replace six disconnected screens with a single pane of glass."
    }, {
      q: "Do you handle coalition and joint-force interoperability?",
      a: "Yes. Legacy system integration, protocol translation, and command-and-control interoperability across coalition and joint environments are part of how we approach defence systems integration. We work with whatever the existing tactical and strategic comms stack imposes, not what we'd prefer to build greenfield."
    }, {
      q: "How quickly can a defence / GovTech project move?",
      a: "Faster than most teams expect. Revote shipped in eight months end-to-end (1 mo discovery + 1 mo PoC + 4 mo build + 2 mo UAT) on a high-security European Parliament network. We move at proof-of-concept pace with accreditation-ready evidence collected throughout, not as a final-phase scramble."
    }],
    next: {
      slug: "hr",
      title: "HR"
    }
  },
  "hr": {
    slug: "hr",
    title: "HR",
    tagline: "HR Tech engineering: ATS / HRIS integration (Workday, SAP SuccessFactors, BambooHR), recruitment, onboarding, payroll automation, workforce analytics, and compliance reporting, unified into platforms people actually use.",
    summary: "HR Tech is uniquely hard to get right: it touches every employee in the organisation, integrates with more systems than almost anything else in the stack, and the consequences of getting it wrong, a missed payroll run, a failed compliance filing, are immediately visible to the whole company. 7Code builds HRIS, ATS, payroll, and workforce-analytics platforms with multi-jurisdiction labour-law and GDPR controls baked in.",
    icon: "users",
    kind: "ops",
    color: "#805AD5",
    bg: "cover--ops",
    stats: [{
      v: "4",
      l: "HR platforms shipped"
    }, {
      v: "−60%",
      l: "onboarding time"
    }, {
      v: "99.9%",
      l: "payroll accuracy"
    }, {
      v: "12 wks",
      l: "avg. delivery"
    }],
    problem: {
      title: "HR teams are the most over-tooled and under-supported function in most companies.",
      body: "The average mid-size company runs 8–12 separate HR tools that don't talk to each other. Onboarding is a 20-step checklist managed in spreadsheets. Payroll integration is a monthly fire drill. And the analytics that could make HR strategic, attrition prediction, performance correlation, hiring funnel analysis, are trapped in systems that can't export in a useful format."
    },
    capabilities: [{
      icon: Icon.users,
      title: "Recruitment & Onboarding",
      desc: "ATS integrations, structured interview tooling, offer management, and onboarding workflows that get new hires to productive in days, not weeks."
    }, {
      icon: Icon.chart,
      title: "Workforce Analytics",
      desc: "Attrition prediction, performance correlation, headcount planning, and hiring funnel analysis, surfaced in dashboards HR business partners can actually use."
    }, {
      icon: Icon.layers,
      title: "Systems Integration",
      desc: "Native connectors for Workday, SAP SuccessFactors, BambooHR, and custom HRIS. We handle the sync, the conflict resolution, and the audit trail."
    }, {
      icon: Icon.zap,
      title: "Payroll Automation",
      desc: "Multi-jurisdiction payroll calculation, statutory filing automation, and integration with payroll processors, with a reconciliation layer that catches errors before they reach employees."
    }, {
      icon: Icon.pulse,
      title: "Performance & Development",
      desc: "Goal tracking, review cycle tooling, 360 feedback, and learning pathway management, designed to be used by managers, not just HR."
    }, {
      icon: Icon.shield,
      title: "Compliance & Reporting",
      desc: "EEO, ADA, GDPR, and local labour law compliance tooling, with automated regulatory reporting and audit-ready data exports."
    }],
    process: [{
      step: "01",
      title: "Integration map before anything",
      desc: "We spend the first week mapping every system that touches an employee record. HR platforms live or die on their integrations, we understand them before we design anything."
    }, {
      step: "02",
      title: "Manager and employee research",
      desc: "We interview both the HR team and the employees and managers who will use the system. HR software fails when it's designed for the administrator and ignored by everyone else."
    }, {
      step: "03",
      title: "Parallel payroll run",
      desc: "Any change to payroll infrastructure runs in parallel for at least two pay cycles before cutover. We don't take risks with people's pay."
    }],
    cases: [],
    metaDescription: "HR Tech engineering by 7Code. ATS / HRIS integration (Workday, SAP SuccessFactors, BambooHR), recruitment and onboarding workflows, payroll automation, workforce analytics, and compliance reporting (EEO, GDPR, local labour law).",
    faqs: [{
      q: "Which HRIS / ATS systems do you integrate with?",
      a: "Native connectors for Workday, SAP SuccessFactors, BambooHR, Personio, and custom HRIS via REST / SOAP / file-drop. We handle the bi-directional sync, conflict resolution, audit trail, and the surprise edge cases, every system has them, and HR data is uniquely intolerant of silent corruption."
    }, {
      q: "Can you handle payroll integration?",
      a: "Yes, multi-jurisdiction payroll calculation, statutory filing automation, integration with payroll processors (ADP, Sage, local providers), and the reconciliation layer that catches errors before they reach employees. Any change to payroll infrastructure is parallel-run for at least two pay cycles before cutover. We do not take risks with people's pay."
    }, {
      q: "What about workforce analytics and predictive HR?",
      a: "Attrition prediction, performance correlation, hiring funnel analysis, and headcount planning, surfaced in dashboards HR business partners can actually use, with the data export hooks finance and leadership need. We also build the data lake / warehouse pipelines underneath if your existing stack can't support these queries."
    }, {
      q: "Do you handle EEO, GDPR, and local labour law compliance?",
      a: "Yes. Multi-jurisdiction labour-law compliance tooling, EEO and DEI reporting, GDPR data-subject-access controls, and audit-ready data exports. We design for the regulator your team will actually face, not a generic global standard."
    }, {
      q: "How long does an HR platform take?",
      a: "12 weeks for a focused HR module, recruitment, onboarding, or analytics. Full HRIS replacements run 16–32 weeks depending on the integration count and parallel-run period required for payroll."
    }],
    next: {
      slug: "operations",
      title: "Operations"
    }
  },
  "operations": {
    slug: "operations",
    title: "Operations",
    tagline: "Operations software engineering: workflow automation, real-time dashboards, OCR document pipelines, systems integration, and process intelligence, for teams that have outgrown spreadsheets, Slack, and heroic individuals.",
    summary: "Operations software is the connective tissue of a business, workflows, dashboards, OCR pipelines, and integrations that make everything else run. 7Code builds it for companies that have grown past their tooling: too many systems, too much manual work, too little visibility. Recent work includes G42's ESTS real-time fleet operations at EXPO 2020, Drum Bun's OCR-driven car-services pipeline, and Numerize's responsive GED / EDM platform.",
    icon: "chart",
    kind: "ops",
    color: "#2B6CB0",
    bg: "cover--ops",
    stats: [{
      v: "6",
      l: "operations platforms"
    }, {
      v: "$4.2M",
      l: "cost savings"
    }, {
      v: "−93%",
      l: "manual work"
    }, {
      v: "10 wks",
      l: "avg. delivery"
    }],
    problem: {
      title: "Operations teams are held together by spreadsheets, Slack, and heroic individuals.",
      body: "When a company grows quickly, operations tooling doesn't scale with it. Processes that worked at 50 people break at 500. The result is a patchwork of tools, manual workarounds, and dependencies on specific individuals who know where everything is, until they leave."
    },
    capabilities: [{
      icon: Icon.zap,
      title: "Workflow Automation",
      desc: "Visual workflow authoring, conditional routing, approval chains, and SLA monitoring, designed for operations teams to own, not just IT."
    }, {
      icon: Icon.chart,
      title: "Operations Dashboards",
      desc: "Real-time operational metrics, exception queues, and team performance views, built around the decisions your ops team actually makes."
    }, {
      icon: Icon.layers,
      title: "Systems Integration",
      desc: "API integrations, webhook routing, and data sync across your tool stack. We specialize in the hard integrations with legacy systems and proprietary APIs."
    }, {
      icon: Icon.cpu,
      title: "Process Intelligence",
      desc: "Process mining, bottleneck identification, and simulation modelling to find the highest-leverage automation opportunities in your operations."
    }, {
      icon: Icon.globe,
      title: "Customer-facing Portals",
      desc: "Self-service portals that give customers and partners visibility into their orders, cases, and accounts, reducing inbound volume while improving satisfaction."
    }, {
      icon: Icon.pulse,
      title: "Reporting & Analytics",
      desc: "Operational reporting, KPI scorecards, and data exports that give leadership the visibility they need without burdening the ops team with manual pulls."
    }],
    process: [{
      step: "01",
      title: "Process discovery and prioritisation",
      desc: "We map your current processes, including the undocumented ones, and identify the 20% of automation opportunities that deliver 80% of the value."
    }, {
      step: "02",
      title: "Build the quick wins first",
      desc: "We ship something valuable in week two, every engagement. Operations teams need to see momentum; it builds the trust that sustains the longer work."
    }, {
      step: "03",
      title: "Measure before and after",
      desc: "We instrument the current process before we change anything, so we can show the before and after in the same units. Impact is calculated, not estimated."
    }],
    cases: ["g42-fleet"],
    metaDescription: "Operations software engineering by 7Code. Workflow automation, real-time operations dashboards, OCR-driven document pipelines, systems integration, and process intelligence, for teams that have outgrown spreadsheets, Slack, and heroic individuals.",
    faqs: [{
      q: "What does 'operations software' actually mean?",
      a: "The connective tissue of a business, workflow engines, operations dashboards, integrations across CRM/ERP/SaaS tools, and customer-facing portals. We build for companies that have grown past their tooling: too many systems, too much manual work, too little visibility. Recent work includes real-time fleet operations (G42 / EXPO 2020) and OCR-driven document operations (Drum Bun, Numerize)."
    }, {
      q: "Do you do workflow automation?",
      a: "Yes. Visual workflow authoring, conditional routing, approval chains, SLA monitoring, and event-driven orchestration on Temporal or LangGraph for agentic workflows. We design the workflow engine so operations teams can own and modify it, not so it requires an engineering ticket for every rule change."
    }, {
      q: "Can you build OCR / document pipelines?",
      a: "Yes, OCR is a recurring need in operations. Drum Bun (Romanian car-services app) uses an OCR pipeline to lift policy and inspection details from photographed documents. Numerize trains OCR on incoming invoices, extracts structured data, categorises by sector, and routes into archival storage. We pick the OCR engine to fit the document distribution and ship the data-cleaning layer alongside it."
    }, {
      q: "How do you find the right things to automate?",
      a: "Process discovery in week one, including the undocumented processes. We map current workflows, identify the 20% of automation opportunities that deliver 80% of the value, and ship something visible by week two. Operations teams need momentum to trust the longer work; we engineer for that."
    }, {
      q: "How do you measure operations impact?",
      a: "We instrument the current process before changing anything, so the before-and-after is in the same units. Time saved per task, exception rate, throughput, and SLA breach rate are the typical metrics, calculated, not estimated. Recent example: $4.2M annual savings on a single workflow automation engagement."
    }],
    next: {
      slug: "healthcare",
      title: "Healthcare"
    }
  }
};

// ─────────────────────────────────────────────────────────────────
// Shared icon helper
// ─────────────────────────────────────────────────────────────────
function ExpertiseIcon({
  name,
  style
}) {
  const map = {
    heart: Icon.heart,
    briefcase: Icon.briefcase,
    energy: Icon.energy,
    shield: Icon.shield,
    users: Icon.users,
    chart: Icon.chart,
    pulse: Icon.pulse,
    cpu: Icon.cpu,
    globe: Icon.globe,
    layers: Icon.layers,
    zap: Icon.zap,
    monitor: Icon.monitor,
    smile: Icon.smile,
    code: Icon.code
  };
  const I = map[name] || Icon.zap;
  return /*#__PURE__*/React.createElement(I, {
    style: style
  });
}

// ─────────────────────────────────────────────────────────────────
// Cover pattern background
// ─────────────────────────────────────────────────────────────────
function ExpertiseCoverBg({
  kind
}) {
  const colors = {
    health: {
      bg: "#1A2535",
      fg: "rgba(255,255,255,0.12)"
    },
    finance: {
      bg: "#0F1E2E",
      fg: "rgba(255,255,255,0.10)"
    },
    energy: {
      bg: "#1C1A10",
      fg: "rgba(255,255,255,0.10)"
    },
    defence: {
      bg: "#141A1F",
      fg: "rgba(255,255,255,0.10)"
    },
    ops: {
      bg: "#0D1F2D",
      fg: "rgba(255,255,255,0.10)"
    },
    cyan: {
      bg: "#082A35",
      fg: "rgba(255,255,255,0.12)"
    }
  };
  const c = colors[kind] || colors.cyan;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: c.bg,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 800 400",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "ep-" + kind,
    width: "40",
    height: "40",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "2",
    fill: c.fg,
    opacity: "0.12"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "800",
    height: "400",
    fill: "url(#ep-" + kind + ")"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "650",
    cy: "200",
    r: "280",
    fill: c.fg,
    opacity: "0.08"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "150",
    cy: "350",
    r: "200",
    fill: c.fg,
    opacity: "0.06"
  })));
}

// ─────────────────────────────────────────────────────────────────
// Expertise detail page
// ─────────────────────────────────────────────────────────────────
function ExpertiseDetailPage({
  slug = "healthcare"
}) {
  const exp = EXPERTISE[slug] || EXPERTISE["healthcare"];
  const nextSlug = exp.next.slug;
  const relatedCases = exp.cases.map(s => ({
    slug: s,
    ...(typeof CASES !== "undefined" && CASES[s] ? CASES[s] : {
      title: s,
      kind: exp.kind,
      meta: [exp.title]
    })
  }));
  React.useEffect(() => {
    const e = EXPERTISE[slug] || EXPERTISE["healthcare"];
    const prevTitle = document.title;
    const descEl = document.querySelector('meta[name="description"]');
    const prevDesc = descEl ? descEl.getAttribute("content") : null;
    document.title = "7Code, " + e.title + " software engineering";
    if (descEl && e.metaDescription) descEl.setAttribute("content", e.metaDescription);
    return () => {
      document.title = prevTitle;
      if (descEl && prevDesc !== null) descEl.setAttribute("content", prevDesc);
    };
  }, [slug]);
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("section", {
    className: "exp-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container exp-hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "exp-hero-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-kicker"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-dot"
  }), " Industry expertise"), /*#__PURE__*/React.createElement("h1", null, exp.title), /*#__PURE__*/React.createElement("div", {
    className: "exp-hero-divider"
  }), /*#__PURE__*/React.createElement("p", {
    className: "exp-hero-sub"
  }, exp.tagline), /*#__PURE__*/React.createElement("div", {
    className: "exp-hero-stats"
  }, exp.stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "exp-hero-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "exp-stat-v"
  }, s.v), /*#__PURE__*/React.createElement("div", {
    className: "exp-stat-l"
  }, s.l)))), /*#__PURE__*/React.createElement("div", {
    className: "exp-hero-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--primary btn--lg"
  }, "Start a project ", /*#__PURE__*/React.createElement(Icon.arrow, null)), /*#__PURE__*/React.createElement("a", {
    href: "/expertise/" + nextSlug,
    className: "btn btn--ghost btn--lg"
  }, "Next: ", exp.next.title, " ", /*#__PURE__*/React.createElement(Icon.arrow, null)))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container exp-problem"
  }, /*#__PURE__*/React.createElement("div", {
    className: "exp-problem-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-eyebrow"
  }, "The problem"), /*#__PURE__*/React.createElement("h2", null, exp.problem.title), /*#__PURE__*/React.createElement("p", null, exp.problem.body)), /*#__PURE__*/React.createElement("div", {
    className: "exp-problem-summary"
  }, /*#__PURE__*/React.createElement("p", {
    className: "exp-summary"
  }, exp.summary)))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "What we build"), /*#__PURE__*/React.createElement("h2", null, "Capabilities in ", exp.title)), /*#__PURE__*/React.createElement("div", {
    className: "exp-cap-grid"
  }, exp.capabilities.map((c, i) => {
    const I = c.icon;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "exp-cap-card reveal",
      style: {
        transitionDelay: i % 3 * 60 + "ms"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "exp-cap-icon"
    }, /*#__PURE__*/React.createElement(I, null)), /*#__PURE__*/React.createElement("h3", null, c.title), /*#__PURE__*/React.createElement("p", null, c.desc));
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "How we work"), /*#__PURE__*/React.createElement("h2", null, "Our approach in ", exp.title), /*#__PURE__*/React.createElement("p", null, "Every engagement follows this sequence, adapted to your constraints, not the other way around.")), /*#__PURE__*/React.createElement("div", {
    className: "exp-process"
  }, exp.process.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "exp-process-step reveal",
    style: {
      transitionDelay: i * 80 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "exp-process-num"
  }, p.step), /*#__PURE__*/React.createElement("div", {
    className: "exp-process-body"
  }, /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", null, p.desc))))))), exp.faqs && exp.faqs.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container svc-faq-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal section-head--left",
    style: {
      maxWidth: 720,
      margin: 0,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Frequently asked"), /*#__PURE__*/React.createElement("h2", null, "Questions teams ask before they start")), /*#__PURE__*/React.createElement("div", {
    className: "svc-faq"
  }, exp.faqs.map((f, i) => /*#__PURE__*/React.createElement("details", {
    key: i,
    className: "svc-faq-item reveal",
    style: {
      transitionDelay: i * 40 + "ms"
    }
  }, /*#__PURE__*/React.createElement("summary", null, f.q), /*#__PURE__*/React.createElement("p", null, f.a)))))), /*#__PURE__*/React.createElement(CTAStrip, null));
}
window.EXPERTISE = EXPERTISE;
window.ExpertiseDetailPage = ExpertiseDetailPage;