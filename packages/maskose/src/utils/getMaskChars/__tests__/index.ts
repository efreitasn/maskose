import getMaskChars from '..';
import { MaskoseMaskChar } from '../../../mask/chars';
import mkCharNum from '../../../mask/chars/num';
import mkCharLetter from '../../../mask/chars/letter';
import mkCharBoostRepeat from '../../../boosts/char/repeat';
import mkCreate from '../../../fns/create';

it('should return the provided mask\'s chars', () => {
  const maskChars: MaskoseMaskChar[] = [
    mkCharNum(),
    mkCharLetter(),
    mkCharBoostRepeat(4)(
      mkCharLetter()
    )
  ];
  const mask = mkCreate(maskChars);
  const result = getMaskChars(mask);

  expect(result).toBe(maskChars);
});