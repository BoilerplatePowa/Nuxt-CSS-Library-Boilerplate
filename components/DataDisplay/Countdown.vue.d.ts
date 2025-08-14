interface Props {
    targetDate: Date | string;
    message?: string;
    showDays?: boolean;
    showHours?: boolean;
    showMinutes?: boolean;
    showSeconds?: boolean;
    showLabels?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    autoStart?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        message?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {
    start: () => void;
    stop: () => void;
    reset: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    complete: () => any;
    tick: (timeLeft: {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
        total: number;
    }) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onComplete?: (() => any) | undefined;
    onTick?: ((timeLeft: {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
        total: number;
    }) => any) | undefined;
}>, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    showDays: boolean;
    showHours: boolean;
    showMinutes: boolean;
    showSeconds: boolean;
    showLabels: boolean;
    autoStart: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
