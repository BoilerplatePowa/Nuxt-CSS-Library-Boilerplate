import { Variant } from '../../../../../../../../src/shared/types.d';
interface StatusProps {
    variant?: Variant;
    animation?: 'pulse' | 'bounce' | 'none';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    ariaLabel?: string;
}
declare const _default: import('vue').DefineComponent<StatusProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<StatusProps> & Readonly<{}>, {
    ariaLabel: string;
    variant: Variant;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
