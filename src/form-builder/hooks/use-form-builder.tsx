'use client';
import * as React from 'react';
import {
  FormFieldElement,
  FieldsElementsList,
  FormElement,
} from '@/form-builder/form-types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type UseFormbuilderProps = FieldsElementsList;

export const initialAttibutes: Record<
  FormElement['fieldType'],
  Partial<FormElement>
> = {
  Input: {
    name: 'input-field',
    label: 'Single line Input Field',
    placeholder: 'Enter your text',
  },
  OTP: {
    name: 'one-time-password',
    label: 'One-Time Password',
    description: 'Please enter the one-time password sent to your phone.',
  },
  Password: {
    name: 'password',
    label: 'Password Field',
  },
  Checkbox: {
    label: 'Checkbox Label',
  },
  RadioGroup: {
    label: 'Pick one option',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
  },
  ToggleGroup: {
    label: 'Pick multiple days',
    type: 'multiple',
    options: [
      { value: 'monday', label: 'Mon' },
      { value: 'tuesday', label: 'Tue' },
      { value: 'wednesday', label: 'Wed' },
      { value: 'thursday', label: 'Thu' },
      { value: 'friday', label: 'Fri' },
      { value: 'saturday', label: 'Sat' },
      { value: 'sunday', label: 'Sun' },
    ],
  },
  DatePicker: {
    label: 'Pick a date',
  },
  Select: {
    label: 'Select option',
    placeholder: '',
    description: '',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ],
  },
  MultiSelect: {
    label: 'Select multiple options',
    description: 'Select multiple options.',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
      { value: '4', label: 'Option 4' },
      { value: '5', label: 'Option 5' },
    ],
  },
  Slider: {
    label: 'Set Range',
    description: 'Adjust the range by sliding.',
    min: 0,
    max: 100,
    step: 5,
  },
  Switch: {
    label: 'Toggle Switch',
    description: 'Turn on or off.',
  },
  Textarea: {
    label: 'Textarea',
    description: 'A multi-line text input field',
  },
  H1: {
    label: 'Heading 1',
    content: 'Heading 1',
    static: true,
  },
  H2: {
    label: 'Heading 2',
    content: 'Heading 2',
    static: true,
  },
  H3: {
    label: 'Heading 3',
    content: 'Heading 3',
    static: true,
  },
  P: {
    label: 'Paragraph',
    content: 'E.g This is a note',
    static: true,
  },
  Separator: {
    static: true,
  },
};

export const useFormBuilder = ({
  initialFormElements,
}: {
  initialFormElements: UseFormbuilderProps;
}) => {
  interface DefaultValues {
    [key: string]: any;
  }

  const defaultValues: DefaultValues = initialFormElements.reduce(
    (acc: DefaultValues, element: FormElement) => {
      if (element.static) return acc;
      acc[element.name] = element.defaultValue || '';
      return acc;
    },
    {},
  );

  const form = useForm({
    defaultValues,
    // resolver: zodResolver(),
  });

  const { reset } = useForm();
  const [formElements, setFormElements] = React.useState(initialFormElements);

  const appendElement = (elementVariant: string) => {
    const length = formElements.length;
    const generatedName = `${elementVariant}-${length + 1}`;
    setFormElements((prev) => [
      ...prev,
      {
        ...initialAttibutes[elementVariant as FormElement['fieldType']],
        fieldType: elementVariant as FormElement['fieldType'],
        name: generatedName,
      } as FormFieldElement,
    ]);
  };
  const dropElement = (elementId: string) => {
    setFormElements((prev) =>
      prev.filter((element) => element.name !== elementId),
    );
  };
  const editElement = (i: number, newProps: Partial<FormElement>) => {
    setFormElements((prev) => {
      const newFormElements = [...prev];
      newFormElements[i] = {
        ...newFormElements[i],
        ...newProps,
      } as FormFieldElement;
      return newFormElements;
    });
  };
  const reorder = (newOrder: FormElement[]) => {
    setFormElements(newOrder);
  };
  const resetForm = () => {
    setFormElements([]);
    reset();
    // unregister();
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return {
    onSubmit,
    form,
    formElements,
    appendElement,
    dropElement,
    editElement,
    reorder,
    resetForm,
  };
};
