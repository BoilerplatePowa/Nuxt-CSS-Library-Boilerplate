interface Props {
    title?: string;
    variant?: 'normal' | 'bordered' | 'compact' | 'side';
    shadow?: boolean;
    imageFull?: boolean;
    glass?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        image?(_: {}): any;
        header?(_: {}): any;
        default?(_: {}): any;
        actions?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    variant: "normal" | "bordered" | "compact" | "side";
    glass: boolean;
    shadow: boolean;
    imageFull: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
