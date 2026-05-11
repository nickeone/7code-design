'use client';
import React from 'react';
import { ClientLayout } from './ClientLayout';
import { BlogRouter } from './blog';

export default function BlogPostClient({ slug }: { slug: string }) {
  return (
    <ClientLayout>
      <BlogRouter slug={slug} />
    </ClientLayout>
  );
}
