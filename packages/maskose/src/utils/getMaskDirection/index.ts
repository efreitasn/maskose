import { MaskoseMask } from '../../mask';
import prop from '../prop';

/**
 * Returns the provided mask's direction.
 */
const getMaskDirection = prop<MaskoseMask, 'direction'>('direction');

export default getMaskDirection;