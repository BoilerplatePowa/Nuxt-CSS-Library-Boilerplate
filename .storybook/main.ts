import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
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

    // Try to dynamically import TailwindCSS 4 Vite plugin
    try {
      const { default: tailwindcss } = await import('@tailwindcss/vite');
      config.plugins = config.plugins || [];
      config.plugins.push(tailwindcss());
    } catch (error) {
      console.warn('TailwindCSS Vite plugin failed to load, using CSS import fallback');
      // Fallback to CSS import (which is already in preview.ts)
    }

    return config;
  },
};

export default config;
