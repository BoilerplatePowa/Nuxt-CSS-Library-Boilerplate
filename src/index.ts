// Main module export
export { default } from './module';

// Export types and interfaces
export type { ModuleOptions } from './module';
export { COMPONENT_CATEGORIES, CSS_FILES } from './module';

// Export individual components for manual imports
export { default as Button } from './components/Actions/Button.vue';
export { default as Dropdown } from './components/Actions/Dropdown.vue';
export { default as Modal } from './components/Actions/Modal.vue';
export { default as Swap } from './components/Actions/Swap.vue';
export { default as ThemeController } from './components/Actions/ThemeController.vue';

// DataDisplay components
export { default as Accordion } from './components/DataDisplay/Accordion.vue';
export { default as Avatar } from './components/DataDisplay/Avatar.vue';
export { default as Badge } from './components/DataDisplay/Badge.vue';
export { default as Card } from './components/DataDisplay/Card.vue';
export { default as Carousel } from './components/DataDisplay/Carousel.vue';
export { default as ChatBubble } from './components/DataDisplay/ChatBubble.vue';
export { default as Collapse } from './components/DataDisplay/Collapse.vue';
export { default as Countdown } from './components/DataDisplay/Countdown.vue';
export { default as Kbd } from './components/DataDisplay/Kbd.vue';
export { default as List } from './components/DataDisplay/List.vue';
export { default as Stat } from './components/DataDisplay/Stat.vue';
export { default as Status } from './components/DataDisplay/Status.vue';
export { default as StatusBox } from './components/DataDisplay/StatusBox.vue';
export { default as Table } from './components/DataDisplay/Table.vue';
export { default as Tabs } from './components/DataDisplay/Tabs.vue';
export { default as TextDiff } from './components/DataDisplay/TextDiff.vue';
export { default as Timeline } from './components/DataDisplay/Timeline.vue';

// DataInput components
export { default as Calendar } from './components/DataInput/Calendar.vue';
export { default as Checkbox } from './components/DataInput/Checkbox.vue';
export { default as Fieldset } from './components/DataInput/Fieldset.vue';
export { default as FileInput } from './components/DataInput/FileInput.vue';
export { default as Filter } from './components/DataInput/Filter.vue';
export { default as FormWizard } from './components/DataInput/FormWizard.vue';
export { default as Input } from './components/DataInput/Input.vue';
export { default as Label } from './components/DataInput/Label.vue';
export { default as PhoneInput } from './components/DataInput/PhoneInput.vue';
export { default as Radio } from './components/DataInput/Radio.vue';
export { default as Range } from './components/DataInput/Range.vue';
export { default as Rating } from './components/DataInput/Rating.vue';
export { default as Select } from './components/DataInput/Select.vue';
export { default as Textarea } from './components/DataInput/Textarea.vue';
export { default as Toggle } from './components/DataInput/Toggle.vue';
export { default as Validator } from './components/DataInput/Validator.vue';

// Feedback components
export { default as Alert } from './components/Feedback/Alert.vue';
export { default as Loading } from './components/Feedback/Loading.vue';
export { default as Progress } from './components/Feedback/Progress.vue';
export { default as RadialProgress } from './components/Feedback/RadialProgress.vue';
export { default as Skeleton } from './components/Feedback/Skeleton.vue';
export { default as Toast } from './components/Feedback/Toast.vue';
export { default as ToastContainer } from './components/Feedback/ToastContainer.vue';
export { default as Tooltip } from './components/Feedback/Tooltip.vue';

// Icons components
export { default as Icon } from './components/Icons/Icon.vue';

// Layout components
export { default as Divider } from './components/Layout/Divider.vue';
export { default as Drawer } from './components/Layout/Drawer.vue';
export { default as Footer } from './components/Layout/Footer.vue';
export { default as Hero } from './components/Layout/Hero.vue';
export { default as Indicator } from './components/Layout/Indicator.vue';
export { default as Join } from './components/Layout/Join.vue';
export { default as Mask } from './components/Layout/Mask.vue';
export { default as Stack } from './components/Layout/Stack.vue';

// Mockup components
export { default as BrowserMockup } from './components/Mockup/BrowserMockup.vue';
export { default as CodeMockup } from './components/Mockup/CodeMockup.vue';
export { default as PhoneMockup } from './components/Mockup/PhoneMockup.vue';
export { default as WindowMockup } from './components/Mockup/WindowMockup.vue';

// Navigation components
export { default as Breadcrumbs } from './components/Navigation/Breadcrumbs.vue';
export { default as Dock } from './components/Navigation/Dock.vue';
export { default as Link } from './components/Navigation/Link.vue';
export { default as Menu } from './components/Navigation/Menu.vue';
export { default as Navbar } from './components/Navigation/Navbar.vue';
export { default as Pagination } from './components/Navigation/Pagination.vue';
export { default as Steps } from './components/Navigation/Steps.vue';

// Export composables
export { useToast } from './components/Feedback/useToast';

// Export shared types
export * from './shared/types';

// Category-based exports
export * from './components/Actions';
export * from './components/DataDisplay';
export * from './components/DataInput';
export * from './components/Feedback';
export * from './components/Icons';
export * from './components/Layout';
export * from './components/Mockup';
export * from './components/Navigation';
