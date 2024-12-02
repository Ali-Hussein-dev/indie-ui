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
import { dropAtIndex } from '@/form-builder/libs/form-elements-helpers';

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
  appendElement: (options) => {
    const { fieldIndex, fieldType } = options || { fieldIndex: null };
    set((state) => {
      const newFormElement = {
        ...defaultFormElements[fieldType],
        fieldType,
        name: `${fieldType}-${state.formElements.length + 1}`,
      } as FormElement;
      const clonedFormElements = [...state.formElements];
      if (typeof fieldIndex == 'number') {
        // update form element at fieldIndex, with a form element array
        clonedFormElements[fieldIndex] = [
          clonedFormElements[fieldIndex] as FormElement,
          newFormElement,
        ]
      } else {
        // Append to the main array
        clonedFormElements.push(newFormElement)
      }
      return {
        formElements: clonedFormElements,
      };
    });
  },
  dropElement: ({ j, fieldIndex }) => {
    set((state) => {
      const clonedFormElements = [...state.formElements];
      if (typeof j === 'number' && Array.isArray(state.formElements[fieldIndex])) {
        // Remove from a nested array
        clonedFormElements[fieldIndex] = dropAtIndex(
          clonedFormElements[fieldIndex] as FormElement[],
          j,
        )[0];
        return { formElements: clonedFormElements };
      } else {
        // Remove from the main array;
        return {
          formElements: dropAtIndex(state.formElements as FormElement[], fieldIndex),
        };
      }
    });
  },
  editElement: (options) => {
    const { j, fieldIndex, modifiedFormElement, } = options;
    set((state) => {
      const clonedFormElements = [...state.formElements];
      if (typeof j == 'number') {
        // Edit nested elements
        const currentFormElement = [...(clonedFormElements[fieldIndex] as FormElement[])];
        currentFormElement[j] = {
          ...currentFormElement[j],
          ...modifiedFormElement,
        } as FormElement;
        clonedFormElements[fieldIndex] = currentFormElement;
        return { formElements: clonedFormElements };
      }
      clonedFormElements[fieldIndex] = {
        ...clonedFormElements[fieldIndex],
        ...modifiedFormElement,
      } as FormElement;
      return { formElements: clonedFormElements };
    });
  },
  reorder: ({ newOrder, fieldIndex }): void => {
    set((state) => {
      if (typeof fieldIndex === 'number') {
        // Reorder nested elements
        const clonedFormElements = [...state.formElements];
        clonedFormElements[fieldIndex] = newOrder as FormElementOrList;
        return { formElements: clonedFormElements };
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
