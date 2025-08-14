<template>
  <div :class="alertClasses" role="alert">
    <slot name="icon">
      <span v-if="showDefaultIcon" class="flex-shrink-0">
        <span v-if="variant === 'info'">ℹ️</span>
        <span v-else-if="variant === 'success'">✅</span>
        <span v-else-if="variant === 'warning'">⚠️</span>
        <span v-else-if="variant === 'error'">❌</span>
        <span v-else>📢</span>
      </span>
    </slot>
    
    <div class="flex-1">
      <slot name="title">
        <h3 v-if="title" class="font-bold">{{ title }}</h3>
      </slot>
      <div v-if="$slots.default" class="text-xs">
        <slot />
      </div>
    </div>
    
    <button
      v-if="dismissible"
      @click="$emit('dismiss')"
      class="btn btn-sm btn-circle btn-ghost"
      aria-label="Close alert"
    >
      ✕
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  dismissible?: boolean;
  showDefaultIcon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'info',
  dismissible: false,
  showDefaultIcon: true,
});

defineEmits<{
  dismiss: [];
}>();

const alertClasses = computed(() => {
  const baseClasses = ['alert'];

  // Variant classes
  if (props.variant === 'info') {
    baseClasses.push('alert-info');
  } else if (props.variant === 'success') {
    baseClasses.push('alert-success');
  } else if (props.variant === 'warning') {
    baseClasses.push('alert-warning');
  } else if (props.variant === 'error') {
    baseClasses.push('alert-error');
  }

  return baseClasses.join(' ');
});
</script>

<style scoped lang="postcss">
/* DaisyUI handles most alert styling */
</style>
