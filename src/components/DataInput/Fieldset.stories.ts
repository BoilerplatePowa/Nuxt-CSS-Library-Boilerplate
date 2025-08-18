import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Fieldset from './Fieldset.vue';

const meta: Meta<typeof Fieldset> = {
  title: 'Data Input/Fieldset',
  component: Fieldset,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'outlined', 'filled'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    legend: 'Personal Information',
    description: 'Please provide your basic details',
  },
  render: (args) => ({
    components: { Fieldset },
    setup() {
      return { args };
    },
    template: `
      <Fieldset v-bind="args">
        <div class="grid grid-cols-2 gap-4">
          <div class="form-control">
            <label class="label">
              <span class="label-text">First Name</span>
            </label>
            <input type="text" class="input input-bordered" placeholder="John" />
          </div>
          
          <div class="form-control">
            <label class="label">
              <span class="label-text">Last Name</span>
            </label>
            <input type="text" class="input input-bordered" placeholder="Doe" />
          </div>
          
          <div class="form-control col-span-2">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="email" class="input input-bordered" placeholder="john@example.com" />
          </div>
        </div>
      </Fieldset>
    `,
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { Fieldset },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Default</h3>
          <Fieldset legend="Contact Information">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone</span>
              </label>
              <input type="tel" class="input input-bordered" placeholder="+1 (555) 123-4567" />
            </div>
          </Fieldset>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Bordered</h3>
          <Fieldset legend="Address" variant="bordered">
            <div class="grid grid-cols-2 gap-4">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Street</span>
                </label>
                <input type="text" class="input input-bordered" placeholder="123 Main St" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">City</span>
                </label>
                <input type="text" class="input input-bordered" placeholder="New York" />
              </div>
            </div>
          </Fieldset>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Outlined</h3>
          <Fieldset legend="Preferences" variant="outlined">
            <div class="space-y-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="checkbox" />
                <span>Email notifications</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="checkbox" />
                <span>SMS notifications</span>
              </label>
            </div>
          </Fieldset>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Filled</h3>
          <Fieldset legend="Settings" variant="filled">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Theme</span>
              </label>
              <select class="select select-bordered">
                <option>Light</option>
                <option>Dark</option>
                <option>Auto</option>
              </select>
            </div>
          </Fieldset>
        </div>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Fieldset },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-bold mb-4">Small</h3>
          <Fieldset legend="Quick Info" size="sm" variant="bordered">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input type="text" class="input input-bordered input-sm" placeholder="Enter name" />
            </div>
          </Fieldset>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Medium (Default)</h3>
          <Fieldset legend="Standard Form" size="md" variant="bordered">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input type="text" class="input input-bordered" placeholder="Enter name" />
            </div>
          </Fieldset>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Large</h3>
          <Fieldset legend="Detailed Information" size="lg" variant="bordered">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input type="text" class="input input-bordered input-lg" placeholder="Enter name" />
            </div>
          </Fieldset>
        </div>
      </div>
    `,
  }),
};

export const WithErrors: Story = {
  render: () => ({
    components: { Fieldset },
    data() {
      return {
        hasError: true,
      };
    },
    template: `
      <div class="space-y-6">
        <Fieldset 
          legend="Payment Information" 
          variant="bordered"
          :error="hasError ? 'Please correct the errors below' : ''"
          required
        >
          <div class="grid grid-cols-2 gap-4">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Card Number</span>
              </label>
              <input type="text" class="input input-bordered input-error" placeholder="1234 5678 9012 3456" />
              <label class="label">
                <span class="label-text-alt text-error">Invalid card number</span>
              </label>
            </div>
            
            <div class="form-control">
              <label class="label">
                <span class="label-text">Expiry Date</span>
              </label>
              <input type="text" class="input input-bordered" placeholder="MM/YY" />
            </div>
            
            <div class="form-control">
              <label class="label">
                <span class="label-text">CVV</span>
              </label>
              <input type="text" class="input input-bordered input-error" placeholder="123" />
              <label class="label">
                <span class="label-text-alt text-error">Required field</span>
              </label>
            </div>
            
            <div class="form-control">
              <label class="label">
                <span class="label-text">Cardholder Name</span>
              </label>
              <input type="text" class="input input-bordered" placeholder="John Doe" />
            </div>
          </div>
        </Fieldset>
        
        <div class="flex gap-2">
          <button 
            class="btn btn-primary" 
            @click="hasError = false"
            v-if="hasError"
          >
            Fix Errors
          </button>
          <button 
            class="btn btn-outline" 
            @click="hasError = true"
            v-else
          >
            Show Errors
          </button>
        </div>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { Fieldset },
    data() {
      return {
        isDisabled: true,
      };
    },
    template: `
      <div class="space-y-6">
        <Fieldset 
          legend="Account Settings" 
          variant="bordered"
          :disabled="isDisabled"
          description="These settings are currently locked"
        >
          <div class="space-y-4">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Username</span>
              </label>
              <input type="text" class="input input-bordered" value="john_doe" />
            </div>
            
            <div class="form-control">
              <label class="label">
                <span class="label-text">Role</span>
              </label>
              <select class="select select-bordered">
                <option selected>Administrator</option>
                <option>User</option>
                <option>Guest</option>
              </select>
            </div>
            
            <div class="space-y-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="checkbox" checked />
                <span>Email notifications</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="checkbox" />
                <span>SMS notifications</span>
              </label>
            </div>
          </div>
        </Fieldset>
        
        <button 
          class="btn btn-primary" 
          @click="isDisabled = !isDisabled"
        >
          {{ isDisabled ? 'Enable' : 'Disable' }} Fieldset
        </button>
      </div>
    `,
  }),
};

export const NestedFieldsets: Story = {
  render: () => ({
    components: { Fieldset },
    template: `
      <div class="max-w-2xl">
        <Fieldset legend="User Profile" variant="bordered" size="lg">
          <Fieldset legend="Personal Details" variant="outlined" size="md">
            <div class="grid grid-cols-2 gap-4">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">First Name</span>
                </label>
                <input type="text" class="input input-bordered" placeholder="John" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Last Name</span>
                </label>
                <input type="text" class="input input-bordered" placeholder="Doe" />
              </div>
            </div>
          </Fieldset>
          
          <Fieldset legend="Contact Information" variant="outlined" size="md">
            <div class="space-y-4">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="email" class="input input-bordered" placeholder="john@example.com" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Phone</span>
                </label>
                <input type="tel" class="input input-bordered" placeholder="+1 (555) 123-4567" />
              </div>
            </div>
          </Fieldset>
          
          <Fieldset legend="Preferences" variant="filled" size="sm">
            <div class="space-y-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-sm" />
                <span class="text-sm">Newsletter subscription</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-sm" />
                <span class="text-sm">Marketing emails</span>
              </label>
            </div>
          </Fieldset>
        </Fieldset>
      </div>
    `,
  }),
};

export const CustomSlots: Story = {
  render: () => ({
    components: { Fieldset },
    template: `
      <div class="space-y-6">
        <Fieldset variant="bordered">
          <template #legend>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span class="font-semibold">User Account</span>
              <span class="badge badge-primary badge-sm">Required</span>
            </div>
          </template>
          
          <div class="space-y-4">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Username</span>
              </label>
              <input type="text" class="input input-bordered" placeholder="Enter username" />
            </div>
            
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input type="password" class="input input-bordered" placeholder="Enter password" />
            </div>
          </div>
          
          <template #description>
            <div class="flex items-start gap-2">
              <svg class="w-4 h-4 text-info mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-sm opacity-70">
                Your password should be at least 8 characters long and include both letters and numbers.
              </span>
            </div>
          </template>
        </Fieldset>
        
        <Fieldset variant="outlined">
          <template #legend>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span class="font-semibold text-error">Danger Zone</span>
            </div>
          </template>
          
          <div class="space-y-4">
            <button class="btn btn-error btn-outline">Delete Account</button>
            <button class="btn btn-warning btn-outline">Reset All Data</button>
          </div>
          
          <template #error>
            <div class="flex items-start gap-2">
              <svg class="w-4 h-4 text-error mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span class="text-sm">
                These actions cannot be undone. Please proceed with caution.
              </span>
            </div>
          </template>
        </Fieldset>
      </div>
    `,
  }),
};
