import { bestSum, bestSumMemo } from ".";

describe("Unoptimized Best Sum", () => {
	it("Return the shortest array of numbers that equate to our provided targetSum", () =>
		expect(bestSum(8, [1, 4, 5])).toStrictEqual([4, 4]));
});

describe("Optimized Best Sum", () => {
	it("Return the shortest array of numbers that equate to our provided targetSum", () =>
		expect(bestSumMemo(100, [1, 2, 5, 25])).toStrictEqual([25, 25, 25, 25]));
});
