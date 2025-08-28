interface FilterOption {
    label: string;
    value: string | number;
}
interface FilterControl {
    key: string;
    label?: string;
    type: 'text' | 'select' | 'multiselect' | 'range' | 'daterange' | 'boolean';
    value?: any;
    placeholder?: string;
    minPlaceholder?: string;
    maxPlaceholder?: string;
    options?: FilterOption[];
    size?: 'sm' | 'md' | 'lg';
}
interface FilterGroup {
    title?: string;
    layout?: 'vertical' | 'horizontal' | 'grid';
    filters: FilterControl[];
}
interface Props {
    filterGroups: FilterGroup[];
    title?: string;
    showHeader?: boolean;
    showActiveFilters?: boolean;
    collapsible?: boolean;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'bordered' | 'card';
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    filterChange: (filters: Record<string, any>) => any;
    filterClear: (key: string) => any;
    filterClearAll: () => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onFilterChange?: ((filters: Record<string, any>) => any) | undefined;
    onFilterClear?: ((key: string) => any) | undefined;
    onFilterClearAll?: (() => any) | undefined;
}>, {
    size: "sm" | "md" | "lg";
    variant: "default" | "bordered" | "card";
    showHeader: boolean;
    showActiveFilters: boolean;
    collapsible: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
