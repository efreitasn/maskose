import test from 'ava';
import mkCreate from '../../create';
import mkCharNum from '../../../mask/chars/num';
import mkCharToBePut from '../../../mask/chars/toBePut';
import mkCharBoostRepeat from '../../../boosts/char/repeat';
import mkCharBoostValueLengthEqualTo from '../../../boosts/char/valueLengthEqualTo';
import mkMaskValue from '..';
import { mkMaskBoostEndless, mkMaskBoostRightToLeft } from '../../..';
import mkBoostMask from '../../boostMask';
import mkCharGroup from '../../../mask/chars/group';
import mkCharLetter from '../../../mask/chars/letter';
import mkCharBoostValueLengthGreaterThan from '../../../boosts/char/valueLengthGreaterThan';
import mkCharSpecific from '../../../mask/chars/specific';

test('should mask the provided value (BR cellphone number mask)', t => {
  const mask = mkCreate([
    mkCharToBePut('('),
    mkCharBoostRepeat(2)(mkCharNum()),
    mkCharToBePut(')'),
    mkCharToBePut(' '),
    mkCharBoostValueLengthEqualTo(11)(mkCharNum()),
    mkCharBoostRepeat(4)(mkCharNum()),
    mkCharToBePut('-'),
    mkCharBoostRepeat(4)(mkCharNum())
  ]);
  const mkMaskValueWithMask = mkMaskValue(mask);

  t.is(mkMaskValueWithMask('9912345678'), '(99) 1234-5678');
  t.is(mkMaskValueWithMask('991234'), '(99) 1234');
  t.is(mkMaskValueWithMask('99123456789'), '(99) 12345-6789');
});

test('should mask the provided value (US currency mask)', t => {
  const mask = mkCreate([
    mkCharGroup([
      mkCharBoostRepeat(3)(mkCharNum()),
      mkCharToBePut(',')
    ]),
    mkCharBoostRepeat(3)(mkCharNum()),
    mkCharToBePut('.'),
    mkCharBoostRepeat(2)(mkCharNum())
  ]);
  const maskBoosted = mkBoostMask(mask)([
    mkMaskBoostEndless(),
    mkMaskBoostRightToLeft()
  ]);
  const mkMaskValueWithMask = mkMaskValue(maskBoosted);

  t.is(mkMaskValueWithMask('123456'), '1,234.56');
  t.is(mkMaskValueWithMask('12345'), '123.45');
  t.is(mkMaskValueWithMask('1234567891234567'), '12,345,678,912,345.67');
  t.is(mkMaskValueWithMask('12W4567891234567'), '45,678,912,345.67');
  t.is(mkMaskValueWithMask(''), '');
});

test('should mask the provided value (number/letter between parenthesis mask)', t => {
  const mask = mkCreate([
    mkCharToBePut('('),
    mkCharBoostRepeat(2)(
      mkCharGroup([
        mkCharBoostRepeat(4)(mkCharNum()),
        mkCharLetter()
      ])
    ),
    mkCharToBePut(')')
  ]);
  const mkMaskValueWithMask = mkMaskValue(mask);

  t.is(mkMaskValueWithMask('1234A5678B'), '(1234A5678B)');
});

test('should mask the provided value (deep mask)', t => {
  const mask = mkCreate([
    mkCharGroup([
      mkCharBoostRepeat(4)(
        mkCharGroup([
          mkCharNum(),
          mkCharToBePut('\\'),
          mkCharToBePut('-'),
          mkCharToBePut('/')
        ])
      ),
      mkCharBoostRepeat(2)(
        mkCharBoostValueLengthGreaterThan(4)(
          mkCharGroup([
            mkCharBoostValueLengthGreaterThan(7)(
              mkCharSpecific('7')
            ),
            mkCharLetter({
              start: 'H',
              end: 'P'
            })
          ])
        )
      ),
      mkCharNum()
    ])
  ]);
  const mkMaskValueWithMask = mkMaskValue(mask);

  t.is(mkMaskValueWithMask('1234'), '1\\-/2\\-/3\\-/4');
  t.is(mkMaskValueWithMask('1234BB'), '1\\-/2\\-/3\\-/4\\-/');
  t.is(mkMaskValueWithMask('1234KM'), '1\\-/2\\-/3\\-/4\\-/KM');
  t.is(mkMaskValueWithMask('1234KMAA'), '1\\-/2\\-/3\\-/4\\-/');
  t.is(mkMaskValueWithMask('12347K7M'), '1\\-/2\\-/3\\-/4\\-/7K7M');
});