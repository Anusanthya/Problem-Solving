arraySubset([2, 1, 3], [1, 2, 3]); // -> true
arraySubset([2, 1, 1, 3], [1, 2, 3]); // -> true
arraySubset([1, 2], [1, 2, 3]); // -> false
arraySubset([1, 2, 3], [1, 2, 2, 3]); // -> false

function arraySubset(arr, subset) {
    if(subset.length > arr.length) return false;
    
    let itemMap = {};
    for(let item of arr) {
        if(!itemMap[item]) {
            itemMap[item] = 1
        } else {
            itemMap[item] += 1
        }
    }

    for(let item of subset) {
        if (!itemMap[item]) return false;

        itemMap[item] --;
        if(itemMap[item] === 0) delete itemMap[item]
    }
    return true;
}

// Time: O(m+n)
// Space: O(n)

console.log("arraySubset1 : ", arraySubset([2, 1, 1, 3], [1, 2, 3]))
console.log("arraySubset2 : ", arraySubset([1, 2], [1, 2, 3]))