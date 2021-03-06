import prop from '../prop';
import { MaskoseMask } from '../../mask';

/**
 * Return whether the provided mask is endless.
 */
const isMaskEndless = prop<MaskoseMask, 'endless'>('endless');

export default isMaskEndless;