interface Props {
    label?: string;
    helpText?: string;
    errorMessage?: string;
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    required?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    variant?: 'bordered' | 'ghost' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
    showPreview?: boolean;
    allowRemove?: boolean;
    dropZone?: boolean;
    dropZoneText?: string;
    maxFileSize?: number;
    ariaDescribedby?: string;
}
type __VLS_Props = Props;
type __VLS_PublicProps = {
    modelValue?: File | File[];
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    error: (message: string) => any;
    "update:modelValue": (value: File | File[]) => any;
    change: (files: File[]) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onError?: ((message: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: File | File[]) => any) | undefined;
    onChange?: ((files: File[]) => any) | undefined;
}>, {
    size: "xs" | "sm" | "md" | "lg";
    required: boolean;
    variant: "bordered" | "ghost" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
    disabled: boolean;
    multiple: boolean;
    showPreview: boolean;
    allowRemove: boolean;
    dropZone: boolean;
    dropZoneText: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    fileInputRef: HTMLInputElement;
}, HTMLDivElement>;
export default _default;
