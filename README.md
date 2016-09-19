# most-last

> Wait for your last event to play

Last will wait until your stream ends, and play the very last event that has occurred.

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
