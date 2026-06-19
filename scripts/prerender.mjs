// Pre-renders per-route static HTML files so Google + social bots see correct
// title/meta/JSON-LD on first byte (without waiting for JS to mutate the head).
//
// Output: <route>.html files at the path that matches each route, e.g.
//   /service/ai-product-engineering.html  → served at /service/ai-product-engineering
//   /case-study/wholesum.html             → served at /case-study/wholesum
//
// vercel.json sets `cleanUrls: true`, so ".html" is stripped on serve. Vercel's
// static handler matches these files BEFORE the catchall rewrite to index.html.
//
// Pre-rendered HTML omits the path→hash bootstrap so the URL stays clean
// (`/service/X` instead of `/#/service/X`). React's useHashRoute already falls
// back to pathname, so the page renders correctly.
//
// Run from repo root:  node scripts/prerender.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SERVICE_FAQS, EXPERTISE_FAQS, faqPageEntity } from "./faq-data.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SITE = "https://www.7code.tech";
const DEFAULT_OG = SITE + "/project/uploads/hera-hero.jpg";

// ──────────────────────────────────────────────────────────────────────────
// Page metadata (extracted from JSX data sources)
// ──────────────────────────────────────────────────────────────────────────

const MAIN_PAGES = [
  {
    path: "/about",
    title: "About 7Code — AI-First Software Engineering Partner",
    description: "7Code is an AI-first software engineering partner based in Cluj-Napoca, Romania. We design, build, and operate AI-native products end-to-end since 2019.",
  },
  {
    path: "/process",
    title: "Our Process — How We Build AI-Native Products | 7Code",
    description: "How 7Code engagements run, four-week discovery, two-week sprints with AI eval checkpoints, production hardening, and a clean handover with prompt management and observability.",
  },
  {
    path: "/contact",
    title: "Contact 7Code — Start an AI Engineering Project",
    description: "Get in touch with 7Code, AI-native software engineering agency in Cluj-Napoca, Romania. Tell us about your project — we'll respond within one business day.",
  },
  {
    path: "/case-studies",
    title: "Case Studies — AI-Native Products We've Shipped | 7Code",
    description: "Selected work from 7Code: AI products, integrations, and platforms shipped for clients in healthcare, finance, government, energy, media, and SaaS.",
  },
  {
    path: "/expertise",
    title: "Industry Expertise — Healthcare, Finance, Energy, Defence | 7Code",
    description: "7Code's industry expertise across healthcare (HIPAA + HL7/FHIR), finance (ERP + treasury), energy (IoT + SCADA), defence and security, HR, and operations.",
  },
  {
    path: "/blog",
    title: "Blog — AI Engineering, Product, and Practice | 7Code",
    description: "Field notes from 7code's AI engineering practice: LLM features, agentic workflows, AI MVPs, and production AI — written by the team building them in Cluj-Napoca.",
  },
  {
    path: "/ai-mvp-development",
    title: "AI MVP Development — Ship in 6 Weeks | 7code",
    description: "AI MVP development by 7Code. LLM-powered products designed, built, and shipped in six weeks. Evaluation harness, cloud infrastructure, and production launch included.",
  },
  {
    path: "/ai-development-agency-uk",
    title: "AI Development Agency for UK Companies | 7code Romania",
    description: "AI development agency serving UK companies from Cluj-Napoca, Romania. Same timezone overlap, senior engineers, LLM products, and nearshore rates. From £25k.",
  },
  {
    path: "/compare/agency-vs-freelancer",
    title: "AI Agency vs AI Freelancer: Which Is Right for You? | 7code",
    description: "Choosing between an AI agency and a freelancer for your LLM project? Compare delivery speed, accountability, quality, and total cost — then decide.",
  },
  {
    path: "/services",
    title: "Services — AI Engineering, Integrations & Automation | 7Code",
    description: "7Code's service lines: AI-native product engineering, system integrations, AI & process automation, cloud and agentic infrastructure, AI engineering outstaffing, product strategy, and LLM & agent development.",
  },
];

const SERVICES = [
  {"slug":"ai-product-engineering","title":"AI-Native Product Engineering","description":"AI-native product engineering by 7Code. We design and ship LLM-powered web and mobile products end-to-end, agents, RAG, evals, and the cloud infrastructure to run them in production.","ogImage":"/project/uploads/daily8-hero.png"},
  {"slug":"system-integrations","title":"System Integrations","description":"System integrations by 7Code. We connect ERPs, CRMs, SaaS tools, data warehouses, and legacy systems into a single reliable data fabric, built to carry AI workloads on top.","ogImage":"/project/uploads/numerize-hero.jpg"},
  {"slug":"ai-automation","title":"AI & Process Automation","description":"AI & process automation by 7Code. RAG copilots, agentic workflows, and LLM integrations grounded in your data, evaluated rigorously, and shipped to production in six weeks.","ogImage":"/project/uploads/wholesum-hero.png"},
  {"slug":"cloud-agentic-infra","title":"Cloud & Agentic Infrastructure","description":"Cloud and agentic infrastructure by 7Code. AWS, GCP, and Azure foundations for AI products, agent pipelines (LangGraph, Temporal), vector stores, eval CI, and cost optimisation.","ogImage":"/project/uploads/g42-fleet-hero.jpg"},
  {"slug":"ai-outstaffing","title":"AI Engineering Outstaffing","description":"AI engineering outstaffing by 7Code. Senior AI and ML engineers, production LLM, RAG, and MLOps experience, embedded in your team in 72 hours. Monthly rolling, no lock-in.","ogImage":"/project/uploads/hera-hero.jpg"},
  {"slug":"product-strategy","title":"Product Strategy & Design","description":"Product strategy and design by 7Code. Discovery to design system for AI-native products, UX for streaming, confidence, and fallback paths. Figma to code.","ogImage":"/project/uploads/melsonic-hero.jpg"},
  {"slug":"llm-agent-development","title":"LLM & Agent Development","description":"Custom LLM and agent development by 7Code. OpenAI and Anthropic integrations, LangGraph pipelines, RAG systems, and eval-gated releases for production AI.","ogImage":"/project/uploads/daily8-hero.png"},
];

const EXPERTISE = [
  {"slug":"healthcare","title":"Healthcare","description":"HealthTech engineering by 7Code. HIPAA + GDPR-compliant clinical platforms, EHR (HL7 / FHIR) interoperability, telehealth, patient engagement, and AI-grounded clinical support, built end-to-end for clinics, hospitals, and FemTech / FertilityTech founders.","ogImage":"/project/uploads/hera-hero.jpg"},
  {"slug":"finance","title":"Finance","description":"FinTech and finance software engineering by 7Code. Real-time treasury dashboards, ERP integration (SAP, Oracle, NetSuite), accounting automation, regulatory reporting, payments, and venture/MarTech platforms for VCs.","ogImage":"/project/uploads/numerize-hero.jpg"},
  {"slug":"energy","title":"Energy & Utilities","description":"Energy, utilities, and IoT software engineering by 7Code. SCADA / Modbus / MQTT ingestion, predictive maintenance, real-time operations cockpits, geofencing, and grid optimisation, built for 24/7 critical infrastructure.","ogImage":"/project/uploads/g42-fleet-hero.jpg"},
  {"slug":"defence","title":"Defence & Security","description":"Defence, security, and GovTech / E-Government engineering by 7Code. Mission-critical platforms with multi-domain fusion, information assurance, secure remote-voting (built for the European Parliament), and after-action review tooling.","ogImage":"/project/uploads/revote-hero.jpg"},
  {"slug":"hr","title":"HR","description":"HR Tech engineering by 7Code. ATS / HRIS integration (Workday, SAP SuccessFactors, BambooHR), recruitment and onboarding workflows, payroll automation, workforce analytics, and compliance reporting (EEO, GDPR, local labour law).","ogImage":"/project/uploads/wholesum-hero.png"},
  {"slug":"operations","title":"Operations","description":"Operations software engineering by 7Code. Workflow automation, real-time operations dashboards, OCR-driven document pipelines, systems integration, and process intelligence, for teams that have outgrown spreadsheets, Slack, and heroic individuals.","ogImage":"/project/uploads/drum-bun-hero.jpg"},
];

const CASES = [
  {"slug":"wholesum","title":"WholeSum: Self-serve AI analytics for unstructured text","description":"Self-serve AI analytics platform for unstructured text by 7Code. Built end-to-end on Next.js + Nest.js + AWS for WholeSum (UK), 16-week design and build, launched on time and raised funding.","ogImage":"/project/uploads/wholesum-hero.png"},
  {"slug":"daily8","title":"Daily8: AI-powered news aggregator for the MENA region","description":"AI-powered news aggregator for the MENA region by 7Code. Daily8 (UAE), live at daily8.com/en, with React Native mobile, web, AI moderation, daily wrap-up, and unbiased opinion on AWS Lambda + OpenAI. Shipped iOS + Android in 6 months.","ogImage":"/project/uploads/daily8-hero.png"},
  {"slug":"revote","title":"ReVote: Remote electronic voting for the European Parliament","description":"Remote electronic voting platform for the European Parliament, built by 7Code with Eurel International. Secure multi-device voting on the EP network, five modules, eight months, released May 2023.","ogImage":"/project/uploads/revote-hero.jpg"},
  {"slug":"g42-fleet","title":"G42 Fleet: Real-time fleet tracking for EXPO 2020 Dubai","description":"Real-time IoT fleet tracking for EXPO 2020 Dubai by 7Code, partnered with Group 42 (G42, UAE). Custom TCP ingestion, geofence rules, real-time map, and trip playback, 18 months build + 6 months maintenance.","ogImage":"/project/uploads/g42-fleet-hero.jpg"},
  {"slug":"cloud-of-legacy","title":"Cloud of Legacy: Digital-heritage with secure inheritance access","description":"Cloud-based digital-heritage platform for Cloud of Legacy (Germany), built by 7Code in 8 months on Next.js + React + Keycloak with 2FA. Subscription cloud where users designate two heirs.","ogImage":"/project/uploads/cloud-of-legacy-hero.jpg"},
  {"slug":"lidl-road-safety","title":"Lidl Road Safety: Children's gamification web app","description":"Children's road-safety gamification web app for Lidl Romania and the Romanian Police, built by 7Code on React + Nest.js + Heroku in 6 months. Public + private split, episodes, levels, and a points engine.","ogImage":"/project/uploads/lidl-road-safety-hero.jpg"},
  {"slug":"hera","title":"Hera: AI patient-support app for fertility clinics","description":"AI-powered patient-support app for fertility clinics, built by 7Code for Hera Health Tech (UAE). FemTech / FertilityTech MVP on React Native + Serverless on AWS Lambda, LlamaIndex RAG over verified clinical content, HIPAA + GDPR compliant. Shipped in 3 months.","ogImage":"/project/uploads/hera-hero.jpg"},
  {"slug":"melsonic","title":"Melsonic: AI-powered guitar-learning with real-time feedback","description":"AI-powered guitar-learning web app for Melsonic (UK) by 7Code. Real-time Web Audio API capture, pixi.js canvas rendering, and AI scoring against the original, built on Next.js + Nest.js + PostgreSQL + AWS. Music EdTech MVP shipped in 5 months.","ogImage":"/project/uploads/melsonic-hero.jpg"},
  {"slug":"drum-bun","title":"Drum Bun: Mobile car-services app for Romanian drivers","description":"Romanian InsurTech mobile app (Drum Bun) for Explorom, built by 7Code on React Native + Node.js + Heroku with an OCR document pipeline. Verify and purchase RCA, ITP, and road vignette in one tap, live on App Store and Play Store.","ogImage":"/project/uploads/drum-bun-hero.jpg"},
  {"slug":"numerize","title":"Numerize: EDM platform with OCR and digital signatures","description":"Responsive electronic document management (GED / EDM) and e-signature platform for Numerize (France), built by 7Code on React + Material-UI + Laravel + AWS. OCR-trained invoice pipeline, YouSign multi-signatories e-signatures, Stripe + 3D Secure billing across 6,000+ enterprise accounts.","ogImage":"/project/uploads/numerize-hero.jpg"},
];

const RESOURCES = [
  { slug: "ai-automation-for-smes", title: "AI Automation for SMEs: The Complete Guide (2026)", description: "A practical guide to AI automation for small and medium-sized businesses — use cases, ROI math, build vs buy, and how to get started.", datePublished: "2026-05-12" },
  { slug: "ai-native-product-engineering", title: "AI-Native Product Engineering: How to Build AI Products That Actually Work", description: "A complete guide to AI-native product engineering — architecture, methodology, team composition, and avoiding common failure modes.", datePublished: "2026-05-12" },
  { slug: "nearshore-software-romania", title: "Nearshore Software Development in Romania: The 2026 Guide", description: "Why Romania is Europe's leading nearshore software destination — talent, time zones, cost, and how to choose the right partner.", datePublished: "2026-05-12" },
  { slug: "staff-augmentation-vs-dedicated-team", title: "Staff Augmentation vs Dedicated Team: Which Is Right for You?", description: "A clear comparison of staff augmentation and dedicated team models — decision table, cost structure, control, and 7code's recommendation.", datePublished: "2026-05-12" },
  { slug: "nearshore-romania-vs-offshore-asia", title: "Nearshore Romania vs Offshore Asia: A Practical Guide for European Businesses", description: "A data-driven comparison of nearshore Romania and offshore India for European tech buyers — time zones, cost, quality, GDPR, and total cost of ownership.", datePublished: "2026-05-12" },
  { slug: "build-ai-in-house-vs-partner", title: "Build AI In-House vs With a Partner: The 2026 Decision Framework", description: "A practical framework for deciding whether to build your AI capability in-house or partner with an AI agency — 5 questions, cost comparison, and when each model wins.", datePublished: "2026-05-12" },
];

// Blog posts that appear in sitemap.xml
const BLOG_POSTS = [
  {"slug":"ai-discovery-mission-de-risk-ai-products","title":"The AI Discovery Mission: how we de-risk AI products in four weeks","description":"A four-week structured discovery is how we turn a vague AI ambition into a build-ready plan, vision, evals, architecture, and a defensible budget.","datePublished":"2026-04-28"},
  {"slug":"ship-ai-mvp-six-weeks","title":"Why we ship AI MVPs in six weeks, not six months","description":"Validated learning beats elaborate roadmaps. The cadence we use to put an AI product in front of real users, and real evals, in six weeks.","datePublished":"2026-04-16"},
  {"slug":"ai-engineering-pricing-fixed-vs-time-materials","title":"Fixed price vs. T&M for AI engineering: how to budget for LLM work","description":"AI projects break the assumptions behind fixed-price contracts. Here's a pricing framework that aligns incentives between AI vendors and clients.","datePublished":"2026-04-02"},
  {"slug":"ai-agents-manufacturing-operations","title":"AI agents in manufacturing: from pilot to production","description":"Production-grade AI agents are quietly absorbing the manual coordination tax in factories. Here's the architecture that's actually working.","datePublished":"2026-03-18"},
  {"slug":"ai-native-automation-crm-erp-iot","title":"AI-native automation across CRM, ERP, and IoT","description":"What changes when LLMs and agents sit at the centre of your business systems, not bolted on, but architecturally native.","datePublished":"2026-03-04"},
  {"slug":"adrenaline-ai-debugger-case-study","title":"Adrenaline: building an AI debugger on top of OpenAI","description":"How we partnered with the Adrenaline team to ship an LLM-powered debugger from MVP to AWS-scale production, in months, not years.","datePublished":"2026-02-20"},
  {"slug":"senior-engineers-ai-leverage","title":"Why senior engineers with AI beat juniors with copilots","description":"AI copilots compress the productivity gap, but they amplify the architectural one. Why we lean on senior-led pods for AI work.","datePublished":"2026-02-06"},
  {"slug":"ai-project-handover","title":"The art of an AI project handover","description":"Handing over an AI product isn't just code and docs. It's evals, prompt versioning, and the operational runbooks that keep models trustworthy.","datePublished":"2026-01-22"},
  {"slug":"running-ai-engineering-pods-across-continents","title":"Running AI engineering pods across continents","description":"How we operate distributed AI teams without losing the tight feedback loops that LLM work demands.","datePublished":"2026-01-08"},
  {"slug":"switch-ai-engineering-partner","title":"When to switch your AI engineering partner","description":"Five honest signals that your current vendor is holding back your AI roadmap, and how to make a clean transition.","datePublished":"2025-12-18"},
  {"slug":"ai-engineering-outstaffing","title":"AI engineering outstaffing, done properly","description":"Cost is not the headline. Velocity, ownership, and AI fluency are. How we set up nearshore AI pods that actually ship.","datePublished":"2025-12-04"},
  {"slug":"lessons-from-london-tech-week-ai","title":"Lessons from London Tech Week, through an AI-first lens","description":"What we heard about agentic workflows, evaluation, and AI go-to-market, and what we're betting on next.","datePublished":"2025-11-20"},
  {"slug":"logistics-tech-tailored-solutions","title":"AI-native logistics software: turning the coordination tax into competitive advantage","description":"Generic logistics platforms cover 60% of the workflow and force teams to absorb the rest in spreadsheets. AI-native, integrated systems absorb the coordination tax and turn real-time data into faster, better operational decisions.","datePublished":"2023-12-10"},
  {"slug":"changing-software-service-provider","title":"How to change your software service provider, with an AI-first lens","description":"Sunk cost keeps clients with the wrong vendor for months too long. With AI projects the cost of waiting is higher, model choices age out, eval debt compounds. A practical playbook for assessing, securing assets, and switching cleanly.","datePublished":"2023-11-27"},
  {"slug":"aws-beanstalk-to-ecs-migration","title":"Migrating from AWS Beanstalk to ECS on Fargate, the AI-engineering recipe","description":"AI services need a deploy story Beanstalk cannot give them. A practical recipe for moving a containerised AI workload to ECS on Fargate, with VPC, load balancer, and a GitHub Actions deploy pipeline.","datePublished":"2023-10-25"},
  {"slug":"aws-ecs-vs-beanstalk-perspective","title":"Why I moved AI workloads from AWS Beanstalk to ECS + Fargate, a personal perspective","description":"After six months on Elastic Beanstalk, the developer experience pushed me to ECS + Fargate. For containerised AI services with token budgets and eval gates, the case is even stronger.","datePublished":"2023-10-25"},
  {"slug":"adrenaline-ai-code-debugger","title":"Adrenaline: revolutionising code debugging with AI","description":"How GetAdrenaline partnered with 7Code to build an AI-powered debugger that diagnoses and fixes code issues in seconds, from MVP to production on AWS.","datePublished":"2024-11-21"},
  {"slug":"why-mvp-first","title":"Why MVP first? The advantages of a minimum viable product approach","description":"Starting lean, learning fast, and building what users actually need, the MVP approach is the most efficient path from idea to product-market fit.","datePublished":"2023-12-11"},
  {"slug":"seamless-software-project-handover","title":"The art of seamless software project handover: a client-centric approach","description":"A successful handover is not an event, it is a process. How 7Code ensures clients have full control, full understanding, and full confidence when we hand over the keys.","datePublished":"2023-12-12"},
  {"slug":"cms-wordpress-vs-custom-development","title":"CMS (WordPress) vs. custom development: making the right choice for your business","description":"WordPress can launch a web presence in days. Custom development can build a competitive moat that lasts years. Here's how to decide which one your business actually needs.","datePublished":"2023-10-11"},
  {"slug":"osai-revolutionising-ai-interactions","title":"Osai: revolutionising AI interactions with 7Code's cutting-edge expertise","description":"How we built Osai, a prompt-sharing platform that unlocks collective intelligence across teams working with GPT-4, Midjourney, and DALL-E.","datePublished":"2023-10-11"},
  {"slug":"low-code-no-code-vs-custom-development","title":"Low code / no code vs. custom development: making the right choice for your product","description":"Low-code platforms are powerful for standard needs. Custom code is the only answer when your product demands performance, flexibility, and long-term viability.","datePublished":"2023-10-10"},
  {"slug":"reducing-costs-nearshoring-outstaffing","title":"Reducing development team costs through nearshoring and outstaffing","description":"10–30% cost savings are possible, but that is not the headline. Velocity, continuity, and access to senior talent are.","datePublished":"2023-10-11"},
  {"slug":"migrating-users-auth0-python","title":"Migrating users between Auth0 tenants in Python: handling large payloads","description":"A practical guide to the pitfalls, edge cases, and Python patterns for moving users from one Auth0 tenant to another, without data loss or downtime.","datePublished":"2023-10-25"},
  {"slug":"fixed-price-vs-time-and-materials","title":"Fixed price vs. time and materials: a comparative analysis for software development","description":"The right pricing model depends on the nature of your project, your budget flexibility, and the level of scope certainty you actually have.","datePublished":"2023-09-13"},
  {"slug":"7code-discovery-mission","title":"7Code's Discovery Mission: pioneering successful software development","description":"A four-week Discovery Mission is the cornerstone of every successful build, producing the product vision, backlog, wireframes, architecture, and delivery plan that make development predictable.","datePublished":"2023-09-04"},
  {"slug":"how-to-hire-nearshore-ai-engineers","title":"How to Hire Nearshore AI Engineers: A Practical Guide for CTOs","description":"Hiring nearshore AI engineers is faster and cheaper than most CTOs expect — if you evaluate the right signals and avoid the three most common mistakes.","datePublished":"2026-06-09"},
  {"slug":"top-nearshore-ai-development-agencies-europe","title":"Top 5 Nearshore AI Development Agencies in Europe (2026)","description":"A structured comparison of the leading nearshore AI engineering agencies serving UK and EU clients in 2026, based on delivery track record, team seniority, and AI specialism.","datePublished":"2026-07-14"},
];

// ──────────────────────────────────────────────────────────────────────────
// Schema.org JSON-LD generators
// ──────────────────────────────────────────────────────────────────────────

const ORG_REF = { "@id": SITE + "/#organization" };

// items: [{name, url?}] — url is optional on the last item but included for completeness
function breadcrumbEntity(pageUrl, items) {
  return {
    "@type": "BreadcrumbList",
    "@id": pageUrl + "#breadcrumb",
    "itemListElement": items.map((item, i) => {
      const li = { "@type": "ListItem", "position": i + 1, "name": item.name };
      if (item.url) li.item = item.url;
      return li;
    }),
  };
}

function serviceSchema(s) {
  const url = SITE + "/service/" + s.slug;
  const faqs = SERVICE_FAQS[s.slug];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": url + "#service",
        "name": s.title,
        "serviceType": s.title,
        "description": s.description,
        "provider": ORG_REF,
        "areaServed": "Worldwide",
        "url": url,
      },
      breadcrumbEntity(url, [
        { name: "Home", url: SITE + "/" },
        { name: "Services", url: SITE + "/services" },
        { name: s.title, url: url },
      ]),
      ...(faqs ? [faqPageEntity(url, faqs)] : []),
    ],
  };
}

function expertiseSchema(e) {
  const url = SITE + "/expertise/" + e.slug;
  const faqs = EXPERTISE_FAQS[e.slug];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": url + "#service",
        "name": "7Code — " + e.title,
        "serviceType": e.title,
        "description": e.description,
        "provider": ORG_REF,
        "areaServed": "Worldwide",
        "url": url,
      },
      breadcrumbEntity(url, [
        { name: "Home", url: SITE + "/" },
        { name: "Expertise", url: SITE + "/expertise" },
        { name: e.title, url: url },
      ]),
      ...(faqs ? [faqPageEntity(url, faqs)] : []),
    ],
  };
}

function caseStudySchema(c) {
  const url = SITE + "/case-study/" + c.slug;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": url + "#case",
        "name": c.title,
        "headline": c.title,
        "description": c.description,
        "creator": ORG_REF,
        "url": url,
      },
      breadcrumbEntity(url, [
        { name: "Home", url: SITE + "/" },
        { name: "Case Studies", url: SITE + "/case-studies" },
        { name: c.title, url: url },
      ]),
    ],
  };
}

function blogPostSchema(p) {
  const url = SITE + "/blog/" + p.slug;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": url + "#article",
        "headline": p.title,
        "description": p.description,
        "image": p.ogImage ? SITE + p.ogImage : DEFAULT_OG,
        "url": url,
        "mainEntityOfPage": url,
        "author": { "@type": "Organization", "name": "7code", "url": SITE + "/" },
        "publisher": ORG_REF,
        ...(p.datePublished ? { "datePublished": p.datePublished, "dateModified": p.datePublished } : {}),
      },
      breadcrumbEntity(url, [
        { name: "Home", url: SITE + "/" },
        { name: "Blog", url: SITE + "/blog" },
        { name: p.title, url: url },
      ]),
    ],
  };
}

function resourceSchema(r) {
  const url = SITE + "/resources/" + r.slug;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": url + "#article",
        "headline": r.title,
        "description": r.description,
        "image": DEFAULT_OG,
        "url": url,
        "mainEntityOfPage": url,
        "author": { "@type": "Organization", "name": "7code", "url": SITE + "/" },
        "publisher": ORG_REF,
        "datePublished": r.datePublished,
        "dateModified": r.datePublished,
      },
    ],
  };
}

// breadcrumbItems: [{name, url?}] — pass null to omit breadcrumb (home page only)
function listingSchema(p, pageType, items, breadcrumbItems) {
  const url = SITE + p.path;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": pageType,
        "@id": url + "#page",
        "name": p.title,
        "description": p.description,
        "url": url,
        "isPartOf": { "@id": SITE + "/#website" },
        ...(items ? { "hasPart": items.map(i => ({ "@id": i })) } : {}),
      },
      ...(breadcrumbItems ? [breadcrumbEntity(url, breadcrumbItems)] : []),
    ],
  };
}

function genericPageSchema(p, pageType, breadcrumbItems) {
  const url = SITE + p.path;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": pageType,
        "@id": url + "#page",
        "name": p.title,
        "description": p.description,
        "url": url,
        "isPartOf": { "@id": SITE + "/#website" },
      },
      ...(breadcrumbItems ? [breadcrumbEntity(url, breadcrumbItems)] : []),
    ],
  };
}

// ──────────────────────────────────────────────────────────────────────────
// Template + per-page rewrite
// ──────────────────────────────────────────────────────────────────────────

const TEMPLATE = fs.readFileSync(path.join(ROOT, "index.html"), "utf-8");

// Strip the path→hash bootstrap from a template — pre-rendered files don't
// need it (we want the URL to stay clean as /service/X, not /#/service/X).
// The bootstrap is the IIFE that calls window.history.replaceState to
// convert a pathname into a hash. Match it by the unique replaceState call.
function stripBootstrap(html) {
  return html.replace(
    /<script>\s*\(function\s*\(\s*\)\s*\{[\s\S]*?replaceState[\s\S]*?<\/script>/,
    "",
  );
}

// Clear the pre-rendered homepage content from <div id="root"> so that
// sub-pages don't briefly flash homepage HTML before React hydrates.
// Leaves a lightweight loading shell that matches the initial paint.
function clearRoot(html) {
  return html.replace(
    /<div id="root">[\s\S]*?<\/div>(?=\s*<script)/,
    '<div id="root"></div>',
  );
}

function setMeta(html, attr, name, value) {
  // Replace the value of an existing meta tag while preserving everything else.
  const re = new RegExp(
    `(<meta\\s+${attr}=["']${name.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&")}["']\\s+content=["'])[^"']*(["'][^>]*>)`,
  );
  return html.replace(re, `$1${escapeAttr(value)}$2`);
}

function setTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeText(title)}</title>`);
}

function setCanonical(html, url) {
  return html.replace(
    /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/,
    `<link rel="canonical" href="${escapeAttr(url)}" />`,
  );
}

function setHreflang(html, url) {
  return html
    .replace(
      /(<link rel="alternate" hreflang="en" href=")[^"]*(")/,
      `$1${escapeAttr(url)}$2`,
    )
    .replace(
      /(<link rel="alternate" hreflang="en-gb" href=")[^"]*(")/,
      `$1${escapeAttr(url)}$2`,
    )
    .replace(
      /(<link rel="alternate" hreflang="x-default" href=")[^"]*(")/,
      `$1${escapeAttr(url)}$2`,
    );
}

function replaceJsonLd(html, schemaObj) {
  return html.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">\n${JSON.stringify(schemaObj, null, 2)}\n</script>`,
  );
}

function escapeAttr(s) {
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function escapeText(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function renderPage({ pathname, title, description, ogImage, schema }) {
  const url = SITE + pathname;
  let html = stripBootstrap(TEMPLATE);
  html = clearRoot(html);
  html = setTitle(html, title);
  html = setMeta(html, "name", "description", description);
  html = setCanonical(html, url);
  html = setHreflang(html, url);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "property", "og:title", title);
  html = setMeta(html, "property", "og:description", description);
  html = setMeta(html, "property", "og:image", ogImage || DEFAULT_OG);
  html = setMeta(html, "name", "twitter:title", title);
  html = setMeta(html, "name", "twitter:description", description);
  html = setMeta(html, "name", "twitter:image", ogImage || DEFAULT_OG);
  html = replaceJsonLd(html, schema);
  return html;
}

function writeFile(relPath, html) {
  const abs = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, html);
  console.log("  ✓", relPath);
}

// ──────────────────────────────────────────────────────────────────────────
// Generate
// ──────────────────────────────────────────────────────────────────────────

console.log("Pre-rendering pages…\n");

const PAGE_TYPES = {
  "/about": "AboutPage",
  "/process": "WebPage",
  "/contact": "ContactPage",
  "/case-studies": "CollectionPage",
  "/expertise": "CollectionPage",
  "/blog": "Blog",
  "/ai-mvp-development": "WebPage",
  "/ai-development-agency-uk": "WebPage",
  "/compare/agency-vs-freelancer": "WebPage",
  "/services": "CollectionPage",
};

// Short display names used in breadcrumb trails for main pages
const PAGE_CRUMB_NAMES = {
  "/about": "About 7Code",
  "/process": "Our Process",
  "/contact": "Contact",
  "/case-studies": "Case Studies",
  "/expertise": "Expertise",
  "/blog": "Blog",
  "/ai-mvp-development": "AI MVP Development",
  "/ai-development-agency-uk": "AI Development Agency UK",
  "/compare/agency-vs-freelancer": "Agency vs Freelancer",
  "/services": "Services",
};

// Intermediate crumb for nested paths (e.g. /compare/* gets a "Compare" parent)
const PAGE_CRUMB_PARENT = {
  "/compare/agency-vs-freelancer": { name: "Compare" },
};

// Service URLs used for /services CollectionPage hasPart
const SERVICE_URLS = SERVICES.map(s => SITE + "/service/" + s.slug);

console.log("Main pages:");
for (const p of MAIN_PAGES) {
  const url = SITE + p.path;
  const crumbName = PAGE_CRUMB_NAMES[p.path] || p.title;
  const parent = PAGE_CRUMB_PARENT[p.path];
  const breadcrumbItems = [
    { name: "Home", url: SITE + "/" },
    ...(parent ? [parent] : []),
    { name: crumbName, url: url },
  ];
  const isServiceListing = p.path === "/services";
  const isAbout = p.path === "/about";
  let schema;
  if (isServiceListing) {
    schema = listingSchema(p, "CollectionPage", SERVICE_URLS, breadcrumbItems);
  } else if (isAbout) {
    schema = genericPageSchema(p, "AboutPage", breadcrumbItems);
    schema["@graph"].push(
      {
        "@type": "Person",
        "@id": SITE + "/#nicu-mardari",
        "name": "Nicu Mardari",
        "jobTitle": "CEO & Founder",
        "worksFor": { "@type": "Organization", "name": "7code", "url": SITE },
      },
      {
        "@type": "Person",
        "@id": SITE + "/#igor-mardari",
        "name": "Igor Mardari",
        "jobTitle": "CTO & Co-Founder",
        "worksFor": { "@type": "Organization", "name": "7code", "url": SITE },
      },
    );
  } else {
    schema = genericPageSchema(p, PAGE_TYPES[p.path] || "WebPage", breadcrumbItems);
  }
  const html = renderPage({
    pathname: p.path,
    title: p.title,
    description: p.description,
    ogImage: DEFAULT_OG,
    schema,
  });
  const relPath = p.path.startsWith("/") ? p.path.slice(1) : p.path;
  writeFile(relPath + ".html", html);
}

console.log("\nServices:");
for (const s of SERVICES) {
  const html = renderPage({
    pathname: "/service/" + s.slug,
    title: s.title + " — 7Code",
    description: s.description,
    ogImage: s.ogImage ? SITE + s.ogImage : DEFAULT_OG,
    schema: serviceSchema(s),
  });
  writeFile("service/" + s.slug + ".html", html);
}

console.log("\nExpertise:");
for (const e of EXPERTISE) {
  const html = renderPage({
    pathname: "/expertise/" + e.slug,
    title: e.title + " — 7Code",
    description: e.description,
    ogImage: e.ogImage ? SITE + e.ogImage : DEFAULT_OG,
    schema: expertiseSchema(e),
  });
  writeFile("expertise/" + e.slug + ".html", html);
}

console.log("\nCase studies:");
for (const c of CASES) {
  const html = renderPage({
    pathname: "/case-study/" + c.slug,
    title: c.title + " | 7Code",
    description: c.description,
    ogImage: c.ogImage ? SITE + c.ogImage : DEFAULT_OG,
    schema: caseStudySchema(c),
  });
  writeFile("case-study/" + c.slug + ".html", html);
}

console.log("\nBlog posts:");
for (const p of BLOG_POSTS) {
  const html = renderPage({
    pathname: "/blog/" + p.slug,
    title: p.title + " | 7Code Blog",
    description: p.description,
    ogImage: DEFAULT_OG,
    schema: blogPostSchema(p),
  });
  writeFile("blog/" + p.slug + ".html", html);
}

console.log("\nResources:");
for (const r of RESOURCES) {
  const html = renderPage({
    pathname: "/resources/" + r.slug,
    title: r.title + " | 7code",
    description: r.description,
    ogImage: DEFAULT_OG,
    schema: resourceSchema(r),
  });
  writeFile("resources/" + r.slug + ".html", html);
}

const total = MAIN_PAGES.length + SERVICES.length + EXPERTISE.length + CASES.length + BLOG_POSTS.length + RESOURCES.length;
console.log(`\nDone. ${total} pages pre-rendered.`);
