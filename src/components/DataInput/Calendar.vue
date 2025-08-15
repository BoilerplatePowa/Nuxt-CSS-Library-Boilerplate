<template>
  <div :class="calendarClasses">
    <!-- Header -->
    <div :class="headerClasses">
      <div class="flex items-center justify-between">
        <!-- Previous month button -->
        <button
          @click="previousMonth"
          :class="navButtonClasses"
          :disabled="disabled"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Month/Year display -->
        <div class="flex items-center gap-2">
          <select
            v-if="allowMonthSelect"
            v-model="displayMonth"
            :class="selectClasses"
            :disabled="disabled"
            @change="handleMonthChange"
          >
            <option v-for="(month, index) in monthNames" :key="index" :value="index">
              {{ month }}
            </option>
          </select>
          <h3 v-else class="font-semibold">{{ monthNames[displayMonth] }}</h3>

          <select
            v-if="allowYearSelect"
            v-model="displayYear"
            :class="selectClasses"
            :disabled="disabled"
            @change="handleYearChange"
          >
            <option v-for="year in availableYears" :key="year" :value="year">
              {{ year }}
            </option>
          </select>
          <h3 v-else class="font-semibold">{{ displayYear }}</h3>
        </div>

        <!-- Next month button -->
        <button
          @click="nextMonth"
          :class="navButtonClasses"
          :disabled="disabled"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Days of week header -->
    <div :class="daysHeaderClasses">
      <div
        v-for="day in dayNames"
        :key="day"
        class="text-center text-sm font-medium opacity-70"
      >
        {{ day }}
      </div>
    </div>

    <!-- Calendar grid -->
    <div :class="gridClasses">
      <button
        v-for="(day, index) in calendarDays"
        :key="index"
        :class="getDayClasses(day)"
        :disabled="disabled || isDayDisabled(day)"
        @click="selectDay(day)"
      >
        <span>{{ day.day }}</span>
        <!-- Event indicators -->
        <div v-if="day.events && day.events.length > 0" class="flex justify-center mt-1">
          <div class="flex gap-0.5">
            <div
              v-for="(event, eventIndex) in day.events.slice(0, 3)"
              :key="eventIndex"
              :class="getEventDotClasses(event)"
            ></div>
          </div>
        </div>
      </button>
    </div>

    <!-- Footer -->
    <div v-if="showToday || $slots.footer" :class="footerClasses">
      <slot name="footer">
        <button
          v-if="showToday"
          @click="goToToday"
          class="btn btn-ghost btn-sm"
          :disabled="disabled"
        >
          Today
        </button>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

interface CalendarEvent {
  title: string;
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info';
  [key: string]: unknown;
}

interface CalendarDay {
  day: number;
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isDisabled: boolean;
  events?: CalendarEvent[];
}

interface Props {
  modelValue?: Date | string | null;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'bordered' | 'filled';
  disabled?: boolean;
  readonly?: boolean;
  minDate?: Date | string;
  maxDate?: Date | string;
  disabledDates?: Date[] | string[];
  events?: Record<string, CalendarEvent[]>;
  allowMonthSelect?: boolean;
  allowYearSelect?: boolean;
  showToday?: boolean;
  yearRange?: [number, number];
  locale?: string;
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
});

const emit = defineEmits<{
  'update:modelValue': [value: Date | null];
  dayClick: [day: CalendarDay];
  monthChange: [month: number, year: number];
}>();

const today = new Date();
const displayMonth = ref(today.getMonth());
const displayYear = ref(today.getFullYear());

// Initialize display date from modelValue
watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    const date = new Date(newValue);
    if (!isNaN(date.getTime())) {
      displayMonth.value = date.getMonth();
      displayYear.value = date.getFullYear();
    }
  }
}, { immediate: true });

const calendarClasses = computed(() => {
  const baseClasses = ['calendar', 'bg-base-100'];

  // Variant
  if (props.variant === 'bordered') {
    baseClasses.push('border', 'border-base-300', 'rounded-lg');
  } else if (props.variant === 'filled') {
    baseClasses.push('bg-base-200', 'rounded-lg');
  }

  // Size
  if (props.size === 'sm') {
    baseClasses.push('text-sm');
  } else if (props.size === 'lg') {
    baseClasses.push('text-lg');
  }

  // Disabled
  if (props.disabled) {
    baseClasses.push('opacity-60', 'pointer-events-none');
  }

  return baseClasses.join(' ');
});

const headerClasses = computed(() => {
  const baseClasses = ['calendar-header', 'p-4', 'border-b', 'border-base-300'];
  return baseClasses.join(' ');
});

const daysHeaderClasses = computed(() => {
  const baseClasses = ['days-header', 'grid', 'grid-cols-7', 'gap-1', 'p-2', 'border-b', 'border-base-300'];
  return baseClasses.join(' ');
});

const gridClasses = computed(() => {
  const baseClasses = ['calendar-grid', 'grid', 'grid-cols-7', 'gap-1', 'p-2'];
  return baseClasses.join(' ');
});

const footerClasses = computed(() => {
  const baseClasses = ['calendar-footer', 'p-2', 'border-t', 'border-base-300', 'text-center'];
  return baseClasses.join(' ');
});

const navButtonClasses = computed(() => {
  const baseClasses = ['btn', 'btn-ghost', 'btn-circle'];
  
  if (props.size === 'sm') {
    baseClasses.push('btn-sm');
  } else if (props.size === 'lg') {
    baseClasses.push('btn-lg');
  }

  return baseClasses.join(' ');
});

const selectClasses = computed(() => {
  const baseClasses = ['select', 'select-ghost'];
  
  if (props.size === 'sm') {
    baseClasses.push('select-sm');
  } else if (props.size === 'lg') {
    baseClasses.push('select-lg');
  }

  return baseClasses.join(' ');
});

const monthNames = computed(() => {
  const formatter = new Intl.DateTimeFormat(props.locale, { month: 'long' });
  return Array.from({ length: 12 }, (_, i) => 
    formatter.format(new Date(2024, i, 1))
  );
});

const dayNames = computed(() => {
  const formatter = new Intl.DateTimeFormat(props.locale, { weekday: 'short' });
  const days = [];
  // Start from Sunday (0) to Saturday (6)
  for (let i = 0; i < 7; i++) {
    const date = new Date(2024, 0, i); // January 2024 starts on Monday
    const dayOfWeek = date.getDay();
    days[dayOfWeek] = formatter.format(date);
  }
  return days;
});

const availableYears = computed(() => {
  const [start, end] = props.yearRange;
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
});

const calendarDays = computed(() => {
  const days: CalendarDay[] = [];
  const firstDay = new Date(displayYear.value, displayMonth.value, 1);
  // const lastDay = new Date(displayYear.value, displayMonth.value + 1, 0);
  const startDate = new Date(firstDay);
  
  // Go back to the start of the week
  startDate.setDate(startDate.getDate() - startDate.getDay());
  
  // Generate 42 days (6 weeks)
  for (let i = 0; i < 42; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    
    const dayKey = date.toISOString().split('T')[0];
    const events = props.events?.[dayKey] || [];
    
    days.push({
      day: date.getDate(),
      date: new Date(date),
      isCurrentMonth: date.getMonth() === displayMonth.value,
      isToday: isSameDay(date, today),
      isSelected: props.modelValue ? isSameDay(date, new Date(props.modelValue)) : false,
      isDisabled: isDayDisabled({ date } as CalendarDay),
      events,
    });
  }
  
  return days;
});

// const selectedDate = computed(() => {
//   return props.modelValue ? new Date(props.modelValue) : null;
// });

const getDayClasses = (day: CalendarDay) => {
  const baseClasses = ['day-button', 'relative', 'w-full', 'h-10', 'flex', 'flex-col', 'items-center', 'justify-center', 'rounded', 'hover:bg-base-200', 'transition-colors'];

  if (!day.isCurrentMonth) {
    baseClasses.push('opacity-40');
  }

  if (day.isToday) {
    baseClasses.push('ring-2', 'ring-primary', 'ring-offset-1');
  }

  if (day.isSelected) {
    baseClasses.push('bg-primary', 'text-primary-content', 'hover:bg-primary');
  }

  if (day.isDisabled) {
    baseClasses.push('opacity-50', 'cursor-not-allowed');
  }

  if (props.size === 'sm') {
    baseClasses.push('h-8', 'text-xs');
  } else if (props.size === 'lg') {
    baseClasses.push('h-12', 'text-lg');
  }

  return baseClasses.join(' ');
};

const getEventDotClasses = (event: CalendarEvent) => {
  const baseClasses = ['w-1.5', 'h-1.5', 'rounded-full'];
  
  const colorMap = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-error',
    info: 'bg-info',
  };
  
  baseClasses.push(colorMap[event.color || 'primary']);
  
  return baseClasses.join(' ');
};

const isSameDay = (date1: Date, date2: Date | string) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getDate() === d2.getDate();
};

const isDayDisabled = (day: CalendarDay) => {
  if (props.minDate && day.date < new Date(props.minDate)) return true;
  if (props.maxDate && day.date > new Date(props.maxDate)) return true;
  
  if (props.disabledDates) {
    return props.disabledDates.some(disabledDate => 
      isSameDay(day.date, disabledDate)
    );
  }
  
  return false;
};

const selectDay = (day: CalendarDay) => {
  if (props.readonly || props.disabled || day.isDisabled) return;
  
  emit('update:modelValue', day.date);
  emit('dayClick', day);
};

const previousMonth = () => {
  if (displayMonth.value === 0) {
    displayMonth.value = 11;
    displayYear.value--;
  } else {
    displayMonth.value--;
  }
  emit('monthChange', displayMonth.value, displayYear.value);
};

const nextMonth = () => {
  if (displayMonth.value === 11) {
    displayMonth.value = 0;
    displayYear.value++;
  } else {
    displayMonth.value++;
  }
  emit('monthChange', displayMonth.value, displayYear.value);
};

const goToToday = () => {
  displayMonth.value = today.getMonth();
  displayYear.value = today.getFullYear();
  if (!props.readonly) {
    emit('update:modelValue', new Date(today));
  }
};

const handleMonthChange = () => {
  emit('monthChange', displayMonth.value, displayYear.value);
};

const handleYearChange = () => {
  emit('monthChange', displayMonth.value, displayYear.value);
};
</script>

<style scoped lang="postcss">
.calendar {
  @apply w-full max-w-sm;
}

.day-button:disabled {
  @apply pointer-events-none;
}

.day-button:focus {
  @apply outline-none ring-2 ring-offset-2 ring-primary;
}
</style>
