# most-last

> Wait for your last event to play

Last will wait until your stream ends, and play the very last event that has occurred.

**Warning**: v2.x is only compatible with [@most/core](https://github.com/mostjs/core). For the old [mostjs](https://gitter.im/cujojs/most), use `most-last` v1.0.

## Get it

```sh
npm install --save most-last
```

## Usage

```js
import { iterate, take } from 'most'
import { last } from 'most-last'

const stream = last(take(5, iterate(x => x + 1, 0)))

stream.observe(function (x) {
  if (x === 4) { // true
    ...
  }
})

```
