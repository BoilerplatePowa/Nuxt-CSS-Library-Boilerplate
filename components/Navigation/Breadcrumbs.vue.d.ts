interface BreadcrumbItem {
    label: string;
    href?: string;
    icon?: string;
    value?: string | number;
    disabled?: boolean;
}
interface Props {
    items?: BreadcrumbItem[];
    size?: 'xs' | 'sm' | 'md' | 'lg';
    maxItems?: number;
    showHomeIcon?: boolean;
    separator?: string;
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
    "item-click": (item: BreadcrumbItem, index: number, event: Event) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onItem-click"?: ((item: BreadcrumbItem, index: number, event: Event) => any) | undefined;
}>, {
    size: "xs" | "sm" | "md" | "lg";
    items: BreadcrumbItem[];
    showHomeIcon: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
