import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Dropdown from './Dropdown.vue';

const meta: Meta<typeof Dropdown> = {
  title: 'Actions/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Interactive dropdown menu component with customizable trigger and positioning.',
      },
    },
  },
  argTypes: {
    triggerText: {
      control: 'text',
      description: 'Text for the default trigger button',
    },
    position: {
      control: { type: 'select' },
      options: ['bottom', 'top', 'left', 'right'],
      description: 'Position of the dropdown relative to trigger',
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'end'],
      description: 'Alignment of the dropdown',
    },
    hover: {
      control: 'boolean',
      description: 'Open dropdown on hover instead of click',
    },
    forceOpen: {
      control: 'boolean',
      description: 'Force dropdown to stay open',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the dropdown',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Dropdown size',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent', 'ghost', 'outline'],
      description: 'Dropdown variant',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { Dropdown },
    setup() {
      return { args };
    },
    template: `
      <Dropdown v-bind="args">
        <template #trigger>
          <button class="btn btn-primary">Click me</button>
        </template>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
      </Dropdown>
    `,
  }),
};

export const WithIcons: Story = {
  args: {},
  render: (args) => ({
    components: { Dropdown },
    setup() {
      return { args };
    },
    template: `
      <Dropdown v-bind="args">
        <template #trigger>
          <button class="btn btn-ghost">Menu ▼</button>
        </template>
        <li><a>📧 Messages</a></li>
        <li><a>⚙️ Settings</a></li>
        <li><a>👤 Profile</a></li>
        <li><hr class="my-1"></li>
        <li><a class="text-error">🚪 Logout</a></li>
      </Dropdown>
    `,
  }),
};

export const Positions: Story = {
  render: () => ({
    components: { Dropdown },
    template: `
      <div class="flex gap-4 flex-wrap">
        <Dropdown position="bottom">
          <template #trigger>
            <button class="btn btn-outline">Bottom</button>
          </template>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </Dropdown>
        
        <Dropdown position="top">
          <template #trigger>
            <button class="btn btn-outline">Top</button>
          </template>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </Dropdown>
        
        <Dropdown position="left">
          <template #trigger>
            <button class="btn btn-outline">Left</button>
          </template>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </Dropdown>
        
        <Dropdown position="right">
          <template #trigger>
            <button class="btn btn-outline">Right</button>
          </template>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </Dropdown>
      </div>
    `,
  }),
};

export const HoverMode: Story = {
  args: {
    hover: true,
  },
  render: (args) => ({
    components: { Dropdown },
    setup() {
      return { args };
    },
    template: `
      <Dropdown v-bind="args">
        <template #trigger>
          <button class="btn btn-secondary">Hover me</button>
        </template>
        <li><a>Hover Item 1</a></li>
        <li><a>Hover Item 2</a></li>
        <li><a>Hover Item 3</a></li>
      </Dropdown>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { Dropdown },
    setup() {
      return { args };
    },
    template: `
      <Dropdown v-bind="args">
        <template #trigger>
          <button class="btn btn-disabled">Disabled Dropdown</button>
        </template>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </Dropdown>
    `,
  }),
};
