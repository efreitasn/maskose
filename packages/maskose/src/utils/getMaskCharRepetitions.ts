import { MaskoseChar } from '../mask/chars';
import getProp from './getProp';

/**
 * Get the mask char's number of repetitions
 */
const getMaskCharRepetitions = getProp<MaskoseChar, 'repetitions'>('repetitions');

export default getMaskCharRepetitions;