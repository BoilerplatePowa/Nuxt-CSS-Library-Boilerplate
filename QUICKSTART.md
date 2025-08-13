# 🚀 Quick Start

## Installation and Launch

### 1. Clone the repository

```bash
git clone https://github.com/boilerplatepowa/nuxt-design-system.git
cd nuxt-design-system
```

### 2. Automatic startup

```bash
npm start
```

This command will:

- ✅ Automatically install dependencies
- ✅ Launch Storybook on http://localhost:6006
- ✅ Open your browser

### 3. Or manual startup

```bash
# Installation
npm install

# Launch Storybook
npm run storybook
```

## 🎯 Quick Usage

### In your Nuxt 3 project

```bash
# Installation
npm install @boilerplatepowa/nuxt-design-system
```

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@boilerplatepowa/nuxt-design-system'],
});
```

```vue
<!-- Using components -->
<template>
  <BpButton variant="primary">My Button</BpButton>
  <BpCard title="My Card">Content</BpCard>
</template>
```

## 📚 Documentation

- **Storybook** : http://localhost:6006 (after launch)
- **Complete guide** : [README.md](README.md)
- **Development guide** : [DEVELOPMENT.md](DEVELOPMENT.md)

## 🛠️ Useful Commands

```bash
# Development
npm start              # Automatic startup
npm run storybook      # Storybook
npm run dev            # Nuxt dev

# Testing
npm test               # Unit tests
npm run test:ui        # Test interface

# Build
npm run build          # Build package
npm run build-storybook # Build Storybook

# Quality
npm run lint           # Linting
npm run format         # Formatting
```

## 🎨 Available Themes

- **boilerplate-light** : Light theme (default)
- **boilerplate-dark** : Dark theme

Theme switching:

```html
<html data-theme="boilerplate-dark">
  <!-- Your content -->
</html>
```

## 🆘 Support

- 📖 [Storybook Documentation](http://localhost:6006)
- 🐛 [GitHub Issues](https://github.com/boilerplatepowa/nuxt-design-system/issues)
- 💬 [Discussions](https://github.com/boilerplatepowa/nuxt-design-system/discussions)

---

**Ready to start?** Run `npm start`! 🎉
