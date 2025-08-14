interface Props {
    modelValue?: string | number | boolean;
    value: string | number | boolean;
    name: string;
    label?: string;
    helpText?: string;
    errorMessage?: string;
    disabled?: boolean;
    required?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error';
    ariaDescribedby?: string;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | boolean) => any;
    change: (event: Event) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
    onChange?: ((event: Event) => any) | undefined;
}>, {
    variant: "primary" | "secondary" | "accent" | "success" | "warning" | "info" | "error";
    size: "xs" | "sm" | "md" | "lg";
    disabled: boolean;
    required: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
