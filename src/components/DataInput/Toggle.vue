<template>
  <div class="form-control">
    <label v-if="label" :class="labelClasses">
      <span class="label-text">{{ label }}</span>
      <input
        :id="inputId"
        v-model="checked"
        type="checkbox"
        :class="toggleClasses"
        :disabled="disabled"
        :required="required"
        :aria-describedby="ariaDescribedby"
        @change="handleChange"
      />
    </label>
    <input
      v-else
      :id="inputId"
      v-model="checked"
      type="checkbox"
      :class="toggleClasses"
      :disabled="disabled"
      :required="required"
      :aria-describedby="ariaDescribedby"
      @change="handleChange"
    />
    
    <p v-if="helpText && !errorMessage" :id="`${inputId}-help`" class="text-xs text-base-content/70 mt-1">
      {{ helpText }}
    </p>
    
    <p v-if="errorMessage" :id="`${inputId}-error`" class="text-xs text-error mt-1" role="alert">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Simple ID generator
let idCounter = 0;
const generateId = () => `toggle-${++idCounter}`;

interface Props {
  modelValue?: boolean;
  label?: string;
  helpText?: string;
  errorMessage?: string;
  disabled?: boolean;
  required?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error';
  ariaDescribedby?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  disabled: false,
  required: false,
  size: 'md',
  variant: 'primary',
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  change: [event: Event];
}>();

const inputId = generateId();

const checked = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
});

const labelClasses = computed(() => ['label', 'cursor-pointer', 'flex', 'justify-between', 'items-center']);

const toggleClasses = computed(() => {
  const baseClasses = ['toggle'];

  // Size classes
  if (props.size === 'xs') {
    baseClasses.push('toggle-xs');
  } else if (props.size === 'sm') {
    baseClasses.push('toggle-sm');
  } else if (props.size === 'lg') {
    baseClasses.push('toggle-lg');
  }
  // 'md' is default, no class needed

  // Variant classes
  if (props.variant === 'primary') {
    baseClasses.push('toggle-primary');
  } else if (props.variant === 'secondary') {
    baseClasses.push('toggle-secondary');
  } else if (props.variant === 'accent') {
    baseClasses.push('toggle-accent');
  } else if (props.variant === 'success') {
    baseClasses.push('toggle-success');
  } else if (props.variant === 'warning') {
    baseClasses.push('toggle-warning');
  } else if (props.variant === 'info') {
    baseClasses.push('toggle-info');
  } else if (props.variant === 'error') {
    baseClasses.push('toggle-error');
  }

  // Error state override
  if (props.errorMessage) {
    baseClasses.push('toggle-error');
  }

  return baseClasses.join(' ');
});

const ariaDescribedby = computed(() => {
  const ids = [];
  if (props.helpText) ids.push(`${inputId}-help`);
  if (props.errorMessage) ids.push(`${inputId}-error`);
  if (props.ariaDescribedby) ids.push(props.ariaDescribedby);
  return ids.length > 0 ? ids.join(' ') : undefined;
});

const handleChange = (event: Event) => {
  emit('change', event);
};
</script>

<style scoped lang="postcss">
/* DaisyUI handles most toggle styling */
</style>
