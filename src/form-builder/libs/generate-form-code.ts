import { FormElementOrList } from '../form-types';
import { generateImports } from './generate-imports';
import { getZodSchemaString } from './generate-zod-schema';
import { getFormElementCode } from './generate-form-component';

export const generateFormCode = (formElements: FormElementOrList[]): string => {
  const flattenedFormElements = formElements.flat();
  const imports = Array.from(generateImports(flattenedFormElements)).join('\n');

  const schema = getZodSchemaString(flattenedFormElements);
  //   const constants = Array.from(generateConstants(formElement)).join('\n');

  const renderFields = (fields: FormElementOrList[]) => {
    return fields
      .map((FormElement) => {
        if (Array.isArray(FormElement)) {
          return `
            <div className="flex items-center justify-between flex-wrap sm:flex-nowrap w-full gap-2">
          ${FormElement.map((field) => getFormElementCode(field)).join('')}
        </div>`;
        } else {
          return getFormElementCode(FormElement);
        }
      })
      .join('\n');
  };

  const defaultValues = '{}';

  const component = `
  export function DraftForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: ${defaultValues},
  })

  function onSubmit(fields: z.infer<typeof formSchema>) {
    console.log(fields);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col p-2 md:p-5 w-full mx-auto rounded-md max-w-3xl gap-2 border">
          ${renderFields(formElements)}
          <div className="flex justify-end items-center w-full pt-3">
            <Button className="rounded-lg" size="sm">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
`;
  return imports + '\n\n' + schema + '\n' + component;
};
