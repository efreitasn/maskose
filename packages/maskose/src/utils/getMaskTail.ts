import { MaskoseMask, MaskoseMaskContentItem } from '..';

export default function getMaskTail(mask: MaskoseMask): MaskoseMaskContentItem {
  if (mask.rightToLeft) {
    return mask.content[0];
  }

  return mask.content[mask.content.length - 1];
}