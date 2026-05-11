'use client';
import React from 'react';
import { ClientLayout } from './ClientLayout';
import { BlogRouter } from './blog';

export default function BlogListClient() {
  return (
    <ClientLayout>
      <BlogRouter />
    </ClientLayout>
  );
}
