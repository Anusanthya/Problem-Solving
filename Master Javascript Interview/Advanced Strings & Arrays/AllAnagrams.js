allAnagrams(['abcd', 'bdac', 'cabd']); // true
allAnagrams(['abcd', 'bdXc', 'cabd']); // false

function allAnagrams(strings) {
    let sortedStrings = strings.map(str => str.split('').sort().join(''));

    for (let i=1; i<sortedStrings.length; i++) {
        if(sortedStrings[i] !== sortedStrings[0]) return false;
        return true;
    }
}

// Time:
// str.split('').sort().join('') ==> s length of string
//       |       |           |
//      O(s)   O(s*Log(s))   O(s)
// O(s + slog(s) + s)  ==>  O(2s + s*log(s))   ==> O(s*log(s))
// O(n) - complexity of for loop ==> O(n) * O(s*log(s)) ==> O(n*slog(s))

// Space: O(n*s)

// console.log("allAnagrams1 : ", allAnagrams(['abcd', 'bdac', 'cabd']))
// console.log("allAnagrams2 : ", allAnagrams(['abcd', 'bdXc', 'cabd']))



function allAnagrams1(strings) {
    if(strings.length === 0) return true;

    for(let i=1; i<strings.length; i++) {  //O(n)
        if(strings[i].length !== strings[0].length) return false;
    }

    const firstStringMap = getCharCount(strings[0]); //O(s)

    for(let i=1; i<strings.length; i++) { //O(n)
        let currentStringMap = getCharCount(strings[i]); //O(s)

        for (const char in currentStringMap) { //O(s)
            if(currentStringMap[char] !== firstStringMap[char]) return false;
        }
    }
    return true;
}

function getCharCount(str) {
    let charMap = {}
    for (let char of str) {
        if(!charMap[char]) {
            charMap[char] = 1;
        } else {
            charMap[char] += 1;
        }
    }
    return charMap;
}

console.log("Sol.2 allAnagrams1 : ", allAnagrams1(['abcd', 'bdac', 'cabd']))
console.log("Sol.2 allAnagrams2 : ", allAnagrams1(['abcd', 'bdXc', 'cabd']))

// Time: O(n) + O(s) + (O(n)*(O(s) + O(s)))  ==> O(n) * O(2s * n) 
// ==> O(n*s)

// Space: O(s)