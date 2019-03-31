import test from 'ava';
import {
  MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT
} from '../../mask';
import mkCharNum from '../../mask/chars/num';
import mkCharLetter from '../../mask/chars/letter';
import mkCharGroup from '../../mask/chars/group';
import mkCharSpecific from '../../mask/chars/specific';
import getMaskCharsTailByDirectionDeep from '../getMaskCharsTailByDirectionDeep';

test('should return the correct tail', t => {
  const charNum = mkCharNum();
  const maskChars = [
    mkCharNum(),
    mkCharLetter(),
    mkCharGroup([
      mkCharGroup([
        mkCharGroup([
          mkCharSpecific('3'),
          mkCharLetter(),
          charNum
        ])
      ])
    ])
  ];
  const result = getMaskCharsTailByDirectionDeep(
    MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT,
    maskChars
  );

  t.is(result, charNum);
});