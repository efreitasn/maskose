import test from 'ava';
import { MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT } from '../../mask';
import isMaskDirectionLeftToRight from '../isMaskDirectionLeftToRight';

test(`should return whether the provided mask direction is ${MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT}`, t => {
  const result = isMaskDirectionLeftToRight(MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT);

  t.true(result);
});