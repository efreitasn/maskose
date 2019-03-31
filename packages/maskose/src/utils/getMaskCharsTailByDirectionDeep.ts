import { MaskoseMaskDirection } from '../mask';
import getMaskCharsTailByDirection from './getMaskCharsTailByDirection';
import { MASKOSE_CHAR_GROUP_TYPE, MaskoseCharGroup } from '../mask/chars/group';
import { MaskoseChar } from '../mask/chars';

/**
 * Like getMaskCharsTailByDirection, but never returns a
 * group character
 */
export default function getMaskCharsTailByDirectionDeep(
  maskDirection: MaskoseMaskDirection,
  maskChars: MaskoseChar[]
): Exclude<MaskoseChar, MaskoseCharGroup> {
  const tail = getMaskCharsTailByDirection(
    maskDirection,
    maskChars
  );

  if (tail.type === MASKOSE_CHAR_GROUP_TYPE) {
    return getMaskCharsTailByDirectionDeep(
      maskDirection,
      tail.chars
    );
  }

  return tail;
}