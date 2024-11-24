import { create } from 'zustand';
import {
    FormElement,
    DropElement,
    EditElement,
    ReorderElement,
    AppendElement,
    FormElementOrList,
    DropElementHorizontal,
    ReorderHorizontal,
    AppendElementHorizontal,
    EditElementHorizontal,
    SetTemplate,
} from '@/form-builder/form-types';
import { defaultFormElements } from '@/form-builder/constant/default-form-element';
import { templates } from '@/form-builder/constant/templates';

interface FormBuilderState {
    formElements: FormElementOrList[];
    appendElement: AppendElement;
    dropElement: DropElement;
    editElement: EditElement;
    reorder: ReorderElement;
    reorderHorizontal: ReorderHorizontal;
    appendElementHorizontal: AppendElementHorizontal;
    dropElementHorizontal: DropElementHorizontal;
    editElementHorizontal: EditElementHorizontal;
    setTemplate: SetTemplate;
    resestFormElements: () => void;
}

const initialFormElements = templates['contactUs'].template;

export const useFormBuilderStore = create<FormBuilderState>((set) => ({
    formElements: initialFormElements,
    appendElement: (fieldType) => {
        set((state) => {
            const length = state.formElements.length;
            const generatedName = `${fieldType}-${length + 1}`;
            return {
                formElements: [
                    ...state.formElements,
                    {
                        ...defaultFormElements[fieldType],
                        fieldType: fieldType,
                        name: generatedName,
                    } as FormElementOrList,
                ],
            };
        });
    },
    dropElement: (index) => {
        set((state) => ({
            formElements: state.formElements.filter((_, i) => i !== index),
        }));
    },
    editElement: (i, newProps) => {
        set((state) => {
            const newFormElements = [...state.formElements];
            newFormElements[i] = {
                ...newFormElements[i],
                ...newProps,
            } as FormElement;
            return { formElements: newFormElements };
        });
    },
    reorder: (newOrder) => {
        set({ formElements: newOrder });
    },
    reorderHorizontal: (newOrder, j) => {
        set((state) => {
            const newFormElements = [...state.formElements];
            newFormElements[j] = newOrder;
            return { formElements: newFormElements };
        });
    },
    appendElementHorizontal: (fieldType, i) => {
        set((state) => {
            const generatedName = `${fieldType}-${i + 1}-2`;
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
        });
    },
    dropElementHorizontal: (index, j) => {
        set((state) => {
            const newFormElements = [...state.formElements];
            newFormElements[index] = (newFormElements[index] as FormElement[]).filter((_: any, i: number) => i !== j)[0];
            return { formElements: newFormElements };
        });
    },
    editElementHorizontal: (i, j, newProps) => {
        set((state) => {
            const newFormElements = [...state.formElements];
            const currentFormElement = [...(newFormElements[i] as FormElement[])];
            currentFormElement[j] = {
                ...currentFormElement[j],
                ...newProps,
            } as FormElement;
            newFormElements[i] = currentFormElement;
            return { formElements: newFormElements };
        });
    },
    setTemplate: (templateName: keyof typeof templates) => {
        const template = templates[templateName].template;
        set({ formElements: template });
    },
    resestFormElements: () => {
        set({ formElements: [] });
    }
}));

export default useFormBuilderStore;