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

    console.log(intervalWaitToRun, 'function')

    return new Observable(intervalWaitToRun);
    // return new Observable((next) => {
    //   const setIntervalId = setInterval(() => {
    //     next();
    //   }, miliseconds);

    //   return new Subscription(() => {
    //     clearInterval(setIntervalId);
    //   });
    // });

  }
}

export class Subscription {
  constructor(funcUnsubscribe) {
    this.unsubscribe = funcUnsubscribe;
  }
}



