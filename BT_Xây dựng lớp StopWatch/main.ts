import {StopWatch} from "./StopWatch";

let stop:StopWatch = new StopWatch()
stop.start();
 let sum = 0;
 for (let i = 0; i < 100000;i++) {
     sum += i;
 }

 stop.stop();
console.log(stop.getElap())