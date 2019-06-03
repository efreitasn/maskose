import { MaskoseMask } from '../mask';
import { MaskoseMaskChar } from '../mask/chars';

export type MaskoseBoost<T extends (MaskoseMaskChar | MaskoseMask)> = (val: T) => T;