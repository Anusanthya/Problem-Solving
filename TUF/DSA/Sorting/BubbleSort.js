/**
 * Given an array of integers called nums,sort the array in non-decreasing order using the bubble sort 
 * algorithm and return the sorted array.
 * A sorted array in non-decreasing order is an array where each element is greater than or equal to all 
 * preceding elements in the array.
 */

function bubbleSort(nums) {

    // Approach 1:

    // for (let i=nums.length-1; i>0; i--) {
    //     // Track if swaps are made
    //     let isSwapped = false;
    //     for (let j=0; j<nums.length-1; j++) {
    //         if (nums[j] > nums[j+1]) {
    //             swap(j, j+1, nums)
    //             isSwapped = true;
    //         }
    //     }
    //     /** Break out of loop if no swaps done*/
    //     if(!isSwapped) break;
    // }
    // return nums;


    // Approach 2:

    let isSorted = false;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < nums.length; i++) {
            if(nums[i] > nums[i+1]) {
                [nums[i], nums[i+1]] = [nums[i+1], nums[i]];
                isSorted = false;
            }
        }
    }
    return nums;
}

function swap (i, j, nums) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

console.log("bubbleSort :", bubbleSort([64, 25, 12, 22, 11]));

// Time:  summation formula (n(n+1))/2 ~~~  O(n^2)
// Space: O(1)