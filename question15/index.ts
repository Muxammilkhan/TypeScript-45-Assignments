// question 15 guest change the name

let guest_list: string[] = ["ali","ayesha","waqar","harman"]
for(let i=0; i<guest_list.length; i++){
    console.log("Respeted sir/madam "+ guest_list[i] + ',\n We innvited you on dinner tomorrrow.\n\nThank you\n' )
}
let not_person : string = "ayesha"
let new_guest : string = "muzamil"
// change the name
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log("Respeted sir/madam "+ guest_list[i] + ',\n We innvited you on dinner tomorrrow.\n\nThank you\n' )
}
console.log(`Mr. ${not_person} will not coming tomorrow dinner.`)