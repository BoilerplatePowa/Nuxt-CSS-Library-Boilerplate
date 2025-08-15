interface Props {
    title?: string;
    subtitle?: string;
    description?: string;
    badge?: string;
    backgroundImage?: string;
    videoSrc?: string;
    videoPoster?: string;
    minHeight?: 'sm' | 'md' | 'lg' | 'xl' | 'screen' | 'auto';
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
    alignment?: 'left' | 'center' | 'right';
    verticalAlignment?: 'top' | 'center' | 'bottom';
    overlay?: boolean;
    overlayOpacity?: 'light' | 'medium' | 'dark';
    overlayColor?: 'black' | 'primary' | 'secondary' | 'accent';
    textColor?: 'default' | 'neutral' | 'primary' | 'white' | 'contrast';
    parallax?: boolean;
    showScrollIndicator?: boolean;
    responsive?: boolean;
    fullWidth?: boolean;
    ariaLabel?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        content?(_: {}): any;
        badge?(_: {}): any;
        description?(_: {}): any;
        actions?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    fullWidth: boolean;
    minHeight: "sm" | "md" | "lg" | "xl" | "screen" | "auto";
    maxWidth: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
    alignment: "left" | "center" | "right";
    verticalAlignment: "top" | "center" | "bottom";
    overlay: boolean;
    overlayOpacity: "light" | "medium" | "dark";
    overlayColor: "black" | "primary" | "secondary" | "accent";
    textColor: "default" | "neutral" | "primary" | "white" | "contrast";
    parallax: boolean;
    showScrollIndicator: boolean;
    responsive: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
