# Maskose

## fns

### mkMask
```javascript
mkMask(...maskoseChars: MaskoseChar[]) => MaskoseMask
```
Create a mask. It resembles the pipe function in functional programming. The provided [characters](#mask-characters) are added from left to right to the mask.

### mkMaskValue
```javascript
mkMaskValue(
  options: {
    mask: MaskoseMask,
    rightToLeft?: boolean
  }
) => (value: string) => string
```
Mask a value. The rightToLeft option is generally used when it's a [currency mask](#currency-mask).

## Mask characters
Mask characters are divided into two groups: primitives and non-primitives. A primitive mask character is the smallest part of a mask, while a non-primitive is a wrapper that resolves to one or more primitive characters.

### Primitives
#### mkCharNum
```javascript
mkCharNum(): MaskoseCharNum
```
A character that matches in the range 0 to 9.

#### mkCharLetter
```javascript
mkCharLetter(): MaskoseCharLetter
```
A character that matches in the range a to z (case insensitive).

#### mkCharToBePut
```javascript
mkCharToBePut(char: string): MaskoseCharToBePut
```
A character that's not expected to be in the value to be masked. When making a phone number mask, the dash character (-) would be such a
character. It's used when [formatting a value](#us-phone-number-mask).

#### mkCharSpecific
```javascript
mkCharSpecific(char: string): MaskoseCharSpecific
```
A character that matches only the provided character.

### Non-primitives
#### mkCharRepeat
```javascript
mkCharRepeat(n: number, primitive: PrimitiveMaskoseChar): MaskoseCharRepeat
```
A character that will resolve to `n` primitives of the same type.

#### mkCharPredicateFn
```javascript
mkCharPredicateFn(
  fn: (arg: {
    value: string
  } => boolean),
  primitive: PrimitiveMaskoseChar
): MaskoseCharPredicateFn
```
A character that will only resolve to a primitive if its `fn` returns `true`. Otherwise, the primitive will be omitted from the mask.

## Recipes

### Currency mask
A currency mask is the perfect use case for the rightToLeft option in the mkMaskValue function.
```javascript
const mask = mkMask(
  mkCharRepeat(2, mkCharNum())),
  mkCharToBePut('.'),
  mkCharRepeat(3, mkCharNum())),
  mkCharToBePut(','),
  mkCharRepeat(2, mkCharNum()))
);
const formatWithMask = mkMaskValue(
  {
    mask,
    rightToLeft: true
  }
);

const value = '1234567';
const result = formatWithMask(value);

console.log(result); // '12.345,67';

const value2 = '1234';
const result = formatWithMask(value);

console.log(result); // '12,34';
```

### US phone number mask
```javascript
const mask = mkMask(
  mkCharToBePut('('),
  mkCharRepeat(3, mkCharNum())),
  mkCharToBePut(')'),
  mkCharToBePut(' '),
  mkCharRepeat(3, mkCharNum())),
  mkCharToBePut('-'),
  mkCharRepeat(4, mkCharNum()))
);
const formatWithMask = mkMaskValue(
  {
    mask
  }
);

const value = '0123456789';
const result = formatWithMask(value);

console.log(result); // '(012) 345-6789';
```