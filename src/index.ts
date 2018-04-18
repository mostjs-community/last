import { Stream, Sink, Scheduler, Time } from '@most/types'

export const last = <T>(stream: Stream<T>) =>
  new Last(stream)

class Last<T> {
  constructor (private source: Stream<T>) {}

  run (sink: Sink<T>, scheduler: Scheduler) {
    return this.source.run(new LastSink(sink), scheduler)
  }
}

class LastSink<V> {
  private has: boolean = false
  private value: V = void 0

  constructor (private sink: Sink<V>) {}

  event (t: Time, x: V) {
    this.has = true
    this.value = x
  }

  error (t: Time, e: Error) {
    this.sink.error(t, e)
  }

  end (t: Time) {
    if (this.has) {
      this.sink.event(t, this.value)
    }
    this.sink.end(t)
  }
}
