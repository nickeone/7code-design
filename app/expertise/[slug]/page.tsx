import type { Metadata } from 'next';
import { buildMetadata, buildBreadcrumbJsonLd, buildServiceJsonLd } from '../../../lib/seo';
import { SITE_URL, EXPERTISE_SLUGS, EXPERTISE_META } from '../../../lib/routes';
import ExpertiseDetailClient from '../../../src/components/ExpertiseDetailClient';

export function generateStaticParams() {
  return EXPERTISE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = EXPERTISE_META[slug as keyof typeof EXPERTISE_META] ?? {
    title: `${slug} Expertise | 7code`,
    description: `7code AI engineering expertise in ${slug}.`,
  };
  return buildMetadata({
    title: meta.title,
    description: meta.description,
    path: `/expertise/${slug}`,
  });
}

export default async function ExpertiseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = EXPERTISE_META[slug as keyof typeof EXPERTISE_META];
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: 'Home', url: SITE_URL },
    { name: 'Expertise', url: `${SITE_URL}/expertise` },
    { name: meta?.title?.split(' |')[0] ?? slug, url: `${SITE_URL}/expertise/${slug}` },
  ]);
  const serviceSchemas = buildServiceJsonLd({
    name: meta?.title?.split(' |')[0] ?? slug,
    description: meta?.description ?? '',
    url: `${SITE_URL}/expertise/${slug}`,
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([...serviceSchemas, breadcrumb]) }} />
      <ExpertiseDetailClient slug={slug} />
    </>
  );
}
