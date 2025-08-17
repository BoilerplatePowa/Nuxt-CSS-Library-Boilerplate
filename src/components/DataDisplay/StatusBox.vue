<template>
  <div :class="statusClasses">
    <!-- Icon/indicator -->
    <div v-if="showIndicator" :class="indicatorClasses">
      <slot name="indicator">
        <!-- Default indicators based on variant -->
        <div v-if="variant === 'success'" class="w-2 h-2 bg-success rounded-full"></div>
        <div v-else-if="variant === 'error'" class="w-2 h-2 bg-error rounded-full"></div>
        <div v-else-if="variant === 'warning'" class="w-2 h-2 bg-warning rounded-full"></div>
        <div v-else-if="variant === 'info'" class="w-2 h-2 bg-info rounded-full"></div>
        <div v-else-if="variant === 'pending'" class="w-2 h-2 bg-base-300 rounded-full animate-pulse"></div>
        <div v-else class="w-2 h-2 bg-base-300 rounded-full"></div>
      </slot>
    </div>

    <!-- Content -->
    <div class="flex-1">
      <!-- Title -->
      <div v-if="title || $slots.title" :class="titleClasses">
        <slot name="title">{{ title }}</slot>
      </div>

      <!-- Message/Description -->
      <div v-if="message || $slots.default" :class="messageClasses">
        <slot>{{ message }}</slot>
      </div>

      <!-- Timestamp -->
      <div v-if="timestamp" :class="timestampClasses">
        {{ formatTimestamp(timestamp) }}
      </div>
    </div>

    <!-- Actions -->
    <div v-if="actions.length > 0 || $slots.actions" class="flex gap-2 ml-4">
      <slot name="actions">
        <button
          v-for="action in actions"
          :key="action.label"
          :class="getActionClasses(action)"
          @click="handleActionClick(action, $event)"
          :disabled="action.disabled"
        >
          {{ action.label }}
        </button>
      </slot>
    </div>

    <!-- Dismiss button -->
    <button
      v-if="dismissible"
      @click="handleDismiss"
      class="btn btn-ghost btn-sm btn-circle ml-2"
      aria-label="Dismiss"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface StatusAction {
  label: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  size?: 'xs' | 'sm' | 'md';
  disabled?: boolean;
  handler?: () => void;
}

interface StatusBoxProps {
  variant?: 'success' | 'error' | 'warning' | 'info' | 'pending' | 'neutral';
  title?: string;
  message?: string;
  timestamp?: Date | string | number;
  showIndicator?: boolean;
  dismissible?: boolean;
  size?: 'sm' | 'md' | 'lg';
  layout?: 'horizontal' | 'vertical';
  actions?: StatusAction[];
}

const props = withDefaults(defineProps<StatusBoxProps>(), {
  variant: 'neutral',
  showIndicator: true,
  dismissible: false,
  size: 'md',
  layout: 'horizontal',
  actions: () => [],
});

const emit = defineEmits<{
  dismiss: [];
  actionClick: [action: StatusAction, event: Event];
}>();

const statusClasses = computed(() => {
  const baseClasses = ['status', 'flex', 'items-start', 'gap-3'];

  // Layout
  if (props.layout === 'vertical') {
    baseClasses.push('flex-col', 'items-center', 'text-center');
  }

  // Size
  if (props.size === 'sm') {
    baseClasses.push('text-sm', 'p-3');
  } else if (props.size === 'lg') {
    baseClasses.push('text-lg', 'p-6');
  } else {
    baseClasses.push('p-4');
  }

  // Variant styling
  if (props.variant === 'success') {
    baseClasses.push('bg-success/10', 'border', 'border-success/20', 'rounded-lg');
  } else if (props.variant === 'error') {
    baseClasses.push('bg-error/10', 'border', 'border-error/20', 'rounded-lg');
  } else if (props.variant === 'warning') {
    baseClasses.push('bg-warning/10', 'border', 'border-warning/20', 'rounded-lg');
  } else if (props.variant === 'info') {
    baseClasses.push('bg-info/10', 'border', 'border-info/20', 'rounded-lg');
  } else if (props.variant === 'pending') {
    baseClasses.push('bg-base-200', 'border', 'border-base-300', 'rounded-lg');
  } else {
    baseClasses.push('bg-base-100', 'border', 'border-base-300', 'rounded-lg');
  }

  return baseClasses.join(' ');
});

const indicatorClasses = computed(() => {
  const baseClasses = ['flex', 'items-center', 'justify-center'];
  
  if (props.layout === 'vertical') {
    baseClasses.push('mb-2');
  } else {
    baseClasses.push('mt-1');
  }

  return baseClasses.join(' ');
});

const titleClasses = computed(() => {
  const baseClasses = ['font-semibold'];

  // Color based on variant
  if (props.variant === 'success') {
    baseClasses.push('text-success');
  } else if (props.variant === 'error') {
    baseClasses.push('text-error');
  } else if (props.variant === 'warning') {
    baseClasses.push('text-warning');
  } else if (props.variant === 'info') {
    baseClasses.push('text-info');
  }

  // Size
  if (props.size === 'sm') {
    baseClasses.push('text-sm');
  } else if (props.size === 'lg') {
    baseClasses.push('text-lg');
  }

  return baseClasses.join(' ');
});

const messageClasses = computed(() => {
  const baseClasses = [];

  // Size
  if (props.size === 'sm') {
    baseClasses.push('text-xs');
  } else if (props.size === 'lg') {
    baseClasses.push('text-base');
  } else {
    baseClasses.push('text-sm');
  }

  // Spacing
  if (props.title) {
    baseClasses.push('mt-1');
  }

  return baseClasses.join(' ');
});

const timestampClasses = computed(() => {
  const baseClasses = ['text-xs', 'opacity-60', 'mt-1'];
  return baseClasses.join(' ');
});

const getActionClasses = (action: StatusAction) => {
  const baseClasses = ['btn'];

  // Size
  if (action.size === 'xs') {
    baseClasses.push('btn-xs');
  } else if (action.size === 'sm') {
    baseClasses.push('btn-sm');
  }

  // Variant
  if (action.variant === 'primary') {
    baseClasses.push('btn-primary');
  } else if (action.variant === 'secondary') {
    baseClasses.push('btn-secondary');
  } else if (action.variant === 'accent') {
    baseClasses.push('btn-accent');
  } else if (action.variant === 'ghost') {
    baseClasses.push('btn-ghost');
  } else if (action.variant === 'outline') {
    baseClasses.push('btn-outline');
  }

  return baseClasses.join(' ');
};

const formatTimestamp = (timestamp: Date | string | number) => {
  const date = new Date(timestamp);
  
  if (isNaN(date.getTime())) {
    return timestamp.toString();
  }

  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) {
    return 'Just now';
  } else if (diffMins < 60) {
    return `${diffMins}m ago`;
  } else if (diffHours < 24) {
    return `${diffHours}h ago`;
  } else if (diffDays < 7) {
    return `${diffDays}d ago`;
  } else {
    return date.toLocaleDateString();
  }
};

const handleActionClick = (action: StatusAction, event: Event) => {
  if (action.disabled) return;
  
  if (action.handler) {
    action.handler();
  }
  
  emit('actionClick', action, event);
};

const handleDismiss = () => {
  emit('dismiss');
};
</script>
