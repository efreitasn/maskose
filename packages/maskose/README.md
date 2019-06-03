<div align="center">
  <img alt="maskose" src="https://raw.githubusercontent.com/efreitasn/maskose/master/maskose-logo.png">
  <br />
  <em>A composable way to make masks.</em>
  <br />
  <br />
</div>

<div align="center">
  <a href="https://npmjs.com/package/maskose">
    <img
      alt="Version"
      src="https://img.shields.io/npm/v/maskose.svg"
    >
  </a>
  <a href="https://travis-ci.org/efreitasn/maskose">
    <img
      alt="Build"
      src="https://img.shields.io/travis/efreitasn/maskose.svg"
    >
  </a>
  <a href="https://npmjs.com/package/maskose">
    <img
      alt="Size"
      src="https://img.shields.io/bundlephobia/minzip/maskose.svg?label=min%2Bgz"
    >
  </a>
  <a href="https://github.com/efreitasn/maskose/blob/master/LICENSE">
    <img
      alt="License"
      src="https://img.shields.io/npm/l/maskose.svg"
    >
  </a>
</div>
</div>

---

## Table of contents
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [API](#api)
  - [Functions](#functions)
    - [`mkCreate`](#mkcreate)
    - [`mkMaskValue`](#mkmaskvalue)
    - [`mkUnmaskValue`](#mkunmaskvalue)
    - [`mkMatch`](#mkmatch)
    - [`mkRemoveToBePutChars`](#mkremovetobeputchars)
    - [`mkBoostChar`](#mkboostchar)
    - [`mkBoostMask`](#mkboostmask)
  - [Mask characters](#mask-characters)
    - [`mkCharNum`](#mkcharnum)
    - [`mkCharLetter`](#mkcharletter)
    - [`mkCharToBePut`](#mkchartobeput)
    - [`mkCharGroup`](#mkchargroup)
  - [Boosts](#boosts)
    - [`mkMaskBoostEndless`](#mkmaskboostendless)
    - [`mkMaskBoostRightToLeft`](#mkmaskboostrighttoleft)
    - [`mkCharBoostRepeat`](#mkcharboostrepeat)
    - [`mkCharBoostValueLengthEqualTo`](#mkcharboostvaluelengthequalto)
    - [`mkCharBoostValueLengthGreaterThan`](#mkcharboostvaluelengthgreaterthan)
    - [`mkCharBoostValueLengthLessThan`](#mkcharboostvaluelengthlessthan)
- [Examples](#examples)
  - [US currency mask](#us-currency-mask)
  - [BR cellphone number mask](#br-cellphone-number-mask)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation
```bash
yarn add maskose
```
or with npm:
```bash
npm install maskose
```

## API

### Functions

#### `mkCreate`
```typescript
mkCreate(chars: MaskoseMaskChar[]): MaskoseMask
```
Creates a left-to-right non-endless mask with the provided characters.

#### `mkMaskValue`
```typescript
mkMaskValue(mask: MaskoseMask): (value: string) => string
```
> **Note**: this is an unary function that returns another unary function.

Masks the provided value using the provided mask. If a character in the provided value doesn't match its correspondent mask character, the masking stops and the portion of the value masked until this point is returned.

#### `mkUnmaskValue`
```typescript
mkUnmaskValue(mask: MaskoseMask): (value: string) => string
```
> **Note**: this is an unary function that returns another unary function.

Unmasks the provided value using the provided mask. If a character in the provided value doesn't match its correspondent mask character, the unmasking stops and the portion of the value unmasked until this point is returned.

#### `mkMatch`
```typescript
mkMatch(mask: MaskoseMask): (value: string) => string
```
> **Note**: this is an unary function that returns another unary function.

Checks whether the provided value matches the provided mask. To be a successful check, the provided value has to be already masked.

#### `mkRemoveToBePutChars`
```typescript
mkRemoveToBePutChars(value: string)
```
Removes all characters that are considered to-be-put characters from the provided value.

> **Note**: The difference between `mkRemoveToBePutChars` and `mkUnmaskValue` is that both of them remove to-be-put characters, but only the later also checks if those characters are in the places specified when creating the provided mask. In other words, `mkUnmaskValue` is a reversed version of `mkMaskValue`, while `mkRemoveToBePutChars` just removes every character that is considered a to-be-put, regardless of whether they're in the 'right places'.

#### `mkBoostChar`
```typescript
mkBoostChar(char: MaskoseMaskChar):
  (charBoosts: MaskoseBoost<MaskoseMaskChar>[]) => MaskoseMaskChar
```
> **Note**: this is an unary function that returns another unary function.

Adds a list of boosts to a mask character.

#### `mkBoostMask`
```typescript
mkBoostMask(mask: MaskoseMask):
  (charBoosts: MaskoseBoost<MaskoseMask>[]) => MaskoseMask
```
> **Note**: this is an unary function that returns another unary function.

Adds a list of boosts to a mask.

### Mask characters
```typescript
type MaskoseMaskChar =
  | MaskoseMaskCharNum
  | MaskoseMaskCharLetter
  | MaskoseMaskCharToBePut
  | MaskoseMaskCharGroup
```

#### `mkCharNum`
```typescript
mkCharNum(): MaskoseMaskCharNum
```
Represents a character in the range 0 to 9.

#### `mkCharLetter`
```typescript
mkCharLetter(
  options?: {
    caseSensitive?: boolean
  }
): MaskoseMaskCharLetter
```
Represents a character in the range A to Z. If `options.caseSensitive` is not specified, it default to `false`.

#### `mkCharToBePut`
```typescript
mkCharToBePut(
  char: '(' | ')' | '[' | ']' | '-' | '/' | '\\' | ',' | '.' | ' '
): MaskoseMaskCharToBePut
```
Represents a character that's not expected to be in the value that will be masked, but expected to be in the value that will be unmasked. This is the type of character that will be put in the value when masking. A good example of a character like this is the dash (-) in a phone number mask.

#### `mkCharGroup`
```typescript
mkCharGroup(chars: MaskoseMaskChar[]): MaskoseMaskCharGroup
```
Represents a group of characters. It's mostly used to boost more than one character at once.

### Boosts
```typescript
type MaskoseBoost<T extends (
  | MaskoseMaskChar
  | MaskoseMask
)> = (val: T) => T;
```
> **Note**: despite the fact that `MaskoseBoost` seems like the type signature of the identity function, it represents the fact that a boost is a function that will always return an object of the same type of the received one. What a boost does is creating a shallow copy of the provided object, altering one or more of the copy's props and returning the copy.

#### `mkMaskBoostEndless`
```typescript
mkMaskBoostEndless(): MaskoseBoost<MaskoseMask>
```
> **Note**: this is a nullary function that returns an unary function.

Makes the provided mask an endless mask. An endless mask is a mask that will match any character that comes after its chars list's tail only if this character matches its chars list's tail. See the [examples](#Examples) section below to see when this might be useful.

#### `mkMaskBoostRightToLeft`
```typescript
mkMaskBoostRightToLeft(): MaskoseBoost<MaskoseMask>
```
> **Note**: this is a nullary function that returns an unary function.

Makes the provided mask a mask whose characters will be read from right to left. Besides changing the order in which the provided mask's characters are read, it also changes the order in which the characters of the masked or unmasked value are read. This boost is mostly used when dealing with number-formating masks, e.g. a currency mask. See the [examples](#Examples) section below to see when this might be useful.

#### `mkCharBoostRepeat`
```typescript
mkCharBoostRepeat(
  num: number
): MaskoseBoost<MaskoseMaskChar>
```
> **Note**: this is an unary function that returns another unary function.

Makes the provided mask character be repeated `num` times. See the [examples](#Examples) section below to see when this might be useful.

#### `mkCharBoostValueLengthEqualTo`
```typescript
mkCharBoostValueLengthEqualTo(
  values: {
    masked: number;
    unmasked: number;
  }
): MaskoseBoost<MaskoseMaskChar>
```
> **Note**: this is an unary function that returns another unary function.

Makes the provided mask character only present in a mask if the value to be masked is equal to `values.unmasked` or the value to be unmasked is equal to `value.masked`. Which one of these checks will be made depends on the type of value that a function expects. For example, `mkMaskValue` will check the `values.unmasked` value, while `mkUnmaskValue` will check the `values.masked` value.

#### `mkCharBoostValueLengthGreaterThan`
```typescript
mkCharBoostValueLengthGreaterThan(
  values: {
    masked: number;
    unmasked: number;
  }
): MaskoseBoost<MaskoseMaskChar>
```
> **Note**: this is an unary function that returns another unary function.

Makes the provided mask character only present in a mask if the value to be masked is greater than `values.unmasked` or the value to be unmasked is greater than `value.masked`. Which one of these checks will be made depends on the type of value that a function expects. For example, `mkMaskValue` will check the `values.unmasked` value, while `mkUnmaskValue` will check the `values.masked` value.

#### `mkCharBoostValueLengthLessThan`
```typescript
mkCharBoostValueLengthLessThan(
  values: {
    masked: number;
    unmasked: number;
  }
): MaskoseBoost<MaskoseMaskChar>
```
> **Note**: this is an unary function that returns another unary function.

Makes the provided mask character only present in a mask if the value to be masked is less than `values.unmasked` or the value to be unmasked is less than `value.masked`. Which one of these checks will be made depends on the type of value that a function expects. For example, `mkMaskValue` will check the `values.unmasked` value, while `mkUnmaskValue` will check the `values.masked` value.

## Examples

### US currency mask
```typescript
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
const mkUnmaskValueWithMask = mkUnmaskValue(maskBoosted);
const mkMatchWithMask = mkMatch(maskBoosted);

// Masking
console.log(mkMaskValueWithMask('12345'));
'123.45'

console.log(mkMaskValueWithMask('123456789'));
'1,234,567.89'

console.log(mkMaskValueWithMask('ABCDE56789'));
'567.89'

// Unmasking
console.log(mkUnmaskValueWithMask('5,678.30'));
'567830'

console.log(mkUnmaskValueWithMask('ABCDEFG'));
''

console.log(mkUnmaskValueWithMask('1.230,500.10'));
'23050010'

// Matching
console.log(mkMatchWithMask('5,678.30'));
true

console.log(mkMatchWithMask('980.351,9345.10'));
false

console.log(mkMatchWithMask('1,900,800,300.50'));
true
```

### BR cellphone number mask
```typescript
const mask = mkCreate([
  mkCharToBePut('('),
  mkCharBoostRepeat(2)(mkCharNum()),
  mkCharToBePut(')'),
  mkCharToBePut(' '),
  mkCharBoostValueLengthGreaterThan({
    masked: 14,
    unmasked: 10
  })(mkCharNum()),
  mkCharBoostRepeat(4)(mkCharNum()),
  mkCharToBePut('-'),
  mkCharBoostRepeat(4)(mkCharNum())
]);

const mkMaskValueWithMask = mkMaskValue(mask);
const mkUnmaskValueWithMask = mkUnmaskValue(mask);
const mkMatchWithMask = mkMatch(mask);

// Masking
console.log(mkMaskValueWithMask('9912345678'));
'(99) 1234-5678'

console.log(mkMaskValueWithMask('99123456789'));
'(99) 12345-6789'

console.log(mkMaskValueWithMask('991234'));
'(99) 1234'

// Unmasking
console.log(mkUnmaskValueWithMask('(11) 9876-5432'));
'1198765432'

console.log(mkUnmaskValueWithMask('(11) 98765-4321'));
'11987654321'

console.log(mkUnmaskValueWithMask('(1B) 98765-4321'));
'1'

// Matching
console.log(mkMatchWithMask('(11) 9876-5432'));
true

console.log(mkMatchWithMask('(11) 98765-4321'));
true

console.log(mkMatchWithMask('(1B) 98765-4321'));
false
```