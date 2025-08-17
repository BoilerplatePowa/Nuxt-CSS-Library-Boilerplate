<template>
  <ul :class="timelineClasses">
    <li 
      v-for="(item, index) in items" 
      :key="getItemKey(item, index)"
    >
      <!-- Top hr for all items except the first -->
      <hr v-if="index > 0" />
      
      <!-- Timeline start content -->
      <div 
        v-if="shouldShowStart(index)" 
        :class="startClasses"
      >
        <slot name="start" :item="item" :index="index">
          {{ item.title }}
        </slot>
      </div>

      <!-- Timeline middle (icon/marker) -->
      <div :class="middleClasses">
        <slot name="middle" :item="item" :index="index">
          <!-- Default icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
            />
          </svg>
        </slot>
      </div>

      <!-- Timeline end content -->
      <div 
        v-if="shouldShowEnd(index)" 
        :class="endClasses"
      >
        <slot name="end" :item="item" :index="index">
          {{ item.title }}
        </slot>
      </div>

      <!-- Bottom hr for all items except the last -->
      <hr v-if="index < items.length - 1" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface TimelineItem {
  id?: string | number;
  title?: string;
  [key: string]: unknown;
}

interface Props {
  items: TimelineItem[];
  direction?: 'vertical' | 'horizontal';
  compact?: boolean;
  snapIcon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'vertical',
  compact: false,
  snapIcon: false,
});

const timelineClasses = computed(() => {
  const baseClasses = ['timeline'];

  // Direction
  if (props.direction === 'horizontal') {
    baseClasses.push('timeline-horizontal');
  } else {
    baseClasses.push('timeline-vertical');
  }

  // Compact modifier
  if (props.compact) {
    baseClasses.push('timeline-compact');
  }

  return baseClasses.join(' ');
});

const shouldShowStart = (index: number) => {
  // In compact mode, all content goes to one side
  if (props.compact) return false;
  
  // For alternating layout, show start on even indices
  return index % 2 === 0;
};

const shouldShowEnd = (index: number) => {
  // In compact mode, all content goes to one side
  if (props.compact) return true;
  
  // For alternating layout, show end on odd indices
  return index % 2 === 1;
};

const startClasses = computed(() => {
  const baseClasses = ['timeline-start'];
  
  // Add box modifier
  baseClasses.push('timeline-box');
  
  // Add snap-icon modifier if enabled
  if (props.snapIcon) {
    baseClasses.push('timeline-snap-icon');
  }

  return baseClasses.join(' ');
});

const middleClasses = computed(() => {
  const baseClasses = ['timeline-middle'];
  
  // Add snap-icon modifier if enabled
  if (props.snapIcon) {
    baseClasses.push('timeline-snap-icon');
  }

  return baseClasses.join(' ');
});

const endClasses = computed(() => {
  const baseClasses = ['timeline-end'];
  
  // Add box modifier
  baseClasses.push('timeline-box');

  return baseClasses.join(' ');
});

const getItemKey = (item: TimelineItem, index: number) => {
  return item.id !== undefined ? item.id : index;
};
</script>
