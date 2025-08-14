interface Props {
    src?: string;
    alt?: string;
    placeholder?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    shape?: 'circle' | 'square';
    online?: boolean;
    ring?: boolean;
    ringColor?: 'primary' | 'secondary' | 'accent' | 'neutral';
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    shape: "circle" | "square";
    ring: boolean;
    ringColor: "primary" | "secondary" | "accent" | "neutral";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
