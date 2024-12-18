'use client';

import { FormStep } from '@/form-builder/form-types';
import { useState, useCallback } from 'react';

type UseFormStepsProps = {
  initialSteps: FormStep[];
  onStepValidation?: (step: FormStep) => Promise<boolean> | boolean;
};

export type UseMultiFormStepsReturn = {
  steps: FormStep[];

  currentStep: number;

  currentStepData: FormStep;

  progress: number;

  isFirstStep: boolean;

  isLastStep: boolean;

  goToNext: () => Promise<boolean>;

  goToPrevious: () => void;
};

export function useMultiStepForm({
  initialSteps,
  onStepValidation,
}: UseFormStepsProps): UseMultiFormStepsReturn {
  const steps = initialSteps;
  const [currentStep, setCurrentStep] = useState(1);
  const goToNext = useCallback(async () => {
    const currentStepData = initialSteps[currentStep - 1];

    if (onStepValidation) {
      const isValid = await onStepValidation(currentStepData);
      if (!isValid) return false;
    }

    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
      return true;
    }
    return false;
  }, [currentStep, steps, onStepValidation, initialSteps]);

  const goToPrevious = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  return {
    steps,
    currentStep,
    currentStepData: steps[currentStep - 1],
    progress: (currentStep / steps.length) * 100,
    isFirstStep: currentStep === 1,
    isLastStep: currentStep === steps.length,
    goToNext,
    goToPrevious,
  };
}
