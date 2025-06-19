/**
 * Given two sorted arrays, nums1 and nums2, return an array containing the intersection of these two 
 * arrays. Each element in the result must appear as many times as it appears in both arrays.
 * The intersection of two arrays is an array where all values are present in both arrays.
 *  
 */


function IntersectionTwoSortedArrays(nums1, nums2) {
    let intersection = [];
    let i = 0, j=0;
    while (i < nums1.length && j < nums2.length) {
        if(nums1[i] === nums2[j]) {
            intersection.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) i++;
        else j++;
    }
    return intersection;
}

// Time: O(m+n);
// Space: 
//      O(1) extra space (if we don’t count output array)
//      O(k) where k is the number of intersecting elements

console.log("IntersectionTwoSortedArrays ", IntersectionTwoSortedArrays([1, 2, 3, 4, 5], [1, 2, 7] )) //[1, 2]
console.log("IntersectionTwoSortedArrays ", IntersectionTwoSortedArrays([3, 4, 6, 7, 9, 9], [1, 5, 7, 8, 8])) //[7]
console.log("IntersectionTwoSortedArrays ", IntersectionTwoSortedArrays([1, 2, 2, 3], [4, 5, 7])) //[]
console.log("IntersectionTwoSortedArrays ", IntersectionTwoSortedArrays([-45, -45, 0, 0, 2], [-50, -45, 0, 0, 5, 7])) //[-45, 0, 0]

