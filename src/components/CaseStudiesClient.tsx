'use client';
import React from 'react';
import { ClientLayout } from './ClientLayout';
import { CaseStudiesPage } from './case-studies';

export default function CaseStudiesClient() {
  return (
    <ClientLayout>
      <CaseStudiesPage />
    </ClientLayout>
  );
}
