interface DropdownItem {
    label: string;
    value?: string | number;
    href?: string;
    disabled?: boolean;
    divider?: boolean;
    active?: boolean;
}
interface Props {
    items?: DropdownItem[];
    triggerText?: string;
    position?: 'bottom' | 'top' | 'left' | 'right';
    align?: 'start' | 'end';
    hover?: boolean;
    forceOpen?: boolean;
    disabled?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        trigger?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "item-click": (item: DropdownItem, event: Event) => any;
    open: () => any;
    close: () => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onItem-click"?: ((item: DropdownItem, event: Event) => any) | undefined;
    onOpen?: (() => any) | undefined;
    onClose?: (() => any) | undefined;
}>, {
    variant: "primary" | "secondary" | "accent" | "ghost" | "outline";
    size: "xs" | "sm" | "md" | "lg";
    disabled: boolean;
    items: DropdownItem[];
    position: "bottom" | "top" | "left" | "right";
    align: "start" | "end";
    hover: boolean;
    forceOpen: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
