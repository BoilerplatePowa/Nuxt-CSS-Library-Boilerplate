// Export Nuxt plugin
export { default } from './plugin/index.js';

// Export components from their respective directories
export { default as Button } from './components/Actions/Button.vue';
export { default as Card } from './components/DataDisplay/Card.vue';
export { default as Input } from './components/DataInput/Input.vue';
export { default as Modal } from './components/Actions/Modal.vue';
export { default as Toast } from './components/Feedback/Toast.vue';

// Export types
export type { ModuleOptions } from './plugin/index.js';

// Export Tailwind configurations
export { tailwindConfig, daisyuiConfig, extendTailwindConfig } from './tailwind.js';

// Export Tailwind tokens (for compatibility)
export const tailwindTokens = {
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    },
    secondary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617',
    },
    accent: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef',
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75',
      950: '#4a044e',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '4xl': '2rem',
  },
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
};

// Export DaisyUI themes
export const daisyuiThemes = {
  'boilerplate-light': {
    primary: '#3b82f6',
    'primary-focus': '#2563eb',
    'primary-content': '#ffffff',
    secondary: '#64748b',
    'secondary-focus': '#475569',
    'secondary-content': '#ffffff',
    accent: '#d946ef',
    'accent-focus': '#c026d3',
    'accent-content': '#ffffff',
    neutral: '#1e293b',
    'neutral-focus': '#0f172a',
    'neutral-content': '#ffffff',
    'base-100': '#ffffff',
    'base-200': '#f8fafc',
    'base-300': '#f1f5f9',
    'base-content': '#1e293b',
    info: '#0ea5e9',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  },
  'boilerplate-dark': {
    primary: '#60a5fa',
    'primary-focus': '#3b82f6',
    'primary-content': '#0f172a',
    secondary: '#94a3b8',
    'secondary-focus': '#64748b',
    'secondary-content': '#0f172a',
    accent: '#e879f9',
    'accent-focus': '#d946ef',
    'accent-content': '#0f172a',
    neutral: '#e2e8f0',
    'neutral-focus': '#cbd5e1',
    'neutral-content': '#0f172a',
    'base-100': '#0f172a',
    'base-200': '#1e293b',
    'base-300': '#334155',
    'base-content': '#f8fafc',
    info: '#38bdf8',
    success: '#34d399',
    warning: '#fbbf24',
    error: '#f87171',
  },
};
