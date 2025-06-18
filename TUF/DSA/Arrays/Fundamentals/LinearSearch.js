/**
 * Given an array of integers nums and an integer target, find the smallest index (0 based indexing) 
 * where the target appears in the array. If the target is not found in the array, return -1
 */

function linearSearch(nums, target) {
    for (let i=0; i<nums.length; i++) {
        if(nums[i] === target) return i;
    }
    return -1;
}

// Time: O(n)
// Space: O(1)

console.log("LinearSearch ", linearSearch([2, 3, 4, 5, 3], 3))
console.log("LinearSearch ", linearSearch([2, -4, 4, 0, 10], 6))