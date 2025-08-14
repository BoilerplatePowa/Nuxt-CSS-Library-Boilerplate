<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    :type="type"
    :aria-label="ariaLabel"
    :aria-pressed="ariaPressed"
    :aria-expanded="ariaExpanded"
    :aria-describedby="ariaDescribedby"
    @click="handleClick"
    @keydown="handleKeydown"
  >
    <span v-if="loading" class="loading loading-spinner loading-sm" aria-hidden="true"></span>
    <slot name="icon-left" />
    <span v-if="$slots.default">
      <slot />
    </span>
    <slot name="icon-right" />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'ghost' | 'outline' | 'link' | 'info' | 'success' | 'warning' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
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
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  type: 'button',
  fullWidth: false,
  circle: false,
  square: false,
  glass: false,
  noAnimation: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
  keydown: [event: KeyboardEvent];
}>();

const buttonClasses = computed(() => {
  const baseClasses = ['btn'];

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
    baseClasses.push('btn-block');
  }

  return baseClasses.join(' ');
});

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event);
  }
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    if (!props.disabled && !props.loading) {
      emit('keydown', event);
      // Trigger click event for keyboard interaction
      emit('click', event as any);
    }
  }
};
</script>

<style scoped lang="postcss">
/* DaisyUI handles most button styling, only custom overrides here */
.btn {
  @apply gap-2;
}
</style>
