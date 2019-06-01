import { MaskoseMaskCharLetter } from './letter';
import { MaskoseMaskCharSpecific } from './specific';
import { MaskoseMaskCharNum } from './num';
import { MaskoseMaskCharToBePut } from './toBePut';
import { MaskoseMaskCharGroup } from './group';

export const MASKOSE_CHAR_VALUE_LENGTH_CONDITION_GREATER_THAN = 'gt';
export const MASKOSE_CHAR_VALUE_LENGTH_CONDITION_EQUAL_TO = 'eq';
export const MASKOSE_CHAR_VALUE_LENGTH_CONDITION_LESS_THAN = 'lt';

export type MaskoseMaskCharValueLengthConditionType =
  | typeof MASKOSE_CHAR_VALUE_LENGTH_CONDITION_GREATER_THAN
  | typeof MASKOSE_CHAR_VALUE_LENGTH_CONDITION_EQUAL_TO
  | typeof MASKOSE_CHAR_VALUE_LENGTH_CONDITION_LESS_THAN
;

export type MaskoseMaskCharValueLengthCondition = {
  type: MaskoseMaskCharValueLengthConditionType;
  num: number;
};

export interface MaskoseMaskCharBase {
  readonly repetitions: number;
  readonly valueToBeMaskedLengthConditions: MaskoseMaskCharValueLengthCondition[];
  readonly maskedValueLengthConditions: MaskoseMaskCharValueLengthCondition[];
};

export type MaskoseMaskChar =
  | MaskoseMaskCharLetter
  | MaskoseMaskCharSpecific
  | MaskoseMaskCharNum
  | MaskoseMaskCharToBePut
  | MaskoseMaskCharGroup
;