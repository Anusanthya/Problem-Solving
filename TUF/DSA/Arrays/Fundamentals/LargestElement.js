/**
 * Given an array of integers nums, return the value of the largest element in the array
 */

function largestElement(nums) {
    let largest = nums[0];
    for (let i = 1; i<nums.length;i++) {
        if(nums[i] > largest) largest = nums[i];
    }
    return largest;
}

// Time: O(n)
// Space: O(1)

console.log("largestElement ", largestElement([2, 3, 4, 5, 3]))
console.log("largestElement ", largestElement([2, -4, 4, 0, 10]))