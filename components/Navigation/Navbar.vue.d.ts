interface Props {
    title?: string;
    logo?: string;
    logoAlt?: string;
    logoHref?: string;
    variant?: 'default' | 'sticky' | 'glass';
    shadow?: boolean;
    showMobileMenu?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        start?(_: {}): any;
        'mobile-menu'?(_: {}): any;
        center?(_: {}): any;
        end?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    variant: "default" | "sticky" | "glass";
    shadow: boolean;
    logoAlt: string;
    logoHref: string;
    showMobileMenu: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
