"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChineseRedEnvelopes_1 = require("../ChineseRedEnvelopes");
test("distributes the exact total amount among participants", () => {
    const amount = 10;
    const people = 5;
    const amountReceived = ChineseRedEnvelopes_1.ChineseRedEnvelopes.distribute(amount, people);
    const totalDistributed = amountReceived.reduce((acc, curr) => acc + curr, 0);
    expect(totalDistributed).toBeCloseTo(amount, 2);
    expect(amountReceived.length).toBe(people);
});
//# sourceMappingURL=ChineseRedEnvelopes.test.js.map