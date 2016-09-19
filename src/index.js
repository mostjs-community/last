export const last = stream => new stream.constructor(new Last(stream.source))

class Last {
  constructor (source) {
    this.source = source
  }

  run (sink, scheduler) {
    return this.source.run(new LastSink(sink), scheduler)
  }
}

class LastSink {
  constructor (sink) {
    this.sink = sink
    this.has = false
    this.value = void 0
  }

  event (t, x) {
    this.has = true
    this.value = x
  }

  error (t, e) {
    this.sink.error(t, e)
  }

  end (t, x) {
    if (this.has) {
      this.sink.event(t, this.value)
    }
    this.sink.end(t, x)
  }
}
