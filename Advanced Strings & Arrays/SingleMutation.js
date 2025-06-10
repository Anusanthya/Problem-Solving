/**

Instructions
There are 3 types of possible string mutations: character insertion, character deletion, or character substitution. 
Write a function that accepts 2 strings and returns true if the strings are the same except for 0 or 1 mutations. Return false otherwise.

Inputs: String, String

Output: Boolean

Examples:
Single Deletion:
'abcd', 'abc'
'abcd', 'acd'

Single Insertion:
'abcd', 'abcde'
'abcd', 'abXcd'

Single Substitution:
'abcd', 'abXd'
'abcd', 'Xbcd'
 */

function singleMutation(str1, str2) {
    //check if string lengths are different by two or greater.
    if ((str2.length - str1.length) > 1) return false;
    let mutations = 0;
    
    for (let i=0, j=0; i<str1.length || j<str2.length; i++, j++) {
        if (str1[i] !== str2[j]) {
            mutations += 1;
            if (mutations > 1) return false;

            if(str1.length > str2.length) j--;
            else if (str2.length > str1.length) i--;
        }
    }
    return true;
}

// Time: O(n)
// Space: O(1)

console.log("singleMutation1 : ", singleMutation('abcd', 'abc'))
console.log("singleMutation2 : ", singleMutation('abcd', 'abXcd'))
console.log("singleMutation3 : ", singleMutation('abcd', 'abcdef'))
console.log("singleMutation4 : ", singleMutation('abcd', 'aXc'))