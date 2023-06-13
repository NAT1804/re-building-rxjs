export class Observable {
  constructor(funcWaitToRun) {
    this.subscribe = funcWaitToRun;
  }
  static timeout(miliseconds) {

    function timeoutWaitToRun(next) {
      const setTimeoutId = setTimeout(() => {
        next();
      }, miliseconds);

      return new Subscription(() => {
        clearTimeout(setTimeoutId);
      });
    }

    return new Observable(timeoutWaitToRun);

  }
  static interval(miliseconds) {

    function intervalWaitToRun(next) {
      const setIntervalId = setInterval(() => {
        next();
      }, miliseconds);

      return new Subscription(() => {
        clearInterval(setIntervalId);
      });
    }

    return new Observable(intervalWaitToRun);

  }
}

export class Subscription {
  constructor(funcUnsubscribe) {
    this.unsubscribe = funcUnsubscribe;
  }
}



