interface Props {
    legend?: string;
    description?: string;
    error?: string;
    disabled?: boolean;
    variant?: 'default' | 'bordered' | 'outlined' | 'filled';
    size?: 'sm' | 'md' | 'lg';
    required?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        legend?(_: {}): any;
        default?(_: {}): any;
        description?(_: {}): any;
        error?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLFieldSetElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    size: "sm" | "md" | "lg";
    required: boolean;
    variant: "default" | "bordered" | "outlined" | "filled";
    disabled: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLFieldSetElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
