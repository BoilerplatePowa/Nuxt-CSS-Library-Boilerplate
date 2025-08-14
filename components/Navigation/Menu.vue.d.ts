interface MenuItem {
    label?: string;
    value?: string | number;
    href?: string;
    icon?: string;
    badge?: string | number;
    disabled?: boolean;
    active?: boolean;
    title?: string;
    divider?: boolean;
    children?: MenuItem[];
}
interface Props {
    items?: MenuItem[];
    size?: 'xs' | 'sm' | 'md' | 'lg';
    variant?: 'default' | 'compact' | 'horizontal';
    rounded?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLUListElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "item-click": (item: MenuItem, event: Event) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onItem-click"?: ((item: MenuItem, event: Event) => any) | undefined;
}>, {
    variant: "default" | "compact" | "horizontal";
    size: "xs" | "sm" | "md" | "lg";
    items: MenuItem[];
    rounded: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLUListElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
