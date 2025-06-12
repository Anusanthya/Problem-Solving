/**
 * Implement Function.prototype.bind().
    Input: Function, [additional parameters]
    Output: Function
 */

Function.prototype.Bind = function(...args){
    const fnToBind = this;
    const params = args.slice(1);
    return function(...args2) {
        fnToBind.apply(args[0], [...params, ...args2])
    }
}

Function.prototype.BindES = function(thisArg, ...args) {
    return (...nextArgs) => this.apply(thisArg,[...args,...nextArgs ])
}


function print(val1, val2) {
    console.log(this.abc, val1, val2);
}

// const printBound = print.Bind({ abc: 123 }, 456);
// printBound(789); // -> 123 456 789

const printBoundES = print.BindES({ abc: 123 }, 456);
printBoundES(789); // -> 123 456 789


// Function.prototype.Bind = function(thisArg, ...args) {
//     return (...nextArgs) => this.call(thisArg, ...args, ...nextArgs);
// }

// function print(val1, val2) {
//     console.log(this.abc, val1, val2);
// }

// const printBound = print.Bind({ abc: 123 }, 456);
// printBound(789); // -> 123 456 789