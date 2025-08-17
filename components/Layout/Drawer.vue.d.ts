interface Props {
    modelValue?: boolean;
    position?: 'left' | 'right' | 'top' | 'bottom';
    width?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    backdrop?: boolean;
    persistent?: boolean;
    showCloseButton?: boolean;
    id?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        content?(_: {
            toggle: () => void;
            open: () => void;
            close: () => void;
        }): any;
        drawer?(_: {
            close: () => void;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    open: () => any;
    close: () => any;
    "update:modelValue": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onOpen?: (() => any) | undefined;
    onClose?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    position: "left" | "right" | "top" | "bottom";
    id: string;
    modelValue: boolean;
    persistent: boolean;
    width: "sm" | "md" | "lg" | "xl" | "full";
    backdrop: boolean;
    showCloseButton: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
