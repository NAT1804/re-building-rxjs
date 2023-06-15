"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observable = void 0;
class Observable {
    constructor(producer) {
        this.producer = producer;
    }
    subscribe(observer) {
        return this.producer(observer);
    }
}
exports.Observable = Observable;
