//question 33

//• Store the numbers 1 through 9 in a array.

//• Loop through the array.

//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.


let ordinalNumber:string[]=["1st","2nd","3rd","4th","5th","6th","7th","8th","9th"]
  for(let index =0; index < ordinalNumber. length;index++){
    const ordinal_number=ordinalNumber [index];

    if (ordinal_number.slice(1,3) =="1st"){
      console.log("1st")
     } else if(ordinal_number.slice(1,3) == "2nd"){
      console.log("2nd")
     }else if(ordinal_number.slice(0,3) == "3rd"){
      console.log("3rd")
     }else if(ordinal_number.slice(0,3) == "4th"){
      console.log("4th")
     }else if(ordinal_number.slice(0,3) == "5th"){
      console.log("5th")
     }else if(ordinal_number.slice(0,3) == "6th"){
      console.log("6th")
     }else if(ordinal_number.slice(0,3) == "7th"){
      console.log("7th")
     }else if(ordinal_number.slice(0,3) == "8th"){
       console.log("7th")
    }else if(ordinal_number.slice(0,3) == "9th"){
      console.log("9th")
    }
  }

