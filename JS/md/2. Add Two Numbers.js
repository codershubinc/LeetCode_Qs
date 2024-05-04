// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var addTwoNumbers = function (l1, l2) {
//     let modifiedL1 = l1.reverse().join('')
//     let modifiedL2 = l2.reverse().join('')
//     let res = modifiedL1 - modifiedL2
//     return res.toString().split('').reverse()
// };
// const result = addTwoNumbers([2,4,3],[5,6,4])

// console.log(result)



function addTwoNumbers(l1, l2) {
    // Convert the arrays to numbers
    const num1 = parseInt(l1.reverse().join(''), 10);
    const num2 = parseInt(l2.reverse().join(''), 10);

    // Add the numbers
    const sum = num1 + num2;

    // Convert the sum back to an array of digits
    return sum.toString().split('').reverse().map(digit => parseInt(digit, 10));
}

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];
const result = addTwoNumbers(l1, l2);

console.log(result); // [7, 0, 8]