import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      rollupTypes: false, // Disable API Extractor to avoid config issues
      copyDtsFiles: true,
      include: ['src/**/*'],
      exclude: ['**/*.test.ts', '**/*.stories.ts'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'NuxtDesignSystem',
      fileName: format => `index.${format === 'es' ? 'js' : 'cjs'}`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue', 'nuxt', '@nuxt/kit', 'tailwindcss', 'daisyui'],
      output: {
        globals: {
          vue: 'Vue',
          nuxt: 'Nuxt',
          '@nuxt/kit': 'NuxtKit',
        },
        exports: 'named',
      },
    },
    sourcemap: true,
    minify: 'terser',
    target: 'esnext',
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
      '@': resolve(__dirname, './src'),
    },
  },
  // Performance improvements
  optimizeDeps: {
    include: ['vue'],
    exclude: ['@nuxt/kit'],
  },
});
