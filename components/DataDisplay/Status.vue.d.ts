interface StatusAction {
    label: string;
    variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
    size?: 'xs' | 'sm' | 'md';
    disabled?: boolean;
    handler?: () => void;
}
interface Props {
    variant?: 'success' | 'error' | 'warning' | 'info' | 'pending' | 'neutral';
    title?: string;
    message?: string;
    timestamp?: Date | string | number;
    showIndicator?: boolean;
    dismissible?: boolean;
    size?: 'sm' | 'md' | 'lg';
    layout?: 'horizontal' | 'vertical';
    actions?: StatusAction[];
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        indicator?(_: {}): any;
        title?(_: {}): any;
        default?(_: {}): any;
        actions?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    actionClick: (action: StatusAction, event: Event) => any;
    dismiss: () => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onActionClick?: ((action: StatusAction, event: Event) => any) | undefined;
    onDismiss?: (() => any) | undefined;
}>, {
    variant: "success" | "error" | "warning" | "info" | "pending" | "neutral";
    size: "sm" | "md" | "lg";
    actions: StatusAction[];
    showIndicator: boolean;
    dismissible: boolean;
    layout: "horizontal" | "vertical";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
