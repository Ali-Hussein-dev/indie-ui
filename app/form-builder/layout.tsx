import * as React from 'react';
import { Header } from '@/components/homepage/header';
import { Footer } from '@/components/footer';
import { generateSEOTags } from '@/lib/seo';

export const metadata = generateSEOTags({
  title: 'Form Builder',
  description:
    'Build forms with React, shadcn, tailwindcss, Zod, and React Hook Form',
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
      <div className="h-full grow py-6">
        <div className="mx-auto mb-4 md:mb-6 px-2 max-w-md">
          <h1 className="text-2xl text-center font-bold mb-2">Form Builder</h1>
          <p className="text-foreground/70 text-center text-pretty">
            Build your form easily with <span className="">React</span>,{' '}
            <span className="">Tailwindcss</span>,{' '}
            <span className="">Shadcn</span>, <span className="">Zod</span>, and{' '}
            <span className="">React Hook Form</span>
          </p>
        </div>
        {children}
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
