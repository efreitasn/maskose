// https://github.com/microsoft/TypeScript/issues/12184 \_(ツ)_/
import areValueLengthConditionsTrue from '../areValueLengthConditionsTrue';
import doesMaskCharHaveMoreIterations from '../doesMaskCharHaveMoreIterations';
import concatStrByMaskDirection from '../concatStrByMaskDirection';
import getMaskCharNextIteration from '../getMaskCharNextIteration';
import { MASKOSE_CHAR_TO_BE_PUT_TYPE, MaskoseMaskCharToBePut } from '../../mask/chars/toBePut';
import { MASKOSE_CHAR_GROUP_TYPE, MaskoseMaskCharGroup } from '../../mask/chars/group';
import { MASKOSE_CHAR_LETTER_TYPE } from '../../mask/chars/letter';
import { MASKOSE_CHAR_SPECIFIC_TYPE } from '../../mask/chars/specific';
import isTraverseMaskCharsModeUnmask from '../isTraverseMaskCharsModeUnmask';
import {
  TraverseMaskCharsState,
  defaultState
} from './state';
import getArraySize from '../getArraySize';
import getProp from '../getProp';
import { MaskoseMaskChar } from '../../mask/chars';
import getMaskCharsByMaskDirection from '../getMaskCharsByMaskDirection';

/**
 * Traverse the characters of a mask recursively.
 * 
 * If state.direction === MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT, it is assumed that
 * both state.maskCharsByDirection and state.valueToBeMaskedByMaskDirection are already
 * reversed.
 * 
 * When in mask mode, state.maskCharsMatchNum and state.maskCharsDidntMatchNum don't include
 * toBePut characters.
 * 
 * The only difference between maskChar{match,didntMatch}Num and valueChar{match,didntMatch}Num
 * is that the former will be incremented only in the following scenarios:
 * * It's a group character and all of its repetitions and all of it characters are matched
 * * If none of the above, only if all repetitions of the current maskChar are matched  
 * 
 * And the later will increment if the current valueChar matches the current maskChar when the
 * current maskChar is not a toBePut. If the current maskChar is a toBePut, the value will remain
 * the same.
 */
export default function traverseMaskChars(
  state = defaultState
): TraverseMaskCharsState {
  const {
    mode,
    currentMaskCharIteration,
    neverChangeMaskCharsByDirectionIndex,
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

  const isUnmaskMode = isTraverseMaskCharsModeUnmask(mode);
  const maskChar = maskCharsByDirection[maskCharsByDirectionIndex];
  const nextMaskChar = maskCharsByDirection[maskCharsByDirectionIndex + 1];
  const valueChar = valueCharsByDirection[valueCharsByDirectionIndex];

  // Base cases
  if (
    getArraySize(maskCharsByDirection) === 0 ||
    getArraySize(valueCharsByDirection) === 0 ||
    stopOnFirstValueCharMatch && (valueCharsMatchNum > 0) ||
    stopOnFirstValueCharDidntMatch && (valueCharsDidntMatchNum > 0) ||
    stopOnFirstMaskCharMatch && (maskCharsMatchNum > 0) ||
    stopOnFirstMaskCharDidntMatch && (maskCharsDidntMatchNum > 0) ||
    (!maskChar && !valueChar) ||
    (!maskChar && !endless) ||
    (!valueChar && isUnmaskMode) ||
    (!valueChar && (getProp<MaskoseMaskChar, 'type'>('type')(maskChar) !== MASKOSE_CHAR_TO_BE_PUT_TYPE)) ||
    (!valueChar && nextMaskChar)
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
      neverChangeMaskCharsByDirectionIndex: true
    });
  }

  const maksCharConditionsAreTrue = areValueLengthConditionsTrue(
    getArraySize(valueCharsByDirection),
    isUnmaskMode ?
      getProp<MaskoseMaskChar, 'maskedValueLengthConditions'>('maskedValueLengthConditions')(maskChar) :
      getProp<MaskoseMaskChar, 'valueToBeMaskedLengthConditions'>('valueToBeMaskedLengthConditions')(maskChar)
  );

  if (!maksCharConditionsAreTrue) {
    return traverseMaskChars({
      ...state,
      maskCharsByDirectionIndex: maskCharsByDirectionIndex + 1
    });
  }

  const maskCharType = getProp<MaskoseMaskChar, 'type'>('type')(maskChar);
  const maskCharRepetions = getProp<MaskoseMaskChar, 'repetitions'>('repetitions')(maskChar);
  const maskCharHasMoreIterations = doesMaskCharHaveMoreIterations(
    maskCharRepetions,
    currentMaskCharIteration
  );

  if (maskCharType === MASKOSE_CHAR_GROUP_TYPE) {
    const groupMaskCharsByDirectionTraverseResult = traverseMaskChars({
      ...state,
      stopOnFirstMaskCharMatch: false,
      stopOnFirstMaskCharDidntMatch: true,
      neverChangeMaskCharsByDirectionIndex: false,
      endless: false,
      maskCharsByDirectionIndex: 0,
      currentMaskCharIteration: 0,
      maskCharsByDirection: getMaskCharsByMaskDirection(
        getProp<MaskoseMaskCharGroup, 'chars'>('chars')((maskChar as MaskoseMaskCharGroup)),
        direction
      )
    });

    return traverseMaskChars({
      ...state,
      result: groupMaskCharsByDirectionTraverseResult.result,
      maskCharsByDirectionIndex: (neverChangeMaskCharsByDirectionIndex || maskCharHasMoreIterations) ?
        maskCharsByDirectionIndex :
        maskCharsByDirectionIndex + 1,
      currentMaskCharIteration: getMaskCharNextIteration(maskCharRepetions, currentMaskCharIteration),
      valueCharsByDirectionIndex: groupMaskCharsByDirectionTraverseResult.valueCharsByDirectionIndex,
      valueCharsMatchNum: groupMaskCharsByDirectionTraverseResult.valueCharsMatchNum,
      valueCharsDidntMatchNum: groupMaskCharsByDirectionTraverseResult.valueCharsDidntMatchNum,
      maskCharsMatchNum: (neverChangeMaskCharsByDirectionIndex || maskCharHasMoreIterations) ?
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

  const maskCharRegExp = getProp<Exclude<MaskoseMaskChar, MaskoseMaskCharGroup>, 'regExp'>('regExp')(
    (maskChar as Exclude<MaskoseMaskChar, MaskoseMaskCharGroup>)
  );

  if (maskCharType === MASKOSE_CHAR_TO_BE_PUT_TYPE) {
    const match = maskCharRegExp.test(valueChar);

    return traverseMaskChars({
      ...state,
      result: isUnmaskMode ?
        result :
        concatStrByMaskDirection(
          result,
          getProp<MaskoseMaskCharToBePut, 'char'>('char')((maskChar as MaskoseMaskCharToBePut)),
          direction
        ),
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
      maskCharsMatchNum: (!isUnmaskMode || neverChangeMaskCharsByDirectionIndex || maskCharHasMoreIterations) ?
        maskCharsMatchNum :
        (isUnmaskMode && match) ?
          maskCharsMatchNum + 1 :
          maskCharsMatchNum,
      maskCharsDidntMatchNum: (isUnmaskMode && !match) ?
        maskCharsDidntMatchNum + 1 :
        maskCharsDidntMatchNum
    });
  }

  if (maskCharType === MASKOSE_CHAR_LETTER_TYPE) {
    const match = maskCharRegExp.test(valueChar);

    return traverseMaskChars({
      ...state,
      valueCharsByDirectionIndex: valueCharsByDirectionIndex + 1,
      maskCharsByDirectionIndex: (neverChangeMaskCharsByDirectionIndex || maskCharHasMoreIterations) ?
        maskCharsByDirectionIndex :
        maskCharsByDirectionIndex + 1,
      currentMaskCharIteration: getMaskCharNextIteration(maskCharRepetions, currentMaskCharIteration),
      result: match ?
        concatStrByMaskDirection(result, valueChar, direction) :
        result,
      maskCharsMatchNum: (neverChangeMaskCharsByDirectionIndex || maskCharHasMoreIterations) ?
        maskCharsMatchNum :
        (match ? maskCharsMatchNum + 1 : maskCharsMatchNum),
      maskCharsDidntMatchNum: match ?
        maskCharsDidntMatchNum :
        (maskCharsDidntMatchNum + 1),
      valueCharsMatchNum: match ? (valueCharsMatchNum + 1) : valueCharsMatchNum,
      valueCharsDidntMatchNum: match ? valueCharsDidntMatchNum : (valueCharsDidntMatchNum + 1)
    });
  }

  if (maskCharType === MASKOSE_CHAR_SPECIFIC_TYPE) {
    const match = maskCharRegExp.test(valueChar);

    return traverseMaskChars({
      ...state,
      valueCharsByDirectionIndex: valueCharsByDirectionIndex + 1,
      maskCharsByDirectionIndex: (neverChangeMaskCharsByDirectionIndex || maskCharHasMoreIterations) ?
        maskCharsByDirectionIndex :
        maskCharsByDirectionIndex + 1,
      currentMaskCharIteration: getMaskCharNextIteration(maskCharRepetions, currentMaskCharIteration),
      result: match ?
        concatStrByMaskDirection(result, valueChar, direction) :
        result,
      maskCharsMatchNum: (neverChangeMaskCharsByDirectionIndex || maskCharHasMoreIterations) ?
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
  const match = maskCharRegExp.test(valueChar);

  return traverseMaskChars({
    ...state,
    valueCharsByDirectionIndex: valueCharsByDirectionIndex + 1,
    maskCharsByDirectionIndex: (neverChangeMaskCharsByDirectionIndex || maskCharHasMoreIterations) ?
      maskCharsByDirectionIndex :
      maskCharsByDirectionIndex + 1,
    currentMaskCharIteration: getMaskCharNextIteration(maskCharRepetions, currentMaskCharIteration),
    result: match ?
      concatStrByMaskDirection(result, valueChar, direction) :
      result,
    maskCharsMatchNum: (neverChangeMaskCharsByDirectionIndex || maskCharHasMoreIterations) ?
      maskCharsMatchNum :
      (match ? maskCharsMatchNum + 1 : maskCharsMatchNum),
    maskCharsDidntMatchNum: match ?
      maskCharsDidntMatchNum :
      (maskCharsDidntMatchNum + 1),
    valueCharsMatchNum: match ? (valueCharsMatchNum + 1) : valueCharsMatchNum,
    valueCharsDidntMatchNum: match ? valueCharsDidntMatchNum : (valueCharsDidntMatchNum + 1)
  });
}