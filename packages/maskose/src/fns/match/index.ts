import { MaskoseMask } from '../../mask';
import mkUnmaskValue from '../unmaskValue';
import mkMaskValue from '../maskValue';
import pipe from '../../utils/pipe';

/**
 * Whether a value matches a mask.
 */
export default function mkMatch(mask: MaskoseMask): (value: string) => boolean {
  return function mkMatchWithMask(value: string): boolean {
    const unmaskThenMaskValue = pipe<string, string>(
      mkUnmaskValue(mask),
      mkMaskValue(mask)
    );

    return unmaskThenMaskValue(value) === value;
  };
}