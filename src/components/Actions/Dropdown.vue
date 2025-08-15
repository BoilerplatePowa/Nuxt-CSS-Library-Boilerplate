<template>
  <div :class="dropdownClasses" @focusout="handleFocusOut">
    <div 
      :tabindex="disabled ? -1 : 0" 
      role="button" 
      :class="triggerClasses" 
      @click="toggle" 
      @keydown="handleKeydown"
      :aria-disabled="disabled"
    >
      <slot name="trigger">
        <span>{{ triggerText || 'Dropdown' }}</span>
        <svg
          class="w-2.5 h-2.5 ml-2.5 transition-transform"
          :class="{ 'rotate-180': isOpen }"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
        </svg>
      </slot>
    </div>
    
    <ul
      tabindex="0"
      :class="menuClasses"
      @click="handleMenuClick"
    >
      <slot>
        <li v-for="item in items" :key="getItemKey(item)">
          <a
            v-if="getItemHref(item)"
            :href="getItemHref(item)"
            :class="getItemClasses(item)"
            @click="handleItemClick(item, $event)"
          >
            {{ getItemLabel(item) }}
          </a>
          <button
            v-else
            type="button"
            :class="getItemClasses(item)"
            :disabled="getItemDisabled(item)"
            @click="handleItemClick(item, $event)"
          >
            {{ getItemLabel(item) }}
          </button>
        </li>
      </slot>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue';

interface DropdownItem {
  label: string;
  value?: string | number;
  href?: string;
  disabled?: boolean;
  divider?: boolean;
  active?: boolean;
}

interface Props {
  items?: DropdownItem[];
  triggerText?: string;
  position?: 'bottom' | 'top' | 'left' | 'right';
  align?: 'start' | 'end';
  hover?: boolean;
  forceOpen?: boolean;
  disabled?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  position: 'bottom',
  align: 'start',
  hover: false,
  forceOpen: false,
  disabled: false,
  size: 'md',
  variant: 'ghost',
});

const emit = defineEmits<{
  'item-click': [item: DropdownItem, event: Event];
  open: [];
  close: [];
}>();

const isOpen = ref(false);

const dropdownClasses = computed(() => {
  const baseClasses = ['dropdown'];

  // Position classes
  if (props.position === 'top') {
    baseClasses.push('dropdown-top');
  } else if (props.position === 'left') {
    baseClasses.push('dropdown-left');
  } else if (props.position === 'right') {
    baseClasses.push('dropdown-right');
  }
  // 'bottom' is default

  // Alignment
  if (props.align === 'end') {
    baseClasses.push('dropdown-end');
  }

  // Hover behavior
  if (props.hover) {
    baseClasses.push('dropdown-hover');
  }

  // Force open
  if (props.forceOpen || isOpen.value) {
    baseClasses.push('dropdown-open');
  }

  return baseClasses.join(' ');
});

const triggerClasses = computed(() => {
  const baseClasses = ['btn', 'flex', 'items-center'];

  // Size classes
  if (props.size === 'xs') {
    baseClasses.push('btn-xs');
  } else if (props.size === 'sm') {
    baseClasses.push('btn-sm');
  } else if (props.size === 'lg') {
    baseClasses.push('btn-lg');
  }

  // Variant classes
  if (props.variant === 'primary') {
    baseClasses.push('btn-primary');
  } else if (props.variant === 'secondary') {
    baseClasses.push('btn-secondary');
  } else if (props.variant === 'accent') {
    baseClasses.push('btn-accent');
  } else if (props.variant === 'ghost') {
    baseClasses.push('btn-ghost');
  } else if (props.variant === 'outline') {
    baseClasses.push('btn-outline');
  }

  if (props.disabled) {
    baseClasses.push('btn-disabled');
  }

  return baseClasses.join(' ');
});

const menuClasses = computed(() => {
  const classes = [
    'dropdown-content',
    'menu',
    'bg-base-100',
    'rounded-box',
    'z-[1]',
    'w-52',
    'p-2',
    'shadow'
  ];
  
  return classes.join(' ');
});

const toggle = () => {
  if (props.disabled) return;
  
  isOpen.value = !isOpen.value;
  
  if (isOpen.value) {
    emit('open');
  } else {
    emit('close');
  }
};

const close = () => {
  if (isOpen.value) {
    isOpen.value = false;
    emit('close');
  }
};

const handleFocusOut = async (event: FocusEvent) => {
  // Wait for the next tick to see if focus moved to a child element
  await nextTick();
  
  const dropdown = event.currentTarget as HTMLElement;
  if (!dropdown.contains(document.activeElement)) {
    close();
  }
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    toggle();
  } else if (event.key === 'Escape') {
    close();
  }
};

const handleMenuClick = (event: Event) => {
  // Don't close if clicking on disabled items or dividers
  const target = event.target as HTMLElement;
  if (target.hasAttribute('disabled') || target.classList.contains('menu-title')) {
    return;
  }
  
  // Close dropdown after item selection
  close();
};

const handleItemClick = (item: DropdownItem, event: Event) => {
  if (item.disabled) {
    event.preventDefault();
    return;
  }
  
  emit('item-click', item, event);
};

// Helper functions for item rendering
const getItemKey = (item: DropdownItem | string): string => {
  if (typeof item === 'string') return item;
  return item.value?.toString() || item.label;
};

const getItemLabel = (item: DropdownItem | string): string => {
  if (typeof item === 'string') return item;
  return item.label;
};

const getItemHref = (item: DropdownItem | string): string | undefined => {
  if (typeof item === 'string') return undefined;
  return item.href;
};

const getItemDisabled = (item: DropdownItem | string): boolean => {
  if (typeof item === 'string') return false;
  return item.disabled || false;
};

const getItemClasses = (item: DropdownItem | string) => {
  const classes = [];
  
  if (typeof item === 'object') {
    if (item.active) classes.push('active');
    if (item.disabled) classes.push('disabled');
  }
  
  return classes.join(' ');
};
</script>

<style scoped lang="postcss">
/* DaisyUI handles most dropdown styling */
</style>
