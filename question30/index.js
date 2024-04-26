var username = ["muzamil", "ali", "amad", "usman"];
username.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("hello ".concat(oneuser, ", would you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneuser, ", thanks you for logging in again."));
    }
});
