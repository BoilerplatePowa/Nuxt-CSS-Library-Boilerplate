interface Tab {
    label: string;
    value?: string | number;
    content?: string;
    disabled?: boolean;
    badge?: string | number;
}
interface Props {
    tabs?: Tab[];
    variant?: 'default' | 'bordered' | 'lifted' | 'boxed';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    disabled?: boolean;
}
type __VLS_Props = Props;
type __VLS_PublicProps = {
    modelValue?: string | number;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => any;
    "tab-change": (value: string | number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    "onTab-change"?: ((value: string | number) => any) | undefined;
}>, {
    size: "xs" | "sm" | "md" | "lg";
    variant: "default" | "bordered" | "lifted" | "boxed";
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
