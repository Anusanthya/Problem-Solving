/**
 * Given a binary array nums, return the maximum number of consecutive 1s in the array.
 * A binary array is an array that contains only 0s and 1s.
 * 
 * Input: nums = [1, 1, 0, 0, 1, 1, 1, 0]
 * Output: 3
 */

function findMaxConsecutiveOnes(nums) {
    let maxCount = 0, runningCount = 0;
    for (let num of nums) {
        if (num === 1) {
            runningCount += 1;
            maxCount = Math.max(runningCount, maxCount)
        } else {
            runningCount = 0;
        }
    }
    return maxCount
}

// Time: O(n)
// Space: O(1)

console.log("findMaxConsecutiveOnes ", findMaxConsecutiveOnes([1, 1, 0, 0, 1, 1, 1, 0]))
console.log("findMaxConsecutiveOnes ", findMaxConsecutiveOnes([0, 0, 0, 0, 0, 0, 0, 0]))