import test from 'ava';
import { MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT } from '../../mask';
import isMaskDirectionRightToLeft from '../isMaskDirectionRightToLeft';

test(`should return whether the provided mask direction is ${MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT}`, t => {
  const result = isMaskDirectionRightToLeft(MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT);

  t.true(result);
});