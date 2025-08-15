interface Props {
    variant?: 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    text?: string;
    ariaLabel?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    variant: "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity";
    size: "xs" | "sm" | "md" | "lg";
    ariaLabel: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
