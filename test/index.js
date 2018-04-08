import { describe, it } from 'mocha'
import assert from 'power-assert'

import { at, mergeArray, runEffects, tap } from '@most/core'
import { newDefaultScheduler } from '@most/scheduler'

import { last } from '../src'

describe('last', () => {
  it('should play the last value before ending', () => {
    const stream = mergeArray([at(10, 1), at(20, 2), at(30, 3)])

    const assertedLast = tap(x => { assert(x === 3) }, last(stream));

    return runEffects(assertedLast, newDefaultScheduler())
  })
})
