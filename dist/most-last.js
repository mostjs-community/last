(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.mostLast = global.mostLast || {})));
}(this, (function (exports) { 'use strict';

var last = function (stream) {
    return new Last(stream);
};
var Last = (function () {
    function Last(source) {
        this.source = source;
    }
    Last.prototype.run = function (sink, scheduler) {
        return this.source.run(new LastSink(sink), scheduler);
    };
    return Last;
}());
var LastSink = (function () {
    function LastSink(sink) {
        this.sink = sink;
        this.has = false;
        this.value = void 0;
    }
    LastSink.prototype.event = function (t, x) {
        this.has = true;
        this.value = x;
    };
    LastSink.prototype.error = function (t, e) {
        this.sink.error(t, e);
    };
    LastSink.prototype.end = function (t) {
        if (this.has) {
            this.sink.event(t, this.value);
        }
        this.sink.end(t);
    };
    return LastSink;
}());

exports.last = last;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=most-last.js.map
