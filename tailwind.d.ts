export declare const tailwindConfig: {
    theme: {
        extend: {
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
            fontFamily: {
                sans: string[];
                mono: string[];
            };
            spacing: {
                '18': string;
                '88': string;
                '128': string;
            };
            borderRadius: {
                '4xl': string;
            };
            animation: {
                'fade-in': string;
                'slide-up': string;
                'bounce-gentle': string;
            };
            keyframes: {
                fadeIn: {
                    '0%': {
                        opacity: string;
                    };
                    '100%': {
                        opacity: string;
                    };
                };
                slideUp: {
                    '0%': {
                        transform: string;
                        opacity: string;
                    };
                    '100%': {
                        transform: string;
                        opacity: string;
                    };
                };
                bounceGentle: {
                    '0%, 100%': {
                        transform: string;
                    };
                    '50%': {
                        transform: string;
                    };
                };
            };
        };
    };
};
export declare const daisyuiConfig: {
    themes: ({
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
        'boilerplate-dark'?: undefined;
    } | {
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
        'boilerplate-light'?: undefined;
    })[];
    darkTheme: string;
    base: boolean;
    styled: boolean;
    utils: boolean;
    prefix: string;
    logs: boolean;
    themeRoot: string;
};
export declare function extendTailwindConfig(userConfig: any): any;
