// question 45
function car_detial(name, brand) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { name: name, brand: brand };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return (car[key] = value);
    });
    return car;
}
console.log(car_detial("toyota", "ES50", ["color", "pink"]));
console.log(car_detial("civi", "E50", ["color", "black"]));
console.log(car_detial("honda", "ES50", ["color", "red"]));
