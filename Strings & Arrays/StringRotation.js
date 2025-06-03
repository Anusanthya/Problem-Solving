/**
 * stringRotation(rotation, tationro) --> true
 * stringRotation(javascript, scriptjava) --> true
 * stringRotation(RotateMe, teMeRota) --> true
 * stringRotation(RotateMe, abcdefgh) --> false
 */

function stringRotation(str1, str2) {
    if(str1.length !== str2.length) return false;
   
    for (let i=0; i<str1.length; i++) { //O(N)
       let rotatedStr = str1.slice(i, str1.length) + str1.slice(0, i); //O(N)
       if(rotatedStr === str2) return true; //O(N)
    }
    return false;
}

// Time: O(N) * 2*O(N) ~ O(N^2)
// Space: O(N)

console.log("stringRotation1 : ", stringRotation('rotation', 'tationro'))
console.log("stringRotation2 : ", stringRotation('javascript', 'scriptjava'))
console.log("stringRotation3 : ", stringRotation('RotateMe', 'teMeRota'))
console.log("stringRotation3 : ", stringRotation('RotateMe', 'abcdefgh'))


function stringRotation1(str1, str2) {
    return str1.length === str2.length && (str1 + str1).includes(str2); 
}

// Time: O(N)
// Space: O(N)

console.log("stringRotation1 : ", stringRotation1('rotation', 'tationro'))
console.log("stringRotation2 : ", stringRotation1('javascript', 'scriptjava'))
console.log("stringRotation3 : ", stringRotation1('RotateMe', 'teMeRota'))
console.log("stringRotation3 : ", stringRotation1('RotateMe', 'abcdefgh'))