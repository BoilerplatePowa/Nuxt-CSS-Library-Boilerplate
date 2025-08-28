import { IconName, Size } from '../../../../../../../../src/shared/types.d';
interface Props {
    variant?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'ghost' | 'outline' | 'link' | 'info' | 'success' | 'warning' | 'error';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    disabled?: boolean;
    loading?: boolean;
    loadingText?: string;
    hideTextOnLoading?: boolean;
    type?: 'button' | 'submit' | 'reset';
    fullWidth?: boolean;
    circle?: boolean;
    square?: boolean;
    glass?: boolean;
    noAnimation?: boolean;
    ariaLabel?: string;
    ariaPressed?: boolean;
    ariaExpanded?: boolean;
    ariaDescribedby?: string;
    debounceMs?: number;
    confirmAction?: boolean;
    confirmText?: string;
    autoFocus?: boolean;
    iconLeft?: IconName;
    iconRight?: IconName;
    iconSize?: Size | number;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'icon-left'?(_: {}): any;
        default?(_: {}): any;
        'icon-right'?(_: {}): any;
    };
    refs: {
        buttonRef: HTMLButtonElement;
    };
    rootEl: HTMLButtonElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {
    focus: () => void | undefined;
    blur: () => void | undefined;
    click: () => void | undefined;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
    keydown: (event: KeyboardEvent) => any;
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
    onKeydown?: ((event: KeyboardEvent) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
}>, {
    size: "xs" | "sm" | "md" | "lg";
    type: "button" | "submit" | "reset";
    variant: "primary" | "secondary" | "accent" | "neutral" | "ghost" | "outline" | "link" | "info" | "success" | "warning" | "error";
    disabled: boolean;
    loading: boolean;
    loadingText: string;
    hideTextOnLoading: boolean;
    fullWidth: boolean;
    circle: boolean;
    square: boolean;
    glass: boolean;
    noAnimation: boolean;
    debounceMs: number;
    confirmAction: boolean;
    confirmText: string;
    autoFocus: boolean;
    iconSize: Size | number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    buttonRef: HTMLButtonElement;
}, HTMLButtonElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
