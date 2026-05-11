import type { Metadata } from 'next';
import { buildMetadata, buildBreadcrumbJsonLd } from '../../../lib/seo';
import { SITE_URL, CASE_STUDY_SLUGS } from '../../../lib/routes';
import CaseStudyClient from '../../../src/components/CaseStudyClient';

export function generateStaticParams() {
  return CASE_STUDY_SLUGS.map((slug) => ({ slug }));
}

const CASE_STUDY_META: Record<string, { title: string; description: string }> = {
  wholesum: {
    title: 'WholeSum — Self-Serve AI Analytics Platform | 7code',
    description: '7code built WholeSum\'s self-serve MVP for qualitative text analytics using LLMs. From zero to production in 16 weeks with a senior engineering team.',
  },
  daily8: {
    title: 'Daily8 — AI-Powered News Aggregator for MENA | 7code',
    description: '7code shipped Daily8, an AI-powered news aggregator for the MENA region with LLM moderation and summarisation, in 6 months.',
  },
  revote: {
    title: 'Revote — Remote E-Voting for European Parliament | 7code',
    description: '7code built a secure remote electronic voting platform for the European Parliament, handling constitutional-grade reliability requirements.',
  },
  'g42-fleet': {
    title: 'G42 ESTS — Real-Time Fleet Tracking for EXPO 2020 | 7code',
    description: '7code engineered a real-time fleet tracking platform for G42 at EXPO 2020 Dubai. IoT-driven geofencing and live dashboards for 2,000+ vehicles.',
  },
  'cloud-of-legacy': {
    title: 'Cloud of Legacy — Digital Heritage Platform | 7code',
    description: '7code built Cloud of Legacy, a secure cloud-based digital heritage platform with inheritance-gated access to personal memories and documents.',
  },
  'lidl-road-safety': {
    title: 'Lidl Romania — Road Safety Gamification App | 7code',
    description: '7code delivered a gamified road-safety education web app for Lidl Romania\'s CSR programme, reaching thousands of primary school children.',
  },
  hera: {
    title: 'Hera Health — AI Patient Support App | 7code',
    description: '7code shipped a HIPAA-aware AI-powered patient support app for fertility clinics in a 3-month MVP engagement.',
  },
  melsonic: {
    title: 'Melsonic — AI Guitar Learning App | 7code',
    description: '7code built Melsonic, an AI-powered guitar-learning web app with real-time audio feedback, shipped as an MVP in 5 months.',
  },
  'drum-bun': {
    title: 'Drum Bun — Romanian Car Services App | 7code',
    description: '7code built Drum Bun, a mobile app unifying RCA insurance, ITP vehicle inspection, and road vignette purchase in one tap.',
  },
  numerize: {
    title: 'Numerize — Document Management Platform | 7code',
    description: '7code built Numerize, a French electronic document management and e-signature platform for enterprise clients.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = CASE_STUDY_META[slug] ?? {
    title: `Case Study: ${slug} | 7code`,
    description: `7code engineering case study for ${slug}.`,
  };
  return buildMetadata({
    title: meta.title,
    description: meta.description,
    path: `/case-study/${slug}`,
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: 'Home', url: SITE_URL },
    { name: 'Case Studies', url: `${SITE_URL}/case-studies` },
    { name: slug, url: `${SITE_URL}/case-study/${slug}` },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <CaseStudyClient slug={slug} />
    </>
  );
}
