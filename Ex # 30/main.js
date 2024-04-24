var userName = ["Majid", "Muneer", "Admin", "Ali", "Haseeb"];
userName.forEach(function (user) {
    if (user === "Admin") {
        console.log("Hello ".concat(user, ", would you like to see a status report?"));
    }
    if (user === "Muneer") {
        console.log("Hello ".concat(user, ", thank you bro."));
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging again."));
    }
});
