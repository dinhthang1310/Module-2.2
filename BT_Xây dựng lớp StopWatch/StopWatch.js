"use strict";
exports.__esModule = true;
exports.StopWatch = void 0;
var StopWatch = /** @class */ (function () {
    function StopWatch() {
        this._endTime = 0;
        this._startTime = new Date().getMilliseconds();
    }
    StopWatch.prototype.getStartTime = function () {
        return this._startTime;
    };
    StopWatch.prototype.setStartTime = function (value) {
        this._startTime = value;
    };
    StopWatch.prototype.getEndTime = function () {
        return this._endTime;
    };
    StopWatch.prototype.setEndTime = function (value) {
        this._endTime = value;
    };
    StopWatch.prototype.start = function () {
        this._startTime = new Date().getMilliseconds();
    };
    StopWatch.prototype.stop = function () {
        this._endTime = new Date().getMilliseconds();
    };
    StopWatch.prototype.getElap = function () {
        return this._endTime - this._startTime;
    };
    return StopWatch;
}());
exports.StopWatch = StopWatch;
