import prop from '../prop';
import { MaskoseMask } from '../../mask';

/**
 * Returns the provided mask's chars.
 */
const getMaskChars = prop<MaskoseMask, 'chars'>('chars');

export default getMaskChars;