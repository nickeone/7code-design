'use client';
import React from 'react';
import { ClientLayout } from './ClientLayout';
import { HomePage } from './pages';

export default function HomeClient() {
  return (
    <ClientLayout>
      <HomePage heroVariant="pattern" />
    </ClientLayout>
  );
}
