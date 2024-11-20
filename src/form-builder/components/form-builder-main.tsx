'use client';
import { useFormBuilder } from '@/form-builder/hooks/use-form-builder';
import { FormElement } from '@/form-builder/form-types';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FormElementSelector } from '@/form-builder/components/form-elements-selector';
import { FormEdit } from '@/form-builder/components/form-edit';
import { FormPreview } from '@/form-builder/components/form-preview';
import { JsonViewer, JsxViewer } from '@/form-builder/components/code-viewer';
import * as React from 'react';
import { CommandProvider } from '@/form-builder/hooks/use-command-ctx';

const initialFormElements: FormElement[] = [
  {
    name: 'heading',
    fieldType: 'H2',
    static: true,
    content: 'Form Title',
  },
  {
    name: 'name',
    fieldType: 'Input',
    type: 'text',
    label: 'Name',
    required: true,
    placeholder: 'Enter your name',
  },
  {
    name: 'email',
    fieldType: 'Input',
    type: 'email',
    label: 'Email',
    required: true,
    placeholder: 'Enter your email',
  },
];

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
export function FormBuilderMain() {
  const {
    form,
    onSubmit,
    formElements,
    appendElement,
    resetForm,
    dropElement,
    editElement,
    reorder,
  } = useFormBuilder({
    initialFormElements,
  });
  const json = formElements.filter((element) => !element?.static);
  const [submittedData, setSubmittedData] = React.useState(form.watch());
  React.useEffect(() => {
    setSubmittedData(form.watch());
  }, [JSON.stringify(form.watch())]);

  return (
    <div className="w-full grid mx-auto md:grid-cols-12 max-w-[75rem] gap-3 p-1">
      <CommandProvider>
        <FormElementSelector appendElement={appendElement} />
        <Tabs
          defaultValue={tabsList[0].name}
          className="w-full md:col-span-6 min-w-full grow"
        >
          <TabsList className="w-full">
            {tabsList.map((tab) => (
              <TabsTrigger key={tab.name} value={tab.name} className="w-full">
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={tabsList[0].name}>
            <FormEdit
              editFormElement={editElement}
              formElements={formElements}
              dropElement={dropElement}
              reorder={reorder}
            />
            <div className="flex-row-end pt-2">
              {formElements.length > 1 && (
                <Button size="sm" variant={'secondary'} onClick={resetForm}>
                  Reset
                </Button>
              )}
            </div>
          </TabsContent>
          <TabsContent value={tabsList[1].name}>
            <JsxViewer formElements={formElements} />
          </TabsContent>
          <TabsContent value={tabsList[2].name}>
            <JsonViewer json={json} />
          </TabsContent>
          <TabsContent value={tabsList[3].name}>
            <JsonViewer json={submittedData} />
          </TabsContent>
        </Tabs>
      </CommandProvider>
      <div className="md:col-span-4 w-full">
        <FormPreview
          form={form}
          formElements={formElements}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}
