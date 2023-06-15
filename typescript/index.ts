import { Observable } from "./Observable";
import { Subject } from "./Subject";
import { Subscription } from "./Subscription";
import { interval } from "./interval";

// const obs$ = new Observable((observer) => {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
// });

const obs$ = interval(1000);

const sub: Subscription = obs$.subscribe((data: any) => {
  console.log(data);
});

setTimeout(() => {
  sub.unsubscribe();
}, 5000);

const sub = new Subject();
