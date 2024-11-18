import { FormElement } from '../form-types';

export const getFormElementCode = (field: FormElement) => {
  switch (field.variant) {
    case 'Input':
      return `
        <FormField
          control={form.control}
          name="${field.name}"
          render={({ field }) => (
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
            )
          }
        />`;
    case 'OTP':
      return `
       <FormField
          control={form.control}
          name="${field.name}"
          render={({ field }) => (
           <FormItem className="w-full">
          <FormLabel>{field.label}</FormLabel> {field.required && '*'}
          <FormControl>
            <InputOTP
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
          <FormDescription>${field.description}</FormDescription>
          <FormMessage />
        </FormItem>
          )}
        />`;
    case 'Textarea':
      return `
        <FormField
          control={form.control}
          name="${field.name}"
          render={({ field }) => (
            <FormItem>
              <FormLabel>${field.label}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="${field.placeholder}"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              ${field.description && `<FormDescription>${field.description}</FormDescription>`
        }
              <FormMessage />
            </FormItem>
          )}
        />`;
    case 'Password':
      return `
        <FormField
          control={form.control}
          name="${field.name}"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>${field.label}</FormLabel> ${field.required && '*'}
              <FormControl>
                <Input ${{ ...field }} type="password" />
              </FormControl>
              <FormDescription>${field.description}</FormDescription>
              <FormMessage />
            </FormItem>
          )  
        }
        />
        `;
    case 'Checkbox':
      return `<FormField
          control={form.control}
          name="${field.name}"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  ${field.disabled ? 'disabled' : ''}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>${field.label}</FormLabel>
                ${field.description &&
        `<FormDescription>${field.description}</FormDescription>`}
                <FormMessage />
              </div>
            </FormItem>
          )}
        />`;
    case 'DatePicker':
      return `
      <FormField
      control={form.control}
      name="${field.name}"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>${field.label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
       ${field.description &&
        `<FormDescription>${field.description}</FormDescription>`
        }
          <FormMessage />
        </FormItem>
      )}
    />`;
    case 'MultiSelect':
      return `
           <FormField
              control={form.control}
              name="${field.name}"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>${field.label}</FormLabel>
                  <FormControl>
                    <MultiSelector
                      values={field.value}
                      onValuesChange={field.onChange}
                      loop
                      className="max-w-xs"
                    >
                      <MultiSelectorTrigger>
                        <MultiSelectorInput placeholder="Select languages" />
                      </MultiSelectorTrigger>
                      <MultiSelectorContent>
                      <MultiSelectorList>
                        <MultiSelectorItem value={"React"}>React</MultiSelectorItem>
                        <MultiSelectorItem value={"Vue"}>Vue</MultiSelectorItem>
                        <MultiSelectorItem value={"Svelte"}>Svelte</MultiSelectorItem>
                      </MultiSelectorList>
                      </MultiSelectorContent>
                    </MultiSelector>
                  </FormControl>
                  ${field.description &&
        `<FormDescription>${field.description}</FormDescription>`
        }
                  <FormMessage />
                </FormItem>
              )}
            />`;
    case 'Select':
      return `
        <FormField
          control={form.control}
          name="${field.name}"
          render={({ field }) => (
            <FormItem>
              <FormLabel>${field.label}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="${field.placeholder}" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
                ${field.description &&
        `<FormDescription>${field.description}</FormDescription>`
        }
              <FormMessage />
            </FormItem>
          )}
        />`;
    case 'Slider':
      return `
            <FormField
              control={form.control}
              name="${field.name}"
              render={({ field: { value, onChange } }) => (
              <FormItem>
                <FormLabel>Price - {value}</FormLabel>
                <FormControl>
                  <Slider
                    min=${field.min ? field.min : '{0}'}
                    max=${field.max ? field.max : '{100}'}
                    step=${field.step ? field.step : '{5}'}
                    defaultValue={[5]}
                    onValueChange={(vals) => {
                      onChange(vals[0]);
                    }}
                  />
                </FormControl>
                ${field.description &&
        `<FormDescription>${field.description}</FormDescription>`
        }
                <FormMessage />
              </FormItem>
              )}
            />`;
    case 'Switch':
      return `
          <FormField
              control={form.control}
              name="${field.name}"
              render={({ field }) => (
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
              )}
            />`;
    case 'H1':
      return `<h1 className="text-3xl font-bold">${field.content}</h1>`;
    case 'H2':
      return `<h2 className="text-2xl font-bold">${field.content}</h2>`;
    case 'H3':
      return `<h3 className="text-xl font-bold">${field.content}</h3>`;
    case 'P':
      return `<p className="text-base">${field.content}</p>`;
    case 'Separator':
      return `<div className="py-3 w-full">
                <Separator />
              </div>`;
    default:
      return null;
  }
};
