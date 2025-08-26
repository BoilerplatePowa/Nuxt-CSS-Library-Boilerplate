import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import Swap from './Swap.vue';

const meta: Meta<typeof Swap> = {
  title: 'Actions/Swap',
  component: Swap,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Animated swap component for toggling between two states with smooth transitions using Vue 3.4 defineModel with explicit isOn naming.',
      },
    },
  },
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'Current swap state (handled by v-model)',
    },
    variant: {
      control: { type: 'select' },
      options: ['rotate', 'flip', 'indeterminate'],
      description: 'Swap animation variant',
    },
    swapOnContent: {
      control: 'text',
      description: 'Content for on state',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '🌞' },
      },
    },
    swapOffContent: {
      control: 'text',
      description: 'Content for off state',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '🌚' },
      },
    },
    indeterminateContent: {
      control: 'text',
      description: 'Content for indeterminate state',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '🌤️' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the swap interaction',
    },
    name: {
      control: 'text',
      description: 'Name attribute for the input element',
    },
    id: {
      control: 'text',
      description: 'ID attribute for the input element',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Swap },
    setup() {
      const isOn = ref(false);
      return { isOn };
    },
    template: `
      <div class="space-y-4">
        <Swap v-model="isOn" />
        <p class="text-sm text-gray-600">Current state: {{ isOn ? 'On' : 'Off' }}</p>
      </div>
    `,
  }),
};

export const WithRotation: Story = {
  render: () => ({
    components: { Swap },
    setup() {
      const isOn = ref(false);
      return { isOn };
    },
    template: `
      <div class="space-y-4">
        <Swap v-model="isOn" variant="rotate">
          <template #on>
            <div class="text-4xl">▶️</div>
          </template>
          <template #off>
            <div class="text-4xl">⏸️</div>
          </template>
        </Swap>
        <p class="text-sm text-gray-600">Current state: {{ isOn ? 'Playing' : 'Paused' }}</p>
      </div>
    `,
  }),
};

export const WithFlip: Story = {
  render: () => ({
    components: { Swap },
    setup() {
      const isOn = ref(false);
      return { isOn };
    },
    template: `
      <div class="space-y-4">
        <Swap v-model="isOn" variant="flip">
          <template #on>
            <div class="text-4xl">😊</div>
          </template>
          <template #off>
            <div class="text-4xl">😴</div>
          </template>
        </Swap>
        <p class="text-sm text-gray-600">Current state: {{ isOn ? 'Awake' : 'Sleeping' }}</p>
      </div>
    `,
  }),
};

export const LikeButton: Story = {
  render: () => ({
    components: { Swap },
    setup() {
      const isOn = ref(false);
      return { isOn };
    },
    template: `
      <div class="space-y-4">
        <Swap v-model="isOn">
          <template #on>
            <div class="text-4xl text-red-500">❤️</div>
          </template>
          <template #off>
            <div class="text-4xl text-gray-400">🤍</div>
          </template>
        </Swap>
        <p class="text-sm text-gray-600">Liked: {{ isOn ? 'Yes' : 'No' }}</p>
      </div>
    `,
  }),
};

export const VolumeControl: Story = {
  render: () => ({
    components: { Swap },
    setup() {
      const isOn = ref(false);
      return { isOn };
    },
    template: `
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <span class="text-sm">Volume:</span>
          <Swap v-model="isOn" variant="rotate">
            <template #on>
              <div class="text-2xl">🔊</div>
            </template>
            <template #off>
              <div class="text-2xl">🔇</div>
            </template>
          </Swap>
        </div>
        <p class="text-sm text-gray-600">Volume: {{ isOn ? 'On' : 'Muted' }}</p>
      </div>
    `,
  }),
};

export const Multiple: Story = {
  render: () => ({
    components: { Swap },
    setup() {
      const states = ref([false, false, false, false]);
      return { states };
    },
    template: `
      <div class="space-y-6">
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
        
        <div class="text-sm text-gray-600">
          <p>States: Theme: {{ states[0] ? 'Light' : 'Dark' }} | 
          Sound: {{ states[1] ? 'On' : 'Off' }} | 
          Notifications: {{ states[2] ? 'On' : 'Off' }} | 
          Favorite: {{ states[3] ? 'Yes' : 'No' }}</p>
        </div>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { Swap },
    setup() {
      const isOn = ref(false);
      return { isOn };
    },
    template: `
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-semibold mb-2">Disabled with Slots</h3>
          <Swap v-model="isOn" :disabled="true">
            <template #on>
              <div class="text-4xl">🌞</div>
            </template>
            <template #off>
              <div class="text-4xl">🌙</div>
            </template>
          </Swap>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Disabled with Props</h3>
          <Swap 
            v-model="isOn"
            :disabled="true"
            swap-on-content="🌞"
            swap-off-content="🌙"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Enabled for Comparison</h3>
          <Swap 
            v-model="isOn"
            :disabled="false"
            swap-on-content="🌞"
            swap-off-content="🌙"
          />
        </div>
        
        <p class="text-sm text-gray-600">Try clicking on the disabled swaps - they should not animate or change state.</p>
        <p class="text-sm text-gray-600">Current state: {{ isOn ? 'On' : 'Off' }}</p>
      </div>
    `,
  }),
};

export const Accessible: Story = {
  render: () => ({
    components: { Swap },
    setup() {
      const themeValue = ref(false);
      const notificationsValue = ref(false);
      return { themeValue, notificationsValue };
    },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-2">Accessible Swap with ID and Name</h3>
          <Swap v-model="themeValue" name="theme-toggle" id="theme-swap">
            <template #on>
              <div class="text-4xl">🌞</div>
            </template>
            <template #off>
              <div class="text-4xl">🌙</div>
            </template>
          </Swap>
          <p class="text-sm text-gray-600">Theme: {{ themeValue ? 'Light' : 'Dark' }}</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Form Integration Example</h3>
          <form class="space-y-2">
            <label for="notifications-swap" class="block text-sm font-medium">
              Enable Notifications
            </label>
            <Swap 
              v-model="notificationsValue"
              name="notifications"
              id="notifications-swap"
            >
              <template #on>
                <div class="text-2xl">🔔</div>
              </template>
              <template #off>
                <div class="text-2xl">🔕</div>
              </template>
            </Swap>
          </form>
          <p class="text-sm text-gray-600">Notifications: {{ notificationsValue ? 'Enabled' : 'Disabled' }}</p>
        </div>
        
        <p class="text-sm text-gray-600">
          These swaps have proper id and name attributes for accessibility and form integration.
        </p>
      </div>
    `,
  }),
};

export const WithModifiers: Story = {
  render: () => ({
    components: { Swap },
    setup() {
      const isOn = ref(false);
      return { isOn };
    },
    template: `
      <div class="space-y-4">
        <h3 class="text-lg font-semibold">Swap with v-model modifiers example</h3>
        <p class="text-sm text-gray-600 mb-4">
          This demonstrates how the component works with v-model. 
          The component uses defineModel() which automatically handles the two-way binding.
        </p>
        
        <Swap v-model="isOn">
          <template #on>
            <div class="text-4xl">✅</div>
          </template>
          <template #off>
            <div class="text-4xl">❌</div>
          </template>
        </Swap>
        
        <div class="space-y-2">
          <p class="text-sm text-gray-600">Current state: {{ isOn ? 'Active' : 'Inactive' }}</p>
          <button 
            @click="isOn = !isOn"
            class="btn btn-sm btn-outline"
          >
            Toggle from parent
          </button>
        </div>
      </div>
    `,
  }),
};
