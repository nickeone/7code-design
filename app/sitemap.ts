import type { MetadataRoute } from 'next';
import {
  SITE_URL,
  SERVICE_SLUGS,
  CASE_STUDY_SLUGS,
  EXPERTISE_SLUGS,
  COMPARE_SLUGS,
  BLOG_SLUGS,
} from '../lib/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const static_pages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/process`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/case-studies`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/expertise`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/ai-mvp-development`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/ai-development-agency-uk`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];

  const service_pages: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/service/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const case_study_pages: MetadataRoute.Sitemap = CASE_STUDY_SLUGS.map((slug) => ({
    url: `${SITE_URL}/case-study/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const expertise_pages: MetadataRoute.Sitemap = EXPERTISE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/expertise/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const compare_pages: MetadataRoute.Sitemap = COMPARE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/compare/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blog_pages: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    ...static_pages,
    ...service_pages,
    ...case_study_pages,
    ...expertise_pages,
    ...compare_pages,
    ...blog_pages,
  ];
}
