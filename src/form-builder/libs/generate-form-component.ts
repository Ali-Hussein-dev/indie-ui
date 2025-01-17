import { FormElement } from '../form-types';

export const getFormElementCode = (field: FormElement) => {
  switch (field.fieldType) {
    case 'Input':
      return `<FormField
                control={form.control}
                name="${field.name}"
                render={({ field }) => (
                    <FormItem className="w-full">
                      ${field.label && `<FormLabel>${field.label}</FormLabel> ${field.required ? '*' : ''}`}
                      <FormControl>
                        <Input
                          placeholder="${field.placeholder}"
                          type={"${field.type}"}
                          value={field.value}
                          onChange={(e) => {
                            const val = e.target.value;
                            field.onChange(${field.type == 'number' ? '+val' : 'val'});
                          }}
                        />
                      </FormControl>
                      ${field.description ? `<FormDescription>${field.description}</FormDescription>` : ''}
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
          ${field.label && `<FormLabel>${field.label}</FormLabel> ${field.required ? '*' : ''}`}
          <FormControl>
            <InputOTP
              maxLength={6}
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
          ${field.description ? `<FormDescription>${field.description}</FormDescription>` : ''}
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
              ${field.label && `<FormLabel>${field.label}</FormLabel> ${field.required ? '*' : ''}`}
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="${field.placeholder ?? ''}"
                  className="resize-none"
                />
              </FormControl>
              ${field.description ? `<FormDescription>${field.description}</FormDescription>` : ''}
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
              ${field.label && `<FormLabel>${field.label}</FormLabel> ${field.required ? '*' : ''}`}
              <FormControl>
                <Input
                  {...field}
                  placeholder="${field.placeholder}"
                  type="password" 
                />
              </FormControl>
              ${field.description ? `<FormDescription>${field.description}</FormDescription>` : ''}
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
                ${field.description ? `<FormDescription>${field.description}</FormDescription>` : ''}
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
                    "w-[240px] pl-3 text-start font-normal",
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
            ${field.description ? `<FormDescription>${field.description}</FormDescription>` : ''}
          <FormMessage />
        </FormItem>
      )}
    />`;
    case 'MultiSelect':
      return `
           <FormField
              control={form.control}
              name="${field.name}"
              render={({ field }) => {
              const options = [
                      { value: '1', label: 'Option 1' },
                      { value: '2', label: 'Option 2' },
                      { value: '2', label: 'Option 3' },
                    ]
              return (
                <FormItem className="w-full">
                  ${field.label && `<FormLabel>${field.label}</FormLabel> ${field.required ? '*' : ''}`}
                  <MultiSelect value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <MultiSelectTrigger>
                        <MultiSelectValue
                          placeholder={"${field.placeholder}"}
                        />
                      </MultiSelectTrigger>
                    </FormControl>
                    <MultiSelectContent>
                      <MultiSelectList>
                        {options.map(({ label, value }) => (
                          <MultiSelectItem key={label} value={value}>
                            {label}
                          </MultiSelectItem>
                        ))}
                      </MultiSelectList>
                    </MultiSelectContent>
                  </MultiSelect>
                  ${field.description ? `<FormDescription>${field.description}</FormDescription>` : ''}
                  <FormMessage />
                </FormItem>
              )}}
            />`;
    case 'Select':
      return `
        <FormField
          control={form.control}
          name="${field.name}"
          render={({ field }) => {
          const options =[
            { value: 'option-1', label: 'Option 1' },
            { value: 'option-2', label: 'Option 2' },
            { value: 'option-3', label: 'Option 3' },
          ]
          return (
            <FormItem>
              ${field.label && `<FormLabel>${field.label}</FormLabel> ${field.required ? '*' : ''}`}
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="${field.placeholder}" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {options.map(({ label, value }) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
                ${field.description ? `<FormDescription>${field.description}</FormDescription>` : ''}
              <FormMessage />
            </FormItem>
          )}}
        />`;
    case 'Slider':
      return `
            <FormField
              control={form.control}
              name="${field.name}"
              render={({ field }) => (
              <FormItem>
                <FormLabel className="flex justify-between items-center">${field.label}<span>{field.value}/{max}</span>
                </FormLabel>
                <FormControl>
                  <Slider
                    min={field.min}
                    max={field.max}
                    step={field.step}
                    defaultValue={[5]}
                    onValueChange={(values) => {
                      field.onChange(values[0]);
                    }}
                  />
                </FormControl>
                ${field.description ? `<FormDescription>${field.description}</FormDescription>` : ''}
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
                      ${field.label && `<FormLabel>${field.label}</FormLabel> ${field.required ? '*' : ''}`}
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </div>
                    ${field.description ? `<FormDescription>${field.description}</FormDescription>` : ''}
                </FormItem>
              )}
            />`;
    case 'RadioGroup':
      return `<FormField
              control={form.control}
              name="${field.name}"
              render={({ field }) => {
                const options =[
                  { value: 'option-1', label: 'Option 1' },
                  { value: 'option-2', label: 'Option 2' },
                  { value: 'option-3', label: 'Option 3' },
                ]
              return (
                <FormItem className="flex flex-col gap-2 w-full py-1">
                    ${field.label && `<FormLabel>${field.label}</FormLabel> ${field.required ? '*' : ''}`}
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        {options.map(({ label, value }) => (
                          <RadioGroupItem
                          key={value}
                          value={value}
                          className="flex items-center gap-x-2"
                        >
                          {label}
                        </RadioGroupItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    ${field.description ? `<FormDescription>${field.description}</FormDescription>` : ''}
                    <FormMessage />
                </FormItem>
              )}}
            />`;
    case 'ToggleGroup':
      return `<FormField
              control={form.control}
              name="${field.name}"
              render={({ field }) => {
              const options= [
                     { value: 'monday', label: 'Mon' },
                     { value: 'tuesday', label: 'Tue' },
                     { value: 'wednesday', label: 'Wed' },
                     { value: 'thursday', label: 'Thu' },
                     { value: 'friday', label: 'Fri' },
                     { value: 'saturday', label: 'Sat' },
                     { value: 'sunday', label: 'Sun' },
                  ]   
            return (
              <FormItem className="flex flex-col gap-2 w-full py-1">
                ${field.label && `<FormLabel>${field.label}</FormLabel> ${field.required ? '*' : ''}`}
                <FormControl>
                  <ToggleGroup
                      variant="outline"
                      onValueChange={field.onChange}
                      defaultValue={field.defaultValue}
                      type='${field.type}'
                      className="flex justify-start items-center gap-2 flex-wrap"
                    >
                     {options.map(({ label, value }) => (
                        <ToggleGroupItem
                          key={value}
                          value={value}
                          className="flex items-center gap-x-2"
                        >
                          {label}
                        </ToggleGroupItem>))
                    }
                  </ToggleGroup>
                </FormControl>
                ${field.description && `<FormDescription>${field.description}</FormDescription>`}
                <FormMessage />
              </FormItem>
            )
              }}
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
