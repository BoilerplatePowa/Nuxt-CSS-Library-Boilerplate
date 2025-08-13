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
declare const _default: import('vue').DefineComponent<{
    type?: "success" | "error" | "warning" | "info";
    title?: string;
    message: string;
    duration?: number;
    closable?: boolean;
    persistent?: boolean;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => any;
}, string, import('vue').PublicProps, Readonly<{
    type?: "success" | "error" | "warning" | "info";
    title?: string;
    message: string;
    duration?: number;
    closable?: boolean;
    persistent?: boolean;
}> & Readonly<{
    onClose?: (() => any) | undefined;
}>, {
    type: "success" | "error" | "warning" | "info";
    closable: boolean;
    persistent: boolean;
    duration: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
