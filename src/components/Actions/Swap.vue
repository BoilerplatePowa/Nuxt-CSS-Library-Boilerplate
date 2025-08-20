<template>
  <label :class="swapClasses">
    <input
      type="checkbox"
      :id="inputId"
      :name="name"
      :checked="isSwapped"
      :disabled="disabled"
      @change="handleChange"
    />
    <div v-if="variant === 'indeterminate'" class="swap-indeterminate">
      <slot name="indeterminate">{{ indeterminateContent }}</slot>
    </div>
    <div class="swap-on">
      <slot name="on">{{ onContent }}</slot>
    </div>
    <div class="swap-off">
      <slot name="off">{{ offContent }}</slot>
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  modelValue?: boolean;
  variant?: 'rotate' | 'flip' | 'indeterminate';
  onContent?: string;
  offContent?: string;
  indeterminateContent?: string;
  disabled?: boolean;
  name?: string;
  id?: string;

}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  variant: 'rotate',
  onContent: '🌞',
  offContent: '🌚',
  indeterminateContent: '🌤️',
  disabled: false,
  name: undefined,
  id: undefined,
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  change: [value: boolean];
}>();

const isSwapped = computed(() => props.modelValue);

const inputId = computed(() => props.id || `swap-${Math.random().toString(36).slice(2, 11)}`);

const swapClasses = computed(() => {
  const baseClasses = ['swap'];

  // Variant classes
  if (props.variant) {
    baseClasses.push(`swap-${props.variant}`);
  }

  if (props.disabled) {
    baseClasses.push('swap-disabled', 'opacity-50', 'cursor-not-allowed', 'pointer-events-none');
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
