import { IconName, Size, ThemeColor } from '../../../../../../../../src/shared/types.d';
interface Props {
    name: IconName;
    size?: Size | number;
    strokeWidth?: number;
    color?: ThemeColor | string;
    class?: string;
    ariaLabel?: string;
    ariaHidden?: boolean;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    size: Size | number;
    strokeWidth: number;
    ariaHidden: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
