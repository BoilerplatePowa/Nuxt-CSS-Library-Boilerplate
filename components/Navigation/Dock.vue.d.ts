interface DockItem {
    id?: string | number;
    label?: string;
    icon?: string;
    avatar?: string;
    badge?: string | number;
    disabled?: boolean;
    active?: boolean;
    href?: string;
    target?: string;
    [key: string]: unknown;
}
interface Props {
    items: DockItem[];
    position?: 'bottom' | 'top' | 'left' | 'right';
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'floating' | 'glass';
    showTooltips?: boolean;
    activeItem?: string | number;
    animated?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        item?(_: {
            item: DockItem;
            index: number;
            isActive: boolean;
        }): any;
        divider?(_: {}): any;
        additional?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    itemClick: (item: DockItem, index: number, event: Event) => any;
    itemHover: (item: DockItem, index: number) => any;
    itemLeave: (item: DockItem, index: number) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onItemClick?: ((item: DockItem, index: number, event: Event) => any) | undefined;
    onItemHover?: ((item: DockItem, index: number) => any) | undefined;
    onItemLeave?: ((item: DockItem, index: number) => any) | undefined;
}>, {
    variant: "default" | "floating" | "glass";
    size: "sm" | "md" | "lg";
    position: "bottom" | "top" | "left" | "right";
    animated: boolean;
    showTooltips: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
