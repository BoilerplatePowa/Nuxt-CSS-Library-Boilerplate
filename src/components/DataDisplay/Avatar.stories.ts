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
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text (shown when no image)',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Avatar size',
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square'],
      description: 'Avatar shape',
    },
    online: {
      control: { type: 'boolean' },
      description: 'Online presence indicator',
    },
    ring: {
      control: { type: 'boolean' },
      description: 'Show ring around avatar',
    },
    ringColor: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent', 'neutral'],
      description: 'Ring color',
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
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Shapes</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=6" shape="circle" alt="Circle" />
            <Avatar src="https://i.pravatar.cc/150?img=7" shape="square" alt="Square" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Presence</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=8" :online="true" alt="Online" />
            <Avatar src="https://i.pravatar.cc/150?img=9" :online="false" alt="Offline" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Ring Colors</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=10" ring ringColor="primary" alt="Primary Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=11" ring ringColor="secondary" alt="Secondary Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=12" ring ringColor="accent" alt="Accent Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=13" ring ringColor="neutral" alt="Neutral Ring" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Placeholders</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar placeholder="AB" />
            <Avatar placeholder="CD" size="lg" />
            <Avatar placeholder="EF" shape="square" />
            <Avatar placeholder="GH" ring ringColor="accent" />
          </div>
        </div>
      </div>
    `,
  }),
};
