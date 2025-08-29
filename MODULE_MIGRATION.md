# Module Migration Guide

## Overview

This document outlines the migration from a **Nuxt Plugin** to a **Nuxt Module** for the `@boilerplatepowa/nuxt-design-system`.

## What Changed

### ✅ **Before (Plugin)**
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['~/src/plugin/index.ts'],
  designSystem: {
    prefix: 'Bp',
    components: true,
    css: true,
  },
});
```

### ✅ **After (Module)**
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

## Key Improvements

### 1. **Proper Module Structure**
- Uses `defineNuxtModule` for proper Nuxt module conventions
- Follows Nuxt 4 module best practices
- Better TypeScript support and type definitions

### 2. **Enhanced Import Patterns**
- **Auto-imports**: Components automatically available with configurable prefix
- **Manual imports**: Better tree-shaking for production builds
- **Category-based imports**: Organized imports by component category

### 3. **Flexible Configuration**
- **Selective component loading**: Load only needed components
- **Custom prefixes**: Configure component naming
- **Composable auto-imports**: Automatic composable availability

### 4. **Better Package Structure**
- **Multiple entry points**: Main package and category-based exports
- **Proper TypeScript declarations**: Full type support
- **Optimized builds**: Better tree-shaking and bundle optimization

## Migration Steps

### 1. Update Configuration

**Old (Plugin)**:
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['~/src/plugin/index.ts'],
  designSystem: {
    prefix: 'Bp',
    components: true,
    css: true,
  },
});
```

**New (Module)**:
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@boilerplatepowa/nuxt-design-system'],
  designSystem: {
    prefix: 'Bp',
    components: true,
    css: true,
    composables: true, // New option
  },
});
```

### 2. Update Import Patterns

**Old (Plugin)**:
```vue
<template>
  <BpButton variant="primary">Button</BpButton>
</template>
```

**New (Module) - Same for auto-imports**:
```vue
<template>
  <BpButton variant="primary">Button</BpButton>
</template>
```

**New (Module) - Manual imports**:
```vue
<template>
  <Button variant="primary">Button</Button>
</template>

<script setup>
import { Button } from '@boilerplatepowa/nuxt-design-system';
</script>
```

**New (Module) - Category-based imports**:
```vue
<template>
  <Button variant="primary">Button</Button>
  <Card title="Card">Content</Card>
</template>

<script setup>
import { Button } from '@boilerplatepowa/nuxt-design-system/components/Actions';
import { Card } from '@boilerplatepowa/nuxt-design-system/components/DataDisplay';
</script>
```

### 3. Update Package Installation

**Old (Plugin)**:
```bash
# Plugin was part of the project
npm install
```

**New (Module)**:
```bash
# Install as a separate package
npm install @boilerplatepowa/nuxt-design-system
```

## New Features

### 1. Selective Component Loading

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@boilerplatepowa/nuxt-design-system'],
  designSystem: {
    components: ['Button', 'Card', 'Input', 'Alert'], // Only these components
  },
});
```

### 2. Custom Prefixes

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@boilerplatepowa/nuxt-design-system'],
  designSystem: {
    prefix: 'MyDS', // Custom prefix
  },
});
```

```vue
<template>
  <MyDSButton variant="primary">Custom Button</MyDSButton>
</template>
```

### 3. Category-based Imports

```typescript
// Import by category
import { Button, Modal } from '@boilerplatepowa/nuxt-design-system/components/Actions';
import { Alert, Progress } from '@boilerplatepowa/nuxt-design-system/components/Feedback';
import { Input, Select } from '@boilerplatepowa/nuxt-design-system/components/DataInput';
```

### 4. Composable Auto-imports

```vue
<script setup>
// useToast is automatically available
const { showToast } = useToast();

const handleSuccess = () => {
  showToast({
    title: 'Success!',
    message: 'Operation completed',
    type: 'success',
  });
};
</script>
```

## Available Import Patterns

### 1. Main Package
```typescript
import { Button, Card, Input, Alert } from '@boilerplatepowa/nuxt-design-system';
```

### 2. Category-based
```typescript
import { Button, Modal } from '@boilerplatepowa/nuxt-design-system/components/Actions';
import { Card, Avatar } from '@boilerplatepowa/nuxt-design-system/components/DataDisplay';
import { Input, Select } from '@boilerplatepowa/nuxt-design-system/components/DataInput';
import { Alert, Progress } from '@boilerplatepowa/nuxt-design-system/components/Feedback';
import { Icon } from '@boilerplatepowa/nuxt-design-system/components/Icons';
import { Hero, Drawer } from '@boilerplatepowa/nuxt-design-system/components/Layout';
import { BrowserMockup } from '@boilerplatepowa/nuxt-design-system/components/Mockup';
import { Navbar, Menu } from '@boilerplatepowa/nuxt-design-system/components/Navigation';
```

### 3. Module Only
```typescript
import designSystemModule from '@boilerplatepowa/nuxt-design-system/module';
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `prefix` | `string` | `'Bp'` | Prefix for auto-imported components |
| `components` | `boolean \| string[]` | `true` | Enable/disable component auto-imports or specify components to load |
| `css` | `boolean` | `true` | Enable/disable CSS auto-loading |
| `composables` | `boolean` | `true` | Enable/disable composable auto-imports |

## Benefits of Module Migration

### 1. **Better Performance**
- Improved tree-shaking
- Selective component loading
- Optimized bundle sizes

### 2. **Enhanced Developer Experience**
- Better TypeScript support
- Multiple import patterns
- Flexible configuration options

### 3. **Production Ready**
- Proper module structure
- Better error handling
- Optimized builds

### 4. **Maintainability**
- Clear separation of concerns
- Better code organization
- Easier to extend and customize

## Breaking Changes

### 1. Configuration Path
- **Old**: `~/src/plugin/index.ts`
- **New**: `@boilerplatepowa/nuxt-design-system`

### 2. Import Paths
- **Old**: Direct component imports from plugin
- **New**: Package-based imports with multiple patterns

### 3. Type Definitions
- **Old**: Plugin-based types
- **New**: Module-based types with better TypeScript support

## Migration Checklist

- [ ] Update `nuxt.config.ts` to use module instead of plugin
- [ ] Update any manual imports to use new package paths
- [ ] Test auto-imported components work correctly
- [ ] Verify TypeScript types are working
- [ ] Test category-based imports if used
- [ ] Update any build configurations
- [ ] Test in development and production environments

## Support

If you encounter any issues during migration:

- 📖 [Documentation](docs/README.md)
- 🐛 [GitHub Issues](https://github.com/boilerplatepowa/nuxt-design-system/issues)
- 💬 [Discussions](https://github.com/boilerplatepowa/nuxt-design-system/discussions)
