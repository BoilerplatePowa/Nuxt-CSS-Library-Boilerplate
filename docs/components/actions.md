# Actions Components

Interactive components that trigger behavior and user actions.

## Button

Primary action triggers with variants, sizes, and states.

### Basic Usage

```vue
<template>
  <BpButton variant="primary">Click me</BpButton>
</template>
```

### Variants

```vue
<template>
  <div class="space-y-2">
    <BpButton variant="primary">Primary</BpButton>
    <BpButton variant="secondary">Secondary</BpButton>
    <BpButton variant="accent">Accent</BpButton>
    <BpButton variant="ghost">Ghost</BpButton>
    <BpButton variant="outline">Outline</BpButton>
    <BpButton variant="link">Link</BpButton>
  </div>
</template>
```

### Sizes

```vue
<template>
  <div class="space-x-2">
    <BpButton size="xs">XS</BpButton>
    <BpButton size="sm">SM</BpButton>
    <BpButton size="md">MD</BpButton>
    <BpButton size="lg">LG</BpButton>
  </div>
</template>
```

### States

```vue
<template>
  <div class="space-x-2">
    <BpButton disabled>Disabled</BpButton>
    <BpButton loading>Loading</BpButton>
    <BpButton fullWidth>Full Width</BpButton>
  </div>
</template>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `string` | `'primary'` | Button variant |
| `size` | `string` | `'md'` | Button size |
| `disabled` | `boolean` | `false` | Disable button |
| `loading` | `boolean` | `false` | Show loading state |
| `fullWidth` | `boolean` | `false` | Full width button |

## Dropdown

Interactive dropdown menus with customizable content.

### Basic Usage

```vue
<template>
  <BpDropdown>
    <BpButton variant="outline">Menu</BpButton>
    <template #content>
      <BpDropdownItem>Item 1</BpDropdownItem>
      <BpDropdownItem>Item 2</BpDropdownItem>
      <BpDropdownItem>Item 3</BpDropdownItem>
    </template>
  </BpDropdown>
</template>
```

### With Icons

```vue
<template>
  <BpDropdown>
    <BpButton variant="outline">
      <Icon name="menu" />
      Options
    </BpButton>
    <template #content>
      <BpDropdownItem>
        <Icon name="edit" />
        Edit
      </BpDropdownItem>
      <BpDropdownItem>
        <Icon name="delete" />
        Delete
      </BpDropdownItem>
    </template>
  </BpDropdown>
</template>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placement` | `string` | `'bottom'` | Dropdown placement |
| `trigger` | `string` | `'click'` | Trigger method |

## Modal

Dialog overlays and modals for important actions.

### Basic Usage

```vue
<template>
  <BpModal v-model="showModal" title="Confirm Action">
    <p>Are you sure you want to proceed?</p>
    <template #actions>
      <BpButton variant="primary" @click="confirm">Confirm</BpButton>
      <BpButton variant="ghost" @click="cancel">Cancel</BpButton>
    </template>
  </BpModal>
</template>

<script setup lang="ts">
const showModal = ref(false);

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

### With Form

```vue
<template>
  <BpModal v-model="showModal" title="Add User">
    <form @submit.prevent="handleSubmit">
      <BpInput v-model="form.name" label="Name" required />
      <BpInput v-model="form.email" label="Email" type="email" required />
      <template #actions>
        <BpButton type="submit" variant="primary">Add User</BpButton>
        <BpButton variant="ghost" @click="showModal = false">Cancel</BpButton>
      </template>
    </form>
  </BpModal>
</template>

<script setup lang="ts">
const showModal = ref(false);
const form = ref({ name: '', email: '' });

const handleSubmit = () => {
  console.log('Form submitted:', form.value);
  showModal.value = false;
};
</script>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `boolean` | `false` | Modal visibility |
| `title` | `string` | `''` | Modal title |
| `size` | `string` | `'md'` | Modal size |
| `persistent` | `boolean` | `false` | Prevent closing on backdrop |

## Swap

Toggle animations and state swaps.

### Basic Usage

```vue
<template>
  <BpSwap v-model="isOn">
    <template #on>
      <div class="text-4xl">🌞</div>
    </template>
    <template #off>
      <div class="text-4xl">🌙</div>
    </template>
  </BpSwap>
</template>

<script setup lang="ts">
const isOn = ref(false);
</script>
```

### Variants

```vue
<template>
  <div class="space-y-4">
    <BpSwap v-model="isOn" variant="rotate">
      <template #on>
        <div class="text-3xl">🔊</div>
      </template>
      <template #off>
        <div class="text-3xl">🔇</div>
      </template>
    </BpSwap>
    
    <BpSwap v-model="isLiked">
      <template #on>
        <div class="text-4xl text-red-500">❤️</div>
      </template>
      <template #off>
        <div class="text-4xl text-gray-400">🤍</div>
      </template>
    </BpSwap>
  </div>
</template>

<script setup lang="ts">
const isOn = ref(true);
const isLiked = ref(false);
</script>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `boolean` | `false` | Swap state |
| `variant` | `string` | `'flip'` | Animation variant |

## ThemeController

Dynamic theme switching with multiple variants.

### Basic Usage

```vue
<template>
  <BpThemeController v-model="currentTheme" />
</template>

<script setup lang="ts">
const currentTheme = ref('boilerplate-light');
</script>
```

### With Custom Themes

```vue
<template>
  <BpThemeController 
    v-model="currentTheme"
    :themes="availableThemes"
    @change="handleThemeChange"
  />
</template>

<script setup lang="ts">
const currentTheme = ref('boilerplate-light');

const availableThemes = [
  { value: 'boilerplate-light', label: 'Light', icon: 'sun' },
  { value: 'boilerplate-dark', label: 'Dark', icon: 'moon' },
  { value: 'custom-theme', label: 'Custom', icon: 'palette' },
];

const handleThemeChange = (theme: string) => {
  console.log('Theme changed to:', theme);
  localStorage.setItem('theme', theme);
};
</script>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `'boilerplate-light'` | Current theme |
| `themes` | `array` | `[]` | Available themes |
| `variant` | `string` | `'toggle'` | Controller variant |

## Events

All Actions components emit standard Vue events:

### Button Events

```vue
<template>
  <BpButton 
    @click="handleClick"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    Click me
  </BpButton>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log('Button clicked');
};

const handleFocus = () => {
  console.log('Button focused');
};

const handleBlur = () => {
  console.log('Button lost focus');
};
</script>
```

### Modal Events

```vue
<template>
  <BpModal 
    v-model="showModal"
    @open="handleOpen"
    @close="handleClose"
  >
    Modal content
  </BpModal>
</template>

<script setup lang="ts">
const showModal = ref(false);

const handleOpen = () => {
  console.log('Modal opened');
};

const handleClose = () => {
  console.log('Modal closed');
};
</script>
```

## Accessibility

All Actions components include proper accessibility features:

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **ARIA Labels**: Proper ARIA attributes for screen readers
- **Focus Management**: Automatic focus management for modals
- **Color Contrast**: Meets WCAG 2.1 AA standards

## Best Practices

### 1. Button Usage

- Use primary buttons for main actions
- Use secondary buttons for alternative actions
- Use ghost/outline buttons for less important actions
- Provide loading states for async operations

### 2. Modal Usage

- Use modals sparingly for important actions
- Provide clear titles and descriptions
- Include proper action buttons
- Handle keyboard navigation (Escape to close)

### 3. Dropdown Usage

- Use clear, descriptive labels
- Group related items together
- Provide keyboard shortcuts when possible
- Handle focus management properly

### 4. Theme Switching

- Remember user preferences
- Provide smooth transitions
- Support system theme detection
- Test all themes thoroughly

## Next Steps

- [Data Display Components](data-display.md) - Information presentation components
- [Data Input Components](data-input.md) - Form and input components
- [API Reference](../api/) - Complete component API documentation
