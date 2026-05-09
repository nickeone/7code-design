/* global React, Icon, TrustedBy, CaseStudies, WhyChoose, VerifiedAccredited, Expertise, Services, Testimonials, CTAStrip, HeroPatternMockup, HeroTerminal, HeroBoldSplit, CSCover */const { useState: useStateP, useEffect: useEffectP } = React;const SITE_ROOT = "https://www.7code.tech";function useSeoMeta(title, desc, ldJson) {  useEffectP(() => {    const prevTitle = document.title;    document.title = title;    const descEl = document.querySelector('meta[name="description"]');    const prevDesc = descEl ? descEl.getAttribute("content") : null;    if (descEl && desc) descEl.setAttribute("content", desc);    const ogTitle = document.querySelector('meta[property="og:title"]');    const ogDesc = document.querySelector('meta[property="og:description"]');    const ogUrl = document.querySelector('meta[property="og:url"]');    const twTitle = document.querySelector('meta[name="twitter:title"]');    const twDesc = document.querySelector('meta[name="twitter:description"]');    if (ogTitle) ogTitle.setAttribute("content", title);    if (ogDesc && desc) ogDesc.setAttribute("content", desc);    if (ogUrl) ogUrl.setAttribute("content", SITE_ROOT + (window.location.hash.slice(1) || window.location.pathname || "/"));    if (twTitle) twTitle.setAttribute("content", title);    if (twDesc && desc) twDesc.setAttribute("content", desc);    let s;    if (ldJson) {      s = document.createElement("script");      s.type = "application/ld+json"; s.setAttribute("data-page-ld", "1"); s.text = JSON.stringify(ldJson);      document.head.appendChild(s);    }    return () => {      document.title = prevTitle;      if (descEl && prevDesc !== null) descEl.setAttribute("content", prevDesc);      if (s) s.remove();    };  }, []);}
// ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
function FAQPage() {
  const faqs = [
    { q: "What does 7code do?", a: "7code is an AI-native nearshore software engineering partner based in Cluj-Napoca, Romania. We build custom software, LLM integrations, agentic workflows, and system integrations for startups and SMEs in the UK, EU, and UAE. Our team is senior-only (70%+ senior engineers) and we operate an AI-first delivery model â every project is assessed for automation and AI opportunities from day one." },
    { q: "What is nearshore software development?", a: "Nearshore software development means working with an engineering team in a nearby country with timezone overlap, shared working culture, and EU legal alignment. For UK and EU companies, Romania is a leading nearshore destination â 1â2 hour timezone difference with the UK, GDPR-native environment, and a deep pool of senior engineering talent. 7code operates from Cluj-Napoca, Romania, serving clients across the UK, Europe, and UAE." },
    { q: "What AI services does 7code offer?", a: "7code offers five core AI service lines: LLM integration (embedding GPT-4o, Claude, Gemini into existing products); agentic workflow automation (multi-step AI agents for complex business processes); RAG systems (connecting AI to proprietary data); AI copilots (custom AI assistants for internal or customer-facing use); and AI process automation (replacing manual workflows with intelligent pipelines). We also offer an Operational Quick Scan to identify and prioritise automation opportunities." },
    { q: "How do you integrate LLMs into an existing product?", a: "7code follows a five-step LLM integration process: (1) Use-case mapping â identifying whether your need is extraction, generation, classification, or agentic reasoning; (2) Context architecture â designing RAG pipelines, conversation history, or summarisation chains; (3) Model selection â matching capability to latency and cost; (4) Evaluation framework â golden datasets and regression tests before shipping; (5) Observability â cost-per-query tracking from sprint one. Most production LLM features take 6â10 weeks from spec to deployment." },
    { q: "What is the difference between staff augmentation and a dedicated team?", a: "In staff augmentation, 7code provides engineers who join your existing team under your management. You direct the work. A dedicated team means 7code manages delivery end-to-end â engineers, tech lead, and delivery governance included. Staff augmentation is best for teams with internal technical leadership that need extra capacity. A dedicated team is best when you don't have internal engineering leadership or want to move faster than hiring allows." },
    { q: "How quickly can 7code allocate a team?", a: "7code can allocate a team in 2â4 weeks from signed contract. This is significantly faster than hiring, which typically takes 3â6 months for senior roles. We maintain a bench of available engineers and pre-vet candidates continuously so we can move fast without compromising on quality." },
    { q: "What are 7code's engineering rates?", a: "7code's rates: Mid-level engineers â¬30â35/hour; Senior engineers â¬40â50/hour; Architect-level engineers â¬60â80/hour. These are 40â60% below London market rates with equivalent or higher seniority. All rates are transparent with no hidden markups." },
    { q: "Is 7code GDPR compliant?", a: "Yes. 7code operates under Romanian and EU law, meaning GDPR compliance is built-in â not an add-on. Our engineers understand EU data processing requirements and can correctly configure data processing agreements with model providers (OpenAI, Anthropic, Google). For UK clients post-Brexit, we structure arrangements to comply with UK GDPR equivalents. This is a key nearshore advantage: EU-jurisdiction teams are GDPR-native by default." },
    { q: "What industries does 7code work in?", a: "7code has delivered production software across: FinTech (lending platforms, treasury dashboards, payment integrations), HealthTech (EHR systems, AI-powered onboarding, clinical decision tools), Logistics (workflow automation, fleet management), Operations (ERP/CRM integrations, process automation), Defence & Security (situational awareness platforms), Energy & Utilities (IoT monitoring, predictive analytics), and SaaS products across multiple verticals." },
    { q: "What is an agentic workflow?", a: "An agentic workflow is an AI system that uses multi-step reasoning, tool use, and decision loops to complete complex tasks autonomously. Unlike a simple LLM call, an agent can search the web, read files, call APIs, write code, and make sequential decisions. In production, 7code implements agentic workflows using an orchestrator-worker architecture: a reasoning model coordinates specialised worker agents. Common use cases: document processing pipelines, automated onboarding, compliance checking, multi-source data reconciliation." },
    { q: "What is RAG and when should I use it?", a: "RAG (Retrieval-Augmented Generation) retrieves relevant documents from a knowledge base and injects them into the LLM's context at query time. Use RAG when your AI feature needs to answer questions from your proprietary data â support documentation, product manuals, legal contracts, internal wikis. Without RAG, the model answers from its training data only and will hallucinate company-specific information. 7code has built production RAG systems for document Q&A, compliance tools, and customer support copilots." },
    { q: "How does 7code ensure quality?", a: "Quality is enforced through: senior-only hiring (70% of engineers are senior-level); multi-stage technical screening including case studies; delivery governance with weekly sprint demos and monthly steering committees; and AI-specific quality gates â golden datasets, regression tests on every model version change, and human-in-the-loop checkpoints for high-stakes outputs. We track velocity, predictability, bug escape rate, and team utilisation as standard KPIs." },
    { q: "What engagement models does 7code offer?", a: "Three primary models: Staff Augmentation (client-managed, 7code provides engineers); Dedicated Teams (7code-managed delivery with full governance); End-to-End Product Development (7code owns the full lifecycle). We also offer four productized packages: Operational Quick Scan (2â3 weeks), AI-Ready Ops Blueprint (4â6 weeks), Automation Pilot (6â10 weeks), and Department Automation Sprint (10â16 weeks)." },
    { q: "Why choose a Romanian engineering team?", a: "Romania is a tier-1 European engineering hub. Cluj-Napoca hosts R&D centres for major EU tech companies and produces thousands of IT graduates annually. Key advantages: 1â2 hour timezone overlap with UK; 40â60% below London rates (15â25% below Poland); EU legal framework (GDPR-native); strong technical education and high English proficiency. 7code adds a senior-only hiring model on top of this baseline." },
    { q: "How does 7code handle AI projects that change scope mid-build?", a: "AI projects are inherently non-linear â architectures that look correct in the spec often need 2â3 pivots before they're production-ready. 7code manages this through transparent communication on architecture decisions as they emerge; time-and-materials contracts for AI work; weekly steering committees where scope changes are assessed and repriced; and a culture of strategic opinions, not just execution." },
    { q: "Does 7code work with startups or only large companies?", a: "7code's sweet spot is Series AâB startups and SMEs with â¬5Mââ¬50M revenue that need to move fast and are serious about AI. We also work with larger enterprises â we've built platforms for a Monaco-based yacht engineering firm and a UAE fleet management company. We don't take pre-revenue projects or pure MVPs under â¬25k â our senior-only model has a minimum engagement threshold." },
    { q: "What is the Operational Quick Scan?", a: "The Operational Quick Scan is 7code's entry-point productized service. Over 2â3 weeks, we audit your processes, identify manual bottlenecks, map automation opportunities, and produce an ROI estimate per initiative. Output: a prioritised automation roadmap with effort, timeline, and expected return for each item. Designed for companies evaluating AI that don't know where to start. Cost: typically â¬5,000ââ¬10,000 depending on scope." },
    { q: "How does 7code handle AI observability?", a: "7code instruments every agent action: inputs, tool calls, intermediate reasoning, outputs, latency, and cost per query. We use structured logging and build replay systems so failures can be debugged against real inputs. For LLM observability tooling we work with Langfuse, Helicone, and Braintrust. Cost-per-query is tracked as a first-class metric from sprint one." },
    { q: "What makes 7code different from a standard software agency?", a: "Three things: (1) AI-first by default â every project is assessed for AI opportunities from discovery, not as an afterthought; (2) Senior-only engineers â no juniors, no padding headcount. Every engineer can make architecture decisions; (3) Business outcome focus â we track ROI, not just velocity. Time saved, error rate reduced, revenue impact. We also provide business process consulting alongside technical delivery." },
    { q: "How do I start a project with 7code?", a: "Contact us at office@7code.ro or book a discovery call at 7code.tech/contact. We run a 60-minute discovery session to understand your needs and constraints, then propose an engagement model and scope. Once agreed, team allocation begins within 2â4 weeks. For AI projects, we typically recommend starting with an Operational Quick Scan before committing to a build â it de-risks the investment and clarifies ROI." },
  ];

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "FAQ â 7code AI-Native Software Engineering",
    "url": SITE_ROOT + "/faq",
    "mainEntity": faqs.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a },
    })),
  };

  useSeoMeta(
    "FAQ â AI Engineering, Nearshore Dev & LLM Integration | 7code",
    "Answers to common questions about 7code's AI engineering services, nearshore development from Romania, LLM integration, pricing, GDPR compliance, and how to start a project.",
    ldJson
  );

  const [open, setOpen] = useStateP(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>FAQ</span>
          <h1>Questions, answered.</h1>
          <p style={{ maxWidth: 560, margin: "0 auto" }}>Everything you need to know about 7code's AI engineering services, nearshore development, LLM integration, and how we work.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="reveal" style={{ borderBottom: "1px solid var(--slate-200)", transitionDelay: (i % 5 * 40) + "ms" }}>
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "24px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                >
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: isOpen ? "var(--cyan-600)" : "var(--ink)", margin: 0, lineHeight: 1.35, letterSpacing: "-0.01em", transition: "color .2s" }}>
                    {item.q}
                  </h3>
                  <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: "50%", background: isOpen ? "var(--cyan-600)" : "var(--slate-100)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s, transform .2s", transform: isOpen ? "rotate(45deg)" : "none" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v10M1 6h10" stroke={isOpen ? "#fff" : "var(--slate-500)"} strokeWidth="1.8" strokeLinecap="round"/></svg>
                  </span>
                </button>
                {isOpen && (
                  <div style={{ paddingBottom: 24, color: "var(--slate-700)", fontSize: 15, lineHeight: 1.7 }}>{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="section section--alt" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Still have questions?</span>
          <h2 style={{ marginTop: 12 }}>Let's talk through your specific situation</h2>
          <p style={{ color: "var(--slate-500)", marginTop: 12, marginBottom: 32, fontSize: 17 }}>Every project is different. Book a 30-minute call and get a direct answer to your specific questions.</p>
          <a href="/contact" className="btn btn--cyan btn--lg">Book a discovery call <Icon.arrow /></a>
        </div>
      </section>
    </div>
  );
}


window.FAQPage = FAQPage;
