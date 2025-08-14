interface Props {
    modelValue?: number;
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
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    input: (event: Event) => any;
    "update:modelValue": (value: number) => any;
    change: (event: Event) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onInput?: ((event: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    onChange?: ((event: Event) => any) | undefined;
}>, {
    variant: "primary" | "secondary" | "accent" | "success" | "warning" | "info" | "error";
    size: "xs" | "sm" | "md" | "lg";
    disabled: boolean;
    modelValue: number;
    min: number;
    max: number;
    step: number;
    showValue: boolean;
    showTicks: boolean;
    tickCount: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
