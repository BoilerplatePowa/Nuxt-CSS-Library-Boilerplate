import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  // Nuxt 4 features
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  modules: [
    '~/src/module.ts',
  ],

  // Design System configuration
  designSystem: {
    prefix: 'Bp',
    components: true,
    css: true,
    composables: true,
  },

  components: {
    dirs: ['~/src/components'],
    global: true,
  },

  typescript: {
    strict: true,
    typeCheck: true,
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      daisyui: {},
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/variables.scss";',
        },
      },
    },
  },

  // Build configuration for Nuxt 4
  nitro: {
    experimental: {
      wasm: true,
    },
  },

  // Enhanced experimental features
  experimental: {
    typedPages: true,
    viewTransition: true,
    sharedPrerenderData: true,
  },

  // Performance optimizations
  optimization: {
    keyedComposables: [
      {
        name: 'useState',
        argumentLength: 2,
      },
    ],
  },

  // App configuration
  app: {
    head: {
      title: 'Nuxt Design System',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Modern Design System for Nuxt 4+ with TailwindCSS, DaisyUI and Storybook' },
      ],
    },
  },
});
