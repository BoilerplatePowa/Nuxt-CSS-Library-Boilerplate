# Installation Guide

This guide will help you install and set up the **@boilerplatepowa/nuxt-design-system** in your Nuxt 4 project.

## Prerequisites

Before installing the design system, ensure you have:

- **Node.js 22.12.0+** (required)
- **npm 10+**
- **Nuxt 4** project

## Package Installation

### 1. Install the Package

```bash
npm install @boilerplatepowa/nuxt-design-system
```

### 2. GitHub Packages Authentication

This package is published on GitHub Packages. You need to authenticate:

#### Option A: Create a GitHub Token

1. **Create a GitHub token**:
   - Go to GitHub → Settings → Developer settings → Personal access tokens
   - Create a token with `read:packages` permissions

2. **Configure npm**:

   ```bash
   npm login --registry=https://npm.pkg.github.com
   # Use your GitHub username and token as password
   ```

#### Option B: Create a .npmrc File

Create a `.npmrc` file in your project root:

```bash
@boilerplatepowa:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${PACKAGE_TOKEN}
```

Then set your token as an environment variable:

```bash
export PACKAGE_TOKEN=your_github_token_here
```

## Nuxt Configuration

### 1. Add the Module

In your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: ['@boilerplatepowa/nuxt-design-system'],
  
  // Design System configuration
  designSystem: {
    prefix: 'Bp', // Component prefix (optional)
    components: true, // Auto-register components
    css: true, // Include global CSS
  },
  
  // Compatible with Nuxt 4
  compatibilityDate: '2024-11-01',
});
```

### 2. Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `prefix` | `string` | `'Bp'` | Component prefix for global registration |
| `components` | `boolean` | `true` | Auto-register all components globally |
| `css` | `boolean` | `true` | Include design system CSS |

## TailwindCSS Configuration

The design system automatically configures TailwindCSS 4 with DaisyUI. You can extend the configuration:

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

## PostCSS Configuration

For TailwindCSS 4 compatibility, ensure your `postcss.config.cjs` uses:

```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
```

## Verification

### 1. Check Installation

After installation, you should be able to use components:

```vue
<template>
  <div>
    <BpButton variant="primary">Hello Design System!</BpButton>
    <BpCard title="Welcome">Your components are ready!</BpCard>
  </div>
</template>
```

### 2. Verify Auto-Imports

Components should be automatically available without manual imports:

```vue
<template>
  <!-- These should work without imports -->
  <BpButton>Button</BpButton>
  <BpInput v-model="value" label="Input" />
  <BpAlert variant="success">Success!</BpAlert>
</template>
```

## Troubleshooting

### Common Issues

1. **Authentication Error**
   ```
   npm ERR! 401 Unauthorized
   ```
   - Ensure your GitHub token has `read:packages` permission
   - Verify your `.npmrc` configuration

2. **Component Not Found**
   ```
   [Vue warn]: Unknown custom element: <BpButton>
   ```
   - Check that the module is properly added to `nuxt.config.ts`
   - Verify the component prefix matches your configuration

3. **Styling Issues**
   - Ensure TailwindCSS and DaisyUI are properly configured
   - Check that PostCSS configuration is correct

### Getting Help

- 📖 [Live Storybook Documentation](https://boilerplatepowa.github.io/Nuxt-CSS-Library-Boilerplate/)
- 🐛 [GitHub Issues](https://github.com/boilerplatepowa/nuxt-design-system/issues)
- 💬 [Discussions](https://github.com/boilerplatepowa/nuxt-design-system/discussions)

## Next Steps

- [Configuration Guide](configuration.md) - Advanced configuration options
- [Usage Guide](usage.md) - How to use components
- [Themes Guide](themes.md) - Customizing themes
