'use client';
import React from 'react';
import { ClientLayout } from './ClientLayout';
import { ExpertiseDetailPage } from './expertise-detail';

export default function ExpertiseDetailClient({ slug }: { slug: string }) {
  return (
    <ClientLayout>
      <ExpertiseDetailPage slug={slug} />
    </ClientLayout>
  );
}
