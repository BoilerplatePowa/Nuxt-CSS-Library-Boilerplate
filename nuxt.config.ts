import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // Nuxt 3.18 features
  future: {
    compatibilityVersion: 4
  },
  
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  
  modules: [
    '~/src/plugin/index.ts'
  ],
  
  components: {
    dirs: ['~/src/components']
  },
  
  typescript: {
    strict: true,
    typeCheck: true
  },
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/variables.scss";'
        }
      }
    }
  },
  
  // Improved build configuration for Nuxt 3.18
  nitro: {
    experimental: {
      wasm: true
    }
  },
  
  // Enhanced experimental features
  experimental: {
    typedPages: true,
    viewTransition: true,
    sharedPrerenderData: true
  },
  
  // Performance optimizations for Nuxt 3.18
  optimization: {
    keyedComposables: [
      {
        name: 'useState',
        argumentLength: 2
      }
    ]
  }
}) 