// Define a function to create a car object with optional opion...
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Initiate car object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additional optional options to the car objects
    options.forEach(function (option) {
        var _a = option.split(":"), Key = _a[0], value = _a[1];
        car[Key.trim()] = value.trim();
    });
    return car;
}
// Call the function to create a car object
var my_car = create_car("Toyota", "Corolla", "Color:Black", "Sunroof:True", "Year:2016");
// Print the Variable to ensure all the information is stored correctly in the car object
console.log(my_car);
