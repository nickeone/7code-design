/* global React, HeroBlock, TrustStripBlock, ProofBlock, SuccessHorizonBlock, CtaBlock, FaqBlock, CloseBlock, RichSection, Icon, RESOURCES_DATA */

const {
  useEffect: useEffectCP
} = React;

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
      return /*#__PURE__*/React.createElement(HeroBlock, {
        key: index,
        hero: data,
        cta: spec.cta
      });
    case "trustStrip":
      return /*#__PURE__*/React.createElement(TrustStripBlock, {
        key: index,
        trustStrip: data
      });
    case "successHorizon":
      return /*#__PURE__*/React.createElement(SuccessHorizonBlock, {
        key: index,
        successHorizon: data
      });
    case "proof":
      return /*#__PURE__*/React.createElement(ProofBlock, {
        key: index,
        proof: spec.proof
      });
    case "cta":
      return /*#__PURE__*/React.createElement(CtaBlock, {
        key: index,
        cta: spec.cta
      });
    case "faq":
      return /*#__PURE__*/React.createElement(FaqBlock, {
        key: index,
        faq: data,
        heading: faqHeadingFor(spec)
      });
    case "close":
      return /*#__PURE__*/React.createElement(CloseBlock, {
        key: index,
        close: data,
        cta: spec.cta
      });
    default:
      return data.rich ? /*#__PURE__*/React.createElement(RichSection, {
        key: index,
        nodes: data.rich,
        alt: index % 2 === 1
      }) : null;
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
function BreadcrumbBar({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("nav", {
    className: "breadcrumb-bar",
    "aria-label": "Breadcrumb"
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    className: "breadcrumb-sep"
  }, "/"), it.href ? /*#__PURE__*/React.createElement("a", {
    href: it.href
  }, it.name) : /*#__PURE__*/React.createElement("span", null, it.name)))));
}
function MoneyPage({
  slug
}) {
  const entry = window.CONTENT_DATA && window.CONTENT_DATA.MONEY_PAGES[slug] || null;
  if (!entry) return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      padding: "120px 0"
    }
  }, /*#__PURE__*/React.createElement("p", null, "Page not found.")));
  const {
    spec,
    blocks
  } = entry;
  useDocumentMeta(spec);
  return /*#__PURE__*/React.createElement("div", {
    className: "page money-page"
  }, /*#__PURE__*/React.createElement(BreadcrumbBar, {
    items: [{
      name: "Home",
      href: "/"
    }, {
      name: spec.meta.title.split(" | ")[0]
    }]
  }), spec.blocks.map((name, i) => renderBlock(name, i, spec, blocks)));
}
function PackagePage({
  slug
}) {
  const entry = window.CONTENT_DATA && window.CONTENT_DATA.PACKAGES[slug] || null;
  if (!entry) return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      padding: "120px 0"
    }
  }, /*#__PURE__*/React.createElement("p", null, "Page not found.")));
  const {
    spec,
    blocks
  } = entry;
  useDocumentMeta(spec);
  return /*#__PURE__*/React.createElement("div", {
    className: "page package-page"
  }, /*#__PURE__*/React.createElement(BreadcrumbBar, {
    items: [{
      name: "Home",
      href: "/"
    }, {
      name: "Packages",
      href: "/packages"
    }, {
      name: blocks.hero.h1
    }]
  }), spec.blocks.map((name, i) => renderBlock(name, i, spec, blocks)));
}
function HubPage({
  slug
}) {
  const entry = window.CONTENT_DATA && window.CONTENT_DATA.HUB_ARTICLES[slug] || null;
  if (!entry) return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      padding: "120px 0"
    }
  }, /*#__PURE__*/React.createElement("p", null, "Page not found.")));
  const {
    spec,
    blocks
  } = entry;
  useDocumentMeta(spec);
  return /*#__PURE__*/React.createElement("div", {
    className: "page hub-page"
  }, /*#__PURE__*/React.createElement(BreadcrumbBar, {
    items: [{
      name: "Home",
      href: "/"
    }, {
      name: "Hub",
      href: "/hub"
    }, {
      name: blocks.hero.h1
    }]
  }), spec.blocks.map((name, i) => renderBlock(name, i, spec, blocks)));
}
function HubIndexPage() {
  useEffectCP(() => {
    const prev = document.title;
    document.title = "Hub — AI Automation, Cost & Vendor Guides | 7code";
    return () => {
      document.title = prev;
    };
  }, []);
  const articles = Object.values(window.CONTENT_DATA && window.CONTENT_DATA.HUB_ARTICLES || {});
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
  }, "Hub"), /*#__PURE__*/React.createElement("h1", null, "Guides for buyers evaluating an AI or automation partner"), /*#__PURE__*/React.createElement("p", null, "Long-form answers to the questions we get asked before a contract exists \u2014 cost, vendor evaluation, and data residency."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-grid"
  }, articles.map((a, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "/hub/" + a.spec.meta.slug.replace(/^hub\//, ""),
    className: "hub-card reveal"
  }, /*#__PURE__*/React.createElement("h3", null, a.blocks.hero.h1), /*#__PURE__*/React.createElement("p", null, a.spec.meta.metaDescription), /*#__PURE__*/React.createElement("span", {
    className: "btn-link"
  }, "Read the guide ", /*#__PURE__*/React.createElement(Icon.arrow, null))))))));
}
function ResourcesIndexPage() {
  useEffectCP(() => {
    const prev = document.title;
    document.title = "Resources — Nearshore, Staff Augmentation & AI Guides | 7code";
    return () => {
      document.title = prev;
    };
  }, []);
  const data = typeof RESOURCES_DATA !== "undefined" && RESOURCES_DATA || window.RESOURCES_DATA || {};
  const items = Object.values(data);
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
  }, "Resources"), /*#__PURE__*/React.createElement("h1", null, "Guides for evaluating nearshore, staff augmentation & AI automation"), /*#__PURE__*/React.createElement("p", null, "Comparison guides for buyers weighing build-vs-partner, nearshore-vs-offshore, and staff augmentation-vs-dedicated-team decisions."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-grid"
  }, items.map((r, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "/resources/" + r.slug,
    className: "hub-card reveal"
  }, /*#__PURE__*/React.createElement("h3", null, r.title), /*#__PURE__*/React.createElement("p", null, r.metaDescription), /*#__PURE__*/React.createElement("span", {
    className: "btn-link"
  }, "Read the guide ", /*#__PURE__*/React.createElement(Icon.arrow, null))))))));
}
window.MoneyPage = MoneyPage;
window.PackagePage = PackagePage;
window.HubPage = HubPage;
window.HubIndexPage = HubIndexPage;
window.ResourcesIndexPage = ResourcesIndexPage;