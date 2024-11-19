import { CheckboxProps } from "@radix-ui/react-checkbox"
import { SliderProps } from "@radix-ui/react-slider"
import { SwitchProps } from "@radix-ui/react-switch"
import { SeparatorProps } from "@radix-ui/react-separator"
import { OTPInputProps } from "input-otp"
import { RadioGroupProps } from "@radix-ui/react-radio-group"

//------------------------------------------------------------
type SharedFormProps = {
    name: string
    label?: string
    description?: string
    required?: boolean
    static?: boolean
}

type Input = {
    name: string
    variant: "Input"
} & React.InputHTMLAttributes<HTMLInputElement> &
    SharedFormProps

type PasswordInput = {
    name: string
    variant: "Password"
    type: "password"
} & React.InputHTMLAttributes<HTMLInputElement> &
    SharedFormProps

type OTPInput = {
    name: string
    variant: "OTP"
} & OTPInputProps &
    SharedFormProps

type Textarea = {
    name: string
    variant: "Textarea"
} & React.TextareaHTMLAttributes<HTMLTextAreaElement> &
    SharedFormProps

type Checkbox = {
    variant: "Checkbox"
} & CheckboxProps &
    SharedFormProps

type RadioGroup = {
    variant: "RadioGroup"
    options: { value: string; label: string }[]
} & RadioGroupProps &
    SharedFormProps

type Switch = {
    variant: "Switch"
} & SwitchProps &
    SharedFormProps

type Slider = {
    variant: "Slider"

} & SliderProps &
    SharedFormProps

type Select = {
    variant: "Select"
    /**
     * Options for the select field
     */
    options: { value: string; label: string }[]
    placeholder: string
} & React.SelectHTMLAttributes<HTMLSelectElement> &
    SharedFormProps

type MultiSelect = {
    variant: "MultiSelect"
    /**
     * Options for the multiselect field
     */
    options: { value: string; label: string }[]
    placeholder: string
} & React.InputHTMLAttributes<HTMLInputElement> &
    SharedFormProps
type DatePicker = {
    variant: "DatePicker"
} & React.InputHTMLAttributes<HTMLInputElement> &
    SharedFormProps

type H1 = {
    variant: "H1"
    /**
     * the name is used as a key to identify the field
     */
    name: string
    content: string
    static: true
} & React.HTMLAttributes<HTMLHeadingElement>
type H2 = {
    variant: "H2"
    /**
     * the name is used as a key to identify the field
     */
    name: string
    static: true
    content: string
} & React.HTMLAttributes<HTMLHeadingElement>
type H3 = {
    variant: "H3"
    /**
     * the name is used as a key to identify the field
     */
    name: string
    static: true
    content: string
} & React.HTMLAttributes<HTMLHeadingElement>
type Paragraph = {
    variant: "P"
    /**
     * the name is used as a key to identify the field
     */
    name: string
    static: true
    content: string
} & React.HTMLAttributes<HTMLParagraphElement>

type Divider = {
    variant: "Separator"
    /**
     * the name is used as a key to identify the field
     */
    name: string
    static: true
} & SeparatorProps

/**
* FormFieldType is a union type that represents all the possible form fields
* that can be rendered in a form
*/
export type FormFieldElement =
    | Textarea
    | Input
    | PasswordInput
    | OTPInput
    | Checkbox
    | RadioGroup
    | Switch
    | Select
    | MultiSelect
    | Slider
    | DatePicker

/**
* StaticFormElement is a type that represents a static form element
* that is not editable by the user
*/
export type StaticFormElement = H1 | H2 | H3 | Paragraph | Divider

export type FormElement = FormFieldElement
    | StaticFormElement


export type FieldsElementsList = FormElement[]
// needed for row layout
// | (FormItem[] | FormItem)[]