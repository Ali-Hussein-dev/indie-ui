import { Form } from '@/components/ui/form';
import { RenderFormElement } from '@/form-builder/components/render-form-element';
import { FormElementOrList, FormStep } from '@/form-builder/form-types';
import { Button } from '@/components/ui/button';
import { MultiStepViewer } from '@/form-builder/components/multi-step-viewer';
import { useFormBuilder } from '@/form-builder/hooks/use-form-builder';
import useFormBuilderStore from '@/form-builder/hooks/use-form-builder-store';

interface FormPreviewProps {
  form: any;
}

export function FormPreview({ form }: FormPreviewProps) {
  const { onSubmit } = useFormBuilder();
  const formElements = useFormBuilderStore((s) => s.formElements);
  const isMS = useFormBuilderStore((s) => s.isMS);
  const data = Object.keys(form.watch());
  return (
    <div className="w-full animate-in rounded-md border">
      {data.length > 0 ? (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col p-2 md:p-5 w-full gap-2"
          >
            {isMS ? (
              <MultiStepViewer
                formElements={formElements as unknown as FormStep[]}
                form={form}
              />
            ) : (
              (formElements as FormElementOrList[]).map((element, i) => {
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
              })
            )}
            {!isMS && (
              <div className="flex-row-end w-full pt-3">
                <Button type="submit" className="rounded-lg" size="sm">
                  Submit
                </Button>
              </div>
            )}
          </form>
        </Form>
      ) : (
        <div className="h-full py-10 px-3">
          <p className="text-center text-muted-foreground text-lg">
            Add form elements to preview
          </p>
        </div>
      )}
    </div>
  );
}
