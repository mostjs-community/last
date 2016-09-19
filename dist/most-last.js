(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('most')) :
  typeof define === 'function' && define.amd ? define(['exports', 'most'], factory) :
  (factory((global.mostLast = global.mostLast || {}),global.most));
}(this, (function (exports,most) { 'use strict';

function last(stream) {
  return new most.Stream(new Last(stream.source));
}

var Last = function Last(source) {
  this.source = source;
};

Last.prototype.run = function run (sink, scheduler) {
  return this.source.run(new LastSink(sink), scheduler);
};

var LastSink = function LastSink(sink) {
  this.sink = sink;
  this.has = false;
  this.value = void 0;
};

LastSink.prototype.event = function event (t, x) {
  this.has = true;
  this.value = x;
};

LastSink.prototype.error = function error (t, e) {
  this.sink.error(t, e);
};

LastSink.prototype.end = function end (t, x) {
  if (this.has) {
    this.sink.event(t, this.value);
  }
  this.sink.end(t, x);
};

exports.last = last;

Object.defineProperty(exports, '__esModule', { value: true });

})));
