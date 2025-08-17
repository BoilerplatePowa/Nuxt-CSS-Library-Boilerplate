<template>
  <div :class="statusClasses" :aria-label="ariaLabel"></div>
  
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface StatusProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error';
  animation?: 'pulse' | 'bounce' | 'none';
  size?: 'xs' | 'sm' | 'md'| 'lg' | 'xl';
  ariaLabel?: string;
}

const props = withDefaults(defineProps<StatusProps>(), {
  variant: 'neutral',
  ariaLabel: 'status',
});

const statusClasses = computed(() => {
  const baseClasses = ['status'];
  
  // Add variant class
  if (props.variant) {
    baseClasses.push(`status-${props.variant}`);
  }

  if (props.animation) {
    baseClasses.push(`animate-${props.animation}`);
  }

  if (props.size) {
    baseClasses.push(`status-${props.size}`);
  }
  
  return baseClasses.join(' ');
});
</script>
