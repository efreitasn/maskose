import { MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT } from '../../mask';
import isMaskDirectionRightToLeft from '../isMaskDirectionRightToLeft';

it(`should return whether the provided mask direction is ${MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT}`, () => {
  const result = isMaskDirectionRightToLeft(MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT);

  expect(result).toBe(true);
});