interface Props {
    title?: string;
    subtitle?: string;
    backgroundImage?: string;
    minHeight?: 'sm' | 'md' | 'lg' | 'xl' | 'screen';
    overlay?: boolean;
    overlayOpacity?: 'light' | 'medium' | 'dark';
    textColor?: 'default' | 'neutral' | 'primary' | 'white';
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        content?(_: {}): any;
        actions?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    minHeight: "sm" | "md" | "lg" | "xl" | "screen";
    overlay: boolean;
    overlayOpacity: "light" | "medium" | "dark";
    textColor: "default" | "neutral" | "primary" | "white";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
