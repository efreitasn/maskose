import { MaskoseChar } from '../mask/chars';
import { MaskoseMaskDirection, MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT } from '../mask';
import isMaskDirectionRightToLeft from './isMaskDirectionRightToLeft';
import areValueLengthConditionsTrue from './areValueLengthConditionsTrue';
import getMaskCharRepetitions from './getMaskCharRepetitions';
import doesMaskCharHaveMoreIterations from './doesMaskCharHaveMoreIterations';
import { MASKOSE_CHAR_TO_BE_PUT_TYPE } from '../mask/chars/toBePut';
import concatMaskedValueByDirection from './concatMaskedValueByDirection';
import getMaskCharNextIteration from './getMaskCharNextIteration';
import { MASKOSE_CHAR_GROUP_TYPE } from '../mask/chars/group';
import { MASKOSE_CHAR_LETTER_TYPE } from '../mask/chars/letter';
import { MASKOSE_CHAR_SPECIFIC_TYPE } from '../mask/chars/specific';
import isTraverseMaskCharsModeUnmask from './isTraverseMaskCharsModeUnmask';

export const TRAVERSE_MASK_CHARS_MASK_MODE = 'mask';
export const TRAVERSE_MASK_CHARS_UNMASK_MODE = 'unmask';

export type TraverseMaskCharsMode =
  | typeof TRAVERSE_MASK_CHARS_MASK_MODE
  | typeof TRAVERSE_MASK_CHARS_UNMASK_MODE
;

interface TraverseMaskCharsState {
  readonly mode: TraverseMaskCharsMode;
  readonly currentMaskCharIteration: number;
  readonly isInEndlessMode: boolean;
  readonly direction: MaskoseMaskDirection;
  readonly endless: boolean;
  readonly result: string;
  // Mask chars
  readonly maskCharsByDirection: MaskoseChar[];
  readonly maskCharsByDirectionIndex: number;
  // Value to be masked chars
  readonly valueCharsByDirection: string[];
  readonly valueCharsByDirectionIndex: number;
  // Matching-related data
  readonly maskCharsMatchNum: number;
  readonly maskCharsDidntMatchNum: number;
  readonly valueCharsMatchNum: number;
  readonly valueCharsDidntMatchNum: number;
  readonly stopOnFirstMaskCharMatch: boolean;
  readonly stopOnFirstMaskCharDidntMatch: boolean;
  readonly stopOnFirstValueCharMatch: boolean;
  readonly stopOnFirstValueCharDidntMatch: boolean;
};

export const defaultState: TraverseMaskCharsState = {
  mode: TRAVERSE_MASK_CHARS_MASK_MODE,
  currentMaskCharIteration: 0,
  isInEndlessMode: false,
  direction: MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT,
  endless: false,
  result: '',
  maskCharsByDirection: [],
  maskCharsByDirectionIndex: 0,
  valueCharsByDirection: [],
  valueCharsByDirectionIndex: 0,
  maskCharsMatchNum: 0,
  maskCharsDidntMatchNum: 0,
  valueCharsMatchNum: 0,
  valueCharsDidntMatchNum: 0,
  stopOnFirstMaskCharMatch: false,
  stopOnFirstMaskCharDidntMatch: false,
  stopOnFirstValueCharMatch: false,
  stopOnFirstValueCharDidntMatch: true
};

/**
 * Traverse the characters of a mask recursively.
 * TODO: update this.
 * TODO: memoize.
 * 
 * If state.direction === MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT, it is assumed that
 * both state.maskCharsByDirection and state.valueToBeMaskedByMaskDirection are already
 * reversed.
 * 
 * When in mask mode, state.maskCharsMatchNum and state.maskCharsDidntMatchNum don't include
 * toBePut characters.
 * 
 * The only difference between maskChar{match,didntMatch}Num and valueToBeMaskedChar{match,didntMatch}Num
 * is that the former will be incremented only in the following scenarios:
 * * It's a group character and all of its repetitions and all of it characters are matched
 * * It's a oneOf character and all of its repetitions and at least one of its characters are matched
 * * If none of the above, only if all repetitions of a maskChar are matched  
 * 
 * And the latter will increment if the current valueToBeMaskedChar matches the current mask character.
 */
export default function traverseMaskChars(
  state = defaultState
): TraverseMaskCharsState {
  const {
    mode,
    currentMaskCharIteration,
    isInEndlessMode,
    direction,
    endless,
    result,
    maskCharsByDirection,
    maskCharsByDirectionIndex,
    valueCharsByDirection,
    valueCharsByDirectionIndex,
    maskCharsMatchNum,
    maskCharsDidntMatchNum,
    valueCharsMatchNum,
    valueCharsDidntMatchNum,
    stopOnFirstMaskCharMatch,
    stopOnFirstMaskCharDidntMatch,
    stopOnFirstValueCharMatch,
    stopOnFirstValueCharDidntMatch
  } = state;

  const rightToLeft = isMaskDirectionRightToLeft(direction);
  const isUnmaskMode = isTraverseMaskCharsModeUnmask(mode);

  // Chars
  const maskChar = maskCharsByDirection[maskCharsByDirectionIndex];
  const nextMaskChar = maskCharsByDirection[maskCharsByDirectionIndex + 1];
  const valueChar = valueCharsByDirection[valueCharsByDirectionIndex];

  // Base cases
  if (
    maskCharsByDirection.length === 0 ||
    valueCharsByDirection.length === 0 ||
    stopOnFirstValueCharMatch && (valueCharsMatchNum > 0) ||
    stopOnFirstValueCharDidntMatch && (valueCharsDidntMatchNum > 0) ||
    stopOnFirstMaskCharMatch && (maskCharsMatchNum > 0) ||
    stopOnFirstMaskCharDidntMatch && (maskCharsDidntMatchNum > 0) ||
    (
      !maskChar &&
      (
        maskCharsByDirectionIndex === 1 ||
        !valueChar ||
        !endless
      )
    ) ||
    (
      !valueChar &&
      isUnmaskMode
    ) ||
    (
      !valueChar &&
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
    valueChar &&
    endless
  ) {
    return traverseMaskChars({
      ...state,
      maskCharsByDirectionIndex: maskCharsByDirectionIndex - 1,
      isInEndlessMode: true
    });
  }

  const maksCharConditionsAreTrue = areValueLengthConditionsTrue(
    valueCharsByDirection.length,
    isUnmaskMode ?
      maskChar.maskedValueLengthConditions :
      maskChar.valueToBeMaskedLengthConditions
  );

  if (!maksCharConditionsAreTrue) {
    return traverseMaskChars({
      ...state,
      maskCharsByDirectionIndex: maskCharsByDirectionIndex + 1
    });
  }

  const maskCharRepetions = getMaskCharRepetitions(maskChar);
  const maskCharHasMoreIterations = doesMaskCharHaveMoreIterations(
    maskCharRepetions,
    currentMaskCharIteration
  );

  if (maskChar.type === MASKOSE_CHAR_TO_BE_PUT_TYPE) {
    const match = maskChar.regExp.test(valueChar);

    return traverseMaskChars({
      ...state,
      result: isUnmaskMode ?
        result :
        concatMaskedValueByDirection(result, maskChar.char, direction),
      maskCharsByDirectionIndex: maskCharHasMoreIterations ?
        maskCharsByDirectionIndex :
        maskCharsByDirectionIndex + 1,
      currentMaskCharIteration: getMaskCharNextIteration(maskCharRepetions, currentMaskCharIteration),
      valueCharsByDirectionIndex: isUnmaskMode ?
        (valueCharsByDirectionIndex + 1) :
        valueCharsByDirectionIndex,
      valueCharsMatchNum: (isUnmaskMode && match) ?
        valueCharsMatchNum + 1 :
        valueCharsMatchNum,
      valueCharsDidntMatchNum: (isUnmaskMode && !match) ?
        valueCharsDidntMatchNum + 1 :
        valueCharsDidntMatchNum,
      maskCharsMatchNum: (!isUnmaskMode || isInEndlessMode || maskCharHasMoreIterations) ?
        maskCharsMatchNum :
        (isUnmaskMode && match) ?
          maskCharsMatchNum + 1:
          maskCharsMatchNum,
      maskCharsDidntMatchNum: (isUnmaskMode && !match) ?
        maskCharsDidntMatchNum + 1 :
        maskCharsDidntMatchNum
    });
  }

  if (maskChar.type === MASKOSE_CHAR_GROUP_TYPE) {
    const groupMaskCharsByDirectionTraverseResult = traverseMaskChars({
      ...state,
      stopOnFirstMaskCharMatch: false,
      stopOnFirstMaskCharDidntMatch: true,
      isInEndlessMode: false,
      endless: false,
      maskCharsByDirectionIndex: 0,
      currentMaskCharIteration: 0,
      maskCharsByDirection: rightToLeft ?
        [...maskChar.chars].reverse() :
        maskChar.chars
    });

    return traverseMaskChars({
      ...state,
      result: groupMaskCharsByDirectionTraverseResult.result,
      maskCharsByDirectionIndex: (isInEndlessMode || maskCharHasMoreIterations) ?
        maskCharsByDirectionIndex :
        maskCharsByDirectionIndex + 1,
      currentMaskCharIteration: getMaskCharNextIteration(maskCharRepetions, currentMaskCharIteration),
      valueCharsByDirectionIndex: groupMaskCharsByDirectionTraverseResult.valueCharsByDirectionIndex,
      valueCharsMatchNum: groupMaskCharsByDirectionTraverseResult.valueCharsMatchNum,
      valueCharsDidntMatchNum: groupMaskCharsByDirectionTraverseResult.valueCharsDidntMatchNum,
      maskCharsMatchNum: (isInEndlessMode || maskCharHasMoreIterations) ?
        maskCharsMatchNum :
        (
          groupMaskCharsByDirectionTraverseResult.maskCharsDidntMatchNum === 0 ?
            maskCharsMatchNum + 1 :
            maskCharsMatchNum
        ),
      maskCharsDidntMatchNum: groupMaskCharsByDirectionTraverseResult.maskCharsDidntMatchNum > 0 ?
        maskCharsMatchNum + 1 :
        maskCharsDidntMatchNum
    });
  }

  if (maskChar.type === MASKOSE_CHAR_LETTER_TYPE) {
    const match = maskChar.regExp.test(valueChar);

    return traverseMaskChars({
      ...state,
      valueCharsByDirectionIndex: valueCharsByDirectionIndex + 1,
      maskCharsByDirectionIndex: (isInEndlessMode || maskCharHasMoreIterations) ?
        maskCharsByDirectionIndex :
        maskCharsByDirectionIndex + 1,
      currentMaskCharIteration: getMaskCharNextIteration(maskCharRepetions, currentMaskCharIteration),
      result: match ?
        concatMaskedValueByDirection(result, valueChar, direction) :
        result,
      maskCharsMatchNum: (isInEndlessMode || maskCharHasMoreIterations) ?
        maskCharsMatchNum :
        (match ? maskCharsMatchNum + 1 : maskCharsMatchNum),
      maskCharsDidntMatchNum: match ?
        maskCharsDidntMatchNum :
        (maskCharsDidntMatchNum + 1),
      valueCharsMatchNum: match ? (valueCharsMatchNum + 1) : valueCharsMatchNum,
      valueCharsDidntMatchNum: match ? valueCharsDidntMatchNum : (valueCharsDidntMatchNum + 1)
    });
  }

  if (maskChar.type === MASKOSE_CHAR_SPECIFIC_TYPE) {
    const match = new RegExp(maskChar.regExp).test(valueChar);

    return traverseMaskChars({
      ...state,
      valueCharsByDirectionIndex: valueCharsByDirectionIndex + 1,
      maskCharsByDirectionIndex: (isInEndlessMode || maskCharHasMoreIterations) ?
        maskCharsByDirectionIndex :
        maskCharsByDirectionIndex + 1,
      currentMaskCharIteration: getMaskCharNextIteration(maskCharRepetions, currentMaskCharIteration),
      result: match ?
        concatMaskedValueByDirection(result, valueChar, direction) :
        result,
      maskCharsMatchNum: (isInEndlessMode || maskCharHasMoreIterations) ?
        maskCharsMatchNum :
        (match ? maskCharsMatchNum + 1 : maskCharsMatchNum),
      maskCharsDidntMatchNum: match ?
        maskCharsDidntMatchNum :
        (maskCharsDidntMatchNum + 1),
      valueCharsMatchNum: match ? (valueCharsMatchNum + 1) : valueCharsMatchNum,
      valueCharsDidntMatchNum: match ? valueCharsDidntMatchNum : (valueCharsDidntMatchNum + 1)
    });
  }

  // If none of the above matched, then it's a mkCharNum
  const match = maskChar.regExp.test(valueChar);

  return traverseMaskChars({
    ...state,
    valueCharsByDirectionIndex: valueCharsByDirectionIndex + 1,
    maskCharsByDirectionIndex: (isInEndlessMode || maskCharHasMoreIterations) ?
      maskCharsByDirectionIndex :
      maskCharsByDirectionIndex + 1,
    currentMaskCharIteration: getMaskCharNextIteration(maskCharRepetions, currentMaskCharIteration),
    result: match ?
      concatMaskedValueByDirection(result, valueChar, direction) :
      result,
    maskCharsMatchNum: (isInEndlessMode || maskCharHasMoreIterations) ?
      maskCharsMatchNum :
      (match ? maskCharsMatchNum + 1 : maskCharsMatchNum),
    maskCharsDidntMatchNum: match ?
      maskCharsDidntMatchNum :
      (maskCharsDidntMatchNum + 1),
    valueCharsMatchNum: match ? (valueCharsMatchNum + 1) : valueCharsMatchNum,
    valueCharsDidntMatchNum: match ? valueCharsDidntMatchNum : (valueCharsDidntMatchNum + 1)
  });
}