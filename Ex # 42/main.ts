// Define  the function to show magicians names
function show_magician(magician: string[]){
    magician.forEach(name => console.log(name));
}

// Function to make magicians great through .map() it will modify array
function make_great(magician: string[]){
return magician.map(name =>( `\nThe Great ${name}`));
}

// Define an array of magician name
let magician_name = ["Harry potter", "Ghaniya", "Ali"]

// Call Make Great function to modify magician names
let great_magician = make_great(magician_name);

// Call show_magician that show modify list of magicians
show_magician(great_magician);



