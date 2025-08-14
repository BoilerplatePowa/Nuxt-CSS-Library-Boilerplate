<template>
  <div :class="mockupClasses">
    <div class="camera"></div>
    <div class="display">
      <div :class="contentClasses">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'default' | 'border' | 'bg';
  color?: 'black' | 'white' | 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  color: 'black',
  size: 'md',
});

const mockupClasses = computed(() => {
  const baseClasses = ['mockup-phone'];

  // Variant classes
  if (props.variant === 'border') {
    baseClasses.push('border');
  } else if (props.variant === 'bg') {
    baseClasses.push('bg-base-300');
  }

  // Color classes
  if (props.color === 'black') {
    baseClasses.push('border-black');
  } else if (props.color === 'white') {
    baseClasses.push('border-white');
  } else if (props.color === 'primary') {
    baseClasses.push('border-primary');
  } else if (props.color === 'secondary') {
    baseClasses.push('border-secondary');
  } else if (props.color === 'accent') {
    baseClasses.push('border-accent');
  }

  // Size classes
  if (props.size === 'sm') {
    baseClasses.push('scale-75');
  } else if (props.size === 'lg') {
    baseClasses.push('scale-125');
  }

  return baseClasses.join(' ');
});

const contentClasses = computed(() => {
  const baseClasses = ['artboard', 'artboard-demo', 'phone-1'];
  return baseClasses.join(' ');
});
</script>

<style scoped lang="postcss">
/* DaisyUI handles most mockup styling */
</style>
