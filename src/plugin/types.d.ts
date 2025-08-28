declare module '@nuxt/schema' {
  interface NuxtConfig {
    designSystem?: {
      prefix?: string;
      components?: boolean | string[];
      css?: boolean;
      composables?: boolean;
    };
  }
}

declare module 'nuxt/schema' {
  interface RuntimeConfig {
    public: {
      designSystem: {
        prefix: string;
        components: boolean | string[];
        css: boolean;
        composables: boolean;
      };
    };
  }
}

// Component type declarations for better TypeScript support
declare module 'vue' {
  interface GlobalComponents {
    // Actions
    BpButton: typeof import('../components/Actions/Button.vue')['default'];
    BpDropdown: typeof import('../components/Actions/Dropdown.vue')['default'];
    BpModal: typeof import('../components/Actions/Modal.vue')['default'];
    BpSwap: typeof import('../components/Actions/Swap.vue')['default'];
    BpThemeController: typeof import('../components/Actions/ThemeController.vue')['default'];

    // DataDisplay
    BpAccordion: typeof import('../components/DataDisplay/Accordion.vue')['default'];
    BpAvatar: typeof import('../components/DataDisplay/Avatar.vue')['default'];
    BpBadge: typeof import('../components/DataDisplay/Badge.vue')['default'];
    BpCard: typeof import('../components/DataDisplay/Card.vue')['default'];
    BpCarousel: typeof import('../components/DataDisplay/Carousel.vue')['default'];
    BpChatBubble: typeof import('../components/DataDisplay/ChatBubble.vue')['default'];
    BpCollapse: typeof import('../components/DataDisplay/Collapse.vue')['default'];
    BpCountdown: typeof import('../components/DataDisplay/Countdown.vue')['default'];
    BpKbd: typeof import('../components/DataDisplay/Kbd.vue')['default'];
    BpList: typeof import('../components/DataDisplay/List.vue')['default'];
    BpStat: typeof import('../components/DataDisplay/Stat.vue')['default'];
    BpStatus: typeof import('../components/DataDisplay/Status.vue')['default'];
    BpStatusBox: typeof import('../components/DataDisplay/StatusBox.vue')['default'];
    BpTable: typeof import('../components/DataDisplay/Table.vue')['default'];
    BpTabs: typeof import('../components/DataDisplay/Tabs.vue')['default'];
    BpTextDiff: typeof import('../components/DataDisplay/TextDiff.vue')['default'];
    BpTimeline: typeof import('../components/DataDisplay/Timeline.vue')['default'];

    // DataInput
    BpCalendar: typeof import('../components/DataInput/Calendar.vue')['default'];
    BpCheckbox: typeof import('../components/DataInput/Checkbox.vue')['default'];
    BpFieldset: typeof import('../components/DataInput/Fieldset.vue')['default'];
    BpFileInput: typeof import('../components/DataInput/FileInput.vue')['default'];
    BpFilter: typeof import('../components/DataInput/Filter.vue')['default'];
    BpFormWizard: typeof import('../components/DataInput/FormWizard.vue')['default'];
    BpInput: typeof import('../components/DataInput/Input.vue')['default'];
    BpLabel: typeof import('../components/DataInput/Label.vue')['default'];
    BpPhoneInput: typeof import('../components/DataInput/PhoneInput.vue')['default'];
    BpRadio: typeof import('../components/DataInput/Radio.vue')['default'];
    BpRange: typeof import('../components/DataInput/Range.vue')['default'];
    BpRating: typeof import('../components/DataInput/Rating.vue')['default'];
    BpSelect: typeof import('../components/DataInput/Select.vue')['default'];
    BpTextarea: typeof import('../components/DataInput/Textarea.vue')['default'];
    BpToggle: typeof import('../components/DataInput/Toggle.vue')['default'];
    BpValidator: typeof import('../components/DataInput/Validator.vue')['default'];

    // Feedback
    BpAlert: typeof import('../components/Feedback/Alert.vue')['default'];
    BpLoading: typeof import('../components/Feedback/Loading.vue')['default'];
    BpProgress: typeof import('../components/Feedback/Progress.vue')['default'];
    BpRadialProgress: typeof import('../components/Feedback/RadialProgress.vue')['default'];
    BpSkeleton: typeof import('../components/Feedback/Skeleton.vue')['default'];
    BpToast: typeof import('../components/Feedback/Toast.vue')['default'];
    BpToastContainer: typeof import('../components/Feedback/ToastContainer.vue')['default'];
    BpTooltip: typeof import('../components/Feedback/Tooltip.vue')['default'];

    // Icons
    BpIcon: typeof import('../components/Icons/Icon.vue')['default'];

    // Layout
    BpDivider: typeof import('../components/Layout/Divider.vue')['default'];
    BpDrawer: typeof import('../components/Layout/Drawer.vue')['default'];
    BpFooter: typeof import('../components/Layout/Footer.vue')['default'];
    BpHero: typeof import('../components/Layout/Hero.vue')['default'];
    BpIndicator: typeof import('../components/Layout/Indicator.vue')['default'];
    BpJoin: typeof import('../components/Layout/Join.vue')['default'];
    BpMask: typeof import('../components/Layout/Mask.vue')['default'];
    BpStack: typeof import('../components/Layout/Stack.vue')['default'];

    // Mockup
    BpBrowserMockup: typeof import('../components/Mockup/BrowserMockup.vue')['default'];
    BpCodeMockup: typeof import('../components/Mockup/CodeMockup.vue')['default'];
    BpPhoneMockup: typeof import('../components/Mockup/PhoneMockup.vue')['default'];
    BpWindowMockup: typeof import('../components/Mockup/WindowMockup.vue')['default'];

    // Navigation
    BpBreadcrumbs: typeof import('../components/Navigation/Breadcrumbs.vue')['default'];
    BpDock: typeof import('../components/Navigation/Dock.vue')['default'];
    BpLink: typeof import('../components/Navigation/Link.vue')['default'];
    BpMenu: typeof import('../components/Navigation/Menu.vue')['default'];
    BpNavbar: typeof import('../components/Navigation/Navbar.vue')['default'];
    BpPagination: typeof import('../components/Navigation/Pagination.vue')['default'];
    BpSteps: typeof import('../components/Navigation/Steps.vue')['default'];
  }
}

// Auto-import composables
declare global {
  const useToast: typeof import('../components/Feedback/useToast')['useToast'];
}

export {};
