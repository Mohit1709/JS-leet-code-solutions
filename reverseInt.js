/* Task :
 *   Given a signed 32-bit integer x, return x with its digits reversed. 
    If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0 
*/

/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x = 0) {
  let result = 0,
    isNegative = x < 0;

  x = Math.abs(x);
  while (x) {
    result = result * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return 2147483648 < result ? 0 : isNegative ? -result : result;
};
