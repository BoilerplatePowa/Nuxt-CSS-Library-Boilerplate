# @boilerplatepowa/nuxt-design-system

A complete Design System for Nuxt 3 with TailwindCSS, DaisyUI and Storybook.

## 🚀 Features

- **Vue 3 Components** with TypeScript
- **TailwindCSS + DaisyUI** configured
- **Storybook 8+** for documentation
- **Unit Testing** with Vitest
- **Automatic Linting & Formatting**
- **Custom Themes** (Light/Dark)
- **Nuxt 3 Plugin** ready to use

## 📦 Installation

### Prerequisites

- Node.js 22+ 
- npm 10+

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
   //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
   ```

## 🔧 Configuration

### In your `nuxt.config.ts`

```typescript
export default defineNuxtConfig({
  modules: [
    '@boilerplatepowa/nuxt-design-system'
  ],
  designSystem: {
    prefix: 'Bp', // Component prefix (optional)
    components: true, // Auto-register components
    css: true // Include global CSS
  }
})
```

### TailwindCSS Configuration

The design system automatically configures TailwindCSS with DaisyUI. You can extend the configuration:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      // Your custom extensions
    }
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      // Design system themes are automatically added
    ]
  }
}
```

## 🎨 Usage

### Available Components

#### BpButton

```vue
<template>
  <BpButton variant="primary" size="md" @click="handleClick">
    Click me
  </BpButton>
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
import { tailwindTokens, daisyuiThemes } from '@boilerplatepowa/nuxt-design-system'

// Use colors
const primaryColor = tailwindTokens.colors.primary[500]

// Use themes
const lightTheme = daisyuiThemes['boilerplate-light']
```

## 📚 Storybook

### Launch Storybook

```bash
npm run storybook
```

Storybook will be available at `http://localhost:6006`

### Build Storybook

```bash
npm run build-storybook
```

## 🧪 Testing

### Run Tests

```bash
# Unit tests
npm test

# Tests with UI
npm run test:ui

# Tests with coverage
npm run test:coverage
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

# Tests
npm test

# Linting
npm run lint
npm run lint:fix

# Formatting
npm run format

# TypeScript checking
npm run type-check
```

### Automatic Configuration

The package uses `@boilerplatepowa/configuration-starter-boilerplate` to automatically configure:

- ESLint
- Prettier
- Stylelint
- Husky (Git hooks)
- Commitizen

Configuration is automatically installed via the `postinstall` script.

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
│   │   └── Card.stories.ts
│   ├── plugin/              # Nuxt plugin
│   │   └── index.ts
│   ├── assets/              # CSS/SCSS assets
│   │   ├── css/
│   │   └── scss/
│   └── index.ts             # Main export
├── test/                    # Unit tests
│   ├── setup.ts
│   └── components/
├── .storybook/              # Storybook configuration
├── tailwind.config.cjs      # TailwindCSS configuration
├── postcss.config.cjs       # PostCSS configuration
├── vitest.config.ts         # Vitest configuration
└── package.json
```

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Standards

- Strict TypeScript
- Vue 3 Composition API
- Unit tests for all components
- Storybook stories for documentation
- Conventional Commits

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For any questions or issues:

- Open an issue on GitHub
- Check Storybook documentation
- Review examples in the source code

---

Developed with ❤️ by BoilerplatePowa 