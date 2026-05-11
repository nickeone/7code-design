import type { Metadata } from 'next';
import { buildMetadata, buildBreadcrumbJsonLd } from '../../lib/seo';
import { SITE_URL } from '../../lib/routes';
import ProcessClient from '../../src/components/ProcessClient';

export const metadata: Metadata = buildMetadata({
  title: 'How We Work — Our Engineering Process | 7code',
  description:
    '7code\'s five-stage product engineering process: Discovery & Strategy, Design & Prototyping, Engineering Sprints, Launch & QA, and Iterate & Scale. Reliable delivery, not just velocity.',
  path: '/process',
});

const breadcrumb = buildBreadcrumbJsonLd([
  { name: 'Home', url: SITE_URL },
  { name: 'How We Work', url: `${SITE_URL}/process` },
]);

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How 7code Delivers AI Engineering Projects',
  description: '7code\'s five-stage product engineering process from discovery to scaling.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Discovery & Strategy', text: 'We understand your business, users, and constraints. Output: product strategy and engineering plan.' },
    { '@type': 'HowToStep', position: 2, name: 'Design & Prototyping', text: 'Wireframes, hi-fi designs, and interactive prototypes validated with real users.' },
    { '@type': 'HowToStep', position: 3, name: 'Engineering Sprints', text: 'Two-week sprints with continuous deployment. Progress visible every Friday.' },
    { '@type': 'HowToStep', position: 4, name: 'Launch & QA', text: 'Comprehensive testing, performance optimization, and a launch playbook.' },
    { '@type': 'HowToStep', position: 5, name: 'Iterate & Scale', text: 'Monitor, measure, and iterate post-launch for compounding product value.' },
  ],
};

export default function ProcessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([howToJsonLd, breadcrumb]) }} />
      <ProcessClient />
    </>
  );
}
