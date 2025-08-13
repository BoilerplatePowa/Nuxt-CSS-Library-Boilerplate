export { default } from './plugin/index.js';
export { default as Button } from './components/Button.vue';
export { default as Card } from './components/Card.vue';
export { default as Input } from './components/Input.vue';
export { default as Modal } from './components/Modal.vue';
export { default as Toast } from './components/Toast.vue';
export type { ModuleOptions } from './plugin/index.js';
export { tailwindConfig, daisyuiConfig, extendTailwindConfig } from './tailwind.js';
export declare const tailwindTokens: {
    colors: {
        primary: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
            950: string;
        };
        secondary: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
            950: string;
        };
        accent: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
            950: string;
        };
    };
    spacing: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
    };
    borderRadius: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '4xl': string;
    };
    fontFamily: {
        sans: string[];
        mono: string[];
    };
};
export declare const daisyuiThemes: {
    'boilerplate-light': {
        primary: string;
        'primary-focus': string;
        'primary-content': string;
        secondary: string;
        'secondary-focus': string;
        'secondary-content': string;
        accent: string;
        'accent-focus': string;
        'accent-content': string;
        neutral: string;
        'neutral-focus': string;
        'neutral-content': string;
        'base-100': string;
        'base-200': string;
        'base-300': string;
        'base-content': string;
        info: string;
        success: string;
        warning: string;
        error: string;
    };
    'boilerplate-dark': {
        primary: string;
        'primary-focus': string;
        'primary-content': string;
        secondary: string;
        'secondary-focus': string;
        'secondary-content': string;
        accent: string;
        'accent-focus': string;
        'accent-content': string;
        neutral: string;
        'neutral-focus': string;
        'neutral-content': string;
        'base-100': string;
        'base-200': string;
        'base-300': string;
        'base-content': string;
        info: string;
        success: string;
        warning: string;
        error: string;
    };
};
