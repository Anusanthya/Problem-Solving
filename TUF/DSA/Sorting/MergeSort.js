/**
 * Given an array of integers, nums,sort the array in non-decreasing order using the merge sort algorithm. 
 * Return the sorted array.
 * A sorted array in non-decreasing order is one in which each element is either greater than or equal 
 * to all the elements to its left in the array.
 */

/**
 * Merge Sort is a powerful sorting algorithm that follows the divide-and-conquer approach. 
 * The array is divided into two equal halves until each sub-array contains only one element. 
 * Each pair of smaller sorted arrays is then merged into a larger sorted array.
    The algorithm consists of two main functions:
    merge():This function merges the two halves of the array, assuming both parts are already sorted.
    mergeSort():This function divides the array into 2 parts: low to mid and mid+1 to high where,
                low is the leftmost index of the array, 
                high is the rightmost index of the array, and 
                mid is the middle index of the array.
    By repeating these steps recursively, Merge Sort efficiently sorts the entire array.
 */

function mergeSort(array) {
  mergeSortHelper(array, 0, array.length-1);
  return array;
}

function mergeSortHelper(arr, low, high) {
  if(low >= high) return;
  let mid = Math.floor((low + high)/2);
  mergeSortHelper(arr, low, mid);
  mergeSortHelper(arr, mid+1, high);
  merge(arr, low, high, mid);
}

function merge(arr, low, high, mid) {
  const temp = [];
  let left = low, right = mid+1;

  while(left <= mid && right <= high) {
    if(arr[left] < arr[right]) {
      temp.push(arr[left]);
      left ++;
    } else {
      temp.push(arr[right]);
      right ++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left ++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right ++;
  }

  for (let i = low; i<= high; i++) {
    arr[i] = temp[i-low];
  }
}

console.log("mergeSort :", mergeSort([64, 25, 12, 22, 11]));
console.log("mergeSort :", mergeSort([9, 4, 7, 6, 3, 1, 5]));

// Time: 
//  At each step, we divide the whole array, which takes logn steps, and we assume n steps are taken to sort 
//  the array. So, the overall time complexity is nlogn.
//  nlog(n)


// Space: O(n)