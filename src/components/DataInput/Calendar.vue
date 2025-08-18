<template>
  <div :class="containerClasses">
    <!-- Date Picker Mode -->
    <div v-if="isDatePicker" class="relative">
      <button 
        :popovertarget="popoverId"
        :class="inputClasses"
        :id="buttonId"
        :disabled="disabled"
        :style="{ 'anchor-name': `--${buttonId}` } as any"
      >
        {{ displayValue }}
      </button>
      
      <div 
        :popover="true"
        :id="popoverId"
        :class="dropdownClasses"
        :style="{ 'position-anchor': `--${buttonId}` } as any"
      >
        <component 
          :is="calendarComponent"
          :class="callyClasses"
          :onchange="`document.getElementById('${buttonId}').innerText = this.value`"
        >
          <svg 
            aria-label="Previous" 
            class="fill-current size-4" 
            slot="previous" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
          </svg>
          <svg 
            aria-label="Next" 
            class="fill-current size-4" 
            slot="next" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
          </svg>
          <calendar-month></calendar-month>
        </component>
      </div>
    </div>

    <!-- Calendar Display Mode -->
    <component 
      :is="calendarComponent"
      v-else
      :class="callyClasses"
    >
      <svg 
        aria-label="Previous" 
        class="fill-current size-4" 
        slot="previous" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24"
      >
        <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
      </svg>
      <svg 
        aria-label="Next" 
        class="fill-current size-4" 
        slot="next" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24"
      >
        <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
      </svg>
      <calendar-month></calendar-month>
    </component>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import 'cally';

interface Props {
  modelValue?: Date | string | null;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'bordered' | 'filled';
  disabled?: boolean;
  readonly?: boolean;
  minDate?: Date | string;
  maxDate?: Date | string;
  disabledDates?: Date[] | string[];
  events?: Record<string, any[]>;
  allowMonthSelect?: boolean;
  allowYearSelect?: boolean;
  showToday?: boolean;
  yearRange?: [number, number];
  locale?: string;
  mode?: 'calendar' | 'datepicker';
  placeholder?: string;
  range?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'default',
  disabled: false,
  readonly: false,
  allowMonthSelect: true,
  allowYearSelect: true,
  showToday: true,
  yearRange: () => [new Date().getFullYear() - 10, new Date().getFullYear() + 10],
  locale: 'en-US',
  mode: 'calendar',
  placeholder: 'Pick a date',
  range: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: Date | null];
  dayClick: [day: any];
  monthChange: [month: number, year: number];
}>();



// Computed properties
const isDatePicker = computed(() => props.mode === 'datepicker');

const buttonId = computed(() => `calendar-button-${Math.random().toString(36).substr(2, 9)}`);
const popoverId = computed(() => `calendar-popover-${Math.random().toString(36).substr(2, 9)}`);

const calendarComponent = computed(() => props.range ? 'calendar-range' : 'calendar-date');

const containerClasses = computed(() => {
  const baseClasses = ['calendar-container'];
  
  if (props.disabled) {
    baseClasses.push('opacity-60', 'pointer-events-none');
  }
  
  return baseClasses.join(' ');
});

const inputClasses = computed(() => {
  const baseClasses = ['input', 'input-border', 'w-full', 'cursor-pointer'];
  
  // Size
  if (props.size === 'sm') {
    baseClasses.push('input-sm');
  } else if (props.size === 'lg') {
    baseClasses.push('input-lg');
  }
  
  // Variant
  if (props.variant === 'filled') {
    baseClasses.push('bg-base-200');
  }
  
  return baseClasses.join(' ');
});

const dropdownClasses = computed(() => {
  return ['dropdown', 'bg-base-100', 'rounded-box', 'shadow-lg'];
});

const callyClasses = computed(() => {
  const baseClasses = ['cally', 'bg-base-100'];
  
  // Variant
  if (props.variant === 'bordered') {
    baseClasses.push('border', 'border-base-300', 'rounded-box');
  } else if (props.variant === 'filled') {
    baseClasses.push('bg-base-200', 'rounded-box');
  } else {
    baseClasses.push('rounded-box');
  }
  
  // Size
  if (props.size === 'sm') {
    baseClasses.push('text-sm');
  } else if (props.size === 'lg') {
    baseClasses.push('text-lg');
  }
  
  return baseClasses.join(' ');
});

const displayValue = computed(() => {
  if (!props.modelValue) {
    return props.placeholder;
  }
  
  const date = new Date(props.modelValue);
  if (isNaN(date.getTime())) {
    return props.placeholder;
  }
  
  return date.toLocaleDateString(props.locale);
});

// Methods
const isDateValid = (date: Date) => {
  // Check min/max date constraints
  if (props.minDate && date < new Date(props.minDate)) {
    return false;
  }
  
  if (props.maxDate && date > new Date(props.maxDate)) {
    return false;
  }
  
  // Check disabled dates
  if (props.disabledDates) {
    const dateString = date.toISOString().split('T')[0];
    return !props.disabledDates.some(disabledDate => {
      const disabledDateString = new Date(disabledDate).toISOString().split('T')[0];
      return dateString === disabledDateString;
    });
  }
  
  return true;
};
</script>


