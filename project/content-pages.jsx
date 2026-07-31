/* global React, HeroBlock, TrustStripBlock, ProofBlock, SuccessHorizonBlock, CtaBlock, FaqBlock, CloseBlock, RichSection, Icon, RESOURCES_DATA */

const { useEffect: useEffectCP } = React;

// ──────────────────────────────────────────────────────────────────
// MoneyPage / PackagePage / HubPage — one shared block dispatcher.
//
// spec.blocks (from front-matter) is the authoritative, already-validated
// order (see scripts/check-block-order.mjs). Every block name not handled
// by a dedicated component (hero/trustStrip/successHorizon/proof/cta/faq/
// close) falls through to the generic RichSection — this is true for every
// money-page block (diagnosis, whatWeBuild, howWeDeliver, package,
// pointOfView), every package-page block (whoThisIsFor, whatYouGet,
// howItRuns, price, notForYouIf), and every hub article's bespoke block
// names, since all of those are just prose/bullets/tables under an H2.
// ──────────────────────────────────────────────────────────────────

function renderBlock(name, index, spec, blocks) {
  const data = blocks[name];
  if (!data) return null;

  switch (name) {
    case "hero":
      return <HeroBlock key={index} hero={data} cta={spec.cta} />;
    case "trustStrip":
      return <TrustStripBlock key={index} trustStrip={data} />;
    case "successHorizon":
      return <SuccessHorizonBlock key={index} successHorizon={data} />;
    case "proof":
      return <ProofBlock key={index} proof={spec.proof} />;
    case "cta":
      return <CtaBlock key={index} cta={spec.cta} />;
    case "faq":
      return <FaqBlock key={index} faq={data} heading={faqHeadingFor(spec)} />;
    case "close":
      return <CloseBlock key={index} close={data} cta={spec.cta} />;
    default:
      return data.rich ? <RichSection key={index} nodes={data.rich} alt={index % 2 === 1} /> : null;
  }
}

function faqHeadingFor(spec) {
  return spec.kind === "package" ? "Questions before you book" : "Questions we get asked before we're hired";
}

function useDocumentMeta(spec) {
  useEffectCP(() => {
    const prevTitle = document.title;
    document.title = spec.meta.title;
    const descEl = document.querySelector('meta[name="description"]');
    const prevDesc = descEl ? descEl.getAttribute("content") : null;
    if (descEl) descEl.setAttribute("content", spec.meta.metaDescription);
    return () => {
      document.title = prevTitle;
      if (descEl && prevDesc !== null) descEl.setAttribute("content", prevDesc);
    };
  }, [spec.meta.slug]);
}

function BreadcrumbBar({ items }) {
  return (
    <div className="container" style={{ paddingTop: 20 }}>
      <nav className="breadcrumb-bar" aria-label="Breadcrumb">
        {items.map((it, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span className="breadcrumb-sep">/</span>}
            {it.href ? <a href={it.href}>{it.name}</a> : <span>{it.name}</span>}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
}

function MoneyPage({ slug }) {
  const entry = (window.CONTENT_DATA && window.CONTENT_DATA.MONEY_PAGES[slug]) || null;
  if (!entry) return <div className="page"><div className="container" style={{ padding: "120px 0" }}><p>Page not found.</p></div></div>;
  const { spec, blocks } = entry;
  useDocumentMeta(spec);
  return (
    <div className="page money-page">
      <BreadcrumbBar items={[{ name: "Home", href: "/" }, { name: spec.meta.title.split(" | ")[0] }]} />
      {spec.blocks.map((name, i) => renderBlock(name, i, spec, blocks))}
    </div>
  );
}

function PackagePage({ slug }) {
  const entry = (window.CONTENT_DATA && window.CONTENT_DATA.PACKAGES[slug]) || null;
  if (!entry) return <div className="page"><div className="container" style={{ padding: "120px 0" }}><p>Page not found.</p></div></div>;
  const { spec, blocks } = entry;
  useDocumentMeta(spec);
  return (
    <div className="page package-page">
      <BreadcrumbBar items={[{ name: "Home", href: "/" }, { name: "Packages", href: "/packages" }, { name: blocks.hero.h1 }]} />
      {spec.blocks.map((name, i) => renderBlock(name, i, spec, blocks))}
    </div>
  );
}

function HubPage({ slug }) {
  const entry = (window.CONTENT_DATA && window.CONTENT_DATA.HUB_ARTICLES[slug]) || null;
  if (!entry) return <div className="page"><div className="container" style={{ padding: "120px 0" }}><p>Page not found.</p></div></div>;
  const { spec, blocks } = entry;
  useDocumentMeta(spec);
  return (
    <div className="page hub-page">
      <BreadcrumbBar items={[{ name: "Home", href: "/" }, { name: "Hub", href: "/hub" }, { name: blocks.hero.h1 }]} />
      {spec.blocks.map((name, i) => renderBlock(name, i, spec, blocks))}
    </div>
  );
}

function HubIndexPage() {
  useEffectCP(() => {
    const prev = document.title;
    document.title = "Hub — AI Automation, Cost & Vendor Guides | 7code";
    return () => { document.title = prev; };
  }, []);
  const articles = Object.values((window.CONTENT_DATA && window.CONTENT_DATA.HUB_ARTICLES) || {});
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Hub</span>
          <h1>Guides for buyers evaluating an AI or automation partner</h1>
          <p>Long-form answers to the questions we get asked before a contract exists — cost, vendor evaluation, and data residency.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="hub-grid">
            {articles.map((a, i) => (
              <a key={i} href={"/hub/" + a.spec.meta.slug.replace(/^hub\//, "")} className="hub-card reveal">
                <h3>{a.blocks.hero.h1}</h3>
                <p>{a.spec.meta.metaDescription}</p>
                <span className="btn-link">Read the guide <Icon.arrow /></span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ResourcesIndexPage() {
  useEffectCP(() => {
    const prev = document.title;
    document.title = "Resources — Nearshore, Staff Augmentation & AI Guides | 7code";
    return () => { document.title = prev; };
  }, []);
  const data = (typeof RESOURCES_DATA !== "undefined" && RESOURCES_DATA) || (window.RESOURCES_DATA || {});
  const items = Object.values(data);
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Resources</span>
          <h1>Guides for evaluating nearshore, staff augmentation & AI automation</h1>
          <p>Comparison guides for buyers weighing build-vs-partner, nearshore-vs-offshore, and staff augmentation-vs-dedicated-team decisions.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="hub-grid">
            {items.map((r, i) => (
              <a key={i} href={"/resources/" + r.slug} className="hub-card reveal">
                <h3>{r.title}</h3>
                <p>{r.metaDescription}</p>
                <span className="btn-link">Read the guide <Icon.arrow /></span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

window.MoneyPage = MoneyPage;
window.PackagePage = PackagePage;
window.HubPage = HubPage;
window.HubIndexPage = HubIndexPage;
window.ResourcesIndexPage = ResourcesIndexPage;
