/**
 * ['a', 'b', 'c', 'c', 'd', 'e'] --> c
 * ['abc', 'def', 'abc', 'def', 'abc'] --> abc	
 * ['abc', 'def'] --> abc	
 */

function HighestFrequency(strings) {
    const frequencyMap = {};
    let highestFrequency = 0, frequentStr =strings[0];
    for (let str of strings) {
        if(!frequencyMap[str]) {
            frequencyMap[str] = 1;
        } else {
            frequencyMap[str] += 1;
        }
        if (frequencyMap[str] > highestFrequency) {
            highestFrequency = frequencyMap[str];
            frequentStr=str;
        }
    }
    return frequentStr;
}
// Time: O(N)
// Space: O(N)

console.log("highestFrequency1 : ", HighestFrequency(['a', 'b', 'c', 'c', 'd', 'e']))
console.log("highestFrequency2 : ", HighestFrequency(['abc', 'def', 'abc', 'def', 'abc']));
console.log("highestFrequency3 : ", HighestFrequency(['abc', 'def']));
