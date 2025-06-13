/**
 * Write a function that will take a positive integer n and return an array of length n 
 * containing the Fibonacci sequence.

    Input: Integer > 0
    Output: Array of Numbers
 */

function fibonacci(n) {
    const seq = [1,1]
    if (n < 2) return seq.slice(0,n);

    while(seq.length < n) {
        const lastNumber = seq[seq.length - 1];
        const secondLastNumber = seq[seq.length - 2];
        seq.push(lastNumber + secondLastNumber);
    }

    return seq;
}

// console.log(fibonacci(4)); // -> [1, 1, 2, 3]
// console.log(fibonacci(6)); // -> [1, 1, 2, 3, 5, 8]
// console.log(fibonacci(8)); // -> [1, 1, 2, 3, 5, 8, 13, 21]


const MemoizedFibonacci = (function() {
    const seq = [1,1]

    return function(n) {
        if(n<2) return seq.slice(0,n);

        while(seq.length < n) {
            const lastNumber = seq[seq.length - 1];
            const secondLastNumber = seq[seq.length - 2];
            seq.push(lastNumber + secondLastNumber);
        }
        return seq;
    }
})();

console.log(MemoizedFibonacci(4)); // -> [1, 1, 2, 3]
console.log(MemoizedFibonacci(6)); // -> [1, 1, 2, 3, 5, 8]
console.log(MemoizedFibonacci(8)); // -> [1, 1, 2, 3, 5, 8, 13, 21]
console.log(MemoizedFibonacci(10)); // -> [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]