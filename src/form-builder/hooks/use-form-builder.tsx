'use client';
import * as React from 'react';
import type { FormElement, FormStep } from '@/form-builder/form-types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { generateZodSchema } from '@/form-builder/libs/generate-zod-schema';
import useFormBuilderStore from '@/form-builder/hooks/use-form-builder-store';
import { flattenFormSteps } from '@/form-builder/libs/form-elements-helpers';

//-------------------------------------------
export const useFormBuilder = () => {
  interface DefaultValues {
    [key: string]: any;
  }
  const isMS = useFormBuilderStore((s) => s.isMS);
  const formElements = useFormBuilderStore((s) => s.formElements);
  const resestFormElements = useFormBuilderStore((s) => s.resestFormElements);

  const flattenFormElements = isMS
    ? flattenFormSteps(formElements as FormStep[]).flat()
    : (formElements.flat() as FormElement[]);

  const filteredFormFields = flattenFormElements.filter((o) => !o.static);

  const defaultValues: DefaultValues = filteredFormFields.reduce(
    (acc: DefaultValues, element) => {
      acc[element.name] = element?.defaultValue ?? '';
      return acc;
    },
    {},
  );

  const zodSchema = generateZodSchema(filteredFormFields);

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
  }, [watch]);

  const resetForm = () => {
    // Remove all fields from the form
    resestFormElements();
    // reset to all default values
    reset();
    // reset submitted data
    setSubmittedData({});
  };
  const onSubmit = async (data: any) => {
    setSubmittedData(data);
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return {
    form,
    submittedData,

    onSubmit,
    resetForm,
  };
};
