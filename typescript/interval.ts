import { Observable } from "./Observable";
import { Observer } from "./Observer";
import { Subscription } from "./Subscription";

export function interval(time: number) {
  function _subscribe(observer: Observer): Subscription {
    let count = 0;
    const timerInterval = setInterval(() => {
      observer.next(count++);
    }, time);
    function _unsubscribe(): void {
      clearInterval(timerInterval);
    }
    return new Subscription(_unsubscribe);
  }

  return new Observable(_subscribe);
}
