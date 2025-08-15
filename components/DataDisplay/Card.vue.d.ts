interface Props {
    title?: string;
    subtitle?: string;
    variant?: 'normal' | 'bordered' | 'compact' | 'side' | 'outline';
    shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    imageFull?: boolean;
    imageOverlay?: boolean;
    glass?: boolean;
    interactive?: boolean;
    loading?: boolean;
    loadingText?: string;
    disabled?: boolean;
    selected?: boolean;
    badge?: string;
    badgeVariant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info';
    tag?: 'div' | 'article' | 'section';
    ariaLabel?: string;
    ariaDescribedby?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        image?(_: {}): any;
        'image-overlay'?(_: {}): any;
        header?(_: {}): any;
        headerActions?(_: {}): any;
        default?(_: {}): any;
        actions?(_: {}): any;
        footer?(_: {}): any;
        badge?(_: {}): any;
    };
    refs: {
        cardRef: unknown;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {
    focus: () => void | undefined;
    blur: () => void | undefined;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
    keydown: (event: KeyboardEvent) => any;
    mouseenter: (event: MouseEvent) => any;
    mouseleave: (event: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
    onKeydown?: ((event: KeyboardEvent) => any) | undefined;
    onMouseenter?: ((event: MouseEvent) => any) | undefined;
    onMouseleave?: ((event: MouseEvent) => any) | undefined;
}>, {
    variant: "normal" | "bordered" | "compact" | "side" | "outline";
    disabled: boolean;
    loading: boolean;
    glass: boolean;
    shadow: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
    tag: "div" | "article" | "section";
    imageFull: boolean;
    imageOverlay: boolean;
    interactive: boolean;
    selected: boolean;
    badgeVariant: "primary" | "secondary" | "accent" | "success" | "warning" | "error" | "info";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    cardRef: unknown;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
