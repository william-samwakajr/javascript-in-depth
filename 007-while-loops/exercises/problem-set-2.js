/*
    Create a while loop that will print out all the even numbers
    between 10 and 40.

    Do the same for all odd numbers as well.
*/
let counter = 10;
while (counter < 40) {
    counter++
    if (counter % 2 == 0) {
        console.log(counter);
    }
}