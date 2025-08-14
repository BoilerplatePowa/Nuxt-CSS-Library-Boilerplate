import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Textarea from './Textarea.vue';

const meta: Meta<typeof Textarea> = {
  title: 'DataInput/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'ghost'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readonly: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    showCharCount: {
      control: { type: 'boolean' },
    },
    resize: {
      control: { type: 'select' },
      options: ['none', 'both', 'horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
  },
};

export const WithHelp: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter description...',
    helpText: 'Provide a detailed description of your request',
  },
};

export const WithError: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
    errorMessage: 'This field is required',
    modelValue: '',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Textarea',
    placeholder: 'This is disabled',
    disabled: true,
  },
};

export const Readonly: Story = {
  args: {
    label: 'Read Only',
    modelValue: 'This content cannot be edited',
    readonly: true,
  },
};

export const SmallSize: Story = {
  args: {
    label: 'Small Textarea',
    placeholder: 'Small size',
    size: 'sm',
  },
};

export const LargeSize: Story = {
  args: {
    label: 'Large Textarea',
    placeholder: 'Large size',
    size: 'lg',
  },
};

export const Bordered: Story = {
  args: {
    label: 'Bordered',
    placeholder: 'Bordered variant',
    variant: 'bordered',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Ghost',
    placeholder: 'Ghost variant',
    variant: 'ghost',
  },
};

export const WithCharacterCount: Story = {
  args: {
    label: 'Message',
    placeholder: 'Type your message...',
    maxlength: 200,
    showCharCount: true,
    modelValue: 'This textarea shows character count',
  },
};

export const CustomRows: Story = {
  args: {
    label: 'Large Text Area',
    placeholder: 'This textarea has more rows...',
    rows: 8,
  },
};

export const NoResize: Story = {
  args: {
    label: 'No Resize',
    placeholder: 'This textarea cannot be resized',
    resize: 'none',
  },
};
