export interface ModuleOptions {
    prefix?: string;
    components?: boolean;
    css?: boolean;
}
declare const module: import('@nuxt/schema').NuxtModule<ModuleOptions, ModuleOptions, false>;
export default module;
