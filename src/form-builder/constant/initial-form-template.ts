import { FormElement } from '@/form-builder/form-types';

export const initialFormTemplate: FormElement[] = [
    {
        name: 'heading',
        fieldType: 'H2',
        static: true,
        content: 'Form Title',
    },
    {
        name: 'name',
        fieldType: 'Input',
        type: 'text',
        label: 'Name',
        required: true,
        placeholder: 'Enter your name',
    },
    {
        name: 'email',
        fieldType: 'Input',
        type: 'email',
        label: 'Email',
        required: true,
        placeholder: 'Enter your email',
    },
];