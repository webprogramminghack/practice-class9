'use strict';

let user = {
  firstName: 'John',
  sayHi() {
    console.log(`Hello, ${this.firstName}`);
  },
};

// setTimeout(user.sayHi, 1000);
// setTimeout(() => user.sayHi(), 1000);

// const boundFunc = user.sayHi.bind(user);
// setTimeout(boundFunc, 1000);

user = {
  sayHi() {
    console.log('The user has been changed');
  },
};

let user1 = {
  firstName: 'John',
};

let user2 = {
  firstName: 'Ann',
};

function sayName() {
  console.log(this.firstName);
}

const boundSayName1 = sayName.bind(user1);
// boundSayName1();

const boundSayName2 = sayName.bind(user2);
// boundSayName2();

// partial functions
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
console.log(double());
