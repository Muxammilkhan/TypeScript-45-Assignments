//question 44

// sandwiches: summarize sandwish orders with varying ingredients.
// Explain & TIP : utilizing rest parameters allows funnction to accepts and indefinite number of argument, us
// function for maing sandwich
function making_sandwich(...items: string[]){
  console.log(`\nsandwish ingredients :`);
  items.forEach((item )=> {
    console.log(item);
  });
}

making_sandwich("tomato","chease");

making_sandwich("tomato","bread","meat","leamon","bread");

making_sandwich("bread","leamon","meat","bread");
