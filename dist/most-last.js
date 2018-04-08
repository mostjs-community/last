(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var last = exports.last = function (stream) { return new Last(stream); };

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

})));
//# sourceMappingURL=most-last.js.map
