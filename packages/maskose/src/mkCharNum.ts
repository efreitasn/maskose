const MASK_CHAR_NUM_TYPE = 'MASK_CHAR_NUM_TYPE';

export type MaskCharPredicateFn = (arg: {
  value: string;
}) => boolean;

export type MkCharNumObj = {
  type: typeof MASK_CHAR_NUM_TYPE;
  predicateFn?: MaskCharPredicateFn;
};

export default function mkCharNum(predicateFn?: MaskCharPredicateFn): MkCharNumObj {
  return {
    type: MASK_CHAR_NUM_TYPE,
    predicateFn
  };
}