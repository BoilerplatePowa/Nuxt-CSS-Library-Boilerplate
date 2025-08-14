import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Input from './Input.vue';

const meta: Meta<typeof Input> = {
  title: 'Data Input/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible input component with validation, help text, and accessibility features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Input type',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Input size',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'outline'],
      description: 'Input variant',
    },
    label: {
      control: { type: 'text' },
      description: 'Input label',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    helpText: {
      control: { type: 'text' },
      description: 'Help text below input',
    },
    errorMessage: {
      control: { type: 'text' },
      description: 'Error message',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    readonly: {
      control: { type: 'boolean' },
      description: 'Readonly state',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Required field',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
};

export const WithHelpText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    helpText: 'Must be at least 8 characters',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    errorMessage: 'Please enter a valid email address',
    modelValue: 'invalid-email',
  },
};

export const Required: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
  },
};

export const Readonly: Story = {
  args: {
    label: 'Readonly Input',
    modelValue: 'This value cannot be changed',
    readonly: true,
  },
};

export const Sizes: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="space-y-4 w-80">
        <Input label="Small Input" size="sm" placeholder="Small size" />
        <Input label="Medium Input" size="md" placeholder="Medium size" />
        <Input label="Large Input" size="lg" placeholder="Large size" />
      </div>
    `,
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="space-y-4 w-80">
        <Input label="Default Variant" variant="default" placeholder="Default variant" />
        <Input label="Filled Variant" variant="filled" placeholder="Filled variant" />
        <Input label="Outline Variant" variant="outline" placeholder="Outline variant" />
      </div>
    `,
  }),
};

export const AllTypes: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <Input label="Text" type="text" placeholder="Text input" />
        <Input label="Email" type="email" placeholder="email@example.com" />
        <Input label="Password" type="password" placeholder="Password" />
        <Input label="Number" type="number" placeholder="123" />
        <Input label="Telephone" type="tel" placeholder="+1 (555) 123-4567" />
        <Input label="URL" type="url" placeholder="https://example.com" />
        <Input label="Search" type="search" placeholder="Search..." />
      </div>
    `,
  }),
};
