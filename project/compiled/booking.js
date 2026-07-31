/* global React, Icon, CalEmbed */

const {
  useEffect: useEffectBK
} = React;

// CalEmbed lives in project/blocks.jsx (bundle-core) rather than here, even
// though this file is the "booking" one — CloseBlock (also in blocks.jsx)
// renders a calendar embed too, and CloseBlock is used by the homepage,
// which renders synchronously before the deferred bundle-routes.min.js (this
// file's bundle) has necessarily finished loading. Keeping the embed in
// bundle-core means both call sites see it defined regardless of load order.

// ──────────────────────────────────────────────────────────────────
// /book/<slug> page
// ──────────────────────────────────────────────────────────────────

// Reassurance copy and framing per route, taken verbatim from the content
// spec whose CTA points at that route (7code-build/content/pages/*.mdx).
// Where more than one page shares a route (e.g. several pages CTA to
// "Book a technical call"), the wording from the flagship/home page — or
// the first money page defining it — is used as the canonical line.
const BOOK_PAGES = {
  discovery: {
    title: "Book a discovery call",
    eyebrow: "30 minutes, no obligation",
    intro: "Bring the problem, not a spec. We'll tell you what we'd do and roughly what it costs.",
    reassurance: "We reply within one business day. No obligation, no sales sequence, and we will sign an NDA before the call if you would prefer.",
    duration: "30 minutes"
  },
  "quick-scan": {
    title: "Book an Operational Quick Scan",
    eyebrow: "45 minutes, no prep needed",
    intro: "You'll leave with two or three processes worth automating, whether or not you work with us.",
    reassurance: "We reply within one business day. No obligation, no sales sequence, and we will sign an NDA before the call if you would prefer.",
    duration: "45 minutes"
  },
  "mvp-scoping": {
    title: "Book an MVP scoping call",
    eyebrow: "45 minutes, bring the idea",
    intro: "You'll leave with a realistic scope and a price range, whether or not you work with us.",
    reassurance: "We reply within one business day. No obligation, no sales sequence, and we will sign an NDA before the call if you would prefer.",
    duration: "45 minutes"
  },
  "technical-call": {
    title: "Book a technical call",
    eyebrow: "45 minutes with a senior engineer",
    intro: "Bring a trace, an architecture question, or a failing run — not a salesperson on the other end.",
    reassurance: "We reply within one business day. No obligation, no sales sequence, and we will sign an NDA before the call if you would prefer.",
    duration: "45 minutes"
  }
};
function BookPage({
  slug
}) {
  const page = BOOK_PAGES[slug] || BOOK_PAGES.discovery;
  const bookingRoutes = window.SITE_CONFIG && window.SITE_CONFIG.BOOKING_ROUTES || {};
  const route = bookingRoutes[slug] || bookingRoutes.discovery || {
    calLink: "7code/discovery-call"
  };
  useEffectBK(() => {
    const prev = document.title;
    document.title = page.title + " | 7code";
    return () => {
      document.title = prev;
    };
  }, [slug]);
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
  }, page.eyebrow), /*#__PURE__*/React.createElement("h1", null, page.title), /*#__PURE__*/React.createElement("p", null, page.intro))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 720,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(CalEmbed, {
    calLink: route.calLink
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      textAlign: "center",
      color: "var(--slate-500)",
      fontSize: 14
    }
  }, page.reassurance), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      textAlign: "center",
      paddingTop: 24,
      borderTop: "1px solid var(--slate-200)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 12,
      color: "var(--slate-500)",
      fontSize: 14
    }
  }, "Would rather not book a slot yet?"), /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--ghost"
  }, "Use the contact form instead ", /*#__PURE__*/React.createElement(Icon.arrow, null))))));
}
window.BookPage = BookPage;