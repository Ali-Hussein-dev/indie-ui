import {
  FormElement,
  DropElement,
  EditElement,
  FormElementOrList,
  AppendElement,
} from '@/form-builder/form-types';
import * as React from 'react';
import { Reorder } from 'framer-motion';
import { MdDelete } from 'react-icons/md';
import { IoIosSwap } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { LuGripVertical } from 'react-icons/lu';
import { FieldCustomizationView } from './field-customization-view';
import { HorizontalFormElements } from './horizontal-form-elements';
import { useFormBuilder } from '../hooks/use-form-builder';

type EditFormItemProps = {
  element: FormElement;
  /**
   * Index of the main array
   */
  index: number;
  dropElement: DropElement;
  editElement: EditElement;
} & (
  | {
      appendElement: AppendElement;
    }
  | {
      /**
       * Index of the nested array element
       */
      j: number;
    }
);

const EditFormItem = (props: EditFormItemProps) => {
  const { element, index, dropElement, editElement } = props;
  const isNested = 'j' in props;
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
              editElement={editElement}
              index={index}
              j={isNested ? props.j : undefined}
            />
          )}
          <Button
            size="icon"
            variant="ghost"
            onClick={() => {
              if (isNested) {
                dropElement(index, { j: props.j });
              } else {
                dropElement(index);
              }
            }}
            className="rounded-xl h-9"
          >
            <MdDelete />
          </Button>
          {'appendElement' in props && (
            <HorizontalFormElements
              appendElement={props.appendElement}
              index={index}
            />
          )}
        </div>
      </div>
    </div>
  );
};

//======================================
export function FormEdit() {
  const { formElements, reorder, dropElement, editElement, appendElement } =
    useFormBuilder();
  return (
    <Reorder.Group
      axis="y"
      onReorder={(newOrder) => {
        reorder({ newOrder, i: null });
      }}
      values={formElements}
      className="flex flex-col gap-3"
      tabIndex={-1}
    >
      {formElements.map((element: FormElementOrList, i) => {
        if (Array.isArray(element)) {
          return (
            <Reorder.Item
              value={element}
              key={element.map((f) => f.name).join('-')}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center justify-start gap-2 ">
                <Button
                  onClick={() => {
                    reorder({ newOrder: element.reverse(), i });
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
                      className="w-full rounded-xl border border-dashed py-1.5"
                    >
                      <EditFormItem
                        key={el.name + j}
                        index={i}
                        j={j}
                        element={el}
                        dropElement={dropElement}
                        editElement={editElement}
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
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
          >
            <EditFormItem
              key={element.name + i}
              index={i}
              element={element}
              editElement={editElement}
              dropElement={dropElement}
              appendElement={appendElement}
            />
          </Reorder.Item>
        );
      })}
    </Reorder.Group>
  );
}
