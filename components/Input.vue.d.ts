interface Props {
    modelValue?: string | number;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
    label?: string;
    placeholder?: string;
    helpText?: string;
    errorMessage?: string;
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;
    invalid?: boolean;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'filled' | 'outline';
    ariaDescribedby?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        prefix?(_: {}): any;
        suffix?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    input: (event: Event) => any;
    "update:modelValue": (value: string | number) => any;
    change: (event: Event) => any;
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onInput?: ((event: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    onChange?: ((event: Event) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
}>, {
    variant: "default" | "filled" | "outline";
    size: "sm" | "md" | "lg";
    disabled: boolean;
    type: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
    readonly: boolean;
    required: boolean;
    invalid: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
