'use client';
import * as React from 'react';
import {
  FormElement,
  DropElement,
  EditElement,
  ReorderElement,
  AppendElement,
  FormElementOrList,
  DropElementHorizontal,
  ReorderHorizontal,
  AppendElementHorizontal,
  EditElementHorizontal,
} from '@/form-builder/form-types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { generateZodSchema } from '@/form-builder/libs/generate-zod-schema';
import { defaultFormElements } from '@/form-builder/constant/default-form-element';
import { templates } from '@/form-builder/constant/templates';

//-------------------------------------------
export const useFormBuilder = () => {
  interface DefaultValues {
    [key: string]: any;
  }
  const initialFormElements = templates['contactUs'].template;
  const defaultValues: DefaultValues = initialFormElements.reduce(
    (acc: DefaultValues, element: FormElementOrList) => {
      if (Array.isArray(element)) {
        element.forEach((el) => {
          if (el.static) return;
          acc[el.name] = el.defaultValue || '';
        });
        return acc;
      }
      if (element.static) return acc;
      acc[element.name] = element.defaultValue || '';
      return acc;
    },
    {},
  );

  const { reset } = useForm();
  const [formElements, setFormElements] = React.useState(initialFormElements);

  const zodSchema = generateZodSchema(formElements.flat());
  const form = useForm({
    defaultValues,
    resolver: zodResolver(zodSchema),
  });
  const appendElement: AppendElement = (fieldType) => {
    const length = formElements.length;
    const generatedName = `${fieldType}-${length + 1}`;
    setFormElements((prev) => [
      ...prev,
      {
        ...defaultFormElements[fieldType],
        fieldType: fieldType,
        name: generatedName,
      } as FormElementOrList,
    ]);
  };
  const dropElement: DropElement = (index) => {
    setFormElements((prev) => prev.filter((_, i) => i !== index));
  };
  const editElement: EditElement = (
    i: number,
    newProps: Partial<FormElement>,
  ) => {
    setFormElements((prev) => {
      const newFormElements = [...prev];
      newFormElements[i] = {
        ...newFormElements[i],
        ...newProps,
      } as FormElement;
      return newFormElements;
    });
  };
  const reorder: ReorderElement = (newOrder) => {
    setFormElements(newOrder);
  };
  //----------Handlers for horizontal/nested form elements
  const reorderHorizontal: ReorderHorizontal = (newOrder, j) => {
    setFormElements((prev) => {
      const newFormElements = [...prev];
      newFormElements[j] = newOrder;
      return newFormElements;
    });
  };
  const dropElementHorizontal: DropElementHorizontal = (i, j) => {
    setFormElements((prev) => {
      const newFormElements = [...prev];
      const updatedElements = (newFormElements[i] as FormElement[]).filter(
        (_, index) => index !== j,
      );
      newFormElements[i] =
        updatedElements.length === 1 ? updatedElements[0] : updatedElements;
      return newFormElements;
    });
  };
  const appendElementHorizontal: AppendElementHorizontal = (fieldType, i) => {
    const generatedName = `${fieldType}-${i + 1}-2`;
    setFormElements((prev) => {
      const newFormElements = [...prev];
      newFormElements[i] = [
        ...(Array.isArray(newFormElements[i])
          ? newFormElements[i]
          : [newFormElements[i]]),
        {
          ...defaultFormElements[fieldType],
          fieldType,
          name: generatedName,
        } as FormElement,
      ];
      return newFormElements;
    });
  };
  const editElementHorizontal: EditElementHorizontal = (i, j, newProps) => {
    setFormElements((prev) => {
      const newFormElements = [...prev];
      const currentFormElement = newFormElements[i] as FormElement[];
      currentFormElement[j] = {
        ...currentFormElement[j],
        ...newProps,
      } as FormElement;
      newFormElements[i] = currentFormElement;
      return newFormElements;
    });
  };

  const resetForm = () => {
    setFormElements([]);
    reset();
  };
  const setTemplate = (templateName: keyof typeof templates) => {
    const template = templates[templateName].template;
    setFormElements(template);
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
    reorderHorizontal,
    dropElementHorizontal,
    appendElementHorizontal,
    editElementHorizontal,
    resetForm,
    setTemplate,
  };
};
