interface Props {
    modelValue?: File | File[];
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
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    error: (message: string) => any;
    "update:modelValue": (value: File | File[]) => any;
    change: (files: File[]) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onError?: ((message: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: File | File[]) => any) | undefined;
    onChange?: ((files: File[]) => any) | undefined;
}>, {
    variant: "bordered" | "ghost" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
    size: "xs" | "sm" | "md" | "lg";
    disabled: boolean;
    required: boolean;
    multiple: boolean;
    showPreview: boolean;
    allowRemove: boolean;
    dropZone: boolean;
    dropZoneText: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    fileInputRef: HTMLInputElement;
}, HTMLDivElement>;
export default _default;
