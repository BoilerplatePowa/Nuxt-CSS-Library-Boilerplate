import { IconName, Variant } from '../../../../../../../../src/shared/types.d';
interface WizardStep {
    title: string;
    description?: string;
    schema?: any;
    icon?: IconName;
    value?: string | number;
}
interface FormWizardProps {
    steps: WizardStep[];
    stepData?: Record<string, any>;
    showSteps?: boolean;
    stepsVariant?: 'default' | 'vertical';
    stepsColor?: Variant;
    showStepNumbers?: boolean;
    nextButtonText?: string;
    previousButtonText?: string;
    submitButtonText?: string;
    showProgress?: boolean;
    showSummary?: boolean;
    validateOnStepChange?: boolean;
    ariaLabel?: string;
}
type __VLS_Props = FormWizardProps;
type __VLS_PublicProps = {
    modelValue?: number;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<`step-${number}`, (_: {
        step: number;
        stepData: any;
        allStepData: Record<string, any>;
        errors: Partial<Record<string, string | undefined>>;
        meta: import('vee-validate').FormMeta<import('vee-validate').GenericObject>;
        isFirstStep: boolean;
        isLastStep: boolean;
        totalSteps: number;
    }) => any>>;
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {
    goToStep: (stepIndex: number) => void;
    goToNextStep: () => Promise<void>;
    goToPreviousStep: () => void;
    reset: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: number) => any;
    "step-change": (step: number, previousStep: number) => any;
    "step-complete": (step: number, data: any) => any;
    "wizard-complete": (data: Record<string, any>) => any;
    "wizard-cancel": () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    "onStep-change"?: ((step: number, previousStep: number) => any) | undefined;
    "onStep-complete"?: ((step: number, data: any) => any) | undefined;
    "onWizard-complete"?: ((data: Record<string, any>) => any) | undefined;
    "onWizard-cancel"?: (() => any) | undefined;
}>, {
    ariaLabel: string;
    stepData: Record<string, any>;
    showSteps: boolean;
    stepsVariant: "default" | "vertical";
    stepsColor: Variant;
    showStepNumbers: boolean;
    nextButtonText: string;
    previousButtonText: string;
    submitButtonText: string;
    showProgress: boolean;
    showSummary: boolean;
    validateOnStepChange: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
