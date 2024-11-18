import { FormElement } from '../form-types';

export const generateImports = (formElements: FormElement[]): Set<string> => {
    const importSet = new Set([
        '"use client"',
        'import * as z from "zod"',
        'import { zodResolver } from "@hookform/resolvers/zod"',
        'import { Button } from "@/components/ui/button"',
        'import { useForm } from "react-hook-form"',
        'import { \n Form,\n FormControl,\n FormDescription,\n FormField,\n FormItem,\n FormLabel,\n FormMessage\n } from "@/components/ui/form"',
        'import { cn } from "@/lib/utils"',
    ]);

    const processField = (field: FormElement) => {
        switch (field.variant) {
            case 'DatePicker':
                importSet.add('import { format } from "date-fns"');
                importSet.add(
                    'import { \n Popover,\n PopoverContent,\n PopoverTrigger\n} from "@/components/ui/popover"',
                );
                importSet.add('import { Calendar } from "@/components/ui/calendar"');
                importSet.add(
                    'import { Calendar as CalendarIcon } from "lucide-react"',
                );
                break;
            case 'OTP':
                importSet.add(
                    'import { InputOTP,\n InputOTPGroup,\n InputOTPSeparator,\n InputOTPSlot\n} from "@/components/ui/input-otp"',
                );
                break;
            case 'Select':
                importSet.add(
                    'import { Select,\n SelectContent,\n SelectItem,\n SelectTrigger,\n SelectValue} from "@/components/ui/select"',
                );
                break;
            case 'MultiSelect':
                importSet.add(
                    'import { \n MultiSelector,\n MultiSelectorContent,\n MultiSelectorInput,\n MultiSelectorItem,\n MultiSelectorList,\n MultiSelectorTrigger\n} from "@/components/ui/multi-select"',
                );
                break;
            case 'Password':
                importSet.add(
                    'import { PasswordInput } from "@/components/ui/password-input"',
                );
                break;
            case 'H1':
            case 'H2':
            case 'H3':
                break;
            default:
                importSet.add(
                    `import { ${field.variant} } from "@/components/ui/${field.variant.toLowerCase()}"`,
                );
                break;
        }
    };

    formElements.flat().forEach(processField);

    return importSet;
};
