/**
 * used in
 * - form-elements-selector.tsx
 * - form-elements-selector-command.tsx
 */
export const formElementsList = [
  {
    name: 'Checkbox',
    fieldType: 'Checkbox',
  },
  {
    name: 'Date Picker',
    fieldType: 'DatePicker',
  },
  {
    name: 'Heading 1',
    fieldType: 'H1',
    content: 'Heading 1',
    static: true,
  },
  {
    name: 'Heading 2',
    fieldType: 'H2',
    content: 'Heading 2',
    static: true,
  },
  {
    name: 'Heading 3',
    fieldType: 'H3',
    content: 'Heading 3',
    static: true,
  },
  {
    name: 'paragraph',
    fieldType: 'P',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    static: true,
  },
  {
    name: 'Input',
    fieldType: 'Input',
  },
  {
    name: 'Input OTP',
    fieldType: 'OTP',
  },
  {
    name: 'Multi select',
    fieldType: 'MultiSelect',
    options: [
      {
        value: '1',
        label: 'Option 1',
      },
      {
        value: '2',
        label: 'Option 2',
      },
      {
        value: '3',
        label: 'Option 3',
      },
      {
        value: '4',
        label: 'Option 4',
      },
      {
        value: '5',
        label: 'Option 5',
      },
    ],
  },
  {
    name: 'Password',
    fieldType: 'Password',
    type: 'password',
  },
  {
    name: 'Radio',
    fieldType: 'RadioGroup',
    options: [
      {
        value: '1',
        label: 'Option 1',
      },
      {
        value: '2',
        label: 'Option 2',
      },
      {
        value: '2',
        label: 'Option 3',
      },
    ],
    isNew: true,
  },
  {
    name: 'Select',
    fieldType: 'Select',
    options: [
      {
        value: '1',
        label: 'Option 1',
      },
      {
        value: '2',
        label: 'Option 2',
      },
    ],
  },
  {
    name: 'Separator',
    fieldType: 'Separator',
    static: true,
  },
  {
    name: 'Slider',
    fieldType: 'Slider',
  },
  {
    name: 'Switch',
    fieldType: 'Switch',
  },
  {
    name: 'Textarea',
    fieldType: 'Textarea',
  },
  {
    name: 'Toggle',
    fieldType: 'ToggleGroup',
    isNew: true,
  },
];
