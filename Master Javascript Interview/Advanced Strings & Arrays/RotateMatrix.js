//  Input:
//  [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

// Output:
// [[7, 4, 1],
//  [8, 5, 2],
//  [9, 6, 3]]

function rotateClockwise(matrix) {
    // transpose the matrix
    let transposedMatrix = [];
    
    for (let col=0; col<matrix[0].length; col++) {
        let newRow = [];
        for(let row=0; row<matrix.length; row++) {
            newRow.push(matrix[row][col]);
        };
        transposedMatrix.push(newRow)
    }
    
    for (let row of transposedMatrix) {
        row.reverse();
    }
    return transposedMatrix;
}

// console.log("Sol.1 rotateClockwise : ", rotateClockwise([[1, 2, 3],[4, 5, 6],[7, 8, 9]]))
// console.log("Sol.2 rotateClockwise : ", rotateClockwise([[1, 2, 3],[4, 5, 6]]))

// Time: O(r*c)
// Space: O(r*c)

//Optimised solution: inplace matrix rotation

function rotateClockwise1(matrix) {
    const newMatrix = matrix[0].map(()=>[])
    for(let col=0; col<matrix.length; col ++) {
        for (let row=0; row<matrix[0].length; row++) {
            newMatrix[row][matrix.length - col - 1] = matrix[col][row]
        }
    }

    return newMatrix;
}

// Time: O(r*c)
// Space: O(r*c)

console.log("Sol.1 rotateClockwise1 : ", rotateClockwise1([[1, 2, 3],[4, 5, 6],[7, 8, 9]]))
// console.log("Sol.2 rotateClockwise1 : ", rotateClockwise1([[1, 2, 3],[4, 5, 6]]))
