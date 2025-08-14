# @boilerplatepowa/nuxt-design-system

A complete Design System for Nuxt 4 with TailwindCSS 4, DaisyUI and Storybook - fully compatible with Node.js 22.

## 🚀 Features

- **Vue 3 Components** with TypeScript
- **TailwindCSS 4 + DaisyUI** configured
- **Storybook 9.1+** for documentation with **automated GitHub Pages publishing**
- **Unit Testing** with Vitest
- **E2E Testing** with Cypress
- **Automatic Linting & Formatting** (ESLint 9, Prettier, Stylelint)
- **Custom Themes** (Light/Dark)
- **Nuxt 4 Plugin** ready to use
- **GitHub Actions CI/CD** with automated testing and publishing

## 📦 Installation

### Prerequisites

- **Node.js 22.12.0+** (required)
- **npm 10+**

### Package Installation

```bash
npm install @boilerplatepowa/nuxt-design-system
```

### GitHub Packages Authentication

This package is published on GitHub Packages. You need to authenticate:

1. **Create a GitHub token**:
   - Go to GitHub → Settings → Developer settings → Personal access tokens
   - Create a token with `read:packages` permissions

2. **Configure npm**:

   ```bash
   npm login --registry=https://npm.pkg.github.com
   # Use your GitHub username and token as password
   ```

3. **Or create a .npmrc**:
   ```
   @boilerplatepowa:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${PACKAGE_TOKEN}
   ```

## 🔧 Configuration

### In your `nuxt.config.ts`

```typescript
export default defineNuxtConfig({
  modules: ['@boilerplatepowa/nuxt-design-system'],
  designSystem: {
    prefix: 'Bp', // Component prefix (optional)
    components: true, // Auto-register components
    css: true, // Include global CSS
  },
  // Compatible with Nuxt 4
  compatibilityDate: '2024-11-01',
});
```

### TailwindCSS 4 Configuration

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

### PostCSS Configuration

For TailwindCSS 4 compatibility, ensure your `postcss.config.cjs` uses:

```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
```

## 🎨 Usage

### Available Components

#### BpButton

```vue
<template>
  <BpButton variant="primary" size="md" @click="handleClick"> Click me </BpButton>
</template>
```

**Props:**

- `variant`: `'primary' | 'secondary' | 'accent' | 'ghost' | 'outline' | 'link'`
- `size`: `'xs' | 'sm' | 'md' | 'lg'`
- `disabled`: `boolean`
- `loading`: `boolean`
- `fullWidth`: `boolean`
- `type`: `'button' | 'submit' | 'reset'`

#### BpCard

```vue
<template>
  <BpCard title="My Title" variant="bordered">
    <p>Card content</p>

    <template #footer>
      <BpButton variant="primary">Action</BpButton>
    </template>
  </BpCard>
</template>
```

**Props:**

- `title`: `string`
- `variant`: `'default' | 'bordered' | 'glass'`
- `padding`: `'none' | 'sm' | 'md' | 'lg'`
- `shadow`: `'none' | 'sm' | 'md' | 'lg' | 'xl'`

**Slots:**

- `default`: Main content
- `header`: Custom header
- `footer`: Footer with actions

### Themes

The design system includes two themes:

- **boilerplate-light** : Default light theme
- **boilerplate-dark** : Dark theme

To change theme:

```html
<html data-theme="boilerplate-dark">
  <!-- Your content -->
</html>
```

### Design Tokens

You can import design tokens:

```typescript
import { tailwindTokens, daisyuiThemes } from '@boilerplatepowa/nuxt-design-system';

// Use colors
const primaryColor = tailwindTokens.colors.primary[500];

// Use themes
const lightTheme = daisyuiThemes['boilerplate-light'];
```

## 📚 Storybook

### View Live Documentation

🌐 **Live Storybook:** [https://boilerplatepowa.github.io/Nuxt-CSS-Library-Boilerplate/](https://boilerplatepowa.github.io/Nuxt-CSS-Library-Boilerplate/)

*Automatically updated on every push to main branch*

### Local Development

```bash
npm run storybook
```

Storybook will be available at `http://localhost:6006`

### Build Storybook

```bash
npm run build-storybook
```

### Automated Publishing

Storybook is automatically built and deployed to GitHub Pages on every push to the `main` branch via GitHub Actions.

## 🧪 Testing

### Unit Tests (Vitest)

```bash
# Run unit tests
npm test

# Tests with UI
npm run test:ui

# Tests with coverage
npm run test:coverage
```

### E2E Tests (Cypress)

```bash
# Run E2E tests headlessly
npm run test:e2e

# Open Cypress UI
npm run cypress:open

# Run component tests
npm run test:component
```

### All Tests

```bash
# Run all tests (unit + E2E)
npm run test:all
```

## 🛠️ Development

### Install Dependencies

```bash
npm install
```

### Available Scripts

```bash
# Nuxt development
npm run dev

# Storybook
npm run storybook
npm run build-storybook

# Testing
npm test                 # Unit tests
npm run test:e2e        # E2E tests
npm run test:all        # All tests
npm run cypress:open    # Cypress UI

# Code Quality
npm run lint            # ESLint 9
npm run lint:fix        # Auto-fix ESLint issues
npm run format          # Prettier formatting
npm run type-check      # TypeScript checking

# Building
npm run build           # Build library
npm run build:types     # Generate TypeScript declarations
```

### Automatic Configuration

The package uses `@boilerplatepowa/configuration-starter-boilerplate` to automatically configure:

- **ESLint 9** with flat config
- **Prettier** formatting rules
- **Stylelint** for CSS linting
- **Husky** Git hooks
- **Commitizen** for conventional commits

Configuration is automatically installed via the `postinstall` script.

### CI/CD Pipeline

The project includes GitHub Actions workflows for:

- **Automated Testing:** Runs on every push and PR
- **Package Publishing:** Publishes to GitHub Packages on version tags
- **Storybook Deployment:** Auto-deploys to GitHub Pages on main branch

## 📦 Publishing

### Prepare for Publishing

1. **Update version**:

   ```bash
   npm version patch|minor|major
   ```

2. **Build package**:

   ```bash
   npm run build
   ```

3. **Publish to GitHub Packages**:
   ```bash
   npm publish
   ```

### Publishing Configuration

The `package.json` is configured to:

- Publish to GitHub Packages
- Include only necessary files (`dist`, configs)
- Support ESM and CJS

## 🏗️ Project Structure

```
.
├── src/
│   ├── components/          # Vue components
│   │   ├── Button.vue
│   │   ├── Button.stories.ts
│   │   ├── Card.vue
│   │   ├── Card.stories.ts
│   │   ├── Input.vue
│   │   ├── Modal.vue
│   │   └── Toast.vue
│   ├── plugin/              # Nuxt plugin
│   │   └── index.ts
│   ├── assets/              # CSS/SCSS assets
│   │   ├── css/
│   │   └── scss/
│   └── index.ts             # Main export
├── test/                    # Unit tests (Vitest)
│   ├── setup.ts
│   └── components/
├── cypress/                 # E2E tests
│   ├── e2e/
│   ├── support/
│   └── fixtures/
├── .storybook/              # Storybook configuration
├── .github/workflows/       # GitHub Actions CI/CD
│   ├── test.yml
│   ├── publish.yml
│   └── deploy-storybook.yml
├── eslint.config.mjs        # ESLint 9 flat config
├── tailwind.config.cjs      # TailwindCSS 4 configuration
├── postcss.config.cjs       # PostCSS configuration
├── vitest.config.ts         # Vitest configuration
├── cypress.config.ts        # Cypress configuration
└── package.json
```

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Standards

- **Strict TypeScript** with latest standards
- **Vue 3 Composition API** with `<script setup>`
- **Unit tests** for all components (Vitest)
- **E2E tests** for critical user flows (Cypress)
- **Storybook stories** for documentation
- **ESLint 9** with flat config
- **Conventional Commits** with Commitizen
- **Automated formatting** with Prettier

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For any questions or issues:

- **Open an issue** on GitHub
- **Check the live Storybook** documentation: [https://boilerplatepowa.github.io/Nuxt-CSS-Library-Boilerplate/](https://boilerplatepowa.github.io/Nuxt-CSS-Library-Boilerplate/)
- **Review examples** in the source code
- **Check GitHub Actions** for CI/CD status

## 🎯 Compatibility

- ✅ **Node.js 22.12.0+**
- ✅ **Nuxt 4**
- ✅ **Vue 3**
- ✅ **TailwindCSS 4**
- ✅ **TypeScript 5+**
- ✅ **ESLint 9**
- ✅ **Storybook 9.1+**

---

Developed with ❤️ by BoilerplatePowa
