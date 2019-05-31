import {
  MaskoseMaskDirection,
  MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT
} from '../../mask';
import { MaskoseChar } from '../../mask/chars';
import { MASKOSE_CHAR_LETTER_TYPE } from '../../mask/chars/letter';
import { MASKOSE_CHAR_SPECIFIC_TYPE } from '../../mask/chars/specific';
import { MASKOSE_CHAR_GROUP_TYPE } from '../../mask/chars/group';
import { MASKOSE_CHAR_TO_BE_PUT_TYPE } from '../../mask/chars/toBePut';
import doesMaskCharHaveMoreIterations from './doesMaskCharHaveMoreIterations';
import getMaskCharNextIteration from './getMaskCharNextIteration';
import concatMaskedValueByDirection from './concatMaskedValueByDirection';
import areValueLengthConditionsTrue from '../../utils/areValueLengthConditionsTrue';
import getMaskCharRepetitions from '../../utils/getMaskCharRepetitions';
import isMaskDirectionRightToLeft from '../../utils/isMaskDirectionRightToLeft';

interface MaskValueByTraverseState {
  // Mask chars
  readonly maskCharsByDirection: MaskoseChar[];
  readonly maskCharsByDirectionIndex: number;
  readonly maskCharCurrentIteration: number;
  // Value to be masked chars
  readonly valueToBeMaskedCharsByMaskDirection: string[];
  readonly valueToBeMaskedByMaskDirectionIndex: number;
  // Mask's info
  readonly direction: MaskoseMaskDirection;
  readonly endless: boolean;
  // Result
  readonly maskedValue: string;
  // Matching-related data
  readonly maskCharMatchNum: number;
  readonly maskCharDidntMatchNum: number;
  readonly valueToBeMaskedCharMatchNum: number;
  readonly valueToBeMaskedCharDidntMatchNum: number;
  readonly stopOnFirstMaskCharMatch: boolean;
  readonly stopOnFirstMaskCharDidntMatch: boolean;
  readonly stopOnFirstValueToBeMaskedCharMatch: boolean;
  readonly stopOnFirstValueToBeMaskedCharDidntMatch: boolean;
  // Others
  readonly isInEndlessMode: boolean;
};

export const defaultState: MaskValueByTraverseState = {
  maskCharsByDirection: [],
  maskCharsByDirectionIndex: 0,
  maskCharCurrentIteration: 0,
  valueToBeMaskedCharsByMaskDirection: [],
  valueToBeMaskedByMaskDirectionIndex: 0,
  direction: MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT,
  endless: false,
  maskedValue: '',
  maskCharMatchNum: 0,
  maskCharDidntMatchNum: 0,
  valueToBeMaskedCharMatchNum: 0,
  valueToBeMaskedCharDidntMatchNum: 0,
  stopOnFirstMaskCharMatch: false,
  stopOnFirstMaskCharDidntMatch: false,
  stopOnFirstValueToBeMaskedCharMatch: false,
  stopOnFirstValueToBeMaskedCharDidntMatch: true,
  isInEndlessMode: false
};

/**
 * Traverse the characters of a mask recursively.
 * 
 * If state.direction === MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT, it is assumed that
 * both state.maskCharsByDirection and state.valueToBeMaskedByMaskDirection are already
 * reversed.
 * 
 * state.maskCharMatchNum and state.maskCharDidntMatchNum doesn't include toBePut characters.
 * 
 * The only difference between maskChar{match,didntMatch}Num and valueToBeMaskedChar{match,didntMatch}Num
 * is that the former will be incremented only in the following scenarios:
 * * It's a group character and all of its repetitions and all of it characters are matched
 * * It's a oneOf character and all of its repetitions and at least one of its characters are matched
 * * If none of the above, only if all repetitions of a maskChar are matched  
 * 
 * And the latter will increment if the current valueToBeMaskedChar matches the current mask character.
 */
export default function maskValueByTraverse(
  state = defaultState
): MaskValueByTraverseState {
  const {
    maskCharsByDirection,
    maskCharsByDirectionIndex,
    maskCharCurrentIteration,
    valueToBeMaskedCharsByMaskDirection,
    valueToBeMaskedByMaskDirectionIndex,
    direction,
    endless,
    maskedValue,
    maskCharMatchNum,
    maskCharDidntMatchNum,
    valueToBeMaskedCharMatchNum,
    valueToBeMaskedCharDidntMatchNum,
    stopOnFirstMaskCharMatch,
    stopOnFirstMaskCharDidntMatch,
    stopOnFirstValueToBeMaskedCharMatch,
    stopOnFirstValueToBeMaskedCharDidntMatch,
    isInEndlessMode
  } = state;

  const rightToLeft = isMaskDirectionRightToLeft(direction);

  // Chars
  const maskChar = maskCharsByDirection[maskCharsByDirectionIndex];
  const nextMaskChar = maskCharsByDirection[maskCharsByDirectionIndex + 1];
  const valueToBeMaskedChar = valueToBeMaskedCharsByMaskDirection[valueToBeMaskedByMaskDirectionIndex];

  if (
    maskCharsByDirection.length === 0 ||
    maskCharsByDirection.length === 0 ||
    stopOnFirstValueToBeMaskedCharMatch && (valueToBeMaskedCharMatchNum > 0) ||
    stopOnFirstValueToBeMaskedCharDidntMatch && (valueToBeMaskedCharDidntMatchNum > 0) ||
    stopOnFirstMaskCharMatch && (maskCharMatchNum > 0) ||
    stopOnFirstMaskCharDidntMatch && (maskCharDidntMatchNum > 0) ||
    (
      !maskChar &&
      (
        !valueToBeMaskedChar ||
        !endless
      )
    ) ||
    (
      !valueToBeMaskedChar &&
      (
        maskChar.type != MASKOSE_CHAR_TO_BE_PUT_TYPE ||
        nextMaskChar
      )
    )
  ) {
    return state;
  }

  if (
    !maskChar &&
    valueToBeMaskedChar &&
    endless
  ) {
    return maskValueByTraverse({
      ...state,
      maskCharsByDirectionIndex: maskCharsByDirectionIndex - 1,
      isInEndlessMode: true
    });
  }

  if (!areValueLengthConditionsTrue(
    valueToBeMaskedCharsByMaskDirection.length,
    maskChar.valueToBeMaskedLengthConditions
  )) {
    return maskValueByTraverse({
      ...state,
      maskCharsByDirectionIndex: maskCharsByDirectionIndex + 1
    });
  }

  const maskCharRepetions = getMaskCharRepetitions(maskChar);
  const maskCharHasMoreIterations = doesMaskCharHaveMoreIterations(
    maskCharRepetions,
    maskCharCurrentIteration
  );

  if (maskChar.type === MASKOSE_CHAR_TO_BE_PUT_TYPE) {
    return maskValueByTraverse({
      ...state,
      maskedValue: concatMaskedValueByDirection(maskedValue, maskChar.char, direction),
      maskCharsByDirectionIndex: maskCharHasMoreIterations ?
        maskCharsByDirectionIndex :
        maskCharsByDirectionIndex + 1,
      maskCharCurrentIteration: getMaskCharNextIteration(maskCharRepetions, maskCharCurrentIteration)
    });
  }

  if (maskChar.type === MASKOSE_CHAR_GROUP_TYPE) {
    const groupMaskCharsByDirectionTraverseResult = maskValueByTraverse({
      ...state,
      stopOnFirstMaskCharMatch: false,
      stopOnFirstMaskCharDidntMatch: true,
      isInEndlessMode: false,
      endless: false,
      maskCharsByDirectionIndex: 0,
      maskCharCurrentIteration: 0,
      maskCharsByDirection: rightToLeft ?
        [...maskChar.chars].reverse() :
        maskChar.chars
    });

    return maskValueByTraverse({
      ...state,
      maskedValue: groupMaskCharsByDirectionTraverseResult.maskedValue,
      maskCharsByDirectionIndex: (isInEndlessMode || maskCharHasMoreIterations) ?
        maskCharsByDirectionIndex :
        maskCharsByDirectionIndex + 1,
      maskCharCurrentIteration: getMaskCharNextIteration(maskCharRepetions, maskCharCurrentIteration),
      valueToBeMaskedByMaskDirectionIndex: groupMaskCharsByDirectionTraverseResult.valueToBeMaskedByMaskDirectionIndex,
      valueToBeMaskedCharMatchNum: groupMaskCharsByDirectionTraverseResult.valueToBeMaskedCharMatchNum,
      valueToBeMaskedCharDidntMatchNum: groupMaskCharsByDirectionTraverseResult.valueToBeMaskedCharDidntMatchNum,
      maskCharMatchNum: (isInEndlessMode || maskCharHasMoreIterations) ? 
        maskCharMatchNum :
        (
          groupMaskCharsByDirectionTraverseResult.maskCharDidntMatchNum === 0 ?
            maskCharMatchNum + 1 :
            maskCharMatchNum
        ),
      maskCharDidntMatchNum: groupMaskCharsByDirectionTraverseResult.maskCharDidntMatchNum > 0 ?
        maskCharMatchNum + 1 :
        maskCharDidntMatchNum
    });
  }

  if (maskChar.type === MASKOSE_CHAR_LETTER_TYPE) {
    const match = maskChar.regExp.test(valueToBeMaskedChar);

    return maskValueByTraverse({
      ...state,
      valueToBeMaskedByMaskDirectionIndex: valueToBeMaskedByMaskDirectionIndex + 1,
      maskCharsByDirectionIndex: (isInEndlessMode || maskCharHasMoreIterations) ?
        maskCharsByDirectionIndex :
        maskCharsByDirectionIndex + 1,
      maskCharCurrentIteration: getMaskCharNextIteration(maskCharRepetions, maskCharCurrentIteration),
      maskedValue: match ?
        concatMaskedValueByDirection(maskedValue, valueToBeMaskedChar, direction) :
        maskedValue,
      maskCharMatchNum: (isInEndlessMode || maskCharHasMoreIterations) ?
        maskCharMatchNum :
        (match ? maskCharMatchNum + 1 : maskCharMatchNum),
      maskCharDidntMatchNum: match ?
        maskCharDidntMatchNum :
        (maskCharDidntMatchNum + 1),
      valueToBeMaskedCharMatchNum: match ? (valueToBeMaskedCharMatchNum + 1) : valueToBeMaskedCharMatchNum,
      valueToBeMaskedCharDidntMatchNum: match ? valueToBeMaskedCharDidntMatchNum : (valueToBeMaskedCharDidntMatchNum + 1)
    });
  }

  if (maskChar.type === MASKOSE_CHAR_SPECIFIC_TYPE) {
    const match = new RegExp(maskChar.regExp).test(valueToBeMaskedChar);

    return maskValueByTraverse({
      ...state,
      valueToBeMaskedByMaskDirectionIndex: valueToBeMaskedByMaskDirectionIndex + 1,
      maskCharsByDirectionIndex: (isInEndlessMode || maskCharHasMoreIterations) ?
        maskCharsByDirectionIndex :
        maskCharsByDirectionIndex + 1,
      maskCharCurrentIteration: getMaskCharNextIteration(maskCharRepetions, maskCharCurrentIteration),
      maskedValue: match ?
        concatMaskedValueByDirection(maskedValue, valueToBeMaskedChar, direction) :
        maskedValue,
      maskCharMatchNum: (isInEndlessMode || maskCharHasMoreIterations) ?
        maskCharMatchNum :
        (match ? maskCharMatchNum + 1 : maskCharMatchNum),
      maskCharDidntMatchNum: match ?
        maskCharDidntMatchNum :
        (maskCharDidntMatchNum + 1),
      valueToBeMaskedCharMatchNum: match ? (valueToBeMaskedCharMatchNum + 1) : valueToBeMaskedCharMatchNum,
      valueToBeMaskedCharDidntMatchNum: match ? valueToBeMaskedCharDidntMatchNum : (valueToBeMaskedCharDidntMatchNum + 1)
    });
  }

  // If none of the above matched, then it's a mkCharNum
  const match = maskChar.regExp.test(valueToBeMaskedChar);

  return maskValueByTraverse({
    ...state,
    valueToBeMaskedByMaskDirectionIndex: valueToBeMaskedByMaskDirectionIndex + 1,
    maskCharsByDirectionIndex: (isInEndlessMode || maskCharHasMoreIterations) ?
      maskCharsByDirectionIndex :
      maskCharsByDirectionIndex + 1,
    maskCharCurrentIteration: getMaskCharNextIteration(maskCharRepetions, maskCharCurrentIteration),
    maskedValue: match ?
      concatMaskedValueByDirection(maskedValue, valueToBeMaskedChar, direction) :
      maskedValue,
    maskCharMatchNum: (isInEndlessMode || maskCharHasMoreIterations) ?
      maskCharMatchNum :
      (match ? maskCharMatchNum + 1 : maskCharMatchNum),
    maskCharDidntMatchNum: match ?
      maskCharDidntMatchNum :
      (maskCharDidntMatchNum + 1),
    valueToBeMaskedCharMatchNum: match ? (valueToBeMaskedCharMatchNum + 1) : valueToBeMaskedCharMatchNum,
    valueToBeMaskedCharDidntMatchNum: match ? valueToBeMaskedCharDidntMatchNum : (valueToBeMaskedCharDidntMatchNum + 1)
  });
}