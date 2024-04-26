"use strict";
// question 24 More Conditional Tests
let car = 'subaru';
let age = 25;
let numbers = [1, 2, 3, 4];
// ** string test**
//  test 1: equality (true)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //(case insensitive)
//  test 2: strict equality (false)
console.log("Is car === 'subaru'? I predict false.");
console.log(car === 'subaru'); //false (case-insensitive)
//  test 3: Inequality (true)
console.log("Is car != 'toyota'? I predict true.");
console.log(car != 'toyota'); //true (case-insensitive)
// **Lowercase Funcation  tests***
//  test 5: LOWERCASE CONVERSION (true)
console.log("Is car .tolowercase() =='subaru'? I predict true.");
console.log(car.toLowerCase() == 'subaru'); //true (converted to lowercase)
//  test 6: LOWERCASE CONVERSION (false)
console.log("Is car === car.tolowercase()? I predict false.");
console.log(car === car.toLowerCase()); //false (original value remains uppcase)
// *** numerical test**
// test: 7 enquality(true)
console.log("Is age == 25? I predict true.");
console.log(age == 25); //true
// test 8: Inenquality(false)
console.log("Is age != 29? I predict false.");
console.log(age != 29); //false
// test 9: Gearter then(false)
console.log("Is age > 29? I predict false.");
console.log(age > 29); //false
// test 10: less then and equal(true)
console.log("Is age <= 29? I predict true.");
console.log(age <= 29); //true
// ****Logical operators ()
// test 11: AND operators(true)
console.log("Is age > 20 && age < 30? I predict true.");
console.log(age > 20 || age < 30); //true
// test 12: OR operators(False)
console.log("Is age > 30 && age < 18? I predict false.");
console.log(age > 30 || age < 18); //false
// ******* array test ********
// test 13: in array(true)
console.log("Is 3 in numbers? I predict true.");
console.log(3 in numbers);
// test 14: not in array(true)
console.log("Is 5 not in numbers? I predict false.");
console.log(5 in numbers);
