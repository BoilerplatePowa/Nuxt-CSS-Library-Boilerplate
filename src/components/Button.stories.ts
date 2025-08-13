import type { Meta, StoryObj } from '@storybook/vue3';
import Button from './Button.vue';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible button component with multiple variants and sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent', 'ghost', 'outline', 'link'],
      description: 'Button variant',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Button size',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Loading state',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Full width',
    },
    onClick: {
      action: 'clicked',
      description: 'Click event',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Primary Button</Button>',
  }),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Secondary Button</Button>',
  }),
};

export const Accent: Story = {
  args: {
    variant: 'accent',
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Accent Button</Button>',
  }),
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Ghost Button</Button>',
  }),
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Outline Button</Button>',
  }),
};

export const Link: Story = {
  args: {
    variant: 'link',
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Link Button</Button>',
  }),
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Small Button</Button>',
  }),
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Large Button</Button>',
  }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Disabled Button</Button>',
  }),
};

export const Loading: Story = {
  args: {
    loading: true,
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Loading...</Button>',
  }),
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Full Width Button</Button>',
  }),
};

export const WithIcons: Story = {
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">
        <template #icon-left>
          <span>←</span>
        </template>
        Button with Icons
        <template #icon-right>
          <span>→</span>
        </template>
      </Button>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="space-y-4">
        <div class="flex flex-wrap gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="accent">Accent</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="link">Link</Button>
        </div>
        <div class="flex flex-wrap gap-2">
          <Button size="xs">XS</Button>
          <Button size="sm">SM</Button>
          <Button size="md">MD</Button>
          <Button size="lg">LG</Button>
        </div>
      </div>
    `,
  }),
};
