<template>
  <label :class="swapClasses">
    <input
      type="checkbox"
      :checked="isSwapped"
      @change="handleChange"
    />
    
    <div v-if="variant === 'rotate'" class="swap-on">
      <slot name="on">{{ onContent }}</slot>
    </div>
    <div v-if="variant === 'rotate'" class="swap-off">
      <slot name="off">{{ offContent }}</slot>
    </div>
    
    <div v-if="variant === 'flip'" class="swap-on">
      <slot name="on">{{ onContent }}</slot>
    </div>
    <div v-if="variant === 'flip'" class="swap-off">
      <slot name="off">{{ offContent }}</slot>
    </div>
    
    <div v-if="variant === 'indeterminate'" class="swap-indeterminate">
      <slot name="indeterminate">{{ indeterminateContent }}</slot>
    </div>
    <div v-if="variant === 'indeterminate'" class="swap-on">
      <slot name="on">{{ onContent }}</slot>
    </div>
    <div v-if="variant === 'indeterminate'" class="swap-off">
      <slot name="off">{{ offContent }}</slot>
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  modelValue?: boolean;
  variant?: 'rotate' | 'flip' | 'indeterminate';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  onContent?: string;
  offContent?: string;
  indeterminateContent?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  variant: 'rotate',
  size: 'md',
  onContent: '🌞',
  offContent: '🌚',
  indeterminateContent: '🌤️',
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  change: [value: boolean];
}>();

const isSwapped = computed(() => props.modelValue);

const swapClasses = computed(() => {
  const baseClasses = ['swap'];

  // Variant classes
  if (props.variant === 'rotate') {
    baseClasses.push('swap-rotate');
  } else if (props.variant === 'flip') {
    baseClasses.push('swap-flip');
  } else if (props.variant === 'indeterminate') {
    baseClasses.push('swap-indeterminate');
  }

  // Size classes
  if (props.size === 'xs') {
    baseClasses.push('text-xs');
  } else if (props.size === 'sm') {
    baseClasses.push('text-sm');
  } else if (props.size === 'lg') {
    baseClasses.push('text-lg');
  }

  if (props.disabled) {
    baseClasses.push('swap-disabled', 'opacity-50', 'cursor-not-allowed');
  }

  return baseClasses.join(' ');
});

const handleChange = (event: Event) => {
  if (props.disabled) return;
  
  const target = event.target as HTMLInputElement;
  const value = target.checked;
  
  emit('update:modelValue', value);
  emit('change', value);
};
</script>

<style scoped lang="postcss">
/* DaisyUI handles most swap styling */
</style>
