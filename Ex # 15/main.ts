let guestList =["Ali", "Majid", "Muneer", "Haseeb"];

let dontcome = guestList[0];

console.log(dontcome, "Nhi ahh sakta");

guestList.splice(0,1, "zain");

guestList.forEach(list => console.log(`salam ${list}, would you like to dinner with me.`));