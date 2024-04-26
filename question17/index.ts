// question 17 only two guest / remove guest list / empty task

let guest_list: string[] = ["ali","ayesha","waqar","harman"]
let not_person : string = "ayesha"
let new_guest : string = "muzamil"
guest_list[1] = new_guest;
guest_list.unshift("rizwan","hassan","jamal")
console.log("\n unfortunately we can not arrange big table, only two people allow.")
// while loop for use remove guest_list
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`sorry sir/madam. ${remove_guest} you are not invited for dinner tomorrow.`)
}
for(let i=0; i<guest_list.length; i++){
    console.log("Respeted sir/madam "+ guest_list[i] + ',\n yes you are still invited tomorrow dinner.\n\nThank you\n' )
}

guest_list.splice(0,2)
console.log(guest_list)
