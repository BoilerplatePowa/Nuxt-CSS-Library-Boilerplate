interface Tab {
    label: string;
    value?: string | number;
    content?: string;
    disabled?: boolean;
    badge?: string | number;
}
interface Props {
    tabs?: Tab[];
    modelValue?: string | number;
    variant?: 'default' | 'bordered' | 'lifted' | 'boxed';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    disabled?: boolean;
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
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => any;
    "tab-change": (value: string | number) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    "onTab-change"?: ((value: string | number) => any) | undefined;
}>, {
    variant: "default" | "bordered" | "lifted" | "boxed";
    size: "xs" | "sm" | "md" | "lg";
    disabled: boolean;
    tabs: Tab[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
