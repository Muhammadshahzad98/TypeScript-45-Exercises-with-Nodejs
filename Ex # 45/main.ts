// Define a function to create a car object with optional opion...
function create_car(manufacturer , model , ...options) {
   // Initiate car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    // Add additional optional options to the car objects
    options.forEach(option => {
        let [Key , value] = option.split(":");
        car[Key.trim()] = value.trim();
    });
    return car;
} 

// Call the function to create a car object
let my_car =  create_car("Toyota" , "Corolla", "Color:Black", "Sunroof:True", "Year:2016");

// Print the Variable to ensure all the information is stored correctly in the car object
console.log(my_car);