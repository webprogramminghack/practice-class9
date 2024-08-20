'use strict';

function sayHello() {
  console.log('hello');
}

// sayHello();
// setTimeout(sayHello, 3000);

function sayHi(phrase, who) {
  console.log(phrase + ', ' + who);
}

// setTimeout(sayHi, 1000, 'Hello', 'John');

// Canceling with clearTimeout
// let timerId = setTimeout(() => console.log('never happens'), 0);

// console.log('hello');
// clearTimeout(timerId);

// let timerId = setInterval(() => console.log('tick'), 2000);

// setTimeout(() => {
//   clearInterval(timerId);
// }, 5000);

let timerId = setTimeout(function tick() {
  console.log('tick');
  timerId = setTimeout(tick, 2000);
}, 2000);

// let timerId = setInterval(() => console.log('tick'), 2000);
