// Define a function to print each magician name from an array
function show_magician(magician: string[]){
    magician.forEach(name => console.log(name));
}

// Define an array containing magician name
let magician_name = ["Harry Potter", "Ghaniya", "Ali"]

// Call the function to print each magician name
show_magician(magician_name);