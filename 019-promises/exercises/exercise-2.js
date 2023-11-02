/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Step 1 complete" when the first promise fulfills
    6. Have the first promise return another new Promise that will
       fulfill after 3 seconds with the message: "Step 2 Complete"

    7. Print out the message from the second promise after it
       fulfills ("Step 2 Complete")

    HINT: Use setTimeout for the delay
*/
console.log("program started")
const prom = new Promise((resolve, reject) => {
    let b = 5;
    if (b == 5) {
        resolve('Step 1 completed');
    } else {
        reject("Step 1 failed");
    }
})
prom.then((message) => {
    return setTimeout(() => {
        console.log(message);
    }, 3000);
}).then(() => {
    console.log("program in progress");
}).then(() => {
    return new Promise((resolve, reject) => {
        let c = 6;
        if (c == 6) {
            resolve("step 2 completed");
        } else {
            reject("step 2 failed");
        }
    }).then((message) => {
        return setTimeout(() => {
            console.log(message);
        }, 6000);
    })
})