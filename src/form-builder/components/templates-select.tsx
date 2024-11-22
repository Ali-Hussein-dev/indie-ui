import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import { useCommand } from '@/form-builder/hooks/use-command-ctx';
import { templates } from '@/form-builder/constant/templates';

const formTemplates = Object.entries(templates).map((template) => ({
  label: template[1].name,
  value: template[0],
}));
//======================================
export function TemplatesSelect() {
  const { setTemplate } = useCommand();
  return (
    <div className="pb-2">
      <Select
        onValueChange={(value) => {
          setTemplate(value);
        }}
      >
        <SelectTrigger>Templates</SelectTrigger>
        <SelectContent>
          {formTemplates.map(({ label, value }) => (
            <SelectItem
              // onSelect={() => {
              //   setTemplate(value);
              // }}
              key={label}
              value={value}
            >
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
