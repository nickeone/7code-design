import type { Metadata } from 'next';
import { buildMetadata, buildBreadcrumbJsonLd, ORGANIZATION_JSONLD } from '../../lib/seo';
import { SITE_URL } from '../../lib/routes';
import ContactClient from '../../src/components/ContactClient';

export const metadata: Metadata = buildMetadata({
  title: 'Contact 7code — Start Your AI Engineering Project',
  description:
    'Book a discovery call with 7code. Tell us about your project — we\'ll respond within one business day. AI-native product engineering, LLM features, staff augmentation.',
  path: '/contact',
});

const breadcrumb = buildBreadcrumbJsonLd([
  { name: 'Home', url: SITE_URL },
  { name: 'Contact', url: `${SITE_URL}/contact` },
]);

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: `${SITE_URL}/contact`,
  name: 'Contact 7code',
  description: 'Get in touch with the 7code engineering team.',
  mainEntity: { '@id': `${SITE_URL}/#organization` },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([contactJsonLd, ORGANIZATION_JSONLD, breadcrumb]) }} />
      <ContactClient />
    </>
  );
}
