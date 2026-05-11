import type { Metadata } from 'next';
import { buildMetadata, ORGANIZATION_JSONLD, buildBreadcrumbJsonLd } from '../../lib/seo';
import { SITE_URL } from '../../lib/routes';
import AboutClient from '../../src/components/AboutClient';

export const metadata: Metadata = buildMetadata({
  title: 'About 7code — AI-Native Software Engineering Agency',
  description:
    '7code is an AI-first software engineering agency based in Cluj-Napoca, Romania. Since 2019, we\'ve shipped AI-native products, LLM integrations, and cloud infrastructure for founders across Europe, UK, and the Middle East.',
  path: '/about',
});

const breadcrumb = buildBreadcrumbJsonLd([
  { name: 'Home', url: SITE_URL },
  { name: 'About', url: `${SITE_URL}/about` },
]);

const aboutOrgJsonLd = {
  ...ORGANIZATION_JSONLD,
  '@type': 'Organization',
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([aboutOrgJsonLd, breadcrumb]) }} />
      <AboutClient />
    </>
  );
}
