# Installation Guide

## Quick Start

### 1. Install the Package

```bash
npm install @boilerplatepowa/nuxt-design-system
```

### 2. Add to Nuxt Configuration

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

### 3. Use Components

```vue
<template>
  <BpButton variant="primary">Hello Design System!</BpButton>
  <BpCard title="Welcome">Your components are ready!</BpCard>
</template>
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `prefix` | `string` | `'Bp'` | Prefix for auto-imported components |
| `components` | `boolean \| string[]` | `true` | Enable/disable component auto-imports or specify components to load |
| `css` | `boolean` | `true` | Enable/disable CSS auto-loading |
| `composables` | `boolean` | `true` | Enable/disable composable auto-imports |

## Advanced Configuration

### Selective Component Loading

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@boilerplatepowa/nuxt-design-system'],
  designSystem: {
    prefix: 'Bp',
    components: ['Button', 'Card', 'Input', 'Alert'], // Only load these components
    css: true,
    composables: true,
  },
});
```

### Custom Prefix

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@boilerplatepowa/nuxt-design-system'],
  designSystem: {
    prefix: 'MyDS', // Custom prefix
    components: true,
    css: true,
  },
});
```

```vue
<template>
  <MyDSButton variant="primary">Custom Button</MyDSButton>
  <MyDSCard title="Custom Card">Content</MyDSCard>
</template>
```

### Disable Auto-imports

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@boilerplatepowa/nuxt-design-system'],
  designSystem: {
    components: false, // Disable auto-imports
    css: true,
    composables: false, // Disable composable auto-imports
  },
});
```

## Manual Imports

If you prefer manual imports for better tree-shaking:

```vue
<template>
  <Button variant="primary">Manual Import</Button>
  <Card title="Manual Card">Content</Card>
</template>

<script setup>
import { Button, Card } from '@boilerplatepowa/nuxt-design-system';
</script>
```

## Category-based Imports

Import components by category for better organization:

```vue
<script setup>
import { Button, Modal } from '@boilerplatepowa/nuxt-design-system/components/Actions';
import { Card, Avatar } from '@boilerplatepowa/nuxt-design-system/components/DataDisplay';
import { Alert, Progress } from '@boilerplatepowa/nuxt-design-system/components/Feedback';
</script>
```

## Available Categories

- **Actions**: `@boilerplatepowa/nuxt-design-system/components/Actions`
- **DataDisplay**: `@boilerplatepowa/nuxt-design-system/components/DataDisplay`
- **DataInput**: `@boilerplatepowa/nuxt-design-system/components/DataInput`
- **Feedback**: `@boilerplatepowa/nuxt-design-system/components/Feedback`
- **Icons**: `@boilerplatepowa/nuxt-design-system/components/Icons`
- **Layout**: `@boilerplatepowa/nuxt-design-system/components/Layout`
- **Mockup**: `@boilerplatepowa/nuxt-design-system/components/Mockup`
- **Navigation**: `@boilerplatepowa/nuxt-design-system/components/Navigation`

## Requirements

- **Nuxt**: ^4.0.0
- **Vue**: ^3.5.0
- **Node.js**: >=22.12.0
- **npm**: >=10.0.0

## Troubleshooting

### Components Not Loading

1. Check that the module is properly configured in `nuxt.config.ts`
2. Verify the prefix is not conflicting with other components
3. Ensure the module is listed in the `modules` array

### CSS Not Loading

1. Check that `css: true` is set in the configuration
2. Verify CSS file paths exist in the assets directory
3. Check for any CSS conflicts with other modules

### TypeScript Errors

1. Ensure TypeScript is properly configured
2. Check that component types are being generated
3. Verify import paths are correct
