<template>
  <div :class="accordionClasses">
    <slot>
      <div
        v-for="(item, index) in items"
        :key="getItemKey(item, index)"
        class="collapse collapse-arrow"
        :class="getItemClasses(item)"
      >
        <input
          :id="`accordion-${accordionId}-${index}`"
          type="radio"
          :name="radioGroupName"
          :checked="isItemOpen(item, index)"
          class="collapse-checkbox"
          @change="handleItemToggle(item, index, $event)"
        />
        <label
          :for="`accordion-${accordionId}-${index}`"
          class="collapse-title text-xl font-medium cursor-pointer"
          :class="{ 'opacity-50 cursor-not-allowed': item.disabled }"
        >
          {{ item.title }}
        </label>
        <div class="collapse-content">
          <div class="pt-2">
            <div v-if="item.content" v-html="item.content"></div>
            <slot
              v-else
              :name="`item-${index}`"
              :item="item"
              :index="index"
              :isOpen="isItemOpen(item, index)"
            />
          </div>
        </div>
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// Generate unique ID for each accordion instance
const generateAccordionId = () => `accordion-${Math.random().toString(36).substr(2, 9)}`;

interface AccordionItem {
  title: string;
  content?: string;
  value?: string | number;
  disabled?: boolean;
  defaultOpen?: boolean;
}

interface Props {
  items?: AccordionItem[];
  modelValue?: string | number;
  multiple?: boolean;
  variant?: 'default' | 'bordered' | 'compact';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  id?: string;
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  multiple: false,
  variant: 'default',
  size: 'md',
  disabled: false,
  id: undefined,
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number | null];
  'item-toggle': [item: AccordionItem, index: number, isOpen: boolean];
}>();

const accordionId = props.id || generateAccordionId();
const openItems = ref(new Set<number>());

// Initialize open items based on defaultOpen or modelValue
const initializeOpenItems = () => {
  if (props.modelValue !== undefined) {
    const index = props.items.findIndex(item => getItemValue(item) === props.modelValue);
    if (index >= 0) {
      openItems.value.add(index);
    }
  } else {
    props.items.forEach((item, index) => {
      if (item.defaultOpen) {
        openItems.value.add(index);
      }
    });
  }
};

// Initialize on mount
initializeOpenItems();

const radioGroupName = computed(() => `accordion-${accordionId}`);

const accordionClasses = computed(() => {
  const baseClasses = ['space-y-2'];

  if (props.variant === 'bordered') {
    baseClasses.push('border', 'border-base-300', 'rounded-box', 'p-2');
  } else if (props.variant === 'compact') {
    baseClasses.push('space-y-1');
  }

  return baseClasses.join(' ');
});

const getItemClasses = (item: AccordionItem) => {
  const classes = ['bg-base-200'];

  if (props.variant === 'bordered') {
    classes.push('border', 'border-base-300', 'rounded-box');
  }

  if (item.disabled || props.disabled) {
    classes.push('opacity-50');
  }

  return classes.join(' ');
};

const getItemKey = (item: AccordionItem, index: number): string => {
  return getItemValue(item).toString() || index.toString();
};

const getItemValue = (item: AccordionItem): string | number => {
  return item.value !== undefined ? item.value : item.title;
};

const isItemOpen = (item: AccordionItem, index: number): boolean => {
  if (props.multiple) {
    return openItems.value.has(index);
  }
  
  if (props.modelValue !== undefined) {
    return getItemValue(item) === props.modelValue;
  }
  
  return openItems.value.has(index);
};

const handleItemToggle = (item: AccordionItem, index: number, event: Event) => {
  if (item.disabled || props.disabled) {
    event.preventDefault();
    return;
  }

  const target = event.target as HTMLInputElement;
  const isOpen = target.checked;

  if (props.multiple) {
    if (isOpen) {
      openItems.value.add(index);
    } else {
      openItems.value.delete(index);
    }
  } else {
    openItems.value.clear();
    if (isOpen) {
      openItems.value.add(index);
      emit('update:modelValue', getItemValue(item));
    } else {
      emit('update:modelValue', null);
    }
  }

  emit('item-toggle', item, index, isOpen);
};
</script>

<style scoped lang="postcss">
/* DaisyUI handles most accordion styling */
</style>
