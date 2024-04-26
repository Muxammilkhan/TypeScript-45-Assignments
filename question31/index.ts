// question 31
// .If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.


let  userName1:string[]=[
  "Muzammil","khan","ali","ahsan","muddasir"]
for(let index = 0;index <userName1.length; index++){
  const element =userName1[index];
  if (element !==""){
    console.log("list is not empty") 
   }
}

let userName2:string[]=[]

for (let index1 = 0; index1<1; index1++) {
  const element1 = userName2[index1]
  if(element1!==""){
    console.log("list is not empty")
  }else{
     console.log ("we need to find some users") 
     }
}