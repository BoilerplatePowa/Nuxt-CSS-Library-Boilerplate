import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import Modal from './Modal.vue';
import Button from './Button.vue';

const meta: Meta<typeof Modal> = {
  title: 'Actions/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible modal component with accessibility features, keyboard navigation, and customizable sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Modal size',
    },
    title: {
      control: { type: 'text' },
      description: 'Modal title',
    },
    closable: {
      control: { type: 'boolean' },
      description: 'Show close button',
    },
    closeOnOverlay: {
      control: { type: 'boolean' },
      description: 'Close when clicking overlay',
    },
    closeOnEsc: {
      control: { type: 'boolean' },
      description: 'Close when pressing Escape',
    },
    persistent: {
      control: { type: 'boolean' },
      description: 'Prevent closing',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => ({
    components: { Modal, Button },
    setup() {
      const isOpen = ref(false);
      const openModal = () => {
        isOpen.value = true;
      };
      const closeModal = () => {
        isOpen.value = false;
      };

      return { args, isOpen, openModal, closeModal };
    },
    template: `
      <div>
        <Button @click="openModal">Open Modal</Button>
        
        <Modal 
          v-model="isOpen" 
          v-bind="args"
          title="Modal Title"
          @close="closeModal"
        >
          <p>This is a basic modal with some content. You can close it by clicking the X button, pressing Escape, or clicking outside the modal.</p>
        </Modal>
      </div>
    `,
  }),
};

export const WithFooter: Story = {
  render: args => ({
    components: { Modal, Button },
    setup() {
      const isOpen = ref(false);
      const openModal = () => {
        isOpen.value = true;
      };
      const closeModal = () => {
        isOpen.value = false;
      };

      return { args, isOpen, openModal, closeModal };
    },
    template: `
      <div>
        <Button @click="openModal">Open Modal with Footer</Button>
        
        <Modal 
          v-model="isOpen" 
          v-bind="args"
          title="Confirm Action"
          @close="closeModal"
        >
          <p>Are you sure you want to perform this action? This cannot be undone.</p>
          
          <template #footer>
            <Button variant="outline" @click="closeModal">Cancel</Button>
            <Button variant="primary" @click="closeModal">Confirm</Button>
          </template>
        </Modal>
      </div>
    `,
  }),
};

export const CustomHeader: Story = {
  render: args => ({
    components: { Modal, Button },
    setup() {
      const isOpen = ref(false);
      const openModal = () => {
        isOpen.value = true;
      };
      const closeModal = () => {
        isOpen.value = false;
      };

      return { args, isOpen, openModal, closeModal };
    },
    template: `
      <div>
        <Button @click="openModal">Open Modal with Custom Header</Button>
        
        <Modal 
          v-model="isOpen" 
          v-bind="args"
          @close="closeModal"
        >
          <template #header>
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
              </div>
              <h2 class="text-lg font-semibold">Custom Header</h2>
            </div>
          </template>
          
          <p>This modal has a custom header with an icon and styling.</p>
        </Modal>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Modal, Button },
    setup() {
      const modals = ref({
        sm: false,
        md: false,
        lg: false,
        xl: false,
        full: false,
      });

      const openModal = (size: string) => {
        modals.value[size as keyof typeof modals.value] = true;
      };

      const closeModal = (size: string) => {
        modals.value[size as keyof typeof modals.value] = false;
      };

      return { modals, openModal, closeModal };
    },
    template: `
      <div class="space-x-2">
        <Button @click="openModal('sm')">Small</Button>
        <Button @click="openModal('md')">Medium</Button>
        <Button @click="openModal('lg')">Large</Button>
        <Button @click="openModal('xl')">Extra Large</Button>
        <Button @click="openModal('full')">Full Screen</Button>
        
        <Modal v-model="modals.sm" size="sm" title="Small Modal" @close="closeModal('sm')">
          <p>This is a small modal.</p>
        </Modal>
        
        <Modal v-model="modals.md" size="md" title="Medium Modal" @close="closeModal('md')">
          <p>This is a medium modal.</p>
        </Modal>
        
        <Modal v-model="modals.lg" size="lg" title="Large Modal" @close="closeModal('lg')">
          <p>This is a large modal with more content space.</p>
        </Modal>
        
        <Modal v-model="modals.xl" size="xl" title="Extra Large Modal" @close="closeModal('xl')">
          <p>This is an extra large modal with even more content space for complex forms or detailed information.</p>
        </Modal>
        
        <Modal v-model="modals.full" size="full" title="Full Screen Modal" @close="closeModal('full')">
          <p>This is a full screen modal that takes up the entire viewport. Perfect for complex workflows or detailed forms.</p>
        </Modal>
      </div>
    `,
  }),
};

export const Persistent: Story = {
  render: args => ({
    components: { Modal, Button },
    setup() {
      const isOpen = ref(false);
      const openModal = () => {
        isOpen.value = true;
      };
      const closeModal = () => {
        isOpen.value = false;
      };

      return { args, isOpen, openModal, closeModal };
    },
    template: `
      <div>
        <Button @click="openModal">Open Persistent Modal</Button>
        
        <Modal 
          v-model="isOpen" 
          v-bind="args"
          title="Persistent Modal"
          :persistent="true"
          :closable="false"
          :close-on-overlay="false"
          :close-on-esc="false"
          @close="closeModal"
        >
          <p>This modal cannot be closed by clicking outside, pressing Escape, or using the X button. You must use the Close button below.</p>
          
          <template #footer>
            <Button variant="primary" @click="closeModal">Close Modal</Button>
          </template>
        </Modal>
      </div>
    `,
  }),
};
