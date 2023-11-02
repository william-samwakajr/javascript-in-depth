/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
       and rejects after 2 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Program complete" if the promise fulfills
    6. Print out "Program failure" if the promise rejects

    HINT: Use setTimeout for the delay
*/
console.log("Program started");
const pending = new Promise((resolve, reject) => {
    let bookstack = 5
    if (bookstack == 4) {
        resolve("Program complete")
    } else {
        reject("program failure ")
    }
});
pending.then((message) => {
        return setTimeout(() => {
            console.log(message);
        }, 3000)
    }).then(() => { console.log("Program in progess...") })
    .catch((message) => {
        console.log("program in progress....")
        return setTimeout(() => {
            console.log(message)
        }, 2000)
    })