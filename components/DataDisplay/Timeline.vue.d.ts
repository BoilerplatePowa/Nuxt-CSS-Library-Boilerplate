interface TimelineAction {
    label: string;
    variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
    size?: 'xs' | 'sm' | 'md';
    disabled?: boolean;
    handler?: () => void;
}
interface TimelineItem {
    id?: string | number;
    title?: string;
    description?: string;
    timestamp?: Date | string | number;
    status?: 'pending' | 'active' | 'completed' | 'error' | 'warning';
    icon?: string;
    actions?: TimelineAction[];
    [key: string]: unknown;
}
interface Props {
    items: TimelineItem[];
    orientation?: 'vertical' | 'horizontal';
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'compact' | 'detailed';
    showConnectors?: boolean;
    snapToSides?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        marker?(_: {
            item: TimelineItem;
            index: number;
        }): any;
        item?(_: {
            item: TimelineItem;
            index: number;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    actionClick: (action: TimelineAction, item: TimelineItem, index: number, event: Event) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onActionClick?: ((action: TimelineAction, item: TimelineItem, index: number, event: Event) => any) | undefined;
}>, {
    variant: "default" | "compact" | "detailed";
    size: "sm" | "md" | "lg";
    orientation: "vertical" | "horizontal";
    showConnectors: boolean;
    snapToSides: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
