import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Button from './Button.vue';

const meta: Meta<typeof Button> = {
  title: 'Actions/Button',
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
      options: ['primary', 'secondary', 'accent', 'neutral', 'ghost', 'outline', 'link', 'info', 'success', 'warning', 'error'],
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
    circle: {
      control: { type: 'boolean' },
      description: 'Circle shape',
    },
    square: {
      control: { type: 'boolean' },
      description: 'Square shape',
    },
    glass: {
      control: { type: 'boolean' },
      description: 'Glass effect',
    },
    noAnimation: {
      control: { type: 'boolean' },
      description: 'Disable animations',
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

export const Neutral: Story = {
  args: {
    variant: 'neutral',
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Neutral Button</Button>',
  }),
};

export const Info: Story = {
  args: {
    variant: 'info',
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Info Button</Button>',
  }),
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Success Button</Button>',
  }),
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Warning Button</Button>',
  }),
};

export const Error: Story = {
  args: {
    variant: 'error',
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Error Button</Button>',
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
      <div class="space-y-4">
        <div class="flex flex-wrap gap-2">
          <Button v-bind="args">
            <template #icon-left>
              <span>←</span>
            </template>
            With Left Icon
          </Button>
          <Button v-bind="args">
            With Right Icon
            <template #icon-right>
              <span>→</span>
            </template>
          </Button>
          <Button v-bind="args">
            <template #icon-left>
              <span>←</span>
            </template>
            Both Icons
            <template #icon-right>
              <span>→</span>
            </template>
          </Button>
        </div>
        <div class="flex flex-wrap gap-2">
          <Button circle>
            <span>♥</span>
          </Button>
          <Button square>
            <span>★</span>
          </Button>
        </div>
      </div>
    `,
  }),
};

export const Circle: Story = {
  args: {
    circle: true,
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">○</Button>',
  }),
};

export const Square: Story = {
  args: {
    square: true,
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">■</Button>',
  }),
};

export const Glass: Story = {
  args: {
    glass: true,
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<div class="p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"><Button v-bind="args">Glass Button</Button></div>',
  }),
};

export const AnimationDemo: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="space-y-8 p-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">Button Animations</h3>
          <p class="text-sm text-gray-600 mb-4">Click buttons to see hover, focus, and active state animations</p>
          <div class="flex flex-wrap gap-4">
            <Button variant="primary" class="transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
              Hover Scale Effect
            </Button>
            <Button variant="secondary" class="transition-all duration-300 hover:bg-opacity-80">
              Smooth Hover
            </Button>
            <Button variant="accent" class="transform transition-transform duration-150 active:scale-95">
              Click Scale
            </Button>
            <Button variant="outline" class="transition-all duration-200 hover:border-1 hover:border-primary">
              Border Animation
            </Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Loading Animations</h3>
          <div class="flex flex-wrap gap-4">
            <Button loading variant="primary">Loading Primary</Button>
            <Button loading variant="secondary">Loading Secondary</Button>
            <Button loading variant="accent">Loading Accent</Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Custom Animation Classes</h3>
          <p class="text-sm text-gray-600 mb-4">Buttons with custom CSS animations</p>
          <div class="flex flex-wrap gap-4">
            <Button 
              variant="primary" 
              class="animate-pulse"
            >
              Pulse Animation
            </Button>
            <Button 
              variant="secondary" 
              class="transform transition-all duration-500 hover:rotate-3"
            >
              Rotate on Hover
            </Button>
            <Button 
              variant="accent" 
              class="transition-all duration-300 hover:shadow-2xl hover:shadow-accent/50"
            >
              Shadow Glow
            </Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Animation Comparison</h3>
          <div class="flex flex-wrap gap-4">
            <Button variant="primary">
              Normal Button
            </Button>
            <Button variant="primary" noAnimation>
              No Animation
            </Button>
          </div>
        </div>
      </div>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-3">Variants</h3>
          <div class="flex flex-wrap gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="neutral">Neutral</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Status Colors</h3>
          <div class="flex flex-wrap gap-2">
            <Button variant="info">Info</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="error">Error</Button>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Sizes</h3>
          <div class="flex flex-wrap gap-2 items-center">
            <Button size="xs">XS</Button>
            <Button size="sm">SM</Button>
            <Button size="md">MD</Button>
            <Button size="lg">LG</Button>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Shapes</h3>
          <div class="flex flex-wrap gap-2 items-center">
            <Button circle size="sm">○</Button>
            <Button square size="sm">■</Button>
            <Button circle size="lg">○</Button>
            <Button square size="lg">■</Button>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">States</h3>
          <div class="flex flex-wrap gap-2">
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
            <Button glass>Glass</Button>
            <Button noAnimation>No Animation</Button>
          </div>
        </div>
      </div>
    `,
  }),
};
