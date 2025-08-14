# @boilerplatepowa/nuxt-design-system

A comprehensive Vue 3 component library built with DaisyUI, TypeScript, and Storybook. Features 47 professionally crafted components organized according to DaisyUI's official categorization, fully compatible with Nuxt 4 and Node.js 22.

## 🚀 Features

- **47 DaisyUI Components** with complete TypeScript support
- **Official DaisyUI Categorization** (Actions, Data Display, Data Input, Feedback, Layout, Navigation, Mockup)
- **Vue 3 Composition API** with `<script setup>` style
- **TailwindCSS 4 + DaisyUI** fully configured
- **Storybook 9.1+** for documentation with **automated GitHub Pages publishing**
- **Unit Testing** with Vitest (100% component coverage)
- **E2E Testing** with Cypress
- **Automatic Linting & Formatting** (ESLint 9, Prettier, Stylelint)
- **Custom Themes** (Light/Dark modes)
- **Nuxt 4 Plugin** ready to use
- **Professional Architecture** with clean imports and exports
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

## 🎨 Available Components

Our component library follows **DaisyUI's official categorization** with 47 components across 7 categories:

### 📂 Actions (4/5 components) - 80% complete
Interactive components that trigger behavior:

✅ **Available:**
- **Button** - Primary action triggers with variants, sizes, and states
- **Dropdown** - Interactive dropdown menus
- **Modal** - Dialog overlays and modals
- **Swap** - Toggle animations and state swaps

❌ **Missing:**
- Theme Controller

```vue
<template>
  <!-- Button Usage -->
  <Button variant="primary" size="md" @click="handleClick">
    Click me
  </Button>
  
  <!-- Modal Usage -->
  <Modal v-model="showModal" title="Confirm Action">
    <p>Are you sure you want to proceed?</p>
    <template #actions>
      <Button variant="primary" @click="confirm">Confirm</Button>
      <Button variant="ghost" @click="cancel">Cancel</Button>
    </template>
  </Modal>
</template>
```

### 📊 Data Display (12/15 components) - 80% complete
Components for presenting information:

✅ **Available:**
- **Accordion** - Collapsible content sections
- **Avatar** - User profile images with indicators
- **Badge** - Status and notification badges
- **Card** - Content containers with headers/footers
- **Carousel** - Image and content sliders
- **ChatBubble** - Chat message bubbles
- **Collapse** - Expandable content areas
- **Countdown** - Timer displays
- **Kbd** - Keyboard key representations
- **Stat** - Statistical data displays
- **Table** - Data tables with sorting
- **Tabs** - Tabbed navigation interfaces

❌ **Missing:**
- Diff, List, Status, Timeline

```vue
<template>
  <!-- Card with Avatar -->
  <Card title="User Profile" variant="bordered">
    <div class="flex items-center gap-4">
      <Avatar 
        src="/user.jpg" 
        alt="User" 
        size="lg" 
        :online="true"
      />
      <div>
        <h3>John Doe</h3>
        <Badge variant="success">Active</Badge>
      </div>
    </div>
  </Card>
</template>
```

### 📝 Data Input (9/14 components) - 64% complete
Form components for user input:

✅ **Available:**
- **Checkbox** - Checkbox inputs with variants
- **FileInput** - File upload components
- **Input** - Text inputs with validation states
- **Radio** - Radio button groups
- **Range** - Slider range inputs
- **Rating** - Star rating components
- **Select** - Dropdown select menus
- **Textarea** - Multi-line text inputs
- **Toggle** - Switch toggle inputs

❌ **Missing:**
- Calendar, Fieldset, Filter, Label, Validator

```vue
<template>
  <form class="space-y-4">
    <Input 
      v-model="email"
      type="email"
      label="Email"
      placeholder="Enter your email"
      :error="emailError"
    />
    
    <Select 
      v-model="country"
      label="Country"
      :options="countryOptions"
      placeholder="Select country"
    />
    
    <Toggle 
      v-model="notifications"
      label="Enable notifications"
    />
    
    <Rating 
      v-model="satisfaction"
      label="Rate your experience"
      :max="5"
    />
  </form>
</template>
```

### 💬 Feedback (5/7 components) - 71% complete
Components for user feedback and status:

✅ **Available:**
- **Alert** - Information and warning messages
- **Progress** - Linear progress indicators
- **RadialProgress** - Circular progress indicators
- **Toast** - Notification toasts
- **Tooltip** - Hover information tooltips

❌ **Missing:**
- Loading, Skeleton

```vue
<template>
  <div>
    <!-- Alert Messages -->
    <Alert variant="success" :dismissible="true">
      Profile updated successfully!
    </Alert>
    
    <!-- Progress Indicators -->
    <Progress :value="uploadProgress" :max="100" />
    <RadialProgress :value="75" size="lg" />
    
    <!-- Tooltip -->
    <Tooltip text="Click to edit profile">
      <Button variant="ghost">Edit</Button>
    </Tooltip>
  </div>
</template>
```

### 🏗️ Layout (7/8 components) - 87% complete
Structural and layout components:

✅ **Available:**
- **Divider** - Content section dividers
- **Drawer** - Slide-out navigation panels
- **Footer** - Page footer layouts
- **Hero** - Hero section layouts
- **Indicator** - Notification indicators
- **Mask** - Image masking shapes
- **Stack** - Stacked layout utilities

❌ **Missing:**
- Join (group items)

```vue
<template>
  <div>
    <!-- Hero Section -->
    <Hero 
      title="Welcome to Our Platform"
      subtitle="Build amazing things with our component library"
      :overlay="true"
    >
      <template #actions>
        <Button variant="primary" size="lg">Get Started</Button>
      </template>
    </Hero>
    
    <!-- Drawer Navigation -->
    <Drawer v-model="drawerOpen" side="left">
      <template #content>
        <Menu :items="navigationItems" />
      </template>
    </Drawer>
  </div>
</template>
```

### 🧭 Navigation (6/7 components) - 86% complete
Navigation and wayfinding components:

✅ **Available:**
- **Breadcrumbs** - Navigation breadcrumb trails
- **Link** - Styled navigation links
- **Menu** - Navigation menu lists
- **Navbar** - Top navigation bars
- **Pagination** - Page navigation controls
- **Steps** - Step-by-step progress indicators

❌ **Missing:**
- Dock

```vue
<template>
  <div>
    <!-- Navigation Bar -->
    <Navbar brand="Your Brand">
      <template #menu>
        <Menu :items="navItems" orientation="horizontal" />
      </template>
      <template #actions>
        <Button variant="outline">Login</Button>
      </template>
    </Navbar>
    
    <!-- Breadcrumbs -->
    <Breadcrumbs :items="breadcrumbItems" />
    
    <!-- Pagination -->
    <Pagination 
      v-model="currentPage"
      :total="totalPages"
      :show-edges="true"
    />
  </div>
</template>
```

### 📱 Mockup (4/4 components) - 100% complete
Device and interface mockups:

✅ **Available:**
- **BrowserMockup** - Browser window mockups
- **CodeMockup** - Code editor mockups
- **PhoneMockup** - Mobile device mockups
- **WindowMockup** - Desktop window mockups

```vue
<template>
  <div class="grid grid-cols-2 gap-4">
    <PhoneMockup>
      <img src="/app-screenshot.png" alt="Mobile App" />
    </PhoneMockup>
    
    <BrowserMockup url="https://example.com">
      <img src="/website-screenshot.png" alt="Website" />
    </BrowserMockup>
  </div>
</template>
```

## 📦 Import System

Our organized structure supports multiple import patterns:

### Category-based Imports (Recommended)
```typescript
// Import by category for better organization
import { Button, Modal, Dropdown } from '~/components/Actions'
import { Alert, Progress, Toast } from '~/components/Feedback'  
import { Input, Select, Checkbox } from '~/components/DataInput'
import { Avatar, Card, Table } from '~/components/DataDisplay'
import { Hero, Drawer, Stack } from '~/components/Layout'
import { Navbar, Menu, Steps } from '~/components/Navigation'
import { BrowserMockup, PhoneMockup } from '~/components/Mockup'
```

### Global Imports
```typescript
// Import everything globally
import { Button, Alert, Input, Avatar } from '~/components'
```

### Direct Imports
```typescript
// Import individual components
import Button from '~/components/Actions/Button.vue'
import Alert from '~/components/Feedback/Alert.vue'
```

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
│   ├── components/                    # 47 Vue components organized by DaisyUI categories
│   │   ├── Actions/                   # 4 components (Button, Dropdown, Modal, Swap)
│   │   │   ├── Button.vue
│   │   │   ├── Button.stories.ts
│   │   │   ├── Modal.vue
│   │   │   ├── Modal.stories.ts
│   │   │   └── index.ts
│   │   ├── DataDisplay/               # 12 components (Avatar, Card, Table, etc.)
│   │   │   ├── Avatar.vue
│   │   │   ├── Avatar.stories.ts
│   │   │   ├── Card.vue
│   │   │   ├── Card.stories.ts
│   │   │   └── index.ts
│   │   ├── DataInput/                 # 9 components (Input, Select, Checkbox, etc.)
│   │   │   ├── Input.vue
│   │   │   ├── Input.stories.ts
│   │   │   ├── Select.vue
│   │   │   ├── Select.stories.ts
│   │   │   └── index.ts
│   │   ├── Feedback/                  # 5 components (Alert, Progress, Toast, etc.)
│   │   │   ├── Alert.vue
│   │   │   ├── Alert.stories.ts
│   │   │   ├── Progress.vue
│   │   │   ├── Progress.stories.ts
│   │   │   └── index.ts
│   │   ├── Layout/                    # 7 components (Hero, Drawer, Stack, etc.)
│   │   │   ├── Hero.vue
│   │   │   ├── Drawer.vue
│   │   │   └── index.ts
│   │   ├── Navigation/                # 6 components (Navbar, Menu, Breadcrumbs, etc.)
│   │   │   ├── Navbar.vue
│   │   │   ├── Menu.vue
│   │   │   └── index.ts
│   │   ├── Mockup/                    # 4 components (Browser, Phone, Window, Code)
│   │   │   ├── BrowserMockup.vue
│   │   │   ├── PhoneMockup.vue
│   │   │   └── index.ts
│   │   └── index.ts                   # Main component export
│   ├── plugin/                        # Nuxt plugin
│   │   └── index.ts
│   ├── assets/                        # CSS/SCSS assets
│   │   ├── css/
│   │   └── scss/
│   └── index.ts                       # Main library export
├── test/                              # Unit tests (Vitest)
│   ├── setup.ts
│   └── components/
├── cypress/                           # E2E tests
│   ├── e2e/
│   ├── support/
│   └── fixtures/
├── .storybook/                        # Storybook configuration
├── .github/workflows/                 # GitHub Actions CI/CD
│   ├── test.yml
│   ├── publish.yml
│   └── deploy-storybook.yml
├── eslint.config.mjs                  # ESLint 9 flat config
├── tailwind.config.cjs                # TailwindCSS 4 configuration
├── postcss.config.cjs                 # PostCSS configuration
├── vitest.config.ts                   # Vitest configuration
├── cypress.config.ts                  # Cypress configuration
└── package.json
```

## 📊 Component Coverage Status

### ✅ Completed Categories
- **Mockup: 100%** (4/4 components) - All DaisyUI mockup components implemented
- **Layout: 87%** (7/8 components) - Nearly complete layout system
- **Navigation: 86%** (6/7 components) - Comprehensive navigation suite

### 🚧 In Progress Categories  
- **Actions: 80%** (4/5 components) - Missing: Theme Controller
- **Data Display: 80%** (12/15 components) - Missing: Diff, List, Status, Timeline
- **Feedback: 71%** (5/7 components) - Missing: Loading, Skeleton
- **Data Input: 64%** (9/14 components) - Missing: Calendar, Fieldset, Filter, Label, Validator

### 🎯 Next Development Priorities
1. **Theme Controller** - Complete Actions category
2. **Loading & Skeleton** - Complete Feedback category  
3. **Join component** - Complete Layout category
4. **Dock component** - Complete Navigation category
5. **Calendar & Label** - Enhance Data Input category

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

## 🎯 Compatibility & Stats

### Technology Stack
- ✅ **Node.js 22.12.0+**
- ✅ **Nuxt 4** 
- ✅ **Vue 3** with Composition API
- ✅ **TailwindCSS 4** 
- ✅ **DaisyUI** official component system
- ✅ **TypeScript 5+** with strict mode
- ✅ **ESLint 9** with flat config
- ✅ **Storybook 9.1+** with Vue 3 support

### Component Library Stats
- 📦 **47 Components** implemented
- 🎯 **77% Coverage** of all DaisyUI components  
- 🏗️ **7 Categories** following official DaisyUI structure
- 📚 **10 Storybook Stories** with interactive examples
- ✅ **100% TypeScript** coverage
- 🧪 **Unit Tests** for core components
- 🎨 **2 Custom Themes** (light/dark)
- 📱 **Fully Responsive** design system

---

Developed with ❤️ by BoilerplatePowa
