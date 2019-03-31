import { MaskoseChar, MaskoseCharBase } from '.';

export const MASKOSE_CHAR_ONE_OF_TYPE = 'MASKOSE_CHAR_ONE_OF_TYPE';

export interface MaskoseCharOneOf extends MaskoseCharBase {
  type: typeof MASKOSE_CHAR_ONE_OF_TYPE;
  chars: MaskoseChar[];
};

export default function mkCharOneOf(
  chars: MaskoseChar[]
): MaskoseCharOneOf {
  // TODO
  // Don't allow characters whose repetitions > 1 to be put here

  return {
    type: MASKOSE_CHAR_ONE_OF_TYPE,
    chars,
    repetitions: 1,
    valueLengthConditions: []
  };
}