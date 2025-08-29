declare module '@boilerplatepowa/nuxt-design-system' {
  import type { NuxtModule } from '@nuxt/schema';

  export interface ModuleOptions {
    prefix?: string;
    components?: boolean | string[];
    css?: boolean;
    composables?: boolean;
  }

  export const COMPONENT_CATEGORIES: {
    Actions: string[];
    DataDisplay: string[];
    DataInput: string[];
    Feedback: string[];
    Icons: string[];
    Layout: string[];
    Mockup: string[];
    Navigation: string[];
  };

  export const CSS_FILES: string[];

  const module: NuxtModule<ModuleOptions>;
  export default module;
}

declare module '@boilerplatepowa/nuxt-design-system/module' {
  import type { NuxtModule } from '@nuxt/schema';
  import type { ModuleOptions } from '@boilerplatepowa/nuxt-design-system';

  export const COMPONENT_CATEGORIES: {
    Actions: string[];
    DataDisplay: string[];
    DataInput: string[];
    Feedback: string[];
    Icons: string[];
    Layout: string[];
    Mockup: string[];
    Navigation: string[];
  };

  export const CSS_FILES: string[];

  const module: NuxtModule<ModuleOptions>;
  export default module;
  export type { ModuleOptions };
}
