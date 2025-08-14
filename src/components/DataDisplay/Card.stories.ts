import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Card from './Card.vue';
import Button from '../Actions/Button.vue';

const meta: Meta<typeof Card> = {
  title: 'Data Display/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible card component with optional header, body and footer.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Card title',
    },
    variant: {
      control: { type: 'select' },
      options: ['normal', 'bordered', 'compact', 'side'],
      description: 'Card variant',
    },
    shadow: {
      control: 'boolean',
      description: 'Show card shadow',
    },
    glass: {
      control: 'boolean',
      description: 'Glass effect',
    },
    imageFull: {
      control: 'boolean',
      description: 'Full image layout',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args">Card content with simple text.</Card>',
  }),
};

export const WithTitle: Story = {
  args: {
    title: 'Card Title',
  },
  render: args => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args">This card has a title defined via the title prop.</Card>',
  }),
};

export const CustomHeader: Story = {
  render: args => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold">Custom Header</h3>
            <span class="text-sm text-gray-500">Badge</span>
          </div>
        </template>
        Card content with custom header.
      </Card>
    `,
  }),
};

export const WithFooter: Story = {
  render: args => ({
    components: { Card, Button },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">
        This card has a footer with actions.
        <template #footer>
          <Button variant="primary" size="sm">Save</Button>
          <Button variant="secondary" size="sm">Cancel</Button>
        </template>
      </Card>
    `,
  }),
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    title: 'Bordered Card',
  },
  render: args => ({
    components: { Card },
    setup() {
      return { args };
    },
    template:
      '<Card v-bind="args">This card uses the bordered variant with a visible border.</Card>',
  }),
};

export const Glass: Story = {
  args: {
    glass: true,
    title: 'Glass Card',
  },
  render: args => ({
    components: { Card },
    setup() {
      return { args };
    },
    template:
      '<Card v-bind="args">This card uses the glass variant with a transparency effect.</Card>',
  }),
};

export const NoShadow: Story = {
  args: {
    shadow: false,
    title: 'No Shadow',
  },
  render: args => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args">This card has no shadow.</Card>',
  }),
};

export const WithShadow: Story = {
  args: {
    shadow: true,
    title: 'With Shadow',
  },
  render: args => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args">This card has a very pronounced shadow.</Card>',
  }),
};

export const Compact: Story = {
  args: {
    variant: 'compact',
    title: 'Compact Card',
  },
  render: args => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args">This card uses compact variant with reduced padding.</Card>',
  }),
};

export const SideCard: Story = {
  args: {
    variant: 'side',
    title: 'Side Card',
  },
  render: args => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args">This card uses side layout variant.</Card>',
  }),
};

export const ComplexCard: Story = {
  render: args => ({
    components: { Card, Button },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args" title="User Profile" variant="bordered">
        <template #header>
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              JD
            </div>
            <div>
              <h3 class="font-semibold">John Doe</h3>
              <p class="text-sm text-gray-500">Software Engineer</p>
            </div>
          </div>
        </template>
        
        <div class="space-y-3">
          <p class="text-gray-700">
            Passionate developer with 5+ years of experience in Vue.js and TypeScript.
            Love building design systems and user interfaces.
          </p>
          
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Vue.js</span>
            <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">TypeScript</span>
            <span class="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Nuxt</span>
          </div>
        </div>
        
        <template #footer>
          <div class="flex justify-between">
            <Button variant="outline" size="sm">View Profile</Button>
            <Button variant="primary" size="sm">Send Message</Button>
          </div>
        </template>
      </Card>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    components: { Card },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Normal" variant="normal">
          Normal card
        </Card>
        
        <Card title="Bordered" variant="bordered">
          Bordered card
        </Card>
        
        <Card title="Glass" :glass="true">
          Glass card
        </Card>
      </div>
    `,
  }),
};
