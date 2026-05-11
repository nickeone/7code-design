import type { Metadata } from 'next';
import { buildMetadata, buildBreadcrumbJsonLd } from '../../../lib/seo';
import { SITE_URL, COMPARE_SLUGS } from '../../../lib/routes';
import CompareClient from '../../../src/components/CompareClient';

export function generateStaticParams() {
  return COMPARE_SLUGS.map((slug) => ({ slug }));
}

const COMPARE_META: Record<string, { title: string; description: string }> = {
  'agency-vs-freelancer': {
    title: 'Agency vs Freelancer for AI Development — Which to Choose | 7code',
    description:
      'Agency or freelancer for your AI engineering project? A practical comparison covering cost, reliability, IP ownership, and scale. Written by 7code.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = COMPARE_META[slug] ?? {
    title: `${slug} | 7code`,
    description: `Comparison: ${slug}`,
  };
  return buildMetadata({
    title: meta.title,
    description: meta.description,
    path: `/compare/${slug}`,
  });
}

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = COMPARE_META[slug];
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: 'Home', url: SITE_URL },
    { name: 'Compare', url: `${SITE_URL}/compare/${slug}` },
    { name: meta?.title?.split(' |')[0] ?? slug, url: `${SITE_URL}/compare/${slug}` },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <CompareClient slug={slug} />
    </>
  );
}
