import * as React from 'react';
import { Header } from '@/components/homepage/header';
import { Footer } from '@/components/footer';
import { generateSEOTags } from '@/lib/seo';

// add seo metadata, here
export const metadata = generateSEOTags({
  title: 'Form Builder',
  description: 'Build forms with React, shadcn, tailwindcss',
  // image: 'https://indie-soft
});
//======================================
export default function FormBuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-col-center w-full min-h-screen">
      <Header />
      <div className="h-full grow">{children}</div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
