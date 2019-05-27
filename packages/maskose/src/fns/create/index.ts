import { MaskoseChar } from '../../char';
import charsToMaskContentItems from './charsToMaskContentItems';
import { MaskoseMask } from '../..';

export default function mkCreate(maskoseChars: MaskoseChar[]): MaskoseMask {
  const content = charsToMaskContentItems(maskoseChars);

  return {
    content,
    endless: false,
    rightToLeft: false
  };
}