interface Props {
    variant?: 'squircle' | 'heart' | 'hexagon' | 'hexagon-2' | 'decagon' | 'pentagon' | 'diamond' | 'square' | 'circle' | 'parallelogram' | 'parallelogram-2' | 'parallelogram-3' | 'parallelogram-4' | 'star' | 'star-2' | 'triangle' | 'triangle-2' | 'triangle-3' | 'triangle-4';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    variant: "squircle" | "heart" | "hexagon" | "hexagon-2" | "decagon" | "pentagon" | "diamond" | "square" | "circle" | "parallelogram" | "parallelogram-2" | "parallelogram-3" | "parallelogram-4" | "star" | "star-2" | "triangle" | "triangle-2" | "triangle-3" | "triangle-4";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
