export interface ToastItem {
    id: string | number;
    type?: 'success' | 'error' | 'warning' | 'info';
    title?: string;
    message: string;
    duration?: number;
    closable?: boolean;
    timestamp: number;
}
interface Props {
    toasts?: ToastItem[];
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
    maxToasts?: number;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "remove-toast": (id: string | number) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onRemove-toast"?: ((id: string | number) => any) | undefined;
}>, {
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
    toasts: ToastItem[];
    maxToasts: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
