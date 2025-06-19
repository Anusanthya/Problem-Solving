/**
 * Given an integer array of size n containing distinct values in the range from 0 to n (inclusive), 
 * return the only number missing from the array within this range.
 * Example:
    Input: nums = [0, 2, 3, 1, 4]
    Output: 5
    Explanation: nums contains 0, 1, 2, 3, 4 thus leaving 5 as the only missing number in the range [0, 5]
 */

//Brute Force:
function findMissingNumber(nums) {
    const frequency = new Array(nums.length + 1).fill(0);
    
    // Storing the frequencies in the array
    for (let num of nums) {
        frequency[num] += 1;
    }
    
    // Checking the frequencies for numbers 1 to N
    for (let i = 0; i<=nums.length; i++) {
        if (frequency[i] === 0) return i
    }
}

// Time: O(n)
// Space: O(n)
console.log("findMissingNumber ", findMissingNumber([0, 2, 3, 1, 4])) //5
console.log("findMissingNumber ", findMissingNumber([0, 1, 2, 4, 5, 6])) //3


//Optimal:
function findMissingNumberOpt(nums) {
    const n = nums.length; 
    let sum = 0;

    // Summation of first N natural numbers
    const summationVal = (n*(n+1)) / 2;

    for (let num of nums) sum += num;
    return summationVal - sum;
}

// Time: O(n)
// Space: O(1)
console.log("findMissingNumberOpt ", findMissingNumberOpt([0, 2, 3, 1, 4])) //5
console.log("findMissingNumberOpt ", findMissingNumberOpt([0, 1, 2, 4, 5, 6])) //3


//AlgoEx

/**
 * Given an unordered list of unique integers nums in the range [1,n] where n: length(nums) + 2.
 * This means 2 numbers are missing from the list.
 * Write a function that takes in this list and returns a new list with 2 missing numbers, sorted numerically.
 *
 */

function find2MissingNumbers(nums) {
    const n = nums.length+2;
     // Calculate expected sum of 1 to n
    const totalSum = (n * (n + 1))/2;

    // Actual sum from input
    const actualSum = nums.reduce((a,b) => a + b, 0);

    // a + b (sum of missing numbers)
    const sumMissing = totalSum - actualSum;

    // Pivot: divide numbers into two parts
    const pivot = Math.floor(sumMissing/2);

     // Calculate expected sums for each half
    const expectedLeftSum = (pivot * (pivot + 1))/2;
    const expectedRightSum = totalSum - expectedLeftSum;

    let actualLeftSum = 0, actualRightSum = 0;

    for (let num of nums) {
        if (num <= pivot) actualLeftSum += num;
        else actualRightSum += num
    }

    return [expectedLeftSum - actualLeftSum, expectedRightSum - actualRightSum];
}



// Time: O(n)
// Space: O(1)
console.log("find2MissingNumbers ", find2MissingNumbers([1, 4, 3])) //[2,5]
console.log("find2MissingNumbers ", find2MissingNumbers([1, 2, 4, 5, 7])) //[3,6]