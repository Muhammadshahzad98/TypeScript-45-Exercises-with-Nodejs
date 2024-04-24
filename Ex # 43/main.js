// Define the function to show magicians names
function Show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Function to make magician great through .map() it will modify array
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
//Define an array of magician names
var magician_name = ["Harry Potter", "Ghaniya", "Ali"];
// Making  a  copy of originl array through .slice() funtions
var copy_magician_name = magician_name.slice();
// Modify the copied Array to include "The Great" with their names
var copy_make_magician = make_great(copy_magician_name);
// Orignal Array
console.log("\nOriginal Array\n");
Show_magician(magician_name);
// Copied
console.log("\nCopied Array\n");
Show_magician(copy_make_magician);
