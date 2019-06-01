import { MaskoseMaskDirection } from '../../mask';
import { MaskoseMaskChar } from '../../mask/chars';
import { MaskoseMaskCharGroup, MASKOSE_CHAR_GROUP_TYPE } from '../../mask/chars/group';
import getMaskCharsTailByDirection from '../getMaskCharsTailByDirection';

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