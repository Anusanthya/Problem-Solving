/**
 * Given an array of integers nums, return the second-largest element in the array. 
 * If the second-largest element does not exist, return -1.
 */

function secondLargestElement(nums) {
    if (nums.length < 2) return -1;

    nums.sort((a,b) => a - b );
    let largest = nums[nums.length-1], 
        secondLargest = -1;

    for (let i=nums.length - 2; i >= 0; i--) {
        if (nums[i] !== largest) {
            secondLargest = nums[i];
            break;
        }
    }
    return secondLargest;
}

// Time: O(nlog(n))
// Space: O(1)

console.log("secondLargestElement ", secondLargestElement([8, 8, 7, 6, 5]))
console.log("secondLargestElement ", secondLargestElement([10, 10, 10, 10, 10]))


function secondLargestElementOptimised(nums) {
    let first = -Infinity, second = -1;
    for (let num of nums) {
        if (num > first) {
            second = first;
            first = num;
        }
        else if (num < first && num > second) {
            second = num;
        }
    }
    return second === -Infinity ? -1 : second;
}

// Time: O(n)
// Space: O(1)

console.log("secondLargestElementOptimised ", secondLargestElementOptimised([8, 8, 7, 6, 5]))
console.log("secondLargestElementOptimised ", secondLargestElementOptimised([10, 10, 10, 10, 10]))