'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.last = last;

var _most = require('most');

function last(stream) {
  return new _most.Stream(new Last(stream.source));
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