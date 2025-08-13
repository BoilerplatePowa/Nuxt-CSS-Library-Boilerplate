<template>
  <Transition name="toast" @enter="onEnter" @leave="onLeave">
    <div
      v-if="visible"
      :class="toastClasses"
      role="alert"
      :aria-live="type === 'error' ? 'assertive' : 'polite'"
      @mouseenter="pauseTimer"
      @mouseleave="resumeTimer"
    >
      <div :class="iconContainerClasses">
        <component :is="iconComponent" :class="iconClasses" />
      </div>

      <div class="flex-1 min-w-0">
        <p v-if="title" :class="titleClasses">
          {{ title }}
        </p>
        <p :class="messageClasses">
          {{ message }}
        </p>
      </div>

      <button
        v-if="closable"
        type="button"
        :class="closeButtonClasses"
        aria-label="Close notification"
        @click="close"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

const props = withDefaults(
  defineProps<{
    type?: 'success' | 'error' | 'warning' | 'info';
    title?: string;
    message: string;
    duration?: number;
    closable?: boolean;
    persistent?: boolean;
  }>(),
  {
    type: 'info',
    duration: 5000,
    closable: true,
    persistent: false,
  }
);

const emit = defineEmits<{
  close: [];
}>();

const visible = ref(true);
let timer: ReturnType<typeof setTimeout> | null = null;

const toastClasses = computed(() => {
  const baseClasses = [
    'toast',
    'flex',
    'items-start',
    'p-4',
    'rounded-lg',
    'shadow-lg',
    'max-w-sm',
    'w-full',
    'backdrop-blur-sm',
    'border',
  ];

  switch (props.type) {
    case 'success':
      baseClasses.push('bg-green-50', 'border-green-200', 'text-green-800');
      break;
    case 'error':
      baseClasses.push('bg-red-50', 'border-red-200', 'text-red-800');
      break;
    case 'warning':
      baseClasses.push('bg-yellow-50', 'border-yellow-200', 'text-yellow-800');
      break;
    case 'info':
    default:
      baseClasses.push('bg-blue-50', 'border-blue-200', 'text-blue-800');
      break;
  }

  return baseClasses.join(' ');
});

const iconContainerClasses = computed(() => ['flex-shrink-0', 'mr-3']);

const iconClasses = computed(() => {
  const baseClasses = ['w-5', 'h-5'];

  switch (props.type) {
    case 'success':
      baseClasses.push('text-green-500');
      break;
    case 'error':
      baseClasses.push('text-red-500');
      break;
    case 'warning':
      baseClasses.push('text-yellow-500');
      break;
    case 'info':
    default:
      baseClasses.push('text-blue-500');
      break;
  }

  return baseClasses.join(' ');
});

const titleClasses = computed(() => ['font-medium', 'text-sm', 'mb-1']);

const messageClasses = computed(() =>
  ['text-sm', !props.title && 'font-medium'].filter(Boolean).join(' ')
);

const closeButtonClasses = computed(() => [
  'flex-shrink-0',
  'ml-3',
  'text-gray-400',
  'hover:text-gray-600',
  'transition-colors',
  'duration-200',
]);

const iconComponent = computed(() => {
  switch (props.type) {
    case 'success':
      return 'CheckCircleIcon';
    case 'error':
      return 'XCircleIcon';
    case 'warning':
      return 'ExclamationTriangleIcon';
    case 'info':
    default:
      return 'InformationCircleIcon';
  }
});

const startTimer = () => {
  if (!props.persistent && props.duration > 0) {
    timer = setTimeout(() => {
      close();
    }, props.duration);
  }
};

const pauseTimer = () => {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
};

const resumeTimer = () => {
  startTimer();
};

const close = () => {
  visible.value = false;
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
  emit('close');
};

const onEnter = () => {
  // Animation enter
};

const onLeave = () => {
  // Animation leave
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  if (timer) {
    clearTimeout(timer);
  }
});
</script>

<script lang="ts">
// Icon components (simplified SVG icons)
const CheckCircleIcon = {
  template: `
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
    </svg>
  `,
};

const XCircleIcon = {
  template: `
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
    </svg>
  `,
};

const ExclamationTriangleIcon = {
  template: `
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
  `,
};

const InformationCircleIcon = {
  template: `
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
    </svg>
  `,
};

export { CheckCircleIcon, XCircleIcon, ExclamationTriangleIcon, InformationCircleIcon };
</script>

<style scoped>
.toast-enter-active {
  transition: all 0.3s ease-out;
}

.toast-leave-active {
  transition: all 0.3s ease-in;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
