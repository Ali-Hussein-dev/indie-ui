import { CheckboxProps } from '@radix-ui/react-checkbox';
import { SliderProps } from '@radix-ui/react-slider';
import { SwitchProps } from '@radix-ui/react-switch';
import { SeparatorProps } from '@radix-ui/react-separator';
import { OTPInputProps } from 'input-otp';
import { RadioGroupProps } from '@radix-ui/react-radio-group';
import {
  ToggleGroupMultipleProps,
  ToggleGroupSingleProps,
} from '@radix-ui/react-toggle-group';

type Option = { value: string; label: string };
//------------------------------------------------------------
type SharedFormProps = {
  name: string;
  label?: string;
  description?: string;
  required?: boolean;
  static?: boolean;
};

type Input = {
  name: string;
  fieldType: 'Input';
} & React.InputHTMLAttributes<HTMLInputElement> &
  SharedFormProps;

type PasswordInput = {
  name: string;
  fieldType: 'Password';
  type: 'password';
} & React.InputHTMLAttributes<HTMLInputElement> &
  SharedFormProps;

type OTPInput = {
  name: string;
  fieldType: 'OTP';
} & OTPInputProps &
  SharedFormProps;

type Textarea = {
  name: string;
  fieldType: 'Textarea';
} & React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  SharedFormProps;

type Checkbox = {
  fieldType: 'Checkbox';
} & CheckboxProps &
  SharedFormProps;

type RadioGroup = {
  fieldType: 'RadioGroup';
  options: Option[];
} & RadioGroupProps &
  SharedFormProps;
//------------------------------
type ToggleGroupBaseProps = {
  fieldType: 'ToggleGroup';
  options: Option[];
};

type ToggleGroupSingle = ToggleGroupBaseProps &
  ToggleGroupSingleProps & {
    type: 'single';
  };

type ToggleGroupMultiple = ToggleGroupBaseProps &
  ToggleGroupMultipleProps & {
    type: 'multiple';
  };

type ToggleGroup = (ToggleGroupSingle | ToggleGroupMultiple) & SharedFormProps;
//------------------------------

type Switch = {
  fieldType: 'Switch';
} & SwitchProps &
  SharedFormProps;

type Slider = {
  fieldType: 'Slider';
} & SliderProps &
  SharedFormProps;

type Select = {
  fieldType: 'Select';
  /**
   * Options for the select field
   */
  options: Option[];
  placeholder: string;
} & React.SelectHTMLAttributes<HTMLSelectElement> &
  SharedFormProps;

type MultiSelect = {
  fieldType: 'MultiSelect';
  /**
   * Options for the multiselect field
   */
  options: Option[];
  placeholder: string;
} & React.InputHTMLAttributes<HTMLInputElement> &
  SharedFormProps;
type DatePicker = {
  fieldType: 'DatePicker';
} & React.InputHTMLAttributes<HTMLInputElement> &
  SharedFormProps;

type H1 = {
  fieldType: 'H1';
  /**
   * the name is used as a key to identify the field
   */
  name: string;
  content: string;
  static: true;
} & React.HTMLAttributes<HTMLHeadingElement>;
type H2 = {
  fieldType: 'H2';
  /**
   * the name is used as a key to identify the field
   */
  name: string;
  static: true;
  content: string;
} & React.HTMLAttributes<HTMLHeadingElement>;
type H3 = {
  fieldType: 'H3';
  /**
   * the name is used as a key to identify the field
   */
  name: string;
  static: true;
  content: string;
} & React.HTMLAttributes<HTMLHeadingElement>;
type Paragraph = {
  fieldType: 'P';
  /**
   * the name is used as a key to identify the field
   */
  name: string;
  static: true;
  content: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

type Divider = {
  fieldType: 'Separator';
  /**
   * the name is used as a key to identify the field
   */
  name: string;
  static: true;
} & SeparatorProps;

/**
 * FormFieldType is a union type that represents all the possible form fields
 * that can be rendered in a form
 */
type FormFieldElement =
  | Textarea
  | Input
  | PasswordInput
  | OTPInput
  | Checkbox
  | RadioGroup
  | ToggleGroup
  | Switch
  | Select
  | MultiSelect
  | Slider
  | DatePicker;

  /**
   * StaticFormElement is a type that represents a static form element
 * that is not editable by the user
  */
export type StaticFormElement = H1 | H2 | H3 | Paragraph | Divider;

export type FormElement = FormFieldElement | StaticFormElement;

export type FormElementOrList = FormElement | FormElement[];

export type FormElementList = FormElement[] | FormElementOrList[];

export type FormStep = {
  id: string;
  stepFields: FormElementList;
};
//------------------------------------------------------------Form Element Handlers
/**
 * @DropElement is a function that is used to drop an element to the form elements array
 * USE CASES
 * - Element: i is required
 * - Nested Element: i, j is required
 * - Element in MS form: i, stepIndex is required
 * - Nested Element in MS form: i, j, stepIndex is required
 */
type DropElementOptions = {
  /**
   * Index where an element should be dropped to the form elements array
   */
  fieldIndex: number;
  /** 
   * Index where a nested element should be dropped to the nested array
   */
  j?: number;
  /**
   * Whether the form is a multi-step form or not
   */
  isMS?: boolean;
  stepIndex?: number;
}
export type DropElement = (
  options: DropElementOptions,
) => void;

type EditElementOptions = {
  fieldIndex: number;
  modifiedFormElement: FormElement;
  j?: number;
  stepIndex?: number;
}
export type EditElement = (
  options: EditElementOptions,
) => void;

type ReorderParams = {
  newOrder: FormElementOrList[];
  fieldIndex?: number | null;
  stepIndex?: number | null;
};

export type ReorderElements = (params: ReorderParams) => void;

export type AppendElement = (
  options: {
    fieldType: FormElement['fieldType'],
    /**
     * index where a nested element should be appended to the main array
     */
    fieldIndex?: number | null;
    stepIndex?: number;
  },
) => void;

export type SetTemplate = (template: string) => void;
