import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.7code.tech'),
  title: {
    default: '7code — AI-First Software Engineering Partner',
    template: '%s | 7code',
  },
  description:
    '7code builds AI-native products, LLM features, and agentic workflows for UK & EU companies. Senior-only engineering teams. Design, build, and operate — under one roof.',
  robots: { index: true, follow: true },
  openGraph: {
    siteName: '7code',
    locale: 'en_GB',
    type: 'website',
  },
  other: {
    'google-site-verification': 'XqL7A8xsWljdsipwo69h7ZBfFhXhy9QVUlPhCfZG61A',
    'theme-color': '#0C9CB5',
    'geo.region': 'RO-CJ',
    'geo.placename': 'Cluj-Napoca, Romania',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","resfqs6oce");`,
          }}
        />
        {/* Fonts preload */}
        <link rel="preload" href="/project/assets/fonts/dm-sans-latin-700-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/project/assets/fonts/dm-sans-latin-600-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/project/assets/fonts/inter-latin-400-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/project/assets/fonts/inter-latin-500-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/project/assets/logo-favicon.svg" />
        {/* Font face inline */}
        <style dangerouslySetInnerHTML={{ __html: `
@font-face{font-family:"DM Sans";font-style:normal;font-weight:400;font-display:swap;src:url(/project/assets/fonts/dm-sans-latin-400-normal.woff2) format("woff2")}
@font-face{font-family:"DM Sans";font-style:normal;font-weight:500;font-display:swap;src:url(/project/assets/fonts/dm-sans-latin-500-normal.woff2) format("woff2")}
@font-face{font-family:"DM Sans";font-style:normal;font-weight:600;font-display:swap;src:url(/project/assets/fonts/dm-sans-latin-600-normal.woff2) format("woff2")}
@font-face{font-family:"DM Sans";font-style:normal;font-weight:700;font-display:swap;src:url(/project/assets/fonts/dm-sans-latin-700-normal.woff2) format("woff2")}
@font-face{font-family:"Inter";font-style:normal;font-weight:400;font-display:swap;src:url(/project/assets/fonts/inter-latin-400-normal.woff2) format("woff2")}
@font-face{font-family:"Inter";font-style:normal;font-weight:500;font-display:swap;src:url(/project/assets/fonts/inter-latin-500-normal.woff2) format("woff2")}
@font-face{font-family:"Inter";font-style:normal;font-weight:600;font-display:swap;src:url(/project/assets/fonts/inter-latin-600-normal.woff2) format("woff2")}
@font-face{font-family:"Inter";font-style:normal;font-weight:700;font-display:swap;src:url(/project/assets/fonts/inter-latin-700-normal.woff2) format("woff2")}
        `}} />
      </head>
      <body>
        {children}
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-109V5ZWVD8"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-109V5ZWVD8');`}
        </Script>
        {/* Vercel Analytics */}
        <Script id="vercel-analytics" strategy="afterInteractive">
          {`window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments)};`}
        </Script>
        <Script src="/_vercel/insights/script.js" strategy="afterInteractive" />
        <Script id="vercel-speed" strategy="afterInteractive">
          {`window.si=window.si||function(){(window.siq=window.siq||[]).push(arguments)};`}
        </Script>
        <Script src="/_vercel/speed-insights/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
