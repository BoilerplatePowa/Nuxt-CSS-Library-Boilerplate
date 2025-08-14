<template>
  <div :class="wrapperClasses">
    <label v-if="label" :for="selectId" class="label">
      <span class="label-text">{{ label }}</span>
      <span v-if="required" class="label-text-alt text-error">*</span>
    </label>

    <select
      :id="selectId"
      :value="modelValue"
      :class="selectClasses"
      :disabled="disabled"
      :required="required"
      :multiple="multiple"
      :aria-describedby="ariaDescribedby"
      @change="handleChange"
    >
      <option v-if="placeholder && !multiple" value="" disabled>
        {{ placeholder }}
      </option>
      <slot>
        <option
          v-for="option in options"
          :key="getOptionValue(option)"
          :value="getOptionValue(option)"
        >
          {{ getOptionLabel(option) }}
        </option>
      </slot>
    </select>

    <p v-if="helpText && !errorMessage" :id="`${selectId}-help`" class="text-xs text-base-content/70 mt-1">
      {{ helpText }}
    </p>

    <p v-if="errorMessage" :id="`${selectId}-error`" class="text-xs text-error mt-1" role="alert">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Simple ID generator
let idCounter = 0;
const generateId = () => `select-${++idCounter}`;

interface Option {
  label: string;
  value: string | number;
  disabled?: boolean;
}

interface Props {
  modelValue?: string | number | string[] | number[];
  options?: Option[];
  label?: string;
  placeholder?: string;
  helpText?: string;
  errorMessage?: string;
  disabled?: boolean;
  required?: boolean;
  multiple?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'bordered' | 'ghost' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  ariaDescribedby?: string;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  required: false,
  multiple: false,
  size: 'md',
  variant: 'bordered',
  options: () => [],
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number | string[] | number[]];
  change: [event: Event];
}>();

const selectId = generateId();

const wrapperClasses = computed(() => ['form-control', 'w-full']);

const selectClasses = computed(() => {
  const baseClasses = ['select', 'w-full'];

  // Size classes
  if (props.size === 'xs') {
    baseClasses.push('select-xs');
  } else if (props.size === 'sm') {
    baseClasses.push('select-sm');
  } else if (props.size === 'lg') {
    baseClasses.push('select-lg');
  }
  // 'md' is default, no class needed

  // Variant classes
  if (props.variant === 'bordered') {
    baseClasses.push('select-bordered');
  } else if (props.variant === 'ghost') {
    baseClasses.push('select-ghost');
  } else if (props.variant === 'primary') {
    baseClasses.push('select-primary');
  } else if (props.variant === 'secondary') {
    baseClasses.push('select-secondary');
  } else if (props.variant === 'accent') {
    baseClasses.push('select-accent');
  } else if (props.variant === 'info') {
    baseClasses.push('select-info');
  } else if (props.variant === 'success') {
    baseClasses.push('select-success');
  } else if (props.variant === 'warning') {
    baseClasses.push('select-warning');
  } else if (props.variant === 'error') {
    baseClasses.push('select-error');
  }

  // Error state override
  if (props.errorMessage) {
    baseClasses.push('select-error');
  }

  return baseClasses.join(' ');
});

const ariaDescribedby = computed(() => {
  const ids = [];
  if (props.helpText) ids.push(`${selectId}-help`);
  if (props.errorMessage) ids.push(`${selectId}-error`);
  if (props.ariaDescribedby) ids.push(props.ariaDescribedby);
  return ids.length > 0 ? ids.join(' ') : undefined;
});

const getOptionValue = (option: Option | string | number): string | number => {
  if (typeof option === 'object') {
    return option.value;
  }
  return option;
};

const getOptionLabel = (option: Option | string | number): string => {
  if (typeof option === 'object') {
    return option.label;
  }
  return String(option);
};

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  
  if (props.multiple) {
    const values = Array.from(target.selectedOptions).map(option => {
      const value = option.value;
      // Try to parse as number if it looks like one
      return /^\d+$/.test(value) ? Number(value) : value;
    });
    emit('update:modelValue', values);
  } else {
    const value = target.value;
    // Try to parse as number if it looks like one
    const parsedValue = /^\d+$/.test(value) ? Number(value) : value;
    emit('update:modelValue', parsedValue);
  }
  
  emit('change', event);
};
</script>

<style scoped lang="postcss">
/* DaisyUI handles most select styling */
</style>
