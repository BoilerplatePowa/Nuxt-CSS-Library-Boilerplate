interface ThemeOption {
    value: string;
    label: string;
}
interface Props {
    variant?: 'button' | 'toggle' | 'switch' | 'dropdown' | 'radio';
    themes?: ThemeOption[];
    defaultTheme?: string;
    darkTheme?: string;
    lightTheme?: string;
    showLabel?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    radioName?: string;
    ariaLabel?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        icon?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    themeChange: (theme: string) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onThemeChange?: ((theme: string) => any) | undefined;
}>, {
    size: "xs" | "sm" | "md" | "lg";
    ariaLabel: string;
    variant: "button" | "toggle" | "switch" | "dropdown" | "radio";
    themes: ThemeOption[];
    defaultTheme: string;
    darkTheme: string;
    lightTheme: string;
    showLabel: boolean;
    radioName: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
