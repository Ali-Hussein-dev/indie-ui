import { create } from 'zustand';
import {
  FormElement,
  DropElement,
  EditElement,
  ReorderElements,
  AppendElement,
  FormElementOrList,
  SetTemplate,
} from '@/form-builder/form-types';
import { defaultFormElements } from '@/form-builder/constant/default-form-element';
import { templates } from '@/form-builder/constant/templates';

interface FormBuilderState {
  formElements: FormElementOrList[];
  appendElement: AppendElement;
  dropElement: DropElement;
  editElement: EditElement;
  reorder: ReorderElements;
  setTemplate: SetTemplate;
  resestFormElements: () => void;
}

const initialFormElements = templates['contactUs'].template;

export const useFormBuilderStore = create<FormBuilderState>((set) => ({
  formElements: initialFormElements,
  appendElement: (fieldType, options) => {
    const { index: i } = options || { index: null };
    set((state) => {
      const generatedName = `${fieldType}-${state.formElements.length + 1}`;
      const newElement = {
        ...defaultFormElements[fieldType],
        fieldType: fieldType,
        name: generatedName,
      } as FormElementOrList;

      if (typeof i == 'number' && !Array.isArray(state.formElements[i])) {
        // Append to a nested array
        const newFormElements = [...state.formElements];
        newFormElements[i] = [
          ...(Array.isArray(newFormElements[i])
            ? newFormElements[i]
            : [newFormElements[i]]),
          {
            ...defaultFormElements[fieldType],
            fieldType,
            name: generatedName,
          } as FormElement,
        ];
        return { formElements: newFormElements };
      } else {
        // Append to the main array
        return {
          formElements: [...state.formElements, newElement],
        };
      }
    });
  },
  dropElement: (i, options) => {
    const { j } = options || { j: null };
    set((state) => {
      if (typeof j === 'number' && Array.isArray(state.formElements[i])) {
        // Remove from a nested array
        const newFormElements = [...state.formElements];
        newFormElements[i] = (newFormElements[i] as FormElement[]).filter(
          (_, index) => index !== j,
        )[0];
        return { formElements: newFormElements };
      } else {
        // Remove from the main array
        return {
          formElements: state.formElements.filter((_, index) => index !== i),
        };
      }
    });
  },
  editElement: (i, newProps, options) => {
    const { j } = options || { j: null };
    set((state) => {
      if (typeof j == 'number') {
        // Edit nested elements
        const newFormElements = [...state.formElements];
        const currentFormElement = [...(newFormElements[i] as FormElement[])];
        currentFormElement[j] = {
          ...currentFormElement[j],
          ...newProps,
        } as FormElement;
        newFormElements[i] = currentFormElement;
        return { formElements: newFormElements };
      }
      const newFormElements = [...state.formElements];
      newFormElements[i] = {
        ...newFormElements[i],
        ...newProps,
      } as FormElement;
      return { formElements: newFormElements };
    });
  },
  reorder: ({ newOrder, i }): void => {
    set((state) => {
      if (typeof i === 'number') {
        // Reorder nested elements
        const newFormElements = [...state.formElements];
        newFormElements[i] = newOrder as FormElementOrList;
        return { formElements: newFormElements };
      } else {
        // Reorder main elements
        return { formElements: newOrder };
      }
    });
  },
  setTemplate: (templateName: keyof typeof templates) => {
    const template = templates[templateName].template;
    set({ formElements: template });
  },
  resestFormElements: () => {
    set({ formElements: [] });
  },
}));

export default useFormBuilderStore;
