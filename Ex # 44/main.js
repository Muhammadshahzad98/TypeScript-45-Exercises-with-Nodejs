//Deine a function with a rest parameter that accept items arguments representing our sandwich
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a Sandwich with the following items:\n");
    items.forEach(function (single_items) { return console.log(single_items); });
    console.log("\nNow Enjoy the Sandwich.");
}
// Call a function 3 times with 3 different numbers of arguments.
make_sandwich("Bread", "Butter");
make_sandwich("Chicken", "Cheese", "Mayo");
make_sandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");
