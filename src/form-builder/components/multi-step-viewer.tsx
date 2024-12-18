'use client';
import { Button } from '@/components/ui/button';
import { FormStep } from '@/form-builder/form-types';
import { useMultiStepForm } from '@/form-builder/hooks/use-multi-step-form';
import { AnimatePresence, motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { RenderFormElement } from '@/form-builder/components/render-form-element';
import React from 'react';

/**
 * Used to render a multi-step form in preview mode
 */
export function MultiStepViewer({
  form,
  formElements,
}: {
  form: any;
  formElements: FormStep[];
}) {
  const { currentStep, isLastStep, goToNext, goToPrevious } = useMultiStepForm({
    initialSteps: formElements as FormStep[],
    onStepValidation: () => true,
  });
  const steps = formElements as FormStep[];
  const current = formElements[currentStep - 1] as FormStep;
  /**
   * TODO: handle when form elements is empty
   */
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
                  {field.map((el: any, ii: number) => (
                    <div key={el.name + ii} className="w-full">
                      {RenderFormElement(el, form)}
                    </div>
                  ))}
                  )
                </div>
              );
            }
            return (
              <div key={field.name + i} className="w-full">
                {RenderFormElement(field, form)}
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
      <div className="flex-row-between gap-3 w-full pt-3">
        <Button size="sm" variant="ghost" onClick={goToPrevious} type="button">
          Previous
        </Button>
        <Button size="sm" type="submit" variant="secondary" onClick={goToNext}>
          {isLastStep ? 'Submit' : 'Next'}
        </Button>
      </div>
    </div>
  );
}
