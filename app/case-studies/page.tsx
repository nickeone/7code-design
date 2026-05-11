import type { Metadata } from 'next';
import { buildMetadata, buildBreadcrumbJsonLd } from '../../lib/seo';
import { SITE_URL } from '../../lib/routes';
import CaseStudiesClient from '../../src/components/CaseStudiesClient';

export const metadata: Metadata = buildMetadata({
  title: 'Case Studies — AI Engineering Projects | 7code',
  description:
    'Explore 7code\'s portfolio of AI engineering projects. From LLM-powered products and fleet tracking to healthcare platforms and FinTech tools across 12+ industries.',
  path: '/case-studies',
});

const breadcrumb = buildBreadcrumbJsonLd([
  { name: 'Home', url: SITE_URL },
  { name: 'Case Studies', url: `${SITE_URL}/case-studies` },
]);

export default function CaseStudiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <CaseStudiesClient />
    </>
  );
}
