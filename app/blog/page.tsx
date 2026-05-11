import type { Metadata } from 'next';
import { buildMetadata, buildBreadcrumbJsonLd } from '../../lib/seo';
import { SITE_URL } from '../../lib/routes';
import BlogListClient from '../../src/components/BlogListClient';

export const metadata: Metadata = buildMetadata({
  title: 'Blog — AI Engineering Insights | 7code',
  description:
    'Practical articles on AI engineering, LLM development, nearshore teams, and software delivery from the 7code engineering team in Cluj-Napoca, Romania.',
  path: '/blog',
});

const breadcrumb = buildBreadcrumbJsonLd([
  { name: 'Home', url: SITE_URL },
  { name: 'Blog', url: `${SITE_URL}/blog` },
]);

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <BlogListClient />
    </>
  );
}
