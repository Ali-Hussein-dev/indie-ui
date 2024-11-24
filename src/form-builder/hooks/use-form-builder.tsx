'use client';
import * as React from 'react';
import { FormElementOrList } from '@/form-builder/form-types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { generateZodSchema } from '@/form-builder/libs/generate-zod-schema';
import { templates } from '@/form-builder/constant/templates';
import useFormBuilderStore from './use-form-builder-store';

//-------------------------------------------
export const useFormBuilder = () => {
  interface DefaultValues {
    [key: string]: any;
  }
  const {
    formElements,
    appendElement,
    dropElement,
    editElement,
    reorder,
    reorderHorizontal,
    appendElementHorizontal,
    dropElementHorizontal,
    editElementHorizontal,
    setTemplate,
    resestFormElements,
  } = useFormBuilderStore();
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

  const zodSchema = generateZodSchema(formElements.flat());
  const form = useForm({
    defaultValues,
    resolver: zodResolver(zodSchema),
  });

  const resetForm = () => {
    resestFormElements();
    reset();
  };
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const { watch } = form;
  const [submittedData, setSubmittedData] = React.useState(watch());

  React.useEffect(() => {
    const { unsubscribe } = watch((data) => {
      setSubmittedData(data);
    });

    return unsubscribe;
  }, [watch]);
  return {
    form,
    formElements,
    submittedData,

    appendElement,
    dropElement,
    editElement,
    reorder,

    reorderHorizontal,
    dropElementHorizontal,
    appendElementHorizontal,
    editElementHorizontal,

    onSubmit,
    resetForm,
    setTemplate,
  };
};
