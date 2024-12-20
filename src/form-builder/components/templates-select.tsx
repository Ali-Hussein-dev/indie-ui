import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { templates } from '@/form-builder/constant/templates';
import useFormBuilderStore from '@/form-builder/hooks/use-form-builder-store';
import { ChevronDown } from 'lucide-react';

const formTemplates = Object.entries(templates).map((template) => ({
  label: template[1].name,
  value: template[0],
}));
//======================================
export function TemplatesSelect() {
  const setTemplate = useFormBuilderStore((s) => s.setTemplate);
  return (
    <div className="pb-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild tabIndex={-1} className="w-full">
          <Button variant={'outline'}>
            <div className="flex-row-center gap-2">
              Templates
              <ChevronDown className="size-4" />
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-full'>
          {formTemplates.map(({ label, value }) => (
            <DropdownMenuItem key={label} onSelect={() => setTemplate(value)} className='px-3.5 py-2.5'>
              {label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
