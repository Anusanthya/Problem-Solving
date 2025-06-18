/**
 * Given an array of integers nums, sort the array in non-decreasing order using the selection sort algorithm and 
 * return the sorted array.
 * A sorted array in non-decreasing order is an array where each element is greater than or equal to all previous
 * elements in the array.
 */

// The selection sort algorithm sorts an array by repeatedly finding the minimum element from the unsorted part 
// and putting it at the beginning. The largest element will end up at the last index of the array.

function selectionSort (nums) {
    for (let i=0; i < nums.length-1; i++) {
        let minIndex = i;
        for(let j=i; j < nums.length; j++) {
            if(nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }

        swap(i,minIndex, nums);
    }
    return nums;
}

function swap(i, minIndex, nums) {
    const temp = nums[i];
    nums[i] = nums[minIndex];
    nums[minIndex] = temp
}

console.log("selectionSort :", selectionSort([64, 25, 12, 22, 11]));

// Time:  summation formula (n(n+1))/2 
//         ~~~ Worst Case: O(n^2)
//         ~~~ Best Case: O(n)
// Space: O(1)