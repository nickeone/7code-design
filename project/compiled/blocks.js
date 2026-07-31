/* global React, Icon */

const {
  useEffect: useEffectBLK,
  useRef: useRefBLK
} = React;

// ──────────────────────────────────────────────────────────────────
// Cal.com inline embed loader — lives here (not booking.jsx) because
// CloseBlock (below) renders it on every money/package/hub/home page, and
// the homepage renders synchronously before the deferred bundle-routes.js
// (where booking.jsx's BookPage lives) is guaranteed to have loaded.
// BOOKING_PROVIDER lives in project/site-config.js (window.SITE_CONFIG),
// the single place that decides which calendar tool sits behind every
// /book/<slug> route and every embed rendered here.
// ──────────────────────────────────────────────────────────────────

let _calEmbedLoaded = false;
function loadCalEmbedScript() {
  if (_calEmbedLoaded) return;
  _calEmbedLoaded = true;
  (function (C, A, L) {
    let p = function (a, ar) {
      a.q.push(ar);
    };
    let d = C.document;
    C.Cal = C.Cal || function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () {
          p(api, arguments);
        };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ["initNamespace", namespace]);
        } else {
          p(cal, ar);
        }
        return;
      }
      p(cal, ar);
    };
  })(window, "https://app.cal.com/embed/embed.js", "init");
  window.Cal("init", {
    origin: "https://cal.com"
  });
}
function CalEmbed({
  calLink
}) {
  const ref = useRefBLK(null);
  const elId = "cal-inline-" + calLink.replace(/[^a-z0-9]/gi, "-");
  useEffectBLK(() => {
    const provider = window.SITE_CONFIG && window.SITE_CONFIG.BOOKING_PROVIDER || "cal.com";
    if (provider !== "cal.com") return; // HubSpot Meetings path would branch here once integrated.

    loadCalEmbedScript();
    window.Cal("inline", {
      elementOrSelector: "#" + elId,
      calLink,
      layout: "month_view"
    });
    window.Cal("ui", {
      styles: {
        branding: {
          brandColor: "#06B6D4"
        }
      },
      hideEventTypeDetails: false,
      layout: "month_view"
    });
  }, [calLink]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    id: elId,
    className: "cal-embed",
    style: {
      width: "100%",
      minHeight: 560,
      overflow: "hidden",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--slate-200)"
    }
  });
}

// ──────────────────────────────────────────────────────────────────
// Shared block-rendering library for money pages, package pages, hub
// articles and the homepage. One component per parsed node/block shape
// from scripts/parse-content.mjs + project/content-data.js — this is the
// architecture called for in 7code-build/CLAUDE-CODE-PROMPT.md Step 3.
//
// Money-page blocks (13, fixed order): hero, trustStrip, diagnosis,
// successHorizon, proof, cta, whatWeBuild, howWeDeliver, package, cta,
// pointOfView, faq, close. Everything except hero/trustStrip/proof/faq/cta/
// close is plain prose+bullets+tables, so it all renders through the one
// generic RichSection component below — see parse-content.mjs's comment on
// why the block-name-specific parsers stop at hero/trustStrip/successHorizon/
// router/close/faq.
// ──────────────────────────────────────────────────────────────────

// Display names for case studies referenced by slug in `proof[]` front-matter
// — the .mdx proof body prose is for human readability only; the front-matter
// (caseStudySlug/metric/tags) is what's actually rendered, so this is the one
// place a case study's public name needs to be known. Sourced from
// _brief/CONTENT-STANDARDS.md §4 ("facts you may use").
const CASE_STUDY_NAMES = {
  "hera": "Hera Health Tech",
  "wholesum": "WholeSum",
  "numerize": "Numerize",
  "g42-fleet": "G42",
  "lidl-road-safety": "Lidl Romania",
  "daily8": "Daily8",
  "revote": "Revote",
  "cloud-of-legacy": "Cloud of Legacy",
  "melsonic": "Melsonic",
  "drum-bun": "Drum Bun"
};

// ── inline nodes (text / bold / link) ───────────────────────────────────────
function InlineNodes({
  nodes
}) {
  if (!nodes || !nodes.length) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, nodes.map((n, i) => {
    if (n.type === "bold") return /*#__PURE__*/React.createElement("strong", {
      key: i
    }, n.value);
    if (n.type === "link") return /*#__PURE__*/React.createElement("a", {
      key: i,
      href: n.href
    }, n.label);
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, n.value);
  }));
}

// ── rich body (h2 / p / ul / table) ─────────────────────────────────────────
function RichText({
  nodes
}) {
  if (!nodes || !nodes.length) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, nodes.map((n, i) => {
    if (n.type === "h2") return /*#__PURE__*/React.createElement("h2", {
      key: i
    }, n.text);
    if (n.type === "p") return /*#__PURE__*/React.createElement("p", {
      key: i,
      className: "block-p"
    }, /*#__PURE__*/React.createElement(InlineNodes, {
      nodes: n.inline
    }));
    if (n.type === "ul") {
      return /*#__PURE__*/React.createElement("ul", {
        key: i,
        className: "block-ul"
      }, n.items.map((item, j) => /*#__PURE__*/React.createElement("li", {
        key: j
      }, /*#__PURE__*/React.createElement(InlineNodes, {
        nodes: item
      }))));
    }
    if (n.type === "table") {
      const [head, ...rows] = n.rows;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "block-table-wrap"
      }, /*#__PURE__*/React.createElement("table", {
        className: "block-table"
      }, head && /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, head.map((c, j) => /*#__PURE__*/React.createElement("th", {
        key: j
      }, /*#__PURE__*/React.createElement(InlineNodes, {
        nodes: c
      }))))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, j) => /*#__PURE__*/React.createElement("tr", {
        key: j
      }, row.map((c, k) => /*#__PURE__*/React.createElement("td", {
        key: k
      }, /*#__PURE__*/React.createElement(InlineNodes, {
        nodes: c
      }))))))));
    }
    return null;
  }));
}

// Generic prose section — used for diagnosis, whatWeBuild, howWeDeliver,
// package, pointOfView (money pages); whoThisIsFor, whatYouGet, howItRuns,
// price, notForYouIf (package pages); and every hub article's bespoke
// blocks. The H2 is already embedded as the first rich node, so this
// component doesn't take a separate heading prop.
function RichSection({
  nodes,
  alt
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section block-section" + (alt ? " section--alt" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "container block-prose reveal"
  }, /*#__PURE__*/React.createElement(RichText, {
    nodes: nodes
  })));
}

// ── hero ─────────────────────────────────────────────────────────────────
function HeroBlock({
  hero,
  cta
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "page-hero block-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h1", null, hero.h1), /*#__PURE__*/React.createElement("p", null, hero.sub), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta",
    style: {
      justifyContent: "center",
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: cta.href,
    className: "btn btn--cyan btn--lg"
  }, cta.label)), /*#__PURE__*/React.createElement("p", {
    className: "block-reassurance"
  }, cta.reassurance)));
}

// ── trustStrip — always renders above the first `cta` block; see App-level
// ordering guarantee in each page component below, not just this component ──
const TRUST_LOGOS = [{
  label: "Lidl Romania",
  src: "/project/uploads/Lidl-logo.png"
}, {
  label: "G42",
  src: "/project/assets/9681e775df296ad64c7b5a041883805a82c3d2a1.png"
}, {
  label: "Founders Factory",
  src: "/project/assets/b6d98b61cd02d867e9a2cd2d32465eb8ba06203f.png"
},
// No logo asset exists for "Life is Hard" (flagged in IMPLEMENTATION-LOG.md
// for Nicu) — rendered as a text wordmark instead of inventing an image.
{
  label: "Life is Hard",
  src: null
}];
function TrustStripBlock({
  trustStrip
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section block-truststrip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-row reveal"
  }, trustStrip.stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-value"
  }, s.value), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    className: "trust-logo-row reveal"
  }, TRUST_LOGOS.map((l, i) => l.src ? /*#__PURE__*/React.createElement("img", {
    key: i,
    src: l.src,
    alt: l.label,
    className: "trust-logo-sm",
    loading: "lazy",
    width: "120",
    height: "32"
  }) : /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "trust-logo-text"
  }, l.label)))));
}

// ── proof — service tags always render as links, never plain text ──────────
function ProofBlock({
  proof,
  heading = "Work we can talk about"
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--alt block-proof"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Proof"), /*#__PURE__*/React.createElement("h2", null, heading)), /*#__PURE__*/React.createElement("div", {
    className: "proof-grid"
  }, proof.map((p, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    className: "proof-card reveal"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("a", {
    href: "/case-study/" + p.caseStudySlug
  }, CASE_STUDY_NAMES[p.caseStudySlug] || p.caseStudySlug)), /*#__PURE__*/React.createElement("p", null, p.metric), /*#__PURE__*/React.createElement("div", {
    className: "proof-tags"
  }, p.tags.map((t, j) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: j
  }, j > 0 && /*#__PURE__*/React.createElement("span", {
    className: "proof-tag-sep"
  }, "\xB7"), /*#__PURE__*/React.createElement("a", {
    href: t.href,
    className: "proof-tag"
  }, t.label)))), /*#__PURE__*/React.createElement("a", {
    href: "/case-study/" + p.caseStudySlug,
    className: "btn-link"
  }, "Read the case study ", /*#__PURE__*/React.createElement(Icon.arrow, null)))))));
}

// ── successHorizon ───────────────────────────────────────────────────────
function SuccessHorizonBlock({
  successHorizon
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section block-horizon"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("h2", null, successHorizon.heading)), /*#__PURE__*/React.createElement("div", {
    className: "horizon-row"
  }, successHorizon.horizons.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "horizon-card reveal",
    style: {
      transitionDelay: i * 80 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "horizon-label"
  }, h.label), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(InlineNodes, {
    nodes: h.inline
  })))))));
}

// ── cta — idempotent: every instance renders spec.cta.label verbatim, never
// a second label. This is the whole enforcement mechanism for the "one CTA
// label per page" rule: nothing else in this file ever renders a button
// with a hardcoded string. ──
function CtaBlock({
  cta
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section block-cta-strip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-strip reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-strip-content"
  }, /*#__PURE__*/React.createElement("p", null, cta.reassurance)), /*#__PURE__*/React.createElement("div", {
    className: "cta-strip-actions"
  }, /*#__PURE__*/React.createElement("a", {
    href: cta.href,
    className: "btn btn--cyan btn--lg"
  }, cta.label)))));
}

// ── faq — emits FAQPage-shaped markup; the actual JSON-LD is built at build
// time in scripts/prerender.mjs from the same content-data.js so it can
// never drift from what's rendered here. ──
function FaqBlock({
  faq,
  heading = "Questions we get asked before we're hired"
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section block-faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container svc-faq-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("h2", null, heading)), /*#__PURE__*/React.createElement("div", {
    className: "svc-faq"
  }, faq.map((f, i) => /*#__PURE__*/React.createElement("details", {
    key: i,
    className: "svc-faq-item reveal",
    style: {
      transitionDelay: i * 30 + "ms"
    }
  }, /*#__PURE__*/React.createElement("summary", null, f.question), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(InlineNodes, {
    nodes: f.answerInline
  })))))));
}

// ── close — named human, live calendar, contact-form fallback, reassurance ──
function CloseBlock({
  close,
  cta
}) {
  const bookingRoutes = window.SITE_CONFIG && window.SITE_CONFIG.BOOKING_ROUTES || {};
  const bookSlug = (cta.href || "").replace(/^\/book\//, "");
  const route = bookingRoutes[bookSlug];
  return /*#__PURE__*/React.createElement("section", {
    className: "section block-close"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 760,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", null, close.heading), /*#__PURE__*/React.createElement("p", null, close.sub)), /*#__PURE__*/React.createElement("div", {
    className: "close-human reveal"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/project/uploads/authors/nicu-mardari.jpg",
    alt: "Nicu Mardari",
    className: "close-human-photo",
    width: "48",
    height: "48"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "close-human-name"
  }, "Nicu Mardari"), /*#__PURE__*/React.createElement("div", {
    className: "close-human-role"
  }, "CEO & Co-founder"))), route ? /*#__PURE__*/React.createElement(CalEmbed, {
    calLink: route.calLink
  }) : null, /*#__PURE__*/React.createElement("p", {
    className: "block-reassurance",
    style: {
      textAlign: "center"
    }
  }, cta.reassurance), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn-link"
  }, "Or use the contact form instead ", /*#__PURE__*/React.createElement(Icon.arrow, null)))));
}

// ── router (homepage only) ──────────────────────────────────────────────
function RouterBlock({
  router
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section block-router"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("h2", null, router.heading)), /*#__PURE__*/React.createElement("div", {
    className: "router-grid"
  }, router.cards.map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: c.href,
    className: "router-card reveal",
    style: {
      transitionDelay: i % 2 * 80 + "ms"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "router-quote"
  }, "\u201C", c.quote, "\u201D"), /*#__PURE__*/React.createElement("p", {
    className: "router-body"
  }, c.body), /*#__PURE__*/React.createElement("span", {
    className: "btn-link"
  }, c.linkLabel, " ", /*#__PURE__*/React.createElement(Icon.arrow, null)))))));
}
window.CalEmbed = CalEmbed;
window.InlineNodes = InlineNodes;
window.RichText = RichText;
window.RichSection = RichSection;
window.HeroBlock = HeroBlock;
window.TrustStripBlock = TrustStripBlock;
window.ProofBlock = ProofBlock;
window.SuccessHorizonBlock = SuccessHorizonBlock;
window.CtaBlock = CtaBlock;
window.FaqBlock = FaqBlock;
window.CloseBlock = CloseBlock;
window.RouterBlock = RouterBlock;
window.CASE_STUDY_NAMES = CASE_STUDY_NAMES;