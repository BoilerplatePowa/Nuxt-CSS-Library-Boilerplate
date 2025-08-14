interface Props {
    value: number;
    max?: number;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    thickness?: 'thin' | 'medium' | 'thick';
    variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
    showValue?: boolean;
    valueFormat?: 'percentage' | 'fraction' | 'raw';
    label?: string;
    ariaLabel?: string;
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
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    variant: "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
    size: "xs" | "sm" | "md" | "lg" | "xl";
    max: number;
    showValue: boolean;
    valueFormat: "percentage" | "fraction" | "raw";
    thickness: "thin" | "medium" | "thick";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
