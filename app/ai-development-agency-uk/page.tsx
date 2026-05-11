import type { Metadata } from 'next';
import { buildMetadata, buildBreadcrumbJsonLd } from '../../lib/seo';
import { SITE_URL } from '../../lib/routes';
import UkGeoClient from '../../src/components/UkGeoClient';

export const metadata: Metadata = buildMetadata({
  title: 'AI Development Agency UK — Nearshore Senior Engineers | 7code',
  description:
    '7code is the AI development agency trusted by UK startups and scale-ups. Senior-only engineers in Romania, UK timezone overlap, GDPR-compliant delivery.',
  path: '/ai-development-agency-uk',
});

const breadcrumb = buildBreadcrumbJsonLd([
  { name: 'Home', url: SITE_URL },
  { name: 'AI Development Agency UK', url: `${SITE_URL}/ai-development-agency-uk` },
]);

export default function UkGeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <UkGeoClient />
    </>
  );
}
