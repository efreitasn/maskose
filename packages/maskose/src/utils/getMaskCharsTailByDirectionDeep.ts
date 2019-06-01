import { MaskoseMaskDirection } from '../mask';
import getMaskCharsTailByDirection from './getMaskCharsTailByDirection';
import { MASKOSE_CHAR_GROUP_TYPE, MaskoseMaskCharGroup } from '../mask/chars/group';
import { MaskoseMaskChar } from '../mask/chars';

/**
 * Like getMaskCharsTailByDirection, but never returns a
 * group character
 */
export default function getMaskCharsTailByDirectionDeep(
  maskDirection: MaskoseMaskDirection,
  maskChars: MaskoseMaskChar[]
): Exclude<MaskoseMaskChar, MaskoseMaskCharGroup> {
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