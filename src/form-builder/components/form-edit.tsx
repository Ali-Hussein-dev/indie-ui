'use client';
import { FaEdit } from 'react-icons/fa';
import { FormElement } from '../form-types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MdDelete } from 'react-icons/md';
import { cn } from '@/lib/utils';
import { ControllerRenderProps, useForm } from 'react-hook-form';
import { LuGripVertical } from 'react-icons/lu';
import { Reorder } from 'framer-motion';
import * as React from 'react';
import { RenderFormElement } from './render-form-element';
import { Form, FormField } from '@/components/ui/form';
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
  const { handleSubmit, getValues, watch } = form;
  const onSubmit = () => {
    console.log(index, getValues());
    editFormElement(index, getValues());
    // close();
  };
  const hasOptions = ['Select', 'MultiSelect'].includes(formElement.variant);
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
        {isStatic(formElement.variant) ? (
          <div className="mb-4">
            <FormField
              // key={formElement.name}
              control={form.control}
              name={'content'}
              render={({
                field,
              }: {
                field: ControllerRenderProps<FormElement, 'content'>;
              }) =>
                RenderFormElement(
                  {
                    label: `Customize ${formElement.variant}`,
                    variant: 'Input',
                    defaultValue: formElement.content,
                    required: true,
                    ...field,
                  },
                  // as FormFieldElement & ControllerRenderProps,
                  form,
                )
              }
            />
          </div>
        ) : (
          <div className="flex-col-start w-full gap-3 mb-4">
            <div className="flex-row-between gap-2 w-full">
              <FormField
                // key={formElement.name}
                control={form.control}
                name="name"
                render={({
                  field,
                }: {
                  field: ControllerRenderProps<FormElement, 'name'>;
                }) =>
                  RenderFormElement(
                    {
                      // ...formElement,
                      label: 'Name',
                      variant: 'Input',
                      defaultValue: 'text',
                      required: true,
                      ...field,
                    },
                    // as FormFieldElement & ControllerRenderProps,
                    form,
                  )
                }
              />
              <FormField
                // key={formElement.name}
                control={form.control}
                name="placeholder"
                render={({
                  field,
                }: {
                  field: ControllerRenderProps<FormElement, 'placeholder'>;
                }) =>
                  RenderFormElement(
                    {
                      // ...formElement,
                      label: 'Placeholder',
                      variant: 'Input',
                      defaultValue: 'text',
                      required: false,
                      ...field,
                    },
                    // as FormFieldElement & ControllerRenderProps,
                    form,
                  )
                }
              />
            </div>
            <div className="flex-row-between gap-2 w-full">
              <FormField
                // key={formElement.name}
                control={form.control}
                name="label"
                render={({
                  field,
                }: {
                  field: ControllerRenderProps<FormElement, 'label'>;
                }) =>
                  RenderFormElement(
                    {
                      // ...formElement,
                      label: 'Label',
                      variant: 'Input',
                      defaultValue: 'text',
                      required: false,
                      ...field,
                    },
                    // as FormFieldElement & ControllerRenderProps,
                    form,
                  )
                }
              />
              {formElement.variant === 'Input' && (
                <FormField
                  key={formElement.name}
                  control={form.control}
                  name="type"
                  render={({
                    field,
                  }: {
                    field: ControllerRenderProps<FormElement, 'type'>;
                  }) =>
                    RenderFormElement(
                      {
                        // ...formElement,
                        label: 'Type',
                        variant: 'Select',
                        defaultValue: 'text',
                        placeholder: 'input type',
                        options: inputTypes,
                        ...field,
                      },
                      // as FormFieldElement & ControllerRenderProps,
                      form,
                    )
                  }
                />
              )}
            </div>
            <FormField
              // key={formElement.name}
              control={form.control}
              name="description"
              render={({
                field,
              }: {
                field: ControllerRenderProps<FormElement, 'description'>;
              }) =>
                RenderFormElement(
                  {
                    // ...formElement,
                    label: 'Description',
                    variant: 'Input',
                    defaultValue: 'text',
                    required: false,
                    ...field,
                  },
                  // as FormFieldElement & ControllerRenderProps,
                  form,
                )
              }
            />
            {/* {hasOptions && (
              <FormField
                key={formElement.name}
                control={form.control}
                name={'options'}
                render={({ field }: { field: ControllerRenderProps }) =>
                  RenderFormElement(
                    {
                      // ...formElement,
                      label: 'Options',
                      variant: 'Select',
                      options: formElement.options,
                      // required: false,
                      ...field,
                    } as FormFieldElement & ControllerRenderProps,
                    form,
                  )
                }
              />
            )} */}
            <div className="flex-row-start gap-4 pl-1 pt-2">
              <FormField
                key={formElement.name}
                control={form.control}
                name="required"
                render={({
                  field,
                }: {
                  field: ControllerRenderProps<FormElement, 'required'>;
                }) =>
                  RenderFormElement(
                    {
                      label: 'Required',
                      variant: 'Checkbox',
                      required: false,
                      ...field,
                    },
                    //  as FormFieldElement & ControllerRenderProps,
                    form,
                  )
                }
              />
              <FormField
                key={formElement.name}
                control={form.control}
                name="disabled"
                render={({
                  field,
                }: {
                  field: ControllerRenderProps<FormElement, 'disabled'>;
                }) =>
                  RenderFormElement(
                    {
                      label: 'Disabled',
                      variant: 'Checkbox',
                      required: false,
                      ...field,
                    },
                    //  as FormFieldElement & ControllerRenderProps,
                    form,
                  )
                }
              />
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
    setOpenItems((prev) =>
      prev.includes(value)
        ? prev.filter((id) => id !== value)
        : [...prev, value],
    );
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
              )}
            >
              <div className="flex-row-between px-3">
                <div className="flex-row-start gap-1.5 size-full">
                  <LuGripVertical className="dark:text-muted text-muted" />
                  {element.name}
                </div>
                <div className="flex-row-end gap-1">
                  {element.variant !== 'Separator' && (
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
