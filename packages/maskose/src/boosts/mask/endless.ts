import { MaskoseBoost } from '..';
import { MaskoseMask } from '../../mask';
import mkMaskBoostWithValidations from './withValidations';

/**
 * Make the provided mask a mask that will match any character of the value
 * to be masked that comes after its tail, as long as this character matches
 * the mask's tail. Example:
 * 
```javascript
 const valueToBeMasked = 12345678912345;
 const notEndlessMask = mkCreate([
   mkCharBoostRepeat(3)(mkCharNum()),
   mkCharToBePut('.'),+
   mkCharBoostRepeat(2)(mkCharNum())
 ]);
 const endlessMask = mkMaskBoostEndless()(notEndlessMask);

 mkMaskValue(notEndlessMask)(valueToBeMasked) // 123.45
 mkMaskValue(endlessMask)(valueToBeMasked) // 132.45678912345
 ```
 */
export function mkMaskBoostEndlessWithoutValidations(): MaskoseBoost<MaskoseMask> {
  return function mkMaskBoostEndlessInternal(mask: MaskoseMask): MaskoseMask {
    return {
      ...mask,
      endless: true
    };
  };
}

const mkMaskBoostEndless = mkMaskBoostWithValidations(mkMaskBoostEndlessWithoutValidations);

export default mkMaskBoostEndless;