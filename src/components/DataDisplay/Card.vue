<template>
  <div :class="cardClasses">
    <figure v-if="$slots.image" class="card-image">
      <slot name="image" />
    </figure>

    <div v-if="title || $slots.header" class="card-header">
      <slot name="header">
        <h2 v-if="title" class="card-title">{{ title }}</h2>
      </slot>
    </div>

    <div class="card-body">
      <slot />
    </div>

    <div v-if="$slots.actions || $slots.footer || (title || $slots.header)" class="card-actions justify-end">
      <slot name="actions" />
    </div>

    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  title?: string;
  variant?: 'normal' | 'bordered' | 'compact' | 'side';
  shadow?: boolean;
  imageFull?: boolean;
  glass?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'normal',
  shadow: true,
  imageFull: false,
  glass: false,
});

const cardClasses = computed(() => {
  const baseClasses = ['card', 'bg-base-100'];

  // Variant
  if (props.variant === 'bordered') {
    baseClasses.push('card-bordered');
  } else if (props.variant === 'compact') {
    baseClasses.push('card-compact');
  } else if (props.variant === 'side') {
    baseClasses.push('card-side');
  }

  // Shadow
  if (props.shadow) {
    baseClasses.push('shadow-xl');
  }

  // Image full
  if (props.imageFull) {
    baseClasses.push('image-full');
  }

  // Glass effect
  if (props.glass) {
    baseClasses.push('glass');
  }

  return baseClasses.join(' ');
});
</script>

<style scoped lang="postcss">
/* DaisyUI handles most card styling */
.card {
  @apply w-96;
}
</style>
