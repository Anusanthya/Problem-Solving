/**
 * Given an array of integers called nums, sort the array in non-decreasing order using the quick sort algorithm 
 * and return the sorted array.
 * A sorted array in non-decreasing order is an array where each element is greater than or equal 
 * to all preceding elements in the array.
 */

/**
 * 
 * Quick Sort is a divide-and-conquer algorithm like Merge Sort. However, unlike Merge Sort, 
 * Quick Sort does not use an extra array for sorting (though it uses an auxiliary stack space). 
 * This makes Quick Sort slightly better than Merge Sort from a space perspective.
 * 
 * This algorithm follows two simple steps repeatedly:
        Pick a pivot and place it in its correct position in the sorted array.
        Move smaller elements (i.e., smaller than the pivot) to the left of the pivot and larger ones to the right.
    To summarize: The main goal is to place the pivot at its final position in each recursion call, 
    where it should be in the final sorted array.
 */

function quickSortHelper (nums, low, high) {

    if (low < high) {
        let partitionIndex = partition(nums, low, high);
        quickSortHelper(nums, low, partitionIndex - 1);
        quickSortHelper(nums, partitionIndex + 1, high)
    }
}

function partition(nums, low, high) {
    let pivot = nums[low], i = low, j=high;
    while (i < j) {
        while (nums[i] <= pivot && i <= high-1) i++;
        while (nums[j] >= pivot && j >= low+1) j--;
        if (i<j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    [nums[low], nums[j]] = [nums[j], nums[low]];
    return j;
}

function quickSort(nums) {
    quickSortHelper(nums, 0, nums.length -1);
    return nums;
}

console.log("quickSort :", quickSort([64, 25, 12, 22, 11]));
console.log("quickSort :", quickSort([9, 4, 7, 6, 3, 1, 5]));

// Time: 
//  At each step, we divide the whole array, which takes logn steps, and we assume n steps are taken to sort 
//  the array. So, the overall time complexity is nlogn.
//  nlog(n)


// Space: O(1)