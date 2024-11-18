import { FormBuilderMain } from '@/form-builder/components/form-builder-main';

export default function FormBuilderPage() {
  return (
    <div className="py-10 ">
      <div className="mx-auto mb-4 md:mb-6 px-2 max-w-xl">
        <h1 className="text-2xl text-center font-bold mb-2">Form Builder</h1>
        <p className="text-foreground/70 text-center text-pretty">
          Build your form with the <span className="font-bold">React</span>,{' '}
          <span className="font-bold">Tailwindcss</span>,{' '}
          <span className="font-bold">Shadcn</span>,{' '}
          <span className="font-bold">Zod</span>, and{' '}
          <span className="font-bold">React Hook Form</span>
        </p>
      </div>
      <FormBuilderMain />
    </div>
  );
}
