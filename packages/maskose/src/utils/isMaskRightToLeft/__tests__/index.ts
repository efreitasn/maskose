import isMaskRightToLeft from '..';
import { MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT } from '../../../mask';
import mkCreate from '../../../fns/create';
import mkCharNum from '../../../mask/chars/num';
import mkCharLetter from '../../../mask/chars/letter';
import { mkMaskBoostRightToLeft } from '../../..';

it(`should return whether the provided mask direction is ${MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT}`, () => {
  const mask = mkMaskBoostRightToLeft()(
    mkCreate([
      mkCharNum(),
      mkCharLetter()
    ])
  );
  const result = isMaskRightToLeft(mask);

  expect(result).toBe(true);
});