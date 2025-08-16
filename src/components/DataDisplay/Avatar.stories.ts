import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Avatar from './Avatar.vue';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible avatar component with support for images, placeholders, and presence indicators.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: { type: 'text' },
      description: 'Image source URL',
    },
    alt: {
      control: { type: 'text' },
      description: 'Alt text for image',
    },
    name: {
      control: { type: 'text' },
      description: 'User name for generating initials',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text (shown when no image)',
    },
    initials: {
      control: { type: 'text' },
      description: 'Custom initials to display',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Avatar size',
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square', 'rounded'],
      description: 'Avatar shape',
    },
    presence: {
      control: { type: 'select' },
      options: ['online', 'offline', 'away', 'busy'],
      description: 'Presence status',
    },
    online: {
      control: { type: 'boolean' },
      description: 'Online presence indicator',
    },
    showPresence: {
      control: { type: 'boolean' },
      description: 'Show presence indicator',
    },
    ring: {
      control: { type: 'boolean' },
      description: 'Show ring around avatar',
    },
    ringColor: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent', 'neutral', 'success', 'warning', 'error'],
      description: 'Ring color',
    },
    badge: {
      control: { type: 'text' },
      description: 'Badge text to display',
    },
    count: {
      control: { type: 'number' },
      description: 'Count number to display as badge',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Show loading state',
    },
    lazy: {
      control: { type: 'boolean' },
      description: 'Enable lazy loading for image',
    },
    fallbackColor: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent', 'neutral', 'random'],
      description: 'Background color for placeholder',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User avatar',
  },
  render: args => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: '<Avatar v-bind="args" />',
  }),
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'JD',
  },
  render: args => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: '<Avatar v-bind="args" />',
  }),
};

export const Online: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=2',
    alt: 'Online user',
    online: true,
  },
  render: args => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: '<Avatar v-bind="args" />',
  }),
};

export const Offline: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'Offline user',
    online: false,
  },
  render: args => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: '<Avatar v-bind="args" />',
  }),
};

export const WithRing: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=4',
    alt: 'User with ring',
    ring: true,
    ringColor: 'primary',
  },
  render: args => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: '<Avatar v-bind="args" />',
  }),
};

export const Square: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=5',
    alt: 'Square avatar',
    shape: 'square',
  },
  render: args => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: '<Avatar v-bind="args" />',
  }),
};

export const Large: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=6',
    alt: 'Large avatar',
    size: 'xl',
  },
  render: args => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: '<Avatar v-bind="args" />',
  }),
};

export const Small: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=7',
    alt: 'Small avatar',
    size: 'xs',
  },
  render: args => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: '<Avatar v-bind="args" />',
  }),
};

export const WithName: Story = {
  args: {
    name: 'John Doe',
  },
  render: args => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: '<Avatar v-bind="args" />',
  }),
};

export const WithBadge: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=8',
    alt: 'User with badge',
    badge: '3',
  },
  render: args => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: '<Avatar v-bind="args" />',
  }),
};

export const WithCount: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=9',
    alt: 'User with count',
    count: 42,
  },
  render: args => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: '<Avatar v-bind="args" />',
  }),
};

export const Loading: Story = {
  args: {
    loading: true,
  },
  render: args => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: '<Avatar v-bind="args" />',
  }),
};

export const AllVariants: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-3">Sizes</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=1" size="xs" alt="XS" />
            <Avatar src="https://i.pravatar.cc/150?img=2" size="sm" alt="SM" />
            <Avatar src="https://i.pravatar.cc/150?img=3" size="md" alt="MD" />
            <Avatar src="https://i.pravatar.cc/150?img=4" size="lg" alt="LG" />
            <Avatar src="https://i.pravatar.cc/150?img=5" size="xl" alt="XL" />
            <Avatar src="https://i.pravatar.cc/150?img=6" size="2xl" alt="2XL" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Shapes</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=7" shape="circle" alt="Circle" />
            <Avatar src="https://i.pravatar.cc/150?img=8" shape="square" alt="Square" />
            <Avatar src="https://i.pravatar.cc/150?img=9" shape="rounded" alt="Rounded" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Presence</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=10" presence="online" alt="Online" />
            <Avatar src="https://i.pravatar.cc/150?img=11" presence="offline" alt="Offline" />
            <Avatar src="https://i.pravatar.cc/150?img=12" presence="away" alt="Away" />
            <Avatar src="https://i.pravatar.cc/150?img=13" presence="busy" alt="Busy" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Ring Colors</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=14" ring ringColor="primary" alt="Primary Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=15" ring ringColor="secondary" alt="Secondary Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=16" ring ringColor="accent" alt="Accent Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=17" ring ringColor="neutral" alt="Neutral Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=18" ring ringColor="success" alt="Success Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=19" ring ringColor="warning" alt="Warning Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=20" ring ringColor="error" alt="Error Ring" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Placeholders</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar placeholder="AB" />
            <Avatar name="John Doe" />
            <Avatar initials="JD" />
            <Avatar placeholder="CD" size="lg" />
            <Avatar placeholder="EF" shape="square" />
            <Avatar placeholder="GH" ring ringColor="accent" />
            <Avatar name="Alice Smith" fallbackColor="random" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Badges & Counts</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=21" badge="3" alt="With Badge" />
            <Avatar src="https://i.pravatar.cc/150?img=22" :count="42" alt="With Count" />
            <Avatar src="https://i.pravatar.cc/150?img=23" :count="999" alt="Large Count" />
          </div>
        </div>
      </div>
    `,
  }),
};
