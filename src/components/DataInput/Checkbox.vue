<template>
  <div class="form-control">
    <label v-if="label" :class="labelClasses">
      <input
        :id="inputId"
        v-model="checkboxValue"
        type="checkbox"
        :class="checkboxClasses"
        :disabled="disabled"
        :required="required"
        :aria-describedby="ariaDescribedby"
        :indeterminate="indeterminate"
        @change="handleChange"
        @blur="handleBlurEvent"
      />
      <span class="label-text">{{ label }}</span>
    </label>
    <input
      v-else
      :id="inputId"
      v-model="checkboxValue"
      type="checkbox"
      :class="checkboxClasses"
      :disabled="disabled"
      :required="required"
      :aria-describedby="ariaDescribedby"
      :indeterminate="indeterminate"
      @change="handleChange"
      @blur="handleBlurEvent"
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
import { useField } from 'vee-validate';

// Simple ID generator
let idCounter = 0;
const generateId = () => `checkbox-${++idCounter}`;

interface Props {
  modelValue?: boolean;
  name?: string; // Field name for VeeValidate
  label?: string;
  helpText?: string;
  errorMessage?: string;
  disabled?: boolean;
  required?: boolean;
  indeterminate?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error';
  ariaDescribedby?: string;
  // VeeValidate options
  validateOnValueUpdate?: boolean;
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  disabled: false,
  required: false,
  indeterminate: false,
  size: 'md',
  variant: 'primary',
  validateOnValueUpdate: true,
  validateOnBlur: true,
  validateOnChange: true,
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  change: [event: Event];
}>();

const inputId = generateId();

// Use VeeValidate field if name is provided
const { value: fieldValue, errorMessage, handleBlur } = useField<boolean>(
  () => props.name || '',
  undefined,
  {
    type: 'checkbox',
    initialValue: props.modelValue,
    validateOnValueUpdate: props.validateOnValueUpdate,
    checkedValue: true,
    uncheckedValue: false,
  }
);

// Computed value that works with both VeeValidate and v-model
const checkboxValue = computed({
  get: () => {
    // If using VeeValidate (name is provided), use field value
    if (props.name) {
      return Boolean(fieldValue.value);
    }
    // Otherwise use v-model
    return Boolean(props.modelValue);
  },
  set: (value: any) => {
    const booleanValue = Boolean(value);
    if (props.name) {
      // Update VeeValidate field
      fieldValue.value = booleanValue;
    }
    // Always emit for v-model compatibility
    emit('update:modelValue', booleanValue);
  },
});

// Error message from VeeValidate or props
const displayErrorMessage = computed(() => {
  if (props.name && errorMessage.value) {
    return errorMessage.value;
  }
  return props.errorMessage;
});

const labelClasses = computed(() => ['label', 'cursor-pointer', 'flex', 'items-center', 'gap-2']);

const checkboxClasses = computed(() => {
  const baseClasses = ['checkbox'];

  // Size classes
  if (props.size === 'xs') {
    baseClasses.push('checkbox-xs');
  } else if (props.size === 'sm') {
    baseClasses.push('checkbox-sm');
  } else if (props.size === 'lg') {
    baseClasses.push('checkbox-lg');
  }
  // 'md' is default, no class needed

  // Variant classes
  if (props.variant === 'primary') {
    baseClasses.push('checkbox-primary');
  } else if (props.variant === 'secondary') {
    baseClasses.push('checkbox-secondary');
  } else if (props.variant === 'accent') {
    baseClasses.push('checkbox-accent');
  } else if (props.variant === 'success') {
    baseClasses.push('checkbox-success');
  } else if (props.variant === 'warning') {
    baseClasses.push('checkbox-warning');
  } else if (props.variant === 'info') {
    baseClasses.push('checkbox-info');
  } else if (props.variant === 'error') {
    baseClasses.push('checkbox-error');
  }

  // Error state override
  if (displayErrorMessage.value) {
    baseClasses.push('checkbox-error');
  }

  // Disabled state
  if (props.disabled) {
    baseClasses.push('checkbox-disabled');
  }

  return baseClasses.join(' ');
});

const ariaDescribedby = computed(() => {
  const ids = [];
  if (props.helpText) ids.push(`${inputId}-help`);
  if (displayErrorMessage.value) ids.push(`${inputId}-error`);
  if (props.ariaDescribedby) ids.push(props.ariaDescribedby);
  return ids.length > 0 ? ids.join(' ') : undefined;
});

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const booleanValue = target.checked;
  
  if (props.name) {
    // Update VeeValidate field with boolean value
    fieldValue.value = booleanValue;
  }
  emit('change', event);
};

const handleBlurEvent = (event: Event) => {
  if (props.name) {
    // Use VeeValidate handler
    handleBlur(event);
  }
};
</script>

<style scoped lang="postcss">
/* DaisyUI handles most checkbox styling */
</style>
