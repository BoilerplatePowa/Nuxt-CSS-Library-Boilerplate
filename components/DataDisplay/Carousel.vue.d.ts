interface CarouselItem {
    image?: string;
    alt?: string;
    content?: string;
    value?: string | number;
}
interface Props {
    items: CarouselItem[];
    autoplay?: boolean;
    autoplayInterval?: number;
    loop?: boolean;
    showIndicators?: boolean;
    showArrows?: boolean;
    controllerPosition?: 'bottom' | 'sides';
    paginationType?: 'numbers' | 'dots' | 'line' | 'default';
    variant?: 'default' | 'full-width' | 'center' | 'vertical';
    indicatorVariant?: 'default' | 'filled' | 'outline' | 'ghost' | 'link';
    arrowVariant?: 'default' | 'filled' | 'outline' | 'ghost' | 'link' | 'glass';
    itemHeight?: string;
    gap?: string;
}
type __VLS_Props = Props;
type __VLS_PublicProps = {
    modelValue?: number;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<`carousel-item-${number}`, (_: {
        item: CarouselItem;
        index: number;
        isActive: boolean;
    }) => any>> & {
        'prev-arrow'?(_: {}): any;
        'prev-arrow'?(_: {}): any;
        'next-arrow'?(_: {}): any;
        'next-arrow'?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: number) => any;
    "item-click": (item: CarouselItem, index: number, event: Event) => any;
    "slide-change": (index: number, item: CarouselItem) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    "onItem-click"?: ((item: CarouselItem, index: number, event: Event) => any) | undefined;
    "onSlide-change"?: ((index: number, item: CarouselItem) => any) | undefined;
}>, {
    variant: "default" | "full-width" | "center" | "vertical";
    autoplay: boolean;
    autoplayInterval: number;
    loop: boolean;
    showIndicators: boolean;
    showArrows: boolean;
    controllerPosition: "bottom" | "sides";
    paginationType: "numbers" | "dots" | "line" | "default";
    indicatorVariant: "default" | "filled" | "outline" | "ghost" | "link";
    arrowVariant: "default" | "filled" | "outline" | "ghost" | "link" | "glass";
    itemHeight: string;
    gap: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
