import type { Metadata } from 'next';
import { buildMetadata, ORGANIZATION_JSONLD } from '../lib/seo';
import { SITE_URL } from '../lib/routes';
import HomeClient from '../src/components/HomeClient';

export const metadata: Metadata = buildMetadata({
  title: '7code — AI-First Software Engineering Partner',
  description:
    '7code builds AI-native products, LLM features, and agentic workflows for UK & EU companies. Senior-only engineering teams. Design, build, and operate — under one roof.',
  path: '/',
});

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: '7code',
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-GB',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([ORGANIZATION_JSONLD, websiteJsonLd]) }}
      />
      <HomeClient />
    </>
  );
}
