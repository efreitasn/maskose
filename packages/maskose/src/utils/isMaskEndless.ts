import getProp from './getProp';
import { MaskoseMask } from '../mask';

/**
 * Whether a mask is endless
 */
const isMaskEndless = getProp<MaskoseMask, 'endless'>('endless');

export default isMaskEndless;