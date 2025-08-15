interface Props {
    modelValue?: string;
    label?: string;
    placeholder?: string;
    helpText?: string;
    errorMessage?: string;
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;
    rows?: number;
    maxlength?: number;
    showCharCount?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    variant?: 'bordered' | 'ghost' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
    ariaDescribedby?: string;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    input: (event: Event) => any;
    "update:modelValue": (value: string) => any;
    change: (event: Event) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onInput?: ((event: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onChange?: ((event: Event) => any) | undefined;
}>, {
    variant: "bordered" | "ghost" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
    size: "xs" | "sm" | "md" | "lg";
    disabled: boolean;
    modelValue: string;
    required: boolean;
    readonly: boolean;
    showCharCount: boolean;
    rows: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
