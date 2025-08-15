<template>
  <div :class="wrapperClasses">
    <label v-if="label" :for="inputId" :class="labelClasses">
      {{ label }}
      <span v-if="required" class="text-error ml-1" aria-label="required">*</span>
    </label>

    <div :class="inputContainerClasses">
      <div v-if="$slots.prefix" class="flex items-center pl-3 text-base-content/70">
        <slot name="prefix" />
      </div>

      <input
        ref="inputRef"
        :id="inputId"
        :value="modelValue"
        :type="computedType"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :min="min"
        :max="max"
        :step="step"
        :pattern="pattern"
        :maxlength="maxlength"
        :minlength="minlength"
        :autocomplete="autocomplete"
        :aria-invalid="hasError"
        :aria-describedby="computedAriaDescribedby"
        :class="inputClasses"
        v-bind="$attrs"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
        @paste="handlePaste"
      />

      <!-- Password visibility toggle -->
      <button
        v-if="type === 'password' && showPasswordToggle"
        type="button"
        :class="toggleButtonClasses"
        :aria-label="showPassword ? 'Hide password' : 'Show password'"
        @click="togglePasswordVisibility"
      >
        <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L12 12m-3.122-3.122L8.465 8.465M21 21l-6.535-6.535" />
        </svg>
      </button>

      <!-- Clear button -->
      <button
        v-if="clearable && modelValue && !disabled && !readonly"
        type="button"
        :class="clearButtonClasses"
        aria-label="Clear input"
        @click="clearInput"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div v-if="$slots.suffix" class="flex items-center pr-3 text-base-content/70">
        <slot name="suffix" />
      </div>
    </div>

    <!-- Character count -->
    <div v-if="showCharCount && maxlength" class="mt-1 text-xs text-base-content/60 text-right">
      {{ characterCount }}/{{ maxlength }}
    </div>

    <p v-if="helpText && !errorMessage" :id="`${inputId}-help`" class="mt-1 text-sm text-base-content/70">
      {{ helpText }}
    </p>

    <p v-if="errorMessage" :id="`${inputId}-error`" class="mt-1 text-sm text-error" role="alert">
      {{ errorMessage }}
    </p>

    <!-- Validation feedback -->
    <div v-if="showValidation && !errorMessage" class="mt-1 text-sm text-success">
      ✓ {{ validationMessage || 'Looks good!' }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, nextTick } from 'vue';

// Simple ID generator for compatibility
let idCounter = 0;
const generateId = () => `input-${++idCounter}`;

interface Props {
  modelValue?: string | number;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local';
  label?: string;
  placeholder?: string;
  helpText?: string;
  errorMessage?: string;
  validationMessage?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  invalid?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'bordered' | 'ghost' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  ariaDescribedby?: string;
  min?: string | number;
  max?: string | number;
  step?: string | number;
  pattern?: string;
  maxlength?: number;
  minlength?: number;
  autocomplete?: string;
  showPasswordToggle?: boolean;
  clearable?: boolean;
  showCharCount?: boolean;
  showValidation?: boolean;
  autoFocus?: boolean;
  debounceMs?: number;
  validateOnBlur?: boolean;
  validateOnInput?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false,
  readonly: false,
  required: false,
  invalid: false,
  size: 'md',
  variant: 'bordered',
  showPasswordToggle: true,
  clearable: false,
  showCharCount: false,
  showValidation: false,
  autoFocus: false,
  debounceMs: 0,
  validateOnBlur: true,
  validateOnInput: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number];
  input: [event: Event];
  change: [event: Event];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
  keydown: [event: KeyboardEvent];
  paste: [event: ClipboardEvent];
  clear: [];
  validate: [isValid: boolean];
}>();

const inputId = generateId();
const inputRef = ref<HTMLInputElement>();
const showPassword = ref(false);
let debounceTimer: ReturnType<typeof setTimeout> | null = null;

// Computed properties
const computedType = computed(() => {
  if (props.type === 'password' && showPassword.value) {
    return 'text';
  }
  return props.type;
});

const hasError = computed(() => props.invalid || !!props.errorMessage);

const characterCount = computed(() => {
  return String(props.modelValue || '').length;
});

const wrapperClasses = computed(() => ['form-control', 'w-full']);

const labelClasses = computed(() => [
  'label',
  'text-sm',
  'font-medium',
  props.required && 'required',
]);

const inputContainerClasses = computed(() => [
  'relative', 
  'flex', 
  'items-center',
  'input-group',
  hasError.value && 'input-group-error'
]);

const inputClasses = computed(() => {
  const baseClasses = ['input', 'w-full', 'transition-all', 'duration-200'];

  // Size
  if (props.size === 'xs') {
    baseClasses.push('input-xs');
  } else if (props.size === 'sm') {
    baseClasses.push('input-sm');
  } else if (props.size === 'lg') {
    baseClasses.push('input-lg');
  }

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
  if (hasError.value) {
    baseClasses.push('input-error');
  }

  // Success state
  if (props.showValidation && !hasError.value && props.modelValue) {
    baseClasses.push('input-success');
  }

  // Disabled state
  if (props.disabled) {
    baseClasses.push('input-disabled');
  }

  // Readonly state
  if (props.readonly) {
    baseClasses.push('cursor-not-allowed', 'bg-base-200');
  }

  // Padding adjustments for buttons
  if (props.type === 'password' && props.showPasswordToggle) {
    baseClasses.push('pr-10');
  }
  if (props.clearable) {
    baseClasses.push('pr-8');
  }

  return baseClasses.join(' ');
});

const toggleButtonClasses = computed(() => [
  'absolute',
  'right-2',
  'top-1/2',
  'transform',
  '-translate-y-1/2',
  'p-1',
  'text-base-content/60',
  'hover:text-base-content',
  'transition-colors',
  'duration-200',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-primary',
  'focus:ring-offset-1',
  'rounded',
]);

const clearButtonClasses = computed(() => [
  'absolute',
  'right-2',
  'top-1/2',
  'transform',
  '-translate-y-1/2',
  'p-1',
  'text-base-content/60',
  'hover:text-base-content',
  'transition-colors',
  'duration-200',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-primary',
  'focus:ring-offset-1',
  'rounded',
]);

const computedAriaDescribedby = computed(() => {
  const ids = [];
  if (props.helpText) ids.push(`${inputId}-help`);
  if (props.errorMessage) ids.push(`${inputId}-error`);
  if (props.ariaDescribedby) ids.push(props.ariaDescribedby);
  return ids.length > 0 ? ids.join(' ') : undefined;
});

// Event handlers
const validateInput = (value: string | number): boolean => {
  // Basic validation - can be extended
  const isValid = !props.required || (value !== '' && value !== null && value !== undefined);
  emit('validate', isValid);
  return isValid;
};

const debouncedEmit = (value: string | number) => {
  if (debounceTimer) clearTimeout(debounceTimer);
  
  if (props.debounceMs > 0) {
    debounceTimer = setTimeout(() => {
      emit('update:modelValue', value);
      if (props.validateOnInput) {
        validateInput(value);
      }
    }, props.debounceMs);
  } else {
    emit('update:modelValue', value);
    if (props.validateOnInput) {
      validateInput(value);
    }
  }
};

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  debouncedEmit(target.value);
  emit('input', event);
};

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (props.debounceMs === 0) {
    emit('update:modelValue', target.value);
  }
  emit('change', event);
};

const handleFocus = (event: FocusEvent) => {
  emit('focus', event);
};

const handleBlur = (event: FocusEvent) => {
  if (props.validateOnBlur) {
    validateInput(props.modelValue || '');
  }
  emit('blur', event);
};

const handleKeydown = (event: KeyboardEvent) => {
  emit('keydown', event);
  
  // Clear on Ctrl+A and Delete/Backspace
  if (props.clearable && event.ctrlKey && event.key === 'a') {
    event.preventDefault();
    nextTick(() => {
      inputRef.value?.select();
    });
  }
};

const handlePaste = (event: ClipboardEvent) => {
  emit('paste', event);
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
  nextTick(() => {
    inputRef.value?.focus();
  });
};

const clearInput = () => {
  emit('update:modelValue', '');
  emit('clear');
  nextTick(() => {
    inputRef.value?.focus();
  });
};

// Auto focus functionality
onMounted(() => {
  if (props.autoFocus && inputRef.value) {
    nextTick(() => {
      inputRef.value?.focus();
    });
  }
});

// Expose methods for parent component access
defineExpose({
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur(),
  select: () => inputRef.value?.select(),
  clear: clearInput,
  validate: () => validateInput(props.modelValue || ''),
});
</script>

<style scoped lang="postcss">
/* DaisyUI handles most input styling */
.form-control {
  @apply space-y-1;
}

/* Enhanced focus styles */
.input:focus-visible {
  @apply ring-2 ring-primary ring-offset-2;
}

/* Input group styling */
.input-group {
  @apply relative w-full;
}

.input-group-error {
  @apply animate-pulse;
}

/* Required field indicator */
.label.required::after {
  content: '*';
  @apply text-error ml-1;
}

/* Disabled input styling */
.input:disabled {
  @apply cursor-not-allowed opacity-60;
}

/* Readonly input styling */
.input[readonly] {
  @apply cursor-not-allowed bg-base-200;
}

/* Character count warning */
.char-count-warning {
  @apply text-warning;
}

.char-count-error {
  @apply text-error;
}

/* Animation for validation feedback */
.validation-feedback {
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Improved button focus states */
.toggle-button:focus,
.clear-button:focus {
  @apply ring-2 ring-primary ring-offset-1;
}
</style>
