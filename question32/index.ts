//question 32

//.Make a list of five or more usernames called current_users.
//.Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let  current_users:string[]=["muzammil","ahmed","uzma","ayesha","nabiha"]
for (let index =0;index <  current_users.length; index++)  {
  const currentUsersn = current_users[index];

  let  new_users:string[]=["ali","kamran","mubashir","hassan","waqar"]
for (let index =0; index < new_users.length; index++)  {
const newusers= new_users[index];
if (newusers == currentUsersn) {
      console.log("we need a new user")
}else{
  console.log("you are a new user")
}
}
}