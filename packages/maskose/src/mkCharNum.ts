const MASK_CHAR_NUM_TYPE = 'MASK_CHAR_NUM_TYPE';

export type MaskCharPredicateFn = (arg: {
  value: string;
}) => boolean;

export default function mkCharNum(predicateFn?: MaskCharPredicateFn) {
  return {
    type: MASK_CHAR_NUM_TYPE,
    predicateFn
  };
}