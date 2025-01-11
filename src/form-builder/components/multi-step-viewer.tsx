'use client';
import { Button } from '@/components/ui/button';
import type { FormElement, FormStep } from '@/form-builder/form-types';
import { useMultiStepForm } from '@/form-builder/hooks/use-multi-step-form';
import { AnimatePresence, motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { RenderFormElement } from '@/form-builder/components/render-form-element';
import type { UseFormReturn } from 'react-hook-form';

/**
 * Used to render a multi-step form in preview mode
 */
export function MultiStepViewer({
  form,
  formElements,
}: {
  form: UseFormReturn<any, any, undefined>;
  formElements: FormStep[];
}) {
  const { currentStep, isLastStep, goToNext, goToPrevious } = useMultiStepForm({
    initialSteps: formElements as FormStep[],
    onStepValidation: async (step) => {
      const stepFields = (step.stepFields as FormElement[])
        .flat()
        .filter((o) => !o.static)
        .map((o) => o.name);
      const isValid = await form.trigger(stepFields);
      return isValid;
    },
  });
  const steps = formElements as FormStep[];
  const current = formElements[currentStep - 1] as FormStep;
  const {
    formState: { isSubmitting, isSubmitted },
  } = form;
  return (
    <div className="flex flex-col gap-2 pt-3">
      <div className="flex-col-start gap-1">
        <span className="">
          Step {currentStep} of {steps.length}
        </span>
        <Progress value={(currentStep / steps.length) * 100} />
      </div>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -15 }}
          transition={{ duration: 0.4, type: 'spring' }}
          className="flex flex-col gap-2"
        >
          {current?.stepFields?.map((field, i) => {
            if (Array.isArray(field)) {
              return (
                <div
                  key={i}
                  className="flex items-center justify-between flex-wrap sm:flex-nowrap w-full gap-2"
                >
                  {field.map((el: FormElement, ii: number) => (
                    <div key={el.name + ii} className="w-full">
                      <RenderFormElement formElement={el} form={form} />
                    </div>
                  ))}
                </div>
              );
            }
            return (
              <div key={i} className="w-full">
                <RenderFormElement formElement={field} form={form} />
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
      <div className="flex-row-between gap-3 w-full pt-3">
        <Button size="sm" variant="ghost" onClick={goToPrevious} type="button">
          Previous
        </Button>
        {isLastStep ? (
          <Button size="sm" type="submit">
            {isSubmitting
              ? 'Submitting...'
              : isSubmitted
                ? 'Submitted ✅'
                : 'Submit'}
          </Button>
        ) : (
          <Button
            size="sm"
            type="button"
            variant={'secondary'}
            onClick={goToNext}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
}
