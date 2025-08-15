import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import Calendar from './Calendar.vue';

const meta: Meta<typeof Calendar> = {
  title: 'DataInput/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible calendar component for date selection with support for events, date ranges, and various display options.',
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    variant: 'default',
    allowMonthSelect: true,
    allowYearSelect: true,
    showToday: true,
  },
  render: (args) => ({
    components: { Calendar },
    setup() {
      const selectedDate = ref<Date | null>(null);
      
      const handleDayClick = (day: any) => {
        console.log('Day clicked:', day);
      };
      
      const handleMonthChange = (month: number, year: number) => {
        console.log('Month changed:', { month, year });
      };
      
      return { args, selectedDate, handleDayClick, handleMonthChange };
    },
    template: `
      <div class="space-y-4">
        <Calendar 
          v-bind="args" 
          v-model="selectedDate"
          @day-click="handleDayClick"
          @month-change="handleMonthChange"
        />
        <div v-if="selectedDate" class="text-sm text-center opacity-70">
          Selected: {{ selectedDate.toLocaleDateString() }}
        </div>
      </div>
    `,
  }),
};

export const WithEvents: Story = {
  args: {
    size: 'md',
    variant: 'bordered',
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
          <h3 class="font-semibold mb-2">Small Size</h3>
          <Calendar v-model="dates.sm" size="sm" variant="bordered" />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Medium Size (Default)</h3>
          <Calendar v-model="dates.md" size="md" variant="bordered" />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Large Size</h3>
          <Calendar v-model="dates.lg" size="lg" variant="bordered" />
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
          <Calendar v-model="dates.default" variant="default" />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Bordered</h3>
          <Calendar v-model="dates.bordered" variant="bordered" />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Filled</h3>
          <Calendar v-model="dates.filled" variant="filled" />
        </div>
      </div>
    `,
  }),
};

export const CustomYearRange: Story = {
  args: {
    size: 'md',
    variant: 'bordered',
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
