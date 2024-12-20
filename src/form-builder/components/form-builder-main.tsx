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
import { ChevronDown, ExternalLink } from 'lucide-react';
import { VscBug } from 'react-icons/vsc';
import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild tabIndex={-1}>
        <Button variant={'outline'}>
          <div className="flex-row-center gap-2">
            Examples
            <ChevronDown className="size-4" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {links.map((link, i) => (
          <DropdownMenuItem key={i} asChild>
            <a href={link.href} target="_blank">
              {link.label} <ExternalLink className="size-4 ml-2" />
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
//======================================
export function FormBuilderMain() {
  const { submittedData, resetForm, form } = useFormBuilder();
  const formElements = useFormBuilderStore((s) => s.formElements);
  const isMS = useFormBuilderStore((s) => s.isMS);
  const setIsMS = useFormBuilderStore((s) => s.setIsMS);
  return (
    <>
      <div className="w-full grid mx-auto md:grid-cols-12 max-w-[77rem] gap-3 py-6">
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
            <TabsContent value={tabsList[0].name} tabIndex={-1}>
              <div className="pb-4 flex-row-between">
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-lg"
                  onClick={() => setIsMS(!isMS)}
                >
                  {isMS ? 'Single-step' : 'Multi-step'} Form
                </Button>
                {formElements.length > 1 && (
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={resetForm}
                    className="rounded-lg"
                  >
                    Reset
                  </Button>
                )}
              </div>
              <FormEdit />
            </TabsContent>
            <TabsContent value={tabsList[1].name} tabIndex={-1}>
              <JsxViewer />
            </TabsContent>
            <TabsContent value={tabsList[2].name} tabIndex={-1}>
              <JsonViewer json={formElements} />
            </TabsContent>
            <TabsContent value={tabsList[3].name} tabIndex={-1}>
              <JsonViewer json={submittedData} />
            </TabsContent>
          </Tabs>
        </div>
        <div className="md:col-span-4 w-full">
          <FormPreview form={form} />
        </div>
      </div>
      <div className="flex-row-center gap-4 flex-wrap max-w-[77rem] mx-auto border-t px-2 py-6 border-dashed">
        <Button variant={'outline'}>
          <a
            href={'https://github.com/Ali-Hussein-dev/indie-ui/discussions'}
            className="flex-row-center gap-2"
          >
            Request Feature
          </a>
        </Button>
        <Button variant={'outline'}>
          <a
            href={'https://github.com/Ali-Hussein-dev/indie-ui/issues/new'}
            className="flex-row-center gap-2"
          >
            Report bug <VscBug />
          </a>
        </Button>
        <Examples />
      </div>
    </>
  );
}
