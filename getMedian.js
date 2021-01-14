/* Task :
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1 = [], nums2 = []) {
  const len = nums1.length + nums2.length,
    isOdd = len % 2,
    mergedArr = [],
    n = Math.floor((len + (isOdd ? 1 : 2)) / 2);

  for (let i = 0, j = 0; mergedArr.length < n; ) {
    mergedArr.push(
      nums1[i] === undefined
        ? nums2[j++]
        : nums2[j] === undefined
        ? nums1[i++]
        : nums1[i] > nums2[j]
        ? nums2[j++]
        : nums1[i++]
    );
  }

  return isOdd
    ? mergedArr[mergedArr.length - 1]
    : (mergedArr[mergedArr.length - 1] + mergedArr[mergedArr.length - 2]) / 2;
};
