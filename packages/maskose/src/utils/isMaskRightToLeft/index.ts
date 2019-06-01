import pipe from '../pipe';
import { MaskoseMask } from '../../mask';
import isMaskDirectionRightToLeft from '../isMaskDirectionRightToLeft';
import getMaskDirection from '../getMaskDirection';

/**
 * Returns whether the provided mask's direction is equal to
 * MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT.
 */
const isMaskRightToLeft = pipe<MaskoseMask, boolean>(
  getMaskDirection,
  isMaskDirectionRightToLeft
);

export default isMaskRightToLeft;