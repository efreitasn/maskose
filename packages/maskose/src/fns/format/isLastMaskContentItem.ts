import { MaskoseMask, MaskoseMaskContentItem } from '../..';

export default function isLastMaskContentItem(
  mask: MaskoseMask,
  contentItem: MaskoseMaskContentItem,
  rightToLeft?: boolean
): boolean {
  if (rightToLeft) {
    return mask.content[0] === contentItem;
  }

  return mask.content[mask.content.length - 1] === contentItem;
}