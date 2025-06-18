/**
 * Given an integer array nums and a non-negative integer k, rotate the array to the left by k steps.
 * 
 * Example:
    Input: nums = [1, 2, 3, 4, 5, 6], k = 2
    Output: nums = [3, 4, 5, 6, 1, 2]
    Explanation: rotate 1 step to the left:  [2, 3, 4, 5, 6, 1]
                 rotate 2 steps to the left: [3, 4, 5, 6, 1, 2]
 */


function leftRotateArrayByKplaces(nums, k) {
    k = k % nums.length; // To avoid unnecessary rotations
    const temp = [];

    // Store first k elements in a temporary array
    for (let i = 0; i<k; i++) {
        temp.push(nums[i]);
    }

    // Shift n-k elements of given array to the front
    for (let i = k; i<nums.length; i++) {
        nums[i-k] = nums[i];
    }
    
    // Copy back the k elements at the end
    for (let i = 0; i < k; i ++) {
        nums[nums.length - k + i] = temp[i];
    }

    return nums;
}


// Time: O(n)
// Space: O(k)

console.log("leftRotateArrayByKplaces ", leftRotateArrayByKplaces([1, 2, 3, 4, 5, 6], 2)) //[3, 4, 5, 6, 1, 2]
console.log("leftRotateArrayByKplaces ", leftRotateArrayByKplaces([3, 4, 1, 5, 3, -5], 8)) //[1, 5, 3, -5, 3, 4]

/**
 * Optimised Solution
 */
function leftRotateArrayByKplacesOpt(nums, k) {
    const n = nums.length;
    k = k % n;

    reverse(nums, 0, k-1); // Step 1: reverse first k
    reverse(nums, k, n-1) // Step 2: reverse rest
    reverse(nums, 0, n-1) // Step 3: reverse all
    return nums;
}

function reverse (nums, i, j) {
    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
        i++;
        j--;
    }
}

// Time: O(n)
// Space: O(1)

console.log("leftRotateArrayByKplacesOpt ", leftRotateArrayByKplacesOpt([1, 2, 3, 4, 5, 6], 2)) //[3, 4, 5, 6, 1, 2]
console.log("leftRotateArrayByKplacesOpt ", leftRotateArrayByKplacesOpt([3, 4, 1, 5, 3, -5], 8)) //[1, 5, 3, -5, 3, 4]


function rightRotateArrayByKplacesOpt(nums, k) {
    const n = nums.length;
    k = k % n;

    reverse(nums, 0, n-1); // Step 1: Reverse the entire array
    reverse(nums, 0, k-1) // Step 2: Reverse first k elements
    reverse(nums, k, n-1) // Step 3: Reverse the rest
    return nums;
}

// Time: O(n)
// Space: O(1)

console.log("rightRotateArrayByKplacesOpt ", rightRotateArrayByKplacesOpt([1, 2, 3, 4, 5, 6], 2)) //[ 5, 6, 1, 2, 3, 4 ]
console.log("rightRotateArrayByKplacesOpt ", rightRotateArrayByKplacesOpt([3, 4, 1, 5, 3, -5], 8)) //[ 3, -5, 3, 4, 1, 5 ]