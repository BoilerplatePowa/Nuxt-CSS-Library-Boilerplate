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
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        module: resolve(__dirname, 'src/module.ts'),
        'components/Actions': resolve(__dirname, 'src/components/Actions/index.ts'),
        'components/DataDisplay': resolve(__dirname, 'src/components/DataDisplay/index.ts'),
        'components/DataInput': resolve(__dirname, 'src/components/DataInput/index.ts'),
        'components/Feedback': resolve(__dirname, 'src/components/Feedback/index.ts'),
        'components/Icons': resolve(__dirname, 'src/components/Icons/index.ts'),
        'components/Layout': resolve(__dirname, 'src/components/Layout/index.ts'),
        'components/Mockup': resolve(__dirname, 'src/components/Mockup/index.ts'),
        'components/Navigation': resolve(__dirname, 'src/components/Navigation/index.ts'),
      },
      name: 'NuxtDesignSystem',
      fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'js' : 'cjs'}`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue', 'nuxt', '@nuxt/kit', 'tailwindcss', 'daisyui', 'node:url', 'node:path'],
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
