<template>
  <div :class="avatarClasses">
    <div :class="imageClasses" class="avatar-size">
      <div v-if="presence !== undefined" :class="presenceClasses"></div>
      <img 
        v-if="src && !imageError" 
        :src="src" 
        :alt="alt" 
        @error="handleImageError"
      />
      <div 
        v-else
        class="avatar-placeholder bg-neutral text-neutral-content flex items-center justify-center font-semibold"
      >
        <slot>{{ initials || placeholder || '' }}</slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

interface Props {
  src?: string;
  alt?: string;
  placeholder?: string;
  initials?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'square';
  presence?: 'online' | 'offline';
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

const imageError = ref(false);

const handleImageError = () => {
  imageError.value = true;
};

const avatarClasses = computed(() => {
  const baseClasses = ['avatar'];

  // Online status - support both presence and online props
  const currentPresence = props.presence || (props.online !== undefined ? (props.online ? 'online' : 'offline') : undefined);
  
  if (currentPresence) {
    baseClasses.push(currentPresence);
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
    baseClasses.push('w-12', 'h-12');
  } else if (props.size === 'xl') {
    baseClasses.push('w-16', 'h-16');
  }

  // Shape
  if (props.shape === 'square') {
    baseClasses.push('rounded');
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
  
  const currentPresence = props.presence || (props.online !== undefined ? (props.online ? 'online' : 'offline') : undefined);
  
  if (currentPresence === 'online') {
    baseClasses.push('bg-green-400');
  } else if (currentPresence === 'offline') {
    baseClasses.push('bg-gray-400');
  }
  
  return baseClasses.join(' ');
});
</script>

<style scoped lang="postcss">
/* DaisyUI handles most avatar styling */
</style>
