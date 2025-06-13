/**
 * Write a function that will take in two items of any type. 
 * The function should perform a deep equality check.

    Inputs: Any, Any
    Output: Boolean


    Hints:
    - Deep equality is used to check equivalence of objects and arrays. Because of the concept of value vs. reference in JavaScript, the equality operators (==, ===) can’t help us. They’ll always return false for two different arrays or objects even if they contain the same items.
    - If we’re comparing objects or arrays, we need to go into them and check that each item is the same. If the item contains other arrays or objects, we need to go into those items as well.
    - It’s entirely possible to have objects or arrays nested several levels deep. Our function will have to drill all the way down into every object.
    - This problem tests several JavaScript concepts:
        Value vs. reference
        Quirks of different data types such as NaN and null
        Use of typeof
        Ability to reuse code
 */

function deepEquals(a,b) {
    // 1. If both are NaN
        // return true
    if (Number.isNaN(a) && Number.isNaN(b)) return true;

    // 2. If they are different types
    // return false
    if (typeof(a) !== typeof(b)) return false;

    // 3. If they are not objects or either one is null
    // // return an equality comparison
    if (typeof(a) !== 'object' || a === null || b === null) return a === b;

    // 4. Ensure that both objects have the same
    // number of properties. If not
        // return false.
    if (Object.keys(a).length !== Object.keys(b).length) return false;

    // 5. Loop through all keys of the objects. Ensure that
    // the values are identical on both objects. If not
        // return false.
    for(const key in a) {
        if(!deepEquals(a[key], b[key])) return false;
    }
    return true;
}


console.log(deepEquals(NaN, NaN))	//true
console.log(deepEquals(null, null))	//true
console.log(deepEquals(undefined, undefined))	//true
console.log(deepEquals(123, 123))	//true
console.log(deepEquals('abc', 'abc'))	//true
console.log(deepEquals(Symbol(), Symbol()))	//false
console.log(deepEquals(123, 'abc'))	//false
console.log(deepEquals(123, 456))	//false
console.log(deepEquals({}, {}))	//true
console.log(deepEquals([], []))	//true
console.log(deepEquals({ a: 123 }, { a: 123 }))	//true
console.log(deepEquals({ a: 123 }, { a: 456 }))	//false
console.log(deepEquals({ a: 123 }, { a: 123, b: 456})) 	//false
console.log(deepEquals([123], [123]))	//true
console.log(deepEquals([123], [123, 456])) //false