/**
 * Time Complexity: O(n)
 * 
 * @param {number[]} numsith one number missing.
 * @return {number}
 */
var missingNumber = function(nums) {
    const maxNum = nums.length;
    let expectedSum = maxNum * (maxNum + 1) / 2;
    let actualSum = nums.reduce((acc, cur) => acc + cur, 0);
    return expectedSum - actualSum;
};