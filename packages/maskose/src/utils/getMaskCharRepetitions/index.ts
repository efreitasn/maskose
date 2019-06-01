import { MaskoseMaskChar } from '../../mask/chars';
import prop from '../prop';

/**
 * Get the mask char's number of repetitions
 */
const getMaskCharRepetitions = prop<MaskoseMaskChar, 'repetitions'>('repetitions');

export default getMaskCharRepetitions;