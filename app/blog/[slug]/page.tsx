import type { Metadata } from 'next';
import { buildMetadata, buildBreadcrumbJsonLd } from '../../../lib/seo';
import { SITE_URL, BLOG_SLUGS } from '../../../lib/routes';
import BlogPostClient from '../../../src/components/BlogPostClient';

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slugToTitle(slug);
  return buildMetadata({
    title: `${title} | 7code Blog`,
    description: `Read the 7code blog post: ${title}. Practical AI engineering insights from the 7code team.`,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: 'Home', url: SITE_URL },
    { name: 'Blog', url: `${SITE_URL}/blog` },
    { name: slugToTitle(slug), url: `${SITE_URL}/blog/${slug}` },
  ]);
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: slugToTitle(slug),
    url: `${SITE_URL}/blog/${slug}`,
    publisher: { '@id': `${SITE_URL}/#organization` },
    author: {
      '@type': 'Person',
      name: 'Nicu Mardari',
      jobTitle: 'CEO',
      worksFor: { '@id': `${SITE_URL}/#organization` },
    },
    inLanguage: 'en-GB',
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, breadcrumb]) }} />
      <BlogPostClient slug={slug} />
    </>
  );
}
