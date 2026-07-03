/* global React, Icon, TrustedBy, CaseStudies, WhyChoose, VerifiedAccredited, Expertise, Services, Testimonials, CTAStrip, HeroPatternMockup, HeroTerminal, HeroBoldSplit, CSCover */

const {
  useState: useStateP,
  useEffect: useEffectP
} = React;
const SITE_ROOT = "https://www.7code.tech";
function useSeoMeta(title, desc) {
  useEffectP(() => {
    const prevTitle = document.title;
    document.title = title;
    const descEl = document.querySelector('meta[name="description"]');
    const prevDesc = descEl ? descEl.getAttribute("content") : null;
    if (descEl && desc) descEl.setAttribute("content", desc);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    if (ogDesc && desc) ogDesc.setAttribute("content", desc);
    if (ogUrl) ogUrl.setAttribute("content", SITE_ROOT + (window.location.hash.slice(1) || window.location.pathname || "/"));
    if (twTitle) twTitle.setAttribute("content", title);
    if (twDesc && desc) twDesc.setAttribute("content", desc);
    return () => {
      document.title = prevTitle;
      if (descEl && prevDesc !== null) descEl.setAttribute("content", prevDesc);
    };
  }, []);
}

// ──────────────────────────────────────────────────────────────────
// HOME
// ──────────────────────────────────────────────────────────────────
function HomePage({
  heroVariant
}) {
  useSeoMeta("AI-Native Software Engineering Agency — 7code", "AI-native software engineering agency in Romania. LLM products, agent workflows, and cloud infrastructure for UK, EU, and UAE companies. Senior team.");
  const homeFaqs = [{
    q: "Where is 7code located?",
    a: "7code (Seven Code Development SRL) is headquartered in Cluj-Napoca, Romania — one of Central Europe's leading technology hubs. Cluj-Napoca is home to major engineering universities and a high concentration of senior software talent. 7code operates remotely across UK, EU, UAE, and US client time zones."
  }, {
    q: "What countries does 7code serve?",
    a: "7code serves clients primarily in the United Kingdom, the European Union, the United Arab Emirates, and the United States. The team operates in Central European Time (CET+1/+2), giving strong daily overlap with UK and EU clients and workable early/late overlap with UAE and US East Coast teams. All client communication is conducted in English."
  }, {
    q: "How quickly can 7code start a new project?",
    a: "7code can typically begin a Discovery Sprint within one to two weeks of agreement signature. Full team mobilisation for a build engagement follows two to three weeks after Discovery. For urgent requirements, a fast-track onboarding process is available. Contact office@7code.ro to discuss your timeline — 7code will confirm availability within 48 hours."
  }, {
    q: "What is 7code's Clutch rating?",
    a: "7code holds a 4.9-star rating on Clutch.co based on 11 verified client reviews (as of 2025). Clutch reviews cover engagement quality, delivery timeliness, communication, and willingness to recommend. All reviews are verified by Clutch's research team through direct client interviews. View 7code's Clutch profile at clutch.co/profile/7code."
  }, {
    q: "What makes 7code different from other software agencies?",
    a: "7code is senior-only and AI-first — no juniors, no generalist teams learning AI on the job. Every engagement is led by engineers who have shipped AI products in production. 7code's nearshore Romania base delivers Western-quality engineering at nearshore rates, with timezone alignment to UK and EU clients. Business-outcome focus means we measure success by your KPIs, not hours billed."
  }];
  const Hero = heroVariant === "terminal" ? HeroTerminal : heroVariant === "bold" ? HeroBoldSplit : HeroPatternMockup;
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(TrustedBy, null), /*#__PURE__*/React.createElement(CaseStudies, {
    limit: 6
  }), /*#__PURE__*/React.createElement(WhyChoose, null), /*#__PURE__*/React.createElement(VerifiedAccredited, null), /*#__PURE__*/React.createElement(Expertise, {
    headTitle: "Our Expertise",
    headDesc: "We specialize in key sectors, delivering tailored digital solutions that drive growth and innovation."
  }), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
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
  }, homeFaqs.map((f, i) => /*#__PURE__*/React.createElement("details", {
    key: i,
    className: "svc-faq-item reveal",
    style: {
      transitionDelay: i * 40 + "ms"
    }
  }, /*#__PURE__*/React.createElement("summary", null, f.q), /*#__PURE__*/React.createElement("p", null, f.a)))))), /*#__PURE__*/React.createElement(CTAStrip, null));
}

// ──────────────────────────────────────────────────────────────────
// SERVICES HUB
// ──────────────────────────────────────────────────────────────────
function ServicesPage() {
  useSeoMeta("Services — AI Engineering, Integrations & Automation | 7Code", "7Code's service lines: AI-native product engineering, system integrations, AI & process automation, cloud and agentic infrastructure, AI engineering outstaffing, and LLM & agent development.");
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
  }, "Services"), /*#__PURE__*/React.createElement("h1", null, "AI Engineering, Integrations & Automation Services"), /*#__PURE__*/React.createElement("p", null, "End-to-end AI and software engineering across product builds, system integrations, cloud infrastructure, and outstaffing \u2014 delivered by a senior team with 20+ products shipped."))), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(CTAStrip, null));
}

// ──────────────────────────────────────────────────────────────────
// EXPERTISE
// ──────────────────────────────────────────────────────────────────
function ExpertisePage() {
  useSeoMeta("Industry Expertise, 7Code AI Engineering, Healthcare, Finance, Energy, Defence, HR, Operations", "7Code delivers domain-grounded AI and software engineering across Healthcare, FinTech, Energy & Utilities, Defence & Security, HR Tech, and Operations, from Cluj-Napoca, Romania, serving clients across Europe, the UK, and the Middle East.");
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
  }, "Expertise"), /*#__PURE__*/React.createElement("h1", null, "Six industries.", /*#__PURE__*/React.createElement("br", null), "One engineering practice."), /*#__PURE__*/React.createElement("p", null, "From healthcare to defence, we bring the same standard of engineering rigor and product thinking to every sector we serve."))), /*#__PURE__*/React.createElement(Expertise, {
    headTitle: "Industries we serve",
    headDesc: "Tailored digital solutions backed by domain knowledge and proven delivery patterns."
  }), /*#__PURE__*/React.createElement(CaseStudies, {
    limit: 6
  }), /*#__PURE__*/React.createElement(CTAStrip, null));
}

// ──────────────────────────────────────────────────────────────────
// PROCESS
// ──────────────────────────────────────────────────────────────────
function ProcessPage() {
  useSeoMeta("How We Work, Our Engineering Process | 7Code Cluj-Napoca", "7Code's five-stage product engineering process: Discovery & Strategy, Design & Prototyping, Engineering Sprints, Launch & QA, and Iterate & Scale. Built for founders and product teams who need reliable delivery, not just velocity.");
  const steps = [{
    title: "Discovery & Strategy",
    desc: "We start by understanding your business, users, and constraints. Output: a clear product strategy and engineering plan.",
    deliverables: ["Product strategy doc", "Tech architecture", "Roadmap"]
  }, {
    title: "Design & Prototyping",
    desc: "Wireframes, hi-fi designs, and interactive prototypes, validated with real users before a line of production code is written.",
    deliverables: ["Design system", "Hi-fi mockups", "Clickable prototype"]
  }, {
    title: "Engineering Sprints",
    desc: "Two-week sprints with continuous deployment. You see progress every Friday and can steer the roadmap as you go.",
    deliverables: ["Production-ready code", "Demo videos", "Sprint reports"]
  }, {
    title: "Launch & QA",
    desc: "Comprehensive testing, performance optimization, and a launch playbook tailored to your audience and stack.",
    deliverables: ["Test coverage", "Launch playbook", "Performance audit"]
  }, {
    title: "Iterate & Scale",
    desc: "We monitor, measure, and iterate post-launch. Long-term partnership means your product keeps compounding value.",
    deliverables: ["Analytics dashboard", "Monthly retrospectives", "Scaling plan"]
  }];
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
  }, "Our process"), /*#__PURE__*/React.createElement("h1", null, "How We Build AI-Native Products"), /*#__PURE__*/React.createElement("p", null, "A repeatable five-stage process that balances speed with quality. Built around outcomes, not deliverables."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "process"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "process-step reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "process-num"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
    className: "process-content"
  }, /*#__PURE__*/React.createElement("h3", null, s.title), /*#__PURE__*/React.createElement("p", null, s.desc), /*#__PURE__*/React.createElement("div", {
    className: "process-deliverables"
  }, s.deliverables.map((d, j) => /*#__PURE__*/React.createElement("span", {
    key: j,
    className: "tag"
  }, d))))))))), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(CTAStrip, null));
}

// ──────────────────────────────────────────────────────────────────
// ABOUT
// ──────────────────────────────────────────────────────────────────
function AboutPage() {
  React.useEffect(() => {
    const prev = document.title;
    document.title = "About 7Code, AI-Native Software Engineering Agency, Cluj-Napoca, Romania";
    const descEl = document.querySelector('meta[name="description"]');
    const prevDesc = descEl ? descEl.getAttribute("content") : null;
    if (descEl) descEl.setAttribute("content", "7Code is an AI-first software engineering agency based in Cluj-Napoca, Romania. We design, build, and operate AI-native products, LLM features, and cloud infrastructure for founders and product teams across Europe, the UK, and the Middle East.");
    return () => {
      document.title = prev;
      if (descEl && prevDesc !== null) descEl.setAttribute("content", prevDesc);
    };
  }, []);
  const stats = [{
    v: "2016",
    l: "Founded in Cluj-Napoca"
  }, {
    v: "20+",
    l: "Products shipped"
  }, {
    v: "12",
    l: "Industries served"
  }, {
    v: "4",
    l: "Countries with active clients"
  }];
  const mission = [{
    icon: Icon.target,
    title: "Always deliver more than expected",
    desc: "Going beyond the brief is not a courtesy, it's a standard. We track client satisfaction as a business metric and treat every engagement as an opportunity to earn a long-term partner, not just close a project."
  }, {
    icon: Icon.chart,
    title: "Build a scalable, predictable sales engine",
    desc: "Growth built on referrals and luck has a ceiling. We're building a structured, repeatable process for finding and winning clients, so the pipeline is something we design, not something that happens to us."
  }, {
    icon: Icon.users,
    title: "Hire slowly, fire quickly",
    desc: "Every hire shapes the culture and the quality bar. We take as long as we need to find people who are genuinely skilled and genuinely aligned with our values. We don't compromise on either, and we act fast when something isn't working."
  }, {
    icon: Icon.zap,
    title: "Build a reliable, autonomous core team",
    desc: "The best companies run on a team that doesn't need constant oversight. We invest in people who can own outcomes end-to-end: trusted enough to make decisions, skilled enough to make good ones, and aligned enough that they don't need to be told twice."
  }];
  const values = [{
    icon: Icon.heart,
    title: "Happy, satisfied clients",
    desc: "Client success is the only metric that matters at the end of an engagement. We measure outcomes, not hours logged, and we don't consider a project done until the client is genuinely happy with what was built and how it was built."
  }, {
    icon: Icon.pulse,
    title: "Growth, personal and professional",
    desc: "Everyone at 7Code is on a growth trajectory. We create space for learning, encourage stretch assignments, give honest feedback, and share the context people need to keep developing. Stagnation is a warning sign, not a steady state."
  }, {
    icon: Icon.layers,
    title: "Strong teamwork and collaboration",
    desc: "We build complex software in tight timelines, which only works if the team actually functions as a team. Clear communication, shared ownership of outcomes, and genuine respect for each other's work are not aspirations, they're how we operate."
  }, {
    icon: Icon.smile,
    title: "A fun, positive work environment",
    desc: "The best work comes from people who enjoy showing up. We take our craft seriously and our culture deliberately, because a positive environment isn't a perk, it's a competitive advantage that shows up in the quality of what we ship."
  }];
  const team = [{
    name: "Nicu Mardari",
    role: "CEO & Founder",
    initial: "N",
    photo: "/project/uploads/authors/nicu-mardari.jpg",
    bio: "Nicu Mardari founded 7code in Cluj-Napoca in 2016, building it from a boutique software studio into a specialist AI product engineering firm serving clients across the UK, EU, UAE, and US. As CEO, Nicu leads business development, client strategy, and commercial operations, working directly with founders, CTOs, and technology leaders on AI automation and product engineering engagements. He brings a decade of experience in nearshore software delivery and AI-first product strategy."
  }, {
    name: "Igor Mardari",
    role: "CTO & Co-Founder",
    initial: "I",
    photo: null,
    bio: "Igor Mardari is the co-founder and CTO of 7code, responsible for technical strategy, engineering standards, and the architecture of client AI systems. Since co-founding 7code in 2016, Igor has led the technical evolution of the company from general software development into AI-native product engineering and cloud agentic infrastructure. He brings deep expertise in LLM system design, cloud architecture at scale, and AI product evaluation frameworks, and sets the technical quality standards that underpin 7code's senior-only delivery model."
  }, {
    name: "Daniela Cazac",
    role: "CMO",
    initial: "D",
    photo: "/project/uploads/authors/daniela-cazac.jpg",
    bio: null
  }];
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
  }, "About 7Code"), /*#__PURE__*/React.createElement("h1", null, "About 7code \u2014 Senior AI Engineering Team"), /*#__PURE__*/React.createElement("p", null, "7Code is an AI-first software engineering agency based in Cluj-Napoca, Romania. Since 2016, we've designed, built, and operated AI-native products, LLM integrations, and cloud infrastructure for founders and product teams across Europe, the UK, and the Middle East, acting as the senior engineering team they needed but didn't want to hire full-time."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container about-split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-split-text reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Who we are"), /*#__PURE__*/React.createElement("h2", null, "A Cluj-Napoca engineering team with a track record across 12 industries"), /*#__PURE__*/React.createElement("p", null, "We were founded in Cluj-Napoca, Romania's fastest-growing tech hub, with a single belief: that a small, senior, well-organised team consistently outperforms a large, bloated one. Every engineer at 7Code is hands-on, every project gets direct access to the people who actually write the code, and every engagement is treated as a product partnership, not a service contract."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16
    }
  }, "From HIPAA-compliant HealthTech platforms and European Parliament e-voting infrastructure to real-time IoT fleet systems and LLM-powered consumer apps, we've shipped across the full stack, and across the full risk spectrum. Our clients range from early-stage founders raising their first round to established enterprises integrating AI into production systems that can't go down."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16
    }
  }, "Cluj-Napoca gives us a structural advantage: a deep pool of senior engineering talent, a lower cost base than Western Europe, and a timezone that overlaps comfortably with the UK, EU, and even UAE teams. We're Romanian-built and globally delivered."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/resources/nearshore-romania-vs-offshore-asia",
    style: {
      color: "var(--cyan-600)",
      fontWeight: 600
    }
  }, "Compare nearshore Romania vs offshore Asia \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "about-split-stats reveal"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "about-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-stat-v"
  }, s.v), /*#__PURE__*/React.createElement("div", {
    className: "about-stat-l"
  }, s.l)))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Our mission"), /*#__PURE__*/React.createElement("h2", null, "Always deliver more than expected."), /*#__PURE__*/React.createElement("p", null, "Four principles that shape how we hire, how we sell, how we operate, and how we grow, in that order.")), /*#__PURE__*/React.createElement("div", {
    className: "values-grid values-grid--4"
  }, mission.map((m, i) => {
    const I = m.icon;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "card reveal",
      style: {
        transitionDelay: i * 60 + "ms"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "icon-tile"
    }, /*#__PURE__*/React.createElement(I, null)), /*#__PURE__*/React.createElement("h3", null, m.title), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 8,
        color: "var(--slate-500)"
      }
    }, m.desc));
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "What we believe"), /*#__PURE__*/React.createElement("h2", null, "Four values, lived daily."), /*#__PURE__*/React.createElement("p", null, "These aren't words on a wall. They're the criteria we use when hiring, the standard we hold each other to, and the reason clients keep coming back.")), /*#__PURE__*/React.createElement("div", {
    className: "values-grid values-grid--4"
  }, values.map((v, i) => {
    const I = v.icon;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "card reveal",
      style: {
        transitionDelay: i * 60 + "ms"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "icon-tile"
    }, /*#__PURE__*/React.createElement(I, null)), /*#__PURE__*/React.createElement("h3", null, v.title), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 8,
        color: "var(--slate-500)"
      }
    }, v.desc));
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "The team"), /*#__PURE__*/React.createElement("h2", null, "The people behind the work"), /*#__PURE__*/React.createElement("p", null, "A tight-knit leadership team with deep technical roots, a shared obsession with quality, and enough client work under their belts to know what actually matters when a project is under pressure.")), /*#__PURE__*/React.createElement("div", {
    className: "team-grid team-grid--3"
  }, team.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "team-card reveal",
    style: {
      transitionDelay: i * 60 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "team-photo"
  }, t.photo ? /*#__PURE__*/React.createElement("img", {
    src: t.photo,
    alt: t.name,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "top center"
    }
  }) : /*#__PURE__*/React.createElement("span", null, t.initial)), /*#__PURE__*/React.createElement("div", {
    className: "team-name"
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "team-role"
  }, t.role), t.bio && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontSize: 14,
      color: "var(--slate-500)",
      lineHeight: 1.6
    }
  }, t.bio)))))), /*#__PURE__*/React.createElement(CTAStrip, null));
}

// ──────────────────────────────────────────────────────────────────
// BLOG
// ──────────────────────────────────────────────────────────────────
function BlogPage() {
  const cats = ["All", "Engineering", "Design", "Strategy", "Case Study"];
  const [active, setActive] = useStateP("All");
  const posts = [{
    title: "Why we still bet on monoliths in 2026",
    cat: "Engineering",
    date: "Apr 28, 2026",
    read: "8 min read",
    kind: "ink"
  }, {
    title: "Designing for the API-first era",
    cat: "Design",
    date: "Apr 14, 2026",
    read: "6 min read",
    kind: "cyan"
  }, {
    title: "How we cut deploy time from 40m to 3m",
    cat: "Engineering",
    date: "Apr 02, 2026",
    read: "12 min read",
    kind: "finance"
  }, {
    title: "Three product bets that paid off",
    cat: "Strategy",
    date: "Mar 22, 2026",
    read: "5 min read",
    kind: "energy"
  }, {
    title: "Building accessible dashboards",
    cat: "Design",
    date: "Mar 12, 2026",
    read: "9 min read",
    kind: "health"
  }, {
    title: "Helix Health: scaling telehealth in 12 weeks",
    cat: "Case Study",
    date: "Mar 03, 2026",
    read: "10 min read",
    kind: "ops"
  }];
  const filtered = active === "All" ? posts : posts.filter(p => p.cat === active);
  const featured = posts[0];
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
  }, "Blog"), /*#__PURE__*/React.createElement("h1", null, "Notes from the workshop"), /*#__PURE__*/React.createElement("p", null, "Engineering, design, and strategy, the things we wish we'd known before we started."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-featured reveal"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "tag tag--ink",
    style: {
      marginBottom: 16
    }
  }, "Featured"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 12
    }
  }, featured.title), /*#__PURE__*/React.createElement("p", null, "An honest take on why distributed systems are still overkill for most products, and what to reach for instead."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn--cyan"
  }, "Read article ", /*#__PURE__*/React.createElement(Icon.arrow, null)))), /*#__PURE__*/React.createElement("div", {
    className: "blog-featured-cover"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 48,
      color: "rgba(255,255,255,0.9)",
      letterSpacing: "-0.02em",
      textAlign: "center",
      padding: 24
    }
  }, "Ship the boring thing."))), /*#__PURE__*/React.createElement("div", {
    className: "blog-categories"
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: "blog-cat" + (c === active ? " is-active" : ""),
    onClick: () => setActive(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    className: "blog-grid"
  }, filtered.map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    className: "blog-card reveal",
    style: {
      transitionDelay: i % 3 * 60 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-cover cover--" + p.kind
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: 16,
      textAlign: "center"
    }
  }, p.cat)), /*#__PURE__*/React.createElement("div", {
    className: "blog-card-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-meta"
  }, /*#__PURE__*/React.createElement("span", null, p.date), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, p.read)), /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("span", {
    className: "cs-link",
    style: {
      marginTop: 8
    }
  }, "Read article ", /*#__PURE__*/React.createElement(Icon.arrow, null)))))))), /*#__PURE__*/React.createElement(CTAStrip, null));
}

// ──────────────────────────────────────────────────────────────────
// CONTACT
// ──────────────────────────────────────────────────────────────────
// Reads UTM params + referrer + landing_page from the current URL/document.
function getAttribution() {
  const p = new URLSearchParams(window.location.search);
  return {
    utm_source: p.get("utm_source") || "",
    utm_medium: p.get("utm_medium") || "",
    utm_campaign: p.get("utm_campaign") || "",
    utm_term: p.get("utm_term") || "",
    utm_content: p.get("utm_content") || "",
    landing_page: window.location.href,
    referrer: document.referrer
  };
}

// Persists first-touch attribution in localStorage so return visits still carry the original source.
const FIRST_TOUCH_KEY = "7c_firsttouch";
function ensureFirstTouch() {
  try {
    if (!localStorage.getItem(FIRST_TOUCH_KEY)) {
      localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(getAttribution()));
    }
  } catch {/* storage blocked — ignore */}
}
function getFirstTouch() {
  try {
    const raw = localStorage.getItem(FIRST_TOUCH_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

// Resolves the GA4 client_id asynchronously; falls back to parsing the _ga cookie.
function resolveGaClientId() {
  return new Promise(resolve => {
    try {
      if (typeof window.gtag === "function") {
        window.gtag("get", "G-109V5ZWVD8", "client_id", cid => resolve(cid || ""));
        return;
      }
    } catch {/* gtag not ready */}
    // Fallback: parse _ga cookie value "GA1.1.<cid_part1>.<cid_part2>"
    try {
      const match = document.cookie.match(/(?:^|;\s*)_ga=([^;]+)/);
      if (match) {
        const parts = decodeURIComponent(match[1]).split(".");
        resolve(parts.length >= 4 ? parts.slice(2).join(".") : "");
        return;
      }
    } catch {/* ignore */}
    resolve("");
  });
}
function ContactPage() {
  useSeoMeta("Contact 7Code, Start a Project | Cluj-Napoca, Romania", "Get in touch with 7Code, AI-native software engineering agency in Cluj-Napoca, Romania. Tell us about your project — we'll respond within one business day.");
  const [form, setForm] = useStateP({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: ""
  });
  const [errors, setErrors] = useStateP({});
  const [sent, setSent] = useStateP(false);
  const [submitting, setSubmitting] = useStateP(false);
  const [serverError, setServerError] = useStateP(null);
  // IP geolocation is collected on mount to enrich lead context with approximate visitor location.
  const [geo, setGeo] = useStateP({
    city: "",
    region: "",
    country: ""
  });
  useEffectP(() => {
    ensureFirstTouch();
    // Fetch approximate location from ipapi.co — non-blocking, failure leaves geo blank.
    (async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const d = await res.json();
        setGeo({
          city: d.city || "",
          region: d.region || "",
          country: d.country_name || ""
        });
      } catch {/* geo unavailable — form still works */}
    })();
  }, []);
  const update = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  const submit = async e => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.email.trim()) errs.email = "Required";else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim() || form.message.length < 10) errs.message = "Tell us a little more";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitting(true);
    setServerError(null);

    // Resolve GA4 client_id — non-blocking, 1.5 s timeout so submit never hangs.
    let gaClientId = "";
    try {
      gaClientId = await Promise.race([resolveGaClientId(), new Promise(res => setTimeout(() => res(""), 1500))]);
    } catch {/* ignore */}
    const current = getAttribution();
    const firstTouch = getFirstTouch();
    const enriched = {
      ...form,
      // Current-session attribution
      utm_source: current.utm_source,
      utm_medium: current.utm_medium,
      utm_campaign: current.utm_campaign,
      utm_term: current.utm_term,
      utm_content: current.utm_content,
      landing_page: current.landing_page,
      referrer: current.referrer,
      ga_client_id: gaClientId,
      // First-touch attribution (preserved across return visits)
      ft_utm_source: firstTouch ? firstTouch.utm_source : current.utm_source,
      ft_utm_medium: firstTouch ? firstTouch.utm_medium : current.utm_medium,
      ft_utm_campaign: firstTouch ? firstTouch.utm_campaign : current.utm_campaign,
      ft_utm_term: firstTouch ? firstTouch.utm_term : current.utm_term,
      ft_utm_content: firstTouch ? firstTouch.utm_content : current.utm_content,
      ft_landing_page: firstTouch ? firstTouch.landing_page : current.landing_page,
      ft_referrer: firstTouch ? firstTouch.referrer : current.referrer,
      // Approximate visitor location (see privacy policy)
      city: geo.city,
      region: geo.region,
      country: geo.country
    };
    try {
      const res = await fetch("https://formspree.io/f/xdabgopp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(enriched)
      });
      const data = await res.json();
      if (data.ok) {
        setSent(true);
      } else {
        setServerError(data.errors ? data.errors.map(err => err.message).join(" ") : "Submission failed. Please try again.");
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };
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
  }, "Contact"), /*#__PURE__*/React.createElement("h1", null, "Start Your AI Engineering Project"), /*#__PURE__*/React.createElement("p", null, "Tell us a bit about your project, we'll get back to you within one business day with next steps."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-info reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--slate-500)"
    }
  }, "Prefer a quick chat? Pick whichever channel works best."), /*#__PURE__*/React.createElement("div", {
    className: "contact-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "icon-tile"
  }, /*#__PURE__*/React.createElement(Icon.email, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Email"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:office@7code.ro",
    style: {
      color: "var(--slate-500)"
    }
  }, "office@7code.ro"))), /*#__PURE__*/React.createElement("div", {
    className: "contact-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "icon-tile"
  }, /*#__PURE__*/React.createElement(Icon.pin, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Office"), /*#__PURE__*/React.createElement("a", {
    href: "https://share.google/kSWr5AJABJj33MMVu",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: "var(--slate-500)"
    }
  }, "Cluj-Napoca, Romania"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-cyan-50)",
      border: "1px solid var(--bg-cyan-100)",
      borderRadius: "var(--radius-lg)",
      padding: 24,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      marginBottom: 6,
      fontFamily: "var(--font-display)"
    }
  }, "Currently accepting new partnerships"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--slate-500)",
      fontSize: 14
    }
  }, "For Q2 2026. We typically respond within 24 hours."))), /*#__PURE__*/React.createElement("div", {
    className: "form-card reveal"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    className: "form-success"
  }, /*#__PURE__*/React.createElement("div", {
    className: "check-circle"
  }, /*#__PURE__*/React.createElement(Icon.check, {
    style: {
      width: 28,
      height: 28
    }
  })), /*#__PURE__*/React.createElement("h3", null, "Thanks, we got it."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      color: "var(--slate-500)"
    }
  }, "We'll be in touch within one business day.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field" + (errors.name ? " field--error" : "")
  }, /*#__PURE__*/React.createElement("label", null, "Name"), /*#__PURE__*/React.createElement("input", {
    value: form.name,
    onChange: update("name"),
    placeholder: "Jane Doe"
  }), errors.name && /*#__PURE__*/React.createElement("span", {
    className: "field-error"
  }, errors.name)), /*#__PURE__*/React.createElement("div", {
    className: "field" + (errors.email ? " field--error" : "")
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    value: form.email,
    onChange: update("email"),
    placeholder: "jane@company.com"
  }), errors.email && /*#__PURE__*/React.createElement("span", {
    className: "field-error"
  }, errors.email))), /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Company"), /*#__PURE__*/React.createElement("input", {
    value: form.company,
    onChange: update("company"),
    placeholder: "Acme Inc."
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Budget"), /*#__PURE__*/React.createElement("select", {
    value: form.budget,
    onChange: update("budget")
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select..."), /*#__PURE__*/React.createElement("option", null, "$25k \u2013 $50k"), /*#__PURE__*/React.createElement("option", null, "$50k \u2013 $150k"), /*#__PURE__*/React.createElement("option", null, "$150k \u2013 $500k"), /*#__PURE__*/React.createElement("option", null, "$500k+")))), /*#__PURE__*/React.createElement("div", {
    className: "field" + (errors.message ? " field--error" : "")
  }, /*#__PURE__*/React.createElement("label", null, "Tell us about your project"), /*#__PURE__*/React.createElement("textarea", {
    rows: "5",
    value: form.message,
    onChange: update("message"),
    placeholder: "What are you trying to build? Any constraints, timelines, or success metrics we should know about?"
  }), errors.message && /*#__PURE__*/React.createElement("span", {
    className: "field-error"
  }, errors.message)), serverError && /*#__PURE__*/React.createElement("div", {
    className: "field-error",
    style: {
      marginBottom: 12,
      fontSize: 14
    }
  }, serverError), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn--cyan btn--lg",
    style: {
      width: "100%"
    },
    disabled: submitting
  }, submitting ? "Sending…" : /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, "Send message ", /*#__PURE__*/React.createElement(Icon.arrow, null)))))))));
}

// ──────────────────────────────────────────────────────────────────
// CASE STUDIES, moved to case-studies.jsx (variants live there)
// ──────────────────────────────────────────────────────────────────
function _CaseStudiesPage_DEPRECATED() {
  const cats = ["All", "Healthcare", "Finance", "Energy", "Operations", "Defence", "AI / SaaS"];
  const [active, setActive] = useStateP("All");
  const items = [{
    kind: "health",
    title: "Telehealth platform for a national clinic network",
    meta: ["Healthcare", "12 weeks"],
    result: "+38% appointment volume",
    tag: "Featured"
  }, {
    kind: "finance",
    title: "Real-time treasury dashboard for fintech ops team",
    meta: ["Finance", "8 weeks"],
    result: "Cut close time by 60%"
  }, {
    kind: "energy",
    title: "IoT monitoring + predictive maintenance for utility",
    meta: ["Energy", "16 weeks"],
    result: "12% energy savings YoY"
  }, {
    kind: "ops",
    title: "Workflow automation for global logistics provider",
    meta: ["Operations", "10 weeks"],
    result: "$4.2M annual savings"
  }, {
    kind: "defence",
    title: "Situational awareness platform for defence agency",
    meta: ["Defence", "20 weeks"],
    result: "8× faster threat triage"
  }, {
    kind: "cyan",
    title: "AI-powered support copilot for B2B SaaS",
    meta: ["AI / SaaS", "6 weeks"],
    result: "47% deflection rate"
  }];
  const filtered = active === "All" ? items : items.filter(i => i.meta[0] === active);
  const stats = [{
    v: "20+",
    l: "Projects delivered"
  }, {
    v: "12",
    l: "Industries served"
  }, {
    v: "98%",
    l: "Satisfied clients"
  }, {
    v: "$120M+",
    l: "Revenue impact"
  }];
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
  }, "Case studies"), /*#__PURE__*/React.createElement("h1", null, "Outcomes, not just deliverables"), /*#__PURE__*/React.createElement("p", null, "A selection of products we've shipped with our partners, across healthcare, finance, energy, defence and beyond."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-row reveal",
    style: {
      marginTop: 0,
      marginBottom: 56
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "stat",
    style: {
      transitionDelay: i * 60 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-value"
  }, s.v), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, s.l)))), /*#__PURE__*/React.createElement("div", {
    className: "blog-categories"
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: "blog-cat" + (c === active ? " is-active" : ""),
    onClick: () => setActive(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    className: "cs-grid"
  }, filtered.map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: c.title,
    href: "/blog",
    className: "cs-card reveal",
    style: {
      transitionDelay: i % 3 * 80 + "ms"
    }
  }, /*#__PURE__*/React.createElement(CSCover, {
    kind: c.kind,
    label: c.meta[0]
  }), c.tag && /*#__PURE__*/React.createElement("div", {
    className: "cs-tag-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag tag--ink"
  }, c.tag)), /*#__PURE__*/React.createElement("div", {
    className: "cs-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-meta"
  }, c.meta.map((m, j) => /*#__PURE__*/React.createElement("span", {
    key: j
  }, m))), /*#__PURE__*/React.createElement("h3", null, c.title), /*#__PURE__*/React.createElement("div", {
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
  }), " ", c.result), /*#__PURE__*/React.createElement("span", {
    className: "cs-link"
  }, "Read case study ", /*#__PURE__*/React.createElement(Icon.arrow, null)))))), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "64px 0",
      color: "var(--slate-500)"
    }
  }, "No case studies in this category yet, but we're always shipping."))), /*#__PURE__*/React.createElement(CTAStrip, null));
}

// ──────────────────────────────────────────────────────────────────
// AI MVP DEVELOPMENT LANDING PAGE
// ──────────────────────────────────────────────────────────────────
function AiMvpPage() {
  useSeoMeta("AI MVP Development — Ship in 6 Weeks | 7code", "AI MVP development by 7Code. LLM-powered products designed, built, and shipped in six weeks. Evaluation harness, cloud infrastructure, and production launch included.");
  const steps = [{
    step: "01",
    title: "Week 1–2: Discovery & eval design",
    desc: "We map the product against LLM capabilities, define what 'good' looks like, and build the held-out evaluation dataset before writing a line of product code. Architecture decisions made here have a 10× impact on what's possible at week six."
  }, {
    step: "02",
    title: "Week 3–4: Build & score",
    desc: "Two-week sprint with a deployable build at the end. Every AI feature is scored against the held-out eval set at the sprint review — not demoed on cherry-picked prompts. Regressions are caught on day one, not month three."
  }, {
    step: "03",
    title: "Week 5–6: Harden & launch",
    desc: "Production hardening, observability, prompt versioning, cost controls, and a clean launch. You end week six with a shipped product, an eval harness your team can run, and dashboards for latency and token spend."
  }];
  const deliverables = [{
    icon: Icon.code,
    title: "LLM-powered product",
    desc: "Claude, GPT, or open-weight models integrated with streaming, structured outputs, and fallback paths designed from day one."
  }, {
    icon: Icon.cpu,
    title: "RAG or agent layer",
    desc: "Retrieval-augmented generation over your data, or a scoped agent pipeline with tool use and human-in-the-loop checkpoints."
  }, {
    icon: Icon.chart,
    title: "Evaluation harness",
    desc: "A held-out eval set and automated scoring that proves quality before every release and catches drift in production."
  }, {
    icon: Icon.cloud,
    title: "Production infrastructure",
    desc: "Cloud-native deployment (AWS, GCP, or Azure), CI/CD, monitoring, and cost controls included in the six-week scope."
  }, {
    icon: Icon.shield,
    title: "Prompt management",
    desc: "Versioned prompt library with A/B testing and regression tracking, not ad-hoc edits in a shared Notion doc."
  }, {
    icon: Icon.layers,
    title: "Handover package",
    desc: "Architecture docs, runbooks, and a working eval CI pipeline your engineering team can own from day one after launch."
  }];
  const faqs = [{
    q: "What is an AI MVP?",
    a: "An AI MVP is a minimum viable product built around a core LLM or agent capability — a copilot, a RAG search, an intelligent automation — shipped to real users in six weeks to validate the value proposition before a larger build investment. Unlike a traditional MVP, it needs an evaluation harness from day one, because AI quality degrades silently and you need a metric, not a vibe, to know if it's working."
  }, {
    q: "Can you really ship in six weeks?",
    a: "Yes. OctoLabs (AI support copilot) went from kick-off to a production system deflecting 47% of support tickets in six weeks. Daily8's AI moderation and summarisation features shipped inside a six-month engagement. The pattern: ruthlessly scoped capabilities, eval-gated sprints, and a team that doesn't need to learn the stack mid-project. The six-week clock starts with a real kick-off, not a discovery phase."
  }, {
    q: "What's included in the six-week scope?",
    a: "Product design (AI-aware UX), the LLM or agent integration, RAG pipeline if needed, evaluation harness, production cloud deployment, basic observability (latency, cost, error rate), and a handover package. It does not include extensive data migration, complex third-party integrations, or mobile apps, those extend the timeline."
  }, {
    q: "What if we want to build further after the MVP?",
    a: "Most clients do. We typically move to a sprint retainer (two-week sprints, rolling monthly) or an outstaffing arrangement where we embed one or two senior engineers in your team. The MVP's clean architecture and eval harness make it straightforward to add features without accumulating technical debt."
  }];
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
  }, "AI MVP Development"), /*#__PURE__*/React.createElement("h1", null, "AI MVP Development \u2014 Production-Ready in Weeks"), /*#__PURE__*/React.createElement("p", {
    className: "answer-first",
    style: {
      maxWidth: 720,
      margin: "16px auto 0",
      fontSize: 18,
      color: "var(--slate-700)"
    }
  }, "AI MVP development is the process of designing, building, and launching a production-ready AI product around one core LLM or agent capability. 7code ships AI MVPs in six weeks \u2014 including an evaluation harness, cloud infrastructure, and a real production launch \u2014 with fixed scope and pricing from \xA325k."), /*#__PURE__*/React.createElement("p", null, "We design, build, and ship LLM-powered products end-to-end, with an evaluation harness, cloud infrastructure, and a clean production launch, all inside a six-week fixed scope."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "center",
      marginTop: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--cyan btn--lg"
  }, "Start your AI MVP ", /*#__PURE__*/React.createElement(Icon.arrow, null)), /*#__PURE__*/React.createElement("a", {
    href: "/service/ai-product-engineering",
    className: "btn btn--ghost btn--lg"
  }, "See AI Product Engineering ", /*#__PURE__*/React.createElement(Icon.arrow, null))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "The problem"), /*#__PURE__*/React.createElement("h2", null, "Most AI projects take 6 months to ship nothing."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 680,
      margin: "0 auto"
    }
  }, "Discovery phases run long. The spec changes when the demo lands. Engineering starts before the eval set exists. By the time you have a production system, the model it was built on is two generations old. We've inherited enough of these projects to design against them.")))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "The 6-week process"), /*#__PURE__*/React.createElement("h2", null, "How we ship a production AI product in six weeks")), /*#__PURE__*/React.createElement("div", {
    className: "exp-process"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "exp-process-step reveal",
    style: {
      transitionDelay: i * 80 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "exp-process-num"
  }, s.step), /*#__PURE__*/React.createElement("div", {
    className: "exp-process-body"
  }, /*#__PURE__*/React.createElement("h3", null, s.title), /*#__PURE__*/React.createElement("p", null, s.desc))))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "What you get"), /*#__PURE__*/React.createElement("h2", null, "Six deliverables in six weeks")), /*#__PURE__*/React.createElement("div", {
    className: "svc-deliver-grid"
  }, deliverables.map((d, i) => {
    const I = d.icon;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "svc-deliver-card reveal",
      style: {
        transitionDelay: i % 3 * 60 + "ms"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "icon-tile",
      style: {
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(I, null)), /*#__PURE__*/React.createElement("h3", null, d.title), /*#__PURE__*/React.createElement("p", null, d.desc));
  })))), /*#__PURE__*/React.createElement("section", {
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
  }, "FAQ"), /*#__PURE__*/React.createElement("h2", null, "Questions before you start")), /*#__PURE__*/React.createElement("div", {
    className: "svc-faq"
  }, faqs.map((f, i) => /*#__PURE__*/React.createElement("details", {
    key: i,
    className: "svc-faq-item reveal",
    style: {
      transitionDelay: i * 40 + "ms"
    }
  }, /*#__PURE__*/React.createElement("summary", null, f.q), /*#__PURE__*/React.createElement("p", null, f.a)))))), /*#__PURE__*/React.createElement(CTAStrip, null));
}

// ──────────────────────────────────────────────────────────────────
// UK GEO LANDING PAGE
// ──────────────────────────────────────────────────────────────────
function UkGeoPage() {
  useSeoMeta("AI Development Agency for UK Companies | 7code Romania", "AI development agency serving UK companies from Cluj-Napoca, Romania. Same timezone overlap, senior engineers, LLM products, and nearshore rates. From £25k.");
  const reasons = [{
    icon: Icon.globe,
    title: "Timezone overlap",
    desc: "Cluj-Napoca is UTC+2 (UTC+3 in summer). UK teams get 7–8 hours of real-time overlap every workday — more than most US or Asian vendors."
  }, {
    icon: Icon.users,
    title: "Senior-only team",
    desc: "Every engineer is minimum 5 years of production experience. No juniors learning on your project. No outsourced subcontractors. Direct access to the people writing the code."
  }, {
    icon: Icon.zap,
    title: "AI-native from day one",
    desc: "We design LLMs, retrieval, and agents into the product from the first sprint — not bolted on after the architecture is set. Faster, cheaper, and categorically better outcomes."
  }, {
    icon: Icon.shield,
    title: "Compliance-ready",
    desc: "GDPR-native by default. HIPAA-compliant builds for healthcare clients. SOC 2-aligned practices for regulated industries. UK ICO familiarity across all active engagements."
  }, {
    icon: Icon.chart,
    title: "Nearshore rates",
    desc: "30–50% lower than equivalent London or Berlin agency rates. No compromise on quality — same seniority, same delivery standard, priced for a geography that gives us a structural cost advantage."
  }, {
    icon: Icon.layers,
    title: "Proven UK delivery",
    desc: "WholeSum (London), Melsonic (London), and multiple undisclosed UK scale-ups are among our active client base. References available from UK founders on request."
  }];
  const faqs = [{
    q: "Why Romania for UK AI development?",
    a: "Cluj-Napoca has become one of Europe's strongest engineering hubs — the same universities and talent pool that supply Google, UiPath, and Bitdefender. Paired with strong English fluency, 7–8 hours of daily overlap with the UK, and senior engineers at nearshore rates, it's the most structurally sound nearshore option for UK product companies."
  }, {
    q: "How do collaboration and communication work day-to-day?",
    a: "Your engineers join your Slack, your standups, and your sprint ceremonies. We document in your tools, review in your repo, and you have direct, unmediated access to the people writing the code. UK clients typically find us easier to communicate with than UK-based agencies, because we don't have layers between you and the engineering team."
  }, {
    q: "Are you familiar with UK contracts and procurement?",
    a: "Yes. We operate under UK-compatible service agreements (SoW, MSA, or project contracts), invoice in GBP or EUR, and can work inside most UK procurement frameworks. GDPR compliance is a default across all our engagements, not a bespoke add-on."
  }, {
    q: "How much does a typical project cost?",
    a: "AI MVPs start from £25k for a six-week engagement. Mid-scale products (12–20 weeks) typically run £60k–£180k. Ongoing outstaffing retainers are typically £6k–£12k per engineer per month depending on seniority and specialism. We're transparent on pricing in the first call — no hidden fees, no change-order culture."
  }];
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
  }, "AI Development Agency UK"), /*#__PURE__*/React.createElement("h1", null, "AI Development Agency for UK Companies"), /*#__PURE__*/React.createElement("p", {
    className: "answer-first",
    style: {
      maxWidth: 720,
      margin: "16px auto 0",
      fontSize: 18,
      color: "var(--slate-700)"
    }
  }, "7code is an AI development agency serving UK companies from Cluj-Napoca, Romania. UK clients get senior AI engineers, around seven hours of daily timezone overlap, GDPR-native delivery, and nearshore rates \u2014 with LLM products shipped in as little as six weeks and projects starting from \xA325k."), /*#__PURE__*/React.createElement("p", null, "Senior AI engineers from Cluj-Napoca, Romania. Seven hours of daily UK timezone overlap. Nearshore rates. GDPR-native delivery. LLM products shipped in six weeks."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "center",
      marginTop: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--cyan btn--lg"
  }, "Talk to the team ", /*#__PURE__*/React.createElement(Icon.arrow, null)), /*#__PURE__*/React.createElement("a", {
    href: "/case-studies",
    className: "btn btn--ghost btn--lg"
  }, "See our work ", /*#__PURE__*/React.createElement(Icon.arrow, null))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Why 7Code for UK teams"), /*#__PURE__*/React.createElement("h2", null, "Six structural advantages for UK-based product companies")), /*#__PURE__*/React.createElement("div", {
    className: "svc-deliver-grid"
  }, reasons.map((r, i) => {
    const I = r.icon;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "svc-deliver-card reveal",
      style: {
        transitionDelay: i % 3 * 60 + "ms"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "icon-tile",
      style: {
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(I, null)), /*#__PURE__*/React.createElement("h3", null, r.title), /*#__PURE__*/React.createElement("p", null, r.desc));
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(CaseStudies, {
    limit: 3
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
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
  }, "Frequently asked"), /*#__PURE__*/React.createElement("h2", null, "What UK founders typically ask")), /*#__PURE__*/React.createElement("div", {
    className: "svc-faq"
  }, faqs.map((f, i) => /*#__PURE__*/React.createElement("details", {
    key: i,
    className: "svc-faq-item reveal",
    style: {
      transitionDelay: i * 40 + "ms"
    }
  }, /*#__PURE__*/React.createElement("summary", null, f.q), /*#__PURE__*/React.createElement("p", null, f.a)))))), /*#__PURE__*/React.createElement(CTAStrip, null));
}

// ──────────────────────────────────────────────────────────────────
// COMPARE: AGENCY VS FREELANCER
// ──────────────────────────────────────────────────────────────────
function CompareAgencyFreelancerPage() {
  useSeoMeta("AI Agency vs AI Freelancer: Which Is Right for You? | 7code", "Choosing between an AI agency and a freelancer for your LLM project? Compare delivery speed, accountability, quality, and total cost — then decide.");
  const rows = [{
    aspect: "Team depth",
    agency: "Multi-discipline team: engineering, design, AI, devops, QA",
    freelancer: "One person across all roles, often sequentially"
  }, {
    aspect: "Delivery speed",
    agency: "Six weeks to production MVP with parallel tracks",
    freelancer: "Longer, single-threaded delivery with no buffer for illness or overload"
  }, {
    aspect: "AI quality controls",
    agency: "Eval harnesses, held-out test sets, CI gates, peer review",
    freelancer: "Prompt testing is typically manual and ad-hoc"
  }, {
    aspect: "Accountability",
    agency: "SoW, SLA, and a named engagement lead accountable to the contract",
    freelancer: "Contractual accountability harder to enforce in practice"
  }, {
    aspect: "Scaling up",
    agency: "Additional engineers on-demand from the same trusted team",
    freelancer: "Requires finding, onboarding, and trusting a new person"
  }, {
    aspect: "Bus factor",
    agency: "Knowledge distributed across the team and documented",
    freelancer: "High: all context is in one person's head"
  }, {
    aspect: "Cost (short-term)",
    agency: "Higher day rate, but fewer hidden costs from rework",
    freelancer: "Lower day rate, often higher total cost after iterations"
  }, {
    aspect: "Cost (long-term)",
    agency: "Predictable with retainer model, no re-onboarding cost",
    freelancer: "Unpredictable, re-onboarding cost each engagement"
  }, {
    aspect: "Compliance & security",
    agency: "GDPR, HIPAA, SOC 2 processes built into workflow",
    freelancer: "Varies widely by individual"
  }, {
    aspect: "Right for",
    agency: "Products, platforms, and AI systems that need to survive in production",
    freelancer: "Small integrations, clearly scoped scripts, or very early experiments"
  }];
  const whenAgency = ["The AI feature is user-facing and must work reliably under real traffic", "You need streaming UX, confidence indicators, and fallback paths", "There's a compliance requirement (GDPR, HIPAA, SOC 2)", "You're building a multi-step agent or a RAG pipeline over real data", "The project has more than 8 weeks of work or involves multiple disciplines", "You need an eval harness and CI quality gates before every release"];
  const whenFreelancer = ["You need a single well-scoped API integration or script", "It's a proof-of-concept with no production requirements", "The budget is under £5k and the risk of failure is low", "You already have a senior engineering team that needs one missing piece"];
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
  }, "AI Agency vs Freelancer"), /*#__PURE__*/React.createElement("h1", null, "AI Agency vs Freelancer: Which to Choose"), /*#__PURE__*/React.createElement("p", {
    className: "answer-first",
    style: {
      maxWidth: 720,
      margin: "16px auto 0",
      fontSize: 18,
      color: "var(--slate-700)"
    }
  }, "For most AI projects, an agency suits production builds that need accountability, multiple skill sets, and senior oversight, while a freelancer fits small, low-risk tasks on a tight budget. The right choice depends on your timeline, complexity, and risk tolerance \u2014 below we compare both across ten decision factors."), /*#__PURE__*/React.createElement("p", null, "The right answer depends on what you're building, your timeline, and your risk tolerance. Here's how the two options compare, honestly."))), /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "The comparison"), /*#__PURE__*/React.createElement("h2", null, "Agency vs freelancer across 10 dimensions")), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      overflowX: "auto",
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 15,
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      borderBottom: "2px solid var(--slate-200)"
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "left",
      padding: "12px 16px",
      fontFamily: "var(--font-display)",
      color: "var(--slate-900)",
      width: "20%"
    }
  }, "Dimension"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "left",
      padding: "12px 16px",
      fontFamily: "var(--font-display)",
      color: "var(--cyan-700)",
      width: "40%"
    }
  }, "AI Agency (7Code)"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "left",
      padding: "12px 16px",
      fontFamily: "var(--font-display)",
      color: "var(--slate-500)",
      width: "40%"
    }
  }, "Freelancer"))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderBottom: "1px solid var(--slate-100)",
      background: i % 2 === 0 ? "transparent" : "var(--slate-50)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 16px",
      fontWeight: 600,
      color: "var(--slate-700)"
    }
  }, r.aspect), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 16px",
      color: "var(--slate-700)"
    }
  }, r.agency), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 16px",
      color: "var(--slate-500)"
    }
  }, r.freelancer)))))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Choose an agency when\u2026"), /*#__PURE__*/React.createElement("ul", {
    style: {
      marginTop: 16,
      listStyle: "none",
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, whenAgency.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      color: "var(--slate-700)",
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement(Icon.zap, {
    style: {
      width: 16,
      height: 16,
      color: "var(--cyan-600)",
      marginTop: 3,
      flexShrink: 0
    }
  }), item)))), /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "A freelancer might be fine when\u2026"), /*#__PURE__*/React.createElement("ul", {
    style: {
      marginTop: 16,
      listStyle: "none",
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, whenFreelancer.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      color: "var(--slate-500)",
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      color: "var(--slate-400)",
      marginTop: 3,
      flexShrink: 0
    }
  }, "\u2013"), item))))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 800
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal section-head--left",
    style: {
      margin: 0,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Bottom line"), /*#__PURE__*/React.createElement("h2", null, "When to choose an AI agency")), /*#__PURE__*/React.createElement("p", {
    className: "reveal",
    style: {
      color: "var(--slate-600)",
      lineHeight: 1.8
    }
  }, "If you're building a product that needs to survive real user traffic, a production LLM system is not a one-person job. You need engineering across the stack (AI, backend, frontend, cloud), an evaluation harness that proves quality before every deploy, and a team accountable to a contract \u2014 not a single person who can disappear between freelance gigs."), /*#__PURE__*/React.createElement("p", {
    className: "reveal",
    style: {
      color: "var(--slate-600)",
      lineHeight: 1.8,
      marginTop: 16
    }
  }, "Freelancers are the right choice for experiments, small integrations, and projects where the risk of failure is low. For everything else \u2014 production AI, regulated industries, user-facing copilots, multi-step agents \u2014 an agency gives you depth, accountability, and the quality controls that keep a production system trustworthy over time."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    },
    className: "reveal"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--cyan btn--lg"
  }, "Talk to 7Code ", /*#__PURE__*/React.createElement(Icon.arrow, null))))), /*#__PURE__*/React.createElement(CTAStrip, null));
}
window.HomePage = HomePage;
window.ServicesPage = ServicesPage;
window.ExpertisePage = ExpertisePage;
window.ProcessPage = ProcessPage;
window.AboutPage = AboutPage;
window.BlogPage = BlogPage;
window.ContactPage = ContactPage;
window.AiMvpPage = AiMvpPage;
window.UkGeoPage = UkGeoPage;
window.CompareAgencyFreelancerPage = CompareAgencyFreelancerPage;

// ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
function FAQPage() {
  const faqs = [{
    q: "Where is 7code located?",
    a: "7code (Seven Code Development SRL) is headquartered in Cluj-Napoca, Romania — one of Central Europe’s leading technology hubs. Cluj-Napoca is home to major engineering universities and a high concentration of senior software talent. 7code operates remotely across UK, EU, UAE, and US client time zones."
  }, {
    q: "What countries does 7code serve?",
    a: "7code serves clients primarily in the United Kingdom, the European Union, the United Arab Emirates, and the United States. The team operates in Central European Time (CET+1/+2), giving strong daily overlap with UK and EU clients and workable early/late overlap with UAE and US East Coast teams. All client communication is conducted in English."
  }, {
    q: "How much does a project with 7code cost?",
    a: "7code’s rate card runs from EUR 30–35/h for mid-level engineers to EUR 40–50/h for seniors and EUR 60–80/h for architects. Fixed-price project options are available for well-defined scopes. Contact office@7code.ro for a tailored estimate based on your scope and team requirements."
  }, {
    q: "Does 7code sign NDAs?",
    a: "Yes. 7code signs NDAs before any substantive technical discussion. Clients may use their own NDA paper or 7code’s standard mutual NDA. All engineers placed on client projects sign individual confidentiality agreements. IP developed under a 7code engagement belongs to the client by default, with explicit assignment clauses included in the master services agreement."
  }, {
    q: "What is 7code’s engagement process?",
    a: "7code’s standard process has four phases: Discovery (requirements, architecture, team scoping — typically two weeks); Proposal (fixed-price or T&M scope with milestones); Build (two-week sprints with demos and sign-off); and Handover or Retainer (documentation, knowledge transfer, and optional ongoing support). Clients have a named account lead throughout the engagement."
  }, {
    q: "How quickly can 7code start a new project?",
    a: "7code can typically begin a Discovery Sprint within one to two weeks of agreement signature. Full team mobilisation for a build engagement follows two to three weeks after Discovery. For urgent requirements, a fast-track onboarding process is available. Contact office@7code.ro to discuss your timeline — 7code will confirm availability within 48 hours."
  }, {
    q: "What makes 7code different from other software agencies?",
    a: "7code is senior-only and AI-first — no juniors, no generalist teams learning AI on the job. Every engagement is led by engineers who have shipped AI products in production. 7code’s nearshore Romania base delivers Western-quality engineering at nearshore rates, with timezone alignment to UK and EU clients. Business-outcome focus means we measure success by your KPIs, not hours billed."
  }, {
    q: "Does 7code work with startups?",
    a: "Yes. 7code works with funded startups from Seed stage upward, as well as scale-ups and enterprise clients. For early-stage companies, 7code offers a Startup Track with a phased engagement model — beginning with a focused Discovery and MVP build before scaling the team. Equity arrangements in lieu of partial fees can be discussed for the right opportunities."
  }, {
    q: "What is 7code’s Clutch rating?",
    a: "7code holds a 4.9-star rating on Clutch.co based on 11 verified client reviews (as of 2025). Clutch reviews cover engagement quality, delivery timeliness, communication, and willingness to recommend. All reviews are verified by Clutch’s research team through direct client interviews. View 7code’s Clutch profile at clutch.co/profile/7code."
  }, {
    q: "Does 7code offer fixed-price or time-and-materials contracts?",
    a: "7code offers both. Fixed-price contracts are available for well-defined scopes — typically used for Discovery Sprints, MVP builds, and integration projects. Time-and-materials is the default for ongoing product development and outstaffing engagements where requirements evolve. Hybrid models are also available: fixed-price phases within a broader T&M programme."
  }, {
    q: "What industries does 7code have experience in?",
    a: "7code has delivered projects across healthcare, financial services, energy and utilities, defence, HR technology, and operations/logistics. Each industry brings specific compliance, data sensitivity, and integration requirements that 7code’s senior team is familiar with — from GDPR and HIPAA-adjacent data handling to sector-specific system integrations and regulatory reporting requirements."
  }, {
    q: "How does 7code ensure quality?",
    a: "Quality is enforced through a senior-only hiring policy, mandatory peer code review on all pull requests, AI-specific evaluation frameworks for model outputs, automated test suites (unit, integration, and end-to-end), and a pre-launch quality gate sign-off process. Each project has a named QA engineer. 7code does not ship without a passing test suite and architecture review sign-off."
  }, {
    q: "What does 7code do?",
    a: "7code is an AI-native nearshore software engineering partner based in Cluj-Napoca, Romania. We build custom software, LLM integrations, agentic workflows, and system integrations for startups and SMEs in the UK, EU, and UAE. Our team is senior-only (70%+ senior engineers) and we operate an AI-first delivery model — every project is assessed for automation and AI opportunities from day one."
  }, {
    q: "What is nearshore software development?",
    a: "Nearshore software development means working with an engineering team in a nearby country with timezone overlap, shared working culture, and EU legal alignment. For UK and EU companies, Romania is a leading nearshore destination — 1–2 hour timezone difference with the UK, GDPR-native environment, and a deep pool of senior engineering talent. 7code operates from Cluj-Napoca, Romania, serving clients across the UK, Europe, and UAE."
  }, {
    q: "What AI services does 7code offer?",
    a: "7code offers five core AI service lines: LLM integration (embedding GPT-4o, Claude, Gemini into existing products); agentic workflow automation (multi-step AI agents for complex business processes); RAG systems (connecting AI to proprietary data); AI copilots (custom AI assistants for internal or customer-facing use); and AI process automation (replacing manual workflows with intelligent pipelines). We also offer an Operational Quick Scan to identify and prioritise automation opportunities."
  }, {
    q: "How do you integrate LLMs into an existing product?",
    a: "7code follows a five-step LLM integration process: (1) Use-case mapping — identifying whether your need is extraction, generation, classification, or agentic reasoning; (2) Context architecture — designing RAG pipelines, conversation history, or summarisation chains; (3) Model selection — matching capability to latency and cost; (4) Evaluation framework — golden datasets and regression tests before shipping; (5) Observability — cost-per-query tracking from sprint one. Most production LLM features take 6–10 weeks from spec to deployment."
  }, {
    q: "What is the difference between staff augmentation and a dedicated team?",
    a: "In staff augmentation, 7code provides engineers who join your existing team under your management. You direct the work. A dedicated team means 7code manages delivery end-to-end — engineers, tech lead, and delivery governance included. Staff augmentation is best for teams with internal technical leadership that need extra capacity. A dedicated team is best when you don't have internal engineering leadership or want to move faster than hiring allows."
  }, {
    q: "What are 7code's engineering rates?",
    a: "7code's rates: Mid-level engineers €30–35/hour; Senior engineers €40–50/hour; Architect-level engineers €60–80/hour. These are 40–60% below London market rates with equivalent or higher seniority. All rates are transparent with no hidden markups."
  }, {
    q: "Is 7code GDPR compliant?",
    a: "Yes. 7code operates under Romanian and EU law, meaning GDPR compliance is built-in — not an add-on. Our engineers understand EU data processing requirements and can correctly configure data processing agreements with model providers (OpenAI, Anthropic, Google). For UK clients post-Brexit, we structure arrangements to comply with UK GDPR equivalents. This is a key nearshore advantage: EU-jurisdiction teams are GDPR-native by default."
  }, {
    q: "What is an agentic workflow?",
    a: "An agentic workflow is an AI system that uses multi-step reasoning, tool use, and decision loops to complete complex tasks autonomously. Unlike a simple LLM call, an agent can search the web, read files, call APIs, write code, and make sequential decisions. In production, 7code implements agentic workflows using an orchestrator-worker architecture: a reasoning model coordinates specialised worker agents. Common use cases: document processing pipelines, automated onboarding, compliance checking, multi-source data reconciliation."
  }, {
    q: "What is RAG and when should I use it?",
    a: "RAG (Retrieval-Augmented Generation) retrieves relevant documents from a knowledge base and injects them into the LLM's context at query time. Use RAG when your AI feature needs to answer questions from your proprietary data — support documentation, product manuals, legal contracts, internal wikis. Without RAG, the model answers from its training data only and will hallucinate company-specific information. 7code has built production RAG systems for document Q&A, compliance tools, and customer support copilots."
  }, {
    q: "How does 7code ensure quality?",
    a: "Quality is enforced through: senior-only hiring (70% of engineers are senior-level); multi-stage technical screening including case studies; delivery governance with weekly sprint demos and monthly steering committees; and AI-specific quality gates — golden datasets, regression tests on every model version change, and human-in-the-loop checkpoints for high-stakes outputs. We track velocity, predictability, bug escape rate, and team utilisation as standard KPIs."
  }, {
    q: "What engagement models does 7code offer?",
    a: "Three primary models: Staff Augmentation (client-managed, 7code provides engineers); Dedicated Teams (7code-managed delivery with full governance); End-to-End Product Development (7code owns the full lifecycle). We also offer four productized packages: Operational Quick Scan (2–3 weeks), AI-Ready Ops Blueprint (4–6 weeks), Automation Pilot (6–10 weeks), and Department Automation Sprint (10–16 weeks)."
  }, {
    q: "Why choose a Romanian engineering team?",
    a: "Romania is a tier-1 European engineering hub. Cluj-Napoca hosts R&D centres for major EU tech companies and produces thousands of IT graduates annually. Key advantages: 1–2 hour timezone overlap with the UK; 40–60% below London rates (15–25% below Poland); EU legal framework (GDPR-native); strong technical education and high English proficiency. 7code adds a senior-only hiring model on top of this baseline."
  }, {
    q: "How does 7code handle AI projects that change scope mid-build?",
    a: "AI projects are inherently non-linear — architectures that look correct in the spec often need 2–3 pivots before they're production-ready. 7code manages this through transparent communication on architecture decisions as they emerge; time-and-materials contracts for AI work; weekly steering committees where scope changes are assessed and repriced; and a culture of strategic opinions, not just execution."
  }, {
    q: "What is the Operational Quick Scan?",
    a: "The Operational Quick Scan is 7code's entry-point productized service. Over 2–3 weeks, we audit your processes, identify manual bottlenecks, map automation opportunities, and produce an ROI estimate per initiative. Output: a prioritised automation roadmap with effort, timeline, and expected return for each item. Designed for companies evaluating AI that don't know where to start. Cost: typically €5,000–€10,000 depending on scope."
  }, {
    q: "How does 7code handle AI observability?",
    a: "7code instruments every agent action: inputs, tool calls, intermediate reasoning, outputs, latency, and cost per query. We use structured logging and build replay systems so failures can be debugged against real inputs. For LLM observability tooling we work with Langfuse, Helicone, and Braintrust. Cost-per-query is tracked as a first-class metric from sprint one."
  }, {
    q: "How do I start a project with 7code?",
    a: "Contact us at office@7code.ro or book a discovery call at 7code.tech/contact. We run a 60-minute discovery session to understand your needs and constraints, then propose an engagement model and scope. Once agreed, team allocation begins within 2–4 weeks. For AI projects, we typically recommend starting with an Operational Quick Scan before committing to a build — it de-risks the investment and clarifies ROI."
  }];
  useSeoMeta("FAQ — AI Engineering, Nearshore Dev & LLM Integration | 7code", "Answers to common questions about 7code's AI engineering services, nearshore development from Romania, LLM integration, pricing, GDPR compliance, and how to start a project.");
  const [open, setOpen] = useStateP(null);
  const toggle = i => setOpen(open === i ? null : i);
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
  }, "FAQ"), /*#__PURE__*/React.createElement("h1", null, "Questions, answered."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 560,
      margin: "0 auto"
    }
  }, "Everything you need to know about 7code's AI engineering services, nearshore development, LLM integration, and how we work."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 800
    }
  }, faqs.map((item, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "reveal",
      style: {
        borderBottom: "1px solid var(--slate-200)",
        transitionDelay: i % 5 * 40 + "ms"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(i),
      "aria-expanded": isOpen,
      style: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
        padding: "24px 0",
        background: "none",
        border: "none",
        cursor: "pointer",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 17,
        fontWeight: 600,
        color: isOpen ? "var(--cyan-600)" : "var(--ink)",
        margin: 0,
        lineHeight: 1.35,
        letterSpacing: "-0.01em",
        transition: "color .2s"
      }
    }, item.q), /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        width: 28,
        height: 28,
        borderRadius: "50%",
        background: isOpen ? "var(--cyan-600)" : "var(--slate-100)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background .2s, transform .2s",
        transform: isOpen ? "rotate(45deg)" : "none"
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6 1v10M1 6h10",
      stroke: isOpen ? "#fff" : "var(--slate-500)",
      strokeWidth: "1.8",
      strokeLinecap: "round"
    })))), React.createElement("div", { style: { display: isOpen ? "block" : "none", paddingBottom: 24, color: "var(--slate-700)", fontSize: 15, lineHeight: 1.7 } }, item.a));
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section section--alt",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      justifyContent: "center"
    }
  }, "Still have questions?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 12
    }
  }, "Let's talk through your specific situation"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--slate-500)",
      marginTop: 12,
      marginBottom: 32,
      fontSize: 17
    }
  }, "Every project is different. Book a 30-minute call and get a direct answer to your specific questions."), /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--cyan btn--lg"
  }, "Book a discovery call ", /*#__PURE__*/React.createElement(Icon.arrow, null)))));
}
window.FAQPage = FAQPage;

// ──────────────────────────────────────────────────────────────────
// LEGAL — shared helpers
// ──────────────────────────────────────────────────────────────────
const thStyle = {
  padding: "10px 12px",
  textAlign: "left",
  fontWeight: 600,
  fontSize: 13,
  letterSpacing: ".04em",
  borderBottom: "1px solid var(--slate-200)",
  color: "var(--ink)"
};
const tdStyle = {
  padding: "10px 12px",
  borderBottom: "1px solid var(--slate-200)",
  color: "var(--slate-700)",
  verticalAlign: "top",
  fontSize: 14,
  lineHeight: 1.6
};
function LegalContactBlock() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      padding: 28,
      background: "var(--bg-alt)",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--slate-200)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 16px",
      fontSize: 16
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "grid",
      gap: 8,
      fontSize: 15,
      color: "var(--slate-700)"
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Email: "), /*#__PURE__*/React.createElement("a", {
    href: "mailto:office@7code.ro",
    style: {
      color: "var(--cyan-600)"
    }
  }, "office@7code.ro")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Phone: "), /*#__PURE__*/React.createElement("a", {
    href: "tel:+40774542081",
    style: {
      color: "var(--cyan-600)"
    }
  }, "+4 0774 542 081")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Address: "), "Onisifor Ghibu 20A, Cluj-Napoca, 400185, Romania"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Contact form: "), /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    style: {
      color: "var(--cyan-600)"
    }
  }, "7code.tech/contact"))));
}

// ──────────────────────────────────────────────────────────────────
// PRIVACY POLICY
// ──────────────────────────────────────────────────────────────────
function PrivacyPolicyPage() {
  useSeoMeta("Privacy & Cookie Policy | 7code — SEVEN CODE DEVELOPMENT SRL", "How 7code collects, uses and protects personal data, and how we use cookies. GDPR-compliant — operated by SEVEN CODE DEVELOPMENT SRL, Cluj-Napoca, Romania.");
  useEffectP(() => {
    if (window.location.hash === "#cookies") {
      setTimeout(() => {
        const el = document.getElementById("cookies");
        if (el) el.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 100);
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("section", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      marginBottom: 16,
      display: "inline-flex"
    }
  }, "Legal"), /*#__PURE__*/React.createElement("h1", null, "Privacy & Cookie Policy"), /*#__PURE__*/React.createElement("p", null, "7code (SEVEN CODE DEVELOPMENT SRL) \u2014 CUI: 38088795 \u2014 Cluj-Napoca, Romania"))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 800
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.75,
      color: "var(--slate-700)",
      marginBottom: 48
    }
  }, "This Privacy & Cookie Policy explains how 7code collects, uses and protects personal data when you visit", " ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.7code.tech",
    style: {
      color: "var(--cyan-600)"
    }
  }, "www.7code.tech"), " or contact us, and how we use cookies. We comply with the EU General Data Protection Regulation (GDPR), the ePrivacy Directive, and Romanian Law 190/2018."), [null, /*#__PURE__*/React.createElement("div", {
    key: "s1"
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2s
  }, "1. Data Controller"), /*#__PURE__*/React.createElement("ul", {
    style: uls
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Legal name: "), "SEVEN CODE DEVELOPMENT SRL"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "CUI: "), "38088795"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Address: "), "Onisifor Ghibu 20A, Cluj-Napoca, 400185, Romania"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Email: "), /*#__PURE__*/React.createElement("a", {
    href: "mailto:office@7code.ro",
    style: {
      color: "var(--cyan-600)"
    }
  }, "office@7code.ro")))), /*#__PURE__*/React.createElement("div", {
    key: "s2"
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2s
  }, "2. Data We Collect"), /*#__PURE__*/React.createElement("h3", {
    style: h3s
  }, "Contact Form"), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "When you submit our contact form, we collect: Name, Email address, Phone number (optional), Company name (optional), Project details / message."), /*#__PURE__*/React.createElement("ul", {
    style: uls
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Legal basis: "), "Article 6(1)(b) GDPR \u2014 steps prior to entering into a contract."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Purpose: "), "Respond to your enquiry and prepare a commercial offer."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Retention: "), "12 months from last contact, then deleted or anonymised.")), /*#__PURE__*/React.createElement("h3", {
    style: h3s
  }, "Website Analytics"), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "If you accept analytics cookies, we use Google Analytics to collect anonymised data: IP address (anonymised), Browser and device type, Pages visited, time on page, referrer."), /*#__PURE__*/React.createElement("ul", {
    style: uls
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Legal basis: "), "Article 6(1)(a) GDPR \u2014 your consent (via cookie banner)."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Retention: "), "14 months."))), /*#__PURE__*/React.createElement("div", {
    key: "s3"
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2s
  }, "3. Who We Share Data With"), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "We share data only with the following processors under signed Data Processing Agreements:"), /*#__PURE__*/React.createElement("ul", {
    style: uls
  }, /*#__PURE__*/React.createElement("li", null, "Google Ireland Ltd \u2014 Google Analytics"), /*#__PURE__*/React.createElement("li", null, "Email provider \u2014 to receive and respond to contact form submissions")), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "We never sell or rent your personal data.")), /*#__PURE__*/React.createElement("div", {
    key: "s4"
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2s
  }, "4. International Data Transfers"), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "Some processors (e.g., Google) may transfer data outside the EU/EEA. Such transfers are protected by EU Standard Contractual Clauses (SCCs) and supplementary safeguards.")), /*#__PURE__*/React.createElement("div", {
    key: "s5"
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2s
  }, "5. Your Rights"), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "Under GDPR you have the right to: Access, Rectification, Erasure (\"right to be forgotten\"), Restriction or objection to processing, Data portability, Withdraw consent at any time, Lodge a complaint with the Romanian DPA (ANSPDCP) \u2014", " ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.dataprotection.ro",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: "var(--cyan-600)"
    }
  }, "www.dataprotection.ro"), "."), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "To exercise any right, email ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:office@7code.ro",
    style: {
      color: "var(--cyan-600)"
    }
  }, "office@7code.ro"), ". We respond within 30 days.")), /*#__PURE__*/React.createElement("div", {
    key: "s6"
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2s
  }, "6. Security"), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "We use TLS encryption, secure hosting, and access controls. Your information is treated with care and never sold to third parties.")), /*#__PURE__*/React.createElement("div", {
    key: "s7",
    id: "cookies"
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2s
  }, "7. Cookies"), /*#__PURE__*/React.createElement("h3", {
    style: h3s
  }, "7.1 What Are Cookies?"), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "Cookies are small text files stored on your device when you visit a website. They help websites function and collect anonymised information about usage."), /*#__PURE__*/React.createElement("h3", {
    style: h3s
  }, "7.2 Cookies We Use"), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto",
      margin: "16px 0"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--slate-100)"
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: thStyle
  }, "Category"), /*#__PURE__*/React.createElement("th", {
    style: thStyle
  }, "Cookie"), /*#__PURE__*/React.createElement("th", {
    style: thStyle
  }, "Purpose"), /*#__PURE__*/React.createElement("th", {
    style: thStyle
  }, "Duration"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: tdStyle
  }, "Essential"), /*#__PURE__*/React.createElement("td", {
    style: tdStyle
  }, /*#__PURE__*/React.createElement("code", null, "7code_consent")), /*#__PURE__*/React.createElement("td", {
    style: tdStyle
  }, "Stores your cookie preferences"), /*#__PURE__*/React.createElement("td", {
    style: tdStyle
  }, "12 months")), /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--slate-50)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: tdStyle
  }, "Analytics"), /*#__PURE__*/React.createElement("td", {
    style: tdStyle
  }, /*#__PURE__*/React.createElement("code", null, "_ga"), ", ", /*#__PURE__*/React.createElement("code", null, "_ga_*")), /*#__PURE__*/React.createElement("td", {
    style: tdStyle
  }, "Google Analytics \u2014 anonymised usage data"), /*#__PURE__*/React.createElement("td", {
    style: tdStyle
  }, "14 months"))))), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "Essential cookies are always active. Analytics cookies load only after you accept them."), /*#__PURE__*/React.createElement("h3", {
    style: h3s
  }, "7.3 Managing Cookies"), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "You can:"), /*#__PURE__*/React.createElement("ul", {
    style: uls
  }, /*#__PURE__*/React.createElement("li", null, "Open the cookie banner via \"Cookie settings\" in the footer at any time"), /*#__PURE__*/React.createElement("li", null, "Delete cookies in your browser settings"), /*#__PURE__*/React.createElement("li", null, "Block cookies entirely in your browser settings")), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "Step-by-step guide: ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.allaboutcookies.org/manage-cookies",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: "var(--cyan-600)"
    }
  }, "allaboutcookies.org/manage-cookies"))), /*#__PURE__*/React.createElement("div", {
    key: "s8"
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2s
  }, "8. Changes to This Policy"), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "We may update this Privacy & Cookie Policy from time to time. The current version is always published on this page with the latest update date."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--slate-400)",
      fontSize: 13,
      marginTop: 8
    }
  }, "Last updated: May 2026")), /*#__PURE__*/React.createElement("div", {
    key: "s9"
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2s
  }, "9. Contact"), /*#__PURE__*/React.createElement(LegalContactBlock, null))].filter(Boolean))));
}

// ──────────────────────────────────────────────────────────────────
// TERMS & CONDITIONS
// ──────────────────────────────────────────────────────────────────
function TermsPage() {
  useSeoMeta("Terms & Conditions | 7code — SEVEN CODE DEVELOPMENT SRL", "Terms & Conditions governing your use of 7code.tech and services provided by SEVEN CODE DEVELOPMENT SRL, Cluj-Napoca, Romania.");
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("section", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      marginBottom: 16,
      display: "inline-flex"
    }
  }, "Legal"), /*#__PURE__*/React.createElement("h1", null, "Terms & Conditions"), /*#__PURE__*/React.createElement("p", null, "7code (SEVEN CODE DEVELOPMENT SRL) \u2014 CUI: 38088795 \u2014 Cluj-Napoca, Romania"))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 800
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.75,
      color: "var(--slate-700)",
      marginBottom: 48
    }
  }, "Welcome to 7code. These Terms & Conditions (\"Terms\") govern your access to and use of", " ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.7code.tech",
    style: {
      color: "var(--cyan-600)"
    }
  }, "www.7code.tech"), " (the \"Website\") and any services provided by SEVEN CODE DEVELOPMENT SRL (\"7code\", \"we\", \"us\"). By accessing the Website or engaging our services, you agree to be bound by these Terms."), /*#__PURE__*/React.createElement("h2", {
    style: h2s
  }, "1. About Us"), /*#__PURE__*/React.createElement("ul", {
    style: uls
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Legal name: "), "SEVEN CODE DEVELOPMENT SRL"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "CUI: "), "38088795"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Registered office: "), "Onisifor Ghibu 20A, Cluj-Napoca, 400185, Romania"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Email: "), /*#__PURE__*/React.createElement("a", {
    href: "mailto:office@7code.ro",
    style: {
      color: "var(--cyan-600)"
    }
  }, "office@7code.ro")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Phone: "), /*#__PURE__*/React.createElement("a", {
    href: "tel:+40774542081",
    style: {
      color: "var(--cyan-600)"
    }
  }, "+4 0774 542 081"))), /*#__PURE__*/React.createElement("h2", {
    style: h2s
  }, "2. Services"), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "7code provides nearshore software development and AI automation services, including:"), /*#__PURE__*/React.createElement("ul", {
    style: uls
  }, /*#__PURE__*/React.createElement("li", null, "Staff augmentation and dedicated teams"), /*#__PURE__*/React.createElement("li", null, "End-to-end product development"), /*#__PURE__*/React.createElement("li", null, "AI automation and system integrations"), /*#__PURE__*/React.createElement("li", null, "Technical consulting and workshops")), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "Service scope, deliverables, timelines and fees are defined in a separate written agreement (MSA or SOW) signed between 7code and the client. In case of conflict, the signed agreement prevails over these Terms."), /*#__PURE__*/React.createElement("h2", {
    style: h2s
  }, "3. Use of the Website"), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "You may use the Website for lawful purposes only. You agree not to:"), /*#__PURE__*/React.createElement("ul", {
    style: uls
  }, /*#__PURE__*/React.createElement("li", null, "Use the Website in any way that breaches applicable law"), /*#__PURE__*/React.createElement("li", null, "Attempt to gain unauthorised access to the Website or its systems"), /*#__PURE__*/React.createElement("li", null, "Interfere with the Website's operation, security or performance"), /*#__PURE__*/React.createElement("li", null, "Scrape, copy or republish content without our prior written consent"), /*#__PURE__*/React.createElement("li", null, "Submit false, misleading or harmful information via our contact form")), /*#__PURE__*/React.createElement("h2", {
    style: h2s
  }, "4. Intellectual Property"), /*#__PURE__*/React.createElement("h3", {
    style: h3s
  }, "Website Content"), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "All content on the Website \u2014 text, graphics, logos, icons, images, code, design \u2014 is owned by or licensed to 7code and protected by Romanian, EU and international IP laws. You may not reproduce, distribute or modify any content without our prior written consent."), /*#__PURE__*/React.createElement("h3", {
    style: h3s
  }, "Client Deliverables"), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "Ownership of work product developed for clients is defined in the applicable signed agreement. Pre-existing IP and reusable components remain the property of 7code unless stated otherwise."), /*#__PURE__*/React.createElement("h2", {
    style: h2s
  }, "5. Engagement Process"), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "Any engagement with 7code follows this process: Initial enquiry via contact form, email or call; Discovery and qualification; Proposal and commercial offer; Signed contract (MSA / SOW / NDA as required); Kickoff and delivery."), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "Contact form submissions do not constitute a binding offer or contract."), /*#__PURE__*/React.createElement("h2", {
    style: h2s
  }, "6. Fees & Payment"), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "All fees, rates and payment terms are set out in the signed contract or SOW. Unless otherwise agreed:"), /*#__PURE__*/React.createElement("ul", {
    style: uls
  }, /*#__PURE__*/React.createElement("li", null, "Invoices are issued monthly"), /*#__PURE__*/React.createElement("li", null, "Payment is due within 14 days from the invoice date"), /*#__PURE__*/React.createElement("li", null, "Late payments may incur statutory interest under Romanian law"), /*#__PURE__*/React.createElement("li", null, "All amounts are exclusive of VAT, where applicable")), /*#__PURE__*/React.createElement("h2", {
    style: h2s
  }, "7. Confidentiality"), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "Both parties agree to keep confidential any non-public business, technical or commercial information shared during the engagement. Specific obligations are formalised through an NDA when required."), /*#__PURE__*/React.createElement("h2", {
    style: h2s
  }, "8. Warranties & Disclaimers"), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "The Website and its content are provided \"as is\" and \"as available\", without warranties of any kind, express or implied. We do not warrant that the content is complete, current or error-free, or that access will be uninterrupted."), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "Service-specific warranties for client engagements are defined in the signed contract."), /*#__PURE__*/React.createElement("h2", {
    style: h2s
  }, "9. Limitation of Liability"), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "To the maximum extent permitted by law, 7code shall not be liable for any indirect, incidental, special or consequential damages, or any loss of profits, revenue, data, or business opportunities, arising out of or related to your use of the Website."), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "For paid client engagements, liability is limited as set out in the signed contract."), /*#__PURE__*/React.createElement("h2", {
    style: h2s
  }, "10. Third-Party Links & Services"), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "The Website may contain links to third-party websites or embed third-party services (e.g., Google Analytics, LinkedIn, YouTube). We are not responsible for the content, policies or practices of any third party."), /*#__PURE__*/React.createElement("h2", {
    style: h2s
  }, "11. Data Protection"), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "Personal data is processed in line with our", " ", /*#__PURE__*/React.createElement("a", {
    href: "/privacy-policy",
    style: {
      color: "var(--cyan-600)"
    }
  }, "Privacy & Cookie Policy"), ", which forms part of these Terms."), /*#__PURE__*/React.createElement("h2", {
    style: h2s
  }, "12. Termination"), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "We may suspend or terminate your access to the Website at any time, without notice, if we believe you have violated these Terms. Termination of client services is governed by the signed contract."), /*#__PURE__*/React.createElement("h2", {
    style: h2s
  }, "13. Governing Law & Jurisdiction"), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "These Terms are governed by the laws of Romania. Any dispute shall be submitted to the exclusive jurisdiction of the competent courts of Cluj-Napoca, Romania, unless otherwise agreed in writing."), /*#__PURE__*/React.createElement("h2", {
    style: h2s
  }, "14. Changes to These Terms"), /*#__PURE__*/React.createElement("p", {
    style: ps
  }, "We may update these Terms from time to time. The latest version will always be published on this page. Continued use of the Website after changes constitutes acceptance."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--slate-400)",
      fontSize: 13,
      marginTop: 8
    }
  }, "Last updated: May 2026"), /*#__PURE__*/React.createElement("h2", {
    style: h2s
  }, "15. Contact Us"), /*#__PURE__*/React.createElement(LegalContactBlock, null))));
}

// shared style objects for legal pages
const h2s = {
  fontSize: 20,
  fontWeight: 700,
  margin: "40px 0 12px",
  paddingTop: 8,
  borderTop: "1px solid var(--slate-200)",
  color: "var(--ink)"
};
const h3s = {
  fontSize: 16,
  fontWeight: 600,
  margin: "24px 0 8px",
  color: "var(--ink)"
};
const ps = {
  fontSize: 15,
  lineHeight: 1.75,
  color: "var(--slate-700)",
  margin: "0 0 12px"
};
const uls = {
  paddingLeft: 20,
  margin: "8px 0 16px",
  color: "var(--slate-700)",
  fontSize: 15,
  lineHeight: 1.75
};
window.PrivacyPolicyPage = PrivacyPolicyPage;
window.TermsPage = TermsPage;
