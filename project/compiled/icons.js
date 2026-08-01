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
window.Logo = Logo;
