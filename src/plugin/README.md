# Nuxt Design System Module

A comprehensive Nuxt 4 module for the BoilerplatePowa Design System that automatically registers all components, composables, and styles.

## Features

- **Automatic Component Registration**: All design system components are automatically registered globally
- **Configurable Prefix**: Customize component prefix (default: `Bp`)
- **Selective Component Loading**: Load only specific components to reduce bundle size
- **Composable Auto-imports**: Automatic import of design system composables
- **CSS Integration**: Automatic loading of component-specific CSS files
- **TypeScript Support**: Full TypeScript support with proper type definitions

## Installation

The plugin is automatically included when you install the design system package.

## Configuration

### Basic Configuration

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@boilerplatepowa/nuxt-design-system'],
  
  designSystem: {
    prefix: 'Bp',
    components: true,
    css: true,
    composables: true,
  },
});
```

### Advanced Configuration

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@boilerplatepowa/nuxt-design-system'],
  
  designSystem: {
    // Custom prefix for all components
    prefix: 'MyDS',
    
    // Load only specific components
    components: ['Button', 'Card', 'Input', 'Modal'],
    
    // Disable CSS loading
    css: false,
    
    // Disable composable auto-imports
    composables: false,
  },
});
```

## Available Components

### Actions
- `Button` - Interactive buttons with various styles
- `Dropdown` - Dropdown menus and selectors
- `Modal` - Modal dialogs and overlays
- `Swap` - Toggle between two elements
- `ThemeController` - Theme switching functionality

### Data Display
- `Accordion` - Collapsible content sections
- `Avatar` - User profile images and placeholders
- `Badge` - Status indicators and labels
- `Card` - Content containers with headers and footers
- `Carousel` - Image and content sliders
- `ChatBubble` - Chat message components
- `Collapse` - Expandable content areas
- `Countdown` - Timer and countdown displays
- `Kbd` - Keyboard key indicators
- `List` - Ordered and unordered lists
- `Stat` - Statistical information displays
- `Status` - Status indicators
- `StatusBox` - Enhanced status displays
- `Table` - Data tables
- `Tabs` - Tabbed content navigation
- `TextDiff` - Text difference highlighting
- `Timeline` - Chronological event displays

### Data Input
- `Calendar` - Date picker components
- `Checkbox` - Checkbox inputs
- `Fieldset` - Form field grouping
- `FileInput` - File upload inputs
- `Filter` - Data filtering components
- `FormWizard` - Multi-step form navigation
- `Input` - Text input fields
- `Label` - Form labels
- `PhoneInput` - Phone number inputs
- `Radio` - Radio button groups
- `Range` - Range sliders
- `Rating` - Star rating components
- `Select` - Dropdown select inputs
- `Textarea` - Multi-line text inputs
- `Toggle` - Toggle switches
- `Validator` - Form validation components

### Feedback
- `Alert` - Notification messages
- `Loading` - Loading indicators
- `Progress` - Progress bars
- `RadialProgress` - Circular progress indicators
- `Skeleton` - Loading placeholders
- `Toast` - Toast notifications
- `ToastContainer` - Toast notification container
- `Tooltip` - Hover tooltips

### Icons
- `Icon` - Icon component with Lucide icons

### Layout
- `Divider` - Content separators
- `Drawer` - Side drawer navigation
- `Footer` - Page footers
- `Hero` - Hero section components
- `Indicator` - Status indicators
- `Join` - Connected component groups
- `Mask` - Image masking components
- `Stack` - Stacked layout components

### Mockup
- `BrowserMockup` - Browser window mockups
- `CodeMockup` - Code editor mockups
- `PhoneMockup` - Mobile device mockups
- `WindowMockup` - Desktop window mockups

### Navigation
- `Breadcrumbs` - Navigation breadcrumbs
- `Dock` - Application dock navigation
- `Link` - Navigation links
- `Menu` - Navigation menus
- `Navbar` - Navigation bars
- `Pagination` - Page navigation
- `Steps` - Step-by-step navigation

## Usage

### Using Components

All components are automatically registered with the configured prefix:

```vue
<template>
  <!-- Using the default 'Bp' prefix -->
  <BpButton variant="primary">Click me</BpButton>
  <BpCard>
    <h3>Card Title</h3>
    <p>Card content</p>
  </BpCard>
  
  <!-- Using custom prefix 'MyDS' -->
  <MyDSButton variant="secondary">Custom Button</MyDSButton>
</template>
```

### Using Composables

Composables are automatically imported:

```vue
<script setup>
// useToast is automatically available
const { showToast } = useToast();

const handleClick = () => {
  showToast({
    title: 'Success!',
    message: 'Operation completed successfully',
    type: 'success',
  });
};
</script>
```

### Manual Imports

You can also import components manually for better tree-shaking:

```vue
<script setup>
import { Button, Card } from '@boilerplatepowa/nuxt-design-system';
import { Alert, Progress } from '@boilerplatepowa/nuxt-design-system';
</script>

<template>
  <Button variant="primary">Manual Import</Button>
  <Card>Manual Card</Card>
</template>
```

## Configuration Options

### `prefix` (string, default: 'Bp')
The prefix to use for all registered components.

### `components` (boolean | string[], default: true)
- `true`: Register all components
- `false`: Don't register any components
- `string[]`: Register only the specified components

### `css` (boolean, default: true)
Whether to automatically load component CSS files.

### `composables` (boolean, default: true)
Whether to automatically import composables.

## Runtime Configuration

The plugin configuration is available at runtime:

```typescript
const config = useRuntimeConfig();
const designSystemConfig = config.public.designSystem;
```

## TypeScript Support

The plugin provides full TypeScript support. Component types are automatically available when using the registered components.

## Performance Optimization

### Selective Component Loading

To reduce bundle size, you can load only the components you need:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@boilerplatepowa/nuxt-design-system'],
  designSystem: {
    components: ['Button', 'Card', 'Input'], // Only these components will be loaded
  },
});
```
```

### Manual Imports for Tree-shaking

For even better tree-shaking, use manual imports instead of global registration:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@boilerplatepowa/nuxt-design-system'],
  designSystem: {
    components: false, // Disable global registration
  },
});
```

Then import components manually:

```vue
<script setup>
import { Button, Card } from '@boilerplatepowa/nuxt-design-system';
</script>
```

## Migration from Nuxt 3

If you're migrating from Nuxt 3, the main changes are:

1. Updated compatibility to `^4.0.0`
2. Enhanced component registration with categories
3. Added composable auto-imports
4. Improved CSS file handling
5. Better TypeScript support

## Troubleshooting

### Components Not Loading

1. Check that the plugin is properly configured in `nuxt.config.ts`
2. Verify component file paths are correct
3. Ensure the prefix is not conflicting with other components

### CSS Not Loading

1. Check that `css: true` is set in the configuration
2. Verify CSS file paths exist in the assets directory
3. Check for any CSS conflicts with other modules

### TypeScript Errors

1. Ensure TypeScript is properly configured
2. Check that component types are being generated
3. Verify import paths are correct

## Contributing

When adding new components to the design system:

1. Add the component to the appropriate category in the plugin
2. Update the component list in this README
3. Ensure the component has proper TypeScript types
4. Add any necessary CSS files to the assets directory
