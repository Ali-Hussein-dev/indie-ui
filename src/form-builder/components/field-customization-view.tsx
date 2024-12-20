import * as React from 'react';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { FaEdit } from 'react-icons/fa';
import { FormElement } from '@/form-builder/form-types';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { isStatic } from '@/form-builder/libs/utils';
import { RenderFormElement } from '@/form-builder/components/render-form-element';
import useFormBuilderStore from '@/form-builder/hooks/use-form-builder-store';

const inputTypes = [
  { value: 'text', label: 'Text' },
  { value: 'email', label: 'Email' },
  { value: 'url', label: 'URL' },
  { value: 'number', label: 'Number' },
  { value: 'password', label: 'Password' },
  { value: 'tel', label: 'Telephone' },
];
function FormElementOptions({
  fieldIndex,
  close,
  j,
  stepIndex,
  ...formElement
}: FormElement & {
  fieldIndex: number;
  stepIndex?: number;
  j?: number;
  close: () => void;
}) {
  const form = useForm<FormElement>({
    defaultValues: formElement as FormElement,
  });
  const editElement = useFormBuilderStore((s) => s.editElement);
  const { handleSubmit, getValues } = form;
  const onSubmit = () => {
    editElement({
      fieldIndex: fieldIndex,
      modifiedFormElement: getValues(),
      j,
      stepIndex,
    });
    close();
  };
  // const hasOptions = ['Select', 'MultiSelect'].includes(formElement.fieldType);
  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-3 border-t border-dashed"
      >
        {/* {JSON.stringify(watch(), null, 2)} {index} */}
        {/* {JSON.stringify(formElement, null, 2)} */}
        <div>
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
            <div className="flex-col-start w-full gap-3 mb-2">
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
                  } as FormElement,
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
                    defaultValue: formElement.type,
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
              <div className="flex-row-start gap-4 pl-1">
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
        </div>
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
}

export function FieldCustomizationView({
  fieldIndex,
  formElement,
  j,
  stepIndex,
}: {
  fieldIndex: number;
  j?: number;
  formElement: FormElement;
  stepIndex?: number;
}) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const close = () => setOpen(false);
  const title = 'Customize form field attributes';
  const SavedFormElementOptions = () => (
    <FormElementOptions
      fieldIndex={fieldIndex}
      stepIndex={stepIndex}
      j={j}
      {...formElement}
      close={close}
    />
  );
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="rounded-xl h-9"
          >
            <FaEdit />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[520px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <SavedFormElementOptions />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="rounded-xl h-9"
        >
          <FaEdit />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
        </DrawerHeader>
        <SavedFormElementOptions />
      </DrawerContent>
    </Drawer>
  );
}
