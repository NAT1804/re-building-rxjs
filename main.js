import * as RxJS from './observable.js';
// Promise.timeout = function(miliseconds) {

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('123');
//     }, miliseconds);
//   })
// }

console.log('Starting timer...')
const timer = document.getElementById('timer');

function updateTime(el) {
  const now = new Date();
  el.innerHTML = now.toLocaleTimeString();
}

const subscription = RxJS.Observable.interval(1000).subscribe(() => {
  console.log('Running...');
  updateTime(timer)
});

RxJS.Observable.timeout(5000).subscribe(() => {
  console.log('Stopped timer')
  subscription.unsubscribe()
})

// const observer = {
//   next: x => console.log('Observer got a next value: ' + x),
//   error: err => console.error('Observer got an error: ' + err),
//   complete: () => console.log('Observer got a complete notification'),
// };

// const observable = new RxJS.Observable((observer) => {
//     observer.next(1);
//     observer.next(2);
//     observer.complete()
// })

// observable.subscribe(observer)
