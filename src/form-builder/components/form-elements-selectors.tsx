import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MdAdd } from 'react-icons/md';

const formElementsList = [
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
    name: 'Switch',
    variant: 'Switch',
    // description: '',
  },
  {
    name: 'Select',
    variant: 'Select',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ],
    // description: '',
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
  // static elements
  {
    name: 'Separator',
    variant: 'Separator',
  },
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
];
//======================================
export function FormElementSelector({
  appendElement: addElement,
}: {
  appendElement: (elementVariant: string) => void;
}) {
  return (
    <ScrollArea
      className="border rounded-sm border-dashed overflow-auto p-3 hidden md:block md:col-span-2"
      style={{
        height: '55vh',
        maxHeight: '55vh',
      }}
    >
      {formElementsList.map((o) => (
        <div key={o.name} className="py-1">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => {
              addElement(o.variant);
            }}
            className="gap-1 w-full justify-start rounded-lg"
          >
            <MdAdd />
            {o.name}
          </Button>
        </div>
      ))}
    </ScrollArea>
  );
}
