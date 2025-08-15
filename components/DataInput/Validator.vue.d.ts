interface ValidationRule {
    name: string;
    test: (value: string) => boolean;
    message: string;
}
interface Props {
    modelValue?: string;
    label?: string;
    placeholder?: string;
    helperText?: string;
    successMessage?: string;
    type?: 'text' | 'email' | 'password' | 'url' | 'tel' | 'number' | 'textarea';
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'bordered' | 'ghost' | 'filled';
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;
    maxLength?: number;
    rows?: number;
    rules?: ValidationRule[];
    validateOnInput?: boolean;
    validateOnBlur?: boolean;
    showValidationIcon?: boolean;
    showCharCount?: boolean;
    showSummary?: boolean;
    email?: boolean;
    url?: boolean;
    minLength?: number;
    pattern?: RegExp;
    customValidator?: (value: string) => string | null;
}
declare const _default: import('vue').DefineComponent<Props, {
    validate: () => boolean;
    isValid: import('vue').ComputedRef<boolean>;
    errors: import('vue').ComputedRef<string[]>;
    reset: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
    blur: () => any;
    focus: () => any;
    validate: (isValid: boolean, errors: string[]) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onBlur?: (() => any) | undefined;
    onFocus?: (() => any) | undefined;
    onValidate?: ((isValid: boolean, errors: string[]) => any) | undefined;
}>, {
    variant: "default" | "bordered" | "ghost" | "filled";
    size: "sm" | "md" | "lg";
    disabled: boolean;
    type: "text" | "email" | "password" | "url" | "tel" | "number" | "textarea";
    required: boolean;
    readonly: boolean;
    rows: number;
    showCharCount: boolean;
    rules: ValidationRule[];
    validateOnInput: boolean;
    validateOnBlur: boolean;
    showValidationIcon: boolean;
    showSummary: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
