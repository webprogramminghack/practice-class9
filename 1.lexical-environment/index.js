'use strict';

function cacheFunction(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log('Returning cached result');
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const sum = (a, b) => a + b;
const cachedSum = cacheFunction(sum);

console.log(cachedSum(1, 2));
console.log(cachedSum(1, 2));

const multiply = (a, b) => a * b;
const cachedMultiply = cacheFunction(multiply);
