import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import { templates } from '@/form-builder/constant/templates';
import useFormBuilderStore from '@/form-builder/hooks/use-form-builder-store';

const formTemplates = Object.entries(templates).map((template) => ({
  label: template[1].name,
  value: template[0],
}));
//======================================
export function TemplatesSelect() {
  const setTemplate = useFormBuilderStore((s) => s.setTemplate);
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
            <SelectItem key={label} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
