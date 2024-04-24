var current_user = ["Majid", "Muneer", "Ali", "Bilal", "Haseeb"];
var new_user = ["zahid", "shahid", "sajid", "Majid", "Bilal"];
new_user.forEach(function (new_one_users) {
    var our_condition = current_user.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_users.toLowerCase(); });
    if (our_condition) {
        console.log("sorry ".concat(new_one_users, " is already taken."));
    }
    else {
        console.log("The username ".concat(new_one_users, ", is available"));
    }
});
