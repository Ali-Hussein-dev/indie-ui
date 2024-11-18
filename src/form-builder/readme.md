# Form Builder

Build your form with the Reactjs, Tailwindcss, Shadcn, Zod, and React
Hook Form

## Contributing guide

## Adding new form elements guide

- add form element type to `/form-builder/form-types.ts`
- add form element component to `/ui/components/[new-form-element].tsx`
- add component to `/form-builder/components/render-form-element.tsx`
- add form element name to `formElementsList` in `/form-builder/components/form-element-selector.tsx`
- generate code
      - add import to `/form-builder/libs/generate-imports.ts`
      - add zod schema `/form-builder/libs/generate-zod-schema.ts`
      - add component string to `/form-builder/libs/generate-form-component.ts`
