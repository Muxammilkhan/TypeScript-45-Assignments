// == 	equal to
// === 	equal value and equal type
// != 	not equal
// !== 	not equal value or not equal type
// > 	greater than
// < 	less than
// >= 	greater than or equal to
// <= 	less than or equal to
// ? 	ternary operator








// question 23 Conditional Tests:

let car = 'subaru';
//  test 1: equality comparison(true)
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru') //true

//  test 2: strict equality comparison(true)
console.log("Is car === 'subaru'? I predict True.")
console.log(car === 'subaru') //true

//  test 3: inequality comparison(false)
console.log("Is car != 'subaru'? I predict false.")
console.log(car != 'subaru') //false

//  test 4: strict inequality comparison(false)
console.log("Is car !== 'subaru'? I predict false.")
console.log(car !== 'subaru') //false

//  test 5: Less than comparison(false)
console.log("Is car <'subaru'? I predict false.")
console.log(car < 'subaru') //false (lexicographic comparsion)

//  test 6: Greater than comparison(false)
console.log("Is car >'subaru'? I predict false.")
console.log(car > 'subaru') //false (lexicographic comparsion)

//  test 7: Less than and equal comparison(true)
console.log("Is car <= 'subaru'? I predict true.")
console.log(car <= 'subaru') //true

//  test 8: Greater than and equal comparison(true)
console.log("Is car >= 'subaru'? I predict true.")
console.log(car >= 'subaru') //true

//  test 9: checking truthiness(true)
console.log("Is car ? 'subaru'? I predict true.")
console.log(car) //true (non-empty string is truthy)

//  test 10: checking falsiness(false)
console.log("Is car ? 'subaru'? I predict false.")
console.log(car) //false (negation string is truthy value)


