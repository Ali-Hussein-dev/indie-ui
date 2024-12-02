import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MdAdd } from 'react-icons/md';
import { FormElementsSelectorCommand } from '@/form-builder/components/form-elements-selector-command';
import { Badge } from '@/components/ui/badge';
import { FormElement } from '@/form-builder/form-types';
import { formElementsList } from '@/form-builder/constant/form-elements-list';
import { TemplatesSelect } from '@/form-builder/components/templates-select';
import { useFormBuilder } from '@/form-builder/hooks/use-form-builder';

//======================================
export function FormElementSelector() {
  const { appendElement } = useFormBuilder();
  return (
    <ScrollArea
      className="border rounded-sm border-dashed overflow-auto p-3 w-full md:col-span-2"
      style={{
        height: '100%',
        maxHeight: '40vh',
      }}
    >
      <TemplatesSelect />
      <FormElementsSelectorCommand />
      <div className="flex md:flex-col flex-wrap gap-2 flex-row">
        {formElementsList.map((o) => (
          <Button
            key={o.name}
            size="sm"
            variant="secondary"
            onClick={() => {
              appendElement({
                fieldType: o.fieldType as FormElement['fieldType'],
              });
            }}
            className="gap-1 justify-start rounded-lg w-fit md:w-full relative text-sm px-2"
          >
            <div className="flex-row-start gap-1">
              <MdAdd />
              {o.name}
              {o.isNew && (
                <Badge className="px-px text-sm py-0 rounded-[2px]">N</Badge>
              )}
            </div>
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
}
