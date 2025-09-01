import { howSum, howSumMemo } from ".";

describe("How Sum", () => {
	it("return combination of any numbers in the array can be summed to a specified number", () =>
		expect(howSum(7, [2, 3])).toStrictEqual([3, 2, 2]));
});

describe("Optimized How Sum", () => {
	it("return combination of any numbers in the array can be summed to a specified number", () =>
		expect(howSumMemo(300, [7, 14])).toBe(null));
});
