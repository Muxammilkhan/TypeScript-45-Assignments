


// question 16 more 3 guest

let guest_list: string[] = ["ali","ayesha","waqar","harman"]
for(let i=0; i<guest_list.length; i++){
    console.log("Respeted sir/madam "+ guest_list[i] + ',\n We innvited you on dinner tomorrrow.\n\nThank you\n' )
}
let not_person : string = "ayesha"
let new_guest : string = "muzamil"
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log("Respeted sir/madam "+ guest_list[i] + ',\n We innvited you on dinner tomorrrow.\n\nThank you\n' )
}
guest_list.unshift("rizwan")
for(let i=0; i<guest_list.length; i++){
    console.log("Respeted sir/madam "+ guest_list[i] + ',\n We innvited you on dinner tomorrrow. We found big table so we decide to invite more 3 guest.\n\nThank you\n' )
}