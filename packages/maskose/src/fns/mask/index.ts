import { MaskoseChar } from '../../chars';
import charsToMaskContentItems from './charsToMaskContentItems';
import { MaskoseMask } from '../..';

export default function mkMask(maskoseChars: MaskoseChar[]): MaskoseMask {
  const content = charsToMaskContentItems(maskoseChars);

  return {
    content,
    endless: false,
    rightToLeft: false
  };
}