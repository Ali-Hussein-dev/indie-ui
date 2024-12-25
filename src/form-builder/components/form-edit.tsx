import type {
  FormElement,
  FormElementOrList,
  FormStep,
} from '@/form-builder/form-types';
import * as React from 'react';
import { AnimatePresence, Reorder } from 'framer-motion';
import { MdDelete } from 'react-icons/md';
import { IoIosSwap } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { LuGripVertical } from 'react-icons/lu';
import { FieldCustomizationView } from '@/form-builder/components/field-customization-view';
import { FormElementsDropdown } from '@/form-builder/components/form-elements-dropdown';
import useFormBuilderStore from '@/form-builder/hooks/use-form-builder-store';
import { StepContainer } from '@/form-builder/components/step-container';

type EditFormItemProps = {
  element: FormElement;
  /**
   * Index of the main array
   */
  fieldIndex: number;
  /**
   * Index of the nested array element
   */
  j?: number;
  stepIndex?: number;
};

const EditFormItem = (props: EditFormItemProps) => {
  const { element, fieldIndex } = props;
  const dropElement = useFormBuilderStore((s) => s.dropElement);
  const isNested = typeof props?.j === 'number';
  let DisplayName =
    'label' in element
      ? element?.label
      : 'content' in element
        ? element.content
        : element.name;
  const slicedDisplayName = DisplayName?.split(' ').slice(0, 5) ?? [];

  DisplayName =
    slicedDisplayName.length > 4
      ? `${slicedDisplayName.join(' ')} ...`
      : slicedDisplayName.join(' ');

  return (
    <div className="w-full group">
      <div className="flex-row-between px-2">
        <div className="flex-row-start gap-2 size-full">
          {isNested ? (
            <span className="w-1" />
          ) : (
            <LuGripVertical className="dark:text-muted-foreground text-muted-foreground" />
          )}
          {DisplayName}
        </div>
        <div className="flex-row-end opacity-0 group-hover:opacity-100 duration-100">
          {element.fieldType !== 'Separator' && (
            <FieldCustomizationView
              formElement={element as FormElement}
              fieldIndex={fieldIndex}
              j={props?.j}
              stepIndex={props?.stepIndex}
            />
          )}
          <Button
            size="icon"
            variant="ghost"
            onClick={() => {
              dropElement({
                fieldIndex,
                j: props?.j,
                stepIndex: props?.stepIndex,
              });
            }}
            className="rounded-xl h-9"
          >
            <MdDelete />
          </Button>
          {!isNested && (
            <FormElementsDropdown
              fieldIndex={fieldIndex}
              stepIndex={props?.stepIndex}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const NoStepsPlaceholder = () => {
  const { addFormStep } = useFormBuilderStore();
  return (
    <div className="flex-col-center gap-4 text-muted-foreground">
      <Button size="sm" onClick={() => addFormStep(0)}>
        Add first Step
      </Button>
    </div>
  );
};
//======================================
export function FormEdit() {
  const isMS = useFormBuilderStore((s) => s.isMS);
  const formElements = useFormBuilderStore((s) => s.formElements);
  const reorder = useFormBuilderStore((s) => s.reorder);

  const animateVariants = {
    initial: { opacity: 0, y: -15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
    transition: { duration: 0.2, type: 'spring' },
  };
  switch (isMS) {
    case true:
      if (formElements.length === 0) {
        return <NoStepsPlaceholder />;
      }
      return (
        <div className="flex flex-col gap-4 ">
          {(formElements as FormStep[]).map((step, stepIndex) => {
            return (
              <div key={step.id}>
                <StepContainer key={stepIndex} stepIndex={stepIndex}>
                  <Reorder.Group
                    axis="y"
                    onReorder={(newOrder) => {
                      reorder({ newOrder, stepIndex });
                    }}
                    values={step.stepFields}
                    className="flex flex-col gap-3"
                    tabIndex={-1}
                  >
                    <AnimatePresence mode="popLayout">
                      {step.stepFields.map((element, fieldIndex) => {
                        if (Array.isArray(element)) {
                          return (
                            <Reorder.Item
                              value={element}
                              key={element.map((f) => f.name).join('-')}
                              className="flex items-center justify-start gap-2 "
                              variants={animateVariants}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                            >
                              <Button
                                onClick={() => {
                                  reorder({
                                    newOrder: element.reverse(),
                                    fieldIndex,
                                    stepIndex,
                                  });
                                }}
                                variant="ghost"
                                className="center shrink h-full py-4 border border-dashed rounded-xl bg-background px-3.5"
                              >
                                <IoIosSwap className="dark:text-muted-foreground text-muted-foreground" />
                              </Button>
                              <div className="flex items-center justify-start grow flex-wrap sm:flex-nowrap w-full gap-2">
                                {element.map((el, j) => (
                                  <div
                                    key={el.name + j}
                                    className="w-full rounded-xl border border-dashed py-1.5 bg-background"
                                  >
                                    <EditFormItem
                                      fieldIndex={fieldIndex}
                                      j={j}
                                      element={el}
                                      stepIndex={stepIndex}
                                    />
                                  </div>
                                ))}
                              </div>
                            </Reorder.Item>
                          );
                        }
                        return (
                          <Reorder.Item
                            key={element.name + stepIndex + 10}
                            value={element}
                            className="w-full rounded-xl border border-dashed py-1.5 bg-background"
                            variants={animateVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                          >
                            <EditFormItem
                              fieldIndex={fieldIndex}
                              element={element}
                              stepIndex={stepIndex}
                            />
                          </Reorder.Item>
                        );
                      })}
                    </AnimatePresence>
                  </Reorder.Group>
                </StepContainer>
              </div>
            );
          })}
        </div>
      );
    default:
      return (
        <Reorder.Group
          axis="y"
          onReorder={(newOrder) => {
            reorder({ newOrder, fieldIndex: null });
          }}
          values={formElements as FormElementOrList[]}
          className="flex flex-col gap-3"
          tabIndex={-1}
        >
          <AnimatePresence mode="popLayout">
            {(formElements as FormElementOrList[]).map((element, i) => {
              if (Array.isArray(element)) {
                return (
                  <Reorder.Item
                    value={element}
                    key={element.map((f) => f.name).join('-')}
                    variants={animateVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <div className="flex items-center justify-start gap-2 ">
                      <Button
                        onClick={() => {
                          reorder({
                            newOrder: element.reverse(),
                            fieldIndex: i,
                          });
                        }}
                        variant="ghost"
                        className="center shrink h-full py-4 border border-dashed rounded-xl bg-background px-3.5"
                      >
                        <IoIosSwap className="dark:text-muted-foreground text-muted-foreground" />
                      </Button>
                      <div className="flex items-center justify-start grow flex-wrap sm:flex-nowrap w-full gap-3">
                        {element.map((el, j) => (
                          <div
                            key={el.name + j}
                            className="w-full rounded-xl border border-dashed py-1.5 bg-background"
                          >
                            <EditFormItem
                              key={el.name + j}
                              fieldIndex={i}
                              j={j}
                              element={el}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reorder.Item>
                );
              }
              return (
                <Reorder.Item
                  key={element.name}
                  value={element}
                  className="rounded-xl border border-dashed py-1.5 w-full bg-background"
                  variants={animateVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <EditFormItem
                    key={element.name + i}
                    fieldIndex={i}
                    element={element}
                  />
                </Reorder.Item>
              );
            })}
          </AnimatePresence>
        </Reorder.Group>
      );
  }
}
