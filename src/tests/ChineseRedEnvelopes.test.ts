// Importing class for unit testing
import { ChineseRedEnvelopes } from "../ChineseRedEnvelopes";

// Test case 1: Validating exact amount to be distributed to the people
test("Distributes the exact total amount among participants", () => {
    const amount = 10;
    const people = 5;
    const amountReceived = ChineseRedEnvelopes.distribute(amount, people);
    // Calculates total distributed amount
    const totalDistributed = amountReceived.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // Checks that total distributed amount and amount received matches input
    expect(totalDistributed).toBeCloseTo(amount, 2);
    expect(amountReceived.length).toBe(people);
});


// Test case 2: Logging error if invalid input values are found
test("Throws an error if amount or number of people are zero or less", () => {
    // Checks for zero amount, zero people as well as for negative amount
    expect(() => ChineseRedEnvelopes.distribute(0, 5)).toThrow("Amount and number of people must be more than zero");
    expect(() => ChineseRedEnvelopes.distribute(10, 0)).toThrow("Amount and number of people must be more than zero");
    expect(() => ChineseRedEnvelopes.distribute(-10, 5)).toThrow("Amount and number of people must be more than zero");
});

// Test case 3: Validates distribution if only one person is found
test("Handles cases where there is only one participant", () => {
    const amount = 10;
    const people = 1;
    const amountReceived = ChineseRedEnvelopes.distribute(amount, people);

    // Checks that the single person receives the total amount
    expect(amountReceived).toEqual([amount]);
});

// Test case 4: Ensures all participants receive non negative amounts
test("Allocates non negative amounts to all participants", () => {
    const amount = 10;
    const people = 5;
    const amountReceived = ChineseRedEnvelopes.distribute(amount, people);

    // Checks that all participants receive non-negative amounts
    amountReceived.forEach(individualAmount => {
        expect(individualAmount).toBeGreaterThanOrEqual(0);
    });
});

// Test case 5: Validates all distributed amounts are rounded to the nearest $0.5
test("Ensures all distributed amounts are rounded to the nearest $0.5", () => {
    const amount = 10;
    const people = 5;
    const amountReceived = ChineseRedEnvelopes.distribute(amount, people);

    // Checks that distributed amounts are rounded to the nearest $0.5
    amountReceived.forEach(individualAmount => {
        expect(individualAmount % 0.5).toBeCloseTo(0, 2);
    });
});