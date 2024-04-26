"use strict";
// question 19 priting 4 guest
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
let guest_list = ["ali", "ayesha", "waqar", "harman"];
exports.guest_list = guest_list;
for (let i = 0; i < guest_list.length; i++) {
    console.log("Respeted sir/madam " + guest_list[i] + ',\n We innvited you on dinner tomorrrow.\n\nThank you\n');
}
console.log(`priting number of the guest invited`);
console.log(`we had finally invited ${guest_list.length} `);
