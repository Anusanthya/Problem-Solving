/**
 * Given a string, return true if it contains all balanced parentheses (), 
 * curly-brackets {}, and square-brackets [].
    Input: String
    Output: Boolean


    isBalanced("(x + y) - (4)"); // -> true
    isBalanced("(((10 ) ()) ((?)(:)))"); // -> true
    isBalanced("[{()}]"); // -> true
    isBalanced("(50)("); // -> false
    isBalanced("[{]}"); // -> false
 */

function isBalanced(str) {
    const charMap = {'{':'}', '[':']', '(':')'}, stack=[]

    for(let i = 0; i < str.length; i++) {
         // If character is an opening brace add it to a stack
        if(charMap[str[i]]) {
            stack.push(str[i])
        } else if(str[i] === '}' || str[i] === ']' || str[i] === ')') {
            const poppedElement = stack.pop();
             //Return false if the element popped doesn’t match the corresponding closing brace in the map
            if (str[i] != charMap[poppedElement]) return false;
        }
    }

    return !stack.length;
}

console.log(isBalanced("(x + y) - (4)")); // -> true
console.log(isBalanced("(((10 ) ()) ((?)(:)))")); // -> true
console.log(isBalanced("[{()}]")); // -> true
console.log(isBalanced("(50)(")); // -> false
console.log(isBalanced("[{]}")); // -> false