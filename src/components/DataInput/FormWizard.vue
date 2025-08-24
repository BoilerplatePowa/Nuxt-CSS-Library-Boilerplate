<template>
  <div :class="wrapperClasses">
    <!-- Wizard Header with Steps -->
    <div v-if="showSteps" class="mb-8">
      <Steps
        :steps="wizardSteps"
        :current-step="currentStep"
        :variant="stepsVariant"
        :size="stepsSize"
        :show-numbers="showStepNumbers"
        :color="stepsColor"
      />
    </div>

    <!-- Form Container -->
    <Form
      :validation-schema="currentStepSchema"
      @submit="handleStepSubmit"
      v-slot="{ handleSubmit, errors, meta }"
    >
      <form @submit="handleSubmit">
        <!-- Step Content -->
        <div class="step-content">
          <slot
            :name="`step-${currentStep}`"
            :step="currentStep"
            :step-data="stepData"
            :errors="errors"
            :meta="meta"
            :is-first-step="isFirstStep"
            :is-last-step="isLastStep"
            :total-steps="totalSteps"
          >
            <!-- Default step content -->
            <div class="default-step-content">
              <div class="avatar placeholder mb-6">
                <div class="bg-neutral text-neutral-content rounded-full w-16">
                  <Icon name="settings" size="lg" />
                </div>
              </div>
              <h3 class="default-step-title">
                Step {{ currentStep + 1 }}: {{ currentStepTitle }}
              </h3>
              <p class="default-step-description">
                {{ currentStepDescription }}
              </p>
            </div>
          </slot>
        </div>

        <!-- Navigation Buttons -->
        <div class="navigation-buttons">
          <!-- Previous Button -->
          <Button
            v-if="!isFirstStep"
            type="button"
            variant="outline"
            size="sm"
            :disabled="isNavigating"
            @click="goToPreviousStep"
          >
            <Icon name="chevron-left" size="sm" />
            <span class="hidden sm:inline">{{ previousButtonText }}</span>
          </Button>
          <div v-else class="flex-1"></div>

          <!-- Next/Submit Button -->
          <Button
            type="submit"
            :variant="isLastStep ? 'success' : 'primary'"
            size="sm"
            :disabled="isNavigating || !meta.valid"
            :loading="isNavigating"
            :icon-right="isLastStep ? 'check' : 'chevron-right'"
          >
            <span>{{ isLastStep ? submitButtonText : nextButtonText }}</span>
          </Button>
        </div>

        <!-- Step Progress Info -->
        <div v-if="showProgress" class="progress-info">
          <div class="text-sm text-base-content/60 mb-2">
            Step {{ currentStep + 1 }} of {{ totalSteps }}
          </div>
          <Progress 
            :value="progressPercentage" 
            :max="100" 
            size="sm" 
            class="progress-bar"
          />
        </div>
      </form>
    </Form>

    <!-- Step Summary (Optional) -->
    <div v-if="showSummary && !isFirstStep" class="step-summary">
      <h4 class="summary-header">
        <Icon name="check-circle" size="sm" class="summary-icon" />
        Previous Steps Summary
      </h4>
      <div class="summary-list">
        <div 
          v-for="(step, index) in completedSteps" 
          :key="index"
          class="summary-item"
        >
          <div class="summary-item-left">
            <div class="badge badge-success badge-sm">
              <Icon name="check" size="xs" class="summary-check-icon" />
            </div>
            <span class="text-sm font-medium">{{ step.title }}</span>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="xs"
            @click="goToStep(index)"
          >
            <Icon name="edit" size="xs" />
            <span class="hidden sm:inline ml-1">Edit</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { Form } from 'vee-validate';
import * as yup from 'yup';
import Steps from '../Navigation/Steps.vue';
import Button from '../Actions/Button.vue';
import Icon from '../Icons/Icon.vue';
import Progress from '../Feedback/Progress.vue';
import type { Size, Variant } from '@/shared/types.d';

interface WizardStep {
  title: string;
  description?: string;
  schema?: any;
  icon?: string;
  value?: string | number;
}

interface FormWizardProps {
  // Steps configuration
  steps: WizardStep[];
  // Current step (0-based index)
  modelValue?: number;
  // Step data for each step
  stepData?: Record<string, any>;
  // Steps display options
  showSteps?: boolean;
  stepsVariant?: 'default' | 'vertical';
  stepsSize?: Size;
  stepsColor?: Variant;
  showStepNumbers?: boolean;
  // Navigation options
  nextButtonText?: string;
  previousButtonText?: string;
  submitButtonText?: string;
  // Progress options
  showProgress?: boolean;
  showSummary?: boolean;
  // Validation options
  validateOnStepChange?: boolean;
  // Accessibility
  ariaLabel?: string;
}

const props = withDefaults(defineProps<FormWizardProps>(), {
  steps: () => [],
  modelValue: 0,
  stepData: () => ({}),
  showSteps: true,
  stepsVariant: 'default',
  stepsSize: 'md',
  stepsColor: 'primary',
  showStepNumbers: true,
  nextButtonText: 'Next',
  previousButtonText: 'Previous',
  submitButtonText: 'Submit',
  showProgress: true,
  showSummary: true,
  validateOnStepChange: true,
  ariaLabel: 'Multi-step form wizard'
});

const emit = defineEmits<{
  'update:modelValue': [step: number];
  'step-change': [step: number, previousStep: number];
  'step-complete': [step: number, data: any];
  'wizard-complete': [data: Record<string, any>];
  'wizard-cancel': [];
}>();

// Current step state
const currentStep = computed({
  get: () => props.modelValue,
  set: (value: number) => emit('update:modelValue', value)
});

// Navigation state
const isNavigating = ref(false);

// Computed properties
const totalSteps = computed(() => props.steps.length);
const isFirstStep = computed(() => currentStep.value === 0);
const isLastStep = computed(() => currentStep.value === totalSteps.value - 1);
const progressPercentage = computed(() => 
  ((currentStep.value + 1) / totalSteps.value) * 100
);

const currentStepTitle = computed(() => 
  props.steps[currentStep.value]?.title || `Step ${currentStep.value + 1}`
);

const currentStepDescription = computed(() => 
  props.steps[currentStep.value]?.description || ''
);

const currentStepSchema = computed(() => 
  props.steps[currentStep.value]?.schema || yup.object({})
);

const wizardSteps = computed(() => 
  props.steps.map((step, index) => ({
    title: step.title,
    description: step.description,
    value: step.value || index,
    icon: step.icon,
    completed: index < currentStep.value
  }))
);

const completedSteps = computed(() => 
  props.steps.slice(0, currentStep.value)
);

const wrapperClasses = computed(() => [
  'form-wizard',
  'w-full',
  'max-w-4xl',
  'mx-auto'
]);

// Navigation methods
const goToNextStep = async () => {
  if (isLastStep.value) {
    await handleWizardComplete();
    return;
  }

  isNavigating.value = true;
  
  try {
    // Emit step complete event
    emit('step-complete', currentStep.value, props.stepData);
    
    // Move to next step
    const nextStep = currentStep.value + 1;
    const previousStep = currentStep.value;
    
    currentStep.value = nextStep;
    emit('step-change', nextStep, previousStep);
  } finally {
    isNavigating.value = false;
  }
};

const goToPreviousStep = () => {
  if (isFirstStep.value) return;

  const previousStep = currentStep.value - 1;
  const currentStepIndex = currentStep.value;
  
  currentStep.value = previousStep;
  emit('step-change', previousStep, currentStepIndex);
};

const goToStep = (stepIndex: number) => {
  if (stepIndex === currentStep.value) return;
  
  const previousStep = currentStep.value;
  currentStep.value = stepIndex;
  emit('step-change', stepIndex, previousStep);
};

// Form submission handlers
const handleStepSubmit = async (values: any) => {
  isNavigating.value = true;
  
  try {
    // Store step data
    const updatedStepData = {
      ...props.stepData,
      [`step_${currentStep.value}`]: values
    };
    
    // Emit step complete event
    emit('step-complete', currentStep.value, values);
    
    // Move to next step or complete wizard
    await goToNextStep();
  } finally {
    isNavigating.value = false;
  }
};

const handleWizardComplete = async () => {
  // Collect all step data
  const allData = {
    ...props.stepData,
    completedAt: new Date().toISOString()
  };
  
  emit('wizard-complete', allData);
};

// Watch for external step changes
watch(() => props.modelValue, (newStep, oldStep) => {
  if (newStep !== oldStep && oldStep !== undefined) {
    emit('step-change', newStep, oldStep);
  }
});

// Expose methods for parent components
defineExpose({
  goToStep,
  goToNextStep,
  goToPreviousStep,
  reset: () => {
    currentStep.value = 0;
  }
});
</script>

<!-- Styles are imported from src/assets/css/form-wizard.css -->
