// question 31
// .If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
var userName1 = [
    "Muzammil", "khan", "ali", "ahsan", "muddasir"
];
for (var index = 0; index < userName1.length; index++) {
    var element = userName1[index];
    if (element !== "") {
        console.log("list is not empty");
    }
}
var userName2 = [];
for (var index1 = 0; index1 < 1; index1++) {
    var element1 = userName2[index1];
    if (element1 !== "") {
        console.log("list is not empty");
    }
    else {
        console.log("we need to find some users");
    }
}
