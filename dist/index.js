"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Class importing method
const ChineseRedEnvelopes_1 = require("./ChineseRedEnvelopes");
// Defining attributes
const amount = 10;
const people = 5;
// Calling method for amount distribution
const amountReceived = ChineseRedEnvelopes_1.ChineseRedEnvelopes.distribute(amount, people);
// Log the amount to view in console
console.log("Amount Received:", amountReceived);
//# sourceMappingURL=index.js.map