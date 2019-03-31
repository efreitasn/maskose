import { MaskoseMask } from '../../mask';
import { MaskoseChar } from '../../mask/chars';

/**
 * Create a left-to-right non-endless mask with the provided characters
 * @param chars The mask's characters
 */
export default function mkCreate(chars: MaskoseChar[]): MaskoseMask {
  return {
    chars,
    endless: false,
    direction: 'left-to-right'
  };
}