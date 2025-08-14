<template>
  <div :class="wrapperClasses">
    <label v-if="label" :for="inputId" :class="labelClasses">
      {{ label }}
      <span v-if="required" class="text-red-500 ml-1" aria-label="required">*</span>
    </label>

    <div :class="inputContainerClasses">
      <slot name="prefix" />

      <input
        :id="inputId"
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :aria-invalid="invalid"
        :aria-describedby="ariaDescribedby"
        :class="inputClasses"
        v-bind="$attrs"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />

      <slot name="suffix" />
    </div>

    <p v-if="helpText && !errorMessage" :id="`${inputId}-help`" class="mt-1 text-sm text-gray-600">
      {{ helpText }}
    </p>

    <p v-if="errorMessage" :id="`${inputId}-error`" class="mt-1 text-sm text-red-600" role="alert">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Simple ID generator for compatibility
let idCounter = 0;
const generateId = () => `input-${++idCounter}`;

interface Props {
  modelValue?: string | number;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  label?: string;
  placeholder?: string;
  helpText?: string;
  errorMessage?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  invalid?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'bordered' | 'ghost' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  ariaDescribedby?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false,
  readonly: false,
  required: false,
  invalid: false,
  size: 'md',
  variant: 'bordered',
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number];
  input: [event: Event];
  change: [event: Event];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
}>();

const inputId = generateId();

const wrapperClasses = computed(() => ['form-control', 'w-full']);

const labelClasses = computed(() => [
  'label',
]);

const inputContainerClasses = computed(() => ['relative', 'flex', 'items-center']);

const inputClasses = computed(() => {
  const baseClasses = ['input', 'w-full'];

  // Size
  if (props.size === 'xs') {
    baseClasses.push('input-xs');
  } else if (props.size === 'sm') {
    baseClasses.push('input-sm');
  } else if (props.size === 'lg') {
    baseClasses.push('input-lg');
  }
  // 'md' is default, no class needed

  // Variant
  if (props.variant === 'bordered') {
    baseClasses.push('input-bordered');
  } else if (props.variant === 'ghost') {
    baseClasses.push('input-ghost');
  } else if (props.variant === 'primary') {
    baseClasses.push('input-primary');
  } else if (props.variant === 'secondary') {
    baseClasses.push('input-secondary');
  } else if (props.variant === 'accent') {
    baseClasses.push('input-accent');
  } else if (props.variant === 'info') {
    baseClasses.push('input-info');
  } else if (props.variant === 'success') {
    baseClasses.push('input-success');
  } else if (props.variant === 'warning') {
    baseClasses.push('input-warning');
  } else if (props.variant === 'error') {
    baseClasses.push('input-error');
  }

  // Error state override
  if (props.invalid || props.errorMessage) {
    baseClasses.push('input-error');
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

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
  emit('input', event);
};

const handleChange = (event: Event) => {
  emit('change', event);
};

const handleFocus = (event: FocusEvent) => {
  emit('focus', event);
};

const handleBlur = (event: FocusEvent) => {
  emit('blur', event);
};
</script>

<style scoped lang="postcss">
/* DaisyUI handles most input styling */
.form-control {
  @apply space-y-1;
}
</style>
