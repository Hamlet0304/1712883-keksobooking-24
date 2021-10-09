const getRandomNumberFromRange = function (from, at) {
  return Math.floor(Math.random() * (from - at + 1)) + at;
};

const getRandomNumberFromRangeByPrecision = function (from, at, presicion) {
  return getRandomNumberFromRangeByPrecision(from, at).toFixed(presicion);
};

export {getRandomNumberFromRange ,getRandomNumberFromRangeByPrecision };
