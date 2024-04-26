"use strict";
// question 15 guest change the name
let guest_list = ["ali", "ayesha", "waqar", "harman"];
for (let i = 0; i < guest_list.length; i++) {
    console.log("Respeted sir/madam " + guest_list[i] + ',\n We innvited you on dinner tomorrrow.\n\nThank you\n');
}
let not_person = "ayesha";
let new_guest = "muzamil";
// change the name
guest_list[1] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log("Respeted sir/madam " + guest_list[i] + ',\n We innvited you on dinner tomorrrow.\n\nThank you\n');
}
console.log(`Mr. ${not_person} will not coming tomorrow dinner.`);
