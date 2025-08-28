import { IconName, Variant } from '../../../../../../../../src/shared/types.d';
interface Step {
    title?: string;
    description?: string;
    value?: string | number;
    icon?: IconName;
    content?: string;
    completed?: boolean;
    disabled?: boolean;
}
interface Props {
    steps?: Step[];
    currentStep?: number;
    variant?: 'default' | 'vertical';
    showNumbers?: boolean;
    color?: Variant;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<`step-${number}`, (_: {
        step: Step;
        index: number;
        isActive: boolean;
        isCompleted: boolean;
    }) => any>> & {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLUListElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    color: Variant;
    variant: "default" | "vertical";
    steps: Step[];
    currentStep: number;
    showNumbers: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLUListElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
