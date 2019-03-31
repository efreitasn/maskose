import { MaskoseCharLetter } from './letter';
import { MaskoseCharSpecific } from './specific';
import { MaskoseCharNum } from './num';
import { MaskoseCharToBePut } from './toBePut';
import { MaskoseCharGroup } from './group';
import { MaskoseCharOneOf } from './oneOf';

export const MASKOSE_CHAR_VALUE_LENGTH_CONDITION_GREATER_THAN = 'gt';
export const MASKOSE_CHAR_VALUE_LENGTH_CONDITION_EQUAL_TO = 'eq';
export const MASKOSE_CHAR_VALUE_LENGTH_CONDITION_LESS_THAN = 'lt';

export type MaskoseCharValueConditionType =
  | typeof MASKOSE_CHAR_VALUE_LENGTH_CONDITION_GREATER_THAN
  | typeof MASKOSE_CHAR_VALUE_LENGTH_CONDITION_EQUAL_TO
  | typeof MASKOSE_CHAR_VALUE_LENGTH_CONDITION_LESS_THAN
;

export interface MaskoseCharBase {
  repetitions: number;
  valueLengthConditions: ({
    type: MaskoseCharValueConditionType;
    num: number;
  })[];
};

export type MaskoseChar =
  | MaskoseCharLetter
  | MaskoseCharSpecific
  | MaskoseCharNum
  | MaskoseCharToBePut
  | MaskoseCharGroup
  | MaskoseCharOneOf
;