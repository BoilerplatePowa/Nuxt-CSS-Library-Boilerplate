import type { Meta, StoryObj } from '@storybook/vue3';
import { Form, Field } from 'vee-validate';
import * as yup from 'yup';
import Input from './Input.vue';

const meta: Meta<typeof Input> = {
  title: 'Data Input/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The input value (v-model)',
    },
    name: {
      control: 'text',
      description: 'Field name for VeeValidate',
    },
    label: {
      control: 'text',
      description: 'Input label',
    },
    placeholder: {
      control: 'text',
      description: 'Input placeholder text',
    },
    helpText: {
      control: 'text',
      description: 'Help text displayed below the input',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'url', 'tel', 'number', 'search', 'date', 'time', 'datetime-local', 'month', 'week'],
      description: 'Input type',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Input size',
    },
    variant: {
      control: 'select',
      options: ['bordered', 'ghost', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error', 'neutral'],
      description: 'Input variant/style',
    },
    leftIcon: {
      control: 'select',
      options: ['search', 'mail', 'phone', 'user', 'lock', 'eye', 'eye-off', 'calendar', 'map-pin', 'settings'],
      description: 'Left icon name',
    },
    rightIcon: {
      control: 'select',
      options: ['search', 'mail', 'phone', 'user', 'lock', 'eye', 'eye-off', 'calendar', 'map-pin', 'settings'],
      description: 'Right icon name',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    readonly: {
      control: 'boolean',
      description: 'Whether the input is readonly',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
    maxlength: {
      control: 'number',
      description: 'Maximum character length',
    },
    showCharCount: {
      control: 'boolean',
      description: 'Show character count',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic input
export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    required: true,
  },
};

// Input with icon
export const WithIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    type: 'search',
    leftIcon: 'search',
  },
};

// Input with validation
export const WithValidation: Story = {
  render: (args) => ({
    components: { Input, Form, Field },
    setup() {
      const schema = yup.object({
        email: yup.string().email('Please enter a valid email').required('Email is required'),
        password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
      });

      return { args, schema };
    },
    template: `
      <Form :validation-schema="schema" v-slot="{ handleSubmit }">
        <form @submit="handleSubmit" class="space-y-4 w-80">
          <Input
            name="email"
            label="Email"
            placeholder="Enter your email"
            type="email"
            left-icon="mail"
            required
          />
          <Input
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            left-icon="lock"
            right-icon="eye"
            required
          />
          <button type="submit" class="btn btn-primary w-full">Submit</button>
        </form>
      </Form>
    `,
  }),
};

// Different sizes
export const Sizes: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="space-y-4 w-80">
        <Input label="Extra Small" placeholder="xs size" size="xs" />
        <Input label="Small" placeholder="sm size" size="sm" />
        <Input label="Medium" placeholder="md size" size="md" />
        <Input label="Large" placeholder="lg size" size="lg" />
        <Input label="Extra Large" placeholder="xl size" size="xl" />
      </div>
    `,
  }),
};

// Different variants
export const Variants: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="space-y-4 w-80">
        <Input label="Bordered" placeholder="bordered variant" variant="bordered" />
        <Input label="Ghost" placeholder="ghost variant" variant="ghost" />
        <Input label="Primary" placeholder="primary variant" variant="primary" />
        <Input label="Secondary" placeholder="secondary variant" variant="secondary" />
        <Input label="Accent" placeholder="accent variant" variant="accent" />
        <Input label="Info" placeholder="info variant" variant="info" />
        <Input label="Success" placeholder="success variant" variant="success" />
        <Input label="Warning" placeholder="warning variant" variant="warning" />
        <Input label="Error" placeholder="error variant" variant="error" />
        <Input label="Neutral" placeholder="neutral variant" variant="neutral" />
      </div>
    `,
  }),
};

// Input with character count
export const WithCharacterCount: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter description',
    maxlength: 100,
    showCharCount: true,
  },
};

// Disabled and readonly states
export const States: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="space-y-4 w-80">
        <Input label="Normal" placeholder="normal input" />
        <Input label="Disabled" placeholder="disabled input" disabled />
        <Input label="Readonly" placeholder="readonly input" readonly />
      </div>
    `,
  }),
};

// Different input types
export const InputTypes: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="space-y-4 w-80">
        <Input label="Text" placeholder="text input" type="text" />
        <Input label="Email" placeholder="email@example.com" type="email" left-icon="mail" />
        <Input label="Password" placeholder="password" type="password" left-icon="lock" />
        <Input label="URL" placeholder="https://example.com" type="url" left-icon="link" />
        <Input label="Phone" placeholder="+1 (555) 123-4567" type="tel" left-icon="phone" />
        <Input label="Number" placeholder="123" type="number" />
        <Input label="Search" placeholder="search..." type="search" left-icon="search" />
        <Input label="Date" type="date" />
        <Input label="Time" type="time" />
      </div>
    `,
  }),
};

// Complex form example
export const ComplexForm: Story = {
  render: () => ({
    components: { Input, Form, Field },
    setup() {
      const schema = yup.object({
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Last name is required'),
        email: yup.string().email('Please enter a valid email').required('Email is required'),
        phone: yup.string().matches(/^\+?[\d\s-()]+$/, 'Please enter a valid phone number'),
        website: yup.string().url('Please enter a valid URL'),
        bio: yup.string().max(200, 'Bio must be less than 200 characters'),
      });

      return { schema };
    },
    template: `
      <Form :validation-schema="schema" v-slot="{ handleSubmit }">
        <form @submit="handleSubmit" class="space-y-4 w-96">
          <div class="grid grid-cols-2 gap-4">
            <Input
              name="firstName"
              label="First Name"
              placeholder="John"
              left-icon="user"
              required
            />
            <Input
              name="lastName"
              label="Last Name"
              placeholder="Doe"
              left-icon="user"
              required
            />
          </div>
          
          <Input
            name="email"
            label="Email"
            placeholder="john.doe@example.com"
            type="email"
            left-icon="mail"
            required
          />
          
          <Input
            name="phone"
            label="Phone"
            placeholder="+1 (555) 123-4567"
            type="tel"
            left-icon="phone"
          />
          
          <Input
            name="website"
            label="Website"
            placeholder="https://example.com"
            type="url"
            left-icon="link"
          />
          
          <Input
            name="bio"
            label="Bio"
            placeholder="Tell us about yourself..."
            maxlength="200"
            show-char-count
          />
          
          <button type="submit" class="btn btn-primary w-full">Submit</button>
        </form>
      </Form>
    `,
  }),
};
