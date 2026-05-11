'use client';
import React from 'react';
import { ClientLayout } from './ClientLayout';
import { CompareAgencyFreelancerPage } from './pages';

export default function CompareClient({ slug }: { slug: string }) {
  return (
    <ClientLayout>
      <CompareAgencyFreelancerPage />
    </ClientLayout>
  );
}
