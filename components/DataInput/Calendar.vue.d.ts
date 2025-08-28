interface Props {
    mode?: 'input' | 'inline';
    range?: boolean;
    placeholder?: string;
    format?: string;
    locale?: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'bordered' | 'filled';
    disabled?: boolean;
    readonly?: boolean;
    minDate?: Date | string;
    maxDate?: Date | string;
    disabledDates?: Date[] | string[];
    showTime?: boolean;
    timeStep?: number;
    allowMonthSelect?: boolean;
    allowYearSelect?: boolean;
    yearRange?: [number, number];
    errorMessage?: string;
}
type __VLS_Props = Props;
type __VLS_PublicProps = {
    modelValue?: Date | Date[] | null;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    error: (error: string) => any;
    close: () => any;
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    select: (date: Date | Date[]) => any;
    "update:modelValue": (value: Date | Date[] | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onError?: ((error: string) => any) | undefined;
    onClose?: (() => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onSelect?: ((date: Date | Date[]) => any) | undefined;
    "onUpdate:modelValue"?: ((value: Date | Date[] | null) => any) | undefined;
}>, {
    mode: "input" | "inline";
    range: boolean;
    size: "sm" | "md" | "lg";
    format: string;
    variant: "default" | "bordered" | "filled";
    disabled: boolean;
    placeholder: string;
    readonly: boolean;
    locale: string;
    showTime: boolean;
    timeStep: number;
    allowMonthSelect: boolean;
    allowYearSelect: boolean;
    yearRange: [number, number];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    calendarRef: HTMLDivElement;
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
export default _default;
