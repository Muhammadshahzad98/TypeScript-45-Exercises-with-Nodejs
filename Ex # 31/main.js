var userName = ["Majid", "Muneer", "Admin", "Ali", "Haseeb"];
userName = [];
if (userName.length === 0) {
    console.log("we need find some new users");
}
else {
    userName.forEach(function (user) {
        if (user === "Admin") {
            console.log("Hello ".concat(user, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging again."));
        }
    });
}
