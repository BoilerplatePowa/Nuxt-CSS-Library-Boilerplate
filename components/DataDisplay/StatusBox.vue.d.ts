interface StatusAction {
    label: string;
    variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
    size?: 'xs' | 'sm' | 'md';
    disabled?: boolean;
    handler?: () => void;
}
interface StatusBoxProps {
    variant?: 'success' | 'error' | 'warning' | 'info' | 'pending' | 'neutral';
    title?: string;
    message?: string;
    timestamp?: Date | string | number;
    showIndicator?: boolean;
    dismissible?: boolean;
    size?: 'sm' | 'md' | 'lg';
    actions?: StatusAction[];
    visible?: boolean;
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
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<StatusBoxProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    actionClick: (action: StatusAction, event: Event) => any;
    dismiss: () => any;
}, string, import('vue').PublicProps, Readonly<StatusBoxProps> & Readonly<{
    onActionClick?: ((action: StatusAction, event: Event) => any) | undefined;
    onDismiss?: (() => any) | undefined;
}>, {
    size: "sm" | "md" | "lg";
    variant: "success" | "error" | "warning" | "info" | "pending" | "neutral";
    visible: boolean;
    actions: StatusAction[];
    showIndicator: boolean;
    dismissible: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
