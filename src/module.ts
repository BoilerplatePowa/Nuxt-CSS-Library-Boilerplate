import { defineNuxtModule, addComponent, createResolver, addImports } from '@nuxt/kit';

export interface ModuleOptions {
  prefix?: string;
  components?: boolean | string[];
  css?: boolean;
  composables?: boolean;
}

// Component categories for better organization
const COMPONENT_CATEGORIES = {
  Actions: ['Button', 'Dropdown', 'Modal', 'Swap', 'ThemeController'],
  DataDisplay: ['Accordion', 'Avatar', 'Badge', 'Card', 'Carousel', 'ChatBubble', 'Collapse', 'Countdown', 'Kbd', 'List', 'Stat', 'Status', 'StatusBox', 'Table', 'Tabs', 'TextDiff', 'Timeline'],
  DataInput: ['Calendar', 'Checkbox', 'Fieldset', 'FileInput', 'Filter', 'FormWizard', 'Input', 'Label', 'PhoneInput', 'Radio', 'Range', 'Rating', 'Select', 'Textarea', 'Toggle', 'Validator'],
  Feedback: ['Alert', 'Loading', 'Progress', 'RadialProgress', 'Skeleton', 'Toast', 'ToastContainer', 'Tooltip'],
  Icons: ['Icon'],
  Layout: ['Divider', 'Drawer', 'Footer', 'Hero', 'Indicator', 'Join', 'Mask', 'Stack'],
  Mockup: ['BrowserMockup', 'CodeMockup', 'PhoneMockup', 'WindowMockup'],
  Navigation: ['Breadcrumbs', 'Dock', 'Link', 'Menu', 'Navbar', 'Pagination', 'Steps'],
} as const;

// CSS files that should be loaded
const CSS_FILES = [
  'button.css',
  'carousel.css',
  'checkbox.css',
  'filter.css',
  'form-wizard.css',
  'list.css',
  'statusbox.css',
  'tabs.css',
  'textdiff.css',
  'timeline.css',
] as const;

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@boilerplatepowa/nuxt-design-system',
    configKey: 'designSystem',
    compatibility: {
      nuxt: '^4.0.0',
    },
  },
  defaults: {
    prefix: 'Bp',
    components: true,
    css: true,
    composables: true,
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    // Module configuration
    nuxt.options.runtimeConfig.public.designSystem = {
      prefix: options.prefix,
      components: options.components,
      css: options.css,
      composables: options.composables,
    };

    // Automatic component registration
    if (options.components) {
      const allowedComponents = Array.isArray(options.components) ? options.components : null;

      Object.entries(COMPONENT_CATEGORIES).forEach(([category, components]) => {
        components.forEach((componentName) => {
          // Skip if not in allowed components list (when components is an array)
          if (allowedComponents && !allowedComponents.includes(componentName)) {
            return;
          }

          addComponent({
            name: `${options.prefix}${componentName}`,
            filePath: resolve(`./components/${category}/${componentName}.vue`),
            global: true,
          });
        });
      });
    }

    // Add composables
    if (options.composables) {
      addImports([
        {
          name: 'useToast',
          from: resolve('./components/Feedback/useToast'),
        },
      ]);
    }

    // Add global CSS
    if (options.css) {
      // Add main CSS file
      nuxt.options.css.push(resolve('./assets/css/main.css'));
      
      // Add individual component CSS files
      CSS_FILES.forEach((cssFile) => {
        nuxt.options.css.push(resolve(`./assets/css/${cssFile}`));
      });
    }
  },
});

// Export types and constants for external use
export { COMPONENT_CATEGORIES, CSS_FILES };
