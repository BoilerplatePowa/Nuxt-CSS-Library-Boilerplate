interface StatAction {
    label: string;
    component?: string;
    props?: Record<string, any>;
    onClick?: () => void;
}
interface Props {
    title?: string;
    value?: string | number;
    description?: string;
    icon?: string;
    trend?: 'up' | 'down' | 'neutral';
    variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
    size?: 'sm' | 'md' | 'lg';
    actions?: StatAction[];
    prefix?: string;
    suffix?: string;
    formatNumber?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        icon?(_: {}): any;
        title?(_: {}): any;
        value?(_: {}): any;
        description?(_: {}): any;
        actions?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    size: "sm" | "md" | "lg";
    variant: "default" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
    trend: "up" | "down" | "neutral";
    formatNumber: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
