"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interval = void 0;
const Observable_1 = require("./Observable");
const Subscription_1 = require("./Subscription");
function interval(time) {
    function _subscribe(observer) {
        let count = 0;
        const timerInterval = setInterval(() => {
            observer.next(count++);
        }, time);
        function _unsubscribe() {
            clearInterval(timerInterval);
        }
        return new Subscription_1.Subscription(_unsubscribe);
    }
    return new Observable_1.Observable(_subscribe);
}
exports.interval = interval;
