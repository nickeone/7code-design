function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React, Icon, CSCover, CTAStrip, CASES */
/* Solutions: problem-focused pages for business buyers (ops, finance, SME owners).
   Each page links to the technical service page that delivers it, and back.
   Routes: /solutions (hub) and /solutions/<slug>. */

// ─────────────────────────────────────────────────────────────────
// Solution data
// ─────────────────────────────────────────────────────────────────
// Section types used in `sections` (rendered by SolSection below):
//   cards     – icon cards (problems, components)        items: [{title, desc, icon}]
//   numbered  – numbered cards with bullets / example    items: [{title, desc, bullets?, example?, tags?, note?}]
//   table     – comparison table                         head: [...], rows: [[...]]
//   vs        – light card vs dark card                  light: {...}, dark: {...}
//   dodont    – what it does / doesn't                   does: [...], doesnt: [...]
//   checklist – list + three question cards              list: [...], questions: [{title, desc}]
//   steps     – numbered process                         items: [{title, desc}]
//   cases     – related case studies (from CASES)        slugs: [...]
//   inprod    – one product in production                {...}
//   roi       – ROI metrics + worked example             {...}
//   faq       – questions as real <h3>                   items: [{q, a}]
// Optional on any section: xlink {lead, text, href} and statement {plain, accent}.

const SOLUTIONS_DATA = {
  "connect-business-systems": {
    slug: "connect-business-systems",
    navTitle: "Connect business systems",
    navDesc: "ERP, CRM and finance tools that share data automatically",
    eyebrow: "System integration services",
    h1: "Connect your business systems.",
    h1Accent: "Eliminate manual data work.",
    lead: "Your ERP, CRM and operational software should work together, not depend on employees moving data between them.",
    sub: "7code designs and develops custom system integrations that connect your existing business applications, automate data exchange and give your teams access to consistent, up-to-date information.",
    cta: "Discuss your integration project",
    icon: "globe",
    visual: "map",
    service: {
      slug: "system-integrations",
      title: "System Integrations"
    },
    sections: [{
      type: "split",
      eyebrow: "The problem we solve",
      title: "Your systems are disconnected. Your people are filling the gaps.",
      paras: ["As businesses grow, they often add new software for finance, sales, inventory, HR and operations. But these systems don't always communicate. The result? Employees spend time transferring information instead of using it.", "For companies managing complex operations, these inefficiencies increase with every new system and process."],
      callout: {
        plain: "The solution isn't necessarily replacing your software.",
        strong: "It's making your existing systems work together."
      },
      items: [{
        title: "Duplicate data entry",
        desc: "The same customer, order or invoice is entered into multiple systems.",
        icon: "layers"
      }, {
        title: "Disconnected departments",
        desc: "Finance, sales and operations work with different versions of the same information.",
        icon: "users"
      }, {
        title: "Manual reporting",
        desc: "Teams export data from different platforms and combine it in spreadsheets.",
        icon: "chart"
      }, {
        title: "Delayed updates",
        desc: "Changes in one system don't reach others automatically.",
        icon: "pulse"
      }, {
        title: "Limited visibility",
        desc: "Management cannot get a reliable overview without requesting data from multiple departments.",
        icon: "search"
      }]
    }, {
      type: "numbered",
      eyebrow: "What we deliver",
      title: "What can system integration solve?",
      intro: "7code builds integrations around your business processes and existing infrastructure.",
      items: [{
        title: "ERP, CRM and finance integration",
        desc: "Connect your core business applications so customer, order, invoice and financial information flows between the systems that need it.",
        example: "Customer records created in your CRM synchronize with your ERP, while sales orders and invoices move to the relevant operational and accounting systems.",
        wide: true
      }, {
        title: "Automated data exchange between departments",
        desc: "Eliminate repetitive information handoffs between finance, sales, HR and operations. Automated workflows reduce duplicate entry, manual exports and dependency on employees remembering to update multiple platforms.",
        wide: true
      }, {
        title: "Real-time data synchronization",
        desc: "Keep connected applications updated automatically when information changes.",
        tags: ["APIs", "Webhooks", "Event-driven", "Scheduled pipelines"]
      }, {
        title: "Centralized reporting",
        desc: "Bring information from multiple business applications into a shared data environment, so management gets a consistent view without combining spreadsheets every period."
      }, {
        title: "Legacy system integration",
        desc: "Connect older applications, databases and on-premise systems with modern business software, without replacing infrastructure that still supports your operations."
      }]
    }, {
      type: "table",
      eyebrow: "Systems we connect",
      title: "What systems can 7code integrate?",
      intro: "We build connections between enterprise applications, SaaS platforms, databases and legacy software.",
      head: ["System category", "Typical integration use cases"],
      rows: [["ERP", "Finance, inventory, procurement and operational data"], ["CRM", "Customer, sales and account information"], ["Accounting", "Invoices, payments and transactions"], ["HR and payroll", "Employee and workforce information"], ["Warehouse management", "Inventory, orders and fulfilment"], ["Legacy applications", "Connecting older systems with modern software"], ["Data warehouses", "Consolidating data for reporting and analytics"]]
    }, {
      type: "vs",
      eyebrow: "Choosing the right approach",
      title: "Custom integration or an off-the-shelf platform?",
      light: {
        kicker: "Off-the-shelf platforms",
        title: "Good for standard integrations",
        desc: "Platforms such as Make, Zapier, MuleSoft and Boomi can handle many standard integrations.",
        chips: ["Make", "Zapier", "MuleSoft", "Boomi"],
        note: "The right approach depends on your systems and requirements. 7code assesses whether an existing integration platform is sufficient or custom development is justified."
      },
      dark: {
        kicker: "Custom engineering",
        title: "Necessary when your business requires",
        list: ["Complex data transformations and business rules", "Connections to legacy or undocumented systems", "Synchronization across multiple applications", "Specific security, access or audit requirements", "Greater control over performance, reliability and error handling"]
      },
      statement: {
        plain: "The objective is not to build more software.",
        accent: "It's to eliminate unnecessary complexity in your existing operations."
      }
    }, {
      type: "steps",
      eyebrow: "How we work",
      title: "How 7code delivers system integration projects",
      items: [{
        title: "Audit and architecture",
        desc: "We assess your systems, manual data transfers and processes, then define which applications need to communicate, what data must move and which system is the source of truth."
      }, {
        title: "Integration development",
        desc: "We build and implement the required APIs, connectors, middleware and data pipelines around your infrastructure."
      }, {
        title: "Testing and validation",
        desc: "We verify data accuracy, synchronization, duplicate handling, error recovery, permissions and performance."
      }, {
        title: "Deployment and support",
        desc: "We deploy the integrations and establish monitoring, logging and documentation to support reliable operation."
      }]
    }, {
      type: "cases",
      eyebrow: "Proof of work",
      title: "Integration work we've shipped",
      intro: "Integrations built around platforms our clients already run, without replacing them.",
      slugs: ["numerize", "g42-fleet", "drum-bun"]
    }, {
      type: "faq",
      eyebrow: "Frequently asked",
      title: "Frequently asked questions about system integration",
      items: [{
        q: "How can we connect our ERP and CRM without replacing them?",
        a: "Existing ERP and CRM systems can be connected through APIs, middleware, custom connectors or integration platforms. The right solution depends on the interfaces each system supports and how information needs to move between them."
      }, {
        q: "How do we eliminate manual data entry between business systems?",
        a: "Identify where employees repeatedly transfer information between applications, then automate those data flows. API integrations, event-driven synchronization and scheduled pipelines can eliminate repetitive entry while validation rules help maintain data accuracy."
      }, {
        q: "Can legacy software be integrated with modern cloud applications?",
        a: "Yes. Legacy applications can often be connected through APIs, databases, file exchanges or custom adapters. A technical assessment determines the available integration options and any limitations."
      }, {
        q: "How long does a system integration project take?",
        a: "Timelines depend on the number of systems, API availability, data complexity and business requirements. A straightforward integration can take a few weeks, while larger multi-system projects require individual scoping."
      }, {
        q: "How much does custom system integration cost?",
        a: "Cost depends on system complexity, the number of connections, data transformation requirements, security needs and ongoing support. 7code assesses the existing infrastructure and defines the scope before committing to implementation."
      }]
    }],
    closing: {
      title: "Make your existing systems work together.",
      body: "If your teams still transfer data manually between business applications, there may be an opportunity to simplify operations without replacing the software you already use.",
      ask: "Tell us which systems your business relies on and where information gets stuck."
    }
  },
  "automate-business-processes": {
    slug: "automate-business-processes",
    navTitle: "Automate manual processes",
    navDesc: "Invoices, approvals and documents without manual effort",
    eyebrow: "Business process automation",
    h1: "Automate manual business processes.",
    h1Accent: "Remove operational bottlenecks.",
    lead: "Reduce repetitive work, processing delays and operational overhead without adding unnecessary complexity to your business.",
    sub: "When operations depend on people processing documents, updating records and chasing approvals, growth creates more work instead of more capacity. 7code finds and automates those workflows with process automation, system integrations and AI where it adds practical value.",
    cta: "Discuss your automation project",
    icon: "cpu",
    visual: "flow",
    service: {
      slug: "ai-automation",
      title: "AI & Process Automation"
    },
    sections: [{
      type: "cards",
      eyebrow: "The problem we solve",
      title: "Where is manual work limiting your business operations?",
      intro: "As transaction volumes, suppliers and customers grow, administrative work grows with them. Workflows slow down, costs rise and every extra order needs extra manual effort.",
      items: [{
        title: "Document processing",
        desc: "Employees extract information from invoices, purchase orders, delivery notes and contracts by hand.",
        icon: "layers"
      }, {
        title: "Repetitive data entry",
        desc: "The same information is entered, checked or updated across several applications.",
        icon: "code"
      }, {
        title: "Slow approvals",
        desc: "Purchase requests, expenses and documents wait for manual review and sign-off.",
        icon: "pulse"
      }, {
        title: "Manual reporting",
        desc: "People collect data from different sources and build reports by hand.",
        icon: "chart"
      }, {
        title: "Process coordination",
        desc: "Teams chase updates, send reminders and hand tasks between departments.",
        icon: "users"
      }, {
        title: "Exception handling",
        desc: "Missing information and inconsistent records interrupt routine workflows.",
        icon: "shield"
      }],
      statement: {
        plain: "The question is not how many tasks can be automated.",
        accent: "It is where automation removes a real operational constraint."
      }
    }, {
      type: "numbered",
      eyebrow: "What we automate",
      title: "Which business processes can be automated?",
      intro: "The strongest opportunities are repetitive workflows with structured information, predictable decisions or high volumes of documents and transactions.",
      items: [{
        title: "Finance and invoice processing",
        desc: "Automate repetitive steps in accounts payable, receivable and financial administration.",
        bullets: ["Extract invoice details from PDFs and emails", "Match invoices with purchase orders and delivery records", "Route for approval and post validated data to accounting or ERP"],
        wide: true
      }, {
        title: "Procurement and supply chain",
        desc: "Reduce manual coordination across purchasing, suppliers and inventory.",
        bullets: ["Purchase request creation and approval", "Supplier document collection and validation", "Order, delivery and inventory status updates"],
        wide: true
      }, {
        title: "Document and information processing",
        desc: "Handle large volumes of business documents and unstructured information.",
        bullets: ["Extract data from contracts, forms and delivery notes", "Classify documents and flag missing fields", "Route documents and push extracted data into business apps"]
      }, {
        title: "Sales and customer operations",
        desc: "Cut administrative work across customer-facing processes.",
        bullets: ["Process incoming requests and update CRM records", "Prepare documents from existing business data", "Coordinate onboarding steps and follow-ups"]
      }, {
        title: "Internal administration and approvals",
        desc: "Replace email-based processes with structured workflows.",
        bullets: ["Employee requests and expense approvals", "Contract review and authorization", "Reminders and escalation of overdue requests"]
      }]
    }, {
      type: "table",
      eyebrow: "Choosing the approach",
      title: "What is the difference between workflow automation and AI-powered automation?",
      intro: "Business process automation does not always need AI. The right technology depends on the work.",
      head: ["Approach", "Best suited for", "Example"],
      rows: [["Rules-based automation", "Predictable tasks with defined conditions", "Routing purchase requests by approval limit"], ["Workflow automation", "Coordinating tasks across people and systems", "Sending an invoice through several approval stages"], ["AI-powered automation", "Unstructured or variable information", "Extracting and classifying data from different invoice formats"]],
      xlink: {
        lead: "Does the work need contextual decisions across several systems?",
        text: "That is a job for an AI agent, not a workflow.",
        label: "AI agents for business operations",
        href: "/solutions/ai-agents-for-business-operations"
      },
      statement: {
        plain: "The objective is not to use AI everywhere.",
        accent: "It is to choose the simplest reliable approach that solves the problem."
      }
    }, {
      type: "checklist",
      eyebrow: "Before you automate",
      title: "When should you automate a business process?",
      intro: "Not every manual task deserves automation. A process is a stronger candidate when it:",
      list: ["Occurs often or involves high transaction volumes", "Takes substantial repetitive employee effort", "Follows identifiable rules or a consistent sequence", "Creates delays, errors or extra administrative cost", "Has outcomes you can measure before and after"],
      questions: [{
        title: "Is the process worth improving?",
        desc: "Automating an inefficient process without understanding it makes the inefficiency happen faster."
      }, {
        title: "Can it be automated reliably?",
        desc: "Data quality, system limits, exceptions and business rules all affect feasibility."
      }, {
        title: "Does the benefit justify the cost?",
        desc: "Automation should cut real costs, add capacity or improve reliability in a way you can measure."
      }]
    }, {
      type: "steps",
      eyebrow: "How we work",
      title: "How 7code approaches business process automation",
      intro: "We start with the business process, not a predetermined technology.",
      items: [{
        title: "Process assessment",
        desc: "We map how the process works today, who and what is involved, where delays occur and how much manual effort it takes."
      }, {
        title: "Automation design",
        desc: "We define the target workflow, rules, data, integrations, exceptions and human approval points."
      }, {
        title: "Development and integration",
        desc: "We build it with the right mix of workflow logic, APIs, custom software and AI components."
      }, {
        title: "Testing and deployment",
        desc: "We test the full workflow, including wrong inputs, missing data, failed operations and exceptions."
      }, {
        title: "Monitoring and improvement",
        desc: "We monitor results against the original baseline and refine the solution as requirements change."
      }]
    }, {
      type: "roi",
      eyebrow: "Measuring ROI",
      title: "How do you measure the ROI of business process automation?",
      intro: "We measure the current process before changing anything, so the before and after are in the same units. ROI = (value of hours saved + error cost avoided − build and running cost) ÷ build and running cost.",
      metrics: ["Employee hours spent on repetitive tasks", "Processing time and cost per invoice, order or request", "Error rates and manual rework", "Transactions handled with the existing team"],
      example: {
        title: "Worked example: one automated process",
        rows: [["Team time on the process", "44 h / week"], ["Share of that work automated", "70%"], ["Loaded cost per hour", "€50"], ["Hours returned in 6 months", "≈ 708 h"], ["Value of those hours", "≈ €35,400"], ["Cost in 6 months (€10,000 pilot + running)", "€11,800"]],
        result: "≈ 3× its cost in 6 months",
        foot: "Illustrative numbers: the target we choose a pilot process for, not a promise. A smaller process returns less.",
        link: {
          text: "See the full ROI calculation",
          href: "/resources/ai-automation-roi-for-smes"
        }
      }
    }, {
      type: "faq",
      eyebrow: "Frequently asked",
      title: "Frequently asked questions about business process automation",
      items: [{
        q: "What is business process automation (BPA)?",
        a: "Business process automation uses software, integrations and workflow technology to run repetitive business activities with less manual work. It covers invoice processing, approvals, procurement, document handling, reporting and other operational workflows."
      }, {
        q: "Which business processes should a company automate first?",
        a: "Start with high-volume, repetitive processes that consume significant employee time or create measurable delays and errors. Evaluate the potential operational benefit, technical feasibility and cost before selecting the first workflow."
      }, {
        q: "Can we automate processes without replacing our ERP or existing software?",
        a: "Yes. Many automation solutions work with existing ERP, CRM, accounting and operational applications through APIs, integrations, middleware or other supported interfaces. Replacing existing software is not necessarily required."
      }, {
        q: "Should we use AI or traditional automation?",
        a: "Traditional automation is usually better for predictable tasks with structured data and clear rules. AI is useful when workflows involve unstructured documents, variable information or contextual interpretation. A combination is often appropriate."
      }, {
        q: "How do we make sure automation does not create new errors?",
        a: "Reliable automation requires input validation, clear business rules, exception handling, logging and monitoring. Processes involving financial or sensitive decisions may also require human review and approval. Testing must cover both normal operations and unexpected scenarios."
      }, {
        q: "How much does business process automation cost?",
        a: "At 7code, an automation pilot on one process starts from €10,000 and takes 4–6 weeks to a working, measured result. Larger projects are scoped after the pilot, once the numbers from the first process are known. Cost depends on process complexity, volume, integrations, AI requirements and maintenance."
      }]
    }],
    closing: {
      title: "Increase capacity without increasing manual work.",
      body: "If your teams spend too much time processing documents, coordinating approvals or repeating administrative tasks, there is likely a process worth fixing.",
      ask: "Tell us which operations take the most manual effort and where delays occur."
    }
  },
  "ai-agents-for-business-operations": {
    slug: "ai-agents-for-business-operations",
    navTitle: "AI agents for operations",
    navDesc: "Agents that gather data, decide the next step and act",
    eyebrow: "AI agents for business operations",
    h1: "AI agents for business operations.",
    h1Accent: "For work that needs more than rules.",
    lead: "We build AI agents that read requests, pull data from your systems, decide the next step and act on it, and pass anything outside their remit to a person.",
    sub: "Each agent is connected to your ERP, CRM and internal tools, grounded in your data with RAG, limited by explicit guardrails and eval-gated every release.",
    cta: "Discuss your AI agent project",
    icon: "cpu",
    visual: "trace",
    service: {
      slug: "llm-agent-development",
      title: "LLM & Agent Development"
    },
    sections: [{
      type: "dodont",
      eyebrow: "Clear boundaries",
      title: "What an AI agent does, and what it doesn't",
      does: ["Reads and classifies incoming requests, emails and documents", "Retrieves data from your systems and documents, and cites its sources", "Compares records and flags discrepancies", "Drafts replies, summaries and next actions", "Updates tickets and CRM records it has permission to change"],
      doesnt: ["Approve payments or post financial transactions", "Use any tool or data you have not connected to it", "Guess when context is missing: below the confidence threshold, it escalates", "Ship a change that fails the evaluation set", "Act without a trace you can replay and audit"]
    }, {
      type: "numbered",
      eyebrow: "Where agents work",
      title: "What business tasks can AI agents handle?",
      intro: "Agents work best on tasks where people read variable information, gather data from several places and coordinate the next step.",
      cols: 3,
      items: [{
        title: "Finance and accounting",
        desc: "Information-heavy finance work, prepared for your team to approve.",
        bullets: ["Compare invoices with POs and supporting documents", "Flag discrepancies and missing information", "Prepare reconciliation summaries"],
        note: "Payments and postings stay with your finance team."
      }, {
        title: "Customer service and internal support",
        desc: "Answers and actions grounded in your own data.",
        bullets: ["Understand requests and pull customer and order data", "Answer from your documentation with RAG and cited sources", "Create or update tickets and escalate the rest"],
        note: "Below the confidence threshold, a person takes over."
      }, {
        title: "Operations, procurement and supply chain",
        desc: "Coordination across orders, suppliers and stock.",
        bullets: ["Track order, delivery and supplier status", "Investigate inventory vs order discrepancies", "Summarise exceptions and notify the owner"],
        note: "Every tool call is logged and replayable."
      }]
    }, {
      type: "inprod",
      eyebrow: "In production",
      title: "An AI agent we run in production",
      kicker: "OctoLabs · Support copilot",
      heading: "A support agent that resolves tickets from the knowledge base and hands the rest to people",
      desc: "The agent reads each incoming ticket, retrieves answers from OctoLabs' documentation with RAG, replies with cited sources and escalates to the support team when confidence is below the threshold.",
      bullets: ["RAG over product documentation and past tickets", "Confidence threshold decides reply or escalation", "Every release scored against a held-out ticket set"],
      metric: {
        v: "47%",
        l: "of support tickets deflected"
      },
      tags: ["RAG", "Guardrails", "Eval-gated", "Observability"]
    }, {
      type: "table",
      eyebrow: "Agent vs automation",
      title: "How are AI agents different from traditional automation?",
      head: ["Capability", "Traditional automation", "AI agent"],
      rows: [["Fixed rules", "Yes", "Yes, when a rule is enough"], ["Variable input (emails, PDFs, free text)", "Limited", "Reads and interprets it"], ["Choosing the next step", "Follows a predefined path", "Decides from context, using only its tools"], ["Data from several systems", "Through configured integrations", "Calls connected tools and RAG"], ["Unexpected input", "Fails or needs a predefined branch", "Handles it or escalates below the threshold"]],
      xlink: {
        lead: "Predictable process with fixed rules?",
        text: "A workflow is cheaper and simpler. We build that instead.",
        label: "Business process automation",
        href: "/solutions/automate-business-processes"
      }
    }, {
      type: "cards",
      eyebrow: "Architecture",
      title: "How do AI agents work with your existing business systems?",
      intro: "An agent is only useful when it can reach the data and tools its task needs, and nothing more.",
      accent: true,
      items: [{
        title: "Model",
        desc: "Claude, GPT or open-weight models, chosen per task on quality, latency and cost.",
        icon: "cpu"
      }, {
        title: "RAG over your data",
        desc: "Hybrid retrieval over your documents and databases, with cited answers.",
        icon: "search"
      }, {
        title: "Tools and integrations",
        desc: "Scoped API access to your ERP, CRM, accounting and ticketing systems.",
        icon: "globe"
      }, {
        title: "Orchestration",
        desc: "LangGraph or first-party SDKs, with state persistence and replay.",
        icon: "layers"
      }, {
        title: "Guardrails",
        desc: "Permission scopes, confidence thresholds and human approval on high-impact actions.",
        icon: "shield"
      }, {
        title: "Observability and evals",
        desc: "Traces for every tool call, drift monitoring and eval-gated releases.",
        icon: "monitor"
      }]
    }, {
      type: "steps",
      eyebrow: "How we work",
      title: "How 7code builds AI agents for business operations",
      items: [{
        title: "Use-case assessment",
        desc: "We pick one operational task, map how it runs today and decide which steps need a person."
      }, {
        title: "Agent design",
        desc: "We define the agent's tools, data sources, permissions, guardrails and escalation rules."
      }, {
        title: "Build and integration",
        desc: "We build the agent and connect it to your systems through scoped APIs."
      }, {
        title: "Eval-gated release",
        desc: "We build a held-out evaluation set from your real requests. A failing score blocks the deploy."
      }, {
        title: "Run and observe",
        desc: "Traces, drift monitoring and access logs in production; we improve the agent from real usage."
      }]
    }, {
      type: "faq",
      eyebrow: "Frequently asked",
      title: "Frequently asked questions about AI agents for business operations",
      items: [{
        q: "What is an AI agent in business?",
        a: "A business AI agent is software that reads information, decides the next step and takes action in your systems through the tools it is given. Unlike a chatbot, it does work: it retrieves records, compares documents, updates tickets and prepares decisions for people to approve."
      }, {
        q: "What is the difference between an AI agent and an AI chatbot?",
        a: "A chatbot answers messages. An agent also retrieves data from connected systems, calls tools, takes the actions it is permitted to take and coordinates multi-step work. What it may do is set by its tools, permissions and guardrails."
      }, {
        q: "Can AI agents connect to our existing ERP and CRM?",
        a: "Yes, through their APIs or other integration interfaces. The agent gets scoped access: it can read and change only what its task needs, and every call is logged."
      }, {
        q: "Can AI agents automate finance and accounting tasks?",
        a: "They handle the information work: invoice analysis, document comparison, reconciliation support and exception flagging. Payments, postings and approvals stay with your finance team."
      }, {
        q: "Are AI agents safe to use in business operations?",
        a: "They are as safe as their guardrails: scoped permissions, human approval on payments and other high-impact actions, audit logs, and an evaluation set every release must pass. Agents still make mistakes, which is why every action is traced and reviewable."
      }, {
        q: "How much does it cost to develop a custom AI agent?",
        a: "It depends on the task, the number of systems the agent connects to, data access, security and testing. A focused agent for one operational task is a very different scope from a multi-agent system across departments, so we assess the use case before estimating."
      }]
    }],
    closing: {
      title: "Put AI agents to work in your operations.",
      body: "If your team spends hours gathering information, investigating exceptions or coordinating tasks across systems, an agent can take on part of that work.",
      ask: "Tell us which task you want to improve, how it works today and which systems are involved."
    }
  }
};
const SOLUTION_SLUGS = Object.keys(SOLUTIONS_DATA);

// ─────────────────────────────────────────────────────────────────
// Small pieces
// ─────────────────────────────────────────────────────────────────
const solIcon = name => {
  const I = typeof Icon !== "undefined" && Icon[name] || Icon.check;
  return /*#__PURE__*/React.createElement(I, null);
};
function SolHead({
  eyebrow,
  title,
  intro,
  left
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal" + (left ? " section-head--left" : "")
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", null, title), intro && /*#__PURE__*/React.createElement("p", null, intro));
}
function SolXLink({
  x
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sol-xlink reveal"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, x.lead), " ", x.text), /*#__PURE__*/React.createElement("a", {
    href: x.href
  }, x.label, " ", /*#__PURE__*/React.createElement(Icon.arrow, null)));
}
function SolStatement({
  s
}) {
  return /*#__PURE__*/React.createElement("p", {
    className: "sol-statement reveal"
  }, s.plain, " ", /*#__PURE__*/React.createElement("span", null, s.accent));
}
function Check({
  dark
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    className: "sol-tick"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "10",
    fill: dark ? "rgba(6,182,212,.18)" : "var(--bg-cyan-50)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 10.5l2.5 2.5L14 7.5",
    stroke: dark ? "var(--cyan-300)" : "var(--cyan-600)",
    strokeWidth: "1.8",
    fill: "none"
  }));
}
function Cross() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    className: "sol-tick"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "10",
    fill: "#FFF1F2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 7l6 6M13 7l-6 6",
    stroke: "#E11D48",
    strokeWidth: "1.8",
    fill: "none"
  }));
}

// ─────────────────────────────────────────────────────────────────
// Hero visuals (decorative; mirror the approved mockups)
// ─────────────────────────────────────────────────────────────────
function SolWindow({
  url,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sol-window",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sol-window-bar"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("span", null, url)), children);
}
function VisualMap() {
  const nodes = [["ERP", "Orders · inventory", "tl"], ["CRM", "Customers · deals", "tr"], ["Accounting", "Invoices · payments", "bl"], ["Warehouse", "Stock · fulfilment", "br"]];
  return /*#__PURE__*/React.createElement(SolWindow, {
    url: "integrations.7code.tech"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sol-map"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sol-map-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sol-label"
  }, "Connected systems"), /*#__PURE__*/React.createElement("span", {
    className: "sol-badge sol-badge--ok"
  }, "All flows in sync")), /*#__PURE__*/React.createElement("svg", {
    className: "sol-map-lines",
    viewBox: "0 0 560 300",
    preserveAspectRatio: "none",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M150 60 C 220 60, 230 150, 280 150"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M410 60 C 340 60, 330 150, 280 150"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M150 240 C 220 240, 230 150, 280 150"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M410 240 C 340 240, 330 150, 280 150"
  })), nodes.map(([t, d, pos]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "sol-node sol-node--" + pos
  }, /*#__PURE__*/React.createElement("b", null, t), /*#__PURE__*/React.createElement("small", null, d), /*#__PURE__*/React.createElement("span", {
    className: "sol-synced"
  }, "Synced"))), /*#__PURE__*/React.createElement("div", {
    className: "sol-hub"
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 22,
    color: "#fff"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sol-feed"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "CRM \u2192 ERP"), "New customer record"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "ERP \u2192 Accounting"), "Invoice created"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Manual entry"), /*#__PURE__*/React.createElement("span", null, "Not needed"))));
}
function VisualFlow() {
  const steps = [["Invoice received by email", "PDF from supplier", "Done", "ok"], ["Details extracted", "Supplier, amount, VAT, PO number", "AI", "ai"], ["Matched with PO and delivery note", "Rules check: amounts and quantities", "Rules", "ok"], ["Exception approved", "Price difference above tolerance", "Human", "hu"], ["Posted to accounting", "No manual re-typing", "Done", "ok"]];
  return /*#__PURE__*/React.createElement(SolWindow, {
    url: "automation.7code.tech"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sol-flow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sol-map-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sol-label"
  }, "Invoice workflow"), /*#__PURE__*/React.createElement("span", {
    className: "sol-badge sol-badge--ok"
  }, "Posted to ERP")), steps.map(([t, d, b, k], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "sol-fstep" + (k === "hu" ? " is-human" : "")
  }, /*#__PURE__*/React.createElement("span", {
    className: "sol-fnum"
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, t), /*#__PURE__*/React.createElement("small", null, d)), /*#__PURE__*/React.createElement("span", {
    className: "sol-badge sol-badge--" + k
  }, b)))));
}
function VisualTrace() {
  const steps = [["Classified as payment dispute", "Routed to finance agent", "0.4s", "ai"], ["Retrieved invoice, PO and payment", "erp.get_invoice · erp.get_payments", "2 tools", "ai"], ["Found the gap", "Credit note applied, not sent to supplier", "Cited", "ok"], ["Drafted reply with credit note attached", "Grounded in 3 sources", "Draft", "ai"], ["Sent to finance for approval", "Payment topics always need a human", "Guardrail", "hu"]];
  return /*#__PURE__*/React.createElement(SolWindow, {
    url: "agents.7code.tech / run"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sol-trace"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sol-req"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sol-label"
  }, "Incoming request \xB7 supplier email"), "\"Invoice 4471 was underpaid by \u20AC1,240. Can you check and confirm when the difference will be paid?\""), /*#__PURE__*/React.createElement("div", {
    className: "sol-tl"
  }, steps.map(([t, d, b, k], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "sol-tl-row" + (k === "hu" ? " is-human" : "")
  }, /*#__PURE__*/React.createElement("span", {
    className: "sol-tl-dot"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, t), /*#__PURE__*/React.createElement("small", null, d)), /*#__PURE__*/React.createElement("span", {
    className: "sol-badge sol-badge--" + k
  }, b)))), /*#__PURE__*/React.createElement("div", {
    className: "sol-trace-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sol-badge sol-badge--ok"
  }, "Eval set: passed"), /*#__PURE__*/React.createElement("span", {
    className: "sol-badge sol-badge--ai"
  }, "Trace logged"))));
}
const VISUALS = {
  map: VisualMap,
  flow: VisualFlow,
  trace: VisualTrace
};

// ─────────────────────────────────────────────────────────────────
// Sections
// ─────────────────────────────────────────────────────────────────
function SolSection({
  s
}) {
  switch (s.type) {
    case "split":
      return /*#__PURE__*/React.createElement("div", {
        className: "container sol-split"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        className: "eyebrow"
      }, s.eyebrow), /*#__PURE__*/React.createElement("h2", null, s.title), s.paras.map((p, i) => /*#__PURE__*/React.createElement("p", {
        key: i
      }, p)), s.callout && /*#__PURE__*/React.createElement("p", {
        className: "sol-callout"
      }, s.callout.plain, " ", /*#__PURE__*/React.createElement("strong", null, s.callout.strong))), /*#__PURE__*/React.createElement("div", {
        className: "sol-pains"
      }, s.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "sol-pain reveal"
      }, /*#__PURE__*/React.createElement("span", {
        className: "sol-pain-ic"
      }, solIcon(it.icon)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, it.title), /*#__PURE__*/React.createElement("p", null, it.desc))))));
    case "cards":
      return /*#__PURE__*/React.createElement("div", {
        className: "container"
      }, /*#__PURE__*/React.createElement(SolHead, s), /*#__PURE__*/React.createElement("div", {
        className: "sol-cards"
      }, s.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "sol-card reveal" + (s.accent ? " sol-card--accent" : "")
      }, /*#__PURE__*/React.createElement("span", {
        className: "sol-card-ic"
      }, solIcon(it.icon)), /*#__PURE__*/React.createElement("h3", null, it.title), /*#__PURE__*/React.createElement("p", null, it.desc)))), s.statement && /*#__PURE__*/React.createElement(SolStatement, {
        s: s.statement
      }));
    case "numbered":
      return /*#__PURE__*/React.createElement("div", {
        className: "container"
      }, /*#__PURE__*/React.createElement(SolHead, s), /*#__PURE__*/React.createElement("div", {
        className: "sol-num-grid" + (s.cols === 3 ? " sol-num-grid--3" : "")
      }, s.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "svc-deliver-card sol-num reveal" + (it.wide ? " is-wide" : "")
      }, /*#__PURE__*/React.createElement("div", {
        className: "svc-deliver-num"
      }, "0", i + 1), /*#__PURE__*/React.createElement("h3", null, it.title), /*#__PURE__*/React.createElement("p", null, it.desc), it.bullets && /*#__PURE__*/React.createElement("ul", {
        className: "sol-bullets"
      }, it.bullets.map((b, j) => /*#__PURE__*/React.createElement("li", {
        key: j
      }, b))), it.example && /*#__PURE__*/React.createElement("p", {
        className: "sol-example"
      }, /*#__PURE__*/React.createElement("strong", null, "Example:"), " ", it.example), it.tags && /*#__PURE__*/React.createElement("div", {
        className: "sol-tags"
      }, it.tags.map((t, j) => /*#__PURE__*/React.createElement("span", {
        key: j
      }, t))), it.note && /*#__PURE__*/React.createElement("p", {
        className: "sol-note"
      }, it.note)))));
    case "table":
      return /*#__PURE__*/React.createElement("div", {
        className: "container"
      }, /*#__PURE__*/React.createElement(SolHead, s), /*#__PURE__*/React.createElement("div", {
        className: "sol-table-wrap reveal"
      }, /*#__PURE__*/React.createElement("table", {
        className: "sol-table"
      }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, s.head.map((h, i) => /*#__PURE__*/React.createElement("th", {
        key: i,
        scope: "col"
      }, h)))), /*#__PURE__*/React.createElement("tbody", null, s.rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
        key: i
      }, r.map((c, j) => j === 0 ? /*#__PURE__*/React.createElement("th", {
        key: j,
        scope: "row"
      }, c) : /*#__PURE__*/React.createElement("td", {
        key: j
      }, c))))))), s.xlink && /*#__PURE__*/React.createElement(SolXLink, {
        x: s.xlink
      }), s.statement && /*#__PURE__*/React.createElement(SolStatement, {
        s: s.statement
      }));
    case "vs":
      return /*#__PURE__*/React.createElement("div", {
        className: "container"
      }, /*#__PURE__*/React.createElement(SolHead, s), /*#__PURE__*/React.createElement("div", {
        className: "sol-vs"
      }, /*#__PURE__*/React.createElement("div", {
        className: "sol-vs-card reveal"
      }, /*#__PURE__*/React.createElement("span", {
        className: "sol-kicker"
      }, s.light.kicker), /*#__PURE__*/React.createElement("h3", null, s.light.title), /*#__PURE__*/React.createElement("p", null, s.light.desc), /*#__PURE__*/React.createElement("div", {
        className: "sol-chips"
      }, s.light.chips.map((c, i) => /*#__PURE__*/React.createElement("span", {
        key: i
      }, c))), /*#__PURE__*/React.createElement("p", {
        className: "sol-vs-note"
      }, s.light.note)), /*#__PURE__*/React.createElement("div", {
        className: "sol-vs-card sol-vs-card--dark reveal"
      }, /*#__PURE__*/React.createElement("span", {
        className: "sol-kicker"
      }, s.dark.kicker), /*#__PURE__*/React.createElement("h3", null, s.dark.title), /*#__PURE__*/React.createElement("ul", {
        className: "sol-ticks"
      }, s.dark.list.map((l, i) => /*#__PURE__*/React.createElement("li", {
        key: i
      }, /*#__PURE__*/React.createElement(Check, {
        dark: true
      }), l))))), s.statement && /*#__PURE__*/React.createElement(SolStatement, {
        s: s.statement
      }));
    case "dodont":
      return /*#__PURE__*/React.createElement("div", {
        className: "container"
      }, /*#__PURE__*/React.createElement(SolHead, s), /*#__PURE__*/React.createElement("div", {
        className: "sol-vs"
      }, /*#__PURE__*/React.createElement("div", {
        className: "sol-vs-card reveal"
      }, /*#__PURE__*/React.createElement("h3", null, "What the agent does"), /*#__PURE__*/React.createElement("ul", {
        className: "sol-ticks"
      }, s.does.map((l, i) => /*#__PURE__*/React.createElement("li", {
        key: i
      }, /*#__PURE__*/React.createElement(Check, null), l)))), /*#__PURE__*/React.createElement("div", {
        className: "sol-vs-card sol-vs-card--dark reveal"
      }, /*#__PURE__*/React.createElement("h3", null, "What the agent doesn't do"), /*#__PURE__*/React.createElement("ul", {
        className: "sol-ticks"
      }, s.doesnt.map((l, i) => /*#__PURE__*/React.createElement("li", {
        key: i
      }, /*#__PURE__*/React.createElement(Cross, null), l))))));
    case "checklist":
      return /*#__PURE__*/React.createElement("div", {
        className: "container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "sol-split sol-split--center"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        className: "eyebrow"
      }, s.eyebrow), /*#__PURE__*/React.createElement("h2", null, s.title), /*#__PURE__*/React.createElement("p", null, s.intro)), /*#__PURE__*/React.createElement("ul", {
        className: "sol-bullets sol-checklist"
      }, s.list.map((l, i) => /*#__PURE__*/React.createElement("li", {
        key: i
      }, l)))), /*#__PURE__*/React.createElement("div", {
        className: "sol-q3"
      }, s.questions.map((q, i) => /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "sol-q reveal"
      }, /*#__PURE__*/React.createElement("h3", null, q.title), /*#__PURE__*/React.createElement("p", null, q.desc)))));
    case "steps":
      return /*#__PURE__*/React.createElement("div", {
        className: "container"
      }, /*#__PURE__*/React.createElement(SolHead, s), /*#__PURE__*/React.createElement("div", {
        className: "exp-process"
      }, s.items.map((p, i) => /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "exp-process-step reveal",
        style: {
          transitionDelay: i * 80 + "ms"
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "exp-process-num"
      }, "0", i + 1), /*#__PURE__*/React.createElement("div", {
        className: "exp-process-body"
      }, /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", null, p.desc))))));
    case "cases":
      {
        const cases = s.slugs.map(x => typeof CASES !== "undefined" && CASES[x] ? CASES[x] : null).filter(Boolean);
        return /*#__PURE__*/React.createElement("div", {
          className: "container"
        }, /*#__PURE__*/React.createElement(SolHead, s), /*#__PURE__*/React.createElement("div", {
          className: "cs-grid"
        }, cases.map(c => /*#__PURE__*/React.createElement("a", {
          key: c.slug,
          href: "/case-study/" + c.slug,
          className: "cs-card reveal"
        }, /*#__PURE__*/React.createElement(CSCover, {
          kind: c.kind,
          label: c.industry,
          slug: c.slug
        }), /*#__PURE__*/React.createElement("div", {
          className: "cs-body"
        }, /*#__PURE__*/React.createElement("div", {
          className: "cs-meta"
        }, c.meta && c.meta.map((m, j) => /*#__PURE__*/React.createElement("span", {
          key: j
        }, m))), /*#__PURE__*/React.createElement("h3", null, c.title), c.results && c.results[0] && /*#__PURE__*/React.createElement("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "var(--cyan-600)",
            fontWeight: 600,
            fontSize: 14
          }
        }, /*#__PURE__*/React.createElement(Icon.zap, {
          style: {
            width: 16,
            height: 16
          }
        }), " ", c.results[0].v + " " + c.results[0].l), /*#__PURE__*/React.createElement("span", {
          className: "cs-link"
        }, "Read case study ", /*#__PURE__*/React.createElement(Icon.arrow, null)))))));
      }
    case "inprod":
      return /*#__PURE__*/React.createElement("div", {
        className: "container"
      }, /*#__PURE__*/React.createElement(SolHead, s), /*#__PURE__*/React.createElement("div", {
        className: "sol-prod reveal"
      }, /*#__PURE__*/React.createElement("div", {
        className: "sol-prod-l"
      }, /*#__PURE__*/React.createElement("span", {
        className: "csd-kicker"
      }, /*#__PURE__*/React.createElement("span", {
        className: "csd-dot"
      }), " ", s.kicker), /*#__PURE__*/React.createElement("h3", null, s.heading), /*#__PURE__*/React.createElement("p", null, s.desc), /*#__PURE__*/React.createElement("ul", {
        className: "sol-bullets"
      }, s.bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
        key: i
      }, b)))), /*#__PURE__*/React.createElement("div", {
        className: "sol-prod-r"
      }, /*#__PURE__*/React.createElement("div", {
        className: "sol-prod-v"
      }, s.metric.v), /*#__PURE__*/React.createElement("div", {
        className: "sol-prod-l2"
      }, s.metric.l), /*#__PURE__*/React.createElement("div", {
        className: "sol-prod-tags"
      }, s.tags.map((t, i) => /*#__PURE__*/React.createElement("span", {
        key: i
      }, t))))));
    case "roi":
      return /*#__PURE__*/React.createElement("div", {
        className: "container sol-roi"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        className: "eyebrow"
      }, s.eyebrow), /*#__PURE__*/React.createElement("h2", null, s.title), /*#__PURE__*/React.createElement("p", null, s.intro), /*#__PURE__*/React.createElement("ul", {
        className: "sol-bullets"
      }, s.metrics.map((m, i) => /*#__PURE__*/React.createElement("li", {
        key: i
      }, m)))), /*#__PURE__*/React.createElement("div", {
        className: "sol-roi-box reveal"
      }, /*#__PURE__*/React.createElement("div", {
        className: "sol-roi-hd"
      }, /*#__PURE__*/React.createElement("h3", null, s.example.title)), /*#__PURE__*/React.createElement("table", {
        className: "sol-roi-table"
      }, /*#__PURE__*/React.createElement("tbody", null, s.example.rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
        key: i
      }, /*#__PURE__*/React.createElement("th", {
        scope: "row"
      }, r[0]), /*#__PURE__*/React.createElement("td", null, r[1]))))), /*#__PURE__*/React.createElement("div", {
        className: "sol-roi-result"
      }, s.example.result), /*#__PURE__*/React.createElement("div", {
        className: "sol-roi-ft"
      }, s.example.foot, " ", /*#__PURE__*/React.createElement("a", {
        href: s.example.link.href
      }, s.example.link.text, " \u2192"))));
    case "faq":
      return /*#__PURE__*/React.createElement("div", {
        className: "container svc-faq-wrap"
      }, /*#__PURE__*/React.createElement(SolHead, _extends({}, s, {
        left: true
      })), /*#__PURE__*/React.createElement("div", {
        className: "svc-faq"
      }, s.items.map((f, i) => /*#__PURE__*/React.createElement("details", {
        key: i,
        className: "svc-faq-item reveal",
        open: i === 0
      }, /*#__PURE__*/React.createElement("summary", null, /*#__PURE__*/React.createElement("h3", {
        className: "faq-q"
      }, f.q)), /*#__PURE__*/React.createElement("p", null, f.a)))));
    default:
      return null;
  }
}

// ─────────────────────────────────────────────────────────────────
// Solution detail page
// ─────────────────────────────────────────────────────────────────
function SolutionDetailPage({
  slug
}) {
  const sol = SOLUTIONS_DATA[slug] || SOLUTIONS_DATA[SOLUTION_SLUGS[0]];
  const Visual = VISUALS[sol.visual];
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("section", {
    className: "svc-hero sol-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-hero-grid-bg",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container sol-hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sol-hero-text"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "sol-crumbs",
    "aria-label": "Breadcrumb"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/solutions"
  }, "Solutions"), " ", /*#__PURE__*/React.createElement("span", null, "/"), " ", /*#__PURE__*/React.createElement("b", null, sol.navTitle)), /*#__PURE__*/React.createElement("div", {
    className: "svc-hero-icon"
  }, solIcon(sol.icon)), /*#__PURE__*/React.createElement("span", {
    className: "csd-kicker"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-dot"
  }), " ", sol.eyebrow), /*#__PURE__*/React.createElement("h1", null, sol.h1, " ", /*#__PURE__*/React.createElement("span", {
    className: "sol-h1-accent"
  }, sol.h1Accent)), /*#__PURE__*/React.createElement("div", {
    className: "exp-hero-divider"
  }), /*#__PURE__*/React.createElement("p", {
    className: "sol-lead"
  }, sol.lead), /*#__PURE__*/React.createElement("p", {
    className: "svc-hero-sub"
  }, sol.sub), /*#__PURE__*/React.createElement("div", {
    className: "svc-hero-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--cyan btn--lg"
  }, sol.cta, " ", /*#__PURE__*/React.createElement(Icon.arrow, null)), /*#__PURE__*/React.createElement("a", {
    href: "/service/" + sol.service.slug,
    className: "btn btn--ghost btn--lg"
  }, "How we build it"))), Visual && /*#__PURE__*/React.createElement("div", {
    className: "sol-hero-visual"
  }, /*#__PURE__*/React.createElement(Visual, null)))), sol.sections.map((s, i) => /*#__PURE__*/React.createElement("section", {
    key: i,
    className: "section" + (i % 2 === 0 ? " section--alt" : "")
  }, /*#__PURE__*/React.createElement(SolSection, {
    s: s
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sol-service-link reveal"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "How we build it"), /*#__PURE__*/React.createElement("p", null, "The engineering behind this solution: architecture, tech stack and delivery process.")), /*#__PURE__*/React.createElement("a", {
    href: "/service/" + sol.service.slug,
    className: "btn btn--ghost"
  }, sol.service.title, " ", /*#__PURE__*/React.createElement(Icon.arrow, null))))), /*#__PURE__*/React.createElement("section", {
    className: "section sol-closing-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sol-closing reveal"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, sol.closing.title), /*#__PURE__*/React.createElement("p", null, sol.closing.body), /*#__PURE__*/React.createElement("p", {
    className: "sol-closing-ask"
  }, sol.closing.ask)), /*#__PURE__*/React.createElement("div", {
    className: "sol-closing-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--cyan btn--lg"
  }, sol.cta, " ", /*#__PURE__*/React.createElement(Icon.arrow, null)))))));
}

// ─────────────────────────────────────────────────────────────────
// Solutions hub
// ─────────────────────────────────────────────────────────────────
function SolutionsPage() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("section", {
    className: "svc-hero sol-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-hero-grid-bg",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container sol-hub-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-kicker"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-dot"
  }), " Solutions"), /*#__PURE__*/React.createElement("h1", null, "Business problems we solve"), /*#__PURE__*/React.createElement("div", {
    className: "exp-hero-divider"
  }), /*#__PURE__*/React.createElement("p", {
    className: "svc-hero-sub"
  }, "Start from the problem, not the technology. Each solution below explains what we fix, how it works with the systems you already run and what it takes to get there."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sol-hub-grid"
  }, SOLUTION_SLUGS.map(sl => {
    const s = SOLUTIONS_DATA[sl];
    return /*#__PURE__*/React.createElement("a", {
      key: sl,
      href: "/solutions/" + sl,
      className: "sol-hub-card reveal"
    }, /*#__PURE__*/React.createElement("span", {
      className: "sol-card-ic"
    }, solIcon(s.icon)), /*#__PURE__*/React.createElement("h2", null, s.h1), /*#__PURE__*/React.createElement("p", null, s.lead), /*#__PURE__*/React.createElement("span", {
      className: "cs-link"
    }, "Read more ", /*#__PURE__*/React.createElement(Icon.arrow, null)));
  })), /*#__PURE__*/React.createElement("p", {
    className: "sol-hub-foot"
  }, "Building an AI product for your own customers? See ", /*#__PURE__*/React.createElement("a", {
    href: "/service/ai-product-engineering"
  }, "AI-Native Product Engineering"), "."))), /*#__PURE__*/React.createElement(CTAStrip, null));
}
window.SOLUTIONS_DATA = SOLUTIONS_DATA;
window.SolutionDetailPage = SolutionDetailPage;
window.SolutionsPage = SolutionsPage;
