import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Timeline from './Timeline.vue';

const meta: Meta<typeof Timeline> = {
  title: 'DataDisplay/Timeline',
  component: Timeline,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile timeline component for displaying chronological events with customizable markers, actions, and layouts.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['default', 'compact', 'detailed'],
    },
    showConnectors: {
      control: 'boolean',
    },
    snapToSides: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleTimelineItems = [
  {
    id: 1,
    title: 'Project Started',
    description: 'Initial project setup and team assignment',
    timestamp: new Date('2024-01-15T09:00:00'),
    status: 'completed' as const,
    actions: [
      { label: 'View Details', variant: 'ghost' as const, size: 'xs' as const },
    ],
  },
  {
    id: 2,
    title: 'Design Phase',
    description: 'UI/UX design and wireframe creation',
    timestamp: new Date('2024-01-20T14:30:00'),
    status: 'completed' as const,
  },
  {
    id: 3,
    title: 'Development Started',
    description: 'Backend and frontend development in progress',
    timestamp: new Date('2024-01-25T10:15:00'),
    status: 'active' as const,
    actions: [
      { label: 'View Code', variant: 'primary' as const, size: 'xs' as const },
      { label: 'Assign', variant: 'outline' as const, size: 'xs' as const },
    ],
  },
  {
    id: 4,
    title: 'Testing Phase',
    description: 'Quality assurance and bug fixing',
    timestamp: new Date('2024-02-05T16:45:00'),
    status: 'pending' as const,
  },
  {
    id: 5,
    title: 'Deployment',
    description: 'Production deployment and monitoring',
    timestamp: new Date('2024-02-15T11:00:00'),
    status: 'pending' as const,
  },
];

export const Default: Story = {
  args: {
    items: sampleTimelineItems,
    orientation: 'vertical',
    size: 'md',
    variant: 'default',
    showConnectors: true,
  },
  render: (args) => ({
    components: { Timeline },
    setup() {
      const handleActionClick = (action: any, item: any, index: number, event: Event) => {
        console.log('Action clicked:', { action, item, index });
      };
      
      return { args, handleActionClick };
    },
    template: `
      <div class="w-full max-w-2xl">
        <Timeline v-bind="args" @action-click="handleActionClick" />
      </div>
    `,
  }),
};

export const Horizontal: Story = {
  args: {
    items: sampleTimelineItems.slice(0, 4), // Fewer items for horizontal display
    orientation: 'horizontal',
    size: 'md',
    variant: 'default',
    showConnectors: true,
  },
  render: (args) => ({
    components: { Timeline },
    setup() {
      const handleActionClick = (action: any, item: any, index: number, event: Event) => {
        console.log('Action clicked:', { action, item, index });
      };
      
      return { args, handleActionClick };
    },
    template: `
      <div class="w-full max-w-4xl">
        <Timeline v-bind="args" @action-click="handleActionClick" />
      </div>
    `,
  }),
};

export const CompactVariant: Story = {
  args: {
    items: [
      {
        id: 1,
        title: 'User logged in',
        timestamp: new Date('2024-01-15T09:00:00'),
        status: 'completed' as const,
      },
      {
        id: 2,
        title: 'Profile updated',
        timestamp: new Date('2024-01-15T09:15:00'),
        status: 'completed' as const,
      },
      {
        id: 3,
        title: 'Password changed',
        timestamp: new Date('2024-01-15T09:30:00'),
        status: 'completed' as const,
      },
      {
        id: 4,
        title: 'Settings modified',
        timestamp: new Date('2024-01-15T09:45:00'),
        status: 'completed' as const,
      },
      {
        id: 5,
        title: 'User logged out',
        timestamp: new Date('2024-01-15T10:00:00'),
        status: 'completed' as const,
      },
    ],
    orientation: 'vertical',
    size: 'sm',
    variant: 'compact',
    showConnectors: true,
  },
  render: (args) => ({
    components: { Timeline },
    template: `
      <div class="w-full max-w-md">
        <h3 class="font-semibold mb-4">Activity Log</h3>
        <Timeline v-bind="args" />
      </div>
    `,
  }),
};

export const DetailedVariant: Story = {
  args: {
    items: [
      {
        id: 1,
        title: 'Order Placed',
        description: 'Customer placed order #12345 with 3 items totaling $299.99',
        timestamp: new Date('2024-01-15T14:20:00'),
        status: 'completed' as const,
        actions: [
          { label: 'View Order', variant: 'primary' as const, size: 'sm' as const },
          { label: 'Contact Customer', variant: 'outline' as const, size: 'sm' as const },
        ],
      },
      {
        id: 2,
        title: 'Payment Processed',
        description: 'Payment of $299.99 successfully processed via Stripe',
        timestamp: new Date('2024-01-15T14:22:00'),
        status: 'completed' as const,
        actions: [
          { label: 'View Transaction', variant: 'ghost' as const, size: 'sm' as const },
        ],
      },
      {
        id: 3,
        title: 'Order Fulfillment',
        description: 'Items are being picked and packed in warehouse',
        timestamp: new Date('2024-01-16T09:30:00'),
        status: 'active' as const,
        actions: [
          { label: 'Track Progress', variant: 'primary' as const, size: 'sm' as const },
          { label: 'Update Status', variant: 'outline' as const, size: 'sm' as const },
        ],
      },
      {
        id: 4,
        title: 'Shipping',
        description: 'Order will be shipped via UPS with tracking number',
        timestamp: new Date('2024-01-17T15:00:00'),
        status: 'pending' as const,
      },
    ],
    orientation: 'vertical',
    size: 'md',
    variant: 'detailed',
    showConnectors: true,
  },
  render: (args) => ({
    components: { Timeline },
    setup() {
      const handleActionClick = (action: any, item: any, index: number, event: Event) => {
        console.log('Action clicked:', { action, item, index });
      };
      
      return { args, handleActionClick };
    },
    template: `
      <div class="w-full max-w-2xl">
        <h3 class="font-semibold mb-4">Order Timeline</h3>
        <Timeline v-bind="args" @action-click="handleActionClick" />
      </div>
    `,
  }),
};

export const SnapToSides: Story = {
  args: {
    items: sampleTimelineItems,
    orientation: 'vertical',
    size: 'md',
    variant: 'default',
    showConnectors: true,
    snapToSides: true,
  },
  render: (args) => ({
    components: { Timeline },
    setup() {
      const handleActionClick = (action: any, item: any, index: number, event: Event) => {
        console.log('Action clicked:', { action, item, index });
      };
      
      return { args, handleActionClick };
    },
    template: `
      <div class="w-full max-w-3xl">
        <h3 class="font-semibold mb-4 text-center">Alternating Timeline</h3>
        <Timeline v-bind="args" @action-click="handleActionClick" />
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
        description: 'New user account created',
        timestamp: new Date('2024-01-15T09:00:00'),
        status: 'completed' as const,
        icon: '👤',
      },
      {
        id: 2,
        title: 'Email Verification',
        description: 'Email address verified successfully',
        timestamp: new Date('2024-01-15T09:05:00'),
        status: 'completed' as const,
        icon: '✉️',
      },
      {
        id: 3,
        title: 'Profile Setup',
        description: 'User completed profile information',
        timestamp: new Date('2024-01-15T09:15:00'),
        status: 'completed' as const,
        icon: '📝',
      },
      {
        id: 4,
        title: 'First Purchase',
        description: 'User made their first purchase',
        timestamp: new Date('2024-01-15T10:30:00'),
        status: 'active' as const,
        icon: '🛒',
      },
      {
        id: 5,
        title: 'Loyalty Program',
        description: 'Eligible for loyalty program enrollment',
        timestamp: new Date('2024-01-20T12:00:00'),
        status: 'pending' as const,
        icon: '⭐',
      },
    ],
    orientation: 'vertical',
    size: 'md',
    variant: 'default',
    showConnectors: true,
  },
  render: (args) => ({
    components: { Timeline },
    template: `
      <div class="w-full max-w-2xl">
        <h3 class="font-semibold mb-4">Customer Journey</h3>
        <Timeline v-bind="args" />
      </div>
    `,
  }),
};

export const DifferentSizes: Story = {
  render: () => ({
    components: { Timeline },
    setup() {
      const smallItems = [
        { id: 1, title: 'Login', timestamp: new Date('2024-01-15T09:00:00'), status: 'completed' as const },
        { id: 2, title: 'View Dashboard', timestamp: new Date('2024-01-15T09:05:00'), status: 'completed' as const },
        { id: 3, title: 'Update Profile', timestamp: new Date('2024-01-15T09:10:00'), status: 'active' as const },
      ];
      
      const mediumItems = sampleTimelineItems.slice(0, 3);
      
      const largeItems = [
        {
          id: 1,
          title: 'Project Kickoff',
          description: 'Initial project meeting with stakeholders',
          timestamp: new Date('2024-01-15T09:00:00'),
          status: 'completed' as const,
        },
        {
          id: 2,
          title: 'Requirements Gathering',
          description: 'Detailed analysis of project requirements and specifications',
          timestamp: new Date('2024-01-18T14:00:00'),
          status: 'active' as const,
        },
      ];
      
      return { smallItems, mediumItems, largeItems };
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="font-semibold mb-4">Small Size</h3>
          <Timeline :items="smallItems" size="sm" variant="compact" />
        </div>
        
        <div>
          <h3 class="font-semibold mb-4">Medium Size (Default)</h3>
          <Timeline :items="mediumItems" size="md" />
        </div>
        
        <div>
          <h3 class="font-semibold mb-4">Large Size</h3>
          <Timeline :items="largeItems" size="lg" variant="detailed" />
        </div>
      </div>
    `,
  }),
};

export const StatusStates: Story = {
  args: {
    items: [
      {
        id: 1,
        title: 'Completed Task',
        description: 'This task has been successfully completed',
        timestamp: new Date('2024-01-15T09:00:00'),
        status: 'completed' as const,
      },
      {
        id: 2,
        title: 'Active Task',
        description: 'This task is currently in progress',
        timestamp: new Date('2024-01-16T10:00:00'),
        status: 'active' as const,
      },
      {
        id: 3,
        title: 'Pending Task',
        description: 'This task is waiting to be started',
        timestamp: new Date('2024-01-17T11:00:00'),
        status: 'pending' as const,
      },
      {
        id: 4,
        title: 'Error Task',
        description: 'This task encountered an error',
        timestamp: new Date('2024-01-18T12:00:00'),
        status: 'error' as const,
      },
      {
        id: 5,
        title: 'Warning Task',
        description: 'This task has a warning that needs attention',
        timestamp: new Date('2024-01-19T13:00:00'),
        status: 'warning' as const,
      },
    ],
    orientation: 'vertical',
    size: 'md',
    variant: 'default',
    showConnectors: true,
  },
  render: (args) => ({
    components: { Timeline },
    template: `
      <div class="w-full max-w-2xl">
        <h3 class="font-semibold mb-4">Different Status States</h3>
        <Timeline v-bind="args" />
      </div>
    `,
  }),
};
