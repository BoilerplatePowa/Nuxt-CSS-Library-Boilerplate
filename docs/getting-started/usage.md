# Usage Guide

This guide covers how to use the **@boilerplatepowa/nuxt-design-system** components in your Nuxt 4 application.

## Quick Start

### Auto-imported Components (Recommended)

With the module configured, components are automatically available with the configured prefix:

```vue
<template>
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

## Import Patterns

### 1. Auto-imported Components

The easiest way to use components is with auto-imports:

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

```vue
<template>
  <BpButton variant="primary">Auto-imported</BpButton>
  <BpCard title="Card">Content</BpCard>
  <BpInput v-model="value" label="Input" />
</template>
```

### 2. Manual Imports (Better Tree-shaking)

For better tree-shaking and bundle optimization:

```vue
<template>
  <Button variant="primary">Manual Import</Button>
  <Card title="Manual Card">Content</Card>
  <Alert type="info">Info message</Alert>
</template>

<script setup>
import { Button, Card, Alert } from '@boilerplatepowa/nuxt-design-system';
</script>
```

### 3. Category-based Imports

Import components by category for better organization:

```vue
<template>
  <!-- Actions -->
  <Button variant="primary">Action</Button>
  <Modal title="Example Modal">Modal content</Modal>
  
  <!-- Data Display -->
  <Card title="Data Card">Card content</Card>
  <Avatar src="/user.jpg" alt="User" />
  
  <!-- Feedback -->
  <Alert type="warning">Warning message</Alert>
  <Progress value="75" />
</template>

<script setup>
import { Button, Modal } from '@boilerplatepowa/nuxt-design-system/components/Actions';
import { Card, Avatar } from '@boilerplatepowa/nuxt-design-system/components/DataDisplay';
import { Alert, Progress } from '@boilerplatepowa/nuxt-design-system/components/Feedback';
</script>
```

## Component Categories

### Actions
Interactive components for user actions:

```vue
<script setup>
import { Button, Dropdown, Modal, Swap, ThemeController } from '@boilerplatepowa/nuxt-design-system/components/Actions';
</script>
```

### Data Display
Components for presenting information:

```vue
<script setup>
import { 
  Accordion, Avatar, Badge, Card, Carousel, 
  ChatBubble, Collapse, Countdown, Kbd, List, 
  Stat, Status, StatusBox, Table, Tabs, 
  TextDiff, Timeline 
} from '@boilerplatepowa/nuxt-design-system/components/DataDisplay';
</script>
```

### Data Input
Form and input components:

```vue
<script setup>
import { 
  Calendar, Checkbox, Fieldset, FileInput, Filter, 
  FormWizard, Input, Label, PhoneInput, Radio, 
  Range, Rating, Select, Textarea, Toggle, Validator 
} from '@boilerplatepowa/nuxt-design-system/components/DataInput';
</script>
```

### Feedback
User feedback and notification components:

```vue
<script setup>
import { 
  Alert, Loading, Progress, RadialProgress, 
  Skeleton, Toast, ToastContainer, Tooltip 
} from '@boilerplatepowa/nuxt-design-system/components/Feedback';
</script>
```

### Icons
Icon components:

```vue
<script setup>
import { Icon } from '@boilerplatepowa/nuxt-design-system/components/Icons';
</script>
```

### Layout
Structural and layout components:

```vue
<script setup>
import { 
  Divider, Drawer, Footer, Hero, Indicator, 
  Join, Mask, Stack 
} from '@boilerplatepowa/nuxt-design-system/components/Layout';
</script>
```

### Mockup
Device and interface mockups:

```vue
<script setup>
import { 
  BrowserMockup, CodeMockup, PhoneMockup, WindowMockup 
} from '@boilerplatepowa/nuxt-design-system/components/Mockup';
</script>
```

### Navigation
Navigation components:

```vue
<script setup>
import { 
  Breadcrumbs, Dock, Link, Menu, Navbar, 
  Pagination, Steps 
} from '@boilerplatepowa/nuxt-design-system/components/Navigation';
</script>
```

## Composables

### useToast

The `useToast` composable is automatically available when `composables: true` is set:

```vue
<script setup>
const { showToast } = useToast();

const handleSuccess = () => {
  showToast({
    title: 'Success!',
    message: 'Operation completed successfully',
    type: 'success',
    duration: 5000,
  });
};

const handleError = () => {
  showToast({
    title: 'Error!',
    message: 'Something went wrong',
    type: 'error',
    duration: 8000,
  });
};
</script>
```

## Advanced Usage

### Selective Component Loading

Load only the components you need to reduce bundle size:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@boilerplatepowa/nuxt-design-system'],
  designSystem: {
    prefix: 'Bp',
    components: ['Button', 'Card', 'Input', 'Alert'], // Only these components
    css: true,
    composables: true,
  },
});
```

### Custom Prefix

Use a custom prefix for your components:

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

For complete manual control:

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
  <Button variant="primary">Manual Only</Button>
</template>

<script setup>
import { Button } from '@boilerplatepowa/nuxt-design-system';
import { useToast } from '@boilerplatepowa/nuxt-design-system/components/Feedback';
</script>
```

## Best Practices

### 1. Choose the Right Import Pattern

- **Auto-imports**: Best for rapid prototyping and small to medium projects
- **Manual imports**: Best for production applications where bundle size matters
- **Category-based imports**: Best for large projects with clear component organization

### 2. Optimize Bundle Size

- Use selective component loading for production builds
- Import only the components you need
- Consider using manual imports for better tree-shaking

### 3. Consistent Naming

- Stick to one import pattern throughout your project
- Use consistent component prefixes
- Follow your team's naming conventions

### 4. TypeScript Support

All components have full TypeScript support:

```vue
<script setup lang="ts">
import { Button } from '@boilerplatepowa/nuxt-design-system';

// TypeScript will provide full type checking
const handleClick = (event: Event) => {
  console.log('Button clicked', event);
};
</script>

<template>
  <Button variant="primary" @click="handleClick">
    TypeScript Button
  </Button>
</template>
```

## Examples

### Complete Form Example

```vue
<template>
  <Card title="User Registration">
    <form @submit.prevent="handleSubmit">
      <div class="space-y-4">
        <Input 
          v-model="form.name" 
          label="Full Name" 
          placeholder="Enter your full name"
          required 
        />
        
        <Input 
          v-model="form.email" 
          type="email" 
          label="Email" 
          placeholder="Enter your email"
          required 
        />
        
        <Select 
          v-model="form.role" 
          label="Role" 
          :options="roleOptions"
          required 
        />
        
        <div class="flex gap-2">
          <Button type="submit" variant="primary">
            Register
          </Button>
          <Button type="button" variant="outline" @click="resetForm">
            Reset
          </Button>
        </div>
      </div>
    </form>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import { Card, Input, Select, Button } from '@boilerplatepowa/nuxt-design-system';
import { useToast } from '@boilerplatepowa/nuxt-design-system/components/Feedback';

const { showToast } = useToast();

const form = ref({
  name: '',
  email: '',
  role: '',
});

const roleOptions = [
  { value: 'user', label: 'User' },
  { value: 'admin', label: 'Administrator' },
  { value: 'moderator', label: 'Moderator' },
];

const handleSubmit = () => {
  showToast({
    title: 'Success!',
    message: 'User registered successfully',
    type: 'success',
  });
};

const resetForm = () => {
  form.value = { name: '', email: '', role: '' };
};
</script>
```

## Next Steps

- [Component Documentation](../components/) - Detailed component documentation
- [Themes Guide](themes.md) - Customizing themes and styling
- [Configuration Guide](configuration.md) - Advanced configuration options
