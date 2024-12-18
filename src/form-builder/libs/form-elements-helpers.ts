import { FormElementList, FormElementOrList, FormStep } from '@/form-builder/form-types';

/**
 * Removes an element from an array at the specified index.
 *
 * @param array - The array from which to remove the element.
 * @param index - The index of the element to remove.
 * @returns A new array with the element removed.
 */
export const dropAtIndex = <T>(array: T[], index: number): T[] => {
    return array.filter((_, i) => i !== index);
};


/**
 * Inserts an element at a specified index in a list and returns a new list.
 *
 * @template T - The type of elements in the list.
 * @param {T[]} list - The original list where the element will be inserted.
 * @param {number} index - The index at which the element should be inserted.
 * @returns {(element: T) => T[]} A function that takes an element and returns a new list with the element inserted at the specified index.
 */
export const insertAtIndex = <T>(list: T[], element: T, index: number) => [
    // shallow copy from start to index (exclusive)
    ...list.slice(0, index),
    // append the new element
    element,
    // shallow copy from index to end
    ...list.slice(index),
]

// export const dropElementAtNestedIndex = (
//     array: FormStep[],
//     nestedIndex: number,
// ): FormStep[] => {
//     return array.map((nested) => ({
//         ...nested,
//         stepFields: dropAtIndex(nested.stepFields, nestedIndex),
//     }));
// };


/**
 * 
 * convert FormStep[] to FormElementOrList[]
 */
export const flattenFormSteps = (array: FormStep[]): FormElementOrList[] => array.map(step => step.stepFields).flat()


/**
 * Converts an array of FormElementList objects into an array of FormStep objects.
 *
 */
export const transformToStepFormList = (formElementList: FormElementList): FormStep[] => {
    return [{ id: "1", stepFields: formElementList }]
}