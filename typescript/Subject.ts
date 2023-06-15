import { Observable } from "./Observable";
import { Observer } from "./Observer";
import { Subscription } from "./Subscription";

export class Subject<T> extends Observable<T> {  
  next(value?: T) {
    console.log('next value', value)
  }
}