import { gridTravelerTabulated } from ".";

describe("Grid Traveler Tabulated", () => {
	it("Return the highest possible ways we can traverse a grid from point a to b by only moving down and right", () =>
		expect(gridTravelerTabulated(3, 3)).toBe(6));
});
