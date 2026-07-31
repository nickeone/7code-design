/**
 * 7code content spec — schema for content/pages/*.mdx front-matter.
 *
 * This is the contract between the Cowork content session and the Claude Code
 * implementation session. Validate every spec against these types at build time
 * and FAIL THE BUILD on a mismatch. That is what stops a page shipping without a
 * meta description, with two competing CTAs, or with an unverified claim in it.
 *
 * v1.0 — 27 July 2026
 */

// ---------------------------------------------------------------------------
// Enums
// ---------------------------------------------------------------------------

/** The four canonical ICP segments from the 7code Marketing Playbook. Exactly one per page. */
export type IcpSegment =
  | 'new-product'          // 1 — non-technical founder, pre-product, wants investor-ready MVP
  | 'outstaffing'          // 2 — funded startup CTO/VP Eng, senior capacity without headcount risk
  | 'smb-automation'       // 3 — CEO/COO, 50+ staff, €3M+ revenue, manual operations
  | 'partners';            // 4 — affiliate partners monetising a network via warm intros

export type SearchIntent = 'commercial' | 'commercial-investigation' | 'informational' | 'navigational';

export type PageKind = 'money' | 'capability' | 'package' | 'case-study' | 'hub' | 'geo' | 'index';

/** Block order is enforced. See README §2. */
export type BlockName =
  | 'hero'
  | 'trustStrip'
  | 'diagnosis'
  | 'successHorizon'
  | 'proof'
  | 'cta'
  | 'whatWeBuild'
  | 'howWeDeliver'
  | 'package'
  | 'pointOfView'
  | 'faq'
  | 'close';

export type SpecStatus = 'draft' | 'in-review' | 'approved';

// ---------------------------------------------------------------------------
// Sub-shapes
// ---------------------------------------------------------------------------

export interface PageMeta {
  /** Root-level slug, no leading or trailing slash. e.g. "ai-automation-agency-uk" */
  slug: string;
  /** 50–60 chars. Truncation is a build warning, not an error. */
  title: string;
  /** 140–158 chars. Required. */
  metaDescription: string;
  canonical: string;
  ogImage: string;
  /** 1200x630. Anything else is a build warning. */
  ogImageDimensions: { width: number; height: number };
  robots?: string; // defaults to "index, follow, max-snippet:-1, max-image-preview:large"
  locale: 'en_GB';
}

export interface Targeting {
  primaryKeyword: string;
  secondaryKeywords: string[];
  icpSegment: IcpSegment;
  searchIntent: SearchIntent;
  /** Which User Success Flywheel stage this serves. Playbook rule: if it maps to none, don't build it. */
  flywheelStage: 'define' | 'find' | 'reach' | 'acquisition' | 'closing' | 'amplification';
  /** Qualitative only. NEVER put an unverified volume number here. */
  difficultyNote: string;
}

/**
 * Exactly ONE cta object per page. Every rendered CTA instance uses `label`
 * verbatim. Two different labels on one page is a build error.
 */
export interface Cta {
  label: string;
  /** 'booking' renders the calendar embed; 'form' renders the contact form fallback. */
  action: 'booking' | 'form' | 'internal';
  href: string;
  /** Shown under the button. Kills the "what happens next" hesitation. */
  reassurance: string;
}

export interface ProofRef {
  caseStudySlug: string;
  /** Headline metric shown in the card. Must be client-approved before status:approved. */
  metric: string;
  /** Service tags — rendered as LINKS to money pages, never plain text. */
  tags: Array<{ label: string; href: string }>;
}

export interface FaqEntry {
  question: string;
  /** Markdown. Any service named here must be a link. */
  answer: string;
  /** Which of the nine recurring objections this defends against. */
  objection:
    | 'price'
    | 'timeline'
    | 'seniority'
    | 'lock-in'
    | 'failed-before'
    | 'sideline-our-team'
    | 'ip-ownership'
    | 'data-residency'
    | 'after-launch'
    | 'other';
}

export interface InternalLink {
  anchor: string;
  href: string;
  placement: BlockName;
}

export interface SchemaBlocks {
  service: boolean;
  faqPage: boolean;
  breadcrumbList: boolean;
  organization: boolean;
  /** Only where a real, sourced rating exists. Currently: 4.8 from 11 Clutch reviews. */
  aggregateRating?: { ratingValue: number; reviewCount: number; source: string };
}

export interface Authorship {
  author: string;
  /** The named-reviewer credit. Rare, and a real E-E-A-T and AI-citation signal. */
  reviewer: string;
  published: string;  // ISO date
  updated: string;    // ISO date
}

// ---------------------------------------------------------------------------
// The spec
// ---------------------------------------------------------------------------

export interface PageSpec {
  status: SpecStatus;
  kind: PageKind;
  meta: PageMeta;
  targeting: Targeting;
  /** Exactly one. Repeated verbatim wherever a `cta` block appears. */
  cta: Cta;
  blocks: BlockName[];
  proof: ProofRef[];
  faq: FaqEntry[];
  internalLinks: InternalLink[];
  schema: SchemaBlocks;
  authorship: Authorship;
  /**
   * Anything still needing human sign-off. MUST be empty when status is 'approved'.
   * The build should also grep the MDX body for the literal string "[UNVERIFIED"
   * and fail on any hit in an approved spec.
   */
  openItems: string[];
}

// ---------------------------------------------------------------------------
// Validation the build must run
// ---------------------------------------------------------------------------

export const REQUIRED_BLOCK_ORDER: BlockName[] = [
  'hero',
  'trustStrip',
  'diagnosis',
  'successHorizon',
  'proof',
  'cta',
  'whatWeBuild',
  'howWeDeliver',
  'package',
  'cta',
  'pointOfView',
  'faq',
  'close',
] as unknown as BlockName[];

export const BANNED_TERMS = [
  'leverage',
  'synergy',
  'touch base',
  'circle back',
  'hope this finds you well',
  'offshore body shop',
  'resources', // say "engineers"
] as const;

export interface ValidationRule {
  id: string;
  severity: 'error' | 'warning';
  description: string;
}

export const VALIDATION_RULES: ValidationRule[] = [
  { id: 'single-cta',        severity: 'error',   description: 'All rendered CTA labels on a page must be byte-identical to spec.cta.label.' },
  { id: 'proof-before-cta',  severity: 'error',   description: 'trustStrip must render before the first cta block.' },
  { id: 'faq-count',         severity: 'error',   description: 'Money pages require 10–12 FAQ entries.' },
  { id: 'faq-schema',        severity: 'error',   description: 'Every FAQ entry must emit FAQPage schema.' },
  { id: 'faq-links',         severity: 'error',   description: 'Any 7code service named in an FAQ answer must be a link to its page.' },
  { id: 'proof-tags-linked', severity: 'error',   description: 'Case-study service tags must be links, never plain text.' },
  { id: 'no-unverified',     severity: 'error',   description: 'No "[UNVERIFIED" string may appear in a status:approved spec.' },
  { id: 'open-items-empty',  severity: 'error',   description: 'openItems must be empty when status is approved.' },
  { id: 'one-segment',       severity: 'error',   description: 'targeting.icpSegment must be set to exactly one segment.' },
  { id: 'meta-desc',         severity: 'error',   description: 'metaDescription is required.' },
  { id: 'banned-terms',      severity: 'error',   description: 'No BANNED_TERMS in body copy.' },
  { id: 'title-length',      severity: 'warning', description: 'title should be 50–60 characters.' },
  { id: 'og-dimensions',     severity: 'warning', description: 'ogImage should be 1200x630.' },
  { id: 'sentence-length',   severity: 'warning', description: 'Mean sentence length above 26 words — tighten it.' },
];
