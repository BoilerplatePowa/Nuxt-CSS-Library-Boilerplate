<template>
  <label :class="swapClasses">
    <input
      type="checkbox"
      :id="inputId"
      :name="name"
      :checked="model"
      :disabled="disabled"
      @change="handleChange"
    />
    <div v-if="variant === 'indeterminate'" class="swap-indeterminate">
      <slot name="indeterminate">{{ indeterminateContent }}</slot>
    </div>
    <div class="swap-on">
      <slot name="on">{{ swapOnContent }}</slot>
    </div>
    <div class="swap-off">
      <slot name="off">{{ swapOffContent }}</slot>
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'rotate' | 'flip' | 'indeterminate';
  swapOnContent?: string;
  swapOffContent?: string;
  indeterminateContent?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'rotate',
  swapOnContent: '🌞',
  swapOffContent: '🌚',
  indeterminateContent: '🌤️',
  disabled: false,
  name: undefined,
  id: undefined,
});

const model = defineModel<boolean>({ default: false });

const emit = defineEmits<{
  change: [value: boolean];
}>();

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
  
  model.value = value;
  emit('change', value);
};
</script>

<style scoped lang="postcss">
/* DaisyUI handles most swap styling */
</style>
