# Development Guide

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
# Launch Storybook (recommended for development)
npm run dev:storybook

# Or launch Nuxt in development mode
npm run dev
```

### Testing

```bash
# Unit tests
npm test

# Tests with UI
npm run test:ui

# Tests with coverage
npm run test:coverage
```

### Linting & Formatting

```bash
# Linting
npm run lint
npm run lint:fix

# Formatting
npm run format
```

## 📁 Project Structure

```
src/
├── components/          # Vue components
│   ├── Button.vue      # Button component
│   ├── Button.stories.ts
│   ├── Card.vue        # Card component
│   └── Card.stories.ts
├── plugin/             # Nuxt plugin
│   └── index.ts
├── assets/             # CSS/SCSS assets
│   ├── css/
│   └── scss/
├── tailwind.ts         # Tailwind configuration
└── index.ts            # Main export
```

## 🧪 Adding a New Component

1. **Create the component** in `src/components/`
2. **Add stories** in `src/components/[Component].stories.ts`
3. **Add tests** in `test/components/[Component].test.ts`
4. **Register the component** in `src/plugin/index.ts`
5. **Export the component** in `src/index.ts`

### Component Example

```vue
<template>
  <div :class="componentClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'default' | 'primary';
  size?: 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
});

const componentClasses = computed(() => {
  return ['component-base', `component-${props.variant}`, `component-${props.size}`].join(' ');
});
</script>
```

## 🎨 Adding a New Theme

1. **Modify** `tailwind.config.cjs`
2. **Add colors** in `src/tailwind.ts`
3. **Update** `.storybook/preview.ts`
4. **Test** in Storybook

## 📦 Publishing

### Prepare a new version

```bash
# Increment version
npm version patch|minor|major

# Build package
npm run build

# Publish (automatic via GitHub Actions)
git push --tags
```

### Manual publishing

```bash
npm publish
```

## 🔧 Configuration

### Environment variables

```bash
# .env.local
PACKAGE_TOKEN=your_github_token
```

### Local configuration

```bash
# .npmrc
@boilerplatepowa:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${PACKAGE_TOKEN}
```

## 🐛 Debugging

### Common issues

1. **TypeScript errors** : Check `tsconfig.json`
2. **Build errors** : Clean `dist/` and restart
3. **Storybook issues** : Check `.storybook/main.ts`
4. **Test errors** : Check `vitest.config.ts`

### Useful commands

```bash
# Clean caches
rm -rf node_modules/.cache
rm -rf .nuxt
rm -rf dist

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check configuration
npm run type-check
npm run lint
```

## 📚 Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Nuxt 3 Documentation](https://nuxt.com/)
- [Storybook Documentation](https://storybook.js.org/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [DaisyUI Documentation](https://daisyui.com/)
