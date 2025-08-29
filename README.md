# @boilerplatepowa/nuxt-design-system

A comprehensive Vue 3 component library built with DaisyUI, TypeScript, and Storybook. Features **60 professionally crafted components** with **100% DaisyUI coverage** organized according to DaisyUI's official categorization, fully compatible with Nuxt 4 and Node.js 22.

## 🚀 Quick Start

```bash
# Install the package
npm install @boilerplatepowa/nuxt-design-system

# Add to your nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@boilerplatepowa/nuxt-design-system'],
  designSystem: {
    prefix: 'Bp',
    components: true,
    css: true,
  },
});

# Use components
<template>
  <BpButton variant="primary">Hello Design System!</BpButton>
  <BpCard title="Welcome">Your components are ready!</BpCard>
</template>
```

## 📚 Documentation

📖 **[Complete Documentation](docs/README.md)** - Comprehensive guides and examples

### Quick Links
- [Installation Guide](docs/getting-started/installation.md) - Get started in minutes
- [Configuration](docs/getting-started/configuration.md) - Setup and configuration options
- [Usage Guide](docs/getting-started/usage.md) - How to use components
- [Themes Guide](docs/getting-started/themes.md) - Theme system and customization

### Component Categories
- [Actions](docs/components/actions.md) - Interactive components (Button, Dropdown, Modal, etc.)
- [Data Display](docs/components/data-display.md) - Information presentation components
- [Data Input](docs/components/data-input.md) - Form and input components
- [Feedback](docs/components/feedback.md) - User feedback components
- [Layout](docs/components/layout.md) - Structural and layout components
- [Navigation](docs/components/navigation.md) - Navigation components
- [Mockup](docs/components/mockup.md) - Device and interface mockups

## 🎯 Features

- 🎯 **60 DaisyUI Components** with **100% COMPLETE COVERAGE** and TypeScript support
- 🏆 **ALL 7 CATEGORIES 100% COMPLETE** (Actions, Data Display, Data Input, Feedback, Layout, Navigation, Mockup)
- ⚡ **Vue 3 Composition API** with `<script setup>` style
- 🎨 **TailwindCSS 4 + DaisyUI** fully configured
- 📚 **Storybook 9.1+** for documentation with **automated GitHub Pages publishing**
- 🧪 **Unit Testing** with Vitest (**284 tests, 100% passing**)
- 🔧 **E2E Testing** with Cypress
- ✨ **Automatic Linting & Formatting** (ESLint 9, Prettier, Stylelint)
- 🌙 **Custom Themes** (Light/Dark modes)
- 🔌 **Nuxt 4 Plugin** ready to use

## 📊 Component Coverage Status

### 🏆 **100% COMPLETE COVERAGE ACHIEVED!**

**ALL 7 CATEGORIES NOW 100% COMPLETE:**

✅ **Actions: 100%** (5/5 components) - Button, Dropdown, Modal, Swap, ThemeController
✅ **Data Display: 100%** (15/15 components) - Avatar, Card, Table, Diff, List, Status, Timeline, etc.
✅ **Data Input: 100%** (14/14 components) - Input, Select, Calendar, Fieldset, Filter, Label, Validator, etc.
✅ **Feedback: 100%** (7/7 components) - Alert, Progress, Toast, Loading, Skeleton, etc.
✅ **Layout: 100%** (8/8 components) - Hero, Drawer, Stack, Join, etc.
✅ **Navigation: 100%** (7/7 components) - Navbar, Menu, Breadcrumbs, Dock, etc.
✅ **Mockup: 100%** (4/4 components) - Browser, Phone, Window, Code mockups

## 🎉 Live Documentation

🌐 **Live Storybook:** [https://boilerplatepowa.github.io/Nuxt-CSS-Library-Boilerplate/](https://boilerplatepowa.github.io/Nuxt-CSS-Library-Boilerplate/)

_Automatically updated on every push to main branch_

## 🛠️ Development

```bash
# Clone and setup
git clone https://github.com/boilerplatepowa/nuxt-design-system.git
cd nuxt-design-system
npm install

# Start development
npm start                    # Automatic startup with Storybook
npm run storybook           # Storybook development
npm run dev                 # Nuxt development

# Testing
npm test                    # Unit tests
npm run test:e2e           # E2E tests
npm run test:coverage      # Coverage report

# Building
npm run build              # Build library
npm run build-storybook    # Build Storybook
```

## 📦 Import Patterns

### Auto-Imported (Recommended)
```vue
<template>
  <BpButton variant="primary">Click me</BpButton>
  <BpCard title="Welcome">Content</BpCard>
</template>
```

### Category-based Imports
```typescript
import { Button, Modal, Dropdown } from '@boilerplatepowa/nuxt-design-system/components/Actions';
import { Alert, Progress, Toast } from '@boilerplatepowa/nuxt-design-system/components/Feedback';
import { Input, Select, Checkbox } from '@boilerplatepowa/nuxt-design-system/components/DataInput';
```

### Global Imports
```typescript
import { Button, Alert, Input, Avatar } from '@boilerplatepowa/nuxt-design-system';
```

## 🎨 Themes

The design system includes two themes:

- **boilerplate-light** : Default light theme
- **boilerplate-dark** : Dark theme

```html
<html data-theme="boilerplate-dark">
  <!-- Your content -->
</html>
```

## 🆘 Support

- 📖 [Live Storybook Documentation](https://boilerplatepowa.github.io/Nuxt-CSS-Library-Boilerplate/)
- 📚 [Complete Documentation](docs/README.md)
- 🐛 [GitHub Issues](https://github.com/boilerplatepowa/nuxt-design-system/issues)
- 💬 [Discussions](https://github.com/boilerplatepowa/nuxt-design-system/discussions)

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

---

Developed with ❤️ by BoilerplatePowa
