flatten([ [ [ [1], 2], 3], [4], [], [[5]]]);
// -> [1, 2, 3, 4, 5]

flatten(['abc', ['def', ['ghi', ['jkl']]]]);
// -> ['abc', 'def', 'ghi', 'jkl']

function flatten(nestedArray) {
    const flattenedArray = [];
    for(let item of nestedArray) {
        if(Array.isArray(item)) { 
            flattenedArray.push(...flatten(item));
        } else {
            flattenedArray.push(item)
        }
    }
    return flattenedArray;
}
// Time: O(N)
// Space: O(N) + O(d) ~ for the call stack, where d is the maximum depth of the nested arrays.


let solution1 = flatten([ [ [ [1], 2], 3], [4], [], [[5]]])
console.log("Flatten an array solution: ", solution1);
// -> [1, 2, 3, 4, 5]

let solution2 = flatten(['abc', ['def', ['ghi', ['jkl']]]]);
console.log("Flatten an array solution: ", solution2);
