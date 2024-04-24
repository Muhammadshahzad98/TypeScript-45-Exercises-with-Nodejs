let userName = ["Majid", "Muneer", "Admin", "Ali", "Haseeb"]

userName.forEach(user =>{
    if(user === "Admin"){
        console.log(`Hello ${user}, would you like to see a status report?`)
    }
    if(user === "Muneer"){
        console.log(`Hello ${user}, thank you bro.`)
    }
    else{
        console.log(`Hello ${user}, thank you for logging again.`)
    } 
                            
})