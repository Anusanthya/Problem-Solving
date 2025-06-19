/**
 * Given an integer array nums sorted in non-decreasing order, remove all duplicates in-place so that 
 * each unique element appears only once. Return the number of unique elements in the array.
 * If the number of unique elements be k, then,
    Change the array nums such that the first k elements of nums contain the unique values in the order 
    that they were present originally.
    The remaining elements, as well as the size of the array does not matter in terms of correctness.

    An array sorted in non-decreasing order is an array where every element to the right of an element is 
    either equal to or greater in value than that element.

    Example:
        Input: nums = [0, 0, 3, 3, 5, 6]
        Output: 4
        Explanation: Resulting array = [0, 3, 5, 6, _, _]
        There are 4 distinct elements in nums and the elements marked as _ can have any value.
 */

//Brute Force
function removeDuplicatesFromSortedArr(nums) {
    let uniqueValues = new Set();
    for (let i=0; i<nums.length; i++) {
        uniqueValues.add(nums[i])
    }
    return uniqueValues.size;
}


// Time: O(n)
// Space: O(n)

console.log("removeDuplicatesFromSortedArr ", removeDuplicatesFromSortedArr([0, 0, 3, 3, 5, 6])) //4
console.log("removeDuplicatesFromSortedArr ", removeDuplicatesFromSortedArr( [-2, 2, 4, 4, 4, 4, 5, 5])) //4


function removeDuplicatesFromSortedArrOpt(nums) {
    let i = 0;
    for (let j = 1; j<nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i+1;
}


// Time: O(n)
// Space: O(1)

console.log("removeDuplicatesFromSortedArrOpt ", removeDuplicatesFromSortedArrOpt([0, 0, 3, 3, 5, 6])) //4
console.log("removeDuplicatesFromSortedArrOpt ", removeDuplicatesFromSortedArrOpt( [-2, 2, 4, 4, 4, 4, 5, 5])) //4