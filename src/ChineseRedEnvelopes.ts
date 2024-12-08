export class ChineseRedEnvelopes {
    static distribute(amount: number, people: number): number[] {
        if (amount <= 0 || people <= 0) {
            throw new Error("Amount and number of people must be more than zero");
        }

        const amountReceived: number[] = [];
        let amountRemaining = amount;

        for (let i = 0; i < people - 1; i++) {
            const IndividualMaxAmount = amountRemaining - (people - i - 1) * 0.5;
            const rawAmount = Math.random() * (IndividualMaxAmount - 0.5) + 0.5;
            const roundedAmount= Math.round(rawAmount * 2) / 2;

            amountReceived.push(roundedAmount);
            amountRemaining -= roundedAmount;
        }

        const finalAllocation = Math.round(amountRemaining * 2) / 2;
        amountReceived.push(finalAllocation);

        return amountReceived;
    }
}
