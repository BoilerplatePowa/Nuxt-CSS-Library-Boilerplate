interface Props {
    range?: boolean;
    minDate?: Date | string;
    maxDate?: Date | string;
    disabledDates?: Date[] | string[];
    locale?: string;
    format?: string;
    showTime?: boolean;
    timeStep?: number;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'bordered' | 'filled';
    allowMonthSelect?: boolean;
    allowYearSelect?: boolean;
    yearRange?: [number, number];
    disabled?: boolean;
}
type __VLS_Props = Props;
type __VLS_PublicProps = {
    modelValue?: Date | Date[] | null;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => any;
    "update:modelValue": (value: Date | Date[] | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onClose?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: Date | Date[] | null) => any) | undefined;
}>, {
    range: boolean;
    size: "sm" | "md" | "lg";
    format: string;
    variant: "default" | "bordered" | "filled";
    disabled: boolean;
    locale: string;
    showTime: boolean;
    timeStep: number;
    allowMonthSelect: boolean;
    allowYearSelect: boolean;
    yearRange: [number, number];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
