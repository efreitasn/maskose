import { MaskoseMask } from '../..';

export default function regExpStrFromMask(mask: MaskoseMask, value: string): string {
  let maskRegExpStr = '';

  for (const { regExpStr, predicateFn } of mask.content) {
    if (predicateFn && !predicateFn({ value })) {
      continue;
    }

    maskRegExpStr = `${maskRegExpStr}${regExpStr}`;
  }

  return maskRegExpStr;
}