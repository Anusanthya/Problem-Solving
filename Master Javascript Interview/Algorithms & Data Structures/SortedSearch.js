/**
 * Write a function that accepts a sorted array of integers and a number. 
 * Return the index of that number if present. 
 * The function should return -1 for target values not in the array.
   Input: Array of Integers, Integer
   Output: An integer from -1 onwards.

 * search([1, 3, 6, 13, 17], 13); // -> 3
 * search([1, 3, 6, 13, 17], 12); // -> -1
 */

function search(numbers, target) {
    for(let i=0; i<numbers.length; i++) {
        if(numbers[i] === target) return i;
    }
    return -1;
}
// Time: O(n)
// Space: O(1)

//  console.log(search([1, 3, 6, 13, 17], 13)); // -> 3
//  console.log(search([1, 3, 6, 13, 17], 12)); // -> -1


// Binary Search:

function binarySearch(numbers, target) {
  let index=0, lastIndex = numbers.length-1, mid;
  
  while(index<=lastIndex) {
    mid = Math.floor((index + lastIndex) / 2);
    if (target === numbers[mid]) return mid;
    else if (target > numbers[mid]) index = mid + 1
    else if (target < numbers[mid]) lastIndex = mid - 1
  }
  
  return -1

}
// Time: O(log(n))
// Space: O(1)

console.log(binarySearch([1, 3, 6, 13, 17], 13)); // -> 3
console.log(binarySearch([1, 3, 6, 13, 17], 12)); // -> -1