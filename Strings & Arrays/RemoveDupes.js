/**
'abcd' -> 'abcd'
'aabbccdd' -> 'abcd'
'abcddbca' -> 'abcd'
'abababcdcdcd' -> 'abcd'
 */

function removeDupes(str) {
    let chars = {}, output = [];
    for(let char of str) {
        if(!chars[char]) {
            chars[char] = true;
            output.push(char)
        }
    }
    return output.join('');
}

// Time: O(N)
// Space: 2*O(N) ~ O(N)

const newStr = removeDupes('aabbccdd');
console.log("Remove Dupes: ", newStr)

function removeDupes1(str) {
    const uniqueStr = new Set(str)
    return Array.from(uniqueStr).join('')
}

const newStr1 = removeDupes1('abababcdcdcd');
console.log("Remove Dupes1: ", newStr1)

// Time Complexity:
//   new Set(str) – Iterates over the string once to build a Set ⇒ O(n)
//   Array.from(set) – Copies Set to array ⇒ O(n)
//   .join('') – Joins n characters ⇒ O(n)
//   ➡️ Total: O(n) + O(n) + O(n) = O(n)

// Space: O(N)