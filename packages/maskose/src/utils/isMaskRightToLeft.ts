import pipe from './pipe';
import { MaskoseMask } from '../mask';
import isMaskDirectionRightToLeft from './isMaskDirectionRightToLeft';
import getMaskDirection from './getMaskDirection';

const isMaskRightToLeft = pipe<MaskoseMask, boolean>(
  getMaskDirection,
  isMaskDirectionRightToLeft
);

export default isMaskRightToLeft;