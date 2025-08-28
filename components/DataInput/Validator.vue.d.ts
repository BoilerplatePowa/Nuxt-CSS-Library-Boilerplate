interface ValidationRule {
    name: string;
    test: (value: string) => boolean;
    message: string;
}
interface Props {
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
type __VLS_Props = Props;
type __VLS_PublicProps = {
    modelValue?: string;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {
    validate: () => boolean;
    isValid: import('vue').ComputedRef<boolean>;
    errors: import('vue').ComputedRef<string[]>;
    reset: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    focus: () => any;
    blur: () => any;
    "update:modelValue": (value: string) => any;
    validate: (isValid: boolean, errors: string[]) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onFocus?: (() => any) | undefined;
    onBlur?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onValidate?: ((isValid: boolean, errors: string[]) => any) | undefined;
}>, {
    size: "sm" | "md" | "lg";
    type: "text" | "email" | "password" | "url" | "tel" | "number" | "textarea";
    required: boolean;
    variant: "default" | "bordered" | "ghost" | "filled";
    disabled: boolean;
    readonly: boolean;
    showCharCount: boolean;
    rules: ValidationRule[];
    validateOnBlur: boolean;
    validateOnInput: boolean;
    showSummary: boolean;
    rows: number;
    showValidationIcon: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
