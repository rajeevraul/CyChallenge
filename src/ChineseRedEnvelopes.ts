export class ChineseRedEnvelopes {
    static distribute(amount: number, people: number): number[] {
        // Input validation
        if (amount <= 0 || people <= 0) {
            throw new Error("Amount and number of people must be more than zero");
        }

        // Array to hold amount
        const amountReceived: number[] = [];
        // Tracks remaining amount 
        let amountRemaining = amount;

        // Distribution of all people except the last
        for (let i = 0; i < people - 1; i++) {

            // Maximum amount given to a person
            const IndividualMaxAmount = amountRemaining - (people - i - 1) * 0.5;

            // Generates and rounds amount to the nearest $0.5 given to the person
            const rawAmount = Math.random() * (IndividualMaxAmount);
            const roundedAmount= Math.round(rawAmount * 2) / 2;

            // Add rounded amount to given person
            amountReceived.push(roundedAmount);

            // Minuses off amount from remainder
            amountRemaining -= roundedAmount;
        }

        // Gives final reaminder to last person
        const finalAllocation = Math.round(amountRemaining * 2) / 2;
        amountReceived.push(finalAllocation);

        // Return amoount array 
        return amountReceived;
    }
}
