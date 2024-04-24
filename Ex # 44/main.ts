//Deine a function with a rest parameter that accept items arguments representing our sandwich
function make_sandwich(...items: string[]){

    console.log("\nMaking a Sandwich with the following items:\n");

    items.forEach(single_items => console.log(single_items));

    console.log("\nNow Enjoy the Sandwich.")
}

// Call a function 3 times with 3 different numbers of arguments.
make_sandwich("Bread", "Butter");

make_sandwich("Chicken", "Cheese", "Mayo");

make_sandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");