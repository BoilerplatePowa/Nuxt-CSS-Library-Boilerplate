interface Props {
    currentPage: number;
    totalPages: number;
    totalItems?: number;
    itemsPerPage?: number;
    disabled?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    variant?: 'default' | 'outline' | 'ghost';
    showPageNumbers?: boolean;
    showFirstLast?: boolean;
    showLabels?: boolean;
    showInfo?: boolean;
    maxVisiblePages?: number;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'prev-icon'?(_: {}): any;
        'next-icon'?(_: {}): any;
        info?(_: {
            current: number;
            total: number;
            start: number;
            end: number;
            totalItems: number | undefined;
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "page-change": (page: number) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onPage-change"?: ((page: number) => any) | undefined;
}>, {
    variant: "default" | "outline" | "ghost";
    size: "xs" | "sm" | "md" | "lg";
    disabled: boolean;
    showLabels: boolean;
    itemsPerPage: number;
    showPageNumbers: boolean;
    showFirstLast: boolean;
    showInfo: boolean;
    maxVisiblePages: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
