'use strict';

function sayHi() {
  console.log('Hi');
}

// console.log(sayHi.name);

const sayHello = function () {
  console.log('Hello');
};

// console.log(sayHello.name);

let arr = [function () {}];

// console.log(arr[0].name); // empty string

function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

// console.log(f1.length);
// console.log(f2.length);
// console.log(many.length);

function sayHi() {
  console.log('Hi');
  sayHi.counter++;
}

sayHi.counter = 0;

sayHi();
sayHi();

console.log(sayHi.counter);
