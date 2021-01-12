/*  Task : 
 *  Given an array of integers nums and an integer target, 
    return indices of the two numbers such that they add up to target;
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums = [], target = 0) {
  // Declaing a 2D array which cannot be "Reassign" i.e. values can be inserted,
  // which store the arrray of value and index of that value
  const hashTable = [];
  var count = 0;

  // Looping over the values of nums
  for (const num of nums) {
    // checking if the hashtable contain the required value
    if (hashTable[target - num]) return [hashTable[target - num][1], count];

    // Storing the current value of nums Array in hashTable with its index
    hashTable[num] = [num, count++];
  }
  // throwing exception if required values are not found in nums Array
  throw "Adder of target Not Found!!";
};
