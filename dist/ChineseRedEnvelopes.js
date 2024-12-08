"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChineseRedEnvelopes = void 0;
class ChineseRedEnvelopes {
    static distribute(amount, people) {
        if (amount <= 0 || people <= 0) {
            throw new Error("Amount and number of people must be more than zero");
        }
        const amountReceived = [];
        let amountRemaining = amount;
        for (let i = 0; i < people - 1; i++) {
            const IndividualamountReceived = parseFloat((Math.random() * (amountRemaining - (people - i - 1) * 0.01)).toFixed(2));
            amountReceived.push(IndividualamountReceived);
            amountRemaining -= IndividualamountReceived;
        }
        amountReceived.push(parseFloat(amountRemaining.toFixed(2)));
        return amountReceived;
    }
}
exports.ChineseRedEnvelopes = ChineseRedEnvelopes;
//# sourceMappingURL=ChineseRedEnvelopes.js.map