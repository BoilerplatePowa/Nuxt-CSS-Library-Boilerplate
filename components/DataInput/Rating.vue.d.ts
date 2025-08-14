interface Props {
    modelValue?: number;
    maxRating?: number;
    label?: string;
    helpText?: string;
    errorMessage?: string;
    disabled?: boolean;
    readonly?: boolean;
    allowEmpty?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    variant?: 'star' | 'heart' | 'mask';
    name?: string;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: number) => any;
    change: (value: number) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    onChange?: ((value: number) => any) | undefined;
}>, {
    variant: "star" | "heart" | "mask";
    size: "xs" | "sm" | "md" | "lg";
    disabled: boolean;
    modelValue: number;
    readonly: boolean;
    maxRating: number;
    allowEmpty: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
