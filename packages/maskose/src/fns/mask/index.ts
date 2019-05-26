import { MaskoseChar } from '../../chars';
import charsToMaskContentItems from './charsToMaskContentItems';
import { MaskoseMaskIterateContentOptions, MaskoseMask } from '../..';

export default function mkMask(...maskoseChars: MaskoseChar[]): MaskoseMask {
  const content = charsToMaskContentItems(maskoseChars);

  return {
    content,
    makeContentIterator: function* (options: MaskoseMaskIterateContentOptions) {
      const contentArr = options.reversed ? [...content].reverse() : content;

      for (const contentItem of contentArr) {
        if (
          !contentItem.predicateFn ||
          contentItem.predicateFn({
            value: options.value
          })
        ) {
          yield contentItem;
        }
      }
    }
  };
}