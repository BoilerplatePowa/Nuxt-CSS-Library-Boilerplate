interface CalendarEvent {
    title: string;
    color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info';
    [key: string]: unknown;
}
interface CalendarDay {
    day: number;
    date: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
    isSelected: boolean;
    isDisabled: boolean;
    events?: CalendarEvent[];
}
interface Props {
    modelValue?: Date | string | null;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'bordered' | 'filled';
    disabled?: boolean;
    readonly?: boolean;
    minDate?: Date | string;
    maxDate?: Date | string;
    disabledDates?: Date[] | string[];
    events?: Record<string, CalendarEvent[]>;
    allowMonthSelect?: boolean;
    allowYearSelect?: boolean;
    showToday?: boolean;
    yearRange?: [number, number];
    locale?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        footer?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: Date | null) => any;
    dayClick: (day: CalendarDay) => any;
    monthChange: (month: number, year: number) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: Date | null) => any) | undefined;
    onDayClick?: ((day: CalendarDay) => any) | undefined;
    onMonthChange?: ((month: number, year: number) => any) | undefined;
}>, {
    variant: "default" | "bordered" | "filled";
    size: "sm" | "md" | "lg";
    disabled: boolean;
    readonly: boolean;
    allowMonthSelect: boolean;
    allowYearSelect: boolean;
    showToday: boolean;
    yearRange: [number, number];
    locale: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
