import { ChineseRedEnvelopes } from "./ChineseRedEnvelopes";

const amount = 10;
const people = 5;

const amountReceived = ChineseRedEnvelopes.distribute(amount, people);

console.log("Amount Received:", amountReceived);
