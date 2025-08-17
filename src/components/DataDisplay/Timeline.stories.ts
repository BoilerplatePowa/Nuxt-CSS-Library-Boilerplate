import type { Meta, StoryObj } from '@storybook/vue3-vite';

import Timeline from './Timeline.vue';

const meta: Meta<typeof Timeline> = {
  title: 'Data Display/Timeline',
  component: Timeline,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A timeline component that shows a list of events in chronological order using DaisyUI\'s timeline structure.',
      },
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    compact: {
      control: 'boolean',
    },
    snapIcon: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleTimelineItems = [
  {
    id: 1,
    title: '1984 - First Macintosh computer',
  },
  {
    id: 2,
    title: '1998 - iMac',
  },
  {
    id: 3,
    title: '2001 - iPod',
  },
  {
    id: 4,
    title: '2007 - iPhone',
  },
  {
    id: 5,
    title: '2015 - Apple Watch',
  },
];

export const Default: Story = {
  args: {
    items: sampleTimelineItems,
    direction: 'vertical',
    compact: false,
    snapIcon: false,
  },
  render: (args) => ({
    components: { Timeline },
    setup() {
      return { args };
    },
    template: `
      <div class="w-full max-w-2xl">
        <Timeline v-bind="args" />
      </div>
    `,
  }),
};

export const Horizontal: Story = {
  args: {
    items: sampleTimelineItems.slice(0, 4), // Fewer items for horizontal display
    direction: 'horizontal',
    compact: false,
    snapIcon: false,
  },
  render: (args) => ({
    components: { Timeline },
    setup() {
      return { args };
    },
    template: `
      <div class="w-full max-w-4xl">
        <Timeline v-bind="args" />
      </div>
    `,
  }),
};

export const Compact: Story = {
  args: {
    items: sampleTimelineItems,
    direction: 'vertical',
    compact: true,
    snapIcon: false,
  },
  render: (args) => ({
    components: { Timeline },
    setup() {
      return { args };
    },
    template: `
      <div class="w-full max-w-md">
        <h3 class="font-semibold mb-4">Compact Timeline</h3>
        <Timeline v-bind="args" />
      </div>
    `,
  }),
};

export const WithCustomContent: Story = {
  args: {
    items: [
      {
        id: 1,
        title: '1984',
        description: 'First Macintosh computer',
      },
      {
        id: 2,
        title: '1998',
        description: 'iMac',
      },
      {
        id: 3,
        title: '2001',
        description: 'iPod',
      },
      {
        id: 4,
        title: '2007',
        description: 'iPhone',
      },
      {
        id: 5,
        title: '2015',
        description: 'Apple Watch',
      },
    ],
    direction: 'vertical',
    compact: false,
    snapIcon: false,
  },
  render: (args) => ({
    components: { Timeline },
    setup() {
      return { args };
    },
    template: `
      <div class="w-full max-w-3xl">
        <h3 class="font-semibold mb-4">Timeline with Custom Content</h3>
        <Timeline v-bind="args">
          <template #start="{ item }">
            <time class="font-mono italic">{{ item.title }}</time>
          </template>
          <template #end="{ item }">
            <div class="text-lg font-black">{{ item.description }}</div>
          </template>
        </Timeline>
      </div>
    `,
  }),
};

export const WithCustomIcons: Story = {
  args: {
    items: [
      {
        id: 1,
        title: 'User Registration',
      },
      {
        id: 2,
        title: 'Email Verification',
      },
      {
        id: 3,
        title: 'Profile Setup',
      },
      {
        id: 4,
        title: 'First Purchase',
      },
      {
        id: 5,
        title: 'Loyalty Program',
      },
    ],
    direction: 'vertical',
    compact: false,
    snapIcon: false,
  },
  render: (args) => ({
    components: { Timeline },
    setup() {
      return { args };
    },
    template: `
      <div class="w-full max-w-2xl">
        <h3 class="font-semibold mb-4">Timeline with Custom Icons</h3>
        <Timeline v-bind="args">
          <template #middle="{ index }">
            <div class="flex items-center justify-center w-5 h-5">
              <span class="text-lg">{{ ['👤', '✉️', '📝', '🛒', '⭐'][index] }}</span>
            </div>
          </template>
        </Timeline>
      </div>
    `,
  }),
};

export const AlternatingLayout: Story = {
  args: {
    items: [
      {
        id: 1,
        title: '1984',
        description: 'First Macintosh computer',
      },
      {
        id: 2,
        title: '1998',
        description: 'iMac',
      },
      {
        id: 3,
        title: '2001',
        description: 'iPod',
      },
      {
        id: 4,
        title: '2007',
        description: 'iPhone',
      },
      {
        id: 5,
        title: '2015',
        description: 'Apple Watch',
      },
    ],
    direction: 'vertical',
    compact: false,
    snapIcon: false,
  },
  render: (args) => ({
    components: { Timeline },
    setup() {
      return { args };
    },
    template: `
      <div class="w-full max-w-4xl">
        <h3 class="font-semibold mb-4 text-center">Alternating Timeline Layout</h3>
        <Timeline v-bind="args">
          <template #start="{ item, index }" v-if="index % 2 === 0">
            <div class="mb-10 md:text-end">
              <time class="font-mono italic">{{ item.title }}</time>
              <div class="text-lg font-black">{{ item.description }}</div>
            </div>
          </template>
          <template #end="{ item, index }" v-if="index % 2 === 1">
            <div class="md:mb-10">
              <time class="font-mono italic">{{ item.title }}</time>
              <div class="text-lg font-black">{{ item.description }}</div>
            </div>
          </template>
        </Timeline>
      </div>
    `,
  }),
};

export const SnapIcon: Story = {
  args: {
    items: sampleTimelineItems.slice(0, 3),
    direction: 'vertical',
    compact: false,
    snapIcon: true,
  },
  render: (args) => ({
    components: { Timeline },
    setup() {
      return { args };
    },
    template: `
      <div class="w-full max-w-2xl">
        <h3 class="font-semibold mb-4">Timeline with Snap Icon</h3>
        <Timeline v-bind="args" />
      </div>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    components: { Timeline },
    setup() {
      const items = [
        { id: 1, title: 'Event 1' },
        { id: 2, title: 'Event 2' },
        { id: 3, title: 'Event 3' },
      ];
      
      return { items };
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="font-semibold mb-4">Vertical Timeline (Default)</h3>
          <Timeline :items="items" direction="vertical" />
        </div>
        
        <div>
          <h3 class="font-semibold mb-4">Horizontal Timeline</h3>
          <Timeline :items="items" direction="horizontal" />
        </div>
        
        <div>
          <h3 class="font-semibold mb-4">Compact Timeline</h3>
          <Timeline :items="items" :compact="true" />
        </div>
        
        <div>
          <h3 class="font-semibold mb-4">Snap Icon Timeline</h3>
          <Timeline :items="items" :snap-icon="true" />
        </div>
      </div>
    `,
  }),
};
