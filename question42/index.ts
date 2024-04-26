//question 42

//Great Magicians:Add "the great" to magician names.

//array of magicians
let magicians : string [] =['Ali zafar','noor jhan','adat','attaullah khan Esakhelvi','junoon']

// function  for adding the great with array
function great_magicians( magician: string[])
{
//   for each loop for printing arry with the great magicians
  magician.forEach(Element=>{
   console.log(`The Great ${Element}.`)
  })
} 
//printing name magician wth the great
 great_magicians(magicians)

