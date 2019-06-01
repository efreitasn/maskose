import getProp from '../getProp';
import { MaskoseMask } from '../../mask';

/**
 * Get the provided mask's chars
 */
const getMaskChars = getProp<MaskoseMask, 'chars'>('chars');

export default getMaskChars;