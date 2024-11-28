import { Form } from '@/components/ui/form';
import { RenderFormElement } from '@/form-builder/components/render-form-element';
import { FormElementOrList } from '@/form-builder/form-types';
import { Button } from '@/components/ui/button';
import { useFormBuilder } from '@/form-builder/hooks/use-form-builder';
import * as React from 'react';

interface FormPreviewProps {
  form: any;
  // onSubmit: (data: any) => void;
  // formElements: FormElementList;
}

export function FormPreview({ form }: FormPreviewProps) {
  const { onSubmit, formElements } = useFormBuilder();
  const data = Object.keys(form.watch());
  return (
    <div className="w-full animate-in mx-auto rounded-md max-w-3xl gap-2 border">
      {data.length > 0 ? (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col p-2 md:p-5 w-full"
          >
            {formElements.map((element: FormElementOrList, i) => {
              if (Array.isArray(element)) {
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between flex-wrap sm:flex-nowrap w-full gap-2"
                  >
                    {element.map((el, ii) => (
                      <div key={el.name + ii} className="w-full">
                        {RenderFormElement(el, form)}
                      </div>
                    ))}
                  </div>
                );
              }
              return (
                <div key={element.name + i} className="w-full">
                  {RenderFormElement(element, form)}
                </div>
              );
            })}
            <div className="flex-row-end w-full pt-3">
              <Button type="submit" className="rounded-lg" size="sm">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      ) : (
        <div className="h-full py-10 px-3">
          <p className="text-center text-muted-foreground text-lg">
            No form elements added yet.
          </p>
        </div>
      )}
    </div>
  );
}
