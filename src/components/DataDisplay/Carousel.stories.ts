import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Carousel from './Carousel.vue';

const meta: Meta<typeof Carousel> = {
  title: 'Data Display/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Interactive carousel component for displaying images and content with navigation controls.',
      },
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of carousel items',
    },
    autoplay: {
      control: 'boolean',
      description: 'Enable automatic slide progression',
    },
    autoplayInterval: {
      control: { type: 'number', min: 1000, max: 10000, step: 500 },
      description: 'Autoplay interval in milliseconds',
    },
    showIndicators: {
      control: 'boolean',
      description: 'Show dot indicators',
    },
    showArrows: {
      control: 'boolean',
      description: 'Show navigation arrows',
    },
    loop: {
      control: 'boolean',
      description: 'Enable infinite loop',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'full-width', 'center', 'vertical'],
      description: 'Carousel variant',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const imageItems = [
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
    alt: 'Mountain landscape',
    value: '1',
  },
  {
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=400&fit=crop',
    alt: 'Ocean waves',
    value: '2',
  },
  {
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop',
    alt: 'Forest path',
    value: '3',
  },
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
    alt: 'Desert dunes',
    value: '4',
  },
];

export const Default: Story = {
  args: {
    items: imageItems,
    showIndicators: true,
    showArrows: true,
  },
};

export const Autoplay: Story = {
  args: {
    items: imageItems,
    autoplay: true,
    autoplayInterval: 3000,
    showIndicators: true,
    showArrows: true,
  },
};

export const NoControls: Story = {
  args: {
    items: imageItems,
    showIndicators: false,
    showArrows: false,
  },
};

export const InfiniteLoop: Story = {
  args: {
    items: imageItems,
    loop: true,
    showIndicators: true,
    showArrows: true,
  },
};

export const ProductShowcase: Story = {
  args: {
    items: [
      {
        value: '1',
        content: `
          <div class="flex flex-col items-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div class="w-32 h-32 bg-blue-500 rounded-full mb-4 flex items-center justify-center text-white text-4xl">
              📱
            </div>
            <h3 class="text-2xl font-bold mb-2">Smartphone</h3>
            <p class="text-gray-600 text-center">Latest technology with amazing features</p>
            <div class="text-3xl font-bold text-blue-600 mt-4">$699</div>
          </div>
        `,
      },
      {
        value: '2',
        content: `
          <div class="flex flex-col items-center p-8 bg-gradient-to-br from-green-50 to-emerald-100">
            <div class="w-32 h-32 bg-green-500 rounded-full mb-4 flex items-center justify-center text-white text-4xl">
              💻
            </div>
            <h3 class="text-2xl font-bold mb-2">Laptop</h3>
            <p class="text-gray-600 text-center">Powerful performance for work and play</p>
            <div class="text-3xl font-bold text-green-600 mt-4">$1,299</div>
          </div>
        `,
      },
      {
        value: '3',
        content: `
          <div class="flex flex-col items-center p-8 bg-gradient-to-br from-purple-50 to-violet-100">
            <div class="w-32 h-32 bg-purple-500 rounded-full mb-4 flex items-center justify-center text-white text-4xl">
              🎧
            </div>
            <h3 class="text-2xl font-bold mb-2">Headphones</h3>
            <p class="text-gray-600 text-center">Premium sound quality and comfort</p>
            <div class="text-3xl font-bold text-purple-600 mt-4">$199</div>
          </div>
        `,
      },
    ],
    showIndicators: true,
    showArrows: true,
  },
};

export const TestimonialCarousel: Story = {
  args: {
    items: [
      {
        value: '1',
        content: `
          <div class="text-center p-8 max-w-md mx-auto">
            <div class="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
            <p class="text-lg italic mb-6">"This product exceeded my expectations. Highly recommended!"</p>
            <div class="flex items-center justify-center">
              <div class="w-12 h-12 bg-blue-500 rounded-full mr-4"></div>
              <div>
                <div class="font-semibold">Sarah Johnson</div>
                <div class="text-sm text-gray-500">Verified Customer</div>
              </div>
            </div>
          </div>
        `,
      },
      {
        value: '2',
        content: `
          <div class="text-center p-8 max-w-md mx-auto">
            <div class="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
            <p class="text-lg italic mb-6">"Amazing customer service and fast delivery!"</p>
            <div class="flex items-center justify-center">
              <div class="w-12 h-12 bg-green-500 rounded-full mr-4"></div>
              <div>
                <div class="font-semibold">Mike Chen</div>
                <div class="text-sm text-gray-500">Happy Customer</div>
              </div>
            </div>
          </div>
        `,
      },
      {
        value: '3',
        content: `
          <div class="text-center p-8 max-w-md mx-auto">
            <div class="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
            <p class="text-lg italic mb-6">"Best purchase I've made this year!"</p>
            <div class="flex items-center justify-center">
              <div class="w-12 h-12 bg-purple-500 rounded-full mr-4"></div>
              <div>
                <div class="font-semibold">Emily Davis</div>
                <div class="text-sm text-gray-500">Regular Customer</div>
              </div>
            </div>
          </div>
        `,
      },
    ],
    autoplay: true,
    autoplayInterval: 4000,
    showIndicators: true,
    showArrows: false,
  },
};
