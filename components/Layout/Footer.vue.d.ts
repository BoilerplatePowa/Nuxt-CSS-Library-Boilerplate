interface FooterLink {
    label: string;
    href: string;
    external?: boolean;
}
interface FooterSection {
    title: string;
    items: FooterLink[];
}
interface SocialLink {
    name: string;
    href: string;
    icon?: string;
}
interface Props {
    variant?: 'default' | 'center' | 'grid';
    brandName?: string;
    brandDescription?: string;
    logo?: string;
    logoAlt?: string;
    links?: FooterSection[];
    social?: SocialLink[];
    showBranding?: boolean;
    showCopyright?: boolean;
    copyrightText?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    variant: "default" | "center" | "grid";
    logoAlt: string;
    showBranding: boolean;
    showCopyright: boolean;
    copyrightText: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
