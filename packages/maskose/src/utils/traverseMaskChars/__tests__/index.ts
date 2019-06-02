import traverseMaskChars from '../../traverseMaskChars';
import mkCharBoostRepeat from '../../../boosts/char/repeat';
import mkCharNum from '../../../mask/chars/num';
import mkCharLetter from '../../../mask/chars/letter';
import mkCharGroup from '../../../mask/chars/group';
import mkCharToBePut from '../../../mask/chars/toBePut';
import {
  TRAVERSE_MASK_CHARS_MASK_MODE,
  TRAVERSE_MASK_CHARS_UNMASK_MODE,
  defaultState
} from '../../traverseMaskChars/state';

describe(`when mode is ${TRAVERSE_MASK_CHARS_MASK_MODE} mode`, () => {
  it('should stop at the first matched maskChar when stopOnFirstMaskCharMatch === true (mkCharBoostRepeat)', () => {
    const result = traverseMaskChars({
      ...defaultState,
      mode: TRAVERSE_MASK_CHARS_MASK_MODE,
      valueCharsByDirection: [
        '1',
        '2',
        '3',
        '4',
        'B'
      ],
      stopOnFirstMaskCharMatch: true,
      stopOnFirstValueCharDidntMatch: false,
      stopOnFirstMaskCharDidntMatch: false,
      maskCharsByDirection: [
        mkCharBoostRepeat(4)(
          mkCharNum()
        ),
        mkCharLetter()
      ]
    });
  
    expect(result.result).toBe('1234');
  });
  
  it('should stop at the first matched maskChar when stopOnFirstMaskCharMatch === true (mkCharGroup)', () => {
    const result = traverseMaskChars({
      ...defaultState,
      mode: TRAVERSE_MASK_CHARS_MASK_MODE,
      valueCharsByDirection: [
        '1',
        '2',
        '3',
        '4',
        'A',
        'B'
      ],
      stopOnFirstMaskCharMatch: true,
      stopOnFirstValueCharDidntMatch: false,
      stopOnFirstMaskCharDidntMatch: false,
      maskCharsByDirection: [
        mkCharGroup([
          mkCharBoostRepeat(4)(
            mkCharNum()
          ),
          mkCharLetter()
        ]),
        mkCharLetter()
      ]
    });
  
    expect(result.result).toBe('1234A');
  });
  
  it('should not stop at the first matched maskChar when stopOnFirstMaskCharMatch === false', () => {
    const result = traverseMaskChars({
      ...defaultState,
      mode: TRAVERSE_MASK_CHARS_MASK_MODE,
      valueCharsByDirection: [
        '1',
        '2',
        '3',
        '4',
        'B'
      ],
      stopOnFirstMaskCharMatch: false,
      stopOnFirstValueCharDidntMatch: false,
      stopOnFirstMaskCharDidntMatch: false,
      maskCharsByDirection: [
        mkCharBoostRepeat(4)(
          mkCharNum()
        ),
        mkCharLetter()
      ]
    });
  
    expect(result.result).toBe('1234B');
  });
  
  it('should stop at the first matched valueToBeMaskedChar when stopOnFirstValueCharMatch === true', () => {
    const result = traverseMaskChars({
      ...defaultState,
      mode: TRAVERSE_MASK_CHARS_MASK_MODE,
      valueCharsByDirection: [
        '1',
        '2',
        '3',
        '4',
        'H',
        'B'
      ],
      stopOnFirstMaskCharMatch: false,
      stopOnFirstValueCharMatch: true,
      stopOnFirstValueCharDidntMatch: false,
      stopOnFirstMaskCharDidntMatch: false,
      maskCharsByDirection: [
        mkCharGroup([
          mkCharBoostRepeat(4)(
            mkCharNum()
          ),
          mkCharLetter()
        ]),
        mkCharLetter()
      ]
    });
  
    expect(result.result).toBe('1');
  });
  
  it('should stop at the end of the valueToBeMaskedChars array if all valueToBeMaskedChars match and there are no stop* conditions', () => {
    const result = traverseMaskChars({
      ...defaultState,
      mode: TRAVERSE_MASK_CHARS_MASK_MODE,
      valueCharsByDirection: [
        '1',
        '2',
        '3',
        '4',
        'H',
        'B'
      ],
      stopOnFirstMaskCharMatch: false,
      stopOnFirstValueCharMatch: false,
      stopOnFirstValueCharDidntMatch: false,
      stopOnFirstMaskCharDidntMatch: false,
      maskCharsByDirection: [
        mkCharGroup([
          mkCharBoostRepeat(4)(
            mkCharNum()
          ),
          mkCharLetter()
        ]),
        mkCharLetter()
      ]
    });
  
    expect(result.result).toBe('1234HB');
  });
  
  it('should stop at the last matched item of the valueToBeMaskedChars array if not all valueToBeMaskedChars match and there are no stop* conditions', () => {
    const result = traverseMaskChars({
      ...defaultState,
      mode: TRAVERSE_MASK_CHARS_MASK_MODE,
      valueCharsByDirection: [
        '1',
        '2',
        '3',
        '4',
        'A',
        'B'
      ],
      stopOnFirstMaskCharMatch: false,
      stopOnFirstValueCharMatch: false,
      stopOnFirstValueCharDidntMatch: false,
      stopOnFirstMaskCharDidntMatch: false,
      maskCharsByDirection: [
        mkCharGroup([
          mkCharBoostRepeat(4)(
            mkCharNum()
          ),
          mkCharLetter()
        ]),
        mkCharNum()
      ]
    });
  
    expect(result.result).toBe('1234A');
  });
});

describe(`when mode is ${TRAVERSE_MASK_CHARS_UNMASK_MODE}`, () => {
  it('should return an object whose result prop is a string composed by the items in the valueChars array without toBePut-correspondent characters', () => {
    const result = traverseMaskChars({
      ...defaultState,
      mode: TRAVERSE_MASK_CHARS_UNMASK_MODE,
      valueCharsByDirection: [
        '1',
        '-',
        '2',
        '3',
        '-',
        '4',
        'A'
      ],
      maskCharsByDirection: [
        mkCharBoostRepeat(2)(
          mkCharGroup([
            mkCharNum(),
            mkCharToBePut('-'),
            mkCharNum()
          ])
        ),
        mkCharLetter()
      ]
    });

    expect(result.result).toBe('1234A');
  });
});