import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Swap from './Swap.vue';

const meta: Meta<typeof Swap> = {
  title: 'Actions/Swap',
  component: Swap,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Animated swap component for toggling between two states with smooth transitions.',
      },
    },
  },
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'Current swap state',
    },
    variant: {
      control: { type: 'select' },
      options: ['rotate', 'flip', 'indeterminate'],
      description: 'Swap animation variant',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Swap size',
    },
    onContent: {
      control: 'text',
      description: 'Content for on state',
    },
    offContent: {
      control: 'text',
      description: 'Content for off state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the swap interaction',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: false,
  },
  render: (args) => ({
    components: { Swap },
    setup() {
      return { args };
    },
    template: `
      <Swap v-bind="args">
        <template #on>
          <div class="text-4xl">🌞</div>
        </template>
        <template #off>
          <div class="text-4xl">🌙</div>
        </template>
      </Swap>
    `,
  }),
};

export const WithRotation: Story = {
  args: {
    modelValue: false,
    variant: 'rotate',
  },
  render: (args) => ({
    components: { Swap },
    setup() {
      return { args };
    },
    template: `
      <Swap v-bind="args">
        <template #on>
          <div class="text-4xl">▶️</div>
        </template>
        <template #off>
          <div class="text-4xl">⏸️</div>
        </template>
      </Swap>
    `,
  }),
};

export const WithFlip: Story = {
  args: {
    modelValue: false,
    variant: 'flip',
  },
  render: (args) => ({
    components: { Swap },
    setup() {
      return { args };
    },
    template: `
      <Swap v-bind="args">
        <template #on>
          <div class="text-4xl">😊</div>
        </template>
        <template #off>
          <div class="text-4xl">😴</div>
        </template>
      </Swap>
    `,
  }),
};

export const LikeButton: Story = {
  args: {
    modelValue: false,
  },
  render: (args) => ({
    components: { Swap },
    setup() {
      return { args };
    },
    template: `
      <Swap v-bind="args">
        <template #on>
          <div class="text-4xl text-red-500">❤️</div>
        </template>
        <template #off>
          <div class="text-4xl text-gray-400">🤍</div>
        </template>
      </Swap>
    `,
  }),
};

export const VolumeControl: Story = {
  args: {
    modelValue: false,
    variant: 'rotate',
  },
  render: (args) => ({
    components: { Swap },
    setup() {
      return { args };
    },
    template: `
      <div class="flex items-center gap-4">
        <span class="text-sm">Volume:</span>
        <Swap v-bind="args">
          <template #on>
            <div class="text-2xl">🔊</div>
          </template>
          <template #off>
            <div class="text-2xl">🔇</div>
          </template>
        </Swap>
      </div>
    `,
  }),
};

export const Multiple: Story = {
  render: () => ({
    components: { Swap },
    data() {
      return {
        states: [false, false, false, false],
      };
    },
    template: `
      <div class="flex gap-6 items-center">
        <div class="text-center">
          <div class="mb-2 text-sm">Theme</div>
          <Swap v-model="states[0]">
            <template #on>
              <div class="text-3xl">🌞</div>
            </template>
            <template #off>
              <div class="text-3xl">🌙</div>
            </template>
          </Swap>
        </div>
        
        <div class="text-center">
          <div class="mb-2 text-sm">Sound</div>
          <Swap v-model="states[1]" variant="rotate">
            <template #on>
              <div class="text-3xl">🔊</div>
            </template>
            <template #off>
              <div class="text-3xl">🔇</div>
            </template>
          </Swap>
        </div>
        
        <div class="text-center">
          <div class="mb-2 text-sm">Notifications</div>
          <Swap v-model="states[2]" variant="flip">
            <template #on>
              <div class="text-3xl">🔔</div>
            </template>
            <template #off>
              <div class="text-3xl">🔕</div>
            </template>
          </Swap>
        </div>
        
        <div class="text-center">
          <div class="mb-2 text-sm">Favorite</div>
          <Swap v-model="states[3]">
            <template #on>
              <div class="text-3xl text-yellow-500">⭐</div>
            </template>
            <template #off>
              <div class="text-3xl text-gray-400">☆</div>
            </template>
          </Swap>
        </div>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    modelValue: false,
    disabled: true,
  },
  render: (args) => ({
    components: { Swap },
    setup() {
      return { args };
    },
    template: `
      <Swap v-bind="args">
        <template #on>
          <div class="text-4xl opacity-50">🌞</div>
        </template>
        <template #off>
          <div class="text-4xl opacity-50">🌙</div>
        </template>
      </Swap>
    `,
  }),
};
