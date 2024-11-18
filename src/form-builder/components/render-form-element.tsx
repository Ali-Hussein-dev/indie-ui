import { format } from 'date-fns';
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import * as React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { ControllerRenderProps } from 'react-hook-form';
import { FormFieldElement, StaticFormElement } from '../form-types';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectItem,
  MultiSelectList,
  MultiSelectTrigger,
  MultiSelectValue,
} from '@/components/ui/multi-select';
import { Slider } from '@/components/ui/slider';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Separator } from '@/components/ui/separator';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';

type RenderFormElementProps =
  | (FormFieldElement & ControllerRenderProps)
  | StaticFormElement;

export const RenderFormElement = (
  field: RenderFormElementProps,
  form: any,
): React.ReactElement => {
  switch (field.variant) {
    case 'Input':
      return (
        <FormItem className="w-full">
          <FormLabel>{field.label}</FormLabel> {field.required && '*'}
          <FormControl>
            <Input
              {...field}
              onChange={(e) => {
                const val = e.target.value;
                field.onChange(field.type == 'number' ? +val : val);
              }}
            />
          </FormControl>
          <FormDescription>{field.description}</FormDescription>
          <FormMessage />
        </FormItem>
      );
    case 'Password':
      return (
        <FormItem className="w-full">
          <FormLabel>{field.label}</FormLabel> {field.required && '*'}
          <FormControl>
            <Input {...field} type="password" />
          </FormControl>
          <FormDescription>{field.description}</FormDescription>
          <FormMessage />
        </FormItem>
      );
    case 'OTP':
      return (
        <FormItem className="w-full">
          <FormLabel>{field.label}</FormLabel> {field.required && '*'}
          <FormControl>
            <InputOTP
              // {...field}
              maxLength={field.maxLength ?? 6}
              name={field.name}
              value={field.value}
              onChange={field.onChange}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </FormControl>
          <FormDescription>{field.description}</FormDescription>
          <FormMessage />
        </FormItem>
      );
    case 'Textarea':
      return (
        <FormItem className="w-full">
          <FormLabel>
            {field.label} {field.required && '*'}
          </FormLabel>
          <FormControl>
            <Textarea {...field} className="resize-none" />
          </FormControl>
          <FormDescription>{field.description}</FormDescription>
          <FormMessage />
        </FormItem>
      );
    case 'Checkbox':
      return (
        <FormItem className="flex items-center gap-2 w-full py-1">
          <FormControl>
            <Checkbox
              {...field}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <FormLabel className="leading-none mt-0">{field.label}</FormLabel>
          {field.required && '*'}
          {field.description && (
            <FormDescription>{field.description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      );
    case 'Switch':
      return (
        <FormItem className="flex flex-col p-3 justify-center w-full border rounded">
          <div className="flex items-center justify-between h-full">
            <FormLabel className="w-full grow">{field.label}</FormLabel>
            <FormControl>
              <Switch
                {...field}
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
          </div>
          {field.description && (
            <FormDescription>{field.description}</FormDescription>
          )}
        </FormItem>
      );
    case 'Slider':
      const min = field.min || 0;
      const max = field.max || 100;
      const step = field.step || 5;
      const defaultValue = 25;
      const value = Array.isArray(field.value)
        ? field.value
        : [field.value || defaultValue];
      return (
        <FormItem className="w-full">
          <FormLabel className="flex justify-between items-center">
            {field.label}
            <span>
              {value}/{max}
            </span>
          </FormLabel>
          <FormControl>
            <Slider
              // {...field}
              min={min}
              max={max}
              step={step}
              defaultValue={[defaultValue]}
              value={value}
              onValueChange={(newValue) => field.onChange(newValue[0])}
              // Update to set the first value as a number
            />
          </FormControl>
          <FormDescription className="py-1">
            {field.description}
          </FormDescription>
          <FormMessage />
        </FormItem>
      );
    case 'Select':
      return (
        <FormItem className="w-full">
          <FormLabel>{field.label}</FormLabel> {field.required && '*'}
          <Select
            value={field.value}
            onValueChange={field.onChange}
            defaultValue={String(field?.defaultValue ?? '')}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={field.placeholder || 'Select item'} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {field.options.map(({ label, value }) => (
                <SelectItem key={label} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormDescription>{field.description}</FormDescription>
          <FormMessage />
        </FormItem>
      );
    case 'MultiSelect':
      return (
        <FormItem className="w-full">
          <FormLabel>{field.label}</FormLabel>
          <MultiSelect value={field.value} onValueChange={field.onChange}>
            <FormControl>
              <MultiSelectTrigger>
                <MultiSelectValue
                  placeholder={field.placeholder || 'Select item'}
                />
              </MultiSelectTrigger>
            </FormControl>
            <MultiSelectContent>
              <MultiSelectList>
                {field.options.map(({ label, value }) => (
                  <MultiSelectItem key={label} value={value}>
                    {label}
                  </MultiSelectItem>
                ))}
              </MultiSelectList>
            </MultiSelectContent>
          </MultiSelect>
          <FormDescription>{field.description}</FormDescription>
          <FormMessage />
        </FormItem>
      );
    case 'DatePicker':
      const date = field.value;
      return (
        <FormItem className="flex flex-col w-full">
          <div>
            <FormLabel>{field.label}</FormLabel> {field.required && '*'}
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-full justify-start text-left font-normal',
                    !date && 'text-muted-foreground',
                  )}
                >
                  <CalendarIcon className="mr-2 size-4" />
                  {date ? format(date, 'PPP') : <span>Pick a date</span>}
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                // selected={date}
                selected={field.value}
                onSelect={(newDate) => {
                  // setDate(newDate);
                  form.setValue(field.name, newDate, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormDescription>{field.description}</FormDescription>
          <FormMessage />
        </FormItem>
      );
    case 'H1':
      return (
        <h1
          key={field.content}
          className={cn('mt-6 font-bold text-3xl', field.className)}
        >
          {field.content}
        </h1>
      );
    case 'H2':
      return (
        <h2
          key={field.content}
          className={cn('mt-4 font-bold text-xl', field.className)}
        >
          {field.content}
        </h2>
      );
    case 'H3':
      return (
        <h3
          key={field.content}
          className={cn('mt-3 font-semiboldbold text-lg', field.className)}
        >
          {field.content} content
        </h3>
      );
    case 'P':
      return <p key={field.content}>{field.content}</p>;
    case 'Separator':
      return (
        <div className="py-3 w-full">
          <Separator {...field} />
        </div>
      );
    default:
      return <div>Invalid Form Element</div>;
  }
};
