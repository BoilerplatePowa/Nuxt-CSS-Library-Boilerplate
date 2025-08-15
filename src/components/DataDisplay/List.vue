<template>
  <ul :class="listClasses">
    <li 
      v-for="(item, index) in items" 
      :key="getItemKey(item, index)"
      :class="getItemClasses(item)"
      @click="handleItemClick(item, index, $event)"
    >
      <slot name="item" :item="item" :index="index">
        <!-- Default item rendering -->
        <div v-if="item.avatar || item.icon" :class="avatarClasses">
          <img 
            v-if="item.avatar" 
            :src="item.avatar" 
            :alt="item.avatarAlt || ''"
            class="w-full h-full object-cover"
          />
          <component 
            v-else-if="item.icon" 
            :is="item.icon"
            class="w-6 h-6"
          />
        </div>
        
        <div class="flex-1">
          <div class="flex justify-between items-start">
            <div>
              <h3 v-if="item.title" class="font-semibold">{{ item.title }}</h3>
              <p v-if="item.subtitle" class="text-sm opacity-70">{{ item.subtitle }}</p>
            </div>
            <div v-if="item.meta" class="text-xs opacity-60">
              {{ item.meta }}
            </div>
          </div>
          
          <p v-if="item.description" class="text-sm mt-1">{{ item.description }}</p>
          
          <div v-if="item.actions" class="flex gap-2 mt-2">
            <button 
              v-for="action in item.actions"
              :key="action.label"
              :class="getActionClasses(action)"
              @click.stop="handleActionClick(action, item, index, $event)"
            >
              {{ action.label }}
            </button>
          </div>
        </div>
        
        <div v-if="item.badge" class="badge badge-sm">
          {{ item.badge }}
        </div>
      </slot>
    </li>
    
    <!-- Empty state -->
    <li v-if="items.length === 0 && showEmpty" class="list-item text-center py-8 opacity-60">
      <slot name="empty">
        <div>
          <svg class="w-12 h-12 mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          <p>No items found</p>
        </div>
      </slot>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface ListAction {
  label: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  size?: 'xs' | 'sm' | 'md';
  disabled?: boolean;
  handler?: () => void;
}

interface ListItem {
  id?: string | number;
  title?: string;
  subtitle?: string;
  description?: string;
  avatar?: string;
  avatarAlt?: string;
  icon?: string;
  badge?: string;
  meta?: string;
  disabled?: boolean;
  selectable?: boolean;
  selected?: boolean;
  actions?: ListAction[];
  [key: string]: unknown; // Allow additional properties
}

interface Props {
  items: ListItem[];
  variant?: 'default' | 'bordered' | 'hover' | 'zebra';
  size?: 'sm' | 'md' | 'lg';
  clickable?: boolean;
  selectable?: boolean;
  showEmpty?: boolean;
  dividers?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
  clickable: false,
  selectable: false,
  showEmpty: true,
  dividers: true,
});

const emit = defineEmits<{
  itemClick: [item: ListItem, index: number, event: Event];
  actionClick: [action: ListAction, item: ListItem, index: number, event: Event];
}>();

const listClasses = computed(() => {
  const baseClasses = ['list'];

  // Variant classes
  if (props.variant === 'bordered') {
    baseClasses.push('list-bordered');
  } else if (props.variant === 'hover') {
    baseClasses.push('list-hover');
  } else if (props.variant === 'zebra') {
    baseClasses.push('list-zebra');
  }

  // Size classes
  if (props.size === 'sm') {
    baseClasses.push('list-sm');
  } else if (props.size === 'lg') {
    baseClasses.push('list-lg');
  }

  return baseClasses.join(' ');
});

const avatarClasses = computed(() => {
  const baseClasses = ['avatar', 'mr-3'];
  
  if (props.size === 'sm') {
    baseClasses.push('w-8', 'h-8');
  } else if (props.size === 'lg') {
    baseClasses.push('w-12', 'h-12');
  } else {
    baseClasses.push('w-10', 'h-10');
  }

  return baseClasses.join(' ');
});

const getItemKey = (item: ListItem, index: number) => {
  return item.id !== undefined ? item.id : index;
};

const getItemClasses = (item: ListItem) => {
  const baseClasses = ['list-item', 'flex', 'items-center'];

  if (props.dividers) {
    baseClasses.push('border-b', 'border-base-200', 'last:border-b-0');
  }

  // Padding based on size
  if (props.size === 'sm') {
    baseClasses.push('px-3', 'py-2');
  } else if (props.size === 'lg') {
    baseClasses.push('px-6', 'py-4');
  } else {
    baseClasses.push('px-4', 'py-3');
  }

  // Interactive states
  if (props.clickable || item.selectable || props.selectable) {
    baseClasses.push('cursor-pointer', 'hover:bg-base-200');
  }

  if (item.selected) {
    baseClasses.push('bg-primary', 'text-primary-content');
  }

  if (item.disabled) {
    baseClasses.push('opacity-50', 'cursor-not-allowed');
  }

  return baseClasses.join(' ');
};

const getActionClasses = (action: ListAction) => {
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

const handleItemClick = (item: ListItem, index: number, event: Event) => {
  if (item.disabled) return;
  
  if (props.clickable || item.selectable || props.selectable) {
    emit('itemClick', item, index, event);
  }
};

const handleActionClick = (action: ListAction, item: ListItem, index: number, event: Event) => {
  if (action.disabled) return;
  
  if (action.handler) {
    action.handler();
  }
  
  emit('actionClick', action, item, index, event);
};
</script>

<style scoped lang="postcss">
.list {
  @apply w-full;
}

.list-bordered {
  @apply border border-base-300 rounded-lg;
}

.list-hover .list-item:hover {
  @apply bg-base-200;
}

.list-zebra .list-item:nth-child(even) {
  @apply bg-base-200;
}

.list-sm .list-item {
  @apply text-sm;
}

.list-lg .list-item {
  @apply text-lg;
}

.avatar {
  @apply rounded-full overflow-hidden bg-base-300 flex items-center justify-center;
}
</style>
