import { findMedian } from ".";

describe("Find the median value of 2 merged sorted arrays", () => {
	it("Get the median value", () => expect(findMedian([1, 3], [2])).toBe(2));
	it("Get the median value", () =>
		expect(findMedian([1, 3], [2, 4])).toBe(2.5));
	it("Get the median value", () =>
		expect(findMedian([2, 2, 4, 4], [2, 2, 2, 4, 4])).toBe(2));
});
