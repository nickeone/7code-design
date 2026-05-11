function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
// Icons + Logo + atoms shared across pages

const Icon = {
  arrow: p => /*#__PURE__*/React.createElement("svg", {
    className: p.className || "arrow",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 5l7 7-7 7"
  })),
  arrowLeft: p => /*#__PURE__*/React.createElement("svg", {
    className: p.className || "arrow",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5M11 19l-7-7 7-7"
  })),
  caret: p => /*#__PURE__*/React.createElement("svg", {
    className: p.className || "caret",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  })),
  check: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  })),
  checkCircle: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  })),
  star: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
  })),
  award: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.687a.5.5 0 0 1-.81-.469l1.514-8.526"
  })),
  message: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"
  })),
  target: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2"
  })),
  zap: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z"
  })),
  cpu: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "9",
    width: "6",
    height: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"
  })),
  cloud: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 19a4.5 4.5 0 1 0-1.4-8.78 6 6 0 1 0-11.6 2.78A4.5 4.5 0 0 0 6.5 19h11z"
  })),
  shield: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  })),
  monitor: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "3",
    width: "20",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 21h8M12 17v4"
  })),
  code: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M16 18l6-6-6-6M8 6l-6 6 6 6"
  })),
  layers: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M12 2L2 7l10 5 10-5-10-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 17l10 5 10-5M2 12l10 5 10-5"
  })),
  smile: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"
  })),
  globe: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
  })),
  heart: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
  })),
  briefcase: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "7",
    width: "20",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
  })),
  energy: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v8M4.93 10.93l1.41 1.41M2 18h2M20 18h2M19.07 10.93l-1.41 1.41M22 22H2M16 22a4 4 0 0 0-8 0"
  })),
  chart: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M3 3v18h18M7 14l4-4 4 4 5-5"
  })),
  users: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
  })),
  pulse: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M22 12h-4l-3 9L9 3l-3 9H2"
  })),
  search: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })),
  menu: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M3 12h18M3 6h18M3 18h18"
  })),
  x: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })),
  github: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.13-3.2.69-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"
  })),
  linkedin: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.46v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"
  })),
  twitter: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
  })),
  email: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 7-10 6L2 7"
  })),
  phone: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  })),
  pin: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })),
  quote: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M3 17h4l2-4V7H3v6h2L3 17zm10 0h4l2-4V7h-6v6h2l-2 4z"
  }))
};

// 7Code Logo (single mark), "7" stroke is cyan accent, rest is ink/inherit
function Logo({
  height = 28,
  color
}) {
  const accent = "var(--cyan-500)";
  return /*#__PURE__*/React.createElement("svg", {
    width: height * 138.848 / 53.125,
    height: height,
    viewBox: "0 0 138.848 53.125",
    fill: "currentColor",
    style: {
      color
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 124.255 20.847 C 128.783 20.847 132.347 22.259 134.947 25.083 C 137.547 27.908 138.848 31.785 138.848 36.716 C 138.848 37.03 138.824 37.367 138.779 37.725 L 138.779 38.331 L 114.437 38.331 C 114.661 41.424 115.625 43.822 117.328 45.525 C 119.032 47.229 121.341 48.082 124.255 48.082 C 128.469 48.082 131.696 46.221 133.938 42.5 L 138.309 45.257 C 135.081 50.502 130.173 53.125 123.583 53.125 C 120.713 53.125 118.157 52.452 115.916 51.107 C 113.72 49.718 111.994 47.812 110.739 45.392 C 109.529 42.971 108.923 40.169 108.923 36.986 C 108.923 33.758 109.55 30.933 110.806 28.512 C 112.106 26.092 113.9 24.208 116.186 22.864 C 118.517 21.519 121.207 20.847 124.255 20.847 Z M 124.255 25.554 C 121.61 25.554 119.457 26.272 117.799 27.707 C 116.141 29.096 115.087 31.113 114.638 33.758 L 132.997 33.758 C 132.818 31.292 131.921 29.32 130.307 27.84 C 128.738 26.316 126.72 25.554 124.255 25.554 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 107.067 52.452 L 101.687 52.452 L 101.687 47.14 C 100.566 49.067 99.087 50.547 97.249 51.578 C 95.455 52.609 93.416 53.125 91.13 53.125 C 88.35 53.125 85.794 52.474 83.463 51.174 C 81.132 49.874 79.272 48.014 77.882 45.594 C 76.493 43.173 75.798 40.304 75.798 36.986 C 75.798 33.624 76.493 30.755 77.882 28.379 C 79.272 25.958 81.132 24.097 83.463 22.797 C 85.794 21.497 88.35 20.847 91.13 20.847 C 93.416 20.847 95.456 21.362 97.249 22.393 C 99.087 23.424 100.566 24.904 101.687 26.831 L 101.687 0 L 107.067 0 L 107.067 52.452 Z M 91.802 25.891 C 89.919 25.891 88.17 26.316 86.557 27.168 C 84.943 28.02 83.643 29.275 82.657 30.934 C 81.716 32.593 81.245 34.61 81.245 36.986 C 81.245 39.362 81.716 41.38 82.657 43.039 C 83.643 44.697 84.943 45.953 86.557 46.804 C 88.17 47.656 89.919 48.082 91.802 48.082 C 93.371 48.082 94.917 47.656 96.441 46.804 C 97.966 45.953 99.221 44.697 100.207 43.039 C 101.194 41.38 101.687 39.362 101.687 36.986 C 101.687 34.61 101.194 32.593 100.207 30.934 C 99.221 29.275 97.966 28.02 96.441 27.168 C 94.917 26.316 93.371 25.891 91.802 25.891 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 57.936 20.847 C 60.985 20.847 63.697 21.542 66.073 22.932 C 68.494 24.322 70.399 26.227 71.789 28.647 C 73.223 31.068 73.942 33.848 73.942 36.986 C 73.942 40.079 73.223 42.858 71.789 45.324 C 70.399 47.745 68.494 49.651 66.073 51.041 C 63.697 52.43 60.984 53.125 57.936 53.125 C 54.933 53.125 52.221 52.43 49.8 51.041 C 47.38 49.651 45.451 47.745 44.017 45.324 C 42.627 42.858 41.932 40.079 41.932 36.986 C 41.932 33.848 42.627 31.068 44.017 28.647 C 45.451 26.227 47.38 24.322 49.8 22.932 C 52.221 21.542 54.933 20.847 57.936 20.847 Z M 57.936 25.891 C 55.919 25.891 54.103 26.362 52.489 27.303 C 50.92 28.244 49.665 29.566 48.723 31.269 C 47.827 32.928 47.379 34.834 47.379 36.986 C 47.379 39.138 47.827 41.043 48.723 42.702 C 49.665 44.36 50.92 45.683 52.489 46.669 C 54.103 47.611 55.919 48.082 57.936 48.082 C 59.954 48.082 61.747 47.611 63.316 46.669 C 64.93 45.683 66.186 44.361 67.082 42.702 C 68.024 41.043 68.495 39.138 68.495 36.986 C 68.495 34.834 68.024 32.928 67.082 31.269 C 66.186 29.566 64.93 28.244 63.316 27.303 C 61.747 26.362 59.954 25.891 57.936 25.891 Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: accent,
    d: "M 19.238 39.741 C 19.46 40.802 19.817 41.789 20.31 42.701 C 21.251 44.36 22.507 45.683 24.076 46.669 C 25.69 47.61 27.505 48.082 29.523 48.082 C 32.033 48.082 34.275 47.521 36.247 46.4 C 38.22 45.28 39.564 43.957 40.282 42.433 L 40.282 49.157 C 39.206 50.412 37.659 51.399 35.642 52.116 C 33.669 52.788 31.63 53.125 29.523 53.125 C 26.519 53.125 23.806 52.43 21.386 51.04 C 19.261 49.82 17.515 48.203 16.15 46.189 L 19.238 39.741 Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: accent,
    d: "M 29.523 20.847 C 31.63 20.847 33.669 21.205 35.642 21.922 C 37.659 22.595 39.206 23.559 40.282 24.814 L 40.282 31.539 C 39.564 30.015 38.22 28.692 36.247 27.571 C 34.275 26.451 32.033 25.89 29.523 25.89 C 28.089 25.89 26.757 26.128 25.527 26.603 L 28.262 20.889 C 28.676 20.861 29.097 20.847 29.523 20.847 Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: accent,
    d: "M 0 18.274 L 0 13.777 L 27.543 13.777 L 8.713 53.125 L 3.71 53.125 L 20.404 18.274 L 0 18.274 Z"
  }));
}
window.Icon = Icon;
window.Logo = Logo;// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;width:100%;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability, if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-noncommentable": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;

  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag, ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}
function TweakColor({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
    type: "color",
    className: "twk-swatch",
    value: value,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});/* global React, Logo, Icon */

const {
  useState,
  useEffect,
  useRef
} = React;

// ──────────────────────────────────────────────────────────────────
// Routing (path-based)
// ──────────────────────────────────────────────────────────────────
function useHashRoute() {
  const [path, setPath] = useState(() => {
    if (typeof window === "undefined") return "/";
    return window.location.hash.slice(1) || window.location.pathname || "/";
  });
  useEffect(() => {
    const onHash = () => {
      setPath(window.location.hash.slice(1) || "/");
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return path;
}

// Returns [page, slug] e.g. ["/case-study", "wholesum"] or ["/expertise", "healthcare"] or ["/blog", "my-post"]
function parseRoute(hash) {
  const parts = hash.split("/").filter(Boolean);
  if (!parts.length) return ["/", null];
  if (parts.length >= 2 && (parts[0] === "case-study" || parts[0] === "expertise" || parts[0] === "blog" || parts[0] === "service" || parts[0] === "compare")) {
    return ["/" + parts[0], parts[1]];
  }
  return ["/" + parts[0], null];
}
function NavLinkA({
  to,
  children,
  className = "nav-link",
  activeClass = "is-active"
}) {
  const active = typeof window !== "undefined" && window.location.hash.slice(1) === to;
  return /*#__PURE__*/React.createElement("a", {
    href: to,
    className: className + (active ? " " + activeClass : "")
  }, children);
}

// ──────────────────────────────────────────────────────────────────
// Reveal hook
// ──────────────────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-in)");
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.1
    });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

// ──────────────────────────────────────────────────────────────────
// Nav
// ──────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSvcOpen, setMobileSvcOpen] = useState(false);
  const [mobileExpOpen, setMobileExpOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const megaTimer = useRef(null);
  const svcTimer = useRef(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const openMega = () => {
    clearTimeout(megaTimer.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    megaTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };
  const openSvc = () => {
    clearTimeout(svcTimer.current);
    setSvcOpen(true);
  };
  const closeSvc = () => {
    svcTimer.current = setTimeout(() => setSvcOpen(false), 120);
  };
  const services = [{
    icon: Icon.code,
    title: "AI-Native Product Engineering",
    slug: "ai-product-engineering",
    bullets: ["AI-Powered Web Apps", "Intelligent Mobile Apps", "LLM-First Interfaces", "Product Discovery & UX Design"]
  }, {
    icon: Icon.globe,
    title: "System Integrations",
    slug: "system-integrations",
    bullets: ["API & Middleware", "ERP / CRM Connectors", "Real-time Data Pipelines"]
  }, {
    icon: Icon.cpu,
    title: "AI & Process Automation",
    slug: "ai-automation",
    bullets: ["Custom Copilots", "Workflow Automation", "LLM Evaluation"]
  }, {
    icon: Icon.cpu,
    title: "LLM & Agent Development",
    slug: "llm-agent-development",
    bullets: ["LLM API Integrations", "Multi-step Agent Pipelines", "RAG System Design"]
  }, {
    icon: Icon.cloud,
    title: "Cloud & Agentic Infrastructure",
    slug: "cloud-agentic-infra",
    bullets: ["Cloud-Native Deployments", "Agentic Pipelines & Orchestration", "AI Observability"]
  }, {
    icon: Icon.users,
    title: "AI Engineering Outstaffing",
    slug: "ai-outstaffing",
    bullets: ["Dedicated AI Engineers", "Embedded Team Leads", "Domain Specialists"]
  }];
  const expertise = [{
    icon: Icon.heart,
    title: "Healthcare",
    desc: "EHR, clinical decision tools, patient engagement",
    slug: "healthcare"
  }, {
    icon: Icon.briefcase,
    title: "Finance",
    desc: "ERP integration, real-time dashboards, automation",
    slug: "finance"
  }, {
    icon: Icon.shield,
    title: "Defence & Security",
    desc: "Situational awareness, secure systems integration",
    slug: "defence"
  }, {
    icon: Icon.energy,
    title: "Energy & Utilities",
    desc: "IoT integration, predictive analytics, monitoring",
    slug: "energy"
  }, {
    icon: Icon.users,
    title: "HR",
    desc: "Recruitment, payroll, workforce analytics",
    slug: "hr"
  }, {
    icon: Icon.chart,
    title: "Operations",
    desc: "Workflow automation, dashboards, integrations",
    slug: "operations"
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "nav" + (scrolled ? " is-scrolled" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "brand"
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 28
  })), /*#__PURE__*/React.createElement("nav", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "static"
    },
    onMouseEnter: openSvc,
    onMouseLeave: closeSvc
  }, /*#__PURE__*/React.createElement("a", {
    href: "/service/ai-product-engineering",
    className: "nav-link" + (svcOpen ? " is-active" : ""),
    "aria-expanded": svcOpen,
    onClick: e => {
      e.preventDefault();
      setSvcOpen(o => !o);
    }
  }, "Services ", /*#__PURE__*/React.createElement(Icon.caret, null)), /*#__PURE__*/React.createElement("div", {
    className: "svc-mega" + (svcOpen ? " is-open" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-mega-grid"
  }, services.map((s, i) => {
    const I = s.icon;
    return /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "/service/" + s.slug,
      className: "svc-mega-card"
    }, /*#__PURE__*/React.createElement("span", {
      className: "svc-mega-icon"
    }, /*#__PURE__*/React.createElement(I, null)), /*#__PURE__*/React.createElement("h4", {
      className: "svc-mega-title"
    }, s.title), /*#__PURE__*/React.createElement("ul", {
      className: "svc-mega-list"
    }, s.bullets.map((b, j) => /*#__PURE__*/React.createElement("li", {
      key: j
    }, b))), /*#__PURE__*/React.createElement("span", {
      className: "svc-mega-link"
    }, "Learn more ", /*#__PURE__*/React.createElement(Icon.arrow, null)));
  })), /*#__PURE__*/React.createElement("div", {
    className: "svc-mega-foot"
  }, /*#__PURE__*/React.createElement("span", null, "Tailored solutions for every need"), /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "svc-mega-cta"
  }, "Book a meeting ", /*#__PURE__*/React.createElement(Icon.arrow, null))))), /*#__PURE__*/React.createElement(NavLinkA, {
    to: "/case-studies"
  }, "Case Studies"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    },
    onMouseEnter: openMega,
    onMouseLeave: closeMega
  }, /*#__PURE__*/React.createElement("a", {
    href: "/expertise",
    className: "nav-link" + (megaOpen ? " is-active" : ""),
    "aria-expanded": megaOpen
  }, "Expertise ", /*#__PURE__*/React.createElement(Icon.caret, null)), /*#__PURE__*/React.createElement("div", {
    className: "megamenu" + (megaOpen ? " is-open" : "")
  }, expertise.map((e, i) => {
    const I = e.icon;
    return /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "/expertise/" + e.slug,
      className: "mm-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mm-icon"
    }, /*#__PURE__*/React.createElement(I, null)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      className: "mm-title"
    }, e.title), /*#__PURE__*/React.createElement("span", {
      className: "mm-desc"
    }, e.desc)));
  }))), /*#__PURE__*/React.createElement(NavLinkA, {
    to: "/about"
  }, "About"), /*#__PURE__*/React.createElement(NavLinkA, {
    to: "/blog"
  }, "Blog")), /*#__PURE__*/React.createElement("div", {
    className: "nav-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--cyan btn--sm"
  }, "Get in touch ", /*#__PURE__*/React.createElement(Icon.arrow, null)), /*#__PURE__*/React.createElement("button", {
    className: "nav-mobile-toggle",
    onClick: () => setMobileOpen(o => !o),
    "aria-label": "Menu"
  }, mobileOpen ? /*#__PURE__*/React.createElement(Icon.x, null) : /*#__PURE__*/React.createElement(Icon.menu, null))))), /*#__PURE__*/React.createElement("div", {
    className: "nav-mobile" + (mobileOpen ? " is-open" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-mobile-group"
  }, /*#__PURE__*/React.createElement("button", {
    className: "nav-mobile-group-btn",
    onClick: () => setMobileSvcOpen(o => !o),
    "aria-expanded": mobileSvcOpen
  }, "Services ", /*#__PURE__*/React.createElement(Icon.caret, null)), /*#__PURE__*/React.createElement("div", {
    className: "nav-mobile-sub" + (mobileSvcOpen ? " is-open" : "")
  }, services.map((s, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "/service/" + s.slug
  }, s.title)))), /*#__PURE__*/React.createElement("a", {
    href: "/case-studies"
  }, "Case Studies"), /*#__PURE__*/React.createElement("div", {
    className: "nav-mobile-group"
  }, /*#__PURE__*/React.createElement("button", {
    className: "nav-mobile-group-btn",
    onClick: () => setMobileExpOpen(o => !o),
    "aria-expanded": mobileExpOpen
  }, "Expertise ", /*#__PURE__*/React.createElement(Icon.caret, null)), /*#__PURE__*/React.createElement("div", {
    className: "nav-mobile-sub" + (mobileExpOpen ? " is-open" : "")
  }, expertise.map((e, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "/expertise/" + e.slug
  }, e.title)))), /*#__PURE__*/React.createElement("a", {
    href: "/about"
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "/blog"
  }, "Blog"), /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--cyan"
  }, "Get in touch ", /*#__PURE__*/React.createElement(Icon.arrow, null))));
}

// ──────────────────────────────────────────────────────────────────
// Footer
// ──────────────────────────────────────────────────────────────────
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-brand"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "brand"
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 32,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("p", null, "AI-first software engineering partner. We design, build, and operate AI-native products end-to-end, LLM features, agent workflows, and the production cloud behind them.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Services"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/service/ai-product-engineering"
  }, "AI-Native Product Engineering")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/service/system-integrations"
  }, "System Integrations")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/service/ai-automation"
  }, "AI & Process Automation")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/service/llm-agent-development"
  }, "LLM & Agent Development")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/service/cloud-agentic-infra"
  }, "Cloud & Agentic Infra")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/service/ai-outstaffing"
  }, "AI Engineering Outstaffing")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Expertise"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/expertise/healthcare"
  }, "Healthcare")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/expertise/finance"
  }, "Finance")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/expertise/energy"
  }, "Energy & Utilities")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/expertise/defence"
  }, "Defence & Security")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/expertise/hr"
  }, "HR")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/expertise/operations"
  }, "Operations")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Company"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/about"
  }, "About")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/case-studies"
  }, "Case Studies")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/process"
  }, "Our Process")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/blog"
  }, "Blog")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/contact"
  }, "Contact")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://clutch.co/profile/7code#reviews",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Reviews on Clutch")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Contact"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "mailto:office@7code.ro"
  }, "office@7code.ro")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://share.google/kSWr5AJABJj33MMVu",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Cluj-Napoca, Romania"))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 7Code. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    className: "footer-social"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/7code",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "GitHub"
  }, /*#__PURE__*/React.createElement(Icon.github, null)), /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/company/7-code/",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "LinkedIn"
  }, /*#__PURE__*/React.createElement(Icon.linkedin, null)), /*#__PURE__*/React.createElement("a", {
    href: "https://clutch.co/profile/7code",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Clutch profile"
  }, /*#__PURE__*/React.createElement(Icon.award, null))))));
}
window.Nav = Nav;
window.Footer = Footer;
window.useHashRoute = useHashRoute;
window.parseRoute = parseRoute;
window.useReveal = useReveal;/* global React, Logo, Icon */

const {
  useState: useStateH,
  useEffect: useEffectH
} = React;

// ──────────────────────────────────────────────────────────────────
// HERO VARIATIONS
// ──────────────────────────────────────────────────────────────────

// Variant A, Pattern grid + dashboard mockup (faithful to Figma)
function HeroPatternMockup() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero hero--pattern"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-pattern-bg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    preserveAspectRatio: "xMidYMid slice",
    viewBox: "0 0 1440 720"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "grid",
    width: "48",
    height: "48",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 48 0 L 0 0 0 48",
    fill: "none",
    stroke: "rgba(15,23,42,0.05)",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "cyan-glow",
    cx: "50%",
    cy: "40%",
    r: "60%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgba(6,182,212,0.18)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "60%",
    stopColor: "rgba(6,182,212,0.04)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "rgba(6,182,212,0)"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "1440",
    height: "720",
    fill: "url(#grid)"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "1440",
    height: "720",
    fill: "url(#cyan-glow)"
  }), [[120, 80], [216, 128], [312, 80], [1080, 128], [1176, 80], [1272, 176], [96, 560], [192, 608], [288, 512], [1056, 560], [1200, 608], [1296, 512]].map(([x, y], i) => /*#__PURE__*/React.createElement("rect", {
    key: i,
    x: x,
    y: y,
    width: "48",
    height: "48",
    fill: "rgba(6,182,212,0.07)"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "container hero-pattern-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-content reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon.zap, {
    style: {
      width: 14,
      height: 14
    }
  }), " AI-first engineering partner"), /*#__PURE__*/React.createElement("h1", null, "AI-native software, engineered for ", /*#__PURE__*/React.createElement("span", {
    className: "text-cyan"
  }, "production"), "."), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "We design, build, and operate AI-native products end-to-end, LLM features, agent workflows, and the cloud infrastructure behind them. Strategy, design, and engineering under one roof."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--cyan btn--lg"
  }, "Start a project ", /*#__PURE__*/React.createElement(Icon.arrow, null)), /*#__PURE__*/React.createElement("a", {
    href: "/process",
    className: "btn btn--ghost btn--lg"
  }, "How we work")), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-item"
  }, /*#__PURE__*/React.createElement("strong", null, "20+"), /*#__PURE__*/React.createElement("span", null, "Projects delivered")), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-item"
  }, /*#__PURE__*/React.createElement("strong", null, "8+ yrs"), /*#__PURE__*/React.createElement("span", null, "Engineering practice")), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-item"
  }, /*#__PURE__*/React.createElement("strong", null, "98%"), /*#__PURE__*/React.createElement("span", null, "Satisfied clients")))), /*#__PURE__*/React.createElement("div", {
    className: "hero-mockup reveal"
  }, /*#__PURE__*/React.createElement(DashboardMockup, null))));
}

// A faithful, drawn-in-CSS dashboard placeholder
function DashboardMockup() {
  return /*#__PURE__*/React.createElement("div", {
    className: "mockup"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mockup-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mockup-dot",
    style: {
      background: "#FF5F57"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mockup-dot",
    style: {
      background: "#FEBC2E"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mockup-dot",
    style: {
      background: "#28C840"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mockup-url"
  }, "app.7code.ro")), /*#__PURE__*/React.createElement("div", {
    className: "mockup-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mockup-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mockup-side-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mockup-logo"
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 16
  }))), ["Dashboard", "Projects", "Analytics", "Team", "Settings"].map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "mockup-side-item" + (i === 1 ? " is-active" : "")
  }, /*#__PURE__*/React.createElement("span", {
    className: "mockup-side-dot"
  }), " ", l))), /*#__PURE__*/React.createElement("div", {
    className: "mockup-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mockup-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mockup-eyebrow"
  }, "Performance overview"), /*#__PURE__*/React.createElement("div", {
    className: "mockup-h1"
  }, "$248,930")), /*#__PURE__*/React.createElement("div", {
    className: "mockup-pill"
  }, "+12.4% MoM")), /*#__PURE__*/React.createElement("div", {
    className: "mockup-chart"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 320 120",
    preserveAspectRatio: "none",
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "ch",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgba(6,182,212,0.4)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "rgba(6,182,212,0)"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M0 90 C 30 80, 50 60, 80 65 S 130 40, 160 50 S 220 20, 260 30 S 320 18, 320 18 L 320 120 L 0 120 Z",
    fill: "url(#ch)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 90 C 30 80, 50 60, 80 65 S 130 40, 160 50 S 220 20, 260 30 S 320 18, 320 18",
    fill: "none",
    stroke: "#06B6D4",
    strokeWidth: "2.5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mockup-stats"
  }, [{
    l: "Active users",
    v: "12,408",
    t: "+8.2%"
  }, {
    l: "Conversion",
    v: "4.6%",
    t: "+1.1%"
  }, {
    l: "Avg session",
    v: "3m 42s",
    t: "+24s"
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "mockup-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mockup-stat-label"
  }, s.l), /*#__PURE__*/React.createElement("div", {
    className: "mockup-stat-value"
  }, s.v), /*#__PURE__*/React.createElement("div", {
    className: "mockup-stat-trend"
  }, s.t)))))));
}

// Variant B, Animated terminal / code rain
function HeroTerminal() {
  const [lines, setLines] = useStateH([]);
  const all = ["$ 7code init my-product", "→ scaffolding modern stack", "✓ next.js + typescript", "✓ postgres + prisma", "✓ ci/cd pipeline configured", "→ deploying to production", "✓ live at my-product.com", "$ ready to ship."];
  useEffectH(() => {
    let i = 0;
    const t = setInterval(() => {
      setLines(prev => [...prev, all[i % all.length]]);
      i++;
      if (i > 14) clearInterval(t);
    }, 600);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "hero hero--terminal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container hero-pattern-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-content reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag-dot"
  }), " Available for new partnerships, Q2 2026"), /*#__PURE__*/React.createElement("h1", null, "Engineering teams that ship like a ", /*#__PURE__*/React.createElement("span", {
    className: "text-cyan"
  }, "product team"), "."), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "From the first whiteboard session to the hundredth deploy, 7Code becomes the engineering muscle behind your product roadmap."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--cyan btn--lg"
  }, "Start a project ", /*#__PURE__*/React.createElement(Icon.arrow, null)), /*#__PURE__*/React.createElement("a", {
    href: "/process",
    className: "btn btn--ghost btn--lg"
  }, "See our process"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-terminal reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-terminal-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mockup-dot",
    style: {
      background: "#FF5F57"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mockup-dot",
    style: {
      background: "#FEBC2E"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mockup-dot",
    style: {
      background: "#28C840"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mockup-url"
  }, "~/projects/my-product")), /*#__PURE__*/React.createElement("div", {
    className: "hero-terminal-body"
  }, lines.map((l, i) => {
    const isCmd = l.startsWith("$");
    const isOk = l.startsWith("✓");
    const isArrow = l.startsWith("→");
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "terminal-line"
    }, /*#__PURE__*/React.createElement("span", {
      className: isOk ? "terminal-ok" : isArrow ? "terminal-arrow" : isCmd ? "terminal-cmd" : ""
    }, l));
  }), /*#__PURE__*/React.createElement("div", {
    className: "terminal-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "terminal-caret"
  }, "\u258D"))))));
}

// Variant C, Bold split / type-forward, no mockup
function HeroBoldSplit() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero hero--split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container hero-split-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-split-left reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon.star, {
    style: {
      width: 14,
      height: 14
    }
  }), " Trusted by 20+ teams worldwide"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-mega"
  }, "We build ", /*#__PURE__*/React.createElement("span", {
    className: "text-cyan"
  }, "software"), /*#__PURE__*/React.createElement("br", null), "that compounds."), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "Long-term engineering partners for ambitious products. Every line of code is a bet on your future leverage."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--cyan btn--lg"
  }, "Start a project ", /*#__PURE__*/React.createElement(Icon.arrow, null)), /*#__PURE__*/React.createElement("a", {
    href: "/about",
    className: "btn-link"
  }, "Meet the team ", /*#__PURE__*/React.createElement(Icon.arrow, null)))), /*#__PURE__*/React.createElement("div", {
    className: "hero-split-right reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-orb"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 400",
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "orb-g",
    cx: "50%",
    cy: "50%",
    r: "50%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#4DDFEA"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "55%",
    stopColor: "#0C9CB5"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#075063"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "orb-glow",
    cx: "50%",
    cy: "40%",
    r: "40%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgba(255,255,255,0.55)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "rgba(255,255,255,0)"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "200",
    r: "170",
    fill: "url(#orb-g)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "200",
    r: "170",
    fill: "url(#orb-glow)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "200",
    cy: "200",
    rx: "180",
    ry: "60",
    fill: "none",
    stroke: "rgba(6,182,212,0.35)",
    strokeWidth: "1",
    transform: "rotate(-15 200 200)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "200",
    cy: "200",
    rx: "190",
    ry: "80",
    fill: "none",
    stroke: "rgba(6,182,212,0.2)",
    strokeWidth: "1",
    transform: "rotate(20 200 200)"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-orb-badges"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-badge",
    style: {
      top: "10%",
      left: "-8%"
    }
  }, /*#__PURE__*/React.createElement(Icon.cpu, {
    style: {
      width: 18,
      height: 18
    }
  }), /*#__PURE__*/React.createElement("span", null, "AI-ready")), /*#__PURE__*/React.createElement("div", {
    className: "hero-badge",
    style: {
      top: "70%",
      left: "-5%"
    }
  }, /*#__PURE__*/React.createElement(Icon.cloud, {
    style: {
      width: 18,
      height: 18
    }
  }), /*#__PURE__*/React.createElement("span", null, "Cloud-native")), /*#__PURE__*/React.createElement("div", {
    className: "hero-badge",
    style: {
      top: "20%",
      right: "-5%"
    }
  }, /*#__PURE__*/React.createElement(Icon.shield, {
    style: {
      width: 18,
      height: 18
    }
  }), /*#__PURE__*/React.createElement("span", null, "Secure by default")), /*#__PURE__*/React.createElement("div", {
    className: "hero-badge",
    style: {
      top: "75%",
      right: "-8%"
    }
  }, /*#__PURE__*/React.createElement(Icon.pulse, {
    style: {
      width: 18,
      height: 18
    }
  }), /*#__PURE__*/React.createElement("span", null, "Always-on monitoring")))))));
}
window.HeroPatternMockup = HeroPatternMockup;
window.HeroTerminal = HeroTerminal;
window.HeroBoldSplit = HeroBoldSplit;/* global React, Logo, Icon */

const {
  useState: useStateS,
  useEffect: useEffectS,
  useRef: useRefS
} = React;

// ──────────────────────────────────────────────────────────────────
// Shared section components used by multiple pages
// ──────────────────────────────────────────────────────────────────

// Trusted-by marquee
function TrustedBy() {
  const logos = [{
    src: "/project/assets/b6d98b61cd02d867e9a2cd2d32465eb8ba06203f.png",
    alt: "Founders Factory"
  }, {
    src: "/project/assets/9681e775df296ad64c7b5a041883805a82c3d2a1.png",
    alt: "G42"
  }, {
    src: "/project/assets/4436e02038b9c61bca6a16aa049b705ba895505c.png",
    alt: "Ronins"
  }, {
    src: "/project/uploads/daily8.png",
    alt: "Daily8"
  }, {
    src: "/project/uploads/lendit.png",
    alt: "Lendit"
  }, {
    src: "/project/uploads/Lidl-logo.png",
    alt: "Lidl"
  }, {
    src: "/project/uploads/wholesum.webp",
    alt: "Wholesum"
  }];
  const all = [...logos, ...logos];
  return /*#__PURE__*/React.createElement("section", {
    className: "trust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trust-label"
  }, "Trusted by Industry Leaders"), /*#__PURE__*/React.createElement("div", {
    className: "marquee"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee-track"
  }, all.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "marquee-logo",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 48,
      padding: "0 8px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: l.src,
    alt: l.alt,
    style: {
      height: 44,
      width: "auto",
      maxWidth: 160,
      objectFit: "contain",
      display: "block"
    }
  })))))));
}

// Photo covers for case studies that have a real hero image. Anything not
// listed falls back to the kind-based pattern card below.
const CS_PHOTO_COVERS = {
  "wholesum": {
    src: "/project/uploads/wholesum-hero.png",
    alt: "WholeSum"
  },
  "daily8": {
    src: "/project/uploads/daily8-website.jpg",
    alt: "Daily8, daily8.com/en"
  },
  "revote": {
    src: "/project/uploads/revote-hero.jpg",
    alt: "Revote, European Parliament chamber"
  },
  "g42-fleet": {
    src: "/project/uploads/g42-fleet-hero.jpg",
    alt: "G42 ESTS fleet-tracking dashboard"
  },
  "cloud-of-legacy": {
    src: "/project/uploads/cloud-of-legacy-hero.jpg",
    alt: "Cloud of Legacy landing page"
  },
  "lidl-road-safety": {
    src: "/project/uploads/lidl-road-safety-hero.jpg",
    alt: "Lidl + Politia Romana road-safety app"
  },
  "founders-factory": {
    src: "/project/uploads/founders-factory-hero.jpg",
    alt: "Founders Factory homepage, Power to founders"
  },
  "hera": {
    src: "/project/uploads/hera-hero.jpg",
    alt: "Hera Health Tech, fertility-clinic patient support app"
  },
  "melsonic": {
    src: "/project/uploads/melsonic-hero.jpg",
    alt: "Melsonic, AI-powered guitar learning"
  },
  "drum-bun": {
    src: "/project/uploads/drum-bun-hero.jpg",
    alt: "Drum Bun, Romanian car-services mobile app"
  },
  "numerize": {
    src: "/project/uploads/numerize-hero.jpg",
    alt: "Numerize, French document management and e-signature platform"
  }
};

// Case study cover graphic
function CSCover({
  kind,
  label,
  slug
}) {
  const photo = CS_PHOTO_COVERS[slug];
  if (photo) {
    return /*#__PURE__*/React.createElement("div", {
      className: "cs-cover cs-cover--photo"
    }, /*#__PURE__*/React.createElement("img", {
      src: photo.src,
      alt: label || photo.alt,
      className: "cs-cover-img"
    }));
  }
  const map = {
    health: {
      cls: "cover--health",
      icon: /*#__PURE__*/React.createElement(Icon.heart, null)
    },
    finance: {
      cls: "cover--finance",
      icon: /*#__PURE__*/React.createElement(Icon.briefcase, null)
    },
    energy: {
      cls: "cover--energy",
      icon: /*#__PURE__*/React.createElement(Icon.energy, null)
    },
    ops: {
      cls: "cover--ops",
      icon: /*#__PURE__*/React.createElement(Icon.chart, null)
    },
    defence: {
      cls: "cover--defence",
      icon: /*#__PURE__*/React.createElement(Icon.shield, null)
    },
    cyan: {
      cls: "cover--cyan",
      icon: /*#__PURE__*/React.createElement(Icon.zap, null)
    }
  };
  const m = map[kind] || map.cyan;
  return /*#__PURE__*/React.createElement("div", {
    className: "cs-cover " + m.cls
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 250",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "p-" + kind,
    width: "24",
    height: "24",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1",
    fill: "rgba(255,255,255,0.12)"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "400",
    height: "250",
    fill: "url(#p-" + kind + ")"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "320",
    cy: "60",
    r: "140",
    fill: "rgba(255,255,255,0.03)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 12,
      background: "rgba(255,255,255,0.1)",
      border: "1px solid rgba(255,255,255,0.15)",
      display: "grid",
      placeItems: "center",
      backdropFilter: "blur(8px)"
    }
  }, React.cloneElement(m.icon, {
    style: {
      width: 22,
      height: 22,
      color: "#fff"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.75)"
    }
  }, label)));
}

// Case studies section
function CaseStudies({
  limit
}) {
  const items = [
  // First six surface on the homepage (pages.jsx caps CaseStudies at limit={6}).
  {
    slug: "wholesum",
    kind: "cyan",
    title: "Self-serve AI analytics platform for unstructured text",
    meta: ["Data / AI", "16 weeks"],
    tag: "Featured"
  }, {
    slug: "daily8",
    kind: "cyan",
    title: "AI-powered news aggregator for the MENA region",
    meta: ["Mobile / Media", "6 months"]
  }, {
    slug: "revote",
    kind: "defence",
    title: "Remote electronic voting platform for the European Parliament",
    meta: ["E-Government", "8 months"]
  }, {
    slug: "lidl-road-safety",
    kind: "cyan",
    title: "Children's road-safety gamification web app for Lidl Romania",
    meta: ["Education / Retail CSR", "6 months"]
  }, {
    slug: "hera",
    kind: "health",
    title: "AI-powered patient-support app for fertility clinics",
    meta: ["Healthcare / FemTech", "3 months MVP"]
  }, {
    slug: "melsonic",
    kind: "cyan",
    title: "AI-powered guitar-learning web app with real-time feedback",
    meta: ["Music / EdTech", "5 months MVP"]
  },
  // Remaining cases, visible on /case-studies, hidden from the homepage grid.
  {
    slug: "g42-fleet",
    kind: "energy",
    title: "Real-time fleet tracking platform for EXPO 2020 Dubai",
    meta: ["IoT / Smart Buildings", "2 years"]
  }, {
    slug: "cloud-of-legacy",
    kind: "cyan",
    title: "Cloud-based digital-heritage platform with secure inheritance access",
    meta: ["Consumer SaaS", "8 months"]
  }, {
    slug: "founders-factory",
    kind: "finance",
    title: "UI overhaul + ongoing engineering for a UK venture studio",
    meta: ["Venture Studio / VC", "Ongoing"]
  }, {
    slug: "drum-bun",
    kind: "ops",
    title: "Romanian car-services mobile app, RCA, ITP, vignette in one tap",
    meta: ["InsurTech / Automotive", "Ongoing"]
  }, {
    slug: "numerize",
    kind: "ops",
    title: "Responsive electronic document management + e-signature platform",
    meta: ["DocTech / Enterprise", "Ongoing"]
  }];
  const list = limit ? items.slice(0, limit) : items;
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Case studies"), /*#__PURE__*/React.createElement("h2", null, "Work we're proud to ship"), /*#__PURE__*/React.createElement("p", null, "Technical depth meets business strategy. Here are a few products we've built with our partners.")), /*#__PURE__*/React.createElement("div", {
    className: "cs-grid"
  }, list.map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "/case-study/" + c.slug,
    className: "cs-card reveal",
    style: {
      transitionDelay: i % 3 * 80 + "ms"
    }
  }, /*#__PURE__*/React.createElement(CSCover, {
    kind: c.kind,
    label: c.meta[0],
    slug: c.slug
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
  }, m))), /*#__PURE__*/React.createElement("h3", null, c.title), /*#__PURE__*/React.createElement("span", {
    className: "cs-link"
  }, "Read case study ", /*#__PURE__*/React.createElement(Icon.arrow, null)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/case-studies",
    className: "btn btn--ghost"
  }, "View all projects ", /*#__PURE__*/React.createElement(Icon.arrow, null)))));
}

// Why-choose section
function WhyChoose() {
  const why = [{
    icon: Icon.cpu,
    title: "AI-native by default",
    desc: "We design products around LLMs and agents from day one. Retrieval, evaluation, observability and guardrails are built in, not bolted on, so AI features behave predictably in production."
  }, {
    icon: Icon.chart,
    title: "Outcomes you can audit",
    desc: "Every engagement opens with a baseline and closes with the numbers: conversion lift, deflection rate, cost per task, eval scores. We commit to measurable business impact, not deliverables."
  }, {
    icon: Icon.cloud,
    title: "Production-grade cloud & agent infra",
    desc: "AWS, GCP, and Azure native. Vector stores, model gateways, eval harnesses, and CI for prompts and code, built to scale, audit, and recover, not just to demo."
  }, {
    icon: Icon.users,
    title: "Embedded long-term partnership",
    desc: "Senior AI engineers matched in 72 hours and embedded inside your team. Monthly rolling contracts, no lock-in, and 24/7 production support after launch."
  }];
  const stats = [{
    v: "20+",
    l: "Projects delivered"
  }, {
    v: "98%",
    l: "Satisfied clients"
  }, {
    v: "8+ yrs",
    l: "Engineering practice"
  }, {
    v: "24/7",
    l: "Production support"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Why 7Code"), /*#__PURE__*/React.createElement("h2", null, "Your AI-first engineering partner for production-grade products"), /*#__PURE__*/React.createElement("p", null, "We design, build, and operate AI-native software end-to-end, LLM features, agentic workflows, and the cloud foundations that keep them reliable. Strategy, design, and engineering under one roof, shipping in weeks, not quarters.")), /*#__PURE__*/React.createElement("div", {
    className: "why-grid"
  }, why.map((w, i) => {
    const I = w.icon;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "why-card reveal",
      style: {
        transitionDelay: i * 80 + "ms"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "why-icon"
    }, /*#__PURE__*/React.createElement(I, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, w.title), /*#__PURE__*/React.createElement("p", null, w.desc)));
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-row"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "stat reveal",
    style: {
      transitionDelay: i * 60 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-value"
  }, s.v), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, s.l))))));
}

// Verified & accredited section, credentials and listings
function VerifiedAccredited() {
  const items = [{
    src: "/project/uploads/SOC-2-Type-2-Logo.webp",
    alt: "SOC 2 Type II, AICPA-aligned controls"
  }, {
    src: "/project/uploads/hipa.webp",
    alt: "HIPAA Compliant, healthcare data safeguards"
  }, {
    src: "/project/uploads/gdpr.png",
    alt: "GDPR Compliant, EU General Data Protection Regulation"
  }, {
    src: "/project/uploads/iso%209001.png",
    alt: "ISO 9001:2015, quality management system certification"
  }, {
    src: "/project/uploads/clutch.png",
    alt: "Clutch, Top Web Developers · Government, Romania",
    href: "https://clutch.co/profile/7code"
  }, {
    src: "/project/uploads/sortlist%20logo%20.png",
    alt: "Sortlist Verified Agency"
  }, {
    src: "/project/uploads/crunchbase.png",
    alt: "Listed on Crunchbase",
    href: "https://www.crunchbase.com/organization/7code"
  }, {
    src: "/project/uploads/Goodfirms-Logo-Vector.svg-.png",
    alt: "Listed on GoodFirms",
    href: "https://www.goodfirms.co/company/7code"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Verified & accredited"), /*#__PURE__*/React.createElement("h2", null, "The credentials behind the work"), /*#__PURE__*/React.createElement("p", null, "Audited where it matters, listed where buyers look, certified for the regulated industries we ship in.")), /*#__PURE__*/React.createElement("div", {
    className: "trust-grid"
  }, items.map((item, i) => {
    const inner = /*#__PURE__*/React.createElement("img", {
      src: item.src,
      alt: item.alt,
      className: "trust-logo" + (item.className ? " " + item.className : ""),
      loading: "lazy"
    });
    return item.href ? /*#__PURE__*/React.createElement("a", {
      key: i,
      href: item.href,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "trust-card reveal",
      style: {
        transitionDelay: i % 4 * 50 + "ms"
      },
      "aria-label": item.alt
    }, inner) : /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "trust-card reveal",
      style: {
        transitionDelay: i % 4 * 50 + "ms"
      }
    }, inner);
  }))));
}

// Expertise section
function Expertise({
  headTitle = "Our Expertise",
  headDesc = "We specialize in key sectors, delivering tailored digital solutions that drive growth, efficiency, and innovation."
}) {
  const items = [{
    icon: Icon.heart,
    title: "Healthcare",
    desc: "HIPAA-compliant platforms that connect clinicians, patients, and data.",
    bullets: ["EHR interoperability", "Clinical decision support", "Patient engagement"]
  }, {
    icon: Icon.briefcase,
    title: "Finance",
    desc: "Real-time dashboards, ERP integration, and automation that scales.",
    bullets: ["Real-time dashboards", "ERP integration", "Accounting automation"]
  }, {
    icon: Icon.energy,
    title: "Energy & Utilities",
    desc: "IoT-driven monitoring and predictive analytics for critical infrastructure.",
    bullets: ["IoT integration", "Predictive analytics", "Real-time monitoring"]
  }, {
    icon: Icon.shield,
    title: "Defence & Security",
    desc: "Secure systems integration and situational-awareness platforms.",
    bullets: ["Situational awareness", "Systems integration", "Predictive analytics"]
  }, {
    icon: Icon.users,
    title: "HR",
    desc: "Recruitment, onboarding, payroll and workforce analytics, unified.",
    bullets: ["Recruitment & onboarding", "Performance & payroll", "Workforce analytics"]
  }, {
    icon: Icon.chart,
    title: "Operations",
    desc: "Workflow automation and dashboards across the operational stack.",
    bullets: ["Workflow automation", "Operations dashboards", "Predictive analytics"]
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Expertise"), /*#__PURE__*/React.createElement("h2", null, headTitle), /*#__PURE__*/React.createElement("p", null, headDesc)), /*#__PURE__*/React.createElement("div", {
    className: "exp-grid"
  }, items.map((e, i) => {
    const I = e.icon;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "exp-card reveal",
      style: {
        transitionDelay: i % 3 * 80 + "ms"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "icon-tile"
    }, /*#__PURE__*/React.createElement(I, null)), /*#__PURE__*/React.createElement("h3", null, e.title), /*#__PURE__*/React.createElement("p", null, e.desc), /*#__PURE__*/React.createElement("ul", {
      className: "exp-list"
    }, e.bullets.map((b, j) => /*#__PURE__*/React.createElement("li", {
      key: j
    }, /*#__PURE__*/React.createElement(Icon.checkCircle, null), " ", b))), /*#__PURE__*/React.createElement("a", {
      href: "/expertise",
      className: "btn-link"
    }, "Learn more ", /*#__PURE__*/React.createElement(Icon.arrow, null)));
  }))));
}

// Services section
function Services() {
  const services = [{
    icon: Icon.code,
    slug: "ai-product-engineering",
    title: "AI-Native Product Engineering",
    desc: "Discovery, UX design, and full-stack engineering in one team, AI-first web and mobile products built to compound."
  }, {
    icon: Icon.globe,
    slug: "system-integrations",
    title: "System Integrations",
    desc: "Connect your stack, ERPs, CRMs, data warehouses, and legacy systems, into a single, reliable data fabric."
  }, {
    icon: Icon.cpu,
    slug: "ai-automation",
    title: "AI & Process Automation",
    desc: "LLM integrations, custom copilots, and workflow automation that eliminates manual work and compounds over time."
  }, {
    icon: Icon.cpu,
    slug: "llm-agent-development",
    title: "LLM & Agent Development",
    desc: "Custom LLM integrations and multi-step agent pipelines built for production, eval-gated every release, not just demos."
  }, {
    icon: Icon.cloud,
    slug: "cloud-agentic-infra",
    title: "Cloud & Agentic Infrastructure",
    desc: "Cloud-native foundations and agentic pipeline orchestration, so your AI products run reliably, scale automatically, and cost what they should."
  }, {
    icon: Icon.users,
    slug: "ai-outstaffing",
    title: "AI Engineering Outstaffing",
    desc: "Senior AI engineers embedded in your team, matched in 72 hours, monthly rolling contracts, no long-term lock-in."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Our services"), /*#__PURE__*/React.createElement("h2", null, "End-to-end product engineering"), /*#__PURE__*/React.createElement("p", null, "Comprehensive digital services to take your product from concept to launch, and beyond.")), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      maxWidth: 880,
      margin: "0 auto"
    }
  }, services.map((s, i) => {
    const I = s.icon;
    return /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "/service/" + s.slug,
      className: "svc-card"
    }, /*#__PURE__*/React.createElement("span", {
      className: "icon-tile"
    }, /*#__PURE__*/React.createElement(I, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, s.title), /*#__PURE__*/React.createElement("p", null, s.desc)), /*#__PURE__*/React.createElement(Icon.arrow, {
      style: {
        width: 20,
        height: 20,
        color: "var(--slate-400)"
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--cyan"
  }, "Discuss your project ", /*#__PURE__*/React.createElement(Icon.arrow, null)))));
}

// Testimonials, verified Clutch reviews, 2x2 grid with client photos
function Testimonials() {
  // All quotes verified on clutch.co/profile/7code
  const items = [{
    quote: "The self-serve MVP is live and in use. 7Code has excellent communication and project management skills. The team is quick to respond to the client's needs. The client is pleased with the outcome and the team's technical leadership.",
    name: "Emily Kucharski",
    role: "CEO & Co-Founder",
    company: "WholeSum",
    photoUrl: "/project/uploads/emily%20.jpeg"
  }, {
    quote: "7Code's work resulted in a functional MVP, and the client's internal testing yielded positive results. The team followed a structured sprint process, held regular stand-ups, and communicated consistently during the project. 7Code was responsive, proactive, flexible, transparent, and collaborative.",
    name: "Evyn White",
    role: "Co-Founder",
    company: "Hera Health Tech",
    photoUrl: "/project/uploads/evyn-hera.jpeg"
  }, {
    quote: "The client was happy with 7Code's work, daily status reports, and on-time delivery of milestones. Their project management was well-organized, and they used virtual meetings for communication. 7Code's professionalism, flexibility, and commitment also contributed to the project's success.",
    name: "Marcel Ionescu",
    role: "Chief Technology Officer",
    photoUrl: "/project/uploads/marcel%20ionescu%20.jpeg"
  }, {
    quote: "7Code has steadily progressed through the client's development backlog. Their team demonstrates proactiveness, timely delivery, and proactive engagement. They also ensure strong communication through email, messaging apps, and virtual meetings.",
    name: "Paul Egan",
    role: "CTO",
    company: "Founders Factory",
    photoUrl: "/project/uploads/paul%20egan.jpeg"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Testimonials"), /*#__PURE__*/React.createElement("h2", null, "What clients say after the launch"), /*#__PURE__*/React.createElement("p", null, "Verified, named reviews from the founders and CTOs we work with.")), /*#__PURE__*/React.createElement("div", {
    className: "testi-grid"
  }, items.map((t, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    className: "testi-card reveal",
    style: {
      transitionDelay: i % 2 * 60 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "testi-quote-mark",
    "aria-hidden": "true"
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    className: "testi-quote"
  }, t.quote), /*#__PURE__*/React.createElement("div", {
    className: "testi-author"
  }, /*#__PURE__*/React.createElement("img", {
    src: t.photoUrl,
    alt: t.name,
    className: "testi-photo",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "testi-name"
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "testi-role"
  }, t.role, t.company ? ", " + t.company : ""))))))));
}

// CTA strip
function CTAStrip() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-strip reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-strip-content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag tag--ink"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag-dot"
  }), " Available for new partnerships"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16
    }
  }, "Ready to build your next product?"), /*#__PURE__*/React.createElement("p", null, "Tell us about your project. We'll respond within one business day with next steps.")), /*#__PURE__*/React.createElement("div", {
    className: "cta-strip-actions"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--cyan btn--lg"
  }, "Book a discovery call ", /*#__PURE__*/React.createElement(Icon.arrow, null))))));
}
window.TrustedBy = TrustedBy;
window.CaseStudies = CaseStudies;
window.WhyChoose = WhyChoose;
window.VerifiedAccredited = VerifiedAccredited;
window.Expertise = Expertise;
window.Services = Services;
window.Testimonials = Testimonials;
window.CTAStrip = CTAStrip;
window.CSCover = CSCover;/* global React, Icon, TrustedBy, CaseStudies, WhyChoose, VerifiedAccredited, Expertise, Services, Testimonials, CTAStrip, HeroPatternMockup, HeroTerminal, HeroBoldSplit, CSCover */

const {
  useState: useStateP,
  useEffect: useEffectP
} = React;
const SITE_ROOT = "https://www.7code.tech";
function useSeoMeta(title, desc, ldJson) {
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
    let s;
    if (ldJson) {
      s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-page-ld", "1");
      s.text = JSON.stringify(ldJson);
      document.head.appendChild(s);
    }
    return () => {
      document.title = prevTitle;
      if (descEl && prevDesc !== null) descEl.setAttribute("content", prevDesc);
      if (s) s.remove();
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
    q: "What does 7Code actually build?",
    a: "We design, build, and operate AI-native software products end-to-end. That includes LLM-powered web and mobile apps, RAG copilots grounded in your data, multi-step agent pipelines, system integrations (ERP, CRM, SaaS), and the cloud infrastructure to run them reliably in production. We've shipped across healthcare, fintech, defence, energy, and enterprise SaaS since 2019."
  }, {
    q: "How long does it take to ship an AI product?",
    a: "Six weeks to a first production deploy is our standard. An AI MVP with a scoped LLM capability, an evaluation harness, and production cloud infrastructure goes live in six weeks. Broader products — multi-agent systems, regulated-industry platforms, full-stack SaaS — typically run 12–24 weeks. We ship deployable software every two weeks, not at the end of a multi-month programme."
  }, {
    q: "Where are you based and who do you work with?",
    a: "We're based in Cluj-Napoca, Romania — one of Europe's strongest engineering hubs. Our clients are primarily UK, EU, and UAE companies: early-stage founders raising their first round, product teams at Series A/B scale-ups, and enterprise engineering leaders integrating AI into existing systems. We work in English, overlap comfortably with UK and EU timezones, and visit on-site when it matters."
  }, {
    q: "How do you price AI engineering projects?",
    a: "AI MVPs from £25k / €30k for a six-week fixed scope. Mid-scale products run £60k–£180k over 12–20 weeks. Ongoing sprint retainers and outstaffing are monthly rolling, typically £6k–£12k per engineer per month depending on seniority. We're transparent on pricing in the first call — no hidden change-order culture."
  }, {
    q: "What makes you different from a traditional software agency?",
    a: "Three things: (1) AI is not a feature we add at the end — we design LLMs, retrieval, and agents into the product architecture from week one. (2) We build evaluation harnesses before writing product code, so quality is measured, not assumed. (3) Every engineer is senior, minimum five years of production experience, and you have direct access to the people writing the code."
  }, {
    q: "Can you augment our existing engineering team?",
    a: "Yes. Our outstaffing service embeds senior AI engineers directly into your team — joining your Slack, your standups, and your sprint cadence. They report into your engineering management, not ours. First matched profiles in 72 hours from a brief. Monthly rolling contract, scale up or down with 30 days' notice."
  }];
  useEffectP(() => {
    const faqLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": homeFaqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.setAttribute("data-page-ld", "home-faq");
    s.text = JSON.stringify(faqLd);
    document.head.appendChild(s);
    return () => s.remove();
  }, []);
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
  }, "Our process"), /*#__PURE__*/React.createElement("h1", null, "How we turn ideas into shipped products"), /*#__PURE__*/React.createElement("p", null, "A repeatable five-stage process that balances speed with quality. Built around outcomes, not deliverables."))), /*#__PURE__*/React.createElement("section", {
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
    const ld = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "7Code",
      "url": "https://www.7code.tech/",
      "logo": "https://www.7code.tech/project/logo.svg",
      "description": "AI-first software engineering agency based in Cluj-Napoca, Romania. We design, build, and operate AI-native products end-to-end.",
      "foundingLocation": {
        "@type": "Place",
        "name": "Cluj-Napoca, Romania"
      },
      "areaServed": ["Romania", "Europe", "United Kingdom", "United Arab Emirates", "Worldwide"],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cluj-Napoca",
        "addressCountry": "RO"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "office@7code.ro",
        "contactType": "sales"
      },
      "sameAs": ["https://www.linkedin.com/company/7-code/", "https://github.com/7code", "https://clutch.co/profile/7code"]
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = "about-ld";
    s.text = JSON.stringify(ld);
    document.head.appendChild(s);
    return () => {
      document.title = prev;
      if (descEl && prevDesc !== null) descEl.setAttribute("content", prevDesc);
      s.remove();
    };
  }, []);
  const stats = [{
    v: "2019",
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
    role: "CEO",
    initial: "N",
    photo: "/project/uploads/authors/nicu-mardari.jpg"
  }, {
    name: "Alessandro Merola",
    role: "CTO",
    initial: "A",
    photo: "/project/uploads/authors/alessandro-merola.jpg"
  }, {
    name: "Daniela Cazac",
    role: "CMO",
    initial: "D",
    photo: "/project/uploads/authors/daniela-cazac.jpg"
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
  }, "About 7Code"), /*#__PURE__*/React.createElement("h1", null, "The AI engineering partner that actually ships"), /*#__PURE__*/React.createElement("p", null, "7Code is an AI-first software engineering agency based in Cluj-Napoca, Romania. Since 2019, we've designed, built, and operated AI-native products, LLM integrations, and cloud infrastructure for founders and product teams across Europe, the UK, and the Middle East, acting as the senior engineering team they needed but didn't want to hire full-time."))), /*#__PURE__*/React.createElement("section", {
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
  }, "Cluj-Napoca gives us a structural advantage: a deep pool of senior engineering talent, a lower cost base than Western Europe, and a timezone that overlaps comfortably with the UK, EU, and even UAE teams. We're Romanian-built and globally delivered.")), /*#__PURE__*/React.createElement("div", {
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
  }, t.role)))))), /*#__PURE__*/React.createElement(CTAStrip, null));
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
function ContactPage() {
  useSeoMeta("Contact 7Code, Start a Project | Cluj-Napoca, Romania", "Get in touch with 7Code, an AI-native software engineering agency based in Cluj-Napoca, Romania. Tell us about your project and we'll respond within one business day.", {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact 7Code",
    "url": SITE_ROOT + "/contact",
    "description": "Contact 7Code to start a software engineering or AI project.",
    "mainEntity": {
      "@type": "Organization",
      "name": "7Code",
      "email": "office@7code.ro",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cluj-Napoca",
        "addressCountry": "RO"
      }
    }
  });
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
    try {
      const res = await fetch("https://formspree.io/f/xdabgopp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(form)
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
  }, "Contact"), /*#__PURE__*/React.createElement("h1", null, "Let's build something together"), /*#__PURE__*/React.createElement("p", null, "Tell us a bit about your project, we'll get back to you within one business day with next steps."))), /*#__PURE__*/React.createElement("section", {
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
  useSeoMeta("AI MVP Development — Ship in 6 Weeks | 7code", "AI MVP development by 7Code. LLM-powered products designed, built, and shipped in six weeks. Evaluation harness, cloud infrastructure, and production launch included.", {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI MVP Development",
    "serviceType": "AI MVP Development",
    "description": "AI MVP development by 7Code. LLM-powered products designed, built, and shipped in six weeks.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "7Code",
      "url": SITE_ROOT
    },
    "areaServed": "Worldwide",
    "url": SITE_ROOT + "/ai-mvp-development"
  });
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
  }, "AI MVP Development"), /*#__PURE__*/React.createElement("h1", null, "From idea to production AI", /*#__PURE__*/React.createElement("br", null), "in six weeks."), /*#__PURE__*/React.createElement("p", null, "We design, build, and ship LLM-powered products end-to-end, with an evaluation harness, cloud infrastructure, and a clean production launch, all inside a six-week fixed scope."), /*#__PURE__*/React.createElement("div", {
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
  useSeoMeta("AI Development Agency for UK Companies | 7code Romania", "AI development agency serving UK companies from Cluj-Napoca, Romania. Same timezone overlap, senior engineers, LLM products, and nearshore rates. From £25k.", {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "7Code — AI Development Agency for UK Companies",
    "description": "AI development agency serving UK companies from Cluj-Napoca, Romania.",
    "url": SITE_ROOT + "/ai-development-agency-uk",
    "areaServed": ["United Kingdom", "Europe"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cluj-Napoca",
      "addressCountry": "RO"
    },
    "priceRange": "££"
  });
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
  }, "AI Development Agency UK"), /*#__PURE__*/React.createElement("h1", null, "The AI engineering partner", /*#__PURE__*/React.createElement("br", null), "UK companies actually use."), /*#__PURE__*/React.createElement("p", null, "Senior AI engineers from Cluj-Napoca, Romania. Seven hours of daily UK timezone overlap. Nearshore rates. GDPR-native delivery. LLM products shipped in six weeks."), /*#__PURE__*/React.createElement("div", {
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
  useSeoMeta("AI Agency vs AI Freelancer: Which Is Right for You? | 7code", "Choosing between an AI agency and a freelancer for your LLM project? Compare delivery speed, accountability, quality, and total cost — then decide.", {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "AI Agency vs AI Freelancer: Which Is Right for You?",
    "description": "A structured comparison of AI agencies and freelancers across delivery, quality, accountability, and total cost.",
    "url": SITE_ROOT + "/compare/agency-vs-freelancer",
    "publisher": {
      "@type": "Organization",
      "name": "7Code",
      "url": SITE_ROOT
    }
  });
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
  }, "AI Agency vs Freelancer"), /*#__PURE__*/React.createElement("h1", null, "Agency or freelancer for", /*#__PURE__*/React.createElement("br", null), "your AI project?"), /*#__PURE__*/React.createElement("p", null, "The right answer depends on what you're building, your timeline, and your risk tolerance. Here's how the two options compare, honestly."))), /*#__PURE__*/React.createElement("section", {
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
    q: "What does 7code do?",
    a: "7code is an AI-native nearshore software engineering partner based in Cluj-Napoca, Romania. We build custom software, LLM integrations, agentic workflows, and system integrations for startups and SMEs in the UK, EU, and UAE. Our team is senior-only (70%+ senior engineers) and we operate an AI-first delivery model â every project is assessed for automation and AI opportunities from day one."
  }, {
    q: "What is nearshore software development?",
    a: "Nearshore software development means working with an engineering team in a nearby country with timezone overlap, shared working culture, and EU legal alignment. For UK and EU companies, Romania is a leading nearshore destination â 1â2 hour timezone difference with the UK, GDPR-native environment, and a deep pool of senior engineering talent. 7code operates from Cluj-Napoca, Romania, serving clients across the UK, Europe, and UAE."
  }, {
    q: "What AI services does 7code offer?",
    a: "7code offers five core AI service lines: LLM integration (embedding GPT-4o, Claude, Gemini into existing products); agentic workflow automation (multi-step AI agents for complex business processes); RAG systems (connecting AI to proprietary data); AI copilots (custom AI assistants for internal or customer-facing use); and AI process automation (replacing manual workflows with intelligent pipelines). We also offer an Operational Quick Scan to identify and prioritise automation opportunities."
  }, {
    q: "How do you integrate LLMs into an existing product?",
    a: "7code follows a five-step LLM integration process: (1) Use-case mapping â identifying whether your need is extraction, generation, classification, or agentic reasoning; (2) Context architecture â designing RAG pipelines, conversation history, or summarisation chains; (3) Model selection â matching capability to latency and cost; (4) Evaluation framework â golden datasets and regression tests before shipping; (5) Observability â cost-per-query tracking from sprint one. Most production LLM features take 6â10 weeks from spec to deployment."
  }, {
    q: "What is the difference between staff augmentation and a dedicated team?",
    a: "In staff augmentation, 7code provides engineers who join your existing team under your management. You direct the work. A dedicated team means 7code manages delivery end-to-end â engineers, tech lead, and delivery governance included. Staff augmentation is best for teams with internal technical leadership that need extra capacity. A dedicated team is best when you don't have internal engineering leadership or want to move faster than hiring allows."
  }, {
    q: "How quickly can 7code allocate a team?",
    a: "7code can allocate a team in 2â4 weeks from signed contract. This is significantly faster than hiring, which typically takes 3â6 months for senior roles. We maintain a bench of available engineers and pre-vet candidates continuously so we can move fast without compromising on quality."
  }, {
    q: "What are 7code's engineering rates?",
    a: "7code's rates: Mid-level engineers â¬30â35/hour; Senior engineers â¬40â50/hour; Architect-level engineers â¬60â80/hour. These are 40â60% below London market rates with equivalent or higher seniority. All rates are transparent with no hidden markups."
  }, {
    q: "Is 7code GDPR compliant?",
    a: "Yes. 7code operates under Romanian and EU law, meaning GDPR compliance is built-in â not an add-on. Our engineers understand EU data processing requirements and can correctly configure data processing agreements with model providers (OpenAI, Anthropic, Google). For UK clients post-Brexit, we structure arrangements to comply with UK GDPR equivalents. This is a key nearshore advantage: EU-jurisdiction teams are GDPR-native by default."
  }, {
    q: "What industries does 7code work in?",
    a: "7code has delivered production software across: FinTech (lending platforms, treasury dashboards, payment integrations), HealthTech (EHR systems, AI-powered onboarding, clinical decision tools), Logistics (workflow automation, fleet management), Operations (ERP/CRM integrations, process automation), Defence & Security (situational awareness platforms), Energy & Utilities (IoT monitoring, predictive analytics), and SaaS products across multiple verticals."
  }, {
    q: "What is an agentic workflow?",
    a: "An agentic workflow is an AI system that uses multi-step reasoning, tool use, and decision loops to complete complex tasks autonomously. Unlike a simple LLM call, an agent can search the web, read files, call APIs, write code, and make sequential decisions. In production, 7code implements agentic workflows using an orchestrator-worker architecture: a reasoning model coordinates specialised worker agents. Common use cases: document processing pipelines, automated onboarding, compliance checking, multi-source data reconciliation."
  }, {
    q: "What is RAG and when should I use it?",
    a: "RAG (Retrieval-Augmented Generation) retrieves relevant documents from a knowledge base and injects them into the LLM's context at query time. Use RAG when your AI feature needs to answer questions from your proprietary data â support documentation, product manuals, legal contracts, internal wikis. Without RAG, the model answers from its training data only and will hallucinate company-specific information. 7code has built production RAG systems for document Q&A, compliance tools, and customer support copilots."
  }, {
    q: "How does 7code ensure quality?",
    a: "Quality is enforced through: senior-only hiring (70% of engineers are senior-level); multi-stage technical screening including case studies; delivery governance with weekly sprint demos and monthly steering committees; and AI-specific quality gates â golden datasets, regression tests on every model version change, and human-in-the-loop checkpoints for high-stakes outputs. We track velocity, predictability, bug escape rate, and team utilisation as standard KPIs."
  }, {
    q: "What engagement models does 7code offer?",
    a: "Three primary models: Staff Augmentation (client-managed, 7code provides engineers); Dedicated Teams (7code-managed delivery with full governance); End-to-End Product Development (7code owns the full lifecycle). We also offer four productized packages: Operational Quick Scan (2â3 weeks), AI-Ready Ops Blueprint (4â6 weeks), Automation Pilot (6â10 weeks), and Department Automation Sprint (10â16 weeks)."
  }, {
    q: "Why choose a Romanian engineering team?",
    a: "Romania is a tier-1 European engineering hub. Cluj-Napoca hosts R&D centres for major EU tech companies and produces thousands of IT graduates annually. Key advantages: 1â2 hour timezone overlap with UK; 40â60% below London rates (15â25% below Poland); EU legal framework (GDPR-native); strong technical education and high English proficiency. 7code adds a senior-only hiring model on top of this baseline."
  }, {
    q: "How does 7code handle AI projects that change scope mid-build?",
    a: "AI projects are inherently non-linear â architectures that look correct in the spec often need 2â3 pivots before they're production-ready. 7code manages this through transparent communication on architecture decisions as they emerge; time-and-materials contracts for AI work; weekly steering committees where scope changes are assessed and repriced; and a culture of strategic opinions, not just execution."
  }, {
    q: "Does 7code work with startups or only large companies?",
    a: "7code's sweet spot is Series AâB startups and SMEs with â¬5Mââ¬50M revenue that need to move fast and are serious about AI. We also work with larger enterprises â we've built platforms for a Monaco-based yacht engineering firm and a UAE fleet management company. We don't take pre-revenue projects or pure MVPs under â¬25k â our senior-only model has a minimum engagement threshold."
  }, {
    q: "What is the Operational Quick Scan?",
    a: "The Operational Quick Scan is 7code's entry-point productized service. Over 2â3 weeks, we audit your processes, identify manual bottlenecks, map automation opportunities, and produce an ROI estimate per initiative. Output: a prioritised automation roadmap with effort, timeline, and expected return for each item. Designed for companies evaluating AI that don't know where to start. Cost: typically â¬5,000ââ¬10,000 depending on scope."
  }, {
    q: "How does 7code handle AI observability?",
    a: "7code instruments every agent action: inputs, tool calls, intermediate reasoning, outputs, latency, and cost per query. We use structured logging and build replay systems so failures can be debugged against real inputs. For LLM observability tooling we work with Langfuse, Helicone, and Braintrust. Cost-per-query is tracked as a first-class metric from sprint one."
  }, {
    q: "What makes 7code different from a standard software agency?",
    a: "Three things: (1) AI-first by default â every project is assessed for AI opportunities from discovery, not as an afterthought; (2) Senior-only engineers â no juniors, no padding headcount. Every engineer can make architecture decisions; (3) Business outcome focus â we track ROI, not just velocity. Time saved, error rate reduced, revenue impact. We also provide business process consulting alongside technical delivery."
  }, {
    q: "How do I start a project with 7code?",
    a: "Contact us at office@7code.ro or book a discovery call at 7code.tech/contact. We run a 60-minute discovery session to understand your needs and constraints, then propose an engagement model and scope. Once agreed, team allocation begins within 2â4 weeks. For AI projects, we typically recommend starting with an Operational Quick Scan before committing to a build â it de-risks the investment and clarifies ROI."
  }];
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "FAQ â 7code AI-Native Software Engineering",
    "url": SITE_ROOT + "/faq",
    "mainEntity": faqs.map(({
      q,
      a
    }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": a
      }
    }))
  };
  useSeoMeta("FAQ â AI Engineering, Nearshore Dev & LLM Integration | 7code", "Answers to common questions about 7code's AI engineering services, nearshore development from Romania, LLM integration, pricing, GDPR compliance, and how to start a project.", ldJson);
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
    })))), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 24,
        color: "var(--slate-700)",
        fontSize: 15,
        lineHeight: 1.7
      }
    }, item.a));
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
window.FAQPage = FAQPage;/* global React, Icon, CSCover, CTAStrip */

const {
  useState: useStateCS
} = React;
const CS_ITEMS = [{
  slug: "wholesum",
  kind: "cyan",
  num: "01",
  year: "2025",
  client: "WholeSum",
  title: "Self-serve AI analytics platform for unstructured text",
  meta: ["Data / AI", "16 weeks"],
  result: "Launched on time, raised funding",
  metric: {
    v: "On time",
    l: "launch & funding"
  },
  tag: "Featured",
  excerpt: "Upload surveys, reviews, and interviews and get structured, AI-powered insights, built end-to-end on Next.js, Nest.js, and AWS."
}, {
  slug: "daily8",
  kind: "cyan",
  num: "02",
  year: "2022",
  client: "Daily8",
  title: "AI-powered news aggregator for the MENA region",
  meta: ["Mobile / Media", "6 months"],
  result: "Shipped iOS + Android in 6 months",
  metric: {
    v: "iOS + Android",
    l: "stores ready"
  },
  excerpt: "News, podcasts, and videos tailored by interest and country, moderated, summarised, and surfaced by AI on React Native + AWS Lambda + OpenAI."
}, {
  slug: "revote",
  kind: "defence",
  num: "03",
  year: "2023",
  client: "Eurel International",
  title: "Remote electronic voting platform for the European Parliament",
  meta: ["E-Government", "8 months"],
  result: "Released May 2023 to the EU Parliament",
  metric: {
    v: "EU Parliament",
    l: "live deployment"
  },
  excerpt: "Modern remote voting for MEPs across the EU, five modules, EP-grade infrastructure, eight months from discovery to release. Partner: Eurel International."
}, {
  slug: "g42-fleet",
  kind: "energy",
  num: "04",
  year: "2022",
  client: "Group 42 (G42)",
  title: "Real-time fleet tracking platform for EXPO 2020 Dubai",
  meta: ["IoT / Smart Buildings", "2 years"],
  result: "Deployed for EXPO 2020 Dubai",
  metric: {
    v: "EXPO 2020",
    l: "deployed at scale"
  },
  excerpt: "Custom TCP ingestion, geofence rules, real-time map and trip playback, built for the world's largest expo on React Native + Node.js."
}, {
  slug: "cloud-of-legacy",
  kind: "cyan",
  num: "05",
  year: "2024",
  client: "Cloud of Legacy",
  title: "Cloud-based digital-heritage platform with secure inheritance access",
  meta: ["Consumer SaaS", "8 months"],
  result: "MVP launched",
  metric: {
    v: "MVP",
    l: "launched in 8 months"
  },
  excerpt: "Subscription cloud where users designate two heirs who can access documents, photos, and credit cards after death, Next.js, React, Keycloak, 2FA."
}, {
  slug: "lidl-road-safety",
  kind: "cyan",
  num: "06",
  year: "2022",
  client: "Lidl Romania",
  title: "Children's road-safety gamification web app for Lidl Romania",
  meta: ["Education / Retail CSR", "6 months"],
  result: "8th edition running with Romanian Police",
  metric: {
    v: "8 editions",
    l: "annual programme"
  },
  excerpt: "Public + private web app for kids and parents, episodes, levels, quizzes, gamification, built with Lidl and the Romanian Police on React + Nest.js."
}, {
  slug: "hera",
  kind: "health",
  num: "08",
  year: "2025",
  client: "Hera Health Tech",
  title: "AI-powered patient-support app for fertility clinics",
  meta: ["Healthcare / FemTech", "3 months MVP"],
  result: "MVP shipped in 3 months, ongoing engagement",
  metric: {
    v: "RAG",
    l: "verified clinical AI"
  },
  excerpt: "React Native + Serverless on AWS with a LlamaIndex RAG layer over verified clinical content, and a Strapi-powered Admin + Clinic CMS, HIPAA + GDPR ready from day one."
}, {
  slug: "melsonic",
  kind: "cyan",
  num: "09",
  year: "2025",
  client: "Melsonic",
  title: "AI-powered guitar-learning web app with real-time feedback",
  meta: ["Music / EdTech", "5 months MVP"],
  result: "MVP shipped in 5 months",
  metric: {
    v: "Real-time",
    l: "AI feedback"
  },
  excerpt: "Next.js + Nest.js + pixi.js wraps Melsonic's AI engine, record, score against the original, and surface notes correct, missed, or wrong."
}, {
  slug: "drum-bun",
  kind: "ops",
  num: "10",
  year: "2024",
  client: "Explorom (Drum Bun)",
  title: "Romanian car-services mobile app, RCA, ITP, vignette in one tap",
  meta: ["InsurTech / Automotive", "Ongoing"],
  result: "Live on App Store and Play Store",
  metric: {
    v: "3-in-1",
    l: "compliance app"
  },
  excerpt: "React Native + Node.js with an OCR document pipeline and per-car expiry alerts, verify, purchase, and track every Romanian driver obligation."
}, {
  slug: "numerize",
  kind: "ops",
  num: "11",
  year: "2024",
  client: "Numerize",
  title: "Responsive electronic document management + e-signature platform",
  meta: ["DocTech / Enterprise", "Ongoing"],
  result: "Responsive overhaul live for 6,000+ accounts",
  metric: {
    v: "6,000+",
    l: "customer accounts"
  },
  excerpt: "React + Material-UI overhaul of a 17-year French GED platform, OCR-trained invoice pipeline, YouSign e-signatures, Stripe + 3D Secure billing."
}];
const CS_CATS = ["All", "Healthcare", "Finance", "Energy", "Operations", "Defence", "AI / SaaS", "Data / AI"];

// ──────────────────────────────────────────────────────────────────
// V1, Grid + filter (existing default)
// ──────────────────────────────────────────────────────────────────
function CaseStudiesGrid() {
  const [active, setActive] = useStateCS("All");
  const filtered = active === "All" ? CS_ITEMS : CS_ITEMS.filter(i => i.meta[0] === active);
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
  return /*#__PURE__*/React.createElement("section", {
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
  }, CS_CATS.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: "blog-cat" + (c === active ? " is-active" : ""),
    onClick: () => setActive(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    className: "cs-grid"
  }, filtered.map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: c.title,
    href: "/case-study/" + c.slug,
    className: "cs-card reveal",
    style: {
      transitionDelay: i % 3 * 80 + "ms"
    }
  }, /*#__PURE__*/React.createElement(CSCover, {
    kind: c.kind,
    label: c.meta[0],
    slug: c.slug
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
  }, "Read case study ", /*#__PURE__*/React.createElement(Icon.arrow, null))))))));
}

// ──────────────────────────────────────────────────────────────────
// V2, Editorial Index (large numbered list)
// ──────────────────────────────────────────────────────────────────
function CaseStudiesEditorial() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 1080
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-edit-list"
  }, CS_ITEMS.map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: c.title,
    href: "/case-study/" + c.slug,
    className: "cs-edit-row reveal",
    style: {
      transitionDelay: i * 50 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-edit-meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-edit-tag"
  }, c.meta[0])), /*#__PURE__*/React.createElement("div", {
    className: "cs-edit-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-edit-client"
  }, c.client), /*#__PURE__*/React.createElement("h3", {
    className: "cs-edit-title"
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "cs-edit-excerpt"
  }, c.excerpt)), /*#__PURE__*/React.createElement("div", {
    className: "cs-edit-metric"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-edit-metric-v"
  }, c.metric.v), /*#__PURE__*/React.createElement("div", {
    className: "cs-edit-metric-l"
  }, c.metric.l)), /*#__PURE__*/React.createElement("div", {
    className: "cs-edit-arrow"
  }, /*#__PURE__*/React.createElement(Icon.arrow, null)))))));
}

// ──────────────────────────────────────────────────────────────────
// V3, Featured story + tab switcher
// ──────────────────────────────────────────────────────────────────
function CaseStudiesFeatured() {
  const [i, setI] = useStateCS(0);
  const item = CS_ITEMS[i];
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-feat reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-feat-cover"
  }, /*#__PURE__*/React.createElement(CSCover, {
    kind: item.kind,
    label: item.meta[0],
    slug: item.slug
  })), /*#__PURE__*/React.createElement("div", {
    className: "cs-feat-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag tag--ink"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag-dot"
  }), " Case study"), /*#__PURE__*/React.createElement("div", {
    className: "cs-feat-client"
  }, item.client), /*#__PURE__*/React.createElement("h2", {
    className: "cs-feat-title"
  }, item.title), /*#__PURE__*/React.createElement("p", {
    className: "cs-feat-excerpt"
  }, item.excerpt), /*#__PURE__*/React.createElement("div", {
    className: "cs-feat-metrics"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cs-feat-metric-v"
  }, item.metric.v), /*#__PURE__*/React.createElement("div", {
    className: "cs-feat-metric-l"
  }, item.metric.l)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cs-feat-metric-v"
  }, item.meta[1]), /*#__PURE__*/React.createElement("div", {
    className: "cs-feat-metric-l"
  }, "delivery")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cs-feat-metric-v"
  }, item.meta[0]), /*#__PURE__*/React.createElement("div", {
    className: "cs-feat-metric-l"
  }, "industry"))), /*#__PURE__*/React.createElement("a", {
    href: "/case-study/" + item.slug,
    className: "btn btn--primary"
  }, "Read full case study ", /*#__PURE__*/React.createElement(Icon.arrow, null)))), /*#__PURE__*/React.createElement("div", {
    className: "cs-feat-tabs"
  }, CS_ITEMS.map((c, j) => /*#__PURE__*/React.createElement("button", {
    key: c.title,
    className: "cs-feat-tab" + (i === j ? " is-active" : ""),
    onClick: () => setI(j)
  }, /*#__PURE__*/React.createElement("span", {
    className: "cs-feat-tab-client"
  }, c.client), /*#__PURE__*/React.createElement("span", {
    className: "cs-feat-tab-meta"
  }, c.meta[0]))))));
}

// ──────────────────────────────────────────────────────────────────
// V4, Vertical timeline
// ──────────────────────────────────────────────────────────────────
function CaseStudiesTimeline() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 1040
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-tl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-tl-spine"
  }), CS_ITEMS.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    className: "cs-tl-row reveal " + (i % 2 === 0 ? "is-left" : "is-right"),
    style: {
      transitionDelay: i * 60 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-tl-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-tl-meta"
  }, /*#__PURE__*/React.createElement("span", null, c.meta[0])), /*#__PURE__*/React.createElement("div", {
    className: "cs-tl-client"
  }, c.client), /*#__PURE__*/React.createElement("h3", {
    className: "cs-tl-title"
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "cs-tl-excerpt"
  }, c.excerpt), /*#__PURE__*/React.createElement("div", {
    className: "cs-tl-result"
  }, /*#__PURE__*/React.createElement(Icon.zap, {
    style: {
      width: 16,
      height: 16
    }
  }), " ", c.result), /*#__PURE__*/React.createElement("a", {
    href: "/case-study/" + c.slug,
    className: "cs-link"
  }, "Read case study ", /*#__PURE__*/React.createElement(Icon.arrow, null))), /*#__PURE__*/React.createElement("div", {
    className: "cs-tl-node"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-tl-node-inner"
  })))))));
}

// ──────────────────────────────────────────────────────────────────
// V5, Showcase (Tallium-inspired large cards w/ glow + mockup)
// ──────────────────────────────────────────────────────────────────
function ShowcaseMockup({
  kind
}) {
  // Inline product mockup illustrations per kind. Browser/phone chrome
  // with abstract content blocks, keeps brand cyan accent throughout.
  if (kind === "health" || kind === "cyan") {
    // Mobile app mockup
    return /*#__PURE__*/React.createElement("div", {
      className: "sc-mock sc-mock--phone"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sc-phone"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sc-phone-notch"
    }), /*#__PURE__*/React.createElement("div", {
      className: "sc-phone-screen"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sc-app-bar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sc-app-avatar"
    }), /*#__PURE__*/React.createElement("div", {
      className: "sc-app-bars"
    }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null))), /*#__PURE__*/React.createElement("div", {
      className: "sc-app-card sc-app-card--accent"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sc-app-row sc-row--md"
    }), /*#__PURE__*/React.createElement("div", {
      className: "sc-app-row sc-row--sm"
    }), /*#__PURE__*/React.createElement("div", {
      className: "sc-app-cta"
    })), /*#__PURE__*/React.createElement("div", {
      className: "sc-app-list"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sc-app-item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sc-app-dot"
    }), /*#__PURE__*/React.createElement("div", {
      className: "sc-app-lines"
    }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null))), /*#__PURE__*/React.createElement("div", {
      className: "sc-app-item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sc-app-dot"
    }), /*#__PURE__*/React.createElement("div", {
      className: "sc-app-lines"
    }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null))), /*#__PURE__*/React.createElement("div", {
      className: "sc-app-item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sc-app-dot"
    }), /*#__PURE__*/React.createElement("div", {
      className: "sc-app-lines"
    }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null)))))));
  }
  // Browser dashboard mockup
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-mock sc-mock--browser"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-browser"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-browser-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sc-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sc-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sc-dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sc-browser-url"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sc-browser-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-browser-side"
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null)), /*#__PURE__*/React.createElement("div", {
    className: "sc-browser-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-stat-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-stat-v"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sc-stat-l"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sc-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-stat-v"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sc-stat-l"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sc-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-stat-v"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sc-stat-l"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sc-chart"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 280 80",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "sc-grad-" + kind,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "var(--cyan-500)",
    stopOpacity: "0.45"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--cyan-500)",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M0,60 L40,45 L80,52 L120,30 L160,38 L200,18 L240,28 L280,12 L280,80 L0,80 Z",
    fill: "url(#sc-grad-" + kind + ")"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,60 L40,45 L80,52 L120,30 L160,38 L200,18 L240,28 L280,12",
    fill: "none",
    stroke: "var(--cyan-500)",
    strokeWidth: "2"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sc-table"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-table-row"
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null)), /*#__PURE__*/React.createElement("div", {
    className: "sc-table-row"
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null)), /*#__PURE__*/React.createElement("div", {
    className: "sc-table-row"
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null)))))));
}
function CaseStudiesShowcase() {
  const [active, setActive] = useStateCS("All");
  const filtered = active === "All" ? CS_ITEMS : CS_ITEMS.filter(i => i.meta[0] === active);
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-categories",
    style: {
      marginBottom: 48
    }
  }, CS_CATS.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: "blog-cat" + (c === active ? " is-active" : ""),
    onClick: () => setActive(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    className: "sc-grid"
  }, filtered.map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: c.title,
    href: "/case-study/" + c.slug,
    className: "sc-card reveal",
    style: {
      transitionDelay: i % 2 * 100 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sc-card-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-card-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-card-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sc-card-name"
  }, c.client), /*#__PURE__*/React.createElement("span", {
    className: "sc-card-arrow"
  }, /*#__PURE__*/React.createElement(Icon.arrow, null))), /*#__PURE__*/React.createElement("p", {
    className: "sc-card-desc"
  }, c.excerpt), /*#__PURE__*/React.createElement("div", {
    className: "sc-card-tags"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sc-tag"
  }, c.meta[0]), /*#__PURE__*/React.createElement("span", {
    className: "sc-tag"
  }, c.meta[1]), /*#__PURE__*/React.createElement("span", {
    className: "sc-tag sc-tag--accent"
  }, c.metric.v, " ", c.metric.l))), /*#__PURE__*/React.createElement("div", {
    className: "sc-card-art"
  }, /*#__PURE__*/React.createElement(ShowcaseMockup, {
    kind: c.kind
  })))))), filtered.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/blog",
    className: "btn btn--ghost"
  }, "More case studies ", /*#__PURE__*/React.createElement(Icon.arrow, null)))));
}

// ──────────────────────────────────────────────────────────────────
// V6, Magazine (asymmetric: one hero + smaller cards)
// ──────────────────────────────────────────────────────────────────
function CaseStudiesMagazine() {
  const [hero, ...rest] = CS_ITEMS;
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mag-grid"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/case-study/" + hero.slug,
    className: "mag-hero reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mag-hero-cover"
  }, /*#__PURE__*/React.createElement(CSCover, {
    kind: hero.kind,
    label: hero.meta[0],
    slug: hero.slug
  })), /*#__PURE__*/React.createElement("div", {
    className: "mag-hero-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mag-kicker"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mag-dot"
  }), " Featured story"), /*#__PURE__*/React.createElement("h2", {
    className: "mag-hero-title"
  }, hero.title), /*#__PURE__*/React.createElement("p", {
    className: "mag-hero-excerpt"
  }, hero.excerpt), /*#__PURE__*/React.createElement("div", {
    className: "mag-hero-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mag-hero-metric"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mag-hero-metric-v"
  }, hero.metric.v), /*#__PURE__*/React.createElement("div", {
    className: "mag-hero-metric-l"
  }, hero.metric.l)), /*#__PURE__*/React.createElement("span", {
    className: "mag-hero-link"
  }, "Read the story ", /*#__PURE__*/React.createElement(Icon.arrow, null))))), /*#__PURE__*/React.createElement("div", {
    className: "mag-side"
  }, rest.slice(0, 3).map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: c.title,
    href: "/case-study/" + c.slug,
    className: "mag-mini reveal",
    style: {
      transitionDelay: i * 60 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mag-mini-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mag-mini-meta"
  }, c.meta[0]), /*#__PURE__*/React.createElement("div", {
    className: "mag-mini-title"
  }, c.title), /*#__PURE__*/React.createElement("div", {
    className: "mag-mini-metric"
  }, c.metric.v, " ", /*#__PURE__*/React.createElement("span", null, c.metric.l))), /*#__PURE__*/React.createElement(Icon.arrow, null))))), /*#__PURE__*/React.createElement("div", {
    className: "mag-row"
  }, rest.slice(3).map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: c.title,
    href: "/case-study/" + c.slug,
    className: "mag-card reveal",
    style: {
      transitionDelay: i * 60 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mag-card-cover"
  }, /*#__PURE__*/React.createElement(CSCover, {
    kind: c.kind,
    label: c.meta[0],
    slug: c.slug
  })), /*#__PURE__*/React.createElement("div", {
    className: "mag-card-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mag-mini-meta"
  }, c.meta[0]), /*#__PURE__*/React.createElement("h3", null, c.title), /*#__PURE__*/React.createElement("div", {
    className: "mag-mini-metric"
  }, c.metric.v, " ", /*#__PURE__*/React.createElement("span", null, c.metric.l))))))));
}

// ──────────────────────────────────────────────────────────────────
// V7, Stack (full-width alternating stories)
// ──────────────────────────────────────────────────────────────────
function CaseStudiesStack() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 1200
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stk-list"
  }, CS_ITEMS.map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: c.title,
    href: "/case-study/" + c.slug,
    className: "stk-row reveal " + (i % 2 === 0 ? "is-even" : "is-odd"),
    style: {
      transitionDelay: i * 60 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stk-cover"
  }, /*#__PURE__*/React.createElement(CSCover, {
    kind: c.kind,
    label: c.meta[0],
    slug: c.slug
  })), /*#__PURE__*/React.createElement("div", {
    className: "stk-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stk-meta"
  }, /*#__PURE__*/React.createElement("span", null, c.meta[0]), /*#__PURE__*/React.createElement("span", {
    className: "stk-divider"
  }), /*#__PURE__*/React.createElement("span", null, c.meta[1])), /*#__PURE__*/React.createElement("div", {
    className: "stk-client"
  }, c.client), /*#__PURE__*/React.createElement("h2", {
    className: "stk-title"
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "stk-excerpt"
  }, c.excerpt), /*#__PURE__*/React.createElement("div", {
    className: "stk-result"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stk-result-v"
  }, c.metric.v), /*#__PURE__*/React.createElement("div", {
    className: "stk-result-l"
  }, c.metric.l)), /*#__PURE__*/React.createElement("span", {
    className: "stk-link"
  }, "Read case study ", /*#__PURE__*/React.createElement(Icon.arrow, null))))))));
}

// ──────────────────────────────────────────────────────────────────
// V8, Mosaic (bento grid, mixed sizes)
// ──────────────────────────────────────────────────────────────────
function CaseStudiesMosaic() {
  // Layout slots: each item gets a spec on the bento grid.
  // Grid is 4 cols × N rows. Specs are [colSpan, rowSpan, kind className].
  const layout = [{
    span: "mos--xl",
    variant: "image"
  },
  // big featured w/ cover
  {
    span: "mos--md",
    variant: "metric"
  },
  // metric panel
  {
    span: "mos--md",
    variant: "quote"
  },
  // text + quote
  {
    span: "mos--lg",
    variant: "image"
  },
  // wide image card
  {
    span: "mos--md",
    variant: "metric"
  },
  // metric
  {
    span: "mos--lg",
    variant: "image"
  } // wide image card
  ];
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 1240
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mos-grid"
  }, CS_ITEMS.map((c, i) => {
    const L = layout[i] || layout[0];
    return /*#__PURE__*/React.createElement("a", {
      key: c.title,
      href: "/case-study/" + c.slug,
      className: "mos-card reveal " + L.span + " mos--" + L.variant,
      style: {
        transitionDelay: i * 50 + "ms"
      }
    }, L.variant === "image" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "mos-cover"
    }, /*#__PURE__*/React.createElement(CSCover, {
      kind: c.kind,
      label: c.meta[0],
      slug: c.slug
    })), /*#__PURE__*/React.createElement("div", {
      className: "mos-overlay"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mos-meta"
    }, c.meta[0]), /*#__PURE__*/React.createElement("div", {
      className: "mos-title"
    }, c.title), /*#__PURE__*/React.createElement("div", {
      className: "mos-arrow"
    }, /*#__PURE__*/React.createElement(Icon.arrow, null)))), L.variant === "metric" && /*#__PURE__*/React.createElement("div", {
      className: "mos-metric-card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mos-metric-tag"
    }, c.meta[0]), /*#__PURE__*/React.createElement("div", {
      className: "mos-metric-v"
    }, c.metric.v), /*#__PURE__*/React.createElement("div", {
      className: "mos-metric-l"
    }, c.metric.l), /*#__PURE__*/React.createElement("div", {
      className: "mos-metric-foot"
    }, /*#__PURE__*/React.createElement("span", null, c.client), /*#__PURE__*/React.createElement(Icon.arrow, null))), L.variant === "quote" && /*#__PURE__*/React.createElement("div", {
      className: "mos-quote-card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mos-quote-mark"
    }, "\u201C"), /*#__PURE__*/React.createElement("p", {
      className: "mos-quote-text"
    }, c.excerpt), /*#__PURE__*/React.createElement("div", {
      className: "mos-quote-foot"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "mos-quote-client"
    }, c.client), /*#__PURE__*/React.createElement("div", {
      className: "mos-quote-meta"
    }, c.meta[0])), /*#__PURE__*/React.createElement(Icon.arrow, null))));
  }))));
}

// ──────────────────────────────────────────────────────────────────
// Page wrapper, switches body by variant prop
// ──────────────────────────────────────────────────────────────────
function CaseStudiesPage({
  variant = "grid"
}) {
  React.useEffect(() => {
    const prev = document.title;
    document.title = "Case Studies, AI & Software Engineering Projects | 7Code Romania";
    const d = document.querySelector('meta[name="description"]');
    const pd = d ? d.getAttribute("content") : null;
    if (d) d.setAttribute("content", "10+ case studies from 7Code's AI and software engineering practice: HealthTech, FinTech, IoT, GovTech, EdTech, and SaaS products built for clients across Europe, the UK, and the Middle East.");
    return () => {
      document.title = prev;
      if (d && pd !== null) d.setAttribute("content", pd);
    };
  }, []);
  const headlines = {
    grid: {
      eyebrow: "Case studies",
      h1: "Outcomes, not just deliverables",
      sub: "A selection of products we've shipped with our partners, across healthcare, finance, energy, defence and beyond."
    },
    editorial: {
      eyebrow: "Selected work · 2024–2026",
      h1: "Six stories, six outcomes.",
      sub: "An editorial index of the work we're proudest of, with the numbers attached."
    },
    featured: {
      eyebrow: "Featured case studies",
      h1: "Each one moved a metric.",
      sub: "Hover any project below to dig into how we built it and the results it produced."
    },
    timeline: {
      eyebrow: "A short history",
      h1: "How we've spent the last two years",
      sub: "From early-stage MVPs to large-scale platform launches, in roughly the order they shipped."
    },
    showcase: {
      eyebrow: "Recent case studies",
      h1: "Work we're proud to ship",
      sub: "Learn more about our clients, the types of projects we work with, our process, and the technologies we use to build software."
    },
    magazine: {
      eyebrow: "The portfolio",
      h1: "Stories worth telling",
      sub: "An editorial look at the products we've shipped, what they do, who they're for, and what they moved."
    },
    stack: {
      eyebrow: "Selected work",
      h1: "In-depth stories",
      sub: "Take your time, each one is a full case, top to bottom."
    },
    mosaic: {
      eyebrow: "Portfolio",
      h1: "A snapshot of recent work",
      sub: "Every project earned its real estate, by what it shipped, what it changed, or what someone said about it."
    }
  };
  const h = headlines[variant] || headlines.grid;
  let Body;
  if (variant === "editorial") Body = /*#__PURE__*/React.createElement(CaseStudiesEditorial, null);else if (variant === "featured") Body = /*#__PURE__*/React.createElement(CaseStudiesFeatured, null);else if (variant === "timeline") Body = /*#__PURE__*/React.createElement(CaseStudiesTimeline, null);else if (variant === "showcase") Body = /*#__PURE__*/React.createElement(CaseStudiesShowcase, null);else if (variant === "magazine") Body = /*#__PURE__*/React.createElement(CaseStudiesMagazine, null);else if (variant === "stack") Body = /*#__PURE__*/React.createElement(CaseStudiesStack, null);else if (variant === "mosaic") Body = /*#__PURE__*/React.createElement(CaseStudiesMosaic, null);else Body = /*#__PURE__*/React.createElement(CaseStudiesGrid, null);
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
  }, h.eyebrow), /*#__PURE__*/React.createElement("h1", null, h.h1), /*#__PURE__*/React.createElement("p", null, h.sub))), Body, /*#__PURE__*/React.createElement(CTAStrip, null));
}
window.CaseStudiesPage = CaseStudiesPage;/* global React, Icon, CSCover, CTAStrip */
/* Full case study detail page, 4 variants, slug-routed */

const {
  useState: useStateCSD,
  useEffect: useEffectCSD
} = React;

// ─────────────────────────────────────────────────────────────────
// All case data, keyed by slug
// ─────────────────────────────────────────────────────────────────
const CASES = {
  "wholesum": {
    slug: "wholesum",
    client: "WholeSum",
    industry: "Data / AI",
    year: "2025",
    duration: "16 weeks",
    team: "1 UI/UX designer · 1 cloud architect · 1 front-end · 1 back-end · 1 QA",
    region: "United Kingdom",
    kind: "cyan",
    title: "Self-serve AI analytics platform for unstructured text",
    tagline: "Qualitative analytics, automated: upload surveys, reviews, and interview transcripts, get statistically-grounded, AI-quantified insight, built end-to-end on Next.js + Nest.js + AWS.",
    summary: "WholeSum is a UK-based AI / data-analytics startup that turns unstructured qualitative text, surveys, reviews, interview transcripts, into reproducible, statistically-grounded insights. We partnered with WholeSum to validate self-serve demand and drive direct API adoption through a clean, fast UX focused on time-to-insight. The product was designed in 4 weeks, built in 10 weeks, validated through 2 weeks of UAT, and shipped on time on Next.js + Nest.js + PostgreSQL with S3, Cognito, and Elastic Beanstalk on AWS.",
    challenge: {
      eyebrow: "The challenge",
      title: "A self-serve UX that's fast, clear, and immediately valuable, on a tight clock.",
      body: "The product had to feel effortless: upload your data, get insights, navigate the results, without a sales call or a manual onboarding. That meant carefully mapping every user flow, iterating with users, and shipping a stable, intuitive experience inside a fixed delivery window.",
      pains: ["Strict timeline, 4 weeks design, 10 weeks development, 2 weeks UAT", "Self-serve UX requirements demanded careful flow mapping and iteration", "Speed, clarity, and immediate value had to coexist with rigorous QA", "Needed a tech foundation that could grow with API adoption post-launch"]
    },
    approach: {
      eyebrow: "Our approach",
      title: "Speed, clarity, and immediate value, end to end.",
      body: "We delivered the full product lifecycle, from product strategy and design to development, testing, deployment, and ongoing maintenance. Our approach centred on speed, clarity, and immediate value, ensuring users could interact with the product effortlessly while the system delivered rapid, automated analysis.",
      pillars: [{
        title: "Product strategy & design",
        desc: "4-week discovery and design sprint to lock the self-serve experience before a line of code."
      }, {
        title: "Modern JS stack",
        desc: "Next.js front-end and Nest.js API on Postgres, fast to ship, easy to scale."
      }, {
        title: "Cloud-native on AWS",
        desc: "S3, Cognito, and Elastic Beanstalk for storage, auth, and deployment."
      }, {
        title: "Five core modules",
        desc: "Landing, Upload Flow, Analysis Results, Dashboard, and User Profile & Settings."
      }]
    },
    results: [{
      v: "On time",
      l: "launch delivered",
      sub: "to the agreed timeline"
    }, {
      v: "Funded",
      l: "investment raised",
      sub: "off the back of the launch"
    }, {
      v: "Ongoing",
      l: "engagement",
      sub: "continued maintenance & support"
    }, {
      v: "5",
      l: "modules shipped",
      sub: "landing, upload, results, dashboard, profile"
    }],
    testimonial: {
      quote: "The self-serve MVP is live and in use. 7Code has excellent communication and project management skills. The team is quick to respond to the client's needs. The client is pleased with the outcome and the team's technical leadership.",
      name: "Emily Kucharski",
      role: "CEO & Co-Founder, WholeSum"
    },
    metaDescription: "Self-serve AI analytics platform for unstructured text by 7Code. Built end-to-end on Next.js + Nest.js + AWS for WholeSum (UK), 16-week design and build, launched on time and raised funding.",
    next: {
      slug: "daily8",
      client: "Daily8",
      title: "AI-powered news aggregator for the MENA region",
      kind: "cyan"
    }
  },
  "daily8": {
    slug: "daily8",
    client: "Daily8",
    industry: "Mobile / Media",
    year: "2022",
    duration: "6 months",
    team: "1 UI/UX designer · 1 architect · 3 full-stack developers · 1 PM · 1 QA",
    region: "United Arab Emirates",
    kind: "cyan",
    title: "AI-powered news aggregator for the MENA region",
    tagline: "MediaTech meets generative AI: a React Native news, podcasts, and videos app for the MENA region, moderated, summarised, and balanced by an OpenAI + AWS Lambda AI layer.",
    summary: "Daily8 is a UAE-based AI MediaTech startup building a centralised platform for news, podcasts, and videos tailored by country and interest, live now at daily8.com/en. After a stalled engagement with a previous provider, Daily8 switched to 7Code to design and ship the product end-to-end: a React Native iOS + Android app, the daily8.com web experience, an admin dashboard, and an AI layer on OpenAI + AWS Lambda for automated comment moderation, daily wrap-up summaries, and balanced-opinion features.",
    challenge: {
      eyebrow: "The challenge",
      title: "A multi-format content app that's fast, fair, and shippable on a startup runway.",
      body: "Daily8 came to us after a stalled engagement with a prior vendor. The product had to span three content formats, news, podcasts, and videos, feel personal from session one, and keep community spaces clean as comments scaled. All inside a six-month runway from blank canvas to App Store and Play Store readiness.",
      pains: ["Switching providers mid-vision with no working build to inherit", "Three content surfaces (news, podcasts, videos) under one cohesive UX", "Community comments at scale required automated moderation from day one", "Six months to design, build, test, and ready the app for both stores"]
    },
    approach: {
      eyebrow: "Our approach",
      title: "AI-native foundations, end-to-end delivery, ready for the stores in six months.",
      body: "We took the product from discovery to release: one month of focused UI/UX, four months of mobile and admin development, and parallel AI integration across moderation and summarisation. React Native on the front, AWS Lambda for the backend, OpenAI behind the AI features, chosen so the app would scale cleanly as Daily8's audience grew across the Emirates and the wider MENA region.",
      pillars: [{
        title: "Aligned discovery sprint",
        desc: "One-month UI/UX phase locked the experience, onboarding, three content feeds, comments, profile, before a line of mobile code was written."
      }, {
        title: "React Native + admin dashboard",
        desc: "Single codebase for iOS and Android, plus an internal admin for editorial and ops, built on AWS Lambda for cost-efficient scale."
      }, {
        title: "AI moderation built-in",
        desc: "OpenAI-powered comment moderation keeps community spaces safe without a human-only review queue."
      }, {
        title: "AI summarisation & balance",
        desc: "A Daily Wrap-Up condenses the news cycle; an Unbiased Opinion feature surfaces multiple perspectives on a story."
      }]
    },
    results: [{
      v: "6 months",
      l: "design to release",
      sub: "1 month design · 5 months build & QA"
    }, {
      v: "9",
      l: "consumer modules shipped",
      sub: "social login, feeds, comments, profile, push"
    }, {
      v: "3",
      l: "AI features in core flow",
      sub: "moderator · daily wrap-up · unbiased opinion"
    }, {
      v: "iOS + Android",
      l: "ready for the stores",
      sub: "App Store and Play Store"
    }],
    testimonial: {
      quote: "",
      name: "",
      role: ""
    },
    metaDescription: "AI-powered news aggregator for the MENA region by 7Code. Daily8 (UAE), live at daily8.com/en, with React Native mobile, web, AI moderation, daily wrap-up, and unbiased opinion on AWS Lambda + OpenAI. Shipped iOS + Android in 6 months.",
    next: {
      slug: "revote",
      client: "Eurel International",
      title: "Remote electronic voting platform for the European Parliament",
      kind: "defence"
    }
  },
  "revote": {
    slug: "revote",
    client: "Eurel International / European Parliament",
    industry: "E-Government / Civic Tech",
    year: "2023",
    duration: "8 months",
    team: "1 tech lead · 2 full-stack engineers",
    region: "European Union (Belgium, Italy)",
    kind: "defence",
    title: "Remote electronic voting platform for the European Parliament",
    tagline: "GovTech / E-Government: a multi-device remote-voting application for the European Parliament, authenticated on the EP network, designed to complement a 20-year-old in-chamber system without breaking it.",
    summary: "Eurel International is a Rome-based GovTech / E-Government provider of electronic voting systems for the Italian Senate, the Chamber of Deputies, and the European Parliament for nearly 20 years. 7Code partnered with Eurel to design and build a remote-voting application alongside their established in-chamber system, letting Members of the European Parliament authenticate through the EP network and vote securely from smartphone, tablet, laptop, or desktop, with full feature parity to the chamber experience.",
    challenge: {
      eyebrow: "The challenge",
      title: "Build a remote-voting platform that meets European Parliament's standards from day one.",
      body: "The Parliament's in-chamber voting system had been the standard for 20 years. The new remote application had to match it feature-for-feature, integrate with the EP's high-security network, and remain reliable through plenary and committee sessions where every vote counts. Testing was constrained by EP security policy, our CTO travelled to Brussels twice to validate the system on the live network.",
      pains: ["Coordinating architecture and feature parity against a 20-year incumbent in-chamber system", "Security and networking restrictions that limited where and how we could test", "Performance, reliability, and scalability had to match a real-time chamber-grade system", "Each release had to clear EP infrastructure validation before user testing"]
    },
    approach: {
      eyebrow: "Our approach",
      title: "Discovery in Brussels, proof of concept on the EP network, ship in eight months.",
      body: "We began with a one-month discovery to map requirements with Eurel and EP infrastructure teams and define the right architecture, followed by a one-month proof of concept on the European Parliament's network. The four-month development phase shipped five core modules, Landing, Authentication, Plenary, Committee, and Dashboard, with two months of user-acceptance testing on the live infrastructure before the May 2023 release.",
      pillars: [{
        title: "Discovery in-situ",
        desc: "On-site assessment with Eurel and EP infrastructure teams to lock requirements and constraints before proposing an architecture."
      }, {
        title: "Proof of concept on the live network",
        desc: "A working PoC inside the Parliament's network during month two, surfacing security and performance constraints early, when they were cheapest to fix."
      }, {
        title: "Five-module delivery",
        desc: "Plenary, Committee, Landing, Authentication, and Dashboard modules, built so each could be validated, hardened, and shipped independently."
      }, {
        title: "On-site UAT and rollout",
        desc: "Two months of user-acceptance testing on EP infrastructure, with our CTO in Brussels to resolve issues against live network behaviour."
      }]
    },
    results: [{
      v: "May 2023",
      l: "released to production",
      sub: "8-month delivery from kick-off"
    }, {
      v: "5 modules",
      l: "shipped",
      sub: "Plenary, Committee, Landing, Auth, Dashboard"
    }, {
      v: "Multi-device",
      l: "voting parity",
      sub: "phone, tablet, laptop, desktop"
    }, {
      v: "Ongoing",
      l: "engagement",
      sub: "continued maintenance & rollout support"
    }],
    testimonial: {
      quote: "The client was happy with 7Code's work, daily status reports, and on-time delivery of milestones. Their project management was well-organized, and they used virtual meetings for communication. 7Code's professionalism, flexibility, and commitment also contributed to the project's success.",
      name: "IT Engineer",
      role: "Electronic Voting Systems Company"
    },
    metaDescription: "Remote electronic voting platform for the European Parliament, built by 7Code with Eurel International. Secure multi-device voting on the EP network, five modules, eight months, released May 2023.",
    next: {
      slug: "g42-fleet",
      client: "Group 42",
      title: "Real-time fleet tracking for EXPO 2020 Dubai",
      kind: "energy"
    }
  },
  "g42-fleet": {
    slug: "g42-fleet",
    client: "Group 42 (G42)",
    industry: "IoT / Smart Buildings",
    year: "2022",
    duration: "2 years",
    team: "2 front-end · 2 back-end · 1 QA",
    region: "United Arab Emirates",
    kind: "energy",
    title: "Real-time fleet tracking platform for EXPO 2020 Dubai",
    tagline: "IoT meets telematics at world-expo scale: real-time vehicle tracking with geofence rule evaluation, custom trip events, and trip playback, delivered for EXPO 2020 Dubai on a custom TCP ingestion pipeline.",
    summary: "Group 42 (G42) is a UAE-based AI and cloud-computing company. 7Code partnered with G42 to build ESTS, an IoT fleet-tracking and smart-buildings platform deployed at EXPO 2020 Dubai, covering real-time vehicle location, geofence rule enforcement, custom event detection (overspeeding, loitering, geofence breach), trip playback, and dashboards for security and access teams. The stack: a custom device TCP server feeding a Node.js + React Native dashboard with Material-UI. Eighteen months of focused build plus six months of production maintenance.",
    challenge: {
      eyebrow: "The challenge",
      title: "Real-time, large-scale fleet tracking for a six-month global event with 200+ partners.",
      body: "EXPO 2020 Dubai needed centralised, real-time visibility across vehicle fleets covering security, logistics, and visitor transport. Devices reported over a custom TCP protocol; events had to be processed, geofenced, and escalated within seconds; the dashboard had to remain responsive under heavy concurrent load.",
      pains: ["Custom device TCP protocol with streaming telemetry", "Real-time geofence rule evaluation across many vehicles", "Trip playback and historical event reconstruction", "Six-month event window with no tolerance for downtime"]
    },
    approach: {
      eyebrow: "Our approach",
      title: "TCP ingestion, rule-based geofencing, and a real-time map dashboard.",
      body: "We built a dedicated device TCP server to ingest live telemetry, a rule engine for geofences and custom trip events (overspeeding, loitering, exit/enter geofence), and a React Native + Node.js front and back end with a real-time map. Custom procedures were tailored to EXPO 2020. Eighteen months of focused development were followed by six months of production maintenance.",
      pillars: [{
        title: "Device TCP server",
        desc: "Custom server to ingest device status, real-time telemetry, and backlog data, built to handle the EXPO fleet's volume and unreliability."
      }, {
        title: "Geofences and rule engine",
        desc: "CRUD for geofences plus a rule engine that evaluates overspeeding, loitering, and zone exits in near real time."
      }, {
        title: "Real-time map dashboard",
        desc: "Live map and dashboard for security and access teams, with trip playback for incident reconstruction."
      }, {
        title: "Custom EXPO procedures",
        desc: "Bespoke alert, escalation, and remote-unlock procedures designed around the EXPO 2020 operations playbook."
      }]
    },
    results: [{
      v: "EXPO 2020",
      l: "deployed at scale",
      sub: "delivered for the world expo's six-month run"
    }, {
      v: "18 + 6 mo",
      l: "build + maintenance",
      sub: "two-year engagement total"
    }, {
      v: "Real-time",
      l: "telemetry & alerts",
      sub: "device TCP ingestion, geofence rules"
    }, {
      v: "5+ modules",
      l: "shipped",
      sub: "TCP server, geofences, map, playback, alerts"
    }],
    testimonial: {
      quote: "",
      name: "",
      role: ""
    },
    metaDescription: "Real-time IoT fleet tracking for EXPO 2020 Dubai by 7Code, partnered with Group 42 (G42, UAE). Custom TCP ingestion, geofence rules, real-time map, and trip playback, 18 months build + 6 months maintenance.",
    next: {
      slug: "cloud-of-legacy",
      client: "Cloud of Legacy",
      title: "Cloud-based digital-heritage platform with secure inheritance",
      kind: "cyan"
    }
  },
  "cloud-of-legacy": {
    slug: "cloud-of-legacy",
    client: "Cloud of Legacy",
    industry: "Consumer SaaS / Digital Heritage",
    year: "2024",
    duration: "8 months",
    team: "1 tech lead · 3 front-end engineers · 1 QA",
    region: "Germany",
    kind: "cyan",
    title: "Cloud-based digital-heritage platform with secure inheritance access",
    tagline: "Digital Heritage / DeathTech meets consumer SaaS: a Next.js + React + Keycloak subscription cloud where customers store sensitive personal data and designate two heirs to inherit it, secured by Keycloak two-factor authentication.",
    summary: "Cloud of Legacy is a German Digital Heritage / DeathTech consumer SaaS that lets customers store sensitive personal data, documents, photos, videos, credit cards, and designate two trusted legacy contacts who can access the account after the owner's death. 7Code partnered with founder Uwe Bohler to ship the MVP in eight months: one month of discovery, six months of development, and one month of user-acceptance testing, built on React + Next.js + Material-UI on the front, Keycloak with 2FA for identity, and a tiered subscription engine (Free, Premium Legacy, Golden Legacy) with monthly and annual billing.",
    challenge: {
      eyebrow: "The challenge",
      title: "A consumer cloud product where the privacy bar is set higher than any single user can audit.",
      body: "The product handles inherently sensitive data, personal documents, payment cards, end-of-life designations, and the user only finds out it works correctly after the worst happens. The MVP had to be tailor-made to the founder's vision, ship inside a fixed budget and timeline, and meet a higher trust bar than a typical consumer SaaS.",
      pains: ["Sensitive data (documents, credit cards, end-of-life arrangements) requiring strong identity guarantees", "Two-party access model, designated legacy contacts must have a clear, auditable access path", "Subscription tiers with different storage and feature entitlements", "Tight MVP timeline against a fixed budget for a solo-founder client"]
    },
    approach: {
      eyebrow: "Our approach",
      title: "Keycloak-backed identity, tiered subscriptions, and a Next.js + React MVP shipped in eight months.",
      body: "We standardised identity on Keycloak with two-factor authentication, built tiered plans (Free, Premium Legacy, Golden Legacy) with monthly and annual billing, and shipped subscription, payment, and account-management flows on Next.js + React + Material-UI. One month of discovery preceded six months of development; the final month was user-acceptance testing before launch.",
      pillars: [{
        title: "Keycloak with 2FA",
        desc: "Industry-standard identity provider with two-factor authentication and the audit trail required for end-of-life access workflows."
      }, {
        title: "Tiered subscription engine",
        desc: "Free, Premium Legacy, and Golden Legacy plans with monthly and annual billing, upgrade/downgrade, and the storage and feature entitlements bound to each tier."
      }, {
        title: "Legacy account design",
        desc: "A two-trustee model: each owner designates two heirs who can access the account after death, with a clear verification path."
      }, {
        title: "Next.js + Material-UI front end",
        desc: "A Next.js + React + Material-UI codebase built to be readable and extensible by a single ongoing maintainer."
      }]
    },
    results: [{
      v: "MVP launched",
      l: "in 8 months",
      sub: "1mo discovery · 6mo build · 1mo UAT"
    }, {
      v: "3 tiers",
      l: "subscription model",
      sub: "Free, Premium Legacy, Golden Legacy"
    }, {
      v: "2FA + Keycloak",
      l: "identity stack",
      sub: "audit-grade authentication"
    }, {
      v: "Ongoing",
      l: "engagement",
      sub: "continued maintenance & feature work"
    }],
    testimonial: {
      quote: "",
      name: "",
      role: ""
    },
    metaDescription: "Cloud-based digital-heritage platform for Cloud of Legacy (Germany), built by 7Code in 8 months on Next.js + React + Keycloak with 2FA. Subscription cloud where users designate two heirs.",
    next: {
      slug: "lidl-road-safety",
      client: "Lidl Romania",
      title: "Children's road-safety gamification web app",
      kind: "cyan"
    }
  },
  "lidl-road-safety": {
    slug: "lidl-road-safety",
    client: "Lidl Romania",
    industry: "Education / Retail CSR",
    year: "2022",
    duration: "6 months",
    team: "1 front-end · 1 back-end · 1 QA",
    region: "Romania",
    kind: "cyan",
    title: "Children's road-safety gamification web app for Lidl Romania",
    tagline: "EdTech / CSR in retail: a React + Nest.js gamified web app for Lidl Romania and the Romanian Police that teaches children road-safety legislation through episodes, levels, video lessons, and a points-based engine.",
    summary: "Lidl Romania, in partnership with the Romanian Police, runs an annual children's road-safety education programme, now in its eighth edition. 7Code designed and built the web app behind it: a public landing experience plus an authenticated kids-and-parents space with quizzes, levels, video lessons, and a points-based gamification engine. Stack: React on the front, a Nest.js API on Heroku-hosted infrastructure. Six-month delivery covering front-end, back-end, QA, deployment, and ongoing support.",
    challenge: {
      eyebrow: "The challenge",
      title: "Make road-safety education actually fun for children, without compromising the seriousness of the message.",
      body: "An educational programme run by a national retailer and a national police force has to be safe, accessible, and educational, and a children's product has to be engaging or it dies on the homepage. The challenge was to build a gamified web app that earns the seriousness of the brief while genuinely working as a kids' product, with parent guidance and inclusive design at the centre.",
      pains: ["A children's audience with all the engagement and accessibility considerations that entails", "Multi-stakeholder content (Lidl Romania + Romanian Police) requiring careful approval flows", "Public + private split: open landing experience plus authenticated gamified space", "Annual programme cycle, the platform has to evolve each year without disruption"]
    },
    approach: {
      eyebrow: "Our approach",
      title: "Public landing, authenticated kids' space, and a gamification engine on React + Nest.js.",
      body: "We split the web app into a public marketing experience and an authenticated child-and-parent space. The authenticated space is built around episodes, levels, quizzes, and video content, each anchored in a points-based gamification engine that rewards progress and unlocks the next level. Stack: React on the front, a Nest.js API, and Heroku-hosted infrastructure. A back-office lets Lidl and Police content owners manage episodes, levels, and reporting independently.",
      pillars: [{
        title: "Public + private architecture",
        desc: "Open marketing pages plus an authenticated kid-and-parent space, each tuned to its own engagement and accessibility needs."
      }, {
        title: "React + Nest.js stack",
        desc: "React on the front and a Nest.js API on Heroku, chosen so Lidl can extend the platform each annual edition without re-platforming."
      }, {
        title: "Episode and level engine",
        desc: "Episodes group themed lessons; levels structure progression; videos and quizzes deliver the content. All editable by the back-office team."
      }, {
        title: "Gamification with welcoming logic",
        desc: "Dynamic points reward learning; welcoming logic eases new users in; flexible rules keep the experience inclusive across families."
      }, {
        title: "Back-office for editorial teams",
        desc: "A reporting and content-management module for Lidl and Police staff, they manage episodes, content, and reporting without our involvement."
      }]
    },
    results: [{
      v: "8th edition",
      l: "annual programme run",
      sub: "with Lidl Romania + Romanian Police"
    }, {
      v: "7 modules",
      l: "shipped",
      sub: "Profile, Child, Episode, Level, Gamification, Report, Auth"
    }, {
      v: "End-to-end",
      l: "delivery",
      sub: "front-end, back-end, QA, deploy, support"
    }, {
      v: "Inclusive",
      l: "by design",
      sub: "WCAG-aligned, parent-guided, family-friendly"
    }],
    testimonial: {
      quote: "",
      name: "",
      role: ""
    },
    metaDescription: "Children's road-safety gamification web app for Lidl Romania and the Romanian Police, built by 7Code on React + Nest.js + Heroku in 6 months. Public + private split, episodes, levels, and a points engine.",
    next: {
      slug: "hera",
      client: "Hera",
      title: "AI-powered fertility-clinic patient app",
      kind: "health"
    }
  },
  "hera": {
    slug: "hera",
    client: "Hera Health Tech",
    industry: "Healthcare / FemTech / FertilityTech",
    year: "2025",
    duration: "3 months MVP · ongoing",
    team: "1 full-stack engineer · 1 cloud architect · 1 AI engineer · 1 PM",
    region: "United Arab Emirates",
    kind: "health",
    title: "AI-powered patient-support app for fertility clinics",
    tagline: "FemTech meets verified clinical AI: an adaptive RAG-grounded persona that turns Hera's medical knowledge base into warm, personalised support across the patient's fertility journey.",
    summary: "Hera Health Tech is a UAE-based FemTech / FertilityTech startup building an AI patient-support companion for fertility clinics. We partnered with Hera's founders to design and ship the mobile app end-to-end, a React Native client, a Serverless-framework API on AWS Lambda, a LlamaIndex retrieval layer over Hera's verified clinical knowledge base, and a Strapi-powered dual CMS (Admin CMS for the medical content team, Clinic CMS for partner clinics). HIPAA and GDPR controls were designed in from week one. The product launched as an MVP in three months and is now an ongoing engagement.",
    challenge: {
      eyebrow: "The challenge",
      title: "Make AI feel like a clinically-trained assistant, without losing the empathy patients actually need.",
      body: "Fertility care is high-stakes, deeply personal, and surrounded by misinformation. Hera's founders set out to combine medically accurate feedback with a compassionate user experience. The product had to profile every patient's behaviour and preferences, ground every answer in Hera's verified medical knowledge, and stay safe under HIPAA and GDPR.",
      pains: ["AI profiling system that adapts to patient behaviour and preferences", "Medically accurate answers grounded in an ever-growing clinical knowledge base", "Balancing clinical reliability with a warm, supportive user experience", "HIPAA and GDPR compliance from day one of the MVP"]
    },
    approach: {
      eyebrow: "Our approach",
      title: "RAG over verified clinical content, an AI persona over a structured patient profile, all on a serverless AWS stack.",
      body: "We shipped a React Native app with onboarding, profile management, suggested questions, and an AI chat that retrieves over Hera's verified content via LlamaIndex. A Serverless framework API on AWS keeps inference and content delivery latency low; Strapi powers an Admin CMS for the medical team and a Clinic CMS for partner sites. Every layer was designed for HIPAA + GDPR compliance from week one, and shipped as a working MVP in three months.",
      pillars: [{
        title: "Adaptive AI patient-profiling system",
        desc: "Patient behaviour, preferences, and clinical inputs feed a structured profile that an adaptive AI persona uses to personalise every reply across the fertility journey."
      }, {
        title: "Clinically-grounded RAG",
        desc: "A LlamaIndex retrieval layer over Hera's verified clinical knowledge base, answers are cited from medically-reviewed content, not hallucinated guesses, with refusal patterns when context is missing."
      }, {
        title: "Dual-tenant CMS (Admin + Clinic)",
        desc: "Strapi-powered: an Admin CMS for the medical content team, a Clinic CMS for partner clinics. One codebase, role-scoped surfaces, audit-friendly content workflows."
      }, {
        title: "HIPAA + GDPR from week one",
        desc: "Encryption in transit and at rest, audit logs, data-residency controls, and explicit consent flows, designed into the architecture, not bolted on after launch."
      }]
    },
    results: [{
      v: "3 months",
      l: "to MVP launch",
      sub: "discovery, design, build, and store readiness"
    }, {
      v: "RAG-grounded",
      l: "clinical AI chat",
      sub: "answers cite Hera's verified medical knowledge"
    }, {
      v: "HIPAA + GDPR",
      l: "compliance-ready",
      sub: "encryption, audit logs, consent flows from day one"
    }, {
      v: "Ongoing",
      l: "engagement",
      sub: "continued feature work and clinic onboarding"
    }],
    testimonial: {
      quote: "7Code's work resulted in a functional MVP, and the client's internal testing yielded positive results. The team followed a structured sprint process, held regular stand-ups, and communicated consistently during the project. 7Code was responsive, proactive, flexible, transparent, and collaborative.",
      name: "Evyn White",
      role: "Co-Founder, Hera Health Tech"
    },
    metaDescription: "AI-powered patient-support app for fertility clinics, built by 7Code for Hera Health Tech (UAE). FemTech / FertilityTech MVP on React Native + Serverless on AWS Lambda, LlamaIndex RAG over verified clinical content, HIPAA + GDPR compliant. Shipped in 3 months.",
    next: {
      slug: "melsonic",
      client: "Melsonic",
      title: "AI-powered guitar-learning web app",
      kind: "cyan"
    }
  },
  "melsonic": {
    slug: "melsonic",
    client: "Melsonic",
    industry: "Music / EdTech / AI",
    year: "2025",
    duration: "5 months MVP · ongoing",
    team: "1 front-end engineer · 1 cloud architect · 1 QA · 1 PM",
    region: "United Kingdom",
    kind: "cyan",
    title: "AI-powered guitar-learning web app with real-time performance feedback",
    tagline: "Music EdTech meets real-time audio AI: play your guitar, the Web Audio pipeline scores you against the original, and the canvas renders every note correct, missed, or wrong, Melsonic turns practice into a measurable, gamified loop.",
    summary: "Melsonic is a UK-based music-EdTech startup helping beginner and intermediate guitarists improve through real-time AI performance analysis. We integrated Melsonic's existing AI engine into a fully-built Next.js web platform, Web Audio API capture, pixi.js note rendering on a tightly-synced canvas, AI scoring against the original track (notes correct, missed, played wrong), and a gamification loop that keeps players coming back. Stack: Next.js + pixi.js on the front, Nest.js + PostgreSQL on AWS at the back.",
    challenge: {
      eyebrow: "The challenge",
      title: "Sync real-time audio with note rendering, and turn raw performance data into feedback a player actually trusts.",
      body: "Melsonic had a working AI engine. They needed a product around it: a web platform that captures a player's recording, syncs note rendering on a canvas to the live audio, runs the AI comparison against the original track, and renders feedback (notes correct, missed, played wrong) in a way a learner can act on.",
      pains: ["Syncing real-time audio capture with note rendering on a pixi.js canvas", "Smooth user experience during recording, latency-sensitive across browsers and devices", "Transforming raw audio analysis into structured, motivating feedback", "Hitting a five-month MVP target with a full product surface (auth, learning, recording, feedback, profile, gamification)"]
    },
    approach: {
      eyebrow: "Our approach",
      title: "Next.js front, Nest.js API, pixi.js canvas, wrapped around Melsonic's AI engine.",
      body: "We built the full web platform on Next.js, with a pixi.js canvas for note rendering tightly synchronised to the audio capture pipeline. A Nest.js API on Postgres + AWS sits in front of Melsonic's AI engine and feeds the scoring loop. Seven core modules shipped, sign-up & login, landing, learning, feedback, recording, profile, and gamification, into a five-month MVP that's now an ongoing engagement.",
      pillars: [{
        title: "Web Audio capture + canvas sync",
        desc: "Web Audio API for live recording, pixi.js note rendering tied frame-accurately to the audio pipeline so every visual cue matches what the player just heard."
      }, {
        title: "AI scoring loop",
        desc: "The recording is compared against the original track via Melsonic's AI engine, notes correct, missed, played wrong, surfaced as actionable feedback inside the practice screen."
      }, {
        title: "Seven-module web platform",
        desc: "Sign-up, landing, learning, recording, feedback, profile, gamification, all shipped on Next.js + pixi.js + Nest.js + PostgreSQL on AWS."
      }, {
        title: "Gamified practice engagement",
        desc: "A points-and-progression layer that turns repeated practice into a measurable streak, with welcoming logic for new players and rewards tuned for continued use."
      }]
    },
    results: [{
      v: "5 months",
      l: "to MVP launch",
      sub: "platform built around Melsonic's AI engine"
    }, {
      v: "7 modules",
      l: "shipped",
      sub: "auth, learning, recording, feedback, profile, gamification, landing"
    }, {
      v: "Real-time",
      l: "audio + canvas sync",
      sub: "Web Audio API + pixi.js, frame-accurate"
    }, {
      v: "Ongoing",
      l: "engagement",
      sub: "continued feature work and platform iteration"
    }],
    testimonial: {
      quote: "",
      name: "",
      role: ""
    },
    metaDescription: "AI-powered guitar-learning web app for Melsonic (UK) by 7Code. Real-time Web Audio API capture, pixi.js canvas rendering, and AI scoring against the original, built on Next.js + Nest.js + PostgreSQL + AWS. Music EdTech MVP shipped in 5 months.",
    next: {
      slug: "drum-bun",
      client: "Drum Bun",
      title: "Mobile car-services app for the Romanian driver",
      kind: "ops"
    }
  },
  "drum-bun": {
    slug: "drum-bun",
    client: "Explorom (drumbun.ro)",
    industry: "InsurTech / Automotive / Mobile",
    year: "2024",
    duration: "Ongoing",
    team: "2 front-end engineers · 2 back-end engineers · 1 QA",
    region: "Romania",
    kind: "ops",
    title: "Mobile car-services app for the Romanian driver, RCA, ITP, vignette, all in one tap",
    tagline: "InsurTech meets automotive compliance: verify, purchase, and track every Romanian car obligation, RCA insurance, ITP inspection, road vignette, from one React Native app with an OCR document pipeline.",
    summary: "Drum Bun, by Romanian InsurTech startup Explorom, is the single mobile app Romanian drivers use to keep their car compliant: verifying RCA insurance, ITP technical inspection, and road vignette by license-plate number, then purchasing or renewing them in-app. 7Code built the React Native iOS + Android client and the Node.js backend on Heroku, plus the OCR document pipeline that lifts car details from a photo so drivers stop typing license plates and policy numbers by hand.",
    challenge: {
      eyebrow: "The challenge",
      title: "Take three fragmented Romanian car-service flows and hide the bureaucracy behind one tap.",
      body: "Romanian drivers juggle three separate compliance services, RCA insurance, ITP inspection, and the road vignette, each with its own provider, expiry date, and renewal flow. Drum Bun's pitch is one app for all of it: instant verification on a plate, alerts before anything expires, OCR-assisted onboarding, and in-app purchase. Building it meant pulling together a robust foundation, an OCR pipeline, and a payment layer that drivers actually trust.",
      pains: ["Three independent compliance services unified behind a single product surface", "OCR pipeline robust enough to read messy real-world car documents", "Auto-complete and pre-fill so drivers don't manually type plates and details", "Custom expiry-alert engine for RCA, ITP, and vignette per car"]
    },
    approach: {
      eyebrow: "Our approach",
      title: "React Native + Node.js, walkthrough-first onboarding, OCR-driven document capture.",
      body: "We built Drum Bun on React Native with a Node.js backend on Heroku. The app opens with verification (RCA, ITP, vignette by plate, no signup required), funnels users into a Sign Up only when they need to do more, and leans on OCR to lift documents from photos, so adding a car takes seconds, not minutes. Modules cover walkthrough, car management, alerts, OCR, profile, services, and payment methods, with purchase history stored alongside each car.",
      pillars: [{
        title: "Verification before signup",
        desc: "Open the app, type a plate, see whether RCA / ITP / vignette is valid. Sign-up is only required when the user wants to take action, buy, store documents, or set alerts."
      }, {
        title: "OCR document pipeline",
        desc: "Photograph any Romanian car document, RCA policy, ITP card, talon, and the OCR module extracts and pre-fills the structured data into the car's profile. No more typing plates and policy numbers by hand."
      }, {
        title: "Per-car expiry alerts",
        desc: "Custom notification rules for each service on each car, so RCA, ITP, and vignette renewals never sneak up on the driver. Alerts are tunable per-document and per-car."
      }, {
        title: "In-app service purchase",
        desc: "Buy or renew RCA, ITP, and road vignette directly inside the app, with payment methods saved per profile and purchase history tied to the right car."
      }]
    },
    results: [{
      v: "3-in-1",
      l: "compliance app",
      sub: "RCA, ITP, vignette unified for Romanian drivers"
    }, {
      v: "OCR-assisted",
      l: "onboarding",
      sub: "auto-fill from a single document photo"
    }, {
      v: "App Store + Play Store",
      l: "live",
      sub: "released to both stores, ongoing engagement"
    }, {
      v: "8 modules",
      l: "shipped",
      sub: "walkthrough, cars, alerts, OCR, profile, services, payments, history"
    }],
    testimonial: {
      quote: "",
      name: "",
      role: ""
    },
    metaDescription: "Romanian InsurTech mobile app (Drum Bun) for Explorom, built by 7Code on React Native + Node.js + Heroku with an OCR document pipeline. Verify and purchase RCA, ITP, and road vignette in one tap, live on App Store and Play Store.",
    next: {
      slug: "numerize",
      client: "Numerize",
      title: "Electronic document management platform with OCR + e-signature",
      kind: "ops"
    }
  },
  "numerize": {
    slug: "numerize",
    client: "Numerize",
    industry: "DocTech / Enterprise SaaS / OCR",
    year: "2024",
    duration: "Ongoing",
    team: "1 front-end engineer · 1 back-end engineer · 1 QA",
    region: "France",
    kind: "ops",
    title: "Responsive electronic document management platform with OCR and digital signatures",
    tagline: "Document management software (GED / EDM) for 6,000+ French enterprises, hospitals, and public administrations, re-engineered for responsive web with OCR, YouSign e-signatures, and Stripe + 3D Secure billing baked in.",
    summary: "Numerize is a French DocTech / Enterprise SaaS company that has been digitising and archiving documents for 17+ years, serving 6,000+ enterprises, public administrations, hospitals, and SMEs. 7Code took on the responsive overhaul of their GED (gestion électronique des documents), also known as EDM, electronic document management, keeping the OCR-trained invoice pipeline, electronic archiving, and multi-signatory workflows intact while rebuilding the customer-facing surface on React + Material-UI and modernising the billing layer with Stripe + 3D Secure (with a bank-transfer fallback) and a tiered subscription engine.",
    challenge: {
      eyebrow: "The challenge",
      title: "A 17-year-old document-management platform whose customers expect both rigour and a modern responsive UX.",
      body: "Numerize's clients trust them with sensitive documents, invoices, contracts, hospital records, and expect indexation, archiving, and customer-signed workflows that hold up in a French legal and procurement context. The brief was to take a mature platform and rebuild the customer-facing surface to be responsive, billable, and signable end-to-end without breaking the OCR and archiving pipelines underneath.",
      pains: ["Responsive web overhaul of a long-established GED tool, without breaking existing customers", "Digital signatures with multiple signatories, customer-side labelling, and email delivery of signed invoices", "Stripe + 3D Secure integration with bank-transfer fallback for enterprise billing", "Customisable subscription tiers across user count, storage, and file type, annual or monthly"]
    },
    approach: {
      eyebrow: "Our approach",
      title: "React + Material-UI on the front, Laravel + PHP on the back, AWS underneath, all bolted onto Numerize's existing OCR and archiving core.",
      body: "We rebuilt the responsive customer surface on React + Material-UI, with a Laravel + PHP API on AWS. The OCR pipeline trains on invoices, extracts structured data, and routes documents into the right archival sector. Digital signatures via YouSign cover multi-signatory flows; Stripe with 3D Secure (and bank-transfer fallback) handles billing across individual, company, and trial accounts. Subscriptions can be created, upgraded, or downgraded, monthly or annual, without touching the archive layer.",
      pillars: [{
        title: "Responsive GED / EDM surface",
        desc: "React + Material-UI rebuild of the customer-facing electronic document manager, phone, tablet, and desktop parity for the same archival and indexing workflows."
      }, {
        title: "OCR-trained invoice pipeline",
        desc: "Train on incoming invoices, extract structured data, categorise by sector, route into archival storage, the OCR core was preserved untouched while the UI was rebuilt around it."
      }, {
        title: "YouSign e-signature with email delivery",
        desc: "YouSign-backed digital signatures with multi-signatory flows, customer-side labelling of signature fields, and email delivery of signed invoices to all parties."
      }, {
        title: "Tiered Stripe + 3D Secure billing",
        desc: "Individual, company, and trial accounts with monthly or annual subscriptions, upgrade/downgrade flows, Stripe 3D Secure, and a bank-transfer fallback for enterprise procurement."
      }]
    },
    results: [{
      v: "6,000+",
      l: "customer accounts",
      sub: "enterprises, hospitals, public administrations, SMEs"
    }, {
      v: "17+ yrs",
      l: "in market",
      sub: "Numerize platform, responsive overhaul shipped by 7Code"
    }, {
      v: "Stripe + 3DS",
      l: "billing live",
      sub: "monthly + annual tiers, bank-transfer fallback"
    }, {
      v: "YouSign",
      l: "e-signature integrated",
      sub: "multi-signatory, email delivery of signed invoices"
    }],
    testimonial: {
      quote: "",
      name: "",
      role: ""
    },
    metaDescription: "Responsive electronic document management (GED / EDM) and e-signature platform for Numerize (France), built by 7Code on React + Material-UI + Laravel + AWS. OCR-trained invoice pipeline, YouSign multi-signatory e-signatures, Stripe + 3D Secure billing across 6,000+ enterprise accounts.",
    next: {
      slug: "wholesum",
      client: "WholeSum",
      title: "Self-serve AI analytics platform for unstructured text",
      kind: "cyan"
    }
  }
};

// Active case, reassigned synchronously in CaseStudyPage before render
let CSD = CASES["wholesum"];

// ──────────────────────────────────────────────────────────────────
// Shared mockup graphics, phone + browser
// ──────────────────────────────────────────────────────────────────
function PhoneMockup({
  accent = "var(--cyan-500)"
}) {
  if (CSD.slug === "daily8") {
    return /*#__PURE__*/React.createElement("div", {
      className: "csd-phone csd-phone--shot"
    }, /*#__PURE__*/React.createElement("div", {
      className: "csd-phone-notch"
    }), /*#__PURE__*/React.createElement("img", {
      className: "csd-phone-img",
      src: "/project/uploads/daily8-notifications.png",
      alt: "Daily8 notifications screen"
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "csd-phone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-phone-notch"
  }), /*#__PURE__*/React.createElement("div", {
    className: "csd-phone-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-app-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-app-avatar"
  }), /*#__PURE__*/React.createElement("div", {
    className: "csd-app-bars"
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null)), /*#__PURE__*/React.createElement("div", {
    className: "csd-app-bell"
  }, "\u25CF")), /*#__PURE__*/React.createElement("div", {
    className: "csd-app-greeting"
  }, "Good morning, Sarah"), /*#__PURE__*/React.createElement("div", {
    className: "csd-app-sub"
  }, "Your next visit is Tue at 10:30"), /*#__PURE__*/React.createElement("div", {
    className: "csd-app-card",
    style: {
      background: accent
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-app-card-tag"
  }, "Recommended"), /*#__PURE__*/React.createElement("div", {
    className: "csd-app-card-title"
  }, "Annual check-in"), /*#__PURE__*/React.createElement("div", {
    className: "csd-app-card-meta"
  }, "15 min \xB7 Async or video"), /*#__PURE__*/React.createElement("div", {
    className: "csd-app-card-cta"
  }, "Book now \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "csd-app-section"
  }, "Upcoming"), /*#__PURE__*/React.createElement("div", {
    className: "csd-app-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-app-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-app-dot",
    style: {
      background: accent
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "csd-app-lines"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-l1"
  }, "Dr. Patel \xB7 10:30 AM"), /*#__PURE__*/React.createElement("div", {
    className: "csd-l2"
  }, "Tuesday \xB7 Async messaging"))), /*#__PURE__*/React.createElement("div", {
    className: "csd-app-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-app-dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "csd-app-lines"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-l1"
  }, "Dr. Kim \xB7 3:15 PM"), /*#__PURE__*/React.createElement("div", {
    className: "csd-l2"
  }, "Friday \xB7 Video consult"))))));
}
function WholesumHero() {
  return /*#__PURE__*/React.createElement("div", {
    className: "csd-browser csd-ws-browser"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-browser-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "csd-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "csd-dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "csd-browser-url"
  }, "wholesum.tech")), /*#__PURE__*/React.createElement("img", {
    className: "csd-ws-shot",
    src: "/project/uploads/wholesum-hero.png",
    alt: "WholeSum homepage hero, Get deeper insights from your richest data"
  }));
}
function PhotoHero({
  src,
  alt,
  urlBar,
  caption
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "csd-browser"
  }, urlBar ? /*#__PURE__*/React.createElement("div", {
    className: "csd-browser-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "csd-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "csd-dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "csd-browser-url"
  }, urlBar)) : null, /*#__PURE__*/React.createElement("img", {
    className: "csd-ws-shot",
    src: src,
    alt: alt
  }), caption ? /*#__PURE__*/React.createElement("div", {
    className: "csd-photo-caption"
  }, caption) : null);
}
function BrowserMockup({
  kind = "calendar"
}) {
  if (CSD.slug === "wholesum") return /*#__PURE__*/React.createElement(WholesumHero, null);
  if (CSD.slug === "daily8") return /*#__PURE__*/React.createElement(PhotoHero, {
    src: "/project/uploads/daily8-website.jpg",
    urlBar: "daily8.com/en",
    alt: "Daily8 website (daily8.com/en), Get Started Now: Download the App"
  });
  if (CSD.slug === "revote") return /*#__PURE__*/React.createElement(PhotoHero, {
    src: "/project/uploads/revote-hero.jpg",
    alt: "Igor Mardari (CTO, 7Code) with Massimo Locorotondo (Eurel) inside the European Parliament chamber, Brussels",
    caption: "Igor Mardari (CTO, 7Code) and Massimo Locorotondo (Eurel) at the European Parliament, Brussels, 2023"
  });
  if (CSD.slug === "g42-fleet") return /*#__PURE__*/React.createElement(PhotoHero, {
    src: "/project/uploads/g42-fleet-hero.jpg",
    urlBar: "g42.ai \xB7 ESTS Fleet Tracking",
    alt: "G42 ESTS fleet-tracking dashboard with all-trip alerts and live vehicle map"
  });
  if (CSD.slug === "cloud-of-legacy") return /*#__PURE__*/React.createElement(PhotoHero, {
    src: "/project/uploads/cloud-of-legacy-hero.jpg",
    urlBar: "cloudoflegacy.com",
    alt: "Cloud of Legacy landing page, digital-heritage cloud with subscription"
  });
  if (CSD.slug === "lidl-road-safety") return /*#__PURE__*/React.createElement(PhotoHero, {
    src: "/project/uploads/lidl-road-safety-hero.jpg",
    alt: "Lidl Romania + Politia Romana road-safety web app for children"
  });
  if (CSD.slug === "hera") return /*#__PURE__*/React.createElement(PhotoHero, {
    src: "/project/uploads/hera-hero.jpg",
    urlBar: "herahealthtech.com",
    alt: "Hera Health Tech, Introducing Hera, AI-powered fertility-clinic patient app"
  });
  if (CSD.slug === "melsonic") return /*#__PURE__*/React.createElement(PhotoHero, {
    src: "/project/uploads/melsonic-hero.jpg",
    urlBar: "app.melsonic.com",
    alt: "Melsonic, Learn your favourite song today, AI-powered guitar learning"
  });
  if (CSD.slug === "drum-bun") return /*#__PURE__*/React.createElement(PhotoHero, {
    src: "/project/uploads/drum-bun-hero.jpg",
    urlBar: "drumbun.ro",
    alt: "Drum Bun, Aplica\u021Bia \u0219oferilor responsabili (Romanian car-services app)"
  });
  if (CSD.slug === "numerize") return /*#__PURE__*/React.createElement(PhotoHero, {
    src: "/project/uploads/numerize-hero.jpg",
    urlBar: "numerize.com",
    alt: "Numerize, Soci\xE9t\xE9 de num\xE9risation de documents et d'archivage"
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "csd-browser"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-browser-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "csd-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "csd-dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "csd-browser-url"
  }, "helix.health/clinic/dashboard")), /*#__PURE__*/React.createElement("div", {
    className: "csd-browser-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-browser-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-side-logo"
  }, "H"), /*#__PURE__*/React.createElement("div", {
    className: "csd-side-item is-active"
  }, "Today"), /*#__PURE__*/React.createElement("div", {
    className: "csd-side-item"
  }, "Patients"), /*#__PURE__*/React.createElement("div", {
    className: "csd-side-item"
  }, "Messages ", /*#__PURE__*/React.createElement("span", {
    className: "csd-badge"
  }, "12")), /*#__PURE__*/React.createElement("div", {
    className: "csd-side-item"
  }, "Schedule"), /*#__PURE__*/React.createElement("div", {
    className: "csd-side-item"
  }, "Reports")), /*#__PURE__*/React.createElement("div", {
    className: "csd-browser-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-main-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "csd-main-title"
  }, "Today \xB7 14 visits"), /*#__PURE__*/React.createElement("div", {
    className: "csd-main-sub"
  }, "Tuesday, Apr 23 \xB7 Dr. Patel")), /*#__PURE__*/React.createElement("div", {
    className: "csd-main-pill"
  }, "Live")), /*#__PURE__*/React.createElement("div", {
    className: "csd-stat-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-stat-l"
  }, "Booked"), /*#__PURE__*/React.createElement("div", {
    className: "csd-stat-v"
  }, "14")), /*#__PURE__*/React.createElement("div", {
    className: "csd-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-stat-l"
  }, "Waiting"), /*#__PURE__*/React.createElement("div", {
    className: "csd-stat-v"
  }, "3")), /*#__PURE__*/React.createElement("div", {
    className: "csd-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-stat-l"
  }, "Avg wait"), /*#__PURE__*/React.createElement("div", {
    className: "csd-stat-v"
  }, "2m")), /*#__PURE__*/React.createElement("div", {
    className: "csd-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-stat-l"
  }, "Drop-off"), /*#__PURE__*/React.createElement("div", {
    className: "csd-stat-v",
    style: {
      color: "var(--cyan-600)"
    }
  }, "18%"))), /*#__PURE__*/React.createElement("div", {
    className: "csd-table"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-table-row csd-table-head"
  }, /*#__PURE__*/React.createElement("div", null, "Time"), /*#__PURE__*/React.createElement("div", null, "Patient"), /*#__PURE__*/React.createElement("div", null, "Type"), /*#__PURE__*/React.createElement("div", null, "Status")), /*#__PURE__*/React.createElement("div", {
    className: "csd-table-row"
  }, /*#__PURE__*/React.createElement("div", null, "09:00"), /*#__PURE__*/React.createElement("div", null, "S. Reyes"), /*#__PURE__*/React.createElement("div", null, "Async"), /*#__PURE__*/React.createElement("div", {
    className: "csd-pill csd-pill--ok"
  }, "Done")), /*#__PURE__*/React.createElement("div", {
    className: "csd-table-row"
  }, /*#__PURE__*/React.createElement("div", null, "09:30"), /*#__PURE__*/React.createElement("div", null, "M. Okafor"), /*#__PURE__*/React.createElement("div", null, "Video"), /*#__PURE__*/React.createElement("div", {
    className: "csd-pill csd-pill--ok"
  }, "Done")), /*#__PURE__*/React.createElement("div", {
    className: "csd-table-row csd-table-row--now"
  }, /*#__PURE__*/React.createElement("div", null, "10:30"), /*#__PURE__*/React.createElement("div", null, "P. Singh"), /*#__PURE__*/React.createElement("div", null, "Async"), /*#__PURE__*/React.createElement("div", {
    className: "csd-pill csd-pill--live"
  }, "Now")), /*#__PURE__*/React.createElement("div", {
    className: "csd-table-row"
  }, /*#__PURE__*/React.createElement("div", null, "11:00"), /*#__PURE__*/React.createElement("div", null, "L. Morales"), /*#__PURE__*/React.createElement("div", null, "Video"), /*#__PURE__*/React.createElement("div", {
    className: "csd-pill"
  }, "Soon")), /*#__PURE__*/React.createElement("div", {
    className: "csd-table-row"
  }, /*#__PURE__*/React.createElement("div", null, "11:30"), /*#__PURE__*/React.createElement("div", null, "A. Cohen"), /*#__PURE__*/React.createElement("div", null, "Async"), /*#__PURE__*/React.createElement("div", {
    className: "csd-pill"
  }, "Booked"))))));
}
function hasPhoneShot() {
  return CSD.slug === "daily8";
}
function FactsList({
  inline = false
}) {
  const facts = [{
    l: "Client",
    v: CSD.client
  }, {
    l: "Industry",
    v: CSD.industry
  }, {
    l: "Duration",
    v: CSD.duration
  }, {
    l: "Team",
    v: CSD.team
  }, {
    l: "Region",
    v: CSD.region
  }];
  return /*#__PURE__*/React.createElement("dl", {
    className: "csd-facts" + (inline ? " csd-facts--inline" : "")
  }, facts.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.l,
    className: "csd-fact"
  }, /*#__PURE__*/React.createElement("dt", null, f.l), /*#__PURE__*/React.createElement("dd", null, f.v))));
}
function ResultsStrip({
  dark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "csd-results" + (dark ? " csd-results--dark" : "")
  }, CSD.results.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "csd-result"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-result-v"
  }, r.v), /*#__PURE__*/React.createElement("div", {
    className: "csd-result-l"
  }, r.l), /*#__PURE__*/React.createElement("div", {
    className: "csd-result-sub"
  }, r.sub))));
}
function TestimonialCard({
  flat = false
}) {
  if (!CSD.testimonial || !CSD.testimonial.quote) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "csd-quote" + (flat ? " csd-quote--flat" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-quote-mark"
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    className: "csd-quote-text"
  }, CSD.testimonial.quote), /*#__PURE__*/React.createElement("div", {
    className: "csd-quote-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-quote-avatar"
  }, CSD.testimonial.name.split(" ").map(s => s[0]).join("")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "csd-quote-name"
  }, CSD.testimonial.name), /*#__PURE__*/React.createElement("div", {
    className: "csd-quote-role"
  }, CSD.testimonial.role))));
}
function NextCaseCTA() {
  return /*#__PURE__*/React.createElement("a", {
    href: "/case-study/" + CSD.next.slug,
    className: "csd-next"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-next-meta"
  }, "Next case study"), /*#__PURE__*/React.createElement("div", {
    className: "csd-next-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "csd-next-client"
  }, CSD.next.client), /*#__PURE__*/React.createElement("div", {
    className: "csd-next-title"
  }, CSD.next.title)), /*#__PURE__*/React.createElement("span", {
    className: "csd-next-arrow"
  }, /*#__PURE__*/React.createElement(Icon.arrow, null))));
}

// ──────────────────────────────────────────────────────────────────
// V1, Long-read editorial (sticky TOC sidebar)
// ──────────────────────────────────────────────────────────────────
function CSDLongRead() {
  const [active, setActive] = useStateCSD("overview");
  const sections = [{
    id: "overview",
    label: "Overview"
  }, {
    id: "challenge",
    label: "The challenge"
  }, {
    id: "approach",
    label: "Our approach"
  }, {
    id: "product",
    label: "The product"
  }, {
    id: "results",
    label: "Results"
  }, {
    id: "voice",
    label: "In their words"
  }];
  useEffectCSD(() => {
    const handler = () => {
      let cur = "overview";
      for (const s of sections) {
        const el = document.getElementById("csd-" + s.id);
        if (el && el.getBoundingClientRect().top < 200) cur = s.id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", handler, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "csd-long"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-long-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-long-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-kicker"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-dot"
  }), " Case study"), /*#__PURE__*/React.createElement("span", null, CSD.industry), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, CSD.duration)), /*#__PURE__*/React.createElement("h1", {
    className: "csd-long-title"
  }, CSD.title), /*#__PURE__*/React.createElement("p", {
    className: "csd-long-tagline"
  }, CSD.tagline))), /*#__PURE__*/React.createElement("div", {
    className: "csd-long-cover-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-long-cover"
  }, /*#__PURE__*/React.createElement(BrowserMockup, null)))), /*#__PURE__*/React.createElement("div", {
    className: "container csd-long-body-wrap"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "csd-toc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-toc-label"
  }, "Contents"), /*#__PURE__*/React.createElement("ul", null, sections.map(s => /*#__PURE__*/React.createElement("li", {
    key: s.id
  }, /*#__PURE__*/React.createElement("a", {
    href: "#csd-" + s.id,
    className: active === s.id ? "is-active" : ""
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    className: "csd-toc-facts"
  }, /*#__PURE__*/React.createElement(FactsList, null))), /*#__PURE__*/React.createElement("article", {
    className: "csd-long-article"
  }, /*#__PURE__*/React.createElement("section", {
    id: "csd-overview"
  }, /*#__PURE__*/React.createElement("p", {
    className: "csd-lead"
  }, CSD.summary)), /*#__PURE__*/React.createElement("section", {
    id: "csd-challenge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-eyebrow"
  }, CSD.challenge.eyebrow), /*#__PURE__*/React.createElement("h2", null, CSD.challenge.title), /*#__PURE__*/React.createElement("p", null, CSD.challenge.body), /*#__PURE__*/React.createElement("ul", {
    className: "csd-bullets"
  }, CSD.challenge.pains.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-bullet-dot"
  }), p)))), /*#__PURE__*/React.createElement("section", {
    id: "csd-approach"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-eyebrow"
  }, CSD.approach.eyebrow), /*#__PURE__*/React.createElement("h2", null, CSD.approach.title), /*#__PURE__*/React.createElement("p", null, CSD.approach.body), /*#__PURE__*/React.createElement("div", {
    className: "csd-pillars"
  }, CSD.approach.pillars.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "csd-pillar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-pillar-num"
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", {
    className: "csd-pillar-title"
  }, p.title), /*#__PURE__*/React.createElement("div", {
    className: "csd-pillar-desc"
  }, p.desc))))), /*#__PURE__*/React.createElement("section", {
    id: "csd-product",
    className: "csd-product-section"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-eyebrow"
  }, "The product"), /*#__PURE__*/React.createElement("h2", null, "What we shipped."), /*#__PURE__*/React.createElement("p", null, CSD.tagline), /*#__PURE__*/React.createElement("div", {
    className: "csd-product-pair"
  }, hasPhoneShot() && /*#__PURE__*/React.createElement("div", {
    className: "csd-product-art csd-product-art--phone"
  }, /*#__PURE__*/React.createElement(PhoneMockup, null)), /*#__PURE__*/React.createElement("div", {
    className: "csd-product-art csd-product-art--browser"
  }, /*#__PURE__*/React.createElement(BrowserMockup, null)))), /*#__PURE__*/React.createElement("section", {
    id: "csd-results"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-eyebrow"
  }, "Results"), /*#__PURE__*/React.createElement("h2", null, "By the numbers."), /*#__PURE__*/React.createElement(ResultsStrip, null)), /*#__PURE__*/React.createElement("section", {
    id: "csd-voice"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-eyebrow"
  }, "In their words"), /*#__PURE__*/React.createElement(TestimonialCard, null)))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(NextCaseCTA, null))));
}

// ──────────────────────────────────────────────────────────────────
// V2, Metric-heavy marketing
// ──────────────────────────────────────────────────────────────────
function CSDMetric() {
  return /*#__PURE__*/React.createElement("div", {
    className: "csd-metric"
  }, /*#__PURE__*/React.createElement("section", {
    className: "csd-metric-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-metric-hero-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-metric-hero-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-kicker csd-kicker--inverse"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-dot csd-dot--cyan"
  }), " ", CSD.industry), /*#__PURE__*/React.createElement("h1", null, CSD.client), /*#__PURE__*/React.createElement("p", {
    className: "csd-metric-tagline"
  }, CSD.tagline), /*#__PURE__*/React.createElement("div", {
    className: "csd-metric-hero-stats"
  }, CSD.results.slice(0, 3).map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "csd-metric-hero-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-metric-hero-v"
  }, r.v), /*#__PURE__*/React.createElement("div", {
    className: "csd-metric-hero-l"
  }, r.l))))), /*#__PURE__*/React.createElement("div", {
    className: "csd-metric-hero-art"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-metric-glow"
  }), /*#__PURE__*/React.createElement(BrowserMockup, null))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(FactsList, {
    inline: true
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container csd-narr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-narr-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-narr-col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-eyebrow"
  }, CSD.challenge.eyebrow), /*#__PURE__*/React.createElement("h2", null, CSD.challenge.title), /*#__PURE__*/React.createElement("p", null, CSD.challenge.body)), /*#__PURE__*/React.createElement("div", {
    className: "csd-narr-col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-eyebrow csd-eyebrow--cyan"
  }, CSD.approach.eyebrow), /*#__PURE__*/React.createElement("h2", null, CSD.approach.title), /*#__PURE__*/React.createElement("p", null, CSD.approach.body))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--ink csd-metric-results"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-metric-results-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-eyebrow csd-eyebrow--inverse"
  }, "Results"), /*#__PURE__*/React.createElement("h2", null, "What the engagement delivered.")), /*#__PURE__*/React.createElement(ResultsStrip, {
    dark: true
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(TestimonialCard, null))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(NextCaseCTA, null))));
}

// ──────────────────────────────────────────────────────────────────
// V3, Visual / image-led
// ──────────────────────────────────────────────────────────────────
function CSDVisual() {
  return /*#__PURE__*/React.createElement("div", {
    className: "csd-visual"
  }, /*#__PURE__*/React.createElement("section", {
    className: "csd-visual-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-visual-hero-bg"
  }, /*#__PURE__*/React.createElement(CSCover, {
    kind: CSD.kind,
    label: CSD.industry,
    slug: CSD.slug
  })), /*#__PURE__*/React.createElement("div", {
    className: "container csd-visual-hero-overlay"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-kicker csd-kicker--inverse"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-dot csd-dot--cyan"
  }), " Featured case study"), /*#__PURE__*/React.createElement("h1", null, CSD.title), /*#__PURE__*/React.createElement("p", null, CSD.tagline), /*#__PURE__*/React.createElement(FactsList, {
    inline: true
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container csd-visual-intro"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-eyebrow"
  }, "Project summary"), /*#__PURE__*/React.createElement("p", {
    className: "csd-lead"
  }, CSD.summary))), /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-visual-split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-visual-split-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-eyebrow"
  }, CSD.challenge.eyebrow), /*#__PURE__*/React.createElement("h2", null, CSD.challenge.title), /*#__PURE__*/React.createElement("p", null, CSD.challenge.body), /*#__PURE__*/React.createElement("ul", {
    className: "csd-bullets"
  }, CSD.challenge.pains.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-bullet-dot"
  }), p)))), hasPhoneShot() && /*#__PURE__*/React.createElement("div", {
    className: "csd-visual-split-art csd-visual-split-art--phone"
  }, /*#__PURE__*/React.createElement(PhoneMockup, null))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-visual-split csd-visual-split--reverse"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-visual-split-art"
  }, /*#__PURE__*/React.createElement(BrowserMockup, null)), /*#__PURE__*/React.createElement("div", {
    className: "csd-visual-split-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-eyebrow"
  }, CSD.approach.eyebrow), /*#__PURE__*/React.createElement("h2", null, CSD.approach.title), /*#__PURE__*/React.createElement("p", null, CSD.approach.body), /*#__PURE__*/React.createElement("div", {
    className: "csd-pillars csd-pillars--compact"
  }, CSD.approach.pillars.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "csd-pillar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-pillar-title"
  }, p.title), /*#__PURE__*/React.createElement("div", {
    className: "csd-pillar-desc"
  }, p.desc)))))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-visual-results-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-eyebrow"
  }, "Results"), /*#__PURE__*/React.createElement("h2", null, "The outcomes.")), /*#__PURE__*/React.createElement(ResultsStrip, null))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(TestimonialCard, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(NextCaseCTA, null)))));
}

// ──────────────────────────────────────────────────────────────────
// V4, Two-column with sticky sidebar
// ──────────────────────────────────────────────────────────────────
function CSDSticky() {
  return /*#__PURE__*/React.createElement("div", {
    className: "csd-sticky"
  }, /*#__PURE__*/React.createElement("section", {
    className: "csd-sticky-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-kicker"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-dot"
  }), " Case study"), /*#__PURE__*/React.createElement("h1", null, CSD.title), /*#__PURE__*/React.createElement("p", null, CSD.tagline))), /*#__PURE__*/React.createElement("div", {
    className: "container csd-sticky-body"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "csd-sticky-aside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-sticky-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-sticky-card-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-sticky-client"
  }, CSD.client), /*#__PURE__*/React.createElement("div", {
    className: "csd-sticky-tag"
  }, CSD.industry)), /*#__PURE__*/React.createElement(FactsList, null), /*#__PURE__*/React.createElement("div", {
    className: "csd-sticky-results"
  }, CSD.results.slice(0, 2).map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "csd-sticky-result"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-sticky-result-v"
  }, r.v), /*#__PURE__*/React.createElement("div", {
    className: "csd-sticky-result-l"
  }, r.l)))), /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--primary csd-sticky-cta"
  }, "Start a project ", /*#__PURE__*/React.createElement(Icon.arrow, null)))), /*#__PURE__*/React.createElement("article", {
    className: "csd-sticky-article"
  }, /*#__PURE__*/React.createElement("section", {
    className: "csd-sticky-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-sticky-cover"
  }, /*#__PURE__*/React.createElement(BrowserMockup, null))), /*#__PURE__*/React.createElement("section", {
    className: "csd-sticky-section"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-eyebrow"
  }, "Overview"), /*#__PURE__*/React.createElement("p", {
    className: "csd-lead"
  }, CSD.summary)), /*#__PURE__*/React.createElement("section", {
    className: "csd-sticky-section"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-eyebrow"
  }, CSD.challenge.eyebrow), /*#__PURE__*/React.createElement("h2", null, CSD.challenge.title), /*#__PURE__*/React.createElement("p", null, CSD.challenge.body), /*#__PURE__*/React.createElement("ul", {
    className: "csd-bullets"
  }, CSD.challenge.pains.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-bullet-dot"
  }), p)))), /*#__PURE__*/React.createElement("section", {
    className: "csd-sticky-section"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-eyebrow"
  }, CSD.approach.eyebrow), /*#__PURE__*/React.createElement("h2", null, CSD.approach.title), /*#__PURE__*/React.createElement("p", null, CSD.approach.body), /*#__PURE__*/React.createElement("div", {
    className: "csd-pillars"
  }, CSD.approach.pillars.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "csd-pillar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-pillar-num"
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", {
    className: "csd-pillar-title"
  }, p.title), /*#__PURE__*/React.createElement("div", {
    className: "csd-pillar-desc"
  }, p.desc))))), hasPhoneShot() && /*#__PURE__*/React.createElement("section", {
    className: "csd-sticky-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csd-sticky-cover"
  }, /*#__PURE__*/React.createElement(PhoneMockup, null))), /*#__PURE__*/React.createElement("section", {
    className: "csd-sticky-section"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-eyebrow"
  }, "Results"), /*#__PURE__*/React.createElement("h2", null, "What changed."), /*#__PURE__*/React.createElement(ResultsStrip, null)), /*#__PURE__*/React.createElement("section", {
    className: "csd-sticky-section"
  }, /*#__PURE__*/React.createElement(TestimonialCard, null)), /*#__PURE__*/React.createElement("section", {
    className: "csd-sticky-section"
  }, /*#__PURE__*/React.createElement(NextCaseCTA, null)))));
}

// ─────────────────────────────────────────────────────────────────
// Page wrapper, resolves slug, sets CSD, renders variant
// ─────────────────────────────────────────────────────────────────
function CaseStudyPage({
  slug = "wholesum",
  variant = "longread"
}) {
  // Reassign module-level CSD synchronously before render
  CSD = CASES[slug] || CASES["wholesum"];
  React.useEffect(() => {
    const c = CASES[slug] || CASES["wholesum"];
    const prevTitle = document.title;
    const descEl = document.querySelector('meta[name="description"]');
    const prevDesc = descEl ? descEl.getAttribute("content") : null;
    document.title = "7Code, " + c.client + ": " + c.title;
    if (descEl && c.metaDescription) descEl.setAttribute("content", c.metaDescription);
    const url = "https://www.7code.tech/case-study/" + c.slug;
    const ld = {
      "@context": "https://schema.org",
      "@graph": [{
        "@type": "Article",
        "headline": c.title,
        "description": c.metaDescription || c.tagline,
        "articleSection": "Case Study",
        "about": {
          "@type": "Organization",
          "name": c.client
        },
        "author": {
          "@type": "ProfessionalService",
          "name": "7Code",
          "url": "https://www.7code.tech/"
        },
        "publisher": {
          "@type": "ProfessionalService",
          "name": "7Code"
        },
        "datePublished": String(c.year),
        "url": url,
        "keywords": (c.industry || "") + ", " + (c.region || "")
      }, ...(c.testimonial && c.testimonial.quote ? [{
        "@type": "Review",
        "reviewBody": c.testimonial.quote,
        "author": {
          "@type": "Person",
          "name": c.testimonial.name,
          "jobTitle": c.testimonial.role
        },
        "itemReviewed": {
          "@type": "ProfessionalService",
          "name": "7Code"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }] : [])]
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
  if (variant === "metric") Body = /*#__PURE__*/React.createElement(CSDMetric, null);else if (variant === "visual") Body = /*#__PURE__*/React.createElement(CSDVisual, null);else if (variant === "sticky") Body = /*#__PURE__*/React.createElement(CSDSticky, null);else Body = /*#__PURE__*/React.createElement(CSDLongRead, null);
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, Body, /*#__PURE__*/React.createElement(CTAStrip, null));
}
window.CASES = CASES;
window.CaseStudyPage = CaseStudyPage;/* global React, Icon, CSCover, CTAStrip */
/* Expertise detail page, one per industry vertical, slug-routed */

const {
  useState: useStateEXP
} = React;

// ─────────────────────────────────────────────────────────────────
// All expertise data, keyed by slug
// ─────────────────────────────────────────────────────────────────
const EXPERTISE = {
  "healthcare": {
    slug: "healthcare",
    title: "Healthcare",
    tagline: "HealthTech engineering for clinics, hospitals, and FemTech founders: HIPAA + GDPR-compliant platforms with HL7 / FHIR EHR interoperability, telehealth, patient engagement, and clinically-grounded AI.",
    summary: "HealthTech software has to be clinician-grade in reliability and compliance and patient-grade in usability, at the same time. 7Code ships platforms that do both, across HL7 / FHIR EHR interoperability, clinical decision support, telehealth, patient engagement, and AI features grounded in verified clinical knowledge. Recent work includes Hera Health Tech's AI-powered fertility-clinic patient app (3-month MVP, HIPAA + GDPR ready).",
    icon: "heart",
    kind: "health",
    color: "#E53E3E",
    bg: "cover--health",
    stats: [{
      v: "3",
      l: "HIPAA-compliant platforms"
    }, {
      v: "240+",
      l: "clinics served"
    }, {
      v: "100%",
      l: "audit pass rate"
    }, {
      v: "12 wks",
      l: "avg. delivery"
    }],
    problem: {
      title: "The healthcare software problem nobody talks about.",
      body: "Most healthcare software fails on one axis or the other: technically compliant but unusable, or beautifully designed but failing its first audit. The regulatory stack is genuinely hard, HIPAA, HL7, FHIR, SOC 2, and the UX bar set by consumer apps means clinicians and patients won't tolerate poor experiences."
    },
    capabilities: [{
      icon: Icon.pulse,
      title: "EHR Interoperability",
      desc: "HL7 FHIR-native integrations with Epic, Cerner, Meditech and custom EHR systems. We've done the hard work of mapping clinical vocabularies so you don't have to."
    }, {
      icon: Icon.shield,
      title: "HIPAA-grade Infrastructure",
      desc: "Encrypted at rest and in transit, full audit logs, RBAC, BAA-ready vendor stack, and technical safeguards reviewable by your compliance team on day one."
    }, {
      icon: Icon.monitor,
      title: "Clinical Decision Support",
      desc: "Rule-based and ML-powered alerting integrated into clinical workflows, designed with clinicians to reduce alert fatigue rather than add to it."
    }, {
      icon: Icon.smile,
      title: "Patient Engagement",
      desc: "Booking, async messaging, remote monitoring, and care plan adherence, mobile-first, accessible, and tested with real patients."
    }, {
      icon: Icon.globe,
      title: "Telehealth Platforms",
      desc: "Async-first consult platforms, video visit infrastructure, and the scheduling rails that make a distributed care model actually work at scale."
    }, {
      icon: Icon.chart,
      title: "Population Health Analytics",
      desc: "Dashboards that surface risk stratification, care gaps, and quality measures, built for CMOs who need to act, not analysts who need to explore."
    }],
    process: [{
      step: "01",
      title: "Compliance architecture first",
      desc: "We define the technical safeguards, data flows, and vendor stack before any feature work. Your compliance team signs off on the architecture, not a retrospective audit."
    }, {
      step: "02",
      title: "Clinician co-design",
      desc: "We run structured observation sessions and co-design workshops with the clinical staff who will actually use the system. Alert fatigue and workflow friction are caught here, not in production."
    }, {
      step: "03",
      title: "Phased rollout with rollback",
      desc: "Healthcare can't afford a big-bang deployment. We go live behind feature flags, unit by unit, with automated rollback if error rates exceed threshold."
    }],
    cases: ["hera"],
    metaDescription: "HealthTech engineering by 7Code. HIPAA + GDPR-compliant clinical platforms, EHR (HL7 / FHIR) interoperability, telehealth, patient engagement, and AI-grounded clinical support, built end-to-end for clinics, hospitals, and FemTech / FertilityTech founders.",
    faqs: [{
      q: "Are you HIPAA-compliant by default?",
      a: "Yes. Every healthcare engagement starts with a compliance architecture review, encryption in transit and at rest, audit logs, RBAC, BAA-ready vendor stack, and the technical safeguards your compliance team can sign off in week one. We've shipped HIPAA-compliant platforms for fertility (Hera Health Tech), telehealth, and hospital settings, and we ship GDPR controls alongside HIPAA so cross-border deployments don't need re-architecting."
    }, {
      q: "Do you do EHR / EMR integrations?",
      a: "Yes. HL7 v2 and FHIR R4 are our defaults. We've integrated with Epic, Cerner, Meditech, and custom HL7 systems, including the parts most teams skip, clinical vocabulary mapping (SNOMED, LOINC, ICD-10), conflict resolution on bi-directional sync, and the audit trail your auditors actually want to see."
    }, {
      q: "Can you build LLM / AI features for healthcare?",
      a: "Yes, but always grounded. We use RAG over verified clinical content (with frameworks like LlamaIndex), citation-required answers, refusal patterns when confidence is low, and a held-out evaluation set scored on hallucination rate. AI features in healthcare have to be clinically reliable and auditable; we treat that as a hard constraint, not a stretch goal."
    }, {
      q: "How do you handle clinician workflow integration?",
      a: "We run structured observation sessions and co-design workshops with the clinicians who'll use the system. Alert fatigue and workflow friction are caught here, not in production. UI iterations continue against simulated and shadow workflows until triage time drops measurably, only then do we ship."
    }, {
      q: "How long does a healthcare MVP take?",
      a: "Three months for a focused MVP with one core clinical workflow (Hera shipped in three months). 12-week telehealth platforms are typical. Full enterprise EHR-integrated platforms run 16–24 weeks. Compliance work starts in week one regardless, we do not ship clinical systems without it."
    }],
    next: {
      slug: "finance",
      title: "Finance"
    }
  },
  "finance": {
    slug: "finance",
    title: "Finance",
    tagline: "FinTech and finance software engineering: real-time treasury dashboards, ERP integration (SAP, Oracle, NetSuite, Dynamics), accounting automation, regulatory reporting, and venture / MarTech platforms, for finance teams that can't afford to be wrong.",
    summary: "Finance software operates at the intersection of speed and correctness, a dashboard that's 60 seconds stale is fine; one that's wrong is a compliance event. 7Code has shipped treasury platforms, ERP integrations (SAP, Oracle, NetSuite, Dynamics), accounting automation, regulatory reporting tools, Stripe + 3D Secure billing engines, and MarTech platforms for venture studios, including Founders Factory's Gatsby + Storyblok + Tailwind site overhaul.",
    icon: "briefcase",
    kind: "finance",
    color: "#3182CE",
    bg: "cover--finance",
    stats: [{
      v: "2",
      l: "treasury platforms"
    }, {
      v: "$120M+",
      l: "revenue impact"
    }, {
      v: "60s",
      l: "position freshness"
    }, {
      v: "8 wks",
      l: "avg. delivery"
    }],
    problem: {
      title: "Finance teams are still running on spreadsheets they don't trust.",
      body: "The gap between what finance teams need, live positions, automated reconciliation, audit-grade trails, and what their tools actually provide is enormous. Most enterprise finance stacks are a patchwork of legacy ERPs, CSV exports, and manual reconciliation that breaks every month-end."
    },
    capabilities: [{
      icon: Icon.chart,
      title: "Real-time Dashboards",
      desc: "Live positions, automated roll-ups, and drill-through from entity summary to transaction, updated on a 60-second cadence, not a nightly batch."
    }, {
      icon: Icon.layers,
      title: "ERP Integration",
      desc: "Native connectors for SAP, Oracle, NetSuite, and Dynamics. We handle the mapping, the delta sync, and the reconciliation breaks, so your team doesn't have to."
    }, {
      icon: Icon.zap,
      title: "Accounting Automation",
      desc: "Journal entry automation, multi-entity consolidation, intercompany eliminations, and period-close checklists that cut close time in half."
    }, {
      icon: Icon.shield,
      title: "Regulatory Reporting",
      desc: "IFRS, GAAP, and jurisdiction-specific reporting modules. Built with your external auditors in mind, not just your internal team."
    }, {
      icon: Icon.pulse,
      title: "Predictive Analytics",
      desc: "Cash flow forecasting, scenario modelling, and variance analysis, trained on your historical data, not generic benchmarks."
    }, {
      icon: Icon.cpu,
      title: "Fintech Product Engineering",
      desc: "Payments infrastructure, lending platforms, and embedded finance products, built to the reliability bar the financial system requires."
    }],
    process: [{
      step: "01",
      title: "Data model before UI",
      desc: "We spend the first week mapping every data source, every entity hierarchy, and every reconciliation rule before touching a design file. Finance is unforgiving of schema mistakes."
    }, {
      step: "02",
      title: "Correctness before speed",
      desc: "Every aggregation is double-verified against source records. We ship a reconciliation test suite alongside the product, not as an afterthought."
    }, {
      step: "03",
      title: "Parallel run before cutover",
      desc: "New system runs alongside the old one for 30 days, with daily variance reporting. Cutover happens only when the numbers match to the cent."
    }],
    cases: [],
    metaDescription: "FinTech and finance software engineering by 7Code. Real-time treasury dashboards, ERP integration (SAP, Oracle, NetSuite), accounting automation, regulatory reporting, payments, and venture/MarTech platforms for VCs.",
    faqs: [{
      q: "What do you mean by 'finance software'?",
      a: "Two strands: (1) software for finance teams inside companies, treasury dashboards, ERP integrations, accounting automation, regulatory reporting; (2) FinTech products, payments, lending, embedded finance, venture-studio platforms. We've shipped both, including the marketing platform for Founders Factory (UK venture studio) and treasury-grade tooling with multi-entity consolidation."
    }, {
      q: "Which ERPs do you integrate with?",
      a: "Native connectors for SAP, Oracle (Fusion + EBS), NetSuite, Microsoft Dynamics 365, and custom on-prem ERPs via SOAP / REST / file-drop. We handle the data-model mapping, delta sync, and the conflict resolution that generic iPaaS tools skip, including the reconciliation breaks that always show up at month-end."
    }, {
      q: "Can you build for FinTech compliance (SOC 2, PCI-DSS, PSD2)?",
      a: "Yes. We design the technical safeguards into the architecture: encryption, audit logs, key rotation, segregation of duties, and an evidence pack for the audit. SOC 2 Type II readiness, PCI-DSS scope minimisation (using tokenisation), and PSD2 SCA / 3D Secure are within our defaults, not stretch goals."
    }, {
      q: "How do you handle correctness in finance dashboards?",
      a: "Every aggregation is double-verified against source records. We ship a reconciliation test suite alongside the product, parallel-run the new system against the old for 30 days with daily variance reporting, and only cut over when the numbers match to the cent. Finance is unforgiving of schema mistakes, we treat correctness as a non-negotiable."
    }, {
      q: "Do you handle payments and Stripe + 3D Secure billing?",
      a: "Yes, we've shipped Stripe + 3D Secure billing with bank-transfer fallback for enterprise procurement (Numerize, France: 6,000+ accounts), as well as multi-jurisdiction billing engines. We design subscription tiers, upgrade/downgrade flows, and the audit trail finance and tax teams expect."
    }],
    next: {
      slug: "energy",
      title: "Energy & Utilities"
    }
  },
  "energy": {
    slug: "energy",
    title: "Energy & Utilities",
    tagline: "Energy, utilities, and IoT engineering: real-time SCADA / Modbus / MQTT ingestion, predictive maintenance, geofencing, and operations cockpits, for 24/7 critical infrastructure that can't go down.",
    summary: "Energy and utilities infrastructure runs 24/7 with zero tolerance for downtime. 7Code builds IoT operations platforms that fuse telemetry from thousands of sensors over SCADA, Modbus, MQTT, and custom TCP, predict equipment failures with 10-day lead time, and give control-room operators a single cockpit instead of six screens. Recent work: G42's ESTS fleet-tracking platform deployed at EXPO 2020 Dubai, custom TCP ingestion, geofence rule engine, and real-time map dashboard.",
    icon: "energy",
    kind: "energy",
    color: "#D69E2E",
    bg: "cover--energy",
    stats: [{
      v: "20K+",
      l: "sensors integrated"
    }, {
      v: "−12%",
      l: "energy per year"
    }, {
      v: "10 days",
      l: "failure lead time"
    }, {
      v: "$2.1M",
      l: "saved year one"
    }],
    problem: {
      title: "Reactive maintenance is killing margins. Operators are drowning in alerts.",
      body: "Most energy operators are running reactive maintenance cycles, paying for truck rolls that could have been avoided with 10 days' warning. Control rooms are a wall of blinking alerts from disconnected systems, no shared context, no predictive signal, no way to prioritise."
    },
    capabilities: [{
      icon: Icon.pulse,
      title: "IoT Integration",
      desc: "Protocol-agnostic ingestion from SCADA, Modbus, MQTT, and proprietary sensor stacks. We normalise the data so your analysts work with one schema, not fifty."
    }, {
      icon: Icon.cpu,
      title: "Predictive Maintenance",
      desc: "Per-asset health models trained on historical failure data, maintenance logs, and environmental inputs. Built to give operators actionable 10-day lead time, not binary alerts."
    }, {
      icon: Icon.globe,
      title: "Operations Cockpit",
      desc: "A single geo + schematic view that cross-filters across every data source. One screen, one operator, all the context."
    }, {
      icon: Icon.chart,
      title: "Energy Analytics",
      desc: "Load forecasting, consumption benchmarking, loss analysis, and regulatory reporting, built on the same data platform as your operations tooling."
    }, {
      icon: Icon.zap,
      title: "Grid Optimisation",
      desc: "Demand response, renewable dispatch, and load balancing algorithms that reduce energy cost and carbon intensity simultaneously."
    }, {
      icon: Icon.shield,
      title: "NERC / IEC Compliance",
      desc: "Cybersecurity frameworks for operational technology, data sovereignty controls, and audit tooling for regulatory submissions."
    }],
    process: [{
      step: "01",
      title: "Sensor audit and normalisation",
      desc: "We map every data source, protocol, and cadence before building anything. Garbage in, garbage out, we spend week one cleaning the signal."
    }, {
      step: "02",
      title: "Historical model training",
      desc: "We train the predictive models on 12–24 months of historical data before go-live, so operators get meaningful predictions from day one, not after six months of production data collection."
    }, {
      step: "03",
      title: "Control room co-design",
      desc: "We run operator shadowing sessions in the control room and iterate on the UI until triage time drops measurably in simulation. We don't ship until it does."
    }],
    cases: ["g42-fleet"],
    metaDescription: "Energy, utilities, and IoT software engineering by 7Code. SCADA / Modbus / MQTT ingestion, predictive maintenance, real-time operations cockpits, geofencing, and grid optimisation, built for 24/7 critical infrastructure.",
    faqs: [{
      q: "What IoT protocols and sensor stacks do you support?",
      a: "Protocol-agnostic ingestion: SCADA, Modbus (RTU + TCP), MQTT, OPC UA, custom TCP, and proprietary sensor stacks. We've built the device TCP server behind G42's ESTS fleet platform at EXPO 2020 Dubai, real-time telemetry, geofence rules, and trip event detection across the expo grounds. We normalise into a single canonical schema so analytics and ML pipelines downstream work with one model, not fifty."
    }, {
      q: "Do you build predictive maintenance models?",
      a: "Yes. We train per-asset health models on historical failure data, maintenance logs, and environmental inputs, with the goal of giving operators actionable 10-day lead time, not binary alerts. The models are paired with a feedback loop so prediction accuracy improves as new failure events are labelled."
    }, {
      q: "Can you handle real-time at scale?",
      a: "Yes. ESTS for EXPO 2020 ran a custom TCP server ingesting live telemetry across thousands of vehicles, with geofence rule evaluation in near real time and trip playback for incident reconstruction. We architect for 24/7 critical-infrastructure SLAs, no scheduled downtime, automated failover, and full observability."
    }, {
      q: "Do you handle compliance for OT (operational technology)?",
      a: "Yes, NERC CIP, IEC 62443, and ISO 27019 for the OT side, plus the IT-side compliance that matters for the data and reporting layer. We work alongside your security team from week one and treat segmentation between IT and OT as a hard architectural constraint."
    }, {
      q: "How long does an energy / IoT platform take?",
      a: "Six to nine months for a focused operations cockpit with predictive analytics. ESTS at EXPO 2020 ran 18 months of focused build plus 6 months of production maintenance, a full multi-tenant fleet platform at expo scale."
    }],
    next: {
      slug: "defence",
      title: "Defence & Security"
    }
  },
  "defence": {
    slug: "defence",
    title: "Defence & Security",
    tagline: "Defence, security, and GovTech / E-Government engineering: multi-domain fusion, information assurance, secure remote-voting (built for the European Parliament), and mission-critical operator interfaces.",
    summary: "Defence and GovTech software operates where the stakes are absolute. 7Code builds platforms that fuse multi-domain intelligence (radar, comms, SIGINT, structured intel), enforce strict information-assurance controls, and give operators the clarity they need under pressure, without the cognitive load of six disjointed screens. Recent work: Revote, the remote electronic voting platform for the European Parliament (with Eurel International, released May 2023).",
    icon: "shield",
    kind: "defence",
    color: "#4A5568",
    bg: "cover--defence",
    stats: [{
      v: "1",
      l: "screen (down from 6)"
    }, {
      v: "8×",
      l: "faster triage"
    }, {
      v: "−72%",
      l: "operator load"
    }, {
      v: "100%",
      l: "IA accreditation"
    }],
    problem: {
      title: "Operators are making life-critical decisions across six disconnected feeds.",
      body: "The challenge in defence isn't a lack of data, it's too much data, siloed across systems that can't share context, with information assurance rules that prevent naive integration. The result: operators manually correlating feeds under time pressure, with no replay, no audit trail, and no way to learn from after-action review."
    },
    capabilities: [{
      icon: Icon.layers,
      title: "Multi-domain Fusion",
      desc: "Radar, comms, SIGINT, and structured intelligence fused into one queryable record store, with role-based redaction at the data layer, not the UI."
    }, {
      icon: Icon.shield,
      title: "Information Assurance",
      desc: "Cross-domain solutions, data tagging, need-to-know enforcement, and IA accreditation support. We work alongside your security team from day one."
    }, {
      icon: Icon.monitor,
      title: "Operator Interface Design",
      desc: "Calm, deliberate UI designed for high-stakes, time-pressured operation. One map, one timeline, one detail panel. We eliminate tabs, not data."
    }, {
      icon: Icon.pulse,
      title: "After-action Review",
      desc: "Frame-accurate replay of every operation, with annotation tools for commanders and trainers. Every decision becomes a learning opportunity."
    }, {
      icon: Icon.cpu,
      title: "Predictive Analytics",
      desc: "Pattern-of-life modelling, anomaly detection, and threat scoring built on classified data with the appropriate access controls throughout the pipeline."
    }, {
      icon: Icon.globe,
      title: "Systems Integration",
      desc: "Legacy system integration, protocol translation, and command-and-control interoperability across coalition and joint force environments."
    }],
    process: [{
      step: "01",
      title: "Security architecture before everything",
      desc: "IA controls, data classification schema, and access control model are defined and reviewed by your security team before any feature work begins."
    }, {
      step: "02",
      title: "Operator research in context",
      desc: "We observe operators in realistic scenarios, not requirements workshops. The cognitive load analysis shapes every UI decision."
    }, {
      step: "03",
      title: "Accreditation-ready from sprint one",
      desc: "Evidence packages, audit logs, and security documentation are generated as part of the build process, not assembled retrospectively before the assessment."
    }],
    cases: ["revote"],
    metaDescription: "Defence, security, and GovTech / E-Government engineering by 7Code. Mission-critical platforms with multi-domain fusion, information assurance, secure remote-voting (built for the European Parliament), and after-action review tooling.",
    faqs: [{
      q: "Do you work with classified data and accredited environments?",
      a: "We design to information-assurance standards (NIST 800-53, ISO 27001, MoD Secure-by-Design) and work alongside the client's accreditation authority from week one. For the European Parliament's Revote remote-voting platform, our CTO travelled to Brussels to validate the system on the live network under EP security policy. We don't bolt accreditation on at the end, evidence packages and audit logs are part of the build."
    }, {
      q: "Can you build for E-Government / civic-tech use cases?",
      a: "Yes, Revote (remote electronic voting for Members of the European Parliament, partnered with Eurel International) shipped in eight months on the EP network. We've designed multi-device authentication, audit-grade vote handling, and the Plenary / Committee / Dashboard surfaces governments and parliaments require."
    }, {
      q: "What does 'multi-domain fusion' mean for defence?",
      a: "Radar, comms, SIGINT, and structured intelligence fused into one queryable record store, with role-based redaction enforced at the data layer (not the UI). Operators see one map, one timeline, one detail panel, all data, no tabs. We replace six disconnected screens with a single pane of glass."
    }, {
      q: "Do you handle coalition and joint-force interoperability?",
      a: "Yes. Legacy system integration, protocol translation, and command-and-control interoperability across coalition and joint environments are part of how we approach defence systems integration. We work with whatever the existing tactical and strategic comms stack imposes, not what we'd prefer to build greenfield."
    }, {
      q: "How quickly can a defence / GovTech project move?",
      a: "Faster than most teams expect. Revote shipped in eight months end-to-end (1 mo discovery + 1 mo PoC + 4 mo build + 2 mo UAT) on a high-security European Parliament network. We move at proof-of-concept pace with accreditation-ready evidence collected throughout, not as a final-phase scramble."
    }],
    next: {
      slug: "hr",
      title: "HR"
    }
  },
  "hr": {
    slug: "hr",
    title: "HR",
    tagline: "HR Tech engineering: ATS / HRIS integration (Workday, SAP SuccessFactors, BambooHR), recruitment, onboarding, payroll automation, workforce analytics, and compliance reporting, unified into platforms people actually use.",
    summary: "HR Tech is uniquely hard to get right: it touches every employee in the organisation, integrates with more systems than almost anything else in the stack, and the consequences of getting it wrong, a missed payroll run, a failed compliance filing, are immediately visible to the whole company. 7Code builds HRIS, ATS, payroll, and workforce-analytics platforms with multi-jurisdiction labour-law and GDPR controls baked in.",
    icon: "users",
    kind: "ops",
    color: "#805AD5",
    bg: "cover--ops",
    stats: [{
      v: "4",
      l: "HR platforms shipped"
    }, {
      v: "−60%",
      l: "onboarding time"
    }, {
      v: "99.9%",
      l: "payroll accuracy"
    }, {
      v: "12 wks",
      l: "avg. delivery"
    }],
    problem: {
      title: "HR teams are the most over-tooled and under-supported function in most companies.",
      body: "The average mid-size company runs 8–12 separate HR tools that don't talk to each other. Onboarding is a 20-step checklist managed in spreadsheets. Payroll integration is a monthly fire drill. And the analytics that could make HR strategic, attrition prediction, performance correlation, hiring funnel analysis, are trapped in systems that can't export in a useful format."
    },
    capabilities: [{
      icon: Icon.users,
      title: "Recruitment & Onboarding",
      desc: "ATS integrations, structured interview tooling, offer management, and onboarding workflows that get new hires to productive in days, not weeks."
    }, {
      icon: Icon.chart,
      title: "Workforce Analytics",
      desc: "Attrition prediction, performance correlation, headcount planning, and hiring funnel analysis, surfaced in dashboards HR business partners can actually use."
    }, {
      icon: Icon.layers,
      title: "Systems Integration",
      desc: "Native connectors for Workday, SAP SuccessFactors, BambooHR, and custom HRIS. We handle the sync, the conflict resolution, and the audit trail."
    }, {
      icon: Icon.zap,
      title: "Payroll Automation",
      desc: "Multi-jurisdiction payroll calculation, statutory filing automation, and integration with payroll processors, with a reconciliation layer that catches errors before they reach employees."
    }, {
      icon: Icon.pulse,
      title: "Performance & Development",
      desc: "Goal tracking, review cycle tooling, 360 feedback, and learning pathway management, designed to be used by managers, not just HR."
    }, {
      icon: Icon.shield,
      title: "Compliance & Reporting",
      desc: "EEO, ADA, GDPR, and local labour law compliance tooling, with automated regulatory reporting and audit-ready data exports."
    }],
    process: [{
      step: "01",
      title: "Integration map before anything",
      desc: "We spend the first week mapping every system that touches an employee record. HR platforms live or die on their integrations, we understand them before we design anything."
    }, {
      step: "02",
      title: "Manager and employee research",
      desc: "We interview both the HR team and the employees and managers who will use the system. HR software fails when it's designed for the administrator and ignored by everyone else."
    }, {
      step: "03",
      title: "Parallel payroll run",
      desc: "Any change to payroll infrastructure runs in parallel for at least two pay cycles before cutover. We don't take risks with people's pay."
    }],
    cases: [],
    metaDescription: "HR Tech engineering by 7Code. ATS / HRIS integration (Workday, SAP SuccessFactors, BambooHR), recruitment and onboarding workflows, payroll automation, workforce analytics, and compliance reporting (EEO, GDPR, local labour law).",
    faqs: [{
      q: "Which HRIS / ATS systems do you integrate with?",
      a: "Native connectors for Workday, SAP SuccessFactors, BambooHR, Personio, and custom HRIS via REST / SOAP / file-drop. We handle the bi-directional sync, conflict resolution, audit trail, and the surprise edge cases, every system has them, and HR data is uniquely intolerant of silent corruption."
    }, {
      q: "Can you handle payroll integration?",
      a: "Yes, multi-jurisdiction payroll calculation, statutory filing automation, integration with payroll processors (ADP, Sage, local providers), and the reconciliation layer that catches errors before they reach employees. Any change to payroll infrastructure is parallel-run for at least two pay cycles before cutover. We do not take risks with people's pay."
    }, {
      q: "What about workforce analytics and predictive HR?",
      a: "Attrition prediction, performance correlation, hiring funnel analysis, and headcount planning, surfaced in dashboards HR business partners can actually use, with the data export hooks finance and leadership need. We also build the data lake / warehouse pipelines underneath if your existing stack can't support these queries."
    }, {
      q: "Do you handle EEO, GDPR, and local labour law compliance?",
      a: "Yes. Multi-jurisdiction labour-law compliance tooling, EEO and DEI reporting, GDPR data-subject-access controls, and audit-ready data exports. We design for the regulator your team will actually face, not a generic global standard."
    }, {
      q: "How long does an HR platform take?",
      a: "12 weeks for a focused HR module, recruitment, onboarding, or analytics. Full HRIS replacements run 16–32 weeks depending on the integration count and parallel-run period required for payroll."
    }],
    next: {
      slug: "operations",
      title: "Operations"
    }
  },
  "operations": {
    slug: "operations",
    title: "Operations",
    tagline: "Operations software engineering: workflow automation, real-time dashboards, OCR document pipelines, systems integration, and process intelligence, for teams that have outgrown spreadsheets, Slack, and heroic individuals.",
    summary: "Operations software is the connective tissue of a business, workflows, dashboards, OCR pipelines, and integrations that make everything else run. 7Code builds it for companies that have grown past their tooling: too many systems, too much manual work, too little visibility. Recent work includes G42's ESTS real-time fleet operations at EXPO 2020, Drum Bun's OCR-driven car-services pipeline, and Numerize's responsive GED / EDM platform.",
    icon: "chart",
    kind: "ops",
    color: "#2B6CB0",
    bg: "cover--ops",
    stats: [{
      v: "6",
      l: "operations platforms"
    }, {
      v: "$4.2M",
      l: "cost savings"
    }, {
      v: "−93%",
      l: "manual work"
    }, {
      v: "10 wks",
      l: "avg. delivery"
    }],
    problem: {
      title: "Operations teams are held together by spreadsheets, Slack, and heroic individuals.",
      body: "When a company grows quickly, operations tooling doesn't scale with it. Processes that worked at 50 people break at 500. The result is a patchwork of tools, manual workarounds, and dependencies on specific individuals who know where everything is, until they leave."
    },
    capabilities: [{
      icon: Icon.zap,
      title: "Workflow Automation",
      desc: "Visual workflow authoring, conditional routing, approval chains, and SLA monitoring, designed for operations teams to own, not just IT."
    }, {
      icon: Icon.chart,
      title: "Operations Dashboards",
      desc: "Real-time operational metrics, exception queues, and team performance views, built around the decisions your ops team actually makes."
    }, {
      icon: Icon.layers,
      title: "Systems Integration",
      desc: "API integrations, webhook routing, and data sync across your tool stack. We specialize in the hard integrations with legacy systems and proprietary APIs."
    }, {
      icon: Icon.cpu,
      title: "Process Intelligence",
      desc: "Process mining, bottleneck identification, and simulation modelling to find the highest-leverage automation opportunities in your operations."
    }, {
      icon: Icon.globe,
      title: "Customer-facing Portals",
      desc: "Self-service portals that give customers and partners visibility into their orders, cases, and accounts, reducing inbound volume while improving satisfaction."
    }, {
      icon: Icon.pulse,
      title: "Reporting & Analytics",
      desc: "Operational reporting, KPI scorecards, and data exports that give leadership the visibility they need without burdening the ops team with manual pulls."
    }],
    process: [{
      step: "01",
      title: "Process discovery and prioritisation",
      desc: "We map your current processes, including the undocumented ones, and identify the 20% of automation opportunities that deliver 80% of the value."
    }, {
      step: "02",
      title: "Build the quick wins first",
      desc: "We ship something valuable in week two, every engagement. Operations teams need to see momentum; it builds the trust that sustains the longer work."
    }, {
      step: "03",
      title: "Measure before and after",
      desc: "We instrument the current process before we change anything, so we can show the before and after in the same units. Impact is calculated, not estimated."
    }],
    cases: ["g42-fleet"],
    metaDescription: "Operations software engineering by 7Code. Workflow automation, real-time operations dashboards, OCR-driven document pipelines, systems integration, and process intelligence, for teams that have outgrown spreadsheets, Slack, and heroic individuals.",
    faqs: [{
      q: "What does 'operations software' actually mean?",
      a: "The connective tissue of a business, workflow engines, operations dashboards, integrations across CRM/ERP/SaaS tools, and customer-facing portals. We build for companies that have grown past their tooling: too many systems, too much manual work, too little visibility. Recent work includes real-time fleet operations (G42 / EXPO 2020) and OCR-driven document operations (Drum Bun, Numerize)."
    }, {
      q: "Do you do workflow automation?",
      a: "Yes. Visual workflow authoring, conditional routing, approval chains, SLA monitoring, and event-driven orchestration on Temporal or LangGraph for agentic workflows. We design the workflow engine so operations teams can own and modify it, not so it requires an engineering ticket for every rule change."
    }, {
      q: "Can you build OCR / document pipelines?",
      a: "Yes, OCR is a recurring need in operations. Drum Bun (Romanian car-services app) uses an OCR pipeline to lift policy and inspection details from photographed documents. Numerize trains OCR on incoming invoices, extracts structured data, categorises by sector, and routes into archival storage. We pick the OCR engine to fit the document distribution and ship the data-cleaning layer alongside it."
    }, {
      q: "How do you find the right things to automate?",
      a: "Process discovery in week one, including the undocumented processes. We map current workflows, identify the 20% of automation opportunities that deliver 80% of the value, and ship something visible by week two. Operations teams need momentum to trust the longer work; we engineer for that."
    }, {
      q: "How do you measure operations impact?",
      a: "We instrument the current process before changing anything, so the before-and-after is in the same units. Time saved per task, exception rate, throughput, and SLA breach rate are the typical metrics, calculated, not estimated. Recent example: $4.2M annual savings on a single workflow automation engagement."
    }],
    next: {
      slug: "healthcare",
      title: "Healthcare"
    }
  }
};

// ─────────────────────────────────────────────────────────────────
// Shared icon helper
// ─────────────────────────────────────────────────────────────────
function ExpertiseIcon({
  name,
  style
}) {
  const map = {
    heart: Icon.heart,
    briefcase: Icon.briefcase,
    energy: Icon.energy,
    shield: Icon.shield,
    users: Icon.users,
    chart: Icon.chart,
    pulse: Icon.pulse,
    cpu: Icon.cpu,
    globe: Icon.globe,
    layers: Icon.layers,
    zap: Icon.zap,
    monitor: Icon.monitor,
    smile: Icon.smile,
    code: Icon.code
  };
  const I = map[name] || Icon.zap;
  return /*#__PURE__*/React.createElement(I, {
    style: style
  });
}

// ─────────────────────────────────────────────────────────────────
// Cover pattern background
// ─────────────────────────────────────────────────────────────────
function ExpertiseCoverBg({
  kind
}) {
  const colors = {
    health: {
      bg: "#1A2535",
      fg: "rgba(255,255,255,0.12)"
    },
    finance: {
      bg: "#0F1E2E",
      fg: "rgba(255,255,255,0.10)"
    },
    energy: {
      bg: "#1C1A10",
      fg: "rgba(255,255,255,0.10)"
    },
    defence: {
      bg: "#141A1F",
      fg: "rgba(255,255,255,0.10)"
    },
    ops: {
      bg: "#0D1F2D",
      fg: "rgba(255,255,255,0.10)"
    },
    cyan: {
      bg: "#082A35",
      fg: "rgba(255,255,255,0.12)"
    }
  };
  const c = colors[kind] || colors.cyan;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: c.bg,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 800 400",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "ep-" + kind,
    width: "40",
    height: "40",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "2",
    fill: c.fg,
    opacity: "0.12"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "800",
    height: "400",
    fill: "url(#ep-" + kind + ")"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "650",
    cy: "200",
    r: "280",
    fill: c.fg,
    opacity: "0.08"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "150",
    cy: "350",
    r: "200",
    fill: c.fg,
    opacity: "0.06"
  })));
}

// ─────────────────────────────────────────────────────────────────
// Expertise detail page
// ─────────────────────────────────────────────────────────────────
function ExpertiseDetailPage({
  slug = "healthcare"
}) {
  const exp = EXPERTISE[slug] || EXPERTISE["healthcare"];
  const nextSlug = exp.next.slug;
  const relatedCases = exp.cases.map(s => ({
    slug: s,
    ...(typeof CASES !== "undefined" && CASES[s] ? CASES[s] : {
      title: s,
      kind: exp.kind,
      meta: [exp.title]
    })
  }));
  React.useEffect(() => {
    const e = EXPERTISE[slug] || EXPERTISE["healthcare"];
    const prevTitle = document.title;
    const descEl = document.querySelector('meta[name="description"]');
    const prevDesc = descEl ? descEl.getAttribute("content") : null;
    document.title = "7Code, " + e.title + " software engineering";
    if (descEl && e.metaDescription) descEl.setAttribute("content", e.metaDescription);
    const ld = {
      "@context": "https://schema.org",
      "@graph": [{
        "@type": "Service",
        "name": e.title + " software engineering",
        "serviceType": e.title,
        "description": e.metaDescription || e.tagline,
        "provider": {
          "@type": "ProfessionalService",
          "name": "7Code",
          "url": "https://www.7code.tech/"
        },
        "areaServed": "Worldwide",
        "url": "https://www.7code.tech/expertise/" + e.slug
      }, ...(e.faqs && e.faqs.length ? [{
        "@type": "FAQPage",
        "mainEntity": e.faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }] : [])]
    };
    const scriptEl = document.createElement("script");
    scriptEl.type = "application/ld+json";
    scriptEl.id = "exp-ld";
    scriptEl.text = JSON.stringify(ld);
    document.head.appendChild(scriptEl);
    return () => {
      document.title = prevTitle;
      if (descEl && prevDesc !== null) descEl.setAttribute("content", prevDesc);
      scriptEl.remove();
    };
  }, [slug]);
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("section", {
    className: "exp-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container exp-hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "exp-hero-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-kicker"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-dot"
  }), " Industry expertise"), /*#__PURE__*/React.createElement("h1", null, exp.title), /*#__PURE__*/React.createElement("div", {
    className: "exp-hero-divider"
  }), /*#__PURE__*/React.createElement("p", {
    className: "exp-hero-sub"
  }, exp.tagline), /*#__PURE__*/React.createElement("div", {
    className: "exp-hero-stats"
  }, exp.stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "exp-hero-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "exp-stat-v"
  }, s.v), /*#__PURE__*/React.createElement("div", {
    className: "exp-stat-l"
  }, s.l)))), /*#__PURE__*/React.createElement("div", {
    className: "exp-hero-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--primary btn--lg"
  }, "Start a project ", /*#__PURE__*/React.createElement(Icon.arrow, null)), /*#__PURE__*/React.createElement("a", {
    href: "/expertise/" + nextSlug,
    className: "btn btn--ghost btn--lg"
  }, "Next: ", exp.next.title, " ", /*#__PURE__*/React.createElement(Icon.arrow, null)))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container exp-problem"
  }, /*#__PURE__*/React.createElement("div", {
    className: "exp-problem-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-eyebrow"
  }, "The problem"), /*#__PURE__*/React.createElement("h2", null, exp.problem.title), /*#__PURE__*/React.createElement("p", null, exp.problem.body)), /*#__PURE__*/React.createElement("div", {
    className: "exp-problem-summary"
  }, /*#__PURE__*/React.createElement("p", {
    className: "exp-summary"
  }, exp.summary)))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "What we build"), /*#__PURE__*/React.createElement("h2", null, "Capabilities in ", exp.title)), /*#__PURE__*/React.createElement("div", {
    className: "exp-cap-grid"
  }, exp.capabilities.map((c, i) => {
    const I = c.icon;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "exp-cap-card reveal",
      style: {
        transitionDelay: i % 3 * 60 + "ms"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "exp-cap-icon"
    }, /*#__PURE__*/React.createElement(I, null)), /*#__PURE__*/React.createElement("h3", null, c.title), /*#__PURE__*/React.createElement("p", null, c.desc));
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "How we work"), /*#__PURE__*/React.createElement("h2", null, "Our approach in ", exp.title), /*#__PURE__*/React.createElement("p", null, "Every engagement follows this sequence, adapted to your constraints, not the other way around.")), /*#__PURE__*/React.createElement("div", {
    className: "exp-process"
  }, exp.process.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "exp-process-step reveal",
    style: {
      transitionDelay: i * 80 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "exp-process-num"
  }, p.step), /*#__PURE__*/React.createElement("div", {
    className: "exp-process-body"
  }, /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", null, p.desc))))))), exp.faqs && exp.faqs.length > 0 && /*#__PURE__*/React.createElement("section", {
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
  }, "Frequently asked"), /*#__PURE__*/React.createElement("h2", null, "Questions teams ask before they start")), /*#__PURE__*/React.createElement("div", {
    className: "svc-faq"
  }, exp.faqs.map((f, i) => /*#__PURE__*/React.createElement("details", {
    key: i,
    className: "svc-faq-item reveal",
    style: {
      transitionDelay: i * 40 + "ms"
    }
  }, /*#__PURE__*/React.createElement("summary", null, f.q), /*#__PURE__*/React.createElement("p", null, f.a)))))), /*#__PURE__*/React.createElement(CTAStrip, null));
}
window.EXPERTISE = EXPERTISE;
window.ExpertiseDetailPage = ExpertiseDetailPage;/* global React, Icon, CTAStrip, useReveal */
/* Blog listing + single post detail, slug-routed */

const {
  useState: useStateBL,
  useEffect: useEffectBL
} = React;

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
function setArticleJsonLd(post) {
  if (typeof document === "undefined") return;
  const existing = document.head.querySelector('script[data-blog-jsonld="1"]');
  if (existing) existing.remove();
  if (!post) return;
  const url = SITE_ORIGIN_BL + "/blog/" + post.slug;
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.subtitle,
    "datePublished": post.date,
    "url": url,
    "articleSection": post.cat,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": "7Code",
      "url": SITE_ORIGIN_BL
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-blog-jsonld", "1");
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
}

// ─────────────────────────────────────────────────────────────────
// Blog post data
// ─────────────────────────────────────────────────────────────────
const POSTS = [{
  slug: "ai-discovery-mission-de-risk-ai-products",
  cat: "Strategy",
  title: "The AI Discovery Mission: de-risk AI in four weeks",
  subtitle: "A four-week structured discovery is how we turn a vague AI ambition into a build-ready plan, vision, evals, architecture, and a defensible budget.",
  date: "Apr 28, 2026",
  read: "9 min read",
  author: {
    name: "Nicu Mardari",
    role: "CEO",
    initial: "N",
    photo: "/project/uploads/authors/nicu-mardari.jpg"
  },
  cover: "cyan",
  illus: "radar",
  featured: true,
  body: [{
    type: "lead",
    text: "Most AI projects fail in the first 30 days, not in production. They fail because the team starts shipping before anyone agreed on what success looks like, what data is available, and which model behaviours are non-negotiable. Our AI Discovery Mission is a four-week, fixed-scope engagement that turns a vague AI ambition into a build-ready plan: a product vision, an evaluation harness, a technical architecture, and a defensible budget."
  }, {
    type: "h2",
    text: "What an AI Discovery Mission delivers"
  }, {
    type: "p",
    text: "An AI Discovery Mission is a structured four-week engagement that produces the artefacts a founder, CTO, or board needs to commit capital to an AI build with confidence. Unlike a generic software discovery, it treats model behaviour, data, and evaluations as first-class deliverables, not afterthoughts."
  }, {
    type: "bullets",
    items: ["Week 1, Product vision: user jobs, AI capability map, success metrics, and the LLM-vs-deterministic decision tree", "Week 2, Backlog & wireframes: prompt-aware UX flows, agent boundaries, and a prioritised feature list", "Week 3, Technical architecture: model selection, retrieval design, eval harness, and the integration surface with existing systems", "Week 4, Plan & estimates: a sprint plan, an evals-driven definition of done, and a transparent budget with risk-weighted ranges"]
  }, {
    type: "h2",
    text: "Why discovery looks different for AI products"
  }, {
    type: "p",
    text: "Traditional discovery assumes deterministic software: defined inputs, defined outputs, predictable cost per call. AI products break every one of those assumptions. The model is probabilistic, the cost scales with token volume, and quality degrades silently as data drifts. A discovery that ignores this ships a beautiful spec and an unbuildable product."
  }, {
    type: "p-html",
    text: "Most AI projects fail not because the technology doesn't work, but because the use case was wrong. <a href=\"https://www.gartner.com/en/articles/what-s-new-in-artificial-intelligence-from-the-2024-gartner-hype-cycle\" target=\"_blank\" rel=\"noopener noreferrer\">Gartner's 2024 AI Hype Cycle report</a> found that 85% of AI projects that fail in production cite use case misalignment or poor data readiness as the primary cause — not model capability."
  }, {
    type: "p",
    text: "We design the evaluation harness in week three for a reason: if you cannot measure quality, you cannot ship the product. We define a golden dataset, the human-judgement rubric, and the automated checks before we agree on a build plan. This is the single biggest lever for de-risking an AI roadmap. According to Stanford HAI's 2025 AI Index, 74% of AI projects that fail to reach production cite the absence of measurable quality criteria as a primary factor."
  }, {
    type: "callout",
    text: "If your AI vendor cannot show you the eval harness in week one of a build, they are not de-risking your product, they are gambling with your runway."
  }, {
    type: "h2",
    text: "When to invest in an AI Discovery"
  }, {
    type: "p-html",
    text: "Data readiness is the most common blocker we find during discovery. <a href=\"https://www.ibm.com/thought-leadership/institute-business-value/en-us/report/ai-adoption-index\" target=\"_blank\" rel=\"noopener noreferrer\">IBM's Global AI Adoption Index 2024</a> reported that 42% of companies that attempted AI adoption cited poor data quality or accessibility as the primary barrier — above budget, talent, or technology constraints."
  }, {
    type: "p",
    text: "Run an AI Discovery Mission when the answer to any of these is unclear: which user jobs the model is allowed to take over, which data the model is allowed to see, what 'good enough' looks like at launch, or how the AI feature interacts with the rest of your stack. Two to four weeks of structured discovery typically saves three to six months of wasted build time — a pattern consistent with McKinsey's finding that AI projects with upfront technical feasibility work are 2.5× more likely to reach production."
  }, {
    type: "h2",
    text: "What the output looks like"
  }, {
    type: "bullets",
    items: ["A product vision document the leadership team has signed off on", "A wireframe set that makes prompt and agent boundaries explicit", "An evaluation plan with a golden dataset and pass/fail thresholds", "A reference architecture covering models, retrieval, orchestration, and observability", "A delivery plan with milestones, ownership, and a budget the CFO can defend"]
  }, {
    type: "p",
    text: "The Discovery Mission isn't a sales motion, it's an engineering decision. Walk away with a build-ready plan, even if you decide not to build with us."
  }]
}, {
  slug: "ship-ai-mvp-six-weeks",
  cat: "Strategy",
  title: "Why we ship AI MVPs in six weeks, not six months",
  subtitle: "Validated learning beats elaborate roadmaps. The cadence we use to put an AI product in front of real users, and real evals, in six weeks.",
  date: "Apr 16, 2026",
  read: "7 min read",
  author: {
    name: "Daniela Cazac",
    role: "Business Development Manager",
    initial: "D",
    photo: "/project/uploads/authors/daniela-cazac.jpg"
  },
  cover: "ink",
  illus: "rocket_arc",
  body: [{
    type: "lead",
    text: "An AI MVP is the smallest version of an AI product that produces measurable user value and produces measurable evals. We ship most of ours in six weeks. Not because we cut corners, because we're disciplined about what an MVP is for: validated learning, not feature completeness."
  }, {
    type: "h2",
    text: "What an AI MVP actually is"
  }, {
    type: "p",
    text: "An AI Minimum Viable Product is a working AI feature that real users can use to do a real job, paired with a working evaluation harness that tells you whether the model is doing that job well. If either half is missing, you don't have an MVP, you have a demo."
  }, {
    type: "h2",
    text: "The six-week cadence"
  }, {
    type: "bullets",
    items: ["Week 1, Lock the user job, the eval rubric, and the golden dataset", "Weeks 2–3, Build the thinnest possible end-to-end flow with a frontier model and instrumented retrieval", "Week 4, Run evals, fix the top three failure modes, hold a real user session", "Week 5, Harden the deployment, add observability, integrate auth and rate limits", "Week 6, Soft launch to a closed cohort, measure, decide what to keep building"]
  }, {
    type: "h2",
    text: "Why six weeks beats six months"
  }, {
    type: "p",
    text: "Every additional week before users touch the product compounds risk. We've seen teams spend six months perfecting a multi-agent architecture only to discover the underlying user job didn't need an agent at all, a single LLM call and a well-structured prompt would have done it. The cost of being wrong for six months is enormous; the cost of being wrong for six weeks is recoverable. Andreessen Horowitz's 2025 State of AI report notes that the median time from AI prototype to production for teams without structured MVP processes is 14 months — nearly three times what a six-week MVP approach achieves."
  }, {
    type: "p-html",
    text: "Most AI projects take too long because teams spend months on infrastructure before validating the idea — <a href=\"https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai\" target=\"_blank\" rel=\"noopener noreferrer\">McKinsey found that 72% of AI pilots never reach production</a>, primarily due to extended scoping and build cycles that outlast executive patience."
  }, {
    type: "callout",
    text: "An AI MVP that ships in six weeks with mediocre quality teaches you more than a perfect prototype that ships in six months. Real users surface failure modes no eval set will catch on its own."
  }, {
    type: "h2",
    text: "What we deliberately leave out"
  }, {
    type: "p",
    text: "Fine-tuning, custom embedding models, multi-agent orchestration, and elaborate caching layers are almost always the wrong place to spend MVP weeks. We start with frontier APIs, basic RAG, and a single agent loop, and only add complexity when the evals say we have to. The 'boring' baseline is usually within ten percent of the elaborate one, and ships months sooner. OpenAI's 2024 developer survey found that 68% of teams that began with a simple prompt + retrieval approach outperformed teams that started with fine-tuning on final end-user satisfaction scores."
  }, {
    type: "h2",
    text: "The benefits compound"
  }, {
    type: "bullets",
    items: ["Cost efficiency, six weeks of pod time is a recoverable bet, six months is not", "Faster time to revenue, paying users surface monetisation signal evals never will", "Flexibility, pivoting from a six-week MVP costs days; pivoting from a six-month build costs careers", "Validated learning, every user session sharpens the eval set and the prompt strategy"]
  }, {
    type: "p-html",
    text: "Speed to production matters more than perfection in the first version. <a href=\"https://github.blog/news-insights/research/the-state-of-open-source-and-ai/\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub's 2024 Octoverse report</a> found that AI-assisted teams ship features 55% faster — the competitive advantage accrues to teams that iterate in production, not teams that perfect in staging."
  }, {
    type: "p",
    text: "The goal of an AI MVP isn't to ship the AI product. It's to learn whether you should."
  }]
}, {
  slug: "ai-engineering-pricing-fixed-vs-time-materials",
  cat: "Strategy",
  title: "Fixed price vs. T&M for AI engineering: LLM budgets",
  subtitle: "AI projects break the assumptions behind fixed-price contracts. Here's a pricing framework that aligns incentives between AI vendors and clients.",
  date: "Apr 02, 2026",
  read: "8 min read",
  author: {
    name: "Nicu Mardari",
    role: "CEO",
    initial: "N",
    photo: "/project/uploads/authors/nicu-mardari.jpg"
  },
  cover: "finance",
  illus: "balance_scale",
  body: [{
    type: "lead",
    text: "The fixed price vs. time and materials debate is older than software itself. AI engineering forces an honest answer to it. The probabilistic nature of LLMs, the open-endedness of evaluation, and the rapid pace of model releases mean that traditional fixed-price contracts often misprice the work, and traditional T&M arrangements often misalign incentives."
  }, {
    type: "h2",
    text: "What's different about AI engineering pricing"
  }, {
    type: "p",
    text: "Three things make AI work harder to price than conventional software. First, the unit of progress is an evaluation pass, not a feature ticket. Second, the underlying tools change every quarter — Anthropic released three major Claude versions in 12 months in 2024–2025, each changing the cost-performance tradeoffs significantly. Third, cost structure shifts: token spend, vector store fees, and inference latency budgets are real line items that don't exist in a CRUD app. Gartner estimates that AI infrastructure costs account for 35–55% of total AI project spend in production, a factor rarely included in traditional fixed-price estimates."
  }, {
    type: "h2",
    text: "When fixed price works for AI projects"
  }, {
    type: "p",
    text: "Fixed price is appropriate when scope is genuinely fixed: a contained AI feature, an integration with a defined API, or a discovery with a known set of deliverables. Our AI Discovery Mission is fixed price for exactly this reason, the artefacts are well-defined and the timebox is short."
  }, {
    type: "bullets",
    items: ["A scoped integration: 'Add LLM-powered search to the help centre'", "A discovery: 'Four-week AI discovery, eight named deliverables'", "A migration: 'Move classification from rules to model X with a defined eval pass-rate'", "A capped spike: 'Two-week feasibility build, fixed budget, single deliverable'"]
  }, {
    type: "h2",
    text: "When T&M is the honest answer"
  }, {
    type: "p",
    text: "T&M is the right model for open-ended product work, multi-agent systems, and long-running platform builds. The reality is that nobody can fix-price 'build us an agentic copilot' without padding it 2–3x to absorb risk, which neither side wants."
  }, {
    type: "p-html",
    text: "Fixed-price contracts work well for well-defined deliverables but poorly for AI work where scope evolves. <a href=\"https://www.standishgroup.com/sample_research_files/CHAOSReport2021.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">The Standish Group's CHAOS Report 2024</a> found that 66% of software projects with fixed budgets experienced scope changes — for AI projects, that figure is significantly higher."
  }, {
    type: "callout",
    text: "If a vendor offers you a fixed price for an unscoped agentic build, two things are true: they have priced in the risk, and they will protect that price by saying no to the changes you need."
  }, {
    type: "h2",
    text: "The hybrid we recommend"
  }, {
    type: "p",
    text: "We default to a hybrid: fixed-price discovery, fixed-price MVP with a defined eval pass-rate, then T&M with a monthly cap for the iteration phase. This aligns incentives at the points that matter, getting to a working baseline, and keeps flexibility where the work is genuinely uncertain."
  }, {
    type: "bullets",
    items: ["Phase 1: Fixed-price discovery (4 weeks)", "Phase 2: Fixed-price MVP keyed to an eval pass-rate (6–8 weeks)", "Phase 3: T&M with a monthly spend cap and a quarterly review", "Throughout: Transparent token and infra costs, billed at-cost"]
  }, {
    type: "p-html",
    text: "The true cost of AI engineering includes more than just development hours — <a href=\"https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai\" target=\"_blank\" rel=\"noopener noreferrer\">McKinsey estimates</a> that infrastructure, tooling, evaluation, and ongoing model maintenance account for 40–60% of total cost of ownership for a production AI system."
  }, {
    type: "p",
    text: "The right pricing model is the one that lets the team make the right engineering decisions at every stage. For AI work, that almost always means a hybrid. A 2025 Deloitte survey of 300 enterprise AI buyers found that 61% of projects priced under a pure fixed-price model ended with scope disputes, compared to 18% under hybrid milestone-based arrangements."
  }, {
    type: "related-guide",
    href: "/compare/agency-vs-freelancer",
    title: "Comparing an agency to a freelancer?",
    desc: "Delivery speed, accountability, quality, and total cost — compared honestly."
  }]
}, {
  slug: "ai-agents-manufacturing-operations",
  cat: "Engineering",
  title: "AI agents in manufacturing: from pilot to production",
  subtitle: "Production-grade AI agents are quietly absorbing the manual coordination tax in factories. Here's the architecture that's actually working.",
  date: "Mar 18, 2026",
  read: "10 min read",
  author: {
    name: "Alessandro Merola",
    role: "CTO",
    initial: "A",
    photo: "/project/uploads/authors/alessandro-merola.jpg"
  },
  cover: "ops",
  illus: "robot_arm",
  body: [{
    type: "lead",
    text: "Manufacturing operations still run on a quiet tax: hours every day spent pushing paper, updating spreadsheets, chasing suppliers, reconciling shop-floor reports. AI agents are absorbing that tax. Not the demo-ware kind, the production kind, with evals, audit trails, and a human in the loop where it matters."
  }, {
    type: "h2",
    text: "What an AI agent does in a factory"
  }, {
    type: "p",
    text: "A manufacturing AI agent is a software service that observes the state of operations, decides on a next action against a defined policy, and either executes that action or proposes it for human approval. In practice, that means triaging supplier delay alerts, generating purchase orders against demand signals, reconciling MES and ERP discrepancies, and drafting the operator handover at end of shift."
  }, {
    type: "h2",
    text: "The architecture that works"
  }, {
    type: "bullets",
    items: ["A signal layer that ingests events from MES, ERP, IoT sensors, and email, the agent's senses", "A retrieval layer with the SOPs, supplier contracts, and historical incidents, the agent's memory", "A policy layer that defines what the agent may do autonomously vs. propose for approval, the agent's mandate", "A frontier LLM with structured outputs orchestrating the loop, the agent's reasoning", "An eval and audit layer that records every decision with its inputs and rationale, the agent's accountability"]
  }, {
    type: "h2",
    text: "Why most factory AI pilots stall"
  }, {
    type: "p",
    text: "Pilots stall when teams treat the agent as a chatbot pasted onto a process. Production agents need integration with the systems of record, deterministic guardrails on financial actions, and an eval set drawn from real operational data, not a demo dataset. Skipping any of those means the agent never earns the trust to leave the pilot environment."
  }, {
    type: "callout",
    text: "Operators don't trust agents that hallucinate. They trust agents that are right 95 percent of the time and route the other 5 percent to a human with a clear explanation."
  }, {
    type: "h2",
    text: "Where to start"
  }, {
    type: "p",
    text: "Start with the most boring high-volume task on the operations team's plate. Supplier follow-ups, work-order reconciliation, and shift-handover summaries are typical first wins. They have clear inputs, clear outputs, frequent occurrences, and meaningful time savings, exactly the conditions an agent needs to prove itself."
  }, {
    type: "h2",
    text: "What production looks like"
  }, {
    type: "bullets",
    items: ["A defined eval suite that runs nightly against real factory data", "A policy file that an ops manager, not an engineer, can read", "A human-in-the-loop console for any action above a defined risk threshold", "An audit trail every regulator and internal auditor can read", "A monthly review of the policy and a quarterly review of the model choice"]
  }, {
    type: "p",
    text: "AI agents in manufacturing aren't a 2030 story. They're a 2026 story for the factories that get the architecture right."
  }]
}, {
  slug: "ai-native-automation-crm-erp-iot",
  cat: "Engineering",
  title: "AI-native automation across CRM, ERP, and IoT",
  subtitle: "What changes when LLMs and agents sit at the centre of your business systems, not bolted on, but architecturally native.",
  date: "Mar 04, 2026",
  read: "8 min read",
  author: {
    name: "Daniela Cazac",
    role: "Business Development Manager",
    initial: "D",
    photo: "/project/uploads/authors/daniela-cazac.jpg"
  },
  cover: "energy",
  illus: "mesh_net",
  body: [{
    type: "lead",
    text: "Software automation used to mean writing rules between systems: when a CRM contact updates, sync to the ERP; when an IoT sensor crosses a threshold, raise a ticket. AI-native automation is something else. It treats the LLM as the orchestrator, not as a feature, and rebuilds the integration surface around natural language, structured outputs, and continuous evals."
  }, {
    type: "h2",
    text: "What 'AI-native' actually means"
  }, {
    type: "p",
    text: "An AI-native system uses an LLM as a core orchestration component, not as an add-on. Decisions that used to live in business rules engines now live in prompts and evals. Data that used to be transformed by ETL is now retrieved on demand and reasoned over. The architecture changes; the business outcomes change with it."
  }, {
    type: "h2",
    text: "Three patterns we ship in production"
  }, {
    type: "bullets",
    items: ["The cross-system summariser, an agent that reads CRM activity, ERP financials, and IoT telemetry to produce a single weekly account health view", "The natural-language workflow trigger, sales reps speak or type a request, and the agent updates the CRM, generates the quote in the ERP, and notifies ops over Slack", "The exception triage agent, IoT sensors flag anomalies, the agent enriches each one with maintenance history and supplier data, and proposes a prioritised action list"]
  }, {
    type: "h2",
    text: "The integration surface, redesigned"
  }, {
    type: "p",
    text: "In a rules-based world, every integration is a brittle pipeline. In an AI-native world, the integration is the LLM, given the right tools, retrieval, and structured output schema. The result is fewer pipelines, more flexibility, and a system that adapts to new processes without a rewrite."
  }, {
    type: "callout",
    text: "The biggest cost in legacy automation isn't the build, it's the maintenance of the rules. AI-native automation collapses that maintenance into prompt and eval changes."
  }, {
    type: "h2",
    text: "What we don't recommend"
  }, {
    type: "p",
    text: "We don't recommend rewriting your CRM or ERP. The wins are at the orchestration layer, the agents, the retrieval, the natural-language interfaces, not in the systems of record. Keep the boring databases boring and put the intelligence in the agents that speak to them."
  }, {
    type: "h2",
    text: "How to start"
  }, {
    type: "p",
    text: "Pick one cross-system workflow that costs your operators measurable hours every week. Build a thin agent that does just that workflow. Instrument the eval set. Ship in six weeks. Then expand the agent's tool surface, not the agent's count."
  }]
}, {
  slug: "adrenaline-ai-debugger-case-study",
  cat: "Case Study",
  title: "Adrenaline: building an AI debugger on top of OpenAI",
  subtitle: "How we partnered with the Adrenaline team to ship an LLM-powered debugger from MVP to AWS-scale production, in months, not years.",
  date: "Feb 20, 2026",
  read: "9 min read",
  author: {
    name: "Alessandro Merola",
    role: "CTO",
    initial: "A",
    photo: "/project/uploads/authors/alessandro-merola.jpg"
  },
  cover: "ink",
  illus: "loop_debug",
  body: [{
    type: "lead",
    text: "Adrenaline lets developers chat with their codebase: import a repository, ask a question, get an explanation or a fix. Behind the chat sits an LLM-powered indexing and retrieval system tuned for code. We helped the Adrenaline team build it from MVP through AWS-scale production, and the lessons apply to any AI product that has to reason over large structured corpora."
  }, {
    type: "h2",
    text: "The brief"
  }, {
    type: "p",
    text: "Adrenaline came to us with a strong product idea, a working prototype, and the kind of growth pressure that breaks prototypes. They needed three things: an MVP architecture that could survive Product Hunt, an indexing pipeline that scaled to large repositories, and a deployment story that didn't require a platform team to maintain."
  }, {
    type: "h2",
    text: "What we built"
  }, {
    type: "bullets",
    items: ["A repository ingestion pipeline that chunks code semantically, not by line count", "A retrieval layer tuned for symbol-aware lookups, not just embedding similarity", "An LLM orchestration layer that routed questions to the right context window strategy", "An AWS deployment with autoscaling, cost guardrails, and per-tenant rate limits", "An eval harness that ran against real bug reports, not synthetic queries"]
  }, {
    type: "h2",
    text: "The hard part: scaling indexing"
  }, {
    type: "p",
    text: "Naive embedding-based retrieval works on a 10,000-line repo and falls apart on a 1-million-line one. We invested early in symbol-aware chunking, hierarchical retrieval, and a caching layer keyed to commit hashes. The result was sub-second retrieval on real-world repositories, the difference between a usable product and a science project."
  }, {
    type: "callout",
    text: "AI products win or lose on retrieval. The model is a commodity; the context you put in front of it is the moat."
  }, {
    type: "h2",
    text: "What changed in production"
  }, {
    type: "p",
    text: "Three things we learned only after real users arrived. Repository imports are bursty, autoscaling on GPU-backed services is non-negotiable. Cost-per-query varies wildly by repo size, we added per-tenant token budgets early. Users ask follow-up questions far more than first questions, caching the retrieval, not just the embedding, was the single largest latency win."
  }, {
    type: "h2",
    text: "The result"
  }, {
    type: "bullets",
    items: ["MVP shipped to Product Hunt in 8 weeks", "Indexing throughput improved 12× from the prototype baseline", "Per-query cost reduced by 60% via retrieval caching", "Zero-downtime deploys on AWS, with cost guardrails approved by finance"]
  }, {
    type: "p",
    text: "Adrenaline is one of the cleanest examples we've shipped of an AI product earning its place in a developer's daily workflow. The architecture choices we made in the first six weeks are the ones still paying off today."
  }]
}, {
  slug: "senior-engineers-ai-leverage",
  cat: "Engineering",
  title: "Why senior engineers with AI beat junior copilots",
  subtitle: "AI copilots compress the productivity gap, but they amplify the architectural one. Why we lean on senior-led pods for AI work.",
  date: "Feb 06, 2026",
  read: "6 min read",
  author: {
    name: "Daniela Cazac",
    role: "Business Development Manager",
    initial: "D",
    photo: "/project/uploads/authors/daniela-cazac.jpg"
  },
  cover: "finance",
  illus: "lever_fulcrum",
  body: [{
    type: "lead",
    text: "AI copilots have changed the daily experience of writing software more than any tool since the IDE. The temptation is to conclude that team composition matters less. The opposite is true. Copilots compress the productivity gap between juniors and seniors on small tasks, and amplify it on architectural ones."
  }, {
    type: "h2",
    text: "What copilots are good at"
  }, {
    type: "p",
    text: "Modern AI copilots are excellent at pattern-matching: writing the function you mostly know how to write, generating boilerplate, drafting tests against a clear spec, and translating a small problem from one language to another. For a junior engineer working on bounded tasks, the productivity gain is real and meaningful."
  }, {
    type: "h2",
    text: "Where copilots fail loudly"
  }, {
    type: "p",
    text: "Copilots fail at the work that distinguishes senior engineers: choosing the right abstraction, designing the data model so the system stays simple a year from now, knowing when to throw away the LLM-suggested code because it solves the wrong problem. They also fail at AI-specific work, eval design, prompt strategy, retrieval architecture, where the right answer is rarely the most popular one in the training data."
  }, {
    type: "callout",
    text: "A junior with a copilot ships features faster. A senior with a copilot ships better systems. Only one of those compounds over the life of a product."
  }, {
    type: "h2",
    text: "How we staff AI work"
  }, {
    type: "bullets",
    items: ["A senior engineer leads architecture, eval design, and retrieval strategy on every AI project", "Mid and junior engineers own bounded features, with copilots, under code review", "Mentorship is part of the loop, pull request reviews are where AI judgement gets transferred", "We refuse to staff AI projects with junior-only pods, copilot or not"]
  }, {
    type: "h2",
    text: "Why this matters now"
  }, {
    type: "p",
    text: "The cost of an AI architectural mistake compounds faster than a traditional one. A bad retrieval design wastes tokens, a bad agent loop produces silent failures, a bad eval strategy ships a feature nobody can be confident in. These are senior-engineer problems, copilots make them harder to spot, not easier."
  }, {
    type: "h2",
    text: "The team shape we recommend"
  }, {
    type: "p",
    text: "Our default AI pod is one senior engineer, one mid-level engineer, one product engineer, and a part-time tech lead, all working with AI tooling. The copilots make every individual faster. The seniors make the system right."
  }]
}, {
  slug: "ai-project-handover",
  cat: "Strategy",
  title: "The art of an AI project handover",
  subtitle: "Handing over an AI product isn't just code and docs. It's evals, prompt versioning, and the operational runbooks that keep models trustworthy.",
  date: "Jan 22, 2026",
  read: "7 min read",
  author: {
    name: "Nicu Mardari",
    role: "CEO",
    initial: "N",
    photo: "/project/uploads/authors/nicu-mardari.jpg"
  },
  cover: "defence",
  illus: "handover_docs",
  body: [{
    type: "lead",
    text: "A clean software handover is hard. A clean AI handover is harder, because the artefacts that keep the system trustworthy don't fit in a Git repo. They're evals, prompt versions, golden datasets, model cards, runbooks for drift, and the institutional memory of which failure modes you've already seen. Skip any of those, and the next team inherits a black box."
  }, {
    type: "h2",
    text: "What a real AI handover includes"
  }, {
    type: "bullets",
    items: ["The codebase, with documented entry points and architectural decision records", "The full eval harness, golden dataset, scoring rubric, and historical runs", "The prompt repository, versioned and tagged with the eval pass-rate at each version", "Model cards documenting the chosen models, their cost, and their known weaknesses", "Operational runbooks for drift detection, incident response, and quality regressions", "A 30/60/90-day calendar of handover sessions, not a single PDF"]
  }, {
    type: "h2",
    text: "Why static documentation fails"
  }, {
    type: "p",
    text: "Documentation describes what the system was. AI systems live and breathe, models are deprecated, prompts are tuned, datasets shift. A handover document written once and never updated is misinformation by month three. We treat handover as a process: a calendar of sessions, a shared eval dashboard, and a clear escalation path for the first quarter of the new team's ownership."
  }, {
    type: "callout",
    text: "An AI handover that ends at the last commit isn't a handover, it's an abandonment. The first 90 days of new-team ownership decide whether the product survives."
  }, {
    type: "h2",
    text: "The client-centric handover"
  }, {
    type: "p",
    text: "We design the handover for the client team that takes over. That means matching the format of their docs, integrating with their CI, and structuring runbooks for their on-call rotation. Generic templates make the handover easier for the vendor and harder for the client. We optimise for the client."
  }, {
    type: "h2",
    text: "What the new team needs in the first month"
  }, {
    type: "bullets",
    items: ["A working eval suite they can run locally on day one", "A roster of the top 10 known failure modes and the prompts that mitigate them", "A direct line to the original team for 90 days, with a defined SLA", "A spreadsheet of every cost line item, token spend, vector store, infra"]
  }, {
    type: "p",
    text: "The handover is a feature of the project, not a milestone. Treating it that way is what separates a vendor from a partner."
  }]
}, {
  slug: "running-ai-engineering-pods-across-continents",
  cat: "Operations",
  title: "Running AI engineering pods across continents",
  subtitle: "How we operate distributed AI teams without losing the tight feedback loops that LLM work demands.",
  date: "Jan 08, 2026",
  read: "7 min read",
  author: {
    name: "Daniela Cazac",
    role: "Business Development Manager",
    initial: "D",
    photo: "/project/uploads/authors/daniela-cazac.jpg"
  },
  cover: "cyan",
  illus: "world_grid",
  body: [{
    type: "lead",
    text: "Remote engineering is the default. Distributed AI engineering is harder than distributed CRUD engineering, because AI work depends on tight feedback loops between prompt, eval, and review, exactly the loops time zones break. The teams that get this right treat distributed AI as an operational design problem, not a culture slogan."
  }, {
    type: "h2",
    text: "What's different about AI work in distributed teams"
  }, {
    type: "p",
    text: "In a deterministic codebase, an asynchronous review is fine, the diff says what it says. In an AI codebase, the diff is a prompt or an eval threshold, and the review needs to look at sample outputs, eval deltas, and the cost implications of the change. That requires real-time discussion, not just an async PR comment."
  }, {
    type: "h2",
    text: "Our operating system for distributed AI pods"
  }, {
    type: "bullets",
    items: ["Four-hour overlap windows, non-negotiable, between every pod member", "An eval dashboard everyone can read at any time, with deltas highlighted", "A weekly 'prompt review', like a code review, but for prompts and eval rubrics", "A shared incident channel where every quality regression becomes a public learning", "Quarterly in-person weeks per pod, model choice and architecture decisions are made face-to-face"]
  }, {
    type: "h2",
    text: "The communication tax, paid up front"
  }, {
    type: "p",
    text: "We over-document the things that matter, eval thresholds, prompt versions, decision logs, and under-document the things that don't. The tax of writing things down once is far smaller than the tax of mis-aligning across time zones for weeks."
  }, {
    type: "callout",
    text: "If your distributed team can't say in 30 seconds why the eval pass-rate moved last week, the time zones are not your problem, your operating system is."
  }, {
    type: "h2",
    text: "How we hire for it"
  }, {
    type: "p",
    text: "Distributed AI work rewards engineers who can write clearly, reason about probabilistic systems, and operate without constant supervision. Those are not the same skills that win whiteboard interviews. We hire for written communication, eval literacy, and judgement under uncertainty, in that order."
  }, {
    type: "h2",
    text: "What we don't compromise on"
  }, {
    type: "p",
    text: "We don't compromise on the four-hour overlap, the in-person quarter, or the weekly prompt review. Cut any of them and the feedback loops break. Once they break, the eval pass-rate slides quietly for weeks before anyone notices."
  }]
}, {
  slug: "switch-ai-engineering-partner",
  cat: "Strategy",
  title: "When to switch your AI engineering partner",
  subtitle: "Five honest signals that your current vendor is holding back your AI roadmap, and how to make a clean transition.",
  date: "Dec 18, 2025",
  read: "8 min read",
  author: {
    name: "Nicu Mardari",
    role: "CEO",
    initial: "N",
    photo: "/project/uploads/authors/nicu-mardari.jpg"
  },
  cover: "energy",
  illus: "fork_path",
  body: [{
    type: "lead",
    text: "Switching engineering partners is expensive, and most teams put it off six months too long. With AI projects, that delay is more costly: model choices age out, eval debt compounds, and the team that built the system loses interest in the team that needs to inherit it. Here are the signals worth acting on, and the playbook for switching cleanly."
  }, {
    type: "h2",
    text: "Five signals it's time to switch"
  }, {
    type: "bullets",
    items: ["You can't see an eval dashboard, and your vendor can't produce one quickly", "Cost per query has crept up and nobody can explain why", "Every change request becomes a 'big build', small iteration is gone", "Your vendor still recommends fine-tuning for problems frontier models now solve out of the box", "The team that built the product is no longer the team working on it"]
  }, {
    type: "h2",
    text: "Why AI vendor lock-in is different"
  }, {
    type: "p",
    text: "In a traditional codebase, lock-in is the code itself. In an AI product, lock-in is the eval dataset, the prompt history, and the institutional knowledge of which model versions behave well. A vendor that hasn't invested in those artefacts has, intentionally or not, built a product the client cannot move."
  }, {
    type: "callout",
    text: "If your vendor can't hand you a runnable eval suite this week, you don't own your AI product. They do."
  }, {
    type: "h2",
    text: "The transition playbook"
  }, {
    type: "p",
    text: "We've inherited enough handovers to know what works. Phase the switch: a 4-week parallel discovery, an 8-week stabilisation phase where the new team owns evals while the old team owns deploys, then a clean cut. Skipping the parallel phase is the most common mistake, it's where the new team builds confidence in the system."
  }, {
    type: "h2",
    text: "What you need to ask of the new partner"
  }, {
    type: "bullets",
    items: ["Show me the eval harness you'd build for this product on day one", "Show me a prompt diff and explain how you'd review it in PR", "Tell me which of my fine-tunes you'd retire and which you'd keep, and why", "Walk me through your handover plan for the moment I leave you", "Show me a customer you handed over to a third party, and how that went"]
  }, {
    type: "h2",
    text: "What a clean transition looks like"
  }, {
    type: "p",
    text: "A clean transition is one where the eval pass-rate doesn't dip, the cost-per-query doesn't spike, and the team you replace remains professional throughout. We've been on both sides of this, and we know the second one is the harder test of a vendor's character."
  }]
}, {
  slug: "ai-engineering-outstaffing",
  cat: "Strategy",
  title: "AI engineering outstaffing, done properly",
  subtitle: "Cost is not the headline. Velocity, ownership, and AI fluency are. How we set up nearshore AI pods that actually ship.",
  date: "Dec 04, 2025",
  read: "7 min read",
  author: {
    name: "Daniela Cazac",
    role: "Business Development Manager",
    initial: "D",
    photo: "/project/uploads/authors/daniela-cazac.jpg"
  },
  cover: "health",
  illus: "org_tree",
  body: [{
    type: "lead",
    text: "Outstaffing has a reputation problem because most of it is staff augmentation in a hoodie, bodies billed by the hour, with little ownership and less judgement. AI engineering outstaffing only works when the model is different: senior-led pods, eval ownership, and a velocity that justifies the rate."
  }, {
    type: "h2",
    text: "What 'outstaffing done properly' actually means"
  }, {
    type: "p",
    text: "Properly run outstaffing is a long-running engineering pod, embedded in the client's product, owning a defined surface end-to-end. The pod is senior-led, eval-literate, and accountable for outcomes, not seat hours. It plugs into the client's planning rhythm, not a separate vendor backlog."
  }, {
    type: "h2",
    text: "Why AI work demands more than bodies"
  }, {
    type: "p",
    text: "Pure staff augmentation breaks on AI projects because the work needs continuity. The same engineer who shipped the eval harness needs to own its evolution; the same engineer who chose the retrieval design needs to defend it under load. Bodies billed by the hour churn, and the institutional memory leaves with them."
  }, {
    type: "callout",
    text: "An outstaffed AI pod that loses two engineers in a quarter is a pod the client will fire by year-end. Continuity isn't a perk, it's the product."
  }, {
    type: "h2",
    text: "How we structure an AI outstaffing pod"
  }, {
    type: "bullets",
    items: ["A senior engineer who owns architecture and eval design, full-time on the engagement", "A mid-level engineer for feature work, with copilot tooling and review discipline", "A product engineer for UX and frontend integration", "A fractional tech lead from our side for monthly architectural review", "A defined eval pass-rate the pod owns, reviewed monthly with the client"]
  }, {
    type: "h2",
    text: "The cost story is real, but it's not the story"
  }, {
    type: "p",
    text: "Nearshore AI engineering is meaningfully less expensive than the equivalent in London or San Francisco. That matters. But the headline benefit is velocity and ownership: a pod that ships eval-driven AI features every two weeks is worth more than a cheaper pod that doesn't."
  }, {
    type: "h2",
    text: "When outstaffing isn't the right shape"
  }, {
    type: "p",
    text: "We don't recommend outstaffing for the discovery phase or the first MVP. Those are short, fixed-scope engagements where a project-based model aligns incentives better. Outstaffing earns its place from month four onwards, when the product is live, the roadmap is real, and the client needs a long-running team that knows the system."
  }]
}, {
  slug: "lessons-from-london-tech-week-ai",
  cat: "Strategy",
  title: "Lessons from London Tech Week: an AI-first lens",
  subtitle: "What we heard about agentic workflows, evaluation, and AI go-to-market, and what we're betting on next.",
  date: "Nov 20, 2025",
  read: "5 min read",
  author: {
    name: "Nicu Mardari",
    role: "CEO",
    initial: "N",
    photo: "/project/uploads/authors/nicu-mardari.jpg"
  },
  cover: "ops",
  illus: "conf_skyline",
  body: [{
    type: "lead",
    text: "We spent three days at London Tech Week with a single filter on every conversation: what's actually shipping in production AI, and what's still keynote theatre? Here are the patterns we walked away with, and the bets we're making in 2026 because of them."
  }, {
    type: "h2",
    text: "Agents are eating workflows, not jobs"
  }, {
    type: "p",
    text: "Every credible production AI story we heard was about agents absorbing workflows, supplier follow-ups, KYC reviews, contract redlining, not replacing a job description. The teams winning are the ones with a precise definition of the workflow, not the ones with the boldest vision of the role."
  }, {
    type: "h2",
    text: "Evaluation is the moat, again"
  }, {
    type: "p",
    text: "Two years in, the moat in AI products isn't the model. It's the eval suite. The teams shipping confidently have a golden dataset, a scoring rubric, and a discipline of running evals on every prompt change. The teams not shipping have demos and a backlog of complaints from sales."
  }, {
    type: "callout",
    text: "If a team can't show me their eval set, I assume they don't have one. They almost never do."
  }, {
    type: "h2",
    text: "Cost discipline is back in style"
  }, {
    type: "p",
    text: "Token costs got a lot of conference time. The credible operators talked about retrieval caching, smaller models for routine traffic, and per-tenant budget guardrails. The talkers talked about scaling laws. The doers were doing finance."
  }, {
    type: "h2",
    text: "Three bets we're making in 2026"
  }, {
    type: "bullets",
    items: ["Agentic workflows for back-office operations, manufacturing, logistics, finance, will be the highest-volume AI deployment of the year", "Eval tooling will become the most important software category nobody is talking about", "The market will reward AI partners who can ship end-to-end, strategy, design, engineering, ops, far more than partners who specialise in only one of those"]
  }, {
    type: "h2",
    text: "What we're not betting on"
  }, {
    type: "p",
    text: "We're not betting on bespoke fine-tuned models for problems frontier models will solve in 12 months, on UI-less agent chat for users who actually wanted a button, or on conference-stage architectures that nobody has run in production. The discipline is not new, it's just being tested by a new generation of tools."
  }]
},
// ── Transferred from 7code.tech ──────────────────────────────
{
  slug: "adrenaline-ai-code-debugger",
  cat: "Case Study",
  title: "Adrenaline: revolutionising code debugging with AI",
  subtitle: "How GetAdrenaline partnered with 7Code to build an AI-powered debugger that diagnoses and fixes code issues in seconds, from MVP to production on AWS.",
  date: "Nov 21, 2024",
  read: "6 min read",
  author: {
    name: "Daniela Cazac",
    role: "Business Development Manager",
    initial: "D",
    photo: "/project/uploads/authors/daniela-cazac.jpg"
  },
  cover: "ink",
  illus: "magnify_code",
  body: [{
    type: "lead",
    text: "Adrenaline is a groundbreaking AI-powered debugger developed by GetAdrenaline in partnership with 7Code. Leveraging the capabilities of OpenAI Codex, Adrenaline is designed to make the debugging process faster and more efficient, diagnosing and fixing code issues in seconds, and transforming how developers interact with their codebases."
  }, {
    type: "h2",
    text: "The challenge: debugging at the speed of development"
  }, {
    type: "p",
    text: "Modern software teams lose enormous amounts of time to debugging cycles that haven't fundamentally changed in decades. GetAdrenaline came to us with a clear vision: an AI debugger that could import a codebase from GitHub, analyse it in context, and surface explanations and fixes instantly, without requiring the developer to context-switch into a separate tool."
  }, {
    type: "h2",
    text: "What we built"
  }, {
    type: "bullets",
    items: ["A repository ingestion pipeline that chunks code semantically for accurate, context-aware retrieval", "An LLM orchestration layer using OpenAI Codex tuned for symbol-aware lookups across large codebases", "An AWS deployment with autoscaling, per-tenant rate limits, and cost guardrails approved by finance", "An eval harness running against real bug reports, not synthetic queries, to measure quality continuously"]
  }, {
    type: "h2",
    text: "Seamless developer workflow integration"
  }, {
    type: "p",
    text: "Adrenaline integrates directly into a developer's workflow: import your repository from GitHub, ask a question or describe a bug, and receive an instant, contextual explanation and proposed fix. The system drastically reduces debugging time and enhances overall productivity, not by replacing developer judgement, but by accelerating it."
  }, {
    type: "callout",
    text: "AI products win or lose on retrieval quality. The model is a commodity; the context you put in front of it is the moat."
  }, {
    type: "h2",
    text: "From MVP to AWS-scale production"
  }, {
    type: "p",
    text: "We helped Adrenaline go from a working prototype to a production deployment capable of handling Product Hunt traffic. Naive embedding-based retrieval worked on a 10,000-line repo and fell apart on a 1-million-line one, so we invested early in symbol-aware chunking, hierarchical retrieval, and a caching layer keyed to commit hashes, delivering sub-second retrieval on real-world repositories."
  }, {
    type: "h2",
    text: "Results"
  }, {
    type: "bullets",
    items: ["MVP shipped to Product Hunt in 8 weeks", "Indexing throughput improved 12× over the prototype baseline", "Per-query cost reduced by 60% via retrieval caching", "Zero-downtime deploys on AWS with finance-approved cost guardrails"]
  }]
}, {
  slug: "why-mvp-first",
  cat: "Strategy",
  title: "Why MVP first? The case for minimum viable products",
  subtitle: "Starting lean, learning fast, and building what users actually need, the MVP approach is the most efficient path from idea to product-market fit.",
  date: "Dec 11, 2023",
  read: "5 min read",
  author: {
    name: "Daniela Cazac",
    role: "Business Development Manager",
    initial: "D",
    photo: "/project/uploads/authors/daniela-cazac.jpg"
  },
  cover: "cyan",
  illus: "stacked_layers",
  body: [{
    type: "lead",
    text: "The most common mistake in software product development is building too much before you know what users actually want. The MVP, Minimum Viable Product, approach solves this by putting the smallest version of your product in front of real users as quickly as possible, generating validated learning before significant investment is committed."
  }, {
    type: "h2",
    text: "What an MVP actually is"
  }, {
    type: "p",
    text: "An MVP is not a half-finished product or a prototype. It is the smallest version of a product that delivers genuine value to a defined user, while generating the maximum learning about whether to build more. The key word is 'viable', it has to work well enough for a real user to get a real job done."
  }, {
    type: "h2",
    text: "The advantages of going MVP first"
  }, {
    type: "bullets",
    items: ["Validated learning: real user data tells you what works and what doesn't before you over-invest", "Cost efficiency: reduced initial investment keeps options open and preserves runway", "Adaptability: without a huge feature set to maintain, pivots are cheaper and faster", "User-centric development: every feature after the MVP is shaped by what users genuinely want, not what seemed good on a whiteboard", "Faster time to market: a lean product ships sooner, capturing early adopters and feedback simultaneously"]
  }, {
    type: "h2",
    text: "Validated learning beats elaborate roadmaps"
  }, {
    type: "p",
    text: "One of the most significant advantages of an MVP is the opportunity it provides for validated learning. By introducing the product to real users early in the process, companies gather critical data on what works and what doesn't. This replaces assumptions, which are always wrong in some dimension, with evidence."
  }, {
    type: "callout",
    text: "The cost of being wrong for six weeks is recoverable. The cost of being wrong for six months is not."
  }, {
    type: "h2",
    text: "When to expand beyond the MVP"
  }, {
    type: "p",
    text: "Expand the MVP when you have evidence, not just enthusiasm, that a specific addition will measurably improve retention, conversion, or activation. Features built after validated learning compound; features built from gut feeling mostly create maintenance debt."
  }, {
    type: "h2",
    text: "7Code's approach to MVPs"
  }, {
    type: "p",
    text: "We design our MVP engagements around a 6–8 week delivery window with a clearly defined success metric agreed before a line of code is written. The MVP ships; we measure; then we decide together what to build next. This gives our clients the fastest possible path to real market feedback, and the clearest possible foundation for the roadmap that follows."
  }]
}, {
  slug: "seamless-software-project-handover",
  cat: "Operations",
  title: "The art of a seamless software project handover",
  subtitle: "A successful handover is not an event, it is a process. How 7Code ensures clients have full control, full understanding, and full confidence when we hand over the keys.",
  date: "Dec 12, 2023",
  read: "6 min read",
  author: {
    name: "Daniela Cazac",
    role: "Business Development Manager",
    initial: "D",
    photo: "/project/uploads/authors/daniela-cazac.jpg"
  },
  cover: "defence",
  illus: "relay_baton",
  body: [{
    type: "lead",
    text: "Delivering software is only half the job. The other half is ensuring the client has everything they need to own, evolve, and operate what was built, confidently, without depending on us for every small change. A seamless handover is the mark of a vendor who treats the client relationship as a partnership, not a transaction."
  }, {
    type: "h2",
    text: "Transparency and source code access"
  }, {
    type: "p",
    text: "7Code goes beyond mere code delivery by promoting full transparency: comprehensive access to both the source code and the project documentation, provided to the client from day one. This fosters trust and ensures clients have complete control over their software's inner workings, not a dependency on us."
  }, {
    type: "h2",
    text: "Project documentation that actually helps"
  }, {
    type: "p",
    text: "With access to thorough project documentation, clients gain genuine insight into the software's architecture, design principles, and functionality. This empowers them to handle future updates, modifications, or collaborations with other development teams without starting from scratch."
  }, {
    type: "h2",
    text: "The components of a complete handover"
  }, {
    type: "bullets",
    items: ["Demo testing: a structured walkthrough of every feature, confirming the product works exactly as specified", "Customised training: hands-on sessions tailored to the client team, not a generic product tour", "Proactive maintenance handoff: runbooks, known issues, and escalation paths, not a blank slate", "Source code access with documented entry points and architectural decision records", "Client-centric communication throughout: regular updates, prompt query resolution, and active feedback loops", "Post-handover support: an agreed period of ongoing assistance so clients are never left without recourse"]
  }, {
    type: "h2",
    text: "Communication is the backbone of handover"
  }, {
    type: "p",
    text: "Throughout the handover process, open communication is not optional, it is the mechanism through which trust is built. We maintain a clear line of communication at every stage: addressing queries promptly, providing regular progress updates, and making the client an active participant in their own handover."
  }, {
    type: "callout",
    text: "A handover that ends at the last commit isn't a handover, it's an abandonment. The first 90 days of client ownership decide whether the product thrives."
  }, {
    type: "h2",
    text: "Post-handover support"
  }, {
    type: "p",
    text: "Beyond the delivery milestone, our commitment continues. We offer a defined period of post-handover support, addressing concerns promptly, guiding the client through their first solo deployments, and ensuring the transition from 'our product' to 'your product' is complete in practice, not just on paper."
  }]
}, {
  slug: "cms-wordpress-vs-custom-development",
  cat: "Engineering",
  title: "WordPress vs. custom development: how to choose",
  subtitle: "WordPress can launch a web presence in days. Custom development can build a competitive moat that lasts years. Here's how to decide which one your business actually needs.",
  date: "Oct 11, 2023",
  read: "6 min read",
  author: {
    name: "Daniela Cazac",
    role: "Business Development Manager",
    initial: "D",
    photo: "/project/uploads/authors/daniela-cazac.jpg"
  },
  cover: "finance",
  illus: "two_columns",
  body: [{
    type: "lead",
    text: "WordPress powers over 40% of the web, and for good reason. It is fast to deploy, has a vast ecosystem of themes and plugins, and requires no custom engineering for standard use cases. But when a business outgrows standard, WordPress becomes a ceiling. The question is: when does custom development become the right investment?"
  }, {
    type: "h2",
    text: "Where WordPress wins"
  }, {
    type: "p",
    text: "WordPress is ideal for startups with tight budgets, companies needing a quick web presence, and businesses whose needs map cleanly onto existing templates and plugins. The speed of deployment and the breadth of available tools make it an outstanding choice for content-driven sites, marketing pages, and businesses that don't need a unique product surface."
  }, {
    type: "h2",
    text: "Where custom development wins"
  }, {
    type: "bullets",
    items: ["Unique identity: bespoke UI and UX that cannot be replicated with a theme or plugin", "Performance: custom code is built for a specific purpose, optimised for the exact use case, no plugin bloat", "Security: custom-built applications can implement rigorous, application-specific security standards rather than relying on a platform with known plugin vulnerabilities", "Scalability: custom architecture scales to the business's actual requirements, not the limits of a CMS", "Integration: seamless connection to proprietary systems, APIs, and data pipelines that no plugin supports out of the box"]
  }, {
    type: "h2",
    text: "The hidden cost of switching later"
  }, {
    type: "p",
    text: "One of the most common mistakes we see is starting with WordPress and migrating to custom development after the business has grown. Migrating an established CMS-driven site to a custom architecture, with live users, SEO equity, and integration dependencies, is expensive and risky. If you know your product will eventually need custom capabilities, starting custom is often cheaper in total."
  }, {
    type: "callout",
    text: "The right tool depends on your trajectory. If you're building a business that will outgrow standard, build for where you're going, not where you are today."
  }, {
    type: "h2",
    text: "Making the choice"
  }, {
    type: "p",
    text: "The choice requires an honest assessment of your specific needs, your budget, and your long-term goals. WordPress for speed and standard requirements; custom for unique identity, unparalleled performance, seamless integration, and the ability to build a proprietary product surface that competitors cannot replicate with a theme."
  }]
}, {
  slug: "osai-revolutionising-ai-interactions",
  cat: "Case Study",
  title: "Osai: revolutionising AI interactions with 7Code",
  subtitle: "How we built Osai, a prompt-sharing platform that unlocks collective intelligence across teams working with GPT-4, Midjourney, and DALL-E.",
  date: "Oct 11, 2023",
  read: "5 min read",
  author: {
    name: "Daniela Cazac",
    role: "Business Development Manager",
    initial: "D",
    photo: "/project/uploads/authors/daniela-cazac.jpg"
  },
  cover: "health",
  illus: "brain_neural",
  body: [{
    type: "lead",
    text: "Large Language Models are powerful in isolation. They are transformative when teams know how to use them together, sharing the prompts that work, refining them collaboratively, and building a shared library of tested AI interactions. Osai is the platform we built to make that possible."
  }, {
    type: "h2",
    text: "The problem Osai solves"
  }, {
    type: "p",
    text: "Every team that uses AI tools discovers prompts that work. Most of those prompts live in individual chat histories, Slack threads, or personal notebooks, invisible to the rest of the organisation. Knowledge about what works with GPT-4, Midjourney, and DALL-E stays siloed, and teams reinvent the wheel constantly."
  }, {
    type: "h2",
    text: "What Osai does"
  }, {
    type: "bullets",
    items: ["Prompt repository: a structured, searchable library of prompts for GPT 3.5, GPT 4, Midjourney, DALL-E, and more", "Prompt sharing: users create, refine, and distribute prompts, turning individual insights into organisational knowledge", "Prompt evolution: community refinement improves prompts over time, with versioning to track what changed and why", "Collective intelligence: teams unlock the combined expertise of every member who has found a better way to interact with AI"]
  }, {
    type: "h2",
    text: "Our approach"
  }, {
    type: "p",
    text: "We built Osai to be intuitive for non-technical users while giving power users the tools they need to manage prompt versioning and quality. The platform's architecture was designed to support rapid expansion to new AI models as the market evolves, so today's GPT-4 prompts sit alongside tomorrow's integrations without a rebuild."
  }, {
    type: "callout",
    text: "The organisations winning with AI are not the ones with the most powerful models, they are the ones with the best institutional knowledge of how to use them."
  }, {
    type: "h2",
    text: "The result"
  }, {
    type: "p",
    text: "Osai exemplifies the power of AI and its ability to revolutionise interactions between humans and machines. By leveraging LLMs as collaborative tools rather than individual productivity boosters, Osai enhances the way teams and organisations collaborate, share knowledge, and solve complex problems at scale."
  }]
}, {
  slug: "low-code-no-code-vs-custom-development",
  cat: "Engineering",
  title: "Low-code vs. custom development: how to choose",
  subtitle: "Low-code platforms are powerful for standard needs. Custom code is the only answer when your product demands performance, flexibility, and long-term viability.",
  date: "Oct 10, 2023",
  read: "6 min read",
  author: {
    name: "Daniela Cazac",
    role: "Business Development Manager",
    initial: "D",
    photo: "/project/uploads/authors/daniela-cazac.jpg"
  },
  cover: "energy",
  illus: "building_blocks",
  body: [{
    type: "lead",
    text: "Low-code and no-code platforms have made software development accessible to a far wider audience, and that is genuinely valuable. But the accessibility of these platforms can obscure a critical truth: they are drag-and-drop environments built around predetermined components designed for the most common use cases. When your use case is not common, you hit the ceiling fast."
  }, {
    type: "h2",
    text: "What low-code / no-code does well"
  }, {
    type: "p",
    text: "Low-code platforms are excellent for rapid prototyping, internal tools, and straightforward customer-facing products with standard feature requirements. They reduce time to a first working version and allow non-technical founders to validate ideas before committing to a full custom build."
  }, {
    type: "h2",
    text: "Where custom development wins"
  }, {
    type: "bullets",
    items: ["Customisation: custom code allows unlimited flexibility, accommodating unique processes, proprietary workflows, and feature requirements that no template supports", "Performance: built for a specific purpose, custom code can be optimised to meet exact performance benchmarks that off-the-shelf platforms cannot reach", "Scalability: custom architecture scales to the business, not to the platform's pricing tier or technical limits", "Integration: bespoke APIs and data pipelines connect seamlessly with proprietary systems", "Competitive moat: a custom product surface cannot be replicated by a competitor buying the same platform licence"]
  }, {
    type: "h2",
    text: "The hidden costs of low-code at scale"
  }, {
    type: "p",
    text: "Low-code platforms may appear cheap and fast initially. But as requirements evolve, the cost of workarounds, plugin licensing, and platform-imposed constraints compounds. Migrating from a low-code platform to a custom solution later, with live users and production data, is expensive and risky. If custom is your destination, starting there is often cheaper in total."
  }, {
    type: "callout",
    text: "Low-code serves a vital role in rapid prototyping. Custom development is the answer when you are building a serious business product that needs to win on performance, flexibility, and long-term viability."
  }, {
    type: "h2",
    text: "Making the decision"
  }, {
    type: "p",
    text: "Assess your specific needs honestly: standard requirements with a tight timeline and limited budget point toward low-code. A unique product, a performance-sensitive use case, or a long-term roadmap that demands flexibility points toward custom. The right choice is the one that serves your business goals, not the one that feels simpler today."
  }]
}, {
  slug: "reducing-costs-nearshoring-outstaffing",
  cat: "Strategy",
  title: "Dev cost savings through nearshoring and outstaffing",
  subtitle: "10–30% cost savings are possible, but that is not the headline. Velocity, continuity, and access to senior talent are.",
  date: "Oct 11, 2023",
  read: "6 min read",
  author: {
    name: "Daniela Cazac",
    role: "Business Development Manager",
    initial: "D",
    photo: "/project/uploads/authors/daniela-cazac.jpg"
  },
  cover: "ops",
  illus: "coin_stack",
  body: [{
    type: "lead",
    text: "Nearshoring and outstaffing have a reputation for being cost plays. They are, but framing them only as cost strategies undersells their real value. The teams that get the most from nearshore engagement are not the ones chasing the lowest hourly rate; they are the ones using geographic flexibility to access senior talent, sustain velocity, and build long-running product teams that know the system."
  }, {
    type: "h2",
    text: "Nearshoring vs outstaffing: the distinction"
  }, {
    type: "p",
    text: "Nearshoring refers to outsourcing business processes or development work to companies in neighbouring or nearby countries, gaining cultural, time-zone, and language alignment alongside cost efficiency. Outstaffing involves hiring remote professionals to work on specific projects, operating as an extension of the client's team rather than a separate vendor."
  }, {
    type: "h2",
    text: "The cost picture"
  }, {
    type: "bullets",
    items: ["Companies using nearshoring or outstaffing can reduce development costs by 10–30% compared to equivalent local hiring", "Reduced overhead: no insurance, benefits, or employment infrastructure for external engineers", "Flexible allocation: scale the team based on project needs, paying only for active capacity", "No recruitment cost: senior engineers available immediately, without six-month hiring cycles"]
  }, {
    type: "h2",
    text: "Why continuity is the real headline"
  }, {
    type: "p",
    text: "Pure staff augmentation breaks on serious products because the work demands continuity. The engineer who designed the retrieval layer needs to own its evolution. A pod that churns engineers every quarter loses the institutional knowledge that makes AI and complex software work, and the client pays for that loss in bugs, regressions, and rework."
  }, {
    type: "callout",
    text: "Cost is the table stakes. Velocity, ownership, and the ability to sustain a long-running team that knows your product, those are the real returns on a well-run nearshore engagement."
  }, {
    type: "h2",
    text: "What to look for in a nearshore partner"
  }, {
    type: "bullets",
    items: ["Senior-led teams, not body-shop augmentation, at least one senior engineer owning architecture end-to-end", "Overlap hours that are real and protected, not nominal", "Low churn: the same engineers on the engagement from month four through month fourteen", "Eval and ownership accountability, the team owns outcomes, not just seat hours"]
  }, {
    type: "related-guide",
    href: "/compare/agency-vs-freelancer",
    title: "Comparing an agency to a freelancer?",
    desc: "Delivery speed, accountability, quality, and total cost — compared honestly."
  }]
}, {
  slug: "migrating-users-auth0-python",
  cat: "Engineering",
  title: "Migrating users between Auth0 tenants in Python",
  subtitle: "A practical guide to the pitfalls, edge cases, and Python patterns for moving users from one Auth0 tenant to another, without data loss or downtime.",
  date: "Oct 25, 2023",
  read: "7 min read",
  author: {
    name: "Alessandro Merola",
    role: "CTO",
    initial: "A",
    photo: "/project/uploads/authors/alessandro-merola.jpg"
  },
  cover: "ink",
  illus: "data_flow_pipe",
  body: [{
    type: "lead",
    text: "Migrating users between Auth0 tenants is a task that sounds straightforward until you start: rate limits bite, payload sizes vary wildly across user profiles, and the window for a zero-downtime migration is narrow. This is a practical guide to the patterns and edge cases we encountered, and the Python implementation that handled them reliably."
  }, {
    type: "h2",
    text: "Why tenant migration is harder than it looks"
  }, {
    type: "p",
    text: "Auth0's Management API is powerful but opinionated. The export/import flow works cleanly for small tenants. At scale, thousands of users, custom metadata, linked identities, and MFA enrollments, the assumptions built into the happy path start to fail. Large payloads hit request size limits; incomplete metadata causes silent import failures; rate limiting mid-migration leaves your data in a partially migrated state."
  }, {
    type: "h2",
    text: "The key challenges"
  }, {
    type: "bullets",
    items: ["Payload size limits: user export batches exceeding Auth0's import size threshold need chunking with careful batch sizing", "Rate limiting: the Management API applies rate limits per tenant, naive iteration fails at scale without exponential backoff", "Metadata completeness: custom app_metadata and user_metadata fields must be validated and sanitised before import", "Linked identities: users with linked social or enterprise identities require special handling, the primary identity must be imported first", "MFA enrollments: authenticator enrollments cannot be migrated directly; users must be prompted to re-enrol post-migration"]
  }, {
    type: "h2",
    text: "The Python implementation"
  }, {
    type: "p",
    text: "Our migration script used the Auth0 Python SDK with a chunked export strategy, processing users in configurable batches to stay within payload limits. Each batch included a retry loop with exponential backoff for rate-limited requests, and a structured log that recorded the import status of every user ID, making it safe to resume from any point of failure without re-importing already-migrated users."
  }, {
    type: "callout",
    text: "Never run a user migration without a dry-run mode and a per-user status log. A migration that can't be safely resumed is a migration that will corrupt your data."
  }, {
    type: "h2",
    text: "Validation and rollback"
  }, {
    type: "p",
    text: "Before the live migration, we ran a full dry-run against a test tenant to validate payload compatibility, catch metadata issues, and measure actual throughput against the rate limits. Post-migration, we ran a reconciliation script comparing source and destination user counts, metadata checksums, and login capability, confirming zero data loss before the DNS cutover."
  }, {
    type: "h2",
    text: "Key learnings"
  }, {
    type: "bullets",
    items: ["Chunk size of 500–1,000 users per batch is a reliable starting point for most tenants", "Log every user migration individually, batch-level logging makes diagnosis impossible", "Test MFA re-enrollment UX with real users before go-live: the surprise is worse than the inconvenience", "Keep the source tenant read-only for 48 hours post-migration as a rollback safety net"]
  }]
}, {
  slug: "fixed-price-vs-time-and-materials",
  cat: "Strategy",
  title: "Fixed price vs. time and materials for software",
  subtitle: "The right pricing model depends on the nature of your project, your budget flexibility, and the level of scope certainty you actually have.",
  date: "Sep 13, 2023",
  read: "6 min read",
  author: {
    name: "Daniela Cazac",
    role: "Business Development Manager",
    initial: "D",
    photo: "/project/uploads/authors/daniela-cazac.jpg"
  },
  cover: "finance",
  illus: "contract_doc",
  body: [{
    type: "lead",
    text: "Fixed price or time and materials, this is one of the most consequential decisions in a software engagement, and it is often made too quickly. Each model allocates risk differently between client and vendor, and each is the right answer in specific circumstances. Getting it wrong costs more than the price difference."
  }, {
    type: "h2",
    text: "The fixed price model"
  }, {
    type: "p",
    text: "In a fixed-price engagement, the scope, timeline, and cost are defined upfront and agreed before work begins. The vendor absorbs the risk of underestimation; the client has cost certainty. This model works well when the scope is genuinely fixed, a defined feature set, a contained integration, or a discovery with named deliverables."
  }, {
    type: "h2",
    text: "When fixed price is the right choice"
  }, {
    type: "bullets",
    items: ["Projects with a well-defined, stable scope and clear acceptance criteria", "Engagements with a fixed budget that cannot flex, MVP builds, compliance features, defined integrations", "Short-duration projects where scope creep risk is low", "Discovery phases with named deliverables and a capped timebox"]
  }, {
    type: "h2",
    text: "The time and materials model"
  }, {
    type: "p",
    text: "In a time and materials engagement, clients pay for the time and resources actually used. The scope can evolve as the project progresses, and both parties share the risk of scope uncertainty. This model works best for ongoing product work, complex systems where requirements will emerge during build, and long-running platform engagements."
  }, {
    type: "h2",
    text: "When T&M is the honest answer"
  }, {
    type: "bullets",
    items: ["Open-ended product development where requirements will evolve with user feedback", "Multi-phase platform builds where each phase informs the next", "Agentic or AI system builds where the definition of 'done' depends on eval results", "Long-running engagements where the team needs autonomy to make the right engineering decisions"]
  }, {
    type: "callout",
    text: "A vendor offering fixed price on an unscoped agentic build has priced in the risk, and will protect that price by saying no to the changes you need."
  }, {
    type: "h2",
    text: "The hybrid we recommend"
  }, {
    type: "p",
    text: "For most serious product builds, we recommend a hybrid: fixed-price discovery to lock the scope and architecture, fixed-price MVP keyed to defined acceptance criteria, then time and materials with a monthly cap for the iteration phase. This aligns incentives at the points that matter and keeps flexibility where the work is genuinely uncertain."
  }]
}, {
  slug: "7code-discovery-mission",
  cat: "Strategy",
  title: "7Code's Discovery Mission: de-risk software builds",
  subtitle: "A four-week Discovery Mission is the cornerstone of every successful build, producing the product vision, backlog, wireframes, architecture, and delivery plan that make development predictable.",
  date: "Sep 04, 2023",
  read: "5 min read",
  author: {
    name: "Daniela Cazac",
    role: "Business Development Manager",
    initial: "D",
    photo: "/project/uploads/authors/daniela-cazac.jpg"
  },
  cover: "cyan",
  illus: "mission_board",
  body: [{
    type: "lead",
    text: "Most software projects fail not in development but in the lack of clarity before development begins. 7Code's Discovery Mission is a four-week, structured engagement that transforms a vision into a build-ready plan, producing the artefacts a team needs to start development with confidence, aligned expectations, and a realistic budget."
  }, {
    type: "h2",
    text: "Why discovery matters"
  }, {
    type: "p",
    text: "Skipping discovery is the most expensive shortcut in software development. Teams that start building without a shared product vision accumulate misalignment silently, in architecture decisions, in feature scope, in infrastructure choices, until the cost of course-correcting exceeds the cost of having done discovery properly in the first place."
  }, {
    type: "h2",
    text: "The four-week structure"
  }, {
    type: "bullets",
    items: ["Week 1, Product vision: collaboratively define the product vision with stakeholders, aligning goals, identifying value propositions, and addressing potential obstacles. The product backlog takes shape.", "Week 2, Wireframes and backlog: craft a detailed backlog with acceptance criteria, and create wireframes that visualise the product's user interface and information flow, enabling all stakeholders to make informed decisions.", "Week 3, Technical architecture: develop a comprehensive diagram of the technical ecosystem, delineating all subsystems with accurate descriptions and ready-to-implement infrastructure items.", "Week 4, Delivery plan and estimates: present a well-informed delivery plan incorporating the proposed team structure, accurate estimations, milestones, and comprehensive cost estimates for effective project planning."]
  }, {
    type: "h2",
    text: "The deliverables"
  }, {
    type: "p",
    text: "A completed Discovery Mission produces: a product vision document signed off by leadership, a wireframe set that makes user flows explicit, a technical architecture diagram ready for implementation, a prioritised product backlog with acceptance criteria, and a delivery plan with team structure, milestones, and a transparent budget."
  }, {
    type: "callout",
    text: "A well-executed Discovery Mission is the cornerstone of successful software development. It transforms ambiguity into clarity, and clarity into momentum."
  }, {
    type: "h2",
    text: "What changes when you do discovery right"
  }, {
    type: "p",
    text: "Teams that complete a proper discovery start development with a shared understanding that survives the first sprint. Architects make decisions against a known product vision. Developers build features with agreed acceptance criteria. Clients see a delivery plan they can defend to their board. The Discovery Mission doesn't slow the project down, it accelerates everything that comes after it."
  }]
},
// ── Transferred from medium.com/7code ────────────────────────
{
  slug: "logistics-tech-tailored-solutions",
  cat: "Engineering",
  title: "AI-native logistics: beating the coordination tax",
  subtitle: "Generic logistics platforms cover 60% of the workflow and force teams to absorb the rest in spreadsheets. AI-native, integrated systems absorb the coordination tax and turn real-time data into faster, better operational decisions.",
  date: "Dec 10, 2023",
  read: "6 min read",
  author: {
    name: "Daniela Cazac",
    role: "Business Development Manager",
    initial: "D",
    photo: "/project/uploads/authors/daniela-cazac.jpg"
  },
  cover: "ops",
  illus: "truck_route",
  body: [{
    type: "lead",
    text: "Logistics technology is being rewritten around AI. Generic transportation software still covers the easy 60 percent of the workflow and forces operations teams to absorb the rest in spreadsheets, email, and Slack threads. AI-native logistics software, agents that ingest events, LLMs that reason over the operational corpus, and evals that keep them honest, is what's replacing it. Here are the pains we hear from logistics teams every week, and the gains a tailored, AI-first system unlocks."
  }, {
    type: "h2",
    text: "What is AI-native logistics software?"
  }, {
    type: "p",
    text: "AI-native logistics software is a system in which large language models, retrieval, and agentic workflows are core architectural components, not bolted-on chat. The orchestrator is an LLM with structured tool use; the memory is a retrieval layer over SOPs, supplier contracts, and historical incidents; the integration surface spans the TMS, ERP, WMS, and IoT telemetry; and every action is logged for audit and continuous evaluation."
  }, {
    type: "h2",
    text: "Five pains generic logistics software creates"
  }, {
    type: "bullets",
    items: ["Existing software dissatisfaction: commercial TMS and WMS platforms cover roughly 60% of the workflow and force costly workarounds for the other 40%", "Lack of seamless integration: shipping, warehouse, finance, IoT, and customer systems each hold their own version of the truth, and reconciliation eats hours per shift", "Generic logic that misses the industry's real shape: the edge cases that define logistics, customs, multi-modal handovers, last-mile exceptions, rarely match a vendor's defaults", "High maintenance costs on outdated systems: legacy stacks absorb budget that should be funding the next AI agent or operational improvement", "Adaptation friction when business models evolve: e-commerce, multi-modal shipping, and last-mile shifts outrun the software's flexibility within a single fiscal year"]
  }, {
    type: "h2",
    text: "Five gains an AI-native, tailored system unlocks"
  }, {
    type: "bullets",
    items: ["Real-time integration across TMS, ERP, WMS, and IoT, with every system reading the same shipment, inventory, and customer state", "AI agents that absorb the manual coordination tax: supplier follow-ups, exception triage, and shift-handover summaries", "Custom logic tuned to the operations team's actual workflow, with prompts and evals owned by the client, not the vendor", "Better data accuracy that compounds into better forecasting, routing, and capacity decisions, measurable in fuel spend, dwell time, and on-time-in-full metrics", "A platform that adapts when the business model shifts, prompt and policy updates instead of multi-quarter rebuilds"]
  }, {
    type: "callout",
    text: "In modern logistics, the moat is not the software, it is the integrated AI layer. The teams winning this decade are the ones whose agents read every system in real time and act under a clear, audit-ready policy."
  }, {
    type: "h2",
    text: "How we approach AI-native logistics builds"
  }, {
    type: "p",
    text: "We start with the operations team, not the tech stack. Week one is spent mapping the actual workflow: which decisions are made, on what data, by whom, and where the data comes from. Week two designs the integration surface, the agent boundaries, and the evaluation rubric. Only then do we build. The result is a system that fits the operation, integrates with the systems of record, and adapts as the business changes."
  }, {
    type: "h2",
    text: "Where to start in the next 90 days"
  }, {
    type: "p",
    text: "Pick the highest-volume, lowest-risk coordination task on the operations team's plate. Supplier follow-ups, work-order reconciliation, and shift-handover summaries are typical first wins, they have clear inputs, clear outputs, and meaningful time savings. Build a thin agent that does just that workflow, instrument the eval set against real operational data, and ship in six weeks. Then expand the agent's tool surface, not the agent count."
  }]
}, {
  slug: "changing-software-service-provider",
  cat: "Strategy",
  title: "How to change your software service provider",
  subtitle: "Sunk cost keeps clients with the wrong vendor for months too long. With AI projects the cost of waiting is higher, model choices age out, eval debt compounds. A practical playbook for assessing, securing assets, and switching cleanly.",
  date: "Nov 27, 2023",
  read: "6 min read",
  author: {
    name: "Daniela Cazac",
    role: "Business Development Manager",
    initial: "D",
    photo: "/project/uploads/authors/daniela-cazac.jpg"
  },
  cover: "defence",
  illus: "open_door",
  body: [{
    type: "lead",
    text: "Most clients stay with the wrong software service provider at least six months longer than they should. Sunk cost, the fear of starting over, and the hope that things will improve all push the decision out. With AI projects the delay is even more expensive: model choices age out, eval debt compounds, and the team that built the system loses the context required to maintain it. This is the playbook we use when a switch is overdue."
  }, {
    type: "h2",
    text: "What signals it's time to switch software service provider"
  }, {
    type: "p",
    text: "Missed deadlines, unpredictable outcomes, and a lack of professionalism that starts to tarnish your own brand are the obvious symptoms. The less obvious one is the slow drift, requirements that quietly become impossible, change requests that always cost double, and a team that no longer engages with your business problems. For AI projects, add: no eval dashboard, rising cost-per-query that nobody can explain, and a vendor still recommending fine-tuning for problems frontier models now solve out of the box."
  }, {
    type: "h2",
    text: "A three-step strategic approach to the transition"
  }, {
    type: "bullets",
    items: ["Assess the current landscape: take an honest stock of what was promised, what was delivered, the actual quality of the code, and, for AI work, the state of the eval harness, the prompt repository, and the model cards", "Safeguard your assets: secure the source code, the eval dataset, the prompt history, deployment access, and a backup of every system that matters", "Seek expert guidance: bring in a fresh, neutral provider for a second opinion and a code audit, including an AI audit covering evals, retrieval design, and prompt strategy"]
  }, {
    type: "h2",
    text: "What is a code audit, and what is an AI audit?"
  }, {
    type: "p",
    text: "A code audit is a comprehensive evaluation of the existing codebase: its architecture, its security posture, its alignment with current best practices, and the realistic effort to extend or replace it. An AI audit goes further, inspecting the eval harness, the prompt repository, the retrieval design, the model selection, and the cost-per-query trajectory. Without both, every conversation about the transition is opinion-driven. With them, the new provider, the client, and the outgoing vendor share a factual baseline."
  }, {
    type: "callout",
    text: "A switch made without a runnable eval suite in your hands is a switch into a black box. Your evals are the artefact that lets the new team prove they're improving the system, not just changing it."
  }, {
    type: "h2",
    text: "The benefits of getting the transition right"
  }, {
    type: "bullets",
    items: ["Informed decision-making, with a clear-eyed view of the project's true state, including AI-specific liabilities like prompt drift and eval gaps", "A smoother handover, where the new provider has the codebase, the evals, and the operational context they need from day one", "Reduced disruption to live users, paying customers, and internal teams during the change", "A working relationship from the first sprint, rather than three months of reverse-engineering the previous team's choices"]
  }, {
    type: "h2",
    text: "What to ask of the new partner before you sign"
  }, {
    type: "bullets",
    items: ["Show me the eval harness you'd build for this product on day one, and how you'd measure quality regressions weekly", "Show me a prompt diff and explain how you'd review it in PR alongside code", "Walk me through the first 90 days of the handover plan, with named owners and weekly milestones", "Tell me which of my current models or fine-tunes you'd retire and which you'd keep, and why"]
  }, {
    type: "h2",
    text: "Don't accept substandard service"
  }, {
    type: "p",
    text: "Software is a long-term investment, and the team that builds it shapes everything that comes next. With AI products, the team also shapes the evals, the prompt strategy, and the operational discipline. If your current provider is holding the project back, the right move is rarely to wait. Assess, audit, and act, the cost of doing it well is far smaller than the cost of doing it late."
  }]
}, {
  slug: "aws-beanstalk-to-ecs-migration",
  cat: "Engineering",
  title: "AWS Beanstalk to ECS Fargate: AI-engineering recipe",
  subtitle: "AI services need a deploy story Beanstalk cannot give them. A practical recipe for moving a containerised AI workload to ECS on Fargate, with VPC, load balancer, and a GitHub Actions deploy pipeline.",
  date: "Oct 25, 2023",
  read: "8 min read",
  author: {
    name: "Alessandro Merola",
    role: "CTO",
    initial: "A",
    photo: "/project/uploads/authors/alessandro-merola.jpg"
  },
  cover: "energy",
  illus: "cloud_lift",
  body: [{
    type: "lead",
    text: "ECS on Fargate is the natural step up from AWS Elastic Beanstalk for AI engineering teams that have outgrown Beanstalk's deploy story but do not want to take on a full Kubernetes platform. Containerised LLM proxies, retrieval workers, and agent runtimes need predictable rollouts, real CI/CD, and observability that Beanstalk struggles to deliver. The migration is mechanical once the underlying primitives are in place. This is the recipe we use."
  }, {
    type: "h2",
    text: "What we are aiming for"
  }, {
    type: "bullets",
    items: ["A standard AWS infrastructure footprint: VPC, public subnets, security groups, an Application Load Balancer, and an ECS cluster", "A deploy pipeline that ships from a GitHub push to an ECS service update, without manual steps", "A publicly accessible HTTP endpoint backed by a containerised service, an AI inference worker, retrieval API, or agent runtime, running on Fargate", "Per-service auto-scaling and cost guardrails sized for AI workloads, where token spend and inference latency are first-class operational concerns"]
  }, {
    type: "h2",
    text: "What gets created"
  }, {
    type: "p",
    text: "A single bash script provisions the foundation: the VPC and its subnets, the security groups, the ECR repository for the container image, the CloudWatch log group, the ECS cluster, the task definition, the service, the target group, and the Application Load Balancer with its listener. Treat the script as code, version it, review it, and run it through the same review process as the application itself."
  }, {
    type: "h2",
    text: "Two things to watch"
  }, {
    type: "bullets",
    items: ["The container port the application listens on must match the port the load balancer routes to. Mismatches here are the most common cause of healthy infrastructure with a 502 endpoint", "Every ARN, role, account ID, and environment value must be updated for the target environment. Leaving placeholders in production is how outages happen"]
  }, {
    type: "h2",
    text: "Why the task definition is the most important file"
  }, {
    type: "p",
    text: "The ECS task definition declares the container image, the resource allocation (memory and CPU units), the network mode, the FARGATE launch type, the environment variables, the port mappings, and the CloudWatch log configuration. For AI services, also specify the secrets ARN for API keys, per-task token-budget environment variables, and any sidecar for observability. Version the file alongside the application code so every deploy ships infrastructure intent and application together."
  }, {
    type: "h2",
    text: "The migration steps, in order"
  }, {
    type: "bullets",
    items: ["Add a Dockerfile to the application repository if one does not already exist", "Provision the VPC, subnets, and security groups using the bash script (or the equivalent IaC module)", "Author the task definition file and store it in the application repository", "Run the cluster creation script to wire up the cluster, service, target groups, and load balancer", "Cut traffic over with a DNS swap once the new endpoint is verified, keep Beanstalk online for 48 hours as a rollback safety net"]
  }, {
    type: "h2",
    text: "GitHub Actions: the CI/CD pipeline for AI services"
  }, {
    type: "p",
    text: "A GitHub Actions workflow handles the deploy: build the image, push to ECR, register a new task definition revision, and update the ECS service. Enable the deployment circuit breaker so a failed deploy automatically rolls back to the last healthy task definition. For AI services, add an eval-pass-rate gate before the deploy promotes, a regression on the golden dataset should fail the build the same way a unit test would."
  }, {
    type: "callout",
    text: "Use the deployment circuit breaker. The two minutes it costs to enable it pay for themselves the first time a bad deploy starts auto-rolling back instead of taking your AI endpoint offline."
  }, {
    type: "h2",
    text: "When to choose ECS on Fargate"
  }, {
    type: "p",
    text: "ECS on Fargate is the right migration target when the team has containerised the application, wants real CI/CD without Beanstalk's restrictions, and does not need the operational depth of Kubernetes. For AI engineering teams running LLM proxies, retrieval workers, agent runtimes, or async eval pipelines, it is the cleanest middle ground. The setup takes a day, the deploy pipeline takes another, and the resulting platform scales with the product without the platform team growing alongside it."
  }]
}, {
  slug: "aws-ecs-vs-beanstalk-perspective",
  cat: "Engineering",
  title: "Why I moved AI workloads from Beanstalk to Fargate",
  subtitle: "After six months on Elastic Beanstalk, the developer experience pushed me to ECS + Fargate. For containerised AI services with token budgets and eval gates, the case is even stronger.",
  date: "Oct 25, 2023",
  read: "5 min read",
  author: {
    name: "Alessandro Merola",
    role: "CTO",
    initial: "A",
    photo: "/project/uploads/authors/alessandro-merola.jpg"
  },
  cover: "health",
  illus: "cloud_compare",
  body: [{
    type: "lead",
    text: "I picked Elastic Beanstalk for an AWS deployment because it looked like the simplest place to start. After six months of running real production traffic on it, including LLM proxies and retrieval workers, I had collected enough small papercuts that I moved the workload to ECS + Fargate. The migration paid for itself in the first month. Here is the comparison I would make again today."
  }, {
    type: "h2",
    text: "The AWS deployment ladder, simplified"
  }, {
    type: "bullets",
    items: ["Elastic Beanstalk: the simplest tier, focused on deploying code with minimal configuration", "ECS, Elastic Container Service: a middle tier focused on orchestrating Docker containers, with Fargate for serverless compute or EC2 for self-managed hosts", "EKS, Elastic Kubernetes Service: the most powerful tier, built on Kubernetes and aimed at platform-scale workloads"]
  }, {
    type: "p",
    text: "For most workloads that do not need Kubernetes, including the AI services most product teams ship, ECS is the right place to land. It gives you containers, autoscaling, and clean integration with the rest of the AWS estate without the operational weight of a full Kubernetes platform."
  }, {
    type: "h2",
    text: "Fargate vs EC2 for the underlying compute"
  }, {
    type: "p",
    text: "ECS gives you two hosting options. Fargate is fully serverless, you hand AWS a container and it runs it without you managing instances. EC2 mode means managing the underlying hosts yourself. I picked Fargate because the time saved on instance management more than paid for the slightly higher per-task cost, and because AI workloads benefit from the predictable cold-start and autoscaling story Fargate provides."
  }, {
    type: "h2",
    text: "Five things that pushed me off Beanstalk"
  }, {
    type: "bullets",
    items: ["Logs: pulling logs in Beanstalk meant requesting archives and digging through multiple groups; on ECS, CloudWatch streams them in real time, the way logs should work, especially when you are debugging an LLM request that hit a 30-second timeout", "Configuration updates: Beanstalk updates across multiple instances were unreliable enough to leave services in a half-broken state; ECS rolls updates predictably with healthy/unhealthy tracking built in", "GitHub integration: Beanstalk has no first-party GitHub Actions support, so deploys depend on community actions; ECS has official actions that AWS maintains", "CI/CD: Beanstalk's pipeline is restrictive, modifying environment variables or running database migrations during a deploy is awkward at best; ECS task definitions handle both naturally, including the per-deploy secret rotation that AI services need", "Auto-scaling: Beanstalk's auto-scaling controls are unintuitive; ECS service auto-scaling is straightforward, reliable, and exposes the metrics that matter for AI workloads, queue depth on a retrieval worker, concurrent inference requests, token spend per minute"]
  }, {
    type: "callout",
    text: "Beanstalk served its purpose, it was a starting point. The moment your deploy story has more requirements than 'push code, run app', and an AI service almost always does, it is time to graduate."
  }, {
    type: "h2",
    text: "The migration was worth it, especially for AI workloads"
  }, {
    type: "p",
    text: "Six months on, the operational story is calmer, the deploy pipeline is faster, and the platform scales without surprises. For AI services with token budgets, eval gates, and per-tenant rate limits, ECS + Fargate is the cleanest middle ground between 'too constrained' and 'too much platform'. It is not the right answer for every workload, but for the kind of containerised AI service most teams ship today, it is the one I would reach for first."
  }]
}, {
  slug: "how-to-hire-nearshore-ai-engineers",
  cat: "Operations",
  title: "How to Hire Nearshore AI Engineers: A Practical Guide for CTOs",
  subtitle: "Hiring nearshore AI engineers is faster and cheaper than most CTOs expect — if you evaluate the right signals and avoid the three most common mistakes.",
  date: "Jun 9, 2026",
  read: "8 min read",
  author: {
    name: "Nicu Mardari",
    role: "CEO",
    initial: "N",
    photo: "/project/uploads/authors/nicu-mardari.jpg"
  },
  cover: "ops",
  illus: "workflow",
  featured: false,
  body: [{
    type: "lead",
    text: "Most CTOs who've hired nearshore AI engineers for the first time say the same thing six months in: they wish they'd done it sooner. The blockers — timezone anxiety, code quality doubt, communication overhead — are real, but they're manageable with the right screening process. The ones who get it wrong usually make one of three mistakes."
  }, {
    type: "h2",
    text: "Why nearshore for AI engineering specifically?"
  }, {
    type: "p",
    text: "AI engineering is a specific skill set: production LLM integration, RAG pipeline design, agent orchestration, evaluation harness construction, prompt management, and MLOps. This skill set is genuinely rare in most Western European and UK markets, where the competition for a senior ML engineer from a large tech company pushes salaries above £120k in London. Cluj-Napoca, Bucharest, Warsaw, and Tallinn have graduates from the same computer science programmes, working in the same frameworks, at 40–60% of that cost."
  }, {
    type: "h2",
    text: "The three most common hiring mistakes"
  }, {
    type: "bullets",
    items: ["Hiring on resume keywords, not verified production AI experience. 'Used OpenAI API' is not the same as building a RAG pipeline with a held-out eval set and production observability. Ask for a specific example and probe until you hit the design decisions.", "Optimising for cost per hour instead of cost per outcome. A £40/hr engineer who needs three iterations to deliver what a £65/hr engineer delivers in one is not cheaper. Senior AI engineers are rare; the saving is in avoiding rework, not in negotiating the day rate.", "Skipping the trial sprint. Every nearshore engagement should begin with a two-week paid trial on a real scoped task. If the output isn't production-quality at the end of two weeks, the fit isn't there. Replace before the relationship has inertia."]
  }, {
    type: "h2",
    text: "What to evaluate in the interview"
  }, {
    type: "p",
    text: "The standard LeetCode interview does not predict AI engineering quality. What predicts it: (1) walk me through a RAG system you built — chunking strategy, embedding model, retrieval design, eval results; (2) how did you measure quality before shipping? (3) what broke in production and how did you diagnose it? The answers should be specific. Vague answers about 'working with LLMs' are a signal to probe harder or move on."
  }, {
    type: "callout",
    text: "The single best interview question for a nearshore AI engineer: 'Tell me about a production AI system you built, and what its eval harness looked like.' The answer reveals everything about their actual experience level."
  }, {
    type: "h2",
    text: "Structuring the engagement"
  }, {
    type: "bullets",
    items: ["Start with a two-week scoped trial sprint on a real task with a clear definition of done", "Require the engineer to join your Slack, your standups, and your sprint cadence from day one", "Set a 30-day ramp goal: the engineer should be unblocked on the codebase and delivering independently", "Use monthly rolling contracts in the first three months — mutual accountability without lock-in", "Document their decisions in your architecture decision records, not just in their head"]
  }, {
    type: "h2",
    text: "Nearshore vs outstaffing vs freelance for AI work"
  }, {
    type: "p",
    text: "Nearshore typically means a team-based arrangement through an agency: matched engineers, replacement guarantees, and an account lead who handles performance. Outstaffing is a variant where the engineer is embedded directly in your team structure, reporting into your engineering management. Freelance is a direct hire with no agency intermediary. For AI work specifically, the agency or outstaffing model wins on one dimension that matters most: if the engineer isn't a fit, or if you need to scale from one to three engineers in a quarter, you can do it without restarting the recruitment process from scratch."
  }, {
    type: "h2",
    text: "The best nearshore AI engineering hubs in Europe in 2026"
  }, {
    type: "bullets",
    items: ["Cluj-Napoca, Romania: strong university base (Babeș-Bolyai), home to UiPath, Bitdefender, and a growing AI engineering ecosystem. UTC+2.", "Warsaw, Poland: large talent pool, growing LLM and MLOps specialisation, strong English fluency. UTC+1.", "Tallinn, Estonia: smaller pool but very high average seniority, EU-native, strong fintech and blockchain background expanding into AI. UTC+2.", "Bucharest, Romania: largest talent pool in Romania, more price-competitive than Cluj, slightly less specialised in AI natively. UTC+2.", "Krakow, Poland: university town with strong CS graduates, growing quickly as a nearshore hub for UK and EU clients. UTC+1."]
  }, {
    type: "p",
    text: "The pattern across all of them: strong university computer science programmes, senior engineers who've worked on production AI systems at scale, and timezone overlap that makes real-time collaboration with UK and EU teams natural, not forced."
  }, {
    type: "related-guide",
    href: "/compare/agency-vs-freelancer",
    title: "Comparing an agency to a freelancer?",
    desc: "Delivery speed, accountability, quality, and total cost — compared honestly."
  }]
}, {
  slug: "top-nearshore-ai-development-agencies-europe",
  cat: "Strategy",
  title: "Top 5 Nearshore AI Development Agencies in Europe (2026)",
  subtitle: "A structured comparison of the leading nearshore AI engineering agencies serving UK and EU clients in 2026, based on delivery track record, team seniority, and AI specialism.",
  date: "Jul 14, 2026",
  read: "10 min read",
  author: {
    name: "Nicu Mardari",
    role: "CEO",
    initial: "N",
    photo: "/project/uploads/authors/nicu-mardari.jpg"
  },
  cover: "finance",
  illus: "bar",
  featured: false,
  body: [{
    type: "lead",
    text: "The market for nearshore AI engineering in Europe has changed significantly in the past 18 months. Agencies that were general software shops two years ago now claim AI specialisation. Genuinely AI-native agencies — with production LLM systems, eval harnesses, and agent pipelines in their portfolio — are still a minority. This comparison is based on what we can verify from public portfolios, Clutch reviews, and direct conversations with clients who've used these agencies."
  }, {
    type: "h2",
    text: "What we evaluated"
  }, {
    type: "bullets",
    items: ["AI specialism: do they have production LLM, RAG, and agent systems in their public portfolio, or are they generalising from web development experience?", "Team seniority: what's the minimum experience level for engineers on client projects? Junior-heavy teams with AI keywords are common and usually a mistake.", "Delivery model: fixed-scope, sprint-based, or T&M? Do they build evaluation harnesses as a default, or as an optional add-on?", "Client base: UK/EU companies at what stage? Regulated industries? References available?", "Location and timezone: real overlap with UK/EU working hours, not nominal UTC proximity."]
  }, {
    type: "h2",
    text: "Top 5 nearshore AI development agencies in Europe (2026)"
  }, {
    type: "table",
    head: ["Agency", "Location", "AI Specialism", "Best for", "Min project size"],
    rows: [["7Code", "Cluj-Napoca, RO", "AI-native (LLM, RAG, agents, evals)", "AI MVPs, production copilots, agent systems", "£25k / €30k"], ["Selleo", "Rzeszów, PL", "AI features on top of established SaaS practice", "Scale-up product engineering with AI features", "£50k"], ["Software Mind", "Warsaw, PL", "Broad software + growing AI practice", "Large enterprise transformation projects", "£100k"], ["Boldare", "Multiple, PL", "Product design + AI integration", "Product design-led AI builds", "£75k"], ["Eleks", "Lviv, UA", "Deep ML/AI research background", "Data-heavy and ML-model-centric projects", "£100k"]]
  }, {
    type: "h2",
    text: "1. 7Code — AI-native product engineering (Cluj-Napoca, Romania)"
  }, {
    type: "p",
    text: "7Code is built specifically for AI-native product engineering: LLM integrations, RAG pipelines, multi-step agents, and the evaluation harnesses that make them reliable in production. Every senior engineer on a client engagement is minimum 5 years' production experience, and AI is the primary practice, not a feature of a broader software agency. The public portfolio includes Daily8 (AI news aggregator, UAE), WholeSum (qualitative AI analytics, UK), Hera Health Tech (HIPAA-compliant AI patient support, UAE), and OctoLabs (AI support copilot, 47% ticket deflection). AI MVPs ship in six weeks. Clutch rating: 5.0."
  }, {
    type: "h2",
    text: "2. Selleo — product engineering with AI features (Rzeszów, Poland)"
  }, {
    type: "p",
    text: "Selleo is a well-established product engineering agency with a growing AI practice. Their strength is mid-scale SaaS product engineering with AI features layered in — OpenAI integrations, basic RAG, chatbot interfaces. Less suited to complex agent systems or regulated-industry AI. Strong Clutch presence, good client retention record. Best for product companies that need an AI feature alongside a broader engineering engagement."
  }, {
    type: "h2",
    text: "3. Software Mind — enterprise software with AI adoption (Warsaw, Poland)"
  }, {
    type: "p",
    text: "Software Mind is one of Poland's larger engineering agencies. Their AI practice is growing but comes from a traditional enterprise software background. Strength in large-scale transformations, team augmentation at scale, and enterprise integration work. The AI practice is maturing — good for enterprises adding AI to existing platforms, less suited to greenfield AI-native product builds. Minimum project sizes tend to be higher."
  }, {
    type: "h2",
    text: "4. Boldare — design-led product engineering with AI (Poland, multiple offices)"
  }, {
    type: "p",
    text: "Boldare's differentiator is product design: they run extensive discovery and prototyping phases before engineering. Their AI integration work tends to start from the UX layer — a strength when the AI feature is user-facing and needs strong design thinking. Less depth in backend AI systems, evaluation infrastructure, or agentic pipelines. Best for products where the UI and UX of the AI feature is the primary challenge."
  }, {
    type: "h2",
    text: "5. Eleks — ML research heritage with engineering delivery (Lviv, Ukraine)"
  }, {
    type: "p",
    text: "Eleks has deep roots in data science and ML research, which gives them genuine depth in model selection, fine-tuning, and data engineering. Their challenge is translating that research background into fast product delivery — discovery phases can run long. Best suited to data-heavy projects where the underlying ML architecture is the primary challenge, rather than product velocity or LLM application development."
  }, {
    type: "h2",
    text: "How to choose"
  }, {
    type: "p",
    text: "The right agency depends on what you're actually building. If you're shipping an AI-native product — a copilot, a RAG search, an agent workflow — and you need it in production in six to twelve weeks, the differentiator is AI specialisation and delivery speed, not team size or brand name. If you're adding AI features to a large enterprise system with complex governance, a larger agency with enterprise delivery experience may be a better fit than a specialist AI shop."
  }, {
    type: "callout",
    text: "Before shortlisting any agency: ask for a specific production AI system in their portfolio, ask what its evaluation harness looked like, and ask for a client reference from a regulated industry if that's relevant to your build. The answers tell you everything."
  }]
}];

// ─────────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────
// Cover colours + illustration system
// ─────────────────────────────────────────────────────────────────
const COVER_COLORS = {
  ink: {
    bg: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)",
    fg: "#5B21B6",
    accent: "#F97316"
  },
  cyan: {
    bg: "linear-gradient(135deg, #ECFEFF 0%, #CFFAFE 100%)",
    fg: "#0E7490",
    accent: "#7C3AED"
  },
  finance: {
    bg: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
    fg: "#1E40AF",
    accent: "#F59E0B"
  },
  energy: {
    bg: "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)",
    fg: "#92400E",
    accent: "#2563EB"
  },
  ops: {
    bg: "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)",
    fg: "#166534",
    accent: "#F97316"
  },
  health: {
    bg: "linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)",
    fg: "#075985",
    accent: "#8B5CF6"
  },
  defence: {
    bg: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)",
    fg: "#1E293B",
    accent: "#06B6D4"
  }
};

// Topic-specific SVG illustrations, rendered on top of the gradient
const ILLUSTRATIONS = {
  // Radar sweep → strategy / discovery
  radar: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, [70, 130, 190, 250].map((r, i) => /*#__PURE__*/React.createElement("circle", {
    key: "rr" + i,
    cx: 360,
    cy: 260,
    r: r,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.4 - i * 0.07
  })), /*#__PURE__*/React.createElement("line", {
    x1: 360,
    y1: 260,
    x2: 590,
    y2: 105,
    stroke: fg,
    strokeWidth: 2.5,
    opacity: 0.75
  }), /*#__PURE__*/React.createElement("path", {
    d: "M360,260 L590,105 A250,250 0 0,0 500,490",
    fill: fg,
    opacity: 0.09
  }), [[430, 150], [540, 200], [590, 310], [470, 355], [340, 420]].map(([x, y], i) => /*#__PURE__*/React.createElement("g", {
    key: "rp" + i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: 6,
    fill: fg,
    opacity: 0.55 + i * 0.08
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: 16,
    fill: "none",
    stroke: fg,
    strokeWidth: 1,
    opacity: 0.28
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: 360,
    cy: 260,
    r: 12,
    fill: fg,
    opacity: 0.45
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 360,
    cy: 260,
    r: 5,
    fill: fg,
    opacity: 0.9
  })),
  // Rocket + arc → ship / launch
  rocket_arc: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M100,430 C250,430 480,290 680,80",
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    strokeDasharray: "10 6",
    opacity: 0.55
  }), [[150, 418], [275, 375], [410, 295], [545, 195], [660, 108]].map(([x, y], i) => /*#__PURE__*/React.createElement("circle", {
    key: "rm" + i,
    cx: x,
    cy: y,
    r: 4 + i,
    fill: fg,
    opacity: 0.22 + i * 0.12
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(680,80) rotate(-42)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: 0,
    cy: 0,
    rx: 18,
    ry: 40,
    fill: "none",
    stroke: fg,
    strokeWidth: 2.5,
    opacity: 0.85
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 0,
    cy: -15,
    rx: 8,
    ry: 12,
    fill: fg,
    opacity: 0.35
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-18,25 L-32,48 L-18,36 Z",
    fill: fg,
    opacity: 0.65
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18,25 L32,48 L18,36 Z",
    fill: fg,
    opacity: 0.65
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 0,
    cy: -15,
    r: 4,
    fill: fg,
    opacity: 0.75
  }))),
  // Balance scale → pricing / comparison
  balance_scale: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: 400,
    y1: 110,
    x2: 400,
    y2: 380,
    stroke: fg,
    strokeWidth: 2.5,
    opacity: 0.7
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 400,
    cy: 110,
    r: 10,
    fill: fg,
    opacity: 0.7
  }), /*#__PURE__*/React.createElement("line", {
    x1: 170,
    y1: 205,
    x2: 630,
    y2: 180,
    stroke: fg,
    strokeWidth: 2.5,
    opacity: 0.65
  }), /*#__PURE__*/React.createElement("line", {
    x1: 170,
    y1: 205,
    x2: 195,
    y2: 315,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.6
  }), /*#__PURE__*/React.createElement("line", {
    x1: 630,
    y1: 180,
    x2: 608,
    y2: 290,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.6
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 195,
    cy: 328,
    rx: 70,
    ry: 22,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.7
  }), /*#__PURE__*/React.createElement("rect", {
    x: 130,
    y: 306,
    width: 130,
    height: 30,
    rx: 4,
    fill: fg,
    opacity: 0.14
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 608,
    cy: 302,
    rx: 70,
    ry: 22,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.7
  }), /*#__PURE__*/React.createElement("rect", {
    x: 543,
    y: 280,
    width: 130,
    height: 30,
    rx: 4,
    fill: fg,
    opacity: 0.09
  }), [155, 178].map((y, i) => /*#__PURE__*/React.createElement("circle", {
    key: "bc" + i,
    cx: 195,
    cy: y,
    r: 8,
    fill: fg,
    opacity: 0.5
  })), /*#__PURE__*/React.createElement("circle", {
    cx: 608,
    cy: 162,
    r: 8,
    fill: fg,
    opacity: 0.5
  })),
  // Robot arm + neural node → manufacturing AI
  robot_arm: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: 75,
    y: 285,
    width: 65,
    height: 155,
    rx: 6,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.6
  }), /*#__PURE__*/React.createElement("rect", {
    x: 95,
    y: 305,
    width: 22,
    height: 14,
    rx: 2,
    fill: fg,
    opacity: 0.38
  }), /*#__PURE__*/React.createElement("line", {
    x1: 108,
    y1: 285,
    x2: 108,
    y2: 235,
    stroke: fg,
    strokeWidth: 10,
    strokeLinecap: "round",
    opacity: 0.55
  }), /*#__PURE__*/React.createElement("line", {
    x1: 108,
    y1: 235,
    x2: 205,
    y2: 175,
    stroke: fg,
    strokeWidth: 8,
    strokeLinecap: "round",
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("line", {
    x1: 205,
    y1: 175,
    x2: 335,
    y2: 195,
    stroke: fg,
    strokeWidth: 6,
    strokeLinecap: "round",
    opacity: 0.45
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(335,195)"
  }, /*#__PURE__*/React.createElement("circle", {
    r: 22,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.72
  }), /*#__PURE__*/React.createElement("line", {
    x1: -14,
    y1: 0,
    x2: 14,
    y2: 0,
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.72
  }), /*#__PURE__*/React.createElement("line", {
    x1: 0,
    y1: -14,
    x2: 0,
    y2: 14,
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.72
  })), /*#__PURE__*/React.createElement("circle", {
    cx: 510,
    cy: 175,
    r: 72,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.5
  }), [0, 60, 120, 180, 240, 300].map((deg, i) => {
    const r = 57,
      x = 510 + r * Math.cos(deg * Math.PI / 180),
      y = 175 + r * Math.sin(deg * Math.PI / 180);
    return /*#__PURE__*/React.createElement("circle", {
      key: "na" + i,
      cx: x,
      cy: y,
      r: 6,
      fill: fg,
      opacity: 0.65
    });
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 510,
    cy: 175,
    r: 18,
    fill: fg,
    opacity: 0.3
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 510,
    cy: 175,
    r: 8,
    fill: fg,
    opacity: 0.75
  }), /*#__PURE__*/React.createElement("path", {
    d: "M335,195 L510,175",
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    strokeDasharray: "6 4",
    opacity: 0.45
  })),
  // Node mesh → automation / integration
  mesh_net: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, [[140, 120], [320, 80], [520, 110], [700, 90], [80, 260], [250, 230], [440, 270], [620, 240], [745, 268], [160, 390], [380, 360], [580, 390], [720, 378]].map(([x, y], i) => /*#__PURE__*/React.createElement("g", {
    key: "mn" + i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: i < 4 ? 14 : i < 9 ? 11 : 9,
    fill: fg,
    opacity: 0.2
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: i < 4 ? 6 : i < 9 ? 5 : 4,
    fill: fg,
    opacity: 0.7
  }))), [[[140, 120], [320, 80]], [[320, 80], [520, 110]], [[520, 110], [700, 90]], [[80, 260], [250, 230]], [[250, 230], [440, 270]], [[440, 270], [620, 240]], [[620, 240], [745, 268]], [[160, 390], [380, 360]], [[380, 360], [580, 390]], [[580, 390], [720, 378]], [[140, 120], [80, 260]], [[320, 80], [250, 230]], [[520, 110], [440, 270]], [[700, 90], [620, 240]], [[80, 260], [160, 390]], [[250, 230], [380, 360]], [[440, 270], [580, 390]], [[620, 240], [720, 378]], [[250, 230], [160, 390]], [[440, 270], [380, 360]]].map(([[x1, y1], [x2, y2]], i) => /*#__PURE__*/React.createElement("line", {
    key: "ml" + i,
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2,
    stroke: fg,
    strokeWidth: 1,
    opacity: 0.3
  }))),
  // Debug loop pipeline → debugging case study
  loop_debug: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: 400,
    cy: 240,
    r: 165,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    strokeDasharray: "22 8",
    opacity: 0.55
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 400,
    cy: 240,
    r: 105,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.3
  }), [0, 72, 144, 216, 288].map((deg, i) => {
    const rad = (deg - 90) * Math.PI / 180,
      x = 400 + 165 * Math.cos(rad),
      y = 240 + 165 * Math.sin(rad);
    return /*#__PURE__*/React.createElement("g", {
      key: "ld" + i
    }, /*#__PURE__*/React.createElement("rect", {
      x: x - 32,
      y: y - 14,
      width: 64,
      height: 28,
      rx: 6,
      fill: "none",
      stroke: fg,
      strokeWidth: 1.5,
      opacity: 0.6
    }), /*#__PURE__*/React.createElement("circle", {
      cx: x,
      cy: y,
      r: 5,
      fill: fg,
      opacity: 0.75
    }));
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 400,
    cy: 240,
    r: 24,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.65
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 400,
    cy: 240,
    r: 9,
    fill: fg,
    opacity: 0.8
  }), /*#__PURE__*/React.createElement("path", {
    d: "M543,148 L558,133",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.65
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "562,128 570,148 550,142",
    fill: fg,
    opacity: 0.65
  })),
  // Lever + fulcrum → engineer leverage
  lever_fulcrum: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: 110,
    y1: 340,
    x2: 680,
    y2: 178,
    stroke: fg,
    strokeWidth: 4,
    strokeLinecap: "round",
    opacity: 0.68
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "378,258 400,312 356,312",
    fill: fg,
    opacity: 0.65
  }), /*#__PURE__*/React.createElement("line", {
    x1: 338,
    y1: 312,
    x2: 418,
    y2: 312,
    stroke: fg,
    strokeWidth: 3,
    opacity: 0.55
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 110,
    cy: 340,
    r: 30,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 110,
    cy: 340,
    r: 8,
    fill: fg,
    opacity: 0.55
  }), /*#__PURE__*/React.createElement("rect", {
    x: 620,
    y: 108,
    width: 90,
    height: 58,
    rx: 6,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.65
  }), /*#__PURE__*/React.createElement("line", {
    x1: 635,
    y1: 124,
    x2: 695,
    y2: 124,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.55
  }), /*#__PURE__*/React.createElement("line", {
    x1: 635,
    y1: 137,
    x2: 685,
    y2: 137,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.55
  }), /*#__PURE__*/React.createElement("line", {
    x1: 635,
    y1: 150,
    x2: 690,
    y2: 150,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.55
  }), [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("line", {
    key: "la" + i,
    x1: 648,
    y1: 88,
    x2: 648 + (i + 1) * 18,
    y2: 88 - (i + 1) * 15,
    stroke: fg,
    strokeWidth: 1,
    opacity: 0.35
  }))),
  // Document handoff arc → project handover
  handover_docs: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: 75,
    y: 150,
    width: 185,
    height: 240,
    rx: 8,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.6
  }), [185, 210, 235, 260, 285, 310].map((y, i) => /*#__PURE__*/React.createElement("line", {
    key: "hd" + i,
    x1: 100,
    y1: y,
    x2: 235,
    y2: y,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.38
  })), /*#__PURE__*/React.createElement("circle", {
    cx: 140,
    cy: 164,
    r: 9,
    fill: fg,
    opacity: 0.55
  }), /*#__PURE__*/React.createElement("rect", {
    x: 540,
    y: 120,
    width: 185,
    height: 240,
    rx: 8,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.6
  }), [155, 180, 205, 230, 255, 280].map((y, i) => /*#__PURE__*/React.createElement("line", {
    key: "hr" + i,
    x1: 565,
    y1: y,
    x2: 700,
    y2: y,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.38
  })), /*#__PURE__*/React.createElement("circle", {
    cx: 688,
    cy: 134,
    r: 9,
    fill: fg,
    opacity: 0.55
  }), /*#__PURE__*/React.createElement("path", {
    d: "M265,265 C345,220 465,200 540,232",
    fill: "none",
    stroke: fg,
    strokeWidth: 2.5,
    strokeDasharray: "10 5",
    opacity: 0.65
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "540,222 558,232 536,245",
    fill: fg,
    opacity: 0.7
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 400,
    cy: 242,
    r: 22,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.45
  }), /*#__PURE__*/React.createElement("line", {
    x1: 388,
    y1: 242,
    x2: 412,
    y2: 242,
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.6
  }), /*#__PURE__*/React.createElement("line", {
    x1: 400,
    y1: 230,
    x2: 400,
    y2: 254,
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.6
  })),
  // Globe grid + pins → global engineering pods
  world_grid: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ellipse", {
    cx: 400,
    cy: 240,
    rx: 220,
    ry: 220,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.5
  }), [-130, -65, 0, 65, 130].map((dy, i) => {
    const rx = Math.sqrt(Math.max(0, 220 * 220 - dy * dy));
    return /*#__PURE__*/React.createElement("ellipse", {
      key: "wg" + i,
      cx: 400,
      cy: 240 + dy,
      rx: rx,
      ry: rx * 0.3,
      fill: "none",
      stroke: fg,
      strokeWidth: 1,
      opacity: 0.35
    });
  }), [-0.8, -0.4, 0, 0.4, 0.8].map((f, i) => /*#__PURE__*/React.createElement("ellipse", {
    key: "wm" + i,
    cx: 400,
    cy: 240,
    rx: Math.abs(Math.sin(f * 1.5)) * 220 + 5,
    ry: 220,
    fill: "none",
    stroke: fg,
    strokeWidth: 1,
    opacity: 0.32
  })), [[320, 165], [480, 148], [248, 285], [562, 295], [412, 345], [340, 228]].map(([x, y], i) => /*#__PURE__*/React.createElement("g", {
    key: "wp" + i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: 8,
    fill: fg,
    opacity: 0.65
  }), /*#__PURE__*/React.createElement("line", {
    x1: x,
    y1: y,
    x2: x,
    y2: y - 26,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.55
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y - 26,
    r: 4,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.5
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M320,165 Q400,132 480,148",
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    strokeDasharray: "6 4",
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M248,285 Q400,248 562,295",
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    strokeDasharray: "6 4",
    opacity: 0.5
  })),
  // Branching path → switching / pivot
  fork_path: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: 100,
    y1: 240,
    x2: 375,
    y2: 240,
    stroke: fg,
    strokeWidth: 3,
    opacity: 0.7
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 375,
    cy: 240,
    r: 15,
    fill: fg,
    opacity: 0.4
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 375,
    cy: 240,
    r: 6,
    fill: fg,
    opacity: 0.85
  }), /*#__PURE__*/React.createElement("line", {
    x1: 375,
    y1: 240,
    x2: 645,
    y2: 118,
    stroke: fg,
    strokeWidth: 3,
    opacity: 0.7
  }), /*#__PURE__*/React.createElement("line", {
    x1: 375,
    y1: 240,
    x2: 645,
    y2: 362,
    stroke: fg,
    strokeWidth: 1.5,
    strokeDasharray: "8 5",
    opacity: 0.38
  }), /*#__PURE__*/React.createElement("rect", {
    x: 645,
    y: 88,
    width: 105,
    height: 60,
    rx: 8,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.7
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 666,
    cy: 118,
    r: 6,
    fill: fg,
    opacity: 0.6
  }), /*#__PURE__*/React.createElement("line", {
    x1: 678,
    y1: 112,
    x2: 730,
    y2: 112,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("line", {
    x1: 678,
    y1: 126,
    x2: 718,
    y2: 126,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("rect", {
    x: 645,
    y: 332,
    width: 105,
    height: 60,
    rx: 8,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.38
  }), /*#__PURE__*/React.createElement("line", {
    x1: 665,
    y1: 352,
    x2: 725,
    y2: 352,
    stroke: fg,
    strokeWidth: 1,
    opacity: 0.28
  }), /*#__PURE__*/React.createElement("line", {
    x1: 665,
    y1: 366,
    x2: 705,
    y2: 366,
    stroke: fg,
    strokeWidth: 1,
    opacity: 0.28
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "641,112 653,104 653,120",
    fill: fg,
    opacity: 0.7
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "641,358 653,350 653,366",
    fill: fg,
    opacity: 0.38
  })),
  // Org tree hierarchy → outstaffing / team
  org_tree: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: 340,
    y: 58,
    width: 120,
    height: 52,
    rx: 6,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.68
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 400,
    cy: 84,
    r: 10,
    fill: fg,
    opacity: 0.55
  }), /*#__PURE__*/React.createElement("line", {
    x1: 400,
    y1: 110,
    x2: 400,
    y2: 155,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.58
  }), /*#__PURE__*/React.createElement("line", {
    x1: 160,
    y1: 155,
    x2: 640,
    y2: 155,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.48
  }), [160, 400, 640].map((x, i) => /*#__PURE__*/React.createElement("g", {
    key: "ot" + i
  }, /*#__PURE__*/React.createElement("line", {
    x1: x,
    y1: 155,
    x2: x,
    y2: 195,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.48
  }), /*#__PURE__*/React.createElement("rect", {
    x: x - 62,
    y: 195,
    width: 124,
    height: 52,
    rx: 6,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.62
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: 221,
    r: 9,
    fill: fg,
    opacity: 0.5
  }))), /*#__PURE__*/React.createElement("line", {
    x1: 160,
    y1: 247,
    x2: 160,
    y2: 292,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.38
  }), /*#__PURE__*/React.createElement("line", {
    x1: 100,
    y1: 292,
    x2: 220,
    y2: 292,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.32
  }), [100, 220].map((x, i) => /*#__PURE__*/React.createElement("g", {
    key: "ob" + i
  }, /*#__PURE__*/React.createElement("line", {
    x1: x,
    y1: 292,
    x2: x,
    y2: 328,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.32
  }), /*#__PURE__*/React.createElement("rect", {
    x: x - 42,
    y: 328,
    width: 84,
    height: 40,
    rx: 5,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.48
  }))), /*#__PURE__*/React.createElement("line", {
    x1: 640,
    y1: 247,
    x2: 640,
    y2: 292,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.38
  }), /*#__PURE__*/React.createElement("line", {
    x1: 580,
    y1: 292,
    x2: 700,
    y2: 292,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.32
  }), [580, 700].map((x, i) => /*#__PURE__*/React.createElement("g", {
    key: "oc" + i
  }, /*#__PURE__*/React.createElement("line", {
    x1: x,
    y1: 292,
    x2: x,
    y2: 328,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.32
  }), /*#__PURE__*/React.createElement("rect", {
    x: x - 42,
    y: 328,
    width: 84,
    height: 40,
    rx: 5,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.48
  })))),
  // City skyline + speech bubble → conference / events
  conf_skyline: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, [{
    x: 58,
    y: 335,
    w: 55,
    h: 145
  }, {
    x: 123,
    y: 295,
    w: 48,
    h: 185
  }, {
    x: 181,
    y: 255,
    w: 78,
    h: 225
  }, {
    x: 269,
    y: 318,
    w: 56,
    h: 162
  }, {
    x: 335,
    y: 235,
    w: 68,
    h: 245
  }, {
    x: 413,
    y: 278,
    w: 54,
    h: 202
  }, {
    x: 477,
    y: 258,
    w: 88,
    h: 222
  }, {
    x: 575,
    y: 298,
    w: 62,
    h: 182
  }, {
    x: 647,
    y: 338,
    w: 68,
    h: 142
  }].map(({
    x,
    y,
    w,
    h
  }, i) => /*#__PURE__*/React.createElement("g", {
    key: "cs" + i
  }, /*#__PURE__*/React.createElement("rect", {
    x: x,
    y: y,
    width: w,
    height: h,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.42 + i % 3 * 0.09
  }), Array.from({
    length: Math.floor(h / 28)
  }).map((_, j) => /*#__PURE__*/React.createElement("rect", {
    key: "cw" + j,
    x: x + 8,
    y: y + 10 + j * 28,
    width: 10,
    height: 10,
    fill: fg,
    opacity: 0.16
  })))), /*#__PURE__*/React.createElement("ellipse", {
    cx: 400,
    cy: 100,
    rx: 92,
    ry: 58,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M380,158 L370,185 L395,162",
    fill: fg,
    opacity: 0.45
  }), [360, 400, 440].map((x, i) => /*#__PURE__*/React.createElement("circle", {
    key: "cn" + i,
    cx: x,
    cy: 100,
    r: 5,
    fill: fg,
    opacity: 0.55
  }))),
  // Magnifying glass over code → debugging
  magnify_code: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, [118, 152, 186, 220, 254, 288, 322].map((y, i) => /*#__PURE__*/React.createElement("line", {
    key: "mc" + i,
    x1: 78,
    y1: y,
    x2: 375 + i * 8,
    y2: y,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.32 + i % 3 * 0.09
  })), [78, 120, 162].map((x, i) => /*#__PURE__*/React.createElement("line", {
    key: "mi" + i,
    x1: x,
    y1: 118,
    x2: x,
    y2: 322,
    stroke: fg,
    strokeWidth: 1,
    opacity: 0.22
  })), /*#__PURE__*/React.createElement("circle", {
    cx: 562,
    cy: 255,
    r: 142,
    fill: "none",
    stroke: fg,
    strokeWidth: 3,
    opacity: 0.68
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 562,
    cy: 255,
    r: 120,
    fill: fg,
    opacity: 0.05
  }), [198, 228, 258, 288, 318].map((y, i) => /*#__PURE__*/React.createElement("line", {
    key: "ml2" + i,
    x1: 440,
    y1: y,
    x2: 684,
    y2: y,
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.42 + i % 2 * 0.16
  })), /*#__PURE__*/React.createElement("line", {
    x1: 672,
    y1: 367,
    x2: 744,
    y2: 438,
    stroke: fg,
    strokeWidth: 6,
    strokeLinecap: "round",
    opacity: 0.65
  }), /*#__PURE__*/React.createElement("line", {
    x1: 682,
    y1: 377,
    x2: 754,
    y2: 448,
    stroke: fg,
    strokeWidth: 3,
    strokeLinecap: "round",
    opacity: 0.42
  })),
  // Stacked layers → MVP stack
  stacked_layers: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, [{
    y: 368,
    w: 500
  }, {
    y: 302,
    w: 440
  }, {
    y: 236,
    w: 380
  }, {
    y: 170,
    w: 318
  }, {
    y: 104,
    w: 256
  }].map(({
    y,
    w
  }, i) => {
    const x = 400 - w / 2;
    return /*#__PURE__*/React.createElement("g", {
      key: "sl" + i
    }, /*#__PURE__*/React.createElement("rect", {
      x: x,
      y: y,
      width: w,
      height: 50,
      rx: 6,
      fill: "none",
      stroke: fg,
      strokeWidth: 2,
      opacity: 0.5 + i * 0.09
    }), /*#__PURE__*/React.createElement("rect", {
      x: x,
      y: y,
      width: w,
      height: 50,
      rx: 6,
      fill: fg,
      opacity: 0.05 + i * 0.025
    }), [...Array(Math.floor(w / 32))].map((_, j) => /*#__PURE__*/React.createElement("line", {
      key: "sv" + j,
      x1: x + 26 + j * 32,
      y1: y + 10,
      x2: x + 26 + j * 32,
      y2: y + 40,
      stroke: fg,
      strokeWidth: 0.5,
      opacity: 0.18
    })));
  })),
  // Relay baton → seamless handover
  relay_baton: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M90,348 C200,348 250,198 355,198 C460,198 510,348 620,348",
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    strokeDasharray: "8 5",
    opacity: 0.38
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 195,
    cy: 308,
    r: 30,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.58
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 195,
    cy: 308,
    r: 11,
    fill: fg,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 605,
    cy: 308,
    r: 30,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.58
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 605,
    cy: 308,
    r: 11,
    fill: fg,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("rect", {
    x: 338,
    y: 214,
    width: 124,
    height: 32,
    rx: 16,
    fill: "none",
    stroke: fg,
    strokeWidth: 2.5,
    opacity: 0.75
  }), /*#__PURE__*/React.createElement("rect", {
    x: 348,
    y: 219,
    width: 104,
    height: 22,
    rx: 11,
    fill: fg,
    opacity: 0.22
  }), /*#__PURE__*/React.createElement("line", {
    x1: 225,
    y1: 308,
    x2: 338,
    y2: 230,
    stroke: fg,
    strokeWidth: 1.5,
    strokeDasharray: "6 4",
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("line", {
    x1: 462,
    y1: 230,
    x2: 575,
    y2: 308,
    stroke: fg,
    strokeWidth: 1.5,
    strokeDasharray: "6 4",
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "336,230 322,242 335,254",
    fill: fg,
    opacity: 0.65
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "464,230 476,242 463,254",
    fill: fg,
    opacity: 0.65
  })),
  // Two columns → comparison
  two_columns: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: 95,
    y: 98,
    width: 248,
    height: 324,
    rx: 8,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.58
  }), /*#__PURE__*/React.createElement("rect", {
    x: 457,
    y: 98,
    width: 248,
    height: 324,
    rx: 8,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.58
  }), /*#__PURE__*/React.createElement("rect", {
    x: 95,
    y: 98,
    width: 248,
    height: 46,
    rx: 8,
    fill: fg,
    opacity: 0.2
  }), /*#__PURE__*/React.createElement("rect", {
    x: 457,
    y: 98,
    width: 248,
    height: 46,
    rx: 8,
    fill: fg,
    opacity: 0.13
  }), [168, 202, 236, 270, 304, 338, 372].map((y, i) => /*#__PURE__*/React.createElement("line", {
    key: "tl" + i,
    x1: 118,
    y1: y,
    x2: 322,
    y2: y,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.32 + i % 2 * 0.12
  })), [168, 202, 236, 270, 304, 338, 372].map((y, i) => /*#__PURE__*/React.createElement("line", {
    key: "tr" + i,
    x1: 480,
    y1: y,
    x2: 684,
    y2: y,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.32 + i % 2 * 0.12
  })), /*#__PURE__*/React.createElement("line", {
    x1: 400,
    y1: 78,
    x2: 400,
    y2: 452,
    stroke: fg,
    strokeWidth: 1,
    strokeDasharray: "5 5",
    opacity: 0.28
  }), [175, 209, 243, 277].map((y, i) => /*#__PURE__*/React.createElement("circle", {
    key: "tc" + i,
    cx: 138,
    cy: y,
    r: 6,
    fill: fg,
    opacity: 0.55
  })), [175, 243].map((y, i) => /*#__PURE__*/React.createElement("circle", {
    key: "tx" + i,
    cx: 498,
    cy: y,
    r: 6,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.42
  }))),
  // Neural brain outline → AI / ML
  brain_neural: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M258,118 C198,98 148,148 148,218 C148,288 198,328 248,338 C268,378 328,398 400,398 C472,398 532,378 552,338 C602,328 652,288 652,218 C652,148 602,98 542,118 C522,78 462,58 400,58 C338,58 278,78 258,118 Z",
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.52
  }), [[318, 158], [442, 153], [278, 238], [400, 228], [532, 233], [358, 318], [452, 313], [218, 183], [582, 186], [308, 288], [492, 283]].map(([x, y], i) => /*#__PURE__*/React.createElement("circle", {
    key: "bn" + i,
    cx: x,
    cy: y,
    r: 7,
    fill: fg,
    opacity: 0.58
  })), [[[318, 158], [442, 153]], [[318, 158], [278, 238]], [[442, 153], [532, 233]], [[278, 238], [400, 228]], [[400, 228], [532, 233]], [[278, 238], [308, 288]], [[532, 233], [492, 283]], [[400, 228], [358, 318]], [[400, 228], [452, 313]], [[218, 183], [278, 238]], [[582, 186], [532, 233]], [[308, 288], [358, 318]], [[492, 283], [452, 313]], [[318, 158], [218, 183]], [[442, 153], [582, 186]]].map(([[x1, y1], [x2, y2]], i) => /*#__PURE__*/React.createElement("line", {
    key: "bl" + i,
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2,
    stroke: fg,
    strokeWidth: 1,
    opacity: 0.33
  }))),
  // Lego-style blocks → low-code / building blocks
  building_blocks: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, [{
    x: 98,
    y: 322,
    w: 122,
    h: 62,
    studs: 3
  }, {
    x: 98,
    y: 260,
    w: 122,
    h: 62,
    studs: 3
  }, {
    x: 220,
    y: 291,
    w: 122,
    h: 62,
    studs: 3
  }, {
    x: 198,
    y: 362,
    w: 182,
    h: 62,
    studs: 4
  }, {
    x: 378,
    y: 232,
    w: 162,
    h: 62,
    studs: 4
  }, {
    x: 378,
    y: 294,
    w: 162,
    h: 62,
    studs: 4
  }, {
    x: 378,
    y: 356,
    w: 162,
    h: 62,
    studs: 4
  }, {
    x: 538,
    y: 262,
    w: 142,
    h: 62,
    studs: 3
  }, {
    x: 538,
    y: 324,
    w: 142,
    h: 62,
    studs: 3
  }].map(({
    x,
    y,
    w,
    h,
    studs
  }, i) => /*#__PURE__*/React.createElement("g", {
    key: "bb" + i
  }, /*#__PURE__*/React.createElement("rect", {
    x: x,
    y: y,
    width: w,
    height: h,
    rx: 4,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.56 + i % 3 * 0.1
  }), /*#__PURE__*/React.createElement("rect", {
    x: x,
    y: y,
    width: w,
    height: h,
    rx: 4,
    fill: fg,
    opacity: 0.06 + i % 2 * 0.04
  }), [...Array(studs)].map((_, s) => /*#__PURE__*/React.createElement("ellipse", {
    key: "bs" + s,
    cx: x + w / (studs + 1) * (s + 1),
    cy: y - 8,
    rx: 13,
    ry: 7,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.52
  }))))),
  // Coin stacks + arrow → cost savings / nearshoring
  coin_stack: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, [0, 1, 2, 3, 4, 5, 6].map(i => /*#__PURE__*/React.createElement("ellipse", {
    key: "cs1" + i,
    cx: 218,
    cy: 352 - i * 28,
    rx: 92,
    ry: 22,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.45 + i * 0.05
  })), [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("ellipse", {
    key: "cs2" + i,
    cx: 552,
    cy: 312 - i * 28,
    rx: 72,
    ry: 18,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.45 + i * 0.05
  })), /*#__PURE__*/React.createElement("path", {
    d: "M332,218 C392,158 442,158 492,198",
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    strokeDasharray: "8 5",
    opacity: 0.58
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "492,198 506,184 502,208",
    fill: fg,
    opacity: 0.65
  }), /*#__PURE__*/React.createElement("line", {
    x1: 218,
    y1: 118,
    x2: 218,
    y2: 163,
    stroke: fg,
    strokeWidth: 2.5,
    opacity: 0.55
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "218,110 208,132 228,132",
    fill: fg,
    opacity: 0.55
  }), /*#__PURE__*/React.createElement("line", {
    x1: 552,
    y1: 172,
    x2: 552,
    y2: 212,
    stroke: fg,
    strokeWidth: 2.5,
    opacity: 0.55
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "552,164 542,184 562,184",
    fill: fg,
    opacity: 0.55
  })),
  // Data pipes → auth migration / data flow
  data_flow_pipe: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: 78,
    y: 188,
    width: 152,
    height: 122,
    rx: 8,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.62
  }), /*#__PURE__*/React.createElement("line", {
    x1: 108,
    y1: 214,
    x2: 202,
    y2: 214,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.42
  }), /*#__PURE__*/React.createElement("line", {
    x1: 108,
    y1: 234,
    x2: 188,
    y2: 234,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.42
  }), /*#__PURE__*/React.createElement("line", {
    x1: 108,
    y1: 254,
    x2: 198,
    y2: 254,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.42
  }), /*#__PURE__*/React.createElement("rect", {
    x: 570,
    y: 165,
    width: 152,
    height: 122,
    rx: 8,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.62
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 628,
    cy: 204,
    r: 22,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.52
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 628,
    cy: 204,
    r: 9,
    fill: fg,
    opacity: 0.48
  }), /*#__PURE__*/React.createElement("line", {
    x1: 230,
    y1: 250,
    x2: 342,
    y2: 250,
    stroke: fg,
    strokeWidth: 3,
    opacity: 0.58
  }), /*#__PURE__*/React.createElement("line", {
    x1: 342,
    y1: 250,
    x2: 342,
    y2: 198,
    stroke: fg,
    strokeWidth: 3,
    opacity: 0.52
  }), /*#__PURE__*/React.createElement("line", {
    x1: 342,
    y1: 198,
    x2: 458,
    y2: 198,
    stroke: fg,
    strokeWidth: 3,
    opacity: 0.52
  }), /*#__PURE__*/React.createElement("line", {
    x1: 458,
    y1: 198,
    x2: 458,
    y2: 250,
    stroke: fg,
    strokeWidth: 3,
    opacity: 0.52
  }), /*#__PURE__*/React.createElement("line", {
    x1: 458,
    y1: 250,
    x2: 570,
    y2: 250,
    stroke: fg,
    strokeWidth: 3,
    opacity: 0.58
  }), [[282, 250], [342, 224], [400, 198], [458, 224], [514, 250]].map(([x, y], i) => /*#__PURE__*/React.createElement("circle", {
    key: "dp" + i,
    cx: x,
    cy: y,
    r: 6,
    fill: fg,
    opacity: 0.58
  })), /*#__PURE__*/React.createElement("polygon", {
    points: "564,242 570,258 554,250",
    fill: fg,
    opacity: 0.65
  })),
  // Contract document → fixed-price / T&M
  contract_doc: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: 228,
    y: 78,
    width: 344,
    height: 364,
    rx: 10,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.62
  }), /*#__PURE__*/React.createElement("rect", {
    x: 228,
    y: 78,
    width: 344,
    height: 52,
    rx: 10,
    fill: fg,
    opacity: 0.18
  }), [162, 192, 222, 252, 282, 312, 342, 372, 402].map((y, i) => /*#__PURE__*/React.createElement("line", {
    key: "cd" + i,
    x1: 262,
    y1: y,
    x2: 542,
    y2: y,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.32 + i % 3 * 0.09
  })), /*#__PURE__*/React.createElement("line", {
    x1: 262,
    y1: 408,
    x2: 375,
    y2: 408,
    stroke: fg,
    strokeWidth: 2.5,
    opacity: 0.58
  }), /*#__PURE__*/React.createElement("line", {
    x1: 428,
    y1: 408,
    x2: 542,
    y2: 408,
    stroke: fg,
    strokeWidth: 2.5,
    opacity: 0.58
  }), /*#__PURE__*/React.createElement("line", {
    x1: 262,
    y1: 420,
    x2: 375,
    y2: 420,
    stroke: fg,
    strokeWidth: 1,
    opacity: 0.32
  }), /*#__PURE__*/React.createElement("line", {
    x1: 428,
    y1: 420,
    x2: 542,
    y2: 420,
    stroke: fg,
    strokeWidth: 1,
    opacity: 0.32
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 288,
    cy: 99,
    r: 15,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.52
  }), /*#__PURE__*/React.createElement("line", {
    x1: 282,
    y1: 99,
    x2: 294,
    y2: 99,
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.65
  }), /*#__PURE__*/React.createElement("line", {
    x1: 288,
    y1: 93,
    x2: 288,
    y2: 105,
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.65
  })),
  // Mission briefing board → discovery / planning
  mission_board: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: 78,
    y: 78,
    width: 644,
    height: 384,
    rx: 10,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.52
  }), /*#__PURE__*/React.createElement("line", {
    x1: 78,
    y1: 128,
    x2: 722,
    y2: 128,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.38
  }), /*#__PURE__*/React.createElement("rect", {
    x: 98,
    y: 148,
    width: 222,
    height: 142,
    rx: 6,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.48
  }), /*#__PURE__*/React.createElement("rect", {
    x: 338,
    y: 148,
    width: 364,
    height: 62,
    rx: 6,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.48
  }), /*#__PURE__*/React.createElement("rect", {
    x: 338,
    y: 228,
    width: 364,
    height: 62,
    rx: 6,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.48
  }), /*#__PURE__*/React.createElement("rect", {
    x: 98,
    y: 308,
    width: 608,
    height: 134,
    rx: 6,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.42
  }), [332, 362, 392].map((y, i) => /*#__PURE__*/React.createElement("line", {
    key: "mb" + i,
    x1: 118,
    y1: y,
    x2: 686,
    y2: y,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.32
  })), /*#__PURE__*/React.createElement("circle", {
    cx: 532,
    cy: 174,
    r: 16,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.52
  }), /*#__PURE__*/React.createElement("line", {
    x1: 524,
    y1: 174,
    x2: 540,
    y2: 174,
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.6
  }), /*#__PURE__*/React.createElement("line", {
    x1: 532,
    y1: 166,
    x2: 532,
    y2: 182,
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.6
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 532,
    cy: 254,
    r: 16,
    fill: fg,
    opacity: 0.32
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 532,
    cy: 254,
    r: 7,
    fill: fg,
    opacity: 0.68
  })),
  // Truck on road route → logistics
  truck_route: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M78,298 C178,298 198,218 318,218 C438,218 458,298 578,298 C638,298 678,268 722,248",
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    strokeDasharray: "10 6",
    opacity: 0.52
  }), [[178, 268], [318, 218], [458, 264], [578, 293]].map(([x, y], i) => /*#__PURE__*/React.createElement("g", {
    key: "tr" + i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: 9,
    fill: fg,
    opacity: 0.58
  }), /*#__PURE__*/React.createElement("line", {
    x1: x,
    y1: y,
    x2: x,
    y2: y - 22,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.45
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y - 22,
    r: 4,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.45
  }))), /*#__PURE__*/React.createElement("g", {
    transform: "translate(96,340)"
  }, /*#__PURE__*/React.createElement("rect", {
    x: 0,
    y: -42,
    width: 125,
    height: 42,
    rx: 4,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.68
  }), /*#__PURE__*/React.createElement("rect", {
    x: 82,
    y: -68,
    width: 43,
    height: 26,
    rx: 3,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.58
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 22,
    cy: 7,
    r: 15,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.62
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 22,
    cy: 7,
    r: 6,
    fill: fg,
    opacity: 0.55
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 98,
    cy: 7,
    r: 15,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.62
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 98,
    cy: 7,
    r: 6,
    fill: fg,
    opacity: 0.55
  }))),
  // Open door + closed door → switching provider
  open_door: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: 115,
    y: 118,
    width: 202,
    height: 324,
    rx: 8,
    fill: "none",
    stroke: fg,
    strokeWidth: 2.5,
    opacity: 0.58
  }), /*#__PURE__*/React.createElement("rect", {
    x: 125,
    y: 128,
    width: 182,
    height: 304,
    rx: 6,
    fill: fg,
    opacity: 0.08
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 284,
    cy: 280,
    r: 9,
    fill: fg,
    opacity: 0.58
  }), /*#__PURE__*/React.createElement("rect", {
    x: 482,
    y: 98,
    width: 202,
    height: 344,
    rx: 8,
    fill: "none",
    stroke: fg,
    strokeWidth: 2.5,
    opacity: 0.68
  }), /*#__PURE__*/React.createElement("rect", {
    x: 492,
    y: 108,
    width: 182,
    height: 324,
    rx: 6,
    fill: fg,
    opacity: 0.12
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 502,
    cy: 270,
    r: 9,
    fill: fg,
    opacity: 0.68
  }), [140, 165, 190, 215, 240].map((y, i) => /*#__PURE__*/React.createElement("line", {
    key: "od" + i,
    x1: 502,
    y1: y,
    x2: 668,
    y2: y,
    stroke: fg,
    strokeWidth: 1,
    opacity: 0.24
  })), /*#__PURE__*/React.createElement("path", {
    d: "M322,278 C372,258 422,258 480,268",
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.65
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "480,260 495,268 479,278",
    fill: fg,
    opacity: 0.68
  }), [158, 178, 198, 218, 238, 258].map((y, i) => /*#__PURE__*/React.createElement("line", {
    key: "ol" + i,
    x1: 126,
    y1: y,
    x2: 296,
    y2: y,
    stroke: fg,
    strokeWidth: 1,
    opacity: 0.2
  }))),
  // Container lifting to cloud → ECS migration
  cloud_lift: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ellipse", {
    cx: 400,
    cy: 128,
    rx: 202,
    ry: 82,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.58
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 278,
    cy: 162,
    rx: 122,
    ry: 56,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.42
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 532,
    cy: 154,
    rx: 142,
    ry: 62,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.42
  }), /*#__PURE__*/React.createElement("rect", {
    x: 308,
    y: 294,
    width: 184,
    height: 122,
    rx: 8,
    fill: "none",
    stroke: fg,
    strokeWidth: 2.5,
    opacity: 0.68
  }), [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("line", {
    key: "cl" + i,
    x1: 328 + i * 42,
    y1: 294,
    x2: 328 + i * 42,
    y2: 416,
    stroke: fg,
    strokeWidth: 1,
    opacity: 0.22
  })), /*#__PURE__*/React.createElement("line", {
    x1: 318,
    y1: 346,
    x2: 482,
    y2: 346,
    stroke: fg,
    strokeWidth: 1,
    opacity: 0.22
  }), /*#__PURE__*/React.createElement("line", {
    x1: 400,
    y1: 210,
    x2: 400,
    y2: 294,
    stroke: fg,
    strokeWidth: 2.5,
    strokeDasharray: "9 5",
    opacity: 0.58
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "400,204 388,226 412,226",
    fill: fg,
    opacity: 0.68
  }), /*#__PURE__*/React.createElement("rect", {
    x: 348,
    y: 314,
    width: 104,
    height: 42,
    rx: 4,
    fill: fg,
    opacity: 0.2
  }), /*#__PURE__*/React.createElement("line", {
    x1: 238,
    y1: 380,
    x2: 562,
    y2: 380,
    stroke: fg,
    strokeWidth: 1,
    opacity: 0.24
  }), [238, 310, 380, 450, 520].map((x, i) => /*#__PURE__*/React.createElement("line", {
    key: "cg" + i,
    x1: x,
    y1: 380,
    x2: x,
    y2: 416,
    stroke: fg,
    strokeWidth: 1,
    opacity: 0.2
  }))),
  // Two clouds + comparison columns → ECS vs Beanstalk
  cloud_compare: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ellipse", {
    cx: 228,
    cy: 132,
    rx: 147,
    ry: 62,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.58
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 142,
    cy: 165,
    rx: 92,
    ry: 42,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.42
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 338,
    cy: 158,
    rx: 107,
    ry: 44,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.42
  }), /*#__PURE__*/React.createElement("rect", {
    x: 97,
    y: 208,
    width: 262,
    height: 162,
    rx: 8,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.58
  }), [242, 272, 302, 332].map((y, i) => /*#__PURE__*/React.createElement("line", {
    key: "cc1" + i,
    x1: 122,
    y1: y,
    x2: 338,
    y2: y,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.32
  })), /*#__PURE__*/React.createElement("ellipse", {
    cx: 572,
    cy: 112,
    rx: 147,
    ry: 62,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.58
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 486,
    cy: 145,
    rx: 92,
    ry: 42,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.42
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 682,
    cy: 138,
    rx: 107,
    ry: 44,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.42
  }), /*#__PURE__*/React.createElement("rect", {
    x: 441,
    y: 188,
    width: 262,
    height: 162,
    rx: 8,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.58
  }), [222, 252, 282, 312].map((y, i) => /*#__PURE__*/React.createElement("line", {
    key: "cc2" + i,
    x1: 466,
    y1: y,
    x2: 682,
    y2: y,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.32
  })), /*#__PURE__*/React.createElement("circle", {
    cx: 148,
    cy: 290,
    r: 9,
    fill: fg,
    opacity: 0.48
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 148,
    cy: 320,
    r: 9,
    fill: fg,
    opacity: 0.48
  }), /*#__PURE__*/React.createElement("rect", {
    x: 466,
    y: 236,
    width: 52,
    height: 19,
    rx: 4,
    fill: fg,
    opacity: 0.38
  }), /*#__PURE__*/React.createElement("rect", {
    x: 466,
    y: 266,
    width: 52,
    height: 19,
    rx: 4,
    fill: fg,
    opacity: 0.38
  }), /*#__PURE__*/React.createElement("rect", {
    x: 466,
    y: 296,
    width: 52,
    height: 19,
    rx: 4,
    fill: fg,
    opacity: 0.38
  }), /*#__PURE__*/React.createElement("line", {
    x1: 400,
    y1: 78,
    x2: 400,
    y2: 452,
    stroke: fg,
    strokeWidth: 1,
    strokeDasharray: "5 5",
    opacity: 0.22
  })),
  // Rising chart + blueprint grid → strategy / discovery / planning
  blueprint: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, [80, 160, 240, 320, 400].map((y, i) => /*#__PURE__*/React.createElement("line", {
    key: "bh" + i,
    x1: 0,
    y1: y,
    x2: 800,
    y2: y,
    stroke: fg,
    strokeWidth: 0.5,
    opacity: 0.1
  })), [100, 200, 300, 400, 500, 600, 700].map((x, i) => /*#__PURE__*/React.createElement("line", {
    key: "bv" + i,
    x1: x,
    y1: 0,
    x2: x,
    y2: 480,
    stroke: fg,
    strokeWidth: 0.5,
    opacity: 0.1
  })), /*#__PURE__*/React.createElement("polyline", {
    points: "80,380 200,300 360,210 530,145 700,90",
    fill: "none",
    stroke: fg,
    strokeWidth: 2.5,
    opacity: 0.45
  }), [[80, 380], [200, 300], [360, 210], [530, 145], [700, 90]].map(([x, y], i) => /*#__PURE__*/React.createElement("g", {
    key: "bp" + i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: 7,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.55
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: 3,
    fill: fg,
    opacity: 0.6
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M40,50 L40,30 L60,30",
    stroke: fg,
    fill: "none",
    strokeWidth: 1.5,
    opacity: 0.35
  }), /*#__PURE__*/React.createElement("path", {
    d: "M760,50 L760,30 L740,30",
    stroke: fg,
    fill: "none",
    strokeWidth: 1.5,
    opacity: 0.35
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40,430 L40,450 L60,450",
    stroke: fg,
    fill: "none",
    strokeWidth: 1.5,
    opacity: 0.35
  }), /*#__PURE__*/React.createElement("path", {
    d: "M760,430 L760,450 L740,450",
    stroke: fg,
    fill: "none",
    strokeWidth: 1.5,
    opacity: 0.35
  })),
  // Rocket + dashed arc + milestone dots → MVP / shipping / launch
  launch: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, [[80, 60], [200, 100], [350, 40], [500, 80], [180, 190], [620, 150], [720, 50]].map(([x, y], i) => /*#__PURE__*/React.createElement("circle", {
    key: "ls" + i,
    cx: x,
    cy: y,
    r: 1.5,
    fill: fg,
    opacity: 0.3
  })), /*#__PURE__*/React.createElement("path", {
    d: "M100,440 C300,440 500,240 720,60",
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    strokeDasharray: "8 5",
    opacity: 0.35
  }), [[150, 420], [290, 360], [450, 260], [610, 145], [720, 60]].map(([x, y], i) => /*#__PURE__*/React.createElement("circle", {
    key: "lm" + i,
    cx: x,
    cy: y,
    r: i === 4 ? 8 : 5,
    fill: fg,
    opacity: 0.2 + i * 0.12
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(720,60) rotate(-45)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,-32 C12,-32 20,-10 20,12 L20,24 C20,28 12,32 0,32 C-12,32 -20,28 -20,24 L-20,12 C-20,-10 -12,-32 0,-32 Z",
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.65
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-20,20 L-33,37 L-20,30 Z",
    fill: fg,
    opacity: 0.45
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20,20 L33,37 L20,30 Z",
    fill: fg,
    opacity: 0.45
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 0,
    cy: -8,
    r: 8,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.55
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 0,
    cy: -8,
    r: 3,
    fill: fg,
    opacity: 0.5
  }))),
  // PCB traces + pads + chips → engineering / code / debugging
  circuit: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M100,240 L200,240 L200,140 L400,140 L400,200 L600,200 L600,100 L720,100",
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.3
  }), /*#__PURE__*/React.createElement("path", {
    d: "M100,340 L300,340 L300,280 L500,280 L500,380 L680,380",
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.3
  }), /*#__PURE__*/React.createElement("path", {
    d: "M400,200 L400,340 L500,340",
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.22
  }), /*#__PURE__*/React.createElement("path", {
    d: "M600,200 L600,340 L680,340",
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.22
  }), [[200, 240], [200, 140], [400, 140], [400, 200], [600, 200], [600, 100], [300, 340], [300, 280], [500, 280], [500, 380], [680, 380], [680, 340]].map(([x, y], i) => /*#__PURE__*/React.createElement("g", {
    key: "cp" + i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: 8,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.38
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: 3,
    fill: fg,
    opacity: 0.45
  }))), /*#__PURE__*/React.createElement("rect", {
    x: 340,
    y: 118,
    width: 120,
    height: 44,
    rx: 4,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.32
  }), /*#__PURE__*/React.createElement("rect", {
    x: 440,
    y: 258,
    width: 100,
    height: 44,
    rx: 4,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.32
  }), [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("line", {
    key: "cpl" + i,
    x1: 340 + i * 24 + 8,
    y1: 118,
    x2: 340 + i * 24 + 8,
    y2: 110,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.28
  })), [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("line", {
    key: "cpr" + i,
    x1: 440 + i * 24 + 8,
    y1: 258,
    x2: 440 + i * 24 + 8,
    y2: 250,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.28
  }))),
  // Gears + conveyor → manufacturing / industrial / operations
  gears: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: 310,
    cy: 240,
    r: 105,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.35
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 310,
    cy: 240,
    r: 72,
    fill: "none",
    stroke: fg,
    strokeWidth: 1,
    opacity: 0.18
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 310,
    cy: 240,
    r: 28,
    fill: "none",
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.38
  }), Array.from({
    length: 12
  }, (_, i) => {
    const a = i * 30 * Math.PI / 180;
    return /*#__PURE__*/React.createElement("line", {
      key: "gt" + i,
      x1: 310 + 105 * Math.sin(a),
      y1: 240 - 105 * Math.cos(a),
      x2: 310 + 122 * Math.sin(a),
      y2: 240 - 122 * Math.cos(a),
      stroke: fg,
      strokeWidth: 6,
      strokeLinecap: "round",
      opacity: 0.38
    });
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 490,
    cy: 175,
    r: 58,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.3
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 490,
    cy: 175,
    r: 40,
    fill: "none",
    stroke: fg,
    strokeWidth: 1,
    opacity: 0.16
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 490,
    cy: 175,
    r: 16,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.3
  }), Array.from({
    length: 8
  }, (_, i) => {
    const a = i * 45 * Math.PI / 180;
    return /*#__PURE__*/React.createElement("line", {
      key: "gs" + i,
      x1: 490 + 58 * Math.sin(a),
      y1: 175 - 58 * Math.cos(a),
      x2: 490 + 70 * Math.sin(a),
      y2: 175 - 70 * Math.cos(a),
      stroke: fg,
      strokeWidth: 5,
      strokeLinecap: "round",
      opacity: 0.3
    });
  }), /*#__PURE__*/React.createElement("line", {
    x1: 80,
    y1: 390,
    x2: 700,
    y2: 390,
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.25
  }), /*#__PURE__*/React.createElement("line", {
    x1: 80,
    y1: 410,
    x2: 700,
    y2: 410,
    stroke: fg,
    strokeWidth: 1,
    opacity: 0.15
  }), [110, 190, 270, 350, 430, 510, 590, 670].map((x, i) => /*#__PURE__*/React.createElement("circle", {
    key: "gr" + i,
    cx: x,
    cy: 400,
    r: 10,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.22
  }))),
  // Globe + lat/lon + location pins + arcs → distributed / remote / global
  globe: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: 400,
    cy: 240,
    r: 185,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.28
  }), [-100, -50, 0, 50, 100].map((dy, i) => {
    const r = Math.sqrt(Math.max(0, 185 * 185 - dy * dy));
    return /*#__PURE__*/React.createElement("ellipse", {
      key: "gl" + i,
      cx: 400,
      cy: 240 + dy,
      rx: r,
      ry: r * 0.28,
      fill: "none",
      stroke: fg,
      strokeWidth: 0.7,
      opacity: 0.14
    });
  }), [-0.9, -0.45, 0, 0.45, 0.9].map((f, i) => /*#__PURE__*/React.createElement("ellipse", {
    key: "gm" + i,
    cx: 400,
    cy: 240,
    rx: Math.abs(Math.sin(f * 1.3)) * 185 + 4,
    ry: 185,
    fill: "none",
    stroke: fg,
    strokeWidth: 0.7,
    opacity: 0.14
  })), [[310, 175], [510, 155], [245, 285], [570, 295], [415, 345]].map(([x, y], i) => /*#__PURE__*/React.createElement("g", {
    key: "gp" + i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: 7,
    fill: fg,
    opacity: 0.48
  }), /*#__PURE__*/React.createElement("line", {
    x1: x,
    y1: y,
    x2: x,
    y2: y - 22,
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.38
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y - 22,
    r: 3,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.38
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M310,175 Q410,135 510,155",
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    strokeDasharray: "5 4",
    opacity: 0.28
  }), /*#__PURE__*/React.createElement("path", {
    d: "M245,285 Q360,248 570,295",
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    strokeDasharray: "5 4",
    opacity: 0.28
  }), /*#__PURE__*/React.createElement("path", {
    d: "M510,155 Q492,248 415,345",
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    strokeDasharray: "5 4",
    opacity: 0.28
  })),
  // City skyline + floating data nodes → events / culture / industry
  skyline: ({
    fg
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, [{
    x: 55,
    y: 335,
    w: 62,
    h: 145
  }, {
    x: 127,
    y: 295,
    w: 52,
    h: 185
  }, {
    x: 188,
    y: 255,
    w: 82,
    h: 225
  }, {
    x: 280,
    y: 315,
    w: 62,
    h: 165
  }, {
    x: 352,
    y: 235,
    w: 72,
    h: 245
  }, {
    x: 434,
    y: 285,
    w: 58,
    h: 195
  }, {
    x: 502,
    y: 265,
    w: 92,
    h: 215
  }, {
    x: 604,
    y: 305,
    w: 66,
    h: 175
  }, {
    x: 680,
    y: 345,
    w: 72,
    h: 135
  }].map(({
    x,
    y,
    w,
    h
  }, i) => /*#__PURE__*/React.createElement("g", {
    key: "sb" + i
  }, /*#__PURE__*/React.createElement("rect", {
    x: x,
    y: y,
    width: w,
    height: h,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.25 + i % 3 * 0.06
  }), i % 3 === 0 && /*#__PURE__*/React.createElement("rect", {
    x: x + 8,
    y: y + 12,
    width: 12,
    height: 12,
    fill: fg,
    opacity: 0.12
  }), i % 3 === 1 && /*#__PURE__*/React.createElement("rect", {
    x: x + 10,
    y: y + 14,
    width: 10,
    height: 10,
    fill: fg,
    opacity: 0.1
  }), i % 3 === 2 && /*#__PURE__*/React.createElement("rect", {
    x: x + w - 22,
    y: y + 10,
    width: 14,
    height: 14,
    fill: fg,
    opacity: 0.12
  }))), /*#__PURE__*/React.createElement("line", {
    x1: 40,
    y1: 480,
    x2: 760,
    y2: 480,
    stroke: fg,
    strokeWidth: 1,
    opacity: 0.18
  }), [[198, 115], [385, 75], [562, 106], [703, 86], [118, 158]].map(([x, y], i) => /*#__PURE__*/React.createElement("g", {
    key: "sn" + i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: 11,
    fill: "none",
    stroke: fg,
    strokeWidth: 1.5,
    opacity: 0.42
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: 4,
    fill: fg,
    opacity: 0.48
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M198,115 Q292,68 385,75",
    fill: "none",
    stroke: fg,
    strokeWidth: 1.2,
    strokeDasharray: "5 4",
    opacity: 0.27
  }), /*#__PURE__*/React.createElement("path", {
    d: "M385,75 Q473,62 562,106",
    fill: "none",
    stroke: fg,
    strokeWidth: 1.2,
    strokeDasharray: "5 4",
    opacity: 0.27
  }), /*#__PURE__*/React.createElement("path", {
    d: "M562,106 Q632,88 703,86",
    fill: "none",
    stroke: fg,
    strokeWidth: 1.2,
    strokeDasharray: "5 4",
    opacity: 0.27
  }), /*#__PURE__*/React.createElement("path", {
    d: "M198,115 Q155,135 118,158",
    fill: "none",
    stroke: fg,
    strokeWidth: 1.2,
    strokeDasharray: "5 4",
    opacity: 0.22
  }), /*#__PURE__*/React.createElement("path", {
    d: "M198,115 Q192,185 188,255",
    fill: "none",
    stroke: fg,
    strokeWidth: 0.8,
    strokeDasharray: "4 4",
    opacity: 0.18
  }), /*#__PURE__*/React.createElement("path", {
    d: "M385,75 Q374,155 352,235",
    fill: "none",
    stroke: fg,
    strokeWidth: 0.8,
    strokeDasharray: "4 4",
    opacity: 0.18
  }), /*#__PURE__*/React.createElement("path", {
    d: "M562,106 Q538,185 502,265",
    fill: "none",
    stroke: fg,
    strokeWidth: 0.8,
    strokeDasharray: "4 4",
    opacity: 0.18
  }))
};
function BlogCover({
  cover,
  illus,
  label,
  large = false
}) {
  const c = COVER_COLORS[cover] || COVER_COLORS.ink;
  const IllusComponent = illus && ILLUSTRATIONS[illus];
  return /*#__PURE__*/React.createElement("div", {
    className: "blog-visual-cover" + (large ? " is-large" : ""),
    style: {
      background: c.bg
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 800 480",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "bc-" + cover,
    width: "60",
    height: "60",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.5",
    fill: c.fg,
    opacity: "0.08"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "800",
    height: "480",
    fill: "url(#bc-" + cover + ")"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "680",
    cy: "420",
    r: "210",
    fill: c.accent,
    opacity: "0.15"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "90",
    cy: "75",
    r: "150",
    fill: c.accent,
    opacity: "0.10"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "650",
    cy: "90",
    r: "260",
    fill: c.fg,
    opacity: "0.05"
  }), IllusComponent && /*#__PURE__*/React.createElement(IllusComponent, {
    fg: c.fg,
    accent: c.accent || "#F97316"
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "blog-visual-label",
    style: {
      color: c.fg
    }
  }, label));
}

// ─────────────────────────────────────────────────────────────────
// Avatar, shows photo when author.photo is set, initial otherwise
// ─────────────────────────────────────────────────────────────────
function BlogAvatar({
  author,
  sm = false
}) {
  const cls = "blog-avatar" + (sm ? " blog-avatar--sm" : "");
  if (author && author.photo) {
    return /*#__PURE__*/React.createElement("div", {
      className: cls,
      style: {
        overflow: "hidden",
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: author.photo,
      alt: author.name,
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, author ? author.initial : "");
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
  useEffectBL(() => {
    const t = "Blog, AI Engineering, Product & Operations | 7Code";
    const d = "Field notes from 7code's AI engineering practice: LLM features, agentic workflows, AI MVPs, and production AI — written by the team building them in Cluj-Napoca.";
    document.title = t;
    setMeta("description", d);
    setMeta("og:title", t, "property");
    setMeta("og:description", d, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", SITE_ORIGIN_BL + "/blog", "property");
    setMeta("twitter:title", t, "name");
    setMeta("twitter:description", d, "name");
    setCanonical(SITE_ORIGIN_BL + "/blog");
    setArticleJsonLd(null);
  }, []);
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
  }, "Blog"), /*#__PURE__*/React.createElement("h1", null, "Field notes from an AI-first engineering practice"), /*#__PURE__*/React.createElement("p", null, "How we ship LLM features, run agentic workflows, structure AI MVPs, and operate AI products in production, written by the people doing it."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, showFeatured && /*#__PURE__*/React.createElement("a", {
    href: "/blog/" + featured.slug,
    className: "blog-featured-card reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-featured-cover"
  }, /*#__PURE__*/React.createElement(BlogCover, {
    cover: featured.cover,
    illus: featured.illus,
    large: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "blog-featured-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-feat-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "blog-cat-pill"
  }, featured.cat), /*#__PURE__*/React.createElement("span", {
    className: "blog-feat-date"
  }, featured.date, " \xB7 ", featured.read)), /*#__PURE__*/React.createElement("h2", {
    className: "blog-feat-title"
  }, featured.title), /*#__PURE__*/React.createElement("p", {
    className: "blog-feat-sub"
  }, featured.subtitle), /*#__PURE__*/React.createElement("div", {
    className: "blog-feat-author"
  }, /*#__PURE__*/React.createElement(BlogAvatar, {
    author: featured.author
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "blog-author-name"
  }, featured.author.name), /*#__PURE__*/React.createElement("div", {
    className: "blog-author-role"
  }, featured.author.role))), /*#__PURE__*/React.createElement("span", {
    className: "blog-read-link"
  }, "Read article ", /*#__PURE__*/React.createElement(Icon.arrow, null)))), /*#__PURE__*/React.createElement("div", {
    className: "blog-filter"
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: "blog-filter-btn" + (c === active ? " is-active" : ""),
    onClick: () => setActive(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    className: "blog-post-grid"
  }, filtered.map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: p.slug,
    href: "/blog/" + p.slug,
    className: "blog-post-card reveal",
    style: {
      transitionDelay: i % 3 * 60 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-post-cover"
  }, /*#__PURE__*/React.createElement(BlogCover, {
    cover: p.cover,
    illus: p.illus
  })), /*#__PURE__*/React.createElement("div", {
    className: "blog-post-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-post-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "blog-cat-pill blog-cat-pill--sm"
  }, p.cat), /*#__PURE__*/React.createElement("span", {
    className: "blog-post-date"
  }, p.date, " \xB7 ", p.read)), /*#__PURE__*/React.createElement("h3", {
    className: "blog-post-title"
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "blog-post-sub"
  }, p.subtitle), /*#__PURE__*/React.createElement("div", {
    className: "blog-post-foot"
  }, /*#__PURE__*/React.createElement(BlogAvatar, {
    author: p.author,
    sm: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "blog-author-name"
  }, p.author.name)))))), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "64px 0",
      color: "var(--slate-500)"
    }
  }, "No posts in this category yet."))), /*#__PURE__*/React.createElement(CTAStrip, null));
}

// ─────────────────────────────────────────────────────────────────
// Blog Post Body Renderer
// ─────────────────────────────────────────────────────────────────
function PostBody({
  blocks
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "blog-post-article"
  }, blocks.map((b, i) => {
    if (b.type === "lead") return /*#__PURE__*/React.createElement("p", {
      key: i,
      className: "blog-post-lead"
    }, b.text);
    if (b.type === "h2") return /*#__PURE__*/React.createElement("h2", {
      key: i,
      className: "blog-post-h2"
    }, b.text);
    if (b.type === "p") return /*#__PURE__*/React.createElement("p", {
      key: i,
      className: "blog-post-p"
    }, b.text);
    if (b.type === "p-html") return /*#__PURE__*/React.createElement("p", {
      key: i,
      className: "blog-post-p",
      dangerouslySetInnerHTML: {
        __html: b.text
      }
    });
    if (b.type === "related-guide") return /*#__PURE__*/React.createElement("a", {
      key: i,
      href: b.href,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        padding: "20px 28px",
        margin: "32px 0",
        background: "var(--bg-cyan-50)",
        border: "1px solid var(--cyan-300)",
        borderRadius: 14,
        textDecoration: "none",
        transition: "border-color 0.15s, background 0.15s"
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = "var(--bg-cyan-100)";
        e.currentTarget.style.borderColor = "var(--cyan-500)";
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = "var(--bg-cyan-50)";
        e.currentTarget.style.borderColor = "var(--cyan-300)";
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "var(--cyan-600)",
        marginBottom: 4
      }
    }, "Related guide"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 600,
        color: "var(--slate-800)"
      }
    }, b.title), b.desc && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--slate-500)",
        marginTop: 2
      }
    }, b.desc)), /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        width: 36,
        height: 36,
        borderRadius: "50%",
        background: "var(--cyan-600)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff"
      }
    }, /*#__PURE__*/React.createElement(Icon.arrow, null)));
    if (b.type === "callout") return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "blog-callout"
    }, /*#__PURE__*/React.createElement("div", {
      className: "blog-callout-icon"
    }, /*#__PURE__*/React.createElement(Icon.zap, {
      style: {
        width: 18,
        height: 18
      }
    })), /*#__PURE__*/React.createElement("p", null, b.text));
    if (b.type === "bullets") return /*#__PURE__*/React.createElement("ul", {
      key: i,
      className: "blog-post-bullets"
    }, b.items.map((item, j) => /*#__PURE__*/React.createElement("li", {
      key: j
    }, /*#__PURE__*/React.createElement("span", {
      className: "blog-bullet-dot"
    }), item)));
    if (b.type === "table") return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "blog-post-table-wrap",
      style: {
        overflowX: "auto",
        margin: "24px 0"
      }
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: "100%",
        borderCollapse: "collapse",
        fontSize: 15,
        lineHeight: 1.6
      }
    }, b.head && /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, b.head.map((h, j) => /*#__PURE__*/React.createElement("th", {
      key: j,
      style: {
        textAlign: "left",
        padding: "10px 14px",
        background: "var(--slate-100)",
        fontFamily: "var(--font-display)",
        color: "var(--slate-800)",
        borderBottom: "2px solid var(--slate-200)",
        fontWeight: 700
      }
    }, h)))), /*#__PURE__*/React.createElement("tbody", null, b.rows.map((row, j) => /*#__PURE__*/React.createElement("tr", {
      key: j,
      style: {
        borderBottom: "1px solid var(--slate-100)",
        background: j % 2 === 0 ? "transparent" : "var(--slate-50)"
      }
    }, row.map((cell, k) => /*#__PURE__*/React.createElement("td", {
      key: k,
      style: {
        padding: "10px 14px",
        color: k === 0 ? "var(--slate-800)" : "var(--slate-600)",
        fontWeight: k === 0 ? 600 : 400
      }
    }, cell)))))));
    return null;
  }));
}

// ─────────────────────────────────────────────────────────────────
// Single Blog Post Page
// ─────────────────────────────────────────────────────────────────
function BlogPostPage({
  slug
}) {
  const post = POSTS.find(p => p.slug === slug) || POSTS[0];
  const related = POSTS.filter(p => p.slug !== post.slug && p.cat === post.cat).slice(0, 2);
  const nextPost = POSTS[(POSTS.indexOf(post) + 1) % POSTS.length];
  useEffectBL(() => {
    const t = post.title + " | 7Code Blog";
    const d = post.subtitle;
    const url = SITE_ORIGIN_BL + "/blog/" + post.slug;
    document.title = t;
    setMeta("description", d);
    setMeta("og:title", t, "property");
    setMeta("og:description", d, "property");
    setMeta("og:type", "article", "property");
    setMeta("og:url", url, "property");
    setMeta("twitter:title", t, "name");
    setMeta("twitter:description", d, "name");
    setCanonical(url);
    setArticleJsonLd(post);
    return () => {
      setArticleJsonLd(null);
    };
  }, [post.slug]);
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("section", {
    className: "blog-single-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-single-breadcrumb"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/blog"
  }, "Blog"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, post.cat)), /*#__PURE__*/React.createElement("div", {
    className: "blog-single-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "blog-cat-pill"
  }, post.cat), /*#__PURE__*/React.createElement("span", {
    className: "blog-single-date"
  }, post.date, " \xB7 ", post.read)), /*#__PURE__*/React.createElement("h1", {
    className: "blog-single-title"
  }, post.title), /*#__PURE__*/React.createElement("p", {
    className: "blog-single-sub"
  }, post.subtitle), /*#__PURE__*/React.createElement("div", {
    className: "blog-single-author"
  }, /*#__PURE__*/React.createElement(BlogAvatar, {
    author: post.author
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "blog-author-name"
  }, post.author.name), /*#__PURE__*/React.createElement("div", {
    className: "blog-author-role"
  }, post.author.role))))), /*#__PURE__*/React.createElement("div", {
    className: "blog-single-cover-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(BlogCover, {
    cover: post.cover,
    illus: post.illus,
    large: true,
    label: post.cat
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container blog-single-layout"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "blog-single-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-sidebar-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-sidebar-label"
  }, "Written by"), /*#__PURE__*/React.createElement("div", {
    className: "blog-sidebar-author"
  }, /*#__PURE__*/React.createElement(BlogAvatar, {
    author: post.author
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "blog-author-name"
  }, post.author.name), /*#__PURE__*/React.createElement("div", {
    className: "blog-author-role"
  }, post.author.role))), /*#__PURE__*/React.createElement("div", {
    className: "blog-sidebar-label",
    style: {
      marginTop: 20
    }
  }, "Published"), /*#__PURE__*/React.createElement("div", {
    className: "blog-sidebar-date"
  }, post.date), /*#__PURE__*/React.createElement("div", {
    className: "blog-sidebar-label",
    style: {
      marginTop: 12
    }
  }, "Reading time"), /*#__PURE__*/React.createElement("div", {
    className: "blog-sidebar-date"
  }, post.read), /*#__PURE__*/React.createElement("div", {
    className: "blog-sidebar-label",
    style: {
      marginTop: 12
    }
  }, "Category"), /*#__PURE__*/React.createElement("span", {
    className: "blog-cat-pill",
    style: {
      marginTop: 6
    }
  }, post.cat)), /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--primary",
    style: {
      width: "100%",
      justifyContent: "center",
      marginTop: 16
    }
  }, "Work with us ", /*#__PURE__*/React.createElement(Icon.arrow, null))), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PostBody, {
    blocks: post.body
  }), related.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "blog-related"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "blog-related-head"
  }, "More in ", post.cat), /*#__PURE__*/React.createElement("div", {
    className: "blog-related-grid"
  }, related.map(r => /*#__PURE__*/React.createElement("a", {
    key: r.slug,
    href: "/blog/" + r.slug,
    className: "blog-related-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-related-cover"
  }, /*#__PURE__*/React.createElement(BlogCover, {
    cover: r.cover,
    illus: r.illus
  })), /*#__PURE__*/React.createElement("div", {
    className: "blog-related-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-post-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "blog-cat-pill blog-cat-pill--sm"
  }, r.cat), /*#__PURE__*/React.createElement("span", {
    className: "blog-post-date"
  }, r.date)), /*#__PURE__*/React.createElement("h4", null, r.title)))))), /*#__PURE__*/React.createElement("a", {
    href: "/blog/" + nextPost.slug,
    className: "blog-next-post"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-next-label"
  }, "Next article"), /*#__PURE__*/React.createElement("div", {
    className: "blog-next-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "blog-next-cat"
  }, nextPost.cat), /*#__PURE__*/React.createElement("div", {
    className: "blog-next-title"
  }, nextPost.title)), /*#__PURE__*/React.createElement("span", {
    className: "blog-next-arrow"
  }, /*#__PURE__*/React.createElement(Icon.arrow, null))))))), /*#__PURE__*/React.createElement(CTAStrip, null));
}

// ─────────────────────────────────────────────────────────────────
// Router wrapper, list or single
// ─────────────────────────────────────────────────────────────────
function BlogRouter({
  slug
}) {
  if (slug) return /*#__PURE__*/React.createElement(BlogPostPage, {
    slug: slug
  });
  return /*#__PURE__*/React.createElement(BlogListPage, null);
}
window.POSTS = POSTS;
window.BlogRouter = BlogRouter;/* global React, Icon, CSCover, CTAStrip */
/* Service detail pages, slug-routed */

const {
  useState: useStateSVC
} = React;

// ─────────────────────────────────────────────────────────────────
// Service data
// ─────────────────────────────────────────────────────────────────
const SERVICES_DATA = {
  "ai-product-engineering": {
    slug: "ai-product-engineering",
    title: "AI-Native Product Engineering",
    shortTitle: "AI Product Engineering",
    tagline: "We discover, design, and ship AI-native web and mobile products end-to-end, from user research and UX design through LLM features, agent workflows, and the backend infrastructure to run them reliably in production. Not retrofits. Not wrappers.",
    summary: "7Code is an AI-first product engineering company. We treat AI as a foundational capability, not a layer bolted on at the end: the data model, the retrieval and inference loops, the evaluation harness, and the UX are designed together from week one. The products we ship, Daily8 (UAE news aggregator with AI moderation and summarisation), WholeSum (self-serve qualitative-data analytics), and OctoLabs (AI support copilot), improve with every user interaction and scale cleanly as data and traffic grow.",
    icon: "code",
    accentColor: "#06B6D4",
    stats: [{
      v: "20+",
      l: "Projects delivered"
    }, {
      v: "6 wks",
      l: "to first production deploy"
    }, {
      v: "Web + Mobile",
      l: "full-stack delivery"
    }, {
      v: "HIPAA · SOC 2",
      l: "compliance-ready"
    }],
    problem: {
      title: "Bolting AI onto a product built without it is expensive. Usually too expensive.",
      body: "The teams that regret their architecture are the ones who built a clean CRUD app first and tried to add intelligence later. The data model doesn't support retrieval. The latency budget is gone. The UX was never designed for streaming responses or model uncertainty. We've inherited enough of these codebases to know: designing for LLMs and agents from day one costs far less than retrofitting them later, and the products that result are categorically better, faster to ship, and easier to evaluate."
    },
    whatWeDeliver: [{
      title: "AI-native web applications",
      desc: "Next.js and React apps with AI workflows embedded in the product experience, semantic search, RAG over your data, real-time suggestions, intelligent routing, and dynamic content grounded in retrieval."
    }, {
      title: "Intelligent mobile apps",
      desc: "React Native and native iOS/Android apps with personalisation loops, on-device inference where it matters, and AI features that hold up offline. We've shipped AI mobile in media (Daily8), healthcare, and enterprise SaaS."
    }, {
      title: "LLM-first user interfaces",
      desc: "Chat interfaces, copilots, and agentic dashboards designed for streaming, latency, and model uncertainty. We handle confidence displays, fallback paths, and tool-use UX, not just the happy path."
    }, {
      title: "Agent and workflow infrastructure",
      desc: "Multi-step agent pipelines with tool use, memory, and human-in-the-loop checkpoints. Built on LangGraph or first-party SDKs (Anthropic, OpenAI), with eval harnesses and replay so behaviour is auditable."
    }, {
      title: "AI-ready data and retrieval layer",
      desc: "The backend that makes AI possible: event streams, vector stores (pgvector, Pinecone), embedding pipelines, and the API contracts that keep your frontend fast while the model thinks."
    }, {
      title: "Legacy integration and migration",
      desc: "We connect your AI-native product to the systems that hold your real data, EHRs, ERPs, CRMs, and the internal tools that predate modern APIs. No greenfield silos."
    }, {
      title: "Product discovery & UX design",
      desc: "User research, assumption mapping, information architecture, and AI-aware UX patterns, streaming states, confidence indicators, citation displays, and fallback flows, designed before engineering begins. We deliver Figma components and a design system your engineers can build from without interpretation."
    }],
    techStack: {
      "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
      "Mobile": ["React Native", "Expo", "Swift", "Kotlin"],
      "AI & LLM": ["Claude (Anthropic)", "GPT (OpenAI)", "LangGraph", "pgvector", "Pinecone", "Eval harnesses"],
      "Backend & Data": ["Node.js", "Nest.js", "PostgreSQL", "AWS Lambda", "Kafka", "Prisma"],
      "Design & UX": ["Figma", "FigJam", "Storybook", "design tokens", "Maze"]
    },
    process: [{
      step: "01",
      title: "AI capability scoping, before the spec",
      desc: "We map product requirements against LLM and agent capabilities in week one, before any specification is written. Architecture decisions made early, data model, retrieval strategy, evaluation criteria, feedback loops, have a 10× impact on what's possible by month six. We get these right first."
    }, {
      step: "02",
      title: "Two-week sprints with AI checkpoints",
      desc: "Every sprint ends with a deployable build and a measurable eval delta. At each review we score AI features against a held-out evaluation set, not just demo prompts, so quality moves in one direction and regressions are caught the day they happen."
    }, {
      step: "03",
      title: "Production hardening and handoff",
      desc: "The final phase covers prompt management, model versioning, evaluation CI, observability, and cost controls. We do not hand off without an eval harness your team can run, dashboards for token spend and latency, and a runbook for when a model degrades. The engagement finishes when your team can operate the system independently."
    }],
    cases: ["wholesum", "daily8", "hera"],
    seoTitle: "AI Product Engineering — Nearshore Senior Team | 7code",
    metaDescription: "AI-native product engineering by 7Code. LLM-powered web and mobile products, agents, RAG, evals, and cloud infrastructure for production.",
    faqs: [{
      q: "What does 'AI-native' mean in practice?",
      a: "It means LLMs, retrieval, and agents are designed into the product from week one, the data model, the API contracts, the evaluation harness, and the UX are all shaped around how AI features actually behave (streaming, latency, uncertainty). Most 'AI features' are bolted on later; AI-native products are architected for them from the start, which is why they ship faster and scale cleaner."
    }, {
      q: "How long does it take to ship an AI-native product?",
      a: "Six weeks to a first production deploy is typical. From kick-off to a public launch usually takes 12–24 weeks depending on scope. We've shipped Daily8 (UAE news aggregator with AI moderation and summarisation) in six months and OctoLabs (AI support copilot) in six weeks. We do not run multi-quarter discovery phases, every two-week sprint ends with deployable software."
    }, {
      q: "Which LLM providers do you work with?",
      a: "We're provider-agnostic and route between Claude (Anthropic), GPT (OpenAI), and open-weight models (Llama, Mistral via Ollama or vLLM) based on cost, latency, and quality on your specific eval set. We design the codebase so the provider can change without rewrites."
    }, {
      q: "How do you measure AI quality before shipping?",
      a: "Every engagement opens with the construction of a held-out evaluation set, a representative sample of inputs paired with criteria for what 'good' looks like. We score every release against it (with frameworks like RAGAS or custom evals), gate deployments on the score, and surface regressions before they reach users. No vibes, no demo bias."
    }, {
      q: "What happens after launch?",
      a: "We hand off prompt management, model versioning, evaluation CI, and observability for token cost and latency. Your team owns it, but we stay on as embedded engineers (via outstaffing) or on a maintenance retainer for the first few months, monitoring drift and helping with feature additions. Most clients keep us on long-term."
    }, {
      q: "Are you compliance-ready for regulated industries?",
      a: "Yes. We've shipped HIPAA-compliant healthcare apps, SOC 2-aligned fintech tools, and security-cleared defence platforms. AI features add new compliance considerations (PII redaction, output filtering, audit logs for model decisions); we build for them from the start."
    }],
    next: {
      slug: "llm-agent-development",
      title: "LLM & Agent Development"
    }
  },
  "system-integrations": {
    slug: "system-integrations",
    title: "System Integrations",
    shortTitle: "System Integrations",
    tagline: "We connect your stack, ERPs, CRMs, data warehouses, SaaS tools, and legacy systems, into one reliable, observable data fabric ready to carry an AI layer on top.",
    summary: "Most companies don't have a data problem. They have a fragmentation problem. The data exists, but it's spread across a CRM, an ERP, a dozen SaaS tools, and a handful of databases nobody fully understands. We build the integration layer that connects them, Kafka or webhooks for events, dbt or Airbyte for batch, clean APIs in front, so your operational data is reliable, auditable, and ready to be retrieved by an LLM or agent without surprises.",
    icon: "globe",
    accentColor: "#0E7C90",
    stats: [{
      v: "32+",
      l: "integration connectors built"
    }, {
      v: "< 60s",
      l: "event latency target"
    }, {
      v: "99.9%",
      l: "pipeline uptime SLA"
    }, {
      v: "6 wks",
      l: "typical delivery"
    }],
    problem: {
      title: "Your systems don't talk to each other. Every team is working from a different version of the truth.",
      body: "The pattern is always the same: sales works in the CRM, finance works in the ERP, operations works in a spreadsheet, and the weekly sync meeting exists to reconcile all three. Manual exports, CSV imports, and copy-paste workflows that break the moment one field changes. The cost is measured in analyst hours, delayed decisions, and, increasingly, AI features that hallucinate because the retrieval layer can't trust the source data."
    },
    whatWeDeliver: [{
      title: "API design and middleware",
      desc: "Clean, versioned APIs and middleware that translate between your systems, handling authentication, rate limiting, retry logic, idempotency, and the edge cases every integration eventually hits."
    }, {
      title: "ERP and CRM connectors",
      desc: "Bi-directional sync between Salesforce, HubSpot, SAP, NetSuite, Microsoft Dynamics, and your internal systems. We've mapped the data models, handled the conflict resolution, and built what generic iPaaS tools skip."
    }, {
      title: "Real-time event pipelines",
      desc: "Event-driven architectures (Apache Kafka, AWS SNS/SQS, webhooks, change-data-capture via Debezium) that propagate changes in seconds, not overnight batches. The foundation for any agent that reacts to business events."
    }, {
      title: "Legacy system integration",
      desc: "We've integrated SOAP services, mainframe exports, FTP batch files, and systems that predate REST. If it exposes any interface, file, database, API, or message queue, we can build a reliable connector for it."
    }, {
      title: "AI-ready data warehouse pipelines",
      desc: "ELT into Snowflake, BigQuery, or Redshift with dbt-modelled transforms. Same warehouse feeds your BI dashboards and your retrieval pipelines (pgvector, Pinecone), one source of truth for humans and LLMs alike."
    }, {
      title: "Integration observability",
      desc: "Dashboards, alerting, and audit logs for every pipeline we build. You'll know when a sync failed, which records were affected, and what the system did about it, before your users (or your AI) file a ticket."
    }],
    techStack: {
      "Messaging & streaming": ["Apache Kafka", "AWS SQS / SNS", "RabbitMQ", "Webhooks", "Debezium CDC"],
      "ELT & pipelines": ["Airbyte", "dbt", "AWS Glue", "Fivetran", "custom ELT"],
      "API & middleware": ["Node.js", "Nest.js", "Python", "GraphQL", "REST", "gRPC"],
      "Data warehouses": ["Snowflake", "BigQuery", "Redshift", "PostgreSQL"]
    },
    process: [{
      step: "01",
      title: "Integration audit and architecture",
      desc: "We map every system, every data flow, and every manual handoff in your current stack. Output: an integration architecture decision record, what connects to what, in what direction, with what latency and reliability requirements, signed off before we write a line of code."
    }, {
      step: "02",
      title: "Connector-by-connector delivery",
      desc: "We build and ship integrations one connector at a time, validating each in production before moving to the next. A working integration shipped every two weeks, not a big-bang go-live six months from now."
    }, {
      step: "03",
      title: "Observability, runbooks, and handoff",
      desc: "Every pipeline ships with a monitoring dashboard, alerting rules, and a runbook your team can follow when something breaks at 2am. We do not consider an integration finished until it has been in production long enough to fail once and recover cleanly."
    }],
    cases: ["g42-fleet", "numerize", "revote"],
    seoTitle: "System Integration Services for AI Workloads | 7code",
    metaDescription: "System integrations by 7Code. We connect ERPs, CRMs, SaaS tools, data warehouses, and legacy systems into a reliable data fabric for AI workloads.",
    faqs: [{
      q: "How is this different from an iPaaS like Zapier or Workato?",
      a: "iPaaS tools are great for simple, low-volume workflows. They tend to break down on three things: high-throughput events, complex conflict resolution between bi-directional syncs, and observability you can audit. We build custom integration layers (often using Kafka, dbt, and a thin API gateway) when you need reliability, latency, and control beyond what an iPaaS provides, usually because an AI or operational system is consuming the data downstream."
    }, {
      q: "Can you integrate with our legacy or on-prem systems?",
      a: "Yes, SOAP, mainframe exports, FTP batch files, and on-prem databases behind a VPN are all fair game. If it exposes any interface (file, database, API, or message queue), we can build a reliable connector for it. We've done this in healthcare (HL7, FHIR), banking (SWIFT, FIX), and energy (SCADA gateways)."
    }, {
      q: "How long does a typical integration take?",
      a: "Six weeks for a single bi-directional connector with full observability and runbooks. Multi-system data fabrics with 5–10 connectors usually run 3–6 months, but we deliver one working integration to production every two weeks throughout, not a big-bang launch at the end."
    }, {
      q: "Does the integration layer make us 'AI-ready'?",
      a: "Yes, that's a deliberate design goal. The same dbt-modelled warehouse, event streams, and API contracts that power your BI also feed retrieval pipelines (pgvector, Pinecone) and agent tools. AI is much cheaper and more reliable to add when the integration foundation is already clean."
    }, {
      q: "Who owns the integrations after launch?",
      a: "Your team. We hand off Terraform / Pulumi infra-as-code, monitoring dashboards, alerting rules, and a runbook for each connector. We can stay on for ongoing maintenance, but most clients run it themselves after a 30-day post-launch handover period."
    }],
    next: {
      slug: "ai-automation",
      title: "AI & Process Automation"
    }
  },
  "ai-automation": {
    slug: "ai-automation",
    title: "AI & Process Automation",
    shortTitle: "AI & Automation",
    tagline: "LLM integrations, RAG copilots, and agentic workflow automation, grounded in your data, evaluated against held-out sets, and built to compound value with every interaction.",
    summary: "AI only matters when it changes a workflow someone actually runs. We build production-grade AI systems, RAG copilots, agent pipelines, and automations, that ground every answer in your real data, get scored against a held-out evaluation set before each release, and improve with use. We've shipped the AI moderation, daily-summary, and unbiased-opinion features inside Daily8 (UAE news aggregator), the qualitative-analytics engine inside WholeSum, and the OctoLabs support copilot that deflects 47% of tickets, and we know the difference between a demo and a production system.",
    icon: "cpu",
    accentColor: "#7C3AED",
    stats: [{
      v: "47%",
      l: "avg ticket deflection"
    }, {
      v: "RAG + agents",
      l: "primary architecture"
    }, {
      v: "Claude · GPT",
      l: "LLM options"
    }, {
      v: "6 wks",
      l: "to production copilot"
    }],
    problem: {
      title: "Most AI projects fail in the gap between demo and production.",
      body: "The demo works because it is curated. Production does not work because it is real. Users ask unexpected questions, reference documents the model was never shown, and escalate to a human when the AI gives confidently wrong answers. We build the eval infrastructure, retrieval grounding, fallback paths, and confidence calibration that makes AI behave reliably under traffic, and the observability that catches drift before users notice."
    },
    whatWeDeliver: [{
      title: "Custom RAG copilots",
      desc: "LLM-powered assistants grounded in your data, documents, tickets, CRM, knowledge base, with cited answers, not hallucinated ones. We design the chunking, embedding, and retrieval strategy specifically for your corpus, then prove it on an eval set."
    }, {
      title: "Agentic workflow automation",
      desc: "Multi-step agents that take scoped, auditable actions on your behalf, calling tools, writing to systems, escalating to humans on confidence thresholds. Built on LangGraph or first-party SDKs (Anthropic, OpenAI), with full state persistence and replay."
    }, {
      title: "RAG pipelines that actually work",
      desc: "Retrieval-augmented generation tuned for production: chunking strategy, embedding choice, hybrid retrieval (semantic + keyword), reranking, and the held-out eval set that proves it."
    }, {
      title: "LLM evaluation harnesses",
      desc: "RAGAS, Braintrust, or custom eval frameworks that score every release against a representative prompt set. You get a number, not a vibe, before you ship, and gates in CI block regressions."
    }, {
      title: "Process mining and automation discovery",
      desc: "Workflow analysis to identify the highest-leverage automation opportunities in your operations, before writing any code. Cuts wasted prototype effort dramatically."
    }, {
      title: "Fine-tuning and preference optimisation",
      desc: "When a base model isn't enough, structured fine-tuning on your domain data (LoRA, full fine-tune), DPO/RLHF for preference alignment, and the evaluation harness to prove it worked."
    }],
    techStack: {
      "LLM providers": ["Claude (Anthropic)", "GPT (OpenAI)", "Mistral", "Llama via Ollama / vLLM"],
      "RAG & Embeddings": ["LangChain", "LangGraph", "LlamaIndex", "pgvector", "Pinecone"],
      "Evaluation": ["RAGAS", "Braintrust", "Inspect", "custom eval frameworks"],
      "Automation & agents": ["LangGraph", "Temporal", "n8n", "first-party SDKs"]
    },
    process: [{
      step: "01",
      title: "Use-case scoping and eval design",
      desc: "We define success before building anything. What does 'good' look like? How do we measure it? Output: a held-out evaluation set that doubles as the specification, every model, prompt, or pipeline change is scored against it."
    }, {
      step: "02",
      title: "Prototype, evaluate, iterate",
      desc: "Two-week cycles: build a narrow version, run it against the eval set, measure, and iterate. We show you the score at every review, and the failure cases that drive the next sprint."
    }, {
      step: "03",
      title: "Production hardening and operate",
      desc: "Confidence thresholds, fallback paths, audit logging, eval CI, token-cost dashboards, and the drift monitoring that tells you when output quality degrades. We do not ship without these, and we can stay on to operate the system if you'd rather your team not learn it overnight."
    }],
    cases: ["wholesum", "daily8", "melsonic"],
    seoTitle: "AI Process Automation Services — 7code | AI-Native Agency",
    metaDescription: "AI process automation by 7Code. RAG copilots, agentic workflows, and LLM integrations grounded in your data, evaluated rigorously, shipped to production.",
    faqs: [{
      q: "What is RAG, and why does it matter?",
      a: "Retrieval-augmented generation grounds an LLM's answer in your real data, documents, tickets, knowledge base, by retrieving relevant context at query time and including it in the prompt. It dramatically reduces hallucinations, lets the model cite sources, and means you don't need to fine-tune (or wait for the next model release) to teach it about your business. Almost every production copilot we ship is RAG-based."
    }, {
      q: "How do you stop the AI from hallucinating?",
      a: "Three layers: (1) retrieval grounding so the model has the right context, (2) prompt design that requires citations and refuses confidently when context is missing, (3) a held-out evaluation set that scores hallucination rate as a metric we gate releases on. We also add confidence thresholds at runtime, when the model isn't confident, it escalates to a human instead of guessing."
    }, {
      q: "Should we use Claude or GPT?",
      a: "Both, usually. We're provider-agnostic and benchmark on your specific eval set, then route between Claude (Anthropic), GPT (OpenAI), and open-weight models (Llama, Mistral) based on cost, latency, and quality per task. The codebase is structured so the provider can change without rewrites."
    }, {
      q: "How long until we have a working AI feature in production?",
      a: "Six weeks is typical for a first production copilot or agent. OctoLabs went from kick-off to a production support copilot deflecting tickets in six weeks. Daily8's AI moderation and summarisation features shipped inside the broader six-month engagement."
    }, {
      q: "What's the difference between automation and agents?",
      a: "Automation runs a fixed sequence of steps. Agents decide what step to take next based on the situation. Most useful systems are a mix: deterministic workflows where the path is known, agent loops where the path depends on the data. We design which is which carefully, autonomous agents are powerful but harder to evaluate and govern."
    }, {
      q: "Do you fine-tune models, or stick to prompting?",
      a: "Default is prompting + RAG, because it's faster, cheaper, and easier to evaluate. We fine-tune (LoRA or full) when the base model can't reach the eval target on a specific task, usually domain-specific reasoning, structured output formats, or proprietary tone. We always measure the fine-tuned model against the same held-out set to prove it actually helps."
    }],
    next: {
      slug: "llm-agent-development",
      title: "LLM & Agent Development"
    }
  },
  "cloud-agentic-infra": {
    slug: "cloud-agentic-infra",
    title: "Cloud & Agentic Infrastructure",
    shortTitle: "Cloud & Agentic Infra",
    tagline: "Cloud-native foundations and agentic pipeline orchestration on AWS, GCP, and Azure, so your AI products run reliably, scale automatically, and cost what they should.",
    summary: "Building an AI product is only half the job. The teams that ship reliably are not just good at models, they are good at infrastructure: agent pipelines that run on a schedule, recover from failure, and route intelligently between tools; observability that surfaces prompt drift before a customer notices; CI gates on eval scores instead of test coverage. We build that layer, cloud-native foundations on AWS, GCP, and Azure, vector database deployments (pgvector, Pinecone, Qdrant, Weaviate), agent orchestration on LangGraph and Temporal, and the cost and latency controls that keep your AI bill predictable.",
    icon: "cloud",
    accentColor: "#0891B2",
    stats: [{
      v: "< 3 min",
      l: "target deploy time"
    }, {
      v: "99.9%",
      l: "uptime SLA"
    }, {
      v: "AWS · GCP · Azure",
      l: "primary platforms"
    }, {
      v: "< 1 hr",
      l: "MTTR target"
    }],
    problem: {
      title: "AI products fail in production for infrastructure reasons, not model reasons.",
      body: "The model works in the notebook. The demo runs fine. But in production, agentic workflows time out, vector search latency spikes unpredictably, and nobody knows which prompt version caused the regression two weeks ago. Most teams are running AI on infrastructure designed for traditional web apps, and wondering why it's unreliable. The fix isn't a better model. It's an infrastructure layer built specifically for the way AI workloads actually behave."
    },
    whatWeDeliver: [{
      title: "Cloud-native AI deployments",
      desc: "AWS, GCP, and Azure environments right-sized for AI: GPU instances for fine-tuning, serverless inference endpoints, auto-scaling policies that match token throughput, not just HTTP requests."
    }, {
      title: "Agentic pipeline orchestration",
      desc: "LangGraph, Temporal, and Prefect workflows that handle multi-step agent execution, tool-calling loops, retries, and state persistence. Built to recover gracefully from LLM failures and partial completions."
    }, {
      title: "Vector database infrastructure",
      desc: "Qdrant, Weaviate, and pgvector deployments optimised for retrieval latency and embedding freshness. Indexing pipelines, namespace management, and the monitoring that surfaces staleness before users notice."
    }, {
      title: "AI observability and evaluation",
      desc: "Prompt versioning, output logging, and continuous evaluation against your golden dataset. Datadog for infra metrics, RAGAS and Braintrust for model quality, wired together into a single operational picture."
    }, {
      title: "CI/CD for AI workloads",
      desc: "Model promotion pipelines that gate on eval scores, not just test coverage. Canary deployments for new prompt versions, automated rollback on quality regression, and the audit trail that satisfies enterprise procurement."
    }, {
      title: "Cost and latency optimisation",
      desc: "Model routing between providers based on latency and cost targets, caching strategies for repeated queries, and the infrastructure changes that cut your monthly AI bill without degrading output quality."
    }],
    techStack: {
      "Cloud": ["AWS", "Google Cloud Platform", "Azure", "Cloudflare Workers AI"],
      "Orchestration": ["LangGraph", "Temporal", "Prefect", "Airflow"],
      "Vector & Data": ["Qdrant", "Weaviate", "pgvector", "Pinecone"],
      "Observability": ["Datadog", "RAGAS", "Braintrust", "OpenTelemetry", "Prometheus"],
      "IaC & CI/CD": ["Terraform", "Pulumi", "ArgoCD", "GitHub Actions"],
      "Containers": ["Kubernetes", "Docker", "ECS / Fargate"]
    },
    process: [{
      step: "01",
      title: "AI infra audit and target design",
      desc: "We map your current stack, model providers, vector stores, pipeline triggers, and observability gaps. Output: a written architecture decision record with a prioritised list of infra risks and a proposed target state."
    }, {
      step: "02",
      title: "Foundation and pipeline build",
      desc: "Cloud environments, agentic orchestration scaffolding, and vector DB setup deployed in two-week phases. Each phase ships something to production, we don't hold back until the full architecture is complete."
    }, {
      step: "03",
      title: "Observability and handoff",
      desc: "Dashboards, eval pipelines, and runbooks your team owns. We consider the engagement done when your engineers can deploy a new agent, monitor its quality, and roll it back, without us in the loop."
    }],
    cases: ["wholesum", "daily8", "hera", "g42-fleet"],
    seoTitle: "Cloud & Agentic Infrastructure for AI Products | 7code",
    metaDescription: "Cloud & agentic infrastructure by 7Code. AWS, GCP, and Azure for AI products, agent pipelines (LangGraph, Temporal), vector stores, and eval CI.",
    faqs: [{
      q: "Why does AI need different infrastructure from a normal web app?",
      a: "AI workloads behave differently: token-streaming responses (not HTTP request/response), GPU rather than CPU bottlenecks, vector search latency that varies with index size, agent loops that run for minutes instead of milliseconds. Standard auto-scaling and observability tools miss this. We size, scale, and monitor on the right metrics, token throughput, retrieval latency, eval score, not just request count."
    }, {
      q: "Which cloud provider should we use?",
      a: "Whichever you already trust your security and procurement to. We work natively across AWS, GCP, and Azure, and our reference architectures are portable across all three. The deciding factors are usually existing relationships, regional availability for specific GPU SKUs, and whether you need first-party hosted models (Bedrock, Vertex, Azure OpenAI) or want to bring your own."
    }, {
      q: "What does 'agentic orchestration' actually look like?",
      a: "A workflow engine, LangGraph, Temporal, or Prefect, that runs multi-step agent executions with state persistence, retries, tool-call loops, and human-in-the-loop checkpoints. So when an agent's third LLM call times out, the workflow picks up where it left off instead of restarting. Without orchestration, agents are demos; with it, they are production systems."
    }, {
      q: "How do you control AI costs?",
      a: "Three levers: (1) model routing, send easier queries to cheaper models, harder ones to the frontier; (2) caching, repeated questions hit a cache, not a fresh LLM call; (3) prompt and context optimisation, shorter prompts, better retrieval, fewer tokens. Combined with token-spend dashboards per feature, this typically cuts monthly AI bills 30–60% without affecting quality."
    }, {
      q: "Is the infra you build vendor-locked?",
      a: "No. We default to portable foundations, Terraform / Pulumi for IaC, Kubernetes or container-based deployment, open-source orchestration (LangGraph / Temporal). Provider-specific services are used where they're decisively better (Bedrock, Cloud Run, Azure OpenAI), but the abstraction layer is yours and the data is yours."
    }, {
      q: "What does 'eval CI' mean?",
      a: "A continuous-integration pipeline that, on every change to a prompt, model version, or retrieval setting, runs your held-out evaluation set, scores it, and gates the merge on the result. It's the AI equivalent of unit tests + code coverage, without it, you cannot tell whether a change improved or degraded the system."
    }],
    next: {
      slug: "ai-outstaffing",
      title: "AI Engineering Outstaffing"
    }
  },
  "ai-outstaffing": {
    slug: "ai-outstaffing",
    title: "AI Engineering Outstaffing",
    shortTitle: "AI Outstaffing",
    tagline: "Senior AI engineers embedded in your team, matched in days, not months. Your roadmap, your rituals, our engineers.",
    summary: "The AI talent market is broken for most companies. Senior engineers with production LLM experience are expensive, rare, and not responding to LinkedIn. The teams winning with AI right now aren't the ones with the biggest recruiting budgets, they're the ones who found a smarter way to access the talent. We embed our engineers directly into your team: your Slack, your standups, your sprint cadence. You get the leverage of a specialist without the overhead of a hire.",
    icon: "users",
    accentColor: "#0891B2",
    stats: [{
      v: "72 hrs",
      l: "to first matched profile"
    }, {
      v: "Senior only",
      l: "5+ yrs production AI"
    }, {
      v: "30 days",
      l: "scale up or down"
    }, {
      v: "6 industries",
      l: "domain coverage"
    }],
    problem: {
      title: "The AI talent gap is real. Most companies can't close it by hiring.",
      body: "A senior AI engineer with production LLM and MLOps experience commands €150–280k in Europe and expects frontier model access, interesting problems, and a team that moves fast. Most product companies outside the top 20 tech firms can't compete on all three. The result: long hiring cycles, expensive mis-hires, or, most commonly, AI initiatives that stall because the right engineer was never in the room. Outstaffing solves this without the risk, the overhead, or the equity dilution of a permanent hire."
    },
    whatWeDeliver: [{
      title: "Senior AI & ML engineers",
      desc: "Engineers with production experience across LLM integration, RAG pipelines, fine-tuning, and MLOps. Matched to your stack, your domain, and the specific problem you're trying to solve, not just keyword-matched."
    }, {
      title: "Full-stack product engineers",
      desc: "React, React Native, Node.js, and Python engineers who've shipped in AI-native codebases. They work to your sprint cadence, contribute to architecture decisions, and write the kind of code you'd want to inherit."
    }, {
      title: "Embedded technical leads",
      desc: "A tech lead who runs a sub-team inside your organisation, architecture ownership, code review, mentoring your junior engineers, and bridging the gap between engineering and product. All without the 6-month executive search."
    }, {
      title: "Domain-specialist engineers",
      desc: "Engineers with verified experience in regulated industries: healthcare (HIPAA, HL7, FHIR), finance (SOC 2, PCI-DSS), defence (security-cleared), and energy (IEC 62443). Rare skills available without the rare search timeline."
    }, {
      title: "AI research engineers",
      desc: "For teams pushing the frontier: fine-tuning on proprietary data, RLHF pipeline design, evaluation framework architecture, and custom model development. Ex-research backgrounds with production delivery track records."
    }, {
      title: "Flexible engagement models",
      desc: "Full-time equivalents, part-time specialists, and targeted sprint injections. Monthly rolling contracts. Scale up for a product launch, scale back after, with 30 days' notice and no penalty clauses."
    }],
    techStack: {
      "AI & ML profiles": ["PyTorch", "Hugging Face", "LangChain", "LlamaIndex", "pgvector"],
      "Product engineering": ["React", "Next.js", "TypeScript", "Node.js", "Python"],
      "Infrastructure": ["AWS", "GCP", "Kubernetes", "Terraform", "Docker"],
      "Evaluation & ops": ["RAGAS", "Braintrust", "Datadog", "OpenTelemetry"]
    },
    process: [{
      step: "01",
      title: "Requirements and matching, 72 hours",
      desc: "We scope the role together: skills, seniority, timezone, domain knowledge, and team fit. Within 72 hours we present 2–3 matched profiles with a technical summary and relevant project history attached to each. No generic CVs."
    }, {
      step: "02",
      title: "Two-week embedded trial",
      desc: "The engineer joins your team for a trial sprint, real work, your codebase, your processes. If the fit isn't right technically or culturally, we replace at no cost and no delay. Most engagements pass the trial and move straight to ongoing."
    }, {
      step: "03",
      title: "Ongoing engagement with a dedicated account lead",
      desc: "Monthly rolling contract. A dedicated account lead on our side handles performance, feedback, and any escalations, so you get the responsiveness of a direct hire without the HR overhead. Scale up or down with 30 days' notice."
    }],
    cases: ["founders-factory", "drum-bun", "lidl-road-safety"],
    seoTitle: "AI Engineering Outstaffing — Senior Engineers | 7code",
    metaDescription: "AI engineering outstaffing by 7Code. Senior AI and ML engineers with LLM, RAG, and MLOps experience, embedded in your team in 72 hours. No lock-in.",
    faqs: [{
      q: "How is outstaffing different from outsourcing?",
      a: "Outsourcing hands a project to a third party who delivers it (or doesn't) opaquely. Outstaffing embeds named senior engineers directly into your team, they join your Slack, your standups, your sprint cadence, and they report into your engineering management. You own the roadmap, code, and decisions. We own matching, retention, and replacement if the fit isn't right."
    }, {
      q: "How fast can you actually staff a senior AI engineer?",
      a: "First matched profiles in 72 hours from a kicked-off requirements brief. Trial sprint usually starts within two weeks. We hold a curated bench of senior AI engineers with verified production experience, so most matches happen out of bench rather than from open recruiting, that's why the timeline is days, not the months a typical hire takes."
    }, {
      q: "What seniority and skills do your engineers actually have?",
      a: "Senior only, minimum 5 years of production engineering experience and verified work with LLMs in production (RAG pipelines, agent systems, fine-tuning, eval harnesses). Most have ex-product or ex-research backgrounds at known companies. We don't put juniors on AI engagements. References and code samples available on request."
    }, {
      q: "Can we hire them permanently after the engagement?",
      a: "Yes, after six months of engagement, with a flat conversion fee. We optimise for long-term partnerships, not for keeping our engineers locked in. Several of our clients have hired matched engineers as permanent staff, and several have kept us on outstaffing because they preferred the flexibility."
    }, {
      q: "What if the engineer isn't a good fit?",
      a: "Two-week embedded trial sprint. If the technical or cultural fit isn't right, we replace the engineer at no cost, usually within a week. Most engagements pass the trial because we screen heavily upfront, but the safety net is there."
    }, {
      q: "Do you have engineers with regulated-industry experience?",
      a: "Yes, we maintain pools of engineers with verified domain experience in healthcare (HIPAA, HL7, FHIR), finance (SOC 2, PCI-DSS), defence (security-cleared), and energy (IEC 62443). These rare skill sets are usually what take 6–9 months to hire directly; we can match in days."
    }, {
      q: "How is pricing structured?",
      a: "Monthly rolling contracts at a transparent daily or monthly rate per engineer (varies by seniority and specialism). No long-term commitment. Scale up or down with 30 days' notice. No equity dilution, no recruiter fees, no severance exposure."
    }],
    next: {
      slug: "ai-product-engineering",
      title: "AI-Native Product Engineering"
    }
  },
  "llm-agent-development": {
    slug: "llm-agent-development",
    title: "LLM & Agent Development",
    shortTitle: "LLM & Agents",
    tagline: "Custom LLM integrations and multi-step agent systems built for production, not demos. From OpenAI and Anthropic API integrations to LangGraph pipelines with full evaluation coverage.",
    summary: "LLM and agent development is where most teams underestimate the gap between a working prototype and a reliable production system. We build that layer: prompt architectures that hold under adversarial input, retrieval pipelines tuned on held-out eval sets, multi-step agents with state persistence and human-in-the-loop checkpoints, and the observability to catch model drift before users file tickets. We've shipped LLM-first products across news, healthcare, legal, and enterprise SaaS — and we know the difference between a demo that impresses a boardroom and a system that earns trust at scale.",
    icon: "cpu",
    accentColor: "#7C3AED",
    stats: [{
      v: "6 wks",
      l: "to production LLM system"
    }, {
      v: "RAG + agents",
      l: "core architecture"
    }, {
      v: "Claude · GPT",
      l: "primary providers"
    }, {
      v: "Eval-gated",
      l: "every release"
    }],
    problem: {
      title: "Most LLM integrations fail between the demo and the first production incident.",
      body: "The prompt works in the playground. It breaks at scale because edge cases weren't in the test set, retrieval degrades on real documents, and confidence thresholds were never defined. Most teams fix this reactively: a production incident, a round of prompt patching, a rollback. We build the evaluation harness, retrieval design, fallback paths, and confidence calibration before the first production deploy, so the system handles the real world on day one."
    },
    whatWeDeliver: [{
      title: "LLM API integrations",
      desc: "Production-ready integrations with Anthropic (Claude), OpenAI (GPT), Mistral, and open-weight models via Ollama or vLLM. Streaming, function calling, structured outputs, and the retry and rate-limit handling that keeps your system up under load."
    }, {
      title: "Multi-step agent pipelines",
      desc: "Agentic systems that plan, call tools, read results, and decide next steps — built on LangGraph or first-party SDKs with full state persistence, memory management, and human-in-the-loop escalation at configurable confidence thresholds."
    }, {
      title: "RAG system design and build",
      desc: "Retrieval-augmented generation tuned for your corpus: chunking strategy, embedding model selection, hybrid retrieval (semantic + keyword), reranking, and the held-out eval set that proves it. Not a template — designed to your documents and query patterns."
    }, {
      title: "Prompt engineering and management",
      desc: "Structured prompt libraries with versioning, A/B testing, and regression tracking. We treat prompts as first-class code artefacts: reviewed, tested, and deployed through CI with eval gates, not edited live in production."
    }, {
      title: "LLM evaluation harnesses",
      desc: "Custom eval frameworks (RAGAS, Braintrust, or bespoke) that score every release on your domain-specific prompt set. Evaluation is a gate, not a retrospective: a failing score blocks the deploy."
    }, {
      title: "Streaming and real-time LLM UX",
      desc: "Client-side streaming implementations (SSE, WebSockets) with skeleton states, confidence indicators, citation displays, and graceful fallback paths — the UX layer that turns a model response into a trustworthy user experience."
    }],
    techStack: {
      "LLM providers": ["Claude (Anthropic)", "GPT-4o (OpenAI)", "Mistral", "Llama via Ollama / vLLM"],
      "Orchestration": ["LangGraph", "LangChain", "LlamaIndex", "first-party SDKs"],
      "RAG & retrieval": ["pgvector", "Pinecone", "Qdrant", "Weaviate", "hybrid BM25 + vector"],
      "Evaluation": ["RAGAS", "Braintrust", "Inspect AI", "custom harnesses"]
    },
    process: [{
      step: "01",
      title: "Capability scoping and eval design",
      desc: "Before writing any code, we define what 'good' looks like: the user jobs the LLM owns, the failure modes it must not produce, and a held-out evaluation dataset built from your real queries and documents. This becomes the specification every sprint is scored against."
    }, {
      step: "02",
      title: "Iterative build with eval gates",
      desc: "Two-week cycles: build a narrow capability, run it against the eval set, measure quality on held-out examples (not cherry-picked demos), and iterate. You see the score delta at every review, and the specific failure cases driving the next sprint's focus."
    }, {
      step: "03",
      title: "Production hardening and handoff",
      desc: "Confidence thresholds, fallback paths, prompt versioning, evaluation CI, latency and cost dashboards, and drift monitoring. We do not consider an LLM system shipped until it has observability that catches degradation before users notice it."
    }],
    cases: ["wholesum", "daily8", "hera"],
    seoTitle: "LLM & Agent Development Services | 7code AI Agency",
    metaDescription: "Custom LLM and agent development by 7Code. OpenAI and Anthropic integrations, LangGraph pipelines, RAG systems, and eval-gated releases for production AI.",
    faqs: [{
      q: "What's the difference between LLM integration and agent development?",
      a: "An LLM integration connects your product to a model API to perform a scoped task — summarisation, classification, generation. An agent can plan across multiple steps, call external tools (APIs, databases, code runners), and decide what to do next based on intermediate results. Most production systems combine both: deterministic steps for predictable paths, agent loops where the path depends on the data. We design which is which carefully, because autonomous agents are powerful but harder to evaluate and govern."
    }, {
      q: "Which LLM provider should we use?",
      a: "We're provider-agnostic and benchmark on your specific eval set before committing to a provider. Claude (Anthropic) excels at long-context reasoning and instruction following. GPT-4o (OpenAI) has broader tool support and faster structured output. Open-weight models (Llama, Mistral) suit cost-sensitive or air-gapped deployments. We design the abstraction layer so the provider can change without a rewrite when a better model releases."
    }, {
      q: "How do you prevent the LLM from hallucinating in production?",
      a: "Three layers: (1) retrieval grounding so the model answers from your verified data, not parametric memory; (2) prompt design that requires citations and refuses confidently when context is missing; (3) a held-out evaluation set that scores hallucination rate as a metric we gate releases on. At runtime, confidence thresholds route low-confidence responses to a human reviewer instead of serving them to users."
    }, {
      q: "How long does it take to ship a production LLM system?",
      a: "Six weeks for a first production release — a scoped copilot, a RAG pipeline, or a single-domain agent. That includes eval harness, observability, and basic drift monitoring. Complex multi-agent systems with broad tool access run 12–20 weeks. We ship to production every two weeks, not at the end of a long programme."
    }, {
      q: "Do you build the evaluation framework from scratch?",
      a: "We start from established frameworks — RAGAS for RAG pipelines, Braintrust for general LLM tasks, Inspect AI for agentic evals — and extend them with domain-specific metrics for your use case. The eval set is built from your real data: actual user queries, real documents, and the failure cases you most want to prevent. It runs in CI and blocks deploys that regress quality."
    }, {
      q: "Can you take over an LLM system someone else built?",
      a: "Yes, and we do it regularly. We start with an audit: eval the current system on a held-out set we build ourselves, map the prompt architecture, assess retrieval quality, and identify the highest-risk gaps. We then stabilise before extending. Most handovers reveal prompt fragility and missing fallback paths; we fix those first before adding new capabilities."
    }],
    next: {
      slug: "cloud-agentic-infra",
      title: "Cloud & Agentic Infrastructure"
    }
  }
};

// ─────────────────────────────────────────────────────────────────
// Tech stack display
// ─────────────────────────────────────────────────────────────────
function TechStackGrid({
  stack
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "svc-stack-grid"
  }, Object.entries(stack).map(([category, items]) => /*#__PURE__*/React.createElement("div", {
    key: category,
    className: "svc-stack-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-stack-category"
  }, category), /*#__PURE__*/React.createElement("div", {
    className: "svc-stack-items"
  }, items.map((item, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "svc-stack-tag"
  }, item))))));
}

// ─────────────────────────────────────────────────────────────────
// Service detail page
// ─────────────────────────────────────────────────────────────────
function ServiceDetailPage({
  slug = "ai-product-engineering"
}) {
  const svc = SERVICES_DATA[slug] || SERVICES_DATA["ai-product-engineering"];
  const iconMap = {
    code: Icon.code,
    cpu: Icon.cpu,
    cloud: Icon.cloud,
    layers: Icon.layers,
    globe: Icon.globe,
    users: Icon.users
  };
  const SvcIcon = iconMap[svc.icon] || Icon.code;
  const relatedCases = svc.cases.map(s => typeof CASES !== "undefined" && CASES[s] ? CASES[s] : null).filter(Boolean);
  React.useEffect(() => {
    const prevTitle = document.title;
    const descEl = document.querySelector('meta[name="description"]');
    const prevDesc = descEl ? descEl.getAttribute("content") : null;
    document.title = svc.seoTitle || "7Code, " + svc.title;
    if (descEl && svc.metaDescription) descEl.setAttribute("content", svc.metaDescription);
    const ld = {
      "@context": "https://schema.org",
      "@graph": [{
        "@type": "Service",
        "name": svc.title,
        "serviceType": svc.title,
        "description": svc.metaDescription || svc.tagline,
        "provider": {
          "@type": "ProfessionalService",
          "name": "7Code",
          "url": "https://www.7code.tech/"
        },
        "areaServed": "Worldwide",
        "url": "https://www.7code.tech/service/" + svc.slug
      }, ...(svc.faqs && svc.faqs.length ? [{
        "@type": "FAQPage",
        "mainEntity": svc.faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }] : [])]
    };
    const scriptEl = document.createElement("script");
    scriptEl.type = "application/ld+json";
    scriptEl.id = "svc-ld";
    scriptEl.text = JSON.stringify(ld);
    document.head.appendChild(scriptEl);
    return () => {
      document.title = prevTitle;
      if (descEl && prevDesc !== null) descEl.setAttribute("content", prevDesc);
      scriptEl.remove();
    };
  }, [slug]);
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("section", {
    className: "svc-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-hero-grid-bg",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "svc-hero-glow",
    style: {
      "--glow": svc.accentColor
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container svc-hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-hero-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-hero-icon"
  }, /*#__PURE__*/React.createElement(SvcIcon, null)), /*#__PURE__*/React.createElement("span", {
    className: "csd-kicker"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-dot"
  }), " Service offering"), /*#__PURE__*/React.createElement("h1", null, svc.title), /*#__PURE__*/React.createElement("div", {
    className: "exp-hero-divider"
  }), /*#__PURE__*/React.createElement("p", {
    className: "svc-hero-sub"
  }, svc.tagline)), /*#__PURE__*/React.createElement("div", {
    className: "svc-hero-stats"
  }, svc.stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "svc-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-stat-v"
  }, s.v), /*#__PURE__*/React.createElement("div", {
    className: "svc-stat-l"
  }, s.l)))), /*#__PURE__*/React.createElement("div", {
    className: "svc-hero-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    className: "btn btn--cyan btn--lg"
  }, "Start a project ", /*#__PURE__*/React.createElement(Icon.arrow, null)), /*#__PURE__*/React.createElement("a", {
    href: "/service/" + svc.next.slug,
    className: "btn btn--ghost btn--lg"
  }, "Next: ", svc.next.title, " ", /*#__PURE__*/React.createElement(Icon.arrow, null))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container svc-problem"
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-problem-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csd-eyebrow"
  }, "The problem we solve"), /*#__PURE__*/React.createElement("h2", null, svc.problem.title), /*#__PURE__*/React.createElement("p", null, svc.problem.body)), /*#__PURE__*/React.createElement("div", {
    className: "svc-summary-block"
  }, /*#__PURE__*/React.createElement("p", {
    className: "exp-summary"
  }, svc.summary)))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "What we deliver"), /*#__PURE__*/React.createElement("h2", null, "Capabilities")), /*#__PURE__*/React.createElement("div", {
    className: "svc-deliver-grid"
  }, svc.whatWeDeliver.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "svc-deliver-card reveal",
    style: {
      transitionDelay: i % 3 * 60 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-deliver-num"
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", null, d.title), /*#__PURE__*/React.createElement("p", null, d.desc)))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal section-head--left",
    style: {
      maxWidth: 720,
      margin: 0,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Tech stack"), /*#__PURE__*/React.createElement("h2", null, "How we build it"), /*#__PURE__*/React.createElement("p", null, "Tools and technologies we use in this practice, chosen for fit, not familiarity.")), /*#__PURE__*/React.createElement(TechStackGrid, {
    stack: svc.techStack
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "How we work"), /*#__PURE__*/React.createElement("h2", null, "Our process"), /*#__PURE__*/React.createElement("p", null, "Consistent across every engagement, adapted to your constraints, not the other way around.")), /*#__PURE__*/React.createElement("div", {
    className: "exp-process"
  }, svc.process.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "exp-process-step reveal",
    style: {
      transitionDelay: i * 80 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "exp-process-num"
  }, p.step), /*#__PURE__*/React.createElement("div", {
    className: "exp-process-body"
  }, /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", null, p.desc))))))), svc.faqs && svc.faqs.length > 0 && /*#__PURE__*/React.createElement("section", {
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
  }, "Frequently asked"), /*#__PURE__*/React.createElement("h2", null, "Questions teams ask before they start")), /*#__PURE__*/React.createElement("div", {
    className: "svc-faq"
  }, svc.faqs.map((f, i) => /*#__PURE__*/React.createElement("details", {
    key: i,
    className: "svc-faq-item reveal",
    style: {
      transitionDelay: i * 40 + "ms"
    }
  }, /*#__PURE__*/React.createElement("summary", null, f.q), /*#__PURE__*/React.createElement("p", null, f.a)))))), relatedCases.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Proof of work"), /*#__PURE__*/React.createElement("h2", null, "Projects using this service")), /*#__PURE__*/React.createElement("div", {
    className: "cs-grid"
  }, relatedCases.map(c => /*#__PURE__*/React.createElement("a", {
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
  }), " ", c.results && c.results[0] ? c.results[0].v + " " + c.results[0].l : "See case study"), /*#__PURE__*/React.createElement("span", {
    className: "cs-link"
  }, "Read case study ", /*#__PURE__*/React.createElement(Icon.arrow, null)))))))), /*#__PURE__*/React.createElement(CTAStrip, null));
}
window.SERVICES_DATA = SERVICES_DATA;
window.ServiceDetailPage = ServiceDetailPage;/* global React, ReactDOM, Logo, Icon, Nav, Footer, TweaksPanel, TweakSection, TweakRadio, useTweaks, useReveal, useHashRoute, parseRoute, ServiceDetailPage, ExpertiseDetailPage, ExpertisePage, CaseStudiesPage, CaseStudyPage, ProcessPage, AboutPage, BlogRouter, ContactPage, CompareAgencyFreelancerPage, AiMvpPage, UkGeoPage, HomePage, useState, useEffect */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "pattern",
  "caseStudiesVariant": "stack",
  "caseStudyVariant": "sticky",
  "accent": "cyan",
  "darkFooter": true
} /*EDITMODE-END*/;
const ACCENTS = {
  cyan: {
    c500: "#06B6D4",
    c600: "#0C9CB5",
    c700: "#0E7C90",
    c300: "#4DDFEA",
    c400: "#2EBFD0",
    bg50: "#ECFEFF",
    bg100: "#D8F7F9"
  },
  indigo: {
    c500: "#6366F1",
    c600: "#4F46E5",
    c700: "#4338CA",
    c300: "#A5B4FC",
    c400: "#818CF8",
    bg50: "#EEF2FF",
    bg100: "#E0E7FF"
  },
  emerald: {
    c500: "#10B981",
    c600: "#059669",
    c700: "#047857",
    c300: "#6EE7B7",
    c400: "#34D399",
    bg50: "#ECFDF5",
    bg100: "#D1FAE5"
  },
  orange: {
    c500: "#F97316",
    c600: "#EA580C",
    c700: "#C2410C",
    c300: "#FDBA74",
    c400: "#FB923C",
    bg50: "#FFF7ED",
    bg100: "#FFEDD5"
  }
};
function applyAccent(name) {
  const a = ACCENTS[name] || ACCENTS.cyan;
  const r = document.documentElement.style;
  r.setProperty("--cyan-500", a.c500);
  r.setProperty("--cyan-600", a.c600);
  r.setProperty("--cyan-700", a.c700);
  r.setProperty("--cyan-300", a.c300);
  r.setProperty("--cyan-400", a.c400);
  r.setProperty("--bg-cyan-50", a.bg50);
  r.setProperty("--bg-cyan-100", a.bg100);
}
function App() {
  const route = useHashRoute();
  useReveal();
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [page, slug] = parseRoute(route);
  useEffect(() => {
    applyAccent(tweaks.accent);
  }, [tweaks.accent]);
  let Page;
  if (page === "/service" && slug) Page = /*#__PURE__*/React.createElement(ServiceDetailPage, {
    slug: slug
  });else if (page === "/expertise" && slug) Page = /*#__PURE__*/React.createElement(ExpertiseDetailPage, {
    slug: slug
  });else if (page === "/expertise") Page = /*#__PURE__*/React.createElement(ExpertisePage, null);else if (page === "/case-studies") Page = /*#__PURE__*/React.createElement(CaseStudiesPage, {
    variant: tweaks.caseStudiesVariant
  });else if (page === "/case-study") Page = /*#__PURE__*/React.createElement(CaseStudyPage, {
    slug: slug || "wholesum",
    variant: tweaks.caseStudyVariant
  });else if (page === "/process") Page = /*#__PURE__*/React.createElement(ProcessPage, null);else if (page === "/about") Page = /*#__PURE__*/React.createElement(AboutPage, null);else if (page === "/blog" && slug) Page = /*#__PURE__*/React.createElement(BlogRouter, {
    slug: slug
  });else if (page === "/blog") Page = /*#__PURE__*/React.createElement(BlogRouter, null);else if (page === "/contact") Page = /*#__PURE__*/React.createElement(ContactPage, null);else if (page === "/compare") Page = /*#__PURE__*/React.createElement(CompareAgencyFreelancerPage, null);else if (page === "/ai-mvp-development") Page = /*#__PURE__*/React.createElement(AiMvpPage, null);else if (page === "/ai-development-agency-uk") Page = /*#__PURE__*/React.createElement(UkGeoPage, null);else Page = /*#__PURE__*/React.createElement(HomePage, {
    heroVariant: tweaks.heroVariant
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, null), Page, /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    title: "Hero variant (home page only)"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    value: tweaks.heroVariant,
    onChange: v => setTweak("heroVariant", v),
    options: [{
      value: "pattern",
      label: "Mockup"
    }, {
      value: "terminal",
      label: "Terminal"
    }, {
      value: "bold",
      label: "Bold split"
    }]
  })), /*#__PURE__*/React.createElement(TweakSection, {
    title: "Case studies layout"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    value: tweaks.caseStudiesVariant,
    onChange: v => setTweak("caseStudiesVariant", v),
    options: [{
      value: "grid",
      label: "Grid"
    }, {
      value: "editorial",
      label: "Editorial"
    }, {
      value: "featured",
      label: "Featured"
    }, {
      value: "timeline",
      label: "Timeline"
    }, {
      value: "showcase",
      label: "Showcase"
    }, {
      value: "magazine",
      label: "Magazine"
    }, {
      value: "stack",
      label: "Stack"
    }, {
      value: "mosaic",
      label: "Mosaic"
    }]
  })), /*#__PURE__*/React.createElement(TweakSection, {
    title: "Case study page layout"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    value: tweaks.caseStudyVariant,
    onChange: v => setTweak("caseStudyVariant", v),
    options: [{
      value: "longread",
      label: "Long-read"
    }, {
      value: "metric",
      label: "Metric"
    }, {
      value: "visual",
      label: "Visual"
    }, {
      value: "sticky",
      label: "Sticky"
    }]
  })), /*#__PURE__*/React.createElement(TweakSection, {
    title: "Accent color"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    value: tweaks.accent,
    onChange: v => setTweak("accent", v),
    options: [{
      value: "cyan",
      label: "Cyan"
    }, {
      value: "indigo",
      label: "Indigo"
    }, {
      value: "emerald",
      label: "Emerald"
    }, {
      value: "orange",
      label: "Orange"
    }]
  }))));
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/React.createElement(App, null));
