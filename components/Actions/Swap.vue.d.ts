interface Props {
    modelValue?: boolean;
    variant?: 'rotate' | 'flip' | 'indeterminate';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    onContent?: string;
    offContent?: string;
    indeterminateContent?: string;
    disabled?: boolean;
    name?: string;
    id?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        on?(_: {}): any;
        on?(_: {}): any;
        on?(_: {}): any;
        off?(_: {}): any;
        off?(_: {}): any;
        off?(_: {}): any;
        indeterminate?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLLabelElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => any;
    change: (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onChange?: ((value: boolean) => any) | undefined;
}>, {
    name: string;
    variant: "rotate" | "flip" | "indeterminate";
    size: "xs" | "sm" | "md" | "lg";
    disabled: boolean;
    id: string;
    modelValue: boolean;
    onContent: string;
    offContent: string;
    indeterminateContent: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLLabelElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
