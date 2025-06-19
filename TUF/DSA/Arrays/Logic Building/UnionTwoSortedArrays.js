/**
 * Given two sorted arrays nums1 and nums2, return an array that contains the union of these two arrays. 
 * The elements in the union must be in ascending order.
 * The union of two arrays is an array where all values are distinct and are present in either the first 
 * array, the second array, or both.
 * 
 * Example:
    Input: nums1 = [1, 2, 3, 4, 5], nums2 = [1, 2, 7]
    Output: [1, 2, 3, 4, 5, 7]
    Explanation: The elements 1, 2 are common to both, 3, 4, 5 are from nums1 and 7 is from nums2
 */

//Brute Force
function unionTwoSortedArrays(arr1, arr2) {
    let set = new Set();

    for (let num of arr1) set.add(num);

    for (let num of arr2) set.add(num);

    return Array.from(set).sort((a,b) => a - b);
}

// Time: O((m+n)*log(m+n));
// Space: O(m+n)

console.log("unionTwoSortedArrays ", unionTwoSortedArrays([1, 2, 3, 4, 5], [1, 2, 7] )) //[1, 2, 3, 4, 5, 7]
console.log("unionTwoSortedArrays ", unionTwoSortedArrays([3, 4, 6, 7, 9, 9], [1, 5, 7, 8, 8])) //[1, 3, 4, 5, 6, 7, 8, 9]


//Optimised
function unionTwoSortedArraysOpt(nums1, nums2) {
    let union = [];
    let i = 0, j=0;
    while (i<nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            if (union.length === 0 || union[union.length - 1] !== nums1[i]) 
                union.push(nums1[i]);
            i++;
        } else {
            if (union.length === 0 || union[union.length - 1] !== nums2[j])
                union.push(nums2[j])
            j++;
        }
    }

    //Add remaining elements into to union
    while(i<nums1.length) {
        if(union[union.length-1] !== nums1[i]) 
            union.push(nums1[i]);
        i++;
    }

    while(j < nums2.length) {
        if(union[union.length - 1] !== nums2[j])
            union.push(nums2[j]);
        j++;
    }

    return union;
}

// Time: O(m+n);
// Space: O(m+n)

console.log("unionTwoSortedArraysOpt ", unionTwoSortedArraysOpt([1, 2, 3, 4, 5], [1, 2, 7] )) //[1, 2, 3, 4, 5, 7]
console.log("unionTwoSortedArraysOpt ", unionTwoSortedArraysOpt([3, 4, 6, 7, 9, 9], [1, 5, 7, 8, 8])) //[1, 3, 4, 5, 6, 7, 8, 9]
