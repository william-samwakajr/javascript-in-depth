/*
    1. Create an array called "points" with the following values:
       [10, 20, 10, 30, 15, 15, 35, 60, 10]

    2. How can you print out all the UNIQUE points inside "points"?
*/
const points = [10, 20, 10, 30, 15, 15, 35, 60, 10];
const pointSet = new Set();
for (let i = 0; i <= points.length - 1; i++) {
    pointSet.add(points[i]);
};

console.log(pointSet);