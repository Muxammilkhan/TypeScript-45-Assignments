//  question 43
//  //Unchanged Magicians:preserve the original names while creating  new  Great list
//  saving magicians  
var magicians = [
    "asim azhar",
    "Momina khan",
    "atif aslam",
    "shezad roy",
];
// function to make  great magician 
function great_magician(magicians) {
    var great_magicians = [];
    magicians.forEach(function (element) {
        great_magicians.push("Great ".concat(element));
    });
    return great_magicians;
}
//saving name with great in variable 
var great_magicians = great_magician(magicians);
//original magicians name 
console.log(magicians);
//name with great 
console.log(great_magicians);
