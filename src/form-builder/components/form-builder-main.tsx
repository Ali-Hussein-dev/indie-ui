'use client';

import { useFormBuilder } from '@/form-builder/hooks/use-form-builder';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FormElementSelector } from '@/form-builder/components/form-elements-selector';
import { FormEdit } from '@/form-builder/components/form-edit';
import { FormPreview } from '@/form-builder/components/form-preview';
import { JsonViewer, JsxViewer } from '@/form-builder/components/code-viewer';
import * as React from 'react';
import { CommandProvider } from '@/form-builder/hooks/use-command-ctx';
import useFormBuilderStore from '@/form-builder/hooks/use-form-builder-store';
import { ExternalLink } from 'lucide-react';

const tabsList = [
  {
    name: 'Edit',
  },
  {
    name: 'Code',
  },
  {
    name: 'JSON',
  },
  {
    name: 'Submission',
  },
];

//======================================
export function Examples() {
  const links = [
    {
      label: 'Create job post form',
      href: 'https://nextradar.dev/jobs/create',
    },
  ];
  return (
    <div className="mx-auto pt-8 pb-4 w-fit">
      <h3 className="text-lg font-semibold text-center mb-2">Examples</h3>
      <div className="flex-col-center">
        {links.map((link, i) => (
          <Button key={i} asChild variant={'outline'} size="sm">
            <a href={link.href} target="_blank">
              {link.label} <ExternalLink className="size-4 ml-2" />
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}
//======================================
export function FormBuilderMain() {
  const { submittedData, resetForm, form } = useFormBuilder();
  const formElements = useFormBuilderStore((s) => s.formElements);
  return (
    <>
      <div className="w-full grid mx-auto md:grid-cols-12 max-w-[77rem] gap-3">
        <CommandProvider>
          <FormElementSelector />
        </CommandProvider>
        <div className="px-4 sm:px-0 w-full md:col-span-6 min-w-full grow ">
          <Tabs defaultValue={tabsList[0].name} className="">
            <TabsList className="w-full">
              {tabsList.map((tab) => (
                <TabsTrigger key={tab.name} value={tab.name} className="w-full">
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value={tabsList[0].name}>
              <FormEdit />
              <div className="flex-row-end pt-2">
                {formElements.length > 1 && (
                  <Button
                    size="sm"
                    variant={'ghost'}
                    onClick={resetForm}
                    className="rounded-lg"
                  >
                    Reset
                  </Button>
                )}
              </div>
            </TabsContent>
            <TabsContent value={tabsList[1].name}>
              <JsxViewer />
            </TabsContent>
            <TabsContent value={tabsList[2].name}>
              <JsonViewer json={formElements} />
            </TabsContent>
            <TabsContent value={tabsList[3].name}>
              <JsonViewer json={submittedData} />
            </TabsContent>
          </Tabs>
        </div>
        <div className="md:col-span-4 w-full">
          <FormPreview form={form} />
        </div>
      </div>
      <Examples />
    </>
  );
}
