import { MaskoseChar } from '../../chars';
import primitiveMaskoseCharToRegExpStr from '../../chars/utils/primitiveToRegExpStr';
import { MASKOSE_CHAR_REPEAT_TYPE } from '../../chars/nonPrimitives/repeat';
import { MASKOSE_CHAR_PREDICATE_FN_TYPE } from '../../chars/nonPrimitives/predicateFn';
import { MaskoseMaskContentItem } from '../..';
import isPrimitiveChar from '../../chars/utils/isPrimitive';

export default function charsToMaskContentItems(chars: MaskoseChar[]): MaskoseMaskContentItem[] {
  const contentItems: MaskoseMaskContentItem[] = [];

  chars.forEach(char => {
    if (isPrimitiveChar(char)) {
      contentItems.push({
        primitive: char,
        regExpStr: primitiveMaskoseCharToRegExpStr(char)
      });
    } else if (char.type === MASKOSE_CHAR_REPEAT_TYPE) {
      for (let i = 0; i < char.n; i++) {
        contentItems.push({
          primitive: char.primitive,
          regExpStr: primitiveMaskoseCharToRegExpStr(char.primitive)
        });
      }
    } else if (char.type === MASKOSE_CHAR_PREDICATE_FN_TYPE) {
      contentItems.push({
        primitive: char.primitive,
        predicateFn: char.fn,
        regExpStr: primitiveMaskoseCharToRegExpStr(char.primitive)
      });
    }
  });

  return contentItems;
}