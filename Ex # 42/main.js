// Define  the function to show magicians names
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through .map() it will modify array
function make_great(magician) {
    return magician.map(function (name) { return ("\nThe Great ".concat(name)); });
}
// Define an array of magician name
var magician_name = ["Harry potter", "Ghaniya", "Ali"];
// Call Make Great function to modify magician names
var great_magician = make_great(magician_name);
// Call show_magician that show modify list of magicians
show_magician(great_magician);
