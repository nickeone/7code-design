/* global React, ReactDOM, Logo, Icon, Nav, Footer, TweaksPanel, TweakSection, TweakRadio, useTweaks, useReveal, useHashRoute, parseRoute, ServiceDetailPage, ExpertiseDetailPage, ExpertisePage, CaseStudiesPage, CaseStudyPage, ProcessPage, AboutPage, BlogRouter, ContactPage, CompareAgencyFreelancerPage, AiMvpPage, UkGeoPage, HomePage, ResourcePage, PrivacyPolicyPage, TermsPage, CookieConsent, initAnalytics, FAQPage, ServicesPage, useState, useEffect */
// LoadingPage shown for route components that are in the deferred bundle
function LoadingPage() {
  return React.createElement('div', {style:{padding:'160px 0',textAlign:'center',color:'var(--slate-500)',fontSize:'15px'}}, 'Loading…');
}
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{ "heroVariant": "pattern", "caseStudiesVariant": "stack", "caseStudyVariant": "sticky", "accent": "cyan", "darkFooter": true }/*EDITMODE-END*/;
const ACCENTS = {
  cyan:    { c500: "#06B6D4", c600: "#0C9CB5", c700: "#0E7C90", c300: "#4DDFEA", c400: "#2EBFD0", bg50: "#ECFEFF", bg100: "#D8F7F9" },
  indigo:  { c500: "#6366F1", c600: "#4F46E5", c700: "#4338CA", c300: "#A5B4FC", c400: "#818CF8", bg50: "#EEF2FF", bg100: "#E0E7FF" },
  emerald: { c500: "#10B981", c600: "#059669", c700: "#047857", c300: "#6EE7B7", c400: "#34D399", bg50: "#ECFDF5", bg100: "#D1FAE5" },
  orange:  { c500: "#F97316", c600: "#EA580C", c700: "#C2410C", c300: "#FDBA74", c400: "#FB923C", bg50: "#FFF7ED", bg100: "#FFEDD5" },
};
function applyAccent(name) {
  const a = ACCENTS[name] || ACCENTS.cyan;
  const r = document.documentElement.style;
  r.setProperty("--cyan-500", a.c500); r.setProperty("--cyan-600", a.c600);
  r.setProperty("--cyan-700", a.c700); r.setProperty("--cyan-300", a.c300);
  r.setProperty("--cyan-400", a.c400); r.setProperty("--bg-cyan-50", a.bg50);
  r.setProperty("--bg-cyan-100", a.bg100);
}
function App() {
  const route = useHashRoute();
  useReveal();
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [routesReady, setRoutesReady] = useState(typeof BlogRouter !== 'undefined');
  const [page, slug] = parseRoute(route);
  useEffect(() => { applyAccent(tweaks.accent); }, [tweaks.accent]);
  useEffect(() => { initAnalytics(); }, []);
  useEffect(() => {
    if (!routesReady) {
      const onLoad = () => setRoutesReady(true);
      window.addEventListener('routes-loaded', onLoad);
      return () => window.removeEventListener('routes-loaded', onLoad);
    }
  }, [routesReady]);
  let Page;
  if      (page === "/service"      && slug) Page = routesReady ? <ServiceDetailPage slug={slug} /> : <LoadingPage />;
  else if (page === "/expertise"    && slug) Page = routesReady ? <ExpertiseDetailPage slug={slug} /> : <LoadingPage />;
  else if (page === "/expertise"         )  Page = <ExpertisePage />;
  else if (page === "/case-studies"      )  Page = routesReady ? <CaseStudiesPage variant={tweaks.caseStudiesVariant} /> : <LoadingPage />;
  else if (page === "/case-study"        )  Page = routesReady ? <CaseStudyPage slug={slug || "wholesum"} variant={tweaks.caseStudyVariant} /> : <LoadingPage />;
  else if (page === "/process"           )  Page = <ProcessPage />;
  else if (page === "/about"             )  Page = <AboutPage />;
  else if (page === "/blog"       && slug)  Page = routesReady ? <BlogRouter slug={slug} /> : <LoadingPage />;
  else if (page === "/blog"              )  Page = routesReady ? <BlogRouter /> : <LoadingPage />;
  else if (page === "/contact"           )  Page = <ContactPage />;
  else if (page === "/compare"           )  Page = <CompareAgencyFreelancerPage />;
  else if (page === "/ai-mvp-development" )  Page = <AiMvpPage />;
  else if (page === "/ai-development-agency-uk") Page = <UkGeoPage />;
  else if (page === "/resources"    && slug) Page = routesReady ? <ResourcePage slug={slug} /> : <LoadingPage />;
  else if (page === "/privacy-policy"      )  Page = <PrivacyPolicyPage />;
  else if (page === "/terms-and-conditions")  Page = <TermsPage />;
  else if (page === "/faq"                 )  Page = <FAQPage />;
  else if (page === "/services"            )  Page = <ServicesPage />;
  else                                      Page = <HomePage heroVariant={tweaks.heroVariant} />;
  return (
    <>
      <Nav />
      {Page}
      <Footer />
      <CookieConsent />
      <TweaksPanel title="Tweaks">
        <TweakSection title="Hero variant (home page only)">
          <TweakRadio value={tweaks.heroVariant} onChange={v => setTweak("heroVariant", v)} options={[
            { value: "pattern",  label: "Mockup"     },
            { value: "terminal", label: "Terminal"   },
            { value: "bold",     label: "Bold split" },
          ]} />
        </TweakSection>
        <TweakSection title="Case studies layout">
          <TweakRadio value={tweaks.caseStudiesVariant} onChange={v => setTweak("caseStudiesVariant", v)} options={[
            { value: "grid",      label: "Grid"      },
            { value: "editorial", label: "Editorial" },
            { value: "featured",  label: "Featured"  },
            { value: "timeline",  label: "Timeline"  },
            { value: "showcase",  label: "Showcase"  },
            { value: "magazine",  label: "Magazine"  },
            { value: "stack",     label: "Stack"     },
            { value: "mosaic",    label: "Mosaic"    },
          ]} />
        </TweakSection>
        <TweakSection title="Case study page layout">
          <TweakRadio value={tweaks.caseStudyVariant} onChange={v => setTweak("caseStudyVariant", v)} options={[
            { value: "longread", label: "Long-read" },
            { value: "metric",   label: "Metric"    },
            { value: "visual",   label: "Visual"    },
            { value: "sticky",   label: "Sticky"    },
          ]} />
        </TweakSection>
        <TweakSection title="Accent color">
          <TweakRadio value={tweaks.accent} onChange={v => setTweak("accent", v)} options={[
            { value: "cyan",    label: "Cyan"    },
            { value: "indigo",  label: "Indigo"  },
            { value: "emerald", label: "Emerald" },
            { value: "orange",  label: "Orange"  },
          ]} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
