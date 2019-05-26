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
    const contentIterator = mask.makeContentIterator({
      value,
      reversed: rightToLeft
    });
  
    let maskedValue = '';
    let counter = 0;
  
    for (const { primitive, regExpStr } of contentIterator) {
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