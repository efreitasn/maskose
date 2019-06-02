import { mkMaskBoostRightToLeftWithoutValidations } from '../rightToLeft';
import mkCreate from '../../../fns/create';
import isMaskRightToLeft from '../../../utils/isMaskRightToLeft';
import mkCharNum from '../../../mask/chars/num';
import mkCharGroup from '../../../mask/chars/group';
import mkCharLetter from '../../../mask/chars/letter';
import mkCharToBePut from '../../../mask/chars/toBePut';

it('should make the provided mask a right-to-left mask', () => {
  const mask = mkCreate([
    mkCharNum(),
    mkCharGroup([
      mkCharLetter()
    ]),
    mkCharToBePut('/'),
    mkCharLetter()
  ]);
  const maskBoosted = mkMaskBoostRightToLeftWithoutValidations()(mask);

  expect(isMaskRightToLeft(maskBoosted)).toBe(true);
});