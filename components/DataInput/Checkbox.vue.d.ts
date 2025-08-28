import { Size, Variant } from '../../../../../../../../src/shared/types.d';
interface Props {
    name?: string;
    label?: string;
    helpText?: string;
    errorMessage?: string;
    disabled?: boolean;
    required?: boolean;
    indeterminate?: boolean;
    size?: Size;
    variant?: Variant;
    ariaDescribedby?: string;
    validateOnValueUpdate?: boolean;
    validateOnBlur?: boolean;
    validateOnChange?: boolean;
}
type __VLS_Props = Props;
type __VLS_PublicProps = {
    modelValue?: boolean;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    blur: (event: Event) => any;
    "update:modelValue": (value: boolean) => any;
    change: (event: Event, value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onBlur?: ((event: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onChange?: ((event: Event, value: boolean) => any) | undefined;
}>, {
    size: Size;
    required: boolean;
    variant: Variant;
    disabled: boolean;
    indeterminate: boolean;
    validateOnBlur: boolean;
    validateOnChange: boolean;
    validateOnValueUpdate: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
