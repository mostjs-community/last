(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.mostLast = {})));
}(this, (function (exports) { 'use strict';

  var last = function (stream) {
      return new Last(stream);
  };
  var Last = /** @class */ (function () {
      function Last(source) {
          this.source = source;
      }
      Last.prototype.run = function (sink, scheduler) {
          return this.source.run(new LastSink(sink), scheduler);
      };
      return Last;
  }());
  var LastSink = /** @class */ (function () {
      function LastSink(sink) {
          this.sink = sink;
      }
      LastSink.prototype.event = function (_, val) {
          this.held = { val: val };
      };
      LastSink.prototype.error = function (t, e) {
          this.sink.error(t, e);
      };
      LastSink.prototype.end = function (t) {
          if (this.held) {
              this.sink.event(t, this.held.val);
          }
          this.sink.end(t);
      };
      return LastSink;
  }());

  exports.last = last;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
