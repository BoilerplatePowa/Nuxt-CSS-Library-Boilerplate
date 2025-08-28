interface Option {
    label: string;
    value: string | number;
    disabled?: boolean;
    group?: string;
}
interface Props {
    options?: Option[];
    label?: string;
    placeholder?: string;
    helpText?: string;
    errorMessage?: string;
    validationMessage?: string;
    disabled?: boolean;
    required?: boolean;
    multiple?: boolean;
    loading?: boolean;
    showValidation?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    variant?: 'bordered' | 'ghost' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
    ariaDescribedby?: string;
    autoFocus?: boolean;
}
type __VLS_Props = Props;
type __VLS_PublicProps = {
    modelValue?: string | number | string[] | number[];
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        selectRef: HTMLSelectElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {
    focus: () => void | undefined;
    blur: () => void | undefined;
    validate: () => boolean;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    "update:modelValue": (value: string | number | number[] | string[]) => any;
    change: (event: Event) => any;
    validate: (isValid: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number | number[] | string[]) => any) | undefined;
    onChange?: ((event: Event) => any) | undefined;
    onValidate?: ((isValid: boolean) => any) | undefined;
}>, {
    size: "xs" | "sm" | "md" | "lg";
    required: boolean;
    variant: "bordered" | "ghost" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
    disabled: boolean;
    loading: boolean;
    autoFocus: boolean;
    multiple: boolean;
    showValidation: boolean;
    options: Option[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    selectRef: HTMLSelectElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
