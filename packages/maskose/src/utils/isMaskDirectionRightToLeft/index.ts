import {
  MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT,
  MaskoseMaskDirection
} from '../../mask';
import isEqualTo from '../isEqualTo';

/**
 * Returns whether the provided mask direction is equal to
 * MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT.
 */
const isMaskDirectionRightToLeft = isEqualTo<MaskoseMaskDirection>(MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT);

export default isMaskDirectionRightToLeft;