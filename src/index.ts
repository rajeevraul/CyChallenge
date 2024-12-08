// Class importing method
import { ChineseRedEnvelopes } from "./ChineseRedEnvelopes";

// Defining attributes
const amount = 10;
const people = 5;

// Calling method for amount distribution
const amountReceived = ChineseRedEnvelopes.distribute(amount, people);

// Log the amount to view in console
console.log("Amount Received:", amountReceived);
