'use client';
import React from 'react';
import { ClientLayout } from './ClientLayout';
import { CaseStudyPage } from './case-study';

export default function CaseStudyClient({ slug }: { slug: string }) {
  return (
    <ClientLayout>
      <CaseStudyPage slug={slug} variant="sticky" />
    </ClientLayout>
  );
}
