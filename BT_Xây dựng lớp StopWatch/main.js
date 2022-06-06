"use strict";
exports.__esModule = true;
var StopWatch_1 = require("./StopWatch");
var stop = new StopWatch_1.StopWatch();
stop.start();
var sum = 0;
for (var i = 0; i < 100000; i++) {
    sum += i;
}
stop.stop();
console.log(stop.getElap());
