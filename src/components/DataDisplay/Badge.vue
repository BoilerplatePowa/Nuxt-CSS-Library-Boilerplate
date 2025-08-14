<template>
  <component :is="tag" :class="badgeClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'ghost' | 'info' | 'success' | 'warning' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  outline?: boolean;
  tag?: 'span' | 'div' | 'p' | 'label';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'neutral',
  size: 'md',
  outline: false,
  tag: 'span',
});

const badgeClasses = computed(() => {
  const baseClasses = ['badge'];

  // Variant classes
  if (props.variant === 'primary') {
    baseClasses.push('badge-primary');
  } else if (props.variant === 'secondary') {
    baseClasses.push('badge-secondary');
  } else if (props.variant === 'accent') {
    baseClasses.push('badge-accent');
  } else if (props.variant === 'ghost') {
    baseClasses.push('badge-ghost');
  } else if (props.variant === 'info') {
    baseClasses.push('badge-info');
  } else if (props.variant === 'success') {
    baseClasses.push('badge-success');
  } else if (props.variant === 'warning') {
    baseClasses.push('badge-warning');
  } else if (props.variant === 'error') {
    baseClasses.push('badge-error');
  } else if (props.variant === 'neutral') {
    baseClasses.push('badge-neutral');
  }

  // Size classes
  if (props.size === 'xs') {
    baseClasses.push('badge-xs');
  } else if (props.size === 'sm') {
    baseClasses.push('badge-sm');
  } else if (props.size === 'lg') {
    baseClasses.push('badge-lg');
  }
  // 'md' is default, no class needed

  // Outline
  if (props.outline) {
    baseClasses.push('badge-outline');
  }

  return baseClasses.join(' ');
});
</script>

<style scoped lang="postcss">
/* DaisyUI handles most badge styling */
</style>
