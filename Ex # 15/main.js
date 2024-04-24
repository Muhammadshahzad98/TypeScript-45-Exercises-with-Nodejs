var guestList = ["Ali", "Majid", "Muneer", "Haseeb"];
var dontcome = guestList[0];
console.log(dontcome, "Nhi ahh sakta");
guestList.splice(0, 1, "zain");
guestList.forEach(function (list) { return console.log("salam ".concat(list, ", would you like to dinner with me.")); });
