# Themes Guide

This guide covers the theme system and customization options for the **@boilerplatepowa/nuxt-design-system**.

## Built-in Themes

The design system includes two pre-built themes:

### Light Theme (Default)
- **Name:** `boilerplate-light`
- **Description:** Clean, modern light theme with excellent readability
- **Best for:** Professional applications, content-heavy sites

### Dark Theme
- **Name:** `boilerplate-dark`
- **Description:** Sophisticated dark theme with reduced eye strain
- **Best for:** Developer tools, night-time usage, modern applications

## Theme Switching

### HTML Attribute Method

The simplest way to switch themes is by changing the `data-theme` attribute on the `<html>` element:

```html
<!-- Light theme -->
<html data-theme="boilerplate-light">
  <!-- Your content -->
</html>

<!-- Dark theme -->
<html data-theme="boilerplate-dark">
  <!-- Your content -->
</html>
```

### JavaScript Theme Switching

```vue
<template>
  <div>
    <BpButton @click="setTheme('boilerplate-light')">
      Light Theme
    </BpButton>
    <BpButton @click="setTheme('boilerplate-dark')">
      Dark Theme
    </BpButton>
  </div>
</template>

<script setup lang="ts">
const setTheme = (theme: string) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

// Initialize theme on load
onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'boilerplate-light';
  setTheme(savedTheme);
});
</script>
```

### ThemeController Component

Use the built-in `ThemeController` component for automatic theme switching:

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
];

const handleThemeChange = (theme: string) => {
  console.log('Theme changed to:', theme);
  localStorage.setItem('theme', theme);
};
</script>
```

## Custom Theme Creation

### Creating a Custom Theme

You can create custom themes by extending the DaisyUI theme system:

```javascript
// tailwind.config.js
module.exports = {
  // ... other config
  daisyui: {
    themes: [
      // Built-in themes
      'boilerplate-light',
      'boilerplate-dark',
      
      // Custom theme
      {
        'my-custom-theme': {
          'primary': '#570df8',
          'primary-focus': '#4506cb',
          'primary-content': '#ffffff',
          'secondary': '#f000b8',
          'secondary-focus': '#bd0091',
          'secondary-content': '#ffffff',
          'accent': '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          'neutral': '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          'info': '#3abff8',
          'success': '#36d399',
          'warning': '#fbbd23',
          'error': '#f87272',
        },
      },
    ],
  },
};
```

### Advanced Custom Theme

For more complex themes, you can define additional CSS custom properties:

```javascript
// tailwind.config.js
module.exports = {
  daisyui: {
    themes: [
      {
        'corporate': {
          'primary': '#1e40af',
          'primary-focus': '#1e3a8a',
          'primary-content': '#ffffff',
          'secondary': '#64748b',
          'secondary-focus': '#475569',
          'secondary-content': '#ffffff',
          'accent': '#f59e0b',
          'accent-focus': '#d97706',
          'accent-content': '#ffffff',
          'neutral': '#1f2937',
          'neutral-focus': '#111827',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f8fafc',
          'base-300': '#e2e8f0',
          'base-content': '#1f2937',
          'info': '#0ea5e9',
          'success': '#10b981',
          'warning': '#f59e0b',
          'error': '#ef4444',
          
          // Custom properties
          '--rounded-box': '0.5rem',
          '--rounded-btn': '0.25rem',
          '--rounded-badge': '1.9rem',
          '--animation-btn': '0.25s',
          '--animation-input': '0.2s',
          '--btn-text-case': 'uppercase',
          '--btn-focus-scale': '0.95',
          '--border-btn': '1px',
          '--tab-border': '1px',
          '--tab-radius': '0.5rem',
        },
      },
    ],
  },
};
```

## CSS Custom Properties

### Available CSS Variables

The design system uses CSS custom properties for theming. You can override these in your custom CSS:

```css
/* Custom CSS */
:root {
  /* Primary colors */
  --p: 262 83% 58%; /* primary */
  --pc: 0 0% 100%; /* primary-content */
  
  /* Secondary colors */
  --s: 316 100% 74%; /* secondary */
  --sc: 0 0% 100%; /* secondary-content */
  
  /* Accent colors */
  --a: 175 84% 32%; /* accent */
  --ac: 0 0% 100%; /* accent-content */
  
  /* Neutral colors */
  --n: 218 18% 12%; /* neutral */
  --nc: 0 0% 100%; /* neutral-content */
  
  /* Base colors */
  --b1: 0 0% 100%; /* base-100 */
  --b2: 220 14% 96%; /* base-200 */
  --b3: 220 13% 91%; /* base-300 */
  --bc: 220 9% 46%; /* base-content */
  
  /* State colors */
  --in: 199 89% 48%; /* info */
  --su: 142 76% 36%; /* success */
  --wa: 38 92% 50%; /* warning */
  --er: 0 84% 60%; /* error */
  
  /* Component properties */
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: 0.2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
}
```

### Dynamic Theme Switching with CSS

You can also switch themes using CSS classes:

```css
/* themes.css */
.theme-light {
  --p: 262 83% 58%;
  --pc: 0 0% 100%;
  --s: 316 100% 74%;
  --sc: 0 0% 100%;
  --a: 175 84% 32%;
  --ac: 0 0% 100%;
  --n: 218 18% 12%;
  --nc: 0 0% 100%;
  --b1: 0 0% 100%;
  --b2: 220 14% 96%;
  --b3: 220 13% 91%;
  --bc: 220 9% 46%;
}

.theme-dark {
  --p: 262 83% 58%;
  --pc: 0 0% 100%;
  --s: 316 100% 74%;
  --sc: 0 0% 100%;
  --a: 175 84% 32%;
  --ac: 0 0% 100%;
  --n: 218 18% 12%;
  --nc: 0 0% 100%;
  --b1: 15 23% 4%;
  --b2: 15 23% 4%;
  --b3: 15 23% 4%;
  --bc: 220 13% 91%;
}
```

```vue
<template>
  <div :class="themeClass">
    <!-- Your content -->
  </div>
</template>

<script setup lang="ts">
const currentTheme = ref('light');

const themeClass = computed(() => `theme-${currentTheme.value}`);
</script>
```

## Theme Utilities

### useTheme Composable

Create a custom composable for theme management:

```typescript
// composables/useTheme.ts
export const useTheme = () => {
  const currentTheme = ref('boilerplate-light');
  
  const themes = [
    { value: 'boilerplate-light', label: 'Light', icon: 'sun' },
    { value: 'boilerplate-dark', label: 'Dark', icon: 'moon' },
  ];
  
  const setTheme = (theme: string) => {
    currentTheme.value = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };
  
  const toggleTheme = () => {
    const newTheme = currentTheme.value === 'boilerplate-light' 
      ? 'boilerplate-dark' 
      : 'boilerplate-light';
    setTheme(newTheme);
  };
  
  const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'boilerplate-light';
    setTheme(savedTheme);
  };
  
  return {
    currentTheme: readonly(currentTheme),
    themes,
    setTheme,
    toggleTheme,
    initializeTheme,
  };
};
```

### Usage Example

```vue
<template>
  <div>
    <BpButton @click="toggleTheme">
      {{ currentTheme === 'boilerplate-light' ? '🌙' : '☀️' }}
      {{ currentTheme === 'boilerplate-light' ? 'Dark' : 'Light' }} Mode
    </BpButton>
    
    <BpSelect v-model="currentTheme" :options="themeOptions" />
  </div>
</template>

<script setup lang="ts">
const { currentTheme, themes, setTheme, toggleTheme, initializeTheme } = useTheme();

const themeOptions = themes.map(theme => ({
  value: theme.value,
  label: theme.label,
}));

onMounted(() => {
  initializeTheme();
});
</script>
```

## System Theme Detection

### Automatic System Theme

Detect and follow the user's system theme preference:

```vue
<template>
  <div>
    <BpButton @click="setTheme('system')">
      System Theme
    </BpButton>
  </div>
</template>

<script setup lang="ts">
const setTheme = (theme: string) => {
  if (theme === 'system') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'boilerplate-dark'
      : 'boilerplate-light';
    document.documentElement.setAttribute('data-theme', systemTheme);
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
  localStorage.setItem('theme', theme);
};

// Listen for system theme changes
onMounted(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', (e) => {
    if (localStorage.getItem('theme') === 'system') {
      setTheme('system');
    }
  });
});
</script>
```

## Theme Best Practices

### 1. Consistent Color Usage

- Use semantic color names (primary, secondary, accent)
- Avoid hardcoded colors in components
- Test themes in both light and dark modes

### 2. Accessibility

- Ensure sufficient color contrast ratios
- Test with color blindness simulators
- Provide alternative themes for accessibility

### 3. Performance

- Use CSS custom properties for dynamic theming
- Avoid JavaScript-based theme switching when possible
- Cache theme preferences in localStorage

### 4. User Experience

- Provide smooth transitions between themes
- Remember user preferences
- Offer system theme detection

## Troubleshooting

### Common Theme Issues

1. **Theme Not Applying**
   ```javascript
   // Ensure the theme is properly set
   document.documentElement.setAttribute('data-theme', 'boilerplate-dark');
   ```

2. **Colors Not Updating**
   ```css
   /* Check if CSS custom properties are defined */
   :root {
     --p: 262 83% 58%; /* primary */
     --s: 316 100% 74%; /* secondary */
   }
   ```

3. **Flash of Wrong Theme**
   ```html
   <!-- Add theme to HTML before page loads -->
   <html data-theme="boilerplate-light">
   ```

## Next Steps

- [Component Documentation](../components/) - See how components adapt to themes
- [Configuration Guide](configuration.md) - Advanced theme configuration
- [API Reference](../api/) - Theme-related API documentation
