/*
    1. Create an object called "myPet" with the following properties:
        - name -> "Sudo"
        - type -> "Dog"
        - breed -> "Poodle"
        - age -> 7
        - friends -> ["Bit", "Byte", "Data"]

    2. Print out "myPet" to the terminal

    3. Add a new property: colour -> "Black"

    4. Change "breed" to be "Beagle"

    5. Remove "Data" from the list of friends for "myPet"
    
    6. Print out "myPet" to the terminal again

    7. Add "Chip" to the list of friends for "myPet"

    8. Print out "myPet" to the terminal again
*/
const myPet = {
    name: "sude",
    type: "Dog",
    breed: "poodle",
    age: 7,
    friends: ["Bit", "Byte", "Data"]
};
console.log(myPet);
myPet.colour = "Black";
myPet.breed = "beagle"
delete myPet.friends[2];
console.log(myPet);
myPet.friends[2] = "Chip";
console.log(myPet);