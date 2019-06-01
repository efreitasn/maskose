import isMaskValid from '../../utils/isMaskValid';
import { MaskoseBoost } from '..';
import { MaskoseMask } from '../../mask';

/**
 * Add validations to the provided mask boost. These validations aim to make
 * some inconsistencies, such as an endless mask with a tail equal to a toBePut,
 * not happen. A separated function was created not only for DRY purposes, but
 * also to make testing these validations and each maskBoost easier.
 * @param maskBoost The maskBoost
 */
export default function mkMaskBoostWithValidations<TMaskBoost extends (...arg: any[]) => MaskoseBoost<MaskoseMask>>(maskBoost: TMaskBoost) {
  return function mkMaskBoostWithValidationsInternal(...args: Parameters<TMaskBoost>) {
    const fnPartiallyApplied = maskBoost(...args);

    return function mkMaskBoostWithValidationsWithFn(mask: MaskoseMask) {
      const newMask = fnPartiallyApplied(mask);

      const result = isMaskValid(newMask);

      if (!result.valid) {
        throw new Error(result.error);
      }

      return newMask;
    };
  };
}