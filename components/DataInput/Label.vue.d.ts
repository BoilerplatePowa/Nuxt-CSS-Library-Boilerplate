interface Props {
    text?: string;
    altText?: string;
    htmlFor?: string;
    tag?: 'label' | 'div' | 'span';
    required?: boolean;
    cursor?: 'default' | 'pointer' | 'not-allowed';
    size?: 'sm' | 'md' | 'lg';
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        start?(_: {}): any;
        default?(_: {}): any;
        end?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    size: "sm" | "md" | "lg";
    tag: "label" | "div" | "span";
    cursor: "default" | "pointer" | "not-allowed";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
