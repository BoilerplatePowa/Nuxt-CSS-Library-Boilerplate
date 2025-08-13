import { defineNuxtModule, addComponent, createResolver } from '@nuxt/kit';

export interface ModuleOptions {
  prefix?: string;
  components?: boolean;
  css?: boolean;
}

const module = defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@boilerplatepowa/nuxt-design-system',
    configKey: 'designSystem',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults: {
    prefix: 'Bp',
    components: true,
    css: true,
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    // Module configuration
    nuxt.options.runtimeConfig.public.designSystem = {
      prefix: options.prefix,
      components: options.components,
      css: options.css,
    };

    // Automatic component registration
    if (options.components) {
      const components = [
        { name: 'Button', file: 'Button.vue' },
        { name: 'Card', file: 'Card.vue' },
        { name: 'Input', file: 'Input.vue' },
        { name: 'Modal', file: 'Modal.vue' },
        { name: 'Toast', file: 'Toast.vue' },
      ];

      components.forEach(({ name, file }) => {
        addComponent({
          name: `${options.prefix}${name}`,
          filePath: resolve(`./components/${file}`),
          global: true,
        });
      });
    }

    // Add global CSS
    if (options.css) {
      nuxt.options.css.push(resolve('./assets/css/main.css'));
    }
  },
});

export default module;
