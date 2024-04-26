// question 45

function car_detial(name : string, brand : string, ... options: [string,any][]){
   let car = {name,brand};
   options.forEach(([key, value]) => (car[key] = value));  
   return car;
} 

console.log(car_detial("toyota" ,"ES50",["color","pink"]))
console.log(car_detial("civi" ,"E50",["color","black"]))
console.log(car_detial("honda" ,"ES50",["color","red"]))