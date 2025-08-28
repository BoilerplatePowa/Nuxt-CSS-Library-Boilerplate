import { defineNuxtConfig } from 'nuxt/config';

// Example 1: Basic configuration with all components
export default defineNuxtConfig({
  modules: ['~/src/plugin/index.ts'],
  
  designSystem: {
    prefix: 'Bp',
    components: true,
    css: true,
    composables: true,
  },
});

// Example 2: Custom prefix configuration
export const customPrefixConfig = defineNuxtConfig({
  modules: ['~/src/plugin/index.ts'],
  
  designSystem: {
    prefix: 'MyDS',
    components: true,
    css: true,
    composables: true,
  },
});

// Example 3: Selective component loading
export const selectiveComponentsConfig = defineNuxtConfig({
  modules: ['~/src/plugin/index.ts'],
  
  designSystem: {
    prefix: 'Bp',
    components: [
      'Button',
      'Card',
      'Input',
      'Modal',
      'Alert',
      'Toast',
      'Navbar',
      'Drawer',
    ],
    css: true,
    composables: true,
  },
});

// Example 4: Minimal configuration (no global components)
export const minimalConfig = defineNuxtConfig({
  modules: ['~/src/plugin/index.ts'],
  
  designSystem: {
    prefix: 'Bp',
    components: false, // Disable global registration
    css: true,
    composables: true,
  },
  
  // Use manual imports instead
  components: {
    dirs: ['~/src/components'],
    global: false,
  },
});

// Example 5: Production optimized configuration
export const productionConfig = defineNuxtConfig({
  modules: ['~/src/plugin/index.ts'],
  
  designSystem: {
    prefix: 'Bp',
    components: [
      // Only load components you actually use
      'Button',
      'Card',
      'Input',
      'Modal',
      'Alert',
      'Toast',
      'Navbar',
      'Drawer',
      'Tabs',
      'Table',
      'Badge',
      'Avatar',
    ],
    css: true,
    composables: true,
  },
  
  // Additional optimizations
  experimental: {
    payloadExtraction: false,
  },
  
  nitro: {
    compressPublicAssets: true,
  },
});

// Example 6: Development configuration with all features
export const developmentConfig = defineNuxtConfig({
  modules: ['~/src/plugin/index.ts'],
  
  designSystem: {
    prefix: 'Bp',
    components: true, // Load all components for development
    css: true,
    composables: true,
  },
  
  devtools: { enabled: true },
  
  // Development-specific settings
  experimental: {
    typedPages: true,
    viewTransition: true,
  },
});
