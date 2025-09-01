import { gridTraveler, gridTravelerMemo } from ".";

describe("Un-optimized grid traveler", () => {
	it("Get number of possiblities", () => expect(gridTraveler(2, 3)).toBe(3));
	it("Get number of possiblities", () => expect(gridTraveler(3, 3)).toBe(6));
});

describe("Optimized grid traveler", () => {
	it("Get number of possiblities", () =>
		expect(gridTravelerMemo(2, 3)).toBe(3));
	it("Get number of possiblities", () =>
		expect(gridTravelerMemo(3, 3)).toBe(6));
	it("Get number of possiblities", () =>
		expect(gridTravelerMemo(3, 7)).toBe(28));
	it("Get number of possiblities", () =>
		expect(gridTravelerMemo(25, 30)).toBe(779255311989700));
});
