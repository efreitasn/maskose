import mkBoostChar from '..';
import mkCharNum from '../../../mask/chars/num';
import mkCharBoostRepeat from '../../../boosts/char/repeat';
import mkCharBoostValueLengthEqualTo from '../../../boosts/char/valueLengthEqualTo';

it('should match the object returned by mkBoostChar()()', () => {
  const result = mkBoostChar(mkCharNum())([
    mkCharBoostRepeat(4),
    mkCharBoostValueLengthEqualTo({
      masked: 20,
      unmasked: 10
    })
  ]);

  expect(result).toMatchSnapshot();
});