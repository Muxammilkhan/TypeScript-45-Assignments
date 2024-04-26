
// //Q 21 object
interface item {
    name: string 
    price:number 
}
  //                                        create 2 object
const book: item={
    name: 'Essential typescript'
    price:350
}
const apple:item={
    name:'apple'
    price:150
}
console.log("book name : ".concat(book.name, ",price: $").concat(book.price))
console.log(`book name: ${book.name},price: $${book.price}`)
console.log(`apple name: ${apple.name},price: $${apple.price}`)


// // part 2

interface programmer{
  qualification:string,
  projects : number,
  work : string,
  expertise : string
}
let programmer :programmer = {
  qualification :'ai',
  projects : 50,
  work : 'work from home',
  expertise : 'python'


}

console.log(programmer)