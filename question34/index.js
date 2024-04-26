// //question 34
//  //For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// //The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence,
// //  such as I really love pizza!
// creating a Array
var pizza = ["chicken tika", "Malai cheese", "Fajita"];
// using for_loop
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onepizza = pizza_1[_i];
    console.log("i like ".concat(onepizza, " pizza"));
}
// print a message outside of the for_loop
console.log("pizza is love");
console.log("iI eat pizza");
