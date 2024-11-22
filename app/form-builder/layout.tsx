import * as React from 'react';
import { Header } from '@/components/homepage/header';
import { Footer } from '@/components/footer';
import { generateSEOTags } from '@/lib/seo';

export const metadata = generateSEOTags({
  title: 'FormFast | Build Forms In Minutes',
  description:
    'Build as many forms as you want for free using React, shadcn, tailwindcss, Zod, and React Hook Form',
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
      <div className="h-full grow w-full px-2 md:px-4 py-3">
        <div className="border border-dashed px-2 mb-5 md:grid-cols-8 grid max-w-[77rem] mx-auto">
          <div className="md:col-span-1"></div>
          <div className="md:col-span-6 md:border-x border-dashed py-5 px-3 grow sm:py-6 md:py-10 md:px-6 w-full">
            <h1 className="text-2xl md:text-3xl text-center text-pretty font-bold mb-2">
              Build Forms{' '}
              <span className="underline-offset-4 decoration-green-500 underline">
                In Mintues
              </span>{' '}
              <span className="line-through decoration-red-600">Not Hours</span>
            </h1>
            <p className="text-muted-foreground text-center text-pretty">
              Build as many forms as you want for free using
            </p>
            <div className="flex-row-center gap-3 flex-wrap pt-2 text-muted-foreground">
              <span>React</span>
              <span>Tailwindcss</span>
              <span>Shadcn</span>
              <span>Zod</span>
              <span>React Hook Form</span>
            </div>
          </div>
          <div className="md:col-span-1"></div>
        </div>
        {children}
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
