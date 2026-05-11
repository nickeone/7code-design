'use client';
import React, { useEffect } from 'react';
import { Nav, Footer, useReveal } from './layout';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  useReveal();
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
