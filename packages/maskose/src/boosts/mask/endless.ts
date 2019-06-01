import { MaskoseBoost } from '..';
import { MaskoseMask } from '../../mask';
import mkMaskBoostWithValidations from './withValidations';

/**
 * Makes the provided mask a mask that will match any character of the masked or
 * unmasked value that comes after its tail, as long as this character matches
 * the mask's tail.
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