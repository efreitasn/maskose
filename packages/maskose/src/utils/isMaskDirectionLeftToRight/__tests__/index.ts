import { MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT } from '../../../mask';
import isMaskDirectionLeftToRight from '..';

it(`should return whether the provided mask direction is ${MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT}`, () => {
  const result = isMaskDirectionLeftToRight(MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT);

  expect(result).toBe(true);
});