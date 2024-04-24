// Define variables
let apple = "apple";
let upperCaseapple = "Apple";
let ten = 10;
let twenty = 20;
let fruits = ["Apple", "Mango", "Banana"];

// Test for equality and inequality with strings.
console.log(" Is apple is equal to apple");
console.log(apple == "apple");

console.log(" Is apple is not equal to apple");
console.log( apple != "apple");

console.log(" Is Apple is not equal to Apple");
console.log(apple != "Apple");

// Test using LowerCase Function
console.log(" \n Is Apple is equal t apple after convering to LowerCase?");
console.log(upperCaseapple.toLowerCase() == "apple");

console.log("\n Is Apple is not equal to apple after converting to lowerCase?");
console.log(upperCaseapple.toLowerCase() != "apple");

//Numerical Tests
console.log("\n Is ten is equal to twenty");
console.log(10 == twenty);

console.log("\n Is ten is not equal to twenty");
console.log(ten != twenty);

console.log("\n Is ten is greater than 0");
console.log( ten > 0 );

//Less than
console.log("\n Is twenty is lesss than ten");
console.log(20 < 10);

//Greater than or equal to
console.log("\n Is ten is greater than to or equal to 5");
console.log(ten >= 5);

//Less than or equal to
console.log("\n Is twenty less than or equal to 10");
console.log(20 <= 10);

//Test using "and" & "or" operators
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && 20 > 10);

//using && (and)
// using || (OR)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
    
console.log("\n Is 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

//Test whether an item is include in array
console.log("\n Is orange include in my fruits array");
console.log(fruits.includes("orange"));

// Not Include
console.log("\n Is orange not include in my Fruit Array");
console.log(!fruits.includes("orange"));
