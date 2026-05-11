// Single source of truth for all site routes used by generateStaticParams, sitemap, breadcrumbs

export const SITE_URL = 'https://www.7code.tech';

export const SERVICE_SLUGS = [
  'ai-product-engineering',
  'system-integrations',
  'ai-automation',
  'cloud-agentic-infra',
  'ai-outstaffing',
  'llm-agent-development',
] as const;

export type ServiceSlug = typeof SERVICE_SLUGS[number];

export const CASE_STUDY_SLUGS = [
  'wholesum',
  'daily8',
  'revote',
  'g42-fleet',
  'cloud-of-legacy',
  'lidl-road-safety',
  'hera',
  'melsonic',
  'drum-bun',
  'numerize',
] as const;

export type CaseStudySlug = typeof CASE_STUDY_SLUGS[number];

export const EXPERTISE_SLUGS = [
  'healthcare',
  'finance',
  'energy',
  'defence',
  'hr',
  'operations',
] as const;

export type ExpertiseSlug = typeof EXPERTISE_SLUGS[number];

export const COMPARE_SLUGS = [
  'agency-vs-freelancer',
] as const;

export type CompareSlug = typeof COMPARE_SLUGS[number];

export const BLOG_SLUGS = [
  'ai-discovery-mission-de-risk-ai-products',
  'ship-ai-mvp-six-weeks',
  'ai-engineering-pricing-fixed-vs-time-materials',
  'ai-agents-manufacturing-operations',
  'ai-native-automation-crm-erp-iot',
  'senior-engineers-ai-leverage',
  'ai-engineering-outstaffing',
  'running-ai-engineering-pods-across-continents',
  'lessons-from-london-tech-week-ai',
  'aws-beanstalk-to-ecs-migration',
  'aws-ecs-vs-beanstalk-perspective',
  'migrating-users-auth0-python',
  'adrenaline-ai-code-debugger',
  'osai-revolutionising-ai-interactions',
  'why-mvp-first',
  'reducing-costs-nearshoring-outstaffing',
  'logistics-tech-tailored-solutions',
  'fixed-price-vs-time-and-materials',
  'low-code-no-code-vs-custom-development',
  'cms-wordpress-vs-custom-development',
  'changing-software-service-provider',
  'switch-ai-engineering-partner',
  'seamless-software-project-handover',
  'ai-project-handover',
  '7code-discovery-mission',
  'adrenaline-ai-debugger-case-study',
  'how-to-hire-nearshore-ai-engineers',
  'top-nearshore-ai-development-agencies-europe',
] as const;

export type BlogSlug = typeof BLOG_SLUGS[number];

export const SERVICE_META: Record<ServiceSlug, { title: string; description: string }> = {
  'ai-product-engineering': {
    title: 'AI-Native Product Engineering | 7code',
    description: 'AI-native product engineering by 7code. LLM-powered web and mobile products, agents, RAG, evals, and cloud infrastructure for production.',
  },
  'system-integrations': {
    title: 'System Integrations — ERP, CRM, API | 7code',
    description: 'Connect your ERP, CRM, and SaaS stack into a reliable data fabric. Real-time pipelines, event-driven architecture, and clean APIs for AI readiness.',
  },
  'ai-automation': {
    title: 'AI & Process Automation | 7code',
    description: 'LLM integrations, custom copilots, and workflow automation that eliminates manual work. Built for production, eval-gated every release.',
  },
  'cloud-agentic-infra': {
    title: 'Cloud & Agentic Infrastructure | 7code',
    description: 'Cloud-native deployments, agentic pipeline orchestration, and AI observability. AWS, GCP, Azure. Your AI products run reliably and scale automatically.',
  },
  'ai-outstaffing': {
    title: 'AI Engineering Outstaffing | 7code',
    description: 'Senior AI engineers embedded in your team. Matched in 72 hours, monthly rolling contracts, no lock-in. Direct access to the engineers writing the code.',
  },
  'llm-agent-development': {
    title: 'LLM & Agent Development | 7code',
    description: 'Custom LLM integrations and multi-step agent pipelines built for production. RAG system design, tool use, memory, and human-in-the-loop checkpoints.',
  },
};

export const EXPERTISE_META: Record<ExpertiseSlug, { title: string; description: string }> = {
  'healthcare': {
    title: 'Healthcare AI Engineering | 7code',
    description: 'HIPAA-compliant AI platforms for healthcare. EHR interoperability, clinical decision support, and patient engagement tools built by 7code.',
  },
  'finance': {
    title: 'Finance & FinTech Engineering | 7code',
    description: 'Real-time dashboards, ERP integration, and AI automation for finance. Compliance-ready engineering for FinTech and enterprise finance teams.',
  },
  'energy': {
    title: 'Energy & Utilities AI Engineering | 7code',
    description: 'IoT integration, predictive analytics, and real-time monitoring for energy and utilities. Production-grade AI solutions for critical infrastructure.',
  },
  'defence': {
    title: 'Defence & Security Engineering | 7code',
    description: 'Secure systems integration and situational-awareness platforms for defence. Security-cleared engineering teams with track record in classified environments.',
  },
  'hr': {
    title: 'HR Tech AI Engineering | 7code',
    description: 'Recruitment, onboarding, payroll and workforce analytics unified with AI. 7code builds HR tech platforms that automate the manual and surface the signal.',
  },
  'operations': {
    title: 'Operations AI Automation | 7code',
    description: 'Workflow automation and AI-powered dashboards for operations. We connect your operational stack and surface the intelligence buried in your data.',
  },
};
