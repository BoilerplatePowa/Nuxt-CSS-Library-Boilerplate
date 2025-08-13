import type { StorybookConfig } from '@storybook/vue3-vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  // docs: {
  //   autodocs: 'tag'
  // },
  viteFinal: async config => {
    // Custom Vite configuration for Storybook
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '~': '/src',
        '@': '/src',
      };
    }

    // Add Tailwind CSS with specific configuration
    if (config.css) {
      config.css.postcss = {
        plugins: [tailwindcss, autoprefixer],
      };
    }

    return config;
  },
};

export default config;
