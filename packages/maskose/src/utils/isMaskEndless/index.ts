import prop from '../prop';
import { MaskoseMask } from '../../mask';

/**
 * Whether a mask is endless
 */
const isMaskEndless = prop<MaskoseMask, 'endless'>('endless');

export default isMaskEndless;