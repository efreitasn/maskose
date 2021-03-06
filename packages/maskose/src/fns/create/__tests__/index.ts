import mkCreate from '..';
import mkCharBoostRepeat from '../../../boosts/char/repeat';
import mkBoostChar from '../../boostChar';
import mkCharBoostValueLengthEqualTo from '../../../boosts/char/valueLengthEqualTo';
import mkCharNum from '../../../mask/chars/num';
import mkCharLetter from '../../../mask/chars/letter';
import mkCharGroup from '../../../mask/chars/group';
import mkCharToBePut from '../../../mask/chars/toBePut';

it('should match the object returned by mkCreate()', () => {
  const result = mkCreate([
    mkCharBoostRepeat(4)(mkCharNum()),
    mkCharLetter(),
    mkCharBoostRepeat(2)(
      mkCharGroup([
        mkCharNum(),
        mkCharLetter()
      ])
    ),
    mkBoostChar(mkCharToBePut(')'))([
      mkCharBoostValueLengthEqualTo({
        masked: 2,
        unmasked: 2
      })
    ]),
    mkCharToBePut('-'),
    mkCharNum(),
    mkCharGroup([
      mkCharNum(),
      mkCharLetter()
    ])
  ]);

  expect(result).toMatchSnapshot();
});