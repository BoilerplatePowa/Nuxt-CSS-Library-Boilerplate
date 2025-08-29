interface TableColumn {
    key: string;
    title: string;
    sortable?: boolean;
    width?: string;
    align?: 'left' | 'center' | 'right';
    format?: 'text' | 'number' | 'currency' | 'date' | 'boolean';
    component?: string;
    componentProps?: Record<string, any>;
}
interface Props {
    columns: TableColumn[];
    data?: Record<string, any>[];
    size?: 'xs' | 'sm' | 'md' | 'lg';
    variant?: 'default' | 'zebra' | 'compact' | 'bordered';
    selectable?: boolean;
    hoverable?: boolean;
    loading?: boolean;
    showHeader?: boolean;
    emptyText?: string;
    rowKey?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<`cell-${string}`, (_: {
        row: Record<string, any>;
        column: TableColumn;
        value: any;
        index: number;
    }) => any>> & {
        default?(_: {}): any;
        empty?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "row-click": (row: Record<string, any>, index: number, event: Event) => any;
    "sort-change": (column: TableColumn, order: "desc" | "asc") => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onRow-click"?: ((row: Record<string, any>, index: number, event: Event) => any) | undefined;
    "onSort-change"?: ((column: TableColumn, order: "desc" | "asc") => any) | undefined;
}>, {
    size: "xs" | "sm" | "md" | "lg";
    variant: "default" | "zebra" | "compact" | "bordered";
    loading: boolean;
    data: Record<string, any>[];
    selectable: boolean;
    hoverable: boolean;
    showHeader: boolean;
    emptyText: string;
    rowKey: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
