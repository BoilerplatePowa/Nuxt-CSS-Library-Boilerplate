<template>
  <div :class="timelineClasses">
    <div 
      v-for="(item, index) in items" 
      :key="getItemKey(item, index)"
      :class="getItemClasses(item, index)"
    >
      <!-- Timeline marker/icon -->
      <div :class="markerClasses">
        <slot name="marker" :item="item" :index="index">
          <!-- Custom icon -->
          <div v-if="item.icon" :class="iconClasses">
            <component 
              v-if="typeof item.icon === 'string'" 
              :is="item.icon"
              class="w-4 h-4"
            />
            <span v-else class="text-sm">{{ item.icon }}</span>
          </div>
          <!-- Default marker based on status -->
          <div v-else :class="defaultMarkerClasses(item)"></div>
        </slot>
      </div>

      <!-- Timeline connector line -->
      <div 
        v-if="index < items.length - 1" 
        :class="connectorClasses"
      ></div>

      <!-- Timeline content -->
      <div :class="contentClasses">
        <slot name="item" :item="item" :index="index">
          <!-- Timestamp -->
          <div v-if="item.timestamp" :class="timestampClasses">
            {{ formatTimestamp(item.timestamp) }}
          </div>

          <!-- Title -->
          <div v-if="item.title" :class="titleClasses">
            {{ item.title }}
          </div>

          <!-- Description -->
          <div v-if="item.description" :class="descriptionClasses">
            {{ item.description }}
          </div>

          <!-- Status badge -->
          <div v-if="item.status" :class="statusClasses">
            <span :class="getStatusBadgeClasses(item.status)">
              {{ item.status }}
            </span>
          </div>

          <!-- Actions -->
          <div v-if="item.actions && item.actions.length > 0" class="flex gap-2 mt-2">
            <button
              v-for="action in item.actions"
              :key="action.label"
              :class="getActionClasses(action)"
              @click="handleActionClick(action, item, index, $event)"
              :disabled="action.disabled"
            >
              {{ action.label }}
            </button>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface TimelineAction {
  label: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  size?: 'xs' | 'sm' | 'md';
  disabled?: boolean;
  handler?: () => void;
}

interface TimelineItem {
  id?: string | number;
  title?: string;
  description?: string;
  timestamp?: Date | string | number;
  status?: 'pending' | 'active' | 'completed' | 'error' | 'warning';
  icon?: string;
  actions?: TimelineAction[];
  [key: string]: unknown;
}

interface Props {
  items: TimelineItem[];
  orientation?: 'vertical' | 'horizontal';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'compact' | 'detailed';
  showConnectors?: boolean;
  snapToSides?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'vertical',
  size: 'md',
  variant: 'default',
  showConnectors: true,
  snapToSides: false,
});

const emit = defineEmits<{
  actionClick: [action: TimelineAction, item: TimelineItem, index: number, event: Event];
}>();

const timelineClasses = computed(() => {
  const baseClasses = ['timeline'];

  // Orientation
  if (props.orientation === 'horizontal') {
    baseClasses.push('timeline-horizontal', 'flex', 'items-start', 'gap-8', 'overflow-x-auto');
  } else {
    baseClasses.push('timeline-vertical', 'space-y-6');
  }

  // Variant
  if (props.variant === 'compact') {
    baseClasses.push('timeline-compact');
  } else if (props.variant === 'detailed') {
    baseClasses.push('timeline-detailed');
  }

  return baseClasses.join(' ');
});

const getItemClasses = (item: TimelineItem, index: number) => {
  const baseClasses = ['timeline-item', 'relative'];

  if (props.orientation === 'horizontal') {
    baseClasses.push('flex', 'flex-col', 'items-center', 'min-w-max');
  } else {
    baseClasses.push('flex', 'gap-4');
    
    // Snap to sides for vertical timeline
    if (props.snapToSides) {
      if (index % 2 === 0) {
        baseClasses.push('timeline-start');
      } else {
        baseClasses.push('timeline-end', 'flex-row-reverse');
      }
    }
  }

  // Status-based styling
  if (item.status === 'active') {
    baseClasses.push('timeline-active');
  } else if (item.status === 'completed') {
    baseClasses.push('timeline-completed');
  } else if (item.status === 'error') {
    baseClasses.push('timeline-error');
  }

  return baseClasses.join(' ');
};

const markerClasses = computed(() => {
  const baseClasses = ['timeline-marker', 'relative', 'flex', 'items-center', 'justify-center', 'rounded-full', 'border-2', 'bg-base-100'];

  // Size
  if (props.size === 'sm') {
    baseClasses.push('w-6', 'h-6');
  } else if (props.size === 'lg') {
    baseClasses.push('w-10', 'h-10');
  } else {
    baseClasses.push('w-8', 'h-8');
  }

  return baseClasses.join(' ');
});

const iconClasses = computed(() => {
  const baseClasses = ['flex', 'items-center', 'justify-center'];
  return baseClasses.join(' ');
});

const connectorClasses = computed(() => {
  if (!props.showConnectors) return 'hidden';

  const baseClasses = ['timeline-connector'];

  if (props.orientation === 'horizontal') {
    baseClasses.push('absolute', 'top-1/2', 'left-full', 'w-8', 'h-0.5', 'bg-base-300', 'transform', '-translate-y-1/2');
  } else {
    baseClasses.push('absolute', 'top-full', 'left-1/2', 'w-0.5', 'h-6', 'bg-base-300', 'transform', '-translate-x-1/2');
  }

  return baseClasses.join(' ');
});

const contentClasses = computed(() => {
  const baseClasses = ['timeline-content', 'flex-1'];

  // Size-based padding
  if (props.size === 'sm') {
    baseClasses.push('text-sm');
  } else if (props.size === 'lg') {
    baseClasses.push('text-lg');
  }

  // Variant styling
  if (props.variant === 'detailed') {
    baseClasses.push('bg-base-100', 'border', 'border-base-300', 'rounded-lg', 'p-4', 'shadow-sm');
  } else if (props.variant === 'compact') {
    baseClasses.push('py-1');
  } else {
    baseClasses.push('py-2');
  }

  return baseClasses.join(' ');
});

const timestampClasses = computed(() => {
  const baseClasses = ['timeline-timestamp', 'text-xs', 'opacity-60', 'font-medium'];
  
  if (props.variant === 'compact') {
    baseClasses.push('mb-1');
  } else {
    baseClasses.push('mb-2');
  }

  return baseClasses.join(' ');
});

const titleClasses = computed(() => {
  const baseClasses = ['timeline-title', 'font-semibold'];

  if (props.size === 'sm') {
    baseClasses.push('text-sm');
  } else if (props.size === 'lg') {
    baseClasses.push('text-lg');
  } else {
    baseClasses.push('text-base');
  }

  if (props.variant !== 'compact') {
    baseClasses.push('mb-1');
  }

  return baseClasses.join(' ');
});

const descriptionClasses = computed(() => {
  const baseClasses = ['timeline-description', 'opacity-70'];

  if (props.size === 'sm') {
    baseClasses.push('text-xs');
  } else if (props.size === 'lg') {
    baseClasses.push('text-base');
  } else {
    baseClasses.push('text-sm');
  }

  return baseClasses.join(' ');
});

const statusClasses = computed(() => {
  const baseClasses = ['timeline-status', 'mt-2'];
  return baseClasses.join(' ');
});

const defaultMarkerClasses = (item: TimelineItem) => {
  const baseClasses = ['w-2', 'h-2', 'rounded-full'];

  if (item.status === 'completed') {
    baseClasses.push('bg-success');
  } else if (item.status === 'active') {
    baseClasses.push('bg-primary');
  } else if (item.status === 'error') {
    baseClasses.push('bg-error');
  } else if (item.status === 'warning') {
    baseClasses.push('bg-warning');
  } else {
    baseClasses.push('bg-base-300');
  }

  return baseClasses.join(' ');
};

const getStatusBadgeClasses = (status: string) => {
  const baseClasses = ['badge', 'badge-sm'];

  if (status === 'completed') {
    baseClasses.push('badge-success');
  } else if (status === 'active') {
    baseClasses.push('badge-primary');
  } else if (status === 'error') {
    baseClasses.push('badge-error');
  } else if (status === 'warning') {
    baseClasses.push('badge-warning');
  } else {
    baseClasses.push('badge-ghost');
  }

  return baseClasses.join(' ');
};

const getActionClasses = (action: TimelineAction) => {
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

const getItemKey = (item: TimelineItem, index: number) => {
  return item.id !== undefined ? item.id : index;
};

const formatTimestamp = (timestamp: Date | string | number) => {
  const date = new Date(timestamp);
  
  if (isNaN(date.getTime())) {
    return timestamp.toString();
  }

  return date.toLocaleString();
};

const handleActionClick = (action: TimelineAction, item: TimelineItem, index: number, event: Event) => {
  if (action.disabled) return;
  
  if (action.handler) {
    action.handler();
  }
  
  emit('actionClick', action, item, index, event);
};
</script>

<style scoped lang="postcss">
.timeline {
  @apply relative;
}

/* Vertical timeline connector positioning */
.timeline-vertical .timeline-item .timeline-connector {
  @apply absolute top-full left-1/2 w-0.5 h-6 bg-base-300 transform -translate-x-1/2;
}

/* Horizontal timeline connector positioning */
.timeline-horizontal .timeline-item .timeline-connector {
  @apply absolute top-1/2 left-full w-8 h-0.5 bg-base-300 transform -translate-y-1/2;
}

/* Marker border colors based on status */
.timeline-item .timeline-marker {
  @apply border-base-300;
}

.timeline-active .timeline-marker {
  @apply border-primary;
}

.timeline-completed .timeline-marker {
  @apply border-success;
}

.timeline-error .timeline-marker {
  @apply border-error;
}

/* Snap to sides styling */
.timeline-start .timeline-content {
  @apply text-left;
}

.timeline-end .timeline-content {
  @apply text-right;
}
</style>
