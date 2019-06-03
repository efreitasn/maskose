<div align="center">
  <img alt="maskose" src="https://raw.githubusercontent.com/efreitasn/maskose/master/maskose-logo.png">
  <br />
  <em>A composable way to make masks.</em>
  <br />
  <br />
</div>

<div align="center">
  <a href="https://npmjs.com/package/maskose-react">
    <img
      alt="Version"
      src="https://img.shields.io/npm/v/maskose-react.svg?color=%237075d6&style=popout"
    >
  </a>
  <a href="https://github.com/efreitasn/maskose/blob/master/LICENSE">
    <img
      alt="License"
      src="https://img.shields.io/npm/l/maskose-react.svg?color=%237075d6&style=popout"
    >
  </a>
</div>
</div>

---

## Table of contents
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Requirements](#requirements)
- [Installation](#installation)
- [Components](#components)
  - [MaskoseInput](#maskoseinput)
- [Examples](#examples)
- [Docs](#docs)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Requirements
This packages requires `react@16.8` and `react-dom@16.8`. That's because it uses hooks under the hood, even though everything could be done with class-based components. If you need support for a version prior than the one with hooks, please open an issue.

## Installation
```bash
yarn add maskose
```
or with npm:
```bash
npm install maskose
```

## Components

### MaskoseInput

| Prop name             | Type                              | Description                                                                        |
| :-------------------: | :-------------------------------: | ---------------------------------------------------------------------------------- |
| mask                  | `MaskoseMask`                     | The mask to be used when masking the value.                                        |
| maskedValue           | `string`                          | The current masked value (the value in the input).                                 |
| onMaskedValueChange   | `(maskedValue: string) => void`   | Callback that will be called every time the masked value (input value) changes.    |

## Examples

```typescript
const priceMask = mkBoostMask(
  mkCreate([
    mkCharBoostRepeat(3)(mkCharNum()),
    mkCharToBePut('.'),
    mkCharBoostRepeat(2)(mkCharNum()),
  ])
)([
  mkMaskBoostRightToLeft()
]);

function Form() {
  const [price, setPrice] = useState('');

  return (
    <>
      <MaskoseInput
        mask={priceMask}
        maskedValue={price}
        onMaskedValueChange={setPrice}
      />
    </>
  );
}
```

## Docs
If you're looking for the docs of the maskose lib, you can find the [here](https://github.com/efreitasn/maskose/tree/master/packages/maskose).