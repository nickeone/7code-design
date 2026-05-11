'use client';
import React from 'react';
import { Nav } from './layout';
import { Footer } from './layout';

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <div id="page-content">{children}</div>
      <Footer />
    </>
  );
}
