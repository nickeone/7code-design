import type { Metadata } from 'next';
import { buildMetadata, buildBreadcrumbJsonLd } from '../../lib/seo';
import { SITE_URL } from '../../lib/routes';
import AiMvpClient from '../../src/components/AiMvpClient';

export const metadata: Metadata = buildMetadata({
  title: 'AI MVP Development — Ship in 6 Weeks | 7code',
  description:
    'Ship your AI MVP in 6 weeks with 7code. Scoped LLM capability, evaluation harness, and production cloud infrastructure. From £25k / €30k fixed price.',
  path: '/ai-mvp-development',
});

const breadcrumb = buildBreadcrumbJsonLd([
  { name: 'Home', url: SITE_URL },
  { name: 'AI MVP Development', url: `${SITE_URL}/ai-mvp-development` },
]);

export default function AiMvpPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <AiMvpClient />
    </>
  );
}
