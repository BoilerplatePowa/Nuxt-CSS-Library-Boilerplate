interface ListAction {
    label: string;
    variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
    size?: 'xs' | 'sm' | 'md';
    disabled?: boolean;
    handler?: () => void;
}
interface ListItem {
    id?: string | number;
    title?: string;
    subtitle?: string;
    description?: string;
    avatar?: string;
    avatarAlt?: string;
    icon?: string;
    badge?: string;
    meta?: string;
    disabled?: boolean;
    selectable?: boolean;
    selected?: boolean;
    actions?: ListAction[];
    [key: string]: unknown;
}
interface Props {
    items: ListItem[];
    variant?: 'default' | 'bordered' | 'hover' | 'zebra';
    size?: 'sm' | 'md' | 'lg';
    clickable?: boolean;
    selectable?: boolean;
    showEmpty?: boolean;
    dividers?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        item?(_: {
            item: ListItem;
            index: number;
        }): any;
        empty?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLUListElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    actionClick: (action: ListAction, item: ListItem, index: number, event: Event) => any;
    itemClick: (item: ListItem, index: number, event: Event) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onActionClick?: ((action: ListAction, item: ListItem, index: number, event: Event) => any) | undefined;
    onItemClick?: ((item: ListItem, index: number, event: Event) => any) | undefined;
}>, {
    size: "sm" | "md" | "lg";
    variant: "default" | "bordered" | "hover" | "zebra";
    selectable: boolean;
    clickable: boolean;
    showEmpty: boolean;
    dividers: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLUListElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
