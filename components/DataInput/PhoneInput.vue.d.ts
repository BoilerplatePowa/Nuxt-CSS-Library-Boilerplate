import { CountryCode } from 'libphonenumber-js';
interface PhoneInputProps {
    name?: string;
    label?: string;
    placeholder?: string;
    helpText?: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'bordered' | 'outlined' | 'filled';
    defaultCountry?: CountryCode;
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;
    maxlength?: number;
    showCharCount?: boolean;
    ariaDescribedby?: string;
    rules?: any;
    showValidation?: boolean;
    countriesCodes?: CountryCode[];
    showExampleNumber?: boolean;
}
type __VLS_Props = PhoneInputProps;
type __VLS_PublicProps = {
    modelValue?: string;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    input: (event: Event) => any;
    "update:modelValue": (value: string) => any;
    change: (event: Event) => any;
    "country-change": (countryCode: CountryCode) => any;
    "validation-change": (isValid: boolean, phoneNumber?: string | undefined) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onInput?: ((event: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onChange?: ((event: Event) => any) | undefined;
    "onCountry-change"?: ((countryCode: CountryCode) => any) | undefined;
    "onValidation-change"?: ((isValid: boolean, phoneNumber?: string | undefined) => any) | undefined;
}>, {
    name: string;
    size: "sm" | "md" | "lg";
    required: boolean;
    variant: "bordered" | "outlined" | "filled";
    disabled: boolean;
    ariaDescribedby: string;
    label: string;
    placeholder: string;
    readonly: boolean;
    helpText: string;
    maxlength: number;
    showCharCount: boolean;
    rules: any;
    defaultCountry: CountryCode;
    showValidation: boolean;
    countriesCodes: CountryCode[];
    showExampleNumber: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
export default _default;
