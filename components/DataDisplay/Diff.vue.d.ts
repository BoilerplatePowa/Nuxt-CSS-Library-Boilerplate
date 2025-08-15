interface DiffAction {
    label: string;
    variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
    size?: 'xs' | 'sm' | 'md';
    disabled?: boolean;
    handler?: () => void;
}
interface DiffLine {
    content: string;
    type?: 'added' | 'removed' | 'context' | 'info';
    oldLineNumber?: number | null;
    newLineNumber?: number | null;
    prefix?: string;
}
interface Props {
    oldText?: string;
    newText?: string;
    oldLines?: (string | DiffLine)[];
    newLines?: (string | DiffLine)[];
    unifiedLines?: DiffLine[];
    mode?: 'unified' | 'split';
    oldFileName?: string;
    newFileName?: string;
    showHeader?: boolean;
    showStats?: boolean;
    showLineNumbers?: boolean;
    highlightWords?: boolean;
    size?: 'sm' | 'md' | 'lg';
    actions?: DiffAction[];
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    actionClick: (action: DiffAction, event: Event) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onActionClick?: ((action: DiffAction, event: Event) => any) | undefined;
}>, {
    mode: "unified" | "split";
    size: "sm" | "md" | "lg";
    showHeader: boolean;
    showStats: boolean;
    showLineNumbers: boolean;
    highlightWords: boolean;
    actions: DiffAction[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
