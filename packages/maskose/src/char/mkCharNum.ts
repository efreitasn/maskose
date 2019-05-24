const MASK_CHAR_NUM_TYPE = 'MASK_CHAR_NUM_TYPE';

export type MaskCharPredicateFn = (arg: {
  value: string;
}) => boolean;

export type MkCharNumObj = {
  type: typeof MASK_CHAR_NUM_TYPE;
  predicateFn?: MaskCharPredicateFn;
};

/**
 * A numeric character [0-9] expected to be in the value to be masked.
 * @param predicateFn Function that will decide if the character will be present in the mask
 */
export default function mkCharNum(predicateFn?: MaskCharPredicateFn): MkCharNumObj {
  return {
    type: MASK_CHAR_NUM_TYPE,
    predicateFn
  };
}