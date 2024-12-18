import { create } from 'zustand';
import {
  FormElement,
  DropElement,
  EditElement,
  ReorderElements,
  AppendElement,
  FormElementOrList,
  SetTemplate,
  FormStep,
} from '@/form-builder/form-types';
import { defaultFormElements } from '@/form-builder/constant/default-form-element';
import { templates } from '@/form-builder/constant/templates';
import { dropAtIndex, insertAtIndex } from '@/form-builder/libs/form-elements-helpers';

type MSForm = {
  formElements: FormStep[];
  isMS: true;
};
type SingleForm = {
  formElements: FormElementOrList[];
  isMS: false;
};
type FormBuilderState = {
  isMS: boolean;
  appendElement: AppendElement;
  dropElement: DropElement;
  editElement: EditElement;
  reorder: ReorderElements;
  setTemplate: SetTemplate;
  resestFormElements: () => void;

  setIsMS: (isMS: boolean) => void;

  addFormStep: (position?: number) => void;
  removeFormStep: (stepIndex: number) => void;
} & (MSForm | SingleForm);

const initialFormElements = templates['contactUs']
  .template as FormElementOrList[];

export const useFormBuilderStore = create<FormBuilderState>((set) => ({
  formElements: initialFormElements,
  isMS: false,
  appendElement: (options) => {
    const { fieldIndex, fieldType } = options || { fieldIndex: null };
    set((state) => {
      const { isMS } = state
      if (isMS) {
        // TODO: Implementation required
        return state
      }
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
      const { isMS } = state
      switch (isMS) {
        case true:
          // TODO: Implementation required
          return state
        default: 
          const clonedFormElements = [...state.formElements];
          if (typeof j === 'number' && Array.isArray(state.formElements[fieldIndex])) {
            // Remove from a nested array
            clonedFormElements[fieldIndex] = dropAtIndex(
              clonedFormElements[fieldIndex] as FormElement[],
              j,
            )[0];
            return { formElements: clonedFormElements };
          } else {
            return {
              // Remove from the main array;
              formElements: dropAtIndex(state.formElements as FormElement[], fieldIndex),
            };
          }
      }
    });
  },
  editElement: (options) => {
    const { j, fieldIndex, modifiedFormElement, } = options;
    set((state) => {
      const { isMS } = state
      switch (isMS) {
        case true:
          // TODO: Implementation required
          return state
        default:
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
      }

    });
  },
  reorder: ({ newOrder, fieldIndex }): void => {
    set((state) => {
      const { isMS } = state
      switch (isMS) {
        case true:
          // TODO: Implementation required
          return state
        default:
          if (typeof fieldIndex === 'number') {
            // Reorder nested elements
            const clonedFormElements = [...state.formElements];
            clonedFormElements[fieldIndex] = newOrder as FormElementOrList;
            return { formElements: clonedFormElements };
          } else {
            // Reorder main elements
            return { formElements: newOrder };
          }

      }
    });
  },
  setTemplate: (templateName: keyof typeof templates) => {
    const template = templates[templateName].template;
    const isTemplateMSForm = template[0].hasOwnProperty('stepFields');
    set((state) => {
      return isTemplateMSForm
        ? {
          ...state,
          formElements: template as FormStep[],
          isMS: true,
        }
        : {
          ...state,
          formElements: template as FormElementOrList[],
          isMS: false,
        };
    });
  },
  resestFormElements: () => {
    set({ formElements: [] });
  },
  setIsMS: (isMS) => {
    set((state) => {
      if (isMS) {
        return {
          ...state,
          isMS,
          formElements: [],
        } as MSForm;
      } else {
        return { ...state, isMS, formElements: [] } as SingleForm;
      }
    });
  },
  addFormStep: (currentPosition) => {
    set((state) => {
      const defaultStep = {
        id: `${state.formElements.length + 1}`,
        stepFields: [],
      };
      if (typeof currentPosition === 'number') {
        const nextPosition = currentPosition + 1;
        return {
          formElements: insertAtIndex(
            state.formElements as FormStep[],
            defaultStep,
            nextPosition,
          ),
        };
      }
      return {
        formElements: [...state.formElements, defaultStep] as FormStep[],
      };
    });
  },
  removeFormStep: (stepIndex) => {
    set((state) => {
      return {
        formElements: dropAtIndex(state.formElements as FormStep[], stepIndex),
      };
    });
  },
}));

export default useFormBuilderStore;
