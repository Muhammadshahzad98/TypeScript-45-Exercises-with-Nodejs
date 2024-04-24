// Define the function to show magicians names
function Show_magician(magician: string[]) {
    magician.forEach(name => console.log(name));
}

// Function to make magician great through .map() it will modify array
function make_great(magician: string[]){
   return magician.map(name => `The Great ${name}`)
}

//Define an array of magician names
let magician_name = ["Harry Potter", "Ghaniya", "Ali"];

// Making  a  copy of originl array through .slice() funtions
let copy_magician_name = magician_name.slice();

// Modify the copied Array to include "The Great" with their names
let copy_make_magician = make_great(copy_magician_name);

// Orignal Array
console.log("\nOriginal Array\n")
Show_magician(magician_name);

// Copied
console.log("\nCopied Array\n");
Show_magician(copy_make_magician);

