/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const newArr = [];
    let sum = 0;

    for (let i = 0; i < nums.length; ++i) {
        sum += nums[i];
        newArr.push(sum);
    }

    return newArr;
};