/**
 * Given an integer array nums, rotate the array to the left by one.
 * Note: There is no need to return anything, just modify the given array.
 * 
 * Example:
    Input: nums = [1, 2, 3, 4, 5]
    Output: [2, 3, 4, 5, 1]
    Explanation: Initially, nums = [1, 2, 3, 4, 5]
    Rotating once to left -> nums = [2, 3, 4, 5, 1]
 */

function leftRotateArrayByOne(nums) {
    const temp = nums[0];
    for (let i=1; i<nums.length; i++) {
        nums[i-1] = nums[i]
    }
    nums[nums.length -1] = temp;
    return nums;
}

// Time: O(n)
// Space: O(1)

console.log("leftRotateArrayByOne ", leftRotateArrayByOne([1, 2, 3, 4, 5])) //[2, 3, 4, 5, 1]
console.log("leftRotateArrayByOne ", leftRotateArrayByOne([-1, 0, 3, 6])) //[0, 3, 6, -1]