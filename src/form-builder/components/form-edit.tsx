'use client';
import { FaEdit } from 'react-icons/fa';
import { FormElement, FormFieldElement } from '../form-types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MdDelete } from 'react-icons/md';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { LuGripVertical } from 'react-icons/lu';
import { Reorder } from 'framer-motion';
import * as React from 'react';
import { RenderFormElement } from './render-form-element';
import { Form } from '@/components/ui/form';
import { isStatic } from '../libs/utils';

const inputTypes = [
  { value: 'text', label: 'Text' },
  { value: 'email', label: 'Email' },
  { value: 'url', label: 'URL' },
  { value: 'number', label: 'Number' },
  { value: 'password', label: 'Password' },
  { value: 'tel', label: 'Telephone' },
];
const FormElementOptions = ({
  index,
  editFormElement,
  close,
  ...formElement
}: FormElement & {
  index: number;
  editFormElement: (index: number, props: FormElement) => void;
  close: () => void;
}) => {
  const form = useForm<FormElement>({
    defaultValues: formElement as FormElement,
  });
  const { handleSubmit, getValues } = form;
  const onSubmit = () => {
    editFormElement(index, getValues());
    close();
  };
  // const hasOptions = ['Select', 'MultiSelect'].includes(formElement.fieldType);
  /**
   * TODO:
   *  1- Add options to form element
   *  3-
   */
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="pt-1 px-5">
        {/* {JSON.stringify(watch(), null, 2)} {index} */}
        {/* {JSON.stringify(formElement, null, 2)} */}
        {isStatic(formElement.fieldType) ? (
          <div className="mb-4">
            {RenderFormElement(
              {
                name: 'content',
                label: `Customize ${formElement.fieldType}`,
                fieldType: 'Input',
                defaultValue: formElement.content,
                required: true,
              },
              form,
            )}
          </div>
        ) : (
          <div className="flex-col-start w-full gap-3 mb-4">
            <div className="flex-row-between gap-2 w-full">
              {RenderFormElement(
                {
                  name: 'name',
                  label: `Customize ${formElement.name}`,
                  fieldType: 'Input',
                  defaultValue: formElement.name,
                  required: true,
                },
                form,
              )}
              {RenderFormElement(
                {
                  name: 'placeholder',
                  label: `Customize placeholder`,
                  fieldType: 'Input',
                  type: 'text',
                  required: true,
                } as FormFieldElement,
                form,
              )}
            </div>
            <div className="flex-row-between gap-2 w-full">
              {RenderFormElement(
                {
                  name: 'label',
                  label: 'Customize label',
                  fieldType: 'Input',
                  type: 'text',
                  required: true,
                },
                form,
              )}
              {formElement.fieldType === 'Input' &&
                RenderFormElement(
                  {
                    name: 'type',
                    label: 'Select input type',
                    fieldType: 'Select',
                    options: inputTypes,
                    required: true,
                    placeholder: 'Select input type',
                  },
                  form,
                )}
            </div>
            {formElement.fieldType === 'Slider' && (
              <div className="flex-row-between gap-3">
                {RenderFormElement(
                  {
                    name: 'min',
                    label: 'Customize min value',
                    fieldType: 'Input',
                    type: 'number',
                    defaultValue: formElement.min,
                    required: true,
                  },
                  form,
                )}
                {RenderFormElement(
                  {
                    name: 'max',
                    label: 'Customize max value',
                    fieldType: 'Input',
                    type: 'number',
                    defaultValue: formElement.max,
                    required: true,
                  },
                  form,
                )}
                {RenderFormElement(
                  {
                    name: 'step',
                    label: 'Customize step value',
                    fieldType: 'Input',
                    type: 'number',
                    defaultValue: formElement.step,
                    required: true,
                  },
                  form,
                )}
              </div>
            )}
            {formElement.fieldType === 'ToggleGroup' &&
              RenderFormElement(
                {
                  name: formElement.name,
                  label: 'Select type for ToggleGroup',
                  fieldType: 'ToggleGroup',
                  type: 'single',
                  options: [
                    { value: 'single', label: 'Single' },
                    { value: 'multiple', label: 'Multiple' },
                  ],
                  required: true,
                },
                form,
              )}
            {RenderFormElement(
              {
                name: 'description',
                label: 'Select type for ToggleGroup',
                fieldType: 'Input',
                placeholder: 'Describe the field',
              },
              form,
            )}
            <div className="flex-row-start gap-4 pl-1 pt-2">
              {RenderFormElement(
                {
                  name: 'required',
                  label: 'Required',
                  fieldType: 'Checkbox',
                },
                form,
              )}
              {RenderFormElement(
                {
                  name: 'disabled',
                  label: 'Disabled',
                  fieldType: 'Checkbox',
                },
                form,
              )}
            </div>
          </div>
        )}
        <div className="flex-row-end gap-3 w-full">
          <Button size="sm" variant="ghost" onClick={close} type="button">
            Cancel
          </Button>
          <Button size="sm" type="submit" variant="secondary">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};

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
  const [openItems, setOpenItems] = React.useState<string[]>([]);
  const onValueChange = (value: string) => {
    setOpenItems((prev) => (prev.includes(value) ? [] : [value]));
  };
  const closeAccordionItem = () => {
    setOpenItems([]);
  };
  return (
    <Accordion
      type="single"
      collapsible
      value={openItems.length > 0 ? openItems[0] : undefined}
    >
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
            <AccordionItem
              key={element.name}
              value={element.name}
              className={cn(
                'rounded-xl border border-dashed py-1 bg-background',
                // when open item style differently
                openItems.includes(element.name) &&
                  'dark:bg-secondary/40 bg-secondary/50 transition-colors duration-100',
              )}
            >
              <div className="flex-row-between px-3">
                <div className="flex-row-start gap-1.5 size-full">
                  <LuGripVertical className="dark:text-muted text-muted" />
                  {element.name}
                </div>
                <div className="flex-row-end gap-1">
                  {element.fieldType !== 'Separator' && (
                    <Button
                      size="icon"
                      className="rounded-full center"
                      variant="ghost"
                      onClick={() => onValueChange(element.name)}
                    >
                      <FaEdit />
                    </Button>
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
              <AccordionContent>
                <FormElementOptions
                  editFormElement={editFormElement}
                  {...element}
                  index={i}
                  close={closeAccordionItem}
                />
              </AccordionContent>
            </AccordionItem>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </Accordion>
  );
}
