'use client';
import React from 'react';
import { ClientLayout } from './ClientLayout';
import { ContactPage } from './pages';

export default function ContactClient() {
  return (
    <ClientLayout>
      <ContactPage />
    </ClientLayout>
  );
}
