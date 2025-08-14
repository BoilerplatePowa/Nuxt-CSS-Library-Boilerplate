<template>
  <ul :class="stepsClasses">
    <slot>
      <li
        v-for="(step, index) in steps"
        :key="getStepKey(step, index)"
        :class="getStepClasses(step, index)"
        :data-content="getStepContent(step, index)"
      >
        <div class="step-content">
          <div v-if="step.title || step.description" class="text-center">
            <div v-if="step.title" class="font-medium">{{ step.title }}</div>
            <div v-if="step.description" class="text-sm opacity-70">{{ step.description }}</div>
          </div>
          <slot
            :name="`step-${index}`"
            :step="step"
            :index="index"
            :isActive="isStepActive(index)"
            :isCompleted="isStepCompleted(index)"
          />
        </div>
      </li>
    </slot>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Step {
  title?: string;
  description?: string;
  value?: string | number;
  icon?: string;
  content?: string;
  completed?: boolean;
  disabled?: boolean;
}

interface Props {
  steps?: Step[];
  currentStep?: number;
  variant?: 'default' | 'vertical';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  showNumbers?: boolean;
  color?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
}

const props = withDefaults(defineProps<Props>(), {
  steps: () => [],
  currentStep: 0,
  variant: 'default',
  size: 'md',
  showNumbers: true,
  color: 'primary',
});



const stepsClasses = computed(() => {
  const baseClasses = ['steps'];

  // Variant classes
  if (props.variant === 'vertical') {
    baseClasses.push('steps-vertical');
  } else {
    baseClasses.push('steps-horizontal');
  }

  // Size classes
  if (props.size === 'xs') {
    baseClasses.push('steps-xs');
  } else if (props.size === 'sm') {
    baseClasses.push('steps-sm');
  } else if (props.size === 'lg') {
    baseClasses.push('steps-lg');
  }

  return baseClasses.join(' ');
});

const getStepClasses = (step: Step, index: number): string => {
  const classes = ['step'];

  // Color classes
  if (isStepActive(index) || isStepCompleted(index)) {
    if (props.color === 'primary') {
      classes.push('step-primary');
    } else if (props.color === 'secondary') {
      classes.push('step-secondary');
    } else if (props.color === 'accent') {
      classes.push('step-accent');
    } else if (props.color === 'info') {
      classes.push('step-info');
    } else if (props.color === 'success') {
      classes.push('step-success');
    } else if (props.color === 'warning') {
      classes.push('step-warning');
    } else if (props.color === 'error') {
      classes.push('step-error');
    }
  }

  // State classes
  if (step.disabled) {
    classes.push('opacity-50', 'cursor-not-allowed');
  } else if (!isStepActive(index) && !isStepCompleted(index)) {
    classes.push('cursor-pointer');
  }

  return classes.join(' ');
};

const getStepContent = (step: Step, index: number): string => {
  if (step.icon) {
    return step.icon;
  }
  
  if (step.completed || isStepCompleted(index)) {
    return '✓';
  }
  
  if (props.showNumbers) {
    return (index + 1).toString();
  }
  
  return '';
};

const getStepKey = (step: Step, index: number): string => {
  return step.value?.toString() || step.title || index.toString();
};

const isStepActive = (index: number): boolean => {
  return index === props.currentStep;
};

const isStepCompleted = (index: number): boolean => {
  return index < props.currentStep || props.steps[index]?.completed === true;
};


</script>

<style scoped lang="postcss">
/* DaisyUI handles most steps styling */
.step-content {
  @apply mt-2;
}
</style>
