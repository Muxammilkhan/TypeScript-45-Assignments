//  question 43
//  //Unchanged Magicians:preserve the original names while creating  new  Great list
//  saving magicians  
 let magicians: string []=[
"asim azhar",
"Momina khan",
"atif aslam",
"shezad roy",
 ];
 // function to make  great magician 
 function great_magician( magicians: string[]): string[] {
  let  great_magicians:string[]=[];
  magicians.forEach((element)=>{
    great_magicians.push(`Great ${element}`);
  });
  return great_magicians;
 }

 //saving name with great in variable 
 let great_magicians = great_magician(magicians);

//original magicians name 
console.log(magicians);

//name with great 

console.log(great_magicians);