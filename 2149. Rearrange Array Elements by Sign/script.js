/*
You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

You should return the array of nums such that the the array follows the given conditions:

1)Every consecutive pair of integers have opposite signs.
2)For all integers with the same sign, the order in which 
    they were present in nums is preserved.
3)The rearranged array begins with a positive integer.
Return the modified array after rearranging the elements to satisfy the aforementioned conditions.
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*----------------------------------sol 1 ----------------------------------------------------------  */
var rearrangeArray = function (nums) {
    let negNums = []
    let posNums = []
    let result = []




    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            negNums.push(nums[i])
        }
        if (nums[i] > 0) {
            posNums.push(nums[i])
        }

    }
    for (let i = 0; i < posNums.length; i++) {
        result.push(posNums[i])
        result.push(negNums[i])

    }
    return result;

};
/*----------------------------------sol2-------------------------------------------------------  */

/**
 * @param {number[]} nums
 * @return {number[]}
*/
var rearrangeArray1 = function (nums) {
    const res = [];
    let p = 0;
    let n = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            res[n] = nums[i];
            n += 2;
        } else {
            res[p] = nums[i];
            p += 2;
        }
    }
    return res;
};
let nums = [-1, 2, 4, -3, -9, 5, 6, -9, -7, 2]
let result1 = rearrangeArray(nums)
let result2 = rearrangeArray1(nums)
console.log(`result of sol 1    [ ${result1} ]`);
console.log(`result of sol 2    [ ${result2} ]`);