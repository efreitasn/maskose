import {
  MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT,
  MaskoseMaskDirection
} from '../mask';
import isEqualTo from './isEqualTo';

const isMaskDirectionRightToLeft = isEqualTo<MaskoseMaskDirection>(MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT);

export default isMaskDirectionRightToLeft;