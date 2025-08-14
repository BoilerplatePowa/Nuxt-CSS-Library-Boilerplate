interface Props {
    variant?: 'info' | 'success' | 'warning' | 'error';
    title?: string;
    message?: string;
    dismissible?: boolean;
    showDefaultIcon?: boolean;
    icon?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        icon?(_: {}): any;
        title?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    dismiss: () => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onDismiss?: (() => any) | undefined;
}>, {
    variant: "info" | "success" | "warning" | "error";
    dismissible: boolean;
    showDefaultIcon: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
