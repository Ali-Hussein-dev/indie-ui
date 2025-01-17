import { format } from 'date-fns';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import type * as React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import type { ControllerRenderProps, UseFormReturn } from 'react-hook-form';
import type { FormElement } from '@/form-builder/form-types';
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export const RenderFormElement = ({
  formElement,
  form,
}: {
  formElement: FormElement;
  form: UseFormReturn<any, any, undefined>;
}): React.ReactElement => {
  switch (formElement.fieldType) {
    case 'Input':
      return (
        <FormField
          control={form.control}
          name={formElement.name}
          render={({ field }: { field: ControllerRenderProps }) => (
            <FormItem className="w-full">
              <FormLabel>
                {formElement.label} {formElement.required ? ' *' : ''}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={formElement.placeholder}
                  disabled={formElement.disabled}
                  type={formElement.type ?? 'text'}
                  // onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  {...field}
                />
              </FormControl>
              <FormDescription>{formElement.description}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case 'Password':
      return (
        <FormField
          control={form.control}
          name={formElement.name}
          render={({ field }: { field: ControllerRenderProps }) => (
            <FormItem className="w-full">
              <FormLabel>{formElement.label}</FormLabel>
              {formElement.required && ' *'}
              <FormControl>
                <Input
                  placeholder={formElement.placeholder}
                  disabled={formElement.disabled}
                  type={'password'}
                  {...field}
                  value={field.value ?? ''}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormDescription>{formElement.description}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case 'OTP':
      return (
        <FormField
          control={form.control}
          name={formElement.name}
          render={({ field }: { field: ControllerRenderProps }) => (
            <FormItem className="w-full">
              <FormLabel>{formElement.label}</FormLabel>{' '}
              {formElement.required && '*'}
              <FormControl>
                <InputOTP
                  {...field}
                  maxLength={formElement.maxLength ?? 6}
                  name={formElement.name}
                  value={formElement.value}
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
              <FormDescription>{formElement.description}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case 'Textarea':
      return (
        <FormField
          control={form.control}
          name={formElement.name}
          render={({ field }: { field: ControllerRenderProps }) => (
            <FormItem className="w-full">
              <FormLabel>
                {formElement.label} {formElement.required && '*'}
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder={formElement.placeholder}
                  required={formElement.required}
                  disabled={formElement.disabled}
                  defaultValue={formElement.defaultValue}
                  className="resize-none"
                />
              </FormControl>
              <FormDescription>{formElement.description}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case 'Checkbox':
      return (
        <FormField
          control={form.control}
          name={formElement.name}
          render={({ field }: { field: ControllerRenderProps }) => (
            <FormItem className="flex items-center gap-2 w-full py-1 space-y-0">
              <FormControl>
                <Checkbox
                  {...field}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="leading-none">
                {formElement.label} {formElement.required && ' *'}
              </FormLabel>
              {formElement.description ? (
                <FormDescription>{formElement.description}</FormDescription>
              ) : (
                ''
              )}
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case 'RadioGroup':
      return (
        <FormField
          control={form.control}
          name={formElement.name}
          render={({ field }: { field: ControllerRenderProps }) => (
            <FormItem className="flex flex-col gap-2 w-full py-1">
              <FormLabel className="mt-0">
                {formElement?.label} {formElement.required && ' *'}
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  {formElement.options.map(({ label, value }) => (
                    <div key={value} className="flex items-center gap-x-2">
                      <RadioGroupItem value={value} id={value} />
                      <Label htmlFor={value}>{label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
              {formElement.description && (
                <FormDescription>{formElement.description}</FormDescription>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case 'ToggleGroup': {
      const options = formElement.options.map(({ label, value }) => (
        <ToggleGroupItem
          value={value}
          key={value}
          className="flex items-center gap-x-2"
        >
          {label}
        </ToggleGroupItem>
      ));
      return (
        <FormField
          control={form.control}
          name={formElement.name}
          render={({ field }: { field: ControllerRenderProps }) => (
            <FormItem className="flex flex-col gap-2 w-full py-1">
              <FormLabel className="mt-0">
                {formElement?.label} {formElement.required && '*'}
              </FormLabel>
              <FormControl>
                {formElement.type === 'single' ? (
                  <ToggleGroup
                    {...field}
                    type="single"
                    variant="outline"
                    onValueChange={field.onChange}
                    defaultValue={formElement.defaultValue}
                    className="flex justify-start items-center gap-2"
                  >
                    {options}
                  </ToggleGroup>
                ) : (
                  <ToggleGroup
                    {...field}
                    type="multiple"
                    variant="outline"
                    onValueChange={field.onChange}
                    defaultValue={
                      Array.isArray(formElement.defaultValue)
                        ? formElement.defaultValue.filter(
                            (val) => val !== undefined,
                          )
                        : [formElement.defaultValue].filter(
                            (val) => val !== undefined,
                          )
                    }
                    className="flex justify-start items-center gap-2"
                  >
                    {options}
                  </ToggleGroup>
                )}
              </FormControl>
              {formElement.description && (
                <FormDescription>{formElement.description}</FormDescription>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
      );
    }
    case 'Switch':
      return (
        <FormField
          control={form.control}
          name={formElement.name}
          render={({ field }: { field: ControllerRenderProps }) => (
            <FormItem className="flex flex-col p-3 justify-center w-full border rounded">
              <div className="flex items-center justify-between h-full">
                <FormLabel className="w-full grow">
                  {formElement.label}
                </FormLabel>
                <FormControl>
                  <Switch
                    {...field}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </div>
              {formElement.description && (
                <FormDescription>{formElement.description}</FormDescription>
              )}
            </FormItem>
          )}
        />
      );
    case 'Slider':
      return (
        <FormField
          control={form.control}
          name={formElement.name}
          render={({ field }: { field: ControllerRenderProps }) => {
            const min = formElement.min || 0;
            const max = formElement.max || 100;
            const step = formElement.step || 5;
            const defaultValue = 25;
            const value = Array.isArray(field.value)
              ? field.value
              : [field.value || defaultValue];
            return (
              <FormItem className="w-full">
                <FormLabel className="flex justify-between items-center">
                  {formElement.label}
                  <span>
                    {value}/{max}
                  </span>
                </FormLabel>
                <FormControl>
                  <Slider
                    {...field}
                    min={min}
                    max={max}
                    step={step}
                    defaultValue={[defaultValue]}
                    value={value}
                    onValueChange={(newValue) => field.onChange(newValue[0])}
                  />
                </FormControl>
                <FormDescription className="py-1">
                  {formElement.description}
                </FormDescription>
                <FormMessage />
              </FormItem>
            );
          }}
        />
      );
    case 'Select':
      return (
        <FormField
          control={form.control}
          name={formElement.name}
          render={({ field }: { field: ControllerRenderProps }) => (
            <FormItem className="w-full">
              <FormLabel>
                {formElement.label}
                {formElement.required && ' *'}
              </FormLabel>
              <Select
                value={field.value}
                onValueChange={field.onChange}
                defaultValue={String(field?.value ?? '')}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={formElement.placeholder || 'Select item'}
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {formElement.options.map(({ label, value }) => (
                    <SelectItem key={label} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>{formElement.description}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case 'MultiSelect':
      return (
        <FormField
          control={form.control}
          name={formElement.name}
          render={({ field }: { field: ControllerRenderProps }) => (
            <FormItem className="w-full">
              <FormLabel>
                {formElement.label} {formElement.required ? ' *' : ''}{' '}
              </FormLabel>
              <MultiSelect value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <MultiSelectTrigger>
                    <MultiSelectValue
                      placeholder={formElement.placeholder || 'Select item'}
                    />
                  </MultiSelectTrigger>
                </FormControl>
                <MultiSelectContent>
                  <MultiSelectList>
                    {formElement.options.map(({ label, value }) => (
                      <MultiSelectItem key={label} value={value}>
                        {label}
                      </MultiSelectItem>
                    ))}
                  </MultiSelectList>
                </MultiSelectContent>
              </MultiSelect>
              <FormDescription>{formElement.description}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case 'DatePicker':
      return (
        <FormField
          control={form.control}
          name={formElement.name}
          render={({ field }: { field: ControllerRenderProps }) => {
            const date = field.value;
            return (
              <FormItem className="flex flex-col w-full">
                <div>
                  <FormLabel>
                    {formElement.label} {formElement.required ? ' *' : ''}
                  </FormLabel>
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-full justify-start text-start font-normal',
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
                <FormDescription>{formElement.description}</FormDescription>
                <FormMessage />
              </FormItem>
            );
          }}
        />
      );
    case 'H1':
      return (
        <h1
          key={formElement.content}
          className={cn('mt-6 font-bold text-3xl', formElement.className)}
        >
          {formElement.content}
        </h1>
      );
    case 'H2':
      return <h2 className="mt-4 font-bold text-xl">{formElement.content}</h2>;
    case 'H3':
      return (
        <h3 className="mt-3 font-semiboldbold text-lg">
          {formElement.content} content
        </h3>
      );
    case 'P':
      return (
        <p className="tracking-wider text-foreground/60 pt-0 dark:text-foreground/60 mb-4 mt-0 text-wrap">
          {formElement.content}
        </p>
      );
    case 'Separator':
      return (
        <div className="py-3 w-full">
          <Separator {...formElement} />
        </div>
      );
    default:
      return <div>Invalid Form Element</div>;
  }
};
