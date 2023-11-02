/*
    1. Create an object called "mexico" with the following properties:
        - id -> 24
        - name -> "Mexico"
        - capital -> "Mexico City"
        - neighbours -> ["USA", "Guatemala", "Belize"]

    2. Print out "mexico" to the terminal

    3. Change "id" to be 25

    4. Add "Honduras" to the list of neighbours to "mexico"
    
    5. Print out "mexico" to the terminal again
*/
const mexico = {
    id: 24,
    name: "mexico",
    capital: "mexico city",
    neighbours: [" USA", "Guatamala", "Belize"]
};
console.log(mexico);
mexico.id = 25;
mexico.neighbours[3] = "Honduras";

console.log(mexico);