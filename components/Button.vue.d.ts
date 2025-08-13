interface Props {
    variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline' | 'link';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    disabled?: boolean;
    loading?: boolean;
    type?: 'button' | 'submit' | 'reset';
    fullWidth?: boolean;
    ariaLabel?: string;
    ariaPressed?: boolean;
    ariaExpanded?: boolean;
    ariaDescribedby?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'icon-left'?(_: {}): any;
        default?(_: {}): any;
        'icon-right'?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLButtonElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
    keydown: (event: KeyboardEvent) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
    onKeydown?: ((event: KeyboardEvent) => any) | undefined;
}>, {
    variant: "primary" | "secondary" | "accent" | "ghost" | "outline" | "link";
    size: "xs" | "sm" | "md" | "lg";
    disabled: boolean;
    loading: boolean;
    type: "button" | "submit" | "reset";
    fullWidth: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLButtonElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
