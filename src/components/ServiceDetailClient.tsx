'use client';
import React from 'react';
import { ClientLayout } from './ClientLayout';
import { ServiceDetailPage } from './service-detail';

export default function ServiceDetailClient({ slug }: { slug: string }) {
  return (
    <ClientLayout>
      <ServiceDetailPage slug={slug} />
    </ClientLayout>
  );
}
