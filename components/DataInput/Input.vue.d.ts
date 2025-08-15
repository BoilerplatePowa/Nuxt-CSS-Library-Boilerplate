interface Props {
    modelValue?: string | number;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local';
    label?: string;
    placeholder?: string;
    helpText?: string;
    errorMessage?: string;
    validationMessage?: string;
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;
    invalid?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    variant?: 'bordered' | 'ghost' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
    ariaDescribedby?: string;
    min?: string | number;
    max?: string | number;
    step?: string | number;
    pattern?: string;
    maxlength?: number;
    minlength?: number;
    autocomplete?: string;
    showPasswordToggle?: boolean;
    clearable?: boolean;
    showCharCount?: boolean;
    showValidation?: boolean;
    autoFocus?: boolean;
    debounceMs?: number;
    validateOnBlur?: boolean;
    validateOnInput?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        prefix?(_: {}): any;
        suffix?(_: {}): any;
    };
    refs: {
        inputRef: HTMLInputElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {
    focus: () => void | undefined;
    blur: () => void | undefined;
    select: () => void | undefined;
    clear: () => void;
    validate: () => boolean;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    keydown: (event: KeyboardEvent) => any;
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    input: (event: Event) => any;
    "update:modelValue": (value: string | number) => any;
    change: (event: Event) => any;
    clear: () => any;
    paste: (event: ClipboardEvent) => any;
    validate: (isValid: boolean) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onKeydown?: ((event: KeyboardEvent) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onInput?: ((event: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    onChange?: ((event: Event) => any) | undefined;
    onClear?: (() => any) | undefined;
    onPaste?: ((event: ClipboardEvent) => any) | undefined;
    onValidate?: ((isValid: boolean) => any) | undefined;
}>, {
    variant: "bordered" | "ghost" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
    size: "xs" | "sm" | "md" | "lg";
    disabled: boolean;
    type: "text" | "email" | "password" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local";
    debounceMs: number;
    autoFocus: boolean;
    required: boolean;
    invalid: boolean;
    readonly: boolean;
    showPasswordToggle: boolean;
    clearable: boolean;
    showCharCount: boolean;
    showValidation: boolean;
    validateOnBlur: boolean;
    validateOnInput: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
