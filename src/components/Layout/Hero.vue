<template>
  <div :class="heroClasses" :style="heroStyle">
    <div v-if="overlay" class="hero-overlay" :class="overlayClasses"></div>
    <div class="hero-content text-center" :class="contentClasses">
      <div class="max-w-md">
        <slot name="content">
          <slot>
            <h1 v-if="title" class="text-5xl font-bold">{{ title }}</h1>
            <p v-if="subtitle" class="py-6">{{ subtitle }}</p>
            <div v-if="$slots.actions" class="flex flex-wrap gap-4 justify-center">
              <slot name="actions" />
            </div>
          </slot>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  minHeight?: 'sm' | 'md' | 'lg' | 'xl' | 'screen';
  overlay?: boolean;
  overlayOpacity?: 'light' | 'medium' | 'dark';
  textColor?: 'default' | 'neutral' | 'primary' | 'white';
}

const props = withDefaults(defineProps<Props>(), {
  minHeight: 'lg',
  overlay: false,
  overlayOpacity: 'medium',
  textColor: 'default',
});

const heroClasses = computed(() => {
  const baseClasses = ['hero'];

  // Min height classes
  if (props.minHeight === 'sm') {
    baseClasses.push('min-h-sm');
  } else if (props.minHeight === 'md') {
    baseClasses.push('min-h-md');
  } else if (props.minHeight === 'lg') {
    baseClasses.push('min-h-lg');
  } else if (props.minHeight === 'xl') {
    baseClasses.push('min-h-xl');
  } else if (props.minHeight === 'screen') {
    baseClasses.push('min-h-screen');
  }

  // Background styling
  if (!props.backgroundImage) {
    baseClasses.push('bg-base-200');
  }

  return baseClasses.join(' ');
});

const overlayClasses = computed(() => {
  if (!props.overlay) return '';
  
  const classes = ['bg-black'];
  
  if (props.overlayOpacity === 'light') {
    classes.push('bg-opacity-30');
  } else if (props.overlayOpacity === 'medium') {
    classes.push('bg-opacity-50');
  } else if (props.overlayOpacity === 'dark') {
    classes.push('bg-opacity-70');
  }
  
  return classes.join(' ');
});

const heroStyle = computed(() => {
  if (props.backgroundImage) {
    // Generate style string to avoid browser quote addition
    return `background-image: url(${props.backgroundImage}); background-size: cover; background-position: center center;`;
  }
  return {};
});

const contentClasses = computed(() => {
  const classes = [];
  
  if (props.textColor === 'neutral') {
    classes.push('text-neutral-content');
  } else if (props.textColor === 'primary') {
    classes.push('text-primary-content');
  } else if (props.textColor === 'white') {
    classes.push('text-white');
  }
  
  return classes.join(' ');
});
</script>

<style scoped lang="postcss">
/* DaisyUI handles most hero styling */
</style>
