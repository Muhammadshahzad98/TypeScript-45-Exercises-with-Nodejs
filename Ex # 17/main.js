// creating a guestlist Array
var guestList = ["Ali", "Majid", "Muneer", "Haseeb"];
// Making variable for those guest who can not come
var dontcome = guestList[0];
// print the name of guest who can not come 
console.log(dontcome, "Nhi ahh sakta");
// Add or Remove value from guest list Array
guestList.splice(0, 1, "zain");
// print a massage a bigger dinner table
console.log("Good News! we have foung a bigger dinner table.");
// Adding a new value at starting index of Array
guestList.unshift("Mirza");
// Adding a new value at ending index of Array
guestList.push("Bilal");
// Get a middle index of our guestlist Array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of Array
guestList.splice(middleIndex, 0, "Hassan");
// print Massage of updated list
console.log("Updated list to our Guest");
//sending a invitation massage to our guest one by one with their names
guestList.forEach(function (list) { return console.log("Salam ".concat(list, ", would you like to dinner with me.")); });
//Inform that only two guest invited for dinner
console.log("unfortunately, the new dinner table wont arrive on time, so i can noly two guest to dinner with me.");
// Using while loop to remove guest from the Array until only two guest remain
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry ".concat(removeGuest, ", I cannot invite you to dinner. "));
}
// Sending invitation last two guests on the list
console.log("Invitation to the last two guests");
guestList.forEach(function (guest) { return console.log("Luckily ".concat(guest, ". you are invited to dinner")); });
//Removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List :", guestList);
