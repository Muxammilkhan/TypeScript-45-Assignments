//question 44
// sandwiches: summarize sandwish orders with varying ingredients.
// Explain & TIP : utilizing rest parameters allows funnction to accepts and indefinite number of argument, us
// function for maing sandwich
function making_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nsandwish ingredients :");
    items.forEach(function (item) {
        console.log(item);
    });
}
making_sandwich("tomato", "chease");
making_sandwich("tomato", "bread", "meat", "leamon", "bread");
making_sandwich("bread", "leamon", "meat", "bread");
