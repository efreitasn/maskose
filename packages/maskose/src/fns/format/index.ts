import { MaskoseMask } from '../..';
import concatMaskedValue from './concatMaskedValue';
import { MASKOSE_CHAR_TO_BE_PUT_TYPE } from '../../chars/primitives/toBePut';
import getValueChar from './getValueChar';
import clearMaskedValue from './clearMaskedValue';

export default function mkFormat(
  options: {
    mask: MaskoseMask;
    rightToLeft?: boolean;
  }
): (value: string) => string {
  return function mkFormatWithOptions(value: string) {
    if (value === '') {
      return value;
    }
  
    const { mask, rightToLeft } = options;
    const contentArr = rightToLeft ? [...mask.content].reverse() : mask.content;
  
    let maskedValue = '';
    let counter = 0;
  
    for (const { primitive, regExpStr, predicateFn } of contentArr) {
      if (predicateFn && !predicateFn({ value })) {
        continue;
      }

      if (primitive.type === MASKOSE_CHAR_TO_BE_PUT_TYPE) {
        maskedValue = concatMaskedValue(
          maskedValue,
          primitive.char,
          rightToLeft
        );
        continue;
      }
  
      const valueChar = getValueChar(counter, value, rightToLeft);
      const regExp = new RegExp(regExpStr);
  
      if (!regExp.test(valueChar)) {
        break;
      }

      maskedValue = concatMaskedValue(
        maskedValue,
        valueChar,
        rightToLeft
      );

      counter++;
    }
  
    return clearMaskedValue(
      maskedValue,
      mask,
      rightToLeft
    );
  };
}