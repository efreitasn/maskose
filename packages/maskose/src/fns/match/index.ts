import { MaskoseMask } from '../..';
import regExpStrFromMask from './regExpStrFromMask';

export default function mkMatch(
  options: {
    mask: MaskoseMask;
  }
): (value: string) => boolean {
  return function mkMatchWithOptions(value: string) {
    const regExpStr = regExpStrFromMask(options.mask, value);
    const regExp = new RegExp(regExpStr);

    return regExp.test(value);
  };
}