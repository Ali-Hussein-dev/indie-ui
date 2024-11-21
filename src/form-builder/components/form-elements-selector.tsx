import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MdAdd } from 'react-icons/md';
import { FormElementsSelectorCommand } from '@/form-builder/components/form-elements-selector-command';
import { Badge } from '@/components/ui/badge';
import { AppendElement, FormElement } from '@/form-builder/form-types';

export const formElementsList = [
  // static elements
  {
    name: 'Heading 1',
    fieldType: 'H1',
    content: 'Heading 1',
  },
  {
    name: 'Heading 2',
    fieldType: 'H2',
    content: 'Heading 2',
  },
  {
    name: 'Heading 3',
    fieldType: 'H3',
    content: 'Heading 3',
  },
  {
    name: 'Input',
    fieldType: 'Input',
    // description: 'A single line text input field',
  },
  {
    name: 'Input OTP',
    fieldType: 'OTP',
  },
  {
    name: 'Password',
    fieldType: 'Password',
    type: 'password',
  },
  {
    name: 'Textarea',
    fieldType: 'Textarea',
    // description: 'A multi-line text input field',
  },
  {
    name: 'Checkbox',
    fieldType: 'Checkbox',
  },
  {
    name: 'Radio',
    fieldType: 'RadioGroup',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '2', label: 'Option 3' },
    ],
    isNew: true,
  },
  {
    name: 'Switch',
    fieldType: 'Switch',
  },
  {
    name: 'Separator',
    fieldType: 'Separator',
  },
  {
    name: 'Select',
    fieldType: 'Select',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ],
  },
  {
    name: 'Multi select',
    fieldType: 'MultiSelect',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
      { value: '4', label: 'Option 4' },
      { value: '5', label: 'Option 5' },
    ],
  },
  {
    name: 'Slider',
    fieldType: 'Slider',
  },
  {
    name: 'Toggle',
    fieldType: 'ToggleGroup',
    isNew: true,
  },
  {
    name: 'Date Picker',
    fieldType: 'DatePicker',
  },
].sort((a, b) => a.name.localeCompare(b.name)) ;

//======================================
export function FormElementSelector({
  appendElement,
}: {
  appendElement: AppendElement;
}) {
  return (
    <ScrollArea
      className="border rounded-sm border-dashed overflow-auto p-3 w-full md:col-span-2"
      style={{
        height: '100%',
        maxHeight: '60vh',
      }}
    >
      <FormElementsSelectorCommand appendElement={appendElement} />
      <div className="flex md:flex-col flex-wrap gap-2 flex-row">
        {formElementsList.map((o) => (
          <Button
            key={o.name}
            size="sm"
            variant="secondary"
            onClick={() => {
              appendElement(o.fieldType as FormElement["fieldType"]);
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
