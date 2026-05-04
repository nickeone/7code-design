/* global React, Icon, CSCover, CTAStrip */
/* Full case study detail page — 4 variants, slug-routed */

const { useState: useStateCSD, useEffect: useEffectCSD } = React;

// ─────────────────────────────────────────────────────────────────
// All case data — keyed by slug
// ─────────────────────────────────────────────────────────────────
const CASES = {
  "wholesum": {
    slug: "wholesum",
    client: "WholeSum", industry: "Data / AI", year: "2025",
    duration: "16 weeks", team: "1 UI/UX designer · 1 cloud architect · 1 front-end · 1 back-end · 1 QA",
    region: "United Kingdom", kind: "cyan",
    title: "Self-serve AI analytics platform for unstructured text",
    tagline: "Qualitative analytics, automated: upload surveys, reviews, and interview transcripts, get statistically-grounded, AI-quantified insight — built end-to-end on Next.js + Nest.js + AWS.",
    summary: "WholeSum is a UK-based AI / data-analytics startup that turns unstructured qualitative text — surveys, reviews, interview transcripts — into reproducible, statistically-grounded insights. We partnered with WholeSum to validate self-serve demand and drive direct API adoption through a clean, fast UX focused on time-to-insight. The product was designed in 4 weeks, built in 10 weeks, validated through 2 weeks of UAT, and shipped on time on Next.js + Nest.js + PostgreSQL with S3, Cognito, and Elastic Beanstalk on AWS.",
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
    testimonial: {
      quote: "The self-serve MVP is live and in use. 7Code has excellent communication and project management skills. The team is quick to respond to the client's needs. The client is pleased with the outcome and the team's technical leadership.",
      name: "Emily Kucharski",
      role: "CEO & Co-Founder, WholeSum",
    },
    metaDescription: "Self-serve AI analytics platform for unstructured text by 7Code. Built end-to-end on Next.js + Nest.js + AWS for WholeSum (UK) — 16-week design and build, launched on time and raised funding.",
    next: { slug: "daily8", client: "Daily8", title: "AI-powered news aggregator for the MENA region", kind: "cyan" },
  },
  "daily8": {
    slug: "daily8",
    client: "Daily8", industry: "Mobile / Media", year: "2022",
    duration: "6 months", team: "1 UI/UX designer · 1 architect · 3 full-stack developers · 1 PM · 1 QA",
    region: "United Arab Emirates", kind: "cyan",
    title: "AI-powered news aggregator for the MENA region",
    tagline: "MediaTech meets generative AI: a React Native news, podcasts, and videos app for the MENA region — moderated, summarised, and balanced by an OpenAI + AWS Lambda AI layer.",
    summary: "Daily8 is a UAE-based AI MediaTech startup building a centralised platform for news, podcasts, and videos tailored by country and interest — live now at daily8.com/en. After a stalled engagement with a previous provider, Daily8 switched to 7Code to design and ship the product end-to-end: a React Native iOS + Android app, the daily8.com web experience, an admin dashboard, and an AI layer on OpenAI + AWS Lambda for automated comment moderation, daily wrap-up summaries, and balanced-opinion features.",
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
    metaDescription: "AI-powered news aggregator for the MENA region by 7Code. Daily8 (UAE) — live at daily8.com/en — with React Native mobile, web, AI moderation, daily wrap-up, and unbiased opinion on AWS Lambda + OpenAI. Shipped iOS + Android in 6 months.",
    next: { slug: "revote", client: "Eurel International", title: "Remote electronic voting platform for the European Parliament", kind: "defence" },
  },
  "revote": {
    slug: "revote",
    client: "Eurel International / European Parliament", industry: "E-Government / Civic Tech", year: "2023",
    duration: "8 months", team: "1 tech lead · 2 full-stack engineers",
    region: "European Union (Belgium, Italy)", kind: "defence",
    title: "Remote electronic voting platform for the European Parliament",
    tagline: "GovTech / E-Government: a multi-device remote-voting application for the European Parliament — authenticated on the EP network, designed to complement a 20-year-old in-chamber system without breaking it.",
    summary: "Eurel International is a Rome-based GovTech / E-Government provider of electronic voting systems for the Italian Senate, the Chamber of Deputies, and the European Parliament for nearly 20 years. 7Code partnered with Eurel to design and build a remote-voting application alongside their established in-chamber system, letting Members of the European Parliament authenticate through the EP network and vote securely from smartphone, tablet, laptop, or desktop — with full feature parity to the chamber experience.",
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
    metaDescription: "Remote electronic voting platform for the European Parliament, built by 7Code with Eurel International. Secure multi-device voting on the EP network — five modules, eight months, released May 2023.",
    next: { slug: "g42-fleet", client: "Group 42", title: "Real-time fleet tracking for EXPO 2020 Dubai", kind: "energy" },
  },
  "g42-fleet": {
    slug: "g42-fleet",
    client: "Group 42 (G42)", industry: "IoT / Smart Buildings", year: "2022",
    duration: "2 years", team: "2 front-end · 2 back-end · 1 QA",
    region: "United Arab Emirates", kind: "energy",
    title: "Real-time fleet tracking platform for EXPO 2020 Dubai",
    tagline: "IoT meets telematics at world-expo scale: real-time vehicle tracking with geofence rule evaluation, custom trip events, and trip playback — delivered for EXPO 2020 Dubai on a custom TCP ingestion pipeline.",
    summary: "Group 42 (G42) is a UAE-based AI and cloud-computing company. 7Code partnered with G42 to build ESTS — an IoT fleet-tracking and smart-buildings platform deployed at EXPO 2020 Dubai — covering real-time vehicle location, geofence rule enforcement, custom event detection (overspeeding, loitering, geofence breach), trip playback, and dashboards for security and access teams. The stack: a custom device TCP server feeding a Node.js + React Native dashboard with Material-UI. Eighteen months of focused build plus six months of production maintenance.",
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
    metaDescription: "Real-time IoT fleet tracking for EXPO 2020 Dubai by 7Code, partnered with Group 42 (G42, UAE). Custom TCP ingestion, geofence rules, real-time map, and trip playback — 18 months build + 6 months maintenance.",
    next: { slug: "cloud-of-legacy", client: "Cloud of Legacy", title: "Cloud-based digital-heritage platform with secure inheritance", kind: "cyan" },
  },
  "cloud-of-legacy": {
    slug: "cloud-of-legacy",
    client: "Cloud of Legacy", industry: "Consumer SaaS / Digital Heritage", year: "2024",
    duration: "8 months", team: "1 tech lead · 3 front-end engineers · 1 QA",
    region: "Germany", kind: "cyan",
    title: "Cloud-based digital-heritage platform with secure inheritance access",
    tagline: "Digital Heritage / DeathTech meets consumer SaaS: a Next.js + React + Keycloak subscription cloud where customers store sensitive personal data and designate two heirs to inherit it — secured by Keycloak two-factor authentication.",
    summary: "Cloud of Legacy is a German Digital Heritage / DeathTech consumer SaaS that lets customers store sensitive personal data — documents, photos, videos, credit cards — and designate two trusted legacy contacts who can access the account after the owner's death. 7Code partnered with founder Uwe Bohler to ship the MVP in eight months: one month of discovery, six months of development, and one month of user-acceptance testing — built on React + Next.js + Material-UI on the front, Keycloak with 2FA for identity, and a tiered subscription engine (Free, Premium Legacy, Golden Legacy) with monthly and annual billing.",
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
    metaDescription: "Cloud-based digital-heritage platform for Cloud of Legacy (Germany), built by 7Code in 8 months on Next.js + React + Keycloak with 2FA. Subscription cloud where users designate two heirs.",
    next: { slug: "lidl-road-safety", client: "Lidl Romania", title: "Children's road-safety gamification web app", kind: "cyan" },
  },
  "lidl-road-safety": {
    slug: "lidl-road-safety",
    client: "Lidl Romania", industry: "Education / Retail CSR", year: "2022",
    duration: "6 months", team: "1 front-end · 1 back-end · 1 QA",
    region: "Romania", kind: "cyan",
    title: "Children's road-safety gamification web app for Lidl Romania",
    tagline: "EdTech / CSR in retail: a React + Nest.js gamified web app for Lidl Romania and the Romanian Police that teaches children road-safety legislation through episodes, levels, video lessons, and a points-based engine.",
    summary: "Lidl Romania, in partnership with the Romanian Police, runs an annual children's road-safety education programme — now in its eighth edition. 7Code designed and built the web app behind it: a public landing experience plus an authenticated kids-and-parents space with quizzes, levels, video lessons, and a points-based gamification engine. Stack: React on the front, a Nest.js API on Heroku-hosted infrastructure. Six-month delivery covering front-end, back-end, QA, deployment, and ongoing support.",
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
      title: "Public landing, authenticated kids' space, and a gamification engine on React + Nest.js.",
      body: "We split the web app into a public marketing experience and an authenticated child-and-parent space. The authenticated space is built around episodes, levels, quizzes, and video content — each anchored in a points-based gamification engine that rewards progress and unlocks the next level. Stack: React on the front, a Nest.js API, and Heroku-hosted infrastructure. A back-office lets Lidl and Police content owners manage episodes, levels, and reporting independently.",
      pillars: [
        { title: "Public + private architecture", desc: "Open marketing pages plus an authenticated kid-and-parent space, each tuned to its own engagement and accessibility needs." },
        { title: "React + Nest.js stack", desc: "React on the front and a Nest.js API on Heroku — chosen so Lidl can extend the platform each annual edition without re-platforming." },
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
    metaDescription: "Children's road-safety gamification web app for Lidl Romania and the Romanian Police, built by 7Code on React + Nest.js + Heroku in 6 months. Public + private split, episodes, levels, and a points engine.",
    next: { slug: "founders-factory", client: "Founders Factory", title: "UI overhaul + ongoing engineering for a UK venture studio", kind: "finance" },
  },
  "founders-factory": {
    slug: "founders-factory",
    client: "Founders Factory", industry: "Venture Studio / VC", year: "2024",
    duration: "Ongoing", team: "1 full-stack engineer · 1 PM",
    region: "United Kingdom", kind: "finance",
    title: "UI overhaul and ongoing engineering for a leading European venture studio",
    tagline: "MarTech for VC: a Gatsby + Storyblok + Tailwind UI overhaul of foundersfactory.com — bug backlog cleared, base CSS migrated to Tailwind under TypeScript and CircleCI, and ongoing component delivery as the venture studio's site keeps evolving.",
    summary: "Founders Factory is a UK-based venture studio co-founded by Brent Hoberman and Henry Lane Fox, backing early-stage founders with capital, 70+ operators, and corporate-partner access — 300+ portfolio companies have raised over $800M since 2015. 7Code picked up their Gatsby + Storyblok marketing site mid-flight, cleared a backlog of critical bugs under CircleCI gating, standardised the styling layer onto Tailwind CSS with TypeScript end-to-end, and now ships new components and features against a stable foundation as the platform continues to evolve.",
    challenge: {
      eyebrow: "The challenge",
      title: "An inherited, fast-moving marketing platform with no styling standard.",
      body: "Founders Factory's website is the public face of a venture studio that talks to founders, corporate partners, and investors every day — it cannot go down, look broken, or fall behind the brand. We came in to a Gatsby + Storyblok codebase without a unified styling system, with a backlog of bugs to clear and a roadmap of new components and features waiting behind them.",
      pains: [
        "Inherited codebase without a consistent styling layer or component standard",
        "Active marketing platform — no maintenance windows, no broken commits",
        "Critical-bug backlog that had to be cleared before new features could ship",
        "Continuous content evolution managed via Storyblok, requiring tight CMS / front-end coordination",
      ],
    },
    approach: {
      eyebrow: "Our approach",
      title: "Two phases: clear the backlog, then build forward.",
      body: "We split the engagement into two micro-phases. Phase one focused on bug-fixing the inherited code and standardising the styling layer — migrating components from base CSS to Tailwind, with TypeScript and CircleCI underpinning every PR. Phase two added new components and features against the now-stable foundation, with the same small, embedded delivery pattern — one full-stack engineer and a project manager working directly inside the Founders Factory cadence.",
      pillars: [
        { title: "Bugfix-first phase", desc: "Cleared the backlog inherited with the codebase, with CircleCI gating every fix and TypeScript catching regressions before production." },
        { title: "Tailwind migration", desc: "Component-by-component move from base CSS to Tailwind — same visual output, far cleaner architecture, faster downstream design changes." },
        { title: "New components on demand", desc: "Once the foundation was stable, the second phase shipped new UI components and features into the live Storyblok-driven site without disrupting content workflows." },
        { title: "Embedded, ongoing engagement", desc: "A small, persistent team — one full-stack engineer plus a project manager — embedded in the Founders Factory cadence with daily-status communication via email, messaging, and virtual meetings." },
      ],
    },
    results: [
      { v: "Version 6", l: "live and stable", sub: "bug-free launch on Gatsby + Storyblok + Tailwind" },
      { v: "Tailwind", l: "styling standard", sub: "migrated from base CSS, component by component" },
      { v: "Ongoing", l: "engagement", sub: "two-phase delivery, then continuous backlog progression" },
      { v: "$800M+", l: "raised by their portfolio", sub: "300+ companies backed since 2015" },
    ],
    testimonial: {
      quote: "7Code has steadily progressed through the client's development backlog. Their team demonstrates proactiveness, timely delivery, and proactive engagement. They also ensure strong communication through email, messaging apps, and virtual meetings.",
      name: "Paul Egan",
      role: "CTO, Founders Factory",
    },
    metaDescription: "UI overhaul and ongoing engineering for Founders Factory (UK venture studio) by 7Code. Gatsby + Storyblok site migrated from base CSS to Tailwind, with TypeScript and CircleCI underpinning every PR.",
    next: { slug: "hera", client: "Hera", title: "AI-powered fertility-clinic patient app", kind: "health" },
  },
  "hera": {
    slug: "hera",
    client: "Hera Health Tech", industry: "Healthcare / FemTech / FertilityTech", year: "2025",
    duration: "3 months MVP · ongoing", team: "1 full-stack engineer · 1 cloud architect · 1 AI engineer · 1 PM",
    region: "United Arab Emirates", kind: "health",
    title: "AI-powered patient-support app for fertility clinics",
    tagline: "FemTech meets verified clinical AI: an adaptive RAG-grounded persona that turns Hera's medical knowledge base into warm, personalised support across the patient's fertility journey.",
    summary: "Hera Health Tech is a UAE-based FemTech / FertilityTech startup building an AI patient-support companion for fertility clinics. We partnered with Hera's founders to design and ship the mobile app end-to-end — a React Native client, a Serverless-framework API on AWS Lambda, a LlamaIndex retrieval layer over Hera's verified clinical knowledge base, and a Strapi-powered dual CMS (Admin CMS for the medical content team, Clinic CMS for partner clinics). HIPAA and GDPR controls were designed in from week one. The product launched as an MVP in three months and is now an ongoing engagement.",
    challenge: {
      eyebrow: "The challenge",
      title: "Make AI feel like a clinically-trained assistant — without losing the empathy patients actually need.",
      body: "Fertility care is high-stakes, deeply personal, and surrounded by misinformation. Hera's founders set out to combine medically accurate feedback with a compassionate user experience. The product had to profile every patient's behaviour and preferences, ground every answer in Hera's verified medical knowledge, and stay safe under HIPAA and GDPR.",
      pains: [
        "AI profiling system that adapts to patient behaviour and preferences",
        "Medically accurate answers grounded in an ever-growing clinical knowledge base",
        "Balancing clinical reliability with a warm, supportive user experience",
        "HIPAA and GDPR compliance from day one of the MVP",
      ],
    },
    approach: {
      eyebrow: "Our approach",
      title: "RAG over verified clinical content, an AI persona over a structured patient profile, all on a serverless AWS stack.",
      body: "We shipped a React Native app with onboarding, profile management, suggested questions, and an AI chat that retrieves over Hera's verified content via LlamaIndex. A Serverless framework API on AWS keeps inference and content delivery latency low; Strapi powers an Admin CMS for the medical team and a Clinic CMS for partner sites. Every layer was designed for HIPAA + GDPR compliance from week one — and shipped as a working MVP in three months.",
      pillars: [
        { title: "Adaptive AI patient-profiling system", desc: "Patient behaviour, preferences, and clinical inputs feed a structured profile that an adaptive AI persona uses to personalise every reply across the fertility journey." },
        { title: "Clinically-grounded RAG", desc: "A LlamaIndex retrieval layer over Hera's verified clinical knowledge base — answers are cited from medically-reviewed content, not hallucinated guesses, with refusal patterns when context is missing." },
        { title: "Dual-tenant CMS (Admin + Clinic)", desc: "Strapi-powered: an Admin CMS for the medical content team, a Clinic CMS for partner clinics. One codebase, role-scoped surfaces, audit-friendly content workflows." },
        { title: "HIPAA + GDPR from week one", desc: "Encryption in transit and at rest, audit logs, data-residency controls, and explicit consent flows — designed into the architecture, not bolted on after launch." },
      ],
    },
    results: [
      { v: "3 months", l: "to MVP launch", sub: "discovery, design, build, and store readiness" },
      { v: "RAG-grounded", l: "clinical AI chat", sub: "answers cite Hera's verified medical knowledge" },
      { v: "HIPAA + GDPR", l: "compliance-ready", sub: "encryption, audit logs, consent flows from day one" },
      { v: "Ongoing", l: "engagement", sub: "continued feature work and clinic onboarding" },
    ],
    testimonial: {
      quote: "7Code's work resulted in a functional MVP, and the client's internal testing yielded positive results. The team followed a structured sprint process, held regular stand-ups, and communicated consistently during the project. 7Code was responsive, proactive, flexible, transparent, and collaborative.",
      name: "Evyn White",
      role: "Co-Founder, Hera Health Tech",
    },
    metaDescription: "AI-powered patient-support app for fertility clinics, built by 7Code for Hera Health Tech (UAE). FemTech / FertilityTech MVP on React Native + Serverless on AWS Lambda, LlamaIndex RAG over verified clinical content, HIPAA + GDPR compliant. Shipped in 3 months.",
    next: { slug: "melsonic", client: "Melsonic", title: "AI-powered guitar-learning web app", kind: "cyan" },
  },
  "melsonic": {
    slug: "melsonic",
    client: "Melsonic", industry: "Music / EdTech / AI", year: "2025",
    duration: "5 months MVP · ongoing", team: "1 front-end engineer · 1 cloud architect · 1 QA · 1 PM",
    region: "United Kingdom", kind: "cyan",
    title: "AI-powered guitar-learning web app with real-time performance feedback",
    tagline: "Music EdTech meets real-time audio AI: play your guitar, the Web Audio pipeline scores you against the original, and the canvas renders every note correct, missed, or wrong — Melsonic turns practice into a measurable, gamified loop.",
    summary: "Melsonic is a UK-based music-EdTech startup helping beginner and intermediate guitarists improve through real-time AI performance analysis. We integrated Melsonic's existing AI engine into a fully-built Next.js web platform — Web Audio API capture, pixi.js note rendering on a tightly-synced canvas, AI scoring against the original track (notes correct, missed, played wrong), and a gamification loop that keeps players coming back. Stack: Next.js + pixi.js on the front, Nest.js + PostgreSQL on AWS at the back.",
    challenge: {
      eyebrow: "The challenge",
      title: "Sync real-time audio with note rendering — and turn raw performance data into feedback a player actually trusts.",
      body: "Melsonic had a working AI engine. They needed a product around it: a web platform that captures a player's recording, syncs note rendering on a canvas to the live audio, runs the AI comparison against the original track, and renders feedback (notes correct, missed, played wrong) in a way a learner can act on.",
      pains: [
        "Syncing real-time audio capture with note rendering on a pixi.js canvas",
        "Smooth user experience during recording — latency-sensitive across browsers and devices",
        "Transforming raw audio analysis into structured, motivating feedback",
        "Hitting a five-month MVP target with a full product surface (auth, learning, recording, feedback, profile, gamification)",
      ],
    },
    approach: {
      eyebrow: "Our approach",
      title: "Next.js front, Nest.js API, pixi.js canvas — wrapped around Melsonic's AI engine.",
      body: "We built the full web platform on Next.js, with a pixi.js canvas for note rendering tightly synchronised to the audio capture pipeline. A Nest.js API on Postgres + AWS sits in front of Melsonic's AI engine and feeds the scoring loop. Seven core modules shipped — sign-up & login, landing, learning, feedback, recording, profile, and gamification — into a five-month MVP that's now an ongoing engagement.",
      pillars: [
        { title: "Web Audio capture + canvas sync", desc: "Web Audio API for live recording, pixi.js note rendering tied frame-accurately to the audio pipeline so every visual cue matches what the player just heard." },
        { title: "AI scoring loop", desc: "The recording is compared against the original track via Melsonic's AI engine — notes correct, missed, played wrong — surfaced as actionable feedback inside the practice screen." },
        { title: "Seven-module web platform", desc: "Sign-up, landing, learning, recording, feedback, profile, gamification — all shipped on Next.js + pixi.js + Nest.js + PostgreSQL on AWS." },
        { title: "Gamified practice engagement", desc: "A points-and-progression layer that turns repeated practice into a measurable streak, with welcoming logic for new players and rewards tuned for continued use." },
      ],
    },
    results: [
      { v: "5 months", l: "to MVP launch", sub: "platform built around Melsonic's AI engine" },
      { v: "7 modules", l: "shipped", sub: "auth, learning, recording, feedback, profile, gamification, landing" },
      { v: "Real-time", l: "audio + canvas sync", sub: "Web Audio API + pixi.js, frame-accurate" },
      { v: "Ongoing", l: "engagement", sub: "continued feature work and platform iteration" },
    ],
    testimonial: { quote: "", name: "", role: "" },
    metaDescription: "AI-powered guitar-learning web app for Melsonic (UK) by 7Code. Real-time Web Audio API capture, pixi.js canvas rendering, and AI scoring against the original — built on Next.js + Nest.js + PostgreSQL + AWS. Music EdTech MVP shipped in 5 months.",
    next: { slug: "drum-bun", client: "Drum Bun", title: "Mobile car-services app for the Romanian driver", kind: "ops" },
  },
  "drum-bun": {
    slug: "drum-bun",
    client: "Explorom (drumbun.ro)", industry: "InsurTech / Automotive / Mobile", year: "2024",
    duration: "Ongoing", team: "2 front-end engineers · 2 back-end engineers · 1 QA",
    region: "Romania", kind: "ops",
    title: "Mobile car-services app for the Romanian driver — RCA, ITP, vignette, all in one tap",
    tagline: "InsurTech meets automotive compliance: verify, purchase, and track every Romanian car obligation — RCA insurance, ITP inspection, road vignette — from one React Native app with an OCR document pipeline.",
    summary: "Drum Bun, by Romanian InsurTech startup Explorom, is the single mobile app Romanian drivers use to keep their car compliant: verifying RCA insurance, ITP technical inspection, and road vignette by license-plate number, then purchasing or renewing them in-app. 7Code built the React Native iOS + Android client and the Node.js backend on Heroku, plus the OCR document pipeline that lifts car details from a photo so drivers stop typing license plates and policy numbers by hand.",
    challenge: {
      eyebrow: "The challenge",
      title: "Take three fragmented Romanian car-service flows and hide the bureaucracy behind one tap.",
      body: "Romanian drivers juggle three separate compliance services — RCA insurance, ITP inspection, and the road vignette — each with its own provider, expiry date, and renewal flow. Drum Bun's pitch is one app for all of it: instant verification on a plate, alerts before anything expires, OCR-assisted onboarding, and in-app purchase. Building it meant pulling together a robust foundation, an OCR pipeline, and a payment layer that drivers actually trust.",
      pains: [
        "Three independent compliance services unified behind a single product surface",
        "OCR pipeline robust enough to read messy real-world car documents",
        "Auto-complete and pre-fill so drivers don't manually type plates and details",
        "Custom expiry-alert engine for RCA, ITP, and vignette per car",
      ],
    },
    approach: {
      eyebrow: "Our approach",
      title: "React Native + Node.js, walkthrough-first onboarding, OCR-driven document capture.",
      body: "We built Drum Bun on React Native with a Node.js backend on Heroku. The app opens with verification (RCA, ITP, vignette by plate, no signup required), funnels users into a Sign Up only when they need to do more, and leans on OCR to lift documents from photos — so adding a car takes seconds, not minutes. Modules cover walkthrough, car management, alerts, OCR, profile, services, and payment methods, with purchase history stored alongside each car.",
      pillars: [
        { title: "Verification before signup", desc: "Open the app, type a plate, see whether RCA / ITP / vignette is valid. Sign-up is only required when the user wants to take action — buy, store documents, or set alerts." },
        { title: "OCR document pipeline", desc: "Photograph any Romanian car document — RCA policy, ITP card, talon — and the OCR module extracts and pre-fills the structured data into the car's profile. No more typing plates and policy numbers by hand." },
        { title: "Per-car expiry alerts", desc: "Custom notification rules for each service on each car, so RCA, ITP, and vignette renewals never sneak up on the driver. Alerts are tunable per-document and per-car." },
        { title: "In-app service purchase", desc: "Buy or renew RCA, ITP, and road vignette directly inside the app, with payment methods saved per profile and purchase history tied to the right car." },
      ],
    },
    results: [
      { v: "3-in-1", l: "compliance app", sub: "RCA, ITP, vignette unified for Romanian drivers" },
      { v: "OCR-assisted", l: "onboarding", sub: "auto-fill from a single document photo" },
      { v: "App Store + Play Store", l: "live", sub: "released to both stores, ongoing engagement" },
      { v: "8 modules", l: "shipped", sub: "walkthrough, cars, alerts, OCR, profile, services, payments, history" },
    ],
    testimonial: { quote: "", name: "", role: "" },
    metaDescription: "Romanian InsurTech mobile app (Drum Bun) for Explorom, built by 7Code on React Native + Node.js + Heroku with an OCR document pipeline. Verify and purchase RCA, ITP, and road vignette in one tap — live on App Store and Play Store.",
    next: { slug: "numerize", client: "Numerize", title: "Electronic document management platform with OCR + e-signature", kind: "ops" },
  },
  "numerize": {
    slug: "numerize",
    client: "Numerize", industry: "DocTech / Enterprise SaaS / OCR", year: "2024",
    duration: "Ongoing", team: "1 front-end engineer · 1 back-end engineer · 1 QA",
    region: "France", kind: "ops",
    title: "Responsive electronic document management platform with OCR and digital signatures",
    tagline: "Document management software (GED / EDM) for 6,000+ French enterprises, hospitals, and public administrations — re-engineered for responsive web with OCR, YouSign e-signatures, and Stripe + 3D Secure billing baked in.",
    summary: "Numerize is a French DocTech / Enterprise SaaS company that has been digitising and archiving documents for 17+ years, serving 6,000+ enterprises, public administrations, hospitals, and SMEs. 7Code took on the responsive overhaul of their GED (gestion électronique des documents) — also known as EDM, electronic document management — keeping the OCR-trained invoice pipeline, electronic archiving, and multi-signatory workflows intact while rebuilding the customer-facing surface on React + Material-UI and modernising the billing layer with Stripe + 3D Secure (with a bank-transfer fallback) and a tiered subscription engine.",
    challenge: {
      eyebrow: "The challenge",
      title: "A 17-year-old document-management platform whose customers expect both rigour and a modern responsive UX.",
      body: "Numerize's clients trust them with sensitive documents — invoices, contracts, hospital records — and expect indexation, archiving, and customer-signed workflows that hold up in a French legal and procurement context. The brief was to take a mature platform and rebuild the customer-facing surface to be responsive, billable, and signable end-to-end without breaking the OCR and archiving pipelines underneath.",
      pains: [
        "Responsive web overhaul of a long-established GED tool — without breaking existing customers",
        "Digital signatures with multiple signatories, customer-side labelling, and email delivery of signed invoices",
        "Stripe + 3D Secure integration with bank-transfer fallback for enterprise billing",
        "Customisable subscription tiers across user count, storage, and file type — annual or monthly",
      ],
    },
    approach: {
      eyebrow: "Our approach",
      title: "React + Material-UI on the front, Laravel + PHP on the back, AWS underneath — all bolted onto Numerize's existing OCR and archiving core.",
      body: "We rebuilt the responsive customer surface on React + Material-UI, with a Laravel + PHP API on AWS. The OCR pipeline trains on invoices, extracts structured data, and routes documents into the right archival sector. Digital signatures via YouSign cover multi-signatory flows; Stripe with 3D Secure (and bank-transfer fallback) handles billing across individual, company, and trial accounts. Subscriptions can be created, upgraded, or downgraded — monthly or annual — without touching the archive layer.",
      pillars: [
        { title: "Responsive GED / EDM surface", desc: "React + Material-UI rebuild of the customer-facing electronic document manager — phone, tablet, and desktop parity for the same archival and indexing workflows." },
        { title: "OCR-trained invoice pipeline", desc: "Train on incoming invoices, extract structured data, categorise by sector, route into archival storage — the OCR core was preserved untouched while the UI was rebuilt around it." },
        { title: "YouSign e-signature with email delivery", desc: "YouSign-backed digital signatures with multi-signatory flows, customer-side labelling of signature fields, and email delivery of signed invoices to all parties." },
        { title: "Tiered Stripe + 3D Secure billing", desc: "Individual, company, and trial accounts with monthly or annual subscriptions, upgrade/downgrade flows, Stripe 3D Secure, and a bank-transfer fallback for enterprise procurement." },
      ],
    },
    results: [
      { v: "6,000+", l: "customer accounts", sub: "enterprises, hospitals, public administrations, SMEs" },
      { v: "17+ yrs", l: "in market", sub: "Numerize platform, responsive overhaul shipped by 7Code" },
      { v: "Stripe + 3DS", l: "billing live", sub: "monthly + annual tiers, bank-transfer fallback" },
      { v: "YouSign", l: "e-signature integrated", sub: "multi-signatory, email delivery of signed invoices" },
    ],
    testimonial: { quote: "", name: "", role: "" },
    metaDescription: "Responsive electronic document management (GED / EDM) and e-signature platform for Numerize (France), built by 7Code on React + Material-UI + Laravel + AWS. OCR-trained invoice pipeline, YouSign multi-signatory e-signatures, Stripe + 3D Secure billing across 6,000+ enterprise accounts.",
    next: { slug: "wholesum", client: "WholeSum", title: "Self-serve AI analytics platform for unstructured text", kind: "cyan" },
  },
};

// Active case — reassigned synchronously in CaseStudyPage before render
let CSD = CASES["wholesum"];


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
  if (CSD.slug === "daily8") return <PhotoHero
    src="project/uploads/daily8-website.jpg"
    urlBar="daily8.com/en"
    alt="Daily8 website (daily8.com/en) — Get Started Now: Download the App"
  />;
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
  if (CSD.slug === "founders-factory") return <PhotoHero
    src="project/uploads/founders-factory-hero.jpg"
    urlBar="foundersfactory.com"
    alt="Founders Factory homepage hero — Power to founders"
  />;
  if (CSD.slug === "hera") return <PhotoHero
    src="project/uploads/hera-hero.jpg"
    urlBar="herahealthtech.com"
    alt="Hera Health Tech — Introducing Hera, AI-powered fertility-clinic patient app"
  />;
  if (CSD.slug === "melsonic") return <PhotoHero
    src="project/uploads/melsonic-hero.jpg"
    urlBar="app.melsonic.com"
    alt="Melsonic — Learn your favourite song today, AI-powered guitar learning"
  />;
  if (CSD.slug === "drum-bun") return <PhotoHero
    src="project/uploads/drum-bun-hero.jpg"
    urlBar="drumbun.ro"
    alt="Drum Bun — Aplicația șoferilor responsabili (Romanian car-services app)"
  />;
  if (CSD.slug === "numerize") return <PhotoHero
    src="project/uploads/numerize-hero.jpg"
    urlBar="numerize.com"
    alt="Numerize — Société de numérisation de documents et d'archivage"
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
            <span className="csd-kicker"><span className="csd-dot"/> Case study</span>
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
              <span className="csd-kicker csd-kicker--inverse"><span className="csd-dot csd-dot--cyan"/> {CSD.industry}</span>
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
          <span className="csd-kicker"><span className="csd-dot"/> Case study</span>
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
function CaseStudyPage({ slug = "wholesum", variant = "longread" }) {
  // Reassign module-level CSD synchronously before render
  CSD = CASES[slug] || CASES["wholesum"];

  React.useEffect(() => {
    const c = CASES[slug] || CASES["wholesum"];
    const prevTitle = document.title;
    const descEl = document.querySelector('meta[name="description"]');
    const prevDesc = descEl ? descEl.getAttribute("content") : null;
    document.title = "7Code — " + c.client + ": " + c.title;
    if (descEl && c.metaDescription) descEl.setAttribute("content", c.metaDescription);

    const url = "https://7code-design.vercel.app/#/case-study/" + c.slug;
    const ld = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "headline": c.title,
          "description": c.metaDescription || c.tagline,
          "articleSection": "Case Study",
          "about": { "@type": "Organization", "name": c.client },
          "author": { "@type": "ProfessionalService", "name": "7Code", "url": "https://7code-design.vercel.app/" },
          "publisher": { "@type": "ProfessionalService", "name": "7Code" },
          "datePublished": String(c.year),
          "url": url,
          "keywords": (c.industry || "") + ", " + (c.region || ""),
        },
        ...(c.testimonial && c.testimonial.quote ? [{
          "@type": "Review",
          "reviewBody": c.testimonial.quote,
          "author": { "@type": "Person", "name": c.testimonial.name, "jobTitle": c.testimonial.role },
          "itemReviewed": { "@type": "ProfessionalService", "name": "7Code" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        }] : []),
      ],
    };
    const scriptEl = document.createElement("script");
    scriptEl.type = "application/ld+json";
    scriptEl.id = "csd-ld";
    scriptEl.text = JSON.stringify(ld);
    document.head.appendChild(scriptEl);

    return () => {
      document.title = prevTitle;
      if (descEl && prevDesc !== null) descEl.setAttribute("content", prevDesc);
      scriptEl.remove();
    };
  }, [slug]);

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
