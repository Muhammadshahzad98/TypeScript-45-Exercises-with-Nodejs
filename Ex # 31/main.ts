let userName = ["Majid", "Muneer", "Admin", "Ali", "Haseeb"];
userName = [];

if(userName.length === 0){
    console.log("we need find some new users")
}
else{
userName.forEach(user =>{
    if(user === "Admin"){
        console.log(`Hello ${user}, would you like to see a status report?`)
    }
    else{
        console.log(`Hello ${user}, thank you for logging again.`)
    } 
                            
})
}