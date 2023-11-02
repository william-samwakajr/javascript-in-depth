/*
    1. Create an array called 'bools' of the following booleans:
        [true, true, false, true, false, false]

    2. Map over 'bools' and do the following:
        - if "true", return a random number in it's place
        - if "false", return 0

    3. Print out both arrays

    HINT: Google for "random number js" to find a random
          number function built-in to Javascript to use
*/
const BOOLS = [true, true, false, true, false, false];
const BOOLS_NUMBERS = BOOLS.map((bool) => {
    if (bool == true) {
        return Math.floor(Math.random() * 100);
    } else if (bool == false) {
        return 0;
    }

})
console.log(BOOLS);
console.log(BOOLS_NUMBERS);