import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { formElementsList } from '@/form-builder/constant/form-elements-list';
import { FormElement } from '@/form-builder/form-types';
import { FaPlus } from 'react-icons/fa';
import useFormBuilderStore from '@/form-builder/hooks/use-form-builder-store';

/**
 * Use for adding a nested form element
 */
//======================================
export function FormElementsDropdown({
  fieldIndex,
}: {
  /**
   * Field Index where a nested element should be appended to the main array
   */
  fieldIndex: number;
}) {
  const { appendElement } = useFormBuilderStore();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-xl h-9">
          <FaPlus />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        data-align="end" // not working
        className="space-y-3 max-h-64 overflow-y-scroll"
      >
        {formElementsList.map((o) => (
          <DropdownMenuItem
            onSelect={() => {
              appendElement({
                fieldIndex: fieldIndex,
                fieldType: o.fieldType as FormElement['fieldType'],
              });
            }}
            key={o.name}
            disabled={!!o.static}
            className="px-4"
          >
            {o.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
