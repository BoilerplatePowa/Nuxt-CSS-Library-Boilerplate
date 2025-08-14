import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Drawer from './Drawer.vue';

const meta: Meta<typeof Drawer> = {
  title: 'Layout/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['left', 'right', 'top', 'bottom'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'mobile', 'overlay'],
    },
    showCloseButton: {
      control: { type: 'boolean' },
    },
    persistent: {
      control: { type: 'boolean' },
    },
    modelValue: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Drawer },
    template: `
      <div class="h-screen">
        <Drawer>
          <template #content="{ toggle }">
            <div class="p-8">
              <h1 class="text-3xl font-bold mb-4">Main Content</h1>
              <p class="mb-4">This is the main content area. Click the button below to open the drawer.</p>
              <button @click="toggle" class="btn btn-primary">
                Open Drawer
              </button>
            </div>
          </template>
          
          <template #drawer>
            <div class="p-6">
              <h2 class="text-xl font-bold mb-4">Drawer Content</h2>
              <ul class="menu">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Services</a></li>
                <li><a>Contact</a></li>
              </ul>
            </div>
          </template>
        </Drawer>
      </div>
    `,
  }),
};

export const RightSide: Story = {
  render: () => ({
    components: { Drawer },
    template: `
      <div class="h-screen">
        <Drawer position="right">
          <template #content="{ toggle }">
            <div class="p-8">
              <h1 class="text-3xl font-bold mb-4">Right Drawer Example</h1>
              <p class="mb-4">The drawer will slide in from the right side.</p>
              <button @click="toggle" class="btn btn-secondary">
                Open Right Drawer
              </button>
            </div>
          </template>
          
          <template #drawer>
            <div class="p-6">
              <h2 class="text-xl font-bold mb-4">Settings</h2>
              <div class="form-control">
                <label class="label cursor-pointer">
                  <span class="label-text">Dark Mode</span>
                  <input type="checkbox" class="toggle" />
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer">
                  <span class="label-text">Notifications</span>
                  <input type="checkbox" class="toggle" checked />
                </label>
              </div>
            </div>
          </template>
        </Drawer>
      </div>
    `,
  }),
};

export const WithCloseButton: Story = {
  render: () => ({
    components: { Drawer },
    template: `
      <div class="h-screen">
        <Drawer show-close-button>
          <template #content="{ toggle }">
            <div class="p-8">
              <h1 class="text-3xl font-bold mb-4">Drawer with Close Button</h1>
              <p class="mb-4">This drawer includes a close button in the drawer content.</p>
              <button @click="toggle" class="btn btn-accent">
                Open Drawer
              </button>
            </div>
          </template>
          
          <template #drawer>
            <div class="p-6">
              <h2 class="text-xl font-bold mb-4">Navigation</h2>
              <ul class="menu">
                <li><a>Dashboard</a></li>
                <li><a>Profile</a></li>
                <li><a>Settings</a></li>
                <li><a>Help</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </template>
        </Drawer>
      </div>
    `,
  }),
};

export const MobileVariant: Story = {
  render: () => ({
    components: { Drawer },
    template: `
      <div class="h-screen">
        <Drawer variant="mobile">
          <template #content="{ toggle }">
            <div class="navbar bg-base-100">
              <div class="navbar-start">
                <button @click="toggle" class="btn btn-square btn-ghost">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
              <div class="navbar-center">
                <a class="btn btn-ghost text-xl">Mobile App</a>
              </div>
            </div>
            
            <div class="p-8">
              <h1 class="text-2xl font-bold mb-4">Mobile Layout</h1>
              <p>This is optimized for mobile devices with a hamburger menu.</p>
            </div>
          </template>
          
          <template #drawer>
            <div class="p-6">
              <div class="flex items-center gap-4 mb-6">
                <div class="avatar">
                  <div class="w-12 rounded-full">
                    <img src="https://via.placeholder.com/48" alt="User" />
                  </div>
                </div>
                <div>
                  <div class="font-bold">John Doe</div>
                  <div class="text-sm opacity-50">john@example.com</div>
                </div>
              </div>
              
              <ul class="menu">
                <li><a>📊 Dashboard</a></li>
                <li><a>👤 Profile</a></li>
                <li><a>📧 Messages</a></li>
                <li><a>⚙️ Settings</a></li>
                <li><a>📱 Mobile App</a></li>
              </ul>
            </div>
          </template>
        </Drawer>
      </div>
    `,
  }),
};

export const OverlayVariant: Story = {
  render: () => ({
    components: { Drawer },
    template: `
      <div class="h-screen">
        <Drawer variant="overlay">
          <template #content="{ toggle }">
            <div class="hero min-h-screen bg-base-200">
              <div class="hero-content text-center">
                <div class="max-w-md">
                  <h1 class="text-5xl font-bold">Overlay Drawer</h1>
                  <p class="py-6">
                    This drawer appears as an overlay on top of the content.
                  </p>
                  <button @click="toggle" class="btn btn-primary">
                    Open Overlay
                  </button>
                </div>
              </div>
            </div>
          </template>
          
          <template #drawer>
            <div class="p-6">
              <h2 class="text-xl font-bold mb-4">Quick Actions</h2>
              <div class="grid gap-4">
                <button class="btn btn-outline">New Document</button>
                <button class="btn btn-outline">Upload File</button>
                <button class="btn btn-outline">Share Link</button>
                <button class="btn btn-outline">Export Data</button>
              </div>
            </div>
          </template>
        </Drawer>
      </div>
    `,
  }),
};

export const Persistent: Story = {
  render: () => ({
    components: { Drawer },
    template: `
      <div class="h-screen">
        <Drawer persistent :model-value="true">
          <template #content>
            <div class="p-8">
              <h1 class="text-3xl font-bold mb-4">Persistent Drawer</h1>
              <p class="mb-4">
                This drawer is always open and cannot be closed by clicking outside.
                Perfect for desktop layouts with permanent navigation.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="card bg-base-100 shadow-xl">
                  <div class="card-body">
                    <h2 class="card-title">Card 1</h2>
                    <p>Some content here</p>
                  </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                  <div class="card-body">
                    <h2 class="card-title">Card 2</h2>
                    <p>More content here</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
          
          <template #drawer>
            <div class="p-6">
              <h2 class="text-lg font-bold mb-4">Persistent Navigation</h2>
              <ul class="menu">
                <li><a class="active">📊 Dashboard</a></li>
                <li><a>📈 Analytics</a></li>
                <li><a>👥 Users</a></li>
                <li><a>📄 Reports</a></li>
                <li><a>⚙️ Settings</a></li>
              </ul>
            </div>
          </template>
        </Drawer>
      </div>
    `,
  }),
};
