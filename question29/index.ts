// question 29

// Favorite Fruit: Make a array of your favorite fruits,
//  and then write a series of independent if statements that check for certain fruits in your array.

//  Make a array of your three favorite fruits and call it favorite_fruits.
let fav_Fruite : string[] = ["mango","apple","grapes"];

//  Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (fav_Fruite.includes("mango")){
  console.log('I like mango');
}
if(fav_Fruite.includes("apple")){
  console.log('I love apple');
}
if(fav_Fruite.includes("grapes")){
console.log('Mangoes are my grapes!');
}
if(fav_Fruite.includes('bananas')){
  console.log('I like bananas');
}