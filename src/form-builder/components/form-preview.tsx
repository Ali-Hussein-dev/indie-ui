import { Form } from '@/components/ui/form';
import { RenderFormElement } from './render-form-element';
import { FieldsElementsList, FormElement } from '../form-types';
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
              return (
                <div key={element.name + i} className="w-full">
                  {RenderFormElement(element, form)}
                </div>
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
