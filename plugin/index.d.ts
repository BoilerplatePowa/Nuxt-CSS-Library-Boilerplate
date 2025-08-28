export interface ModuleOptions {
    prefix?: string;
    components?: boolean | string[];
    css?: boolean;
    composables?: boolean;
}
declare const COMPONENT_CATEGORIES: {
    readonly Actions: readonly ["Button", "Dropdown", "Modal", "Swap", "ThemeController"];
    readonly DataDisplay: readonly ["Accordion", "Avatar", "Badge", "Card", "Carousel", "ChatBubble", "Collapse", "Countdown", "Kbd", "List", "Stat", "Status", "StatusBox", "Table", "Tabs", "TextDiff", "Timeline"];
    readonly DataInput: readonly ["Calendar", "Checkbox", "Fieldset", "FileInput", "Filter", "FormWizard", "Input", "Label", "PhoneInput", "Radio", "Range", "Rating", "Select", "Textarea", "Toggle", "Validator"];
    readonly Feedback: readonly ["Alert", "Loading", "Progress", "RadialProgress", "Skeleton", "Toast", "ToastContainer", "Tooltip"];
    readonly Icons: readonly ["Icon"];
    readonly Layout: readonly ["Divider", "Drawer", "Footer", "Hero", "Indicator", "Join", "Mask", "Stack"];
    readonly Mockup: readonly ["BrowserMockup", "CodeMockup", "PhoneMockup", "WindowMockup"];
    readonly Navigation: readonly ["Breadcrumbs", "Dock", "Link", "Menu", "Navbar", "Pagination", "Steps"];
};
declare const CSS_FILES: readonly ["button.css", "carousel.css", "checkbox.css", "filter.css", "form-wizard.css", "list.css", "statusbox.css", "tabs.css", "textdiff.css", "timeline.css"];
declare const module: import('@nuxt/schema').NuxtModule<ModuleOptions, ModuleOptions, false>;
export { COMPONENT_CATEGORIES, CSS_FILES };
export default module;
