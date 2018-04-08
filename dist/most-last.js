(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.mostLast = global.mostLast || {})));
}(this, (function (exports) { 'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var last = function last(stream) {
  return new Last(stream);
};

var Last = function () {
  function Last(source) {
    _classCallCheck(this, Last);

    this.source = source;
  }

  _createClass(Last, [{
    key: "run",
    value: function run(sink, scheduler) {
      return this.source.run(new LastSink(sink), scheduler);
    }
  }]);

  return Last;
}();

var LastSink = function () {
  function LastSink(sink) {
    _classCallCheck(this, LastSink);

    this.sink = sink;
    this.has = false;
    this.value = void 0;
  }

  _createClass(LastSink, [{
    key: "event",
    value: function event(t, x) {
      this.has = true;
      this.value = x;
    }
  }, {
    key: "error",
    value: function error(t, e) {
      this.sink.error(t, e);
    }
  }, {
    key: "end",
    value: function end(t, x) {
      if (this.has) {
        this.sink.event(t, this.value);
      }
      this.sink.end(t, x);
    }
  }]);

  return LastSink;
}();

exports.last = last;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=most-last.js.map
