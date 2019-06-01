import { MaskoseMaskChar } from '../../mask/chars';
import prop from '../prop';

/**
 * Returns the provided maskChar's number of repetitions.
 */
const getMaskCharRepetitions = prop<MaskoseMaskChar, 'repetitions'>('repetitions');

export default getMaskCharRepetitions;