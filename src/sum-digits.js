const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let res = n.toString().split('').map(Number);
  let res2 = res.reduce((a, b) => a + b, 0);
  let res3 = res2.toString().length;
  if (res3 > 1) {
    let result = res2.toString().split('').map(Number);
    let result1 = result.reduce((a, b) => a + b, 0);
    return result1;
  }
  return res2;
}

module.exports = {
  getSumOfDigits
};
