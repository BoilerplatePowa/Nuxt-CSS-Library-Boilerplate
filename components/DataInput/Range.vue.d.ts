interface Props {
    min?: number;
    max?: number;
    step?: number;
    label?: string;
    helpText?: string;
    errorMessage?: string;
    disabled?: boolean;
    showValue?: boolean;
    showTicks?: boolean;
    tickCount?: number;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error';
    ariaDescribedby?: string;
}
type __VLS_Props = Props;
type __VLS_PublicProps = {
    modelValue?: number;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    input: (event: Event) => any;
    "update:modelValue": (value: number) => any;
    change: (event: Event) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onInput?: ((event: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    onChange?: ((event: Event) => any) | undefined;
}>, {
    size: "xs" | "sm" | "md" | "lg";
    max: number;
    min: number;
    variant: "primary" | "secondary" | "accent" | "success" | "warning" | "info" | "error";
    disabled: boolean;
    step: number;
    showValue: boolean;
    showTicks: boolean;
    tickCount: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
