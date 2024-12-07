import { ChineseRedEnvelopes } from "../ChineseRedEnvelopes";   

describe("Example add test function", () => {
    it("should correctly add two numbers", () => {
        const result = ChineseRedEnvelopes.amount(6, 3);
        expect(result).toBe(9);
    });

    it("should return 0 when adding 0 and 0", () => {
        const result = ChineseRedEnvelopes.amount(0, 0);
        expect(result).toBe(0);
    });

    it("should correctly add negative numbers", () => {
        const result = ChineseRedEnvelopes.amount(-5, -3);
        expect(result).toBe(-8);
    });
});