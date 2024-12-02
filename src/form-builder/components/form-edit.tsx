import { FormElement, FormElementOrList } from '@/form-builder/form-types';
import * as React from 'react';
import { AnimatePresence, Reorder } from 'framer-motion';
import { MdDelete } from 'react-icons/md';
import { IoIosSwap } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { LuGripVertical } from 'react-icons/lu';
import { FieldCustomizationView } from '@/form-builder/components/field-customization-view';
import { FormElementsDropdown } from '@/form-builder/components/form-elements-dropdown';
import { useFormBuilder } from '@/form-builder/hooks/use-form-builder';
import useFormBuilderStore from '@/form-builder/hooks/use-form-builder-store';

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
};

const EditFormItem = (props: EditFormItemProps) => {
  const { element, fieldIndex } = props;
  const { dropElement } = useFormBuilderStore();
  const isNested = typeof props?.j === 'number';
  return (
    <div className="w-full bg-background group">
      <div className="flex-row-between px-2">
        <div className="flex-row-start gap-2 size-full">
          {isNested ? (
            <span className="w-1"></span>
          ) : (
            <LuGripVertical className="dark:text-muted-foreground text-muted-foreground" />
          )}
          {element.name}
        </div>
        <div className="flex-row-end opacity-0 group-hover:opacity-100 duration-100">
          {element.fieldType !== 'Separator' && (
            <FieldCustomizationView
              formElement={element as FormElement}
              index={fieldIndex}
              j={props?.j}
            />
          )}
          <Button
            size="icon"
            variant="ghost"
            onClick={() => {
              dropElement({ fieldIndex, j: props?.j });
            }}
            className="rounded-xl h-9"
          >
            <MdDelete />
          </Button>
          {!isNested && <FormElementsDropdown fieldIndex={fieldIndex} />}
        </div>
      </div>
    </div>
  );
};

//======================================
export function FormEdit() {
  const { formElements, reorder } = useFormBuilder();
  const animateVariants = {
    initial: { opacity: 0, y: -15 },
    animate: { opacity: 1, y: 0 },
    exist: { opacity: 0, y: -15 },
    transition: { duration: 0.2, type: 'spring' },
  };
  return (
    <Reorder.Group
      axis="y"
      onReorder={(newOrder) => {
        reorder({ newOrder, fieldIndex: null });
      }}
      values={formElements}
      className="flex flex-col gap-3"
      tabIndex={-1}
    >
      <AnimatePresence mode="popLayout">
        {formElements.map((element: FormElementOrList, i) => {
          if (Array.isArray(element)) {
            return (
              <Reorder.Item
                value={element}
                key={element.map((f) => f.name).join('-')}
                variants={animateVariants}
                initial="initial"
                animate="animate"
                exit="exist"
              >
                <div className="flex items-center justify-start gap-2 ">
                  <Button
                    onClick={() => {
                      reorder({ newOrder: element.reverse(), fieldIndex: i });
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
                        className="w-full rounded-xl border border-dashed py-1.5"
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
              className="rounded-xl border border-dashed py-1.5 w-full"
              variants={animateVariants}
              initial="initial"
              animate="animate"
              exit="exist"
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
