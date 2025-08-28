interface Props {
    variant?: 'rotate' | 'flip' | 'indeterminate';
    swapOnContent?: string;
    swapOffContent?: string;
    indeterminateContent?: string;
    disabled?: boolean;
    name?: string;
    id?: string;
}
type __VLS_Props = Props;
type __VLS_PublicProps = {
    modelValue?: boolean;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        indeterminate?(_: {}): any;
        on?(_: {}): any;
        off?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLLabelElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    name: string;
    id: string;
    variant: "rotate" | "flip" | "indeterminate";
    disabled: boolean;
    swapOnContent: string;
    swapOffContent: string;
    indeterminateContent: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLLabelElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
