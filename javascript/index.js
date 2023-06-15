"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interval_1 = require("./interval");
// const obs$ = new Observable((observer) => {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
// });
const obs$ = (0, interval_1.interval)(1000);
const sub = obs$.subscribe({
    next: (data) => {
        console.log(data);
    },
});
setTimeout(() => {
    sub.unsubscribe();
}, 5000);
