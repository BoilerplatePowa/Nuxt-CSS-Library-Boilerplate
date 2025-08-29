# Nuxt Design System Module - Usage Examples

## Basic Module Setup

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

## Usage Examples

### 1. Auto-imported Components (Recommended)

```vue
<template>
  <div>
    <BpButton variant="primary" @click="showAlert">
      Click me
    </BpButton>
    
    <BpCard title="Welcome">
      <p>This is a card component</p>
      <BpButton variant="secondary">Action</BpButton>
    </BpCard>
    
    <BpAlert type="success">
      Success message
    </BpAlert>
  </div>
</template>

<script setup>
const showAlert = () => {
  // useToast is auto-imported
  useToast().showToast({
    title: 'Success!',
    message: 'Button clicked',
    type: 'success',
  });
};
</script>
```

### 2. Manual Imports (Better Tree-shaking)

```vue
<template>
  <div>
    <Button variant="primary">Manual Import</Button>
    <Card title="Manual Card">Content</Card>
    <Alert type="info">Info message</Alert>
  </div>
</template>

<script setup>
import { Button, Card, Alert } from '@boilerplatepowa/nuxt-design-system';
</script>
```

### 3. Category-based Imports

```vue
<template>
  <div>
    <!-- Actions -->
    <Button variant="primary">Action</Button>
    <Modal title="Example Modal">Modal content</Modal>
    
    <!-- Data Display -->
    <Card title="Data Card">Card content</Card>
    <Avatar src="/user.jpg" alt="User" />
    
    <!-- Feedback -->
    <Alert type="warning">Warning message</Alert>
    <Progress value="75" />
  </div>
</template>

<script setup>
import { Button, Modal } from '@boilerplatepowa/nuxt-design-system/components/Actions';
import { Card, Avatar } from '@boilerplatepowa/nuxt-design-system/components/DataDisplay';
import { Alert, Progress } from '@boilerplatepowa/nuxt-design-system/components/Feedback';
</script>
```

### 4. Selective Component Loading

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

### 5. Custom Prefix

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
  <div>
    <MyDSButton variant="primary">Custom Button</MyDSButton>
    <MyDSCard title="Custom Card">Content</MyDSCard>
  </div>
</template>
```

### 6. Disable Auto-imports for Manual Control

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

```vue
<template>
  <div>
    <Button variant="primary">Manual Only</Button>
  </div>
</template>

<script setup>
import { Button } from '@boilerplatepowa/nuxt-design-system';
import { useToast } from '@boilerplatepowa/nuxt-design-system/components/Feedback';
</script>
```

## Available Import Patterns

### Main Package
```typescript
import { Button, Card, Input, Alert } from '@boilerplatepowa/nuxt-design-system';
```

### Category-based
```typescript
import { Button, Modal, Dropdown } from '@boilerplatepowa/nuxt-design-system/components/Actions';
import { Card, Avatar, Table } from '@boilerplatepowa/nuxt-design-system/components/DataDisplay';
import { Input, Select, Checkbox } from '@boilerplatepowa/nuxt-design-system/components/DataInput';
import { Alert, Progress, Toast } from '@boilerplatepowa/nuxt-design-system/components/Feedback';
import { Icon } from '@boilerplatepowa/nuxt-design-system/components/Icons';
import { Hero, Drawer, Stack } from '@boilerplatepowa/nuxt-design-system/components/Layout';
import { BrowserMockup, PhoneMockup } from '@boilerplatepowa/nuxt-design-system/components/Mockup';
import { Navbar, Menu, Breadcrumbs } from '@boilerplatepowa/nuxt-design-system/components/Navigation';
```

### Module Only
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
