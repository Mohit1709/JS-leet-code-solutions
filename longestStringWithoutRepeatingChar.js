/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s = "") {
  let max = 0;

  let j = 0,
    count = 1;
  for (let i = 0; i < s.length; i++) {
    const hashTable = [];

    hashTable[s.charCodeAt(i)] = true;

    for (j = i + (count = 1); j < s.length; j++) {
      const temp = s.charCodeAt(j);

      if (hashTable[temp]) break;

      hashTable[temp] = true;
      count++;
    }
    max = Math.max(max, count);
  }
  return max;
};
