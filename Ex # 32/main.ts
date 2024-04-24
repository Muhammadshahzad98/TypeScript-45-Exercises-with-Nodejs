let current_user = ["Majid", "Muneer", "Ali", "Bilal", "Haseeb"];

let new_user = ["zahid", "shahid", "sajid", "Majid", "Bilal"];

new_user.forEach(new_one_users => {
    let our_condition = current_user.some(current_one_users => current_one_users.toLowerCase() === new_one_users.toLowerCase())
    if(our_condition){
            console.log(`sorry ${new_one_users} is already taken.`);
    }else{
        console.log(`The username ${new_one_users}, is available`);
    }
})