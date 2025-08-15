<template>
  <button
    ref="buttonRef"
    :class="buttonClasses"
    :disabled="disabled || loading"
    :type="type"
    :aria-label="computedAriaLabel"
    :aria-pressed="ariaPressed"
    :aria-expanded="ariaExpanded"
    :aria-describedby="computedAriaDescribedby"
    :aria-busy="loading"
    :tabindex="disabled ? -1 : 0"
    @click="handleClick"
    @keydown="handleKeydown"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    <span v-if="loading" class="loading loading-spinner loading-sm mr-2" aria-hidden="true"></span>
    <slot name="icon-left" />
    <span v-if="$slots.default" :class="{ 'sr-only': loading && hideTextOnLoading }">
      <slot />
    </span>
    <span v-if="loading && loadingText" class="ml-1">{{ loadingText }}</span>
    <slot name="icon-right" />
  </button>
</template>

<script setup lang="ts">
import { computed, ref, nextTick, onMounted, onUnmounted } from 'vue';

interface Props {
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'ghost' | 'outline' | 'link' | 'info' | 'success' | 'warning' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  hideTextOnLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  circle?: boolean;
  square?: boolean;
  glass?: boolean;
  noAnimation?: boolean;
  ariaLabel?: string;
  ariaPressed?: boolean;
  ariaExpanded?: boolean;
  ariaDescribedby?: string;
  debounceMs?: number;
  confirmAction?: boolean;
  confirmText?: string;
  autoFocus?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  loadingText: '',
  hideTextOnLoading: false,
  type: 'button',
  fullWidth: false,
  circle: false,
  square: false,
  glass: false,
  noAnimation: false,
  debounceMs: 0,
  confirmAction: false,
  confirmText: 'Are you sure?',
  autoFocus: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
  keydown: [event: KeyboardEvent];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
}>();

const buttonRef = ref<HTMLButtonElement>();
let debounceTimer: ReturnType<typeof setTimeout> | null = null;

const buttonClasses = computed(() => {
  const baseClasses = ['btn', 'transition-all', 'duration-200'];

  // Variant classes
  switch (props.variant) {
    case 'primary':
      baseClasses.push('btn-primary');
      break;
    case 'secondary':
      baseClasses.push('btn-secondary');
      break;
    case 'accent':
      baseClasses.push('btn-accent');
      break;
    case 'neutral':
      baseClasses.push('btn-neutral');
      break;
    case 'ghost':
      baseClasses.push('btn-ghost');
      break;
    case 'outline':
      baseClasses.push('btn-outline');
      break;
    case 'link':
      baseClasses.push('btn-link');
      break;
    case 'info':
      baseClasses.push('btn-info');
      break;
    case 'success':
      baseClasses.push('btn-success');
      break;
    case 'warning':
      baseClasses.push('btn-warning');
      break;
    case 'error':
      baseClasses.push('btn-error');
      break;
  }

  // Size classes
  if (props.size === 'xs') {
    baseClasses.push('btn-xs');
  } else if (props.size === 'sm') {
    baseClasses.push('btn-sm');
  } else if (props.size === 'lg') {
    baseClasses.push('btn-lg');
  }
  // 'md' is default, no class needed

  // Shape classes
  if (props.circle) {
    baseClasses.push('btn-circle');
  }
  if (props.square) {
    baseClasses.push('btn-square');
  }

  // Style modifiers
  if (props.glass) {
    baseClasses.push('glass');
  }
  if (props.noAnimation) {
    baseClasses.push('no-animation');
  }

  // Full width
  if (props.fullWidth) {
    baseClasses.push('btn-block', 'w-full');
  }

  // Loading state
  if (props.loading) {
    baseClasses.push('opacity-75', 'cursor-not-allowed');
  }

  // Responsive classes
  baseClasses.push('focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2', 'focus:ring-current');

  return baseClasses.join(' ');
});

const computedAriaLabel = computed(() => {
  if (props.ariaLabel) return props.ariaLabel;
  if (props.loading && props.loadingText) return props.loadingText;
  if (props.loading) return 'Loading...';
  return undefined;
});

const computedAriaDescribedby = computed(() => {
  const ids = [];
  if (props.ariaDescribedby) ids.push(props.ariaDescribedby);
  return ids.length > 0 ? ids.join(' ') : undefined;
});

const executeAction = (event: MouseEvent | KeyboardEvent) => {
  if (props.disabled || props.loading) return;

  if (props.confirmAction) {
    if (confirm(props.confirmText)) {
      emit('click', event as MouseEvent);
    }
  } else {
    emit('click', event as MouseEvent);
  }
};

const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) return;

  if (props.debounceMs > 0) {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      executeAction(event);
    }, props.debounceMs);
  } else {
    executeAction(event);
  }
};

const handleKeydown = (event: KeyboardEvent) => {
  emit('keydown', event);
  
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    if (!props.disabled && !props.loading) {
      // Trigger click event for keyboard interaction
      executeAction(event);
    }
  }
};

const handleFocus = (event: FocusEvent) => {
  emit('focus', event);
};

const handleBlur = (event: FocusEvent) => {
  emit('blur', event);
};

// Auto focus functionality
onMounted(() => {
  if (props.autoFocus && buttonRef.value) {
    nextTick(() => {
      buttonRef.value?.focus();
    });
  }
});

// Cleanup
onUnmounted(() => {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }
});

// Expose methods for parent component access
defineExpose({
  focus: () => buttonRef.value?.focus(),
  blur: () => buttonRef.value?.blur(),
  click: () => buttonRef.value?.click(),
});
</script>

<style scoped lang="postcss">
/* DaisyUI handles most button styling, only custom overrides here */
.btn {
  @apply gap-2;
  @apply relative;
  @apply select-none;
}

/* Improved focus styles for better accessibility */
.btn:focus-visible {
  @apply ring-2 ring-offset-2 ring-current;
}

/* Loading state improvements */
.btn[aria-busy="true"] {
  @apply pointer-events-none;
}

/* Better disabled state */
.btn:disabled {
  @apply pointer-events-none opacity-50;
}

/* Ripple effect on click (optional enhancement) */
.btn:active {
  @apply transform scale-95;
}

/* Screen reader only class */
.sr-only {
  @apply absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0;
  clip: rect(0, 0, 0, 0);
}
</style>
