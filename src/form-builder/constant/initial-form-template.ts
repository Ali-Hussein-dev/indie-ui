import { FormElementOrList } from '@/form-builder/form-types';

export const initialFormTemplate: FormElementOrList[] = [
    {
        name: 'heading',
        fieldType: 'H2',
        static: true,
        content: 'Contact us Form',
    },
    {
        name: 'paragraph',
        fieldType: 'P',
        static: true,
        content: 'Please fill the form below to contact us',
    },
    [
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
    ],
    {
        name: 'Message',
        fieldType: 'Textarea',
        label: 'Textarea',
        placeholder: 'Enter your message',
        required: true,
    },
    {
        name: 'agree',
        fieldType: 'Checkbox',
        label: 'I agree to the terms and conditions',
        required: true,
    },
];