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
    closeOnSelect?: boolean;
    autoFocus?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        trigger?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {
        dropdownRef: HTMLDivElement;
        triggerRef: HTMLDivElement;
        menuRef: HTMLUListElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {
    open: () => void;
    close: () => void;
    toggle: () => void;
    focus: () => void | undefined;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => any;
    "item-click": (item: DropdownItem, event: Event) => any;
    open: () => any;
    "update:open": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onClose?: (() => any) | undefined;
    "onItem-click"?: ((item: DropdownItem, event: Event) => any) | undefined;
    onOpen?: (() => any) | undefined;
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
}>, {
    size: "xs" | "sm" | "md" | "lg";
    variant: "primary" | "secondary" | "accent" | "ghost" | "outline";
    disabled: boolean;
    autoFocus: boolean;
    items: DropdownItem[];
    position: "bottom" | "top" | "left" | "right";
    align: "start" | "end";
    hover: boolean;
    forceOpen: boolean;
    closeOnSelect: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    dropdownRef: HTMLDivElement;
    triggerRef: HTMLDivElement;
    menuRef: HTMLUListElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
