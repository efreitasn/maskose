import { MaskoseChar } from '../../char';
import { MaskoseMaskContentItem } from '../..';
import charToRegExpStr from '../../utils/charToRegExpStr';

export default function charsToMaskContentItems(chars: MaskoseChar[]): MaskoseMaskContentItem[] {
  const contentItems: MaskoseMaskContentItem[] = [];

  chars.forEach(char => {
    if (char.repetitions > 1) {
      for (let i = 0; i < char.repetitions; i++) {
        contentItems.push({
          char,
          predicateFn: char.predicateFn,
          regExpStr: charToRegExpStr(char)
        });
      }
    } else {
      contentItems.push({
        char,
        regExpStr: charToRegExpStr(char),
        predicateFn: char.predicateFn
      });
    }
  });

  return contentItems;
}