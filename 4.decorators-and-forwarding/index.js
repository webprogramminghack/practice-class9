'use strict';

let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    // scary CPU-heavy task here
    return x * this.someMethod();
  },
};

function cachingDecorator(func) {
  let cache = new Map();

  return function () {
    const key = JSON.stringify(arguments);

    if (cache.has(key)) {
      console.log('Returning cached result');
      return cache.get(key);
    }

    let result = func.apply(this, arguments);
    cache.set(key, result);
    return result;
  };
}

worker.slow = cachingDecorator(worker.slow);
console.log(worker.slow(2));
console.log(worker.slow(2));
