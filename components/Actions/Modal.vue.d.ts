interface Props {
    modelValue: boolean;
    title?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    closable?: boolean;
    closeOnOverlay?: boolean;
    closeOnEsc?: boolean;
    persistent?: boolean;
    trapFocus?: boolean;
    returnFocus?: boolean;
    autoFocus?: boolean;
    zIndex?: number;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        header?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {
        overlayRef: HTMLDivElement;
        modalRef: HTMLDivElement;
        firstFocusableElement: HTMLDivElement;
        closeButtonRef: HTMLButtonElement;
        lastFocusableElement: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {
    open: () => void;
    close: () => void;
    focus: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    open: () => any;
    close: () => any;
    "update:modelValue": (value: boolean) => any;
    escape: () => any;
    "before-open": () => any;
    "after-open": () => any;
    "before-close": () => any;
    "after-close": () => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onOpen?: (() => any) | undefined;
    onClose?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onEscape?: (() => any) | undefined;
    "onBefore-open"?: (() => any) | undefined;
    "onAfter-open"?: (() => any) | undefined;
    "onBefore-close"?: (() => any) | undefined;
    "onAfter-close"?: (() => any) | undefined;
}>, {
    size: "sm" | "md" | "lg" | "xl" | "full";
    autoFocus: boolean;
    closable: boolean;
    closeOnOverlay: boolean;
    closeOnEsc: boolean;
    persistent: boolean;
    trapFocus: boolean;
    returnFocus: boolean;
    zIndex: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    overlayRef: HTMLDivElement;
    modalRef: HTMLDivElement;
    firstFocusableElement: HTMLDivElement;
    closeButtonRef: HTMLButtonElement;
    lastFocusableElement: HTMLDivElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
