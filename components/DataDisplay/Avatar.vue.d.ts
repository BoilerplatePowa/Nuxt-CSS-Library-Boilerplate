interface Props {
    src?: string;
    alt?: string;
    name?: string;
    placeholder?: string;
    initials?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    shape?: 'circle' | 'square' | 'rounded';
    presence?: 'online' | 'offline' | 'away' | 'busy';
    online?: boolean;
    showPresence?: boolean;
    ring?: boolean;
    ringColor?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'error';
    badge?: string;
    count?: number;
    loading?: boolean;
    lazy?: boolean;
    fallbackColor?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'random';
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
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    imageLoad: () => any;
    imageError: () => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onImageLoad?: (() => any) | undefined;
    onImageError?: (() => any) | undefined;
}>, {
    size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    loading: boolean;
    shape: "circle" | "square" | "rounded";
    showPresence: boolean;
    ring: boolean;
    ringColor: "primary" | "secondary" | "accent" | "neutral" | "success" | "warning" | "error";
    lazy: boolean;
    fallbackColor: "primary" | "secondary" | "accent" | "neutral" | "random";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
