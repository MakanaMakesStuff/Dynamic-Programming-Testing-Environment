import { canSum, canSumMemo } from ".";

describe("Can Sum", () => {
	it("return true if any numbers in the array can be somed to a specified number", () =>
		expect(canSum(7, [5, 3, 4, 7])).toBe(true));
	it("return true if any numbers in the array can be somed to a specified number", () =>
		expect(canSum(7, [5, 3, 4])).toBe(true));
	it("return true if any numbers in the array can be somed to a specified number", () =>
		expect(canSum(7, [5, 3, 3])).toBe(false));
});

describe("Optimized Can Sum", () => {
	it("return true if any numbers in the array can be somed to a specified number", () =>
		expect(canSumMemo(300, [7, 14])).toBe(false));
});
