import {
  MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT,
  MaskoseMaskDirection
} from '../mask';
import isEqualTo from './isEqualTo';

const isMaskDirectionLeftToRight = isEqualTo<MaskoseMaskDirection>(MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT);

export default isMaskDirectionLeftToRight;