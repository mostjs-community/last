import { Disposable, Stream, Sink, Scheduler, Time } from '@most/types'

interface Held<T> {
  val: T;
}

const last = <T>(stream: Stream<T>) =>
  new Last(stream)

class Last<T> implements Stream<T> {
  constructor (private source: Stream<T>) {}

  run (sink: Sink<T>, scheduler: Scheduler) {
    return this.source.run(new LastSink(sink), scheduler)
  }
}

class LastSink<T> implements Sink<T> {
  private held?: Held<T>
  constructor (private sink: Sink<T>) {}

  event (_: Time, val: T) {
    this.held = { val }
  }

  error (t: Time, e: Error) {
    this.sink.error(t, e)
  }

  end (t: Time) {
    if (this.held) {
      this.sink.event(t, this.held.val)
    }
    this.sink.end(t)
  }
}

export { last, Last }