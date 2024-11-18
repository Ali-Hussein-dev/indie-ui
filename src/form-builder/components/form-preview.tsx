import { Form, FormField } from '@/components/ui/form';
import { RenderFormElement } from './render-form-element';
import {
  FieldsElementsList,
  FormElement,
  FormFieldElement,
} from '../form-types';
import { ControllerRenderProps } from 'react-hook-form';
import { Button } from '@/components/ui/button';

//======================================
interface FormPreviewProps {
  form: any;
  onSubmit: (data: any) => void;
  formElements: FieldsElementsList;
}

export function FormPreview({
  form,
  onSubmit,
  formElements,
}: FormPreviewProps) {
  return (
    <div className="w-full animate-in">
      {Object.keys(form.watch()).length > 0 ? (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col p-2 md:p-5 w-full mx-auto rounded-md max-w-3xl gap-2 border"
          >
            {formElements.map((element: FormElement, i) => {
              if ('static' in element) {
                return RenderFormElement(
                  {
                    ...element,
                    ref: (form.control as any).register(element.name).ref,
                  } as FormFieldElement & ControllerRenderProps,
                  form,
                );
              }
              return (
                <FormField
                  key={element.name + i}
                  control={form.control}
                  name={element.name as keyof FormFieldElement}
                  render={({ field }: { field: ControllerRenderProps }) =>
                    RenderFormElement(
                      {
                        ...element,
                        ...field,
                      } as FormFieldElement & ControllerRenderProps,
                      form,
                    )
                  }
                />
              );
            })}
            <div className="flex-row-end w-full pt-3">
              <Button className="rounded-lg" size="sm">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      ) : (
        <div className="h-full">
          <p className="text-center">Add form elements to preview</p>
        </div>
      )}
    </div>
  );
}
