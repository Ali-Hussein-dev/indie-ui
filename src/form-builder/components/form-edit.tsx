import {
  FormElement,
  DropElement,
  EditElement,
  ReorderElement,
  ReorderHorizontal,
  FormElementOrList,
  EditElementHorizontal,
  DropElementHorizontal,
  AppendElementHorizontal,
} from '@/form-builder/form-types';
import * as React from 'react';
import { Reorder } from 'framer-motion';
import { MdDelete } from 'react-icons/md';
import { IoIosSwap } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { LuGripVertical } from 'react-icons/lu';
import { FieldCustomizationView } from './field-customization-view';
import { HorizontalFormElements } from './horizontal-form-elements';

type EditFormItemProps = {
  element: FormElement;
  /**
   * Index of the main array
   */
  index: number;
} & (
  | {
      editElement: EditElement;
      dropElement: DropElement;
      appendElementHorizontal: AppendElementHorizontal;
    }
  | {
      /**
       * Index of the nested array element
       */
      j: number;
      dropElementHorizontal: DropElementHorizontal;
      editElementHorizontal: EditElementHorizontal;
    }
);

const EditFormItem = (props: EditFormItemProps) => {
  const { element, index } = props;
  const isNested = 'j' in props;
  const canAddElementHorizontally =
    !element.static && 'appendElementHorizontal' in props;
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
              editFormElement={!isNested ? props.editElement : undefined}
              editElementHorizontal={
                isNested ? props.editElementHorizontal : undefined
              }
              index={index}
              j={isNested ? props.j : undefined}
            />
          )}
          <Button
            size="icon"
            variant="ghost"
            onClick={() => {
              if ('dropElement' in props) props.dropElement(index);
              else {
                props.dropElementHorizontal(index, props.j as number);
              }
            }}
            className="rounded-xl h-9"
          >
            <MdDelete />
          </Button>
          {canAddElementHorizontally && (
            <HorizontalFormElements
              appendElementHorizontal={props.appendElementHorizontal}
              index={index}
            />
          )}
        </div>
      </div>
    </div>
  );
};

//======================================
type FormElementProps = {
  formElements: FormElementOrList[];

  reorder: ReorderElement;
  dropElement: DropElement;
  editElement: EditElement;

  dropElementHorizontal: DropElementHorizontal;
  reorderHorizontal: ReorderHorizontal;
  appendElementHorizontal: AppendElementHorizontal;
  editElementHorizontal: EditElementHorizontal;
};

//======================================
export function FormEdit({
  formElements,
  dropElement,
  editElement,
  reorder,
  reorderHorizontal,
  editElementHorizontal,
  dropElementHorizontal,
  appendElementHorizontal,
}: FormElementProps) {
  return (
    <Reorder.Group
      axis="y"
      onReorder={(newOrder) => {
        reorder(newOrder);
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
            >
              <div className="flex items-center justify-start gap-2 ">
                <Button
                  onClick={() => {
                    reorderHorizontal(element.reverse(), i);
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
                        dropElementHorizontal={dropElementHorizontal!}
                        editElementHorizontal={editElementHorizontal}
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
              appendElementHorizontal={appendElementHorizontal}
            />
          </Reorder.Item>
        );
      })}
    </Reorder.Group>
  );
}
