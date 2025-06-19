/**
 * Given an integer array nums, move all the 0's to the end of the array. 
 * The relative order of the other elements must remain the same. This must be done in place, 
 * without making a copy of the array.
 * 
 * Example:
    Input: nums = [0, 1, 4, 0, 5, 2]
    Output: [1, 4, 5, 2, 0, 0]
    Explanation: Both the zeroes are moved to the end and the order of the other elements stay the same
 */

//Brute Force Solution
function moveZeroesToEnd(nums) {
    let zeroCount = 0, temp = [];
    for (let i=0; i < nums.length; i++) {
        if (nums[i] === 0) zeroCount += 1;
        else temp.push(nums[i]);
    }

    let i=0;
    while (i < zeroCount) {
        temp.push(0);
        i++;
    }
    return temp;
}

// Time: O(n)
// Space: O(n)

console.log("moveZeroesToEnd ", moveZeroesToEnd([0, 1, 4, 0, 5, 2])) //[1, 4, 5, 2, 0, 0]
console.log("moveZeroesToEnd ", moveZeroesToEnd([0, 0, 0, 1, 3, -2])) //[1, 3, -2, 0, 0, 0]


//Optimised Solution
function moveZeroesToEndOpt(nums) {
    let j = -1;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] === 0) {
            j=i;
            break;
        }
    }

    if(j === -1) return nums;

    for (let i=j+1; i<nums.length; i++) {
        if(nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }
    return nums;
}

// Time: O(n)
// Space: O(1)

console.log("moveZeroesToEndOpt ", moveZeroesToEndOpt([0, 1, 4, 0, 5, 2])) //[1, 4, 5, 2, 0, 0]
console.log("moveZeroesToEndOpt ", moveZeroesToEndOpt([0, 0, 0, 1, 3, -2])) //[1, 3, -2, 0, 0, 0]

//test cases:
function testMoveZeroesToEnd() {
    const tests = [
        {
            input: [0, 1, 0, 3, 12],
            expected: [1, 3, 12, 0, 0],
        },
        {
            input: [1, 2, 3, 0, 0],
            expected: [1, 2, 3, 0, 0],
        },
        {
            input: [0, 0, 0],
            expected: [0, 0, 0],
        },
        {
            input: [1, 2, 3],
            expected: [1, 2, 3],
        },
        {
            input: [],
            expected: [],
        },
        {
            input: [0, 1],
            expected: [1, 0],
        },
        {
            input: [1, 0],
            expected: [1, 0],
        },
        {
            input: [4, 2, 4, 0, 0, 3, 0, 5, 1, 0],
            expected: [4, 2, 4, 3, 5, 1, 0, 0, 0, 0],
        }
    ];

    for (let {input, expected} of tests) {
        const result = moveZeroesToEndOpt([...input]); // use spread to avoid modifying original
        const passed = JSON.stringify(result) === JSON.stringify(expected);
        console.log(
            `${passed ? '✅ PASS' : '❌ FAIL'} | input: ${JSON.stringify(input)} | expected: ${JSON.stringify(expected)} | got: ${JSON.stringify(result)}`
        );
    }
}

testMoveZeroesToEnd();
