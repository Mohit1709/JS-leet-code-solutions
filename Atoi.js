/** Task : 
 * Implement the myAtoi(string s) function, 
   which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).
*/

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  var res = 0,
    charCode = 0,
    isNegative = false,
    noSign = true,
    max = 2147483648;

  for (let i in s) {
    charCode = s.charCodeAt(i);

    if (charCode > 47 && charCode < 58) {
      res = res * 10 + (charCode - 48);
      noSign = false;
    } else if (noSign) {
      if (charCode === 43) noSign = false;
      else if (charCode === 45) {
        isNegative = true;
        noSign = false;
      } else if (charCode === 32);
      else break;
    } else break;
  }

  if (res > max - 1) return isNegative ? -max : max - 1;

  return isNegative ? -res : res;
};
