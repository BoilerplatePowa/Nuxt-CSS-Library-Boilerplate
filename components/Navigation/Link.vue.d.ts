interface Props {
    href?: string;
    to?: string | object;
    target?: '_blank' | '_self' | '_parent' | '_top';
    rel?: string;
    variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'neutral' | 'hover';
    disabled?: boolean;
    external?: boolean;
    tag?: string;
    ariaLabel?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'icon-left'?(_: {}): any;
        default?(_: {}): any;
        'icon-right'?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (event: Event) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onClick?: ((event: Event) => any) | undefined;
}>, {
    variant: "default" | "primary" | "secondary" | "accent" | "neutral" | "hover";
    disabled: boolean;
    tag: string;
    external: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
