interface Props {
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
type __VLS_Props = Props;
type __VLS_PublicProps = {
    modelValue?: number;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: number) => any;
    change: (value: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    onChange?: ((value: number) => any) | undefined;
}>, {
    size: "xs" | "sm" | "md" | "lg";
    variant: "star" | "heart" | "mask";
    disabled: boolean;
    readonly: boolean;
    maxRating: number;
    allowEmpty: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
