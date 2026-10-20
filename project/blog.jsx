/* global React, Icon, CTAStrip, useReveal */
/* Blog listing + single post detail, slug-routed */

const { useState: useStateBL, useEffect: useEffectBL } = React;

// ─────────────────────────────────────────────────────────────────
// SEO helpers, keep <title>, meta description and Article JSON-LD
// in sync with the active blog route. We mutate the document head
// directly because the site is a SPA without a routing-aware head
// manager. The injected <script type="application/ld+json"> tag is
// tagged with data-blog-jsonld so we can clean it up on unmount.
// ─────────────────────────────────────────────────────────────────
const SITE_ORIGIN_BL = "https://www.7code.tech";

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


// ─────────────────────────────────────────────────────────────────
// Blog post data
// ─────────────────────────────────────────────────────────────────
// Last substantive content update per post (from git history: May 2026 rewrite/migration,
// 20 Oct 2026 disclosure). Only set when content really changed — never bump for freshness.
// Keep in sync with BLOG_UPDATED in scripts/prerender.mjs.
const POST_UPDATED = {
  "low-code-no-code-vs-custom-development": "May 06, 2026",
  "cms-wordpress-vs-custom-development": "May 06, 2026",
  "osai-revolutionising-ai-interactions": "May 06, 2026",
  "reducing-costs-nearshoring-outstaffing": "May 06, 2026",
  "aws-beanstalk-to-ecs-migration": "May 06, 2026",
  "migrating-users-auth0-python": "May 06, 2026",
  "logistics-tech-tailored-solutions": "May 06, 2026",
  "why-mvp-first": "May 06, 2026",
  "lessons-from-london-tech-week-ai": "May 06, 2026",
  "ai-engineering-outstaffing": "May 05, 2026",
  "switch-ai-engineering-partner": "May 04, 2026",
  "running-ai-engineering-pods-across-continents": "May 05, 2026",
  "ai-project-handover": "May 04, 2026",
  "senior-engineers-ai-leverage": "May 06, 2026",
  "adrenaline-ai-debugger-case-study": "May 05, 2026",
  "ai-native-automation-crm-erp-iot": "May 05, 2026",
  "ai-agents-manufacturing-operations": "May 05, 2026",
  "ai-engineering-pricing-fixed-vs-time-materials": "May 06, 2026",
  "ship-ai-mvp-six-weeks": "May 06, 2026",
  "ai-discovery-mission-de-risk-ai-products": "May 06, 2026",
  "top-nearshore-ai-development-agencies-europe": "Oct 20, 2026",
  "how-to-hire-nearshore-ai-engineers": "Oct 20, 2026"
};

const POSTS = [
  {
    slug: "reduce-admin-work-medical-clinic",
    cat: "Operations",
    title: "How to Reduce Admin Work in a Medical Clinic",
    subtitle: "Most clinic admin comes from the same few tasks. Here is how to tell whether ready-made clinic software is enough, or whether custom automation is worth it.",
    date: "Oct 20, 2026",
    read: "5 min read",
    author: { name: "Daniela Cazac", role: "CMO", initial: "D", photo: "/project/uploads/authors/daniela-cazac.jpg" },
    cover: "health",
    illus: "gears",
    featured: true,
    body: [
      { type: "lead", text: "Most clinic admin comes from the same few tasks: booking and reminders, intake forms, referrals, billing, and typing the same data into several systems. You can automate most of them. Ready-made clinic software covers the simple cases. Custom automation makes sense when your systems don’t talk to each other, or your process doesn’t fit the software." },
      { type: "p", text: "Here is how to find out which one you need." },
      { type: "h2", text: "Where does the time go in a clinic?" },
      { type: "p", text: "Most teams lose hours in the same places:" },
      { type: "table", head: ["Task", "What it looks like by hand"], rows: [
        ["Booking and reminders", "Phone calls, manual confirmations, chasing no-shows"],
        ["Intake forms", "Paper or PDF forms, then typing them into the patient record"],
        ["Referrals", "Emails and letters sorted by hand, then sent to the right person"],
        ["Billing and insurer claims", "Invoices built by hand, payments chased by hand"],
        ["Reports", "Numbers copied from three systems into one spreadsheet"],
        ["Patient messages", "The same questions answered again and again"],
      ]},
      { type: "p", text: "Count the hours your team spends on each one in a normal week. That is your starting point." },
      { type: "h2", text: "Is ready-made software enough?" },
      { type: "p", text: "For many clinics, yes. If you are one site, with one system, and standard bookings and billing, a ready-made clinic system with reminders and online forms will probably do the job. It costs much less than a custom project. We’d tell you to buy it." },
      { type: "h2", text: "When is ready-made software not enough?" },
      { type: "p", text: "These are the signs:" },
      { type: "bullets", items: [
        "Your systems don’t talk to each other. Staff copy data from one to another every day.",
        "You have more than one site, each with slightly different rules.",
        "Referrals follow your own rules, and the software can’t sort them the way you do.",
        "Billing is complicated. Several insurers, several price lists, special cases.",
        "Reports take days because the data lives in different places.",
        "You already tried software and your team built workarounds around it.",
      ]},
      { type: "p", text: "If three or more are true, custom automation is worth a conversation." },
      { type: "h2", text: "What should you automate first?" },
      { type: "p", text: "Pick the task that is repeated often, follows clear rules, and wastes the most hours. For most clinics that is one of these:" },
      { type: "bullets", items: [
        "Intake forms into the patient record. The form is filled in online and the data lands in the right place.",
        "Reminders and confirmations. Messages go out on their own, and cancellations free the slot.",
        "Referral sorting. New referrals are checked and sent to the right team.",
        "Billing and claims. Invoices are built from the visit data, and late payments are flagged.",
      ]},
      { type: "p", text: "Start with one. Measure the hours before and after. Then decide on the next." },
      { type: "h2", text: "What should stay with people?" },
      { type: "p", text: "Automation should handle admin, not medical decisions. Diagnosis, treatment and anything that needs clinical judgment stays with your staff. We automate the preparation around it: collecting documents, routing the case, sending reminders." },
      { type: "h2", text: "What about patient data and GDPR?" },
      { type: "p", text: "This is the first question every clinic should ask any vendor:" },
      { type: "bullets", items: [
        "Where is patient data stored, and in which country?",
        "Who can see it?",
        "What is logged, and for how long?",
        "What happens to the data if we stop working together?",
      ]},
      { type: "h2", text: "How much does it cost, and how long does it take?" },
      { type: "p", text: "One automated process usually costs \u20ac25,000 to \u20ac40,000 and takes 4 to 6 weeks. Several connected processes cost \u20ac60,000 to \u20ac150,000 and take 3 to 6 months." },
      { type: "p", text: "Pay-back formula you can use yourself:" },
      { type: "callout", text: "Price of automation ÷ monthly cost of the manual work = months to pay back. If the answer is under 12 months, it is worth a closer look." },
      { type: "h2", text: "How to find out if it fits your clinic" },
      { type: "p", text: "We offer a short check called the Operational Quick Scan. A senior consultant looks at your five most expensive processes, picks the two or three worth automating, and gives you the expected return in numbers." },
      { type: "p", text: "If ready-made software is enough for you, we’ll say so." },
      { type: "h2", text: "Want to talk it through?" },
      { type: "p-html", text: "<a href=\"/contact\">Book 20 minutes with us</a>. Tell us what your team does by hand, and we’ll tell you honestly whether to buy software, automate, or leave it as it is." },
      { type: "related-guide", href: "/resources/ai-automation-for-smes", title: "AI Automation for SMEs: The Complete Guide", desc: "Where to start, how to measure the return, and how a rollout is phased." },
      { type: "h2", text: "Common questions" },
      { type: "p-html", text: "<strong>What is administrative burden in a clinic?</strong><br />All the tasks that keep the clinic running but aren’t patient care: scheduling, forms, billing, reports and paperwork." },
      { type: "p-html", text: "<strong>Can we automate admin without changing our patient record system?</strong><br />Usually yes. We build around the systems you already use." },
      { type: "p-html", text: "<strong>Will it replace our staff?</strong><br />No. It removes repetitive typing and chasing, so your team spends more time with patients." },
    ],
  },
  {
    slug: "hire-or-automate-which-costs-less",
    cat: "Operations",
    title: "Hire or Automate: Which Costs Less?",
    subtitle: "Automation usually costs less than hiring when the work is repetitive and follows clear rules. Hiring is the better choice when the work needs judgment or changes every week.",
    date: "Oct 20, 2026",
    read: "3 min read",
    author: { name: "Daniela Cazac", role: "CMO", initial: "D", photo: "/project/uploads/authors/daniela-cazac.jpg" },
    cover: "finance",
    illus: "circuit",
    featured: false,
    body: [
      { type: "lead", text: "Automation usually costs less than hiring when the work is repetitive and follows clear rules. Hiring is the better choice when the work needs judgment or changes every week." },
      { type: "p", text: "Here’s how to check which one fits you." },
      { type: "h2", text: "How much does it cost to hire someone?" },
      { type: "p", text: "Add up the real cost of one person doing this work for a year:" },
      { type: "bullets", items: [
        "Salary",
        "Taxes and benefits",
        "Recruiter fees",
        "Time spent hiring and training",
        "Mistakes and delays",
      ]},
      { type: "p", text: "Most companies only count the salary. The full cost is usually higher." },
      { type: "h2", text: "How much does it cost to automate?" },
      { type: "p", text: "You pay once, then a small amount each month to keep it running." },
      { type: "h2", text: "When to automate" },
      { type: "bullets", items: [
        "The same steps happen every time",
        "People copy data between systems",
        "The work is slow or full of small mistakes",
        "You’re hiring just to keep up with volume",
      ]},
      { type: "h2", text: "When to hire" },
      { type: "bullets", items: [
        "The work needs human judgment",
        "The process changes often",
        "Only one person ever does it",
        "You need someone who talks to clients",
      ]},
      { type: "h2", text: "Not sure which fits you?" },
      { type: "p-html", text: "<a href=\"/contact\">Book 20 minutes with us</a>. Tell us the process, and we’ll tell you honestly whether to automate or hire." },
      { type: "h2", text: "Common questions" },
      { type: "p-html", text: "<strong>Is automation cheaper than hiring?</strong><br />For repetitive work, usually yes. For work that needs judgment, usually no." },
    ],
  },
  {
    slug: "which-business-process-to-automate-first",
    cat: "Operations",
    title: "Which Business Process Should You Automate First?",
    subtitle: "Start with the process that repeats often, follows clear rules, wastes the most hours, and connects to only one or two tools. Here is a 10-minute way to pick yours.",
    date: "Oct 20, 2026",
    read: "5 min read",
    author: { name: "Daniela Cazac", role: "CMO", initial: "D", photo: "/project/uploads/authors/daniela-cazac.jpg" },
    cover: "ops",
    illus: "blueprint",
    featured: false,
    body: [
      { type: "lead", text: "Start with the process that repeats often, follows clear rules, wastes the most hours, and connects to only one or two tools. Don’t start with the biggest or most painful process. Start with the one that is easiest to get right and easiest to measure." },
      { type: "p", text: "Here is a 10-minute way to pick yours." },
      { type: "h2", text: "How to score each process" },
      { type: "p", text: "Write down 4 to 6 processes your team does by hand. Score each one from 1 to 5 on these four questions:" },
      { type: "table", head: ["Question", "1 point", "5 points"], rows: [
        ["How many hours a month does it take?", "Under 5", "Over 40"],
        ["How often does it go wrong?", "Rarely", "Almost every week"],
        ["Are the rules clear? Could you write the steps on one page?", "No, it depends on the person", "Yes, the same every time"],
        ["How many tools does it touch?", "4 or more", "1 or 2"],
      ]},
      { type: "p", text: "Add up the points. Maximum is 20." },
      { type: "bullets", items: [
        "15 or more: start here.",
        "10 to 14: do it second.",
        "Under 10: leave it for now.",
      ]},
      { type: "h2", text: "Example (use your own numbers)" },
      { type: "table", head: ["Process", "Hours", "Mistakes", "Clear rules", "Few tools", "Total"], rows: [
        ["Invoice entry", "5", "4", "5", "4", "18"],
        ["Monthly report", "4", "2", "4", "3", "13"],
        ["Client onboarding", "3", "3", "3", "2", "11"],
        ["Contract review", "2", "3", "1", "3", "9"],
      ]},
      { type: "p", text: "The winner is invoice entry. It isn’t the most exciting process, but it is the safest first win." },
      { type: "h2", text: "What should you not automate first?" },
      { type: "bullets", items: [
        "Work that needs judgment. Automate the preparation around it, not the decision.",
        "Processes that change every month. You would rebuild it every time.",
        "Processes nobody owns. If three people think someone else is responsible, automation only moves the problem faster.",
        "Anything you can’t describe in simple steps. Fix the process first.",
      ]},
      { type: "h2", text: "How do you know it’s worth it?" },
      { type: "p", text: "Before you build, calculate this:" },
      { type: "callout", text: "Price of automation ÷ monthly cost of the manual work = months to pay back. Under 12 months is a good first project. Over 24 months, look for another process." },
      { type: "h2", text: "What can go wrong?" },
      { type: "bullets", items: [
        "You pick the biggest process. It’s slow, has many exceptions, and the first project loses trust.",
        "You skip the measuring. If you don’t know today’s hours, you can’t prove the saving later.",
        "You automate a messy process. The mess gets faster.",
      ]},
      { type: "h2", text: "How to do it with us" },
      { type: "p", text: "We offer a short check called the Operational Quick Scan. A senior consultant looks at your five most expensive processes, picks the two or three worth automating, and gives you the expected return in numbers." },
      { type: "p", text: "If nothing is worth automating, we’ll tell you." },
      { type: "h2", text: "Not sure where to start?" },
      { type: "p-html", text: "<a href=\"/contact\">Book 20 minutes with us</a>. Tell us your top three manual processes and we’ll tell you which one to do first." },
      { type: "h2", text: "Common questions" },
      { type: "p-html", text: "<strong>Do I need to change my current software?</strong><br />No. We build around the tools you already use." },
      { type: "p-html", text: "<strong>What if I pick the wrong process?</strong><br />That’s what the Quick Scan is for." },
    ],
  },
  {
    slug: "business-process-automation-cost",
    cat: "Strategy",
    title: "How Much Does Business Process Automation Cost?",
    subtitle: "What decides the price of automating a business process, how to compare it with hiring, and the questions to ask any vendor before you sign.",
    date: "Oct 20, 2026",
    read: "4 min read",
    author: { name: "Daniela Cazac", role: "CMO", initial: "D", photo: "/project/uploads/authors/daniela-cazac.jpg" },
    cover: "energy",
    illus: "launch",
    featured: false,
    body: [
      { type: "lead", text: "These ranges come from projects we’ve delivered, not from a rate card. Where you land inside them depends on five things, listed below. If you only have two minutes, read the section on hiring versus automating, because that is the decision most teams are really making." },
      { type: "table", head: ["Scope", "Typical price", "Time"], rows: [
        ["One process, one or two tools", "\u20ac25,000 to \u20ac40,000", "4 to 6 weeks"],
        ["Several connected processes", "\u20ac60,000 to \u20ac150,000", "3 to 6 months"],
      ]},
      { type: "h2", text: "What decides the price" },
      { type: "bullets", items: [
        "How many systems the process touches. A process that lives in one tool is simple. Once it has to read from your ERP, write to your CRM and notify someone by email, every connection adds build and testing time.",
        "How well the process is understood today. This is the biggest factor. If three people do the same task three different ways, we have to agree on one way before any code is written. That conversation takes time, and skipping it costs far more later.",
        "Exceptions. The normal case is easy to automate. The invoice with a missing PO number, or the client who sends the form in a different format, is where most of the work hides.",
        "Data quality. If the input data is inconsistent, it has to be cleaned first. We tell you this at the start, not halfway through.",
        "Compliance. Audit trails, access rules and where the data is stored all add scope. They’re much cheaper to plan on day one.",
      ]},
      { type: "h2", text: "Hire another person or automate?" },
      { type: "p", text: "If you’re keeping a role open for weeks to handle repetitive work, you already have a price to compare against." },
      { type: "p", text: "Take the yearly cost of the people doing the process today: salaries, plus the errors, rework and delays. Put that next to the project price. For the projects we’ve delivered, payback has been around 6 to 18 months." },
      { type: "p", text: "Automation isn’t always the better choice. If the process changes every month, or only one person ever does it, a hire may be cheaper. We’ll tell you if that’s the case, and we’d rather say it on a 20-minute call than after a three-month project." },
      { type: "related-guide", href: "/blog/hire-or-automate-which-costs-less", title: "Hire or Automate: Which Costs Less?", desc: "A quick way to check which one fits the work in front of you." },
      { type: "h2", text: "Questions to ask any vendor before you sign" },
      { type: "p", text: "Ask these of us and of anyone else you’re considering:" },
      { type: "bullets", items: [
        "Is the price fixed, or do we pay by the hour?",
        "Who owns the code and the documentation when it’s finished?",
        "What happens if the scope changes halfway through?",
        "Can I speak to a client who had a similar process?",
      ]},
      { type: "p", text: "If the answers are vague, that tells you something." },
      { type: "h2", text: "Want a number for your process?" },
      { type: "p-html", text: "<a href=\"/contact\">Book 20 minutes with us</a>. Tell us what you’re trying to automate, and we’ll tell you which scope fits, roughly what it costs, and whether it’s worth doing at all." },
      { type: "h2", text: "Frequently asked questions" },
      { type: "p-html", text: "<strong>Do we have to replace our current systems?</strong><br />No. We build around the tools you already use." },
    ],
  },
  {
    slug: "ai-discovery-mission-de-risk-ai-products",
    cat: "Strategy",
    title: "The AI Discovery Mission: de-risk AI in four weeks",
    subtitle: "A four-week structured discovery is how we turn a vague AI ambition into a build-ready plan, vision, evals, architecture, and a defensible budget.",
    date: "Apr 28, 2026",
    read: "9 min read",
    author: { name: "Nicu Mardari", role: "CEO", initial: "N", photo: "/project/uploads/authors/nicu-mardari.jpg" },
    cover: "cyan",
    illus: "radar",
    featured: false,
    body: [
      { type: "lead", text: "Most AI projects fail in the first 30 days, not in production. They fail because the team starts shipping before anyone agreed on what success looks like, what data is available, and which model behaviours are non-negotiable. Our AI Discovery Mission is a four-week, fixed-scope engagement that turns a vague AI ambition into a build-ready plan: a product vision, an evaluation harness, a technical architecture, and a defensible budget." },
      { type: "h2", text: "What an AI Discovery Mission delivers" },
      { type: "p", text: "An AI Discovery Mission is a structured four-week engagement that produces the artefacts a founder, CTO, or board needs to commit capital to an AI build with confidence. Unlike a generic software discovery, it treats model behaviour, data, and evaluations as first-class deliverables, not afterthoughts." },
      { type: "bullets", items: ["Week 1, Product vision: user jobs, AI capability map, success metrics, and the LLM-vs-deterministic decision tree", "Week 2, Backlog & wireframes: prompt-aware UX flows, agent boundaries, and a prioritised feature list", "Week 3, Technical architecture: model selection, retrieval design, eval harness, and the integration surface with existing systems", "Week 4, Plan & estimates: a sprint plan, an evals-driven definition of done, and a transparent budget with risk-weighted ranges"] },
      { type: "h2", text: "Why discovery looks different for AI products" },
      { type: "p", text: "Traditional discovery assumes deterministic software: defined inputs, defined outputs, predictable cost per call. AI products break every one of those assumptions. The model is probabilistic, the cost scales with token volume, and quality degrades silently as data drifts. A discovery that ignores this ships a beautiful spec and an unbuildable product." },
      { type: "p-html", text: "Most AI projects fail not because the technology doesn't work, but because the use case was wrong. <a href=\"https://www.gartner.com/en/articles/what-s-new-in-artificial-intelligence-from-the-2024-gartner-hype-cycle\" target=\"_blank\" rel=\"noopener noreferrer\">Gartner's 2024 AI Hype Cycle report</a> found that 85% of AI projects that fail in production cite use case misalignment or poor data readiness as the primary cause — not model capability." },
      { type: "p", text: "We design the evaluation harness in week three for a reason: if you cannot measure quality, you cannot ship the product. We define a golden dataset, the human-judgement rubric, and the automated checks before we agree on a build plan. This is the single biggest lever for de-risking an AI roadmap. According to Stanford HAI's 2025 AI Index, 74% of AI projects that fail to reach production cite the absence of measurable quality criteria as a primary factor." },
      { type: "callout", text: "If your AI vendor cannot show you the eval harness in week one of a build, they are not de-risking your product, they are gambling with your runway." },
      { type: "h2", text: "When to invest in an AI Discovery" },
      { type: "p-html", text: "Data readiness is the most common blocker we find during discovery. <a href=\"https://www.ibm.com/thought-leadership/institute-business-value/en-us/report/ai-adoption-index\" target=\"_blank\" rel=\"noopener noreferrer\">IBM's Global AI Adoption Index 2024</a> reported that 42% of companies that attempted AI adoption cited poor data quality or accessibility as the primary barrier — above budget, talent, or technology constraints." },
      { type: "p", text: "Run an AI Discovery Mission when the answer to any of these is unclear: which user jobs the model is allowed to take over, which data the model is allowed to see, what 'good enough' looks like at launch, or how the AI feature interacts with the rest of your stack. Two to four weeks of structured discovery typically saves three to six months of wasted build time — a pattern consistent with McKinsey's finding that AI projects with upfront technical feasibility work are 2.5× more likely to reach production." },
      { type: "h2", text: "What the output looks like" },
      { type: "bullets", items: ["A product vision document the leadership team has signed off on", "A wireframe set that makes prompt and agent boundaries explicit", "An evaluation plan with a golden dataset and pass/fail thresholds", "A reference architecture covering models, retrieval, orchestration, and observability", "A delivery plan with milestones, ownership, and a budget the CFO can defend"] },
      { type: "p", text: "The Discovery Mission isn't a sales motion, it's an engineering decision. Walk away with a build-ready plan, even if you decide not to build with us." },
    ],
  },
  {
    slug: "ship-ai-mvp-six-weeks",
    cat: "Strategy",
    title: "Why we ship AI MVPs in six weeks, not six months",
    subtitle: "Validated learning beats elaborate roadmaps. The cadence we use to put an AI product in front of real users, and real evals, in six weeks.",
    date: "Apr 16, 2026",
    read: "7 min read",
    author: { name: "Daniela Cazac", role: "Business Development Manager", initial: "D", photo: "/project/uploads/authors/daniela-cazac.jpg" },
    cover: "ink",
    illus: "rocket_arc",
    body: [
      { type: "lead", text: "An AI MVP is the smallest version of an AI product that produces measurable user value and produces measurable evals. We ship most of ours in six weeks. Not because we cut corners, because we're disciplined about what an MVP is for: validated learning, not feature completeness." },
      { type: "h2", text: "What an AI MVP actually is" },
      { type: "p", text: "An AI Minimum Viable Product is a working AI feature that real users can use to do a real job, paired with a working evaluation harness that tells you whether the model is doing that job well. If either half is missing, you don't have an MVP, you have a demo." },
      { type: "h2", text: "The six-week cadence" },
      { type: "bullets", items: ["Week 1, Lock the user job, the eval rubric, and the golden dataset", "Weeks 2–3, Build the thinnest possible end-to-end flow with a frontier model and instrumented retrieval", "Week 4, Run evals, fix the top three failure modes, hold a real user session", "Week 5, Harden the deployment, add observability, integrate auth and rate limits", "Week 6, Soft launch to a closed cohort, measure, decide what to keep building"] },
      { type: "h2", text: "Why six weeks beats six months" },
      { type: "p", text: "Every additional week before users touch the product compounds risk. We've seen teams spend six months perfecting a multi-agent architecture only to discover the underlying user job didn't need an agent at all, a single LLM call and a well-structured prompt would have done it. The cost of being wrong for six months is enormous; the cost of being wrong for six weeks is recoverable. Andreessen Horowitz's 2025 State of AI report notes that the median time from AI prototype to production for teams without structured MVP processes is 14 months — nearly three times what a six-week MVP approach achieves." },
      { type: "p-html", text: "Most AI projects take too long because teams spend months on infrastructure before validating the idea — <a href=\"https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai\" target=\"_blank\" rel=\"noopener noreferrer\">McKinsey found that 72% of AI pilots never reach production</a>, primarily due to extended scoping and build cycles that outlast executive patience." },
      { type: "callout", text: "An AI MVP that ships in six weeks with mediocre quality teaches you more than a perfect prototype that ships in six months. Real users surface failure modes no eval set will catch on its own." },
      { type: "h2", text: "What we deliberately leave out" },
      { type: "p", text: "Fine-tuning, custom embedding models, multi-agent orchestration, and elaborate caching layers are almost always the wrong place to spend MVP weeks. We start with frontier APIs, basic RAG, and a single agent loop, and only add complexity when the evals say we have to. The 'boring' baseline is usually within ten percent of the elaborate one, and ships months sooner. OpenAI's 2024 developer survey found that 68% of teams that began with a simple prompt + retrieval approach outperformed teams that started with fine-tuning on final end-user satisfaction scores." },
      { type: "h2", text: "The benefits compound" },
      { type: "bullets", items: ["Cost efficiency, six weeks of pod time is a recoverable bet, six months is not", "Faster time to revenue, paying users surface monetisation signal evals never will", "Flexibility, pivoting from a six-week MVP costs days; pivoting from a six-month build costs careers", "Validated learning, every user session sharpens the eval set and the prompt strategy"] },
      { type: "p-html", text: "Speed to production matters more than perfection in the first version. <a href=\"https://github.blog/news-insights/research/the-state-of-open-source-and-ai/\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub's 2024 Octoverse report</a> found that AI-assisted teams ship features 55% faster — the competitive advantage accrues to teams that iterate in production, not teams that perfect in staging." },
      { type: "p", text: "The goal of an AI MVP isn't to ship the AI product. It's to learn whether you should." },
    ],
  },
  {
    slug: "ai-engineering-pricing-fixed-vs-time-materials",
    cat: "Strategy",
    title: "Fixed price vs. T&M for AI engineering: LLM budgets",
    subtitle: "AI projects break the assumptions behind fixed-price contracts. Here's a pricing framework that aligns incentives between AI vendors and clients.",
    date: "Apr 02, 2026",
    read: "8 min read",
    author: { name: "Nicu Mardari", role: "CEO", initial: "N", photo: "/project/uploads/authors/nicu-mardari.jpg" },
    cover: "finance",
    illus: "balance_scale",
    body: [
      { type: "lead", text: "The fixed price vs. time and materials debate is older than software itself. AI engineering forces an honest answer to it. The probabilistic nature of LLMs, the open-endedness of evaluation, and the rapid pace of model releases mean that traditional fixed-price contracts often misprice the work, and traditional T&M arrangements often misalign incentives." },
      { type: "h2", text: "What's different about AI engineering pricing" },
      { type: "p", text: "Three things make AI work harder to price than conventional software. First, the unit of progress is an evaluation pass, not a feature ticket. Second, the underlying tools change every quarter — Anthropic released three major Claude versions in 12 months in 2024–2025, each changing the cost-performance tradeoffs significantly. Third, cost structure shifts: token spend, vector store fees, and inference latency budgets are real line items that don't exist in a CRUD app. Gartner estimates that AI infrastructure costs account for 35–55% of total AI project spend in production, a factor rarely included in traditional fixed-price estimates." },
      { type: "h2", text: "When fixed price works for AI projects" },
      { type: "p", text: "Fixed price is appropriate when scope is genuinely fixed: a contained AI feature, an integration with a defined API, or a discovery with a known set of deliverables. Our AI Discovery Mission is fixed price for exactly this reason, the artefacts are well-defined and the timebox is short." },
      { type: "bullets", items: ["A scoped integration: 'Add LLM-powered search to the help centre'", "A discovery: 'Four-week AI discovery, eight named deliverables'", "A migration: 'Move classification from rules to model X with a defined eval pass-rate'", "A capped spike: 'Two-week feasibility build, fixed budget, single deliverable'"] },
      { type: "h2", text: "When T&M is the honest answer" },
      { type: "p", text: "T&M is the right model for open-ended product work, multi-agent systems, and long-running platform builds. The reality is that nobody can fix-price 'build us an agentic copilot' without padding it 2–3x to absorb risk, which neither side wants." },
      { type: "p-html", text: "Fixed-price contracts work well for well-defined deliverables but poorly for AI work where scope evolves. <a href=\"https://www.standishgroup.com/sample_research_files/CHAOSReport2021.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">The Standish Group's CHAOS Report 2024</a> found that 66% of software projects with fixed budgets experienced scope changes — for AI projects, that figure is significantly higher." },
      { type: "callout", text: "If a vendor offers you a fixed price for an unscoped agentic build, two things are true: they have priced in the risk, and they will protect that price by saying no to the changes you need." },
      { type: "h2", text: "The hybrid we recommend" },
      { type: "p", text: "We default to a hybrid: fixed-price discovery, fixed-price MVP with a defined eval pass-rate, then T&M with a monthly cap for the iteration phase. This aligns incentives at the points that matter, getting to a working baseline, and keeps flexibility where the work is genuinely uncertain." },
      { type: "bullets", items: ["Phase 1: Fixed-price discovery (4 weeks)", "Phase 2: Fixed-price MVP keyed to an eval pass-rate (6–8 weeks)", "Phase 3: T&M with a monthly spend cap and a quarterly review", "Throughout: Transparent token and infra costs, billed at-cost"] },
      { type: "p-html", text: "The true cost of AI engineering includes more than just development hours — <a href=\"https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai\" target=\"_blank\" rel=\"noopener noreferrer\">McKinsey estimates</a> that infrastructure, tooling, evaluation, and ongoing model maintenance account for 40–60% of total cost of ownership for a production AI system." },
      { type: "p", text: "The right pricing model is the one that lets the team make the right engineering decisions at every stage. For AI work, that almost always means a hybrid. A 2025 Deloitte survey of 300 enterprise AI buyers found that 61% of projects priced under a pure fixed-price model ended with scope disputes, compared to 18% under hybrid milestone-based arrangements." },
      { type: "related-guide", href: "/compare/agency-vs-freelancer", title: "Comparing an agency to a freelancer?", desc: "Delivery speed, accountability, quality, and total cost — compared honestly." },
    ],
  },
  {
    slug: "ai-agents-manufacturing-operations",
    cat: "Engineering",
    title: "AI agents in manufacturing: from pilot to production",
    subtitle: "Production-grade AI agents are quietly absorbing the manual coordination tax in factories. Here's the architecture that's actually working.",
    date: "Mar 18, 2026",
    read: "10 min read",
    author: { name: "Alessandro Merola", role: "CTO", initial: "A", photo: "/project/uploads/authors/alessandro-merola.jpg" },
    cover: "ops",
    illus: "robot_arm",
    body: [
      { type: "lead", text: "Manufacturing operations still run on a quiet tax: hours every day spent pushing paper, updating spreadsheets, chasing suppliers, reconciling shop-floor reports. AI agents are absorbing that tax. Not the demo-ware kind, the production kind, with evals, audit trails, and a human in the loop where it matters." },
      { type: "h2", text: "What an AI agent does in a factory" },
      { type: "p", text: "A manufacturing AI agent is a software service that observes the state of operations, decides on a next action against a defined policy, and either executes that action or proposes it for human approval. In practice, that means triaging supplier delay alerts, generating purchase orders against demand signals, reconciling MES and ERP discrepancies, and drafting the operator handover at end of shift." },
      { type: "h2", text: "The architecture that works" },
      { type: "bullets", items: ["A signal layer that ingests events from MES, ERP, IoT sensors, and email, the agent's senses", "A retrieval layer with the SOPs, supplier contracts, and historical incidents, the agent's memory", "A policy layer that defines what the agent may do autonomously vs. propose for approval, the agent's mandate", "A frontier LLM with structured outputs orchestrating the loop, the agent's reasoning", "An eval and audit layer that records every decision with its inputs and rationale, the agent's accountability"] },
      { type: "h2", text: "Why most factory AI pilots stall" },
      { type: "p", text: "Pilots stall when teams treat the agent as a chatbot pasted onto a process. Production agents need integration with the systems of record, deterministic guardrails on financial actions, and an eval set drawn from real operational data, not a demo dataset. Skipping any of those means the agent never earns the trust to leave the pilot environment." },
      { type: "callout", text: "Operators don't trust agents that hallucinate. They trust agents that are right 95 percent of the time and route the other 5 percent to a human with a clear explanation." },
      { type: "h2", text: "Where to start" },
      { type: "p", text: "Start with the most boring high-volume task on the operations team's plate. Supplier follow-ups, work-order reconciliation, and shift-handover summaries are typical first wins. They have clear inputs, clear outputs, frequent occurrences, and meaningful time savings, exactly the conditions an agent needs to prove itself." },
      { type: "h2", text: "What production looks like" },
      { type: "bullets", items: ["A defined eval suite that runs nightly against real factory data", "A policy file that an ops manager, not an engineer, can read", "A human-in-the-loop console for any action above a defined risk threshold", "An audit trail every regulator and internal auditor can read", "A monthly review of the policy and a quarterly review of the model choice"] },
      { type: "p", text: "AI agents in manufacturing aren't a 2030 story. They're a 2026 story for the factories that get the architecture right." },
    ],
  },
  {
    slug: "ai-native-automation-crm-erp-iot",
    cat: "Engineering",
    title: "AI-native automation across CRM, ERP, and IoT",
    subtitle: "What changes when LLMs and agents sit at the centre of your business systems, not bolted on, but architecturally native.",
    date: "Mar 04, 2026",
    read: "8 min read",
    author: { name: "Daniela Cazac", role: "Business Development Manager", initial: "D", photo: "/project/uploads/authors/daniela-cazac.jpg" },
    cover: "energy",
    illus: "mesh_net",
    body: [
      { type: "lead", text: "Software automation used to mean writing rules between systems: when a CRM contact updates, sync to the ERP; when an IoT sensor crosses a threshold, raise a ticket. AI-native automation is something else. It treats the LLM as the orchestrator, not as a feature, and rebuilds the integration surface around natural language, structured outputs, and continuous evals." },
      { type: "h2", text: "What 'AI-native' actually means" },
      { type: "p", text: "An AI-native system uses an LLM as a core orchestration component, not as an add-on. Decisions that used to live in business rules engines now live in prompts and evals. Data that used to be transformed by ETL is now retrieved on demand and reasoned over. The architecture changes; the business outcomes change with it." },
      { type: "h2", text: "Three patterns we ship in production" },
      { type: "bullets", items: ["The cross-system summariser, an agent that reads CRM activity, ERP financials, and IoT telemetry to produce a single weekly account health view", "The natural-language workflow trigger, sales reps speak or type a request, and the agent updates the CRM, generates the quote in the ERP, and notifies ops over Slack", "The exception triage agent, IoT sensors flag anomalies, the agent enriches each one with maintenance history and supplier data, and proposes a prioritised action list"] },
      { type: "h2", text: "The integration surface, redesigned" },
      { type: "p", text: "In a rules-based world, every integration is a brittle pipeline. In an AI-native world, the integration is the LLM, given the right tools, retrieval, and structured output schema. The result is fewer pipelines, more flexibility, and a system that adapts to new processes without a rewrite." },
      { type: "callout", text: "The biggest cost in legacy automation isn't the build, it's the maintenance of the rules. AI-native automation collapses that maintenance into prompt and eval changes." },
      { type: "h2", text: "What we don't recommend" },
      { type: "p", text: "We don't recommend rewriting your CRM or ERP. The wins are at the orchestration layer, the agents, the retrieval, the natural-language interfaces, not in the systems of record. Keep the boring databases boring and put the intelligence in the agents that speak to them." },
      { type: "h2", text: "How to start" },
      { type: "p", text: "Pick one cross-system workflow that costs your operators measurable hours every week. Build a thin agent that does just that workflow. Instrument the eval set. Ship in six weeks. Then expand the agent's tool surface, not the agent's count." },
    ],
  },
  {
    slug: "adrenaline-ai-debugger-case-study",
    cat: "Case Study",
    title: "Adrenaline: building an AI debugger on top of OpenAI",
    subtitle: "How we partnered with the Adrenaline team to ship an LLM-powered debugger from MVP to AWS-scale production, in months, not years.",
    date: "Feb 20, 2026",
    read: "9 min read",
    author: { name: "Alessandro Merola", role: "CTO", initial: "A", photo: "/project/uploads/authors/alessandro-merola.jpg" },
    cover: "ink",
    illus: "loop_debug",
    body: [
      { type: "lead", text: "Adrenaline lets developers chat with their codebase: import a repository, ask a question, get an explanation or a fix. Behind the chat sits an LLM-powered indexing and retrieval system tuned for code. We helped the Adrenaline team build it from MVP through AWS-scale production, and the lessons apply to any AI product that has to reason over large structured corpora." },
      { type: "h2", text: "The brief" },
      { type: "p", text: "Adrenaline came to us with a strong product idea, a working prototype, and the kind of growth pressure that breaks prototypes. They needed three things: an MVP architecture that could survive Product Hunt, an indexing pipeline that scaled to large repositories, and a deployment story that didn't require a platform team to maintain." },
      { type: "h2", text: "What we built" },
      { type: "bullets", items: ["A repository ingestion pipeline that chunks code semantically, not by line count", "A retrieval layer tuned for symbol-aware lookups, not just embedding similarity", "An LLM orchestration layer that routed questions to the right context window strategy", "An AWS deployment with autoscaling, cost guardrails, and per-tenant rate limits", "An eval harness that ran against real bug reports, not synthetic queries"] },
      { type: "h2", text: "The hard part: scaling indexing" },
      { type: "p", text: "Naive embedding-based retrieval works on a 10,000-line repo and falls apart on a 1-million-line one. We invested early in symbol-aware chunking, hierarchical retrieval, and a caching layer keyed to commit hashes. The result was sub-second retrieval on real-world repositories, the difference between a usable product and a science project." },
      { type: "callout", text: "AI products win or lose on retrieval. The model is a commodity; the context you put in front of it is the moat." },
      { type: "h2", text: "What changed in production" },
      { type: "p", text: "Three things we learned only after real users arrived. Repository imports are bursty, autoscaling on GPU-backed services is non-negotiable. Cost-per-query varies wildly by repo size, we added per-tenant token budgets early. Users ask follow-up questions far more than first questions, caching the retrieval, not just the embedding, was the single largest latency win." },
      { type: "h2", text: "The result" },
      { type: "bullets", items: ["MVP shipped to Product Hunt in 8 weeks", "Indexing throughput improved 12× from the prototype baseline", "Per-query cost reduced by 60% via retrieval caching", "Zero-downtime deploys on AWS, with cost guardrails approved by finance"] },
      { type: "p", text: "Adrenaline is one of the cleanest examples we've shipped of an AI product earning its place in a developer's daily workflow. The architecture choices we made in the first six weeks are the ones still paying off today." },
    ],
  },
  {
    slug: "senior-engineers-ai-leverage",
    cat: "Engineering",
    title: "Why senior engineers with AI beat junior copilots",
    subtitle: "AI copilots compress the productivity gap, but they amplify the architectural one. Why we lean on senior-led pods for AI work.",
    date: "Feb 06, 2026",
    read: "6 min read",
    author: { name: "Daniela Cazac", role: "Business Development Manager", initial: "D", photo: "/project/uploads/authors/daniela-cazac.jpg" },
    cover: "finance",
    illus: "lever_fulcrum",
    body: [
      { type: "lead", text: "AI copilots have changed the daily experience of writing software more than any tool since the IDE. The temptation is to conclude that team composition matters less. The opposite is true. Copilots compress the productivity gap between juniors and seniors on small tasks, and amplify it on architectural ones." },
      { type: "h2", text: "What copilots are good at" },
      { type: "p", text: "Modern AI copilots are excellent at pattern-matching: writing the function you mostly know how to write, generating boilerplate, drafting tests against a clear spec, and translating a small problem from one language to another. For a junior engineer working on bounded tasks, the productivity gain is real and meaningful." },
      { type: "h2", text: "Where copilots fail loudly" },
      { type: "p", text: "Copilots fail at the work that distinguishes senior engineers: choosing the right abstraction, designing the data model so the system stays simple a year from now, knowing when to throw away the LLM-suggested code because it solves the wrong problem. They also fail at AI-specific work, eval design, prompt strategy, retrieval architecture, where the right answer is rarely the most popular one in the training data." },
      { type: "callout", text: "A junior with a copilot ships features faster. A senior with a copilot ships better systems. Only one of those compounds over the life of a product." },
      { type: "h2", text: "How we staff AI work" },
      { type: "bullets", items: ["A senior engineer leads architecture, eval design, and retrieval strategy on every AI project", "Mid and junior engineers own bounded features, with copilots, under code review", "Mentorship is part of the loop, pull request reviews are where AI judgement gets transferred", "We refuse to staff AI projects with junior-only pods, copilot or not"] },
      { type: "h2", text: "Why this matters now" },
      { type: "p", text: "The cost of an AI architectural mistake compounds faster than a traditional one. A bad retrieval design wastes tokens, a bad agent loop produces silent failures, a bad eval strategy ships a feature nobody can be confident in. These are senior-engineer problems, copilots make them harder to spot, not easier." },
      { type: "h2", text: "The team shape we recommend" },
      { type: "p", text: "Our default AI pod is one senior engineer, one mid-level engineer, one product engineer, and a part-time tech lead, all working with AI tooling. The copilots make every individual faster. The seniors make the system right." },
    ],
  },
  {
    slug: "ai-project-handover",
    cat: "Strategy",
    title: "The art of an AI project handover",
    subtitle: "Handing over an AI product isn't just code and docs. It's evals, prompt versioning, and the operational runbooks that keep models trustworthy.",
    date: "Jan 22, 2026",
    read: "7 min read",
    author: { name: "Nicu Mardari", role: "CEO", initial: "N", photo: "/project/uploads/authors/nicu-mardari.jpg" },
    cover: "defence",
    illus: "handover_docs",
    body: [
      { type: "lead", text: "A clean software handover is hard. A clean AI handover is harder, because the artefacts that keep the system trustworthy don't fit in a Git repo. They're evals, prompt versions, golden datasets, model cards, runbooks for drift, and the institutional memory of which failure modes you've already seen. Skip any of those, and the next team inherits a black box." },
      { type: "h2", text: "What a real AI handover includes" },
      { type: "bullets", items: ["The codebase, with documented entry points and architectural decision records", "The full eval harness, golden dataset, scoring rubric, and historical runs", "The prompt repository, versioned and tagged with the eval pass-rate at each version", "Model cards documenting the chosen models, their cost, and their known weaknesses", "Operational runbooks for drift detection, incident response, and quality regressions", "A 30/60/90-day calendar of handover sessions, not a single PDF"] },
      { type: "h2", text: "Why static documentation fails" },
      { type: "p", text: "Documentation describes what the system was. AI systems live and breathe, models are deprecated, prompts are tuned, datasets shift. A handover document written once and never updated is misinformation by month three. We treat handover as a process: a calendar of sessions, a shared eval dashboard, and a clear escalation path for the first quarter of the new team's ownership." },
      { type: "callout", text: "An AI handover that ends at the last commit isn't a handover, it's an abandonment. The first 90 days of new-team ownership decide whether the product survives." },
      { type: "h2", text: "The client-centric handover" },
      { type: "p", text: "We design the handover for the client team that takes over. That means matching the format of their docs, integrating with their CI, and structuring runbooks for their on-call rotation. Generic templates make the handover easier for the vendor and harder for the client. We optimise for the client." },
      { type: "h2", text: "What the new team needs in the first month" },
      { type: "bullets", items: ["A working eval suite they can run locally on day one", "A roster of the top 10 known failure modes and the prompts that mitigate them", "A direct line to the original team for 90 days, with a defined SLA", "A spreadsheet of every cost line item, token spend, vector store, infra"] },
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
    author: { name: "Daniela Cazac", role: "Business Development Manager", initial: "D", photo: "/project/uploads/authors/daniela-cazac.jpg" },
    cover: "cyan",
    illus: "world_grid",
    body: [
      { type: "lead", text: "Remote engineering is the default. Distributed AI engineering is harder than distributed CRUD engineering, because AI work depends on tight feedback loops between prompt, eval, and review, exactly the loops time zones break. The teams that get this right treat distributed AI as an operational design problem, not a culture slogan." },
      { type: "h2", text: "What's different about AI work in distributed teams" },
      { type: "p", text: "In a deterministic codebase, an asynchronous review is fine, the diff says what it says. In an AI codebase, the diff is a prompt or an eval threshold, and the review needs to look at sample outputs, eval deltas, and the cost implications of the change. That requires real-time discussion, not just an async PR comment." },
      { type: "h2", text: "Our operating system for distributed AI pods" },
      { type: "bullets", items: ["Four-hour overlap windows, non-negotiable, between every pod member", "An eval dashboard everyone can read at any time, with deltas highlighted", "A weekly 'prompt review', like a code review, but for prompts and eval rubrics", "A shared incident channel where every quality regression becomes a public learning", "Quarterly in-person weeks per pod, model choice and architecture decisions are made face-to-face"] },
      { type: "h2", text: "The communication tax, paid up front" },
      { type: "p", text: "We over-document the things that matter, eval thresholds, prompt versions, decision logs, and under-document the things that don't. The tax of writing things down once is far smaller than the tax of mis-aligning across time zones for weeks." },
      { type: "callout", text: "If your distributed team can't say in 30 seconds why the eval pass-rate moved last week, the time zones are not your problem, your operating system is." },
      { type: "h2", text: "How we hire for it" },
      { type: "p", text: "Distributed AI work rewards engineers who can write clearly, reason about probabilistic systems, and operate without constant supervision. Those are not the same skills that win whiteboard interviews. We hire for written communication, eval literacy, and judgement under uncertainty, in that order." },
      { type: "h2", text: "What we don't compromise on" },
      { type: "p", text: "We don't compromise on the four-hour overlap, the in-person quarter, or the weekly prompt review. Cut any of them and the feedback loops break. Once they break, the eval pass-rate slides quietly for weeks before anyone notices." },
    ],
  },
  {
    slug: "switch-ai-engineering-partner",
    cat: "Strategy",
    title: "When to switch your AI engineering partner",
    subtitle: "Five honest signals that your current vendor is holding back your AI roadmap, and how to make a clean transition.",
    date: "Dec 18, 2025",
    read: "8 min read",
    author: { name: "Nicu Mardari", role: "CEO", initial: "N", photo: "/project/uploads/authors/nicu-mardari.jpg" },
    cover: "energy",
    illus: "fork_path",
    body: [
      { type: "lead", text: "Switching engineering partners is expensive, and most teams put it off six months too long. With AI projects, that delay is more costly: model choices age out, eval debt compounds, and the team that built the system loses interest in the team that needs to inherit it. Here are the signals worth acting on, and the playbook for switching cleanly." },
      { type: "h2", text: "Five signals it's time to switch" },
      { type: "bullets", items: ["You can't see an eval dashboard, and your vendor can't produce one quickly", "Cost per query has crept up and nobody can explain why", "Every change request becomes a 'big build', small iteration is gone", "Your vendor still recommends fine-tuning for problems frontier models now solve out of the box", "The team that built the product is no longer the team working on it"] },
      { type: "h2", text: "Why AI vendor lock-in is different" },
      { type: "p", text: "In a traditional codebase, lock-in is the code itself. In an AI product, lock-in is the eval dataset, the prompt history, and the institutional knowledge of which model versions behave well. A vendor that hasn't invested in those artefacts has, intentionally or not, built a product the client cannot move." },
      { type: "callout", text: "If your vendor can't hand you a runnable eval suite this week, you don't own your AI product. They do." },
      { type: "h2", text: "The transition playbook" },
      { type: "p", text: "We've inherited enough handovers to know what works. Phase the switch: a 4-week parallel discovery, an 8-week stabilisation phase where the new team owns evals while the old team owns deploys, then a clean cut. Skipping the parallel phase is the most common mistake, it's where the new team builds confidence in the system." },
      { type: "h2", text: "What you need to ask of the new partner" },
      { type: "bullets", items: ["Show me the eval harness you'd build for this product on day one", "Show me a prompt diff and explain how you'd review it in PR", "Tell me which of my fine-tunes you'd retire and which you'd keep, and why", "Walk me through your handover plan for the moment I leave you", "Show me a customer you handed over to a third party, and how that went"] },
      { type: "h2", text: "What a clean transition looks like" },
      { type: "p", text: "A clean transition is one where the eval pass-rate doesn't dip, the cost-per-query doesn't spike, and the team you replace remains professional throughout. We've been on both sides of this, and we know the second one is the harder test of a vendor's character." },
    ],
  },
  {
    slug: "ai-engineering-outstaffing",
    cat: "Strategy",
    title: "AI engineering outstaffing, done properly",
    subtitle: "Cost is not the headline. Velocity, ownership, and AI fluency are. How we set up nearshore AI pods that actually ship.",
    date: "Dec 04, 2025",
    read: "7 min read",
    author: { name: "Daniela Cazac", role: "Business Development Manager", initial: "D", photo: "/project/uploads/authors/daniela-cazac.jpg" },
    cover: "health",
    illus: "org_tree",
    body: [
      { type: "lead", text: "Outstaffing has a reputation problem because most of it is staff augmentation in a hoodie, bodies billed by the hour, with little ownership and less judgement. AI engineering outstaffing only works when the model is different: senior-led pods, eval ownership, and a velocity that justifies the rate." },
      { type: "h2", text: "What 'outstaffing done properly' actually means" },
      { type: "p", text: "Properly run outstaffing is a long-running engineering pod, embedded in the client's product, owning a defined surface end-to-end. The pod is senior-led, eval-literate, and accountable for outcomes, not seat hours. It plugs into the client's planning rhythm, not a separate vendor backlog." },
      { type: "h2", text: "Why AI work demands more than bodies" },
      { type: "p", text: "Pure staff augmentation breaks on AI projects because the work needs continuity. The same engineer who shipped the eval harness needs to own its evolution; the same engineer who chose the retrieval design needs to defend it under load. Bodies billed by the hour churn, and the institutional memory leaves with them." },
      { type: "callout", text: "An outstaffed AI pod that loses two engineers in a quarter is a pod the client will fire by year-end. Continuity isn't a perk, it's the product." },
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
    title: "Lessons from London Tech Week: an AI-first lens",
    subtitle: "What we heard about agentic workflows, evaluation, and AI go-to-market, and what we're betting on next.",
    date: "Nov 20, 2025",
    read: "5 min read",
    author: { name: "Nicu Mardari", role: "CEO", initial: "N", photo: "/project/uploads/authors/nicu-mardari.jpg" },
    cover: "ops",
    illus: "conf_skyline",
    body: [
      { type: "lead", text: "We spent three days at London Tech Week with a single filter on every conversation: what's actually shipping in production AI, and what's still keynote theatre? Here are the patterns we walked away with, and the bets we're making in 2026 because of them." },
      { type: "h2", text: "Agents are eating workflows, not jobs" },
      { type: "p", text: "Every credible production AI story we heard was about agents absorbing workflows, supplier follow-ups, KYC reviews, contract redlining, not replacing a job description. The teams winning are the ones with a precise definition of the workflow, not the ones with the boldest vision of the role." },
      { type: "h2", text: "Evaluation is the moat, again" },
      { type: "p", text: "Two years in, the moat in AI products isn't the model. It's the eval suite. The teams shipping confidently have a golden dataset, a scoring rubric, and a discipline of running evals on every prompt change. The teams not shipping have demos and a backlog of complaints from sales." },
      { type: "callout", text: "If a team can't show me their eval set, I assume they don't have one. They almost never do." },
      { type: "h2", text: "Cost discipline is back in style" },
      { type: "p", text: "Token costs got a lot of conference time. The credible operators talked about retrieval caching, smaller models for routine traffic, and per-tenant budget guardrails. The talkers talked about scaling laws. The doers were doing finance." },
      { type: "h2", text: "Three bets we're making in 2026" },
      { type: "bullets", items: ["Agentic workflows for back-office operations, manufacturing, logistics, finance, will be the highest-volume AI deployment of the year", "Eval tooling will become the most important software category nobody is talking about", "The market will reward AI partners who can ship end-to-end, strategy, design, engineering, ops, far more than partners who specialise in only one of those"] },
      { type: "h2", text: "What we're not betting on" },
      { type: "p", text: "We're not betting on bespoke fine-tuned models for problems frontier models will solve in 12 months, on UI-less agent chat for users who actually wanted a button, or on conference-stage architectures that nobody has run in production. The discipline is not new, it's just being tested by a new generation of tools." },
    ],
  },

  // ── Transferred from 7code.tech ──────────────────────────────
  {
    slug: "why-mvp-first",
    cat: "Strategy",
    title: "Why MVP first? The case for minimum viable products",
    subtitle: "Starting lean, learning fast, and building what users actually need, the MVP approach is the most efficient path from idea to product-market fit.",
    date: "Dec 11, 2023",
    read: "5 min read",
    author: { name: "Daniela Cazac", role: "Business Development Manager", initial: "D", photo: "/project/uploads/authors/daniela-cazac.jpg" },
    cover: "cyan",
    illus: "stacked_layers",
    body: [
      { type: "lead", text: "The most common mistake in software product development is building too much before you know what users actually want. The MVP, Minimum Viable Product, approach solves this by putting the smallest version of your product in front of real users as quickly as possible, generating validated learning before significant investment is committed." },
      { type: "h2", text: "What an MVP actually is" },
      { type: "p", text: "An MVP is not a half-finished product or a prototype. It is the smallest version of a product that delivers genuine value to a defined user, while generating the maximum learning about whether to build more. The key word is 'viable', it has to work well enough for a real user to get a real job done." },
      { type: "h2", text: "The advantages of going MVP first" },
      { type: "bullets", items: [
        "Validated learning: real user data tells you what works and what doesn't before you over-invest",
        "Cost efficiency: reduced initial investment keeps options open and preserves runway",
        "Adaptability: without a huge feature set to maintain, pivots are cheaper and faster",
        "User-centric development: every feature after the MVP is shaped by what users genuinely want, not what seemed good on a whiteboard",
        "Faster time to market: a lean product ships sooner, capturing early adopters and feedback simultaneously",
      ]},
      { type: "h2", text: "Validated learning beats elaborate roadmaps" },
      { type: "p", text: "One of the most significant advantages of an MVP is the opportunity it provides for validated learning. By introducing the product to real users early in the process, companies gather critical data on what works and what doesn't. This replaces assumptions, which are always wrong in some dimension, with evidence." },
      { type: "callout", text: "The cost of being wrong for six weeks is recoverable. The cost of being wrong for six months is not." },
      { type: "h2", text: "When to expand beyond the MVP" },
      { type: "p", text: "Expand the MVP when you have evidence, not just enthusiasm, that a specific addition will measurably improve retention, conversion, or activation. Features built after validated learning compound; features built from gut feeling mostly create maintenance debt." },
      { type: "h2", text: "7Code's approach to MVPs" },
      { type: "p", text: "We design our MVP engagements around a 6–8 week delivery window with a clearly defined success metric agreed before a line of code is written. The MVP ships; we measure; then we decide together what to build next. This gives our clients the fastest possible path to real market feedback, and the clearest possible foundation for the roadmap that follows." },
    ],
  },
  {
    slug: "cms-wordpress-vs-custom-development",
    cat: "Engineering",
    title: "WordPress vs. custom development: how to choose",
    subtitle: "WordPress can launch a web presence in days. Custom development can build a competitive moat that lasts years. Here's how to decide which one your business actually needs.",
    date: "Oct 11, 2023",
    read: "6 min read",
    author: { name: "Daniela Cazac", role: "Business Development Manager", initial: "D", photo: "/project/uploads/authors/daniela-cazac.jpg" },
    cover: "finance",
    illus: "two_columns",
    body: [
      { type: "lead", text: "WordPress powers over 40% of the web, and for good reason. It is fast to deploy, has a vast ecosystem of themes and plugins, and requires no custom engineering for standard use cases. But when a business outgrows standard, WordPress becomes a ceiling. The question is: when does custom development become the right investment?" },
      { type: "h2", text: "Where WordPress wins" },
      { type: "p", text: "WordPress is ideal for startups with tight budgets, companies needing a quick web presence, and businesses whose needs map cleanly onto existing templates and plugins. The speed of deployment and the breadth of available tools make it an outstanding choice for content-driven sites, marketing pages, and businesses that don't need a unique product surface." },
      { type: "h2", text: "Where custom development wins" },
      { type: "bullets", items: [
        "Unique identity: bespoke UI and UX that cannot be replicated with a theme or plugin",
        "Performance: custom code is built for a specific purpose, optimised for the exact use case, no plugin bloat",
        "Security: custom-built applications can implement rigorous, application-specific security standards rather than relying on a platform with known plugin vulnerabilities",
        "Scalability: custom architecture scales to the business's actual requirements, not the limits of a CMS",
        "Integration: seamless connection to proprietary systems, APIs, and data pipelines that no plugin supports out of the box",
      ]},
      { type: "h2", text: "The hidden cost of switching later" },
      { type: "p", text: "One of the most common mistakes we see is starting with WordPress and migrating to custom development after the business has grown. Migrating an established CMS-driven site to a custom architecture, with live users, SEO equity, and integration dependencies, is expensive and risky. If you know your product will eventually need custom capabilities, starting custom is often cheaper in total." },
      { type: "callout", text: "The right tool depends on your trajectory. If you're building a business that will outgrow standard, build for where you're going, not where you are today." },
      { type: "h2", text: "Making the choice" },
      { type: "p", text: "The choice requires an honest assessment of your specific needs, your budget, and your long-term goals. WordPress for speed and standard requirements; custom for unique identity, unparalleled performance, seamless integration, and the ability to build a proprietary product surface that competitors cannot replicate with a theme." },
    ],
  },
  {
    slug: "osai-revolutionising-ai-interactions",
    cat: "Case Study",
    title: "Osai: revolutionising AI interactions with 7Code",
    subtitle: "How we built Osai, a prompt-sharing platform that unlocks collective intelligence across teams working with GPT-4, Midjourney, and DALL-E.",
    date: "Oct 11, 2023",
    read: "5 min read",
    author: { name: "Daniela Cazac", role: "Business Development Manager", initial: "D", photo: "/project/uploads/authors/daniela-cazac.jpg" },
    cover: "health",
    illus: "brain_neural",
    body: [
      { type: "lead", text: "Large Language Models are powerful in isolation. They are transformative when teams know how to use them together, sharing the prompts that work, refining them collaboratively, and building a shared library of tested AI interactions. Osai is the platform we built to make that possible." },
      { type: "h2", text: "The problem Osai solves" },
      { type: "p", text: "Every team that uses AI tools discovers prompts that work. Most of those prompts live in individual chat histories, Slack threads, or personal notebooks, invisible to the rest of the organisation. Knowledge about what works with GPT-4, Midjourney, and DALL-E stays siloed, and teams reinvent the wheel constantly." },
      { type: "h2", text: "What Osai does" },
      { type: "bullets", items: [
        "Prompt repository: a structured, searchable library of prompts for GPT 3.5, GPT 4, Midjourney, DALL-E, and more",
        "Prompt sharing: users create, refine, and distribute prompts, turning individual insights into organisational knowledge",
        "Prompt evolution: community refinement improves prompts over time, with versioning to track what changed and why",
        "Collective intelligence: teams unlock the combined expertise of every member who has found a better way to interact with AI",
      ]},
      { type: "h2", text: "Our approach" },
      { type: "p", text: "We built Osai to be intuitive for non-technical users while giving power users the tools they need to manage prompt versioning and quality. The platform's architecture was designed to support rapid expansion to new AI models as the market evolves, so today's GPT-4 prompts sit alongside tomorrow's integrations without a rebuild." },
      { type: "callout", text: "The organisations winning with AI are not the ones with the most powerful models, they are the ones with the best institutional knowledge of how to use them." },
      { type: "h2", text: "The result" },
      { type: "p", text: "Osai exemplifies the power of AI and its ability to revolutionise interactions between humans and machines. By leveraging LLMs as collaborative tools rather than individual productivity boosters, Osai enhances the way teams and organisations collaborate, share knowledge, and solve complex problems at scale." },
    ],
  },
  {
    slug: "low-code-no-code-vs-custom-development",
    cat: "Engineering",
    title: "Low-code vs. custom development: how to choose",
    subtitle: "Low-code platforms are powerful for standard needs. Custom code is the only answer when your product demands performance, flexibility, and long-term viability.",
    date: "Oct 10, 2023",
    read: "6 min read",
    author: { name: "Daniela Cazac", role: "Business Development Manager", initial: "D", photo: "/project/uploads/authors/daniela-cazac.jpg" },
    cover: "energy",
    illus: "building_blocks",
    body: [
      { type: "lead", text: "Low-code and no-code platforms have made software development accessible to a far wider audience, and that is genuinely valuable. But the accessibility of these platforms can obscure a critical truth: they are drag-and-drop environments built around predetermined components designed for the most common use cases. When your use case is not common, you hit the ceiling fast." },
      { type: "h2", text: "What low-code / no-code does well" },
      { type: "p", text: "Low-code platforms are excellent for rapid prototyping, internal tools, and straightforward customer-facing products with standard feature requirements. They reduce time to a first working version and allow non-technical founders to validate ideas before committing to a full custom build." },
      { type: "h2", text: "Where custom development wins" },
      { type: "bullets", items: [
        "Customisation: custom code allows unlimited flexibility, accommodating unique processes, proprietary workflows, and feature requirements that no template supports",
        "Performance: built for a specific purpose, custom code can be optimised to meet exact performance benchmarks that off-the-shelf platforms cannot reach",
        "Scalability: custom architecture scales to the business, not to the platform's pricing tier or technical limits",
        "Integration: bespoke APIs and data pipelines connect seamlessly with proprietary systems",
        "Competitive moat: a custom product surface cannot be replicated by a competitor buying the same platform licence",
      ]},
      { type: "h2", text: "The hidden costs of low-code at scale" },
      { type: "p", text: "Low-code platforms may appear cheap and fast initially. But as requirements evolve, the cost of workarounds, plugin licensing, and platform-imposed constraints compounds. Migrating from a low-code platform to a custom solution later, with live users and production data, is expensive and risky. If custom is your destination, starting there is often cheaper in total." },
      { type: "callout", text: "Low-code serves a vital role in rapid prototyping. Custom development is the answer when you are building a serious business product that needs to win on performance, flexibility, and long-term viability." },
      { type: "h2", text: "Making the decision" },
      { type: "p", text: "Assess your specific needs honestly: standard requirements with a tight timeline and limited budget point toward low-code. A unique product, a performance-sensitive use case, or a long-term roadmap that demands flexibility points toward custom. The right choice is the one that serves your business goals, not the one that feels simpler today." },
    ],
  },
  {
    slug: "reducing-costs-nearshoring-outstaffing",
    cat: "Strategy",
    title: "Dev cost savings through nearshoring and outstaffing",
    subtitle: "10–30% cost savings are possible, but that is not the headline. Velocity, continuity, and access to senior talent are.",
    date: "Oct 11, 2023",
    read: "6 min read",
    author: { name: "Daniela Cazac", role: "Business Development Manager", initial: "D", photo: "/project/uploads/authors/daniela-cazac.jpg" },
    cover: "ops",
    illus: "coin_stack",
    body: [
      { type: "lead", text: "Nearshoring and outstaffing have a reputation for being cost plays. They are, but framing them only as cost strategies undersells their real value. The teams that get the most from nearshore engagement are not the ones chasing the lowest hourly rate; they are the ones using geographic flexibility to access senior talent, sustain velocity, and build long-running product teams that know the system." },
      { type: "h2", text: "Nearshoring vs outstaffing: the distinction" },
      { type: "p", text: "Nearshoring refers to outsourcing business processes or development work to companies in neighbouring or nearby countries, gaining cultural, time-zone, and language alignment alongside cost efficiency. Outstaffing involves hiring remote professionals to work on specific projects, operating as an extension of the client's team rather than a separate vendor." },
      { type: "h2", text: "The cost picture" },
      { type: "bullets", items: [
        "Companies using nearshoring or outstaffing can reduce development costs by 10–30% compared to equivalent local hiring",
        "Reduced overhead: no insurance, benefits, or employment infrastructure for external engineers",
        "Flexible allocation: scale the team based on project needs, paying only for active capacity",
        "No recruitment cost: senior engineers available immediately, without six-month hiring cycles",
      ]},
      { type: "h2", text: "Why continuity is the real headline" },
      { type: "p", text: "Pure staff augmentation breaks on serious products because the work demands continuity. The engineer who designed the retrieval layer needs to own its evolution. A pod that churns engineers every quarter loses the institutional knowledge that makes AI and complex software work, and the client pays for that loss in bugs, regressions, and rework." },
      { type: "callout", text: "Cost is the table stakes. Velocity, ownership, and the ability to sustain a long-running team that knows your product, those are the real returns on a well-run nearshore engagement." },
      { type: "h2", text: "What to look for in a nearshore partner" },
      { type: "bullets", items: [
        "Senior-led teams, not body-shop augmentation, at least one senior engineer owning architecture end-to-end",
        "Overlap hours that are real and protected, not nominal",
        "Low churn: the same engineers on the engagement from month four through month fourteen",
        "Eval and ownership accountability, the team owns outcomes, not just seat hours",
      ]},
      { type: "related-guide", href: "/compare/agency-vs-freelancer", title: "Comparing an agency to a freelancer?", desc: "Delivery speed, accountability, quality, and total cost — compared honestly." },
    ],
  },
  {
    slug: "migrating-users-auth0-python",
    cat: "Engineering",
    title: "Migrating users between Auth0 tenants in Python",
    subtitle: "A practical guide to the pitfalls, edge cases, and Python patterns for moving users from one Auth0 tenant to another, without data loss or downtime.",
    date: "Oct 25, 2023",
    read: "7 min read",
    author: { name: "Alessandro Merola", role: "CTO", initial: "A", photo: "/project/uploads/authors/alessandro-merola.jpg" },
    cover: "ink",
    illus: "data_flow_pipe",
    body: [
      { type: "lead", text: "Migrating users between Auth0 tenants is a task that sounds straightforward until you start: rate limits bite, payload sizes vary wildly across user profiles, and the window for a zero-downtime migration is narrow. This is a practical guide to the patterns and edge cases we encountered, and the Python implementation that handled them reliably." },
      { type: "h2", text: "Why tenant migration is harder than it looks" },
      { type: "p", text: "Auth0's Management API is powerful but opinionated. The export/import flow works cleanly for small tenants. At scale, thousands of users, custom metadata, linked identities, and MFA enrollments, the assumptions built into the happy path start to fail. Large payloads hit request size limits; incomplete metadata causes silent import failures; rate limiting mid-migration leaves your data in a partially migrated state." },
      { type: "h2", text: "The key challenges" },
      { type: "bullets", items: [
        "Payload size limits: user export batches exceeding Auth0's import size threshold need chunking with careful batch sizing",
        "Rate limiting: the Management API applies rate limits per tenant, naive iteration fails at scale without exponential backoff",
        "Metadata completeness: custom app_metadata and user_metadata fields must be validated and sanitised before import",
        "Linked identities: users with linked social or enterprise identities require special handling, the primary identity must be imported first",
        "MFA enrollments: authenticator enrollments cannot be migrated directly; users must be prompted to re-enrol post-migration",
      ]},
      { type: "h2", text: "The Python implementation" },
      { type: "p", text: "Our migration script used the Auth0 Python SDK with a chunked export strategy, processing users in configurable batches to stay within payload limits. Each batch included a retry loop with exponential backoff for rate-limited requests, and a structured log that recorded the import status of every user ID, making it safe to resume from any point of failure without re-importing already-migrated users." },
      { type: "callout", text: "Never run a user migration without a dry-run mode and a per-user status log. A migration that can't be safely resumed is a migration that will corrupt your data." },
      { type: "h2", text: "Validation and rollback" },
      { type: "p", text: "Before the live migration, we ran a full dry-run against a test tenant to validate payload compatibility, catch metadata issues, and measure actual throughput against the rate limits. Post-migration, we ran a reconciliation script comparing source and destination user counts, metadata checksums, and login capability, confirming zero data loss before the DNS cutover." },
      { type: "h2", text: "Key learnings" },
      { type: "bullets", items: [
        "Chunk size of 500–1,000 users per batch is a reliable starting point for most tenants",
        "Log every user migration individually, batch-level logging makes diagnosis impossible",
        "Test MFA re-enrollment UX with real users before go-live: the surprise is worse than the inconvenience",
        "Keep the source tenant read-only for 48 hours post-migration as a rollback safety net",
      ]},
    ],
  },

  // ── Transferred from medium.com/7code ────────────────────────
  {
    slug: "logistics-tech-tailored-solutions",
    cat: "Engineering",
    title: "AI-native logistics: beating the coordination tax",
    subtitle: "Generic logistics platforms cover 60% of the workflow and force teams to absorb the rest in spreadsheets. AI-native, integrated systems absorb the coordination tax and turn real-time data into faster, better operational decisions.",
    date: "Dec 10, 2023",
    read: "6 min read",
    author: { name: "Daniela Cazac", role: "Business Development Manager", initial: "D", photo: "/project/uploads/authors/daniela-cazac.jpg" },
    cover: "ops",
    illus: "truck_route",
    body: [
      { type: "lead", text: "Logistics technology is being rewritten around AI. Generic transportation software still covers the easy 60 percent of the workflow and forces operations teams to absorb the rest in spreadsheets, email, and Slack threads. AI-native logistics software, agents that ingest events, LLMs that reason over the operational corpus, and evals that keep them honest, is what's replacing it. Here are the pains we hear from logistics teams every week, and the gains a tailored, AI-first system unlocks." },
      { type: "h2", text: "What is AI-native logistics software?" },
      { type: "p", text: "AI-native logistics software is a system in which large language models, retrieval, and agentic workflows are core architectural components, not bolted-on chat. The orchestrator is an LLM with structured tool use; the memory is a retrieval layer over SOPs, supplier contracts, and historical incidents; the integration surface spans the TMS, ERP, WMS, and IoT telemetry; and every action is logged for audit and continuous evaluation." },
      { type: "h2", text: "Five pains generic logistics software creates" },
      { type: "bullets", items: [
        "Existing software dissatisfaction: commercial TMS and WMS platforms cover roughly 60% of the workflow and force costly workarounds for the other 40%",
        "Lack of seamless integration: shipping, warehouse, finance, IoT, and customer systems each hold their own version of the truth, and reconciliation eats hours per shift",
        "Generic logic that misses the industry's real shape: the edge cases that define logistics, customs, multi-modal handovers, last-mile exceptions, rarely match a vendor's defaults",
        "High maintenance costs on outdated systems: legacy stacks absorb budget that should be funding the next AI agent or operational improvement",
        "Adaptation friction when business models evolve: e-commerce, multi-modal shipping, and last-mile shifts outrun the software's flexibility within a single fiscal year",
      ]},
      { type: "h2", text: "Five gains an AI-native, tailored system unlocks" },
      { type: "bullets", items: [
        "Real-time integration across TMS, ERP, WMS, and IoT, with every system reading the same shipment, inventory, and customer state",
        "AI agents that absorb the manual coordination tax: supplier follow-ups, exception triage, and shift-handover summaries",
        "Custom logic tuned to the operations team's actual workflow, with prompts and evals owned by the client, not the vendor",
        "Better data accuracy that compounds into better forecasting, routing, and capacity decisions, measurable in fuel spend, dwell time, and on-time-in-full metrics",
        "A platform that adapts when the business model shifts, prompt and policy updates instead of multi-quarter rebuilds",
      ]},
      { type: "callout", text: "In modern logistics, the moat is not the software, it is the integrated AI layer. The teams winning this decade are the ones whose agents read every system in real time and act under a clear, audit-ready policy." },
      { type: "h2", text: "How we approach AI-native logistics builds" },
      { type: "p", text: "We start with the operations team, not the tech stack. Week one is spent mapping the actual workflow: which decisions are made, on what data, by whom, and where the data comes from. Week two designs the integration surface, the agent boundaries, and the evaluation rubric. Only then do we build. The result is a system that fits the operation, integrates with the systems of record, and adapts as the business changes." },
      { type: "h2", text: "Where to start in the next 90 days" },
      { type: "p", text: "Pick the highest-volume, lowest-risk coordination task on the operations team's plate. Supplier follow-ups, work-order reconciliation, and shift-handover summaries are typical first wins, they have clear inputs, clear outputs, and meaningful time savings. Build a thin agent that does just that workflow, instrument the eval set against real operational data, and ship in six weeks. Then expand the agent's tool surface, not the agent count." },
    ],
  },
  {
    slug: "aws-beanstalk-to-ecs-migration",
    cat: "Engineering",
    title: "AWS Beanstalk to ECS Fargate: AI-engineering recipe",
    subtitle: "AI services need a deploy story Beanstalk cannot give them. A practical recipe for moving a containerised AI workload to ECS on Fargate, with VPC, load balancer, and a GitHub Actions deploy pipeline.",
    date: "Oct 25, 2023",
    read: "8 min read",
    author: { name: "Alessandro Merola", role: "CTO", initial: "A", photo: "/project/uploads/authors/alessandro-merola.jpg" },
    cover: "energy",
    illus: "cloud_lift",
    body: [
      { type: "lead", text: "ECS on Fargate is the natural step up from AWS Elastic Beanstalk for AI engineering teams that have outgrown Beanstalk's deploy story but do not want to take on a full Kubernetes platform. Containerised LLM proxies, retrieval workers, and agent runtimes need predictable rollouts, real CI/CD, and observability that Beanstalk struggles to deliver. The migration is mechanical once the underlying primitives are in place. This is the recipe we use." },
      { type: "h2", text: "What we are aiming for" },
      { type: "bullets", items: [
        "A standard AWS infrastructure footprint: VPC, public subnets, security groups, an Application Load Balancer, and an ECS cluster",
        "A deploy pipeline that ships from a GitHub push to an ECS service update, without manual steps",
        "A publicly accessible HTTP endpoint backed by a containerised service, an AI inference worker, retrieval API, or agent runtime, running on Fargate",
        "Per-service auto-scaling and cost guardrails sized for AI workloads, where token spend and inference latency are first-class operational concerns",
      ]},
      { type: "h2", text: "What gets created" },
      { type: "p", text: "A single bash script provisions the foundation: the VPC and its subnets, the security groups, the ECR repository for the container image, the CloudWatch log group, the ECS cluster, the task definition, the service, the target group, and the Application Load Balancer with its listener. Treat the script as code, version it, review it, and run it through the same review process as the application itself." },
      { type: "h2", text: "Two things to watch" },
      { type: "bullets", items: [
        "The container port the application listens on must match the port the load balancer routes to. Mismatches here are the most common cause of healthy infrastructure with a 502 endpoint",
        "Every ARN, role, account ID, and environment value must be updated for the target environment. Leaving placeholders in production is how outages happen",
      ]},
      { type: "h2", text: "Why the task definition is the most important file" },
      { type: "p", text: "The ECS task definition declares the container image, the resource allocation (memory and CPU units), the network mode, the FARGATE launch type, the environment variables, the port mappings, and the CloudWatch log configuration. For AI services, also specify the secrets ARN for API keys, per-task token-budget environment variables, and any sidecar for observability. Version the file alongside the application code so every deploy ships infrastructure intent and application together." },
      { type: "h2", text: "The migration steps, in order" },
      { type: "bullets", items: [
        "Add a Dockerfile to the application repository if one does not already exist",
        "Provision the VPC, subnets, and security groups using the bash script (or the equivalent IaC module)",
        "Author the task definition file and store it in the application repository",
        "Run the cluster creation script to wire up the cluster, service, target groups, and load balancer",
        "Cut traffic over with a DNS swap once the new endpoint is verified, keep Beanstalk online for 48 hours as a rollback safety net",
      ]},
      { type: "h2", text: "GitHub Actions: the CI/CD pipeline for AI services" },
      { type: "p", text: "A GitHub Actions workflow handles the deploy: build the image, push to ECR, register a new task definition revision, and update the ECS service. Enable the deployment circuit breaker so a failed deploy automatically rolls back to the last healthy task definition. For AI services, add an eval-pass-rate gate before the deploy promotes, a regression on the golden dataset should fail the build the same way a unit test would." },
      { type: "callout", text: "Use the deployment circuit breaker. The two minutes it costs to enable it pay for themselves the first time a bad deploy starts auto-rolling back instead of taking your AI endpoint offline." },
      { type: "h2", text: "When to choose ECS on Fargate" },
      { type: "p", text: "ECS on Fargate is the right migration target when the team has containerised the application, wants real CI/CD without Beanstalk's restrictions, and does not need the operational depth of Kubernetes. For AI engineering teams running LLM proxies, retrieval workers, agent runtimes, or async eval pipelines, it is the cleanest middle ground. The setup takes a day, the deploy pipeline takes another, and the resulting platform scales with the product without the platform team growing alongside it." },
    ],
  },
  {
    slug: "how-to-hire-nearshore-ai-engineers",
    cat: "Operations",
    title: "How to Hire Nearshore AI Engineers: A Practical Guide for CTOs",
    subtitle: "Hiring nearshore AI engineers is faster and cheaper than most CTOs expect — if you evaluate the right signals and avoid the three most common mistakes.",
    date: "Jun 9, 2026",
    read: "8 min read",
    author: { name: "Nicu Mardari", role: "CEO", initial: "N", photo: "/project/uploads/authors/nicu-mardari.jpg" },
    cover: "ops",
    illus: "workflow",
    featured: false,
    body: [
      { type: "lead", text: "Most CTOs who've hired nearshore AI engineers for the first time say the same thing six months in: they wish they'd done it sooner. The blockers — timezone anxiety, code quality doubt, communication overhead — are real, but they're manageable with the right screening process. The ones who get it wrong usually make one of three mistakes." },
      { type: "h2", text: "Why nearshore for AI engineering specifically?" },
      { type: "p", text: "AI engineering is a specific skill set: production LLM integration, RAG pipeline design, agent orchestration, evaluation harness construction, prompt management, and MLOps. This skill set is genuinely rare in most Western European and UK markets, where the competition for a senior ML engineer from a large tech company pushes salaries up sharply in London. Cluj-Napoca, Bucharest, Warsaw, and Tallinn have graduates from the same computer science programmes, working in the same frameworks, at a lower cost (figures below)." },
      { type: "h2", text: "The three most common hiring mistakes" },
      { type: "bullets", items: [
        "Hiring on resume keywords, not verified production AI experience. 'Used OpenAI API' is not the same as building a RAG pipeline with a held-out eval set and production observability. Ask for a specific example and probe until you hit the design decisions.",
        "Optimising for cost per hour instead of cost per outcome. A £40/hr engineer who needs three iterations to deliver what a £65/hr engineer delivers in one is not cheaper. Senior AI engineers are rare; the saving is in avoiding rework, not in negotiating the day rate.",
        "Skipping the trial sprint. Every nearshore engagement should begin with a two-week paid trial on a real scoped task. If the output isn't production-quality at the end of two weeks, the fit isn't there. Replace before the relationship has inertia.",
      ]},
      { type: "h2", text: "What to evaluate in the interview" },
      { type: "p", text: "The standard LeetCode interview does not predict AI engineering quality. What predicts it: (1) walk me through a RAG system you built — chunking strategy, embedding model, retrieval design, eval results; (2) how did you measure quality before shipping? (3) what broke in production and how did you diagnose it? The answers should be specific. Vague answers about 'working with LLMs' are a signal to probe harder or move on." },
      { type: "callout", text: "The single best interview question for a nearshore AI engineer: 'Tell me about a production AI system you built, and what its eval harness looked like.' The answer reveals everything about their actual experience level." },
      { type: "h2", text: "How much does it cost to hire an AI engineer?" },
      { type: "p-html", text: "In the UK, the median advertised salary for a machine learning engineer was £70,000 in the six months to 15 September 2026, with the 90th percentile at £110,000 (<a href=\"https://www.itjobswatch.co.uk/jobs/uk/machine%20learning%20engineer.do\" target=\"_blank\" rel=\"noopener noreferrer\">ITJobsWatch</a>). Employer costs come on top. Nearshore contractors cost less per hour. <a href=\"https://lemon.io/rate-calculator/\" target=\"_blank\" rel=\"noopener noreferrer\">Lemon.io</a>'s September 2026 data puts AI specialists in Romania at about $52/hr median and in Portugal at about $53/hr. <a href=\"https://alcor.com/romanian-developers-benefits-pitfalls-rates-insights/\" target=\"_blank\" rel=\"noopener noreferrer\">Alcor</a>'s 2026 research puts a senior LLM engineer in Romania at about $8,150 a month gross. Agency rates include management and cover, so they sit above freelance rates. 7code's rate card runs from €35–40/h for mid-level engineers and €45–55/h for seniors to €60–65/h for AI architects." },
      { type: "h2", text: "Structuring the engagement" },
      { type: "bullets", items: [
        "Start with a two-week scoped trial sprint on a real task with a clear definition of done",
        "Require the engineer to join your Slack, your standups, and your sprint cadence from day one",
        "Set a 30-day ramp goal: the engineer should be unblocked on the codebase and delivering independently",
        "Use monthly rolling contracts in the first three months — mutual accountability without lock-in",
        "Document their decisions in your architecture decision records, not just in their head",
      ]},
      { type: "h2", text: "Nearshore vs outstaffing vs freelance for AI work" },
      { type: "p", text: "Nearshore typically means a team-based arrangement through an agency: matched engineers, replacement guarantees, and an account lead who handles performance. Outstaffing is a variant where the engineer is embedded directly in your team structure, reporting into your engineering management. Freelance is a direct hire with no agency intermediary. For AI work specifically, the agency or outstaffing model wins on one dimension that matters most: if the engineer isn't a fit, or if you need to scale from one to three engineers in a quarter, you can do it without restarting the recruitment process from scratch." },
      { type: "h2", text: "The best nearshore AI engineering hubs in Europe in 2026" },
      { type: "bullets", items: [
        "Cluj-Napoca, Romania: strong university base (Babeș-Bolyai), home to UiPath, Bitdefender, and a growing AI engineering ecosystem. UTC+2.",
        "Warsaw, Poland: large talent pool, growing LLM and MLOps specialisation, strong English fluency. UTC+1.",
        "Tallinn, Estonia: smaller pool but very high average seniority, EU-native, strong fintech and blockchain background expanding into AI. UTC+2.",
        "Bucharest, Romania: largest talent pool in Romania, more price-competitive than Cluj, slightly less specialised in AI natively. UTC+2.",
        "Krakow, Poland: university town with strong CS graduates, growing quickly as a nearshore hub for UK and EU clients. UTC+1.",
      ]},
      { type: "p", text: "The pattern across all of them: strong university computer science programmes, senior engineers who've worked on production AI systems at scale, and timezone overlap that makes real-time collaboration with UK and EU teams natural, not forced." },
      { type: "related-guide", href: "/compare/agency-vs-freelancer", title: "Comparing an agency to a freelancer?", desc: "Delivery speed, accountability, quality, and total cost — compared honestly." },
    ],
  },
  {
    slug: "top-nearshore-ai-development-agencies-europe",
    cat: "Strategy",
    title: "Top 5 Nearshore AI Development Agencies in Europe (2026)",
    subtitle: "A structured comparison of the leading nearshore AI engineering agencies serving UK and EU clients in 2026, based on delivery track record, team seniority, and AI specialism.",
    date: "Jul 14, 2026",
    read: "10 min read",
    author: { name: "Nicu Mardari", role: "CEO", initial: "N", photo: "/project/uploads/authors/nicu-mardari.jpg" },
    cover: "finance",
    illus: "bar",
    featured: false,
    body: [
      { type: "lead", text: "The market for nearshore AI engineering in Europe has changed significantly in the past 18 months. Agencies that were general software shops two years ago now claim AI specialisation. Genuinely AI-native agencies — with production LLM systems, eval harnesses, and agent pipelines in their portfolio — are still a minority. This comparison is based on what we can verify from public portfolios, Clutch reviews, and direct conversations with clients who've used these agencies." },
      { type: "h2", text: "What we evaluated" },
      { type: "p", text: "Disclosure: 7code publishes this list and includes itself. The scoring criteria below apply to every agency, us included." },
      { type: "bullets", items: [
        "AI specialism: do they have production LLM, RAG, and agent systems in their public portfolio, or are they generalising from web development experience?",
        "Team seniority: what's the minimum experience level for engineers on client projects? Junior-heavy teams with AI keywords are common and usually a mistake.",
        "Delivery model: fixed-scope, sprint-based, or T&M? Do they build evaluation harnesses as a default, or as an optional add-on?",
        "Client base: UK/EU companies at what stage? Regulated industries? References available?",
        "Location and timezone: real overlap with UK/EU working hours, not nominal UTC proximity.",
      ]},
      { type: "h2", text: "Top 5 nearshore AI development agencies in Europe (2026)" },
      { type: "table", head: ["Agency", "Location", "AI Specialism", "Best for", "Min project size"], rows: [
        ["7Code", "Cluj-Napoca, RO", "AI-native (LLM, RAG, agents, evals)", "AI MVPs, production copilots, agent systems", "£25k / €30k"],
        ["Selleo", "Rzeszów, PL", "AI features on top of established SaaS practice", "Scale-up product engineering with AI features", "£50k"],
        ["Software Mind", "Warsaw, PL", "Broad software + growing AI practice", "Large enterprise transformation projects", "£100k"],
        ["Boldare", "Multiple, PL", "Product design + AI integration", "Product design-led AI builds", "£75k"],
        ["Eleks", "Lviv, UA", "Deep ML/AI research background", "Data-heavy and ML-model-centric projects", "£100k"],
      ]},
      { type: "h2", text: "1. 7Code — AI-native product engineering (Cluj-Napoca, Romania)" },
      { type: "p", text: "7Code is built specifically for AI-native product engineering: LLM integrations, RAG pipelines, multi-step agents, and the evaluation harnesses that make them reliable in production. Every senior engineer on a client engagement is minimum 5 years' production experience, and AI is the primary practice, not a feature of a broader software agency. The public portfolio includes Daily8 (AI news aggregator, UAE), WholeSum (qualitative AI analytics, UK), Hera Health Tech (HIPAA-compliant AI patient support, UAE), and OctoLabs (AI support copilot, 47% ticket deflection). AI MVPs ship in six weeks. Clutch rating: 5.0." },
      { type: "h2", text: "2. Selleo — product engineering with AI features (Rzeszów, Poland)" },
      { type: "p", text: "Selleo is a well-established product engineering agency with a growing AI practice. Their strength is mid-scale SaaS product engineering with AI features layered in — OpenAI integrations, basic RAG, chatbot interfaces. Less suited to complex agent systems or regulated-industry AI. Strong Clutch presence, good client retention record. Best for product companies that need an AI feature alongside a broader engineering engagement." },
      { type: "h2", text: "3. Software Mind — enterprise software with AI adoption (Warsaw, Poland)" },
      { type: "p", text: "Software Mind is one of Poland's larger engineering agencies. Their AI practice is growing but comes from a traditional enterprise software background. Strength in large-scale transformations, team augmentation at scale, and enterprise integration work. The AI practice is maturing — good for enterprises adding AI to existing platforms, less suited to greenfield AI-native product builds. Minimum project sizes tend to be higher." },
      { type: "h2", text: "4. Boldare — design-led product engineering with AI (Poland, multiple offices)" },
      { type: "p", text: "Boldare's differentiator is product design: they run extensive discovery and prototyping phases before engineering. Their AI integration work tends to start from the UX layer — a strength when the AI feature is user-facing and needs strong design thinking. Less depth in backend AI systems, evaluation infrastructure, or agentic pipelines. Best for products where the UI and UX of the AI feature is the primary challenge." },
      { type: "h2", text: "5. Eleks — ML research heritage with engineering delivery (Lviv, Ukraine)" },
      { type: "p", text: "Eleks has deep roots in data science and ML research, which gives them genuine depth in model selection, fine-tuning, and data engineering. Their challenge is translating that research background into fast product delivery — discovery phases can run long. Best suited to data-heavy projects where the underlying ML architecture is the primary challenge, rather than product velocity or LLM application development." },
      { type: "h2", text: "How do you choose a nearshore AI development agency?" },
      { type: "p", text: "Check four things. First, production AI work you can see: LLM, RAG or agent systems live with real users, not demos. Second, senior engineers on your project, not juniors with copilots. Third, a delivery model that fits your scope, fixed price or time and materials. Fourth, clients like you in the UK or EU. Time zone and GDPR come after that." },
      { type: "p", text: "The right agency depends on what you're actually building. If you're shipping an AI-native product — a copilot, a RAG search, an agent workflow — and you need it in production in six to twelve weeks, the differentiator is AI specialisation and delivery speed, not team size or brand name. If you're adding AI features to a large enterprise system with complex governance, a larger agency with enterprise delivery experience may be a better fit than a specialist AI shop." },
      { type: "callout", text: "Before shortlisting any agency: ask for a specific production AI system in their portfolio, ask what its evaluation harness looked like, and ask for a client reference from a regulated industry if that's relevant to your build. The answers tell you everything." },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────
// Cover colours + illustration system
// ─────────────────────────────────────────────────────────────────
const COVER_COLORS = {
  ink:     { bg: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)", fg: "#5B21B6", accent: "#F97316" },
  cyan:    { bg: "linear-gradient(135deg, #ECFEFF 0%, #CFFAFE 100%)", fg: "#0E7490", accent: "#7C3AED" },
  finance: { bg: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)", fg: "#1E40AF", accent: "#F59E0B" },
  energy:  { bg: "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)", fg: "#92400E", accent: "#2563EB" },
  ops:     { bg: "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)", fg: "#166534", accent: "#F97316" },
  health:  { bg: "linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)", fg: "#075985", accent: "#8B5CF6" },
  defence: { bg: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)", fg: "#1E293B", accent: "#06B6D4" },
};

// Topic-specific SVG illustrations, rendered on top of the gradient
const ILLUSTRATIONS = {
  // Radar sweep → strategy / discovery
  radar: ({ fg }) => (
    <>
      {[70,130,190,250].map((r,i) => (
        <circle key={"rr"+i} cx={360} cy={260} r={r} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.4-i*0.07}/>
      ))}
      <line x1={360} y1={260} x2={590} y2={105} stroke={fg} strokeWidth={2.5} opacity={0.75}/>
      <path d="M360,260 L590,105 A250,250 0 0,0 500,490" fill={fg} opacity={0.09}/>
      {[[430,150],[540,200],[590,310],[470,355],[340,420]].map(([x,y],i) => (
        <g key={"rp"+i}>
          <circle cx={x} cy={y} r={6} fill={fg} opacity={0.55+i*0.08}/>
          <circle cx={x} cy={y} r={16} fill="none" stroke={fg} strokeWidth={1} opacity={0.28}/>
        </g>
      ))}
      <circle cx={360} cy={260} r={12} fill={fg} opacity={0.45}/>
      <circle cx={360} cy={260} r={5} fill={fg} opacity={0.9}/>
    </>
  ),

  // Rocket + arc → ship / launch
  rocket_arc: ({ fg }) => (
    <>
      <path d="M100,430 C250,430 480,290 680,80" fill="none" stroke={fg} strokeWidth={2} strokeDasharray="10 6" opacity={0.55}/>
      {[[150,418],[275,375],[410,295],[545,195],[660,108]].map(([x,y],i) => (
        <circle key={"rm"+i} cx={x} cy={y} r={4+i} fill={fg} opacity={0.22+i*0.12}/>
      ))}
      <g transform="translate(680,80) rotate(-42)">
        <ellipse cx={0} cy={0} rx={18} ry={40} fill="none" stroke={fg} strokeWidth={2.5} opacity={0.85}/>
        <ellipse cx={0} cy={-15} rx={8} ry={12} fill={fg} opacity={0.35}/>
        <path d="M-18,25 L-32,48 L-18,36 Z" fill={fg} opacity={0.65}/>
        <path d="M18,25 L32,48 L18,36 Z" fill={fg} opacity={0.65}/>
        <circle cx={0} cy={-15} r={4} fill={fg} opacity={0.75}/>
      </g>
    </>
  ),

  // Balance scale → pricing / comparison
  balance_scale: ({ fg }) => (
    <>
      <line x1={400} y1={110} x2={400} y2={380} stroke={fg} strokeWidth={2.5} opacity={0.7}/>
      <circle cx={400} cy={110} r={10} fill={fg} opacity={0.7}/>
      <line x1={170} y1={205} x2={630} y2={180} stroke={fg} strokeWidth={2.5} opacity={0.65}/>
      <line x1={170} y1={205} x2={195} y2={315} stroke={fg} strokeWidth={1.5} opacity={0.6}/>
      <line x1={630} y1={180} x2={608} y2={290} stroke={fg} strokeWidth={1.5} opacity={0.6}/>
      <ellipse cx={195} cy={328} rx={70} ry={22} fill="none" stroke={fg} strokeWidth={2} opacity={0.7}/>
      <rect x={130} y={306} width={130} height={30} rx={4} fill={fg} opacity={0.14}/>
      <ellipse cx={608} cy={302} rx={70} ry={22} fill="none" stroke={fg} strokeWidth={2} opacity={0.7}/>
      <rect x={543} y={280} width={130} height={30} rx={4} fill={fg} opacity={0.09}/>
      {[155,178].map((y,i) => <circle key={"bc"+i} cx={195} cy={y} r={8} fill={fg} opacity={0.5}/>)}
      <circle cx={608} cy={162} r={8} fill={fg} opacity={0.5}/>
    </>
  ),

  // Robot arm + neural node → manufacturing AI
  robot_arm: ({ fg }) => (
    <>
      <rect x={75} y={285} width={65} height={155} rx={6} fill="none" stroke={fg} strokeWidth={2} opacity={0.6}/>
      <rect x={95} y={305} width={22} height={14} rx={2} fill={fg} opacity={0.38}/>
      <line x1={108} y1={285} x2={108} y2={235} stroke={fg} strokeWidth={10} strokeLinecap="round" opacity={0.55}/>
      <line x1={108} y1={235} x2={205} y2={175} stroke={fg} strokeWidth={8} strokeLinecap="round" opacity={0.5}/>
      <line x1={205} y1={175} x2={335} y2={195} stroke={fg} strokeWidth={6} strokeLinecap="round" opacity={0.45}/>
      <g transform="translate(335,195)">
        <circle r={22} fill="none" stroke={fg} strokeWidth={2} opacity={0.72}/>
        <line x1={-14} y1={0} x2={14} y2={0} stroke={fg} strokeWidth={2} opacity={0.72}/>
        <line x1={0} y1={-14} x2={0} y2={14} stroke={fg} strokeWidth={2} opacity={0.72}/>
      </g>
      <circle cx={510} cy={175} r={72} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.5}/>
      {[0,60,120,180,240,300].map((deg,i) => {
        const r=57,x=510+r*Math.cos(deg*Math.PI/180),y=175+r*Math.sin(deg*Math.PI/180);
        return <circle key={"na"+i} cx={x} cy={y} r={6} fill={fg} opacity={0.65}/>;
      })}
      <circle cx={510} cy={175} r={18} fill={fg} opacity={0.3}/>
      <circle cx={510} cy={175} r={8} fill={fg} opacity={0.75}/>
      <path d="M335,195 L510,175" fill="none" stroke={fg} strokeWidth={1.5} strokeDasharray="6 4" opacity={0.45}/>
    </>
  ),

  // Node mesh → automation / integration
  mesh_net: ({ fg }) => (
    <>
      {[
        [140,120],[320,80],[520,110],[700,90],
        [80,260],[250,230],[440,270],[620,240],[745,268],
        [160,390],[380,360],[580,390],[720,378],
      ].map(([x,y],i) => (
        <g key={"mn"+i}>
          <circle cx={x} cy={y} r={i<4?14:i<9?11:9} fill={fg} opacity={0.2}/>
          <circle cx={x} cy={y} r={i<4?6:i<9?5:4} fill={fg} opacity={0.7}/>
        </g>
      ))}
      {[
        [[140,120],[320,80]],[[320,80],[520,110]],[[520,110],[700,90]],
        [[80,260],[250,230]],[[250,230],[440,270]],[[440,270],[620,240]],[[620,240],[745,268]],
        [[160,390],[380,360]],[[380,360],[580,390]],[[580,390],[720,378]],
        [[140,120],[80,260]],[[320,80],[250,230]],[[520,110],[440,270]],[[700,90],[620,240]],
        [[80,260],[160,390]],[[250,230],[380,360]],[[440,270],[580,390]],[[620,240],[720,378]],
        [[250,230],[160,390]],[[440,270],[380,360]],
      ].map(([[x1,y1],[x2,y2]],i) => (
        <line key={"ml"+i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={fg} strokeWidth={1} opacity={0.3}/>
      ))}
    </>
  ),

  // Debug loop pipeline → debugging case study
  loop_debug: ({ fg }) => (
    <>
      <circle cx={400} cy={240} r={165} fill="none" stroke={fg} strokeWidth={2} strokeDasharray="22 8" opacity={0.55}/>
      <circle cx={400} cy={240} r={105} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.3}/>
      {[0,72,144,216,288].map((deg,i) => {
        const rad=(deg-90)*Math.PI/180, x=400+165*Math.cos(rad), y=240+165*Math.sin(rad);
        return (
          <g key={"ld"+i}>
            <rect x={x-32} y={y-14} width={64} height={28} rx={6} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.6}/>
            <circle cx={x} cy={y} r={5} fill={fg} opacity={0.75}/>
          </g>
        );
      })}
      <circle cx={400} cy={240} r={24} fill="none" stroke={fg} strokeWidth={2} opacity={0.65}/>
      <circle cx={400} cy={240} r={9} fill={fg} opacity={0.8}/>
      <path d="M543,148 L558,133" stroke={fg} strokeWidth={2} opacity={0.65}/>
      <polygon points="562,128 570,148 550,142" fill={fg} opacity={0.65}/>
    </>
  ),

  // Lever + fulcrum → engineer leverage
  lever_fulcrum: ({ fg }) => (
    <>
      <line x1={110} y1={340} x2={680} y2={178} stroke={fg} strokeWidth={4} strokeLinecap="round" opacity={0.68}/>
      <polygon points="378,258 400,312 356,312" fill={fg} opacity={0.65}/>
      <line x1={338} y1={312} x2={418} y2={312} stroke={fg} strokeWidth={3} opacity={0.55}/>
      <circle cx={110} cy={340} r={30} fill="none" stroke={fg} strokeWidth={2} opacity={0.5}/>
      <circle cx={110} cy={340} r={8} fill={fg} opacity={0.55}/>
      <rect x={620} y={108} width={90} height={58} rx={6} fill="none" stroke={fg} strokeWidth={2} opacity={0.65}/>
      <line x1={635} y1={124} x2={695} y2={124} stroke={fg} strokeWidth={1.5} opacity={0.55}/>
      <line x1={635} y1={137} x2={685} y2={137} stroke={fg} strokeWidth={1.5} opacity={0.55}/>
      <line x1={635} y1={150} x2={690} y2={150} stroke={fg} strokeWidth={1.5} opacity={0.55}/>
      {[0,1,2,3].map(i => (
        <line key={"la"+i} x1={648} y1={88} x2={648+(i+1)*18} y2={88-(i+1)*15} stroke={fg} strokeWidth={1} opacity={0.35}/>
      ))}
    </>
  ),

  // Document handoff arc → project handover
  handover_docs: ({ fg }) => (
    <>
      <rect x={75} y={150} width={185} height={240} rx={8} fill="none" stroke={fg} strokeWidth={2} opacity={0.6}/>
      {[185,210,235,260,285,310].map((y,i) => (
        <line key={"hd"+i} x1={100} y1={y} x2={235} y2={y} stroke={fg} strokeWidth={1.5} opacity={0.38}/>
      ))}
      <circle cx={140} cy={164} r={9} fill={fg} opacity={0.55}/>
      <rect x={540} y={120} width={185} height={240} rx={8} fill="none" stroke={fg} strokeWidth={2} opacity={0.6}/>
      {[155,180,205,230,255,280].map((y,i) => (
        <line key={"hr"+i} x1={565} y1={y} x2={700} y2={y} stroke={fg} strokeWidth={1.5} opacity={0.38}/>
      ))}
      <circle cx={688} cy={134} r={9} fill={fg} opacity={0.55}/>
      <path d="M265,265 C345,220 465,200 540,232" fill="none" stroke={fg} strokeWidth={2.5} strokeDasharray="10 5" opacity={0.65}/>
      <polygon points="540,222 558,232 536,245" fill={fg} opacity={0.7}/>
      <circle cx={400} cy={242} r={22} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.45}/>
      <line x1={388} y1={242} x2={412} y2={242} stroke={fg} strokeWidth={2} opacity={0.6}/>
      <line x1={400} y1={230} x2={400} y2={254} stroke={fg} strokeWidth={2} opacity={0.6}/>
    </>
  ),

  // Globe grid + pins → global engineering pods
  world_grid: ({ fg }) => (
    <>
      <ellipse cx={400} cy={240} rx={220} ry={220} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.5}/>
      {[-130,-65,0,65,130].map((dy,i) => {
        const rx=Math.sqrt(Math.max(0,220*220-dy*dy));
        return <ellipse key={"wg"+i} cx={400} cy={240+dy} rx={rx} ry={rx*0.3} fill="none" stroke={fg} strokeWidth={1} opacity={0.35}/>;
      })}
      {[-0.8,-0.4,0,0.4,0.8].map((f,i) => (
        <ellipse key={"wm"+i} cx={400} cy={240} rx={Math.abs(Math.sin(f*1.5))*220+5} ry={220} fill="none" stroke={fg} strokeWidth={1} opacity={0.32}/>
      ))}
      {[[320,165],[480,148],[248,285],[562,295],[412,345],[340,228]].map(([x,y],i) => (
        <g key={"wp"+i}>
          <circle cx={x} cy={y} r={8} fill={fg} opacity={0.65}/>
          <line x1={x} y1={y} x2={x} y2={y-26} stroke={fg} strokeWidth={1.5} opacity={0.55}/>
          <circle cx={x} cy={y-26} r={4} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.5}/>
        </g>
      ))}
      <path d="M320,165 Q400,132 480,148" fill="none" stroke={fg} strokeWidth={1.5} strokeDasharray="6 4" opacity={0.5}/>
      <path d="M248,285 Q400,248 562,295" fill="none" stroke={fg} strokeWidth={1.5} strokeDasharray="6 4" opacity={0.5}/>
    </>
  ),

  // Branching path → switching / pivot
  fork_path: ({ fg }) => (
    <>
      <line x1={100} y1={240} x2={375} y2={240} stroke={fg} strokeWidth={3} opacity={0.7}/>
      <circle cx={375} cy={240} r={15} fill={fg} opacity={0.4}/>
      <circle cx={375} cy={240} r={6} fill={fg} opacity={0.85}/>
      <line x1={375} y1={240} x2={645} y2={118} stroke={fg} strokeWidth={3} opacity={0.7}/>
      <line x1={375} y1={240} x2={645} y2={362} stroke={fg} strokeWidth={1.5} strokeDasharray="8 5" opacity={0.38}/>
      <rect x={645} y={88} width={105} height={60} rx={8} fill="none" stroke={fg} strokeWidth={2} opacity={0.7}/>
      <circle cx={666} cy={118} r={6} fill={fg} opacity={0.6}/>
      <line x1={678} y1={112} x2={730} y2={112} stroke={fg} strokeWidth={1.5} opacity={0.5}/>
      <line x1={678} y1={126} x2={718} y2={126} stroke={fg} strokeWidth={1.5} opacity={0.5}/>
      <rect x={645} y={332} width={105} height={60} rx={8} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.38}/>
      <line x1={665} y1={352} x2={725} y2={352} stroke={fg} strokeWidth={1} opacity={0.28}/>
      <line x1={665} y1={366} x2={705} y2={366} stroke={fg} strokeWidth={1} opacity={0.28}/>
      <polygon points="641,112 653,104 653,120" fill={fg} opacity={0.7}/>
      <polygon points="641,358 653,350 653,366" fill={fg} opacity={0.38}/>
    </>
  ),

  // Org tree hierarchy → outstaffing / team
  org_tree: ({ fg }) => (
    <>
      <rect x={340} y={58} width={120} height={52} rx={6} fill="none" stroke={fg} strokeWidth={2} opacity={0.68}/>
      <circle cx={400} cy={84} r={10} fill={fg} opacity={0.55}/>
      <line x1={400} y1={110} x2={400} y2={155} stroke={fg} strokeWidth={1.5} opacity={0.58}/>
      <line x1={160} y1={155} x2={640} y2={155} stroke={fg} strokeWidth={1.5} opacity={0.48}/>
      {[160,400,640].map((x,i) => (
        <g key={"ot"+i}>
          <line x1={x} y1={155} x2={x} y2={195} stroke={fg} strokeWidth={1.5} opacity={0.48}/>
          <rect x={x-62} y={195} width={124} height={52} rx={6} fill="none" stroke={fg} strokeWidth={2} opacity={0.62}/>
          <circle cx={x} cy={221} r={9} fill={fg} opacity={0.5}/>
        </g>
      ))}
      <line x1={160} y1={247} x2={160} y2={292} stroke={fg} strokeWidth={1.5} opacity={0.38}/>
      <line x1={100} y1={292} x2={220} y2={292} stroke={fg} strokeWidth={1.5} opacity={0.32}/>
      {[100,220].map((x,i) => (
        <g key={"ob"+i}>
          <line x1={x} y1={292} x2={x} y2={328} stroke={fg} strokeWidth={1.5} opacity={0.32}/>
          <rect x={x-42} y={328} width={84} height={40} rx={5} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.48}/>
        </g>
      ))}
      <line x1={640} y1={247} x2={640} y2={292} stroke={fg} strokeWidth={1.5} opacity={0.38}/>
      <line x1={580} y1={292} x2={700} y2={292} stroke={fg} strokeWidth={1.5} opacity={0.32}/>
      {[580,700].map((x,i) => (
        <g key={"oc"+i}>
          <line x1={x} y1={292} x2={x} y2={328} stroke={fg} strokeWidth={1.5} opacity={0.32}/>
          <rect x={x-42} y={328} width={84} height={40} rx={5} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.48}/>
        </g>
      ))}
    </>
  ),

  // City skyline + speech bubble → conference / events
  conf_skyline: ({ fg }) => (
    <>
      {[
        {x:58,y:335,w:55,h:145},{x:123,y:295,w:48,h:185},{x:181,y:255,w:78,h:225},
        {x:269,y:318,w:56,h:162},{x:335,y:235,w:68,h:245},{x:413,y:278,w:54,h:202},
        {x:477,y:258,w:88,h:222},{x:575,y:298,w:62,h:182},{x:647,y:338,w:68,h:142},
      ].map(({x,y,w,h},i) => (
        <g key={"cs"+i}>
          <rect x={x} y={y} width={w} height={h} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.42+i%3*0.09}/>
          {Array.from({length:Math.floor(h/28)}).map((_,j) => (
            <rect key={"cw"+j} x={x+8} y={y+10+j*28} width={10} height={10} fill={fg} opacity={0.16}/>
          ))}
        </g>
      ))}
      <ellipse cx={400} cy={100} rx={92} ry={58} fill="none" stroke={fg} strokeWidth={2} opacity={0.5}/>
      <path d="M380,158 L370,185 L395,162" fill={fg} opacity={0.45}/>
      {[360,400,440].map((x,i) => <circle key={"cn"+i} cx={x} cy={100} r={5} fill={fg} opacity={0.55}/>)}
    </>
  ),

  // Magnifying glass over code → debugging
  magnify_code: ({ fg }) => (
    <>
      {[118,152,186,220,254,288,322].map((y,i) => (
        <line key={"mc"+i} x1={78} y1={y} x2={375+i*8} y2={y} stroke={fg} strokeWidth={1.5} opacity={0.32+i%3*0.09}/>
      ))}
      {[78,120,162].map((x,i) => (
        <line key={"mi"+i} x1={x} y1={118} x2={x} y2={322} stroke={fg} strokeWidth={1} opacity={0.22}/>
      ))}
      <circle cx={562} cy={255} r={142} fill="none" stroke={fg} strokeWidth={3} opacity={0.68}/>
      <circle cx={562} cy={255} r={120} fill={fg} opacity={0.05}/>
      {[198,228,258,288,318].map((y,i) => (
        <line key={"ml2"+i} x1={440} y1={y} x2={684} y2={y} stroke={fg} strokeWidth={2} opacity={0.42+i%2*0.16}/>
      ))}
      <line x1={672} y1={367} x2={744} y2={438} stroke={fg} strokeWidth={6} strokeLinecap="round" opacity={0.65}/>
      <line x1={682} y1={377} x2={754} y2={448} stroke={fg} strokeWidth={3} strokeLinecap="round" opacity={0.42}/>
    </>
  ),

  // Stacked layers → MVP stack
  stacked_layers: ({ fg }) => (
    <>
      {[
        {y:368,w:500},{y:302,w:440},{y:236,w:380},{y:170,w:318},{y:104,w:256},
      ].map(({y,w},i) => {
        const x=400-w/2;
        return (
          <g key={"sl"+i}>
            <rect x={x} y={y} width={w} height={50} rx={6} fill="none" stroke={fg} strokeWidth={2} opacity={0.5+i*0.09}/>
            <rect x={x} y={y} width={w} height={50} rx={6} fill={fg} opacity={0.05+i*0.025}/>
            {[...Array(Math.floor(w/32))].map((_,j) => (
              <line key={"sv"+j} x1={x+26+j*32} y1={y+10} x2={x+26+j*32} y2={y+40} stroke={fg} strokeWidth={0.5} opacity={0.18}/>
            ))}
          </g>
        );
      })}
    </>
  ),

  // Relay baton → seamless handover
  relay_baton: ({ fg }) => (
    <>
      <path d="M90,348 C200,348 250,198 355,198 C460,198 510,348 620,348" fill="none" stroke={fg} strokeWidth={1.5} strokeDasharray="8 5" opacity={0.38}/>
      <circle cx={195} cy={308} r={30} fill="none" stroke={fg} strokeWidth={2} opacity={0.58}/>
      <circle cx={195} cy={308} r={11} fill={fg} opacity={0.5}/>
      <circle cx={605} cy={308} r={30} fill="none" stroke={fg} strokeWidth={2} opacity={0.58}/>
      <circle cx={605} cy={308} r={11} fill={fg} opacity={0.5}/>
      <rect x={338} y={214} width={124} height={32} rx={16} fill="none" stroke={fg} strokeWidth={2.5} opacity={0.75}/>
      <rect x={348} y={219} width={104} height={22} rx={11} fill={fg} opacity={0.22}/>
      <line x1={225} y1={308} x2={338} y2={230} stroke={fg} strokeWidth={1.5} strokeDasharray="6 4" opacity={0.5}/>
      <line x1={462} y1={230} x2={575} y2={308} stroke={fg} strokeWidth={1.5} strokeDasharray="6 4" opacity={0.5}/>
      <polygon points="336,230 322,242 335,254" fill={fg} opacity={0.65}/>
      <polygon points="464,230 476,242 463,254" fill={fg} opacity={0.65}/>
    </>
  ),

  // Two columns → comparison
  two_columns: ({ fg }) => (
    <>
      <rect x={95} y={98} width={248} height={324} rx={8} fill="none" stroke={fg} strokeWidth={2} opacity={0.58}/>
      <rect x={457} y={98} width={248} height={324} rx={8} fill="none" stroke={fg} strokeWidth={2} opacity={0.58}/>
      <rect x={95} y={98} width={248} height={46} rx={8} fill={fg} opacity={0.2}/>
      <rect x={457} y={98} width={248} height={46} rx={8} fill={fg} opacity={0.13}/>
      {[168,202,236,270,304,338,372].map((y,i) => (
        <line key={"tl"+i} x1={118} y1={y} x2={322} y2={y} stroke={fg} strokeWidth={1.5} opacity={0.32+i%2*0.12}/>
      ))}
      {[168,202,236,270,304,338,372].map((y,i) => (
        <line key={"tr"+i} x1={480} y1={y} x2={684} y2={y} stroke={fg} strokeWidth={1.5} opacity={0.32+i%2*0.12}/>
      ))}
      <line x1={400} y1={78} x2={400} y2={452} stroke={fg} strokeWidth={1} strokeDasharray="5 5" opacity={0.28}/>
      {[175,209,243,277].map((y,i) => (
        <circle key={"tc"+i} cx={138} cy={y} r={6} fill={fg} opacity={0.55}/>
      ))}
      {[175,243].map((y,i) => (
        <circle key={"tx"+i} cx={498} cy={y} r={6} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.42}/>
      ))}
    </>
  ),

  // Neural brain outline → AI / ML
  brain_neural: ({ fg }) => (
    <>
      <path d="M258,118 C198,98 148,148 148,218 C148,288 198,328 248,338 C268,378 328,398 400,398 C472,398 532,378 552,338 C602,328 652,288 652,218 C652,148 602,98 542,118 C522,78 462,58 400,58 C338,58 278,78 258,118 Z" fill="none" stroke={fg} strokeWidth={2} opacity={0.52}/>
      {[
        [318,158],[442,153],[278,238],[400,228],[532,233],[358,318],[452,313],
        [218,183],[582,186],[308,288],[492,283],
      ].map(([x,y],i) => (
        <circle key={"bn"+i} cx={x} cy={y} r={7} fill={fg} opacity={0.58}/>
      ))}
      {[
        [[318,158],[442,153]],[[318,158],[278,238]],[[442,153],[532,233]],
        [[278,238],[400,228]],[[400,228],[532,233]],[[278,238],[308,288]],
        [[532,233],[492,283]],[[400,228],[358,318]],[[400,228],[452,313]],
        [[218,183],[278,238]],[[582,186],[532,233]],[[308,288],[358,318]],
        [[492,283],[452,313]],[[318,158],[218,183]],[[442,153],[582,186]],
      ].map(([[x1,y1],[x2,y2]],i) => (
        <line key={"bl"+i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={fg} strokeWidth={1} opacity={0.33}/>
      ))}
    </>
  ),

  // Lego-style blocks → low-code / building blocks
  building_blocks: ({ fg }) => (
    <>
      {[
        {x:98,y:322,w:122,h:62,studs:3},{x:98,y:260,w:122,h:62,studs:3},
        {x:220,y:291,w:122,h:62,studs:3},{x:198,y:362,w:182,h:62,studs:4},
        {x:378,y:232,w:162,h:62,studs:4},{x:378,y:294,w:162,h:62,studs:4},
        {x:378,y:356,w:162,h:62,studs:4},{x:538,y:262,w:142,h:62,studs:3},
        {x:538,y:324,w:142,h:62,studs:3},
      ].map(({x,y,w,h,studs},i) => (
        <g key={"bb"+i}>
          <rect x={x} y={y} width={w} height={h} rx={4} fill="none" stroke={fg} strokeWidth={2} opacity={0.56+i%3*0.1}/>
          <rect x={x} y={y} width={w} height={h} rx={4} fill={fg} opacity={0.06+i%2*0.04}/>
          {[...Array(studs)].map((_,s) => (
            <ellipse key={"bs"+s} cx={x+w/(studs+1)*(s+1)} cy={y-8} rx={13} ry={7} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.52}/>
          ))}
        </g>
      ))}
    </>
  ),

  // Coin stacks + arrow → cost savings / nearshoring
  coin_stack: ({ fg }) => (
    <>
      {[0,1,2,3,4,5,6].map(i => (
        <ellipse key={"cs1"+i} cx={218} cy={352-i*28} rx={92} ry={22} fill="none" stroke={fg} strokeWidth={2} opacity={0.45+i*0.05}/>
      ))}
      {[0,1,2,3].map(i => (
        <ellipse key={"cs2"+i} cx={552} cy={312-i*28} rx={72} ry={18} fill="none" stroke={fg} strokeWidth={2} opacity={0.45+i*0.05}/>
      ))}
      <path d="M332,218 C392,158 442,158 492,198" fill="none" stroke={fg} strokeWidth={2} strokeDasharray="8 5" opacity={0.58}/>
      <polygon points="492,198 506,184 502,208" fill={fg} opacity={0.65}/>
      <line x1={218} y1={118} x2={218} y2={163} stroke={fg} strokeWidth={2.5} opacity={0.55}/>
      <polygon points="218,110 208,132 228,132" fill={fg} opacity={0.55}/>
      <line x1={552} y1={172} x2={552} y2={212} stroke={fg} strokeWidth={2.5} opacity={0.55}/>
      <polygon points="552,164 542,184 562,184" fill={fg} opacity={0.55}/>
    </>
  ),

  // Data pipes → auth migration / data flow
  data_flow_pipe: ({ fg }) => (
    <>
      <rect x={78} y={188} width={152} height={122} rx={8} fill="none" stroke={fg} strokeWidth={2} opacity={0.62}/>
      <line x1={108} y1={214} x2={202} y2={214} stroke={fg} strokeWidth={1.5} opacity={0.42}/>
      <line x1={108} y1={234} x2={188} y2={234} stroke={fg} strokeWidth={1.5} opacity={0.42}/>
      <line x1={108} y1={254} x2={198} y2={254} stroke={fg} strokeWidth={1.5} opacity={0.42}/>
      <rect x={570} y={165} width={152} height={122} rx={8} fill="none" stroke={fg} strokeWidth={2} opacity={0.62}/>
      <circle cx={628} cy={204} r={22} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.52}/>
      <circle cx={628} cy={204} r={9} fill={fg} opacity={0.48}/>
      <line x1={230} y1={250} x2={342} y2={250} stroke={fg} strokeWidth={3} opacity={0.58}/>
      <line x1={342} y1={250} x2={342} y2={198} stroke={fg} strokeWidth={3} opacity={0.52}/>
      <line x1={342} y1={198} x2={458} y2={198} stroke={fg} strokeWidth={3} opacity={0.52}/>
      <line x1={458} y1={198} x2={458} y2={250} stroke={fg} strokeWidth={3} opacity={0.52}/>
      <line x1={458} y1={250} x2={570} y2={250} stroke={fg} strokeWidth={3} opacity={0.58}/>
      {[[282,250],[342,224],[400,198],[458,224],[514,250]].map(([x,y],i) => (
        <circle key={"dp"+i} cx={x} cy={y} r={6} fill={fg} opacity={0.58}/>
      ))}
      <polygon points="564,242 570,258 554,250" fill={fg} opacity={0.65}/>
    </>
  ),

  // Contract document → fixed-price / T&M
  contract_doc: ({ fg }) => (
    <>
      <rect x={228} y={78} width={344} height={364} rx={10} fill="none" stroke={fg} strokeWidth={2} opacity={0.62}/>
      <rect x={228} y={78} width={344} height={52} rx={10} fill={fg} opacity={0.18}/>
      {[162,192,222,252,282,312,342,372,402].map((y,i) => (
        <line key={"cd"+i} x1={262} y1={y} x2={542} y2={y} stroke={fg} strokeWidth={1.5} opacity={0.32+i%3*0.09}/>
      ))}
      <line x1={262} y1={408} x2={375} y2={408} stroke={fg} strokeWidth={2.5} opacity={0.58}/>
      <line x1={428} y1={408} x2={542} y2={408} stroke={fg} strokeWidth={2.5} opacity={0.58}/>
      <line x1={262} y1={420} x2={375} y2={420} stroke={fg} strokeWidth={1} opacity={0.32}/>
      <line x1={428} y1={420} x2={542} y2={420} stroke={fg} strokeWidth={1} opacity={0.32}/>
      <circle cx={288} cy={99} r={15} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.52}/>
      <line x1={282} y1={99} x2={294} y2={99} stroke={fg} strokeWidth={2} opacity={0.65}/>
      <line x1={288} y1={93} x2={288} y2={105} stroke={fg} strokeWidth={2} opacity={0.65}/>
    </>
  ),

  // Mission briefing board → discovery / planning
  mission_board: ({ fg }) => (
    <>
      <rect x={78} y={78} width={644} height={384} rx={10} fill="none" stroke={fg} strokeWidth={2} opacity={0.52}/>
      <line x1={78} y1={128} x2={722} y2={128} stroke={fg} strokeWidth={1.5} opacity={0.38}/>
      <rect x={98} y={148} width={222} height={142} rx={6} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.48}/>
      <rect x={338} y={148} width={364} height={62} rx={6} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.48}/>
      <rect x={338} y={228} width={364} height={62} rx={6} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.48}/>
      <rect x={98} y={308} width={608} height={134} rx={6} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.42}/>
      {[332,362,392].map((y,i) => <line key={"mb"+i} x1={118} y1={y} x2={686} y2={y} stroke={fg} strokeWidth={1.5} opacity={0.32}/>)}
      <circle cx={532} cy={174} r={16} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.52}/>
      <line x1={524} y1={174} x2={540} y2={174} stroke={fg} strokeWidth={2} opacity={0.6}/>
      <line x1={532} y1={166} x2={532} y2={182} stroke={fg} strokeWidth={2} opacity={0.6}/>
      <circle cx={532} cy={254} r={16} fill={fg} opacity={0.32}/>
      <circle cx={532} cy={254} r={7} fill={fg} opacity={0.68}/>
    </>
  ),

  // Truck on road route → logistics
  truck_route: ({ fg }) => (
    <>
      <path d="M78,298 C178,298 198,218 318,218 C438,218 458,298 578,298 C638,298 678,268 722,248" fill="none" stroke={fg} strokeWidth={2} strokeDasharray="10 6" opacity={0.52}/>
      {[[178,268],[318,218],[458,264],[578,293]].map(([x,y],i) => (
        <g key={"tr"+i}>
          <circle cx={x} cy={y} r={9} fill={fg} opacity={0.58}/>
          <line x1={x} y1={y} x2={x} y2={y-22} stroke={fg} strokeWidth={1.5} opacity={0.45}/>
          <circle cx={x} cy={y-22} r={4} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.45}/>
        </g>
      ))}
      <g transform="translate(96,340)">
        <rect x={0} y={-42} width={125} height={42} rx={4} fill="none" stroke={fg} strokeWidth={2} opacity={0.68}/>
        <rect x={82} y={-68} width={43} height={26} rx={3} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.58}/>
        <circle cx={22} cy={7} r={15} fill="none" stroke={fg} strokeWidth={2} opacity={0.62}/>
        <circle cx={22} cy={7} r={6} fill={fg} opacity={0.55}/>
        <circle cx={98} cy={7} r={15} fill="none" stroke={fg} strokeWidth={2} opacity={0.62}/>
        <circle cx={98} cy={7} r={6} fill={fg} opacity={0.55}/>
      </g>
    </>
  ),

  // Open door + closed door → switching provider
  open_door: ({ fg }) => (
    <>
      <rect x={115} y={118} width={202} height={324} rx={8} fill="none" stroke={fg} strokeWidth={2.5} opacity={0.58}/>
      <rect x={125} y={128} width={182} height={304} rx={6} fill={fg} opacity={0.08}/>
      <circle cx={284} cy={280} r={9} fill={fg} opacity={0.58}/>
      <rect x={482} y={98} width={202} height={344} rx={8} fill="none" stroke={fg} strokeWidth={2.5} opacity={0.68}/>
      <rect x={492} y={108} width={182} height={324} rx={6} fill={fg} opacity={0.12}/>
      <circle cx={502} cy={270} r={9} fill={fg} opacity={0.68}/>
      {[140,165,190,215,240].map((y,i) => (
        <line key={"od"+i} x1={502} y1={y} x2={668} y2={y} stroke={fg} strokeWidth={1} opacity={0.24}/>
      ))}
      <path d="M322,278 C372,258 422,258 480,268" fill="none" stroke={fg} strokeWidth={2} opacity={0.65}/>
      <polygon points="480,260 495,268 479,278" fill={fg} opacity={0.68}/>
      {[158,178,198,218,238,258].map((y,i) => (
        <line key={"ol"+i} x1={126} y1={y} x2={296} y2={y} stroke={fg} strokeWidth={1} opacity={0.2}/>
      ))}
    </>
  ),

  // Container lifting to cloud → ECS migration
  cloud_lift: ({ fg }) => (
    <>
      <ellipse cx={400} cy={128} rx={202} ry={82} fill="none" stroke={fg} strokeWidth={2} opacity={0.58}/>
      <ellipse cx={278} cy={162} rx={122} ry={56} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.42}/>
      <ellipse cx={532} cy={154} rx={142} ry={62} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.42}/>
      <rect x={308} y={294} width={184} height={122} rx={8} fill="none" stroke={fg} strokeWidth={2.5} opacity={0.68}/>
      {[0,1,2,3].map(i => <line key={"cl"+i} x1={328+i*42} y1={294} x2={328+i*42} y2={416} stroke={fg} strokeWidth={1} opacity={0.22}/>)}
      <line x1={318} y1={346} x2={482} y2={346} stroke={fg} strokeWidth={1} opacity={0.22}/>
      <line x1={400} y1={210} x2={400} y2={294} stroke={fg} strokeWidth={2.5} strokeDasharray="9 5" opacity={0.58}/>
      <polygon points="400,204 388,226 412,226" fill={fg} opacity={0.68}/>
      <rect x={348} y={314} width={104} height={42} rx={4} fill={fg} opacity={0.2}/>
      <line x1={238} y1={380} x2={562} y2={380} stroke={fg} strokeWidth={1} opacity={0.24}/>
      {[238,310,380,450,520].map((x,i) => <line key={"cg"+i} x1={x} y1={380} x2={x} y2={416} stroke={fg} strokeWidth={1} opacity={0.2}/>)}
    </>
  ),

  // Two clouds + comparison columns → ECS vs Beanstalk
  cloud_compare: ({ fg }) => (
    <>
      <ellipse cx={228} cy={132} rx={147} ry={62} fill="none" stroke={fg} strokeWidth={2} opacity={0.58}/>
      <ellipse cx={142} cy={165} rx={92} ry={42} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.42}/>
      <ellipse cx={338} cy={158} rx={107} ry={44} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.42}/>
      <rect x={97} y={208} width={262} height={162} rx={8} fill="none" stroke={fg} strokeWidth={2} opacity={0.58}/>
      {[242,272,302,332].map((y,i) => (
        <line key={"cc1"+i} x1={122} y1={y} x2={338} y2={y} stroke={fg} strokeWidth={1.5} opacity={0.32}/>
      ))}
      <ellipse cx={572} cy={112} rx={147} ry={62} fill="none" stroke={fg} strokeWidth={2} opacity={0.58}/>
      <ellipse cx={486} cy={145} rx={92} ry={42} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.42}/>
      <ellipse cx={682} cy={138} rx={107} ry={44} fill="none" stroke={fg} strokeWidth={1.5} opacity={0.42}/>
      <rect x={441} y={188} width={262} height={162} rx={8} fill="none" stroke={fg} strokeWidth={2} opacity={0.58}/>
      {[222,252,282,312].map((y,i) => (
        <line key={"cc2"+i} x1={466} y1={y} x2={682} y2={y} stroke={fg} strokeWidth={1.5} opacity={0.32}/>
      ))}
      <circle cx={148} cy={290} r={9} fill={fg} opacity={0.48}/>
      <circle cx={148} cy={320} r={9} fill={fg} opacity={0.48}/>
      <rect x={466} y={236} width={52} height={19} rx={4} fill={fg} opacity={0.38}/>
      <rect x={466} y={266} width={52} height={19} rx={4} fill={fg} opacity={0.38}/>
      <rect x={466} y={296} width={52} height={19} rx={4} fill={fg} opacity={0.38}/>
      <line x1={400} y1={78} x2={400} y2={452} stroke={fg} strokeWidth={1} strokeDasharray="5 5" opacity={0.22}/>
    </>
  ),

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
            <circle cx="2" cy="2" r="1.5" fill={c.fg} opacity="0.08"/>
          </pattern>
        </defs>
        <rect width="800" height="480" fill={"url(#bc-" + cover + ")"}/>
        <circle cx="680" cy="420" r="210" fill={c.accent} opacity="0.15"/>
        <circle cx="90" cy="75" r="150" fill={c.accent} opacity="0.10"/>
        <circle cx="650" cy="90" r="260" fill={c.fg} opacity="0.05"/>
        {IllusComponent && <IllusComponent fg={c.fg} accent={c.accent || "#F97316"}/>}
      </svg>
      {label && <span className="blog-visual-label" style={{ color: c.fg }}>{label}</span>}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Avatar, shows photo when author.photo is set, initial otherwise
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
  useReveal();
  const featured = POSTS[0];
  const rest = POSTS.slice(1);
  const filtered = active === "All" ? rest : POSTS.filter(p => p.cat === active);
  const showFeatured = active === "All";

  // Title/description/OG are set at build time by scripts/prerender.mjs (single source of truth for crawlers and browsers).

  return (
    <div className="page">
      {/* ── Page hero ──────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Blog</span>
          <h1>Field notes from an AI-first engineering practice</h1>
          <p>How we ship LLM features, run agentic workflows, structure AI MVPs, and operate AI products in production, written by the people doing it.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {/* ── Featured post ─────────────────────────────── */}
          {showFeatured && <a href={"/blog/" + featured.slug} className="blog-featured-card reveal">
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
          </a>}

          {/* ── Category filter ──────────────────────────── */}
          <div className="blog-filter">
            {cats.map(c => (
              <button key={c} className={"blog-filter-btn" + (c === active ? " is-active" : "")} onClick={() => setActive(c)}>{c}</button>
            ))}
          </div>

          {/* ── Post grid ────────────────────────────────── */}
          <div className="blog-post-grid">
            {filtered.map((p, i) => (
              <a key={p.slug} href={"/blog/" + p.slug} className="blog-post-card reveal" style={{ transitionDelay: (i % 3 * 60) + "ms" }}>
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
        if (b.type === "p-html") return <p key={i} className="blog-post-p" dangerouslySetInnerHTML={{ __html: b.text }} />;
        if (b.type === "related-guide") return (
          <a key={i} href={b.href} style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: 16, padding: "20px 28px", margin: "32px 0",
            background: "var(--bg-cyan-50)", border: "1px solid var(--cyan-300)",
            borderRadius: 14, textDecoration: "none",
            transition: "border-color 0.15s, background 0.15s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--bg-cyan-100)"; e.currentTarget.style.borderColor = "var(--cyan-500)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--bg-cyan-50)"; e.currentTarget.style.borderColor = "var(--cyan-300)"; }}
          >
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--cyan-600)", marginBottom: 4 }}>Related guide</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: "var(--slate-800)" }}>{b.title}</div>
              {b.desc && <div style={{ fontSize: 13, color: "var(--slate-500)", marginTop: 2 }}>{b.desc}</div>}
            </div>
            <span style={{ flexShrink: 0, width: 36, height: 36, borderRadius: "50%", background: "var(--cyan-600)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
              <Icon.arrow />
            </span>
          </a>
        );
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
        if (b.type === "table") return (
          <div key={i} className="blog-post-table-wrap" style={{ overflowX: "auto", margin: "24px 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15, lineHeight: 1.6 }}>
              {b.head && (
                <thead>
                  <tr>
                    {b.head.map((h, j) => (
                      <th key={j} style={{ textAlign: "left", padding: "10px 14px", background: "var(--slate-100)", fontFamily: "var(--font-display)", color: "var(--slate-800)", borderBottom: "2px solid var(--slate-200)", fontWeight: 700 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {b.rows.map((row, j) => (
                  <tr key={j} style={{ borderBottom: "1px solid var(--slate-100)", background: j % 2 === 0 ? "transparent" : "var(--slate-50)" }}>
                    {row.map((cell, k) => (
                      <td key={k} style={{ padding: "10px 14px", color: k === 0 ? "var(--slate-800)" : "var(--slate-600)", fontWeight: k === 0 ? 600 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

  // Title/description/OG are set at build time by scripts/prerender.mjs (single source of truth for crawlers and browsers).

  return (
    <div className="page">
      {/* ── Post hero ──────────────────────────────────────── */}
      <section className="blog-single-hero">
        <div className="container">
          <div className="blog-single-breadcrumb">
            <a href="/blog">Blog</a>
            <span>·</span>
            <span>{post.cat}</span>
          </div>
          <div className="blog-single-meta">
            <span className="blog-cat-pill">{post.cat}</span>
            <span className="blog-single-date">{post.date}{POST_UPDATED[post.slug] ? " · Updated " + POST_UPDATED[post.slug] : ""} · {post.read}</span>
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
              {POST_UPDATED[post.slug] && (<>
                <div className="blog-sidebar-label" style={{ marginTop: 12 }}>Updated</div>
                <div className="blog-sidebar-date">{POST_UPDATED[post.slug]}</div>
              </>)}
              <div className="blog-sidebar-label" style={{ marginTop: 12 }}>Reading time</div>
              <div className="blog-sidebar-date">{post.read}</div>
              <div className="blog-sidebar-label" style={{ marginTop: 12 }}>Category</div>
              <span className="blog-cat-pill" style={{ marginTop: 6 }}>{post.cat}</span>
            </div>
            <a href="/contact" className="btn btn--primary" style={{ width: "100%", justifyContent: "center", marginTop: 16 }}>
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
                    <a key={r.slug} href={"/blog/" + r.slug} className="blog-related-card">
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
            <a href={"/blog/" + nextPost.slug} className="blog-next-post">
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
// Router wrapper, list or single
// ─────────────────────────────────────────────────────────────────
function BlogRouter({ slug }) {
  if (slug) return <BlogPostPage slug={slug} />;
  return <BlogListPage />;
}

window.POSTS = POSTS;
window.BlogRouter = BlogRouter;
