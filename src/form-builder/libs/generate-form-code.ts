import { FormElement, FormElementOrList, FormStep } from '@/form-builder/form-types';
import { generateImports } from '@/form-builder/libs/generate-imports';
import { flattenFormSteps } from '@/form-builder/libs/form-elements-helpers';
import { getFormElementCode } from '@/form-builder/libs/generate-form-component';

const renderFields = (fields: FormElementOrList[]) => {
  return fields
    .map((FormElement) => {
      if (Array.isArray(FormElement)) {
        return `
          <div className="flex items-center justify-between flex-wrap sm:flex-nowrap w-full gap-2">
        ${FormElement.map((field) => getFormElementCode(field)).join('')}
      </div>`;
      }
      return getFormElementCode(FormElement);
    })
    .join('\n');
};

export const generateFormCode = ({
  formElements,
  isMS,
}: {
  formElements: FormElementOrList[] | FormStep[];
  isMS: boolean;
}): string => {

  const flattenedFormElements = isMS
    ? flattenFormSteps(formElements as FormStep[]).flat()
    : formElements.flat();

  const imports = Array.from(generateImports(flattenedFormElements as FormElement[])).join('\n');


  const defaultValues = '{}';

  const formCode = `
  ${imports}

  const initialState = {
    success: false,
    message: "",
  }

  export function DraftForm() {
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: ${defaultValues},
  })

  const [state, action, isPending] = React.useActionState(
    serverAction,
    initialState
  )
  return (
    <div>
      <Form {...form}>
        <form action={action} className="flex flex-col p-2 md:p-5 w-full mx-auto rounded-md max-w-3xl gap-2 border">
          ${renderFields(formElements as FormElementOrList[])}
          <div className="flex justify-end items-center w-full pt-3">
            <Button className="rounded-lg" size="sm">
              {isPending ? 'Submitting...' : 'Submit'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
`;
  if (!isMS) return formCode;

  // Handle multi-step form
  function stringifyStepComponents(steps: any[]): string {
    const componentEntries = steps.map((step, index) => {
      const stepNumber = index + 1;
      const renderedFields = renderFields(step.stepFields);
      return `  ${stepNumber}: <div>${renderedFields}</div>`;
    });

    return `{\n${componentEntries.join(',\n')}\n}`;
  }

  const stringifiedStepComponents = stringifyStepComponents(
    formElements as FormStep[],
  );

  const MSF_Code = `
  ${imports}
  import { useState, useCallback } from 'react'
  import { Progress } from '@/components/ui/progress'
  import { motion, AnimatePresence } from 'framer-motion'
  export function DraftForm() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: ${defaultValues},
    })

    const [state, action, isPending] = React.useActionState(serverAction ,initialState)

  return (
    <div>
      <Form {...form}>
        <form action={action} className="flex flex-col p-2 md:p-5 w-full mx-auto rounded-md max-w-3xl gap-2 border">
          <MultiStepViewer form={form} />
          <div className="flex justify-end items-center w-full pt-3">
            <Button className="rounded-lg" size="sm">
              {isPending ? 'Submitting...' : 'Submit'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
//------------------------------
/**
 * Used to render a multi-step form in preview mode
*/
export function MultiStepViewer({
  form,
  }: {
    form: any;
    }) {
    const stepFormElements: { [key: number]: JSX.Element } = ${stringifiedStepComponents};
    
    const steps = Object.keys(stepFormElements).map(Number);
    const { currentStep, isLastStep, goToNext, goToPrevious } = useMultiStepForm({
      initialSteps: steps,
      onStepValidation: () => {
      /**
       * TODO: handle step validation
       */
      return true;
        },
      });
  const current = stepFormElements[currentStep - 1]
  const { formState: { isSubmitting } } = form
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
          {current}
        </motion.div>
      </AnimatePresence>
      <div className="flex-row-between gap-3 w-full pt-3">
        <Button size="sm" variant="ghost" onClick={goToPrevious} type="button">
          Previous
        </Button>
        {isLastStep ? (
          <Button size="sm" type="submit">
            {isSubmitting ? 'Submitting...' : 'Submit'}
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

//------------------------------use-multi-step-form.tsx
type UseFormStepsProps = {
  initialSteps: any[];
  onStepValidation?: (step: any) => Promise<boolean> | boolean;
};

export type UseMultiFormStepsReturn = {
  steps: any[];

  currentStep: number;

  currentStepData: any;

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
`;

  return MSF_Code;
};
