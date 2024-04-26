let username = ["muzamil","ali","amad","usman"]

username.forEach(oneuser =>{
     if(oneuser === "Admin"){
        console.log(`hello ${oneuser}, would you like to see a status report?`)
     }
     else{
        console.log(`hello ${oneuser}, thanks you for logging in again.`)
     }
})