/* global React, Icon, CSCover, CTAStrip */
/* Full case study detail page — 4 variants, slug-routed */

const { useState: useStateCSD, useEffect: useEffectCSD } = React;

// ─────────────────────────────────────────────────────────────────
// All case data — keyed by slug
// ─────────────────────────────────────────────────────────────────
const CASES = {
  "helix-health": {
    slug: "helix-health",
    client: "Helix Health", industry: "Healthcare", year: "2026",
    duration: "12 weeks", team: "1 PM · 2 designers · 4 engineers",
    region: "United States · 14 states", kind: "health", tag: "Featured",
    title: "Telehealth platform for a national clinic network",
    tagline: "Booking, async consults, and HIPAA-grade infrastructure — rebuilt from scratch in 12 weeks.",
    summary: "Helix Health runs 240 clinics across the United States. Their legacy booking system was buckling under demand and patients were dropping off before they ever saw a doctor. We rebuilt the entire patient-facing experience — async-first, accessible, HIPAA-compliant — and shipped it nationwide in three months.",
    challenge: {
      eyebrow: "The challenge",
      title: "A 14-year-old booking system patients had given up on.",
      body: "Patients were abandoning the booking flow at a 62% rate. The clinic staff had built a parallel phone-call workflow just to recover lost appointments. The legacy stack couldn't support video consults, and a HIPAA audit was scheduled for Q2.",
      pains: ["62% drop-off in the booking funnel","No support for async or video consults","Legacy stack failing HIPAA technical safeguards review","Clinic staff spending 3+ hours/day on phone bookings"],
    },
    approach: {
      eyebrow: "Our approach",
      title: "Async-first, mobile-first, audit-ready from day one.",
      body: "We started with the hardest part: shipping a HIPAA-grade infrastructure foundation in week one — encrypted data, audit logs, role-based access, BAA-ready vendor stack. We designed the patient flow mobile-first because 78% of bookings start on a phone.",
      pillars: [
        { title: "HIPAA infra week 1", desc: "Encryption, audit logs, RBAC, and BAA-ready vendors before a single feature." },
        { title: "Mobile-first booking", desc: "Three-tap flow tested with 40 patients before any code shipped." },
        { title: "Async-first consults", desc: "Doctors batch messages instead of being interrupted by video calls all day." },
        { title: "Continuous rollout", desc: "Behind a feature flag, region by region, with rollback in under 60 seconds." },
      ],
    },
    results: [
      { v: "+38%", l: "appointment volume", sub: "vs. 6-month baseline" },
      { v: "−71%", l: "drop-off rate", sub: "from 62% to 18%" },
      { v: "−3 hrs", l: "per clinic / day", sub: "freed from phone bookings" },
      { v: "100%", l: "HIPAA audit pass", sub: "with zero remediation items" },
    ],
    testimonial: { quote: "7Code didn't just rebuild our booking flow — they rebuilt how we think about patient experience. Twelve weeks in, our drop-off rate was lower than any benchmark we could find.", name: "Dr. Maya Chen", role: "Chief Medical Officer, Helix Health" },
    next: { slug: "northbank", client: "NorthBank", title: "Real-time treasury dashboard for fintech ops team", kind: "finance" },
  },
  "northbank": {
    slug: "northbank",
    client: "NorthBank", industry: "Finance", year: "2026",
    duration: "8 weeks", team: "1 PM · 1 designer · 3 engineers",
    region: "United Kingdom · EU", kind: "finance",
    title: "Real-time treasury dashboard for fintech ops team",
    tagline: "Real-time positions, automated reconciliation, and an audit trail the CFO actually trusts.",
    summary: "NorthBank's treasury team was closing the books on spreadsheets and end-of-day batch files. We built a real-time dashboard that reconciles across 14 banking partners and gives the CFO a live position by entity, currency, and maturity bucket.",
    challenge: {
      eyebrow: "The challenge",
      title: "A monthly close that took nine days and nobody trusted.",
      body: "Treasury ops were stitching together CSV exports from 14 banking partners every morning. Reconciliation breaks took two analysts a full week to clear. The CFO didn't have a real-time cash position — only the previous day's snapshot.",
      pains: ["9-day monthly close, fully manual","No real-time cash position across entities","Reconciliation breaks averaging 240 per month","Audit trail living in shared spreadsheets"],
    },
    approach: {
      eyebrow: "Our approach",
      title: "Stream the data in, reconcile in flight, surface the position live.",
      body: "We built an event-sourced ingestion layer that pulls from each banking partner's API on a 60-second cadence. Reconciliation runs on the stream — exceptions surface in seconds instead of days.",
      pillars: [
        { title: "Event-sourced ledger", desc: "Every transaction is an immutable event with full provenance." },
        { title: "Streaming reconciliation", desc: "Breaks surface in seconds, not days, and route to one inbox." },
        { title: "Live CFO dashboard", desc: "Cash position by entity, currency, and maturity, updated every tick." },
        { title: "Audit-grade trail", desc: "Every adjustment is signed, timestamped, and replayable." },
      ],
    },
    results: [
      { v: "−60%", l: "close time", sub: "9 days → 3.5 days" },
      { v: "−84%", l: "recon breaks", sub: "240 → 38 per month" },
      { v: "60s", l: "position freshness", sub: "down from 24 hours" },
      { v: "100%", l: "audit pass", sub: "first time, no findings" },
    ],
    testimonial: { quote: "I haven't opened a CSV file in four months. The team closes the month while I'm still drinking coffee. 7Code understood our regulatory posture as deeply as the engineering.", name: "James Holloway", role: "CFO, NorthBank" },
    next: { slug: "atlas-energy", client: "Atlas Energy", title: "IoT monitoring + predictive maintenance for utility", kind: "energy" },
  },
  "atlas-energy": {
    slug: "atlas-energy",
    client: "Atlas Energy", industry: "Energy", year: "2025",
    duration: "16 weeks", team: "2 PMs · 2 designers · 5 engineers",
    region: "United States · grid-scale", kind: "energy",
    title: "IoT monitoring + predictive maintenance for utility",
    tagline: "20,000 sensors, one operations cockpit. Predictive alerts that actually reduce truck rolls.",
    summary: "Atlas runs distribution infrastructure across three states. We replaced four separate SCADA dashboards with a single operations cockpit, and shipped a predictive maintenance model that flags failing equipment 10 days before it goes down.",
    challenge: {
      eyebrow: "The challenge",
      title: "Operators monitoring four screens and still getting surprised.",
      body: "Field equipment was failing without warning. The four SCADA tools didn't share state, so a transformer alert in one tool didn't surface load context from the next.",
      pains: ["4 disjoint SCADA dashboards, no shared state","Reactive maintenance — issues found after outage","Truck rolls averaging $1,800 per incident","No model of equipment health over time"],
    },
    approach: {
      eyebrow: "Our approach",
      title: "One cockpit. One signal model. Predictions over alarms.",
      body: "We unified the telemetry into a time-series store, built a single map-based operations view, and trained a per-asset health model on 18 months of historical data.",
      pillars: [
        { title: "Unified telemetry", desc: "20,000 sensors, one time-series store, one query layer." },
        { title: "Map-based cockpit", desc: "Geo + electrical schematic in the same view, cross-filtered." },
        { title: "Predictive health score", desc: "Per-asset model with 10-day lead time on failures." },
        { title: "Maintenance planner", desc: "Suggests windows based on weather, load, and crew availability." },
      ],
    },
    results: [
      { v: "−12%", l: "energy / year", sub: "via predictive load balancing" },
      { v: "−47%", l: "truck rolls", sub: "from preventable failures" },
      { v: "10 days", l: "lead time", sub: "on flagged failures" },
      { v: "$2.1M", l: "saved year one", sub: "in avoided incidents" },
    ],
    testimonial: { quote: "Our control room used to be a wall of red blinking lights. Now it's a map, a list, and a calendar. The model is right often enough that we plan maintenance instead of fighting fires.", name: "Priya Raman", role: "VP Operations, Atlas Energy" },
    next: { slug: "northwind-logistics", client: "Northwind Logistics", title: "Workflow automation for global logistics provider", kind: "ops" },
  },
  "northwind-logistics": {
    slug: "northwind-logistics",
    client: "Northwind Logistics", industry: "Operations", year: "2025",
    duration: "10 weeks", team: "1 PM · 1 designer · 3 engineers",
    region: "Global · 22 countries", kind: "ops",
    title: "Workflow automation for global logistics provider",
    tagline: "Replaced six legacy tools with one workflow engine. Onboarding dropped from days to minutes.",
    summary: "Northwind moves 4,000 shipments a day across 22 countries. Their operations ran on six different tools held together by email. We replaced the lot with a single workflow engine — drag-and-drop authoring, full audit trail, integrations with every carrier they use.",
    challenge: {
      eyebrow: "The challenge",
      title: "Six tools, forty Slack channels, one very stressed ops team.",
      body: "A new shipment touched six systems and three teams before it left the warehouse. Onboarding a new freight customer took 5–7 days of manual configuration.",
      pains: ["6 disjoint tools per shipment lifecycle","5–7 day customer onboarding, fully manual","12% of shipments hit at least one exception","No end-to-end visibility for ops or customers"],
    },
    approach: {
      eyebrow: "Our approach",
      title: "One engine. Drag-and-drop workflows. Carriers as plugins.",
      body: "We modeled every shipment as a state machine inside one workflow engine. Ops teams author flows visually — no code — and carrier integrations are plugins, not bespoke builds.",
      pillars: [
        { title: "Visual workflow authoring", desc: "Ops teams build and modify flows without engineering." },
        { title: "Carriers as plugins", desc: "32 carrier integrations, one shared interface." },
        { title: "End-to-end visibility", desc: "One timeline per shipment, shared with the customer." },
        { title: "Templated onboarding", desc: "New customers configured in under 30 minutes." },
      ],
    },
    results: [
      { v: "$4.2M", l: "annual savings", sub: "consolidating 6 tools" },
      { v: "−93%", l: "onboarding time", sub: "5 days → 22 minutes" },
      { v: "−68%", l: "shipment exceptions", sub: "12% → 3.8%" },
      { v: "32", l: "carriers integrated", sub: "via shared plugin layer" },
    ],
    testimonial: { quote: "We turned off five tools the week we launched. The ops team can now actually answer customer questions in real time — they couldn't before.", name: "Marcus Bell", role: "COO, Northwind Logistics" },
    next: { slug: "vector-defence", client: "Vector Defence", title: "Situational awareness platform for defence agency", kind: "defence" },
  },
  "vector-defence": {
    slug: "vector-defence",
    client: "Vector Defence", industry: "Defence", year: "2025",
    duration: "20 weeks", team: "2 PMs · 2 designers · 6 engineers",
    region: "Classified", kind: "defence",
    title: "Situational awareness platform for defence agency",
    tagline: "A single pane of glass across radar, comms, and intel feeds — built for operators, not analysts.",
    summary: "Vector operators were juggling six different feeds during a live operation. We built a situational awareness platform that fuses radar, comms metadata, and structured intel into one operator view, with role-based redaction baked into every query.",
    challenge: {
      eyebrow: "The challenge",
      title: "Operators making decisions across six classified screens.",
      body: "During a live operation, an operator was reading radar in one tool, comms in another, intel in a third — and reconciling them in their head, under time pressure.",
      pains: ["6 separate feeds, manually correlated","Decision latency measured in minutes, not seconds","No replay or after-action review tooling","Strict cross-domain redaction requirements"],
    },
    approach: {
      eyebrow: "Our approach",
      title: "Fuse the data. Redact at query time. Design for the operator.",
      body: "We built a fusion layer that ingests every feed and tags every record with classification and need-to-know metadata. Queries return only what the requesting role can see.",
      pillars: [
        { title: "Cross-domain fusion", desc: "Radar, comms, intel — one record store, one query layer." },
        { title: "Redaction at query time", desc: "Role-aware data access, not UI hiding." },
        { title: "Operator-first UI", desc: "One map, one timeline, one detail panel — no tabs." },
        { title: "Replay & AAR", desc: "Every operation is replayable, frame-accurate, for review." },
      ],
    },
    results: [
      { v: "8×", l: "faster triage", sub: "minutes → seconds" },
      { v: "−72%", l: "operator load", sub: "measured via task analysis" },
      { v: "100%", l: "IA accreditation", sub: "passed with zero findings" },
      { v: "1", l: "screen", sub: "down from six" },
    ],
    testimonial: { quote: "We expected a slick UI on top of our existing tools. They delivered a new way of working. Our operators stopped translating between systems and started running the operation.", name: "Col. Anders Holm", role: "Director of Operations, Vector Defence" },
    next: { slug: "octolabs", client: "OctoLabs", title: "AI-powered support copilot for B2B SaaS", kind: "cyan" },
  },
  "octolabs": {
    slug: "octolabs",
    client: "OctoLabs", industry: "AI / SaaS", year: "2024",
    duration: "6 weeks", team: "1 PM · 1 designer · 2 engineers",
    region: "Remote · global", kind: "cyan",
    title: "AI-powered support copilot for B2B SaaS",
    tagline: "RAG + tools + a thoughtful escalation path. Customers got faster answers, agents got their afternoons back.",
    summary: "OctoLabs' support team was drowning in repetitive tickets. We shipped an AI copilot that drafts answers grounded in the product docs, takes scoped actions on the customer's account, and escalates the moment confidence drops.",
    challenge: {
      eyebrow: "The challenge",
      title: "60% of tickets were the same fifteen questions. Agents were burning out.",
      body: "Support was the bottleneck on growth. New customers waited 4–6 hours for first response. A previous chatbot attempt had been switched off because customers hated it.",
      pains: ["4–6 hour first-response time","60% of tickets repetitive and low-value","Agent burnout, 32% annualized churn","Previous chatbot disabled — customer NPS impact"],
    },
    approach: {
      eyebrow: "Our approach",
      title: "Grounded answers. Real actions. Escalate fast and well.",
      body: "We built a RAG pipeline grounded in the product docs and the support knowledge base, plus a small set of scoped tools for common operations. The copilot has a confidence threshold below which it escalates with a full context handoff.",
      pillars: [
        { title: "Grounded RAG", desc: "Every answer cites the doc page it came from." },
        { title: "Scoped tools", desc: "Six common actions, fully audited, fully reversible." },
        { title: "Confident escalation", desc: "Below threshold, hand off with full context." },
        { title: "Continuous eval", desc: "Every response scored against a 1,200-prompt eval set." },
      ],
    },
    results: [
      { v: "47%", l: "ticket deflection", sub: "fully resolved without an agent" },
      { v: "−83%", l: "first-response time", sub: "5 hours → 50 minutes" },
      { v: "+24", l: "CSAT points", sub: "vs. pre-copilot baseline" },
      { v: "0", l: "rage-quits", sub: "customers escalating angry" },
    ],
    testimonial: { quote: "Other vendors pitched us a chatbot. 7Code asked what 'good' looked like for our customers and built backwards from there. It's the only AI feature we've shipped that customers thank us for.", name: "Sara Lindgren", role: "VP Customer, OctoLabs" },
    next: { slug: "wholesum", client: "WholeSum", title: "Self-serve qualitative-data analysis platform", kind: "cyan" },
  },
  "wholesum": {
    slug: "wholesum",
    client: "WholeSum", industry: "Data / AI", year: "2025",
    duration: "16 weeks", team: "1 UI/UX designer · 1 cloud architect · 1 front-end · 1 back-end · 1 QA",
    region: "United Kingdom", kind: "cyan",
    title: "Self-serve AI analytics platform for unstructured text",
    tagline: "Turn surveys, reviews, and interviews into actionable insight — uploaded by the user, analysed by AI, surfaced in minutes.",
    summary: "WholeSum is an AI-driven analytics company that turns unstructured text — surveys, reviews, interviews — into clear, actionable insights. Their platform helps organisations unlock hidden patterns and turn qualitative data into a strategic advantage. We partnered with WholeSum to validate self-serve demand and drive direct API adoption through a clean, fast UX focused on delivering quick insights.",
    challenge: {
      eyebrow: "The challenge",
      title: "A self-serve UX that's fast, clear, and immediately valuable — on a tight clock.",
      body: "The product had to feel effortless: upload your data, get insights, navigate the results — without a sales call or a manual onboarding. That meant carefully mapping every user flow, iterating with users, and shipping a stable, intuitive experience inside a fixed delivery window.",
      pains: [
        "Strict timeline — 4 weeks design, 10 weeks development, 2 weeks UAT",
        "Self-serve UX requirements demanded careful flow mapping and iteration",
        "Speed, clarity, and immediate value had to coexist with rigorous QA",
        "Needed a tech foundation that could grow with API adoption post-launch",
      ],
    },
    approach: {
      eyebrow: "Our approach",
      title: "Speed, clarity, and immediate value — end to end.",
      body: "We delivered the full product lifecycle — from product strategy and design to development, testing, deployment, and ongoing maintenance. Our approach centred on speed, clarity, and immediate value, ensuring users could interact with the product effortlessly while the system delivered rapid, automated analysis.",
      pillars: [
        { title: "Product strategy & design", desc: "4-week discovery and design sprint to lock the self-serve experience before a line of code." },
        { title: "Modern JS stack", desc: "Next.js front-end and Nest.js API on Postgres — fast to ship, easy to scale." },
        { title: "Cloud-native on AWS", desc: "S3, Cognito, and Elastic Beanstalk for storage, auth, and deployment." },
        { title: "Five core modules", desc: "Landing, Upload Flow, Analysis Results, Dashboard, and User Profile & Settings." },
      ],
    },
    results: [
      { v: "On time", l: "launch delivered", sub: "to the agreed timeline" },
      { v: "Funded", l: "investment raised", sub: "off the back of the launch" },
      { v: "Ongoing", l: "engagement", sub: "continued maintenance & support" },
      { v: "5", l: "modules shipped", sub: "landing, upload, results, dashboard, profile" },
    ],
    testimonial: { quote: "", name: "", role: "" },
    next: { slug: "daily8", client: "Daily8", title: "AI-powered news aggregator for the MENA region", kind: "cyan" },
  },
  "daily8": {
    slug: "daily8",
    client: "Daily8", industry: "Mobile / Media", year: "2022",
    duration: "6 months", team: "1 UI/UX designer · 1 architect · 3 full-stack developers · 1 PM · 1 QA",
    region: "United Arab Emirates", kind: "cyan",
    title: "AI-powered news aggregator for the MENA region",
    tagline: "News, podcasts, and videos tailored by interest and country — moderated, summarised, and surfaced by AI.",
    summary: "Daily8 is a UAE-based startup building a centralised platform for news, podcasts, and videos tailored by country and interest. After a difficult run with a previous provider, Daily8 switched to 7Code to design and ship the product end-to-end — a React Native mobile app, an admin dashboard, and an AI layer (OpenAI + AWS Lambda) for moderation, daily summaries, and balanced-opinion features.",
    challenge: {
      eyebrow: "The challenge",
      title: "A multi-format content app that's fast, fair, and shippable on a startup runway.",
      body: "Daily8 came to us after a stalled engagement with a prior vendor. The product had to span three content formats — news, podcasts, and videos — feel personal from session one, and keep community spaces clean as comments scaled. All inside a six-month runway from blank canvas to App Store and Play Store readiness.",
      pains: [
        "Switching providers mid-vision with no working build to inherit",
        "Three content surfaces (news, podcasts, videos) under one cohesive UX",
        "Community comments at scale required automated moderation from day one",
        "Six months to design, build, test, and ready the app for both stores",
      ],
    },
    approach: {
      eyebrow: "Our approach",
      title: "AI-native foundations, end-to-end delivery, ready for the stores in six months.",
      body: "We took the product from discovery to release: one month of focused UI/UX, four months of mobile and admin development, and parallel AI integration across moderation and summarisation. React Native on the front, AWS Lambda for the backend, OpenAI behind the AI features — chosen so the app would scale cleanly as Daily8's audience grew across the Emirates and the wider MENA region.",
      pillars: [
        { title: "Aligned discovery sprint", desc: "One-month UI/UX phase locked the experience — onboarding, three content feeds, comments, profile — before a line of mobile code was written." },
        { title: "React Native + admin dashboard", desc: "Single codebase for iOS and Android, plus an internal admin for editorial and ops, built on AWS Lambda for cost-efficient scale." },
        { title: "AI moderation built-in", desc: "OpenAI-powered comment moderation keeps community spaces safe without a human-only review queue." },
        { title: "AI summarisation & balance", desc: "A Daily Wrap-Up condenses the news cycle; an Unbiased Opinion feature surfaces multiple perspectives on a story." },
      ],
    },
    results: [
      { v: "6 months", l: "design to release", sub: "1 month design · 5 months build & QA" },
      { v: "9", l: "consumer modules shipped", sub: "social login, feeds, comments, profile, push" },
      { v: "3", l: "AI features in core flow", sub: "moderator · daily wrap-up · unbiased opinion" },
      { v: "iOS + Android", l: "ready for the stores", sub: "App Store and Play Store" },
    ],
    testimonial: { quote: "", name: "", role: "" },
    next: { slug: "revote", client: "Eurel International", title: "Remote electronic voting platform for the European Parliament", kind: "defence" },
  },
  "revote": {
    slug: "revote",
    client: "Eurel International / European Parliament", industry: "E-Government / Civic Tech", year: "2023",
    duration: "8 months", team: "1 tech lead · 2 full-stack engineers",
    region: "European Union (Belgium, Italy)", kind: "defence",
    title: "Remote electronic voting platform for the European Parliament",
    tagline: "A modern, secure remote-voting system that lets MEPs vote from anywhere — built on the Parliament's network, designed to replace a 20-year-old in-chamber system.",
    summary: "Eurel International, a Rome-based provider of voting systems for the Italian Senate, the Chamber of Deputies, and the European Parliament for nearly 20 years, partnered with 7Code to design and build a remote-voting application alongside their established in-chamber system. The new system lets Members of the European Parliament authenticate through the EP network and vote securely from a smartphone, tablet, laptop, or desktop — with full feature parity to the chamber experience.",
    challenge: {
      eyebrow: "The challenge",
      title: "Build a remote-voting platform that meets European Parliament's standards from day one.",
      body: "The Parliament's in-chamber voting system had been the standard for 20 years. The new remote application had to match it feature-for-feature, integrate with the EP's high-security network, and remain reliable through plenary and committee sessions where every vote counts. Testing was constrained by EP security policy — our CTO travelled to Brussels twice to validate the system on the live network.",
      pains: [
        "Coordinating architecture and feature parity against a 20-year incumbent in-chamber system",
        "Security and networking restrictions that limited where and how we could test",
        "Performance, reliability, and scalability had to match a real-time chamber-grade system",
        "Each release had to clear EP infrastructure validation before user testing",
      ],
    },
    approach: {
      eyebrow: "Our approach",
      title: "Discovery in Brussels, proof of concept on the EP network, ship in eight months.",
      body: "We began with a one-month discovery to map requirements with Eurel and EP infrastructure teams and define the right architecture, followed by a one-month proof of concept on the European Parliament's network. The four-month development phase shipped five core modules — Landing, Authentication, Plenary, Committee, and Dashboard — with two months of user-acceptance testing on the live infrastructure before the May 2023 release.",
      pillars: [
        { title: "Discovery in-situ", desc: "On-site assessment with Eurel and EP infrastructure teams to lock requirements and constraints before proposing an architecture." },
        { title: "Proof of concept on the live network", desc: "A working PoC inside the Parliament's network during month two — surfacing security and performance constraints early, when they were cheapest to fix." },
        { title: "Five-module delivery", desc: "Plenary, Committee, Landing, Authentication, and Dashboard modules, built so each could be validated, hardened, and shipped independently." },
        { title: "On-site UAT and rollout", desc: "Two months of user-acceptance testing on EP infrastructure, with our CTO in Brussels to resolve issues against live network behaviour." },
      ],
    },
    results: [
      { v: "May 2023", l: "released to production", sub: "8-month delivery from kick-off" },
      { v: "5 modules", l: "shipped", sub: "Plenary, Committee, Landing, Auth, Dashboard" },
      { v: "Multi-device", l: "voting parity", sub: "phone, tablet, laptop, desktop" },
      { v: "Ongoing", l: "engagement", sub: "continued maintenance & rollout support" },
    ],
    testimonial: { quote: "", name: "", role: "" },
    next: { slug: "g42-fleet", client: "Group 42", title: "Real-time fleet tracking for EXPO 2020 Dubai", kind: "energy" },
  },
  "g42-fleet": {
    slug: "g42-fleet",
    client: "Group 42 (G42)", industry: "IoT / Smart Buildings", year: "2022",
    duration: "2 years", team: "2 front-end · 2 back-end · 1 QA",
    region: "United Arab Emirates", kind: "energy",
    title: "Real-time fleet tracking platform for EXPO 2020 Dubai",
    tagline: "An IoT vehicle-tracking system for the world's largest expo — geofences, custom trip events, and real-time control across thousands of devices.",
    summary: "Group 42 (G42) — a UAE-based AI and cloud-computing company — partnered with 7Code to build ESTS, an IoT fleet-tracking platform deployed at EXPO 2020 Dubai. The system manages vehicle tracking across the expo grounds: real-time location, geofence enforcement, custom event detection (overspeeding, loitering, geofence breach), trip playback, and dashboards for security and access teams. We delivered 18 months of build plus 6 months of production maintenance.",
    challenge: {
      eyebrow: "The challenge",
      title: "Real-time, large-scale fleet tracking for a six-month global event with 200+ partners.",
      body: "EXPO 2020 Dubai needed centralised, real-time visibility across vehicle fleets covering security, logistics, and visitor transport. Devices reported over a custom TCP protocol; events had to be processed, geofenced, and escalated within seconds; the dashboard had to remain responsive under heavy concurrent load.",
      pains: [
        "Custom device TCP protocol with streaming telemetry",
        "Real-time geofence rule evaluation across many vehicles",
        "Trip playback and historical event reconstruction",
        "Six-month event window with no tolerance for downtime",
      ],
    },
    approach: {
      eyebrow: "Our approach",
      title: "TCP ingestion, rule-based geofencing, and a real-time map dashboard.",
      body: "We built a dedicated device TCP server to ingest live telemetry, a rule engine for geofences and custom trip events (overspeeding, loitering, exit/enter geofence), and a React Native + Node.js front and back end with a real-time map. Custom procedures were tailored to EXPO 2020. Eighteen months of focused development were followed by six months of production maintenance.",
      pillars: [
        { title: "Device TCP server", desc: "Custom server to ingest device status, real-time telemetry, and backlog data — built to handle the EXPO fleet's volume and unreliability." },
        { title: "Geofences and rule engine", desc: "CRUD for geofences plus a rule engine that evaluates overspeeding, loitering, and zone exits in near real time." },
        { title: "Real-time map dashboard", desc: "Live map and dashboard for security and access teams, with trip playback for incident reconstruction." },
        { title: "Custom EXPO procedures", desc: "Bespoke alert, escalation, and remote-unlock procedures designed around the EXPO 2020 operations playbook." },
      ],
    },
    results: [
      { v: "EXPO 2020", l: "deployed at scale", sub: "delivered for the world expo's six-month run" },
      { v: "18 + 6 mo", l: "build + maintenance", sub: "two-year engagement total" },
      { v: "Real-time", l: "telemetry & alerts", sub: "device TCP ingestion, geofence rules" },
      { v: "5+ modules", l: "shipped", sub: "TCP server, geofences, map, playback, alerts" },
    ],
    testimonial: { quote: "", name: "", role: "" },
    next: { slug: "cloud-of-legacy", client: "Cloud of Legacy", title: "Cloud-based digital-heritage platform with secure inheritance", kind: "cyan" },
  },
  "cloud-of-legacy": {
    slug: "cloud-of-legacy",
    client: "Cloud of Legacy", industry: "Consumer SaaS / Digital Heritage", year: "2024",
    duration: "8 months", team: "1 tech lead · 3 front-end engineers · 1 QA",
    region: "Germany", kind: "cyan",
    title: "Cloud-based digital-heritage platform with secure inheritance access",
    tagline: "Store documents, photos, videos, and credit cards — and pass them on to two designated heirs through a legacy account, secured by 2FA.",
    summary: "Cloud of Legacy is a German-founded subscription cloud service that lets customers store sensitive personal data — documents, photos, videos, credit cards — and designate two trusted contacts who can access the account after the owner's death. We partnered with founder Uwe Bohler to ship the MVP in eight months: discovery, six months of development, and a final month of user-acceptance testing — built on React, Next.js, Keycloak, and Material-UI.",
    challenge: {
      eyebrow: "The challenge",
      title: "A consumer cloud product where the privacy bar is set higher than any single user can audit.",
      body: "The product handles inherently sensitive data — personal documents, payment cards, end-of-life designations — and the user only finds out it works correctly after the worst happens. The MVP had to be tailor-made to the founder's vision, ship inside a fixed budget and timeline, and meet a higher trust bar than a typical consumer SaaS.",
      pains: [
        "Sensitive data (documents, credit cards, end-of-life arrangements) requiring strong identity guarantees",
        "Two-party access model — designated legacy contacts must have a clear, auditable access path",
        "Subscription tiers with different storage and feature entitlements",
        "Tight MVP timeline against a fixed budget for a solo-founder client",
      ],
    },
    approach: {
      eyebrow: "Our approach",
      title: "Keycloak-backed identity, tiered subscriptions, and a Next.js + React MVP shipped in eight months.",
      body: "We standardised identity on Keycloak with two-factor authentication, built tiered plans (Free, Premium Legacy, Golden Legacy) with monthly and annual billing, and shipped subscription, payment, and account-management flows on Next.js + React + Material-UI. One month of discovery preceded six months of development; the final month was user-acceptance testing before launch.",
      pillars: [
        { title: "Keycloak with 2FA", desc: "Industry-standard identity provider with two-factor authentication and the audit trail required for end-of-life access workflows." },
        { title: "Tiered subscription engine", desc: "Free, Premium Legacy, and Golden Legacy plans with monthly and annual billing, upgrade/downgrade, and the storage and feature entitlements bound to each tier." },
        { title: "Legacy account design", desc: "A two-trustee model: each owner designates two heirs who can access the account after death, with a clear verification path." },
        { title: "Next.js + Material-UI front end", desc: "A Next.js + React + Material-UI codebase built to be readable and extensible by a single ongoing maintainer." },
      ],
    },
    results: [
      { v: "MVP launched", l: "in 8 months", sub: "1mo discovery · 6mo build · 1mo UAT" },
      { v: "3 tiers", l: "subscription model", sub: "Free, Premium Legacy, Golden Legacy" },
      { v: "2FA + Keycloak", l: "identity stack", sub: "audit-grade authentication" },
      { v: "Ongoing", l: "engagement", sub: "continued maintenance & feature work" },
    ],
    testimonial: { quote: "", name: "", role: "" },
    next: { slug: "lidl-road-safety", client: "Lidl Romania", title: "Children's road-safety gamification web app", kind: "cyan" },
  },
  "lidl-road-safety": {
    slug: "lidl-road-safety",
    client: "Lidl Romania", industry: "Education / Retail CSR", year: "2022",
    duration: "Ongoing", team: "1 front-end · 1 back-end · 1 QA",
    region: "Romania", kind: "cyan",
    title: "Children's road-safety gamification web app for Lidl Romania",
    tagline: "A gamified learning platform for kids — built with Lidl Romania and the Romanian Police to make road safety engaging, parent-supervised, and inclusive.",
    summary: "Lidl Romania, in partnership with the Romanian Police, runs an annual road-safety education programme for children — now in its eighth edition. We designed and built the web app behind it: a public landing experience plus an authenticated kids' space with quizzes, levels, video lessons, and a points-based gamification engine. Built end-to-end, including front-end, back-end, testing, deployment, and ongoing support.",
    challenge: {
      eyebrow: "The challenge",
      title: "Make road-safety education actually fun for children — without compromising the seriousness of the message.",
      body: "An educational programme run by a national retailer and a national police force has to be safe, accessible, and educational — and a children's product has to be engaging or it dies on the homepage. The challenge was to build a gamified web app that earns the seriousness of the brief while genuinely working as a kids' product, with parent guidance and inclusive design at the centre.",
      pains: [
        "A children's audience with all the engagement and accessibility considerations that entails",
        "Multi-stakeholder content (Lidl Romania + Romanian Police) requiring careful approval flows",
        "Public + private split: open landing experience plus authenticated gamified space",
        "Annual programme cycle — the platform has to evolve each year without disruption",
      ],
    },
    approach: {
      eyebrow: "Our approach",
      title: "Public landing, authenticated kids' space, and a gamification engine that scales each year.",
      body: "We split the web app into a public marketing experience and an authenticated child-and-parent space. The authenticated space is built around episodes, levels, quizzes, and video content — each anchored in a points-based gamification engine that rewards progress and unlocks the next level. A back-office lets Lidl and Police content owners manage episodes, levels, and reporting independently.",
      pillars: [
        { title: "Public + private architecture", desc: "Open marketing pages plus an authenticated kid-and-parent space, each tuned to its own engagement and accessibility needs." },
        { title: "Episode and level engine", desc: "Episodes group themed lessons; levels structure progression; videos and quizzes deliver the content. All editable by the back-office team." },
        { title: "Gamification with welcoming logic", desc: "Dynamic points reward learning; welcoming logic eases new users in; flexible rules keep the experience inclusive across families." },
        { title: "Back-office for editorial teams", desc: "A reporting and content-management module for Lidl and Police staff — they manage episodes, content, and reporting without our involvement." },
      ],
    },
    results: [
      { v: "8th edition", l: "annual programme run", sub: "with Lidl Romania + Romanian Police" },
      { v: "7 modules", l: "shipped", sub: "Profile, Child, Episode, Level, Gamification, Report, Auth" },
      { v: "End-to-end", l: "delivery", sub: "front-end, back-end, QA, deploy, support" },
      { v: "Inclusive", l: "by design", sub: "WCAG-aligned, parent-guided, family-friendly" },
    ],
    testimonial: { quote: "", name: "", role: "" },
    next: { slug: "helix-health", client: "Helix Health", title: "Telehealth platform for a national clinic network", kind: "health" },
  },
};

// Active case — reassigned synchronously in CaseStudyPage before render
let CSD = CASES["helix-health"];


// ──────────────────────────────────────────────────────────────────
// Shared mockup graphics — phone + browser
// ──────────────────────────────────────────────────────────────────
function PhoneMockup({ accent = "var(--cyan-500)" }) {
  if (CSD.slug === "daily8") {
    return (
      <div className="csd-phone csd-phone--shot">
        <div className="csd-phone-notch"/>
        <img className="csd-phone-img" src="project/uploads/daily8-notifications.png" alt="Daily8 notifications screen"/>
      </div>
    );
  }
  return (
    <div className="csd-phone">
      <div className="csd-phone-notch"/>
      <div className="csd-phone-screen">
        <div className="csd-app-bar">
          <div className="csd-app-avatar"/>
          <div className="csd-app-bars"><div/><div/></div>
          <div className="csd-app-bell">●</div>
        </div>
        <div className="csd-app-greeting">Good morning, Sarah</div>
        <div className="csd-app-sub">Your next visit is Tue at 10:30</div>
        <div className="csd-app-card" style={{ background: accent }}>
          <div className="csd-app-card-tag">Recommended</div>
          <div className="csd-app-card-title">Annual check-in</div>
          <div className="csd-app-card-meta">15 min · Async or video</div>
          <div className="csd-app-card-cta">Book now →</div>
        </div>
        <div className="csd-app-section">Upcoming</div>
        <div className="csd-app-list">
          <div className="csd-app-item"><div className="csd-app-dot" style={{ background: accent }}/><div className="csd-app-lines"><div className="csd-l1">Dr. Patel · 10:30 AM</div><div className="csd-l2">Tuesday · Async messaging</div></div></div>
          <div className="csd-app-item"><div className="csd-app-dot"/><div className="csd-app-lines"><div className="csd-l1">Dr. Kim · 3:15 PM</div><div className="csd-l2">Friday · Video consult</div></div></div>
        </div>
      </div>
    </div>
  );
}

function WholesumHero() {
  return (
    <div className="csd-browser csd-ws-browser">
      <div className="csd-browser-bar">
        <span className="csd-dot"/><span className="csd-dot"/><span className="csd-dot"/>
        <div className="csd-browser-url">wholesum.tech</div>
      </div>
      <img
        className="csd-ws-shot"
        src="project/uploads/wholesum%20hero.png"
        alt="WholeSum homepage hero — Get deeper insights from your richest data"
      />
    </div>
  );
}

function Daily8Hero() {
  return (
    <div className="csd-d8-stage">
      <div className="csd-d8-grid" aria-hidden="true"/>
      <img
        className="csd-d8-shot csd-d8-shot--main"
        src="project/uploads/daily8-hero.png"
        alt="Daily8 onboarding screen — Welcome to Daily8 with language selection"
      />
      <img
        className="csd-d8-shot csd-d8-shot--secondary"
        src="project/uploads/daily8-feed.png"
        alt="Daily8 news feed — personalised news, podcasts, and videos"
      />
    </div>
  );
}

function PhotoHero({ src, alt, urlBar, caption }) {
  return (
    <div className="csd-browser">
      {urlBar ? (
        <div className="csd-browser-bar">
          <span className="csd-dot"/><span className="csd-dot"/><span className="csd-dot"/>
          <div className="csd-browser-url">{urlBar}</div>
        </div>
      ) : null}
      <img className="csd-ws-shot" src={src} alt={alt}/>
      {caption ? <div className="csd-photo-caption">{caption}</div> : null}
    </div>
  );
}

function BrowserMockup({ kind = "calendar" }) {
  if (CSD.slug === "wholesum") return <WholesumHero/>;
  if (CSD.slug === "daily8") return <Daily8Hero/>;
  if (CSD.slug === "revote") return <PhotoHero
    src="project/uploads/revote-hero.jpg"
    alt="Igor Mardari (CTO, 7Code) with Massimo Locorotondo (Eurel) inside the European Parliament chamber, Brussels"
    caption="Igor Mardari (CTO, 7Code) and Massimo Locorotondo (Eurel) at the European Parliament — Brussels, 2023"
  />;
  if (CSD.slug === "g42-fleet") return <PhotoHero
    src="project/uploads/g42-fleet-hero.jpg"
    urlBar="g42.ai · ESTS Fleet Tracking"
    alt="G42 ESTS fleet-tracking dashboard with all-trip alerts and live vehicle map"
  />;
  if (CSD.slug === "cloud-of-legacy") return <PhotoHero
    src="project/uploads/cloud-of-legacy-hero.jpg"
    urlBar="cloudoflegacy.com"
    alt="Cloud of Legacy landing page — digital-heritage cloud with subscription"
  />;
  if (CSD.slug === "lidl-road-safety") return <PhotoHero
    src="project/uploads/lidl-road-safety-hero.jpg"
    alt="Lidl Romania + Politia Romana road-safety web app for children"
  />;
  return (
    <div className="csd-browser">
      <div className="csd-browser-bar">
        <span className="csd-dot"/><span className="csd-dot"/><span className="csd-dot"/>
        <div className="csd-browser-url">helix.health/clinic/dashboard</div>
      </div>
      <div className="csd-browser-body">
        <div className="csd-browser-side">
          <div className="csd-side-logo">H</div>
          <div className="csd-side-item is-active">Today</div>
          <div className="csd-side-item">Patients</div>
          <div className="csd-side-item">Messages <span className="csd-badge">12</span></div>
          <div className="csd-side-item">Schedule</div>
          <div className="csd-side-item">Reports</div>
        </div>
        <div className="csd-browser-main">
          <div className="csd-main-head">
            <div>
              <div className="csd-main-title">Today · 14 visits</div>
              <div className="csd-main-sub">Tuesday, Apr 23 · Dr. Patel</div>
            </div>
            <div className="csd-main-pill">Live</div>
          </div>
          <div className="csd-stat-row">
            <div className="csd-stat"><div className="csd-stat-l">Booked</div><div className="csd-stat-v">14</div></div>
            <div className="csd-stat"><div className="csd-stat-l">Waiting</div><div className="csd-stat-v">3</div></div>
            <div className="csd-stat"><div className="csd-stat-l">Avg wait</div><div className="csd-stat-v">2m</div></div>
            <div className="csd-stat"><div className="csd-stat-l">Drop-off</div><div className="csd-stat-v" style={{color:"var(--cyan-600)"}}>18%</div></div>
          </div>
          <div className="csd-table">
            <div className="csd-table-row csd-table-head"><div>Time</div><div>Patient</div><div>Type</div><div>Status</div></div>
            <div className="csd-table-row"><div>09:00</div><div>S. Reyes</div><div>Async</div><div className="csd-pill csd-pill--ok">Done</div></div>
            <div className="csd-table-row"><div>09:30</div><div>M. Okafor</div><div>Video</div><div className="csd-pill csd-pill--ok">Done</div></div>
            <div className="csd-table-row csd-table-row--now"><div>10:30</div><div>P. Singh</div><div>Async</div><div className="csd-pill csd-pill--live">Now</div></div>
            <div className="csd-table-row"><div>11:00</div><div>L. Morales</div><div>Video</div><div className="csd-pill">Soon</div></div>
            <div className="csd-table-row"><div>11:30</div><div>A. Cohen</div><div>Async</div><div className="csd-pill">Booked</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FactsList({ inline = false }) {
  const facts = [
    { l: "Client",   v: CSD.client },
    { l: "Industry", v: CSD.industry },
    { l: "Year",     v: CSD.year },
    { l: "Duration", v: CSD.duration },
    { l: "Team",     v: CSD.team },
    { l: "Region",   v: CSD.region },
  ];
  return (
    <dl className={"csd-facts" + (inline ? " csd-facts--inline" : "")}>
      {facts.map(f => (
        <div key={f.l} className="csd-fact">
          <dt>{f.l}</dt>
          <dd>{f.v}</dd>
        </div>
      ))}
    </dl>
  );
}

function ResultsStrip({ dark = false }) {
  return (
    <div className={"csd-results" + (dark ? " csd-results--dark" : "")}>
      {CSD.results.map((r, i) => (
        <div key={i} className="csd-result">
          <div className="csd-result-v">{r.v}</div>
          <div className="csd-result-l">{r.l}</div>
          <div className="csd-result-sub">{r.sub}</div>
        </div>
      ))}
    </div>
  );
}

function TestimonialCard({ flat = false }) {
  if (!CSD.testimonial || !CSD.testimonial.quote) return null;
  return (
    <div className={"csd-quote" + (flat ? " csd-quote--flat" : "")}>
      <div className="csd-quote-mark">&ldquo;</div>
      <p className="csd-quote-text">{CSD.testimonial.quote}</p>
      <div className="csd-quote-foot">
        <div className="csd-quote-avatar">{CSD.testimonial.name.split(" ").map(s=>s[0]).join("")}</div>
        <div>
          <div className="csd-quote-name">{CSD.testimonial.name}</div>
          <div className="csd-quote-role">{CSD.testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}

function NextCaseCTA() {
  return (
    <a href={"#/case-study/" + CSD.next.slug} className="csd-next">
      <div className="csd-next-meta">Next case study</div>
      <div className="csd-next-row">
        <div>
          <div className="csd-next-client">{CSD.next.client}</div>
          <div className="csd-next-title">{CSD.next.title}</div>
        </div>
        <span className="csd-next-arrow"><Icon.arrow /></span>
      </div>
    </a>
  );
}

// ──────────────────────────────────────────────────────────────────
// V1 — Long-read editorial (sticky TOC sidebar)
// ──────────────────────────────────────────────────────────────────
function CSDLongRead() {
  const [active, setActive] = useStateCSD("overview");
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "challenge", label: "The challenge" },
    { id: "approach", label: "Our approach" },
    { id: "product", label: "The product" },
    { id: "results", label: "Results" },
    { id: "voice", label: "In their words" },
  ];
  useEffectCSD(() => {
    const handler = () => {
      let cur = "overview";
      for (const s of sections) {
        const el = document.getElementById("csd-" + s.id);
        if (el && el.getBoundingClientRect().top < 200) cur = s.id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="csd-long">
      <div className="csd-long-hero">
        <div className="container">
          <div className="csd-long-meta">
            <span className="csd-kicker"><span className="csd-dot"/> Case study · {CSD.year}</span>
            <span>{CSD.industry}</span>
            <span>·</span>
            <span>{CSD.duration}</span>
          </div>
          <h1 className="csd-long-title">{CSD.title}</h1>
          <p className="csd-long-tagline">{CSD.tagline}</p>
        </div>
      </div>

      <div className="csd-long-cover-wrap">
        <div className="container">
          <div className="csd-long-cover">
            <BrowserMockup />
          </div>
        </div>
      </div>

      <div className="container csd-long-body-wrap">
        <aside className="csd-toc">
          <div className="csd-toc-label">Contents</div>
          <ul>
            {sections.map(s => (
              <li key={s.id}>
                <a href={"#csd-" + s.id} className={active === s.id ? "is-active" : ""}>{s.label}</a>
              </li>
            ))}
          </ul>
          <div className="csd-toc-facts">
            <FactsList />
          </div>
        </aside>

        <article className="csd-long-article">
          <section id="csd-overview">
            <p className="csd-lead">{CSD.summary}</p>
          </section>

          <section id="csd-challenge">
            <span className="csd-eyebrow">{CSD.challenge.eyebrow}</span>
            <h2>{CSD.challenge.title}</h2>
            <p>{CSD.challenge.body}</p>
            <ul className="csd-bullets">
              {CSD.challenge.pains.map((p, i) => (
                <li key={i}><span className="csd-bullet-dot"/>{p}</li>
              ))}
            </ul>
          </section>

          <section id="csd-approach">
            <span className="csd-eyebrow">{CSD.approach.eyebrow}</span>
            <h2>{CSD.approach.title}</h2>
            <p>{CSD.approach.body}</p>
            <div className="csd-pillars">
              {CSD.approach.pillars.map((p, i) => (
                <div key={i} className="csd-pillar">
                  <div className="csd-pillar-num">0{i+1}</div>
                  <div className="csd-pillar-title">{p.title}</div>
                  <div className="csd-pillar-desc">{p.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="csd-product" className="csd-product-section">
            <span className="csd-eyebrow">The product</span>
            <h2>What we shipped.</h2>
            <p>A patient app, a clinic dashboard, and a HIPAA-grade messaging layer between them.</p>
            <div className="csd-product-pair">
              <div className="csd-product-art csd-product-art--phone"><PhoneMockup /></div>
              <div className="csd-product-art csd-product-art--browser"><BrowserMockup /></div>
            </div>
          </section>

          <section id="csd-results">
            <span className="csd-eyebrow">Results</span>
            <h2>The numbers, four months in.</h2>
            <ResultsStrip />
          </section>

          <section id="csd-voice">
            <span className="csd-eyebrow">In their words</span>
            <TestimonialCard />
          </section>
        </article>
      </div>

      <section className="section">
        <div className="container"><NextCaseCTA /></div>
      </section>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// V2 — Metric-heavy marketing
// ──────────────────────────────────────────────────────────────────
function CSDMetric() {
  return (
    <div className="csd-metric">
      <section className="csd-metric-hero">
        <div className="container">
          <div className="csd-metric-hero-grid">
            <div className="csd-metric-hero-text">
              <span className="csd-kicker csd-kicker--inverse"><span className="csd-dot csd-dot--cyan"/> {CSD.industry} · {CSD.year}</span>
              <h1>{CSD.client}</h1>
              <p className="csd-metric-tagline">{CSD.tagline}</p>
              <div className="csd-metric-hero-stats">
                {CSD.results.slice(0, 3).map((r, i) => (
                  <div key={i} className="csd-metric-hero-stat">
                    <div className="csd-metric-hero-v">{r.v}</div>
                    <div className="csd-metric-hero-l">{r.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="csd-metric-hero-art">
              <div className="csd-metric-glow"/>
              <BrowserMockup />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <FactsList inline />
        </div>
      </section>

      <section className="section">
        <div className="container csd-narr">
          <div className="csd-narr-row">
            <div className="csd-narr-col">
              <span className="csd-eyebrow">Before</span>
              <h2>62% drop-off. Phone-call workarounds. A HIPAA audit looming.</h2>
              <p>{CSD.challenge.body}</p>
            </div>
            <div className="csd-narr-col">
              <span className="csd-eyebrow csd-eyebrow--cyan">After</span>
              <h2>18% drop-off. Async-first consults. 100% audit pass.</h2>
              <p>{CSD.approach.body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--ink csd-metric-results">
        <div className="container">
          <div className="csd-metric-results-head">
            <span className="csd-eyebrow csd-eyebrow--inverse">Results</span>
            <h2>What 12 weeks of focused work delivered.</h2>
          </div>
          <ResultsStrip dark />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <TestimonialCard />
        </div>
      </section>

      <section className="section">
        <div className="container"><NextCaseCTA /></div>
      </section>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// V3 — Visual / image-led
// ──────────────────────────────────────────────────────────────────
function CSDVisual() {
  return (
    <div className="csd-visual">
      <section className="csd-visual-hero">
        <div className="csd-visual-hero-bg"><CSCover kind={CSD.kind} label={CSD.industry} slug={CSD.slug} /></div>
        <div className="container csd-visual-hero-overlay">
          <span className="csd-kicker csd-kicker--inverse"><span className="csd-dot csd-dot--cyan"/> Featured case study</span>
          <h1>{CSD.title}</h1>
          <p>{CSD.tagline}</p>
          <FactsList inline />
        </div>
      </section>

      <section className="section">
        <div className="container csd-visual-intro">
          <span className="csd-eyebrow">Project summary</span>
          <p className="csd-lead">{CSD.summary}</p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="csd-visual-split">
            <div className="csd-visual-split-text">
              <span className="csd-eyebrow">{CSD.challenge.eyebrow}</span>
              <h2>{CSD.challenge.title}</h2>
              <p>{CSD.challenge.body}</p>
              <ul className="csd-bullets">
                {CSD.challenge.pains.map((p, i) => <li key={i}><span className="csd-bullet-dot"/>{p}</li>)}
              </ul>
            </div>
            <div className="csd-visual-split-art csd-visual-split-art--phone">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="csd-visual-split csd-visual-split--reverse">
            <div className="csd-visual-split-art">
              <BrowserMockup />
            </div>
            <div className="csd-visual-split-text">
              <span className="csd-eyebrow">{CSD.approach.eyebrow}</span>
              <h2>{CSD.approach.title}</h2>
              <p>{CSD.approach.body}</p>
              <div className="csd-pillars csd-pillars--compact">
                {CSD.approach.pillars.map((p, i) => (
                  <div key={i} className="csd-pillar"><div className="csd-pillar-title">{p.title}</div><div className="csd-pillar-desc">{p.desc}</div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="csd-visual-results-head">
            <span className="csd-eyebrow">Results</span>
            <h2>The outcomes.</h2>
          </div>
          <ResultsStrip />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <TestimonialCard />
          <div style={{ marginTop: 56 }}>
            <NextCaseCTA />
          </div>
        </div>
      </section>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// V4 — Two-column with sticky sidebar
// ──────────────────────────────────────────────────────────────────
function CSDSticky() {
  return (
    <div className="csd-sticky">
      <section className="csd-sticky-hero">
        <div className="container">
          <span className="csd-kicker"><span className="csd-dot"/> Case study · {CSD.year}</span>
          <h1>{CSD.title}</h1>
          <p>{CSD.tagline}</p>
        </div>
      </section>

      <div className="container csd-sticky-body">
        <aside className="csd-sticky-aside">
          <div className="csd-sticky-card">
            <div className="csd-sticky-card-head">
              <div className="csd-sticky-client">{CSD.client}</div>
              <div className="csd-sticky-tag">{CSD.industry}</div>
            </div>
            <FactsList />
            <div className="csd-sticky-results">
              {CSD.results.slice(0, 2).map((r, i) => (
                <div key={i} className="csd-sticky-result">
                  <div className="csd-sticky-result-v">{r.v}</div>
                  <div className="csd-sticky-result-l">{r.l}</div>
                </div>
              ))}
            </div>
            <a href="#/contact" className="btn btn--primary csd-sticky-cta">Start a project <Icon.arrow /></a>
          </div>
        </aside>

        <article className="csd-sticky-article">
          <section className="csd-sticky-section">
            <div className="csd-sticky-cover"><BrowserMockup /></div>
          </section>
          <section className="csd-sticky-section">
            <span className="csd-eyebrow">Overview</span>
            <p className="csd-lead">{CSD.summary}</p>
          </section>
          <section className="csd-sticky-section">
            <span className="csd-eyebrow">{CSD.challenge.eyebrow}</span>
            <h2>{CSD.challenge.title}</h2>
            <p>{CSD.challenge.body}</p>
            <ul className="csd-bullets">
              {CSD.challenge.pains.map((p, i) => <li key={i}><span className="csd-bullet-dot"/>{p}</li>)}
            </ul>
          </section>
          <section className="csd-sticky-section">
            <span className="csd-eyebrow">{CSD.approach.eyebrow}</span>
            <h2>{CSD.approach.title}</h2>
            <p>{CSD.approach.body}</p>
            <div className="csd-pillars">
              {CSD.approach.pillars.map((p, i) => (
                <div key={i} className="csd-pillar">
                  <div className="csd-pillar-num">0{i+1}</div>
                  <div className="csd-pillar-title">{p.title}</div>
                  <div className="csd-pillar-desc">{p.desc}</div>
                </div>
              ))}
            </div>
          </section>
          <section className="csd-sticky-section">
            <div className="csd-sticky-cover"><PhoneMockup /></div>
          </section>
          <section className="csd-sticky-section">
            <span className="csd-eyebrow">Results</span>
            <h2>What changed.</h2>
            <ResultsStrip />
          </section>
          <section className="csd-sticky-section">
            <TestimonialCard />
          </section>
          <section className="csd-sticky-section">
            <NextCaseCTA />
          </section>
        </article>
      </div>
    </div>
  );
}


// ─────────────────────────────────────────────────────────────────
// Page wrapper — resolves slug, sets CSD, renders variant
// ─────────────────────────────────────────────────────────────────
function CaseStudyPage({ slug = "helix-health", variant = "longread" }) {
  // Reassign module-level CSD synchronously before render
  CSD = CASES[slug] || CASES["helix-health"];

  let Body;
  if (variant === "metric") Body = <CSDMetric />;
  else if (variant === "visual") Body = <CSDVisual />;
  else if (variant === "sticky") Body = <CSDSticky />;
  else Body = <CSDLongRead />;
  return (
    <div className="page">
      {Body}
      <CTAStrip />
    </div>
  );
}

window.CASES = CASES;
window.CaseStudyPage = CaseStudyPage;
