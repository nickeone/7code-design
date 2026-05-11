import type { Metadata } from 'next';
import { buildMetadata, buildBreadcrumbJsonLd } from '../../lib/seo';
import { SITE_URL } from '../../lib/routes';
import ExpertiseClient from '../../src/components/ExpertiseClient';

export const metadata: Metadata = buildMetadata({
  title: 'Industry Expertise — Healthcare, Finance, Energy, Defence | 7code',
  description:
    '7code delivers domain-grounded AI and software engineering across Healthcare, FinTech, Energy & Utilities, Defence & Security, HR Tech, and Operations.',
  path: '/expertise',
});

const breadcrumb = buildBreadcrumbJsonLd([
  { name: 'Home', url: SITE_URL },
  { name: 'Expertise', url: `${SITE_URL}/expertise` },
]);

export default function ExpertisePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ExpertiseClient />
    </>
  );
}
