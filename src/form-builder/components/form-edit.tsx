import { FormElement } from '../form-types';
import { Button } from '@/components/ui/button';
import { MdDelete } from 'react-icons/md';
import { LuGripVertical } from 'react-icons/lu';
import { Reorder } from 'framer-motion';
import * as React from 'react';
import { FieldCustomizationView } from './field-customization-view';

//======================================
export function FormEdit({
  formElements,
  dropElement,
  editFormElement,
  reorder,
}: {
  reorder: (newOrder: FormElement[]) => void;
  formElements: FormElement[];
  dropElement: (id: string) => void;
  editFormElement: (index: number, props: FormElement) => void;
}) {
  return (
    <div>
      <Reorder.Group
        axis="y"
        onReorder={(newOrder) => {
          reorder(newOrder);
        }}
        values={formElements}
        className="flex flex-col gap-3"
      >
        {formElements.map((element: FormElement, i) => (
          <Reorder.Item
            key={
              Array.isArray(element)
                ? element.map((f) => f.name).join('-')
                : element.name
            }
            value={element}
            className="w-full"
            // whileDrag={{ backgroundColor: '#e5e7eb', borderRadius: '12px' }}
          >
            <div
              key={element.name}
              className="rounded-xl border border-dashed py-1 bg-background"
            >
              <div className="flex-row-between px-3">
                <div className="flex-row-start gap-1.5 size-full">
                  <LuGripVertical className="dark:text-muted text-muted" />
                  {element.name}
                </div>
                <div className="flex-row-end gap-1">
                  {element.fieldType !== 'Separator' && (
                    <FieldCustomizationView
                      formElement={element as FormElement}
                      editFormElement={editFormElement}
                      index={i}
                    />
                  )}
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => dropElement(element.name)}
                    className="rounded-full center"
                  >
                    <MdDelete />
                  </Button>
                </div>
              </div>
            </div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}
