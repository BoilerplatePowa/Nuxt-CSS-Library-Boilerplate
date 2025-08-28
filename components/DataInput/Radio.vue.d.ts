interface Props {
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
type __VLS_Props = Props;
type __VLS_PublicProps = {
    modelValue?: string | number | boolean;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | boolean) => any;
    change: (event: Event) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
    onChange?: ((event: Event) => any) | undefined;
}>, {
    size: "xs" | "sm" | "md" | "lg";
    required: boolean;
    variant: "primary" | "secondary" | "accent" | "success" | "warning" | "info" | "error";
    disabled: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
