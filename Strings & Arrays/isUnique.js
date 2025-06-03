/**
 * isUnique('abcdef'); // -> true
 * isUnique('89%df#$^a&x'); // -> true
 * isUnique('abcAdef'); // -> true
 * isUnique('abcaef'); // -> false
 */


function isUnique(str) {
    for (let i=0; i<str.length; i++) {
        if(str.lastIndexOf(arr[i]) === i) return false;
    }
    return true;
}
// Time: O(N^2)
// Space: O(1)


function isUnique1(str) {
    const chars = str.split('').sort();
    for (let i=1; i<chars.length; i++) {
        if (chars[i] == chars[i-1]) return false;
    }
    return true;
}
// Time: O(N) + O(N * log(N)) => O(N + N*log(N)) => O(N*log(N))
// Space: O(N)


function isUnique2(str) {
    const chars = {};
    for (let i=0; i<str.length; i++) {
        if(chars[str[i]]) return false;
        chars[str[i]] = true;
    }
    return true;
}
// Time: O(N)
// Space: O(N)


function isUnique3(str) {
    const chars = new Set();
    for (let i=0; i<str.length; i++) {
        if(chars.has([str[i]])) return false;
        chars.add([str[i]])
    }
    return true;
}



function isUnique4(str) {
    return new Set(str).size === str.length;
}