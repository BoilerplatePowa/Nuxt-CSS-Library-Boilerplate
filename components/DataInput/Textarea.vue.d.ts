interface Props {
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
type __VLS_Props = Props;
type __VLS_PublicProps = {
    modelValue?: string;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    input: (event: Event) => any;
    "update:modelValue": (value: string) => any;
    change: (event: Event) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onInput?: ((event: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onChange?: ((event: Event) => any) | undefined;
}>, {
    size: "xs" | "sm" | "md" | "lg";
    required: boolean;
    variant: "bordered" | "ghost" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
    disabled: boolean;
    readonly: boolean;
    showCharCount: boolean;
    rows: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
