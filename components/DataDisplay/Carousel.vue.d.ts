interface CarouselItem {
    image?: string;
    alt?: string;
    content?: string;
    value?: string | number;
}
interface Props {
    items: CarouselItem[];
    modelValue?: number;
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
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "item-click": (item: CarouselItem, index: number, event: Event) => any;
    "update:modelValue": (value: number) => any;
    "slide-change": (index: number, item: CarouselItem) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onItem-click"?: ((item: CarouselItem, index: number, event: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    "onSlide-change"?: ((index: number, item: CarouselItem) => any) | undefined;
}>, {
    variant: "default" | "full-width" | "center" | "vertical";
    modelValue: number;
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
