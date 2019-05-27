import { MaskoseMask } from '../..';
import concatMaskedValue from './concatMaskedValue';
import { MASKOSE_CHAR_TO_BE_PUT_TYPE } from '../../chars/primitives/toBePut';
import getValueChar from './getValueChar';
import clearMaskedValue from './clearMaskedValue';
import isLastMaskContentItem from './isLastMaskContentItem';

export default function mkFormat(mask: MaskoseMask): (value: string) => string {
  return function mkFormatWithOptions(value: string) {
    if (value === '') {
      return value;
    }
  
    const contentArr = mask.rightToLeft ? [...mask.content].reverse() : mask.content;
  
    let maskedValue = '';
    let counter = 0;
  
    for (const contentItem of contentArr) {
      const {
        primitive,
        regExpStr,
        predicateFn
      } = contentItem;

      if (predicateFn && !predicateFn({ value })) {
        continue;
      }

      if (primitive.type === MASKOSE_CHAR_TO_BE_PUT_TYPE) {
        maskedValue = concatMaskedValue(
          maskedValue,
          primitive.char,
          mask.rightToLeft
        );
        continue;
      }
  
      const valueChar = getValueChar(counter, value, mask.rightToLeft);
      const regExp = new RegExp(regExpStr);
  
      if (!regExp.test(valueChar)) {
        break;
      }

      if (
        isLastMaskContentItem(mask, contentItem, mask.rightToLeft) &&
        mask.endless
      ) {
        for (let i = counter; i < value.length; i++) {
          const valueChar = getValueChar(i, value, mask.rightToLeft);

          if (!regExp.test(valueChar)) {
            break;
          }

          maskedValue = concatMaskedValue(
            maskedValue,
            valueChar,
            mask.rightToLeft
          );
        }
      } else {
        maskedValue = concatMaskedValue(
          maskedValue,
          valueChar,
          mask.rightToLeft
        );
      }

      counter++;
    }
  
    if (!mask.endless) {
      return clearMaskedValue(
        maskedValue,
        mask,
        mask.rightToLeft
      );
    }

    return maskedValue;
  };
}