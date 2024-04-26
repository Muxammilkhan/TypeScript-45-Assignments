//question 42
//Great Magicians:Add "the great" to magician names.
//array of magicians
var magicians = ['Ali zafar', 'noor jhan', 'adat', 'attaullah khan Esakhelvi', 'junoon'];
// function  for adding the great with array
function great_magicians(magician) {
    //   for each loop for printing arry with the great magicians
    magician.forEach(function (Element) {
        console.log("The Great ".concat(Element, "."));
    });
}
//printing name magician wth the great
great_magicians(magicians);
