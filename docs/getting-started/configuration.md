# Configuration Guide

This guide covers all configuration options for the **@boilerplatepowa/nuxt-design-system**.

## Nuxt Configuration

### Basic Configuration

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@boilerplatepowa/nuxt-design-system'],
  
  designSystem: {
    prefix: 'Bp',
    components: true,
    css: true,
  },
});
```

### Advanced Configuration

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  // Nuxt 4 features
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  modules: [
    '~/src/plugin/index.ts',
  ],

  // Design System configuration
  designSystem: {
    prefix: 'Bp', // Component prefix (optional)
    components: true, // Auto-register components
    css: true, // Include global CSS
    composables: true, // Auto-register composables
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
```

## Design System Options

### prefix
- **Type:** `string`
- **Default:** `'Bp'`
- **Description:** Component prefix for global registration

```typescript
designSystem: {
  prefix: 'MyDS', // Components will be registered as MyDSButton, MyDSCard, etc.
}
```

### components
- **Type:** `boolean`
- **Default:** `true`
- **Description:** Auto-register all components globally

```typescript
designSystem: {
  components: false, // Disable auto-registration
}
```

### css
- **Type:** `boolean`
- **Default:** `true`
- **Description:** Include design system CSS

```typescript
designSystem: {
  css: false, // Disable CSS inclusion
}
```

### composables
- **Type:** `boolean`
- **Default:** `true`
- **Description:** Auto-register composables

```typescript
designSystem: {
  composables: false, // Disable composable auto-registration
}
```

## TailwindCSS Configuration

### Basic TailwindCSS Setup

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      // Your custom extensions
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      // Design system themes are automatically added
    ],
  },
};
```

### Advanced TailwindCSS Configuration

```javascript
// tailwind.config.js
import daisyui from 'daisyui';

export default {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
    './test/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
        128: '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      'boilerplate-light',
      'boilerplate-dark',
      // Add your custom themes here
    ],
  },
};
```

## PostCSS Configuration

### TailwindCSS 4 Compatible Setup

```javascript
// postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
```

### Advanced PostCSS Configuration

```javascript
// postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    daisyui: {},
    // Add other PostCSS plugins as needed
  },
};
```

## TypeScript Configuration

### Basic TypeScript Setup

```json
// tsconfig.json
{
  "extends": "./.nuxt/tsconfig.json",
  "compilerOptions": {
    "strict": true,
    "skipLibCheck": true,
    "types": ["@nuxt/types", "@types/node"]
  }
}
```

### Advanced TypeScript Configuration

```json
// tsconfig.json
{
  "extends": "./.nuxt/tsconfig.json",
  "compilerOptions": {
    "strict": true,
    "skipLibCheck": true,
    "types": ["@nuxt/types", "@types/node"],
    "baseUrl": ".",
    "paths": {
      "~/*": ["./src/*"],
      "@/*": ["./src/*"]
    },
    "allowJs": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve"
  },
  "include": [
    "src/**/*",
    "test/**/*",
    "types/**/*"
  ],
  "exclude": [
    "node_modules",
    "dist",
    ".nuxt"
  ]
}
```

## Environment Configuration

### GitHub Packages Authentication

```bash
# .npmrc
@boilerplatepowa:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${PACKAGE_TOKEN}
```

### Environment Variables

```bash
# .env
PACKAGE_TOKEN=your_github_token_here
NODE_ENV=development
```

## Performance Optimization

### Vite Configuration

```typescript
// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          ui: ['@boilerplatepowa/nuxt-design-system'],
        },
      },
    },
  },
});
```

### Nuxt Performance Settings

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  // Performance optimizations
  optimization: {
    keyedComposables: [
      {
        name: 'useState',
        argumentLength: 2,
      },
    ],
  },

  // Build optimizations
  nitro: {
    experimental: {
      wasm: true,
    },
  },

  // Experimental features for performance
  experimental: {
    typedPages: true,
    viewTransition: true,
    sharedPrerenderData: true,
  },
});
```

## Troubleshooting Configuration

### Common Configuration Issues

1. **Component Not Found**
   ```typescript
   // Ensure components are properly registered
   designSystem: {
     components: true,
     prefix: 'Bp',
   }
   ```

2. **Styling Not Applied**
   ```javascript
   // Verify PostCSS configuration
   postcss: {
     plugins: {
       '@tailwindcss/postcss': {},
       autoprefixer: {},
     },
   }
   ```

3. **TypeScript Errors**
   ```json
   // Check TypeScript configuration
   {
     "compilerOptions": {
       "strict": true,
       "skipLibCheck": true
     }
   }
   ```

## Next Steps

- [Usage Guide](usage.md) - How to use components
- [Themes Guide](themes.md) - Customizing themes
- [Component Documentation](../components/) - Detailed component guides
