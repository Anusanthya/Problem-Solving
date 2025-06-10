/**
 * 
 * [10, 7, 5, 8, 11, 9] -->	 6	
 * [1, 2, 3, 4, 5]      -->  4	
 * [5, 4, 3, 2, 1]      -->	 0	
 * [5, 20, 4, 10, 1]    --> 15	
 */

//Brute Force solution:
function maximumProfit(stockPriceList) {
        let maxProfit = [0]
        for (let i=0; i < stockPriceList.length; i++) {
            for (let j=i+1; j< stockPriceList.length; j++) {
                maxProfit.push(stockPriceList[j] - stockPriceList[i])
            }
        }
        return Math.max(...maxProfit);
}

// Time: O(n^2 + n) ~ O(n^2)
// Space: O(n)

console.log("maximumProfit1 : ", maximumProfit([10, 7, 5, 8, 11, 9]))
console.log("maximumProfit2 : ", maximumProfit([1, 2, 3, 4, 5]))
console.log("maximumProfit3 : ", maximumProfit([5, 4, 3, 2, 1]))
console.log("maximumProfit4 : ", maximumProfit([5, 20, 4, 10, 1]))


function maximumProfit1(stockPriceList) {
    let maxProfit = 0, minPrice = Infinity;
    for (let i=0; i<stockPriceList.length; i++) {
        minPrice = Math.min(minPrice, stockPriceList[i]);
        maxProfit = Math.max(maxProfit, stockPriceList[i] - minPrice )
    }
    return maxProfit;
}

// Time: O(n)
// Space: O(1)

console.log("maximumProfit1 : ", maximumProfit1([10, 7, 5, 8, 11, 9]))
console.log("maximumProfit2 : ", maximumProfit1([1, 2, 3, 4, 5]))
console.log("maximumProfit3 : ", maximumProfit1([5, 4, 3, 2, 1]))
console.log("maximumProfit4 : ", maximumProfit1([5, 20, 4, 10, 1]))

