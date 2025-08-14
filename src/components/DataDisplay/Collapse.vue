<template>
  <div :class="collapseClasses">
    <input
      :id="collapseId"
      v-model="isOpen"
      type="checkbox"
      :class="checkboxClasses"
    />
    <label
      :for="collapseId"
      :class="titleClasses"
      @click="toggle"
      @keydown="handleKeydown"
    >
      <slot name="title">
        {{ title }}
      </slot>
      <slot name="icon">
        <svg
          class="w-4 h-4 transition-transform"
          :class="{ 'rotate-180': isOpen }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </slot>
    </label>
    <div :class="contentClasses">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

// Simple ID generator
let idCounter = 0;
const generateId = () => `collapse-${++idCounter}`;

interface Props {
  modelValue?: boolean;
  title?: string;
  variant?: 'default' | 'arrow' | 'plus';
  disabled?: boolean;
  forceOpen?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  variant: 'default',
  disabled: false,
  forceOpen: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  toggle: [isOpen: boolean];
}>();

const collapseId = generateId();
const isOpen = ref(props.modelValue);

// Watch for external model value changes
watch(
  () => props.modelValue,
  (newValue) => {
    isOpen.value = newValue;
  }
);

// Watch internal state changes
watch(isOpen, (newValue) => {
  emit('update:modelValue', newValue);
  emit('toggle', newValue);
});

const collapseClasses = computed(() => {
  const baseClasses = ['collapse'];

  // Variant classes
  if (props.variant === 'arrow') {
    baseClasses.push('collapse-arrow');
  } else if (props.variant === 'plus') {
    baseClasses.push('collapse-plus');
  }

  // Force open
  if (props.forceOpen) {
    baseClasses.push('collapse-open');
  }

  // Background
  baseClasses.push('bg-base-200');

  return baseClasses.join(' ');
});

const checkboxClasses = computed(() => ['collapse-checkbox']);

const titleClasses = computed(() => {
  const classes = ['collapse-title', 'text-xl', 'font-medium', 'cursor-pointer'];
  
  if (props.disabled) {
    classes.push('opacity-50', 'cursor-not-allowed');
  }
  
  return classes.join(' ');
});

const contentClasses = computed(() => ['collapse-content']);

const toggle = () => {
  if (props.disabled) return;
  isOpen.value = !isOpen.value;
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    toggle();
  }
};
</script>

<style scoped lang="postcss">
/* DaisyUI handles most collapse styling */
</style>
