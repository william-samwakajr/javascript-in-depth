/*
    1. Create the following array called "nums":
        [10, 30, 50, 70, 90]

    2. Create a new array called "squares" that:
        - maps over "nums" and return each item squared (x by itself)

    3. Create another new array called "over1000" that:
        - filters "squares" to contain only values over 1000

    4. Create a const called "finale" that:
        - reduces "over1000" to a single sum of it's elements

    5. Print out "nums", "squares", "over1000" and "finale"

    BONUS^2: Can you do 1-4 all in one line?
*/
const nums = [10, 30, 50, 70, 50];
const squares = nums.map((num) => {
    return num * num;
});
const over1000 = squares.filter((num) => {
    if (num > 1000) {
        return num;
    }
});
const finale = over1000.reduce((prev, curr) => {
    return prev + curr;
}, 0);
console.log(nums);
console.log(squares);
console.log(over1000);
console.log(finale);