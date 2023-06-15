import { Observer } from "./Observer";
import { Subscription } from "./Subscription";

export class Observable<T> {
  constructor(private producer: (observer?: Observer | ((value?: T) => void) | null) => Subscription) {}

  subscribe(observer?: Observer | ((value?: T) => void) | null): Subscription {
    return this.producer(observer);
  }
}
