import { describe, it } from 'mocha'
import assert from 'power-assert'

import { from, observe } from 'most'
import { last } from '../src'

describe('last', () => {
  it('should play the last value before ending', () => {
    const stream = from([1, 2, 3])

    return observe((x) => { assert(x === 3) }, last(stream))
  })
})
