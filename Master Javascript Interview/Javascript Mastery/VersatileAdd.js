/**
 * Write a function that adds 2 numbers. It should work as follows:
 */

function add(num1, num2) {
    if(!num1) return add;

    if(!num2) {
        return function innerAdd (num3) {
            if(!num3) return innerAdd;
            return num1 + num3
        }
    }
    return num1 + num2;
}


console.log(add(3, 4)); // -> 7
console.log(add(10, 12)); // -> 22
console.log(add(3)(4)); // -> 7
console.log(add(10)(12)); // -> 22

console.log(add(3)()(4)); // -> 7
console.log(add(3)()()()(4)); // -> 7
console.log(add(10)()()()()()()()()()()()(12)); // -> 22

console.log(add()(3)(4)); // -> 7
console.log(add()()()()(10)(12)); // -> 22

console.log(add()(3)()(4)); // -> 7
console.log(add()()()()()(10)()()()(12)); // -> 22