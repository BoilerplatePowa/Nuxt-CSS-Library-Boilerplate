<template>
  <div :class="avatarClasses">
    <div :class="imageClasses">
      <div v-if="online !== undefined" :class="presenceClasses"></div>
      <img v-if="src" :src="src" :alt="alt" />
      <div v-else-if="placeholder" class="bg-neutral text-neutral-content flex items-center justify-center font-semibold">
        {{ placeholder }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  src?: string;
  alt?: string;
  placeholder?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'square';
  online?: boolean;
  ring?: boolean;
  ringColor?: 'primary' | 'secondary' | 'accent' | 'neutral';
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  shape: 'circle',
  ring: false,
  ringColor: 'primary',
});

const avatarClasses = computed(() => {
  const baseClasses = ['avatar'];

  // Online status
  if (props.online !== undefined) {
    if (props.online) {
      baseClasses.push('online');
    } else {
      baseClasses.push('offline');
    }
  }

  return baseClasses.join(' ');
});

const imageClasses = computed(() => {
  const baseClasses = ['relative'];

  // Size classes
  if (props.size === 'xs') {
    baseClasses.push('w-6', 'h-6');
  } else if (props.size === 'sm') {
    baseClasses.push('w-8', 'h-8');
  } else if (props.size === 'md') {
    baseClasses.push('w-12', 'h-12');
  } else if (props.size === 'lg') {
    baseClasses.push('w-16', 'h-16');
  } else if (props.size === 'xl') {
    baseClasses.push('w-24', 'h-24');
  }

  // Shape
  if (props.shape === 'square') {
    baseClasses.push('rounded-xl');
  } else {
    baseClasses.push('rounded-full');
  }

  // Ring
  if (props.ring) {
    baseClasses.push('ring', 'ring-offset-base-100', 'ring-offset-2');
    if (props.ringColor === 'primary') {
      baseClasses.push('ring-primary');
    } else if (props.ringColor === 'secondary') {
      baseClasses.push('ring-secondary');
    } else if (props.ringColor === 'accent') {
      baseClasses.push('ring-accent');
    } else if (props.ringColor === 'neutral') {
      baseClasses.push('ring-neutral');
    }
  }

  return baseClasses.join(' ');
});

const presenceClasses = computed(() => {
  const baseClasses = ['absolute', 'top-0', 'right-0', 'w-3', 'h-3', 'rounded-full', 'border-2', 'border-base-100'];
  
  if (props.online) {
    baseClasses.push('bg-green-400');
  } else {
    baseClasses.push('bg-gray-400');
  }
  
  return baseClasses.join(' ');
});
</script>

<style scoped lang="postcss">
/* DaisyUI handles most avatar styling */
</style>
