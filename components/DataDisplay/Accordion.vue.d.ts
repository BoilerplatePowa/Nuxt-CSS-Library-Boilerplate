interface AccordionItem {
    title: string;
    content?: string;
    value?: string | number;
    disabled?: boolean;
    defaultOpen?: boolean;
}
interface Props {
    items?: AccordionItem[];
    modelValue?: string | number;
    multiple?: boolean;
    variant?: 'default' | 'bordered' | 'compact';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<`item-${number}`, (_: {
        item: AccordionItem;
        index: number;
        isOpen: boolean;
    }) => any>> & {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | null) => any;
    "item-toggle": (item: AccordionItem, index: number, isOpen: boolean) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
    "onItem-toggle"?: ((item: AccordionItem, index: number, isOpen: boolean) => any) | undefined;
}>, {
    variant: "default" | "bordered" | "compact";
    size: "sm" | "md" | "lg";
    disabled: boolean;
    items: AccordionItem[];
    multiple: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
