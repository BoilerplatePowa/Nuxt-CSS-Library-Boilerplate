export interface ToastOptions {
    type?: 'success' | 'error' | 'warning' | 'info';
    title?: string;
    duration?: number;
    closable?: boolean;
}
export declare function useToast(): {
    toasts: Readonly<import('vue').Ref<readonly {
        readonly id: string | number;
        readonly type?: "success" | "error" | "warning" | "info" | undefined;
        readonly title?: string | undefined;
        readonly message: string;
        readonly duration?: number | undefined;
        readonly closable?: boolean | undefined;
        readonly timestamp: number;
    }[], readonly {
        readonly id: string | number;
        readonly type?: "success" | "error" | "warning" | "info" | undefined;
        readonly title?: string | undefined;
        readonly message: string;
        readonly duration?: number | undefined;
        readonly closable?: boolean | undefined;
        readonly timestamp: number;
    }[]>>;
    addToast: (message: string, options?: ToastOptions) => string | number;
    removeToast: (id: string | number) => void;
    clearAll: () => void;
    success: (message: string, options?: Omit<ToastOptions, "type">) => string | number;
    error: (message: string, options?: Omit<ToastOptions, "type">) => string | number;
    warning: (message: string, options?: Omit<ToastOptions, "type">) => string | number;
    info: (message: string, options?: Omit<ToastOptions, "type">) => string | number;
};
export default useToast;
