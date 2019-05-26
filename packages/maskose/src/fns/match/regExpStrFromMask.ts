import { MaskoseMask } from '../..';

export default function regExpStrFromMask(mask: MaskoseMask, value: string): string {
  const contentIterator = mask.makeContentIterator({
    value
  });

  let regExpStr = '';

  for (const contentItem of contentIterator) {
    regExpStr = `${regExpStr}${contentItem.regExpStr}`;
  }

  return regExpStr;
}