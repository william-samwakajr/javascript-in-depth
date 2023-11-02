/*
    1. Create an array called "prices" with the following values:
        [1.23, 19.99, 85.2, 32.87, 8, 5.2]

    2. Create a const called "afterTax" that does a sum like so:
        - If the price is greater than 6, add the price with no tax
        - Otherwise, add the price plus a tax of 20%

    3. Print out "prices" and "afterTax"
*/

const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];
const afterTax = prices.reduce((prev, curr, i) => {
    if (curr < 6) {
        curr += (20 / 100 * curr)

    }
    if (i === prices.length - 1) {
        return prev + curr
    }
    return prev + curr;
}, 0)
console.log(prices);
console.log(afterTax);