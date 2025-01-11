import { FormElement } from '../form-types';

export const generateImports = (formElements: FormElement[]): Set<string> => {
  const importSet = new Set([
    '"use client"',
    'import * as z from "zod"',
    "import { formSchema } from '../form-schema'",
    "import { serverAction } from '../actions/server-action'",
    'import { zodResolver } from "@hookform/resolvers/zod"',
    'import { Button } from "@/components/ui/button"',
    'import { useForm } from "react-hook-form"',
    'import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form"',
  ]);
  const processField = (field: FormElement) => {
    switch (field.fieldType) {
      case 'DatePicker':
        importSet.add('import { format } from "date-fns"');
        importSet.add(
          'import {  Popover, PopoverContent, PopoverTrigger\n} from "@/components/ui/popover"',
        );
        importSet.add('import { cn } from "@/lib/utils"');
        importSet.add('import { Calendar } from "@/components/ui/calendar"');
        importSet.add(
          'import { Calendar as CalendarIcon } from "lucide-react"',
        );
        break;
      case 'OTP':
        importSet.add(
          'import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot\n} from "@/components/ui/input-otp"',
        );
        break;
      case 'Select':
        importSet.add(
          'import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"',
        );
        break;
      case 'MultiSelect':
        importSet.add(
          `import {
              MultiSelect,
              MultiSelectContent,
              MultiSelectItem,
              MultiSelectList,
              MultiSelectTrigger,
              MultiSelectValue,} from '@/components/ui/multi-select'`,
        );
        importSet.add(
          "\n // IMPORTANT: multi-select is not a shadcn component, so you need to copy it from the souce code and install dependencies. GitHub: https://github.com/Ali-Hussein-dev/indie-ui/blob/main/src/components/ui/multi-select.tsx",
        );
        break;
      case 'Password':
        importSet.add("import { Input } from '@/components/ui/input'");
        break;
      case 'RadioGroup':
        importSet.add(
          "import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'",
        );
        break;
      case 'ToggleGroup':
        importSet.add(
          "import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'",
        );
        break;
      case 'H1':
      case 'H2':
      case 'H3':
      case 'P':
        break;
      default:
        importSet.add(
          `import { ${field.fieldType} } from "@/components/ui/${field.fieldType.toLowerCase()}"`,
        );
        break;
    }
  };

  formElements.flat().forEach(processField);

  return importSet;
};
