import type { FormElementOrList, FormStep } from '@/form-builder/form-types';

type TemplateList = Record<
  string,
  { template: FormElementOrList[] | FormStep[]; name: string }
>;

export const templates: TemplateList = {
  signUp: {
    name: 'Sign up',
    template: [
      {
        name: 'Sign up',
        fieldType: 'H1',
        static: true,
        content: 'Sign up',
      },
      {
        name: 'Paragraph',
        fieldType: 'P',
        static: true,
        content: 'Sign up to create an account',
      },
      {
        name: 'Email',
        fieldType: 'Input',
        type: 'email',
        placeholder: 'Enter your Email',
      },
      {
        name: 'Password',
        fieldType: 'Password',
        placeholder: 'Password',
        label: 'Password',
        type: 'password',
        required: true,
      },
      {
        name: 'agree',
        fieldType: 'Checkbox',
        label: 'I agree to the terms and conditions',
        required: true,
      },
    ],
  },
  feedbackForm: {
    name: 'Feedback Form',
    template: [
      {
        name: 'Feedback Form',
        fieldType: 'H1',
        static: true,
        content: 'Feedback Form',
      },
      {
        name: 'Paragraph',
        fieldType: 'P',
        static: true,
        content: 'Please provide your feedback',
      },
      {
        name: 'Comment',
        fieldType: 'Textarea',
        placeholder: 'Share your feedback',
        label: 'Feedback Comment',
      },
    ],
  },
  waitlist: {
    name: 'Waitlist',
    template: [
      {
        name: 'Waitlist',
        fieldType: 'H1',
        static: true,
        content: 'Waitlist',
      },
      {
        name: 'Paragraph',
        fieldType: 'P',
        static: true,
        content: 'Join our waitlist to get early access',
      },
      {
        name: 'Email',
        fieldType: 'Input',
        type: 'email',
        placeholder: 'Enter your Email',
      },
    ],
  },
  contactUs: {
    name: 'Contact Us',
    template: [
      {
        name: 'heading',
        fieldType: 'H2',
        static: true,
        content: 'Contact us',
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
        label: 'Message',
        placeholder: 'Enter your message',
        required: true,
      },
      {
        name: 'agree',
        fieldType: 'Checkbox',
        label: 'I agree to the terms and conditions',
        required: true,
      },
    ],
  },
  multiStepForm: {
    name: 'Multistep Form',
    template: [
      {
        id: '1',
        stepFields: [
          {
            name: 'heading-2',
            fieldType: 'H2',
            static: true,
            content: 'Personal Details',
          },
          {
            name: 'paragraph',
            fieldType: 'P',
            static: true,
            content: 'Please provide your personal details',
          },
          {
            name: 'Name',
            fieldType: 'Input',
            placeholder: 'First name',
            label: 'First name',
            required: true,
          },
          {
            name: 'last-name',
            fieldType: 'Input',
            placeholder: 'Last name',
            label: 'Last name',
          },
        ],
      },
      {
        id: '2',
        stepFields: [
          {
            name: 'heading-2',
            fieldType: 'H2',
            static: true,
            content: 'Contact Information',
          },
          {
            name: 'paragraph',
            fieldType: 'P',
            static: true,
            content: 'Please provide your contact information',
          },
          {
            name: 'your-email',
            fieldType: 'Input',
            label: 'Your Email',
            type: 'email',
            required: true,
            placeholder: 'Enter your email',
          },
          {
            name: 'phone-number',
            fieldType: 'Input',
            label: 'Phone Number',
            type: 'number',
            placeholder: 'Enter your phone number',
          },
        ],
      },
      {
        id: '3',
        stepFields: [
          {
            name: 'step-2',
            fieldType: 'H2',
            static: true,
            content: 'Your Preferences',
          },
          {
            name: 'preferences',
            fieldType: 'ToggleGroup',
            type: 'multiple',
            label: 'Tell us about your interests and preferences.',
            options: [
              { label: 'Technology', value: 'technology' },
              { label: 'Business', value: 'Business' },
              { label: 'Health', value: 'Health' },
              { label: 'Science', value: 'Science' },
            ],
          },
          {
            name: 'Comment',
            fieldType: 'Textarea',
            placeholder: 'Share your feedback',
            label: 'Feedback Comment',
          },
        ],
      },
    ],
  },
};
