/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well
    5. Print out "Program complete" when the promise completes after 3 seconds

    HINT: Use setTimeout for the delay
*/

console.log("Program started");
const pending = new Promise((resolve, reject) => {
    if (2 % 2 == 0) {
        resolve("Program complete")
    } else {
        reject("program failed ")
    }
});
pending.then((message) => {
        return setTimeout(() => {
            console.log(message);
        }, 3000)
    }).then(() => { console.log("Program in progess...") })
    .catch((message) => { console.log(message) });