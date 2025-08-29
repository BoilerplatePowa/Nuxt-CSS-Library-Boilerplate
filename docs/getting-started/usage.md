# Usage Guide

This guide shows you how to use the **@boilerplatepowa/nuxt-design-system** components in your Nuxt 4 project.

## Basic Usage

### Auto-Imported Components

Once configured, all components are automatically available with the `Bp` prefix:

```vue
<template>
  <div>
    <BpButton variant="primary">Click me</BpButton>
    <BpCard title="Welcome">Your content here</BpCard>
    <BpInput v-model="value" label="Email" />
  </div>
</template>

<script setup lang="ts">
const value = ref('');
</script>
```

### Manual Imports

You can also import components manually:

```vue
<template>
  <div>
    <Button variant="primary">Click me</Button>
    <Card title="Welcome">Your content here</Card>
    <Input v-model="value" label="Email" />
  </div>
</template>

<script setup lang="ts">
import { Button, Card, Input } from '@boilerplatepowa/nuxt-design-system';

const value = ref('');
</script>
```

## Component Categories

### Actions Components

Interactive components that trigger behavior:

```vue
<template>
  <div class="space-y-4">
    <!-- Button -->
    <BpButton variant="primary" size="md" @click="handleClick">
      Click me
    </BpButton>

    <!-- Dropdown -->
    <BpDropdown>
      <BpButton variant="outline">Menu</BpButton>
      <template #content>
        <BpDropdownItem>Item 1</BpDropdownItem>
        <BpDropdownItem>Item 2</BpDropdownItem>
      </template>
    </BpDropdown>

    <!-- Modal -->
    <BpModal v-model="showModal" title="Confirm Action">
      <p>Are you sure you want to proceed?</p>
      <template #actions>
        <BpButton variant="primary" @click="confirm">Confirm</BpButton>
        <BpButton variant="ghost" @click="cancel">Cancel</BpButton>
      </template>
    </BpModal>
  </div>
</template>

<script setup lang="ts">
const showModal = ref(false);

const handleClick = () => {
  console.log('Button clicked!');
};

const confirm = () => {
  showModal.value = false;
  console.log('Confirmed!');
};

const cancel = () => {
  showModal.value = false;
  console.log('Cancelled!');
};
</script>
```

### Data Display Components

Components for presenting information:

```vue
<template>
  <div class="space-y-4">
    <!-- Card with Avatar -->
    <BpCard title="User Profile" variant="bordered">
      <div class="flex items-center gap-4">
        <BpAvatar src="/user.jpg" alt="User" size="lg" :online="true" />
        <div>
          <h3>John Doe</h3>
          <BpBadge variant="success">Active</BpBadge>
        </div>
      </div>
    </BpCard>

    <!-- Table -->
    <BpTable :headers="tableHeaders" :data="tableData" />

    <!-- Tabs -->
    <BpTabs :tabs="tabs" v-model="activeTab" />
  </div>
</template>

<script setup lang="ts">
const activeTab = ref('tab1');

const tableHeaders = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
];

const tableData = [
  { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
];

const tabs = [
  { label: 'Tab 1', value: 'tab1', content: 'Content for tab 1' },
  { label: 'Tab 2', value: 'tab2', content: 'Content for tab 2' },
];
</script>
```

### Data Input Components

Form components for user input:

```vue
<template>
  <form class="space-y-4" @submit.prevent="handleSubmit">
    <!-- Input -->
    <BpInput
      v-model="form.email"
      type="email"
      label="Email"
      placeholder="Enter your email"
      :error="errors.email"
    />

    <!-- Select -->
    <BpSelect
      v-model="form.country"
      label="Country"
      :options="countryOptions"
      placeholder="Select country"
    />

    <!-- Checkbox -->
    <BpCheckbox
      v-model="form.newsletter"
      label="Subscribe to newsletter"
    />

    <!-- Toggle -->
    <BpToggle
      v-model="form.notifications"
      label="Enable notifications"
    />

    <!-- Submit Button -->
    <BpButton type="submit" variant="primary" :loading="isSubmitting">
      Submit
    </BpButton>
  </form>
</template>

<script setup lang="ts">
const form = ref({
  email: '',
  country: '',
  newsletter: false,
  notifications: true,
});

const errors = ref({
  email: '',
});

const isSubmitting = ref(false);

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
];

const handleSubmit = async () => {
  isSubmitting.value = true;
  
  // Validate form
  if (!form.value.email) {
    errors.value.email = 'Email is required';
    isSubmitting.value = false;
    return;
  }

  try {
    // Submit form data
    console.log('Form submitted:', form.value);
    // await submitForm(form.value);
  } catch (error) {
    console.error('Form submission error:', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>
```

### Feedback Components

Components for user feedback and status:

```vue
<template>
  <div class="space-y-4">
    <!-- Alert Messages -->
    <BpAlert variant="success" :dismissible="true">
      Profile updated successfully!
    </BpAlert>

    <!-- Progress Indicators -->
    <BpProgress :value="uploadProgress" :max="100" />
    <BpRadialProgress :value="75" size="lg" />

    <!-- Loading -->
    <BpLoading v-if="isLoading" />

    <!-- Tooltip -->
    <BpTooltip text="Click to edit profile">
      <BpButton variant="ghost">Edit</BpButton>
    </BpTooltip>
  </div>
</template>

<script setup lang="ts">
const uploadProgress = ref(45);
const isLoading = ref(false);
</script>
```

### Layout Components

Structural and layout components:

```vue
<template>
  <div>
    <!-- Hero Section -->
    <BpHero
      title="Welcome to Our Platform"
      subtitle="Build amazing things with our component library"
      :overlay="true"
    >
      <template #actions>
        <BpButton variant="primary" size="lg">Get Started</BpButton>
      </template>
    </BpHero>

    <!-- Drawer Navigation -->
    <BpDrawer v-model="drawerOpen" side="left">
      <template #content>
        <BpButton @click="drawerOpen = !drawerOpen">
          Toggle Menu
        </BpButton>
      </template>
      <template #drawer>
        <BpMenu :items="navigationItems" />
      </template>
    </BpDrawer>

    <!-- Stack Layout -->
    <BpStack>
      <BpCard>Card 1</BpCard>
      <BpCard>Card 2</BpCard>
      <BpCard>Card 3</BpCard>
    </BpStack>
  </div>
</template>

<script setup lang="ts">
const drawerOpen = ref(false);

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
</script>
```

### Navigation Components

Navigation and wayfinding components:

```vue
<template>
  <div>
    <!-- Navigation Bar -->
    <BpNavbar brand="Your Brand">
      <template #menu>
        <BpMenu :items="navItems" orientation="horizontal" />
      </template>
      <template #actions>
        <BpButton variant="outline">Login</BpButton>
      </template>
    </BpNavbar>

    <!-- Breadcrumbs -->
    <BpBreadcrumbs :items="breadcrumbItems" />

    <!-- Pagination -->
    <BpPagination v-model="currentPage" :total="totalPages" :show-edges="true" />

    <!-- Steps -->
    <BpSteps :steps="steps" v-model="currentStep" />
  </div>
</template>

<script setup lang="ts">
const currentPage = ref(1);
const currentStep = ref(0);
const totalPages = ref(10);

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
];

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Current Page' },
];

const steps = [
  { label: 'Step 1', description: 'First step' },
  { label: 'Step 2', description: 'Second step' },
  { label: 'Step 3', description: 'Final step' },
];
</script>
```

## Import Patterns

### Category-based Imports (Recommended)

```typescript
// Import by category for better organization
import { Button, Modal, Dropdown } from '@boilerplatepowa/nuxt-design-system/components/Actions';
import { Alert, Progress, Toast } from '@boilerplatepowa/nuxt-design-system/components/Feedback';
import { Input, Select, Checkbox } from '@boilerplatepowa/nuxt-design-system/components/DataInput';
import { Avatar, Card, Table } from '@boilerplatepowa/nuxt-design-system/components/DataDisplay';
import { Hero, Drawer, Stack } from '@boilerplatepowa/nuxt-design-system/components/Layout';
import { Navbar, Menu, Steps } from '@boilerplatepowa/nuxt-design-system/components/Navigation';
```

### Global Imports

```typescript
// Import everything globally
import { Button, Alert, Input, Avatar } from '@boilerplatepowa/nuxt-design-system';
```

### Direct Imports

```typescript
// Import individual components
import Button from '@boilerplatepowa/nuxt-design-system/components/Actions/Button.vue';
import Alert from '@boilerplatepowa/nuxt-design-system/components/Feedback/Alert.vue';
```

## Event Handling

### Component Events

Most components emit standard Vue events:

```vue
<template>
  <BpButton @click="handleClick" @focus="handleFocus">
    Click me
  </BpButton>
  
  <BpInput 
    v-model="value" 
    @input="handleInput"
    @blur="handleBlur"
  />
  
  <BpModal v-model="showModal" @open="handleOpen" @close="handleClose">
    Modal content
  </BpModal>
</template>

<script setup lang="ts">
const value = ref('');
const showModal = ref(false);

const handleClick = () => {
  console.log('Button clicked');
};

const handleFocus = () => {
  console.log('Button focused');
};

const handleInput = (event: Event) => {
  console.log('Input changed:', event);
};

const handleBlur = () => {
  console.log('Input lost focus');
};

const handleOpen = () => {
  console.log('Modal opened');
};

const handleClose = () => {
  console.log('Modal closed');
};
</script>
```

## Form Integration

### VeeValidate Integration

The design system components work seamlessly with VeeValidate:

```vue
<template>
  <Form @submit="onSubmit" v-slot="{ errors }">
    <BpInput
      name="email"
      type="email"
      label="Email"
      :error="errors.email"
    />
    
    <BpInput
      name="password"
      type="password"
      label="Password"
      :error="errors.password"
    />
    
    <BpButton type="submit" variant="primary">
      Submit
    </BpButton>
  </Form>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const onSubmit = (values: any) => {
  console.log('Form submitted:', values);
};
</script>
```

## Next Steps

- [Themes Guide](themes.md) - Customizing themes
- [Component Documentation](../components/) - Detailed component guides
- [API Reference](../api/) - Complete API documentation
