import type { Metadata } from 'next';
import { buildMetadata, buildBreadcrumbJsonLd, buildServiceJsonLd } from '../../../lib/seo';
import { SITE_URL, SERVICE_SLUGS, SERVICE_META } from '../../../lib/routes';
import ServiceDetailClient from '../../../src/components/ServiceDetailClient';

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = SERVICE_META[slug as keyof typeof SERVICE_META] ?? {
    title: `${slug} | 7code`,
    description: `7code AI engineering service: ${slug}.`,
  };
  return buildMetadata({
    title: meta.title,
    description: meta.description,
    path: `/service/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = SERVICE_META[slug as keyof typeof SERVICE_META];
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: 'Home', url: SITE_URL },
    { name: 'Services', url: `${SITE_URL}/service/ai-product-engineering` },
    { name: meta?.title?.split(' |')[0] ?? slug, url: `${SITE_URL}/service/${slug}` },
  ]);
  const serviceSchemas = buildServiceJsonLd({
    name: meta?.title?.split(' |')[0] ?? slug,
    description: meta?.description ?? '',
    url: `${SITE_URL}/service/${slug}`,
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([...serviceSchemas, breadcrumb]) }} />
      <ServiceDetailClient slug={slug} />
    </>
  );
}
