<template>
  <div :class="avatarClasses">
    <div :class="imageClasses">
      <!-- Loading state -->
      <div v-if="loading" :class="loadingClasses">
        <span class="loading loading-spinner loading-xs"></span>
      </div>
      
      <!-- Presence indicator -->
      <div v-if="showPresence && (presence !== undefined || online !== undefined)" :class="presenceClasses">
        <div :class="presenceDotClasses"></div>
      </div>
      
      <!-- Badge/Count indicator -->
      <div v-if="badge || count !== undefined" :class="badgeClasses">
        <span v-if="badge" class="text-xs font-bold">{{ badge }}</span>
        <span v-else-if="count !== undefined" class="text-xs font-bold">
          {{ count > 99 ? '99+' : count }}
        </span>
      </div>
      
      <!-- Avatar image with lazy loading support -->
      <img 
        v-if="src && !imageError && !loading" 
        :src="src" 
        :alt="alt || `Avatar for ${name || 'user'}`" 
        :loading="lazy ? 'lazy' : 'eager'"
        :class="imageElementClasses"
        @error="handleImageError"
        @load="handleImageLoad"
      />
      
      <!-- Fallback placeholder -->
      <div 
        v-else-if="!loading"
        :class="placeholderClasses"
        :aria-label="alt || `Avatar for ${name || 'user'}`"
      >
        <slot>
          <span v-if="initials" class="font-semibold">{{ initials }}</span>
          <span v-else-if="name" class="font-semibold">{{ generateInitials(name) }}</span>
          <span v-else-if="placeholder" class="opacity-60">{{ placeholder }}</span>
          <svg v-else class="w-1/2 h-1/2 opacity-60" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
          </svg>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

interface Props {
  src?: string;
  alt?: string;
  name?: string;
  placeholder?: string;
  initials?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  shape?: 'circle' | 'square' | 'rounded';
  presence?: 'online' | 'offline' | 'away' | 'busy';
  online?: boolean;
  showPresence?: boolean;
  ring?: boolean;
  ringColor?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'error';
  badge?: string;
  count?: number;
  loading?: boolean;
  lazy?: boolean;
  fallbackColor?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'random';
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  shape: 'circle',
  showPresence: true,
  ring: false,
  ringColor: 'primary',
  loading: false,
  lazy: true,
  fallbackColor: 'neutral',
});

const emit = defineEmits<{
  imageLoad: [];
  imageError: [];
}>();

const imageError = ref(false);
const imageLoaded = ref(false);

const handleImageError = () => {
  imageError.value = true;
  emit('imageError');
};

const handleImageLoad = () => {
  imageLoaded.value = true;
  emit('imageLoad');
};

// Utility function to generate initials from name
const generateInitials = (name: string): string => {
  return name
    .split(' ')
    .slice(0, 2)
    .map(part => part.charAt(0).toUpperCase())
    .join('');
};

// Utility function to generate consistent color from string
const getColorFromString = (str: string): string => {
  const colors = ['primary', 'secondary', 'accent', 'info', 'success', 'warning'];
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};

const avatarClasses = computed(() => {
  const baseClasses = ['avatar', 'relative'];
  return baseClasses.join(' ');
});

const imageClasses = computed(() => {
  const baseClasses = ['relative', 'overflow-hidden'];

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
    baseClasses.push('w-20', 'h-20');
  } else if (props.size === '2xl') {
    baseClasses.push('w-24', 'h-24');
  }

  // Shape
  if (props.shape === 'square') {
    baseClasses.push('rounded-lg');
  } else if (props.shape === 'rounded') {
    baseClasses.push('rounded-xl');
  } else {
    baseClasses.push('rounded-full');
  }

  // Ring
  if (props.ring) {
    baseClasses.push('ring-2', 'ring-offset-2', 'ring-offset-base-100');
    baseClasses.push(`ring-${props.ringColor}`);
  }

  return baseClasses.join(' ');
});

const loadingClasses = computed(() => [
  'absolute',
  'inset-0',
  'flex',
  'items-center',
  'justify-center',
  'bg-base-200',
  'animate-pulse',
]);

const imageElementClasses = computed(() => [
  'w-full',
  'h-full',
  'object-cover',
  'transition-opacity',
  'duration-300',
]);

const placeholderClasses = computed(() => {
  const baseClasses = [
    'w-full',
    'h-full',
    'flex',
    'items-center',
    'justify-center',
    'text-white',
    'font-semibold',
  ];

  // Background color
  if (props.fallbackColor === 'random' && props.name) {
    const colorClass = getColorFromString(props.name);
    baseClasses.push(`bg-${colorClass}`);
  } else {
    baseClasses.push(`bg-${props.fallbackColor}`);
  }

  // Text size based on avatar size
  if (props.size === 'xs') {
    baseClasses.push('text-xs');
  } else if (props.size === 'sm') {
    baseClasses.push('text-sm');
  } else if (props.size === 'lg') {
    baseClasses.push('text-lg');
  } else if (props.size === 'xl') {
    baseClasses.push('text-xl');
  } else if (props.size === '2xl') {
    baseClasses.push('text-2xl');
  }

  return baseClasses.join(' ');
});

const presenceClasses = computed(() => {
  const baseClasses = ['absolute', 'z-10'];
  
  // Position based on size
  if (props.size === 'xs') {
    baseClasses.push('top-0', 'right-0', 'w-2', 'h-2');
  } else if (props.size === 'sm') {
    baseClasses.push('top-0', 'right-0', 'w-2.5', 'h-2.5');
  } else {
    baseClasses.push('top-0', 'right-0', 'w-3', 'h-3');
  }
  
  baseClasses.push('rounded-full', 'border-2', 'border-base-100');
  
  return baseClasses.join(' ');
});

const presenceDotClasses = computed(() => {
  const baseClasses = ['w-full', 'h-full', 'rounded-full'];
  
  const currentPresence = props.presence || (props.online !== undefined ? (props.online ? 'online' : 'offline') : undefined);
  
  if (currentPresence === 'online') {
    baseClasses.push('bg-success');
  } else if (currentPresence === 'offline') {
    baseClasses.push('bg-base-300');
  } else if (currentPresence === 'away') {
    baseClasses.push('bg-warning');
  } else if (currentPresence === 'busy') {
    baseClasses.push('bg-error');
  }
  
  return baseClasses.join(' ');
});

const badgeClasses = computed(() => {
  const baseClasses = ['absolute', '-top-1', '-right-1', 'z-10', 'min-w-[1.25rem]', 'h-5', 'flex', 'items-center', 'justify-center', 'bg-error', 'text-error-content', 'rounded-full', 'px-1'];
  
  // Adjust size based on avatar size
  if (props.size === 'xs' || props.size === 'sm') {
    baseClasses.push('text-xs', 'min-w-[1rem]', 'h-4');
  }
  
  return baseClasses.join(' ');
});
</script>

<style scoped lang="postcss">
/* DaisyUI handles most avatar styling */
</style>
