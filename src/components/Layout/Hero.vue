<template>
  <div :class="heroClasses">
    <div v-if="backgroundImage" class="hero-overlay" :class="overlayClasses"></div>
    <div class="hero-content text-center" :class="contentClasses">
      <div class="max-w-md">
        <slot name="content">
          <h1 v-if="title" class="text-5xl font-bold">{{ title }}</h1>
          <p v-if="subtitle" class="py-6">{{ subtitle }}</p>
          <div v-if="$slots.actions" class="flex flex-wrap gap-4 justify-center">
            <slot name="actions" />
          </div>
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
    baseClasses.push('min-h-96');
  } else if (props.minHeight === 'md') {
    baseClasses.push('min-h-[32rem]');
  } else if (props.minHeight === 'lg') {
    baseClasses.push('min-h-[40rem]');
  } else if (props.minHeight === 'xl') {
    baseClasses.push('min-h-[48rem]');
  } else if (props.minHeight === 'screen') {
    baseClasses.push('min-h-screen');
  }

  // Background image
  if (props.backgroundImage) {
    baseClasses.push('hero-content');
  } else {
    baseClasses.push('bg-base-200');
  }

  return baseClasses.join(' ');
});

const overlayClasses = computed(() => {
  if (!props.overlay) return '';
  
  const classes = ['bg-opacity-60'];
  
  if (props.overlayOpacity === 'light') {
    classes.push('bg-black', 'bg-opacity-30');
  } else if (props.overlayOpacity === 'medium') {
    classes.push('bg-black', 'bg-opacity-60');
  } else if (props.overlayOpacity === 'dark') {
    classes.push('bg-black', 'bg-opacity-80');
  }
  
  return classes.join(' ');
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
.hero {
  background-image: v-bind("props.backgroundImage ? `url(${props.backgroundImage})` : 'none'");
  background-size: cover;
  background-position: center;
}
</style>
