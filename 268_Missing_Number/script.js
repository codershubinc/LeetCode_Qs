// var missingNumber = function (nums) {
//     let largeNum = nums[0]
//     let smallNum = nums[0]
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > largeNum) {
//             largeNum = nums[i]
//         }
//         if (nums[i] < smallNum) {
//             smallNum = nums[i]
//         }
//     }
//     console.log(smallNum);
//     console.log(largeNum);
// };
// let nums = [3, 0, 1, 4]
// missingNumber(nums)
function findMissingNumber(nums) {
    let n = nums.length;
    let totalSum = (n * (n + 1)) / 2;
    let arraySum = 0;
    for (let i = 0; i < nums.length; i++) {
        arraySum += nums[i]
    }


    let Number = totalSum - arraySum;

    return Number;
}
const numbers = [3, 0, 1];
const missingNumber = findMissingNumber(numbers);
console.log(missingNumber);
