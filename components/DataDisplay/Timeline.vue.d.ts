interface TimelineItem {
    id?: string | number;
    title?: string;
    timestamp?: string;
    description?: string;
    icon?: string | unknown;
    [key: string]: unknown;
}
interface Props {
    items: TimelineItem[];
    direction?: 'vertical' | 'horizontal';
    compact?: boolean;
    snapIcon?: boolean;
    variant?: 'simple' | 'complex';
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        start?(_: {
            item: TimelineItem;
            index: number;
        }): any;
        middle?(_: {
            item: TimelineItem;
            index: number;
        }): any;
        end?(_: {
            item: TimelineItem;
            index: number;
        }): any;
    };
    refs: {};
    rootEl: HTMLUListElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    direction: "vertical" | "horizontal";
    variant: "simple" | "complex";
    compact: boolean;
    snapIcon: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLUListElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
