const getRandomNumberFromRange = function (from, at) {
  return Math.floor(Math.random() * (from - at + 1)) + at;
};

const getRandomNumberFromRangeByPrecision = function (from, at, presicion) {
  return getRandomNumberFromRangeByPrecision(from, at).toFixed(presicion);
};

console.log(getRandomNumberFromRange(10, 15));
console.log(getRandomNumberFromRangeByPrecision(10, 15, 2));
console.log(toFixed);
