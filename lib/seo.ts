import type { Metadata } from 'next';
import { SITE_URL } from './routes';

const DEFAULT_OG_IMAGE = `${SITE_URL}/og/7code-ai-engineering.jpg`;

interface SeoParams {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  robots?: { index: boolean; follow: boolean };
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  robots = { index: true, follow: true },
}: SeoParams): Metadata {
  const canonical = `${SITE_URL}${path}`;
  return {
    title,
    description,
    robots,
    alternates: {
      canonical,
      languages: {
        'en-GB': canonical,
        'en-US': canonical,
        'x-default': canonical,
      },
    },
    openGraph: {
      type: 'website',
      siteName: '7code',
      locale: 'en_GB',
      url: canonical,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

// Shared JSON-LD organization block
export const ORGANIZATION_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: '7code',
  legalName: 'Seven Code Development SRL',
  alternateName: 'Seven Code Development',
  url: `${SITE_URL}/`,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/project/assets/logo-favicon.svg`,
    width: 512,
    height: 512,
  },
  description:
    'AI-first software engineering partner based in Cluj-Napoca, Romania. We design, build, and operate AI-native products, LLM features, agent workflows, and production-grade cloud infrastructure for UK, EU, and UAE companies.',
  foundingDate: '2019',
  foundingLocation: { '@type': 'Place', name: 'Cluj-Napoca, Romania' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Cluj-Napoca',
    addressLocality: 'Cluj-Napoca',
    addressCountry: 'RO',
  },
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10, maxValue: 50 },
  areaServed: ['Romania', 'Moldova', 'Europe', 'United Kingdom', 'United Arab Emirates', 'United States', 'Worldwide'],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'office@7code.ro',
    contactType: 'sales',
    areaServed: ['GB', 'EU', 'AE', 'US'],
    availableLanguage: 'English',
  },
  email: 'office@7code.ro',
  taxID: 'RO-XXXXXXXX',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    reviewCount: '12',
    ratingCount: '12',
  },
  sameAs: [
    'https://www.linkedin.com/company/7-code/',
    'https://github.com/7code',
    'https://clutch.co/profile/7code',
    'https://techbehemoths.com/company/7code',
    'https://www.goodfirms.co/company/7code',
  ],
};

export function buildBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildServiceJsonLd(params: {
  name: string;
  description: string;
  url: string;
  faqs?: Array<{ q: string; a: string }>;
}) {
  const schemas: any[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: params.name,
      description: params.description,
      url: params.url,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: ['United Kingdom', 'Europe', 'United Arab Emirates'],
    },
  ];
  if (params.faqs?.length) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: params.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }
  return schemas;
}
