interface Props {
    modelValue?: boolean;
    title?: string;
    variant?: 'default' | 'arrow' | 'plus' | 'bordered' | 'ghost';
    disabled?: boolean;
    forceOpen?: boolean;
    id?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        title?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    toggle: (isOpen: boolean) => any;
    "update:modelValue": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onToggle?: ((isOpen: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    variant: "default" | "arrow" | "plus" | "bordered" | "ghost";
    disabled: boolean;
    forceOpen: boolean;
    id: string;
    modelValue: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
