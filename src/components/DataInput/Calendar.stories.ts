import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import Calendar from './Calendar.vue';

const meta: Meta<typeof Calendar> = {
  title: 'Data Input/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A modern calendar component using Cally web component with daisyUI styling. Features native CSS popover API for date picker mode and supports both calendar display and date picker modes with full accessibility.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'filled'],
    },
    mode: {
      control: 'select',
      options: ['calendar', 'datepicker'],
    },
    allowMonthSelect: {
      control: 'boolean',
    },
    allowYearSelect: {
      control: 'boolean',
    },
    showToday: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    range: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    variant: 'default',
    mode: 'calendar',
    allowMonthSelect: true,
    allowYearSelect: true,
    showToday: true,
  },
  render: (args) => ({
    components: { Calendar },
    setup() {
      const selectedDate = ref<Date | null>(null);
      
      const handleMonthChange = (month: number, year: number) => {
        console.log('Month/Year changed:', { month, year });
      };
      
      return { args, selectedDate, handleMonthChange };
    },
    template: `
      <div class="space-y-4">
        <Calendar 
          v-bind="args" 
          v-model="selectedDate"
          @month-change="handleMonthChange"
        />
        <div v-if="selectedDate" class="text-sm text-center opacity-70">
          Selected: {{ selectedDate.toLocaleDateString() }}
        </div>
      </div>
    `,
  }),
};

export const DatePicker: Story = {
  args: {
    size: 'md',
    variant: 'bordered',
    mode: 'datepicker',
    placeholder: 'Pick a date',
    allowMonthSelect: true,
    allowYearSelect: true,
    showToday: true,
  },
  render: (args) => ({
    components: { Calendar },
    setup() {
      const selectedDate = ref<Date | null>(null);
      
      return { args, selectedDate };
    },
    template: `
      <div class="space-y-4">
        <Calendar v-bind="args" v-model="selectedDate" />
        <div v-if="selectedDate" class="text-sm text-center opacity-70">
          Selected: {{ selectedDate.toLocaleDateString() }}
        </div>
        <div class="text-sm text-center opacity-70">
          <p>• Uses native CSS popover API</p>
          <p>• Click outside to close</p>
          <p>• Fully accessible with keyboard navigation</p>
        </div>
      </div>
    `,
  }),
};

export const RangeCalendar: Story = {
  args: {
    size: 'md',
    variant: 'bordered',
    mode: 'calendar',
    range: true,
    allowMonthSelect: true,
    allowYearSelect: true,
    showToday: true,
  },
  render: (args) => ({
    components: { Calendar },
    setup() {
      const selectedDate = ref<Date | null>(null);
      
      return { args, selectedDate };
    },
    template: `
      <div class="space-y-4">
        <Calendar v-bind="args" v-model="selectedDate" />
        <div class="text-sm text-center opacity-70">
          <p>• Uses Cally calendar-range component</p>
          <p>• Supports date range selection</p>
          <p>• Visual feedback for selected ranges</p>
        </div>
      </div>
    `,
  }),
};

export const MonthYearSelection: Story = {
  render: () => ({
    components: { Calendar },
    setup() {
      const dates = ref({
        both: null,
        monthOnly: null,
        yearOnly: null,
        none: null,
      });
      
      const handleMonthChange = (month: number, year: number) => {
        console.log('Month/Year changed:', { month, year });
      };
      
      return { dates, handleMonthChange };
    },
    template: `
      <div class="space-y-8">
        <div class="text-center">
          <h3 class="font-semibold mb-2">Month and Year Selection</h3>
          <Calendar 
            v-model="dates.both" 
            mode="calendar" 
            variant="bordered"
            :allow-month-select="true"
            :allow-year-select="true"
            @month-change="handleMonthChange"
          />
          <p class="text-sm mt-2 opacity-70">Both month and year selectors enabled</p>
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Month Selection Only</h3>
          <Calendar 
            v-model="dates.monthOnly" 
            mode="calendar" 
            variant="bordered"
            :allow-month-select="true"
            :allow-year-select="false"
            @month-change="handleMonthChange"
          />
          <p class="text-sm mt-2 opacity-70">Only month selector enabled</p>
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Year Selection Only</h3>
          <Calendar 
            v-model="dates.yearOnly" 
            mode="calendar" 
            variant="bordered"
            :allow-month-select="false"
            :allow-year-select="true"
            @month-change="handleMonthChange"
          />
          <p class="text-sm mt-2 opacity-70">Only year selector enabled</p>
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">No Selectors</h3>
          <Calendar 
            v-model="dates.none" 
            mode="calendar" 
            variant="bordered"
            :allow-month-select="false"
            :allow-year-select="false"
          />
          <p class="text-sm mt-2 opacity-70">No month/year selectors (default navigation only)</p>
        </div>
      </div>
    `,
  }),
};

export const WithEvents: Story = {
  args: {
    size: 'md',
    variant: 'bordered',
    mode: 'calendar',
    allowMonthSelect: true,
    allowYearSelect: true,
    showToday: true,
  },
  render: (args) => ({
    components: { Calendar },
    setup() {
      const selectedDate = ref<Date | null>(null);
      
      // Sample events for the current month
      const today = new Date();
      const events = {
        [`${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-05`]: [
          { title: 'Team Meeting', color: 'primary' as const },
          { title: 'Code Review', color: 'secondary' as const },
        ],
        [`${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-10`]: [
          { title: 'Project Deadline', color: 'error' as const },
        ],
        [`${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-15`]: [
          { title: 'Birthday Party', color: 'success' as const },
        ],
        [`${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-20`]: [
          { title: 'Conference', color: 'warning' as const },
          { title: 'Workshop', color: 'info' as const },
        ],
      };
      
      return { args: { ...args, events }, selectedDate };
    },
    template: `
      <div class="space-y-4">
        <Calendar v-bind="args" v-model="selectedDate" />
        <div class="text-sm space-y-1">
          <h4 class="font-semibold">Legend:</h4>
          <div class="flex flex-wrap gap-2 text-xs">
            <div class="flex items-center gap-1">
              <div class="w-2 h-2 bg-primary rounded-full"></div>
              <span>Meetings</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="w-2 h-2 bg-error rounded-full"></div>
              <span>Deadlines</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="w-2 h-2 bg-success rounded-full"></div>
              <span>Personal</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="w-2 h-2 bg-warning rounded-full"></div>
              <span>Events</span>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

export const DateRestrictions: Story = {
  args: {
    size: 'md',
    variant: 'bordered',
    mode: 'calendar',
    allowMonthSelect: true,
    allowYearSelect: true,
    showToday: true,
  },
  render: (args) => ({
    components: { Calendar },
    setup() {
      const selectedDate = ref<Date | null>(null);
      
      // Set min and max dates
      const today = new Date();
      const minDate = new Date(today);
      minDate.setDate(today.getDate() - 7); // 7 days ago
      
      const maxDate = new Date(today);
      maxDate.setDate(today.getDate() + 30); // 30 days from now
      
      // Disabled specific dates
      const disabledDates = [
        new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5),
        new Date(today.getFullYear(), today.getMonth(), today.getDate() + 12),
        new Date(today.getFullYear(), today.getMonth(), today.getDate() + 19),
      ];
      
      return { 
        args: { 
          ...args, 
          minDate: minDate.toISOString().split('T')[0],
          maxDate: maxDate.toISOString().split('T')[0],
          disabledDates: disabledDates.map(d => d.toISOString().split('T')[0])
        }, 
        selectedDate 
      };
    },
    template: `
      <div class="space-y-4">
        <Calendar v-bind="args" v-model="selectedDate" />
        <div class="text-sm space-y-1 opacity-70">
          <p>• Dates available: 7 days ago to 30 days from now</p>
          <p>• Some specific dates are disabled</p>
          <p>• Today is highlighted with a ring</p>
        </div>
      </div>
    `,
  }),
};

export const ReadonlyCalendar: Story = {
  args: {
    size: 'md',
    variant: 'default',
    mode: 'calendar',
    readonly: true,
    allowMonthSelect: false,
    allowYearSelect: false,
    showToday: true,
  },
  render: (args) => ({
    components: { Calendar },
    setup() {
      const selectedDate = ref(new Date());
      
      return { args, selectedDate };
    },
    template: `
      <div class="space-y-4">
        <Calendar v-bind="args" v-model="selectedDate" />
        <p class="text-sm text-center opacity-70">
          Read-only calendar view
        </p>
      </div>
    `,
  }),
};

export const DisabledCalendar: Story = {
  args: {
    size: 'md',
    variant: 'bordered',
    mode: 'calendar',
    disabled: true,
    allowMonthSelect: true,
    allowYearSelect: true,
    showToday: true,
  },
  render: (args) => ({
    components: { Calendar },
    setup() {
      const selectedDate = ref<Date | null>(null);
      
      return { args, selectedDate };
    },
    template: `
      <div class="space-y-4">
        <Calendar v-bind="args" v-model="selectedDate" />
        <p class="text-sm text-center opacity-70">
          Disabled calendar
        </p>
      </div>
    `,
  }),
};

export const DifferentSizes: Story = {
  render: () => ({
    components: { Calendar },
    setup() {
      const dates = ref({
        sm: null,
        md: null,
        lg: null,
      });
      
      return { dates };
    },
    template: `
      <div class="space-y-8">
        <div class="text-center">
          <h3 class="font-semibold mb-2">Small Size (sm)</h3>
          <div class="inline-block">
            <Calendar v-model="dates.sm" size="sm" variant="bordered" mode="calendar" />
          </div>
          <p class="text-xs mt-2 opacity-70">Uses text-sm and input-sm classes</p>
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Medium Size (md) - Default</h3>
          <div class="inline-block">
            <Calendar v-model="dates.md" size="md" variant="bordered" mode="calendar" />
          </div>
          <p class="text-xs mt-2 opacity-70">Uses text-md and input-md classes</p>
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Large Size (lg)</h3>
          <div class="inline-block">
            <Calendar v-model="dates.lg" size="lg" variant="bordered" mode="calendar" />
          </div>
          <p class="text-xs mt-2 opacity-70">Uses text-lg and input-lg classes</p>
        </div>
      </div>
    `,
  }),
};

export const DifferentVariants: Story = {
  render: () => ({
    components: { Calendar },
    setup() {
      const dates = ref({
        default: null,
        bordered: null,
        filled: null,
      });
      
      return { dates };
    },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <h3 class="font-semibold mb-2">Default</h3>
          <Calendar v-model="dates.default" variant="default" mode="calendar" />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Bordered</h3>
          <Calendar v-model="dates.bordered" variant="bordered" mode="calendar" />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Filled</h3>
          <Calendar v-model="dates.filled" variant="filled" mode="calendar" />
        </div>
      </div>
    `,
  }),
};

export const CalendarVsDatePicker: Story = {
  render: () => ({
    components: { Calendar },
    setup() {
      const dates = ref({
        calendar: null,
        datepicker: null,
      });
      
      return { dates };
    },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="text-center">
          <h3 class="font-semibold mb-2">Calendar Mode</h3>
          <Calendar v-model="dates.calendar" mode="calendar" variant="bordered" />
          <p class="text-sm mt-2 opacity-70">Always visible calendar display</p>
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Date Picker Mode</h3>
          <Calendar v-model="dates.datepicker" mode="datepicker" variant="bordered" placeholder="Pick a date" />
          <p class="text-sm mt-2 opacity-70">Native CSS popover with click-to-open</p>
        </div>
      </div>
    `,
  }),
};

export const SingleVsRange: Story = {
  render: () => ({
    components: { Calendar },
    setup() {
      const dates = ref({
        single: null,
        range: null,
      });
      
      return { dates };
    },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="text-center">
          <h3 class="font-semibold mb-2">Single Date Selection</h3>
          <Calendar v-model="dates.single" mode="calendar" variant="bordered" />
          <p class="text-sm mt-2 opacity-70">Select individual dates</p>
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Date Range Selection</h3>
          <Calendar v-model="dates.range" mode="calendar" variant="bordered" :range="true" />
          <p class="text-sm mt-2 opacity-70">Select date ranges with visual feedback</p>
        </div>
      </div>
    `,
  }),
};

export const NativePopoverFeatures: Story = {
  render: () => ({
    components: { Calendar },
    setup() {
      const dates = ref({
        popover1: null,
        popover2: null,
        popover3: null,
      });
      
      return { dates };
    },
    template: `
      <div class="space-y-8">
        <div class="text-center">
          <h3 class="font-semibold mb-4">Native CSS Popover Features</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 class="font-medium mb-2">Small Size (sm)</h4>
              <Calendar v-model="dates.popover1" mode="datepicker" size="sm" placeholder="Small picker" />
              <p class="text-xs mt-1 opacity-70">input-sm class</p>
            </div>
            <div>
              <h4 class="font-medium mb-2">Medium Size (md)</h4>
              <Calendar v-model="dates.popover2" mode="datepicker" size="md" placeholder="Medium picker" />
              <p class="text-xs mt-1 opacity-70">input-md class</p>
            </div>
            <div>
              <h4 class="font-medium mb-2">Large Size (lg)</h4>
              <Calendar v-model="dates.popover3" mode="datepicker" size="lg" placeholder="Large picker" />
              <p class="text-xs mt-1 opacity-70">input-lg class</p>
            </div>
          </div>
          <div class="text-sm mt-4 space-y-1 opacity-70">
            <p>• Each picker has unique IDs and anchor positioning</p>
            <p>• Native browser popover behavior (ESC to close, focus management)</p>
            <p>• Automatic positioning relative to the trigger button</p>
            <p>• Size classes apply to both input buttons and calendar content</p>
          </div>
        </div>
      </div>
    `,
  }),
};

export const CustomYearRange: Story = {
  args: {
    size: 'md',
    variant: 'bordered',
    mode: 'calendar',
    allowMonthSelect: true,
    allowYearSelect: true,
    showToday: true,
    yearRange: [2020, 2030],
  },
  render: (args) => ({
    components: { Calendar },
    setup() {
      const selectedDate = ref<Date | null>(null);
      
      return { args, selectedDate };
    },
    template: `
      <div class="space-y-4">
        <Calendar v-bind="args" v-model="selectedDate" />
        <p class="text-sm text-center opacity-70">
          Year range: 2020 - 2030
        </p>
      </div>
    `,
  }),
};
