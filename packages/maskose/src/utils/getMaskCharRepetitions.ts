import { MaskoseMaskChar } from '../mask/chars';
import getProp from './getProp';

/**
 * Get the mask char's number of repetitions
 */
const getMaskCharRepetitions = getProp<MaskoseMaskChar, 'repetitions'>('repetitions');

export default getMaskCharRepetitions;