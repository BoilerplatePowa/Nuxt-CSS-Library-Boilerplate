import { InputType, Size, Variant, IconName, MaskType } from '../../../../../../../../src/shared/types.d';
interface InputProps {
    name?: string;
    label?: string;
    placeholder?: string;
    helpText?: string;
    type?: InputType;
    size?: Size;
    variant?: Variant;
    leftIcon?: IconName | undefined;
    rightIcon?: IconName | undefined;
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;
    maxlength?: number;
    showCharCount?: boolean;
    ariaDescribedby?: string;
    rules?: any;
    mask?: any;
    maskType?: MaskType;
}
type __VLS_Props = InputProps;
type __VLS_PublicProps = {
    modelValue?: string;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    input: (event: Event) => any;
    "update:modelValue": (value: string) => any;
    change: (event: Event) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onInput?: ((event: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onChange?: ((event: Event) => any) | undefined;
}>, {
    name: string;
    size: Size;
    type: InputType;
    required: boolean;
    mask: any;
    variant: Variant;
    disabled: boolean;
    ariaDescribedby: string;
    label: string;
    placeholder: string;
    readonly: boolean;
    helpText: string;
    leftIcon: "map" | "filter" | "file" | "radio" | "search" | "info" | "heart" | "star" | "settings" | "user" | "home" | "mail" | "phone" | "calendar" | "clock" | "map-pin" | "download" | "upload" | "edit" | "delete" | "plus" | "minus" | "check" | "x" | "arrow-left" | "arrow-right" | "arrow-up" | "arrow-down" | "menu" | "close" | "alert-circle" | "check-circle" | "x-circle" | "help-circle" | "eye" | "eye-off" | "lock" | "unlock" | "zap" | "chevron-down" | "chevron-up" | "chevron-left" | "chevron-right" | "sort-asc" | "sort-desc" | "refresh-cw" | "rotate-ccw" | "rotate-cw" | "zoom-in" | "zoom-out" | "maximize" | "minimize" | "external-link" | "link" | "copy" | "share" | "bookmark" | "flag" | "thumbs-up" | "thumbs-down" | "message-circle" | "message-square" | "bell" | "shield" | "award" | "gift" | "shopping-cart" | "credit-card" | "dollar-sign" | "percent" | "trending-up" | "trending-down" | "activity" | "bar-chart" | "pie-chart" | "line-chart" | "database" | "server" | "monitor" | "smartphone" | "tablet" | "laptop" | "printer" | "camera" | "video" | "music" | "folder" | "archive" | "trash-2" | "save" | "download-cloud" | "upload-cloud" | "cloud" | "wifi" | "bluetooth" | "battery" | "power" | "volume" | "volume1" | "volume2" | "volume-x" | "mic" | "mic-off" | "headphones" | "speaker" | "tv" | "gamepad-2" | "mouse" | "keyboard" | "hard-drive" | "cpu" | "thermometer" | "droplets" | "sun" | "moon" | "cloud-rain" | "cloud-snow" | "wind" | "umbrella" | "snowflake" | "flame" | "sparkles" | "ice-cream" | "heart-off" | "star-off" | "settings-2" | "users" | "building" | "navigation" | "globe" | "mail-open" | "phone-call" | "phone-incoming" | "phone-outgoing" | "calendar-days" | "calendar-range" | "clock-1" | "clock-2" | "clock-3" | "clock-4" | "clock-5" | "clock-6" | "clock-7" | "clock-8" | "clock-9" | "clock-10" | "clock-11" | "clock-12" | "map-pin-off" | "navigation-2" | "navigation-off" | "edit-2" | "edit-3" | "trash" | "plus-circle" | "minus-circle" | "x-square" | "alert-triangle" | "alert-octagon";
    rightIcon: "map" | "filter" | "file" | "radio" | "search" | "info" | "heart" | "star" | "settings" | "user" | "home" | "mail" | "phone" | "calendar" | "clock" | "map-pin" | "download" | "upload" | "edit" | "delete" | "plus" | "minus" | "check" | "x" | "arrow-left" | "arrow-right" | "arrow-up" | "arrow-down" | "menu" | "close" | "alert-circle" | "check-circle" | "x-circle" | "help-circle" | "eye" | "eye-off" | "lock" | "unlock" | "zap" | "chevron-down" | "chevron-up" | "chevron-left" | "chevron-right" | "sort-asc" | "sort-desc" | "refresh-cw" | "rotate-ccw" | "rotate-cw" | "zoom-in" | "zoom-out" | "maximize" | "minimize" | "external-link" | "link" | "copy" | "share" | "bookmark" | "flag" | "thumbs-up" | "thumbs-down" | "message-circle" | "message-square" | "bell" | "shield" | "award" | "gift" | "shopping-cart" | "credit-card" | "dollar-sign" | "percent" | "trending-up" | "trending-down" | "activity" | "bar-chart" | "pie-chart" | "line-chart" | "database" | "server" | "monitor" | "smartphone" | "tablet" | "laptop" | "printer" | "camera" | "video" | "music" | "folder" | "archive" | "trash-2" | "save" | "download-cloud" | "upload-cloud" | "cloud" | "wifi" | "bluetooth" | "battery" | "power" | "volume" | "volume1" | "volume2" | "volume-x" | "mic" | "mic-off" | "headphones" | "speaker" | "tv" | "gamepad-2" | "mouse" | "keyboard" | "hard-drive" | "cpu" | "thermometer" | "droplets" | "sun" | "moon" | "cloud-rain" | "cloud-snow" | "wind" | "umbrella" | "snowflake" | "flame" | "sparkles" | "ice-cream" | "heart-off" | "star-off" | "settings-2" | "users" | "building" | "navigation" | "globe" | "mail-open" | "phone-call" | "phone-incoming" | "phone-outgoing" | "calendar-days" | "calendar-range" | "clock-1" | "clock-2" | "clock-3" | "clock-4" | "clock-5" | "clock-6" | "clock-7" | "clock-8" | "clock-9" | "clock-10" | "clock-11" | "clock-12" | "map-pin-off" | "navigation-2" | "navigation-off" | "edit-2" | "edit-3" | "trash" | "plus-circle" | "minus-circle" | "x-square" | "alert-triangle" | "alert-octagon";
    maxlength: number;
    showCharCount: boolean;
    rules: any;
    maskType: MaskType;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
export default _default;
