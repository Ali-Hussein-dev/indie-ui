'use client';
import * as React from 'react';
import { FormElement } from '@/form-builder/form-types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { generateZodSchema } from '@/form-builder/libs/generate-zod-schema';
import { templates } from '@/form-builder/constant/templates';
import useFormBuilderStore from '@/form-builder/hooks/use-form-builder-store';

//-------------------------------------------
export const useFormBuilder = () => {
  interface DefaultValues {
    [key: string]: any;
  }
  const formElements = useFormBuilderStore((s) => s.formElements);
  const resestFormElements = useFormBuilderStore((s) => s.resestFormElements);

  let initialFormElements =
    formElements.length > 0 ? formElements : templates['contactUs'].template;

  const flattenFormElements = initialFormElements.flat();

  const defaultValues: DefaultValues = flattenFormElements.reduce(
    (acc: DefaultValues, element: FormElement) => {
      if (element.static) return acc;
      acc[element.name] = element.defaultValue || '';
      return acc;
    },
    {},
  );

  const zodSchema = generateZodSchema(flattenFormElements);
  const form = useForm({
    defaultValues,
    resolver: zodResolver(zodSchema),
  });

  const { watch, reset } = form;
  const [submittedData, setSubmittedData] = React.useState({});

  React.useEffect(() => {
    const { unsubscribe } = watch((data) => {
      setSubmittedData(data);
    });

    return unsubscribe;
  }, [watch, setSubmittedData]);

  const resetForm = () => {
    resestFormElements();
    reset();
    setSubmittedData({});
  };
  const onSubmit = (data: any) => {
    setSubmittedData(data);
  };

  return {
    form,
    submittedData,

    onSubmit,
    resetForm,
  };
};
