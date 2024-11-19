import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MdAdd } from 'react-icons/md';
import { FormElementsSelectorCommand } from './form-elements-selector-command';

export const formElementsList = [
  // static elements
  {
    name: 'Heading 1',
    variant: 'H1',
    content: 'Heading 1',
  },
  {
    name: 'Heading 2',
    variant: 'H2',
    content: 'Heading 2',
  },
  {
    name: 'Heading 3',
    variant: 'H3',
    content: 'Heading 3',
  },
  {
    name: 'Input',
    variant: 'Input',
    // description: 'A single line text input field',
  },
  {
    name: 'Input OTP',
    variant: 'OTP',
  },
  {
    name: 'Password',
    variant: 'Password',
    type: 'password',
  },
  {
    name: 'Textarea',
    variant: 'Textarea',
    // description: 'A multi-line text input field',
  },
  {
    name: 'Checkbox',
    variant: 'Checkbox',
    // description: '',
  },
  {
    name: 'RadioGroup',
    variant: 'RadioGroup',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '2', label: 'Option 3' },
    ],
  },
  {
    name: 'Switch',
    variant: 'Switch',
    // description: '',
  },
  {
    name: 'Separator',
    variant: 'Separator',
  },
  {
    name: 'Select',
    variant: 'Select',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ],
  },
  {
    name: 'Multi select',
    variant: 'MultiSelect',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
      { value: '4', label: 'Option 4' },
      { value: '5', label: 'Option 5' },
    ],
    // description: '',
  },
  {
    name: 'Slider',
    variant: 'Slider',
    // description: '',
  },
  {
    name: 'Date Picker',
    variant: 'DatePicker',
    // description: '',
  },
].sort((a, b) => a.name.localeCompare(b.name));

//======================================
export function FormElementSelector({
  appendElement,
}: {
  appendElement: (elementVariant: string) => void;
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
              appendElement(o.variant);
            }}
            className="gap-1 justify-start rounded-lg w-fit md:w-full"
          >
            <MdAdd />
            {o.name}
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
}
