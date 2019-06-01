import { MaskoseMask } from '../../mask';
import { MaskoseMaskChar } from '../../mask/chars';

/**
 * Create a left-to-right non-endless mask with the provided characters
 */
export default function mkCreate(chars: MaskoseMaskChar[]): MaskoseMask {
  return {
    chars,
    endless: false,
    direction: 'left-to-right'
  };
}