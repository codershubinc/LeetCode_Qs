/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {


    let mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);



    return mergedArray.length % 2 === 0
        ? (mergedArray[mergedArray.length / 2 - 1] + mergedArray[mergedArray.length / 2]) / 2
        : mergedArray[Math.floor(mergedArray.length / 2)];

};


console.log(findMedianSortedArrays(nums1 = [1, 3], nums2 = [2]));
console.log(findMedianSortedArrays(nums1 = [1, 2], nums2 = [3, 4, 9, 10]));
