import traverseMaskChars, { defaultState } from '../traverseMaskChars';
import mkCharBoostRepeat from '../../boosts/char/repeat';
import mkCharNum from '../../mask/chars/num';
import mkCharLetter from '../../mask/chars/letter';
import mkCharGroup from '../../mask/chars/group';
import mkCharSpecific from '../../mask/chars/specific';

test('should stop at the first matched maskChar when stopOnFirstMaskCharMatch === true (mkCharBoostRepeat)', () => {
  const result = traverseMaskChars({
    ...defaultState,
    valueToBeMaskedCharsByMaskDirection: [
      '1',
      '2',
      '3',
      '4',
      'B'
    ],
    stopOnFirstMaskCharMatch: true,
    stopOnFirstValueToBeMaskedCharDidntMatch: false,
    stopOnFirstMaskCharDidntMatch: false,
    maskCharsByDirection: [
      mkCharBoostRepeat(4)(
        mkCharNum()
      ),
      mkCharLetter()
    ]
  });

  expect(result.maskedValue).toBe('1234');
});

test('should stop at the first matched maskChar when stopOnFirstMaskCharMatch === true (mkCharGroup)', () => {
  const result = traverseMaskChars({
    ...defaultState,
    valueToBeMaskedCharsByMaskDirection: [
      '1',
      '2',
      '3',
      '4',
      'H',
      'B'
    ],
    stopOnFirstMaskCharMatch: true,
    stopOnFirstValueToBeMaskedCharDidntMatch: false,
    stopOnFirstMaskCharDidntMatch: false,
    maskCharsByDirection: [
      mkCharGroup([
        mkCharBoostRepeat(4)(
          mkCharNum()
        ),
        mkCharSpecific('H')
      ]),
      mkCharLetter()
    ]
  });

  expect(result.maskedValue).toBe('1234H');
});

test('should not stop at the first matched maskChar when stopOnFirstMaskCharMatch === false', () => {
  const result = traverseMaskChars({
    ...defaultState,
    valueToBeMaskedCharsByMaskDirection: [
      '1',
      '2',
      '3',
      '4',
      'B'
    ],
    stopOnFirstMaskCharMatch: false,
    stopOnFirstValueToBeMaskedCharDidntMatch: false,
    stopOnFirstMaskCharDidntMatch: false,
    maskCharsByDirection: [
      mkCharBoostRepeat(4)(
        mkCharNum()
      ),
      mkCharLetter()
    ]
  });

  expect(result.maskedValue).toBe('1234B');
});

test('should stop at the first matched valueToBeMaskedChar when stopOnFirstValueToBeMaskedCharMatch === true', () => {
  const result = traverseMaskChars({
    ...defaultState,
    valueToBeMaskedCharsByMaskDirection: [
      '1',
      '2',
      '3',
      '4',
      'H',
      'B'
    ],
    stopOnFirstMaskCharMatch: false,
    stopOnFirstValueToBeMaskedCharMatch: true,
    stopOnFirstValueToBeMaskedCharDidntMatch: false,
    stopOnFirstMaskCharDidntMatch: false,
    maskCharsByDirection: [
      mkCharGroup([
        mkCharBoostRepeat(4)(
          mkCharNum()
        ),
        mkCharSpecific('H')
      ]),
      mkCharLetter()
    ]
  });

  expect(result.maskedValue).toBe('1');
});

test('should stop at the end of the valueToBeMaskedChars array if all valueToBeMaskedChars match and there are no stop* conditions', () => {
  const result = traverseMaskChars({
    ...defaultState,
    valueToBeMaskedCharsByMaskDirection: [
      '1',
      '2',
      '3',
      '4',
      'H',
      'B'
    ],
    stopOnFirstMaskCharMatch: false,
    stopOnFirstValueToBeMaskedCharMatch: false,
    stopOnFirstValueToBeMaskedCharDidntMatch: false,
    stopOnFirstMaskCharDidntMatch: false,
    maskCharsByDirection: [
      mkCharGroup([
        mkCharBoostRepeat(4)(
          mkCharNum()
        ),
        mkCharSpecific('H')
      ]),
      mkCharLetter()
    ]
  });

  expect(result.maskedValue).toBe('1234HB');
});

test('should stop at the last matched item of the valueToBeMaskedChars array if not all valueToBeMaskedChars match and there are no stop* conditions', () => {
  const result = traverseMaskChars({
    ...defaultState,
    valueToBeMaskedCharsByMaskDirection: [
      '1',
      '2',
      '3',
      '4',
      'H',
      'B'
    ],
    stopOnFirstMaskCharMatch: false,
    stopOnFirstValueToBeMaskedCharMatch: false,
    stopOnFirstValueToBeMaskedCharDidntMatch: false,
    stopOnFirstMaskCharDidntMatch: false,
    maskCharsByDirection: [
      mkCharGroup([
        mkCharBoostRepeat(4)(
          mkCharNum()
        ),
        mkCharSpecific('H')
      ]),
      mkCharSpecific('O')
    ]
  });

  expect(result.maskedValue).toBe('1234H');
});