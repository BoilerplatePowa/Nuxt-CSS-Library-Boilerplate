declare const CheckCircleIcon: {
    template: string;
};
declare const XCircleIcon: {
    template: string;
};
declare const ExclamationTriangleIcon: {
    template: string;
};
declare const InformationCircleIcon: {
    template: string;
};
export { CheckCircleIcon, XCircleIcon, ExclamationTriangleIcon, InformationCircleIcon };
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    type?: "success" | "error" | "warning" | "info";
    title?: string;
    message: string;
    duration?: number;
    closable?: boolean;
    persistent?: boolean;
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
    fixed?: boolean;
    autoFocus?: boolean;
    showProgress?: boolean;
    pauseOnHover?: boolean;
    announceToScreenReader?: boolean;
}, {
    close: () => void;
    pause: () => void;
    resume: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => any;
    "before-close": () => any;
    "after-close": () => any;
}, string, import('vue').PublicProps, Readonly<{
    type?: "success" | "error" | "warning" | "info";
    title?: string;
    message: string;
    duration?: number;
    closable?: boolean;
    persistent?: boolean;
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
    fixed?: boolean;
    autoFocus?: boolean;
    showProgress?: boolean;
    pauseOnHover?: boolean;
    announceToScreenReader?: boolean;
}> & Readonly<{
    onClose?: (() => any) | undefined;
    "onBefore-close"?: (() => any) | undefined;
    "onAfter-close"?: (() => any) | undefined;
}>, {
    fixed: boolean;
    type: "success" | "error" | "warning" | "info";
    autoFocus: boolean;
    closable: boolean;
    persistent: boolean;
    duration: number;
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
    showProgress: boolean;
    pauseOnHover: boolean;
    announceToScreenReader: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    toastRef: HTMLDivElement;
    closeButtonRef: HTMLButtonElement;
}, any>, {
    default?(_: {}): any;
    actions?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
