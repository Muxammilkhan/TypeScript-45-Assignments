//question 41
//   Magicians: display Magiciansnames from array.
// array of magicians[], 
var Magicians = ['Ali zafar', 'noor jhan', 'adat', 'attaullah khan Esakhelvi', 'junoon'];
// function for print magicians list
function print_magician(Magicians) {
    // for each loop of arry of magician
    Magicians.forEach(function (Element) {
        console.log(Element);
    });
}
console.log("list of magician");
// calling print magician function 
print_magician(Magicians);
