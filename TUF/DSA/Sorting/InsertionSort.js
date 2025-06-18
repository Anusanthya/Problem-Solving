/**
 * Given an array of integers called nums, sort the array in non-decreasing order using the insertion sort
 * algorithm and return the sorted array.
 * A sorted array in non-decreasing order is an array where each element is greater than or equal to all 
 * preceding elements in the array.
 */

//Insertion sort builds a sorted array one element at a time by repeatedly picking the next element and 
// inserting it into its correct position within the already sorted part of the array.

function insertionSort(nums) {
    for(let i=1; i < nums.length; i++) {
        let j=i;
        while (j > 0 && nums[j] < nums[j-1]) {
            [nums[j], nums[j-1]] = [nums[j-1], nums[j]]
            j--;
        }
    }
    return nums;
}

console.log("insertionSort :", insertionSort([64, 25, 12, 22, 11]));
console.log("insertionSort :", insertionSort([64, 25, 12, 1, 22, 11, 100]));

// Time:  summation formula (n(n+1))/2 
//         ~~~ Worst Case: O(n^2)
//         ~~~ Best Case: O(n)
// Space: O(1)