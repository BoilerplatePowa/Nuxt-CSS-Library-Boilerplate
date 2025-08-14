<template>
  <div class="w-full">
    <div :class="tabsClasses" role="tablist">
      <a
        v-for="(tab, index) in tabs"
        :key="getTabKey(tab, index)"
        :class="getTabClasses(tab, index)"
        :aria-selected="isActiveTab(tab, index)"
        role="tab"
        @click="selectTab(tab, index, $event)"
      >
        {{ tab.label }}
        <span v-if="tab.badge" class="badge badge-sm ml-1">{{ tab.badge }}</span>
      </a>
    </div>
    
    <div v-if="$slots.default" class="tab-content mt-4">
      <slot />
    </div>
    
    <div v-else-if="tabs.length > 0 && tabs[activeIndex]?.content" class="tab-content mt-4">
      <div v-html="tabs[activeIndex].content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

interface Tab {
  label: string;
  value?: string | number;
  content?: string;
  disabled?: boolean;
  badge?: string | number;
}

interface Props {
  tabs?: Tab[];
  modelValue?: string | number;
  variant?: 'default' | 'bordered' | 'lifted' | 'boxed';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  tabs: () => [],
  variant: 'default',
  size: 'md',
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number];
  'tab-change': [value: string | number];
}>();

const activeIndex = ref(0);

// Helper functions
const getTabValue = (tab: Tab): string | number => {
  return tab.value !== undefined ? tab.value : tab.label;
};

const getTabKey = (tab: Tab, index: number): string => {
  return getTabValue(tab).toString() || index.toString();
};



// Watch for external model value changes
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue !== undefined) {
      const index = props.tabs.findIndex(tab => getTabValue(tab) === newValue);
      if (index >= 0) {
        activeIndex.value = index;
      }
    }
  },
  { immediate: true }
);

const tabsClasses = computed(() => {
  const baseClasses = ['tabs'];

  // Variant classes
  if (props.variant === 'bordered') {
    baseClasses.push('tabs-bordered');
  } else if (props.variant === 'lifted') {
    baseClasses.push('tabs-lifted');
  } else if (props.variant === 'boxed') {
    baseClasses.push('tabs-boxed');
  }

  // Size classes
  if (props.size === 'xs') {
    baseClasses.push('tabs-xs');
  } else if (props.size === 'sm') {
    baseClasses.push('tabs-sm');
  } else if (props.size === 'lg') {
    baseClasses.push('tabs-lg');
  }

  return baseClasses.join(' ');
});

const getTabClasses = (tab: Tab, index: number) => {
  const classes = ['tab'];

  if (isActiveTab(tab, index)) {
    classes.push('tab-active');
  }

  if (tab.disabled || props.disabled) {
    classes.push('tab-disabled');
  }

  return classes.join(' ');
};

const isActiveTab = (tab: Tab, index: number): boolean => {
  if (props.modelValue !== undefined) {
    return getTabValue(tab) === props.modelValue;
  }
  return index === activeIndex.value;
};

const selectTab = (tab: Tab, index: number, event: Event) => {
  if (tab.disabled || props.disabled) {
    event.preventDefault();
    return;
  }

  activeIndex.value = index;
  const tabValue = getTabValue(tab);
  
  emit('update:modelValue', tabValue);
  emit('tab-change', tabValue);
};


</script>

<style scoped lang="postcss">
/* DaisyUI handles most tabs styling */
.tab-content {
  @apply min-h-0;
}
</style>
