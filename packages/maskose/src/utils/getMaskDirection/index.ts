import { MaskoseMask } from '../../mask';
import getProp from '../getProp';

/**
 * Get the mask's direction
 */
const getMaskDirection = getProp<MaskoseMask, 'direction'>('direction');

export default getMaskDirection;